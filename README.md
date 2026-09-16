# BISA Exam Guide

A book-style web app: an exam-preparation guide for an introductory Python / pandas / Matplotlib
course. Every exercise in the course bank is reduced to a reusable **pattern**, generalised to the
forms an examiner can ask, and answered with code that was executed against the real data files
before being published.

16 chapters · 231 patterns · ~242,000 words · 69 rendered figures · 1,100+ pages as a PDF.

**Companion site:** [bisa-exercise-answers](https://github.com/rythmn1111/bisa-exercise-answers)
— the same exercise bank as a flat question-and-answer list (330 questions), for when you want the
answer rather than the explanation.

## Provenance and intended use

This is a **student's study guide**, written for personal exam revision.

- The exercise questions it works through were set by the course instructor. Their wording is
  quoted only where needed to identify which pattern solves which question; the analysis, code,
  explanations and mock papers are this repository's own work.
- The instructor's original PDFs and data files are **not** included here. The chapters reference
  them by path under `../Exercises/`, which is expected to sit outside this repository. Without it
  the site still builds and reads fine — only the verification scripts, which re-execute the code
  against the real data, need those files.
- The four mock papers are original, written in the style of the course's own questions. They are
  practice material, not leaked or reproduced assessments.

If you are the course instructor and would like anything here changed or taken down, please open
an issue.

## Run it

```bash
bun install
bun run dev          # http://localhost:3210
```

```bash
bun run build && bun run start    # production
```

## Download the whole book as a PDF

Three ways, all producing the same A4 book with running headers and page numbers:

1. **In the app** — click **Download PDF** in the header. It calls `/api/pdf`, which renders the
   single-page `/print` route in headless Chrome and streams back the file. If no Chrome is found
   it falls back to opening `/print?autoprint=1` and your browser's own print dialog.
2. **From the CLI** — `bun run pdf` (builds and serves automatically if needed):
   ```bash
   bun run pdf                              # -> ./BISA-Exam-Guide.pdf
   bun run pdf --out ~/Desktop/guide.pdf
   bun run pdf --url http://localhost:3210  # use a server that is already running
   ```
3. **Manually** — open `/print` and print to PDF.

Chrome is located automatically (macOS Chrome/Chromium/Brave/Edge, or `/usr/bin/google-chrome`).
Override with `CHROME_PATH=/path/to/chrome`.

## Layout

```
book/
  app/
    page.js              cover + contents
    ch/[slug]/page.js    one chapter
    patterns/page.js     the pattern index (auto-generated from frontmatter)
    print/page.js        the entire book on one page, print CSS applied
    api/pdf/route.js     headless-Chrome PDF renderer
    globals.css          screen + print styling
  components/            TopBar, Sidebar, Search, PdfButton, AutoPrint
  lib/content.js         reads content/*.md, parses frontmatter, renders Markdown
  content/*.md           the book itself — one file per chapter
  public/figures/*.png   rendered Matplotlib answers
  scripts/
    validate-content.mjs structural checks on every chapter
    check-paths.mjs      resolves every data path and sheet name
    verify_outputs.py    re-executes the book's code, diffs the output
    build-pdf.mjs        CLI PDF build
  AUTHORING_SPEC.md      the contract every chapter file follows
  customers.csv          fixture — chapter 05 demonstrates a *relative* read
                         (`pd.read_csv("customers.csv")`), so a copy has to sit
                         here for that snippet to actually run. Not debris.
```

`bun run verify` executes the book's own `savefig()` / `to_csv()` / `to_excel()` examples, so it
runs them in a throwaway temp directory and copies `customers.csv` in as a fixture. Nothing is
written into the project.

## Adding or editing a chapter

Chapters are plain GitHub-flavoured Markdown with YAML frontmatter. `AUTHORING_SPEC.md` is the
full contract; the short version:

```yaml
---
id: 08-loc-iloc-sorting          # must match the filename stem
part: "Part III — Selection, Ordering, Reshaping"
title: "loc, iloc, Slicing and Sorting"
blurb: "One line for the contents page."
order: 80                        # reading order, must be unique
covers: ["Session 13 — Exercises 67–80"]
patterns:
  - id: P8.1
    title: "Select one row by its index label"
    phrasings:                   # these power the search box
      - "select the row with label ST101 using loc"
      - "show the loan with LoanID 11015"
---
```

Every `## P8.1 — Title` heading in the body must have a matching `patterns:` entry, and each
pattern section carries **Exam phrasings → Core idea → Template → Worked (with real output) →
Variants → Traps → Drill**.

The `phrasings` lists are the point of the whole book: the reader pastes an exam question into the
search box and lands on the pattern that solves it.

Check your work before building:

```bash
bun run check     # structure + data paths
bun run verify    # re-runs the book's code and diffs the pasted output
```

- `validate-content.mjs` — frontmatter validity, unique `order`, pattern/heading agreement,
  balanced code fences, non-ragged tables, and that every referenced `/figures/*.png` exists.
  Pass `--strict` to fail on warnings too.
- `check-paths.mjs` — resolves every `Exercises/...` reference and every `read_excel(sheet_name=…)`
  against the real data files. Currently **0 problems** across 224 file references and 212 sheet
  names.
- `verify_outputs.py` — extracts the ` ```python ` blocks per chapter, executes them in order in
  one namespace, and byte-compares stdout against the following ` ```text ` block. Currently
  **931 of 1,032 code/output pairs (90.2%) reproduce**.

  Blocks labelled `**Template**` hold placeholders (`COL`, `VALUE`) and are skipped. The residual
  mismatches are mostly harness limitations rather than content errors: chapters that reuse a
  variable name across cases (`W` for two different workbooks), intentional error demos where only
  the final exception line is pasted, and long frames deliberately elided with a
  `# ... (rows omitted)` comment. Run `bun run verify -- --show` to inspect the diffs, or
  `python3 scripts/verify_outputs.py 09 --show` for one chapter.

## Conventions in the content

- Code is run with `python3` (3.9.6, pandas 2.3.3) against `../Exercises/`; pasted output is real.
- ` ```python ` blocks are input, ` ```text ` blocks are output — the styling distinguishes them.
- Chapters define the data path once as `BASE = "…/Exercises/"` and use short names after.
- Where the source exercises are wrong or ambiguous (mismatched column names, unreachable filter
  thresholds, unstated bin conventions, `idxmax()` over exact ties), the chapter says so and
  teaches the reader what to write in the exam. Chapter 15 collects all of these.
