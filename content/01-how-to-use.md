---
id: 01-how-to-use
part: "Part 0 — Orientation"
title: "What You Are Being Examined On"
blurb: "The exercise bank mapped, the two halves of the syllabus, and the six lines to type before answering anything."
order: 10
covers:
  - "All 58 source files"
datafiles:
  - "Exercises/ (entire folder)"
patterns:
  - id: P1.1
    title: "The universal opening block"
    phrasings:
      - "load the dataset and display the first 5 and last 5 rows"
      - "read the sheet into a DataFrame and display it"
      - "import and inspect the datasets"
      - "read both sheets into separate DataFrames"
  - id: P1.2
    title: "Route a question to the right technique"
    phrasings:
      - "which function should I use"
      - "what is this question asking for"
      - "display show list count identify filter extract"
  - id: P1.3
    title: "Handle a question whose wording does not match the data"
    phrasings:
      - "columns from City to Revenue"
      - "show loans from LoanID 1010 to 1020"
      - "the column named in the question does not exist"
      - "Score1 through Score3"
  - id: P1.4
    title: "State an assumption so an examiner cannot penalise you"
    phrasings:
      - "the question does not say whether the interval is inclusive"
      - "the class intervals overlap at the boundary"
      - "ambiguous wording in the question"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| P1.1 | Any question that starts with "read", "load", "import and inspect" |
| P1.2 | You have read the question and do not yet know which tool it wants |
| P1.3 | The question names a column that is not in the file |
| P1.4 | The question is ambiguous and you must protect the marks |

## What is actually in the exercise bank

Everything in this book comes from `Exercises/` — 58 files: 25 question PDFs, 18 CSV/TSV data
files, 14 Excel workbooks, and exactly one worked solution notebook. Here is the whole thing,
because knowing the shape of the bank tells you the shape of the paper.

| Folder | What it drills | Questions | Data |
| --- | --- | --- | --- |
| `Pandas exercises/Class exercises` | Session 13: I/O, inspection, missing values, `loc`/`iloc`, pivot | **89 numbered drills** | `Pandas_Session13_Practice_Data.xlsx` — 11 purpose-built sheets |
| `Pandas exercises/01 Basics` | Inspect, select, filter, first look at missing values | 32 | 3 tiny files (12 rows) |
| `Pandas exercises/02 Missing values` | Drop vs fill, ffill/bfill, plus **written discussion answers** | 13 | 3 tiny files (5–10 rows) |
| `Pandas exercises/03 Sorting and slicing` | `loc`/`iloc`, date-index slicing, multi-key sorting | 19 | 200-row loans, 120-row portfolios, 60-day stock |
| `Pandas exercises/04 Sorting, slicing and pivot` | Part A selection, Part B `pivot_table` | 47 | 85-row trade blotter, 80-row loan book, 70-row MF ledger |
| `Concat merge join exercises` | `concat`, `merge`, `join` — including many-to-many | 10 | One workbook, 22 paired sheets `E1_A`…`E10_D` |
| `Frequency distribution` | `value_counts`, `pd.cut`, `crosstab` — one 9-question template, four times | 36 | 30–40 row workbooks |
| `Matplotlib` | Histogram, bar, scatter, box, pie — the same 5 questions, four times | 20 | 4 × 100-row CSVs |
| `Integrated exercises` | Three capstones + the real midterm paper + 10 core-Python drills | 51 + 3 | 1,022-row OHLCV sheets, 120 bond holdings, 150 claims |

Two things follow from that table, and they drive this whole book.

**One: the bank repeats itself on purpose.** The frequency-distribution topic is one 9-question
template applied to four datasets. The Matplotlib topic is five questions applied to four
datasets. The `04` folder is the same 16 questions applied to three datasets. When an examiner
reuses a template four times in the practice material, the exam question is that template on a
fifth dataset. That is why this book is organised by *pattern* rather than by exercise — you are
not memorising 300 answers, you are memorising about 120 patterns and their variants.

**Two: only one exercise in the entire bank ships a worked solution.** That is
`Frequency distribution/Demo case/FrequencyDistrib.ipynb`. It matters more than its size
suggests, because it is the only direct evidence of the *style* the examiner writes in — comment
banners, `print()` headers, `right=False` on `pd.cut`. Chapter 11 reproduces that style
deliberately.

## The two halves of the syllabus

The paper splits cleanly, and the two halves need completely different preparation.

| | Pre-midterm | Post-midterm |
| --- | --- | --- |
| **Content** | Core Python: data structures, loops, conditionals, functions, strings | Pandas and Matplotlib |
| **Evidence** | `Integrated exercises/BIFS 2026-27 ITP MT QP.pdf` (the real paper) and `Exercises to practice pre-midterm portion.pdf` (10 drills) | Everything else |
| **Question shape** | Write a program from scratch in a notebook | Answer 10–20 short questions against a supplied data file |
| **Marks come from** | Comments, docstrings, a Markdown cell, 2-decimal formatting, code that survives changed input | Correct method, correct parameters, printing the result, one interpretation sentence |
| **Covered by** | Chapters 02, 03, 04 | Chapters 05–14 |

The real midterm paper is 50 marks in three questions: a 10-mark written design critique
(which container should the analyst have used), a 20-mark loop-and-classify program, and a
20-mark function-with-a-default-parameter program. If your exam follows it, two thirds of the
marks are in two programs you can practically pre-write. Chapters 02 and 03 pre-write them.

## P1.1 — The universal opening block

**Exam phrasings**

- "Load the dataset and display the first 5 and last 5 rows."
- "Read the Equity sheet and show first few rows, info, and data types."
- "Read both sheets into separate DataFrames."
- "Q1. Import and inspect the datasets."
- "Display the first five observations of each DataFrame."

**Core idea.** Every data question in the bank opens the same way. Type this without thinking,
then read the output before you answer anything else — it tells you the real column names, the
dtypes, and where the missing values are.

**Template**

```python
import pandas as pd

df = pd.read_csv("FILE.csv")            # or pd.read_excel("FILE.xlsx", sheet_name="SHEET")

print(df.shape)                          # (rows, columns)
print(df.columns.tolist())               # the REAL column names
print(df.dtypes)                         # numeric vs object vs datetime
print(df.isna().sum())                   # where the gaps are
print(df.head())
print(df.tail())
```

**Worked**

Define the base path once. In the exam, swap it for wherever your file actually is.

```python
import pandas as pd

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
df = pd.read_csv(BASE + "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv")

print(df.shape)
print(df.columns.tolist())
print(df.isna().sum())
print(df.head(3))
```

```text
(12, 8)
['TxnID', 'Date', 'AccountID', 'Branch', 'TxnType', 'Amount', 'Channel', 'Remarks']
TxnID        0
Date         0
AccountID    0
Branch       2
TxnType      0
Amount       1
Channel      0
Remarks      1
dtype: int64
   TxnID        Date  AccountID  Branch TxnType    Amount Channel          Remarks
0   5001  01-07-2025        101  Mumbai  Credit  250000.0    NEFT           Salary
1   5002  01-07-2025        101    Pune   Debit   12000.0     ATM  Cash withdrawal
2   5003  02-07-2025        102   Delhi   Debit    4500.0     UPI     Bill payment
```

Four facts were just handed to you for free: the file has 12 rows, `Branch` has 2 gaps and
`Amount` has 1, `Amount` is a float (because of that gap), and the dates are written
**day-first** — `01-07-2025` is 1 July, not 7 January, even though the question PDF claims the
format is `YYYY-MM-DD`. That last one is a trap; see T13 in Chapter 15.

**Variants**

| If the question says | Add |
| --- | --- |
| "read all sheets" | `pd.read_excel(path, sheet_name=None)` → dict of DataFrames |
| "read the Equity sheet" | `sheet_name="Equity"` |
| "show general info" | `df.info()` |
| "descriptive statistics" | `df.describe()` |
| "add percentiles at 0.3, 0.7, 0.9" | `df.describe(percentiles=[0.3, 0.7, 0.9])` |
| "the file is semicolon separated" | `sep=";"` |
| "skip the heading rows" | `skiprows=2` |

**Traps**

- `df.columns` prints an Index object; `df.columns.tolist()` prints a clean list. Use the second.
- `df.count()` is **non-null** counts, not the number of rows. Use `len(df)` or `df.shape[0]`.
- If a column you expect to be numeric shows as `object`, something non-numeric is hiding in it —
  a stray `-`, `na` or `@@`. See Chapter 07.

## P1.2 — Route a question to the right technique

**Exam phrasings**

- Any question at all — this is the routing table.

**Core idea.** The examiner uses a small, stable vocabulary. Each verb maps to one technique.
Learn the verbs and the paper stops being surprising.

| The question says | It wants | Chapter |
| --- | --- | --- |
| "load", "read", "import and inspect" | `read_csv` / `read_excel` + the opening block | 05 |
| "display the first / last N rows" | `head(n)` / `tail(n)` | 06 |
| "show general info", "data types" | `info()`, `dtypes` | 06 |
| "descriptive statistics", "percentiles" | `describe(percentiles=[...])` | 06 |
| "show only the X, Y and Z columns" | `df[["X","Y","Z"]]` | 06 |
| "filter / extract where …" | Boolean mask with `&`, `\|`, `~`, `.isin()` | 06, 08 |
| "count missing values per column" | `isna().sum()` | 07 |
| "drop rows where X is missing", "compare shapes" | `dropna(subset=["X"])` + `.shape` | 07 |
| "replace missing X with …", "display the affected rows" | mask first, then `fillna` | 07 |
| "forward fill", "backward fill" | `ffill()`, `bfill()` | 07 |
| "rows N to M", "every 5th row", "column positions 2:7" | `.iloc` | 08 |
| "from label A to label B", "columns Name to Total" | `.loc` (stop included) | 08 |
| "slice records from 2024-01-10 to 2024-01-20" | `to_datetime` → `set_index` → `.loc["a":"b"]` | 08, 13 |
| "sort by X, then by Y descending" | `sort_values(by=[...], ascending=[...])` | 08 |
| "the five largest / highest" | `nlargest(5, "col")` or `sort_values().head(5)` | 08 |
| "total X by A × B", "mean X by A × B" | `pivot_table(index="A", columns="B", values="X", aggfunc=…)` | 09 |
| "with totals", "fill empty cells with 0" | `margins=True, margins_name="Total"`, `fill_value=0` | 09 |
| "flatten the columns" | `pt.columns = [f"{a}_{b}" for a, b in pt.columns]` | 09 |
| "combine / stack these rows" | `pd.concat([a, b], ignore_index=True)` | 10 |
| "all observations from X should remain" | `pd.merge(x, y, on="k", how="left")` | 10 |
| "only records present in both" | `how="inner"` | 10 |
| "every record appearing in either" | `how="outer"` | 10 |
| "match on the index" | `a.join(b)` — defaults to left, not inner | 10 |
| "frequency of each X", "how many in each" | `value_counts()` | 11 |
| "create the following class intervals" | `pd.cut(x, bins=[…], right=False, labels=[…])` | 11 |
| "Frequency, Percentage, Cumulative_Frequency" | the frequency-table block | 11 |
| "cross-tabulation between A and B" | `pd.crosstab(df.A, df.B)` | 11 |
| "identify the most common …" | `value_counts().idxmax()` — **check for ties** | 11, 15 |
| "visualize the distribution of" | `plt.hist` | 12 |
| "compare the average X by Y" | `groupby(Y)[X].mean()` → `plt.bar` | 12 |
| "analyze the relationship between" | `plt.scatter` | 12 |
| "explore the variability in" | `plt.boxplot` | 12 |
| "visualize the proportion of" | `plt.pie` | 12 |
| "one figure with a 2 × 3 layout" | `plt.figure(figsize=…)` + `plt.subplot(2,3,i)` + `tight_layout()` | 12 |
| "previous close", "price change", "daily return" | `shift(1)`, `diff()`, `pct_change()` | 13 |
| "20-day moving average", "rolling volatility" | `rolling(20).mean()`, `rolling(20).std()` | 13 |
| "wealth index assuming ₹100" | `(1 + r).cumprod() * 100` | 13 |
| "date of the highest / lowest" | `idxmax()` / `idxmin()` on a dated index | 13 |
| "accept the following inputs from the user" | `input()` + a function with a default parameter | 02 |
| "process every record using a loop", "classify each" | `for` + `if/elif/else` + counters | 03 |
| "evaluate the design, identify the errors" | list / tuple / set / dict critique | 04 |
| "Discuss: what would happen if …" | a 3–5 sentence written answer | 07, 15 |

## P1.3 — Handle a question whose wording does not match the data

**Exam phrasings**

- "Show loans from LoanID 1010 to 1020 along with the columns from City to Revenue."
- "Filter transactions where the City is Mumbai or Pune."
- "Display summary statistics for Score1 through Score3."

**Core idea.** This is not hypothetical — it is already true of the practice material, so assume
it can be true of the paper. In `03 Sorting and slicing/Exercise 1`, the PDF asks for columns
`City` and `Revenue` and IDs `1010–1020`. The CSV has no `City` and no `Revenue` at all, and its
IDs run `11001–11200`. The prose was written against a different dataset.

You cannot answer the question as literally written. You *can* get full marks by mapping it and
saying so.

**Template**

```python
print(df.columns.tolist())      # step 1: find out what you actually have
print(df["ID_COL"].min(), df["ID_COL"].max())   # step 2: check the ranges the question quotes
```

Then write one sentence before your code:

```text
The question refers to columns "City" and "Revenue"; the dataset provides "Branch" and
"DisbursedAmount". I have answered using Branch for City and DisbursedAmount for Revenue,
and LoanIDs 11010-11020 for the quoted range 1010-1020.
```

**Worked**

```python
import pandas as pd

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
df = pd.read_csv(BASE + "Pandas exercises/03 Sorting and slicing in Pandas/"
                        "Exercise 1 - Loan Transactions/EX_A_loan_transactions.csv")

print(df.columns.tolist())
print("LoanID range:", df["LoanID"].min(), "-", df["LoanID"].max())
print("Branch values:", sorted(df["Branch"].unique()))
```

```text
['LoanID', 'Date', 'Branch', 'LoanProduct', 'NumBorrowers', 'PerBorrowerAmount', 'DisbursedAmount', 'Channel']
LoanID range: 11001 - 11200
Branch values: ['Bengaluru', 'Delhi', 'Hyderabad', 'Mumbai', 'Pune']
```

The mapping is then obvious:

| PDF says | File actually has |
| --- | --- |
| `City` | `Branch` |
| `Revenue` | `DisbursedAmount` |
| "Total disbursed amount" | `DisbursedAmount` |
| `LoanID 1010`–`1020` | `LoanID 11010`–`11020` |
| `Score1`, `Score2`, `Score3` (Ex 2) | `Pick1_Score`, `Pick2_Score`, `Pick3_Score` |
| `Total` (Ex 2) | `TotalScore` |

**Variants**

| Symptom | Fix |
| --- | --- |
| `KeyError: 'City'` | `df.columns.tolist()` and map to the nearest real column |
| Column name looks right but still errors | trailing spaces — `df.columns = df.columns.str.strip()` |
| ID range in the question is impossible | quote the real `min()`/`max()` and shift the range |
| A filter returns 0 rows | print `df[col].max()` to prove the threshold is unreachable, then say so |

**Traps**

- Do not silently invent a column. An examiner reading your notebook needs to see *why* you
  used `Branch` where they wrote `City`.
- Do not stop and leave the question blank. A stated, reasonable mapping earns the marks; a
  blank earns none.

## P1.4 — State an assumption so an examiner cannot penalise you

**Exam phrasings**

- "Create the following class intervals: ₹0–50,000, ₹50,000–1,00,000, …"
- "classify it as Medium Deposit if the amount is from Rs. 75,000 to Rs. 1,50,000, inclusive"
- Any question where two readings give two different right answers.

**Core idea.** Some of this material is genuinely ambiguous. The frequency-distribution PDFs
write class intervals as "₹0–50,000, ₹50,000–1,00,000" without saying which end is closed — and
in two of the four datasets there are values sitting exactly on a boundary, so the two readings
produce different frequency tables. You cannot make that ambiguity go away. You can make it
cost nothing.

**Template** — one Markdown or comment line, then answer normally.

```python
# Assumption: class intervals are treated as left-closed, right-open — [0, 50000),
# [50000, 100000), ... — i.e. pd.cut(..., right=False), so a value of exactly 50,000
# falls in the second class.
```

**Worked** — the same data, both conventions, different answers:

```python
import pandas as pd

s = pd.Series([40000, 50000, 60000])
bins = [0, 50000, 100000]

print(pd.cut(s, bins=bins, right=False).value_counts().sort_index())   # [0,50000) / [50000,100000)
print(pd.cut(s, bins=bins, right=True).value_counts().sort_index())    # (0,50000] / (50000,100000]
```

```text
[0, 50000)         1
[50000, 100000)    2
Name: count, dtype: int64
(0, 50000]         2
(50000, 100000]    1
Name: count, dtype: int64
```

The value 50,000 moves. Both tables are defensible; only one of them is defensible *silently*.

The course's own model notebook uses `right=False`, so **default to `right=False`** and say so.

**Variants** — other places to write an assumption sentence:

| Ambiguity | Sentence to write |
| --- | --- |
| Bin closure | "Intervals treated as left-closed, right-open, consistent with `right=False`." |
| A tie in "most common" | "Home, Personal and Vehicle are tied at 10 each; I report all three as modal." |
| An empty filter result | "No holding satisfies the filter; the portfolio maximum is ₹246,148." |
| Comparing series of different lengths | "The three stocks cover different periods, so the comparison is not like-for-like." |
| Population vs sample std | "`std()` reported with `ddof=1` (sample standard deviation)." |

**Traps**

- One sentence is enough. Do not write a paragraph of hedging.
- Write the assumption *before* the code, where a marker will see it.

## Mark-saving habits

These cost seconds and are worth marks in every question:

1. `print()` your result. An unprinted expression at the end of a cell shows only the last one.
2. Round money: `f"Rs. {x:.2f}"`.
3. Comment each block with the question number it answers: `# Q7`.
4. In the core-Python questions, write a docstring. It is explicitly asked for.
5. If a question says "compare shapes", actually print both shapes.
6. If a question says "explain why", write the sentence. It is a separate mark.
7. Save the notebook with output visible before submitting — the real paper says so twice.

## Chapter cheat sheet

```python
# --- open any dataset -------------------------------------------------
import pandas as pd
df = pd.read_csv("f.csv")                      # sep=';' / sep='\t' / skiprows=2
df = pd.read_excel("f.xlsx", sheet_name="S")   # sheet_name=None -> dict of all sheets

df.shape; df.columns.tolist(); df.dtypes; df.info(); df.describe()
df.isna().sum(); df.duplicated().sum(); df.head(); df.tail()

# --- the four things that make a question ambiguous -------------------
# 1 column named in the question is missing   -> map it, say so
# 2 bin edges not stated                      -> right=False, say so
# 3 "most common" is a tie                    -> report all, say so
# 4 filter returns nothing                    -> print the max, say so
```
