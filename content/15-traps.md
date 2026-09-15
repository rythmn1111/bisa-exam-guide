---
id: 15-traps
part: "Part VII — Exam Room"
title: "Traps, Error Messages and Tie-Breakers"
blurb: "Every mistake that costs marks, with the real pandas 2.3.3 error text, the cause and the one-line fix — plus a 60-second sanity check and a dozen mark-saving sentences."
order: 150
covers:
  - "Cross-cutting — every chapter"
  - "Pandas exercises — Class exercises (Session 13)"
  - "Pandas exercises — 01 Basics Exercise 1 (Bank Transactions)"
  - "Pandas exercises — 03 Sorting and slicing Exercises 1–2"
  - "Frequency distribution — Demo case and Practice Cases 1–3"
  - "Integrated exercises — Case 1 Q15, Case 2 Q11"
  - "Matplotlib exercises — Exercises 1–4"
datafiles:
  - "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
  - "Pandas exercises/Class exercises/customers.csv"
  - "Pandas exercises/Class exercises/customers_semicolon.csv"
  - "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv"
  - "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 1 - Loan Transactions/EX_A_loan_transactions.csv"
  - "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 2 - Student portfolios/EX_B_portfolios.xlsx"
  - "Frequency distribution/Demo case/loan_frequency_demo_dataset.xlsx"
  - "Frequency distribution/Practice exercises/Case 1/exercise_1_mutual_fund_transactions.xlsx"
  - "Frequency distribution/Practice exercises/Case 3/exercise_3_stock_transactions.xlsx"
  - "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
  - "Matplotlib/Matplotlib exercises/bank_branch_performance.csv"
  - "Matplotlib/Matplotlib exercises/credit_card_usage.csv"
patterns:
  - id: T1
    title: "`and` / `or` / `not` on a Series"
    phrasings:
      - "ValueError: The truth value of a Series is ambiguous"
      - "Use a.empty, a.bool(), a.item(), a.any() or a.all()"
      - "filter rows where Age is above 30 and Score is above 80"
      - "my filter with two conditions raises an error"
      - "how do I combine two conditions in a pandas filter"
  - id: T2
    title: "Missing parentheses around chained conditions"
    phrasings:
      - "Filter transactions where the City is Mumbai or Pune and the number of borrowers is at least 3"
      - "Filter students from Semester 2 or 3 who belong to Finance or Analytics"
      - "TypeError: Cannot perform 'ror_' with a dtyped [object] array and scalar of type [bool]"
      - "my two-condition filter returns the wrong number of rows"
      - "operator precedence of & and | in pandas"
  - id: T3
    title: "`df['a','b']` instead of `df[['a','b']]`"
    phrasings:
      - "Show only the Date, Branch, TxnType and Amount columns"
      - "KeyError: ('Age', 'Score')"
      - "KeyError: \"['Scores'] not in index\""
      - "select two columns from the DataFrame"
      - "display only these four columns"
  - id: T4
    title: "`.loc` stop is INCLUDED, `.iloc` stop is EXCLUDED"
    phrasings:
      - "Compare the result of slicing with RollNo 10:12 versus slicing the rows at positions 10:12"
      - "slice the records from 2024-01-10 to 2024-01-20"
      - "my slice returns one row fewer than expected"
      - "difference between loc and iloc slicing"
      - "show rows 2 to 7 of the dataset"
  - id: T5
    title: "`iloc` with a label, `loc` with a position"
    phrasings:
      - "TypeError: Cannot index by location index with a non-integer key"
      - "TypeError: cannot do positional indexing on Index with these indexers"
      - "TypeError: cannot do slice indexing on Index with these indexers"
      - "Compare the loan with LoanID 1015 versus the 15th row by position"
      - "IndexError: single positional indexer is out-of-bounds"
  - id: T6
    title: "Chained indexing and `SettingWithCopyWarning`"
    phrasings:
      - "SettingWithCopyWarning: A value is trying to be set on a copy of a slice from a DataFrame"
      - "Try using .loc[row_indexer,col_indexer] = value instead"
      - "Replace missing Amount values with 0 and display the affected rows"
      - "my assignment ran without an error but the DataFrame did not change"
      - "set a value only for the filtered rows"
  - id: T7
    title: "`df['col'].fillna(0, inplace=True)` — chained assignment"
    phrasings:
      - "FutureWarning: A value is trying to be set on a copy of a DataFrame or Series through chained assignment using an inplace method"
      - "Fill the missing values in the column with zero"
      - "Replace missing Score values with the mean"
      - "This inplace method will never work because the intermediate object always behaves as a copy"
      - "should I use inplace=True with fillna"
  - id: T8
    title: "`inplace=True` returns `None`"
    phrasings:
      - "AttributeError: 'NoneType' object has no attribute 'shape'"
      - "AttributeError: 'NoneType' object has no attribute 'head'"
      - "TypeError: object of type 'NoneType' has no len()"
      - "Create a version without rows having missing Amount and compare shapes with the original"
      - "df = df.dropna(inplace=True) gives None"
  - id: T9
    title: "`astype` has no `inplace`, and int casting fails on NaN"
    phrasings:
      - "TypeError: astype() got an unexpected keyword argument 'inplace'"
      - "IntCastingNaNError: Cannot convert non-finite values (NA or inf) to integer"
      - "convert the Age column to integer"
      - "change the data type of the column"
      - "cast the column to int after filling missing values"
  - id: T10
    title: "An int column becomes float64 the moment a NaN appears"
    phrasings:
      - "my IDs are printed as 11001.0 instead of 11001"
      - "why did my integer column turn into decimals after the merge"
      - "Leads shows 261.0 and NaN"
      - "keep the column as an integer when missing values are present"
      - "nullable integer dtype Int64"
  - id: T11
    title: "A semicolon file read without `sep`"
    phrasings:
      - "Read the semicolon-separated file into a DataFrame"
      - "my DataFrame has only one column containing everything"
      - "shape is (30, 1) instead of (30, 9)"
      - "Read the data from the specified sheet of the Excel workbook"
      - "ValueError: Worksheet named 'MissingData' not found"
      - "the first two rows are not part of the data table, use skiprows"
  - id: T12
    title: "`index_col` naming a column excluded by `usecols`"
    phrasings:
      - "ValueError: Index Customer_ID invalid"
      - "read only some columns and set one of them as the index"
      - "Load only the Name and Age columns with Customer_ID as the index"
      - "usecols and index_col together"
      - "index_col=0 picked the wrong column"
  - id: T13
    title: "`01-07-2025` is 1 July, not 7 January"
    phrasings:
      - "Date – Transaction date (YYYY-MM-DD)"
      - "Convert the Date column to datetime and extract the month"
      - "ValueError: time data \"01-07-2025\" doesn't match format \"%Y-%m-%d\""
      - "my transactions are spread across six months instead of one"
      - "dayfirst=True in pd.to_datetime"
      - "Sort the dataset by Date ascending and show the first 14 loan records"
  - id: T14
    title: "Missing-value tokens pandas does not recognise"
    phrasings:
      - "Identify the placeholder characters used for missing values and convert them to NaN"
      - "the Age column is dtype object even though it contains numbers"
      - "TypeError: unsupported operand type(s) for +: 'int' and 'str'"
      - "isna().sum() reports zero missing values but I can see dashes in the data"
      - "na_values in read_csv and read_excel"
  - id: T15
    title: "Column names with spaces, trailing spaces or odd capitalisation"
    phrasings:
      - "KeyError: 'Total_Deposits'"
      - "KeyError: 'Age Group'"
      - "Compare the Average Credit Limit by Age Group"
      - "strip whitespace from the column names"
      - "the column exists but pandas says KeyError"
  - id: T16
    title: "The question's column names are not the file's column names"
    phrasings:
      - "Show loans from LoanID 1010 to 1020 along with the columns from City to Revenue"
      - "Display summary statistics for Score1 through Score3"
      - "Sort students first by Department ascending and then by Total score descending"
      - "KeyError: 'City'"
      - "KeyError: \"None of [Index(['Score1', 'Score2', 'Score3'], dtype='object')] are in the [columns]\""
      - "the question mentions a column that does not exist in the file"
  - id: T17
    title: "`count()` counts non-null values, not rows"
    phrasings:
      - "Find the count, mean, median, minimum, maximum and standard deviation of the column"
      - "Find the total number of rows and columns"
      - "count in describe() is smaller than the number of rows"
      - "how many records are there in the dataset"
      - "count non-missing values in each column"
  - id: T18
    title: "`std()` uses ddof=1, NumPy uses ddof=0"
    phrasings:
      - "Determine the mean, median and standard deviation of Current_Value"
      - "my standard deviation does not match the model answer"
      - "sample versus population standard deviation in pandas"
      - "ddof=0 and ddof=1"
      - "Standard Deviation of Processing Days"
  - id: T19
    title: "`mean()` after `fillna(0)` is a different question"
    phrasings:
      - "Discuss what would happen if the missing values were filled with 0"
      - "Replace missing Amount values with 0 and display the affected rows"
      - "compare the mean before and after filling missing values"
      - "why did my average drop after handling missing data"
      - "is filling with zero appropriate here"
  - id: T20
    title: "`pd.cut` boundaries — does 5 belong to 0–5 or to 5–10?"
    phrasings:
      - "Create the following class intervals for Processing_Days: 0-5, 5-10, 10-15, 15-20, 20-25"
      - "Create a grouped frequency distribution using the intervals ₹0–50,000, ₹50,000–1,00,000"
      - "which class does a value of exactly 50,000 belong to"
      - "my frequency table differs from the model answer by one observation"
      - "inclusive and exclusive class limits, right=False"
  - id: T21
    title: "Values outside every bin become NaN and vanish"
    phrasings:
      - "the frequencies in my table do not add up to the number of rows"
      - "Create a grouped frequency distribution for Transaction_Value using the intervals ₹20,000–40,000 …"
      - "include_lowest=True in pd.cut"
      - "open-ended first and last class, less than and greater than"
      - "some rows are missing from my frequency distribution"
  - id: T22
    title: "`idxmax()` silently hides ties"
    phrasings:
      - "Identify the most common risk category"
      - "Most common investor type"
      - "the branch with the highest number of applications"
      - "Sector with the highest number of transactions"
      - "two categories have the same count, which one do I report"
      - "find the mode of a categorical column"
  - id: T23
    title: "An empty filter result is a legitimate answer"
    phrasings:
      - "Extract holdings for which Credit_Rating is AAA and Current_Value exceeds Rs. 4,00,000"
      - "my filter returns Empty DataFrame"
      - "ValueError: attempt to get argmax of an empty sequence"
      - "Filter all Credit transactions with Amount >= 200000"
      - "no rows satisfy the condition, what do I write"
  - id: T24
    title: "`nlargest` and `sort_values().head()` disagree on ties"
    phrasings:
      - "Display the five largest holdings based on Current_Value"
      - "Show the top 3 employees by Score"
      - "Five highest-volume Reliance trading days"
      - "which rows does nlargest keep when there is a tie"
      - "top N rows of a sorted DataFrame"
  - id: T25
    title: "A correlation near zero is a finding, not a failure"
    phrasings:
      - "Analyze the Relationship Between Total Deposits and Net Profit"
      - "Analyze the Relationship Between Credit Limit and Total Spend"
      - "Analyze the Relationship Between Age and Claim Amount"
      - "my scatter plot is just a cloud of points"
      - "interpret the scatter plot and comment on the relationship"
  - id: T26
    title: "`merge` silently multiplies rows on duplicate keys"
    phrasings:
      - "Combine the bond holdings with the bond master information using Bond_Code"
      - "merge the two DataFrames on the common column"
      - "my merged DataFrame has more rows than the original"
      - "MergeError: Merge keys are not unique in right dataset; not a many-to-one merge"
      - "validate and indicator arguments of pd.merge"
  - id: T27
    title: "`join` defaults to `how='left'` and refuses overlapping names"
    phrasings:
      - "ValueError: columns overlap but no suffix specified"
      - "join the two DataFrames on their index"
      - "why does join keep rows that have no match"
      - "Revenue_x and Revenue_y in my merged output"
      - "lsuffix rsuffix suffixes"
  - id: T28
    title: "NaN keys are dropped by `value_counts` and `groupby`, and sorted last"
    phrasings:
      - "how many records have a missing value in this column"
      - "Filter transactions from Pune branch or where Branch is missing"
      - "my value_counts total is less than the number of rows"
      - "Show the five lowest scores"
      - "dropna=False in groupby and value_counts"
  - id: T29
    title: "Duplicate rows inflate every count, sum and mean"
    phrasings:
      - "Identify and remove duplicate records"
      - "Find the number of duplicate rows in the dataset"
      - "my totals are higher than the model answer"
      - "drop_duplicates and duplicated"
      - "check for duplicates before summarising"
  - id: T30
    title: "`savefig` after `show()` writes a blank file"
    phrasings:
      - "save the complete figure as Stock_Analysis.png"
      - "save the same figure as Stock_Analysis.pdf"
      - "my saved PNG is empty or white"
      - "order of plt.savefig and plt.show"
      - "display the completed figure"
  - id: T31
    title: "`plt.pie` needs counts and labels in the same order"
    phrasings:
      - "Visualize the Proportion of Branches in Different Cities"
      - "Use plt.pie() and include labels for each city"
      - "Visualize the Proportion of Claims Approved vs. Rejected"
      - "my pie chart labels are attached to the wrong slices"
      - "ValueError: 'label' must be of length 'x'"
  - id: T32
    title: "Forgetting `plt.tight_layout()` on a multi-panel figure"
    phrasings:
      - "use plt.tight_layout() to prevent overlaps"
      - "Create a 2x3 grid of subplots using plt.subplot(2, 3, position)"
      - "my subplot titles and axis labels overlap"
      - "Use appropriate titles and axis labels, add grids where suitable, apply tight_layout()"
      - "arrange four charts in a 2x2 figure"
  - id: T33
    title: "`fillna(method='ffill')` is deprecated — use `ffill()`"
    phrasings:
      - "FutureWarning: Series.fillna with 'method' is deprecated and will raise in a future version"
      - "Forward fill the missing values"
      - "Use obj.ffill() or obj.bfill() instead"
      - "fill missing prices with the previous day's value"
      - "backward fill the column"
  - id: T34
    title: "`df.append` no longer exists — use `pd.concat`"
    phrasings:
      - "AttributeError: 'DataFrame' object has no attribute 'append'"
      - "add the new rows to the existing DataFrame"
      - "stack the two DataFrames one below the other"
      - "combine two DataFrames vertically"
      - "append a row to a DataFrame"
  - id: T35
    title: "`DataFrame.mean()` on mixed dtypes needs `numeric_only=True`"
    phrasings:
      - "TypeError: can only concatenate str (not \"int\") to str"
      - "Find the mean of every numeric column"
      - "Display descriptive statistics for the numeric columns"
      - "compute the column averages of the whole DataFrame"
      - "numeric_only argument"
  - id: T36
    title: "`pd.cut` returns an ordered Categorical of Intervals"
    phrasings:
      - "arrange the intervals in their proper order"
      - "sort_index() on a frequency table of intervals"
      - "the interval column will not export to CSV or Excel"
      - "my bins are listed in count order, not numeric order"
      - "Interval and CategoricalIndex dtype"
  - id: T37
    title: "`value_counts().reset_index()` column names differ by version"
    phrasings:
      - "Convert the grouped frequency distribution into a DataFrame with the columns Group, Frequency, Percentage, Cumulative_Frequency"
      - "KeyError: 'index' after reset_index"
      - "rename the columns of the frequency table"
      - "the reset_index column is called count not the column name"
      - "build a frequency table DataFrame"
  - id: T38
    title: "`describe()` now summarises datetime columns too"
    phrasings:
      - "Obtain descriptive statistics for the numerical variables"
      - "Display descriptive statistics for the numeric columns"
      - "why does describe() show a date column"
      - "std is NaN for my date column"
      - "describe(include='all') output"
---

## Chapter map

Every entry below is one trap, verified by running it on the real course data with
**Python 3.9.6 and pandas 2.3.3**. The error text in the `text` blocks is copied from the
console, not paraphrased.

| Trap | Use it when |
| --- | --- |
| T1 | Your two-condition filter raises `The truth value of a Series is ambiguous` |
| T2 | A filter runs but returns the wrong number of rows |
| T3 | Selecting several columns gives a `KeyError` |
| T4 | A slice has one row more or fewer than you expected |
| T5 | You mixed labels and positions in `.loc` / `.iloc` |
| T6 | An assignment ran but the DataFrame did not change |
| T7 | You wrote `df['col'].fillna(..., inplace=True)` |
| T8 | An `inplace=True` line destroyed your DataFrame |
| T9 | `astype` complains about `inplace`, or about NaN |
| T10 | An ID column prints as `11001.0` after a merge |
| T11 | The file loaded as one fat column, or you got the wrong sheet |
| T12 | `usecols` + `index_col` raises `Index ... invalid` |
| T13 | Dates are `DD-MM-YYYY` but the PDF says `YYYY-MM-DD` |
| T14 | `isna().sum()` says 0 but you can see `-`, `?`, `###` in the data |
| T15 | The column is on screen but `df['X']` raises `KeyError` |
| T16 | The question names a column the file does not have |
| T17 | `count` is smaller than the number of rows |
| T18 | Your standard deviation does not match the answer key |
| T19 | You filled NaN with 0 and then reported a mean |
| T20 | A value sits exactly on a class boundary |
| T21 | The frequencies do not add up to the row count |
| T22 | Two categories are tied for "most common" |
| T23 | The filter returns zero rows |
| T24 | "Top 5" has ties at the cut-off |
| T25 | The scatter plot is a shapeless cloud |
| T26 | The merged frame has more rows than the left frame |
| T27 | `join` kept unmatched rows, or refused overlapping names |
| T28 | Missing values silently disappeared from a group or a sort |
| T29 | Your totals are higher than expected |
| T30 | The saved PNG is blank |
| T31 | Pie labels are on the wrong slices |
| T32 | A 2×3 figure has overlapping labels |
| T33 | `fillna(method=...)` warns |
| T34 | `df.append` raises `AttributeError` |
| T35 | `df.mean()` raises `TypeError` on a text column |
| T36 | Interval bins sort in the wrong order or will not export |
| T37 | `reset_index()` produced a column called `count` |
| T38 | `describe()` unexpectedly includes a date column |

## How to read this chapter

Each trap has the same shape: **Symptom**, **Cause**, **Fix**, the **real message**, then the
template and variants. Skim the Symptom column; when one matches what is on your screen, read
that entry only.

Set the base path once. **In the exam, swap in the path you were given.**

```python
import pandas as pd
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W    = BASE + "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
```

All file paths in this chapter are written relative to `BASE`.

## T1 — `and` / `or` / `not` on a Series

**Exam phrasings**

- "Filter all Credit transactions with Amount >= 200000"
- "filter rows where Age is above 30 and Score is above 80"
- "Filter transactions from Pune branch or where Branch is missing"

**Symptom.** The filter raises `ValueError` before returning anything.

**Cause.** Python's `and`, `or`, `not` need a single `True`/`False`. A comparison on a Series
returns a whole column of booleans, so Python cannot reduce it to one value.

**Fix.** Use the element-wise operators `&`, `|`, `~` — and parenthesise each comparison.

**Core idea.** `and`/`or`/`not` are scalar operators; `&`/`|`/`~` are vectorised.

**Real message**

```python
df = pd.read_excel(W, sheet_name="Sorting_Data")
df[(df["Age"] > 30) and (df["Score"] > 80)]
```

```text
Traceback (most recent call last):
  ...
  File ".../pandas/core/generic.py", line 1580, in __nonzero__
    raise ValueError(
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

The identical message comes from `or`, `not`, `bool(series)` and from putting a Series in an
`if`. All five were run; all five produce that exact line.

**Template**

```python
df[(df[COL_A] > VALUE_A) & (df[COL_B] > VALUE_B)]   # both
df[(df[COL_A] > VALUE_A) | (df[COL_B] > VALUE_B)]   # either
df[~(df[COL_A] > VALUE_A)]                          # not
```

**Worked**

```python
df = pd.read_excel(W, sheet_name="Sorting_Data")
A = df["Age"] > 30
print("rows:", len(df), " A only:", int(A.sum()), " ~A:", int((~A).sum()))
```

```text
rows: 17  A only: 4  ~A: 13
```

**Variants**

| If the question says | Write |
| --- | --- |
| "and" / "both" | `&` |
| "or" / "either" | `\|` |
| "not" / "excluding" | `~` |
| "is one of Mumbai, Pune, Delhi" | `df[COL].isin(["Mumbai","Pune","Delhi"])` |
| "is missing" | `df[COL].isna()` |
| you prefer words | `df.query("Age > 30 and Score > 80")` — `and`/`or` **are** legal inside `query` |

**Traps**

- `df.query("Age > 30 and Score > 80")` runs fine and returned `(2, 6)` on `Sorting_Data`. `query` is the one place the English words work.
- `&` and `|` bind **tighter** than `>` and `==`, which is why the parentheses are compulsory — see T2.

**Drill**

1. From `Sorting_Data`, select employees in Marketing **or** Finance whose `Score` is at least 84.

<details><summary>Answer</summary>

```python
df[df["Department"].isin(["Marketing","Finance"]) & (df["Score"] >= 84)]
```

</details>

## T2 — Missing parentheses around chained conditions

**Exam phrasings**

- "Filter transactions where the City is Mumbai or Pune and the number of borrowers is at least 3"
- "Filter students from Semester 2 or 3 who belong to Finance or Analytics"
- "my two-condition filter returns the wrong number of rows"

**Symptom.** Either a `TypeError`/`ValueError`, **or — worse — a result that is silently wrong.**

**Cause.** `&` and `|` have higher precedence than the comparison operators, and `&` binds
tighter than `|`. Without parentheses pandas evaluates a different expression from the one you
meant.

**Fix.** Parenthesise **every** comparison, and parenthesise the `|` group when you mix `|` and `&`.

**Core idea.** `A & B | C` means `(A & B) | C`. If the question says "(X or Y) **and** Z", you
must write the brackets yourself.

**Real message**

```python
df[df["Age"] > 30 & df["Score"] > 80]
```

```text
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

```python
df[df["Department"] == "Finance" | df["Department"] == "Analytics"]
```

```text
TypeError: Cannot perform 'ror_' with a dtyped [object] array and scalar of type [bool]
```

**The silent version.** On `Sorting_Data` (17 rows), with `A = Age > 30`, `B = Score > 80`,
`C = Department == "Finance"`:

```python
A = df["Age"] > 30; B = df["Score"] > 80; C = df["Department"] == "Finance"
print("(A & B) | C ->", int(((A & B) | C).sum()), "rows")
print("A & (B | C) ->", int((A & (B | C)).sum()), "rows")
print("A & B | C   ->", int((A & B | C).sum()), "rows")
```

```text
(A & B) | C -> 3 rows
A & (B | C) -> 2 rows
A & B | C   -> 3 rows
```

No warning, no error — just a different answer. **Three rows or two rows depending on brackets.**

**Template**

```python
# "(X or Y) and Z"
df[(df[COL1].isin([X, Y])) & (df[COL2] >= Z)]

# "X and (Y or Z)"
df[(df[COL1] == X) & ((df[COL2] == Y) | (df[COL2] == Z))]
```

**Worked** — Exercise A Q4, with the file's real column names (see T16):

```python
L = BASE + "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 1 - Loan Transactions/EX_A_loan_transactions.csv"
loans = pd.read_csv(L)
sel = loans[(loans["Branch"].isin(["Mumbai","Pune"])) & (loans["NumBorrowers"] >= 3)]
print(sel.shape)
```

```text
(47, 8)
```

**Variants**

| Wording | Expression |
| --- | --- |
| "Mumbai or Pune and borrowers ≥ 3" | `(isin(["Mumbai","Pune"])) & (NumBorrowers >= 3)` |
| "between 100000 and 200000" | `df[COL].between(100000, 200000)` — inclusive both ends |
| "Semester 2 or 3 **and** Finance or Analytics" | `df[COL_S].isin([2,3]) & df[COL_D].isin(["Finance","Analytics"])` |
| three conditions | wrap each one, chain with `&` |

**Traps**

- Replace long `|` chains with `.isin([...])`: fewer brackets, fewer mistakes.
- `between()` is inclusive on both sides. If the question says "above 100000", `between` is wrong.
- Count the rows you get and say the number in your answer. A stated row count is what lets a marker see you checked.

**Drill**

1. Loans that are `Online` **and** either `SME Loan` or `Home Loan`. Report the row count.

<details><summary>Answer</summary>

```python
sel = loans[(loans["Channel"] == "Online") & (loans["LoanProduct"].isin(["SME Loan","Home Loan"]))]
print(len(sel))
```

</details>

## T3 — `df['a','b']` instead of `df[['a','b']]`

**Exam phrasings**

- "Show only the Date, Branch, TxnType, and Amount columns"
- "From the first 15 loans, display only the first four columns"
- "Display summary statistics for Score1 through Score3"

**Symptom.** `KeyError` with a tuple in it.

**Cause.** `df["Age", "Score"]` passes the **tuple** `('Age','Score')` as one key. pandas looks
for a single column with that name.

**Fix.** Two brackets. The inner one is a Python list of column names.

**Core idea.** One bracket = one column (returns a Series). Two brackets = a list of columns
(returns a DataFrame).

**Real message**

```python
df["Age", "Score"]
```

```text
KeyError: ('Age', 'Score')
```

And with a typo inside a correct list:

```python
df[["Age", "Scores"]]
```

```text
KeyError: "['Scores'] not in index"
```

**Template**

```python
df[[COL1, COL2, COL3]]
```

**Worked**

```python
print(df[["Age", "Score"]].head(2))
```

```text
   Age  Score
0   30     78
1   34     84
```

**Variants**

| Task | Code |
| --- | --- |
| one column as a Series | `df["Age"]` |
| one column as a DataFrame | `df[["Age"]]` |
| a contiguous block by label | `df.loc[:, "Name":"Score"]` |
| the first four columns | `df.iloc[:, 0:4]` |
| all but one column | `df.drop(columns=["Remarks"])` |

**Traps**

- `KeyError: "['Scores'] not in index"` names the offending column — read it, then run `df.columns` (T15, T16).
- `df.iloc[:, 0:4]` is the safe reading of "the first four columns" when the names are unknown.

**Drill**

1. Show `Date`, `Branch`, `TxnType`, `Amount` from `bank_transactions.csv`.

<details><summary>Answer</summary>

```python
bank = pd.read_csv(BASE + "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv")
bank[["Date","Branch","TxnType","Amount"]]
```

</details>

## T4 — `.loc` stop is INCLUDED, `.iloc` stop is EXCLUDED

**Exam phrasings**

- "Compare the result of slicing with RollNo 10:12 versus slicing the rows at positions 10:12"
- "slice students with roll numbers 25 through 40, showing columns from Name to Total"
- "Show rows 2 to 7 of the dataset"

**Symptom.** Your slice has exactly one row more or fewer than the model answer.

**Cause.** `.loc` slices by label and includes the stop label. `.iloc` slices by position and
excludes the stop position, like ordinary Python slicing.

**Fix.** Decide which one the question means, then **write one sentence saying which convention
you used.** Marks are given for that sentence.

**Core idea.** Same two numbers, different row counts.

**Real message** — none. This trap is silent, which is why it costs marks.

**Worked** — `Sorting_Data`, 17 rows, default `RangeIndex`:

```python
df = pd.read_excel(W, sheet_name="Sorting_Data")
print("df.loc[2:7]  rows =", len(df.loc[2:7]),  " labels:", list(df.loc[2:7].index))
print("df.iloc[2:7] rows =", len(df.iloc[2:7]), " labels:", list(df.iloc[2:7].index))
```

```text
df.loc[2:7]  rows = 6  labels: [2, 3, 4, 5, 6, 7]
df.iloc[2:7] rows = 5  labels: [2, 3, 4, 5, 6]
```

With a string index the same rule holds, and `.loc` label slices also work on columns:

```python
ix = pd.read_excel(W, sheet_name="Indexed_Data").set_index("Student_ID")
print(ix.loc["ST103":"ST107", "Name":"City"])
```

```text
                      Name  Age       City
Student_ID
ST103           Ishita Sen   33       Pune
ST104         Vikram Joshi   26       Pune
ST105       Nisha Kulkarni   32        Goa
ST106           Rahul Naik   21  Bengaluru
ST107          Sneha Patil   21  Bengaluru
```

**Template**

```python
df.loc[ROW_START:ROW_STOP, COL_START:COL_STOP]   # both ends included
df.iloc[POS_START:POS_STOP, CPOS_START:CPOS_STOP] # stop excluded
```

**Variants**

| Wording | Code | Rows |
| --- | --- | --- |
| "records 25 through 40" (IDs) | `df.loc[25:40]` | 16 |
| "rows at positions 25 to 40" | `df.iloc[25:40]` | 15 |
| "the first 15 rows" | `df.head(15)` or `df.iloc[:15]` | 15 |
| "the last 10 rows" | `df.tail(10)` | 10 |
| "positions 10:12" | `df.iloc[10:12]` | 2 |

**Traps**

- `.loc[1010:1020]` against an index of `11001…11200` returns **0 rows and no error** — see T16.
- A `.loc` label slice needs a sorted, unique index. On the loan file indexed by `Branch`, `df.loc["Delhi":"Mumbai"]` raises `KeyError: "Cannot get left slice bound for non-unique label: 'Delhi'"`; after `sort_index()` it returns 108 rows.
- **Write this sentence:** "`.loc` includes the end label, so rows 25–40 inclusive (16 rows) are shown."

**Drill**

1. From `Indexed_Data` indexed by `Student_ID`, show `ST110` to `ST113` and state the row count.

<details><summary>Answer</summary>

```python
ix.loc["ST110":"ST113"]   # 4 rows — .loc includes the stop label
```

</details>

## T5 — `iloc` with a label, `loc` with a position

**Exam phrasings**

- "Compare the result of selecting the loan with LoanID 1015 versus selecting the 15th row by position"
- "Compare the results of slicing with RollNo 10:12 versus slicing the rows at positions 10:12"
- "TypeError: Cannot index by location index with a non-integer key"

**Symptom.** A `TypeError`, `KeyError` or `IndexError` from an indexer that "looks right".

**Cause.** `.iloc` accepts only integers; `.loc` accepts only labels. When the index is strings
these are never interchangeable.

**Fix.** Labels → `.loc`. Positions → `.iloc`. Never mix.

**Core idea.** `iloc` = **i**nteger. `loc` = **l**abel.

**Real messages** — on `Indexed_Data` indexed by `Student_ID` (`ST101…ST115`):

| Call | Message |
| --- | --- |
| `ix.iloc["ST103"]` | `TypeError: Cannot index by location index with a non-integer key` |
| `ix.iloc["ST103":"ST107"]` | `TypeError: cannot do positional indexing on Index with these indexers [ST103] of type str` |
| `ix.loc[2]` | `KeyError: 2` |
| `ix.loc[2:7]` | `TypeError: cannot do slice indexing on Index with these indexers [2] of type int` |
| `ix.loc["ST999"]` | `KeyError: 'ST999'` |
| `ix.iloc[99]` | `IndexError: single positional indexer is out-of-bounds` |

**Template**

```python
df.loc[LABEL]          # by index label
df.iloc[POSITION]      # by 0-based position
df.iloc[POSITION - 1]  # "the Nth row" -> position N-1
```

**Worked** — the "compare them" question answered properly:

```python
loans = pd.read_csv(L).set_index("LoanID")
print("by label 11015 :", loans.loc[11015, "Branch"])
print("15th row       :", loans.iloc[14]["Branch"], "(position 14, LoanID", loans.index[14], ")")
```

```text
by label 11015 : Bengaluru
15th row       : Bengaluru (position 14, LoanID 11015 )
```

**Variants**

| Wording | Code |
| --- | --- |
| "the record with ID X" | `df.loc[X]` |
| "the Nth row" | `df.iloc[N-1]` |
| "the last row" | `df.iloc[-1]` |
| "rows 3, 7 and 9 by position" | `df.iloc[[2, 6, 8]]` |
| "these three IDs" | `df.loc[[ID1, ID2, ID3]]` |
| one cell, fastest | `df.at[LABEL, COL]` / `df.iat[POS, CPOS]` |

**Traps**

- After `reset_index()` the labels and positions coincide and the bug hides. It reappears on the next `set_index`.
- `.iloc[-1]` works; `.loc[-1]` looks for a label `-1`.
- In this file label 11015 **is** position 14, so the two answers agree. Say so — "they coincide here because the IDs are contiguous from 11001" — that is the marked point of the question.

**Drill**

1. Print the `Name` of the student with label `ST112` and of the 12th student. Are they the same?

<details><summary>Answer</summary>

```python
print(ix.loc["ST112", "Name"], "|", ix.iloc[11]["Name"])   # same row: ST112 is position 11
```

</details>

## T6 — Chained indexing and `SettingWithCopyWarning`

**Exam phrasings**

- "Replace missing Amount values with 0 and display the affected rows"
- "Set the Status of all Pune transactions to 'Review'"
- "my assignment ran without an error but the DataFrame did not change"

**Symptom.** A warning, and the frame is **unchanged**.

**Cause.** `df[mask]` builds a new object. Assigning into that object writes to the temporary
copy, which is then thrown away.

**Fix.** One indexer, not two: `df.loc[mask, "col"] = value`.

**Core idea.** Two square-bracket operations in a row on the left of `=` is always wrong.

**Real message**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
mask = df["Score"].isna()
print("NaN before:", int(df["Score"].isna().sum()))
df[mask]["Score"] = 0
print("NaN after :", int(df["Score"].isna().sum()))
```

```text
script.py:7: SettingWithCopyWarning:
A value is trying to be set on a copy of a slice from a DataFrame.
Try using .loc[row_indexer,col_indexer] = value instead

See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
  df[mask]["Score"] = 0
NaN before: 5
NaN after : 5
```

**Five NaN before, five NaN after.** The line did nothing.

**Template**

```python
df.loc[MASK, COL] = VALUE
```

**Worked**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
mask = df["Score"].isna()
df.loc[mask, "Score"] = 0
print("NaN after df.loc[mask,'Score'] = 0 ->", int(df["Score"].isna().sum()))
```

```text
NaN after df.loc[mask,'Score'] = 0 -> 0
```

No warning, and the frame really changed.

**Variants**

| Intent | Correct form |
| --- | --- |
| set one column for matching rows | `df.loc[mask, COL] = VALUE` |
| set several columns at once | `df.loc[mask, [COL1, COL2]] = 0` |
| compute from another column | `df.loc[mask, COL] = df.loc[mask, OTHER] * 2` |
| work on a subset and keep the original intact | `sub = df[mask].copy()` then `sub[COL] = ...` |
| conditional value for every row | `df[COL] = df[COL].where(~mask, VALUE)` |

**Traps**

- The same warning fires on `sub = df[df["Age"] > 30]` followed by `sub["Score"] = 0`. There the **subset** does change (13 rows, all zeros) but the parent `df` still has its 5 NaN. If the next question asks about `df`, you have lost the marks.
- Add `.copy()` whenever you intend to keep a filtered subset around: `sub = df[mask].copy()`.
- pandas 2.3.3 runs with `mode.copy_on_write = False`. Under pandas 3.0 the copy is guaranteed and the assignment will never propagate.

**Drill**

1. In `Missing_Data`, set `City` to `"Unknown"` wherever it is missing, then confirm zero NaN.

<details><summary>Answer</summary>

```python
df.loc[df["City"].isna(), "City"] = "Unknown"
print(int(df["City"].isna().sum()))   # 0
```

</details>

## T7 — `df['col'].fillna(0, inplace=True)` — chained assignment

**Exam phrasings**

- "Fill the missing values in the Score column with 0"
- "Replace the missing Income values with the column mean"
- "Replace missing Amount values with 0 and display the affected rows"

**Symptom.** A long `FutureWarning`. The frame **does** change on pandas 2.3.3 — so the code
looks fine today and breaks on any newer install.

**Cause.** `df["col"]` produces an intermediate Series. `inplace=True` mutates that
intermediate. It happens to share memory with `df` in pandas 2.x; from pandas 3.0 it will not.

**Fix.** Either of the two forms below. Both were run and both work silently.

**Core idea.** Never combine a column selection with `inplace=True`.

**Real message and the exact 2.3.3 behaviour**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("NaN in Score before:", int(df["Score"].isna().sum()))
df["Score"].fillna(0, inplace=True)
print("NaN in Score after :", int(df["Score"].isna().sum()))
```

```text
script.py:6: FutureWarning: A value is trying to be set on a copy of a DataFrame or Series through chained assignment using an inplace method.
The behavior will change in pandas 3.0. This inplace method will never work because the intermediate object on which we are setting values always behaves as a copy.

For example, when doing 'df[col].method(value, inplace=True)', try using 'df.method({col: value}, inplace=True)' or df[col] = df[col].method(value) instead, to perform the operation inplace on the original object.


  df["Score"].fillna(0, inplace=True)
NaN in Score before: 5
NaN in Score after : 0
```

**Read that carefully: on pandas 2.3.3 the fill DID take effect (5 NaN → 0 NaN).** Only the
warning tells you it is wrong. Do not rely on it.

**Template** — both correct forms, both verified silent:

```python
df[COL] = df[COL].fillna(VALUE)        # form 1 — reassign the column
df.fillna({COL: VALUE}, inplace=True)  # form 2 — dict on the whole frame
```

**Worked**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
df["Score"] = df["Score"].fillna(0)
print("form 1 ->", int(df["Score"].isna().sum()))

df = pd.read_excel(W, sheet_name="Missing_Data")
df.fillna({"Score": 0}, inplace=True)
print("form 2 ->", int(df["Score"].isna().sum()))
```

```text
form 1 -> 0
form 2 -> 0
```

**Variants**

| Task | Code |
| --- | --- |
| fill with the mean | `df[COL] = df[COL].fillna(df[COL].mean())` |
| fill with the median | `df[COL] = df[COL].fillna(df[COL].median())` |
| fill with the mode | `df[COL] = df[COL].fillna(df[COL].mode()[0])` |
| several columns, different values | `df.fillna({"Score": 0, "City": "Unknown"}, inplace=True)` |
| forward fill | `df[COL] = df[COL].ffill()` — see T33 |
| every numeric column | `df[num] = df[num].fillna(df[num].mean())` |

**Traps**

- `df["Score"].fillna(0)` **without** an assignment and without `inplace` changes nothing at all, silently. Always assign.
- Compute the replacement value **before** you fill if you also have to report the original mean (T19).
- The same warning text appears for `df[col].replace(..., inplace=True)` and `df[col].where(..., inplace=True)`.

**Drill**

1. Fill `Income` with its median and `Status` with `"Unknown"` in one statement.

<details><summary>Answer</summary>

```python
df.fillna({"Income": df["Income"].median(), "Status": "Unknown"}, inplace=True)
```

</details>

## T8 — `inplace=True` returns `None`

**Exam phrasings**

- "Create a version without rows having missing Amount and compare shapes with the original"
- "Sort the dataset by Date ascending and show the first 14 loan records"
- "AttributeError: 'NoneType' object has no attribute 'shape'"

**Symptom.** Your DataFrame variable becomes `None` and every later line fails.

**Cause.** `inplace=True` modifies the object and returns `None`. Assigning that back destroys
the variable.

**Fix.** Pick one style. Either `df.dropna(inplace=True)` **or** `df = df.dropna()` — never both.

**Core idea.** `inplace=True` and `df = ...` are mutually exclusive.

**Real message**

```python
df = df.dropna(inplace=True)
print(df.shape)
```

```text
AttributeError: 'NoneType' object has no attribute 'shape'
```

Same bug, other methods:

| Line | Next call | Message |
| --- | --- | --- |
| `df = df.dropna(inplace=True)` | `df.head()` | `AttributeError: 'NoneType' object has no attribute 'head'` |
| `df = df.sort_values("Age", inplace=True)` | `len(df)` | `TypeError: object of type 'NoneType' has no len()` |
| `df = df.reset_index(drop=True, inplace=True)` | anything | returns `None` |

**Template**

```python
clean = df.dropna()            # keeps df intact — preferred in an exam
df.dropna(inplace=True)        # mutates df, returns nothing
```

**Worked** — the "compare shapes" question needs **both** frames, so `inplace` is the wrong tool:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
clean = df.dropna(subset=["Score"])
print("original:", df.shape, " after dropping missing Score:", clean.shape)
print("rows removed:", df.shape[0] - clean.shape[0])
```

```text
original: (22, 7)  after dropping missing Score: (17, 7)
rows removed: 5
```

**Variants**

| Method | Safe form |
| --- | --- |
| `dropna` | `clean = df.dropna()` |
| `fillna` | `df[COL] = df[COL].fillna(0)` |
| `sort_values` | `s = df.sort_values(COL)` |
| `reset_index` | `df = df.reset_index(drop=True)` |
| `rename` | `df = df.rename(columns={"old": "new"})` |
| `drop_duplicates` | `u = df.drop_duplicates()` |
| `set_index` | `ix = df.set_index(COL)` |

**Traps**

- Whenever a question says "compare with the original", you need two variables. `inplace=True` makes that impossible.
- If a cell has already returned `None`, re-run the `read_csv` / `read_excel` cell. Nothing else will help.
- `df.columns = df.columns.str.strip()` is an assignment to an attribute — that one is genuinely in place and returns nothing to catch (T15).

**Drill**

1. Sort `Sorting_Data` by `Salary` descending into a new variable and print the top 3 names, leaving the original unsorted.

<details><summary>Answer</summary>

```python
s = pd.read_excel(W, sheet_name="Sorting_Data")
top = s.sort_values("Salary", ascending=False)
print(top["Name"].head(3).tolist())     # ['Nikhil Jain', 'Aditya Verma', 'Sameer Khan']
```

</details>

## T9 — `astype` has no `inplace`, and int casting fails on NaN

**Exam phrasings**

- "Convert the Age column to integer"
- "Change the data type of the Amount column"
- "TypeError: astype() got an unexpected keyword argument 'inplace'"

**Symptom.** `TypeError` about `inplace`, or `IntCastingNaNError`.

**Cause.** `astype` has never accepted `inplace`. And NumPy's `int64` has no representation for
NaN, so any column containing a missing value refuses to become `int64`.

**Fix.** Assign the result. To keep integers **with** missing values, use the nullable
`"Int64"` (capital I).

**Core idea.** `astype` always returns a new object; `int64` cannot hold NaN, `Int64` can.

**Real messages**

```python
df["Age"].astype("int64", inplace=True)
```

```text
TypeError: astype() got an unexpected keyword argument 'inplace'
```

```python
df["Age"].astype("int64")     # Age has 3 NaN
```

```text
IntCastingNaNError: Cannot convert non-finite values (NA or inf) to integer
```

**Template**

```python
df[COL] = df[COL].astype("Int64")                   # nullable int, keeps <NA>
df[COL] = df[COL].fillna(0).astype("int64")         # only if 0 is a defensible fill
df[COL] = pd.to_numeric(df[COL], errors="coerce")   # text -> float, bad values -> NaN
```

**Worked**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df["Age"].astype("Int64").head(4).to_string())
print("dtype:", df["Age"].astype("Int64").dtype)
```

```text
0      54
1    <NA>
2      24
3      25
dtype: Int64
```

**Variants**

| Target | Code |
| --- | --- |
| integer, no NaN present | `df[COL].astype(int)` |
| integer, NaN present | `df[COL].astype("Int64")` |
| float | `df[COL].astype(float)` |
| text | `df[COL].astype(str)` |
| category (saves memory, keeps order) | `df[COL].astype("category")` |
| several columns at once | `df = df.astype({"Age": "Int64", "Score": float})` |
| text that may contain junk | `pd.to_numeric(df[COL], errors="coerce")` |

**Traps**

- `df.astype(str, inplace=True)` raises the same `TypeError` at DataFrame level.
- `astype(int)` on a float column **truncates** (`2.9 → 2`). Use `.round().astype("Int64")` if rounding is meant.
- `astype(str)` turns NaN into the four-character string `"nan"`, which then survives every `isna()` check. Clean missing values first.

**Drill**

1. Make `Income` an integer column that still shows the two missing values.

<details><summary>Answer</summary>

```python
df["Income"] = df["Income"].round().astype("Int64")
```

</details>

## T10 — An int column becomes float64 the moment a NaN appears

**Exam phrasings**

- "Combine the holdings with the master information, keeping every holding"
- "my IDs are printed as 11001.0 instead of 11001"
- "why did my integer column turn into decimals after the merge"

**Symptom.** After a left merge (or a `reindex`, or an `append` of a shorter frame) an integer
column prints with `.0` and NaN.

**Cause.** `int64` has no NaN. As soon as one unmatched row exists, pandas upcasts the whole
column to `float64`.

**Fix.** `astype("Int64")` after the merge. Or find out why rows did not match.

**Core idea.** The dtype change is the *evidence* that rows failed to match. Read it as a warning,
not a formatting nuisance.

**Real message** — none. Silent upcast.

**Worked** — `Sales` (20 rows) left-merged onto a regional lookup that is missing `South`:

```python
sales  = pd.read_excel(W, sheet_name="Sales")
mkt    = pd.read_excel(W, sheet_name="Marketing")
lookup = mkt.drop_duplicates("Region")[["Region", "Leads"]]
lookup = lookup[lookup["Region"] != "South"]          # simulate an incomplete lookup
print("lookup Leads dtype:", lookup["Leads"].dtype)

m = sales.merge(lookup, on="Region", how="left")
print("after merge -> dtype:", m["Leads"].dtype, " NaN:", int(m["Leads"].isna().sum()))
print(m[m["Region"].isin(["South","East"])][["Order_ID","Region","Leads"]].head(6).to_string(index=False))
```

```text
lookup Leads dtype: int64
after merge -> dtype: float64  NaN: 2
Order_ID Region  Leads
    O003   East  177.0
    O007  South    NaN
    O008   East  177.0
    O009   East  177.0
    O012  South    NaN
    O015   East  177.0
```

The nullable fix:

```python
m["Leads"] = m["Leads"].astype("Int64")
print(m[m["Region"].isin(["South","East"])][["Order_ID","Region","Leads"]].head(6).to_string(index=False))
```

```text
Order_ID Region  Leads
    O003   East    177
    O007  South   <NA>
    O008   East    177
    O009   East    177
    O012  South   <NA>
    O015   East    177
```

**Template**

```python
m = left.merge(right, on=KEY, how="left", indicator=True)
print(m["_merge"].value_counts())        # how many rows found no match
m[INT_COL] = m[INT_COL].astype("Int64")  # keep integers, keep <NA>
```

**Variants**

| Situation | Handling |
| --- | --- |
| unmatched rows are expected | `astype("Int64")` and say how many are `<NA>` |
| unmatched rows are a mistake | check the key: whitespace, case, dtype (`str` vs `int`) |
| you need a hard integer | `m[COL] = m[COL].fillna(0).astype("int64")` and state the fill |
| display only | `pd.set_option("display.float_format", "{:,.0f}".format)` |

**Traps**

- Trying to force it fails loudly: `m["Leads"].astype("int64")` → `IntCastingNaNError: Cannot convert non-finite values (NA or inf) to integer`.
- `bool` upcasts to `object` the same way. `True/False/NaN` columns stop answering `.sum()` correctly.
- `indicator=True` on this merge reported `both 18, left_only 2, right_only 0` — quote those numbers in your answer.

**Drill**

1. Merge `Sales` with the full `Marketing` regional lookup and confirm `Leads` stays `int64`.

<details><summary>Answer</summary>

```python
full = mkt.drop_duplicates("Region")[["Region","Leads"]]
print(sales.merge(full, on="Region", how="left")["Leads"].dtype)   # int64 — every region matched
```

</details>

## T11 — A semicolon file read without `sep`

**Exam phrasings**

- "Read `customers_semicolon.csv` into a DataFrame"
- "Load the data and display the first 5 rows and the shape"
- "Read the data from the `Missing_Data` sheet of the workbook"

**Symptom.** `df.shape` is `(30, 1)` and the single column name contains every field name joined
by `;`.

**Cause.** `read_csv` defaults to `sep=","`. A semicolon file has no commas, so the whole line is
one field.

**Fix.** `sep=";"`. Print `df.shape` immediately after every read — one column is unmistakable.

**Core idea.** Check the shape, not the head. A wrong separator still prints "nicely".

**Real message** — none. This trap never raises.

**Worked**

```python
SEMI = BASE + "Pandas exercises/Class exercises/customers_semicolon.csv"
bad = pd.read_csv(SEMI)
print("shape:", bad.shape)
print("columns:", list(bad.columns))
print(bad.head(3).to_string())
```

```text
shape: (30, 1)
columns: ['Customer_ID;Name;Age;City;Segment;Balance;Risk_Score;Active;Join_Date']
  Customer_ID;Name;Age;City;Segment;Balance;Risk_Score;Active;Join_Date
0              C001;Aarav Mehta;53;Pune;SME;140976.6;550;Yes;2025-05-30
1           C002;Diya Nair;32;Hyderabad;SME;474709.96;546;No;2024-06-25
2       C003;Kabir Shah;52;Kolkata;Premium;110395.82;355;Yes;2024-06-02
```

```python
good = pd.read_csv(SEMI, sep=";")
print("shape:", good.shape)
print(good.head(3).to_string())
```

```text
shape: (30, 9)
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active   Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes  2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No  2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes  2024-06-02
```

**Template**

```python
df = pd.read_csv(PATH, sep=";")                       # semicolon
df = pd.read_csv(PATH, sep="\t")                      # tab (or pd.read_table)
df = pd.read_csv(PATH, sep=None, engine="python")     # let pandas sniff it
```

`sep=None, engine="python"` was run on the semicolon file and returned `(30, 9)` — a good
emergency fallback when you cannot open the file in a text editor.

**Variants**

| Problem | Argument |
| --- | --- |
| tab-separated (`customers_tab.tsv`) | `sep="\t"` |
| title rows above the header (`Import_SkipRows`) | `skiprows=2` |
| no header row at all | `header=None, names=[...]` |
| European decimals `1.234,56` | `decimal=",", thousands="."` |
| the wrong Excel sheet | `sheet_name="Missing_Data"` |
| every sheet at once | `sheet_name=None` → returns a **dict** of DataFrames |

**Traps**

- A wrong sheet name raises `ValueError: Worksheet named 'MissingData' not found` — check the underscore.
- `pd.read_excel(W)` with no `sheet_name` silently reads only the **first** sheet (`Customer_Data` in this workbook), not the one the question means.
- The `Import_SkipRows` sheet read without `skiprows` gives shape `(20, 9)`, all-`object` dtypes and the column name `'Customer Import Practice — the first two rows are deliberately not part of the data table.'`. With `skiprows=2` it becomes `(18, 9)` with proper dtypes.

**Drill**

1. Read `Missing_Tokens` from the workbook and print its shape and dtypes in two lines.

<details><summary>Answer</summary>

```python
t = pd.read_excel(W, sheet_name="Missing_Tokens")
print(t.shape); print(t.dtypes)
```

</details>

## T12 — `index_col` naming a column excluded by `usecols`

**Exam phrasings**

- "Load only the Name and Age columns, with Customer_ID as the index"
- "Read the file with the ID column as the index"
- "ValueError: Index Customer_ID invalid"

**Symptom.** `ValueError: Index <name> invalid`.

**Cause.** `usecols` is applied first. If the index column is not in `usecols`, it no longer
exists when `index_col` is resolved.

**Fix.** Put the index column **inside** `usecols`.

**Core idea.** `usecols` filters, then `index_col` selects from what survived.

**Real message**

```python
CSV = BASE + "Pandas exercises/Class exercises/customers.csv"
pd.read_csv(CSV, usecols=["Name", "Age"], index_col="Customer_ID")
```

```text
ValueError: Index Customer_ID invalid
```

A misspelt `index_col` gives the same shape of message: `ValueError: Index CustomerID invalid`.

**Template**

```python
df = pd.read_csv(PATH, usecols=[INDEX_COL, COL1, COL2], index_col=INDEX_COL)
```

**Worked**

```python
print(pd.read_csv(CSV, usecols=["Customer_ID","Name","Age"], index_col="Customer_ID").head(3).to_string())
```

```text
                    Name  Age
Customer_ID
C001         Aarav Mehta   53
C002           Diya Nair   32
C003          Kabir Shah   52
```

**The silent version.** `index_col=0` is *not* an error — but the position is counted **within the
selected columns**, not within the file:

```python
print(pd.read_csv(CSV, usecols=["Name", "Age"], index_col=0).head(3).to_string())
```

```text
             Age
Name
Aarav Mehta   53
Diya Nair     32
Kabir Shah    52
```

`Name` became the index. No warning.

**Variants**

| Goal | Code |
| --- | --- |
| index by name (safest) | `index_col="Customer_ID"` |
| no index column | omit `index_col` |
| set the index after reading | `df = pd.read_csv(PATH).set_index("Customer_ID")` |
| two-level index | `index_col=["Region","Product"]` |
| Excel | same arguments work in `pd.read_excel` |

**Traps**

- Prefer `pd.read_csv(PATH).set_index(COL)` in an exam: it is one more line but it never fails this way, and you still have the plain frame if a later question needs it.
- `index_col` accepts positions, and positions shift the moment `usecols` changes. Always name the column.

**Drill**

1. Read `customers.csv` keeping `Customer_ID`, `City`, `Balance`, indexed by `Customer_ID`.

<details><summary>Answer</summary>

```python
pd.read_csv(CSV, usecols=["Customer_ID","City","Balance"], index_col="Customer_ID")
```

</details>

## T13 — `01-07-2025` is 1 July, not 7 January

**Exam phrasings**

- "Date – Transaction date (YYYY-MM-DD)" (the PDF's own wording — and it is wrong)
- "Convert Date to datetime and find the number of transactions per month"
- "Sort the dataset by Date ascending and show the first 14 loan records"
- "Filter transactions in the first week of July"

**Symptom.** Your month counts are spread over six months when the extract covers one week.

**Cause.** `bank_transactions.csv` stores `01-07-2025`, i.e. **DD-MM-YYYY**, even though the
exercise PDF documents the column as `YYYY-MM-DD`. Given `01-07-2025`, `pd.to_datetime` assumes
month-first.

**Fix.** `dayfirst=True`, or better `format="%d-%m-%Y"`.

**Core idea.** An ambiguous date string parses without complaint into the wrong month. Always
print the parsed minimum and maximum and ask whether they make sense.

**Real message** — the wrong-format version does raise, and the message is genuinely helpful:

```python
BANK = BASE + "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv"
bank = pd.read_csv(BANK)
pd.to_datetime(bank["Date"], format="%Y-%m-%d")
```

```text
ValueError: time data "01-07-2025" doesn't match format "%Y-%m-%d", at position 0. You might want to try:
    - passing `format` if your strings have a consistent format;
    - passing `format='ISO8601'` if your strings are all ISO8601 but not necessarily in exactly the same format;
    - passing `format='mixed'`, and the format will be inferred for each element individually. You might want to use `dayfirst` alongside this.
```

**Worked — the two answers differ by six months**

```python
print("raw:", list(bank["Date"].head(3)))
a = pd.to_datetime(bank["Date"])                  # no dayfirst
b = pd.to_datetime(bank["Date"], dayfirst=True)   # dayfirst
print("no dayfirst:");   print(a.dt.month.value_counts().sort_index().to_string())
print("dayfirst=True:"); print(b.dt.month.value_counts().sort_index().to_string())
```

```text
raw: ['01-07-2025', '01-07-2025', '02-07-2025']
no dayfirst:
Date
1    2
2    2
3    3
4    2
5    2
6    1
dayfirst=True:
Date
7    12
```

Twelve transactions scattered across January–June, or twelve transactions in July. Only the
second reading matches "a small extract of recent transactions".

```python
print(pd.to_datetime(bank["Date"], format="%d-%m-%Y").head(3).to_string())
```

```text
0   2025-07-01
1   2025-07-01
2   2025-07-02
```

**Template**

```python
df[DATE_COL] = pd.to_datetime(df[DATE_COL], dayfirst=True)             # DD-MM-YYYY
df[DATE_COL] = pd.to_datetime(df[DATE_COL], format="%d-%m-%Y")         # explicit, fastest
df[DATE_COL] = pd.to_datetime(df[DATE_COL], errors="coerce")           # bad values -> NaT
df = pd.read_csv(PATH, parse_dates=[DATE_COL], dayfirst=True)          # at read time
```

**Variants**

| Raw value | Argument |
| --- | --- |
| `01-07-2025` | `dayfirst=True` or `format="%d-%m-%Y"` |
| `2024-01-01` (the loan file) | nothing needed |
| `01/07/2025` | `format="%d/%m/%Y"` |
| `01-Jul-2025` | `format="%d-%b-%Y"` |
| `2026-01-08 10:00:00` | nothing needed |
| mixed formats in one column | `format="mixed", dayfirst=True` |
| some cells are junk | add `errors="coerce"`, then count `NaT` |

**Traps**

- `errors="coerce"` hides the problem instead of solving it. With the wrong format it turned **all 12 of 12** rows into `NaT`; every later date question then answers 0. Always print the `NaT` count: `int(s.isna().sum())`.
- `dayfirst=True` is only a *hint*. For a fixed-width source, `format=` is safer and much faster.
- After parsing, print `df[DATE_COL].min(), df[DATE_COL].max()`. A six-month span in a one-week extract is the tell.
- **Write this sentence:** "`Date` is stored as DD-MM-YYYY, so it is parsed with `dayfirst=True`; all 12 transactions fall in July 2025."

**Drill**

1. Parse `bank_transactions.csv` dates correctly and print the count of transactions per day.

<details><summary>Answer</summary>

```python
bank["Date"] = pd.to_datetime(bank["Date"], format="%d-%m-%Y")
print(bank["Date"].dt.date.value_counts().sort_index())
```

</details>

## T14 — Missing-value tokens pandas does not recognise

**Exam phrasings**

- "Identify the placeholder characters used for missing values and convert them to NaN"
- "Count the missing values in each column"
- "Find the mean of the Age column"
- "the Age column is dtype object even though it contains numbers"

**Symptom.** `isna().sum()` reports 0 for a column that is visibly full of `-`, `?`, `@@`, `###`.
Any arithmetic on it raises `TypeError`.

**Cause.** `read_csv` / `read_excel` recognise a fixed list of NA strings. The list is
**case-sensitive** and does not contain every junk token.

**Fix.** Pass the file's own placeholders through `na_values=[...]`.

**Core idea.** A column that should be numeric but has dtype `object` means an unrecognised token
is present.

**The default list** (`pandas._libs.parsers.STR_NA_VALUES`, printed from this install):

```text
['', '#N/A', '#N/A N/A', '#NA', '-1.#IND', '-1.#QNAN', '-NaN', '-nan', '1.#IND', '1.#QNAN',
 '<NA>', 'N/A', 'NA', 'NULL', 'NaN', 'None', 'n/a', 'nan', 'null']
```

So `NA`, `n/a`, `null`, `nan` are recognised, but lowercase **`na`**, mixed-case **`nuLL`** and
**`nAN`** are **not**. The `Missing_Tokens` sheet contains exactly those.

**Real message** — the consequence, not the read:

```python
tok = pd.read_excel(W, sheet_name="Missing_Tokens")
tok["Age"].mean()
```

```text
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

**Worked — before and after**

```python
before = pd.read_excel(W, sheet_name="Missing_Tokens")
print(before.dtypes.to_string())
print(before.isna().sum().to_string())
print("Age raw values:", sorted(map(str, before["Age"].unique())))
```

```text
Age             object
Own_house       object
Family_size    float64
Children       float64
Income_2020     object
Income_2021     object
Age            0
Own_house      0
Family_size    3
Children       1
Income_2020    4
Income_2021    4
Age raw values: ['#', '-', '48', '49', '55', '61', '62', '63', '64', '65', '@@', 'nAN', 'na']
```

`Age` reports **zero** missing values while holding `-`, `@@`, `#`, `na` and `nAN`.

```python
TOK = ["-", "@@", "#", "?", "nuLL", "nAN", "###", "na"]
after = pd.read_excel(W, sheet_name="Missing_Tokens", na_values=TOK)
print(after.dtypes.to_string())
print(after.isna().sum().to_string())
print("Age mean =", round(after["Age"].mean(), 2))
```

```text
Age            float64
Own_house      float64
Family_size    float64
Children       float64
Income_2020    float64
Income_2021    float64
Age            5
Own_house      2
Family_size    3
Children       1
Income_2020    5
Income_2021    5
Age mean = 57.1
```

Five missing ages appear, `Own_house` gains two, both income columns gain one — and the column
becomes numeric so `mean()` works.

**Template**

```python
df = pd.read_csv(PATH, na_values=["-", "?", "#", "@@", "###", "na", "nuLL", "nAN", "NA "])
# or, column by column, after reading:
df[COL] = pd.to_numeric(df[COL], errors="coerce")
```

**Variants**

| Situation | Code |
| --- | --- |
| tokens only in one column | `na_values={"Age": ["-", "@@"]}` |
| you do not know the tokens | `df[COL].unique()` on every `object` column |
| you only need it numeric | `pd.to_numeric(df[COL], errors="coerce")` — also gave 5 NaN in `Age` |
| keep the default list off | `keep_default_na=False, na_values=[...]` |
| trailing spaces make `"NA "` unmatched | `skipinitialspace=True` or `df[COL].str.strip()` first |

**Traps**

- `na_values` is **case-sensitive**: listing `"NA"` does not catch `"na"`.
- The tokens differ per column here (`?` and `nuLL` only in `Own_house`, `###` only in the income columns). One combined list covers all of them.
- Report the token census in your answer: "the file uses `-`, `@@`, `#`, `?`, `###`, `na`, `nuLL`, `nAN` as placeholders; after `na_values` the missing counts are Age 5, Own_house 2, Family_size 3, Children 1, Income_2020 5, Income_2021 5."

**Drill**

1. List every distinct non-numeric token in each `object` column of `Missing_Tokens`.

<details><summary>Answer</summary>

```python
for c in before.columns:
    if before[c].dtype == object:
        vals = before[c].dropna().unique()
        print(c, [v for v in vals if not str(v).replace(".","").isdigit()])
```

</details>

## T15 — Column names with spaces, trailing spaces or odd capitalisation

**Exam phrasings**

- "Compare the Average Credit Limit by Age Group"
- "Analyze the Relationship Between Total Deposits and Net Profit"
- "KeyError: 'Total_Deposits'"

**Symptom.** `KeyError` for a column you can see in the output of `df.head()`.

**Cause.** The name on screen is not the name in the file. The four Matplotlib CSVs use **spaces**
in every multi-word name; exported files sometimes carry trailing spaces; the prose uses title
case where the file uses something else.

**Fix.** Print `df.columns.tolist()` and copy the names from there. Normalise with
`df.columns.str.strip()`.

**Core idea.** `df.columns.tolist()` is the only authority on column names.

**Real messages**

```python
M = BASE + "Matplotlib/Matplotlib exercises/"
b = pd.read_csv(M + "bank_branch_performance.csv")
print(b.columns.tolist())
b["Total_Deposits"]
```

```text
['Branch ID', 'City', 'Customers', 'Total Deposits', 'Total Loans', 'Net Profit', 'Customer Satisfaction']
KeyError: 'Total_Deposits'
```

```python
cc = pd.read_csv(M + "credit_card_usage.csv")
print(cc.columns.tolist())
cc["Age Group"]          # Exercise 2 Q2/Q4/Q5 all ask you to group by it
```

```text
['Customer ID', 'Age', 'Credit Limit', 'Total Spend', 'Number of Transactions', 'Customer Satisfaction']
KeyError: 'Age Group'
```

There is no `Age Group` column anywhere in `credit_card_usage.csv`. You must create it by binning
`Age` — and say that you did.

**Worked — leading/trailing spaces**

No course file has trailing spaces in its header, so here is one written on the spot. This is
exactly what a re-exported exam CSV looks like:

```python
open("messy_header.csv", "w").write(
    " Customer_ID ,Name, age,City ,BALANCE\n"
    "C001,Aarav Mehta,53,Pune,140976.6\n"
    "C002,Diya Nair,32,Hyderabad,474709.96\n")

mdf = pd.read_csv("messy_header.csv")
print("columns as read:", list(mdf.columns))
for name in ["Customer_ID", "Age", "Balance"]:
    try:
        mdf[name]
    except KeyError as e:
        print(f'mdf["{name}"] -> KeyError: {e}')
```

```text
columns as read: [' Customer_ID ', 'Name', ' age', 'City ', 'BALANCE']
mdf["Customer_ID"] -> KeyError: 'Customer_ID'
mdf["Age"] -> KeyError: 'Age'
mdf["Balance"] -> KeyError: 'Balance'
```

The clean-up, one step at a time:

```python
mdf.columns = mdf.columns.str.strip()
print("after .str.strip():", list(mdf.columns))
mdf.columns = mdf.columns.str.title()
print("after .str.title():", list(mdf.columns))
print(mdf.head(2).to_string())
```

```text
after .str.strip(): ['Customer_ID', 'Name', 'age', 'City', 'BALANCE']
after .str.title(): ['Customer_Id', 'Name', 'Age', 'City', 'Balance']
  Customer_Id         Name  Age       City    Balance
0        C001  Aarav Mehta   53       Pune  140976.60
1        C002    Diya Nair   32  Hyderabad  474709.96
```

**Template**

```python
print(df.columns.tolist())                                   # look first
df.columns = df.columns.str.strip()                          # kill stray spaces
df.columns = df.columns.str.replace(" ", "_", regex=False)   # optional: spaces -> underscores
```

**Variants**

| Problem | Fix |
| --- | --- |
| spaces inside the name | keep the brackets: `df["Total Deposits"]` |
| trailing spaces | `df.columns = df.columns.str.strip()` |
| inconsistent case | `df.columns = df.columns.str.title()` — or `.str.lower()` |
| you want dot access | `df.columns = df.columns.str.replace(" ", "_")` then `df.Total_Deposits` |
| values also padded | `df[COL] = df[COL].str.strip()` |
| `query` with spaced names | wrap the name in backticks inside the query string: ``df.query("`Total Deposits` > 1000000")`` |

**Traps**

- `.str.title()` turns `Customer_ID` into `Customer_Id`. Choose **either** `strip` alone **or** a full rename map — do not half-normalise.
- `df.query("Total Deposits > 1000000")` raises `SyntaxError: invalid syntax`; with backticks it works.
- `getattr(b, "Total Deposits")` does work, but `b.Total Deposits` is a Python syntax error. Use brackets.
- **Write this sentence:** "The dataset has no `Age Group` column, so age groups are created with `pd.cut(df['Age'], bins=[20,30,40,50,60,70], right=False)`."

**Drill**

1. Rename every column of `bank_branch_performance.csv` to underscore form, then compute the mean `Net_Profit` per `City`.

<details><summary>Answer</summary>

```python
b.columns = b.columns.str.strip().str.replace(" ", "_", regex=False)
print(b.groupby("City")["Net_Profit"].mean().round(2))
```

</details>

## T16 — The question's column names are not the file's column names

**Exam phrasings**

- "Show loans from LoanID 1010 to 1020 along with the columns from City to Revenue"
- "Display summary statistics for Score1 through Score3"
- "Sort students first by Department (ascending) and then by Total score (descending)"
- "Filter transactions where the City is Mumbai or Pune"

**Symptom.** `KeyError` on a column the question explicitly names — or a silently **empty**
result.

**Cause.** The exercise prose was written against a different draft of the data. This is a known
defect in two of the course files, and the exam is expected to reuse the prose.

**Fix.** A 30-second mapping protocol (below). **Then state the mapping in one sentence.**

**Core idea.** A stated, reasonable mapping cannot be penalised. An unstated guess can.

**Real messages** — `03 Sorting and slicing / Exercise 1`, whose CSV actually has
`Branch`, `DisbursedAmount` and LoanIDs `11001–11200`:

```python
loans = pd.read_csv(L)
print("columns:", loans.columns.tolist())
print("LoanID range:", loans.LoanID.min(), "-", loans.LoanID.max())
loans.set_index("LoanID").loc[1010:1020, "City":"Revenue"]
```

```text
columns: ['LoanID', 'Date', 'Branch', 'LoanProduct', 'NumBorrowers', 'PerBorrowerAmount', 'DisbursedAmount', 'Channel']
LoanID range: 11001 - 11200
KeyError: 'City'
```

```python
loans[["City", "Revenue"]]
```

```text
KeyError: "None of [Index(['City', 'Revenue'], dtype='object')] are in the [columns]"
```

And the row half of the same instruction **fails silently**:

```python
r = loans.set_index("LoanID").loc[1010:1020]
print("rows returned:", len(r), " empty:", r.empty)
```

```text
rows returned: 0  empty: True
```

Zero rows, no error. The list form does complain:
`KeyError: "None of [Index([1010, 1015], dtype='int64', name='LoanID')] are in the [index]"`.

`03 / Exercise 2` has the same problem:

```python
P = BASE + "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 2 - Student portfolios/EX_B_portfolios.xlsx"
port = pd.read_excel(P)
print(port.columns.tolist())
port[["Score1","Score2","Score3"]]
```

```text
['RollNo', 'Name', 'Department', 'Semester', 'Pick1_Score', 'Pick2_Score', 'Pick3_Score', 'TotalScore']
KeyError: "None of [Index(['Score1', 'Score2', 'Score3'], dtype='object')] are in the [columns]"
```

`port["Total"]` → `KeyError: 'Total'`.

**The 30-second exam protocol**

```python
# 1. print the truth
print(df.shape)
print(df.columns.tolist())
print(df.dtypes)

# 2. if the question names an ID range, check it is reachable
print(df[ID_COL].min(), df[ID_COL].max())

# 3. map the examiner's words to the real names, in a comment AND in your written answer
# "City"    -> "Branch"
# "Revenue" -> "DisbursedAmount"
# "1010-1020" -> "11010-11020" (the file's IDs start at 11001)

# 4. answer the question with the real names
```

**Template — the sentence to write**

> The dataset does not contain a column named `City`; the branch-city field is called `Branch`
> and the total amount field is called `DisbursedAmount`. LoanIDs run from 11001 to 11200, so
> "1010 to 1020" is read as 11010 to 11020. The answer below uses those names.

**Worked — the corrected reading of Exercise 1 Q2**

```python
print(loans.set_index("LoanID").loc[11010:11020, "Branch":"DisbursedAmount"].to_string())
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

**Worked — the corrected reading of Exercise 2 Q2**

```python
print(port[["Pick1_Score","Pick2_Score","Pick3_Score","TotalScore"]].describe().round(2).to_string())
```

```text
       Pick1_Score  Pick2_Score  Pick3_Score  TotalScore
count       120.00       120.00       120.00      120.00
mean         63.75        65.89        64.33      193.98
std          19.95        20.07        20.91       33.86
min          30.00        30.00        30.00      102.00
25%          47.75        49.75        44.75      172.00
50%          63.00        66.00        66.00      196.00
75%          81.25        83.50        82.25      220.00
max          99.00        99.00        99.00      262.00
```

**The known mismatches in this course**

| Exercise | Prose says | File has |
| --- | --- | --- |
| 03 / Exercise 1 | `City` | `Branch` |
| 03 / Exercise 1 | `Revenue`, "Total disbursed amount" | `DisbursedAmount` |
| 03 / Exercise 1 | LoanIDs `1010–1020`, "loan 1015" | `11001–11200`, `11015` |
| 03 / Exercise 2 | `Score1`, `Score2`, `Score3` | `Pick1_Score`, `Pick2_Score`, `Pick3_Score` |
| 03 / Exercise 2 | `Total` | `TotalScore` |
| 01 Basics / Exercise 1 | `Date` is `YYYY-MM-DD` | `DD-MM-YYYY` (T13) |
| Matplotlib / Exercise 2 | `Age Group` | only `Age` — you must bin it (T15) |

**Variants**

| The question says | What to do |
| --- | --- |
| a column that does not exist | find the closest real name, state the mapping |
| an ID range outside the data | shift it to the file's range, state the shift |
| "Total" where two totals exist | pick the row-level total, name it in your answer |
| a sheet name that does not exist | `pd.ExcelFile(PATH).sheet_names` and pick the obvious one |
| a threshold nothing reaches | report 0 rows and the actual max (T23) |

**Traps**

- Do not silently "fix" the question. A marker cannot award the mapping mark for a mapping you did not write down.
- Never invent a column. If the question needs `Age Group` and the file has `Age`, derive it and say how.
- An empty `.loc` label slice is the most dangerous form of this bug because there is no error at all. Always print the row count of a slice.

**Drill**

1. Answer Exercise 1 Q4 ("City is Mumbai or Pune and borrowers ≥ 3, sort by City asc then Total disbursed desc") with the real names, and write the mapping sentence.

<details><summary>Answer</summary>

```python
# "City" -> "Branch"; "Total disbursed amount" -> "DisbursedAmount"
sel = loans[(loans["Branch"].isin(["Mumbai","Pune"])) & (loans["NumBorrowers"] >= 3)]
sel = sel.sort_values(["Branch","DisbursedAmount"], ascending=[True, False])
print(sel.shape)          # (47, 8)
print(sel.head().to_string(index=False))
```

</details>

## T17 — `count()` counts non-null values, not rows

**Exam phrasings**

- "Find the count, mean, median, minimum, maximum and standard deviation of the column"
- "Find the total number of rows and columns, and list all column names"
- "How many records are there in the dataset?"
- "count in describe() is smaller than the number of rows"

**Symptom.** You report "22 records" from `len(df)` and "17 records" from `df["Score"].count()`
in the same answer.

**Cause.** `count()` skips NaN. `len(df)` and `df.shape[0]` do not.

**Fix.** Use `len(df)` for rows and `count()` for observations, and say which one you mean.

**Core idea.** `count` answers "how many values do I have", not "how many rows are there".

**Real message** — none.

**Worked** — `Missing_Data`, 22 rows:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("len(df) =", len(df), " df.shape =", df.shape)
print(df.count().to_string())
print(df.isna().sum().to_string())
```

```text
len(df) = 22  df.shape = (22, 7)
Record_ID    22
Name         22
Age          19
Score        17
Income       20
City         20
Status       21
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
```

`count() + isna().sum() == len(df)` for every column. That identity is the check.

**Template**

```python
print("rows:", len(df))
print("non-null per column:"); print(df.count())
print("missing per column:");  print(df.isna().sum())
```

**Variants**

| Question | Code | Value here |
| --- | --- | --- |
| "number of records" | `len(df)` | 22 |
| "number of valid Score observations" | `df["Score"].count()` | 17 |
| "missing Score values" | `df["Score"].isna().sum()` | 5 |
| "rows with any missing value" | `df.isna().any(axis=1).sum()` | — |
| "rows complete on all columns" | `len(df.dropna())` | — |
| "distinct cities" | `df["City"].nunique()` | 6 (NaN excluded) |
| "distinct cities including missing" | `df["City"].nunique(dropna=False)` | 7 |

**Traps**

- `describe()` prints `count` per column, so a single `describe()` can legitimately show `count` 19, 17 and 20 on the same frame. Do not "fix" that.
- `mean()` divides by `count()`, not by `len(df)`: `Score.mean() = 79.0588` while `Score.sum()/len(df) = 61.0909`.
- `nunique()` drops NaN by default (T28).

**Drill**

1. Report the row count and the non-null count of every column of `Missing_Data` in one table.

<details><summary>Answer</summary>

```python
print(pd.DataFrame({"non_null": df.count(), "missing": df.isna().sum(), "rows": len(df)}))
```

</details>

## T18 — `std()` uses ddof=1, NumPy uses ddof=0

**Exam phrasings**

- "Determine the mean, median and standard deviation of Current_Value"
- "Find the count, mean, median, minimum, maximum and standard deviation of Investment_Amount"
- "Standard Deviation of Processing Days"
- "my standard deviation does not match the model answer"

**Symptom.** Your standard deviation differs from the key in the third or fourth significant digit.

**Cause.** `pandas.Series.std()` defaults to `ddof=1` (sample, divide by n−1).
`numpy.ndarray.std()` defaults to `ddof=0` (population, divide by n).

**Fix.** Use `df[COL].std()` — the pandas default is the sample SD, which is what a statistics
course means by "standard deviation". If the question says "population", pass `ddof=0`.

**Core idea.** Same data, two divisors. Say which one you used.

**Real message** — none.

**Worked** — `Missing_Data`:

```python
for c in ["Age", "Score", "Income"]:
    print(c, " ddof=1:", round(df[c].std(), 4),
             "  ddof=0:", round(df[c].std(ddof=0), 4),
             "  numpy  :", round(df[c].dropna().values.std(), 4))
```

```text
Age  ddof=1: 9.9349   ddof=0: 9.6699   numpy  : 9.6699
Score  ddof=1: 12.6416   ddof=0: 12.2641   numpy  : 12.2641
Income  ddof=1: 31246.1301   ddof=0: 30454.9604   numpy  : 30454.9604
```

`describe()` reports the `ddof=1` value (`std 12.641551` for `Score`), so `describe()` and
`std()` always agree; only a hand-written NumPy computation disagrees.

**Template**

```python
df[COL].std()          # sample, n-1  <- pandas default, use this
df[COL].std(ddof=0)    # population, n
df[COL].var()          # sample variance, n-1
```

**Variants**

| Wording | Code |
| --- | --- |
| "standard deviation" | `df[COL].std()` |
| "population standard deviation" | `df[COL].std(ddof=0)` |
| "variance" | `df[COL].var()` |
| per group | `df.groupby(G)[COL].std()` — also `ddof=1` |
| all six statistics at once | `df[COL].agg(["count","mean","median","min","max","std"])` |
| coefficient of variation | `df[COL].std() / df[COL].mean()` |

**Traps**

- `groupby(...).std()` is `ddof=1` too, so a group with **one** member gives `NaN`, not 0. Report those groups rather than dropping them.
- `df.describe()` never shows `ddof=0`. If a marking key used NumPy, a one-line note ("sample SD, `ddof=1`") earns the mark either way.
- **Write this sentence:** "Standard deviations are sample values (`ddof=1`, the pandas default)."

**Drill**

1. Report `Income`'s six statistics from `Missing_Data` in one line of code.

<details><summary>Answer</summary>

```python
print(df["Income"].agg(["count","mean","median","min","max","std"]).round(2))
```

</details>

## T19 — `mean()` after `fillna(0)` is a different question

**Exam phrasings**

- "Replace missing Amount values with 0 and display the affected rows"
- "Discuss: what would happen if the missing Prices were filled with 0?"
- "Compare the mean before and after handling the missing values"

**Symptom.** Your average drops sharply after the missing-value step and you report the new number
as "the average".

**Cause.** `mean()` skips NaN, so it divides by the non-null count. After `fillna(0)` the zeros
are real observations and the divisor becomes the row count.

**Fix.** Compute the statistics you must report **before** filling, or fill with the mean/median
instead of 0, and always say which you did.

**Core idea.** `fillna(0)` changes the denominator as well as the numerator.

**Real message** — none.

**Worked** — `Missing_Data`: `Score` has 5 NaN out of 22, `Income` has 2:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("Score  mean, NaN skipped :", round(df["Score"].mean(), 4), " n =", int(df["Score"].count()))
print("Score  mean after fillna0:", round(df["Score"].fillna(0).mean(), 4), " n =", len(df))
print("Income mean, NaN skipped :", round(df["Income"].mean(), 2))
print("Income mean after fillna0:", round(df["Income"].fillna(0).mean(), 2))
print("Income std,  NaN skipped :", round(df["Income"].std(), 2))
print("Income std   after fillna0:", round(df["Income"].fillna(0).std(), 2))
print("Income median skipped     :", df["Income"].median(), " after fillna0:", df["Income"].fillna(0).median())
```

```text
Score  mean, NaN skipped : 79.0588  n = 17
Score  mean after fillna0: 61.0909  n = 22
Income mean, NaN skipped : 94863.57
Income mean after fillna0: 86239.61
Income std,  NaN skipped : 31246.13
Income std   after fillna0: 40773.53
Income median skipped     : 94116.73  after fillna0: 78696.22
```

The `Score` mean falls by **17.97 marks**. The `Income` standard deviation rises by 30 per cent
because five artificial zeros were added to the tail.

**Template**

```python
# report first, then impute
stats_before = df[COL].agg(["count","mean","median","std"])
df[COL] = df[COL].fillna(df[COL].mean())     # or .median()
stats_after = df[COL].agg(["count","mean","median","std"])
print(pd.DataFrame({"before": stats_before, "after": stats_after}))
```

**Variants**

| Fill choice | Effect on the mean | When it is defensible |
| --- | --- | --- |
| `fillna(0)` | pulls the mean down hard | the value really is zero (no transaction) |
| `fillna(mean)` | mean unchanged, SD falls | numeric, roughly symmetric, few NaN |
| `fillna(median)` | robust, mean shifts a little | skewed data, outliers present |
| `fillna(mode()[0])` | for categories | `City`, `Status`, `Segment` |
| `dropna(subset=[COL])` | mean unchanged, n falls | NaN are few and random |
| `ffill()` | time series only | daily prices, running balances |

**Write-up answers**

> **"What would happen if the missing Prices were filled with 0?"**
> Filling with 0 treats an unknown price as a price of zero, which is not a possible value for a
> traded security. It converts 5 unknowns into 5 artificial observations at the extreme bottom of
> the range, so the mean falls (here `Score` from 79.06 to 61.09), the standard deviation rises
> (`Income` from 31,246 to 40,774) and the median moves (`Income` from 94,117 to 78,696). The
> distribution gains a spike at zero that was never in the data. For a price or an income, either
> drop the missing rows or impute the median, and state how many rows were affected.

**Traps**

- `fillna(0)` on a **count** column (units sold, number of borrowers) is often correct; on a price, score, income or age it almost never is.
- `sum()` is unaffected by `fillna(0)` — pandas already treats NaN as 0 in `sum()`. Only `mean`, `std`, `median` and `count` move.
- Report the number of rows you filled. "5 of 22 `Score` values (22.7%) were missing" is a marked statement.

**Drill**

1. Fill `Score` with its median, then show the before/after mean, median and SD side by side.

<details><summary>Answer</summary>

```python
b = df["Score"].agg(["mean","median","std"])
df["Score"] = df["Score"].fillna(df["Score"].median())
print(pd.DataFrame({"before": b, "after": df["Score"].agg(["mean","median","std"])}).round(3))
```

</details>

## T20 — `pd.cut` boundaries — does 5 belong to 0–5 or to 5–10?

**Exam phrasings**

- "Create the following class intervals for Processing_Days: 0-5, 5-10, 10-15, 15-20, 20-25"
- "Create a grouped frequency distribution for Investment_Amount using the intervals ₹0–50,000, ₹50,000–1,00,000 …"
- "Which class does a value of exactly 50,000 belong to?"
- "my frequency table differs from the model answer by one observation"

**Symptom.** Your frequency table is right except for one or two classes.

**Cause.** The practice PDFs write intervals as `0-5, 5-10` and never say which end is closed.
`pd.cut` defaults to `right=True`, i.e. `(0, 5]`. The course's **only** worked notebook
(`FrequencyDistrib.ipynb`) uses `right=False`, i.e. `[0, 5)`.

**Fix.** Use `right=False` to match the course notebook, and **write one sentence declaring it.**

**Core idea.** `right=False` → `[a, b)`, lower limit included. `right=True` → `(a, b]`, upper
limit included. Boundary values move between classes.

**Real message** — none. Both conventions run silently.

**Worked** — demo case, 30 loans, edges `[0, 5, 10, 15, 20, 25]`. Five values sit exactly on an
edge (`5, 5, 10, 15, 20`):

```python
F = BASE + "Frequency distribution/Demo case/loan_frequency_demo_dataset.xlsx"
d  = pd.read_excel(F)
bins = [0, 5, 10, 15, 20, 25]
rf = pd.cut(d["Processing_Days"], bins=bins, right=False).value_counts().sort_index()
rt = pd.cut(d["Processing_Days"], bins=bins, right=True ).value_counts().sort_index()
print(pd.DataFrame({"right=False  [a, b)": rf.values, "right=True   (a, b]": rt.values},
                   index=[str(i) for i in rf.index]).to_string())
```

```text
          right=False  [a, b)  right=True   (a, b]
[0, 5)                      0                    2
[5, 10)                    13                   12
[10, 15)                    9                    9
[15, 20)                    6                    6
[20, 25)                    2                    1
```

Where the boundary values land:

```text
 Processing_Days right=False right=True
               5     [5, 10)     (0, 5]
              10    [10, 15)    (5, 10]
              15    [15, 20)   (10, 15]
              20    [20, 25)   (15, 20]
```

The first class is 0 or 2, the last is 2 or 1. **Both totals are 30** — nothing is lost, the
observations simply move.

**Template — and the sentence to write**

```python
df["Group"] = pd.cut(df[COL], bins=[E0, E1, E2, E3], right=False)
table = df["Group"].value_counts().sort_index()
```

> Class limits are taken as left-closed and right-open — `[0, 5)`, `[5, 10)`, … — so a value of
> exactly 5 falls in the 5–10 class. This follows the convention used in the class notebook
> (`right=False`).

**How many values sit on a boundary in each course dataset** (all verified):

| Dataset | Column | Stated edges | On-edge values | Classes whose count changes |
| --- | --- | --- | --- | --- |
| Demo case | `Processing_Days` | 0,5,10,15,20,25 | 5 (`5, 5, 10, 15, 20`) | 3 of 5 |
| Practice Case 1 | `Investment_Amount` | 0…300000 step 50000 | 4 (`50000, 150000, 200000, 250000`) | 4 of 6 |
| Practice Case 2 | `Monthly_Spend` | 0…100000 step 20000 | 0 | none — both conventions agree |
| Practice Case 3 | `Transaction_Value` | 20000…140000 step 20000 | 2 (`60000, 120000`) | 4 of 6 |

So Case 2 is safe, and the other three are not.

**Variants**

| Requirement | Code |
| --- | --- |
| lower limit included (course convention) | `pd.cut(s, bins=E, right=False)` |
| upper limit included | `pd.cut(s, bins=E, right=True)` |
| readable labels | `pd.cut(s, bins=E, right=False, labels=["0-5","5-10","10-15","15-20","20-25"])` |
| equal-width automatic bins | `pd.cut(s, bins=5)` |
| equal-count bins | `pd.qcut(s, 4)` |
| include the very lowest value under `right=True` | `include_lowest=True` (T21) |

**Traps**

- With `right=True` the **lowest** edge is open, so a value exactly equal to the first edge is dropped: `pd.cut(pd.Series([0,5,10]), bins=[0,5,10])` gives `nan, (0, 5], (5, 10]`. `include_lowest=True` fixes it (the first interval prints as `(-0.001, 5.0]`).
- With `labels=[...]` the interval boundaries are hidden, so a marker cannot see your convention. Declare it in words.
- `sort_index()` is needed to put the classes in numeric order — `value_counts()` returns them in count order (T36).

**Drill**

1. Build Case 1's grouped distribution both ways and say which classes differ.

<details><summary>Answer</summary>

```python
C1 = BASE + "Frequency distribution/Practice exercises/Case 1/exercise_1_mutual_fund_transactions.xlsx"
c1 = pd.read_excel(C1); E = [0,50000,100000,150000,200000,250000,300000]
a = pd.cut(c1["Investment_Amount"], bins=E, right=False).value_counts().sort_index()
b = pd.cut(c1["Investment_Amount"], bins=E, right=True ).value_counts().sort_index()
print(pd.DataFrame({"right=False": a.values, "right=True": b.values}, index=[str(i) for i in a.index]))
```

Classes 1, 2, 3 and 6 differ: 17/9/4/1 versus 18/8/5/0.

</details>

## T21 — Values outside every bin become NaN and vanish

**Exam phrasings**

- "the frequencies in my table do not add up to the number of rows"
- "Create a grouped frequency distribution using the intervals ₹20,000–40,000 … ₹1,20,000–1,40,000"
- "Use the class limits: less than −2%, −2% to −1%, … greater than 2%"
- "some rows are missing from my frequency distribution"

**Symptom.** The frequencies sum to less than `len(df)` and no error appears.

**Cause.** `pd.cut` returns `NaN` for any value below the first edge or above the last, and
`value_counts()` then drops those NaN.

**Fix.** Check `table.sum() == len(df)` every time. Extend the edges, or open the ends with
`-inf` / `inf`.

**Core idea.** `pd.cut` does not complain about values it cannot place.

**Real message** — none.

**Worked** — demo case, deliberately narrow edges `[5, 10, 15]`:

```python
c = pd.cut(d["Processing_Days"], bins=[5, 10, 15], right=False)
t = c.value_counts().sort_index()
print(t.to_string())
print("sum of counts =", int(t.sum()), " but len(df) =", len(d))
print("unbinned (NaN) =", int(c.isna().sum()))
print("the lost values:", sorted(d["Processing_Days"][c.isna()].tolist()))
```

```text
Processing_Days
[5, 10)     13
[10, 15)     9
sum of counts = 22  but len(df) = 30
unbinned (NaN) = 8
the lost values: [15, 16, 17, 18, 18, 19, 20, 21]
```

Eight loans disappeared from the table without a word.

The open-ended fix:

```python
oc = pd.cut(d["Processing_Days"], bins=[float("-inf"), 5, 10, 15, float("inf")], right=False)
print(oc.value_counts().sort_index().to_string())
print("sum =", int(oc.value_counts().sum()))
```

```text
Processing_Days
[-inf, 5.0)      0
[5.0, 10.0)     13
[10.0, 15.0)     9
[15.0, inf)      8
sum = 30
```

**Template — the two-line safety check**

```python
df["Group"] = pd.cut(df[COL], bins=EDGES, right=False)
table = df["Group"].value_counts().sort_index()
assert table.sum() == len(df), f"{len(df) - table.sum()} rows fell outside the bins"
```

**Variants**

| Need | Code |
| --- | --- |
| open first and last class | `bins=[-np.inf, E1, E2, np.inf]` |
| include the lowest value under `right=True` | `pd.cut(s, bins=E, include_lowest=True)` |
| named open classes | `labels=["below -2%", "-2% to -1%", ..., "above 2%"]` |
| keep the NaN visible | `df["Group"].value_counts(dropna=False)` |
| edges from the data | `bins=[s.min(), ..., s.max()]` with `include_lowest=True` |

**Traps**

- `include_lowest=True` changes the printed first interval to something like `(-0.001, 5.0]` — ugly but correct. Pair it with `labels=` if the output has to look clean.
- Under `right=False` the **top** edge is open, so a value exactly equal to the last edge is lost. Case 1's edges end at 300000; if a 300000 investment existed it would vanish. Always add a final `inf` class when the data can touch the top edge.
- Print `df[COL].min(), df[COL].max()` before choosing edges. Case 3's `Transaction_Value` runs 24,000–135,000 against stated edges of 20,000–140,000, so nothing is lost there.

**Drill**

1. Bin Case 3's `Transaction_Value` with the stated edges and prove no row is lost.

<details><summary>Answer</summary>

```python
C3 = BASE + "Frequency distribution/Practice exercises/Case 3/exercise_3_stock_transactions.xlsx"
c3 = pd.read_excel(C3); E = [20000,40000,60000,80000,100000,120000,140000]
t = pd.cut(c3["Transaction_Value"], bins=E, right=False).value_counts().sort_index()
print(t.sum(), len(c3))     # 40 40
```

</details>

## T22 — `idxmax()` silently hides ties

**Exam phrasings**

- "Identify the most common risk category"
- "Most common investor type / Most common transaction type / Most common risk profile"
- "the branch with the highest number of applications"
- "Sector with the highest number of transactions"

**Symptom.** You report one winner; there are three.

**Cause.** `idxmax()` returns the **first** index label at the maximum. It cannot signal a tie.

**Fix.** Compute the maximum, then take every category that equals it.

**Core idea.** `idxmax` answers "where is the first maximum", not "which categories are maximal".

**Real message** — none. This is the single most likely silent error in the frequency questions.

**Worked** — the demo dataset the course's own notebook uses:

```python
d = pd.read_excel(F)
for col in ["Loan_Type", "Branch", "Risk_Category"]:
    vc = d[col].value_counts()
    print(col, "->", vc.to_dict(), "| idxmax:", vc.idxmax(), "| all winners:", list(vc[vc == vc.max()].index))
```

```text
Loan_Type -> {'Home': 10, 'Personal': 10, 'Vehicle': 10} | idxmax: Home | all winners: ['Home', 'Personal', 'Vehicle']
Branch -> {'Panaji': 10, 'Margao': 10, 'Vasco': 10} | idxmax: Panaji | all winners: ['Panaji', 'Margao', 'Vasco']
Risk_Category -> {'Low': 14, 'Medium': 10, 'High': 6} | idxmax: Low | all winners: ['Low']
```

`FrequencyDistrib.ipynb` prints `Most Common Loan Type: Home` and
`Branch with Most Applications: Panaji`. Both are three-way ties at 10/10/10. Only
`Risk_Category` has a genuine winner (`Low`, 14).

**Template — the tie-safe helper**

```python
def most_common(series):
    vc = series.value_counts()
    winners = list(vc[vc == vc.max()].index)
    return winners, int(vc.max())

names, n = most_common(d["Loan_Type"])
if len(names) == 1:
    print(f"Most common: {names[0]} ({n})")
else:
    print(f"Tie at {n} between: {', '.join(map(str, names))}")
```

```text
Tie at 10 between: Home, Personal, Vehicle
```

**The sentence to write**

> `Loan_Type` is a three-way tie: Home, Personal and Vehicle each occur 10 times, so there is no
> single most common loan type. The same holds for `Branch` (Panaji, Margao, Vasco — 10 each).
> `Risk_Category` has a clear mode: Low, with 14 of 30 applications.

**Variants**

| Question | Tie-safe code |
| --- | --- |
| most common category | `vc[vc == vc.max()].index.tolist()` |
| **least** common category | `vc[vc == vc.min()].index.tolist()` |
| the mode | `series.mode().tolist()` — `mode()` already returns **all** ties |
| the modal class of a binned column | `t = cut.value_counts(); t[t == t.max()].index.tolist()` |
| the row with the largest value | `df[df[COL] == df[COL].max()]` (T24) |
| the top group in a groupby | `g[g == g.max()].index.tolist()` |

**Traps**

- `series.mode()` is the built-in tie-safe answer and returns a Series of all modes. Prefer it when the question says "mode".
- `value_counts()` sorts by count, then by order of first appearance — so `idxmax()` and `vc.index[0]` return the same arbitrary winner.
- On binned data the modal class can also tie; `[5, 10)` has 13 here so it does not, but check.
- A tie you *report* scores. A tie you *hide* loses the interpretation mark.

**Drill**

1. Write one loop that reports the tie-safe most common value of `Sector`, `Transaction_Type` and `Investor_Risk` in Case 3.

<details><summary>Answer</summary>

```python
for c in ["Sector","Transaction_Type","Investor_Risk"]:
    vc = c3[c].value_counts(); w = list(vc[vc == vc.max()].index)
    print(c, "->", w, "at", int(vc.max()))
```

</details>

## T23 — An empty filter result is a legitimate answer

**Exam phrasings**

- "Extract holdings for which Credit_Rating is AAA and Current_Value exceeds Rs. 4,00,000"
- "Filter all Credit transactions with Amount >= 200000"
- "my filter returns Empty DataFrame"
- "ValueError: attempt to get argmax of an empty sequence"

**Symptom.** `Empty DataFrame` with a list of columns and `Index: []`.

**Cause.** No row satisfies the condition. Often the threshold in the question is simply higher
than anything in the data.

**Fix.** Report zero rows **and prove the threshold is unreachable** by printing the maximum.
Then, if the question needs content, answer again at a reachable threshold and say so.

**Core idea.** "Zero rows" is a finding. Silence, or a fudged filter, is not.

**Real message** — Integrated Case 2 Q11, verified on `Bond_Portfolio_Practice.xlsx`:

```python
B = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
h = pd.read_excel(B, sheet_name="Bond_Holdings")
m = pd.read_excel(B, sheet_name="Bond_Master")
bonds = h.merge(m, on="Bond_Code", how="left")
bonds["Current_Value"] = bonds["Units_Held"] * bonds["Current_Price"]

q11 = bonds[(bonds["Credit_Rating"] == "AAA") & (bonds["Current_Value"] > 400000)]
print("rows returned:", len(q11), " empty:", q11.empty)
print("portfolio max Current_Value =", round(bonds["Current_Value"].max(), 2))
print(bonds.groupby("Credit_Rating")["Current_Value"].agg(["count","min","max","mean"]).round(2).to_string())
```

```text
rows returned: 0  empty: True
portfolio max Current_Value = 246147.6
               count       min        max       mean
Credit_Rating
A                 46  20614.00  244002.85  144749.52
AA                39  36864.95  241023.20  122691.41
AAA               35  21172.56  246147.60  121122.87
```

The threshold of 400,000 is above the **portfolio-wide** maximum of 246,148. No AAA holding — no
holding at all — can satisfy it.

What then breaks on the empty frame:

| Call | Result |
| --- | --- |
| `q11["Current_Value"].sum()` | `0.0` |
| `q11["Current_Value"].count()` | `0` |
| `q11["Current_Value"].mean()` | `nan` |
| `q11["Current_Value"].max()` | `nan` |
| `q11["Current_Value"].idxmax()` | `ValueError: attempt to get argmax of an empty sequence` |
| `q11.iloc[0]` | `IndexError: single positional indexer is out-of-bounds` |

**Template**

```python
sel = df[(df[CAT] == VALUE) & (df[NUM] > THRESHOLD)]
print("rows:", len(sel))
if sel.empty:
    print(f"no rows: max {NUM} in the data is {df[NUM].max():,.2f}, below the threshold {THRESHOLD:,}")
else:
    print(sel.to_string(index=False))
```

**Worked — the reachable threshold**

```python
for t in [100000, 150000, 200000, 220000]:
    print(f"AAA and Current_Value > {t:,}:", int(((bonds["Credit_Rating"]=="AAA") & (bonds["Current_Value"]>t)).sum()), "rows")
```

```text
AAA and Current_Value > 100,000: 22 rows
AAA and Current_Value > 150,000: 13 rows
AAA and Current_Value > 200,000: 3 rows
AAA and Current_Value > 220,000: 1 rows
```

```python
print(bonds[(bonds["Credit_Rating"]=="AAA") & (bonds["Current_Value"]>200000)]
      [["Holding_ID","Bond_Code","Credit_Rating","Current_Value"]].to_string(index=False))
```

```text
Holding_ID Bond_Code Credit_Rating  Current_Value
     H0018    BND022           AAA      246147.60
     H0052    BND022           AAA      218337.60
     H0088    BND022           AAA      210678.78
```

**The sentence to write**

> No holding satisfies both conditions: the largest `Current_Value` in the entire portfolio is
> ₹246,147.60, which is below the ₹4,00,000 threshold, and the largest AAA holding is the same
> row. The correct answer is therefore an empty result (0 of 120 holdings). Using a reachable
> threshold of ₹2,00,000 instead, three AAA holdings qualify: H0018, H0052 and H0088.

**Variants**

| Why it is empty | How to detect it |
| --- | --- |
| threshold above the maximum | `df[NUM].max()` |
| threshold below the minimum (for `<`) | `df[NUM].min()` |
| category value misspelt or wrong case | `df[CAT].unique()` |
| two conditions that cannot co-occur | `pd.crosstab(df[CAT], df[NUM] > T)` |
| the filter ran on a stale variable | re-read the file |

**Traps**

- Case matters: `Branch == "mumbai"` returns 0 rows on the loan file while `Branch.str.lower() == "mumbai"` returns 41. Print `df[CAT].unique()` before blaming the data.
- `mean()` of an empty selection is `nan`, and `sum()` is `0.0`. Never report "the average is 0".
- Guard any `idxmax` / `iloc[0]` that follows a filter with `if not sel.empty:`.

**Drill**

1. Find the highest `Amount` in `bank_transactions.csv` and say whether "Credit transactions ≥ 200000" is reachable.

<details><summary>Answer</summary>

```python
bank = pd.read_csv(BASE + "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv")
print(bank["Amount"].max(), int(((bank["TxnType"]=="Credit") & (bank["Amount"]>=200000)).sum()))
```

</details>

## T24 — `nlargest` and `sort_values().head()` disagree on ties

**Exam phrasings**

- "Display the five largest holdings based on Current_Value"
- "Show the top 3 employees by Score"
- "Bar chart: Five highest-volume Reliance trading days"
- "which rows does nlargest keep when there is a tie"

**Symptom.** Two correct-looking methods return different rows.

**Cause.** Both return exactly N rows. When the Nth value is tied, each picks a different
tie-breaker: `nlargest` keeps the **first** occurrences in original order, `sort_values` uses a
different (quicksort) ordering.

**Fix.** If the boundary value is tied, either use `keep="all"` or filter on `>= threshold` — and
say how many rows tie.

**Core idea.** "Top N" is ambiguous whenever the Nth value repeats.

**Real message** — none.

**Worked** — `Sorting_Data`: two employees score 95 and **five** score 90:

```python
s = pd.read_excel(W, sheet_name="Sorting_Data")
print(s.nlargest(3, "Score")[["Employee_ID","Name","Score"]].to_string(index=False))
print(s.sort_values("Score", ascending=False).head(3)[["Employee_ID","Name","Score"]].to_string(index=False))
```

```text
Employee_ID        Name  Score
       E008 Nikhil Jain     95
       E014   Dev Patel     95
       E005  Tanvi Bhat     90
Employee_ID         Name  Score
       E008  Nikhil Jain     95
       E014    Dev Patel     95
       E016 Omkar Sawant     90
```

**The third row is a different employee.** Both answers are defensible; neither is complete.

```python
print(s.nlargest(3, "Score", keep="all")[["Employee_ID","Name","Score"]].to_string(index=False))
print("rows:", len(s.nlargest(3, "Score", keep="all")))
```

```text
Employee_ID         Name  Score
       E008  Nikhil Jain     95
       E014    Dev Patel     95
       E005   Tanvi Bhat     90
       E010 Varun Shetty     90
       E011   Neha Reddy     90
       E012  Sahil Gupta     90
       E016 Omkar Sawant     90
rows: 7
```

**Template — the honest answer**

```python
N = 3
thr = df[COL].nlargest(N).min()               # the Nth largest value
top = df[df[COL] >= thr].sort_values(COL, ascending=False)
print(f"top-{N} cut-off {COL} = {thr}; {len(top)} rows reach it")
print(top.to_string(index=False))
```

```text
top-3 cut-off Score = 90; 7 rows reach it
```

**Variants**

| Wording | Code |
| --- | --- |
| "top 5 by value" | `df.nlargest(5, COL)` |
| "bottom 5 by value" | `df.nsmallest(5, COL)` |
| "top 5, keep every tie" | `df.nlargest(5, COL, keep="all")` |
| "the last of the tied rows" | `df.nlargest(5, COL, keep="last")` |
| "highest per group" | `df.sort_values(COL, ascending=False).groupby(G).head(1)` |
| "top 5 with a tie-break on a second column" | `df.sort_values([COL, COL2], ascending=[False, True]).head(5)` |

**Traps**

- `nlargest` skips NaN; `sort_values(ascending=False)` puts NaN **last** but still counts them in `.head(N)` only after the real values, so with many NaN the two agree again. Check `df[COL].isna().sum()` first (T28).
- `idxmax()` on a numeric column has the same blind spot: `s["Score"].idxmax()` returns position 7 (`Nikhil Jain`) while two rows share the maximum 95.
- **Write this sentence:** "Three employees are requested but seven reach the 3rd-highest score of 90; all seven are listed, with the tie noted."

**Drill**

1. Report the five largest bond holdings by `Current_Value`, checking whether the 5th is tied.

<details><summary>Answer</summary>

```python
thr = bonds["Current_Value"].nlargest(5).min()
print(thr, int((bonds["Current_Value"] >= thr).sum()))
print(bonds.nlargest(5, "Current_Value")[["Holding_ID","Bond_Code","Current_Value"]].to_string(index=False))
```

```text
241293.6 5
Holding_ID Bond_Code  Current_Value
     H0018    BND022      246147.60
     H0074    BND006      244002.85
     H0046    BND009      243645.60
     H0020    BND024      242670.20
     H0017    BND018      241293.60
```

Five rows, no tie at the cut-off — so here `nlargest(5)` and `sort_values().head(5)` agree.

</details>

## T25 — A correlation near zero is a finding, not a failure

**Exam phrasings**

- "Analyze the Relationship Between Total Deposits and Net Profit"
- "Analyze the Relationship Between Credit Limit and Total Spend"
- "Analyze the Relationship Between Age and Claim Amount"
- "Create a scatter plot and comment on the relationship"

**Symptom.** The scatter plot is a shapeless cloud and you cannot see the "trend" the question
implies.

**Cause.** The four Matplotlib CSVs are randomly generated. There is no relationship to find.

**Fix.** Compute `r`, say what it is, and describe the absence of a relationship in the same
sentence structure you would use for a strong one. **Do not invent a trend.**

**Core idea.** The mark is for the honest reading, not for finding a pattern.

**Real message** — none.

**Worked — every pair the exercises ask about** (n = 100 each):

```python
M = BASE + "Matplotlib/Matplotlib exercises/"
b  = pd.read_csv(M + "bank_branch_performance.csv")
cc = pd.read_csv(M + "credit_card_usage.csv")
ic = pd.read_csv(M + "insurance_claims.csv")
sv = pd.read_csv(M + "savings_account_analysis.csv")
print("Ex1 Q3  Total Deposits vs Net Profit :", round(b["Total Deposits"].corr(b["Net Profit"]), 4))
print("Ex2 Q3  Credit Limit vs Total Spend  :", round(cc["Credit Limit"].corr(cc["Total Spend"]), 4))
print("Ex3 Q3  Age vs Claim Amount          :", round(ic["Age"].corr(ic["Claim Amount"]), 4))
print("Ex4 Q3  Age vs Balance               :", round(sv["Age"].corr(sv["Balance"]), 4))
```

```text
Ex1 Q3  Total Deposits vs Net Profit : -0.0076
Ex2 Q3  Credit Limit vs Total Spend  : 0.1251
Ex3 Q3  Age vs Claim Amount          : -0.09
Ex4 Q3  Age vs Balance               : 0.0385
```

Across the whole of all four files, the largest absolute correlation between any pair of
non-ID numeric columns is only 0.198 (`Age` vs `Credit Limit` in `credit_card_usage.csv`):

```text
bank_branch_performance.csv -> n=100  max |r| = 0.1116 between ('Net Profit', 'Customer Satisfaction')
credit_card_usage.csv       -> n=100  max |r| = 0.1977 between ('Age', 'Credit Limit')
insurance_claims.csv        -> n=100  max |r| = 0.0900 between ('Age', 'Claim Amount')
savings_account_analysis.csv-> n=100  max |r| = 0.0590 between ('Balance', 'Number of Transactions')
```

**Template**

```python
r = df[X].corr(df[Y])
print(f"r = {r:.4f}  (n = {len(df)})")
```

**Write-up answers**

> **Model reading for a near-zero correlation.** The scatter plot shows no systematic
> relationship between `Total Deposits` and `Net Profit`: the points fill the plotting area
> without slope or curvature, and the Pearson correlation is r = −0.008 over 100 branches. A
> correlation this close to zero means deposit size explains essentially none of the variation in
> profit for this sample (r² < 0.01). Branch profitability in this dataset must therefore be
> driven by factors not recorded here — cost base, loan mix or fee income. No trend line is
> fitted, because fitting one would imply a relationship the data does not support.

Swap the column names and the number, and the same four sentences answer Exercise 2 Q3,
Exercise 3 Q3 and Exercise 4 Q3.

**Variants**

| Wording | What to report |
| --- | --- |
| "is there a relationship" | `r`, `n`, and "no" |
| "positive or negative" | the sign, plus "but negligible in size" |
| "correlation matrix" | `df.select_dtypes("number").corr().round(3)` |
| "strongest pair" | the max off-diagonal `\|r\|`, and say it is still weak |
| "fit a trend line" | say it is not supported, or fit it and state r² |
| "Spearman instead" | `df[X].corr(df[Y], method="spearman")` |

**Traps**

- Drop the ID columns before computing a correlation matrix: `Branch ID`, `Customer ID`, `Claim ID` and `Account ID` are row numbers and correlate with nothing meaningfully.
- `r ≈ 0` does **not** mean "no data" or "the code is wrong". Say the sample size out loud so the marker sees the calculation happened.
- A verbal rule of thumb worth writing: |r| < 0.2 negligible, 0.2–0.4 weak, 0.4–0.6 moderate, > 0.6 strong. All four course pairs are negligible.

**Drill**

1. Print the full correlation matrix of `savings_account_analysis.csv` without the ID column.

<details><summary>Answer</summary>

```python
print(sv.drop(columns=["Account ID"]).select_dtypes("number").corr().round(3))
```

</details>

## T26 — `merge` silently multiplies rows on duplicate keys

**Exam phrasings**

- "Combine the bond holdings with the bond master information using Bond_Code. All observations appearing in Bond_Holdings should remain"
- "Merge the two DataFrames on the common column"
- "my merged DataFrame has more rows than the original"

**Symptom.** 20 rows in, 70 rows out. Every subsequent sum and count is wrong.

**Cause.** A merge is a Cartesian product **per key**. If a key appears 9 times on the left and 3
times on the right, that key yields 27 rows.

**Fix.** Print `.shape` before and after. Add `validate=` so pandas raises instead of multiplying.

**Core idea.** A left merge preserves row count only when the right key is **unique**.

**Worked — the explosion**

```python
sales = pd.read_excel(W, sheet_name="Sales")       # 20 rows
mkt   = pd.read_excel(W, sheet_name="Marketing")   # 15 rows
print("sales:", sales.shape, " mkt:", mkt.shape)
print("sales Region counts:"); print(sales["Region"].value_counts().to_string())
print("mkt   Region counts:"); print(mkt["Region"].value_counts().to_string())
j = sales.merge(mkt, on="Region", how="left")
print("merged:", j.shape)
```

```text
sales: (20, 5)  mkt: (15, 5)
sales Region counts:
Region
North    9
West     5
East     4
South    2
mkt   Region counts:
Region
East     5
South    4
West     3
North    3
merged: (70, 9)
```

9×3 + 4×5 + 5×3 + 2×4 = 27 + 20 + 15 + 8 = **70**. `how="left"` did not protect you.

**Real messages — `validate=` turns the bug into an error**

```python
sales.merge(mkt, on="Region", how="left", validate="one_to_one")
```

```text
MergeError: Merge keys are not unique in either left or right dataset; not a one-to-one merge
```

```python
sales.merge(mkt, on="Region", how="left", validate="many_to_one")
```

```text
MergeError: Merge keys are not unique in right dataset; not a many-to-one merge
```

```python
sales.merge(mkt, on="Region", how="left", validate="one_to_many")
```

```text
MergeError: Merge keys are not unique in left dataset; not a one-to-many merge
```

**Template**

```python
print("before:", left.shape, right.shape)
m = left.merge(right, on=KEY, how="left", validate="many_to_one", indicator=True)
print("after :", m.shape)
print(m["_merge"].value_counts())
```

**Worked — the fix, and the row count preserved**

```python
lookup = mkt.drop_duplicates("Region")[["Region", "Leads"]]
ok = sales.merge(lookup, on="Region", how="left", validate="many_to_one")
print("ok shape:", ok.shape)
print(sales.merge(lookup, on="Region", how="left", indicator=True)["_merge"].value_counts().to_string())
```

```text
ok shape: (20, 6)
_merge
both          20
left_only      0
right_only     0
```

Integrated Case 2 does it correctly by nature — `Bond_Master` has 24 unique `Bond_Code` rows, so
120 holdings merge to 120 rows:

```text
merge shapes: holdings (120, 6) -> merged (120, 11)
```

**Variants**

| `how=` | Rows kept |
| --- | --- |
| `"left"` | every left row (default of `merge` is `"inner"`, not `"left"`) |
| `"inner"` | only matched keys — **`merge`'s default** |
| `"right"` | every right row |
| `"outer"` | everything, unmatched sides filled with NaN |
| `validate="one_to_one"` | raises if either side has duplicate keys |
| `validate="many_to_one"` | raises if the **right** side has duplicate keys — the usual guard |
| `indicator=True` | adds `_merge` with `both` / `left_only` / `right_only` |

**Traps**

- `pd.merge` defaults to `how="inner"`; `df.join` defaults to `how="left"` (T27). They are opposite defaults on the same operation.
- "All observations appearing in Bond_Holdings should remain" is exam language for `how="left"`. Write that mapping down.
- Keys that look equal may not be: trailing spaces, `"11001"` vs `11001`, `"Mumbai"` vs `"mumbai"`. Compare `left[KEY].dtype` with `right[KEY].dtype` first.
- After any merge, print `m.shape` and `m.isna().sum()`. A sudden NaN column means unmatched rows (T10).

**Drill**

1. Merge `Sales` and `Marketing` on `Region` so the result has exactly 20 rows, and prove it.

<details><summary>Answer</summary>

```python
lookup = mkt.drop_duplicates("Region")[["Region","Campaign_ID","Leads","Spend"]]
m = sales.merge(lookup, on="Region", how="left", validate="many_to_one")
print(sales.shape, "->", m.shape)
```

</details>

## T27 — `join` defaults to `how='left'` and refuses overlapping names

**Exam phrasings**

- "Join the two DataFrames on their index"
- "ValueError: columns overlap but no suffix specified"
- "Revenue_x and Revenue_y in my merged output"

**Symptom.** Unmatched rows survive with NaN when you wanted an inner join, or the join raises
about overlapping names.

**Cause.** `DataFrame.join` joins on the **index** and defaults to `how="left"` — the opposite of
`pd.merge`, which defaults to `how="inner"`. Duplicate column names must be disambiguated
explicitly.

**Fix.** Always pass `how=` to `join`. Pass `lsuffix`/`rsuffix` (or use `merge` with `suffixes=`).

**Core idea.** `merge` → inner by default, on columns. `join` → left by default, on the index.

**Worked — the default**

```python
left  = sales.drop_duplicates("Region").set_index("Region")[["Order_ID","Units","Revenue"]]
right = mkt.drop_duplicates("Region").set_index("Region")[["Campaign_ID","Leads"]]
right = right.drop(index="South")          # South deliberately absent
j = left.join(right)                       # how="left" by default
print(j.to_string())
print("rows:", len(j), " Leads dtype:", j["Leads"].dtype)
print("how='inner' rows:", len(left.join(right, how="inner")))
```

```text
       Order_ID  Units  Revenue Campaign_ID  Leads
Region
North      O001     18     1800        M009  261.0
East       O003     23     2300        M001  177.0
West       O005     20     3000        M002   82.0
South      O007      6      600         NaN    NaN
rows: 4  Leads dtype: float64
how='inner' rows: 3
```

`South` survived with NaN, and `Leads` became `float64` (T10).

**Real message — overlapping names**

```python
a = sales.drop_duplicates("Region").set_index("Region")[["Revenue","Units"]]
b = sales.drop_duplicates("Region", keep="last").set_index("Region")[["Revenue","Units"]]
a.join(b)
```

```text
ValueError: columns overlap but no suffix specified: Index(['Revenue', 'Units'], dtype='object')
```

```python
print(a.join(b, lsuffix="_q1", rsuffix="_q2").to_string())
```

```text
        Revenue_q1  Units_q1  Revenue_q2  Units_q2
Region
North         1800        18        2400        24
East          2300        23        1200        12
West          3000        20         720         6
South          600         6        2640        22
```

`merge` does not raise — it silently appends `_x` and `_y`:

```text
default suffixes -> columns: ['Region', 'Revenue_x', 'Units_x', 'Revenue_y', 'Units_y']
with suffixes=("_q1","_q2") -> ['Region', 'Revenue_q1', 'Units_q1', 'Revenue_q2', 'Units_q2']
```

**Template**

```python
j = left.join(right, how="inner")                       # say how= explicitly
j = left.join(right, how="left", lsuffix="_l", rsuffix="_r")
m = left.merge(right, on=KEY, how="left", suffixes=("_2024", "_2025"))
```

**Variants**

| Situation | Tool |
| --- | --- |
| both frames indexed by the key | `left.join(right, how=...)` |
| the key is a column | `left.merge(right, on=KEY, how=...)` |
| key column on one side, index on the other | `left.merge(right, left_on=KEY, right_index=True)` |
| stack rows, not columns | `pd.concat([a, b], ignore_index=True)` |
| glue columns side by side, same index | `pd.concat([a, b], axis=1)` |
| three or more frames | `left.join([r1, r2])` |

**Traps**

- `pd.concat([a, b], axis=1)` does **not** raise on overlapping names — it produces two columns called `Revenue` and every later `df["Revenue"]` returns a two-column DataFrame. Rename before concatenating.
- Meaningful suffixes (`_2024` / `_2025`) score better than `_x` / `_y`. A marker can read them.
- `join` aligns on the index, so a stale `RangeIndex` after filtering joins the wrong rows. `reset_index(drop=True)` or `set_index(KEY)` first.

**Drill**

1. Join `left` and `right` keeping only matched regions, with suffixes `_sales` and `_mkt`.

<details><summary>Answer</summary>

```python
print(left.join(right, how="inner", lsuffix="_sales", rsuffix="_mkt"))
```

</details>

## T28 — NaN keys are dropped by `value_counts` and `groupby`, and sorted last

**Exam phrasings**

- "How many records have a missing value in this column?"
- "Filter transactions from Pune branch or where Branch is missing"
- "Show the five lowest scores"
- "my value_counts total is less than the number of rows"

**Symptom.** Your frequency table or group summary covers fewer rows than the dataset; or "the
five lowest" turns out to be five NaN.

**Cause.** `value_counts()`, `groupby()` and `nunique()` all default to `dropna=True`.
`sort_values()` puts NaN last **in both directions**.

**Fix.** `dropna=False` when the missing category is part of the answer; `na_position="first"` when
sorting matters.

**Core idea.** pandas hides NaN by default in exactly the places where a report needs them.

**Worked** — `Missing_Data`, 22 rows, `City` has 2 NaN and `Status` has 1:

```python
print(df["City"].value_counts().to_string())
print("sum of counts:", int(df["City"].value_counts().sum()), " len(df):", len(df))
print(df["City"].value_counts(dropna=False).to_string())
```

```text
City
Pune         5
Hyderabad    4
Delhi        4
Goa          3
Bengaluru    2
Mumbai       2
sum of counts: 20  len(df): 22
City
Pune         5
Hyderabad    4
Delhi        4
Goa          3
Bengaluru    2
Mumbai       2
NaN          2
```

```python
print(df.groupby("Status")["Score"].count().to_string())
print("rows covered:", int(df.groupby("Status")["Score"].count().sum()))
print(df.groupby("Status", dropna=False)["Score"].count().to_string())
```

```text
Status
Active      4
Inactive    8
Pending     4
rows covered: 16
Status
Active      4
Inactive    8
Pending     4
NaN         1
```

**Sorting** — NaN stay at the bottom even when sorting descending:

```python
print(df.sort_values("Score", ascending=False)[["Record_ID","Score"]].tail(6).to_string(index=False))
```

```text
Record_ID  Score
     R014   55.0
     R004    NaN
     R011    NaN
     R012    NaN
     R013    NaN
     R011    NaN
```

So "the five lowest scores" read off the **tail** of a descending sort gives five NaN. Use
`sort_values("Score").head(5)` or `nsmallest(5, "Score")`.

**Template**

```python
df[COL].value_counts(dropna=False)
df.groupby(GROUP_COL, dropna=False)[COL].agg(["size", "count", "mean"])
df.sort_values(COL, na_position="first")
```

**Variants**

| Task | Code |
| --- | --- |
| rows per group, NaN included | `df.groupby(G, dropna=False).size()` |
| distinct values incl. NaN | `df[COL].nunique(dropna=False)` |
| crosstab incl. NaN | `pd.crosstab(df[A], df[B], dropna=False)` |
| "Pune **or** missing" | `df[(df[COL] == "Pune") \| df[COL].isna()]` |
| NaN first when sorting | `sort_values(COL, na_position="first")` |
| rows per group vs values per group | `size` counts rows, `count` counts non-null |

**Worked — `size` vs `count` in one table**

```python
print(df.groupby("City", dropna=False)
        .agg(rows=("Record_ID","size"), score_n=("Score","count"), score_mean=("Score","mean"))
        .round(2).to_string())
```

```text
           rows  score_n  score_mean
City
Bengaluru     2        2        92.0
Delhi         4        2        82.0
Goa           3        2        86.5
Hyderabad     4        2        88.5
Mumbai        2        2        68.5
Pune          5        5        73.2
NaN           2        2        71.5
```

`Delhi` has 4 rows but only 2 usable `Score` values. Report both numbers.

**Traps**

- `df[COL] == np.nan` is always `False`. Use `.isna()`.
- `"Pune or missing"` needs `|` and `.isna()`, not `isin(["Pune", np.nan])`.
- After `dropna=False`, the NaN group's label is literally `NaN` and cannot be selected with `.loc["NaN"]`.

**Drill**

1. Report `Status` frequencies including missing, as counts and as percentages of all 22 rows.

<details><summary>Answer</summary>

```python
vc = df["Status"].value_counts(dropna=False)
print(pd.DataFrame({"Frequency": vc, "Percentage": (vc / len(df) * 100).round(2)}))
```

</details>

## T29 — Duplicate rows inflate every count, sum and mean

**Exam phrasings**

- "Identify and remove duplicate records"
- "Find the number of duplicate rows in the dataset"
- "my totals are higher than the model answer"
- "Check the dataset for duplicates before answering"

**Symptom.** Sums and counts are slightly too high and you cannot see why.

**Cause.** The `Missing_Data` sheet contains **two planted duplicate rows** (`R005` and `R011`
each appear twice). Exam datasets do the same.

**Fix.** `df.duplicated().sum()` in your very first cell. Decide whether to drop, and say so.

**Core idea.** Duplicates are invisible in `head()` and in `describe()`. Only `duplicated()`
finds them.

**Worked**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("len:", len(df), " unique rows:", len(df.drop_duplicates()),
      " duplicated().sum():", int(df.duplicated().sum()))
print(df[df.duplicated(keep=False)].to_string())
```

```text
len: 22  unique rows: 20  duplicated().sum(): 2
   Record_ID         Name   Age  Score     Income       City    Status
4       R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
10      R011   Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
20      R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
21      R011   Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
```

What the duplicates do to the answers:

```python
print("Score.mean()  with duplicates:", round(df["Score"].mean(), 4),
      " after dedup:", round(df.drop_duplicates()["Score"].mean(), 4))
print("Income.sum()  with duplicates:", round(df["Income"].sum(), 2),
      " after dedup:", round(df.drop_duplicates()["Income"].sum(), 2))
```

```text
Score.mean()  with duplicates: 79.0588  after dedup: 78.875
Income.sum()  with duplicates: 1897271.43  after dedup: 1658658.63
```

The income total is overstated by **238,612.80** — more than 14 per cent.

**Template**

```python
print("duplicate rows:", int(df.duplicated().sum()))
print("duplicate IDs :", int(df.duplicated(subset=[ID_COL]).sum()))
clean = df.drop_duplicates()                       # or subset=[ID_COL], keep="first"
print("dropped:", len(df) - len(clean), "rows")
```

**Variants**

| Task | Code |
| --- | --- |
| count duplicate rows | `df.duplicated().sum()` → 2 |
| see all copies, not just the later ones | `df[df.duplicated(keep=False)]` → 4 rows |
| duplicates on the ID only | `df.duplicated(subset=["Record_ID"]).sum()` → 2 |
| keep the last copy | `df.drop_duplicates(keep="last")` |
| drop every copy of a duplicated row | `df.drop_duplicates(keep=False)` |
| duplicates on a key pair | `df.duplicated(subset=["Region","Product"])` |

**Traps**

- `drop_duplicates()` needs **every** column to match. A duplicate record with one differing timestamp is not caught — use `subset=[ID_COL]`.
- Dropping duplicates changes `len(df)`, so re-report any count you gave earlier.
- Say which you did: "2 exact duplicate rows (R005, R011) were removed before summarising, leaving 20 records."

**Drill**

1. Remove duplicates from `Missing_Data` keeping the last copy, and report the new shape and `Income` total.

<details><summary>Answer</summary>

```python
clean = df.drop_duplicates(keep="last")
print(clean.shape, round(clean["Income"].sum(), 2))
```

</details>

## T30 — `savefig` after `show()` writes a blank file

**Exam phrasings**

- "save the complete figure as Stock_Analysis.png"
- "save the same figure as Stock_Analysis.pdf"
- "display the completed figure"
- "my saved PNG is empty or white"

**Symptom.** The chart appears on screen, and the saved file is blank and the wrong size.

**Cause.** In a notebook (`%matplotlib inline`) `plt.show()` renders the figure **and closes it**.
A following `plt.savefig()` has nothing to save, so matplotlib creates a brand-new empty figure and
writes that.

**Fix.** `savefig` first, `show` last. Or hold the figure object and use `fig.savefig(...)`, which
is immune to the ordering.

**Core idea.** `show()` consumes the figure. Save before you show.

**Worked — the proof, measured**

```python
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt, os
import matplotlib.image as mpimg, numpy as np

M = BASE + "Matplotlib/Matplotlib exercises/"
bb = pd.read_csv(M + "bank_branch_performance.csv")

# A — figure still open
plt.figure(figsize=(6,4)); plt.hist(bb["Customer Satisfaction"], bins=10); plt.title("A")
plt.savefig("A.png"); plt.close("all")

# B — the notebook sequence: show() renders AND closes, then savefig writes a new empty figure
plt.figure(figsize=(6,4)); plt.hist(bb["Customer Satisfaction"], bins=10); plt.title("B")
plt.close("all")              # exactly what the inline backend does after show()
plt.savefig("B.png"); plt.close("all")

for f in ["A.png", "B.png"]:
    a = mpimg.imread(f)
    print(f, os.path.getsize(f), "bytes", a.shape,
          "unique colours:", len(np.unique(a.reshape(-1, a.shape[2]), axis=0)))
```

```text
A.png 6617 bytes (400, 600, 4) unique colours: 199
B.png 2397 bytes (480, 640, 4) unique colours: 1
```

`B.png` has **one** unique colour — it is entirely blank — and it is 640×480, matplotlib's default
size, not the 600×400 you asked for. That size mismatch is the fingerprint of this bug.

**Note for plain scripts.** Running `python3 script.py` with the non-interactive `Agg` backend,
`plt.show()` only warns (`UserWarning: FigureCanvasAgg is non-interactive, and thus cannot be
shown`) and leaves the figure open, so `savefig` after `show` happens to work. **Do not rely on
it** — the exam is marked in a notebook, where `show()` closes the figure.

**Template — the safe order, and the safest form**

```python
# order that always works
plt.savefig("Stock_Analysis.png", dpi=150, bbox_inches="tight")
plt.savefig("Stock_Analysis.pdf")
plt.show()

# or hold the object — ordering then does not matter at all
fig, ax = plt.subplots(figsize=(6, 4))
ax.hist(bb["Customer Satisfaction"], bins=10)
fig.tight_layout()
fig.savefig("Stock_Analysis.png", dpi=150)
fig.savefig("Stock_Analysis.pdf")
plt.show()
```

**Variants**

| Requirement | Code |
| --- | --- |
| both PNG and PDF (Case 1 Q15) | two `savefig` calls before `show()` |
| high resolution | `dpi=150` or `dpi=300` |
| nothing cropped | `bbox_inches="tight"` |
| transparent background | `transparent=True` |
| save each subplot separately | build separate figures, save each |
| free memory in a loop | `plt.close(fig)` after each `savefig` |

**Traps**

- The file **exists** after this bug, so "the file was created" is not evidence. Open it, or check its byte size.
- `bbox_inches="tight"` and `tight_layout()` are different things: one trims the saved margin, the other repositions the axes (T32). Case 1 Q15 asks for `tight_layout()` explicitly.
- Do not put `plt.show()` inside a loop that also saves — each `show()` closes the current figure.

**Drill**

1. Save the Exercise 1 Q1 histogram as both PNG and PDF, then display it.

<details><summary>Answer</summary>

```python
fig, ax = plt.subplots(figsize=(7,4))
ax.hist(bb["Customer Satisfaction"], bins=10, edgecolor="black")
ax.set_title("Distribution of Customer Satisfaction")
ax.set_xlabel("Customer Satisfaction"); ax.set_ylabel("Number of branches")
fig.tight_layout(); fig.savefig("q1.png", dpi=150); fig.savefig("q1.pdf")
plt.show()
```

</details>

## T31 — `plt.pie` needs counts and labels in the same order

**Exam phrasings**

- "Visualize the Proportion of Branches in Different Cities"
- "Use plt.pie() and include labels for each city"
- "Visualize the Proportion of Claims Approved vs. Rejected"
- "Pie chart: Positive versus non-positive Infosys return days"

**Symptom.** The pie renders perfectly and every label is on the wrong slice.

**Cause.** `plt.pie(x, labels=...)` pairs the two sequences by **position**. `value_counts()`
returns counts in descending-count order; `sorted(...)` returns names alphabetically. Mixing the
two scrambles the mapping.

**Fix.** Take the sizes and the labels from **the same object**: `vc.values` and `vc.index`.

**Core idea.** One `value_counts()` result supplies both arguments. Never build them separately.

**Worked — the scrambling, measured**

```python
vc = bb["City"].value_counts()
counts = vc.values          # descending count order
labels = sorted(vc.index)   # alphabetical order
print(pd.DataFrame({"label_used": labels, "count_used": counts,
                    "true_count": [int(vc[l]) for l in labels]}).to_string(index=False))
```

```text
 label_used  count_used  true_count
    Chicago          26          16
    Houston          21          26
Los Angeles          19          21
   New York          18          18
    Phoenix          16          19
```

Chicago is drawn as the largest city with 26 branches; it actually has 16.

```python
print("labels:", vc.index.tolist())
print("counts:", vc.values.tolist())
```

```text
labels: ['Houston', 'Los Angeles', 'Phoenix', 'New York', 'Chicago']
counts: [26, 21, 19, 18, 16]
```

**Template**

```python
vc = df[CAT_COL].value_counts()
fig, ax = plt.subplots(figsize=(6, 6))
ax.pie(vc.values, labels=vc.index, autopct="%1.1f%%", startangle=90)
ax.set_title(f"Proportion of {CAT_COL}")
ax.axis("equal")
fig.tight_layout(); fig.savefig("pie.png", dpi=150); plt.show()
```

**Real messages**

| Mistake | Message |
| --- | --- |
| 5 wedges, 3 labels | `ValueError: 'label' must be of length 'x'` |
| a NaN in the sizes | `ValueError: cannot convert float NaN to integer` |
| a negative size | `ValueError: Wedge sizes 'x' must be non negative values` |

**Variants**

| Requirement | Code |
| --- | --- |
| alphabetical slices | `vc = df[CAT].value_counts().sort_index()` — sorts **both** together |
| percentages on the slices | `autopct="%1.1f%%"` |
| counts on the slices | `autopct=lambda p: f"{p*len(bb)/100:.0f}"` |
| a boolean split ("approved vs rejected") | `df[CAT].value_counts()` on the two-valued column |
| "positive vs non-positive returns" | `(df[RET] > 0).value_counts().rename({True: "Positive", False: "Non-positive"})` |
| explode the largest slice | `explode=[0.1] + [0]*(len(vc)-1)` |

**Traps**

- `value_counts(dropna=True)` is the default, so a missing category silently vanishes from the pie and the percentages no longer sum over all rows. Use `dropna=False` and label it "Missing" if the question is about proportions of the whole dataset.
- A pie with more than about seven slices is unreadable. Say so and offer a bar chart if the question allows.
- `ax.axis("equal")` keeps the pie circular; without it, a non-square figure draws an ellipse.

**Drill**

1. Draw the Exercise 3 Q5 pie of `Claim Status` with percentages, taking both arguments from one object.

<details><summary>Answer</summary>

```python
ic = pd.read_csv(M + "insurance_claims.csv")
vc = ic["Claim Status"].value_counts()
fig, ax = plt.subplots(figsize=(5,5))
ax.pie(vc.values, labels=vc.index, autopct="%1.1f%%", startangle=90)
ax.set_title("Approved vs Rejected claims"); ax.axis("equal")
plt.show()
print(vc.to_string())        # Rejected 56, Approved 44
```

</details>

## T32 — Forgetting `plt.tight_layout()` on a multi-panel figure

**Exam phrasings**

- "use plt.tight_layout() to prevent overlaps"
- "Create a 2x3 grid of subplots using plt.subplot(2, 3, position)"
- "Use appropriate titles and axis labels, add grids where suitable, apply tight_layout(), and display the completed figure"
- "my subplot titles and axis labels overlap"

**Symptom.** Titles collide with the axis labels of the panel above, tick labels are clipped.

**Cause.** The default subplot spacing is fixed and does not account for the size of your titles
and tick labels.

**Fix.** `plt.tight_layout()` after **all** panels are drawn and labelled, before saving and
showing.

**Core idea.** `tight_layout` measures the drawn text and repositions the axes. It cannot do that
before the text exists.

**Real message** — none. Integrated Case 1 Q15 awards marks for the call itself; Integrated Case 2
Q16 also says "apply `tight_layout()`".

**Worked — what it actually changes**

Six panels on a 2×3 grid, each with a title and axis labels:

```text
axes rectangles (x0, y0, w, h)
without tight_layout:
   (0.125, 0.53, 0.228, 0.35)
   (0.399, 0.53, 0.228, 0.35)
   (0.672, 0.53, 0.228, 0.35)
   (0.125, 0.11, 0.228, 0.35)
   (0.399, 0.11, 0.228, 0.35)
   (0.681, 0.11, 0.21,  0.35)
with tight_layout:
   (0.079, 0.585, 0.23, 0.353)
   (0.406, 0.585, 0.23, 0.353)
   (0.732, 0.585, 0.23, 0.353)
   (0.079, 0.097, 0.23, 0.353)
   (0.406, 0.097, 0.23, 0.353)
   (0.741, 0.097, 0.212, 0.353)
```

The horizontal gap between panel 1 and panel 2 goes from `0.399 − 0.353 = 0.046` to
`0.406 − 0.309 = 0.097` — **more than double** — and the panels move left and up to reclaim the
unused figure margin.

**Template — the whole Case 1 Q15 skeleton**

```python
fig = plt.figure(figsize=(16, 9))

plt.subplot(2, 3, 1); ...; plt.title("..."); plt.xlabel("..."); plt.ylabel("..."); plt.legend(); plt.grid(True)
plt.subplot(2, 3, 2); ...; plt.title("..."); plt.xlabel("..."); plt.ylabel("...")
plt.subplot(2, 3, 3); ...; plt.title("...")
plt.subplot(2, 3, 4); ...; plt.title("...")
plt.subplot(2, 3, 5); ...; plt.title("...")
plt.subplot(2, 3, 6); ...; plt.title("...")

plt.tight_layout()                       # after every panel, before saving
plt.savefig("Stock_Analysis.png", dpi=150)
plt.savefig("Stock_Analysis.pdf")
plt.show()
```

**Variants**

| Need | Code |
| --- | --- |
| extra room for a super-title | `fig.suptitle("...")` then `plt.tight_layout(rect=[0, 0, 1, 0.96])` |
| manual control | `plt.subplots_adjust(hspace=0.35, wspace=0.3)` |
| object-oriented equivalent | `fig.tight_layout()` |
| newer alternative | `fig, axes = plt.subplots(2, 3, layout="constrained")` |
| rotate long x tick labels | `plt.xticks(rotation=45, ha="right")` then `tight_layout()` |
| trim only the saved margin | `savefig(..., bbox_inches="tight")` |

**Traps**

- Calling `tight_layout()` **before** you add titles has no effect on those titles. Put it last.
- A 2×3 grid of six charts needs a wide figure: `figsize=(16, 9)` or larger. `tight_layout` cannot create space that the figure does not have.
- `plt.subplot(2, 3, 6)` with a pie chart needs `plt.axis("equal")` inside that panel or the pie squashes.
- Write the call even if the figure already looks fine — the question awards it explicitly.

**Drill**

1. Build a 2×2 figure of the Exercise 1 charts (histogram, bar, scatter, boxplot), all labelled, with `tight_layout()` and a saved PNG.

<details><summary>Answer</summary>

```python
fig = plt.figure(figsize=(12, 8))
plt.subplot(2,2,1); plt.hist(bb["Customer Satisfaction"], bins=10); plt.title("Satisfaction"); plt.xlabel("Score"); plt.ylabel("Branches")
city = bb.groupby("City")["Net Profit"].mean()
plt.subplot(2,2,2); plt.bar(city.index, city.values); plt.title("Avg Net Profit by City"); plt.xticks(rotation=45, ha="right"); plt.ylabel("Net Profit")
plt.subplot(2,2,3); plt.scatter(bb["Total Deposits"], bb["Net Profit"], s=10); plt.title("Deposits vs Profit"); plt.xlabel("Total Deposits"); plt.ylabel("Net Profit")
plt.subplot(2,2,4); plt.boxplot(bb["Total Loans"]); plt.title("Total Loans"); plt.ylabel("Total Loans")
plt.tight_layout(); plt.savefig("ex1.png", dpi=150); plt.show()
```

</details>

## T33 — `fillna(method='ffill')` is deprecated — use `ffill()`

**Exam phrasings**

- "Forward fill the missing values"
- "Fill missing prices with the previous day's value"
- "FutureWarning: Series.fillna with 'method' is deprecated and will raise in a future version"
- "Backward fill the column"

**Symptom.** A `FutureWarning` in the middle of otherwise-correct output.

**Cause.** `fillna(method=...)` was split into `ffill()` and `bfill()` in pandas 2.1.

**Fix.** `df.ffill()` / `df.bfill()`, or `df[COL] = df[COL].ffill()`.

**Core idea.** The behaviour is identical; only the spelling changed.

**Real message**

```python
df["Score"].fillna(method="ffill")
```

```text
FutureWarning: Series.fillna with 'method' is deprecated and will raise in a future version. Use obj.ffill() or obj.bfill() instead.
```

`method="bfill"` gives the same warning. `df["Score"].ffill()` is silent and returns the same
values.

**Template**

```python
df[COL] = df[COL].ffill()               # carry the last known value forward
df[COL] = df[COL].bfill()               # carry the next known value backward
df[COL] = df[COL].ffill().bfill()       # cover a leading NaN too
df[COL] = df[COL].ffill(limit=2)        # fill at most 2 consecutive gaps
```

**Worked** — `Missing_Data` has a run of **exactly three** consecutive NaN in `Score` (rows
10, 11, 12 — `R011`, `R012`, `R013`), which makes `limit=` visible:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("NaN positions:", list(df.index[df["Score"].isna()]))
print("plain ffill   -> NaN left:", int(df["Score"].ffill().isna().sum()))
print("ffill(limit=2)-> NaN left:", int(df["Score"].ffill(limit=2).isna().sum()))
```

```text
NaN positions: [3, 10, 11, 12, 21]
plain ffill   -> NaN left: 0
ffill(limit=2)-> NaN left: 1
```

With `limit=2` the third NaN of the run survives — which is the honest behaviour if you do not
want to propagate a value across a long gap.

**Variants**

| Old | New |
| --- | --- |
| `fillna(method="ffill")` | `ffill()` |
| `fillna(method="pad")` | `ffill()` |
| `fillna(method="bfill")` | `bfill()` |
| `fillna(method="backfill")` | `bfill()` |
| `fillna(method="ffill", limit=2)` | `ffill(limit=2)` |
| `df.fillna(0)` | unchanged — a **value**, not a method |

**Traps**

- `ffill()` cannot fill a leading NaN (there is nothing before it). Chain `.ffill().bfill()` or state that row 0 stays missing.
- Forward filling is only defensible on data with a natural order — dates, sequences. On `Missing_Data` (unordered records) it copies a value from an unrelated person. Say why you chose it.
- `fillna(0)` is not deprecated. Only the `method=` keyword is.

**Drill**

1. Forward-fill `Score`, then say how many values were invented and from which rows.

<details><summary>Answer</summary>

```python
before = df["Score"].isna()
df["Score"] = df["Score"].ffill()
print("filled", int(before.sum()) - int(df["Score"].isna().sum()), "values at rows", list(df.index[before]))
```

</details>

## T34 — `df.append` no longer exists — use `pd.concat`

**Exam phrasings**

- "Add the new rows to the existing DataFrame"
- "Stack the two DataFrames one below the other"
- "AttributeError: 'DataFrame' object has no attribute 'append'"

**Symptom.** `AttributeError` on a method that appears in every older tutorial.

**Cause.** `DataFrame.append` was deprecated in pandas 1.4 and **removed** in 2.0.

**Fix.** `pd.concat([a, b], ignore_index=True)`.

**Core idea.** `concat` is the only way to stack frames now.

**Real message**

```python
df.append(df)
```

```text
AttributeError: 'DataFrame' object has no attribute 'append'
```

**Template**

```python
combined = pd.concat([df1, df2], ignore_index=True)     # stack rows
combined = pd.concat([df1, df2], axis=1)                # side by side
df.loc[len(df)] = [v1, v2, v3, ...]                     # add a single row
```

**Worked**

```python
print("original:", df.shape)
print("concat   :", pd.concat([df, df]).shape)
print("concat, index reset:", pd.concat([df, df], ignore_index=True).shape)
```

```text
original: (22, 7)
concat   : (44, 7)
concat, index reset: (44, 7)
```

**Variants**

| Task | Code |
| --- | --- |
| stack, keep both indexes | `pd.concat([a, b])` |
| stack, renumber 0…n−1 | `pd.concat([a, b], ignore_index=True)` |
| tag which frame each row came from | `pd.concat([a, b], keys=["2024","2025"])` |
| only the common columns | `pd.concat([a, b], join="inner")` |
| add one row | `df.loc[len(df)] = [...]` |
| build from a list of dicts | `pd.DataFrame(rows_list)` |

**Traps**

- Without `ignore_index=True` the result has duplicate index labels, and `.loc[0]` then returns two rows.
- `concat` aligns on **column names**. A typo in one frame's header produces a column of NaN instead of an error.
- `pd.concat` inside a loop is slow and unreadable. Collect dicts in a list and build the DataFrame once.

**Drill**

1. Stack `Sales` and `Marketing` and explain the resulting shape.

<details><summary>Answer</summary>

```python
c = pd.concat([sales, mkt], ignore_index=True)
print(c.shape, c.columns.tolist())
```

```text
(35, 9) ['Order_ID', 'Region', 'Product', 'Units', 'Revenue', 'Campaign_ID', 'Channel', 'Leads', 'Spend']
```

35 rows (20 + 15) and 9 columns: the two frames share only `Region`, so 8 of the 9 columns are
part NaN. Stacking frames with different schemas is almost never what a question wants — check
whether it meant `merge` (T26).

</details>

## T35 — `DataFrame.mean()` on mixed dtypes needs `numeric_only=True`

**Exam phrasings**

- "Find the mean of every numeric column"
- "Display descriptive statistics for the numeric columns"
- "TypeError: can only concatenate str (not \"int\") to str"
- "Compute the column averages of the whole DataFrame"

**Symptom.** `TypeError` mentioning `str` from a line that only asked for an average.

**Cause.** Since pandas 2.0, frame-wide reductions no longer silently skip text columns. `mean()`
tries to add the strings.

**Fix.** `df.mean(numeric_only=True)`, or select the numeric columns first.

**Core idea.** Say which columns you mean. pandas will not guess any more.

**Real message**

```python
df.mean()
```

```text
TypeError: can only concatenate str (not "int") to str
```

`df.sum()` raises the same message.

**Template**

```python
df.mean(numeric_only=True)
df.select_dtypes("number").mean()
df[[COL1, COL2]].mean()
```

**Worked**

```python
print(df.mean(numeric_only=True).to_string())
print(df.select_dtypes("number").columns.tolist())
```

```text
Age          37.421053
Score        79.058824
Income    94863.571500
['Age', 'Score', 'Income']
```

**Variants**

| Reduction | Safe form |
| --- | --- |
| mean | `df.mean(numeric_only=True)` |
| sum | `df.sum(numeric_only=True)` |
| median / std / var | same keyword |
| `describe()` | already numeric-only by default (T38) |
| count / min / max | work on text too — `min()` gives the alphabetically first string |
| per group | `df.groupby(G).mean(numeric_only=True)` |
| across a row | `df[NUMS].mean(axis=1)` |

**Traps**

- `df.sum()` on a text column would otherwise concatenate every string into one enormous value. The `TypeError` is protecting you.
- A numeric column stored as `object` (T14) is excluded from `numeric_only=True` **silently**. Print `df.dtypes` and fix the dtype first, or your average is computed over the wrong columns.
- `groupby(...).mean()` raises the same error in pandas 2.x; add `numeric_only=True` there too.

**Drill**

1. Print the mean of every numeric column of `Customer_Data`, and list the columns that were skipped.

<details><summary>Answer</summary>

```python
cust = pd.read_excel(W, sheet_name="Customer_Data")
print(cust.mean(numeric_only=True))
print("skipped:", [c for c in cust.columns if c not in cust.select_dtypes("number").columns])
```

</details>

## T36 — `pd.cut` returns an ordered Categorical of Intervals

**Exam phrasings**

- "arrange the intervals in their proper order"
- "my bins are listed in count order, not numeric order"
- "the interval column will not export to CSV or Excel"
- "sort_index() on a frequency table of intervals"

**Symptom.** `value_counts()` lists the classes out of order; the class column will not export or
concatenate cleanly.

**Cause.** `pd.cut` returns a `Categorical` whose categories are `Interval` objects and which is
**ordered**. `value_counts()` sorts by count; `sort_index()` sorts by the category order.

**Fix.** Always `sort_index()` after `value_counts()` on binned data. Convert with `astype(str)`
before writing to a file.

**Core idea.** Interval bins carry their own order. Use it (`sort_index`) or discard it
(`astype(str)`).

**Worked**

```python
cats = pd.cut(d["Processing_Days"], bins=[0,5,10,15,20,25], right=False)
print("dtype:", cats.dtype, " ordered:", cats.cat.ordered)
vc = cats.value_counts()
print("value_counts() — count order:"); print(vc.to_string())
print("sort_index() — interval order:"); print(vc.sort_index().to_string())
print("index type:", type(vc.index).__name__)
```

```text
dtype: category  ordered: True
value_counts() — count order:
Processing_Days
[5, 10)     13
[10, 15)     9
[15, 20)     6
[20, 25)     2
[0, 5)       0
sort_index() — interval order:
Processing_Days
[0, 5)       0
[5, 10)     13
[10, 15)     9
[15, 20)     6
[20, 25)     2
index type: CategoricalIndex
```

Note the empty class `[0, 5)`: `value_counts()` on a Categorical **keeps** zero-count categories
and puts them last. `sort_index()` restores them to their proper place — which is what a
frequency table must show.

**Exporting**

```python
ft = vc.sort_index().reset_index()
print("columns:", list(ft.columns), " first dtype:", ft.dtypes.iloc[0])
ft.columns = ["Processing_Days", "Frequency"]
ft["Processing_Days"] = ft["Processing_Days"].astype(str)
print(ft.to_string(index=False))
```

```text
columns: ['Processing_Days', 'count']  first dtype: category
Processing_Days  Frequency
         [0, 5)          0
        [5, 10)         13
       [10, 15)          9
       [15, 20)          6
       [20, 25)          2
```

**Template**

```python
df["Group"] = pd.cut(df[COL], bins=EDGES, right=False)
table = df["Group"].value_counts().sort_index()          # ALWAYS sort_index()
out = table.reset_index()
out.columns = ["Group", "Frequency"]                     # rename by position (T37)
out["Group"] = out["Group"].astype(str)                  # exportable text
```

**Variants**

| Need | Code |
| --- | --- |
| numeric order | `.sort_index()` |
| descending frequency | `.sort_values(ascending=False)` |
| readable class names | `pd.cut(..., labels=["0-5","5-10",...])` |
| drop empty classes | `table[table > 0]` — say that you did |
| the interval's bounds as numbers | `cats.cat.categories.left` / `.right` |
| group by the bin | `df.groupby("Group", observed=False)[COL].mean()` |

**Traps**

- `groupby` on a Categorical shows **all** categories unless you pass `observed=True`; in pandas 2.x omitting it emits a `FutureWarning`. Decide whether an empty class should appear and be explicit.
- `pd.concat` of two frames whose `Group` columns have different categories produces `object`, not `category`.
- `to_excel` on an `Interval` column writes the repr string anyway, but `astype(str)` makes it predictable.

**Drill**

1. Produce Case 3's frequency table in interval order with an exportable class column.

<details><summary>Answer</summary>

```python
c3["Group"] = pd.cut(c3["Transaction_Value"], bins=[20000,40000,60000,80000,100000,120000,140000], right=False)
t = c3["Group"].value_counts().sort_index().reset_index()
t.columns = ["Transaction Value Group", "Frequency"]
t["Transaction Value Group"] = t["Transaction Value Group"].astype(str)
print(t.to_string(index=False))
```

</details>

## T37 — `value_counts().reset_index()` column names differ by version

**Exam phrasings**

- "Convert the grouped frequency distribution into a DataFrame containing Group, Frequency, Percentage, Cumulative Frequency"
- "KeyError: 'index' after reset_index"
- "the reset_index column is called count, not the column name"
- "Rename the columns of the frequency table"

**Symptom.** `KeyError: 'index'` or `KeyError: 'Branch'` on the line right after `reset_index()`,
on a script that worked on someone else's laptop.

**Cause.** The output column names of `value_counts().reset_index()` changed in pandas 2.0.

| pandas | columns after `value_counts().reset_index()` |
| --- | --- |
| 1.x | `['index', 'Branch']` — the label column is `index`, the counts take the Series name |
| 2.x (this install) | `['Branch', 'count']` — the label column keeps its name, the counts are `count` |

**Fix.** Never reference those names. **Rename by position** — exactly what the course notebook
does.

**Core idea.** `df.columns = ["A", "B"]` is version-proof; `df.rename(columns={"index": "A"})` is not.

**Worked**

```python
vc = d["Branch"].value_counts()
r = vc.reset_index()
print(r.to_string())
print("columns:", list(r.columns))
r.columns = ["Branch", "Frequency"]          # rename by position
print(r.to_string(index=False))
```

```text
   Branch  count
0  Panaji     10
1  Margao     10
2   Vasco     10
columns: ['Branch', 'count']
Branch  Frequency
Panaji         10
Margao         10
 Vasco         10
```

The one-liner alternative, which works on both versions:

```python
print(vc.rename_axis("Branch").reset_index(name="Frequency").to_string(index=False))
```

```text
Branch  Frequency
Panaji         10
Margao         10
 Vasco         10
```

**Template — the full four-column frequency table**

```python
table = df["Group"].value_counts().sort_index()
ft = table.reset_index()
ft.columns = ["Group", "Frequency"]                                  # by position
ft["Percentage"] = (ft["Frequency"] / ft["Frequency"].sum() * 100).round(2)
ft["Cumulative_Frequency"] = ft["Frequency"].cumsum()
print(ft.to_string(index=False))
```

**Variants**

| Situation | Code |
| --- | --- |
| two columns | `ft.columns = ["Group", "Frequency"]` |
| name the counts at source | `vc.reset_index(name="Frequency")` |
| percentages directly | `df[COL].value_counts(normalize=True) * 100` |
| keep it a Series | skip `reset_index()` entirely |
| from a groupby | `df.groupby(G).size().reset_index(name="Frequency")` |
| cumulative percentage | `ft["Cum_Pct"] = ft["Percentage"].cumsum()` |

**Traps**

- `reset_index(name=...)` only works on a **Series**. On a DataFrame it raises `TypeError`.
- `ft.columns = [...]` must supply exactly as many names as there are columns, or it raises `ValueError: Length mismatch`.
- If you add `Percentage` and `Cumulative_Frequency` before renaming, the positions shift. Rename first.

**Drill**

1. Build the demo case's four-column frequency table for `Processing_Days`.

<details><summary>Answer</summary>

```python
t = pd.cut(d["Processing_Days"], bins=[0,5,10,15,20,25], right=False).value_counts().sort_index().reset_index()
t.columns = ["Processing_Days", "Frequency"]
t["Percentage"] = (t["Frequency"] / t["Frequency"].sum() * 100).round(2)
t["Cumulative_Frequency"] = t["Frequency"].cumsum()
print(t.to_string(index=False))
```

</details>

## T38 — `describe()` now summarises datetime columns too

**Exam phrasings**

- "Obtain descriptive statistics for the numerical variables"
- "Display descriptive statistics for the numeric columns. Add percentiles at 0.3, 0.7, 0.9"
- "why does describe() show a date column"
- "std is NaN for my date column"

**Symptom.** `describe()` shows a column of timestamps among the numbers, with `NaN` in the `std`
row, and the reader thinks something is broken.

**Cause.** Since pandas 2.0, `describe()` includes `datetime64` columns by default and reports
their mean, min, quartiles and max as timestamps. Standard deviation is not defined for them.

**Fix.** Nothing is wrong. If the question says "numeric variables", restrict the selection
explicitly.

**Core idea.** `describe()` picks columns for you. Pick them yourself when the question is
specific.

**Worked** — `Customer_Data` has `Join_Date` as `datetime64[ns]`:

```python
cust = pd.read_excel(W, sheet_name="Customer_Data")
print(cust.describe().to_string())
```

```text
             Age        Balance  Risk_Score            Join_Date
count  30.000000      30.000000   30.000000                   30
mean   39.033333  395335.506000  585.300000  2024-12-11 21:36:00
min    23.000000   25706.890000  327.000000  2024-01-20 00:00:00
25%    31.000000  111074.862500  433.750000  2024-07-05 12:00:00
50%    38.500000  411632.175000  583.500000  2024-12-12 12:00:00
75%    48.500000  633361.857500  740.250000  2025-05-22 06:00:00
max    58.000000  912373.950000  824.000000  2025-11-26 00:00:00
std    10.354021  300975.385757  165.463018                  NaN
```

Note the row order: `std` is pushed to the bottom and is `NaN` for the date column. The date
summary is genuinely useful — "customers joined between 20 Jan 2024 and 26 Nov 2025, median 12 Dec
2024" is a marked sentence.

**Template**

```python
df.describe()                                            # numeric + datetime
df.describe(include="number")                            # numeric only
df.select_dtypes("number").describe()                    # same, explicit
df.describe(include="all")                               # + object columns
df.describe(percentiles=[0.3, 0.7, 0.9])                 # extra percentiles
df.describe(include="datetime")                          # dates only
```

**Variants**

| Question | Code |
| --- | --- |
| "numeric variables only" | `df.describe(include="number")` |
| "all columns including text" | `df.describe(include="all")` — adds `unique`, `top`, `freq` |
| "percentiles at 0.3, 0.7, 0.9" | `df.describe(percentiles=[0.3, 0.7, 0.9])` |
| "summarise the date range" | `df[DATE].min(), df[DATE].max()` |
| "one column" | `df[COL].describe()` |
| transposed for readability | `df.describe().T.round(2)` |

**Traps**

- `include="all"` fills the numeric statistics with NaN for text columns and `unique`/`top`/`freq` with NaN for numeric ones. That is normal — do not read it as missing data.
- A date column stored as text (`object`) is **excluded** from the numeric describe and appears only under `include="all"`, with `unique`/`top`/`freq`. That is the clue that you forgot `pd.to_datetime` (T13).
- `describe()` reports `count` per column, so different columns can legitimately show different counts (T17).

**Drill**

1. Describe `Customer_Data`'s numeric columns only, with percentiles at 0.3, 0.7 and 0.9, transposed.

<details><summary>Answer</summary>

```python
print(cust.describe(include="number", percentiles=[0.3, 0.7, 0.9]).T.round(2))
```

</details>

## The 60-second sanity check

Run these six lines on **any** dataset before answering anything. They cost one minute and they
pre-empt T11, T14, T15, T16, T17, T23, T28 and T29.

```python
print(df.shape)              # 1. rows and columns — is the read correct?
print(df.columns.tolist())   # 2. the REAL column names
print(df.dtypes)             # 3. is anything numeric stored as object?
print(df.isna().sum())       # 4. where are the missing values?
print(df.head(3))            # 5. do the values look like what the prose describes?
print(df.duplicated().sum()) # 6. are there duplicate rows?
```

On `EX_A_loan_transactions.csv`:

```text
(200, 8)
['LoanID', 'Date', 'Branch', 'LoanProduct', 'NumBorrowers', 'PerBorrowerAmount', 'DisbursedAmount', 'Channel']
LoanID                int64
Date                 object
Branch               object
LoanProduct          object
NumBorrowers          int64
PerBorrowerAmount     int64
DisbursedAmount       int64
Channel              object
dtype: object
LoanID               0
Date                 0
Branch               0
LoanProduct          0
NumBorrowers         0
PerBorrowerAmount    0
DisbursedAmount      0
Channel              0
dtype: int64
   LoanID        Date     Branch  ... PerBorrowerAmount  DisbursedAmount  Channel
0   11001  2024-01-01  Bengaluru  ...            300000           900000   Branch
1   11002  2024-01-02  Hyderabad  ...           1000000          3000000   Online
2   11003  2024-01-03     Mumbai  ...            500000          2500000   Online

[3 rows x 8 columns]
0
```

`Date` is `object`, not `datetime64` — that one line tells you every date question needs
`pd.to_datetime` first (T13), even though this file's dates happen to be ISO.

### The six numbers to eyeball

| Line | What you are checking | Red flag |
| --- | --- | --- |
| `shape` | one fat column, or far too few rows | `(30, 1)` → wrong `sep` (T11); `(20, 9)` all-object → wrong header row |
| `columns` | the names the question uses | a name the question mentions is absent (T15, T16) |
| `dtypes` | numbers stored as text, dates stored as text | an `object` column you intend to average (T14); `object` dates (T13) |
| `isna().sum()` | how much is missing, and where | all zeros on a "missing values" exercise → unrecognised tokens (T14) |
| `head` | do the values match the prose? | `01-07-2025` where the PDF promised `YYYY-MM-DD` (T13) |
| `duplicated().sum()` | planted duplicate rows | anything above 0 (T29) |

### Two more lines when the question has a threshold

```python
print(df[NUM_COL].agg(["min", "max"]))   # is the threshold even reachable? (T23)
print(df[CAT_COL].unique())              # is the category spelt the way the question spells it?
```

## When you are stuck

Work down this list. Each step is one line of code and each one has rescued a question.

1. **Re-read the noun the question asks for.** "Frequency" is a count; "amount" is a sum; "average" is a mean; "most common" is a mode; "records" is rows. Answering the wrong noun loses the whole mark even with perfect code.
2. **Print the columns.** `print(df.columns.tolist())`. The name in the question may not exist (T15, T16).
3. **Check the dtype.** `print(df[COL].dtype)`. `object` where you expect a number means unrecognised tokens (T14) or unparsed dates (T13).
4. **Check for NaN.** `print(df[COL].isna().sum())`. This explains a `count` smaller than `len(df)` (T17), a missing group (T28) and a distorted mean (T19).
5. **Check the filter's row count.** `print(len(sel))`. Zero rows is an answer (T23); more rows than the parent frame means a merge exploded (T26).
6. **Print `.max()` and `.min()`.** `print(df[COL].agg(["min","max"]))`. If the threshold in the question is outside that range, no amount of debugging will produce rows.
7. **Print `df[CAT].unique()`.** Case and spelling must match exactly. `"mumbai"` returns 0 rows where `"Mumbai"` returns 41.
8. **Shrink the problem.** Run the expression on `df.head(5)` and print each intermediate step separately.
9. **Re-read the file.** If a variable has become `None` (T8) or has been mutated in place, nothing downstream can be trusted.
10. **Write the assumption sentence and move on.** Partial credit for a clearly stated, reasonable assumption beats a blank answer every time. Never leave a question empty.

## Mark-saving sentences

Copy these, substitute the names and numbers, and write them next to your code. Each one has been
worth marks in a question where the data or the wording was ambiguous.

**1 — Bin convention**

> Class limits are taken as left-closed and right-open (`[0, 5)`, `[5, 10)`, …), i.e.
> `pd.cut(..., right=False)`, so a value of exactly 5 falls in the 5–10 class. This matches the
> convention used in the class notebook.

**2 — A tie**

> There is no single most common value: Home, Personal and Vehicle each occur 10 times. All three
> are reported as joint modes.

**3 — An empty result**

> No row satisfies both conditions. The maximum `Current_Value` in the portfolio is ₹246,147.60,
> below the ₹4,00,000 threshold, so the correct answer is an empty selection (0 of 120 rows).

**4 — A mapped column name**

> The dataset has no column named `City`; the branch-city field is `Branch` and the total amount
> field is `DisbursedAmount`. The answer below uses the dataset's names.

**5 — A shifted identifier range**

> `LoanID` runs from 11001 to 11200, so the requested range "1010 to 1020" is read as
> 11010 to 11020.

**6 — A derived column the question assumes exists**

> The dataset has no `Age Group` column, so age groups were created with
> `pd.cut(df['Age'], bins=[20,30,40,50,60,70], right=False)` and labelled 20–29, 30–39, …

**7 — Periods that are not comparable**

> The two series cover different date ranges, so the totals are not like-for-like. The comparison
> below is restricted to the dates common to both (`common = a.index.intersection(b.index)`,
> N = len(common)); the full-period figures are reported separately and labelled as such.

**8 — `ddof`**

> Standard deviations are sample values (`ddof=1`, the pandas default). The population values
> (`ddof=0`) would be slightly smaller — 12.26 rather than 12.64 for `Score`.

**9 — Missing-value treatment**

> 5 of 22 `Score` values (22.7%) are missing. They are excluded from the mean rather than filled
> with 0, because filling with 0 would lower the reported mean from 79.06 to 61.09 and is not a
> possible score.

**10 — Duplicates**

> The file contains 2 exact duplicate rows (`R005` and `R011`). They were removed before
> summarising, leaving 20 records; the `Income` total falls from 1,897,271.43 to 1,658,658.63.

**11 — Date format**

> `Date` is stored as DD-MM-YYYY, not the YYYY-MM-DD stated in the brief, so it is parsed with
> `dayfirst=True`. All 12 transactions then fall in July 2025 instead of being scattered over six
> months.

**12 — A weak correlation**

> The scatter plot shows no systematic relationship: r = −0.008 over 100 branches, so deposit size
> explains essentially none of the variation in profit (r² < 0.01). No trend line is fitted,
> because the data does not support one.

**13 — Ties at a "top N" cut-off**

> Three employees are requested but seven reach the third-highest score of 90. All seven are
> listed and the tie is noted; `nlargest(3)` alone would have hidden four of them.

**14 — Inclusive slice bounds**

> `.loc` includes the end label, so records 25 to 40 inclusive (16 rows) are shown. The positional
> equivalent, `.iloc[25:40]`, would return 15 rows.

## Chapter cheat sheet

```python
# ---------- the 60-second check ----------
df.shape; df.columns.tolist(); df.dtypes; df.isna().sum(); df.head(3); df.duplicated().sum()

# ---------- filtering ----------
df[(df[A] > x) & (df[B] == y)]        # & | ~  — never and/or/not; parenthesise everything
df[df[A].isin([v1, v2])]              # replaces long | chains
df[df[A].isna()]                      # missing; == np.nan never works
df.query("`Total Deposits` > 1e6")    # backticks for names with spaces

# ---------- selecting ----------
df[[A, B]]                            # two brackets for several columns
df.loc[LBL1:LBL2, C1:C2]              # labels, stop INCLUDED
df.iloc[p1:p2, c1:c2]                 # positions, stop EXCLUDED
df.loc[MASK, COL] = VALUE             # the only correct conditional assignment

# ---------- missing values ----------
pd.read_csv(P, na_values=["-", "?", "#", "@@", "###", "na", "nuLL", "nAN"])
df[COL] = df[COL].fillna(df[COL].median())     # never df[COL].fillna(v, inplace=True)
df[COL] = df[COL].ffill()                      # never fillna(method="ffill")
df[COL] = df[COL].astype("Int64")              # integers that tolerate <NA>

# ---------- reading ----------
pd.read_csv(P, sep=";")                        # check df.shape afterwards
pd.read_csv(P, usecols=[IDC, A, B], index_col=IDC)
pd.read_csv(P, parse_dates=[D], dayfirst=True) # 01-07-2025 is 1 July
pd.read_excel(P, sheet_name="Missing_Data", skiprows=2)
df.columns = df.columns.str.strip()

# ---------- statistics ----------
len(df)                    # rows          df[COL].count()   # non-null values
df[COL].std()              # ddof=1        df[COL].std(ddof=0)
df.mean(numeric_only=True) # never bare df.mean() on mixed dtypes
df.describe(include="number", percentiles=[0.3, 0.7, 0.9])

# ---------- frequency ----------
pd.cut(df[COL], bins=E, right=False)           # declare the convention in words
t = df["Group"].value_counts().sort_index(); assert t.sum() == len(df)
vc = df[CAT].value_counts(dropna=False); winners = vc[vc == vc.max()].index.tolist()
ft = t.reset_index(); ft.columns = ["Group", "Frequency"]   # rename by POSITION

# ---------- top N / extremes ----------
thr = df[COL].nlargest(N).min(); top = df[df[COL] >= thr]   # tie-safe
df.sort_values(COL, na_position="first")                    # NaN default to last

# ---------- combining ----------
print(left.shape, right.shape)
m = left.merge(right, on=K, how="left", validate="many_to_one", indicator=True)
print(m.shape, m["_merge"].value_counts())
left.join(right, how="inner", lsuffix="_l", rsuffix="_r")   # join defaults to how="left"

# ---------- plotting ----------
fig, ax = plt.subplots(figsize=(16, 9))
...
plt.tight_layout()                    # after every title and label
plt.savefig("out.png", dpi=150); plt.savefig("out.pdf")
plt.show()                            # LAST — show() closes the figure
vc = df[CAT].value_counts(); plt.pie(vc.values, labels=vc.index, autopct="%1.1f%%")
```

### The removed / renamed API, in one table

| Do not write | Write |
| --- | --- |
| `df.append(other)` | `pd.concat([df, other], ignore_index=True)` |
| `df[COL].fillna(method="ffill")` | `df[COL].ffill()` |
| `df[COL].fillna(0, inplace=True)` | `df[COL] = df[COL].fillna(0)` |
| `df[COL].astype(int, inplace=True)` | `df[COL] = df[COL].astype("Int64")` |
| `df = df.dropna(inplace=True)` | `clean = df.dropna()` |
| `df[mask][COL] = v` | `df.loc[mask, COL] = v` |
| `df.mean()` on mixed dtypes | `df.mean(numeric_only=True)` |
| `ft.rename(columns={"index": "Group"})` | `ft.columns = ["Group", "Frequency"]` |
| `plt.show()` then `plt.savefig(...)` | `plt.savefig(...)` then `plt.show()` |
