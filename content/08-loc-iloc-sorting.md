---
id: 08-loc-iloc-sorting
part: "Part III — Selection, Ordering, Reshaping"
title: "loc, iloc, Slicing, Sorting and the Index"
blurb: "Pick rows and columns by label or by position, slice date ranges, and sort on one or many keys — the single most heavily examined topic in the paper."
order: 80
covers:
  - "Session 13 — Exercises 44–45, 50–52, 67–80"
  - "03 Sorting and slicing in Pandas — Exercises 1, 2, 3 (all questions)"
  - "04 Sorting, slicing and pivot — Part A of Exercises 1, 2, 3 (23 questions)"
datafiles:
  - "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
  - "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 1 - Loan Transactions/EX_A_loan_transactions.csv"
  - "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 2 - Student portfolios/EX_B_portfolios.xlsx"
  - "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 3 - Stock Prices/EX_C_stock_ACME.csv"
  - "Pandas exercises/04 Sorting, slicing and pivot/Exercise 1/equity_trades.csv"
  - "Pandas exercises/04 Sorting, slicing and pivot/Exercise 2/bank_loans.csv"
  - "Pandas exercises/04 Sorting, slicing and pivot/Exercise 3/mutual_funds.csv"
patterns:
  - id: P8.1
    title: "loc versus iloc — the rule that decides every question"
    phrasings:
      - "Compare the result of selecting the loan with LoanID 1015 versus selecting the 15th row by position."
      - "Compare the results of slicing with RollNo 10:12 versus slicing the rows at positions 10:12."
      - "Slice the dataset by dates 2024-03-15 to 2024-03-24, and then slice the same rows by their positions. Compare the difference in inclusion of the last row."
      - "Confirm stop labels are included"
      - "Confirm stop positions are excluded"
      - "difference between loc and iloc"
      - "why does loc return one more row than iloc"
  - id: P8.2
    title: "One row by label, one row by position"
    phrasings:
      - "Set Student_ID as the index. Select the row with label ST101 using loc."
      - "On the same indexed DataFrame, select the first row by position using iloc."
      - "display the record of customer C007"
      - "show the last row of the dataset"
      - "print the details of the loan with LoanID 11015"
      - "what type of object does df.loc['ST101'] return"
  - id: P8.3
    title: "One cell"
    phrasings:
      - "Select the Name value for student ST103 using loc."
      - "Select the value in the first row and first data column using iloc."
      - "display only the Close price on 2024-03-15"
      - "fetch the branch of loan 11015"
      - "what does df.iloc[0,0] return after set_index"
  - id: P8.4
    title: "Row slices by label with loc"
    phrasings:
      - "Re-read the sheet, set Employee_ID as the index, then select rows E002 through E005 by label."
      - "Show loans from LoanID 1010 to 1020"
      - "slice students with roll numbers 25 through 40"
      - "display records from ST103 to ST107"
      - "select all loans between two ID labels inclusive"
  - id: P8.5
    title: "Row slices by position: first N, last N, every Nth"
    phrasings:
      - "Select only row positions 1 and 2."
      - "Show rows 10 to 29 (inclusive/exclusive accordingly) using .iloc"
      - "Show the last 6 rows after sorting entire DataFrame by notional descending (use .iloc for the slice)."
      - "Using .iloc, take every 5th row from 0 to 50"
      - "Using .iloc, take every 3rd row up to 36"
      - "Display the first 10 loan records and the last 10 loan records."
      - "return rows 20-39 using .iloc"
  - id: P8.6
    title: "Column selection: lists, label slices, positions"
    phrasings:
      - "Select all rows and columns Name through Score using loc."
      - "Select only column positions 1 and 2 for all rows."
      - "From the first 15 loans, display only the first four columns."
      - "columns positions [0, 3, 4, 5]"
      - "show only trade_id, ticker and quantity"
      - "along with the columns from City to Revenue"
  - id: P8.7
    title: "Rows and columns in one call"
    phrasings:
      - "Select rows E002 through E005 and columns Name through Age using loc."
      - "Using positions, slice row positions 2 through 6 and column positions 0 through 2."
      - "Show rows 10 to 29 and columns positions 2:7 using .iloc."
      - "Using .iloc, return rows 5:35 and columns 1:8"
      - "slice students with roll numbers 25 through 40, showing columns from Name to Total"
      - "Select the first 20 rows and the first 4 columns by position."
  - id: P8.8
    title: "Boolean mask plus a column list with .loc"
    phrasings:
      - "Show trade_id, ticker, quantity for rows where segment == \"CASH\" and quantity >= 500, sorted by quantity descending."
      - "Using .loc, select rows where side == \"SELL\" and notional >= 1_000_000, columns [\"trade_id\",\"ticker\",\"notional\"]."
      - "Filter loans with status != \"Closed\" and interest_rate >= 12, keep loan_id, branch, interest_rate"
      - "Filter where channel in {\"Direct\",\"Online\"} and nav >= 40; return txn_id, scheme, nav."
      - "show only these three columns for the filtered rows"
  - id: P8.9
    title: "isin, ~, | and the parentheses rule"
    phrasings:
      - "Using .loc, select rows with ticker in {\"TCS\",\"INFY\",\"RELIANCE\"}"
      - "Using .loc, show loans from branch in {\"Panaji\",\"Vasco\"} with tenure_months > 120"
      - "Select loans where product == \"SME\" or (product == \"Auto\" and interest_rate < 8)"
      - "Filter transactions where the City is Mumbai or Pune and the number of borrowers is at least 3"
      - "Filter customers who are NOT in the Retail segment."
      - "The truth value of a Series is ambiguous"
  - id: P8.10
    title: "Boolean columns as filters"
    phrasings:
      - "Filter algo_flag == True or fee > 40"
      - "rows where secured == False"
      - "Filter kyc_ok == False then sort by amc asc, amount desc"
      - "show only the unsecured loans"
      - "show trades that were routed algorithmically"
  - id: P8.11
    title: "set_index, reset_index, sort_index"
    phrasings:
      - "Set Student_ID as the index in place, then sort the index in place."
      - "After Exercise 51, reset the index in place."
      - "Set RollNo as the index"
      - "After setting Date as the index, slice the records"
      - "sort the DataFrame by its row labels"
      - "why do I get an empty DataFrame when I slice by label"
  - id: P8.12
    title: "Date-index slicing: range, whole month, open-ended"
    phrasings:
      - "After setting Date as the index, slice the records from 2024-01-10 to 2024-01-20."
      - "Set Date as the index and slice records from 2024-03-10 to 2024-03-20, showing only the Close and Volume columns."
      - "show all transactions in March 2024"
      - "select every record from 2024-04-25 onwards"
      - "slice the records for a given date range"
  - id: P8.13
    title: "sort_values: one key, many keys, descending, missing values"
    phrasings:
      - "Sort by Age in ascending order and store the result in a new DataFrame."
      - "Sort first by Age ascending and then Score descending."
      - "Sort by Age in place."
      - "Sort students first by Department (ascending) and then by Total score (descending)."
      - "sort them by City ascending and within each city by Total disbursed amount descending"
      - "where should the missing values go when sorting"
  - id: P8.14
    title: "Filter, sort, then slice the top or bottom N"
    phrasings:
      - "Sort by broker ascending and notional descending, then return the first 12 rows using slicing."
      - "Sort by branch asc and emi_estimate desc, return the top 10 rows using slicing."
      - "Sort by scheme asc and units desc; return the first 10 rows via slicing."
      - "Sort by amount desc; return rows 10-19 using .iloc."
      - "Sort by risk_grade then by principal_lakhs (desc), and return rows 20-39 using .iloc."
      - "filter then sort then show the top records"
  - id: P8.15
    title: "nlargest and nsmallest"
    phrasings:
      - "display the five largest transactions by amount"
      - "show the three lowest salaries"
      - "identify the top 10 loans by principal"
      - "which five days had the highest closing price"
      - "difference between nlargest and sort_values().head()"
  - id: P8.16
    title: "Sort by the column at a given position"
    phrasings:
      - "Using .iloc, return rows 5:35 and columns 1:8, then sort by the column at position 2 ascending."
      - "Using .iloc, return rows 15:45 and columns 0:6, then sort by the column at position 5 descending."
      - "sort by the third column"
      - "how do I sort when the question gives a column number instead of a name"
  - id: P8.17
    title: "axis=0 versus axis=1"
    phrasings:
      - "Read the sheet, keep Student as the row label, and calculate column totals for Math, Science and English."
      - "Calculate each student's total across Math, Science and English."
      - "compute the row-wise total"
      - "why does index_col=0 matter here"
      - "sum down the columns versus across the rows"
  - id: P8.18
    title: "Chained indexing and SettingWithCopyWarning"
    phrasings:
      - "A value is trying to be set on a copy of a slice from a DataFrame"
      - "set Score to 100 for all Finance employees"
      - "why did my assignment not change the DataFrame"
      - "difference between df[mask]['col'] = x and df.loc[mask,'col'] = x"
  - id: P8.19
    title: "Map the examiner's column names onto the real ones"
    phrasings:
      - "along with the columns from City to Revenue"
      - "Total disbursed amount"
      - "Show loans from LoanID 1010 to 1020"
      - "Display summary statistics for Score1 through Score3."
      - "the question names a column that does not exist in the file"
      - "KeyError: 'Revenue'"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| P8.1 | The question mentions both labels and positions, or asks you to "compare" the two |
| P8.2 | One named record, the first record, or the last record |
| P8.3 | One single value out of the table |
| P8.4 | "from ID A to ID B", "records ST103 to ST107" |
| P8.5 | "rows 10 to 29", "last 6 rows", "every 5th row" |
| P8.6 | "columns X to Y", "first four columns", "column positions [0,3,4,5]" |
| P8.7 | Rows **and** columns restricted in the same question |
| P8.8 | "show these 3 columns for the rows where ..." — the workhorse of the 04 exercises |
| P8.9 | "in {A,B}", "A or B", "not", "at least", combined conditions |
| P8.10 | The condition column is `True`/`False` |
| P8.11 | You must set, sort or undo an index before slicing |
| P8.12 | Any date range, any month, any "after this date" |
| P8.13 | "sort by", "ascending", "descending", "and within each ..." |
| P8.14 | Filter → sort → "first 12 rows using slicing" |
| P8.15 | "the five largest", "the three smallest" |
| P8.16 | The question names a column by **number**, not by name |
| P8.17 | "column totals" versus "each student's total" |
| P8.18 | You must *write* into a filtered subset |
| P8.19 | The column name in the question is not in the file |

### Setup — run this once

Swap `BASE` for your own path in the exam. Everything in this chapter uses these nine frames.

```python
import pandas as pd
pd.set_option("display.width", 110)
pd.set_option("display.max_columns", 20)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/Pandas exercises/"
W  = BASE + "Class exercises/Pandas_Session13_Practice_Data.xlsx"
P3 = BASE + "03 Sorting and slicing in Pandas/"
P4 = BASE + "04 Sorting, slicing and pivot/"

students = pd.read_excel(W, sheet_name="Indexed_Data")
emp      = pd.read_excel(W, sheet_name="Sorting_Data")
scores   = pd.read_excel(W, sheet_name="Scores_Axis", index_col=0)
loans    = pd.read_csv(P3 + "Exercise 1 - Loan Transactions/EX_A_loan_transactions.csv")
port     = pd.read_excel(P3 + "Exercise 2 - Student portfolios/EX_B_portfolios.xlsx", sheet_name="Portfolios")
acme     = pd.read_csv(P3 + "Exercise 3 - Stock Prices/EX_C_stock_ACME.csv")
trades   = pd.read_csv(P4 + "Exercise 1/equity_trades.csv")
bank     = pd.read_csv(P4 + "Exercise 2/bank_loans.csv")
mf       = pd.read_csv(P4 + "Exercise 3/mutual_funds.csv")

for name, d in [("students",students),("emp",emp),("scores",scores),("loans",loans),
                ("port",port),("acme",acme),("trades",trades),("bank",bank),("mf",mf)]:
    print(f"{name:9s} {d.shape}")
```

```text
students  (15, 5)
emp       (17, 6)
scores    (9, 3)
loans     (200, 8)
port      (120, 8)
acme      (60, 4)
trades    (85, 10)
bank      (80, 10)
mf        (70, 9)
```

### Examiner's phrase → loc or iloc → exact code

This is the table to scan first. `N`, `M`, `A`, `B`, `COL` are the things you replace.

| The question says | Tool | Exact code |
| --- | --- | --- |
| "rows N to M" (positions, e.g. rows 10 to 29) | `iloc` | `df.iloc[N:M+1]` — for "10 to 29" write `df.iloc[10:30]` |
| "rows N:M using .iloc" (already in slice form) | `iloc` | `df.iloc[N:M]` — copy the numbers as given |
| "the first N rows" | `iloc` | `df.iloc[:N]` (same as `df.head(N)`) |
| "the last N rows" | `iloc` | `df.iloc[-N:]` (same as `df.tail(N)`) |
| "the Nth row" (1-based counting) | `iloc` | `df.iloc[N-1]` — "the 15th row" is `df.iloc[14]` |
| "every Nth row from 0 to M" | `iloc` | `df.iloc[0:M:N]` |
| "every Nth row up to M" | `iloc` | `df.iloc[:M:N]` |
| "from label A to label B" | `loc` | `df.loc["A":"B"]` — **B is included** |
| "the record with ID A" | `loc` | `df.loc["A"]` (set that ID as the index first) |
| "these specific labels" | `loc` | `df.loc[["A","B","C"]]` |
| "columns X to Y" | `loc` | `df.loc[:, "X":"Y"]` — **Y is included** |
| "the first four columns" | `iloc` | `df.iloc[:, :4]` |
| "column positions 2:7" | `iloc` | `df.iloc[:, 2:7]` |
| "column positions [0,3,4,5]" | `iloc` | `df.iloc[:, [0,3,4,5]]` |
| "only columns A, B, C" | either | `df[["A","B","C"]]` or `df.loc[:, ["A","B","C"]]` |
| "the column at position 2" | `iloc`/name | `df.columns[2]` gives the name — then `df.sort_values(df.columns[2])` |
| "records from 2024-03-10 to 2024-03-20" | `loc` | `df.loc["2024-03-10":"2024-03-20"]` after `set_index("Date")` on a `datetime` column |
| "all records in March 2024" | `loc` | `df.loc["2024-03"]` |
| "from 2024-04-25 onwards" | `loc` | `df.loc["2024-04-25":]` |
| "the five largest by COL" | neither | `df.nlargest(5, "COL")` |
| "the three smallest by COL" | neither | `df.nsmallest(3, "COL")` |
| "rows where COND, showing columns A, B" | `loc` | `df.loc[COND, ["A","B"]]` |

## P8.1 — loc versus iloc — the rule that decides every question

**Exam phrasings**

- "Compare the result of selecting the loan with LoanID 1015 versus selecting the 15th row by position."
- "Compare the results of slicing with RollNo 10:12 versus slicing the rows at positions 10:12."
- "Slice the dataset by dates 2024-03-15 to 2024-03-24, and then slice the same rows by their positions. Compare the difference in inclusion of the last row."
- "Confirm stop labels are included" / "Confirm stop positions are excluded"

**Core idea.** Write this sentence in the exam, every time:

> `.loc` selects by **label** and the **stop label is INCLUDED**. `.iloc` selects by **integer position** and the **stop position is EXCLUDED** (like normal Python slicing).

Everything else in this chapter is a consequence of that sentence.

**Template**

```python
df.loc[LABEL_START:LABEL_STOP]   # LABEL_STOP is in the result
df.iloc[POS_START:POS_STOP]      # POS_STOP is NOT in the result
```

**Worked — the clearest demonstration in the whole syllabus (03/Exercise 2 Q7)**

`port` has `RollNo` 1–120 as a plain column. Set it as the index and the *labels become integers* — now `loc` and `iloc` take the same-looking argument and give different answers.

```python
R = port.set_index("RollNo")
print(R.loc[10:12, "Name":"Semester"])
print("rows:", R.loc[10:12].shape[0])
print()
print(R.iloc[10:12, 0:3])
print("rows:", R.iloc[10:12].shape[0])
print("labels from loc:", list(R.loc[10:12].index),
      " labels from iloc:", list(R.iloc[10:12].index))
```

```text
               Name  Department  Semester
RollNo                                   
10      Student_010  Operations         2
11      Student_011     Finance         2
12      Student_012   Analytics         4
rows: 3

               Name Department  Semester
RollNo                                  
11      Student_011    Finance         2
12      Student_012  Analytics         4
rows: 2
labels from loc: [10, 11, 12]  labels from iloc: [11, 12]
```

Two differences, both worth marks:

1. **Row count.** `loc[10:12]` returns **3** rows, `iloc[10:12]` returns **2**.
2. **Which rows.** `loc` matched the *labels* 10, 11, 12. `iloc` took the *positions* 10, 11 — which are the rows labelled 11 and 12, because `RollNo` starts at 1, so label = position + 1.

**Worked — the same rows from both tools (Session 13 Ex 71/72)**

To get identical output you must write the `iloc` stop **one higher** than the `loc` stop position.

```python
si = students.set_index("Student_ID")
print(si.loc["ST103":"ST107"])
print(si.iloc[2:7])
print("loc  ST103:ST107 ->", si.loc["ST103":"ST107"].shape[0], "rows")
print("iloc 2:7         ->", si.iloc[2:7].shape[0], "rows")
print("loc includes the stop label ST107:", "ST107" in si.loc["ST103":"ST107"].index)
print("iloc excludes position 7 (ST108):", "ST108" in si.iloc[2:7].index)
```

```text
                      Name  Age       City  Score
Student_ID                                       
ST103           Ishita Sen   33       Pune     90
ST104         Vikram Joshi   26       Pune     95
ST105       Nisha Kulkarni   32        Goa     83
ST106           Rahul Naik   21  Bengaluru     74
ST107          Sneha Patil   21  Bengaluru     89
                      Name  Age       City  Score
Student_ID                                       
ST103           Ishita Sen   33       Pune     90
ST104         Vikram Joshi   26       Pune     95
ST105       Nisha Kulkarni   32        Goa     83
ST106           Rahul Naik   21  Bengaluru     74
ST107          Sneha Patil   21  Bengaluru     89
loc  ST103:ST107 -> 5 rows
iloc 2:7         -> 5 rows
loc includes the stop label ST107: True
iloc excludes position 7 (ST108): False
```

`ST107` sits at position 6. `loc` needed the stop `"ST107"`; `iloc` needed the stop `7`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "rows 10 to 29 inclusive, by position" | `df.iloc[10:30]` (20 rows) |
| "rows 10 to 29 as written in slice form" | `df.iloc[10:29]` (19 rows) — read the wording, then say which reading you used |
| The frame has a plain `RangeIndex` and the question says "rows 2 to 6" | `df.loc[2:6]` gives 5 rows, `df.iloc[2:6]` gives 4 — the integers are *labels* for `loc` |
| "the 15th row" | `df.iloc[14]` (1-based counting → subtract 1) |
| "mix a label row-range with positional columns" | not allowed in one call; do `df.loc["A":"B"].iloc[:, 2:7]` |

`loc` with integer labels on the default index, to prove the point:

```python
print(students.loc[2:6, ["Student_ID","Name"]])     # 5 rows, label 6 included
print(students.iloc[2:6][["Student_ID","Name"]])    # 4 rows, position 6 excluded
```

```text
  Student_ID            Name
2      ST103      Ishita Sen
3      ST104    Vikram Joshi
4      ST105  Nisha Kulkarni
5      ST106      Rahul Naik
6      ST107     Sneha Patil
  Student_ID            Name
2      ST103      Ishita Sen
3      ST104    Vikram Joshi
4      ST105  Nisha Kulkarni
5      ST106      Rahul Naik
```

**Traps**

- Passing a *label* to `iloc` is an error, not a lookup. With `LoanID` as the index, `L.iloc[11015]` gives
  `IndexError: single positional indexer is out-of-bounds`.
- `loc` and `iloc` coincide by accident whenever the index is a gapless ascending sequence starting at 0. That is why many students never notice the difference until the exam.
- Position numbers change the moment you sort. Labels do not. After `sort_values`, `df.iloc[14]` is a different record but `df.loc["A"]` is the same record.

**Drill**

1. With `RollNo` as the index of `port`, how many rows does `loc[25:40]` return, and how many does `iloc[25:40]` return?
2. Write the `iloc` slice that returns exactly the same rows as `si.loc["ST110":"ST115"]`.

<details><summary>Answers</summary>

```python
R = port.set_index("RollNo")
len(R.loc[25:40])    # 16  (stop label included)
len(R.iloc[25:40])   # 15  (stop position excluded)

si.iloc[9:15]        # ST110 is at position 9, ST115 at position 14 -> stop = 15
```

</details>

## P8.2 — One row by label, one row by position

**Exam phrasings**

- "Set Student_ID as the index. Select the row with label ST101 using loc." (Session 13 Ex 67)
- "On the same indexed DataFrame, select the first row by position using iloc." (Ex 68)
- "show the last row of the dataset"
- "print the details of the loan with LoanID 11015"

**Core idea.** A single row comes back as a **Series**, indexed by the column names, with `Name:` set to the row label. Use a *list* of one label if you want a one-row DataFrame instead.

**Template**

```python
df.loc[LABEL]        # by label      -> Series
df.iloc[0]           # first row     -> Series
df.iloc[-1]          # last row      -> Series
df.loc[[LABEL]]      # one-row DataFrame
```

**Worked**

```python
si = students.set_index("Student_ID")
print(si.loc["ST101"])
print(type(si.loc["ST101"]))
print(si.iloc[0])
print(si.iloc[-1])
print(si.loc[["ST101"]])
```

```text
Name     Ananya Rao
Age              22
City         Mumbai
Score            71
Name: ST101, dtype: object
<class 'pandas.core.series.Series'>
Name     Ananya Rao
Age              22
City         Mumbai
Score            71
Name: ST101, dtype: object
Name     Aditi Sinha
Age               22
City            Pune
Score             88
Name: ST115, dtype: object
                  Name  Age    City  Score
Student_ID                                
ST101       Ananya Rao   22  Mumbai     71
```

Here `loc["ST101"]` and `iloc[0]` agree **because ST101 happens to be the first row**. That is the whole point of 03/Exercise 1 Q7: they agree by coincidence, not by rule.

**Variants**

| If the question says | Change to |
| --- | --- |
| "the first row" | `df.iloc[0]` |
| "the last row" | `df.iloc[-1]` |
| "the last three rows" | `df.iloc[-3:]` or `df.tail(3)` |
| "the second-to-last row" | `df.iloc[-2]` |
| "these three customers" | `df.loc[["ST101","ST105","ST110"]]` |
| "dtype is object even though Age is a number" | expected: a row mixing text and numbers becomes an `object` Series |

```python
print(si.loc[["ST101","ST105","ST110"], ["Name","Score"]])
```

```text
                      Name  Score
Student_ID                       
ST101           Ananya Rao     71
ST105       Nisha Kulkarni     83
ST110         Aditya Verma     60
```

**Traps**

- `df.loc["ST101"]` needs `Student_ID` to *be the index*. On the raw frame it raises `KeyError`. Set the index first (P8.11).
- `df.iloc[-1]` is the only clean way to say "last row" positionally; `df.iloc[len(df)-1]` works but is noise.
- Single row returns a Series, so `.shape` is `(4,)` not `(1, 4)`. If the question says "display the record as a table", use the double-bracket form.

**Drill**

1. Print employee `E014`'s full record from `emp` by label, and the 14th row by position. Are they the same row?

<details><summary>Answer</summary>

```python
e = emp.set_index("Employee_ID")
print(e.loc["E014"])
print(e.iloc[13])   # 14th row -> position 13
```

Same row, because `E001..E017` are in order with no gaps. Sort `emp` by `Salary` first and they diverge.

</details>

## P8.3 — One cell

**Exam phrasings**

- "Select the Name value for student ST103 using loc." (Session 13 Ex 69)
- "Select the value in the first row and first data column using iloc." (Ex 70)
- "display only the Close price on 2024-03-15"
- "fetch the branch of loan 11015"

**Core idea.** `df.loc[ROW_LABEL, COL_LABEL]` and `df.iloc[ROW_POS, COL_POS]` return the **scalar value**, not a Series.

**Template**

```python
df.loc[ROW_LABEL, "COL"]
df.iloc[ROW_POS, COL_POS]
df.at[ROW_LABEL, "COL"]     # fast single-cell equivalent of .loc
df.iat[ROW_POS, COL_POS]    # fast single-cell equivalent of .iloc
```

**Worked — and the Ex 70 point about `iloc[0,0]`**

```python
si = students.set_index("Student_ID")
print(si.loc["ST103", "Name"])
print(si.iloc[0, 0])
print(students.iloc[0, 0])        # same sheet, index NOT set
print(si.at["ST103", "Name"], "|", si.iat[0, 0])
```

```text
Ishita Sen
Ananya Rao
ST101
Ishita Sen | Ananya Rao
```

Read the middle two lines carefully. **Once `Student_ID` is the index it is no longer a column**, so column position 0 is `Name` and `iloc[0,0]` returns `Ananya Rao`. On the un-indexed frame the same expression returns `ST101`. Exam answers that say "ST101" for Ex 70 lose the mark.

**Variants**

| If the question says | Change to |
| --- | --- |
| "the Close price on 2024-03-15" | `A.loc["2024-03-15", "Close"]` after `set_index("Date")` |
| "the value in the last row, last column" | `df.iloc[-1, -1]` |
| "the value in row 3, column Score" | `df.iloc[2]["Score"]` or better `df.iloc[2, df.columns.get_loc("Score")]` |
| "the highest Score and who got it" | `df["Score"].max()`, `df.loc[df["Score"].idxmax(), "Name"]` |

```python
print(students.loc[students["Score"].idxmax(), "Name"], students["Score"].max())
```

```text
Pooja Menon 98
```

**Traps**

- `df.loc["ST103"]["Name"]` gives the same answer but is **chained indexing** — fine for reading, wrong for writing (P8.18). Use the comma form.
- `iloc` takes only integers. `si.iloc[0, "Name"]` is a `ValueError`.
- Mixing them (`df.loc[0, 2]`) is a `KeyError` unless the columns really are labelled `2`.

**Drill**

1. From `loans` with `LoanID` as the index, print the `Branch` of loan 11015 and the value at row position 14, column position 1.

<details><summary>Answer</summary>

```python
L = loans.set_index("LoanID")
print(L.loc[11015, "Branch"])    # Bengaluru
print(L.iloc[14, 1])             # Bengaluru  (columns are Date, Branch, ... after set_index)
```

</details>

## P8.4 — Row slices by label with loc

**Exam phrasings**

- "Re-read the sheet, set Employee_ID as the index, then select rows E002 through E005 by label." (Session 13 Ex 78)
- "Show loans from LoanID 1010 to 1020" (03/Ex 1 Q2 — real IDs are 11010–11020, see P8.19)
- "slice students with roll numbers 25 through 40" (03/Ex 2 Q4)
- "display records from ST103 to ST107"

**Core idea.** Set the ID column as the index, then slice with `:` between the two labels. **Both ends are included.**

**Template**

```python
d = df.set_index("ID_COL")
d.loc[LABEL_A:LABEL_B]
```

**Worked (Ex 78)**

```python
e = emp.set_index("Employee_ID")
print(e.loc["E002":"E005"])
```

```text
                       Name Department  Age  Score  Salary
Employee_ID                                               
E002         Karan Malhotra    Finance   34     84   74361
E003            Pooja Menon  Analytics   30     78  101080
E004           Aditya Verma  Marketing   28     72  119379
E005             Tanvi Bhat  Marketing   24     90  108389
```

Four rows: E002, E003, E004 **and E005**. Say "the stop label E005 is included" in your answer.

**Worked (03/Ex 1 Q2 — numeric ID labels plus a column slice)**

```python
L = loans.set_index("LoanID")
print(L.loc[11010:11020, "Branch":"DisbursedAmount"])
```

```text
           Branch     LoanProduct  NumBorrowers  PerBorrowerAmount  DisbursedAmount
LoanID                                                                             
11010       Delhi   Personal Loan             4            1000000          4000000
11011        Pune        SME Loan             1             150000           150000
11012       Delhi        SME Loan             5             300000          1500000
11013   Hyderabad       Auto Loan             5            2000000         10000000
11014        Pune        SME Loan             3            2000000          6000000
11015   Bengaluru        SME Loan             4             300000          1200000
11016   Bengaluru       Home Loan             3             300000           900000
11017      Mumbai       Auto Loan             5             150000           750000
11018   Bengaluru   Personal Loan             4             500000          2000000
11019      Mumbai   Personal Loan             2            1000000          2000000
11020      Mumbai  Education Loan             1            2000000          2000000
```

11 rows — `11010` to `11020` inclusive.

**Variants**

| If the question says | Change to |
| --- | --- |
| "from ST103 to the end" | `si.loc["ST103":]` |
| "everything up to ST105" | `si.loc[:"ST105"]` |
| "only these labels" | `si.loc[["ST103","ST107"]]` |
| "labels in reverse order" | `si.sort_index(ascending=False).loc["ST107":"ST103"]` |
| "the ID column must stay visible too" | `df.set_index("ID_COL", drop=False)` |

```python
k = emp.set_index("Employee_ID", drop=False)
print(k.head(2))
```

```text
            Employee_ID            Name Department  Age  Score  Salary
Employee_ID                                                           
E001               E001     Sneha Patil  Marketing   30     78   74966
E002               E002  Karan Malhotra    Finance   34     84   74361
```

**Traps**

- **A label slice on the wrong index returns an empty frame, not an error.** This is the single most dangerous silent failure in the topic:

```python
print(students.loc["ST103":"ST107"])     # index is still 0..14
```

```text
Empty DataFrame
Columns: [Student_ID, Name, Age, City, Score]
Index: []
```

  No exception, no warning, no rows. If a label slice comes back empty, you forgot `set_index`.

- **Label slicing on an unsorted index slices between positions, so it can also come back empty.** After sorting by `Score`, `ST103` sits at position 11 and `ST107` at position 10, so the slice runs backwards:

```python
shuf = students.set_index("Student_ID").sort_values("Score")
print("pos ST103:", shuf.index.get_loc("ST103"), "pos ST107:", shuf.index.get_loc("ST107"))
print("loc['ST103':'ST107'] rows:", shuf.loc["ST103":"ST107"].shape[0])
print(shuf.loc["ST107":"ST103"])
```

```text
pos ST103: 11 pos ST107: 10
loc['ST103':'ST107'] rows: 0
                   Name  Age       City  Score
Student_ID                                    
ST107       Sneha Patil   21  Bengaluru     89
ST103        Ishita Sen   33       Pune     90
```

  Fix: `sort_index()` before label slicing (P8.11).

- A missing label in a slice bound raises nothing on a sorted index (pandas finds the nearest insertion point), but a missing label in `df.loc["ST199"]` raises `KeyError: 'ST199'`.

**Drill**

1. From `port`, show roll numbers 25 to 40 with columns `Name` to `TotalScore`. How many rows?

<details><summary>Answer</summary>

```python
R = port.set_index("RollNo")
q = R.loc[25:40, "Name":"TotalScore"]
print(q.shape)
print(q.head(3))
```

```text
(16, 7)
               Name  Department  Semester  Pick1_Score  Pick2_Score  Pick3_Score  TotalScore
RollNo                                                                                      
25      Student_025   Marketing         4           32           99           49         180
26      Student_026   Analytics         4           76           87           99         262
27      Student_027     Finance         1           30           68           30         128
```

16 rows — 40 − 25 + 1.

</details>

## P8.5 — Row slices by position: first N, last N, every Nth

**Exam phrasings**

- "Select only row positions 1 and 2." (Session 13 Ex 75)
- "Show rows 10 to 29 (inclusive/exclusive accordingly) ... using .iloc" (04/Ex 1 Q2)
- "Show the last 6 rows after sorting entire DataFrame by notional descending (use .iloc for the slice)." (04/Ex 1 Q6)
- "Using .iloc, take every 5th row from 0 to 50" (04/Ex 2 Q5)
- "Using .iloc, take every 3rd row up to 36" (04/Ex 3 Q5)
- "Display the first 10 loan records and the last 10 loan records." (03/Ex 1 Q1)

**Core idea.** `iloc` takes ordinary Python slices: `start:stop:step`, stop excluded, negatives count from the end.

**Template**

```python
df.iloc[N:M]        # positions N .. M-1
df.iloc[:N]         # first N
df.iloc[-N:]        # last N
df.iloc[A:B:S]      # every Sth row from A to B-1
df.iloc[:B:S]       # every Sth row up to B-1
```

**Worked (Ex 75, and "last 6 rows")**

```python
print(emp.iloc[1:3])
print(emp.iloc[-6:])
```

```text
  Employee_ID            Name Department  Age  Score  Salary
1        E002  Karan Malhotra    Finance   34     84   74361
2        E003     Pooja Menon  Analytics   30     78  101080
   Employee_ID            Name  Department  Age  Score  Salary
11        E012     Sahil Gupta   Marketing   30     90   45204
12        E013  Maya Fernandes  Operations   34     78  112820
13        E014       Dev Patel     Finance   30     95   86092
14        E015    Leena Thomas   Marketing   28     84   95958
15        E016    Omkar Sawant   Analytics   28     90   46307
16        E017    Kavya Pillai   Marketing   28     72   60884
```

**Worked (04/Ex 2 Q5 — every 5th row from 0 to 50, column positions [0,3,4,5])**

```python
q = bank.iloc[0:50:5, [0, 3, 4, 5]]
print(q.shape)
print(q.to_string(index=False))
```

```text
(10, 4)
 loan_id risk_grade  principal_lakhs  interest_rate
   20001          B            12.70           7.56
   20006          B            24.35          11.45
   20011          D            11.93          11.29
   20016          C            20.57          11.70
   20021          C            12.46          10.37
   20026          C            29.03           6.13
   20031          B            30.31          10.86
   20036          C            26.93           7.18
   20041          C            17.64           8.84
   20046          D            10.68          10.53
```

**Worked (04/Ex 3 Q5 — every 3rd row up to 36, column positions [0,2,4,8])**

```python
q = mf.iloc[:36:3, [0, 2, 4, 8]]
print(q.shape)
print(q.to_string(index=False))
```

```text
(12, 4)
 txn_id    scheme   units   amount
  30001    Equity  698.01 32422.56
  30004      Debt  899.16 37629.85
  30007    Hybrid 1397.33 60043.27
  30010    Equity  656.50 25294.94
  30013    Equity 1564.28 40905.92
  30016      Debt 1469.61 54008.17
  30019 Arbitrage 1554.00 63216.72
  30022      Debt   93.14  3168.62
  30025     Index  194.76  6226.48
  30028    Equity  981.17 47429.76
  30031 Arbitrage 1166.65 45872.68
  30034      Debt 1716.57 98084.81
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "the first 10 and the last 10" | `df.head(10)` and `df.tail(10)`, or `df.iloc[:10]` and `df.iloc[-10:]` — identical results |
| "rows 20–39" | `df.iloc[20:40]` (20 rows) |
| "rows 5:35" | `df.iloc[5:35]` — copy the numbers as written (30 rows) |
| "every other row" | `df.iloc[::2]` |
| "reverse the row order" | `df.iloc[::-1]` |
| "rows 0, 2 and 4 only" | `df.iloc[[0, 2, 4]]` |

```python
print("head(10) == iloc[:10]:", bank.head(10).equals(bank.iloc[:10]),
      "| tail(6) == iloc[-6:]:", bank.tail(6).equals(bank.iloc[-6:]))
print(bank.iloc[[0, 2, 4], [0, 1, 4]])
print(emp.iloc[::-1].head(3)[["Employee_ID","Name"]])
```

```text
head(10) == iloc[:10]: True | tail(6) == iloc[-6:]: True
   loan_id  branch  principal_lakhs
0    20001  Margao            12.70
2    20003   Vasco            30.07
4    20005   Vasco            15.98
   Employee_ID          Name
16        E017  Kavya Pillai
15        E016  Omkar Sawant
14        E015  Leena Thomas
```

**Traps**

- "rows 10 to 29" in English means 20 rows, so the code is `iloc[10:30]`. Write one sentence saying you read it as inclusive of 29 — the marker wants to see that you understand the off-by-one.
- The **original index labels are kept** after an `iloc` slice (see `11`, `12`, … above). Add `.reset_index(drop=True)` only if the question asks for a renumbered result.
- `iloc` never accepts a label, even a numeric-looking one that exists in the index.
- `df.iloc[-6:]` = last 6. `df.iloc[:-6]` = everything *except* the last 6.

**Drill**

1. After sorting `trades` by `notional` descending, show the last 6 rows using `.iloc`.
2. From `loans`, show every 10th row from position 0 to 100.

<details><summary>Answers</summary>

```python
s = trades.sort_values("notional", ascending=False)
print(s.iloc[-6:][["trade_id","ticker","notional"]].to_string(index=False))
```

```text
 trade_id   ticker  notional
    10032 AXISBANK  61353.76
    10060      ITC  45342.36
    10027      TCS  40726.26
    10080     INFY  21048.21
    10085 AXISBANK  13093.24
    10012     INFY   2571.50
```

```python
loans.iloc[0:100:10]
```

</details>

## P8.6 — Column selection: lists, label slices, positions

**Exam phrasings**

- "Select all rows and columns Name through Score using loc." (Session 13 Ex 79)
- "Select only column positions 1 and 2 for all rows." (Ex 76)
- "From the first 15 loans, display only the first four columns." (03/Ex 1 Q3)
- "columns positions [0, 3, 4, 5]" (04/Ex 2 Q5)
- "Show trade_id, ticker, quantity" (04/Ex 1 Q1)
- "along with the columns from City to Revenue" (03/Ex 1 Q2 — see P8.19)

**Core idea.** Three ways to name columns, and you pick by how the question phrases it:

| Question phrasing | Code |
| --- | --- |
| "columns A **to** B" | `df.loc[:, "A":"B"]` (B included) |
| "columns A, B, C" | `df[["A","B","C"]]` |
| "the first four columns" / "positions 2:7" | `df.iloc[:, :4]` / `df.iloc[:, 2:7]` |

**Template**

```python
df.loc[:, "COL_A":"COL_B"]
df[["COL_A","COL_B"]]
df.iloc[:, START:STOP]
df.iloc[:, [0, 3, 4, 5]]
```

**Worked (Ex 79 and Ex 76)**

```python
e = emp.set_index("Employee_ID")
print(e.loc[:, "Name":"Score"].head(5))
print(emp.iloc[:, 1:3].head(5))
```

```text
                       Name Department  Age  Score
Employee_ID                                       
E001            Sneha Patil  Marketing   30     78
E002         Karan Malhotra    Finance   34     84
E003            Pooja Menon  Analytics   30     78
E004           Aditya Verma  Marketing   28     72
E005             Tanvi Bhat  Marketing   24     90
             Name Department
0     Sneha Patil  Marketing
1  Karan Malhotra    Finance
2     Pooja Menon  Analytics
3    Aditya Verma  Marketing
4      Tanvi Bhat  Marketing
```

`loc[:, "Name":"Score"]` returned four columns (`Score` included); `iloc[:, 1:3]` returned two (position 3 excluded).

**Worked (03/Ex 1 Q3 — first 15 loans, first four columns)**

```python
print(loans.iloc[:15, :4])
```

```text
    LoanID        Date     Branch     LoanProduct
0    11001  2024-01-01  Bengaluru   Personal Loan
1    11002  2024-01-02  Hyderabad        SME Loan
2    11003  2024-01-03     Mumbai       Auto Loan
3    11004  2024-01-04     Mumbai       Home Loan
4    11005  2024-01-05       Pune       Auto Loan
5    11006  2024-01-06       Pune  Education Loan
6    11007  2024-01-07  Bengaluru  Education Loan
7    11008  2024-01-08      Delhi   Personal Loan
8    11009  2024-01-09     Mumbai       Auto Loan
9    11010  2024-01-10      Delhi   Personal Loan
10   11011  2024-01-11       Pune        SME Loan
11   11012  2024-01-12      Delhi        SME Loan
12   11013  2024-01-13  Hyderabad       Auto Loan
13   11014  2024-01-14       Pune        SME Loan
14   11015  2024-01-15  Bengaluru        SME Loan
```

**Worked — the three column-list spellings are interchangeable**

```python
print(emp[["Name","Score"]].head(3))
print(emp.loc[:, ["Name","Score"]].head(3))
print(emp.iloc[:, [1, 4]].head(3))
print(type(emp["Score"]), type(emp[["Score"]]))
```

```text
             Name  Score
0     Sneha Patil     78
1  Karan Malhotra     84
2     Pooja Menon     78
             Name  Score
0     Sneha Patil     78
1  Karan Malhotra     84
2     Pooja Menon     78
             Name  Score
0     Sneha Patil     78
1  Karan Malhotra     84
2     Pooja Menon     78
<class 'pandas.core.series.Series'> <class 'pandas.core.frame.DataFrame'>
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "the last three columns" | `df.iloc[:, -3:]` |
| "all columns except Salary" | `df.drop(columns="Salary")` |
| "print the column names first" | `print(df.columns)` — always do this (P8.19) |
| "the column at position 2, by name" | `df.columns[2]` |
| "reorder the columns" | `df[["Score","Name","Age"]]` |

```python
print(bank.iloc[:3, -3:])
```

```text
   secured      status  emi_estimate
0     True     Current      11678.25
1     True     Current      16445.47
2     True  Delinquent      34252.88
```

**Traps**

- One set of brackets gives a **Series**, two sets give a **DataFrame**. "Display the columns" wants the DataFrame.
- A typo in a column list raises `KeyError: "['Scores'] not in index"` — the quotes around the bad name tell you exactly which one is wrong.
- Column label slices need the columns in the file's order. `df.loc[:, "Score":"Name"]` returns nothing because `Score` comes after `Name`.

**Drill**

1. Show all rows of `mf` with columns `amc` through `nav`.
2. Show the first 20 rows and first 4 columns of `port` by position.

<details><summary>Answers</summary>

```python
mf.loc[:, "amc":"nav"]

q = port.iloc[:20, :4]
print(q.shape)
print(q.head(6))
```

```text
(20, 4)
   RollNo         Name Department  Semester
0       1  Student_001  Marketing         1
1       2  Student_002    Finance         4
2       3  Student_003  Analytics         1
3       4  Student_004    Finance         1
4       5  Student_005  Marketing         1
5       6  Student_006  Marketing         1
```

</details>

## P8.7 — Rows and columns in one call

**Exam phrasings**

- "Select rows E002 through E005 and columns Name through Age using loc." (Session 13 Ex 80)
- "Using positions, slice row positions 2 through 6 and column positions 0 through 2." (Ex 72)
- "Show rows 10 to 29 and columns positions 2:7 using .iloc." (04/Ex 1 Q2)
- "Using .iloc, return rows 5:35 and columns 1:8" (04/Ex 2 Q2)
- "slice students with roll numbers 25 through 40, showing columns from Name to Total" (03/Ex 2 Q4)

**Core idea.** One comma, two axes: `df.loc[rows, cols]` (all labels) or `df.iloc[rows, cols]` (all positions). **Never mix a label on one axis with a position on the other in the same call.**

**Template**

```python
df.loc[ROW_A:ROW_B, "COL_A":"COL_B"]
df.iloc[R_START:R_STOP, C_START:C_STOP]
```

**Worked (Ex 80 and Ex 72)**

```python
e  = emp.set_index("Employee_ID")
si = students.set_index("Student_ID")
print(e.loc["E002":"E005", "Name":"Age"])
print(si.iloc[2:7, 0:3])
```

```text
                       Name Department  Age
Employee_ID                                
E002         Karan Malhotra    Finance   34
E003            Pooja Menon  Analytics   30
E004           Aditya Verma  Marketing   28
E005             Tanvi Bhat  Marketing   24
                      Name  Age       City
Student_ID                                
ST103           Ishita Sen   33       Pune
ST104         Vikram Joshi   26       Pune
ST105       Nisha Kulkarni   32        Goa
ST106           Rahul Naik   21  Bengaluru
ST107          Sneha Patil   21  Bengaluru
```

**Worked (04/Ex 1 Q2 — rows 10 to 29, column positions 2:7)**

```python
q = trades.iloc[10:30, 2:7]
print(q.shape)
print(q.head(8))
print("columns:", list(q.columns))
```

```text
(20, 5)
    side  quantity    price   broker segment
10   BUY       256  2504.18   Upstox    CASH
11   BUY        10   257.15     HDFC    CASH
12   BUY       291  1030.17     HDFC     F&O
13   BUY       210   551.88    Kotak     F&O
14  SELL       822  2378.49     HDFC    CASH
15   BUY       870   186.34  Zerodha    CASH
16   BUY       871  1282.00  Zerodha    CASH
17  SELL       972   110.55     HDFC     F&O
columns: ['side', 'quantity', 'price', 'broker', 'segment']
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "rows 5:35 and columns 1:8" | `df.iloc[5:35, 1:8]` (30 rows × 7 columns) |
| "these labels, these columns" | `df.loc[["E002","E005"], ["Name","Age"]]` |
| "all rows, two named columns" | `df.loc[:, ["Name","Age"]]` |
| "label rows, positional columns" | two steps: `df.loc["E002":"E005"].iloc[:, 0:2]` |
| "positional rows, named columns" | two steps: `df.iloc[2:7][["Name","Age"]]` |

```python
q = bank.iloc[5:35, 1:8]
print(q.shape, list(q.columns))
```

```text
(30, 7) ['branch', 'product', 'risk_grade', 'principal_lakhs', 'interest_rate', 'tenure_months', 'secured']
```

**Traps**

- `df.loc[2:7, 0:3]` on a normal frame raises
  `TypeError: cannot do slice indexing on Index with these indexers [0] of type int` — `loc` wants column *labels*.
- `df.iloc[2:7, "Name":"City"]` raises
  `TypeError: cannot do positional indexing on Index with these indexers [Name] of type str` — `iloc` wants integers.
- Row positions are counted **after** any earlier filter or sort. `df[mask].iloc[0]` is the first *matching* row, not the first row of the file.

**Drill**

1. Session 13 Ex 77: rows 1 and 2, columns 0 and 1, from `emp`.

<details><summary>Answer</summary>

```python
print(emp.iloc[1:3, 0:2])
```

```text
  Employee_ID            Name
1        E002  Karan Malhotra
2        E003     Pooja Menon
```

</details>

## P8.8 — Boolean mask plus a column list with .loc

**Exam phrasings**

- "Show trade_id, ticker, quantity for rows where segment == \"CASH\" and quantity >= 500, sorted by quantity descending." (04/Ex 1 Q1)
- "Using .loc, select rows where side == \"SELL\" and notional >= 1_000_000, columns [\"trade_id\",\"ticker\",\"notional\"]." (04/Ex 1 Q7)
- "Filter loans with status != \"Closed\" and interest_rate >= 12, keep loan_id, branch, interest_rate, sort by rate desc." (04/Ex 2 Q3)
- "Filter where channel in {\"Direct\",\"Online\"} and nav >= 40; return txn_id, scheme, nav." (04/Ex 3 Q3)

**Core idea.** This is the highest-frequency shape in the paper. `.loc` takes a Boolean mask for the rows and a list of names for the columns, in one call:

```python
df.loc[(COND1) & (COND2), ["COL_A","COL_B","COL_C"]]
```

Then chain `.sort_values(...)` on the end if the question says "sorted by".

**Template**

```python
out = df.loc[(df["A"] == "VALUE") & (df["B"] >= NUM), ["COL1","COL2","COL3"]]
out = out.sort_values("COL3", ascending=False)
print(out)
```

**Worked (04/Ex 1 Q1)**

```python
q = trades.loc[(trades["segment"] == "CASH") & (trades["quantity"] >= 500),
               ["trade_id","ticker","quantity"]].sort_values("quantity", ascending=False)
print(q.shape)
print(q.head(10).to_string(index=False))
```

```text
(24, 3)
 trade_id   ticker  quantity
    10061       LT       969
    10026     SBIN       966
    10058 RELIANCE       947
    10041     SBIN       935
    10062       LT       917
    10068     SBIN       896
    10057 RELIANCE       876
    10002      TCS       875
    10017      TCS       871
    10016      TCS       870
```

**Worked (04/Ex 1 Q7 — note the `1_000_000` underscore literal is legal Python)**

```python
q = trades.loc[(trades["side"] == "SELL") & (trades["notional"] >= 1_000_000),
               ["trade_id","ticker","notional"]]
print(q.shape)
print(q.head(10).to_string(index=False))
```

```text
(16, 3)
 trade_id   ticker   notional
    10002      TCS 1493187.50
    10003       LT 1209811.68
    10015      TCS 1955118.78
    10021     SBIN 1395461.40
    10026     SBIN 3340853.04
    10030 HDFCBANK 1342505.69
    10036     INFY 2416471.20
    10040      TCS 1310254.80
    10044      TCS 1438445.19
    10046     INFY 1129711.58
```

**Worked (04/Ex 2 Q3 — `!=` plus a threshold, sorted descending)**

```python
q = bank.loc[(bank["status"] != "Closed") & (bank["interest_rate"] >= 12),
             ["loan_id","branch","interest_rate"]].sort_values("interest_rate", ascending=False)
print(q.shape)
print(q.to_string(index=False))
```

```text
(5, 3)
 loan_id branch  interest_rate
   20054 Margao          15.00
   20022  Vasco          12.99
   20049 Panaji          12.66
   20017  Ponda          12.35
   20050 Mapusa          12.03
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "just filter, no column list" | `df[cond]` or `df.loc[cond]` — identical |
| "filter and show a column *range*" | `df.loc[cond, "branch":"risk_grade"]` |
| "between 8 and 9 percent" | `df.loc[df["interest_rate"].between(8, 9), [...]]` |
| "at least / at most" | `>=` / `<=` |
| "more than / less than" | `>` / `<` |
| "using query() instead" | `df.query("risk_grade in ['C','D'] and secured == False")` |

```python
m1 = bank[bank["interest_rate"] >= 12]
m2 = bank.loc[bank["interest_rate"] >= 12]
print(m1.shape, m2.shape, m1.equals(m2))
print(bank.loc[bank["interest_rate"] >= 12, "branch":"risk_grade"].head(5))
print(bank.loc[bank["interest_rate"].between(8, 9), ["loan_id","interest_rate"]].head(5).to_string(index=False))
print(bank.query("risk_grade in ['C','D'] and secured == False").shape)
```

```text
(9, 10) (9, 10) True
    branch   product risk_grade
8   Margao       SME          B
16   Ponda      Auto          D
17   Vasco  Personal          A
21   Vasco  Personal          C
48  Panaji  Personal          A
 loan_id  interest_rate
   20002           8.31
   20008           8.43
   20010           8.37
   20023           8.59
   20024           8.20
(25, 10)
```

**Traps**

- Put the column list in **square brackets inside** the `.loc`: `df.loc[mask, ["a","b"]]`. `df.loc[mask, "a","b"]` is a syntax-level error (too many indexers).
- `df[mask][["a","b"]]` gives the same *display* but is chained indexing — safe to read, unsafe to assign into (P8.18).
- `.loc[mask]` keeps the original index labels. The row numbers in the output are the original positions, which is why the outputs above start at `8`, `16`, `10061`, etc. That is correct, not a bug.
- Always print `.shape` next to the answer. "How many rows matched" is a common follow-up mark.

**Drill**

1. 04/Ex 3 Q3: `channel` in `{Direct, Online}` and `nav >= 40`, return `txn_id`, `scheme`, `nav`.

<details><summary>Answer</summary>

```python
q = mf.loc[mf["channel"].isin({"Direct","Online"}) & (mf["nav"] >= 40),
           ["txn_id","scheme","nav"]]
print(q.shape)
print(q.head(10).to_string(index=False))
```

```text
(31, 3)
 txn_id    scheme   nav
  30004      Debt 41.85
  30005    Hybrid 53.04
  30006      Debt 56.76
  30007    Hybrid 42.97
  30008      Debt 52.12
  30009 Arbitrage 41.55
  30011    Equity 41.91
  30017    Hybrid 62.76
  30018    Hybrid 44.83
  30020 Arbitrage 47.48
```

</details>

## P8.9 — isin, ~, | and the parentheses rule

**Exam phrasings**

- "Using .loc, select rows with ticker in {\"TCS\",\"INFY\",\"RELIANCE\"}" (04/Ex 1 Q4)
- "Using .loc, show loans from branch in {\"Panaji\",\"Vasco\"} with tenure_months > 120" (04/Ex 2 Q4)
- "Select loans where product == \"SME\" or (product == \"Auto\" and interest_rate < 8)" (04/Ex 2 Q7)
- "Filter transactions where the City is Mumbai or Pune and the number of borrowers is at least 3" (03/Ex 1 Q4)
- "Filter customers who are NOT in the Retail segment." (Session 13 Ex 43)

**Core idea.** Four operators and one rule.

| English | Operator |
| --- | --- |
| and | `&` |
| or | `\|` |
| not | `~` |
| is one of / in {…} | `.isin([...])` |

**The parentheses rule: wrap every single condition in its own `( )`.** `&` and `|` bind tighter than `>=` in Python, so without brackets pandas sees nonsense.

**Template**

```python
df.loc[(df["A"] == "X") | (df["A"] == "Y")]                 # or
df.loc[df["A"].isin(["X","Y"]) & (df["B"] >= N)]            # in {...} and
df.loc[~df["A"].isin(["X","Y"])]                            # not in {...}
df.loc[(df["P"] == "SME") | ((df["P"] == "Auto") & (df["R"] < 8))]   # or-of-ands
```

**Worked (04/Ex 1 Q4 — `isin` with a set literal)**

```python
q = trades.loc[trades["ticker"].isin({"TCS","INFY","RELIANCE"}),
               ["trade_id","ticker","price","side"]]
print(q.shape)
print(q.head(8).to_string(index=False))
```

```text
(30, 4)
 trade_id ticker   price side
    10002    TCS 1706.50 SELL
    10004   INFY 3010.62  BUY
    10005    TCS 1736.11  BUY
    10012   INFY  257.15  BUY
    10015    TCS 2378.49 SELL
    10016    TCS  186.34  BUY
    10017    TCS 1282.00  BUY
    10022    TCS  676.12  BUY
```

**Worked (04/Ex 2 Q7 — "or" wrapping an inner "and")**

Bracket the inner `and` group as a unit, exactly as the question writes it:

```python
q = bank.loc[(bank["product"] == "SME")
             | ((bank["product"] == "Auto") & (bank["interest_rate"] < 8)),
             ["loan_id","product","interest_rate"]]
print(q.shape)
print(q.head(12).to_string(index=False))
```

```text
(16, 3)
 loan_id product  interest_rate
   20007     SME          11.05
   20009     SME          12.38
   20015     SME           9.43
   20020     SME          10.81
   20026     SME           6.13
   20029     SME           7.41
   20039    Auto           5.84
   20040     SME          10.78
   20060     SME          11.02
   20063     SME          11.88
   20065     SME          10.80
   20069    Auto           7.29
```

Every `Auto` row that survived has a rate under 8 — the inner bracket worked.

**Worked (03/Ex 1 Q4 — filter then two-key sort; `City` is really `Branch`, see P8.19)**

```python
q4 = loans.loc[loans["Branch"].isin(["Mumbai","Pune"]) & (loans["NumBorrowers"] >= 3)]
q4 = q4.sort_values(by=["Branch","DisbursedAmount"], ascending=[True, False])
print(q4.shape)
print(q4.head(12))
```

```text
(47, 8)
     LoanID        Date  Branch     LoanProduct  NumBorrowers  PerBorrowerAmount  DisbursedAmount Channel
24    11025  2024-01-25  Mumbai       Home Loan             5            2000000         10000000  Branch
46    11047  2024-02-16  Mumbai       Auto Loan             3            2000000          6000000  Online
171   11172  2024-06-20  Mumbai        SME Loan             3            2000000          6000000  Online
192   11193  2024-07-11  Mumbai  Education Loan             3            2000000          6000000  Online
25    11026  2024-01-26  Mumbai  Education Loan             4            1000000          4000000  Online
102   11103  2024-04-12  Mumbai        SME Loan             4            1000000          4000000  Branch
8     11009  2024-01-09  Mumbai       Auto Loan             3            1000000          3000000  Online
184   11185  2024-07-03  Mumbai  Education Loan             3            1000000          3000000  Online
2     11003  2024-01-03  Mumbai       Auto Loan             5             500000          2500000  Online
93    11094  2024-04-03  Mumbai  Education Loan             5             500000          2500000  Online
156   11157  2024-06-05  Mumbai       Home Loan             5             500000          2500000  Online
182   11183  2024-07-01  Mumbai   Personal Loan             5             500000          2500000  Online
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "Semester 2 or 3" | `df["Semester"].isin([2, 3])` — works for numbers too |
| "not in Mumbai or Pune" | `~df["Branch"].isin(["Mumbai","Pune"])` |
| "all three conditions" | `(c1) & (c2) & (c3)` |
| "either of two ranges" | `((df["x"] < 5) \| (df["x"] > 20))` |
| "case-insensitive match" | `df["Branch"].str.lower().isin(["mumbai","pune"])` |
| "name contains 'Loan'" | `df["LoanProduct"].str.contains("Loan")` |

**Traps**

- Forgetting the brackets gives this exact error, and the message never mentions brackets:

```python
print(emp[emp["Age"] > 28 & emp["Score"] > 80].head())
```

```text
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

- Using Python's `and`/`or` instead of `&`/`|` gives the **same** error:

```python
print(emp[(emp["Age"] > 28) and (emp["Score"] > 80)].head())
```

```text
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

  If you see "truth value of a Series is ambiguous", you have either missing brackets or `and`/`or`. Fix both.
- `.isin()` accepts a list, a set or a tuple. The 04 papers write `{...}`; `["TCS","INFY"]` is equally correct.
- `~` only works on a Boolean Series. `~df["Age"]` on an integer column silently gives bit-flipped integers.

**Drill**

1. 03/Ex 2 Q6: students from Semester 2 or 3 who belong to Finance or Analytics, sorted by `Pick2_Score` ascending.

<details><summary>Answer</summary>

```python
q = port.loc[port["Semester"].isin([2,3]) & port["Department"].isin(["Finance","Analytics"])]
q = q.sort_values("Pick2_Score")
print(q.shape)
print(q.head(10))
```

```text
(36, 8)
     RollNo         Name Department  Semester  Pick1_Score  Pick2_Score  Pick3_Score  TotalScore
108     109  Student_109    Finance         3           84           33           33         150
91       92  Student_092  Analytics         3           84           37           51         172
63       64  Student_064    Finance         3           78           39           79         196
88       89  Student_089    Finance         3           83           44           87         214
77       78  Student_078  Analytics         2           82           45           82         209
20       21  Student_021  Analytics         3           34           49           88         171
18       19  Student_019  Analytics         3           95           50           90         235
72       73  Student_073    Finance         2           86           50           72         208
44       45  Student_045  Analytics         2           50           51           95         196
56       57  Student_057  Analytics         3           47           51           86         184
```

</details>

## P8.10 — Boolean columns as filters

**Exam phrasings**

- "Filter algo_flag == True or fee > 40, then sort by price ascending; return only trade_id, fee, price." (04/Ex 1 Q5)
- "rows where ... secured == False" (04/Ex 2 Q1)
- "Filter kyc_ok == False then sort by amc asc, amount desc" (04/Ex 3 Q7)
- "show only the unsecured loans"

**Core idea.** A `bool` column *is already* a mask. These are all equivalent:

| Meaning | Long form | Short form |
| --- | --- | --- |
| flag is true | `df[df["flag"] == True]` | `df[df["flag"]]` |
| flag is false | `df[df["flag"] == False]` | `df[~df["flag"]]` |

Both forms score full marks. The `== True` form matches the question wording, so write that one and add a note that `df[df["flag"]]` is the idiomatic short form.

**Template**

```python
df[df["FLAG"]]                 # FLAG is True
df[~df["FLAG"]]                # FLAG is False
df.loc[df["FLAG"] == False, ["A","B"]]
```

**Worked — the four spellings give the same counts**

```python
print("df[df['algo_flag']]      :", trades[trades["algo_flag"]].shape[0])
print("df[df['algo_flag']==True]:", trades[trades["algo_flag"] == True].shape[0])
print("df[~df['algo_flag']]     :", trades[~trades["algo_flag"]].shape[0])
print("bank ~secured:", bank[~bank["secured"]].shape[0], " bank secured==False:", bank[bank["secured"] == False].shape[0])
```

```text
df[df['algo_flag']]      : 42
df[df['algo_flag']==True]: 42
df[~df['algo_flag']]     : 43
bank ~secured: 42  bank secured==False: 42
```

**Worked (04/Ex 1 Q5 — Boolean column OR a numeric threshold)**

```python
q = trades.loc[(trades["algo_flag"] == True) | (trades["fee"] > 40),
               ["trade_id","fee","price"]].sort_values("price")
print(q.shape)
print(q.head(10).to_string(index=False))
```

```text
(57, 3)
 trade_id   fee  price
    10041 42.41 105.35
    10016 27.57 186.34
    10027 46.71 256.14
    10012 48.79 257.15
    10032 42.51 363.04
    10043 27.92 415.44
    10074 28.38 497.83
    10068 41.46 506.29
    10054 23.62 522.50
    10059 40.76 654.50
```

Rows with `fee` under 40 are present (10016, 10043, 10054) because they satisfy the *other* half of the `|`.

**Worked (04/Ex 2 Q1 — Boolean plus `isin`, then sort)**

```python
q = bank.loc[bank["risk_grade"].isin({"C","D"}) & (bank["secured"] == False),
             ["loan_id","product","principal_lakhs"]].sort_values("principal_lakhs", ascending=False)
print(q.shape)
print(q.head(10).to_string(index=False))
```

```text
(25, 3)
 loan_id  product  principal_lakhs
   20032 Personal            29.78
   20039     Auto            29.67
   20023 Personal            27.88
   20036     Home            26.93
   20042 Personal            26.70
   20012     Auto            26.66
   20073     Auto            23.92
   20074      SME            23.68
   20016     Home            20.57
   20048     Auto            17.86
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "verified AND secured" | `df[df["kyc_ok"] & df["secured"]]` — no `== True` needed |
| "exactly one of the two flags" | `df[df["a"] ^ df["b"]]` |
| "how many are flagged" | `df["algo_flag"].sum()` — `True` counts as 1 |
| "percentage flagged" | `df["algo_flag"].mean() * 100` |
| "the flag column is the text 'True'/'False'" | it is not a bool; compare to the string: `df[df["flag"] == "True"]` |

**Traps**

- `bool` columns read from CSV only stay `bool` if every value is `True`/`False`. One blank cell turns the column into `object` and `~` then fails. Check with `df.dtypes`.
- `df[df["secured"] == False]` and `df[~df["secured"]]` are equivalent **only** for a true `bool` column with no missing values.
- `df["flag"] is True` is always `False` — never use `is` on a Series.

**Drill**

1. 04/Ex 3 Q7: `kyc_ok == False`, sorted by `amc` ascending then `amount` descending, showing `txn_id`, `amc`, `amount`.

<details><summary>Answer</summary>

```python
q = mf.loc[mf["kyc_ok"] == False, ["txn_id","amc","amount"]] \
      .sort_values(by=["amc","amount"], ascending=[True, False])
print(q.shape)
print(q.head(12).to_string(index=False))
```

```text
(32, 3)
 txn_id  amc    amount
  30032 Axis 105144.84
  30017 Axis  91303.88
  30054 Axis  87291.04
  30051 Axis  78831.85
  30016 Axis  54008.17
  30069 Axis  52509.93
  30038 Axis  39797.50
  30022 Axis   3168.62
  30052 HDFC  83553.83
  30003 HDFC  65310.80
  30002 HDFC  54763.64
  30059 HDFC  52214.19
```

</details>

## P8.11 — set_index, reset_index, sort_index

**Exam phrasings**

- "Set Student_ID as the index in place, then sort the index in place." (Session 13 Ex 51)
- "After Exercise 51, reset the index in place." (Ex 52)
- "Set RollNo as the index and slice students with roll numbers 25 through 40" (03/Ex 2 Q4)
- "After setting Date as the index, slice the records from 2024-01-10 to 2024-01-20." (03/Ex 1 Q6)
- "sort the DataFrame by its row labels"

**Core idea.** `loc` needs labels, so you must first *make* the ID column the index. Three methods, and the `inplace` rule:

| Method | Does | Returns |
| --- | --- | --- |
| `df.set_index("ID")` | moves a column into the row labels | a new DataFrame |
| `df.reset_index()` | moves the row labels back to a column | a new DataFrame |
| `df.sort_index()` | orders rows by their labels | a new DataFrame |
| any of them with `inplace=True` | modifies `df` | **`None`** |

**Template**

```python
d = df.set_index("ID_COL")          # assignment form (preferred)

df.set_index("ID_COL", inplace=True)   # in-place form, when the question says "in place"
df.sort_index(inplace=True)
df.reset_index(inplace=True)
```

**Worked (Ex 51 and Ex 52)**

```python
ix = pd.read_excel(W, sheet_name="Indexed_Data")
ix.set_index("Student_ID", inplace=True)
ix.sort_index(inplace=True)
print(ix.head(4))
print("index name:", ix.index.name)

ix.reset_index(inplace=True)
print(ix.head(4))
print("columns:", list(ix.columns))
```

```text
                    Name  Age       City  Score
Student_ID                                     
ST101         Ananya Rao   22     Mumbai     71
ST102       Arjun Kapoor   34  Bengaluru     80
ST103         Ishita Sen   33       Pune     90
ST104       Vikram Joshi   26       Pune     95
index name: Student_ID
  Student_ID          Name  Age       City  Score
0      ST101    Ananya Rao   22     Mumbai     71
1      ST102  Arjun Kapoor   34  Bengaluru     80
2      ST103    Ishita Sen   33       Pune     90
3      ST104  Vikram Joshi   26       Pune     95
```

`reset_index` put `Student_ID` back as the first column and restored the 0,1,2,… labels.

**Worked — `inplace=True` returns `None` (Ex 50; the same fact is examined for every method)**

```python
srt = pd.read_excel(W, sheet_name="Sorting_Data")
out = srt.sort_values(by="Age", inplace=True)
print("return value:", out)
print(srt.head(6))
```

```text
return value: None
   Employee_ID          Name  Department  Age  Score  Salary
4         E005    Tanvi Bhat   Marketing   24     90  108389
8         E009   Aditi Sinha   Marketing   26     72   99951
10        E011    Neha Reddy  Operations   26     90  102251
14        E015  Leena Thomas   Marketing   28     84   95958
15        E016  Omkar Sawant   Analytics   28     90   46307
16        E017  Kavya Pillai   Marketing   28     72   60884
```

So `df = df.sort_values(..., inplace=True)` destroys your DataFrame by assigning `None` to it. Pick one style: either assign the result, or use `inplace=True` without assigning.

**Variants**

| If the question says | Change to |
| --- | --- |
| "sort the labels descending" | `df.sort_index(ascending=False)` |
| "keep the ID as a column as well" | `df.set_index("ID", drop=False)` |
| "renumber the rows 0..n after sorting" | `df.sort_values("Age").reset_index(drop=True)` |
| "index by branch and loan id" | `df.set_index(["branch","loan_id"])` then `df.loc["Panaji"]` |
| "undo the index without keeping it" | `df.reset_index(drop=True)` |

```python
ix2 = students.set_index("Student_ID")
print(ix2.sort_index(ascending=False).head(4))
print(emp.sort_values("Age").reset_index(drop=True).head(4)[["Employee_ID","Age"]])
mi = bank.set_index(["branch","loan_id"]).sort_index()
print(mi.loc["Panaji"].head(3)[["product","principal_lakhs"]])
```

```text
                   Name  Age    City  Score
Student_ID                                 
ST115       Aditi Sinha   22    Pune     88
ST114       Nikhil Jain   34  Mumbai     96
ST113         Riya Bose   30   Delhi     64
ST112       Sameer Khan   31     Goa     81
  Employee_ID  Age
0        E005   24
1        E009   26
2        E011   26
3        E015   28
          product  principal_lakhs
loan_id                           
20010    Personal             9.99
20012        Auto            26.66
20019        Auto            19.13
```

**Traps**

- **Label slicing an index that is not sorted can return the wrong rows or nothing at all.** Run `sort_index()` first when the question involves a range of labels. See the two demonstrations under P8.4 Traps.
- After `set_index("Student_ID")` the ID is **no longer a column**, so `df["Student_ID"]` raises `KeyError` and `iloc[:, 0]` is now `Name`.
- `set_index` does not sort. `sort_index` does not set. Ex 51 asks for both, in that order.
- Re-read the sheet before a fresh `inplace` chain, or you are operating on a frame you already mutated. The Session 13 exercises say "re-read the sheet" for exactly this reason.

**Drill**

1. Set `Employee_ID` as the index of `emp` in place, sort the index in place, then print rows `E002` through `E005`.

<details><summary>Answer</summary>

```python
e = pd.read_excel(W, sheet_name="Sorting_Data")
e.set_index("Employee_ID", inplace=True)
e.sort_index(inplace=True)
print(e.loc["E002":"E005"])
```

```text
                       Name Department  Age  Score  Salary
Employee_ID                                               
E002         Karan Malhotra    Finance   34     84   74361
E003            Pooja Menon  Analytics   30     78  101080
E004           Aditya Verma  Marketing   28     72  119379
E005             Tanvi Bhat  Marketing   24     90  108389
```

</details>

## P8.12 — Date-index slicing: range, whole month, open-ended

**Exam phrasings**

- "After setting Date as the index, slice the records from 2024-01-10 to 2024-01-20." (03/Ex 1 Q6)
- "Set Date as the index and slice records from 2024-03-10 to 2024-03-20, showing only the Close and Volume columns." (03/Ex 3 Q3)
- "show all transactions in March 2024"
- "select every record from 2024-04-25 onwards"

**Core idea.** Three steps, always the same three steps:

```python
df["Date"] = pd.to_datetime(df["Date"])     # 1. make it a real datetime
D = df.set_index("Date").sort_index()       # 2. put it in the index and sort
D.loc["2024-03-10":"2024-03-20"]            # 3. slice with date strings, both ends INCLUDED
```

A `DatetimeIndex` also understands **partial** date strings: `"2024-03"` means the whole of March, `"2024"` means the whole year.

**Template**

```python
df["DATE_COL"] = pd.to_datetime(df["DATE_COL"])
D = df.set_index("DATE_COL").sort_index()
D.loc["YYYY-MM-DD":"YYYY-MM-DD"]                  # range
D.loc["YYYY-MM"]                                  # whole month
D.loc["YYYY-MM-DD":]                              # from a date onwards
D.loc[:"YYYY-MM-DD"]                              # up to a date
D.loc["YYYY-MM-DD":"YYYY-MM-DD", ["COL1","COL2"]] # range + chosen columns
```

**Worked (03/Ex 3 Q3 — date range with only two columns)**

```python
acme["Date"] = pd.to_datetime(acme["Date"])
A = acme.set_index("Date").sort_index()
q = A.loc["2024-03-10":"2024-03-20", ["Close","Volume"]]
print(q)
print("rows:", q.shape[0])
```

```text
             Close  Volume
Date                      
2024-03-10  101.00   11902
2024-03-11  101.21    3515
2024-03-12  102.80    8551
2024-03-13  107.13    6982
2024-03-14  108.37    3255
2024-03-15  106.08    4533
2024-03-16  104.29    8647
2024-03-17  104.09    8467
2024-03-18  105.28    3560
2024-03-19  104.74    6585
2024-03-20  105.67    3845
rows: 11
```

11 rows — the 10th **and** the 20th are both in the answer.

**Worked (03/Ex 1 Q6 — same recipe on the loan file)**

```python
loans["Date"] = pd.to_datetime(loans["Date"])
LD = loans.set_index("Date").sort_index()
print(LD.loc["2024-01-10":"2024-01-20"])
print("rows:", LD.loc["2024-01-10":"2024-01-20"].shape[0])
```

```text
            LoanID     Branch     LoanProduct  NumBorrowers  PerBorrowerAmount  DisbursedAmount Channel
Date                                                                                                   
2024-01-10   11010      Delhi   Personal Loan             4            1000000          4000000  Branch
2024-01-11   11011       Pune        SME Loan             1             150000           150000  Online
2024-01-12   11012      Delhi        SME Loan             5             300000          1500000  Online
2024-01-13   11013  Hyderabad       Auto Loan             5            2000000         10000000  Online
2024-01-14   11014       Pune        SME Loan             3            2000000          6000000  Branch
2024-01-15   11015  Bengaluru        SME Loan             4             300000          1200000  Branch
2024-01-16   11016  Bengaluru       Home Loan             3             300000           900000  Online
2024-01-17   11017     Mumbai       Auto Loan             5             150000           750000  Online
2024-01-18   11018  Bengaluru   Personal Loan             4             500000          2000000  Online
2024-01-19   11019     Mumbai   Personal Loan             2            1000000          2000000  Online
2024-01-20   11020     Mumbai  Education Loan             1            2000000          2000000  Online
rows: 11
```

**Worked — whole month, whole year, open-ended**

```python
print("index type:", type(A.index).__name__)
print("2024-03 rows:", A.loc["2024-03"].shape[0], "| 2024-04 rows:", A.loc["2024-04"].shape[0],
      "| 2024 rows:", A.loc["2024"].shape[0])
print(A.loc["2024-04-25":].shape[0], "rows from 2024-04-25 to the end")
print(A.loc[:"2024-03-05"].shape[0], "rows up to 2024-03-05")
print("January 2024 loans:", LD.loc["2024-01"].shape[0])
```

```text
index type: DatetimeIndex
2024-03 rows: 31 | 2024-04 rows: 29 | 2024 rows: 60
5 rows from 2024-04-25 to the end
5 rows up to 2024-03-05
January 2024 loans: 31
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "sort by date, show the first 14" | no index needed: `df.sort_values("Date").head(14)` |
| "records in Q1 2024" | `D.loc["2024-01":"2024-03"]` |
| "dates are 01-07-2025 style (day first)" | `pd.to_datetime(col, dayfirst=True)` |
| "keep Date as a column and still filter" | `df[(df["Date"] >= "2024-03-10") & (df["Date"] <= "2024-03-20")]` |
| "count records per month" | `D.resample("ME").size()` or `D.index.month` |

**Traps**

- **Forgetting `pd.to_datetime` half-works and that is the danger.** With ISO-formatted text an `Index` of strings still slices correctly, but partial strings break:

```python
s2 = pd.read_csv(P3 + "Exercise 3 - Stock Prices/EX_C_stock_ACME.csv").set_index("Date")
print("index type:", type(s2.index).__name__, "dtype:", s2.index.dtype)
print("string slice still works:", s2.loc["2024-03-15":"2024-03-24"].shape[0], "rows")
print(s2.loc["2024-03"])
```

```text
index type: Index dtype: object
string slice still works: 10 rows
KeyError: '2024-03'
```

  Convert the column and you get a `DatetimeIndex`, and `loc["2024-03"]` returns the month.
- Sort the index. An unsorted `DatetimeIndex` makes a range slice unreliable (same failure mode as P8.4).
- The dates in `EX_C_stock_ACME.csv` are **calendar** days 2024-03-01 to 2024-04-29 (60 consecutive rows), not trading days — weekends are present, so "10 trading days" and "10 rows" are the same thing here.
- The stop date is included, unlike `iloc`. That is exactly what 03/Ex 3 Q5 tests — see P8.1 and the write-up answers.

**Drill**

1. Show `Close` and `Volume` for 2024-03-15 to 2024-03-24 and report the row count.

<details><summary>Answer</summary>

```python
q = A.loc["2024-03-15":"2024-03-24", ["Close","Volume"]]
print(q.head(4))
print("rows:", q.shape[0])
```

```text
             Close  Volume
Date                      
2024-03-15  106.08    4533
2024-03-16  104.29    8647
2024-03-17  104.09    8467
2024-03-18  105.28    3560
rows: 10
```

</details>

## P8.13 — sort_values: one key, many keys, descending, missing values

**Exam phrasings**

- "Sort by Age in ascending order and store the result in a new DataFrame." (Session 13 Ex 73)
- "Sort first by Age ascending and then Score descending." (Ex 74)
- "Sort by Age in place." (Ex 50)
- "Sort students first by Department (ascending) and then by Total score (descending)." (03/Ex 2 Q3)
- "sort them by City ascending and within each city by Total disbursed amount descending" (03/Ex 1 Q4)

**Core idea.** `by=` takes one name or a list. With a list, `ascending=` takes a **matching list** of `True`/`False`, one per key. "Within each X, by Y descending" always means two keys.

**Template**

```python
df.sort_values(by="COL")                                        # ascending (default)
df.sort_values(by="COL", ascending=False)                       # descending
df.sort_values(by=["KEY1","KEY2"], ascending=[True, False])     # within each KEY1, KEY2 desc
df.sort_values(by="COL", na_position="first")                   # missing values first
df.sort_values(by="COL", inplace=True)                          # modify df, returns None
```

**Worked (Ex 73)**

```python
by_age = emp.sort_values(by="Age", ascending=True)
print(by_age.head(8))
```

```text
   Employee_ID          Name  Department  Age  Score  Salary
4         E005    Tanvi Bhat   Marketing   24     90  108389
8         E009   Aditi Sinha   Marketing   26     72   99951
10        E011    Neha Reddy  Operations   26     90  102251
14        E015  Leena Thomas   Marketing   28     84   95958
15        E016  Omkar Sawant   Analytics   28     90   46307
16        E017  Kavya Pillai   Marketing   28     72   60884
3         E004  Aditya Verma   Marketing   28     72  119379
5         E006   Sameer Khan  Operations   28     78  113263
```

**Worked (Ex 74 — the second key visibly changes the order)**

`Sorting_Data` has five employees aged 28 and five aged 30, so the tie-break is visible.

```python
two = emp.sort_values(by=["Age","Score"], ascending=[True, False])
print(emp.sort_values(by="Age")[["Employee_ID","Age","Score"]].head(10).to_string(index=False))
print(two[["Employee_ID","Age","Score"]].head(10).to_string(index=False))
```

```text
Employee_ID  Age  Score
       E005   24     90
       E009   26     72
       E011   26     90
       E015   28     84
       E016   28     90
       E017   28     72
       E004   28     72
       E006   28     78
       E010   30     90
       E003   30     78

Employee_ID  Age  Score
       E005   24     90
       E011   26     90
       E009   26     72
       E016   28     90
       E015   28     84
       E006   28     78
       E004   28     72
       E017   28     72
       E014   30     95
       E010   30     90
```

With one key the age-28 block is in arbitrary order (84, 90, 72, 72, 78). With two keys it is 90, 84, 78, 72, 72 — strictly descending inside the age group. That is the mark.

**Worked — `na_position`**

`Missing_Data` has five missing `Score` values.

```python
md = pd.read_excel(W, sheet_name="Missing_Data")
print(md.sort_values("Score")[["Name","Score"]].tail(6).to_string(index=False))
print(md.sort_values("Score", na_position="first")[["Name","Score"]].head(6).to_string(index=False))
```

```text
          Name  Score
   Aditi Sinha   98.0
    Meera Iyer    NaN
    Rahul Naik    NaN
   Sneha Patil    NaN
Karan Malhotra    NaN
    Rahul Naik    NaN

          Name  Score
    Meera Iyer    NaN
    Rahul Naik    NaN
   Sneha Patil    NaN
Karan Malhotra    NaN
    Rahul Naik    NaN
   Pooja Menon   55.0
```

`NaN` goes **last by default, in both directions**. `na_position="first"` moves it to the top.

**Variants**

| If the question says | Change to |
| --- | --- |
| "descending" / "highest first" / "largest first" | `ascending=False` |
| "three keys" | `by=["a","b","c"], ascending=[True, False, True]` |
| "sort by the row labels, not a column" | `df.sort_index()` |
| "sort in place" | `inplace=True` and do not assign |
| "keep ties in their original order" | `kind="mergesort"` (a stable sort) |
| "sort the column, not the frame" | `df["Score"].sort_values()` |

The default sort is **not stable**, which is why the one-key output above looks shuffled inside each tie group:

```python
print(emp.sort_values("Age", kind="mergesort")[["Employee_ID","Age"]].head(8).to_string(index=False))
print(emp.sort_values("Age")[["Employee_ID","Age"]].head(8).to_string(index=False))
```

```text
Employee_ID  Age
       E005   24
       E009   26
       E011   26
       E004   28
       E006   28
       E015   28
       E016   28
       E017   28

Employee_ID  Age
       E005   24
       E009   26
       E011   26
       E015   28
       E016   28
       E017   28
       E004   28
       E006   28
```

`mergesort` keeps E004 before E006 before E015 (file order); the default `quicksort` does not.

**Traps**

- `ascending` must be the **same length** as `by`. `ascending=[True]` with two keys raises `ValueError`.
- `sort_values` does not renumber the index. Add `.reset_index(drop=True)` if the question wants 0,1,2,…
- Sorting a text column is alphabetical and **case-sensitive**: uppercase sorts before lowercase.
- Sorting a numeric column stored as text sorts "10" before "9". Check `df.dtypes` first.
- `df.sort_values("Age", inplace=True)` returns `None` (see P8.11).

**Drill**

1. 03/Ex 2 Q3: sort `port` by `Department` ascending then `TotalScore` descending; print the first 10 rows.

<details><summary>Answer</summary>

```python
q = port.sort_values(by=["Department","TotalScore"], ascending=[True, False])
print(q.head(10))
```

```text
    RollNo         Name Department  Semester  Pick1_Score  Pick2_Score  Pick3_Score  TotalScore
25      26  Student_026  Analytics         4           76           87           99         262
86      87  Student_087  Analytics         4           63           99           88         250
51      52  Student_052  Analytics         2           94           55           93         242
60      61  Student_061  Analytics         2           85           87           68         240
18      19  Student_019  Analytics         3           95           50           90         235
19      20  Student_020  Analytics         2           78           79           78         235
68      69  Student_069  Analytics         2           89           77           66         232
87      88  Student_088  Analytics         3           98           57           72         227
42      43  Student_043  Analytics         2           85           60           76         221
35      36  Student_036  Analytics         2           75           64           75         214
```

</details>

## P8.14 — Filter, sort, then slice the top or bottom N

**Exam phrasings**

- "Sort by broker ascending and notional descending, then return the first 12 rows using slicing." (04/Ex 1 Q3)
- "Sort by branch asc and emi_estimate desc, return the top 10 rows using slicing." (04/Ex 2 Q6)
- "Sort by scheme asc and units desc; return the first 10 rows via slicing." (04/Ex 3 Q6)
- "Sort by amount desc; return rows 10–19 using .iloc." (04/Ex 3 Q8)
- "Sort by risk_grade then by principal_lakhs (desc), and return rows 20–39 using .iloc." (04/Ex 2 Q8)
- "Sort the dataset by Date ascending and show the first 14 loan records." (03/Ex 1 Q5)

**Core idea.** Always three steps, always in this order: **filter → sort → slice.** The slice must be
**positional** (`.iloc`, `head`, `tail`), because sorting has broken the link between label and position.
Once you have sorted, `.loc[0:11]` no longer means "the first 12 rows".

**Template**

```python
out = (df.loc[COND]                                                # 1 filter (omit if not asked)
         .sort_values(by=["KEY1","KEY2"], ascending=[True, False]) # 2 sort
         .iloc[0:N])                                               # 3 slice by position
print(out)
```

| The question's words | The slice |
| --- | --- |
| "the first 12 rows using slicing" | `.iloc[:12]` (or `.head(12)`) |
| "the top 10 rows using slicing" | `.iloc[:10]` |
| "rows 10–19 using .iloc" | `.iloc[10:20]` |
| "rows 20–39 using .iloc" | `.iloc[20:40]` |
| "the last 6 rows" | `.iloc[-6:]` (or `.tail(6)`) |

**Worked (04/Ex 1 Q3 — two keys, opposite directions, then the first 12)**

```python
q = trades.sort_values(by=["broker","notional"], ascending=[True, False])
print(q.iloc[:12][["trade_id","broker","ticker","notional"]].to_string(index=False))
```

```text
 trade_id broker   ticker   notional
    10026   HDFC     SBIN 3340853.04
    10081   HDFC     SBIN 3040851.52
    10009   HDFC AXISBANK 2301112.62
    10015   HDFC      TCS 1955118.78
    10007   HDFC     SBIN 1857527.11
    10021   HDFC     SBIN 1395461.40
    10057   HDFC RELIANCE 1355881.56
    10079   HDFC     INFY 1291915.27
    10046   HDFC     INFY 1129711.58
    10051   HDFC      ITC  604562.40
    10010   HDFC HDFCBANK  591512.66
    10050   HDFC     INFY  585846.54
```

All twelve rows are broker `HDFC` because `HDFC` sorts first alphabetically and there are more than
twelve HDFC trades. Inside that block `notional` falls strictly. **That is exactly what the question
wants** — do not "fix" it by mixing brokers.

**Worked (04/Ex 3 Q8 — a middle slice after a descending sort)**

```python
q = mf.sort_values("amount", ascending=False)
print(q.iloc[10:20][["txn_id","amc","amount"]].to_string(index=False))
```

```text
 txn_id  amc   amount
  30030 HDFC 87398.93
  30054 Axis 87291.04
  30043 Axis 87013.15
  30026  UTI 85880.93
  30052 HDFC 83553.83
  30056  SBI 79569.04
  30036  UTI 79396.17
  30051 Axis 78831.85
  30058  UTI 78191.45
  30005  SBI 76294.86
```

These are the 11th to 20th largest transactions. Say so in your answer — "rows 10–19" counted from
zero are ranks 11 to 20.

**Worked (04/Ex 2 Q8 — text key ascending, numeric key descending, rows 20–39)**

```python
q = bank.sort_values(by=["risk_grade","principal_lakhs"], ascending=[True, False])
print(q.iloc[20:40].shape)
print(q.iloc[20:40][["loan_id","risk_grade","principal_lakhs"]].to_string(index=False))
```

```text
(20, 10)
 loan_id risk_grade  principal_lakhs
   20038          B            24.51
   20006          B            24.35
   20075          B            22.06
   20024          B            21.92
   20043          B            20.57
   20065          B            19.43
   20053          B            19.41
   20029          B            18.14
   20034          B            16.67
   20002          B            16.35
   20078          B            16.01
   20001          B            12.70
   20007          B            12.62
   20020          B            11.59
   20009          B             8.00
   20025          B             6.49
   20054          B             4.83
   20037          B             2.00
   20052          C            30.42
   20003          C            30.07
```

The slice straddles the A/B/C grade boundary. That is correct: the window is positional, not per group.

**Worked — the full three-step pipeline (filter, sort, slice, renumber)**

```python
q = (trades.loc[(trades["segment"] == "CASH") & (trades["quantity"] >= 500)]
           .sort_values("quantity", ascending=False)
           .iloc[:5]
           .reset_index(drop=True))
print(q[["trade_id","segment","quantity"]].to_string(index=False))
```

```text
 trade_id segment  quantity
    10061    CASH       969
    10026    CASH       966
    10058    CASH       947
    10041    CASH       935
    10062    CASH       917
```

**Worked (03/Ex 1 Q5 — sort by date, then the first 14)**

`Date` is text in the CSV, so convert it first or the sort is alphabetical (see P8.12).

```python
l = loans.copy()
l["Date"] = pd.to_datetime(l["Date"])
print(l.sort_values("Date").head(14)[["LoanID","Date","Branch","DisbursedAmount"]].to_string(index=False))
```

```text
 LoanID       Date    Branch  DisbursedAmount
  11001 2024-01-01 Bengaluru           900000
  11002 2024-01-02 Hyderabad          3000000
  11003 2024-01-03    Mumbai          2500000
  11004 2024-01-04    Mumbai          1200000
  11005 2024-01-05      Pune          1000000
  11006 2024-01-06      Pune          1000000
  11007 2024-01-07 Bengaluru          2000000
  11008 2024-01-08     Delhi          1000000
  11009 2024-01-09    Mumbai          3000000
  11010 2024-01-10     Delhi          4000000
  11011 2024-01-11      Pune           150000
  11012 2024-01-12     Delhi          1500000
  11013 2024-01-13 Hyderabad         10000000
  11014 2024-01-14      Pune          6000000
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "using slicing" | `.iloc[:N]` — the examiner wants to see the slice, not `head` |
| "top 10" with no sort key given | sort by the obvious value column descending, and say which one you chose |
| "the bottom 10" | `.iloc[-10:]` after the same sort, **or** flip `ascending` and take `.iloc[:10]` |
| "renumber the rows 0..N" | add `.reset_index(drop=True)` |
| "only these columns" | add `[["A","B","C"]]` after the slice |
| "the top 10 per group" | `df.sort_values(...).groupby("G").head(10)` |
| "just the largest 5, no slicing" | `df.nlargest(5, "COL")` — see P8.15 |

```python
s = trades.sort_values(by=["broker","notional"], ascending=[True, False])
print("head(12) == iloc[:12]:", s.head(12).equals(s.iloc[:12]))
print(bank.sort_values(["branch","emi_estimate"], ascending=[True, False])
          .groupby("branch").head(1)[["loan_id","branch","emi_estimate"]].to_string(index=False))
```

```text
head(12) == iloc[:12]: True
 loan_id branch  emi_estimate
   20016 Mapusa      93113.35
   20036 Margao      52117.36
   20019 Panaji     137342.01
   20077  Ponda     122051.67
   20022  Vasco      55259.03
```

**Traps**

- **`.loc[0:11]` after a sort silently returns the wrong number of rows.** The labels 0…11 are now
  scattered, and `.loc` with a slice on an unsorted integer index returns whatever it finds between
  them. No error is raised:

```python
s = trades.sort_values(by=["broker","notional"], ascending=[True, False])
print("iloc[:12] ->", s.iloc[:12].shape, "rows   <- correct")
print("loc[0:11] ->", s.loc[0:11].shape, "rows   <- WRONG, and no error")
```

```text
iloc[:12] -> (12, 10) rows   <- correct
loc[0:11] -> (9, 10) rows   <- WRONG, and no error
```

- Sort **before** you slice. `df.iloc[:12].sort_values(...)` sorts the first twelve file rows, which is
  a different (and wrong) answer.
- `ascending=[True, False]` must line up with `by=["branch","emi_estimate"]` in the same order.
- "top 10" is not the same as "10 largest" when there are ties — see P8.15 `keep=`.
- The index labels in the output stay as they were in the file. Do not add `reset_index` unless asked.

**Drill**

1. 04/Ex 2 Q6: sort `bank` by `branch` ascending and `emi_estimate` descending, return the top 10 rows using slicing.
2. 03/Ex 3 Q4: days where `Close >= 100` **and** `Volume >= 6000`, sorted by `Close` descending; show the first 8.

<details><summary>Answers</summary>

```python
q = bank.sort_values(by=["branch","emi_estimate"], ascending=[True, False])
print(q.iloc[:10][["loan_id","branch","emi_estimate"]].to_string(index=False))
```

```text
 loan_id branch  emi_estimate
   20016 Mapusa      93113.35
   20057 Mapusa      72107.05
   20004 Mapusa      58471.38
   20060 Mapusa      58232.52
   20024 Mapusa      35659.54
   20065 Mapusa      33332.16
   20026 Mapusa      31301.22
   20039 Mapusa      28303.99
   20006 Mapusa      27323.63
   20050 Mapusa      26477.08
```

```python
q = acme.loc[(acme["Close"] >= 100) & (acme["Volume"] >= 6000)].sort_values("Close", ascending=False)
print(q.shape)
print(q.head(8).to_string(index=False))
```

```text
(41, 4)
      Date Ticker  Close  Volume
2024-04-26   ACME 127.53    7300
2024-04-27   ACME 126.14    6068
2024-04-29   ACME 126.04    7351
2024-04-24   ACME 123.68    7181
2024-04-20   ACME 122.53   10903
2024-04-18   ACME 121.99    8917
2024-04-19   ACME 121.63    6062
2024-04-23   ACME 120.43    9762
```

</details>

## P8.15 — nlargest and nsmallest

**Exam phrasings**

- "Display the five largest claims." (Integrated Case 3 Q12)
- "Display the five largest holdings based on Current_Value." (Integrated Case 2 Q13)
- "five highest-volume trading days" (Integrated Case 1)
- "show the three lowest salaries"
- "identify the top 10 loans by principal"
- "which five days had the highest closing price"
- "difference between nlargest and sort_values().head()"

**Core idea.** `nlargest(n, "COL")` = sort that column descending and take the first `n`, in one call.
`nsmallest(n, "COL")` = ascending. Both return a **DataFrame with all the columns**, already in order.

**Template**

```python
df.nlargest(N, "COL")                    # N biggest rows by COL
df.nsmallest(N, "COL")                   # N smallest rows by COL
df.nlargest(N, ["COL1","COL2"])          # COL2 breaks ties in COL1
df.nlargest(N, "COL", keep="all")        # keep every tied row, may return more than N
df["COL"].nlargest(N)                    # Series form: just the values
```

**Worked — five largest, three smallest, five highest**

```python
print(loans.nlargest(5, "DisbursedAmount")[["LoanID","Branch","DisbursedAmount"]].to_string(index=False))
print(emp.nsmallest(3, "Salary")[["Employee_ID","Name","Salary"]].to_string(index=False))
print(acme.nlargest(5, "Close").to_string(index=False))
```

```text
 LoanID    Branch  DisbursedAmount
  11013 Hyderabad         10000000
  11025    Mumbai         10000000
  11039 Bengaluru         10000000
  11180     Delhi         10000000
  11033 Bengaluru          8000000
Employee_ID         Name  Salary
       E012  Sahil Gupta   45204
       E016 Omkar Sawant   46307
       E017 Kavya Pillai   60884
      Date Ticker  Close  Volume
2024-04-26   ACME 127.53    7300
2024-04-27   ACME 126.14    6068
2024-04-29   ACME 126.04    7351
2024-04-28   ACME 125.76    5221
2024-04-25   ACME 125.66    3525
```

**Worked — it is identical to `sort_values(...).head(n)`**

```python
a = trades.nlargest(10, "notional")
b = trades.sort_values("notional", ascending=False).head(10)
print("identical:", a.equals(b))
```

```text
identical: True
```

So either form earns the mark. Use `nlargest` when the question says "the five largest"; use
`sort_values` when the question says "sort … then take the first five" (P8.14) — answer in the
vocabulary the examiner used.

**Worked — ties, and the `keep=` argument**

`Sorting_Data` has five employees on a `Score` of 90 and two on 95, so "the top 3 scores" is ambiguous.

```python
print(emp["Score"].value_counts().to_string())
print(emp.nlargest(3, "Score")[["Employee_ID","Score"]].to_string(index=False))
print(emp.nlargest(3, "Score", keep="last")[["Employee_ID","Score"]].to_string(index=False))
print(emp.nlargest(3, "Score", keep="all")[["Employee_ID","Score"]].to_string(index=False))
```

```text
Score
78    5
90    5
72    3
84    2
95    2
Employee_ID  Score
       E008     95
       E014     95
       E005     90
Employee_ID  Score
       E014     95
       E008     95
       E016     90
Employee_ID  Score
       E008     95
       E014     95
       E005     90
       E010     90
       E011     90
       E012     90
       E016     90
```

`keep="first"` (the default) and `keep="last"` both return exactly 3 rows but pick **different**
employees for the third place. `keep="all"` returns 7 rows — every row tied at the cut-off. In the exam,
add one sentence: *"five employees share a score of 90, so I report all tied rows."* That sentence is
worth marks (the same tie problem appears in the frequency-distribution chapter).

**Variants**

| If the question says | Change to |
| --- | --- |
| "the five largest, break ties by salary" | `df.nlargest(5, ["Score","Salary"])` |
| "the single largest row" | `df.nlargest(1, "COL")` or `df.loc[df["COL"].idxmax()]` |
| "just the value, not the row" | `df["COL"].max()` / `df["COL"].nlargest(3)` |
| "the date of the highest close" | `df.loc[df["Close"].idxmax(), "Date"]` |
| "the largest 5 among the unsecured loans" | filter first: `df.loc[df["secured"] == False].nlargest(5, "COL")` |
| "the top 3 in each group" | `df.sort_values("COL", ascending=False).groupby("G").head(3)` |

```python
print(emp.nlargest(5, ["Score","Salary"])[["Employee_ID","Score","Salary"]].to_string(index=False))
print(loans["DisbursedAmount"].nlargest(3))
sub = bank.loc[bank["secured"] == False]
print(sub.nlargest(5, "principal_lakhs")[["loan_id","product","secured","principal_lakhs"]].to_string(index=False))
```

```text
Employee_ID  Score  Salary
       E008     95  119657
       E014     95   86092
       E010     90  111291
       E005     90  108389
       E011     90  102251
12    10000000
24    10000000
38    10000000
Name: DisbursedAmount, dtype: int64
 loan_id  product  secured  principal_lakhs
   20032 Personal    False            29.78
   20039     Auto    False            29.67
   20023 Personal    False            27.88
   20055 Personal    False            27.65
   20036     Home    False            26.93
```

**Traps**

- `nlargest` works on **numeric columns only**. On text it raises:

```python
try:
    emp.nlargest(3, "Name")
except Exception as e:
    print(type(e).__name__ + ":", e)
```

```text
TypeError: Column 'Name' has dtype object, cannot use method 'nlargest' with this dtype
```

- `idxmax()` returns an **index label**, not a row and not a position. Use it inside `.loc`, and remember
  it reports only the *first* maximum even when several rows tie:

```python
print("idxmax:", loans["DisbursedAmount"].idxmax(), "| max:", loans["DisbursedAmount"].max())
print(loans.loc[loans["DisbursedAmount"].idxmax(), ["LoanID","Branch","DisbursedAmount"]].to_string())
print("rows actually tied at the max:", (loans["DisbursedAmount"] == loans["DisbursedAmount"].max()).sum())
```

```text
idxmax: 12 | max: 10000000
LoanID                 11013
Branch             Hyderabad
DisbursedAmount     10000000
rows actually tied at the max: 4
```

- `df.nlargest(5)` without a column name is a `TypeError` for a DataFrame — the column is required.
- `nlargest` ignores `NaN` silently; it never puts a missing value in the top N.
- Argument order is `(n, columns)`, not `(columns, n)`.

**Drill**

1. Top 10 `bank` loans by `principal_lakhs`, showing `loan_id`, `branch`, `principal_lakhs`.
2. The three lowest `nav` transactions in `mf`.
3. The five highest-volume ACME trading days.

<details><summary>Answers</summary>

```python
print(bank.nlargest(10, "principal_lakhs")[["loan_id","branch","principal_lakhs"]].to_string(index=False))
print(mf.nsmallest(3, "nav")[["txn_id","scheme","nav"]].to_string(index=False))
print(acme.nlargest(5, "Volume").to_string(index=False))
```

```text
 loan_id branch  principal_lakhs
   20052 Panaji            30.42
   20031 Panaji            30.31
   20003  Vasco            30.07
   20032 Panaji            29.78
   20039 Mapusa            29.67
   20026 Mapusa            29.03
   20023 Margao            27.88
   20055 Margao            27.65
   20036 Margao            26.93
   20062  Ponda            26.83
 txn_id scheme   nav
  30024   Debt 10.20
  30013 Equity 26.15
  30049 Equity 28.39
      Date Ticker  Close  Volume
2024-03-10   ACME 101.00   11902
2024-04-08   ACME 115.88   11538
2024-03-01   ACME 100.72   11509
2024-04-04   ACME 112.64   11408
2024-04-07   ACME 114.96   11402
```

</details>

## P8.16 — Sort by the column at a given position

**Exam phrasings**

- "Using .iloc, return rows 5:35 and columns 1:8, then sort by the column at position 2 ascending." (04/Ex 2 Q2)
- "Using .iloc, return rows 15:45 and columns 0:6, then sort by the column at position 5 descending." (04/Ex 3 Q2)
- "sort by the third column"
- "sort by column number 5"
- "how do I sort when the question gives a column number instead of a name"

**Core idea.** `sort_values` accepts column **names only**. Turn the position into a name with
`df.columns[POSITION]` and sort on that. There is no `iloc`-style sort.

**Template**

```python
POS = 2
df.sort_values(by=df.columns[POS], ascending=True)

sub = df.iloc[R1:R2, C1:C2]
sub.sort_values(by=sub.columns[POS], ascending=True)   # POS counted inside the SLICE
sub.sort_values(by=df.columns[POS], ascending=True)    # POS counted in the ORIGINAL frame
```

**The ambiguity you must resolve out loud.** When the question slices columns first and *then* says
"the column at position 2", position 2 of the slice and position 2 of the original are different
columns. Print `sub.columns` and write one sentence saying which reading you used. Both readings score
if you state the assumption; neither scores if you say nothing.

**Worked (04/Ex 2 Q2 — the ambiguous one)**

```python
sub = bank.iloc[5:35, 1:8]
print("sub.shape:", sub.shape)
print("sub.columns:", list(sub.columns))
print("column at position 2 of the slice:", sub.columns[2])
print("column at position 2 of the original:", bank.columns[2])
q = sub.sort_values(by=sub.columns[2], ascending=True)
print(q.head(8).to_string())
```

```text
sub.shape: (30, 7)
sub.columns: ['branch', 'product', 'risk_grade', 'principal_lakhs', 'interest_rate', 'tenure_months', 'secured']
column at position 2 of the slice: risk_grade
column at position 2 of the original: product
    branch   product risk_grade  principal_lakhs  interest_rate  tenure_months  secured
29   Vasco      Auto          A            15.39           8.31            171    False
12   Vasco      Home          A            19.61           9.43            116    False
13   Ponda      Home          A            21.83           9.16            134     True
18  Panaji      Auto          A            19.13          11.29             15    False
17   Vasco  Personal          A            23.36          12.33            207    False
5   Mapusa      Home          B            24.35          11.45            200    False
30  Panaji  Personal          B            30.31          10.86            138     True
28   Vasco       SME          B            18.14           7.41            230     True
```

Model sentence for the answer sheet: *"After `iloc[5:35, 1:8]` the columns are re-numbered from 0, so
position 2 is `risk_grade`; I sorted on that."*

The other reading — position 2 of the original frame, i.e. `product`:

```python
print(sub.sort_values(by=bank.columns[2]).head(5).to_string())
```

```text
    branch product risk_grade  principal_lakhs  interest_rate  tenure_months  secured
32  Mapusa    Auto          D            10.55           9.62             92    False
20  Margao    Auto          C            12.46          10.37            225    False
18  Panaji    Auto          A            19.13          11.29             15    False
10  Mapusa    Auto          D            11.93          11.29            114     True
11  Panaji    Auto          D            26.66           9.35            117    False
```

**Worked (04/Ex 3 Q2 — no ambiguity, because the column slice starts at 0)**

```python
sub3 = mf.iloc[15:45, 0:6]
print("sub3.shape:", sub3.shape, "| columns:", list(sub3.columns))
print("position 5 ->", sub3.columns[5])
q3 = sub3.sort_values(by=sub3.columns[5], ascending=False)
print(q3.head(8).to_string(index=False))
```

```text
sub3.shape: (30, 6) | columns: ['txn_id', 'amc', 'scheme', 'channel', 'units', 'nav']
position 5 -> nav
 txn_id   amc scheme     channel   units   nav
  30044 ICICI Hybrid Distributor  125.49 96.93
  30027 ICICI Hybrid Distributor  848.84 68.84
  30032  Axis Equity Distributor 1527.38 68.84
  30026   UTI Equity Distributor 1270.24 67.61
  30033   UTI Equity Distributor 1636.37 63.37
  30017  Axis Hybrid      Online 1454.81 62.76
  30021   UTI Equity      Online  312.10 61.31
  30023 ICICI Equity Distributor 1706.45 60.76
```

When `C1 == 0` the two readings coincide, so no assumption is needed.

**Variants**

| If the question says | Change to |
| --- | --- |
| "sort by the third column" (1-based English) | `df.sort_values(by=df.columns[2])` — the third column is position **2** |
| "descending" | add `ascending=False` |
| "by columns 3 and 4, the second descending" | `df.sort_values(by=list(df.columns[[3,4]]), ascending=[True, False])` |
| "sort by the last column" | `df.sort_values(by=df.columns[-1])` |
| "which column is at position 5?" | `print(df.columns[5])` — always print it |
| "reorder the columns themselves, left to right" | `df.sort_values(by="ROW_LABEL", axis=1)` |

```python
keys = list(bank.columns[[3, 4]])
print("keys:", keys)
print(bank.sort_values(by=keys, ascending=[True, False]).head(5)[keys + ["loan_id"]].to_string(index=False))
print(scores.head(3).to_string())
print(scores.sort_values(by="S1", axis=1).head(3).to_string())
```

```text
keys: ['risk_grade', 'principal_lakhs']
risk_grade  principal_lakhs  loan_id
         A            27.65    20055
         A            25.75    20079
         A            23.36    20018
         A            22.85    20051
         A            21.83    20014
         Math  Science  English
Student                        
S1         66       61       67
S2         88       89       62
S3         87       84       67
         Science  Math  English
Student                        
S1            61    66       67
S2            89    88       62
S3            84    87       67
```

`axis=1` sorted the **columns** left-to-right by the values in row `S1` (61, 66, 67).

**Traps**

- `df.sort_values(by=2)` treats `2` as a **label**, not a position, so it raises `KeyError` whenever the
  column names are strings:

```python
try:
    bank.sort_values(by=2).head(3)
except Exception as e:
    print(type(e).__name__ + ":", e)
```

```text
KeyError: 2
```

- It only "works" when the column labels genuinely are integers — for example a frame built with no header:

```python
num = pd.DataFrame([[3,1],[1,2],[2,0]])
print(num.sort_values(by=1).to_string())
```

```text
   0  1
2  2  0
0  3  1
1  1  2
```

- English counts from 1, pandas counts from 0. "The third column" is `df.columns[2]`.
- `df.columns[[3,4]]` is an `Index`, not a list. `sort_values` accepts it, but wrap it in `list(...)` so
  the pairing with `ascending=[True, False]` is obvious to the marker.
- Take the slice **first**, then compute `sub.columns[POS]` from the slice — not the other way round.

**Drill**

1. From `trades`, take rows `0:20` and columns `1:6` with `.iloc`, then sort by the column at position 3 descending. Show the first 6 rows.

<details><summary>Answer</summary>

```python
sub = trades.iloc[0:20, 1:6]
print("columns:", list(sub.columns), "-> position 3 is", sub.columns[3])
print(sub.sort_values(by=sub.columns[3], ascending=False).head(6).to_string())
```

```text
columns: ['ticker', 'side', 'quantity', 'price', 'broker'] -> position 3 is price
      ticker  side  quantity    price   broker
8   AXISBANK   BUY       681  3379.02     HDFC
9   HDFCBANK  SELL       179  3304.54     HDFC
3       INFY   BUY       429  3010.62  Zerodha
6       SBIN   BUY       673  2760.07     HDFC
18       ITC   BUY       629  2711.30    ICICI
10        LT   BUY       256  2504.18   Upstox
```

</details>

## P8.17 — axis=0 versus axis=1

**Exam phrasings**

- "Read the sheet, keep Student as the row label, and calculate column totals for Math, Science and English." (Session 13 Ex 44)
- "Calculate each student's total across Math, Science and English." (Ex 45)
- "compute the row-wise total"
- "why does index_col=0 matter here"
- "sum down the columns versus across the rows"
- "add a Total row and a Total column"

**Core idea.** Read `axis` as *"the axis I am collapsing"*:

| Call | Collapses | One result per | Question wording |
| --- | --- | --- | --- |
| `df.sum(axis=0)` | the rows | **column** | "column totals", "total marks in Math" |
| `df.sum(axis=1)` | the columns | **row** | "each student's total", "row-wise total" |

`axis=0` is the default, so `df.sum()` is column totals. `axis="index"` = `axis=0`;
`axis="columns"` = `axis=1`.

**Template**

```python
df = pd.read_excel(W, sheet_name="Scores_Axis", index_col=0)   # index_col=0 is not optional
df.sum(axis=0)     # per column
df.sum(axis=1)     # per row
```

**Worked (Ex 44 — column totals)**

```python
print(scores.sum(axis=0))
```

```text
Math       717
Science    627
English    658
dtype: int64
```

**Worked (Ex 45 — each student's total)**

```python
print(scores.sum(axis=1))
```

```text
Student
S1    194
S2    239
S3    238
S4    203
S5    239
S6    207
S7    244
S8    229
S9    209
dtype: int64
```

**Worked — why `index_col=0` matters (this is the examined point)**

Without `index_col=0` the `Student` text column stays in the frame and joins the arithmetic.

```python
bad = pd.read_excel(W, sheet_name="Scores_Axis")
print("columns without index_col:", list(bad.columns))
print(bad.sum(axis=0))
```

```text
columns without index_col: ['Student', 'Math', 'Science', 'English']
Student    S1S2S3S4S5S6S7S8S9
Math                      717
Science                   627
English                   658
dtype: object
```

`axis=0` concatenated the student names into one string and the whole Series became `dtype: object`.
The row-wise version does not even run:

```python
try:
    bad.sum(axis=1)
except Exception as e:
    print(type(e).__name__ + ":", e)
print(bad.sum(axis=1, numeric_only=True).head(4))
```

```text
TypeError: can only concatenate str (not "int") to str
0    194
1    239
2    238
3    203
dtype: int64
```

Two fixes, both acceptable: `index_col=0` when reading (best — the labels stay useful), or
`numeric_only=True` on the call.

**Worked — Total column then Total row**

```python
sc = scores.copy()
sc["Total"] = sc.sum(axis=1)
sc.loc["Total"] = sc.sum(axis=0)
print(sc.to_string())
```

```text
         Math  Science  English  Total
Student                               
S1         66       61       67    194
S2         88       89       62    239
S3         87       84       67    238
S4         80       61       62    203
S5         95       60       84    239
S6         64       62       81    207
S7         88       63       93    244
S8         81       82       66    229
S9         68       65       76    209
Total     717      627      658   2002
```

Order matters: add the `Total` **column** first, then the `Total` **row**, so the corner cell (2002) is
the grand total. Reverse the order and the corner double-counts.

**Variants**

| If the question says | Change to |
| --- | --- |
| "average mark per subject" | `df.mean(axis=0)` |
| "average across the three subjects per student" | `df.mean(axis=1).round(2)` |
| "highest mark for each student" | `df.max(axis=1)` |
| "which subject each student scored best in" | `df.idxmax(axis=1)` |
| "count of non-missing values per column" | `df.count(axis=0)` |
| "drop a column" | `df.drop("COL", axis=1)` — here `axis=1` means *columns are the thing I name* |
| "only some columns take part" | `df.loc[:, "A":"C"].sum(axis=1)` |

```python
print(scores.mean(axis=1).round(2).head(4))
print("axis names:", scores.sum(axis=0).equals(scores.sum(axis="index")),
      scores.sum(axis=1).equals(scores.sum(axis="columns")))
print(pd.DataFrame({"best": scores.max(axis=1), "subject": scores.idxmax(axis=1)}).head(4).to_string())
print(list(emp.drop("Salary", axis=1).columns))
```

```text
Student
S1    64.67
S2    79.67
S3    79.33
S4    67.67
dtype: float64
axis names: True True
         best  subject
Student               
S1         67  English
S2         89  Science
S3         87     Math
S4         80     Math
['Employee_ID', 'Name', 'Department', 'Age', 'Score']
```

**Traps**

- `drop(axis=1)` and `sum(axis=1)` use `axis=1` for *opposite-feeling* reasons. For `drop`, `axis=1`
  names the thing being dropped; for `sum`, `axis=1` names the thing being collapsed. Learn the two
  phrases, not a single rule.
- On a real mixed frame always restrict the columns first (`df[["a","b"]].sum(axis=1)`) rather than
  relying on `numeric_only`, so the marker can see which columns you added.
- `df.sum()` with no argument is `axis=0`. If the question asks for student totals and you write
  `df.sum()`, you answer the wrong question.
- `axis=1` operations are row-wise and **ignore `NaN` by default**, so a student with one missing mark
  gets the sum of the other two, not `NaN`. Say so if missing values exist.

**Drill**

1. From `port`, compute the column totals of `Pick1_Score` … `Pick3_Score`, then each student's row total, and verify the row total equals the file's `TotalScore`.

<details><summary>Answer</summary>

```python
picks = port.loc[:, "Pick1_Score":"Pick3_Score"]
print(picks.sum(axis=0))
chk = picks.sum(axis=1)
print(chk.head(5).to_string())
print("matches TotalScore for all 120 rows:", chk.equals(port["TotalScore"]))
```

```text
Pick1_Score    7650
Pick2_Score    7907
Pick3_Score    7720
dtype: int64
0    178
1    117
2    200
3    223
4    208
matches TotalScore for all 120 rows: True
```

</details>

## P8.18 — Chained indexing and SettingWithCopyWarning

**Exam phrasings**

- "A value is trying to be set on a copy of a slice from a DataFrame"
- "set Score to 100 for all Finance employees"
- "why did my assignment not change the DataFrame"
- "difference between df[mask]['col'] = x and df.loc[mask,'col'] = x"
- "Fill missing Score values with 0 and modify the DataFrame itself" (Session 13 Ex 47)

**Core idea.** Two square-bracket operations in a row (`df[...][...]`) is **chained indexing**. pandas
builds a temporary intermediate object; your write lands in the temporary and the original is unchanged.
Fix it by doing the whole thing in **one** `.loc` call.

> Rule: **one pair of brackets to write, always `.loc[rows, cols] = value`.**

**Template**

```python
# WRONG — writes into a throw-away copy
df[df["COL"] == "VALUE"]["OTHER"] = NEW

# RIGHT — one .loc, rows and columns in the same call
df.loc[df["COL"] == "VALUE", "OTHER"] = NEW
```

**Worked — the warning, and the assignment that silently does nothing**

```python
import warnings
d = emp.copy()
print("Finance scores before:", d.loc[d["Department"] == "Finance", "Score"].tolist())
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")
    d[d["Department"] == "Finance"]["Score"] = 100      # WRONG
    print(w[0].category.__name__ + ":", str(w[0].message).strip())
print("Finance scores after :", d.loc[d["Department"] == "Finance", "Score"].tolist())

d.loc[d["Department"] == "Finance", "Score"] = 100      # RIGHT
print("after .loc         :", d.loc[d["Department"] == "Finance", "Score"].tolist())
```

```text
Finance scores before: [84, 95]
SettingWithCopyWarning: A value is trying to be set on a copy of a slice from a DataFrame.
Try using .loc[row_indexer,col_indexer] = value instead

See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
Finance scores after : [84, 95]
after .loc         : [100, 100]
```

The scores stayed `[84, 95]`. Nothing was written, nothing errored — only a warning. This is the single
most expensive silent failure in the syllabus.

(The `warnings.catch_warnings` wrapper is only there to print the message cleanly. In a plain script
pandas writes the same text to the screen by itself, prefixed with your file name and line number.)

**Worked — a subset you forgot to `.copy()`**

```python
import warnings
sub = bank[bank["branch"] == "Panaji"]          # no .copy()
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")
    sub["interest_rate"] = sub["interest_rate"] * 1.1
    print(w[0].category.__name__ + ":", str(w[0].message).strip().splitlines()[0])

safe = bank[bank["branch"] == "Panaji"].copy()  # with .copy() -> no warning
safe["interest_rate"] = safe["interest_rate"] * 1.1
print(safe[["loan_id","branch","interest_rate"]].head(3).round(3).to_string(index=False))
print("original untouched:", bank.loc[bank["branch"] == "Panaji", "interest_rate"].head(3).tolist())
```

```text
SettingWithCopyWarning: A value is trying to be set on a copy of a slice from a DataFrame.
 loan_id branch  interest_rate
   20010 Panaji          9.207
   20012 Panaji         10.285
   20019 Panaji         12.419
original untouched: [8.37, 9.35, 11.29]
```

If the question says "create a new DataFrame of Panaji loans and raise their rate", add `.copy()` when
you take the subset. If it says "update the original", never take a subset — write through `.loc`.

**Worked (Session 13 Ex 47 — `fillna` on a single column)**

```python
import warnings
md = pd.read_excel(W, sheet_name="Missing_Data")
print("NaN before:", md["Score"].isna().sum())
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")
    md["Score"].fillna(0, inplace=True)
    print(w[0].category.__name__ + ":", str(w[0].message).strip().splitlines()[0])
print("NaN after :", md["Score"].isna().sum(), "(it happened to work in pandas 2.3.3)")
```

```text
NaN before: 5
FutureWarning: A value is trying to be set on a copy of a DataFrame or Series through chained assignment using an inplace method.
NaN after : 0 (it happened to work in pandas 2.3.3)
```

Read that carefully. On pandas 2.3.3 the chained `fillna(inplace=True)` **did** work, but pandas warns
that it will stop working. Turn on the pandas-3.0 behaviour and it stops working immediately, and the
warning becomes an error class:

```python
import warnings
pd.options.mode.copy_on_write = True
md = pd.read_excel(W, sheet_name="Missing_Data")
d = emp.copy()
with warnings.catch_warnings(record=True) as w:
    warnings.simplefilter("always")
    md["Score"].fillna(0, inplace=True)
    d[d["Department"] == "Finance"]["Score"] = 100
    for x in w:
        print(x.category.__name__ + ":", str(x.message).strip().splitlines()[0])
print("NaN after      :", md["Score"].isna().sum())
print("Finance scores :", d.loc[d["Department"] == "Finance", "Score"].tolist())
pd.options.mode.copy_on_write = False
```

```text
ChainedAssignmentError: A value is trying to be set on a copy of a DataFrame or Series through chained assignment using an inplace method.
ChainedAssignmentError: A value is trying to be set on a copy of a DataFrame or Series through chained assignment.
NaN after      : 5
Finance scores : [84, 95]
```

So never rely on it. Use one of the forms below.

**Worked — the four forms that always work**

```python
import numpy as np
d = emp.copy()
d.loc[d["Department"] == "Finance", "Score"] = 100
print("1 .loc     :", d.loc[d["Department"] == "Finance", "Score"].tolist())

d = emp.copy()
d.loc[d["Department"] == "Finance", "Score"] = d.loc[d["Department"] == "Finance", "Score"] * 0
print("2 .loc calc:", d.loc[d["Department"] == "Finance", "Score"].tolist())

d = emp.copy()
d["Score"] = np.where(d["Department"] == "Finance", 100, d["Score"])
print("3 np.where :", d.loc[d["Department"] == "Finance", "Score"].tolist())

md = pd.read_excel(W, sheet_name="Missing_Data")
md.fillna({"Score": 0}, inplace=True)
print("4 fillna dict form, NaN left:", md["Score"].isna().sum())

md2 = pd.read_excel(W, sheet_name="Missing_Data")
md2["Score"] = md2["Score"].fillna(0)
print("  reassign form,    NaN left:", md2["Score"].isna().sum())
```

```text
1 .loc     : [100, 100]
2 .loc calc: [0, 0]
3 np.where : [100, 100]
4 fillna dict form, NaN left: 0
  reassign form,    NaN left: 0
```

**Variants**

| If the question says | Write |
| --- | --- |
| "set COL to V where COND" | `df.loc[COND, "COL"] = V` |
| "increase COL by 10% for those rows" | `df.loc[COND, "COL"] = df.loc[COND, "COL"] * 1.1` |
| "set two columns at once" | `df.loc[COND, ["A","B"]] = [1, 2]` |
| "create a flag column" | `df["FLAG"] = np.where(COND, "Yes", "No")` |
| "fill missing values in one column, in place" | `df.fillna({"COL": 0}, inplace=True)` |
| "replace the value in one cell" | `df.at["LABEL", "COL"] = V` (or `df.iat[POS_R, POS_C] = V`) |
| "work on a copy, leave the original alone" | `sub = df[COND].copy()` |

**Traps**

- Reading through a chain is fine; only **writing** is broken. `emp[emp["Department"] == "Finance"]["Score"]`
  returns the right values — that is why the bug is so easy to miss.
- `SettingWithCopyWarning` is a **warning**, not an error. Your script keeps running with wrong data.
- `df.loc[mask]["col"] = v` is still chained — the `.loc` does not save you. Both indexers must be in
  the same brackets.
- `df["col"][mask] = v` is chained too.
- `.at` / `.iat` are single-cell versions of `.loc` / `.iloc` and are safe to assign through.
- If the exercise says "modify the DataFrame itself", do **not** assign the result of an `inplace=True`
  call — it returns `None` (P8.11).

**Drill**

1. In a copy of `bank`, set `interest_rate` to 9.0 for every loan with `risk_grade == "D"`, report how many rows changed, and confirm the original `bank` is untouched.

<details><summary>Answer</summary>

```python
b = bank.copy()
b.loc[b["risk_grade"] == "D", "interest_rate"] = 9.0
print("rows changed:", (b["risk_grade"] == "D").sum())
print(b.loc[b["risk_grade"] == "D", ["loan_id","risk_grade","interest_rate"]].head(5).to_string(index=False))
print("original untouched:", bank.loc[bank["risk_grade"] == "D", "interest_rate"].head(5).tolist())
```

```text
rows changed: 16
 loan_id risk_grade  interest_rate
   20010          D            9.0
   20011          D            9.0
   20012          D            9.0
   20017          D            9.0
   20023          D            9.0
original untouched: [8.37, 11.29, 9.35, 12.35, 8.59]
```

</details>

## P8.19 — Map the examiner's column names onto the real ones

**Exam phrasings**

- "Show loans from LoanID 1010 to 1020 along with the columns from City to Revenue." (03/Ex 1 Q2)
- "sort them by City ascending and within each city by Total disbursed amount descending" (03/Ex 1 Q4)
- "Display summary statistics for Score1 through Score3." (03/Ex 2 Q2)
- "slice students with roll numbers 25 through 40, showing columns from Name to Total" (03/Ex 2 Q4)
- "the question names a column that does not exist in the file"
- "KeyError: 'Revenue'"

**Core idea.** The question paper and the data file **do not agree**. The prose was written against an
earlier version of the data. Your first three lines in any answer are therefore always the same.

**Template**

```python
print(df.shape)                 # 1 how big is it really
print(df.columns.tolist())      # 2 what are the columns really called
print(df.head(3))               # 3 what do the values really look like

df.loc[ID_A:ID_B, "REAL_START":"REAL_STOP"]     # then answer with the REAL names
df = df.rename(columns={"REAL_NAME": "QUESTION_NAME"})   # or rename, and say so
```

Then map each name the question used onto a real column, write **one sentence** recording the mapping,
and answer with the real names. Renaming the file to match the question is also acceptable — but say
that you did it.

**The known drift in these exercises**

| Exercise | The question says | The file actually has |
| --- | --- | --- |
| 03/Ex 1 (loans) | `City` | `Branch` |
| 03/Ex 1 | `Revenue`, "Total disbursed amount" | `DisbursedAmount` |
| 03/Ex 1 | "loan amount" | `PerBorrowerAmount` |
| 03/Ex 1 | LoanIDs `1010`–`1020` | LoanIDs `11001`–`11200` |
| 03/Ex 2 (portfolios) | `Score1`, `Score2`, `Score3` | `Pick1_Score`, `Pick2_Score`, `Pick3_Score` |
| 03/Ex 2 | `Total` | `TotalScore` |
| 03/Ex 2 | "three mock stock picks" | the same three `Pick*_Score` columns |

Expect the same trick in the exam with different names. The skill being tested is that you look.

**Worked — look first**

```python
print(list(loans.columns))
print("LoanID range:", loans["LoanID"].min(), "->", loans["LoanID"].max(), "| rows:", len(loans))
print(loans.head(3).to_string(index=False))
```

```text
['LoanID', 'Date', 'Branch', 'LoanProduct', 'NumBorrowers', 'PerBorrowerAmount', 'DisbursedAmount', 'Channel']
LoanID range: 11001 -> 11200 | rows: 200
 LoanID       Date    Branch   LoanProduct  NumBorrowers  PerBorrowerAmount  DisbursedAmount Channel
  11001 2024-01-01 Bengaluru Personal Loan             3             300000           900000  Branch
  11002 2024-01-02 Hyderabad      SME Loan             3            1000000          3000000  Online
  11003 2024-01-03    Mumbai     Auto Loan             5             500000          2500000  Online
```

**Worked — what the question's names actually do**

```python
for name in ["City", "Revenue", "Total disbursed amount"]:
    try:
        loans[name]
    except KeyError as e:
        print("KeyError:", e)
```

```text
KeyError: 'City'
KeyError: 'Revenue'
KeyError: 'Total disbursed amount'
```

And the ID range is worse, because it **fails silently** — a label slice that matches nothing returns an
empty frame, not an error:

```python
l = loans.set_index("LoanID")
out = l.loc[1010:1020]
print("shape:", out.shape)
print(out)
```

```text
shape: (0, 7)
Empty DataFrame
Columns: [Date, Branch, LoanProduct, NumBorrowers, PerBorrowerAmount, DisbursedAmount, Channel]
Index: []
```

An empty result is your signal that the labels in the question are not the labels in the file. Check
`df.index.min()` and `df.index.max()` and shift the range.

**Worked — 03/Ex 1 Q2 answered properly**

*Mapping: `City` → `Branch`, `Revenue` → `DisbursedAmount`, LoanIDs `1010`–`1020` → `11010`–`11020`.*

```python
l = loans.set_index("LoanID")
print(l.loc[11010:11020, "Branch":"DisbursedAmount"].to_string())
```

```text
           Branch     LoanProduct  NumBorrowers  PerBorrowerAmount  DisbursedAmount
LoanID                                                                             
11010       Delhi   Personal Loan             4            1000000          4000000
11011        Pune        SME Loan             1             150000           150000
11012       Delhi        SME Loan             5             300000          1500000
11013   Hyderabad       Auto Loan             5            2000000         10000000
11014        Pune        SME Loan             3            2000000          6000000
11015   Bengaluru        SME Loan             4             300000          1200000
11016   Bengaluru       Home Loan             3             300000           900000
11017      Mumbai       Auto Loan             5             150000           750000
11018   Bengaluru   Personal Loan             4             500000          2000000
11019      Mumbai   Personal Loan             2            1000000          2000000
11020      Mumbai  Education Loan             1            2000000          2000000
```

Eleven rows, because `.loc` includes the stop label (P8.1). The column slice `"Branch":"DisbursedAmount"`
picks up the three columns in between as well — that is what "from City to Revenue" asks for.

**Worked — 03/Ex 2 Q2 and Q4 answered properly**

*Mapping: `Score1..Score3` → `Pick1_Score..Pick3_Score`, `Total` → `TotalScore`.*

```python
print(list(port.columns))
print(port.loc[:, "Pick1_Score":"Pick3_Score"].describe().round(2).to_string())
p = port.set_index("RollNo")
print(p.loc[25:40, "Name":"TotalScore"].head(5).to_string())
print("rows returned:", p.loc[25:40, "Name":"TotalScore"].shape[0])
```

```text
['RollNo', 'Name', 'Department', 'Semester', 'Pick1_Score', 'Pick2_Score', 'Pick3_Score', 'TotalScore']
       Pick1_Score  Pick2_Score  Pick3_Score
count       120.00       120.00       120.00
mean         63.75        65.89        64.33
std          19.95        20.07        20.91
min          30.00        30.00        30.00
25%          47.75        49.75        44.75
50%          63.00        66.00        66.00
75%          81.25        83.50        82.25
max          99.00        99.00        99.00
               Name  Department  Semester  Pick1_Score  Pick2_Score  Pick3_Score  TotalScore
RollNo                                                                                      
25      Student_025   Marketing         4           32           99           49         180
26      Student_026   Analytics         4           76           87           99         262
27      Student_027     Finance         1           30           68           30         128
28      Student_028  Operations         2           52           66           35         153
29      Student_029   Marketing         4           30           78           38         146
rows returned: 16
```

`RollNo` 25 through 40 inclusive is 16 rows. Note that here the question's ID range **is** right — only
the column names drifted. Check both, every time.

**Variants**

| If the question says | Do this |
| --- | --- |
| "columns from X to Y" and neither exists | find the two real columns, then `df.loc[:, "REAL_X":"REAL_Y"]` |
| "rename the file's columns to match the question" | `df = df.rename(columns={"Branch":"City","DisbursedAmount":"Revenue"})`, then answer in the question's vocabulary |
| "total amount" and there are two amount columns | use the one that is the product (`DisbursedAmount`), and say why |
| the names differ only in case or spacing | `df.columns = df.columns.str.strip()` then compare lower-cased |
| you cannot tell which column is meant | pick the most plausible, state the assumption, carry on — a stated assumption scores, a blank does not |

```python
alias = loans.rename(columns={"Branch": "City", "DisbursedAmount": "Revenue"})
print(list(alias.columns))
print(alias.set_index("LoanID").loc[11010:11012, "City":"Revenue"].to_string())
```

```text
['LoanID', 'Date', 'City', 'LoanProduct', 'NumBorrowers', 'PerBorrowerAmount', 'Revenue', 'Channel']
         City    LoanProduct  NumBorrowers  PerBorrowerAmount  Revenue
LoanID                                                                
11010   Delhi  Personal Loan             4            1000000  4000000
11011    Pune       SME Loan             1             150000   150000
11012   Delhi       SME Loan             5             300000  1500000
```

A two-line finder that survives any rename — worth memorising, it costs nothing and never fails:

```python
def pick(df, *words):
    return [c for c in df.columns if any(w.lower() in c.lower() for w in words)]

print(pick(loans, "city", "branch"), pick(loans, "revenue", "disbursed"))
print(pick(port, "score", "total"))
print(loans.loc[:, pick(loans, "branch", "disbursed")].head(3).to_string(index=False))
```

```text
['Branch'] ['DisbursedAmount']
['Pick1_Score', 'Pick2_Score', 'Pick3_Score', 'TotalScore']
   Branch  DisbursedAmount
Bengaluru           900000
Hyderabad          3000000
   Mumbai          2500000
```

**Traps**

- An empty DataFrame after a label slice almost always means **wrong labels**, not "no matching data".
  The other cause is an unsorted index (P8.4, P8.11) — check both.
- `KeyError` names the column it could not find. Read it; the answer is in the message.
- Do not silently invent a column. A one-line mapping note is what converts a "wrong column" answer into
  a full-mark answer.
- `df.columns` is case- and space-sensitive: `"branch"` is not `"Branch"`.
- The 04-series files (`trades`, `bank`, `mf`) have **no** drift — their PDFs list the exact column names.
  Only the 03-series prose is stale. Do not go looking for problems that are not there.

**Drill**

1. An exam question says: *"Show loans from LoanID 1010 to 1020 along with the columns from City to Revenue."* Write the full answer, including the mapping sentence.

<details><summary>Answer</summary>

Mapping: the file has no `City` or `Revenue`; the equivalent columns are `Branch` and `DisbursedAmount`,
and `LoanID` runs from 11001 to 11200, so `1010`–`1020` is read as `11010`–`11020`.

```python
print(loans.columns.tolist())
l = loans.set_index("LoanID")
print(l.loc[11010:11020, "Branch":"DisbursedAmount"].shape)
print(l.loc[11010:11020, ["Branch","DisbursedAmount"]].to_string())
```

```text
['LoanID', 'Date', 'Branch', 'LoanProduct', 'NumBorrowers', 'PerBorrowerAmount', 'DisbursedAmount', 'Channel']
(11, 5)
           Branch  DisbursedAmount
LoanID                            
11010       Delhi          4000000
11011        Pune           150000
11012       Delhi          1500000
11013   Hyderabad         10000000
11014        Pune          6000000
11015   Bengaluru          1200000
11016   Bengaluru           900000
11017      Mumbai           750000
11018   Bengaluru          2000000
11019      Mumbai          2000000
11020      Mumbai          2000000
```

</details>

## Chapter cheat sheet

One page. `df` is the frame, `N`/`M` are positions, `A`/`B` are labels, `COL`/`KEY` are column names,
`COND` is a Boolean mask.

### The one sentence that answers half the paper

> `.loc` = **labels**, stop label **INCLUDED**. `.iloc` = **positions**, stop position **EXCLUDED**.

### Examiner's phrase → loc or iloc → exact code

| The question says | Tool | Exact code | Pattern |
| --- | --- | --- | --- |
| "the record with ID A" | `loc` | `df.loc["A"]` (after `set_index`) | P8.2 |
| "the first row" / "the last row" | `iloc` | `df.iloc[0]` / `df.iloc[-1]` | P8.2 |
| "the 15th row" (1-based) | `iloc` | `df.iloc[14]` | P8.2 |
| "the value of COL for ID A" | `loc` | `df.loc["A", "COL"]` | P8.3 |
| "the value in row 1, column 1" | `iloc` | `df.iloc[0, 0]` | P8.3 |
| "from label A to label B" | `loc` | `df.loc["A":"B"]` — **B included** | P8.4 |
| "these specific IDs" | `loc` | `df.loc[["A","B","C"]]` | P8.4 |
| "rows N to M" (English, inclusive) | `iloc` | `df.iloc[N:M+1]` — "10 to 29" → `df.iloc[10:30]` | P8.5 |
| "rows N:M using .iloc" | `iloc` | `df.iloc[N:M]` — copy the numbers as given | P8.5 |
| "the first N rows" | `iloc` | `df.iloc[:N]` = `df.head(N)` | P8.5 |
| "the last N rows" | `iloc` | `df.iloc[-N:]` = `df.tail(N)` | P8.5 |
| "every Nth row from 0 to M" | `iloc` | `df.iloc[0:M:N]` | P8.5 |
| "every Nth row up to M" | `iloc` | `df.iloc[:M:N]` | P8.5 |
| "reverse the row order" | `iloc` | `df.iloc[::-1]` | P8.5 |
| "columns X to Y" | `loc` | `df.loc[:, "X":"Y"]` — **Y included** | P8.6 |
| "only columns X, Y, Z" | either | `df[["X","Y","Z"]]` | P8.6 |
| "the first four columns" | `iloc` | `df.iloc[:, :4]` | P8.6 |
| "column positions 2:7" | `iloc` | `df.iloc[:, 2:7]` | P8.6 |
| "column positions [0,3,4,5]" | `iloc` | `df.iloc[:, [0,3,4,5]]` | P8.6 |
| "rows A to B, columns X to Y" | `loc` | `df.loc["A":"B", "X":"Y"]` | P8.7 |
| "rows N:M and columns P:Q" | `iloc` | `df.iloc[N:M, P:Q]` | P8.7 |
| "first 20 rows, first 4 columns" | `iloc` | `df.iloc[:20, :4]` | P8.7 |
| "rows where COND, showing X, Y" | `loc` | `df.loc[COND, ["X","Y"]]` | P8.8 |
| "COL in {A, B}" | `loc` | `df.loc[df["COL"].isin(["A","B"])]` | P8.9 |
| "NOT in segment S" | `loc` | `df.loc[~(df["seg"] == "S")]` | P8.9 |
| "A or B" | `loc` | `df.loc[(c1) \| (c2)]` — parentheses are mandatory | P8.9 |
| "between 8 and 9" | `loc` | `df.loc[df["COL"].between(8, 9)]` | P8.8 |
| "at least / at most" | `loc` | `>=` / `<=` | P8.8 |
| "where FLAG is True / False" | `loc` | `df.loc[df["FLAG"]]` / `df.loc[~df["FLAG"]]` | P8.10 |
| "records from 2024-03-10 to 2024-03-20" | `loc` | `df.loc["2024-03-10":"2024-03-20"]` | P8.12 |
| "all records in March 2024" | `loc` | `df.loc["2024-03"]` | P8.12 |
| "from 2024-04-25 onwards" | `loc` | `df.loc["2024-04-25":]` | P8.12 |
| "the first 12 rows after sorting" | `iloc` | `df.sort_values(...).iloc[:12]` | P8.14 |
| "rows 10–19 after sorting" | `iloc` | `df.sort_values(...).iloc[10:20]` | P8.14 |
| "the five largest by COL" | neither | `df.nlargest(5, "COL")` | P8.15 |
| "the three smallest by COL" | neither | `df.nsmallest(3, "COL")` | P8.15 |
| "the column at position 2" | name | `df.columns[2]`, then `df.sort_values(df.columns[2])` | P8.16 |
| "set COL to V where COND" | `loc` | `df.loc[COND, "COL"] = V` | P8.18 |

### Every sorting form in this chapter

```python
df.sort_values("COL")                                        # ascending (default)
df.sort_values("COL", ascending=False)                       # descending
df.sort_values(["KEY1","KEY2"], ascending=[True, False])     # "within each KEY1, KEY2 descending"
df.sort_values("COL", na_position="first")                   # NaN to the top (default is last)
df.sort_values("COL", kind="mergesort")                      # stable: ties keep file order
df.sort_values("COL", inplace=True)                          # mutates df, returns None
df.sort_values("COL").reset_index(drop=True)                 # renumber 0,1,2,...
df.sort_values(by=df.columns[2])                             # "sort by the column at position 2"
df.sort_values(by=list(df.columns[[3,4]]), ascending=[True, False])
df.sort_values(by="ROW_LABEL", axis=1)                        # reorder the COLUMNS by one row's values
df.sort_index()                                              # by row labels
df.sort_index(ascending=False)
df["COL"].sort_values()                                      # a Series, not the frame
df.nlargest(N, "COL"); df.nsmallest(N, "COL")
df.nlargest(N, "COL", keep="all")                            # keep every tied row
df.sort_values("COL", ascending=False).groupby("G").head(3)  # top 3 per group
```

### Every slicing form in this chapter

```python
df.loc["A"]            ; df.iloc[0]            # one row  -> Series
df.loc[["A","B"]]      ; df.iloc[[0, 1]]       # some rows -> DataFrame
df.loc["A":"B"]        ; df.iloc[N:M]          # row slice (loc includes B)
df.loc[:, "X":"Y"]     ; df.iloc[:, P:Q]       # column slice
df.loc["A":"B","X":"Y"]; df.iloc[N:M, P:Q]     # both axes
df.loc["A", "COL"]     ; df.iloc[0, 0]         # one cell
df.at["A", "COL"]      ; df.iat[0, 0]          # one cell, fast and safe to assign
df.loc[COND]           ; df.loc[COND, ["X","Y"]]
df.head(N); df.tail(N); df.iloc[:N]; df.iloc[-N:]; df.iloc[A:B:S]; df.iloc[::-1]
```

### Index management

```python
d = df.set_index("ID")                 # returns a new frame
df.set_index("ID", inplace=True)       # mutates, returns None
df.set_index("ID", drop=False)         # keep ID as a column too
df.set_index(["branch","loan_id"])     # MultiIndex
df.sort_index()                        # ALWAYS do this before a label slice
df.reset_index()                       # labels back to a column
df.reset_index(drop=True)              # labels thrown away, renumber 0..n
df["Date"] = pd.to_datetime(df["Date"]) ; df = df.set_index("Date").sort_index()
```

### axis

| Call | Collapses | One result per | Question wording |
| --- | --- | --- | --- |
| `df.sum(axis=0)` (default) | rows | column | "column totals" |
| `df.sum(axis=1)` | columns | row | "each student's total" |
| `df.drop("COL", axis=1)` | — | — | "drop the column" |
| `df.idxmax(axis=1)` | columns | row | "which subject was best" |

Read the sheet with `index_col=0` when the first column is a text label, or `axis=0` glues the names
into one string and `axis=1` raises `TypeError`.

### Write these sentences on the answer sheet — they carry marks

1. "`.loc` includes the stop label, `.iloc` excludes the stop position, which is why `loc` returns one extra row."
2. "'Rows 10 to 29' is 20 rows, so I wrote `iloc[10:30]`."
3. "I sorted the index before slicing by label."
4. "`ascending=[True, False]` pairs with `by=[KEY1, KEY2]` in that order."
5. "The file calls this column `REAL_NAME`, not `QUESTION_NAME`; I used `REAL_NAME`."
6. "N rows tie at the cut-off, so I report all of them (`keep='all'`)."
7. "I assigned with `df.loc[mask, col] = value` to avoid `SettingWithCopyWarning`."
