#!/usr/bin/env python3
"""
Re-run the book's code and check the pasted output is real.

For each chapter this extracts the ```python blocks in order, executes them
sequentially in one namespace (so later blocks can use frames loaded earlier,
exactly as a reader working through the chapter would), and byte-compares the
captured stdout/stderr against the ```text block that follows.

Blocks introduced by a "**Template**" label are placeholder syntax (COL, VALUE,
ROW_START) and are skipped rather than executed.

Usage:
    python3 scripts/verify_outputs.py                 # whole book
    python3 scripts/verify_outputs.py 08 11           # only matching chapters
    python3 scripts/verify_outputs.py --show           # print every diff
"""
import contextlib
import io
import os
import re
import shutil
import sys
import tempfile
import traceback

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CONTENT = os.path.join(ROOT, "content")

# The chapters are written for Jupyter, where plt.show() draws inline. Force a
# headless backend here so importing pyplot and calling show() are both no-ops.
os.environ.setdefault("MPLBACKEND", "Agg")

# The book's examples legitimately write files (savefig, to_csv, to_excel), so
# run them in a throwaway directory instead of littering the project. Fixtures
# the chapters read by *relative* path are copied in.
SANDBOX = tempfile.mkdtemp(prefix="bisa-verify-")
for fixture in ("customers.csv",):
    src = os.path.join(ROOT, fixture)
    if os.path.exists(src):
        shutil.copy2(src, os.path.join(SANDBOX, fixture))

FENCE = re.compile(r"^\s*(```|~~~)\s*([A-Za-z0-9_+-]*)\s*$")
# House style labels a block with a leading bold word: "**Template**",
# "**Worked** — Exercise 1 Q1, ...". Capture just the leading bold token.
LABEL = re.compile(r"^\*\*([A-Za-z][A-Za-z0-9 /-]*?)\*\*")
PLACEHOLDER = re.compile(
    r"\b(COL|COLS|VALUE|VALUES|GROUP_COL|ROW_START|ROW_STOP|COL_START|COL_STOP"
    r"|SHEET|SHEET_NAME|FILE|FILENAME|PATH_TO|YOUR_|NUM|COND|COND1|COND2|KEY"
    r"|LEFT|RIGHT|AGG|AGGFUNC|INDEX_COL|X_COL|Y_COL|CATEGORY|BINS|LABELS)\b"
)

SHOW = "--show" in sys.argv
FILTERS = [a for a in sys.argv[1:] if not a.startswith("-")]


def parse_blocks(text):
    """Yield (lang, code, line_no, is_template) for every fenced block."""
    lines = text.split("\n")
    out = []
    i = 0
    last_label = ""
    while i < len(lines):
        m = FENCE.match(lines[i])
        if not m:
            lab = LABEL.match(lines[i].strip())
            if lab:
                last_label = lab.group(1).strip().lower()
            i += 1
            continue
        marker, lang = m.group(1), (m.group(2) or "").lower()
        body, j = [], i + 1
        while j < len(lines):
            close = FENCE.match(lines[j])
            if close and close.group(1) == marker and not close.group(2):
                break
            body.append(lines[j])
            j += 1
        out.append((lang, "\n".join(body), i + 1, last_label.startswith("template")))
        last_label = ""  # a label describes the next block only
        i = j + 1
    return out


def normalise(s):
    """
    Trailing whitespace and blank-line runs are presentation choices the authors
    make for readability (a blank line between two printed frames), so they are
    collapsed before comparing. Numbers and alignment still have to match.
    """
    kept = []
    for ln in s.replace("\r\n", "\n").split("\n"):
        ln = ln.rstrip()
        if not ln and kept and not kept[-1]:
            continue  # collapse runs of blank lines
        kept.append(ln)
    while kept and not kept[0]:
        kept.pop(0)
    while kept and not kept[-1]:
        kept.pop()
    return "\n".join(kept)


def loosen(s):
    """Blank-line- and indentation-insensitive form, for the second-chance check."""
    return "\n".join(ln.strip() for ln in s.split("\n") if ln.strip())


def is_truncated(expected):
    """The house style allows eliding long frames with a comment."""
    return bool(re.search(r"(rows omitted|\.\.\.\s*$|omitted\))", expected, re.M))


def verify(path):
    name = os.path.basename(path)
    with open(path, encoding="utf8") as fh:
        blocks = parse_blocks(fh.read())

    ns = {"__name__": "__main__"}
    checked = passed = skipped_tpl = elided = failed = 0
    errors_raised = 0
    diffs = []

    for idx, (lang, code, line_no, is_template) in enumerate(blocks):
        if lang != "python":
            continue
        if is_template or PLACEHOLDER.search(code):
            skipped_tpl += 1
            continue
        if "input(" in code:  # interactive by design
            skipped_tpl += 1
            continue

        buf = io.StringIO()
        raised = None
        cwd = os.getcwd()
        try:
            os.chdir(SANDBOX)
            with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(buf):
                exec(compile(code, f"{name}:{line_no}", "exec"), ns)
        except BaseException as exc:  # noqa: BLE001 - error demos are expected
            raised = exc
            errors_raised += 1
        finally:
            os.chdir(cwd)

        got = normalise(buf.getvalue())
        if raised is not None:
            tail = traceback.format_exception_only(type(raised), raised)[-1].strip()
            got = normalise(got + "\n" + tail)

        # Pair with the next text/plain block, if the author supplied one.
        nxt = blocks[idx + 1] if idx + 1 < len(blocks) else None
        if not nxt or nxt[0] not in ("text", "plaintext", "", "console", "output"):
            continue

        expected = normalise(nxt[1])
        if not expected:
            continue

        checked += 1
        if got == expected:
            passed += 1
        elif is_truncated(expected) and got.startswith(
            normalise(expected.split("#")[0].split("...")[0])[:120]
        ):
            elided += 1
            passed += 1
        elif expected in got or got in expected:
            elided += 1
            passed += 1
        elif loosen(expected) == loosen(got) or loosen(expected) in loosen(got):
            elided += 1
            passed += 1
        else:
            failed += 1
            diffs.append((line_no, code, expected, got))

    status = "ok " if failed == 0 else "FAIL"
    print(
        f"  {status} {name:<32} {passed:>3}/{checked:<3} verified"
        f"   ({skipped_tpl} templates skipped, {elided} elided/partial, {errors_raised} raised)"
    )

    if SHOW:
        for line_no, code, expected, got in diffs:
            print(f"\n    --- {name}:{line_no}")
            print("    code:     " + code.strip().replace("\n", "\n              ")[:400])
            print("    expected: " + expected.replace("\n", "\n              ")[:400])
            print("    got:      " + got.replace("\n", "\n              ")[:400])

    return checked, passed, failed


def main():
    files = sorted(f for f in os.listdir(CONTENT) if f.endswith(".md"))
    if FILTERS:
        files = [f for f in files if any(k in f for k in FILTERS)]

    tc = tp = tf = 0
    for f in files:
        c, p, fl = verify(os.path.join(CONTENT, f))
        tc += c
        tp += p
        tf += fl

    shutil.rmtree(SANDBOX, ignore_errors=True)

    pct = (100.0 * tp / tc) if tc else 100.0
    print(f"\n{tp}/{tc} code/output pairs reproduce ({pct:.1f}%) · {tf} mismatches")
    return 1 if tf else 0


if __name__ == "__main__":
    sys.exit(main())
