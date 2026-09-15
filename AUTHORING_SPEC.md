# AUTHORING SPEC — "BISA Exam Guide" book chapters

You are writing ONE chapter of a printed-book-style exam preparation guide. The reader is a
student at Goa Institute of Management preparing for the BIFS "Introduction to Python" exam
The exam will be **based on the exercises in
`/Volumes/rythmn103/code/bisa_guide/Exercises/`** — but with changed datasets, changed column
names, changed thresholds and re-worded questions.

## The reader's workflow (design everything around this)

1. Reader sees an exam question.
2. Reader scans the **Exam phrasings** lists in this book and finds the matching Pattern.
3. Reader reads the Pattern's **Template**, substitutes their own column names, and writes the answer.
4. Reader must NOT have to think about syntax, and must NOT be surprised by a variant.

So: your chapter is a lookup table of solvable patterns, not a tutorial essay.

## Non-negotiable rules

1. **RUN EVERY CODE BLOCK BEFORE YOU PUBLISH IT.** Use `python3` (3.9.6, pandas 2.3.3,
   matplotlib available) via the Bash tool against the real files in `Exercises/`. Paste the
   REAL output. Never invent output. If a snippet errors, fix it until it runs.
2. **Cover every variant, not just the asked question.** For each pattern ask: what else could
   the examiner ask with the same underlying skill? Different column? Descending instead of
   ascending? Multiple keys? Missing values present? Include the code for those too.
3. **Dense and practical.** No filler, no motivational text, no "in this chapter we will
   learn". No emoji. Short sentences. The reader is short on time.
4. **Every pattern must be answerable by copy-paste-and-rename.** Templates use obvious
   placeholder names (`df`, `COL`, `VALUE`, `GROUP_COL`) so substitution is mechanical.
5. **Write plain Markdown (GitHub-flavoured).** No JSX, no MDX, no HTML except `<details>`
   blocks (allowed and encouraged for drill answers). Fenced code blocks must be tagged
   ```python / ```text / ```yaml etc.
6. Do not use the `Agent` tool. Do the work yourself.

## Output location

Write exactly one file: `/Volumes/rythmn103/code/bisa_guide/book/content/<id>.md`
where `<id>` is given in your task. Do not create any other files. Do not modify other
chapters. Scratch scripts go in the scratchpad dir, not in the project.

## Frontmatter (exact schema — this is parsed by the app, so keep it valid YAML)

```yaml
---
id: 07-selection
part: "Part IV — Selection & Ordering"
title: "Selecting, Slicing and Sorting Rows"
blurb: "One-sentence description shown on the contents page."
order: 70
covers:
  - "Session 13 — Exercises 67–80"
  - "03 Sorting and slicing in Pandas — Exercises 1–3"
datafiles:
  - "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
patterns:
  - id: P7.1
    title: "Select one row by its index label"
    phrasings:
      - "select the row with label ST101 using loc"
      - "display the record of customer C007"
      - "show the loan with LoanID 11015"
  - id: P7.2
    title: "..."
    phrasings:
      - "..."
---
```

Rules for frontmatter:
- `id`, `part`, `title`, `blurb`, `order` are required. Use the exact values given in your task.
- Every `##` Pattern heading in the body MUST have a matching entry in `patterns`, same id, same title.
- `phrasings` = 3 to 8 realistic exam wordings, quoted. Include the original exercise wording
  where one exists (copy it verbatim from the PDF text) plus paraphrases an examiner would use.
  These strings power the book's search box, so make them keyword-rich.
- Keep YAML simple: two-space indent, quote every string that contains `:`, `#`, `'`, `"` or `,`.

## Body structure

Start with a short `## Chapter map` section: a GFM table of the patterns in the chapter
(`| Pattern | Use it when |`), then one `## Pattern` section each.

### Required shape of every pattern section

```markdown
## P7.3 — Label-slice rows and columns together

**Exam phrasings**

- "slice students with roll numbers 25 through 40, showing columns from Name to Total"
- "display records from ST103 to ST107 for columns Name through City"

**Core idea.** `.loc[rows, cols]` takes labels on both axes and the stop label is INCLUDED.

**Template**

```python
df.loc[ROW_START:ROW_STOP, COL_START:COL_STOP]
```

**Worked**

```python
import pandas as pd
W = "/Volumes/rythmn103/code/bisa_guide/Exercises/Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
df = pd.read_excel(W, sheet_name="Indexed_Data").set_index("Student_ID")
print(df.loc["ST103":"ST107", "Name":"City"])
```

```text
                   Name  Age       City
Student_ID
ST103       Ishaan Verma   28  Ahmedabad
...
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "all rows, columns Name to Score" | `df.loc[:, "Name":"Score"]` |
| "by position instead of label" | `df.iloc[2:7, 0:3]` — stop is EXCLUDED |
| "only these three columns" | `df.loc["ST103":"ST107", ["Name","Age","City"]]` |

**Traps**

- `.loc` includes the stop label; `.iloc` excludes the stop position. Say this in your exam answer — marks are given for it.
- Label slicing needs a sorted/unique index or you get `KeyError`.

**Drill**

1. Show rows E002–E005, columns Name to Age, from `Sorting_Data`.

<details><summary>Answer</summary>

```python
df = pd.read_excel(W, sheet_name="Sorting_Data").set_index("Employee_ID")
df.loc["E002":"E005", "Name":"Age"]
```

</details>
```

Every section needs: Exam phrasings, Core idea, Template, Worked (with real output),
Variants table, Traps. `Drill` is required except where it makes no sense.

### Extra sections you should add where relevant

- **`## Write-up answers`** — when the exercise asks a *discussion* question ("Discuss: what
  would happen if missing Prices were filled with 0?"), give a model 3–5 sentence written
  answer the reader can reproduce. These carry marks.
- **`## Full solution`** — for capstone chapters, one continuous runnable script answering the
  whole case in order, with the question number as a comment before each block.
- **`## Chapter cheat sheet`** — end every chapter with a compact table or code block that
  fits on one page and summarises every command in the chapter.

## House style

- Refer to data files by short name after defining the base path once per chapter:
  ```python
  BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
  ```
  Add one line noting the reader should swap in their own path in the exam.
- Prefer `print(...)` in worked examples so the pasted output is unambiguous.
- Truncate long outputs sensibly with a `# ... (rows omitted)` comment, but never fake numbers.
- When a pandas version issue exists, say it plainly (pandas 2.x vs 3.x, chained assignment,
  `fillna(method=...)` removal, `astype` + `inplace`).
- Bold the thing the reader must change. Use tables aggressively — they scan better than prose.
- Use they/them if you ever refer to a person.

## Known defects in the source exercises (mention where they touch your chapter)

- `03 Sorting and slicing/Exercise 1` prose names columns `City` and `Revenue` and IDs
  `1010–1020`; the CSV actually has `Branch`, `DisbursedAmount`, and LoanIDs `11001–11200`.
  Teach the corrected reading AND tell the reader how to spot/handle such drift in an exam.
- `03 .../Exercise 2` prose says `Score1..Score3` and `Total`; file has
  `Pick1_Score..Pick3_Score` and `TotalScore`.
- `Integrated exercises/Case 2` Q11 (`Credit_Rating == "AAA"` and `Current_Value > 400000`)
  returns ZERO rows — the portfolio maximum is 246,148. Show the empty result, explain why,
  and give the sensible fixed threshold.
- `FrequencyDistrib.ipynb` reports `idxmax()` winners where the counts are exact ties
  (Loan_Type 10/10/10, Branch 10/10/10). Teach tie-safe reporting.
- `01 Basics/Exercise 1` documents dates as `YYYY-MM-DD` but the CSV holds `DD-MM-YYYY`
  (`01-07-2025`) — needs `dayfirst=True`.
- The four Matplotlib CSVs are random noise (all |r| < 0.13), and `credit_card_usage.csv` has
  no `Age Group` column despite the question asking to group by it — the reader must bin `Age`.
- Frequency-distribution bin edges: the demo notebook uses `right=False`; the practice PDFs
  never state closure, and several values sit exactly on bin boundaries. Teach both
  conventions and how to state your assumption.

## Reporting back

When done, reply with: the file you wrote, the list of pattern ids, a count of code blocks you
executed, and any place where the source exercise is impossible/ambiguous as written.
