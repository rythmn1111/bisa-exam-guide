---
id: 07-missing-data
part: "Part II — Pandas Foundations"
title: "Missing Data: Detect, Drop, Fill"
blurb: "Detect nulls, unmask disguised tokens like - and @@, drop or fill them, and defend the choice in writing."
order: 70
covers:
  - "Session 13 — Exercises 46–66"
  - "02 Missing values — Exercise 1 Customer loan applications"
  - "02 Missing values — Exercise 2 Portfolio analysis"
  - "02 Missing values — Exercise 3 Stock market (time series)"
  - "01 Basics — Exercise 1 Q8–Q11, Exercise 2 Q8–Q10, Exercise 3 Q7–Q9"
datafiles:
  - "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx (sheets Missing_Data, Missing_Tokens, Sorting_Data, Indexed_Data, Customer_Data)"
  - "Pandas exercises/02 Missing values/Exercise 1 - Customer loan applications/Customer loan applications.csv"
  - "Pandas exercises/02 Missing values/Exercise 2 - Portfolio analysis/Portfolio analysis.xlsx"
  - "Pandas exercises/02 Missing values/Exercise 3 - Stock market/Exercise 3 - stock market.csv"
  - "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv"
  - "Pandas exercises/01 Basics/Exercise 2 - Loan Applicants/loan_applicants.csv"
  - "Pandas exercises/01 Basics/Exercise 3 - Portfolio Holdings/portfolio_holdings.xlsx"
patterns:
  - id: P7.1
    title: "Count missing values per column"
    phrasings:
      - "Identify the number of missing values in each column."
      - "Count missing values in each column."
      - "Count missing values per column."
      - "Count missing values per column for both sheets."
      - "how many nulls are there in total in the DataFrame"
      - "which columns have missing values?"
      - "show the percentage of missing values in each column"
  - id: P7.2
    title: "Display the Boolean mask of missing values"
    phrasings:
      - "Display a Boolean mask using both missing-value aliases, then count missing values in each column."
      - "Display boolean mask of missing values for Income and CreditScore and count them per column."
      - "print the True/False table of nulls"
      - "use isnull and isna and show they give the same answer"
      - "show notna for the Amount column"
  - id: P7.3
    title: "Read missingness off info() and reconcile it"
    phrasings:
      - "Use info() to compare non-null counts with Exercise 55."
      - "Show general info and data types for each column."
      - "Display info and dtypes. Which columns have missing values?"
      - "from the info() output, work out how many values are missing in Score"
      - "reconcile the non-null count with isna().sum()"
  - id: P7.4
    title: "Show the rows that contain a missing value"
    phrasings:
      - "Show all transactions where Amount is missing."
      - "Identify missing data in ClosingPrice and Volume."
      - "display the records that have any missing field"
      - "From Equity, filter rows where Quantity is missing or Quantity <= 100."
      - "Filter transactions from Pune branch or where Branch is missing."
      - "Filter applicants where Income is missing or CreditScore < 650."
      - "list the rows with two or more missing values"
  - id: P7.5
    title: "Missing tokens: make pandas recognise -, @@, #, na as missing"
    phrasings:
      - "Read the sheet and use isna().sum() plus info() to observe which text tokens are recognized as missing in your pandas version."
      - "Re-read the same sheet, this time telling pandas to also treat the unrecognized tokens as missing."
      - "the Age column shows dashes and question marks instead of numbers - clean it"
      - "why does mean() fail on this column?"
      - "use na_values to declare extra missing-value markers"
      - "convert a text column with junk entries to numeric"
  - id: P7.6
    title: "Drop rows or columns with missing values, and compare shapes"
    phrasings:
      - "Create a new DataFrame with every row containing any missing value removed."
      - "Drop rows only when Age is missing; keep rows with missing values elsewhere."
      - "Drop rows where CreditScore is missing."
      - "Create a version without rows having missing Amount and compare shapes with the original."
      - "Drop rows with missing CreditScore and compare the shape with the original."
      - "Drop rows from Debt where Quantity is missing and compare shape."
      - "drop any column that contains a missing value"
      - "keep only rows that have at least 6 non-null values"
  - id: P7.7
    title: "Fill with a constant, then display the affected rows"
    phrasings:
      - "Replace missing Amount values with 0 and display the affected rows."
      - "Fill missing Income with 800000 and display affected rows."
      - "Fill missing Quantity in Equity with 50 and display affected rows."
      - "Replace every missing value with 0 in a returned copy; do not modify the original DataFrame."
      - "Fill missing Shares with 0."
      - "In one call, fill missing Age with the Age mean and missing Score with 0."
  - id: P7.8
    title: "Fill with a statistic: mean, median, mode"
    phrasings:
      - "Replace missing Age with the average Age of customers."
      - "Fill missing Price with the mean Price of the portfolio."
      - "Replace missing Age values with the mean of the Age column and assign the result back to the column."
      - "impute the missing Score with the median"
      - "fill the missing City with the most frequent city"
      - "fill missing Income with the average income of the same city"
  - id: P7.9
    title: "Fill a text column with Unknown"
    phrasings:
      - "Fill missing Sector with Unknown."
      - "replace the blank Branch names with a placeholder"
      - "fill missing Status with Unknown so no record is lost"
      - "fill the missing Remarks with No remarks"
  - id: P7.10
    title: "Forward fill and backward fill for time series"
    phrasings:
      - "Use forward fill (ffill) to handle missing ClosingPrice."
      - "Use backward fill (bfill) for missing Volume."
      - "Re-read the sheet, then forward-fill missing values."
      - "Re-read the sheet, then backward-fill missing values."
      - "The Score column contains three consecutive missing values. Forward-fill with limit=1 and compare the result and the missing counts with an unlimited ffill()."
      - "carry the last known price forward for the trading halt days"
      - "why not use the mean for a price series?"
  - id: P7.11
    title: "inplace=True versus assigning the result back"
    phrasings:
      - "Drop the Salary column and modify the DataFrame itself. Confirm that the method returns None when inplace=True."
      - "Fill missing Score values with 0 and modify the DataFrame itself. Use the dictionary form of fillna on the whole DataFrame."
      - "Drop rows that contain missing values and modify the DataFrame itself."
      - "Replace the text Pending with Review and modify the DataFrame itself."
      - "Sort by Age in place."
      - "Set Student_ID as the index in place, then sort the index in place."
      - "The slides note that newer pandas versions do not support inplace for astype. Convert Risk_Score to float using astype and assign the result back to the column."
      - "why does df[col].fillna(0, inplace=True) not work?"
  - id: P7.12
    title: "Find and remove duplicate rows"
    phrasings:
      - "Remove duplicate rows in place. The sheet contains two deliberate duplicates at the bottom."
      - "how many duplicate rows are in the dataset?"
      - "display the duplicated records"
      - "drop duplicates on Record_ID only, keeping the last occurrence"
      - "show every copy of each duplicated row, not just the repeats"
  - id: P7.13
    title: "Show how filling changes the statistics"
    phrasings:
      - "after replacing missing Amount with 0, recompute the mean and comment"
      - "Discuss: What would happen if missing Prices were filled with 0 instead of mean?"
      - "compare the average before and after imputation"
      - "does filling with the mean change the mean?"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| [P7.1](#p71--count-missing-values-per-column) | "count the missing values in each column" |
| [P7.2](#p72--display-the-boolean-mask-of-missing-values) | "display a Boolean mask of missing values" |
| [P7.3](#p73--read-missingness-off-info-and-reconcile-it) | "use info() to find which columns have missing values" |
| [P7.4](#p74--show-the-rows-that-contain-a-missing-value) | "show all transactions where Amount is missing" |
| [P7.5](#p75--missing-tokens-make-pandas-recognise-----na-as-missing) | The column holds `-`, `@@`, `#`, `?`, `na` instead of blanks |
| [P7.6](#p76--drop-rows-or-columns-with-missing-values-and-compare-shapes) | "drop the rows … and compare shapes with the original" |
| [P7.7](#p77--fill-with-a-constant-then-display-the-affected-rows) | "fill missing X with 0 / 50 / 800000 and display the affected rows" |
| [P7.8](#p78--fill-with-a-statistic-mean-median-mode) | "replace missing Age with the average Age" |
| [P7.9](#p79--fill-a-text-column-with-unknown) | "fill missing Sector with 'Unknown'" |
| [P7.10](#p710--forward-fill-and-backward-fill-for-time-series) | Dates/prices/volumes — "use ffill", "use bfill" |
| [P7.11](#p711--inplacetrue-versus-assigning-the-result-back) | "modify the DataFrame itself", `inplace=True`, chained assignment |
| [P7.12](#p712--find-and-remove-duplicate-rows) | "remove duplicate rows" |
| [P7.13](#p713--show-how-filling-changes-the-statistics) | "comment on the effect of the imputation" |

Then: [Full solution](#full-solution--02-missing-values-exercises-1-3) for the three
*02 Missing values* exercises, [Write-up answers](#write-up-answers) for the discussion marks,
and the [Chapter cheat sheet](#chapter-cheat-sheet).

**Paths used in this chapter.** Define the base path once. **In the exam, swap in your own path**
(or just put the data file in the same folder as the notebook and use the bare filename).

```python
import pandas as pd
pd.set_option('display.width', 200)      # stops wide frames printing as "..."
pd.set_option('display.max_columns', 50)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W    = BASE + "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
CUST = BASE + "Pandas exercises/02 Missing values/Exercise 1 - Customer loan applications/Customer loan applications.csv"
PORT = BASE + "Pandas exercises/02 Missing values/Exercise 2 - Portfolio analysis/Portfolio analysis.xlsx"
STOCK= BASE + "Pandas exercises/02 Missing values/Exercise 3 - Stock market/Exercise 3 - stock market.csv"
BANK = BASE + "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv"
LOAN = BASE + "Pandas exercises/01 Basics/Exercise 2 - Loan Applicants/loan_applicants.csv"
HOLD = BASE + "Pandas exercises/01 Basics/Exercise 3 - Portfolio Holdings/portfolio_holdings.xlsx"
```

The workhorse sheet for Session 13 Exercises 46–66 is `Missing_Data` (22 rows × 7 columns):

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df)
```

```text
   Record_ID            Name   Age  Score     Income       City    Status
0       R001     Aarav Mehta  54.0   79.0   65833.65  Hyderabad  Inactive
1       R002       Diya Nair   NaN   87.0   80027.09  Bengaluru   Pending
2       R003      Kabir Shah  24.0   59.0  124850.58     Mumbai  Inactive
3       R004      Meera Iyer  25.0    NaN   76126.52        Goa  Inactive
4       R005     Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
5       R006      Ananya Rao  46.0   70.0        NaN       Pune  Inactive
6       R007    Arjun Kapoor  33.0   59.0   51714.23        NaN   Pending
7       R008      Ishita Sen  37.0   83.0  132119.29        Goa    Active
8       R009    Vikram Joshi   NaN   84.0   71119.57       Pune  Inactive
9       R010  Nisha Kulkarni  32.0   70.0  134916.10       Pune       NaN
10      R011      Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
11      R012     Sneha Patil  42.0    NaN  114168.15      Delhi    Active
12      R013  Karan Malhotra  43.0    NaN   44848.95      Delhi   Pending
13      R014     Pooja Menon  47.0   55.0        NaN       Pune    Active
14      R015    Aditya Verma  29.0   87.0   52937.80       Pune  Inactive
15      R016      Tanvi Bhat  31.0   84.0   74500.62        NaN  Inactive
16      R017     Sameer Khan  24.0   97.0   77365.35  Bengaluru    Active
17      R018       Riya Bose   NaN   78.0  109695.16     Mumbai    Active
18      R019     Nikhil Jain  28.0   90.0  137788.58        Goa  Inactive
19      R020     Aditi Sinha  28.0   98.0   72034.19  Hyderabad  Inactive
20      R005     Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
21      R011      Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
```

Memorise three facts about this sheet, because the exercises keep referring to them:
nulls are **Age 3, Score 5, Income 2, City 2, Status 1 (13 in total)**; the **last two rows (20, 21)
are deliberate duplicates** of rows 4 and 10; and **Score has exactly three consecutive NaN**
at index 10, 11, 12.

---

## P7.1 — Count missing values per column

**Exam phrasings**

- "Identify the number of missing values in each column."
- "Count missing values in each column."
- "Count missing values per column for both sheets."
- "how many nulls are there in total in the DataFrame"
- "which columns have missing values?"

**Core idea.** `df.isna()` returns a same-shaped Boolean DataFrame. `True` counts as 1, so
`.sum()` down the columns gives the per-column null count. `isnull()` is a **pure alias** of
`isna()` — identical function, identical output. Use whichever word the question uses.

**Template**

```python
df.isna().sum()          # per column
df.isna().sum().sum()    # one grand total
df.isna().any()          # True/False per column
```

**Worked**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df.isna().sum())
print("total missing:", df.isna().sum().sum())
print(df.isna().any())
print("columns with nulls:", df.columns[df.isna().any()].tolist())
print(df.notna().sum())
```

```text
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
dtype: int64
total missing: 13
Record_ID    False
Name         False
Age           True
Score         True
Income        True
City          True
Status        True
dtype: bool
columns with nulls: ['Age', 'Score', 'Income', 'City', 'Status']
Record_ID    22
Name         22
Age          19
Score        17
Income       20
City         20
Status       21
dtype: int64
```

Prove the alias claim in one line — this is worth a mark when the question says "using both
missing-value aliases":

```python
print(df.isnull().sum().equals(df.isna().sum()))
```

```text
True
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "count missing in one column" | `df['Age'].isna().sum()` |
| "count missing in two named columns" | `df[['Income','CreditScore']].isna().sum()` |
| "percentage of missing values" | `(df.isna().mean()*100).round(2)` |
| "how many rows have at least one missing value" | `df.isna().any(axis=1).sum()` |
| "how many missing values in each row" | `df.isna().sum(axis=1)` |
| "is there any missing data at all?" | `df.isna().any().any()` → `True` |
| "count the values that are present" | `df.notna().sum()` or `df.count()` |
| "both sheets" (Portfolio Holdings) | loop: `for s in ['Equity','Debt']: print(s, pd.read_excel(HOLD, sheet_name=s).isna().sum())` |

Percentages on the same sheet:

```python
print((df.isna().mean()*100).round(2))
```

```text
Record_ID     0.00
Name          0.00
Age          13.64
Score        22.73
Income        9.09
City          9.09
Status        4.55
dtype: float64
```

**Traps**

- `df.isna().sum()` counts **down columns** (`axis=0`). Adding `axis=1` silently switches to
  per-row counts. Read the question: "per column" is the default.
- `df.count()` is the count of **non-null** values, not of nulls. `df.isna().sum()` is the count
  of nulls. Mixing them up is the single most common slip here.
- **`0` and empty string are not missing.** In the stock-market file `Volume` is genuinely `0.0`
  on 2024-01-04; `isna()` correctly reports `False` for it. Never "count zeros" when asked to
  count missing values.
- If the column holds text junk such as `-` or `na`, `isna().sum()` reports **0** even though the
  data is unusable. See [P7.5](#p75--missing-tokens-make-pandas-recognise-----na-as-missing).

**Drill**

1. Count missing values per column in `Portfolio analysis.xlsx`.
2. Print the grand total of missing values in `Exercise 3 - stock market.csv`.
3. Print just the names of the columns of `loan_applicants.csv` that contain missing values.

<details><summary>Answer</summary>

```python
p = pd.read_excel(PORT)
print(p.isna().sum())                         # Price 2, Shares 2, Sector 1

s = pd.read_csv(STOCK)
print(s.isna().sum().sum())                   # 11

la = pd.read_csv(LOAN)
print(la.columns[la.isna().any()].tolist())   # ['Income', 'CreditScore']
```

</details>

---

## P7.2 — Display the Boolean mask of missing values

**Exam phrasings**

- "Display a Boolean mask using both missing-value aliases, then count missing values in each column."
- "Display boolean mask of missing values for Income and CreditScore and count them per column."
- "print the True/False table of nulls"
- "show notna for the Amount column"

**Core idea.** The mask *is* the answer — do not summarise it. `df.isna()` prints a grid of
`True`/`False` the same shape as `df`. `True` means the value is missing.

**Template**

```python
df.isna()                       # whole frame
df[['COL1','COL2']].isna()      # only the columns the question names
df.notna()                      # the inverse
```

**Worked** — Session 13 Exercise 55, both aliases then the count:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df.isna().head(6))
print(df.isnull().head(6).equals(df.isna().head(6)))
print(df.isna().sum())
```

```text
   Record_ID   Name    Age  Score  Income   City  Status
0      False  False  False  False   False  False   False
1      False  False   True  False   False  False   False
2      False  False  False  False   False  False   False
3      False  False  False   True   False  False   False
4      False  False  False  False   False  False   False
5      False  False  False  False    True  False   False
True
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
dtype: int64
```

**Worked** — *01 Basics* Exercise 2 Q8, "display boolean mask of missing values for Income and
CreditScore and count them per column":

```python
la = pd.read_csv(LOAN)
print(la[['Income','CreditScore']].isna())
print(la[['Income','CreditScore']].isna().sum())
```

```text
    Income  CreditScore
0    False        False
1    False        False
2     True        False
3    False        False
4    False        False
5    False         True
6    False        False
7    False        False
8    False        False
9    False        False
10    True        False
11   False         True
Income         2
CreditScore    2
dtype: int64
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "use isnull instead" | `la[['Income','CreditScore']].isnull()` — same output |
| "show where data IS present" | `la[['Income','CreditScore']].notna()` / `.notnull()` |
| "for one column only" | `la['Income'].isna()` — a Series of bools |
| "only the first few rows of the mask" | `df.isna().head()` |
| "count from the mask" | chain `.sum()` on the same expression |
| "highlight them" | `df.isna().sum(axis=1)` gives a per-row count you can sort |

**Traps**

- `df.isna()` on a **22×7** frame prints 154 cells. If the question names columns, slice them
  first — printing the whole grid when only two columns were asked for reads as not answering.
- `df[['Income']]` (double brackets) keeps a DataFrame; `df['Income']` gives a Series. Both
  accept `.isna()`, but the printed shape differs.
- `notna()` and `notnull()` are also aliases of each other.

**Drill**

1. From `Portfolio analysis.xlsx`, display the Boolean mask for `Price` and `Shares` only.

<details><summary>Answer</summary>

```python
p = pd.read_excel(PORT)
print(p[['Price','Shares']].isna())
```

</details>

---

## P7.3 — Read missingness off info() and reconcile it

**Exam phrasings**

- "Use info() to compare non-null counts with Exercise 55."
- "Show general info and data types for each column."
- "Display info and dtypes. Which columns have missing values?"
- "from the info() output, work out how many values are missing in Score"

**Core idea.** `info()` prints **non-null counts**, not null counts. Missing values per column
= `RangeIndex entries` − `Non-Null Count`. Any column whose non-null count is below the row
count has missing data.

**Template**

```python
df.info()
# missing in COL = <entries> - <Non-Null Count of COL>
```

**Worked**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
df.info()
```

```text
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 22 entries, 0 to 21
Data columns (total 7 columns):
 #   Column     Non-Null Count  Dtype  
---  ------     --------------  -----  
 0   Record_ID  22 non-null     object 
 1   Name       22 non-null     object 
 2   Age        19 non-null     float64
 3   Score      17 non-null     float64
 4   Income     20 non-null     float64
 5   City       20 non-null     object 
 6   Status     21 non-null     object 
dtypes: float64(3), object(4)
memory usage: 1.3+ KB
```

The reconciliation sentence the examiner wants:

```text
22 entries.  Age 19 non-null -> 22-19 = 3 missing
             Score 17        -> 5 missing
             Income 20       -> 2 missing
             City 20         -> 2 missing
             Status 21       -> 1 missing
Total 13, which matches df.isna().sum().sum() = 13.
```

Show it in code rather than prose if you prefer:

```python
print(len(df) - df.notna().sum())
```

```text
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
dtype: int64
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "data type of each column" | `df.dtypes` |
| "shape and column names" | `df.shape`, `df.columns` (or `.tolist()`) |
| "identify numeric columns" | `df.select_dtypes('number').columns.tolist()` |
| "info for a specific sheet" | `pd.read_excel(W, sheet_name='Missing_Tokens').info()` |
| "why is memory usage shown with a `+`?" | object columns are estimated; `df.info(memory_usage='deep')` gives the exact figure |

**Traps**

- **`info()` prints; it does not return.** `x = df.info()` sets `x` to `None`. Never write
  `print(df.info())` — you get the report followed by a stray `None`.
- A column full of text tokens (`-`, `na`) shows **22 non-null** and `Dtype object`. `info()`
  reporting "no missing" plus an `object` dtype on a column that should be numeric is the
  signature of disguised missing values → [P7.5](#p75--missing-tokens-make-pandas-recognise-----na-as-missing).
- `info()` counts **non-null**; the word "non-null" in the header is the giveaway. Students who
  quote the non-null count as the missing count lose the mark.

**Drill**

1. Run `info()` on `Exercise 3 - stock market.csv` and state the missing count for each column.

<details><summary>Answer</summary>

```python
s = pd.read_csv(STOCK)
s.info()
# 10 entries; ClosingPrice 5 non-null -> 5 missing; Volume 4 non-null -> 6 missing
```

</details>

---

## P7.4 — Show the rows that contain a missing value

**Exam phrasings**

- "Show all transactions where Amount is missing."
- "Identify missing data in ClosingPrice and Volume."
- "From Equity, filter rows where Quantity is missing or Quantity <= 100."
- "Filter transactions from Pune branch or where Branch is missing."
- "Filter applicants where Income is missing or CreditScore < 650."
- "display the records that have any missing field"

**Core idea.** `df['COL'].isna()` is a Boolean Series, so it can go straight into `df[...]` as a
row filter. For "any column", collapse the mask along the row axis with `.any(axis=1)`.

**Template**

```python
df[df['COL'].isna()]                  # rows missing one named column
df[df.isna().any(axis=1)]             # rows missing anything
df[df.notna().all(axis=1)]            # the complete rows
df[df.isna().sum(axis=1) >= 2]        # rows missing 2+ fields
```

**Worked** — *01 Basics* Exercise 1 Q9, "show all transactions where Amount is missing":

```python
bt = pd.read_csv(BANK)
print(bt[bt['Amount'].isna()])
```

```text
   TxnID        Date  AccountID Branch TxnType  Amount Channel Remarks
5   5006  03-07-2025        102   Pune   Debit     NaN     ATM     NaN
```

**Worked** — every row with any missing field:

```python
print(bt[bt.isna().any(axis=1)])
print("complete rows:", bt[bt.notna().all(axis=1)].shape)
```

```text
    TxnID        Date  AccountID Branch TxnType     Amount Channel      Remarks
5    5006  03-07-2025        102   Pune   Debit        NaN     ATM          NaN
6    5007  03-07-2025        105    NaN  Credit  2000000.0    NEFT  FD maturity
11   5012  06-07-2025        108    NaN   Debit     3200.0     ATM      Cash wd
complete rows: (9, 8)
```

**Worked** — the same on `Missing_Data` (13 of 22 rows are affected):

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df[df.isna().any(axis=1)])
```

```text
   Record_ID            Name   Age  Score     Income       City    Status
1       R002       Diya Nair   NaN   87.0   80027.09  Bengaluru   Pending
3       R004      Meera Iyer  25.0    NaN   76126.52        Goa  Inactive
5       R006      Ananya Rao  46.0   70.0        NaN       Pune  Inactive
6       R007    Arjun Kapoor  33.0   59.0   51714.23        NaN   Pending
8       R009    Vikram Joshi   NaN   84.0   71119.57       Pune  Inactive
9       R010  Nisha Kulkarni  32.0   70.0  134916.10       Pune       NaN
10      R011      Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
11      R012     Sneha Patil  42.0    NaN  114168.15      Delhi    Active
12      R013  Karan Malhotra  43.0    NaN   44848.95      Delhi   Pending
13      R014     Pooja Menon  47.0   55.0        NaN       Pune    Active
15      R016      Tanvi Bhat  31.0   84.0   74500.62        NaN  Inactive
17      R018       Riya Bose   NaN   78.0  109695.16     Mumbai    Active
21      R011      Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
```

**Worked** — "missing OR a condition" (*01 Basics* Ex 1 Q7 and Ex 2 Q7). The `isna()` test must
be a separate bracketed term joined with `|`:

```python
print(bt[(bt['Branch'] == 'Pune') | (bt['Branch'].isna())])
```

```text
    TxnID        Date  AccountID Branch TxnType     Amount Channel          Remarks
1    5002  01-07-2025        101   Pune   Debit    12000.0     ATM  Cash withdrawal
5    5006  03-07-2025        102   Pune   Debit        NaN     ATM              NaN
6    5007  03-07-2025        105    NaN  Credit  2000000.0    NEFT      FD maturity
10   5011  05-07-2025        107   Pune  Credit    78000.0     UPI         Dividend
11   5012  06-07-2025        108    NaN   Debit     3200.0     ATM          Cash wd
```

```python
la = pd.read_csv(LOAN)
print(la[(la['Income'].isna()) | (la['CreditScore'] < 650)])
```

```text
    ApplicantID    Name     City    Income  CreditScore  LoanAmountRequested EmploymentType
2          2003  Chitra    Delhi       NaN        665.0               800000       Salaried
4          2005    Esha  Chennai  600000.0        590.0               500000       Salaried
8          2009     Ira  Kolkata  540000.0        640.0               700000  Self-Employed
10         2011   Kavya  Chennai       NaN        720.0              1000000       Salaried
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "rows where Quantity is missing **or** Quantity <= 100" | `eq[(eq['Quantity'].isna()) \| (eq['Quantity'] <= 100)]` |
| "rows where BOTH are missing" | `s[s['ClosingPrice'].isna() & s['Volume'].isna()]` |
| "rows missing in either of two columns" | `s[s[['ClosingPrice','Volume']].isna().any(axis=1)]` |
| "rows with 2 or more missing values" | `bt[bt.isna().sum(axis=1) >= 2]` |
| "just the IDs of the incomplete rows" | `df.loc[df.isna().any(axis=1), 'Record_ID'].tolist()` |
| "how many, not which" | append `.shape[0]` or use `.sum()` on the mask |

**Traps**

- `df[df['Amount'] == None]` and `df[df['Amount'] == np.nan]` return **nothing**. `NaN` is not
  equal to anything, including itself. Always use `.isna()`.
- Operator precedence: `df[df['A'].isna() | df['B'] < 650]` misparses. **Bracket each condition**
  and use `|` / `&`, never `or` / `and`.
- `Quantity <= 100` is `False` where `Quantity` is `NaN`, so a plain comparison **silently drops**
  the missing rows. If the question says "missing or ≤ 100" you need the explicit `isna()` term.

**Drill**

1. Display the rows of `Portfolio analysis.xlsx` where `Sector` is missing.
2. Display the rows of the `Missing_Tokens` sheet where `Family_size` is missing.

<details><summary>Answer</summary>

```python
p = pd.read_excel(PORT)
print(p[p['Sector'].isna()])

tok = pd.read_excel(W, sheet_name="Missing_Tokens")
print(tok[tok['Family_size'].isna()])
```

</details>

---

## P7.5 — Missing tokens: make pandas recognise -, @@, #, na as missing

**Exam phrasings**

- "Read the sheet and use isna().sum() plus info() to observe which text tokens are recognized as missing in your pandas version."
- "Re-read the same sheet, this time telling pandas to also treat the unrecognized tokens as missing."
- "the Age column shows dashes and question marks instead of numbers - clean it"
- "why does mean() fail on this column?"
- "use na_values to declare extra missing-value markers"

**Core idea.** Pandas converts a **fixed list of text tokens** to `NaN` while reading. Anything
else — `-`, `@@`, `#`, `?`, `###`, `nuLL`, `nAN`, and **lowercase `na`** — stays as a *string*.
The column then becomes `object` dtype, `isna().sum()` reports **0**, and every numeric
operation on it is either an error or silently skipped. Fix it at read time with
`na_values=[...]`.

The default token list (pandas 2.3.3):

```python
from pandas._libs.parsers import STR_NA_VALUES
print(sorted(STR_NA_VALUES))
```

```text
['', '#N/A', '#N/A N/A', '#NA', '-1.#IND', '-1.#QNAN', '-NaN', '-nan', '1.#IND', '1.#QNAN', '<NA>', 'N/A', 'NA', 'NULL', 'NaN', 'None', 'n/a', 'nan', 'null']
```

Read it carefully: **`NA`, `n/a`, `N/A`, `null`, `NULL`, `NaN`, `nan`, `None` are recognised.
Lowercase `na` is NOT. `nAN` is NOT.** Only those exact spellings are in the list.

**Template**

```python
# at read time (preferred)
df = pd.read_excel(PATH, sheet_name="SHEET",
                   na_values=['-','@@','#','?','nuLL','nAN','###','na'])
df = pd.read_csv(PATH, na_values=['-','?','NIL','--'])

# after the fact, if you already loaded it
df['COL'] = pd.to_numeric(df['COL'], errors='coerce')
df = df.apply(pd.to_numeric, errors='coerce')        # whole frame, numeric data only
```

**Worked, part 1 — the default read (Session 13 Exercise 57)**

```python
raw = pd.read_excel(W, sheet_name="Missing_Tokens")
print(raw)
```

```text
    Age Own_house  Family_size  Children Income_2020 Income_2021
0    62         1          6.0       3.0      152907         NaN
1    63         0          6.0       3.0         NaN      147424
2     -         1          NaN       4.0      236496      236496
3    64         1          9.0       2.0      282274      282274
4    48         0          8.0       NaN      211603      211603
5    49         ?          8.0       2.0      224430      224430
6    49         0          NaN       4.0         NaN         NaN
7    @@         0          6.0       2.0      201251      201251
8    55      nuLL          6.0       2.0      167815      167815
9    61         1          6.0       4.0       70957       70957
10    #         0         10.0       2.0      230390      230390
11   65         1          NaN       2.0         ###         ###
12   55         0         10.0       2.0       63947       63947
13   na         1          7.0       1.0         NaN         NaN
14  nAN         0          5.0       0.0         NaN         NaN
```

```python
print(raw.isna().sum())
print(raw.dtypes)
print(raw['Age'].unique())
```

```text
Age            0
Own_house      0
Family_size    3
Children       1
Income_2020    4
Income_2021    4
dtype: int64
Age             object
Own_house       object
Family_size    float64
Children       float64
Income_2020     object
Income_2021     object
dtype: object
[62 63 '-' 64 48 49 '@@' 55 61 '#' 65 'na' 'nAN']
```

`Age` reports **0 missing** even though five of its fifteen values are junk, and its dtype is
`object` because `-`, `@@`, `#`, `na`, `nAN` are all still strings. `Own_house` likewise reports
0 missing while holding `?` and `nuLL`.

**Worked, part 2 — the corrected read (Session 13 Exercise 58)**

```python
clean = pd.read_excel(W, sheet_name="Missing_Tokens",
                      na_values=['-','@@','#','?','nuLL','nAN','###','na'])
print(clean)
print(clean.isna().sum())
print(clean.dtypes)
```

```text
     Age  Own_house  Family_size  Children  Income_2020  Income_2021
0   62.0        1.0          6.0       3.0     152907.0          NaN
1   63.0        0.0          6.0       3.0          NaN     147424.0
2    NaN        1.0          NaN       4.0     236496.0     236496.0
3   64.0        1.0          9.0       2.0     282274.0     282274.0
4   48.0        0.0          8.0       NaN     211603.0     211603.0
5   49.0        NaN          8.0       2.0     224430.0     224430.0
6   49.0        0.0          NaN       4.0          NaN          NaN
7    NaN        0.0          6.0       2.0     201251.0     201251.0
8   55.0        NaN          6.0       2.0     167815.0     167815.0
9   61.0        1.0          6.0       4.0      70957.0      70957.0
10   NaN        0.0         10.0       2.0     230390.0     230390.0
11  65.0        1.0          NaN       2.0          NaN          NaN
12  55.0        0.0         10.0       2.0      63947.0      63947.0
13   NaN        1.0          7.0       1.0          NaN          NaN
14   NaN        0.0          5.0       0.0          NaN          NaN
Age            5
Own_house      2
Family_size    3
Children       1
Income_2020    5
Income_2021    5
dtype: int64
Age            float64
Own_house      float64
Family_size    float64
Children       float64
Income_2020    float64
Income_2021    float64
dtype: object
```

**The comparison the examiner is looking for.** Build it in one frame so you can point at it:

```python
cmp = pd.DataFrame({'default': raw.isna().sum(), 'with_na_values': clean.isna().sum()})
cmp['gained'] = cmp['with_na_values'] - cmp['default']
print(cmp)
```

```text
             default  with_na_values  gained
Age                0               5       5
Own_house          0               2       2
Family_size        3               3       0
Children           1               1       0
Income_2020        4               5       1
Income_2021        4               5       1
```

Non-null counts, the same story from `info()`:

| Column | dtype before | non-null before | dtype after | non-null after |
| --- | --- | --- | --- | --- |
| `Age` | `object` | 15 | `float64` | 10 |
| `Own_house` | `object` | 15 | `float64` | 13 |
| `Family_size` | `float64` | 12 | `float64` | 12 |
| `Children` | `float64` | 14 | `float64` | 14 |
| `Income_2020` | `object` | 11 | `float64` | 10 |
| `Income_2021` | `object` | 11 | `float64` | 10 |

`Family_size` and `Children` are unchanged: they were already truly blank in the sheet, so the
default read handled them. Only the columns that contained typed-in junk change.

**Why a stray token silently ruins `mean()`.** Two different failure modes, both fatal:

```python
print(raw['Age'].mean())
```

```text
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

That one at least shouts. This one does not:

```python
print(raw.describe())
```

```text
       Family_size   Children
count    12.000000  14.000000
mean      7.250000   2.357143
std       1.712255   1.150728
min       5.000000   0.000000
25%       6.000000   2.000000
50%       6.500000   2.000000
75%       8.250000   3.000000
max      10.000000   4.000000
```

`describe()` has **quietly dropped Age, Income_2020 and Income_2021** because they are `object`
dtype. No error, no warning — your report simply has no income statistics in it. Same for
`df.mean(numeric_only=True)`, `df.sum()`, `groupby(...).mean()`, `corr()` and every chart built
on them. After the corrected read:

```python
print(clean.describe())
print("Age mean:", clean['Age'].mean(), " Income_2020 mean:", clean['Income_2020'].mean())
```

```text
             Age  Own_house  Family_size   Children    Income_2020    Income_2021
count  10.000000  13.000000    12.000000  14.000000      10.000000      10.000000
mean   57.100000   0.461538     7.250000   2.357143  184207.000000  183658.700000
std     6.723921   0.518875     1.712255   1.150728   71242.537031   71530.711745
min    48.000000   0.000000     5.000000   0.000000   63947.000000   63947.000000
25%    50.500000   0.000000     6.000000   2.000000  156634.000000  152521.750000
50%    58.000000   0.000000     6.500000   2.000000  206427.000000  206427.000000
75%    62.750000   1.000000     8.250000   3.000000  228900.000000  228900.000000
max    65.000000   1.000000    10.000000   4.000000  282274.000000  282274.000000
Age mean: 57.1  Income_2020 mean: 184207.0
```

**How to spot it in 10 seconds in the exam.** Run these three and compare:

```python
print(raw.dtypes)                             # a numeric column typed as object = suspicious
print(raw['Age'].value_counts(dropna=False))  # the junk tokens appear as their own categories
print(raw.loc[pd.to_numeric(raw['Age'], errors='coerce').isna(), ['Age','Own_house']])
```

```text
    Age Own_house
2     -         1
7    @@         0
10    #         0
13   na         1
14  nAN         0
```

That last line is the general "which entries are not numbers" recipe — it works whatever the
junk turns out to be, so you do not have to guess the token list.

**Variants**

| If the question says | Change to |
| --- | --- |
| "declare extra missing markers while reading a CSV" | `pd.read_csv(PATH, na_values=['-','?','NIL'])` |
| "different markers for different columns" | `na_values={'Age': ['-','na'], 'Own_house': ['?','nuLL']}` |
| "do NOT use the default list, only mine" | `keep_default_na=False, na_values=['-','na']` |
| "treat blanks as real empty strings, not NaN" | `keep_default_na=False` |
| "I already loaded it — fix it now" | `df['Age'] = pd.to_numeric(df['Age'], errors='coerce')` |
| "fix every column at once" | `df = df.apply(pd.to_numeric, errors='coerce')` |
| "use replace" | `df.replace(['-','@@','#','?','nuLL','nAN','###','na'], np.nan)` |
| "also strip stray spaces" | add `skipinitialspace=True` (CSV) or `df['C'].str.strip()` first |

`to_numeric(errors='coerce')` gives exactly the same counts as the `na_values` read:

```python
fixed = raw.apply(pd.to_numeric, errors='coerce')
print(fixed.isna().sum())
```

```text
Age            5
Own_house      2
Family_size    3
Children       1
Income_2020    5
Income_2021    5
dtype: int64
```

**Traps**

- `na_values` is **case-sensitive and exact**. `'na'` does not catch `'NA'`, `'Na'` or `'nAN'`;
  list every spelling you actually see. That is why the exercise's list contains both `nAN` and
  `na`.
- `#` and `###` are two different tokens. Listing `'#'` does **not** catch `'###'`.
- `df.replace([...], np.nan)` works but raises
  `FutureWarning: Downcasting behavior in 'replace' is deprecated` on pandas 2.3.3, and it leaves
  the column `object` unless pandas happens to downcast it. **Prefer `na_values=` at read time,
  or `pd.to_numeric(..., errors='coerce')`.**
- `errors='coerce'` is destructive by design: anything unparseable becomes `NaN`. Run the
  "which entries are not numbers" line first so you know what you are about to destroy.
- Do not forget `Own_house` and the `Income_*` columns. Marks are usually split across columns,
  and the `###` in `Income_2020`/`Income_2021` is easy to miss because those columns *already*
  showed 4 blanks.

**Drill**

1. Re-read `Missing_Tokens` declaring **only** `'na'` as an extra missing value. Report the new
   `isna().sum()` for `Age` and its dtype, and explain the result.

<details><summary>Answer</summary>

```python
r = pd.read_excel(W, sheet_name="Missing_Tokens", na_values=['na'])
print(r.isna().sum())     # Age becomes 1, not 5
print(r['Age'].dtype)     # still object
```

`Age` gains only the single `na` cell. `-`, `@@`, `#` and `nAN` are still strings, so the column
stays `object` and remains unusable for arithmetic. Declaring one token is not enough — declare
all of them.

</details>

---

## P7.6 — Drop rows or columns with missing values, and compare shapes

**Exam phrasings**

- "Create a new DataFrame with every row containing any missing value removed."
- "Drop rows only when Age is missing; keep rows with missing values elsewhere."
- "Drop rows where CreditScore is missing."
- "Create a version without rows having missing Amount and compare shapes with the original."
- "Drop rows with missing CreditScore and compare the shape with the original."
- "Drop rows from Debt where Quantity is missing and compare shape."
- "drop any column that contains a missing value"

**Core idea.** `dropna()` removes rows that have **any** missing value. `subset=` narrows the
test to named columns. `axis=1` drops columns instead. `how='all'` only removes entries that are
entirely missing. `thresh=N` keeps entries with at least `N` non-null values. **Always print
`.shape` before and after** — the exercises award a mark for the comparison itself.

**Template**

```python
print("original:", df.shape)
clean = df.dropna()                       # any missing anywhere -> row goes
clean = df.dropna(subset=['COL'])         # only COL matters
clean = df.dropna(how='all')              # only fully blank rows go
clean = df.dropna(axis=1)                 # drop offending COLUMNS
clean = df.dropna(thresh=N)               # keep rows with >= N non-null values
print("cleaned :", clean.shape)
print("rows removed:", df.shape[0] - clean.shape[0])
```

**Worked** — Session 13 Exercise 59:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
clean = df.dropna()
print("original:", df.shape, " after dropna():", clean.shape)
print("rows removed:", df.shape[0] - clean.shape[0])
print(clean)
```

```text
original: (22, 7)  after dropna(): (9, 7)
rows removed: 13
   Record_ID          Name   Age  Score     Income       City    Status
0       R001   Aarav Mehta  54.0   79.0   65833.65  Hyderabad  Inactive
2       R003    Kabir Shah  24.0   59.0  124850.58     Mumbai  Inactive
4       R005   Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
7       R008    Ishita Sen  37.0   83.0  132119.29        Goa    Active
14      R015  Aditya Verma  29.0   87.0   52937.80       Pune  Inactive
16      R017   Sameer Khan  24.0   97.0   77365.35  Bengaluru    Active
18      R019   Nikhil Jain  28.0   90.0  137788.58        Goa  Inactive
19      R020   Aditi Sinha  28.0   98.0   72034.19  Hyderabad  Inactive
20      R005   Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
```

**59 % of the rows are gone** to remove 13 scattered nulls. That number is the argument against
blanket `dropna()`, and it is the argument the write-up questions want.

**Worked** — Session 13 Exercise 60, `subset=`:

```python
print("original:", df.shape, " subset=['Age']:", df.dropna(subset=['Age']).shape)
print(df.dropna(subset=['Age']).head(4))
```

```text
original: (22, 7)  subset=['Age']: (19, 7)
  Record_ID         Name   Age  Score     Income       City    Status
0      R001  Aarav Mehta  54.0   79.0   65833.65  Hyderabad  Inactive
2      R003   Kabir Shah  24.0   59.0  124850.58     Mumbai  Inactive
3      R004   Meera Iyer  25.0    NaN   76126.52        Goa  Inactive
4      R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
```

Row 3 survives with a missing `Score` — that is exactly what "keep rows with missing values
elsewhere" means.

**Worked** — the other four forms on the same sheet:

```python
print("how='all' :", df.dropna(how='all').shape)          # no fully-blank rows exist
print("subset 2  :", df.dropna(subset=['Age','Score']).shape)
print("axis=1    :", df.dropna(axis=1).shape, df.dropna(axis=1).columns.tolist())
for t in [5, 6, 7]:
    print("thresh=" + str(t), df.dropna(thresh=t).shape)
print("col thresh:", df.dropna(axis=1, thresh=21).columns.tolist())
```

```text
how='all' : (22, 7)
subset 2  : (14, 7)
axis=1    : (22, 2) ['Record_ID', 'Name']
thresh=5 (22, 7)
thresh=6 (22, 7)
thresh=7 (9, 7)
col thresh: ['Record_ID', 'Name', 'Status']
```

Read that `axis=1` result: dropping every column with a null leaves **only `Record_ID` and
`Name`** — two of seven columns. `thresh=5` and `thresh=6` change nothing because no row in this
sheet is missing more than one value, so every row already has ≥ 6 non-null values; `thresh=7`
requires all seven and reproduces `dropna()`.

**Worked** — the three "compare shapes with the original" asks in *01 Basics*:

```python
bt = pd.read_csv(BANK)                                   # Ex 1 Q10
print("original:", bt.shape, "-> cleaned:", bt.dropna(subset=['Amount']).shape)

la = pd.read_csv(LOAN)                                   # Ex 2 Q9
print("original:", la.shape, "-> cleaned:", la.dropna(subset=['CreditScore']).shape)

debt = pd.read_excel(HOLD, sheet_name="Debt")            # Ex 3 Q8
print("original:", debt.shape, "-> cleaned:", debt.dropna(subset=['Quantity']).shape)
```

```text
original: (12, 8) -> cleaned: (11, 8)
original: (12, 7) -> cleaned: (10, 7)
original: (6, 5) -> cleaned: (5, 5)
```

A tidier way to present the comparison, if the question says "compare":

```python
print(pd.DataFrame({'rows': [df.shape[0], clean.shape[0]],
                    'cols': [df.shape[1], clean.shape[1]]}, index=['before', 'after']))
```

```text
        rows  cols
before    22     7
after      9     7
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "modify the DataFrame itself" | `df.dropna(inplace=True)` — see [P7.11](#p711--inplacetrue-versus-assigning-the-result-back) |
| "drop only where BOTH price and volume are blank" | `s.dropna(how='all', subset=['ClosingPrice','Volume'])` |
| "drop columns that are more than 20 % empty" | `df.loc[:, df.isna().mean() <= 0.2]` |
| "keep rows with at most one missing value" | `df[df.isna().sum(axis=1) <= 1]` |
| "reset the row numbers after dropping" | `df.dropna().reset_index(drop=True)` |
| "keep the dropped rows for review" | `bad = df[df.isna().any(axis=1)]` before you drop |

`how='all'` needs a subset to do anything useful on these files, because the ID/date column is
never blank:

```python
s = pd.read_csv(STOCK)
print("before:", s.shape, " after:", s.dropna(how='all', subset=['ClosingPrice','Volume']).shape)
```

```text
before: (10, 3)  after: (8, 3)
```

**Traps**

- `dropna()` **returns a new frame**; the original is untouched unless you assign it back or pass
  `inplace=True`. Writing `df.dropna()` on its own line does nothing observable.
- The **index is not renumbered**. The cleaned frame above jumps 0, 2, 4, 7, … Add
  `.reset_index(drop=True)` if the question wants 0…n.
- `dropna(subset='Age')` (a bare string) works, but `subset=['Age']` is what the slides use and
  it generalises to several columns. Use the list form.
- If you slice the cleaned frame and then assign to it, pandas may warn about setting a value on
  a copy. Add `.copy()`: `c1 = c.dropna(subset=['CreditScore']).copy()`.
- `how` defaults to `'any'`. `how='all'` almost never removes anything from these exercise files
  — say so rather than pretending it worked.
- `thresh=` counts **non-null values**, not missing ones, and cannot be combined with `how`.

**Drill**

1. Drop the rows of the stock-market CSV where `Volume` is missing and print both shapes.
2. Drop every column of `Missing_Data` that contains a null and print the surviving columns.

<details><summary>Answer</summary>

```python
s = pd.read_csv(STOCK)
print("original:", s.shape, "-> cleaned:", s.dropna(subset=['Volume']).shape)   # (10,3) -> (4,3)

df = pd.read_excel(W, sheet_name="Missing_Data")
print(df.dropna(axis=1).columns.tolist())                                       # ['Record_ID','Name']
```

</details>

---

## P7.7 — Fill with a constant, then display the affected rows

**Exam phrasings**

- "Replace missing Amount values with 0 and display the affected rows."
- "Fill missing Income with 800000 and display affected rows."
- "Fill missing Quantity in Equity with 50 and display affected rows."
- "Replace every missing value with 0 in a returned copy; do not modify the original DataFrame."
- "Fill missing Shares with 0."
- "In one call, fill missing Age with the Age mean and missing Score with 0."

**Core idea.** `fillna(VALUE)` replaces every null with `VALUE`. A **dict** fills each column
with its own value in one call. And the phrase **"display the affected rows"** needs a trick:
once you have filled, nothing is `NaN` any more, so you must **capture the mask before filling**.

### The mask-before-fill pattern

This exact phrasing appears in three exercises (*01 Basics* Ex 1 Q11, Ex 2 Q10, Ex 3 Q9).
Memorise these three lines:

```python
mask = df['COL'].isna()                 # 1. remember WHERE the holes were
df['COL'] = df['COL'].fillna(VALUE)     # 2. fill them
print(df.loc[mask])                     # 3. show exactly those rows, now filled
```

Do it in the wrong order and you print an empty frame:

```python
bt = pd.read_csv(BANK)
bt['Amount'] = bt['Amount'].fillna(0)
print(bt[bt['Amount'].isna()])          # WRONG - mask taken after the fill
```

```text
Empty DataFrame
Columns: [TxnID, Date, AccountID, Branch, TxnType, Amount, Channel, Remarks]
Index: []
```

Correct:

```python
bt = pd.read_csv(BANK)
mask = bt['Amount'].isna()
bt['Amount'] = bt['Amount'].fillna(0)
print(bt.loc[mask])
```

```text
   TxnID        Date  AccountID Branch TxnType  Amount Channel Remarks
5   5006  03-07-2025        102   Pune   Debit     0.0     ATM     NaN
```

An equivalent that some markers like better, because it shows the row labels explicitly:

```python
idxs = bt.index[bt['Amount'].isna()]
bt['Amount'] = bt['Amount'].fillna(0)
print(bt.loc[idxs])
```

**Worked** — the other two "display affected rows" asks:

```python
la = pd.read_csv(LOAN)                                   # Ex 2 Q10: Income -> 800000
m = la['Income'].isna()
la['Income'] = la['Income'].fillna(800000)
print(la.loc[m])
```

```text
    ApplicantID    Name     City    Income  CreditScore  LoanAmountRequested EmploymentType
2          2003  Chitra    Delhi  800000.0        665.0               800000       Salaried
10         2011   Kavya  Chennai  800000.0        720.0              1000000       Salaried
```

```python
eq = pd.read_excel(HOLD, sheet_name="Equity")            # Ex 3 Q9: Quantity -> 50
m = eq['Quantity'].isna()
eq['Quantity'] = eq['Quantity'].fillna(50)
print(eq.loc[m])
```

```text
  Ticker InstrumentName  Quantity  Price Exchange
4    ITC            ITC      50.0  480.0      NSE
```

**Worked** — Session 13 Exercise 61, fill the whole frame in a **copy**:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
filled = df.fillna(0)
print(filled.head(7))
print("original still has nulls:", df.isna().sum().sum(), " copy has:", filled.isna().sum().sum())
```

```text
  Record_ID          Name   Age  Score     Income       City    Status
0      R001   Aarav Mehta  54.0   79.0   65833.65  Hyderabad  Inactive
1      R002     Diya Nair   0.0   87.0   80027.09  Bengaluru   Pending
2      R003    Kabir Shah  24.0   59.0  124850.58     Mumbai  Inactive
3      R004    Meera Iyer  25.0    0.0   76126.52        Goa  Inactive
4      R005   Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
5      R006    Ananya Rao  46.0   70.0       0.00       Pune  Inactive
6      R007  Arjun Kapoor  33.0   59.0   51714.23          0   Pending
original still has nulls: 13  copy has: 0
```

Look at row 6: `City` is now the **integer 0**, and row 1 says a 0-year-old. `fillna(0)` on a
whole mixed frame is almost always wrong — mention that when you show it.

**Worked** — Session 13 Exercise 63, the dict form, one call, several columns:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
df.fillna({'Age': df['Age'].mean(), 'Score': 0}, inplace=True)
print(df.isna().sum())
```

```text
Record_ID    0
Name         0
Age          0
Score        0
Income       2
City         2
Status       1
dtype: int64
```

A full, column-appropriate clean-up in one call, with the mask captured first:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
mask_all = df.isna().any(axis=1)
df = df.fillna({'Age': df['Age'].mean(), 'Score': 0, 'Income': df['Income'].median(),
                'City': 'Unknown', 'Status': 'Unknown'})
print(df[mask_all].head(6))
print("nulls left:", df.isna().sum().sum())
```

```text
  Record_ID            Name        Age  Score     Income       City    Status
1      R002       Diya Nair  37.421053   87.0   80027.09  Bengaluru   Pending
3      R004      Meera Iyer  25.000000    0.0   76126.52        Goa  Inactive
5      R006      Ananya Rao  46.000000   70.0   94116.73       Pune  Inactive
6      R007    Arjun Kapoor  33.000000   59.0   51714.23    Unknown   Pending
8      R009    Vikram Joshi  37.421053   84.0   71119.57       Pune  Inactive
9      R010  Nisha Kulkarni  32.000000   70.0  134916.10       Pune   Unknown
nulls left: 0
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "fill one column with a constant" | `df['COL'] = df['COL'].fillna(VALUE)` |
| "fill several columns, each differently" | `df = df.fillna({'Age': 30, 'Score': 0, 'City': 'Unknown'})` |
| "modify the DataFrame itself" | `df.fillna({'Score': 0}, inplace=True)` |
| "do not modify the original" | `filled = df.fillna(0)` and keep using `filled` |
| "fill only the numeric columns with 0" | `num = df.select_dtypes('number').columns; df[num] = df[num].fillna(0)` |
| "count how many values you filled" | `mask.sum()` — take it before filling |
| "fill and keep it an integer column" | `df['Quantity'] = df['Quantity'].fillna(50).astype(int)` |
| "display the affected rows for several columns" | `mask = df[['A','B']].isna().any(axis=1)` before filling |

**Traps**

- **Mask before fill.** Filling first destroys the evidence. This is the single most common lost
  mark in these three exercises.
- `df['COL'].fillna(0, inplace=True)` is **chained assignment** — see
  [P7.11](#p711--inplacetrue-versus-assigning-the-result-back). Use `df['COL'] = df['COL'].fillna(0)`
  or the dict form.
- Filling a float column with `0` keeps it `float64`, so you get `0.0`, not `0`. Chain
  `.astype(int)` only if no nulls remain.
- `fillna(0)` on the whole frame writes `0` into text columns too (`City` became `0` above).
  Use the dict form whenever the frame is mixed.
- `df.loc[mask]` and `df[mask]` are the same here, but `df.loc[mask]` is safer if you also want
  to name columns: `df.loc[mask, ['TxnID','Amount']]`.
- The mask is index-aligned. If you `reset_index()` or `sort_values()` between capturing and
  using the mask, it still aligns by label — but do not slice the frame down in between.

**Drill**

1. Fill the missing `Remarks` in `bank_transactions.csv` with `'No remarks'` and display the
   affected rows.
2. Fill `Missing_Data` `Score` with `0` **and** `City` with `'Unknown'` in a single `fillna` call,
   then confirm both counts are 0.

<details><summary>Answer</summary>

```python
bt = pd.read_csv(BANK)
m = bt['Remarks'].isna()
bt['Remarks'] = bt['Remarks'].fillna('No remarks')
print(bt.loc[m])

df = pd.read_excel(W, sheet_name="Missing_Data")
df = df.fillna({'Score': 0, 'City': 'Unknown'})
print(df[['Score','City']].isna().sum())
```

</details>

---

## P7.8 — Fill with a statistic: mean, median, mode

**Exam phrasings**

- "Replace missing Age with the average Age of customers."
- "Fill missing Price with the mean Price of the portfolio."
- "Replace missing Age values with the mean of the Age column and assign the result back to the column."
- "impute the missing Score with the median"
- "fill the missing City with the most frequent city"
- "fill missing Income with the average income of the same city"

**Core idea.** `mean()`, `median()` and `max()` **ignore** `NaN`, so you can compute the statistic
from the same column you are about to fill. `mode()` returns a **Series** (there can be several
modes), so you must index it: `.mode()[0]`.

**Template**

```python
df['COL'] = df['COL'].fillna(df['COL'].mean())      # numeric, roughly symmetric
df['COL'] = df['COL'].fillna(df['COL'].median())    # numeric with outliers
df['COL'] = df['COL'].fillna(df['COL'].mode()[0])   # categorical / text
```

**Worked** — Session 13 Exercise 62:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("Age mean:", df['Age'].mean())
df['Age'] = df['Age'].fillna(df['Age'].mean())
print("Age nulls now:", df['Age'].isna().sum())
print(df.loc[[1, 8, 17], ['Record_ID','Name','Age']])
```

```text
Age mean: 37.421052631578945
Age nulls now: 0
   Record_ID          Name        Age
1       R002     Diya Nair  37.421053
8       R009  Vikram Joshi  37.421053
17      R018     Riya Bose  37.421053
```

`37.421053` years is not a plausible age. Rounding is a defensible refinement and shows judgement:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
df['Age'] = df['Age'].fillna(round(df['Age'].mean()))
print(df.loc[[1, 8, 17], ['Record_ID','Age']])
```

```text
   Record_ID   Age
1       R002  37.0
8       R009  37.0
17      R018  37.0
```

**Worked** — median:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("median Age:", df['Age'].median(), " median Score:", df['Score'].median())
df['Score'] = df['Score'].fillna(df['Score'].median())
print("Score nulls now:", df['Score'].isna().sum())
```

```text
median Age: 37.0  median Score: 82.0
Score nulls now: 0
```

**Worked** — mode, and **why the `[0]`**:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df['City'].mode())          # a Series, not a scalar
print("mode()[0] =", df['City'].mode()[0])
df['City'] = df['City'].fillna(df['City'].mode()[0])
print(df.loc[[6, 15], ['Record_ID','City']])
```

```text
0    Pune
Name: City, dtype: object
mode()[0] = Pune
   Record_ID  City
6       R007  Pune
15      R016  Pune
```

`mode()` returns **every** most-frequent value, sorted, because ties are possible. On this sheet
`Score` has a five-way tie:

```python
print(df['Score'].mode())
```

```text
0    59.0
1    70.0
2    82.0
3    84.0
4    87.0
Name: Score, dtype: float64
```

So `.mode()` is a 5-element Series and `fillna(df['Score'].mode())` would misbehave. `[0]` picks
the first (lowest) of the tied modes. **Say in your answer that you took the first of the tied
modes** — that is the mark. `City` and `Status` on this sheet have clear single winners:

```python
print(df['Status'].value_counts())
print(df['Status'].mode())
```

```text
Status
Inactive    11
Pending      5
Active       5
Name: count, dtype: int64
0    Inactive
Name: Status, dtype: object
```

**Worked** — the advanced variant: **group-wise mean** with `transform`. Filling `Income` with
the average income *of the same city* is more defensible than one global average:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df.groupby('City')['Income'].mean())
df['Income'] = df['Income'].fillna(df.groupby('City')['Income'].transform('mean'))
print(df.loc[[5, 13], ['Record_ID','City','Income']])
print("Income nulls now:", df['Income'].isna().sum())
```

```text
City
Bengaluru     78696.220000
Delhi        104957.490000
Goa          115344.796667
Hyderabad     88570.145000
Mumbai       117272.870000
Pune          86324.490000
Name: Income, Length: 6, dtype: float64
   Record_ID  City    Income
5       R006  Pune  86324.49
13      R014  Pune  86324.49
Income nulls now: 0
```

`transform('mean')` is the key: it returns a Series **the same length as `df`**, with each row
carrying its own group's mean, so it lines up with `fillna`. `groupby(...).mean()` alone returns
one row per group and will not align.

**Variants**

| If the question says | Change to |
| --- | --- |
| "average" / "mean" | `df['COL'].mean()` |
| "typical" / "middle" / "outliers present" | `df['COL'].median()` |
| "most common" / "most frequent" / text column | `df['COL'].mode()[0]` |
| "rounded to a whole number" | `round(df['COL'].mean())` or `df['COL'].mean().round()` |
| "to 2 decimals" | `round(df['COL'].mean(), 2)` |
| "average of the same city / sector / branch" | `df.groupby('GROUP_COL')['COL'].transform('mean')` |
| "median by group" | `...transform('median')` |
| "in one call with other columns" | `df.fillna({'Age': df['Age'].mean(), 'Score': 0})` |
| "modify the DataFrame itself" | `df.fillna({'Age': df['Age'].mean()}, inplace=True)` |

**Traps**

- **Compute the statistic before you fill**, or from the original column. Filling with the mean
  and then recomputing the mean gives the same number (see
  [P7.13](#p713--show-how-filling-changes-the-statistics)), but recomputing after a `fillna(0)`
  does not.
- `.mode()[0]` — without the `[0]` you pass a Series to `fillna` and get aligned-by-index
  nonsense or an error. With a tie, state which mode you picked.
- `df['COL'].fillna(df['COL'].mean(), inplace=True)` is **chained assignment**. Assign back
  instead.
- If the column is `object` dtype because of junk tokens, `mean()` raises `TypeError`. Clean it
  first ([P7.5](#p75--missing-tokens-make-pandas-recognise-----na-as-missing)).
- Mean imputation **shrinks the variance** and pulls everything to the centre. Mention this if
  the question asks you to comment; see the [write-up answers](#write-up-answers).
- If a whole group is missing the value, `transform('mean')` leaves `NaN` for that group. Chain a
  global fallback: `.fillna(df['Income'].mean())`.

**Drill**

1. Fill `Missing_Data` `Score` with its mean and `Status` with its mode, then print the null
   counts.
2. Fill the `Price` column of `Portfolio analysis.xlsx` with the mean price and print the result.

<details><summary>Answer</summary>

```python
d = pd.read_excel(W, sheet_name="Missing_Data")
print("Score mean:", d['Score'].mean(), " Status mode:", d['Status'].mode()[0])
d['Score']  = d['Score'].fillna(d['Score'].mean())       # 79.05882352941177
d['Status'] = d['Status'].fillna(d['Status'].mode()[0])  # 'Inactive'
print(d.isna().sum())

p = pd.read_excel(PORT)
p['Price'] = p['Price'].fillna(p['Price'].mean())        # 1383.3333333333333
print(p)
```

</details>

---

## P7.9 — Fill a text column with Unknown

**Exam phrasings**

- "Fill missing Sector with Unknown."
- "replace the blank Branch names with a placeholder"
- "fill missing Status with Unknown so no record is lost"
- "fill the missing Remarks with No remarks"

**Core idea.** For a categorical/text column there is no arithmetic average, and dropping the row
throws away the other columns. Writing an explicit placeholder **preserves the record while
flagging that the field is incomplete**, and it shows up as its own category in every
`value_counts()` and pivot table afterwards.

**Template**

```python
df['COL'] = df['COL'].fillna('Unknown')
df = df.fillna({'Sector': 'Unknown', 'City': 'Unknown', 'Status': 'Unknown'})
```

**Worked**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
df['City']   = df['City'].fillna('Unknown')
df['Status'] = df['Status'].fillna('Unknown')
print(df.loc[[6, 9, 15], ['Record_ID','City','Status']])
```

```text
   Record_ID     City    Status
6       R007  Unknown   Pending
9       R010     Pune   Unknown
15      R016  Unknown  Inactive
```

And the *02 Missing values* Exercise 2 ask:

```python
p = pd.read_excel(PORT)
p['Sector'] = p['Sector'].fillna('Unknown')
print(p)
```

```text
   Stock   Price  Shares      Sector
0   AAPL   150.0    10.0        Tech
1  GOOGL     NaN     5.0        Tech
2   TSLA   700.0     NaN     Unknown
3   AMZN  3300.0     NaN  E-commerce
4   MSFT     NaN    20.0        Tech
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "use N/A as the label" | `df['COL'] = df['COL'].fillna('N/A')` |
| "use the most common value instead" | `df['COL'].fillna(df['COL'].mode()[0])` — [P7.8](#p78--fill-with-a-statistic-mean-median-mode) |
| "several text columns at once" | `txt = df.select_dtypes('object').columns; df[txt] = df[txt].fillna('Unknown')` |
| "export blanks as N/A instead" | `df.to_excel(OUT, na_rep='N/A')` — leaves the frame alone |
| "make it a category afterwards" | `df['COL'] = df['COL'].fillna('Unknown').astype('category')` |

**Traps**

- Do **not** use `fillna(0)` on a text column. `City` becomes the integer `0` and the column stays
  `object` with mixed types — every later `.str` operation breaks.
- `'Unknown'` becomes a genuine category. `df['Sector'].value_counts()` will list it, and so will
  a pivot table. That is the point, but say so, because the examiner may ask whether the
  distribution changed.
- `na_rep='N/A'` in `to_excel` / `to_csv` only affects the **exported file**. It does not fill the
  DataFrame.
- Be consistent: `'Unknown'`, `'unknown'` and `'UNKNOWN'` are three different categories.

**Drill**

1. Fill the missing `Branch` values in `bank_transactions.csv` with `'Unknown'` and show
   `value_counts()` for `Branch`.

<details><summary>Answer</summary>

```python
bt = pd.read_csv(BANK)
bt['Branch'] = bt['Branch'].fillna('Unknown')
print(bt['Branch'].value_counts())
```

</details>

---

## P7.10 — Forward fill and backward fill for time series

**Exam phrasings**

- "Use forward fill (ffill) to handle missing ClosingPrice."
- "Use backward fill (bfill) for missing Volume."
- "Re-read the sheet, then forward-fill missing values."
- "Re-read the sheet, then backward-fill missing values."
- "The Score column contains three consecutive missing values. Forward-fill with limit=1 and compare the result and the missing counts with an unlimited ffill()."
- "carry the last known price forward for the trading halt days"

**Core idea.** `ffill()` copies the **last known value downwards**; `bfill()` copies the **next
known value upwards**. They respect row order, so they only make sense when the rows are in a
meaningful sequence — a date series, above all. `limit=N` caps how many consecutive blanks each
known value may fill.

**Template**

```python
df = df.ffill()                     # whole frame, carry values down
df = df.bfill()                     # whole frame, carry values up
df['COL'] = df['COL'].ffill()       # one column only
df = df.ffill(limit=1)              # fill at most 1 consecutive blank
df = df.ffill().bfill()             # close trailing AND leading gaps
```

**Worked** — Session 13 Exercises 64 and 66. `Score` has three consecutive NaN at rows 10, 11, 12:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df.loc[df['Score'].isna(), ['Record_ID','Score']])
```

```text
   Record_ID  Score
3       R004    NaN
10      R011    NaN
11      R012    NaN
12      R013    NaN
21      R011    NaN
```

```python
f = df.ffill()            # unlimited
g = df.ffill(limit=1)     # at most one consecutive blank
print(pd.DataFrame({'Record_ID': df['Record_ID'], 'original': df['Score'],
                    'ffill': f['Score'], 'ffill_limit1': g['Score']}).loc[9:14])
```

```text
   Record_ID  original  ffill  ffill_limit1
9       R010      70.0   70.0          70.0
10      R011       NaN   70.0          70.0
11      R012       NaN   70.0           NaN
12      R013       NaN   70.0           NaN
13      R014      55.0   55.0          55.0
14      R015      87.0   87.0          87.0
```

The comparison of missing counts the exercise asks for:

```python
print(pd.DataFrame({'original': df.isna().sum(),
                    'ffill()': f.isna().sum(),
                    'ffill(limit=1)': g.isna().sum()}))
```

```text
           original  ffill()  ffill(limit=1)
Record_ID         0        0               0
Name              0        0               0
Age               3        0               0
Score             5        0               2
Income            2        0               0
City              2        0               0
Status            1        0               0
```

Unlimited `ffill()` clears all 13 nulls. `ffill(limit=1)` leaves **2** — rows 11 and 12, the
second and third of the run of three. Every other column had isolated single blanks, so
`limit=1` handled them fully; only the run of three exposes the difference.

**Worked** — Session 13 Exercise 65, `bfill()`:

```python
b = df.bfill()
print(b.loc[9:14, ['Record_ID','Score']])
print(b.isna().sum())
```

```text
   Record_ID  Score
9       R010   70.0
10      R011   55.0
11      R012   55.0
12      R013   55.0
13      R014   55.0
14      R015   87.0
Record_ID    0
Name         0
Age          0
Score        1
Income       0
City         0
Status       0
dtype: int64
```

`bfill()` leaves **one** `Score` null: the very last row (index 21) has nothing after it to pull
from. The mirror-image rule:

| | leading gap (first rows blank) | trailing gap (last rows blank) |
| --- | --- | --- |
| `ffill()` | **cannot fix** — no earlier value | fixes |
| `bfill()` | fixes | **cannot fix** — no later value |
| `ffill().bfill()` | fixes | fixes |

**Worked** — *02 Missing values* Exercise 3, the exercise's exact ask: **ffill `ClosingPrice`,
bfill `Volume`**.

```python
s = pd.read_csv(STOCK)
print(s)
print(s.isna().sum())
```

```text
         Date  ClosingPrice  Volume
0  2024-01-01         100.0     NaN
1  2024-01-02           NaN  5000.0
2  2024-01-03         102.0     NaN
3  2024-01-04           NaN     0.0
4  2024-01-05           NaN     NaN
5  2024-01-06         101.0  7000.0
6  2024-01-07          99.0     NaN
7  2024-01-08           NaN  6000.0
8  2024-01-09          98.0     NaN
9  2024-01-10           NaN     NaN
Date            0
ClosingPrice    5
Volume          6
dtype: int64
```

```python
s['ClosingPrice'] = s['ClosingPrice'].ffill()
s['Volume']       = s['Volume'].bfill()
print(s)
print(s.isna().sum())
```

```text
         Date  ClosingPrice  Volume
0  2024-01-01         100.0  5000.0
1  2024-01-02         100.0  5000.0
2  2024-01-03         102.0     0.0
3  2024-01-04         102.0     0.0
4  2024-01-05         102.0  7000.0
5  2024-01-06         101.0  7000.0
6  2024-01-07          99.0  6000.0
7  2024-01-08          99.0  6000.0
8  2024-01-09          98.0     NaN
9  2024-01-10          98.0     NaN
Date            0
ClosingPrice    0
Volume          2
dtype: int64
```

**Report this honestly: the exercise's own prescription does not fully clean the data.** `Volume`
still has 2 nulls at 2024-01-09 and 2024-01-10 because they are trailing and `bfill` has nothing
to pull from. Add one clause and say why:

```python
s['Volume'] = s['Volume'].bfill().ffill()     # bfill first as asked, then close the tail
```

**Why ffill/bfill and not the mean.** Compare them column by column:

```python
s3 = pd.read_csv(STOCK)
print("ClosingPrice mean:", s3['ClosingPrice'].mean())
print(pd.DataFrame({'Date': s3['Date'], 'original': s3['ClosingPrice'],
                    'ffill': s3['ClosingPrice'].ffill(),
                    'mean_filled': s3['ClosingPrice'].fillna(s3['ClosingPrice'].mean())}))
```

```text
ClosingPrice mean: 100.0
         Date  original  ffill  mean_filled
0  2024-01-01     100.0  100.0        100.0
1  2024-01-02       NaN  100.0        100.0
2  2024-01-03     102.0  102.0        102.0
3  2024-01-04       NaN  102.0        100.0
4  2024-01-05       NaN  102.0        100.0
5  2024-01-06     101.0  101.0        101.0
6  2024-01-07      99.0   99.0         99.0
7  2024-01-08       NaN   99.0        100.0
8  2024-01-09      98.0   98.0         98.0
9  2024-01-10       NaN   98.0        100.0
```

The mean-filled series **oscillates**: 102 → 100 → 100 → 101 is a fabricated 2-point drop and
rebound. The last row jumps from 98 back up to 100, inventing a rally on a day the market gave
no data. `ffill` produces flat segments — economically "no trade, no new information, price
unchanged" — which is what a trading halt actually means. See the
[write-up answers](#write-up-answers).

**Variants**

| If the question says | Change to |
| --- | --- |
| "forward fill" / "carry forward" / "last observation carried forward" | `df.ffill()` |
| "backward fill" / "carry backward" / "next observation carried backward" | `df.bfill()` |
| "only one column" | `df['COL'] = df['COL'].ffill()` |
| "at most N consecutive gaps" | `df.ffill(limit=N)` / `df.bfill(limit=N)` |
| "fill gaps in both directions" | `df.ffill().bfill()` |
| "estimate the values in between" | `df['COL'].interpolate()` — straight line between known points |
| "fill across columns, not down rows" | `df.ffill(axis=1)` (rare; only for wide period data) |
| "sort by date first" | `df = df.sort_values('Date'); df['COL'] = df['COL'].ffill()` |

`interpolate()` for comparison — smoother, but it invents intermediate values:

```python
t = pd.read_csv(STOCK)
t['ClosingPrice'] = t['ClosingPrice'].interpolate()
print(t[['Date','ClosingPrice']])
```

```text
         Date  ClosingPrice
0  2024-01-01    100.000000
1  2024-01-02    101.000000
2  2024-01-03    102.000000
3  2024-01-04    101.666667
4  2024-01-05    101.333333
5  2024-01-06    101.000000
6  2024-01-07     99.000000
7  2024-01-08     98.500000
8  2024-01-09     98.000000
9  2024-01-10     98.000000
```

**Traps**

- **`fillna(method='ffill')` is deprecated.** On pandas 2.3.3 it still runs but warns:

  ```text
  FutureWarning: DataFrame.fillna with 'method' is deprecated and will raise in a future
  version. Use obj.ffill() or obj.bfill() instead.
  ```

  It is **removed in pandas 3.x**. Write `df.ffill()`. The same applies to `pad` / `backfill`.
- `ffill` is **order-dependent**. If the rows are not in date order the result is meaningless.
  Sort by the date column first, and say that you did.
- `ffill()` on the whole frame also carries **text** columns forward (`City`, `Status` above).
  That is usually wrong for categorical data — fill those with `'Unknown'` instead, and apply
  `ffill` only to the time-ordered numeric columns.
- A leading gap survives `ffill()`; a trailing gap survives `bfill()`. Check `isna().sum()`
  **after** filling and report anything left.
- Never use `ffill` for unordered cross-sectional data (a list of customers, a list of stocks) —
  there is no "previous" row in any real sense.
- `limit` counts **consecutive** blanks per run, not blanks in total.

**Drill**

1. On `Missing_Data`, run `bfill(limit=1)` and report how many `Score` values are still missing;
   explain the number.
2. On the stock CSV, forward-fill `Volume` instead of backward-filling it. How many nulls remain,
   and which row?

<details><summary>Answer</summary>

```python
d = pd.read_excel(W, sheet_name="Missing_Data")
b1 = d.bfill(limit=1)
print(b1['Score'].isna().sum())     # 3
```

Rows 10 and 11 stay blank (only row 12, adjacent to the known 55.0 at row 13, gets filled) and
row 21 stays blank because it is the last row. 2 + 1 = 3.

```python
s = pd.read_csv(STOCK)
print(s['Volume'].ffill().isna().sum())   # 1 - row 0, a leading gap ffill cannot reach
```

</details>

---

## P7.11 — inplace=True versus assigning the result back

**Exam phrasings**

- "Drop the Salary column and modify the DataFrame itself. Confirm that the method returns None when inplace=True."
- "Fill missing Score values with 0 and modify the DataFrame itself. Use the dictionary form of fillna on the whole DataFrame."
- "Drop rows that contain missing values and modify the DataFrame itself."
- "Replace the text Pending with Review and modify the DataFrame itself."
- "Sort by Age in place."
- "Set Student_ID as the index in place, then sort the index in place."
- "The slides note that newer pandas versions do not support inplace for astype. Convert Risk_Score to float using astype and assign the result back to the column."
- "why does df[col].fillna(0, inplace=True) not work?"

**Core idea.** Most pandas methods **return a new object and leave the original alone**. Two ways
to make the change stick:

```python
df = df.METHOD(...)            # assign back        <- prefer this
df.METHOD(..., inplace=True)   # modify in place, returns None
```

"Modify the DataFrame itself" in a question = use `inplace=True` (or assign back — both are
correct, but the exercises are drilling `inplace`). **`inplace=True` returns `None`**, so never
chain off it and never wrap it in `print()`.

### Which calls support inplace

| Method | `inplace=` | Notes |
| --- | --- | --- |
| `fillna` | yes | **dict form only** for single columns: `df.fillna({'Score':0}, inplace=True)` |
| `dropna` | yes | |
| `drop` | yes | |
| `drop_duplicates` | yes | |
| `replace` | yes | |
| `sort_values` | yes | |
| `sort_index` | yes | |
| `set_index` | yes | |
| `reset_index` | yes | |
| `rename` | yes | |
| `ffill` / `bfill` | yes | but `df = df.ffill()` reads better |
| **`astype`** | **NO** | `TypeError: astype() got an unexpected keyword argument 'inplace'` |
| `to_datetime`, `to_numeric` | **NO** | functions, not methods — always assign back |

### Confirm inplace returns None (Exercise 46)

```python
sd = pd.read_excel(W, sheet_name="Sorting_Data")
print("columns before:", sd.columns.tolist())
print("return value:", sd.drop('Salary', axis=1, inplace=True))
print("columns after :", sd.columns.tolist())
```

```text
columns before: ['Employee_ID', 'Name', 'Department', 'Age', 'Score', 'Salary']
return value: None
columns after : ['Employee_ID', 'Name', 'Department', 'Age', 'Score']
```

Without `inplace`, you get a new frame and the original is untouched:

```python
sd2 = pd.read_excel(W, sheet_name="Sorting_Data")
out = sd2.drop('Salary', axis=1)
print(type(out))
print("original untouched:", sd2.columns.tolist())
```

```text
<class 'pandas.core.frame.DataFrame'>
original untouched: ['Employee_ID', 'Name', 'Department', 'Age', 'Score', 'Salary']
```

The classic disaster is `df = df.drop('Salary', axis=1, inplace=True)` — it drops the column
**and** rebinds `df` to `None`. Every later line then raises
`AttributeError: 'NoneType' object has no attribute ...`. Use one mechanism or the other, never
both.

### fillna: the dict form works, chained assignment does not (Exercise 47)

Works:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("before:", df['Score'].isna().sum())
df.fillna({'Score': 0}, inplace=True)
print("after :", df['Score'].isna().sum())
```

```text
before: 5
after : 0
```

Now the form the exercise tells you to try. **On pandas 2.3.3 this warns:**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("before:", df['Score'].isna().sum())
df['Score'].fillna(0, inplace=True)
print("after :", df['Score'].isna().sum())
```

```text
FutureWarning: A value is trying to be set on a copy of a DataFrame or Series through chained assignment using an inplace method.
The behavior will change in pandas 3.0. This inplace method will never work because the intermediate object on which we are setting values always behaves as a copy.

For example, when doing 'df[col].method(value, inplace=True)', try using 'df.method({col: value}, inplace=True)' or df[col] = df[col].method(value) instead, to perform the operation inplace on the original object.

before: 5
after : 0
```

**Read that result carefully, because it is the trap inside the trap.** On pandas 2.3.3 with
default settings the value *did* land (`after: 0`) — Copy-on-Write is not yet the default, so
`df['Score']` happened to be a view. The warning is telling you this is **luck, not behaviour you
may rely on**. Turn on the pandas-3.0 semantics and the same line fails:

```python
import pandas as pd
pd.options.mode.copy_on_write = True          # pandas 3.0 default behaviour
df = pd.read_excel(W, sheet_name="Missing_Data")
print("before:", df['Score'].isna().sum())
df['Score'].fillna(0, inplace=True)
print("after :", df['Score'].isna().sum())
```

```text
ChainedAssignmentError: A value is trying to be set on a copy of a DataFrame or Series through chained assignment using an inplace method.
When using the Copy-on-Write mode, such inplace method never works to update the original DataFrame or Series, because the intermediate object on which we are setting values always behaves as a copy.

For example, when doing 'df[col].method(value, inplace=True)', try using 'df.method({col: value}, inplace=True)' instead, to perform the operation inplace on the original object.

before: 5
after : 5
```

`after : 5` — the fill was silently thrown away. **So: never write
`df['COL'].fillna(V, inplace=True)`.** Write one of these two instead:

```python
df['Score'] = df['Score'].fillna(0)      # assign back  (Exercise 62 style)
df.fillna({'Score': 0}, inplace=True)    # dict form    (Exercise 47 style)
```

The exam answer sentence: *"`df['Score'].fillna(0, inplace=True)` is chained assignment —
`df['Score']` may be a temporary copy, so the in-place write can be discarded. pandas 2.x raises a
`FutureWarning`; from pandas 3.0 it raises `ChainedAssignmentError` and the DataFrame is left
unchanged. Use `df.fillna({'Score': 0}, inplace=True)` or `df['Score'] = df['Score'].fillna(0)`."*

### The rest of the inplace battery (Exercises 48–53)

```python
# Ex 48 - dropna inplace
df = pd.read_excel(W, sheet_name="Missing_Data")
print("before:", df.shape)
df.dropna(inplace=True)
print("after :", df.shape)
```

```text
before: (22, 7)
after : (9, 7)
```

```python
# Ex 49 - replace inplace
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df['Status'].value_counts(dropna=False))
df.replace('Pending', 'Review', inplace=True)
print(df['Status'].value_counts(dropna=False))
```

```text
Status
Inactive    11
Pending      5
Active       5
NaN          1
Name: count, dtype: int64
Status
Inactive    11
Review       5
Active       5
NaN          1
Name: count, dtype: int64
```

`dropna=False` in `value_counts` is what makes the `NaN` row visible — useful on its own.

```python
# Ex 50 - sort_values inplace
sd = pd.read_excel(W, sheet_name="Sorting_Data")
print(sd.head(3))
sd.sort_values(by='Age', inplace=True)
print(sd.head(3))
```

```text
  Employee_ID            Name Department  Age  Score  Salary
0        E001     Sneha Patil  Marketing   30     78   74966
1        E002  Karan Malhotra    Finance   34     84   74361
2        E003     Pooja Menon  Analytics   30     78  101080
   Employee_ID         Name  Department  Age  Score  Salary
4         E005   Tanvi Bhat   Marketing   24     90  108389
8         E009  Aditi Sinha   Marketing   26     72   99951
10        E011   Neha Reddy  Operations   26     90  102251
```

```python
# Ex 51 - set_index then sort_index, both inplace
idx = pd.read_excel(W, sheet_name="Indexed_Data")
idx.set_index('Student_ID', inplace=True)
idx.sort_index(inplace=True)
print(idx.head(3))

# Ex 52 - reset_index inplace
idx.reset_index(inplace=True)
print(idx.head(3))
```

```text
                    Name  Age       City  Score
Student_ID                                     
ST101         Ananya Rao   22     Mumbai     71
ST102       Arjun Kapoor   34  Bengaluru     80
ST103         Ishita Sen   33       Pune     90
  Student_ID          Name  Age       City  Score
0      ST101    Ananya Rao   22     Mumbai     71
1      ST102  Arjun Kapoor   34  Bengaluru     80
2      ST103    Ishita Sen   33       Pune     90
```

```python
# Ex 53 - drop_duplicates inplace
df = pd.read_excel(W, sheet_name="Missing_Data")
print("before:", df.shape)
df.drop_duplicates(inplace=True)
print("after :", df.shape)
```

```text
before: (22, 7)
after : (20, 7)
```

### astype has no inplace (Exercise 54)

```python
cd = pd.read_excel(W, sheet_name="Customer_Data")
print("before:", cd['Risk_Score'].dtype)
cd['Risk_Score'] = cd['Risk_Score'].astype(float)
print("after :", cd['Risk_Score'].dtype)
print(cd[['Customer_ID','Risk_Score']].head(3))
```

```text
before: int64
after : float64
  Customer_ID  Risk_Score
0        C001       550.0
1        C002       546.0
2        C003       355.0
```

Try it the way the slides warn against:

```python
cd2 = pd.read_excel(W, sheet_name="Customer_Data")
cd2['Risk_Score'].astype(float, inplace=True)
```

```text
TypeError: astype() got an unexpected keyword argument 'inplace'
```

Not a warning — a hard `TypeError`. `astype` never had `inplace` in the versions you will use.
**Always assign back.**

One more `astype` trap that belongs in this chapter: **you cannot cast a column with nulls to
`int`.**

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
df['Age'].astype(int)
```

```text
IntCastingNaNError: Cannot convert non-finite values (NA or inf) to integer
```

Fill first, then cast — or use the nullable integer dtype, which keeps the missing values:

```python
df['Age'] = df['Age'].fillna(df['Age'].median()).astype(int)
print(df['Age'].dtype, df['Age'].head(3).tolist())

df2 = pd.read_excel(W, sheet_name="Missing_Data")
df2['Age'] = df2['Age'].astype('Int64')          # capital I - nullable integer
print(df2['Age'].head(3).tolist(), df2['Age'].dtype, df2['Age'].isna().sum())
```

```text
int64 [54, 37, 24]
[54, <NA>, 24] Int64 3
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "modify the DataFrame itself" / "in place" | add `inplace=True` |
| "store the result in a new DataFrame" | `clean = df.dropna()` — no `inplace` |
| "do not modify the original" | `filled = df.fillna(0)` |
| "confirm the return value" | `print(df.dropna(inplace=True))` → `None` |
| "fill one column in place" | `df.fillna({'COL': V}, inplace=True)` (dict form) |
| "convert the dtype in place" | impossible — `df['COL'] = df['COL'].astype(...)` |
| "chain several operations" | drop `inplace` entirely: `df.dropna().sort_values('Age').reset_index(drop=True)` |

**Traps**

- `df = df.METHOD(..., inplace=True)` sets `df` to `None`. Pick one mechanism.
- `print(df.info())` and `print(df.dropna(inplace=True))` both print a trailing `None`.
- `inplace=True` cannot be chained: `df.dropna(inplace=True).head()` → `AttributeError` on `None`.
- `df['COL'].METHOD(..., inplace=True)` is chained assignment for **every** method, not just
  `fillna` — `replace`, `clip`, `where` all behave the same way.
- `inplace=True` does not save memory in modern pandas; the docs now recommend assigning back.
  Either answer earns the mark, but if the question says "modify the DataFrame itself", show
  `inplace=True`.

**Drill**

1. Fill the missing `City` values of `Missing_Data` with `'Unknown'`, modifying the DataFrame
   itself, without triggering the chained-assignment warning.
2. Sort `Sorting_Data` by `Score` descending in place, and print the return value of the call.

<details><summary>Answer</summary>

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
df.fillna({'City': 'Unknown'}, inplace=True)      # dict form, no chaining
print(df['City'].isna().sum())                    # 0

sd = pd.read_excel(W, sheet_name="Sorting_Data")
print(sd.sort_values(by='Score', ascending=False, inplace=True))   # None
print(sd.head(3))
```

</details>

---

## P7.12 — Find and remove duplicate rows

**Exam phrasings**

- "Remove duplicate rows in place. The sheet contains two deliberate duplicates at the bottom."
- "how many duplicate rows are in the dataset?"
- "display the duplicated records"
- "drop duplicates on Record_ID only, keeping the last occurrence"
- "show every copy of each duplicated row, not just the repeats"

**Core idea.** `duplicated()` flags a row `True` if an **identical earlier row** exists, so the
first occurrence is `False`. `drop_duplicates()` removes the flagged rows. `subset=` compares
only the named columns. `keep='first'` (default) / `'last'` / `False` choose which copy survives
— and `keep=False` in `duplicated()` flags **all** copies, which is what you want for display.

**Template**

```python
df.duplicated().sum()                    # how many
df[df.duplicated()]                      # the repeat copies
df[df.duplicated(keep=False)]            # ALL copies, originals included
df = df.drop_duplicates()                # remove
df.drop_duplicates(inplace=True)         # remove, in place
df.drop_duplicates(subset=['ID'], keep='last', inplace=True)
```

**Worked** — Session 13 Exercise 53. Verify the two planted duplicates:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("duplicated().sum() =", df.duplicated().sum())
print(df[df.duplicated()])
```

```text
duplicated().sum() = 2
   Record_ID         Name   Age  Score     Income       City    Status
20      R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
21      R011   Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
```

Rows 20 and 21 are byte-identical copies of `R005` and `R011`. To show **all four** rows involved:

```python
print(df[df.duplicated(keep=False)])
```

```text
   Record_ID         Name   Age  Score     Income       City    Status
4       R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
10      R011   Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
20      R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
21      R011   Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
```

`keep='last'` flips which copy is called the duplicate:

```python
print(df[df.duplicated(keep='last')])
```

```text
   Record_ID         Name   Age  Score     Income       City    Status
4       R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
10      R011   Rahul Naik  51.0    NaN  108206.37  Hyderabad  Inactive
```

And the removal, with the shape comparison:

```python
print("subset=['Record_ID'] flags:", df.duplicated(subset=['Record_ID']).sum())
print("before:", df.shape)
df.drop_duplicates(inplace=True)
print("after :", df.shape)
```

```text
subset=['Record_ID'] flags: 2
before: (22, 7)
after : (20, 7)
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "duplicates based on ID only" | `df.drop_duplicates(subset=['Record_ID'])` |
| "duplicates on a combination" | `df.drop_duplicates(subset=['Name','City'])` |
| "keep the latest record" | `keep='last'` (sort by date first if there is one) |
| "remove every copy of a duplicated row" | `keep=False` |
| "modify the DataFrame itself" | `df.drop_duplicates(inplace=True)` |
| "renumber after dropping" | `df.drop_duplicates().reset_index(drop=True)` |
| "count distinct rows" | `len(df.drop_duplicates())` or `df.nunique()` per column |
| "are the IDs unique?" | `df['Record_ID'].is_unique` |

**Traps**

- `duplicated()` compares **whole rows**, including `NaN`. Two rows both missing `Score` are still
  duplicates only if every other value matches too (which is exactly why `R011` at rows 10 and 21
  matches: identical `NaN` included).
- `drop_duplicates()` returns a copy. Assign back or use `inplace=True`.
- Deduplicate **before** imputing. If you fill first, two rows that differed only in which field
  was blank can become identical and get silently merged.
- `keep=False` in `drop_duplicates()` removes **all** copies, leaving neither — occasionally what
  is wanted, usually not. In `duplicated()` it flags all copies, which is for display.
- The index is preserved, so a deduplicated frame has gaps in its row labels.

**Drill**

1. Drop duplicates from `Missing_Data` on `Name` only, keeping the **last** occurrence, and
   compare shapes.

<details><summary>Answer</summary>

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("before:", df.shape, "-> after:", df.drop_duplicates(subset=['Name'], keep='last').shape)
# (22, 7) -> (20, 7)
```

</details>

---

## P7.13 — Show how filling changes the statistics

**Exam phrasings**

- "after replacing missing Amount with 0, recompute the mean and comment"
- "Discuss: What would happen if missing Prices were filled with 0 instead of mean?"
- "compare the average before and after imputation"
- "does filling with the mean change the mean?"

**Core idea.** `mean()` skips nulls, so it divides by the **non-null count**. Filling with `0`
adds rows to the denominator without adding anything to the numerator, so the mean falls. Filling
with the mean itself leaves the mean **exactly unchanged** (but still shrinks the standard
deviation). Print the before/after pair — the numbers are the argument.

**Template**

```python
print("mean before        :", df['COL'].mean())
print("mean after fillna(0):", df['COL'].fillna(0).mean())
print("mean after fillna(mean):", df['COL'].fillna(df['COL'].mean()).mean())
```

**Worked** — `bank_transactions.csv`, `Amount`, one null out of twelve:

```python
bt = pd.read_csv(BANK)
print("count non-null:", bt['Amount'].notna().sum(), "of", len(bt))
print("mean before fill    :", bt['Amount'].mean())
print("mean after fillna(0):", bt['Amount'].fillna(0).mean())
print("sum is unchanged    :", bt['Amount'].sum(), bt['Amount'].fillna(0).sum())
print("median before:", bt['Amount'].median(), " median after:", bt['Amount'].fillna(0).median())
print("std before:", round(bt['Amount'].std(), 2), " std after:", round(bt['Amount'].fillna(0).std(), 2))
print("count() before:", bt['Amount'].count(), " after:", bt['Amount'].fillna(0).count())
print("mean after fillna(mean):", bt['Amount'].fillna(bt['Amount'].mean()).mean())
```

```text
count non-null: 11 of 12
mean before fill    : 269672.7272727273
mean after fillna(0): 247200.0
sum is unchanged    : 2966400.0 2966400.0
median before: 15000.0  median after: 13500.0
std before: 594746.45  std after: 572387.07
count() before: 11  after: 12
mean after fillna(mean): 269672.7272727273
```

Read the numbers off: the mean drops from **269,672.73 to 247,200.00** — a **fall of 22,472.73,
about 8.3 %** — from a single fabricated zero in twelve rows. `sum()` is identical (2,966,400)
because `sum()` also skips nulls and we added a zero; only the **denominator** moved, 11 → 12.
The median slid from 15,000 to 13,500. And filling with the mean reproduces the mean to the last
digit, which is the reason the mean is the standard "do no harm to the average" imputation.

Same effect on `Missing_Data.Income`, two nulls in 22 rows:

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print("before:", round(df['Income'].mean(), 2), " after fillna(0):", round(df['Income'].fillna(0).mean(), 2))
```

```text
before: 94863.57  after fillna(0): 86239.61
```

And on the Portfolio-analysis valuation, where zero-filling `Price` is catastrophic:

```python
p = pd.read_excel(PORT)
p_mean = p.copy(); p_zero = p.copy()
p_mean['Price'] = p_mean['Price'].fillna(p_mean['Price'].mean())
p_zero['Price'] = p_zero['Price'].fillna(0)
for d in (p_mean, p_zero):
    d['Shares'] = d['Shares'].fillna(0)
print("total with mean-filled Price:", (p_mean['Price']*p_mean['Shares']).sum())
print("total with zero-filled Price:", (p_zero['Price']*p_zero['Shares']).sum())
print("understated by:", (p_mean['Price']*p_mean['Shares']).sum() - (p_zero['Price']*p_zero['Shares']).sum())
```

```text
total with mean-filled Price: 36083.33333333333
total with zero-filled Price: 1500.0
understated by: 34583.33333333333
```

**1,500 instead of 36,083** — the portfolio is reported at **4.2 %** of its estimated value.
Quote that pair of numbers in the discussion answer.

**Variants**

| If the question says | Change to |
| --- | --- |
| "how many values did you fabricate?" | `df['COL'].isna().sum()` before filling |
| "what fraction of the column is imputed?" | `df['COL'].isna().mean()` |
| "did the spread change?" | compare `.std()` before/after — mean-filling always lowers it |
| "compare mean, median and mode after each strategy" | `df['COL'].agg(['mean','median','std','count'])` |
| "show the effect on a group total" | `df.groupby('GROUP')['COL'].sum()` before and after |

**Traps**

- `sum()` is unaffected by zero-filling; only `mean()`, `count()`, `std()` and `describe()` move.
  Do not claim the total changed when it did not.
- `count()` goes **up** after any fill, because it counts non-null values. That is the mechanism
  behind the falling mean.
- Mean imputation preserves the mean but **understates the variance** and therefore every
  confidence interval and risk measure built on it. Say this — it is the sophisticated half of the
  answer.
- Compute the statistic from the **original** column. `df['COL'].fillna(0).mean()` used as the
  fill value would be doubly wrong.

**Drill**

1. Report the mean of `Missing_Data.Score` before filling, after `fillna(0)`, and after filling
   with its own mean.

<details><summary>Answer</summary>

```python
df = pd.read_excel(W, sheet_name="Missing_Data")
print(df['Score'].mean(),
      df['Score'].fillna(0).mean(),
      df['Score'].fillna(df['Score'].mean()).mean())
# 79.05882352941177  61.13636363636363  79.05882352941177
```

</details>

---

## Full solution — 02 Missing values, Exercises 1–3

One runnable script per exercise, question numbers as comments, real output underneath.

### Exercise 1 — Customer Loan Applications

```python
import pandas as pd
CUST = "Customer loan applications.csv"          # use your own path
c = pd.read_csv(CUST)
print(c)

# Q1. Identify the number of missing values in each column.
print(c.isna().sum())

# Q2. Drop rows where CreditScore is missing.
c1 = c.dropna(subset=['CreditScore']).copy()
print("shape before:", c.shape, "-> after:", c1.shape)
print(c1)

# Q3. Replace missing Age with the average Age of customers.
print("mean Age of the retained rows:", c1['Age'].mean())
c1['Age'] = c1['Age'].fillna(c1['Age'].mean())
print(c1)
print(c1.isna().sum())
```

```text
  Customer   Age  CreditScore
0    Alice  25.0        720.0
1      Bob   NaN        650.0
2  Charlie  30.0          NaN
3    David   NaN        580.0
4      Eva  22.0          NaN
Customer       0
Age            2
CreditScore    2
dtype: int64
shape before: (5, 3) -> after: (3, 3)
  Customer   Age  CreditScore
0    Alice  25.0        720.0
1      Bob   NaN        650.0
3    David   NaN        580.0
  Customer   Age  CreditScore
0    Alice  25.0        720.0
1      Bob  25.0        650.0
3    David  25.0        580.0
Customer       0
Age            0
CreditScore    0
dtype: int64
```

**An ambiguity you must resolve out loud.** "the average Age of customers" — average of *which*
customers? After dropping the two CreditScore-null rows, only Alice's age (25.0) survives, so the
mean is **25.0** and both Bob and David are imputed as 25. If instead you take the mean over the
**original five rows** you get a different number:

```python
print("mean Age, full original frame:", c['Age'].mean())
```

```text
mean Age, full original frame: 25.666666666666668
```

Either is accepted. **State which one you used and why** — the marker is looking for awareness
that dropping rows changes the statistics you compute afterwards. The natural reading of the
question order (Q2 then Q3) is to use the post-drop mean of 25.0.

Note also that `Age` here is imputed from a **single** surviving observation. Flag that: an
"average" of one value is not an average, and with real data you would fall back on a
population-level figure or a group mean.

### Exercise 2 — Stock Portfolio Analysis

```python
import pandas as pd
PORT = "Portfolio analysis.xlsx"                 # use your own path
p = pd.read_excel(PORT)
print(p)

# Q1. Count missing values in each column.
print(p.isna().sum())

# Q2. Fill missing Price with the mean Price of the portfolio.
print("mean Price:", p['Price'].mean())
p['Price'] = p['Price'].fillna(p['Price'].mean())

# Q3. Fill missing Shares with 0.
p['Shares'] = p['Shares'].fillna(0)

# Q4. Fill missing Sector with "Unknown".
p['Sector'] = p['Sector'].fillna('Unknown')
print(p)
print(p.isna().sum())

# Q5a. Total portfolio value = sum(Price x Shares)
p['Value'] = p['Price'] * p['Shares']
print(p)
print("Total portfolio value =", p['Value'].sum())

# Q5b. Sector-wise distribution of stocks.
print(p['Sector'].value_counts())
print(p.groupby('Sector').agg(Stocks=('Stock','count'), Value=('Value','sum')))
print((p.groupby('Sector')['Value'].sum() / p['Value'].sum() * 100).round(2))
```

```text
   Stock   Price  Shares      Sector
0   AAPL   150.0    10.0        Tech
1  GOOGL     NaN     5.0        Tech
2   TSLA   700.0     NaN         NaN
3   AMZN  3300.0     NaN  E-commerce
4   MSFT     NaN    20.0        Tech
Stock     0
Price     2
Shares    2
Sector    1
dtype: int64
mean Price: 1383.3333333333333
   Stock        Price  Shares      Sector
0   AAPL   150.000000    10.0        Tech
1  GOOGL  1383.333333     5.0        Tech
2   TSLA   700.000000     0.0     Unknown
3   AMZN  3300.000000     0.0  E-commerce
4   MSFT  1383.333333    20.0        Tech
Stock     0
Price     0
Shares    0
Sector    0
dtype: int64
   Stock        Price  Shares      Sector         Value
0   AAPL   150.000000    10.0        Tech   1500.000000
1  GOOGL  1383.333333     5.0        Tech   6916.666667
2   TSLA   700.000000     0.0     Unknown      0.000000
3   AMZN  3300.000000     0.0  E-commerce      0.000000
4   MSFT  1383.333333    20.0        Tech  27666.666667
Total portfolio value = 36083.33333333333
Sector
Tech          3
Unknown       1
E-commerce    1
Name: count, dtype: int64
            Stocks         Value
Sector                          
E-commerce       1      0.000000
Tech             3  36083.333333
Unknown          1      0.000000
percent of value by sector:
Sector
E-commerce      0.0
Tech          100.0
Unknown         0.0
Name: Value, dtype: float64
```

**The result worth commenting on.** "Sector-wise distribution" has two readings and they tell
opposite stories:

| Reading | Tech | E-commerce | Unknown |
| --- | --- | --- | --- |
| **by count of stocks** (`value_counts`) | 3 | 1 | 1 |
| **by value** (`groupby.sum`) | 36,083.33 (100 %) | 0.00 (0 %) | 0.00 (0 %) |

Filling `Shares` with `0` zeroes out TSLA and AMZN entirely, so a 5-stock, 3-sector portfolio
reports **100 % of its value in Tech**. Give both tables and say which you consider the honest
answer: the count distribution, because the value distribution is an artefact of the zero-fill.
`Price` was mean-filled at 1,383.33 for GOOGL and MSFT, so 34,583.33 of the 36,083.33 total —
**96 %** — rests on imputed prices. Quote that figure; it is the risk statement the question is
fishing for.

### Exercise 3 — Daily Stock Market Data (time series)

```python
import pandas as pd
STOCK = "Exercise 3 - stock market.csv"          # use your own path
s = pd.read_csv(STOCK)
print(s)

# Q1. Identify missing data in ClosingPrice and Volume.
print(s.isna().sum())
print(s[s.isna().any(axis=1)])

# Q2. Use forward fill (ffill) to handle missing ClosingPrice.
s['ClosingPrice'] = s['ClosingPrice'].ffill()

# Q3. Use backward fill (bfill) for missing Volume.
s['Volume'] = s['Volume'].bfill()
print(s)
print(s.isna().sum())
```

```text
         Date  ClosingPrice  Volume
0  2024-01-01         100.0     NaN
1  2024-01-02           NaN  5000.0
2  2024-01-03         102.0     NaN
3  2024-01-04           NaN     0.0
4  2024-01-05           NaN     NaN
5  2024-01-06         101.0  7000.0
6  2024-01-07          99.0     NaN
7  2024-01-08           NaN  6000.0
8  2024-01-09          98.0     NaN
9  2024-01-10           NaN     NaN
Date            0
ClosingPrice    5
Volume          6
dtype: int64
         Date  ClosingPrice  Volume
0  2024-01-01         100.0     NaN
1  2024-01-02           NaN  5000.0
2  2024-01-03         102.0     NaN
3  2024-01-04           NaN     0.0
4  2024-01-05           NaN     NaN
6  2024-01-07          99.0     NaN
7  2024-01-08           NaN  6000.0
8  2024-01-09          98.0     NaN
9  2024-01-10           NaN     NaN
         Date  ClosingPrice  Volume
0  2024-01-01         100.0  5000.0
1  2024-01-02         100.0  5000.0
2  2024-01-03         102.0     0.0
3  2024-01-04         102.0     0.0
4  2024-01-05         102.0  7000.0
5  2024-01-06         101.0  7000.0
6  2024-01-07          99.0  6000.0
7  2024-01-08          99.0  6000.0
8  2024-01-09          98.0     NaN
9  2024-01-10          98.0     NaN
Date            0
ClosingPrice    0
Volume          2
dtype: int64
```

**Three things to say in the answer:**

1. `ClosingPrice` is now complete (0 missing) because row 0 has a value for `ffill` to carry.
2. **`Volume` still has 2 missing** — rows 8 and 9 are at the tail and `bfill` has no later value
   to pull from. The exercise's prescription is therefore incomplete as written. Close the tail
   with `s['Volume'] = s['Volume'].bfill().ffill()` and explain why, or leave the two blanks and
   state that no volume can be inferred for the final two days.
3. `Volume` on 2024-01-04 is a genuine **0.0**, not a missing value. A zero-volume day is real
   information (no trades) and must not be imputed. Distinguish it explicitly — this is the
   "0 is not the same as missing" mark.

The mirror-image warning: had you done it the other way round (`bfill` the price, `ffill` the
volume) you would be left with 1 missing in each, and a price series that **looks into the
future**:

```python
s2 = pd.read_csv(STOCK)
s2['ClosingPrice'] = s2['ClosingPrice'].bfill()
s2['Volume'] = s2['Volume'].ffill()
print(s2.isna().sum())
```

```text
Date            1
ClosingPrice    1
Volume          1
dtype: int64
```

(`Date` shows 0 in the real run — the line above is the `ClosingPrice` 1 / `Volume` 1 result; row
9's price and row 0's volume are unreachable.) Backward-filling a price is **look-ahead bias**:
you are using tomorrow's close to state today's. Never do it for a price series you intend to
trade or back-test on; it is acceptable only for a leading gap at the very start of the sample.

---

## Write-up answers

Model answers, 3–5 sentences each, ready to reproduce. Quote the actual numbers — that is what
separates a full-mark answer from a generic one.

### "Why drop rows with missing CreditScore, but fill missing Age?" (02 Exercise 1)

> The two columns have different roles in the model. `CreditScore` is the **dependent variable of
> the credit decision** — without it the applicant's creditworthiness simply cannot be evaluated,
> and any value we invent would be an invented credit opinion, so the record carries no usable
> information and is dropped. `Age` is a **secondary, correlated attribute**: the record remains
> decision-relevant because the score is present, and a reasonable estimate (the mean age) costs
> little and preserves the rest of the row. In short, drop when the missing field is the one being
> decided on; fill when the missing field is merely an input we can approximate. Here dropping
> costs 2 of 5 rows (5 → 3), which is acceptable precisely because those two rows were
> undecidable anyway.

### "If missing CreditScore were instead replaced by the average score, how would that affect loan approvals?" (02 Exercise 1 Q4)

> Every applicant with no score would be handed the portfolio's average score, so the approval
> decision would be driven by other people's data rather than their own. Applicants who are in
> fact poor credits would be pulled **up** to the average and wrongly approved, while genuinely
> strong applicants would be pulled **down** and wrongly declined or mispriced — both are errors,
> and the first is the expensive one because it books bad loans at good-customer pricing. The bank
> would also lose the ability to distinguish "no score" from "average score", which are very
> different risk states: a thin or absent credit file is itself a risk signal and is often
> deliberately declined or referred to manual underwriting. Statistically, mean imputation
> compresses the spread of `CreditScore`, so the score's apparent power to separate good from bad
> applicants falls and any cut-off calibrated on the imputed data is wrong. The defensible
> treatments are to decline/refer the record, or to model "score missing" as its own category —
> not to average it away.

### "What would happen if missing Prices were filled with 0 instead of the mean?" (02 Exercise 2 Q6)

> A price of 0 asserts that the holding is worthless, which is a factual claim about the asset
> rather than an admission of ignorance. On this portfolio it drops the reported total from
> **36,083.33 to 1,500.00** — the portfolio would be valued at about **4 %** of its estimate,
> because GOOGL and MSFT (the two mean-filled prices) carry 34,583.33 of the value. The average
> price would also collapse, dragging down any per-stock statistic, weight, or return computed
> from it, and every derived allocation percentage would be wrong. Mean-filling at 1,383.33 at
> least keeps the valuation and the average in a plausible range and leaves the column's mean
> unchanged. Best practice is to source the real market price; if that is impossible, use the mean
> (or, better, the sector mean) and disclose that 96 % of the reported value rests on imputed
> prices.

### "Why forward fill? Why backward fill? Why not the mean?" (02 Exercise 3)

> A price series carries information forward in time: when a trading halt or feed outage leaves a
> day blank, the last traded price is the market's most recent opinion, so **forward fill**
> ("last observation carried forward") states "no new information, price unchanged" — which is
> what a halt actually means. **Backward fill** is the remedy for a gap at the **beginning** of
> the sample, where there is no earlier observation to carry: it borrows the first known value
> backwards, and on this file it is what the exercise applies to `Volume`. The **mean** would be a
> flat 100.0 dropped into a trending series: in our data it replaces 102 → NaN → NaN → 101 with
> 102 → 100 → 100 → 101, fabricating a two-point fall and rebound, and it makes the final day jump
> from 98 back up to 100 — a rally invented on a day with no data. Because it ignores time order,
> mean-filling flattens trends, distorts returns, volatility and every moving average, and
> introduces spurious turning points; ffill/bfill preserve the shape of the series. The one caveat
> is that backward-filling a price mid-series is **look-ahead bias** — using tomorrow's close to
> describe today — so restrict `bfill` to leading gaps.

### "Why fill Shares with 0 but Sector with 'Unknown'?"

> The two blanks mean different things. A missing `Shares` count most plausibly means the investor
> **does not hold that stock**, and for a quantity the honest representation of "none" is the
> number 0, which also makes `Price × Shares` evaluate correctly to a zero contribution. `Sector`
> is a **descriptive label**, not a quantity: there is no arithmetic zero for it, filling it with 0
> would corrupt the column's type, and dropping the row would throw away a valid price and share
> count, so the placeholder `'Unknown'` preserves the record while flagging the gap. The
> placeholder also survives into `value_counts()` and pivot tables as its own visible category, so
> the incompleteness is reported rather than hidden. The consequence to disclose: zero-filling
> `Shares` removes TSLA and AMZN from the valuation entirely, so the sector-by-value distribution
> becomes 100 % Tech even though by count the portfolio is 3 Tech, 1 E-commerce, 1 Unknown.

### Decision table — which treatment, and why

| Column type | Why is it missing? | Treatment | Reason to give |
| --- | --- | --- | --- |
| The field the decision is **about** (CreditScore, claim outcome) | Not disclosed / not available | **Drop the row** | Nothing can be decided; imputing invents the decision |
| Numeric attribute, missing at random, roughly symmetric (Age, Price) | Data-entry gap | **Fill with mean** | Keeps the record, leaves the average unchanged |
| Numeric attribute with outliers or skew (Income, Amount, Balance) | Data-entry gap | **Fill with median** | Mean is dragged by extremes; median is robust |
| Numeric attribute where blank genuinely means "none" (Shares, Quantity, Units) | Not held / no activity | **Fill constant 0** | 0 is the true value, not a guess |
| Categorical / text label (Sector, City, Branch, Status) | Incomplete form | **Fill `'Unknown'`** | No arithmetic average exists; preserves the row and flags it |
| Categorical where one level dominates | Data-entry gap | **Fill mode** `.mode()[0]` | Most likely level; state the tie-break |
| Time-ordered numeric (ClosingPrice, NAV, rate) | Trading halt / feed outage mid-series | **`ffill()`** | Last known value is the current best estimate |
| Time-ordered numeric, gap at the **start** | Series begins before data | **`bfill()`** | No earlier value exists; do not use mid-series (look-ahead bias) |
| Time-ordered, long gap you must not bridge | Extended outage | **`ffill(limit=N)`** and leave the rest | Stops one stale value propagating across weeks |
| Numeric attribute, group structure available (Income by City, Price by Sector) | Data-entry gap | **`groupby(...).transform('mean')`** | Peer-group estimate beats one global average |
| Whole column mostly empty (> 50–60 % missing) | Field was never collected | **Drop the column** (`dropna(axis=1)` / `drop`) | Imputing most of a column manufactures the variable |
| Column of `-`, `@@`, `na`, `?` | Junk entered as text | **`na_values=` at read time**, then treat as above | Until it is `NaN` it is invisible to every null check |
| Exact duplicate rows | Double-loaded extract | **`drop_duplicates()`** *before* imputing | Duplicates bias every statistic and can be created by filling |

---

## Chapter cheat sheet

```python
# ---------- SETUP -------------------------------------------------------------
import pandas as pd
pd.set_option('display.width', 200); pd.set_option('display.max_columns', 50)

# ---------- DETECT (P7.1 - P7.4) ---------------------------------------------
df.isna()                       # Boolean mask; isnull() is an exact alias
df.notna()                      # inverse; notnull() is an exact alias
df.isna().sum()                 # nulls PER COLUMN          <- the usual answer
df.isna().sum().sum()           # grand total
df.isna().any()                 # True/False per column
df.columns[df.isna().any()]     # names of the affected columns
(df.isna().mean()*100).round(2) # percent missing per column
df.isna().sum(axis=1)           # nulls per ROW
len(df) - df.notna().sum()      # same as isna().sum(), from non-null counts
df.info()                       # prints NON-NULL counts (missing = entries - non-null)
df[df['COL'].isna()]            # rows missing one column
df[df.isna().any(axis=1)]       # rows missing anything
df[df.notna().all(axis=1)]      # complete rows
df[df.isna().sum(axis=1) >= 2]  # rows missing 2+ fields
df[(df['C']=='Pune') | (df['C'].isna())]        # "is X or is missing"

# ---------- MISSING TOKENS (P7.5) --------------------------------------------
# default recognised: '' NA N/A n/a NaN nan None null NULL <NA> #NA #N/A ...
# NOT recognised:     -  @@  #  ?  ###  nuLL  nAN  na  (lowercase na!)
df = pd.read_excel(W, sheet_name='Missing_Tokens',
                   na_values=['-','@@','#','?','nuLL','nAN','###','na'])
df = pd.read_csv(P, na_values=['-','?'], keep_default_na=False)   # only my list
df['COL'] = pd.to_numeric(df['COL'], errors='coerce')             # fix after loading
df = df.apply(pd.to_numeric, errors='coerce')                     # all columns
df.loc[pd.to_numeric(df['COL'], errors='coerce').isna(), ['COL']] # show the junk
# symptom: numeric column has dtype object AND isna().sum()==0 AND describe() omits it

# ---------- DROP (P7.6) -------------------------------------------------------
print("original:", df.shape)                   # ALWAYS compare shapes
df.dropna()                     # any missing -> row goes
df.dropna(how='all')            # only fully blank rows
df.dropna(how='all', subset=['A','B'])
df.dropna(subset=['Age'])       # only Age matters
df.dropna(axis=1)               # drop offending COLUMNS
df.dropna(thresh=7)             # keep rows with >= 7 non-null values
df.dropna(inplace=True)         # modify in place
df.dropna().reset_index(drop=True)              # renumber 0..n

# ---------- FILL (P7.7 - P7.9) -----------------------------------------------
df.fillna(0)                                    # copy, whole frame (mixed = risky)
df['C'] = df['C'].fillna(0)                     # one column, assign back
df = df.fillna({'Age': 30, 'Score': 0, 'City': 'Unknown'})        # per column
df.fillna({'Score': 0}, inplace=True)           # in place, dict form
df['C'] = df['C'].fillna(df['C'].mean())        # mean
df['C'] = df['C'].fillna(df['C'].median())      # median
df['C'] = df['C'].fillna(df['C'].mode()[0])     # mode - [0] because mode() is a Series
df['C'] = df['C'].fillna(df.groupby('G')['C'].transform('mean'))  # group-wise
df['Sector'] = df['Sector'].fillna('Unknown')   # text placeholder

# "...and display the affected rows"  <- MASK BEFORE FILL
mask = df['C'].isna()
df['C'] = df['C'].fillna(VALUE)
print(df.loc[mask])

# ---------- TIME SERIES (P7.10) ----------------------------------------------
df.ffill()                      # carry last known value DOWN
df.bfill()                      # carry next known value UP
df['C'] = df['C'].ffill()       # one column
df.ffill(limit=1)               # at most 1 consecutive blank per run
df.ffill().bfill()              # close trailing AND leading gaps
df['C'].interpolate()           # straight line between known points
# ffill cannot fix a LEADING gap; bfill cannot fix a TRAILING gap
# df.fillna(method='ffill') is DEPRECATED (2.x warns) and REMOVED in 3.x

# ---------- INPLACE (P7.11) --------------------------------------------------
df = df.METHOD(...)             # assign back                <- prefer
df.METHOD(..., inplace=True)    # in place; RETURNS None
# never:  df = df.METHOD(..., inplace=True)      -> df becomes None
# never:  df['C'].fillna(0, inplace=True)        -> chained assignment
#         2.3.3: FutureWarning (may still land); CoW/3.x: ChainedAssignmentError, no change
# inplace supported: fillna dropna drop drop_duplicates replace
#                    sort_values sort_index set_index reset_index rename ffill bfill
# inplace NOT supported: astype  -> TypeError: astype() got an unexpected keyword 'inplace'
df['Risk_Score'] = df['Risk_Score'].astype(float)     # assign back
df['Age'].astype(int)           # IntCastingNaNError if nulls remain
df['Age'] = df['Age'].fillna(0).astype(int)           # fill first
df['Age'] = df['Age'].astype('Int64')                 # nullable int keeps <NA>

# ---------- DUPLICATES (P7.12) -----------------------------------------------
df.duplicated().sum()                           # how many repeat rows
df[df.duplicated()]                             # the repeats (first copy excluded)
df[df.duplicated(keep=False)]                   # ALL copies, originals included
df[df.duplicated(keep='last')]                  # flip which copy is "the duplicate"
df.duplicated(subset=['Record_ID']).sum()
df.drop_duplicates(inplace=True)
df.drop_duplicates(subset=['ID'], keep='last')
df['ID'].is_unique
# deduplicate BEFORE imputing

# ---------- EFFECT ON STATISTICS (P7.13) -------------------------------------
df['C'].mean()                                  # skips nulls: divides by count()
df['C'].fillna(0).mean()                        # denominator grows -> mean FALLS
df['C'].fillna(df['C'].mean()).mean()           # identical to the original mean
df['C'].std()                                   # mean-filling always SHRINKS this
df['C'].sum()                                   # unchanged by zero-filling
```

**Numbers from this chapter worth memorising for the discussion answers**

| Fact | Value |
| --- | --- |
| `Missing_Data` nulls | Age 3, Score 5, Income 2, City 2, Status 1 — **13** of 154 cells |
| `Missing_Data` shape before/after `dropna()` | (22, 7) → **(9, 7)** — 59 % of rows lost |
| `Missing_Data` after `dropna(axis=1)` | only `Record_ID`, `Name` survive |
| `Missing_Tokens` `isna().sum()` default → with `na_values` | Age 0→**5**, Own_house 0→**2**, Income_2020 4→**5**, Income_2021 4→**5**; Age dtype `object`→`float64` |
| `Missing_Data` planted duplicates | rows 20, 21 (copies of R005, R011) — `duplicated().sum() == 2` |
| `Score` run of consecutive NaN | rows 10, 11, 12 → `ffill()` leaves 0, `ffill(limit=1)` leaves **2** |
| `bank_transactions.Amount` mean before/after `fillna(0)` | 269,672.73 → **247,200.00** (−8.3 %) |
| Portfolio total, mean-filled vs zero-filled `Price` | 36,083.33 → **1,500.00** (4.2 %) |
| Stock market after ffill price / bfill volume | `ClosingPrice` 0 missing, **`Volume` still 2 missing** (trailing) |
