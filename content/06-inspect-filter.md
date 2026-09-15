---
id: 06-inspect-filter
part: "Part II — Pandas Foundations"
title: "Inspecting, Selecting Columns and Filtering Rows"
blurb: "The seven-line opener that describes any new DataFrame, plus every column-selection and boolean-filter form the exam asks for."
order: 60
covers:
  - "Session 13 — Exercises 33–45"
  - "01 Basics / Exercise 1 — Bank Transactions Q1–Q9"
  - "01 Basics / Exercise 2 — Loan Applicants Q1–Q8, Q11"
  - "01 Basics / Exercise 3 — Portfolio Holdings Q1–Q7, Q10"
  - "Working with Dataframes — the 42-function reference table"
datafiles:
  - "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
  - "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv"
  - "Pandas exercises/01 Basics/Exercise 2 - Loan Applicants/loan_applicants.csv"
  - "Pandas exercises/01 Basics/Exercise 3 - Portfolio Holdings/portfolio_holdings.xlsx"
patterns:
  - id: P6.1
    title: "The seven-line inspection opener"
    phrasings:
      - "Load the dataset and display the first 5 and last 5 rows"
      - "Display the first five rows and then the last five rows"
      - "Find the total number of rows and columns, and list all column names"
      - "Display the DataFrame shape and the column names"
      - "Load the dataset and display first and last few rows"
      - "Show the shape and column names"
      - "inspect the data before analysis"
  - id: P6.2
    title: "Read info() — which columns have missing values"
    phrasings:
      - "Show general info and data types for each column"
      - "Display general information and the data type of each column"
      - "Display info and dtypes. Which columns have missing values?"
      - "Use info() to compare non-null counts"
      - "how many non-null values does each column have"
      - "which columns are incomplete"
  - id: P6.3
    title: "dtypes — identify the numeric columns"
    phrasings:
      - "Show general info and data types for each column. Identify numeric columns"
      - "identify the numeric columns"
      - "what is the data type of each column"
      - "which columns are stored as text"
      - "why is CreditScore a float and not an integer"
  - id: P6.4
    title: "describe() — default, custom percentiles, include='all'"
    phrasings:
      - "Generate descriptive statistics"
      - "Generate descriptive statistics with custom percentiles 0.30, 0.70 and 0.80"
      - "Display descriptive statistics for the numeric columns. Add percentiles at 0.3, 0.7, 0.9"
      - "produce a statistical summary of the data"
      - "summarise the categorical columns too"
      - "what is the mean, median and standard deviation of Balance"
  - id: P6.5
    title: "describe() on a chosen subset of columns"
    phrasings:
      - "Produce descriptive statistics for Income, CreditScore, and LoanAmountRequested, including percentiles at 0.25, 0.5, 0.75, 0.9"
      - "descriptive statistics for only these three columns"
      - "summary statistics for Quantity and Price only"
      - "describe the two numeric columns with the 90th percentile"
  - id: P6.6
    title: "Select one column — Series vs one-column DataFrame"
    phrasings:
      - "Select the Name column as a single Series"
      - "display the Amount column"
      - "extract the Branch column"
      - "show the Name column as a DataFrame"
      - "what is the difference between df['Name'] and df[['Name']]"
  - id: P6.7
    title: "Select several named columns in a given order"
    phrasings:
      - "Select Name and Age together as a DataFrame"
      - "Show only the Date, Branch, TxnType, and Amount columns"
      - "Select only Name, City, and CreditScore and show first 7 rows"
      - "From Equity, display only InstrumentName, Quantity, Price"
      - "display these columns in this order"
      - "Read only selected columns from Equity and show first 3 rows"
  - id: P6.8
    title: "Filter rows on one condition"
    phrasings:
      - "Filter customers whose Age is greater than 30"
      - "Show all transactions where Amount is missing"
      - "filter rows where Balance exceeds 500000"
      - "how many customers are older than 30"
      - "display records with a Risk_Score above 700"
  - id: P6.9
    title: "Combine conditions with &, | and ~"
    phrasings:
      - "Filter customers whose Age is greater than 25 AND City is Goa"
      - "Filter customers who are either in Goa OR Mumbai"
      - "Filter customers who are NOT in the Retail segment"
      - "filter rows that satisfy both conditions"
      - "select all rows except the Retail segment"
      - "why does using 'and' raise an error"
  - id: P6.10
    title: "isin() and ~isin() for list membership"
    phrasings:
      - "filter customers in Goa, Mumbai or Pune"
      - "select transactions from these three branches"
      - "exclude the ATM and UPI channels"
      - "filter rows whose Rating is AAA or AA"
      - "show applicants not from Delhi or Kolkata"
  - id: P6.11
    title: "Threshold plus category plus missing value in one filter"
    phrasings:
      - "Filter all Credit transactions with Amount >= 200000"
      - "Filter transactions from Pune branch or where Branch is missing"
      - "Filter applicants with CreditScore >= 750 and Income >= 1000000"
      - "Filter applicants where Income is missing or CreditScore < 650"
      - "From Equity, filter rows where Quantity is missing or Quantity <= 100"
      - "From Debt, display rows with Rating == \"AAA\" and Price >= 99"
  - id: P6.12
    title: "Filter rows and pick columns in one expression"
    phrasings:
      - "show the Name and City of applicants with income above 1000000"
      - "display only TxnID and Amount for Credit transactions"
      - "filter the rows and display only two columns"
      - "why is .loc preferred over df[mask][cols]"
  - id: P6.13
    title: "First N values matching a condition, without sorting"
    phrasings:
      - "Show first 5 applicant names where LoanAmountRequested > 2000000 (without sorting)"
      - "display the first three cities of customers with Balance above 600000"
      - "list the first 5 names meeting the condition in file order"
      - "why does the question say without sorting"
  - id: P6.14
    title: "Inspect every sheet of a workbook"
    phrasings:
      - "Read the Equity sheet and show first few rows, info, and data types"
      - "Read the Debt sheet and show last few rows and shape"
      - "Read all sheets into a dictionary and print each sheet's name and shape"
      - "Read every sheet in the workbook at once"
      - "Count missing values per column for both sheets"
  - id: P6.15
    title: "Count things: value_counts, nunique, unique, count vs len"
    phrasings:
      - "count the number of customers in each city"
      - "how many distinct branches are there"
      - "list the unique transaction channels"
      - "Count missing values per column"
      - "how many rows does the dataset have"
      - "how many non-null Amount values are there"
  - id: P6.16
    title: "Quick aggregates from the 42-function table"
    phrasings:
      - "find the mean, median and standard deviation of Balance"
      - "what is the total and maximum Amount"
      - "display the correlation matrix"
      - "transpose the DataFrame"
      - "show the memory used by each column"
      - "take a random sample of 5 rows"
      - "rename the Balance column to Account_Balance"
      - "drop the Salary column"
  - id: P6.17
    title: "axis=0 versus axis=1"
    phrasings:
      - "calculate column totals for Math, Science and English"
      - "Calculate each student's total across Math, Science and English"
      - "sum down the rows versus across the columns"
      - "why is index_col=0 needed here"
      - "what does the axis parameter mean"
  - id: P6.18
    title: "Fix a DD-MM-YYYY date column"
    phrasings:
      - "parse the Date column as a date"
      - "the Date column is read as object, convert it"
      - "find the earliest and latest transaction date"
      - "the dates are in DD-MM-YYYY format"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| [P6.1](#p61--the-seven-line-inspection-opener) | "Load the data and show first/last rows, shape, columns" |
| [P6.2](#p62--read-info--which-columns-have-missing-values) | "Show info" / "which columns have missing values?" |
| [P6.3](#p63--dtypes--identify-the-numeric-columns) | "Identify the numeric columns" / "what dtype is this?" |
| [P6.4](#p64--describe--default-custom-percentiles-includeall) | "Descriptive statistics", with or without custom percentiles |
| [P6.5](#p65--describe-on-a-chosen-subset-of-columns) | "Descriptive statistics for **these** columns only" |
| [P6.6](#p66--select-one-column--series-vs-one-column-dataframe) | "Select the Name column as a Series" |
| [P6.7](#p67--select-several-named-columns-in-a-given-order) | "Show only columns A, B, C" |
| [P6.8](#p68--filter-rows-on-one-condition) | "Filter rows where Age > 30" |
| [P6.9](#p69--combine-conditions-with---and-) | AND / OR / NOT conditions |
| [P6.10](#p610--isin-and-isin-for-list-membership) | "in this list of categories" / "not in this list" |
| [P6.11](#p611--threshold-plus-category-plus-missing-value-in-one-filter) | The 01-Basics filter questions, including `isna()` inside a filter |
| [P6.12](#p612--filter-rows-and-pick-columns-in-one-expression) | Filter and select at the same time |
| [P6.13](#p613--first-n-values-matching-a-condition-without-sorting) | "First 5 names where … (without sorting)" |
| [P6.14](#p614--inspect-every-sheet-of-a-workbook) | Multi-sheet Excel: name + shape of each sheet |
| [P6.15](#p615--count-things-value_counts-nunique-unique-count-vs-len) | "How many" / "count" / "distinct" / "list unique" |
| [P6.16](#p616--quick-aggregates-from-the-42-function-table) | Any single row of the examiner's 42-function table |
| [P6.17](#p617--axis0-versus-axis1) | Column totals vs row totals |
| [P6.18](#p618--fix-a-dd-mm-yyyy-date-column) | Date column read as `object`, dates in `DD-MM-YYYY` |

## Setup used by every snippet in this chapter

```python
import pandas as pd

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"          # swap in your own path in the exam
W  = BASE + "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
BT = BASE + "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv"
LA = BASE + "Pandas exercises/01 Basics/Exercise 2 - Loan Applicants/loan_applicants.csv"
PH = BASE + "Pandas exercises/01 Basics/Exercise 3 - Portfolio Holdings/portfolio_holdings.xlsx"

pd.set_option("display.width", 200)        # optional: stops pandas printing "..." for wide frames
pd.set_option("display.max_columns", None) # optional, but every output below was produced with it
```

Without those two `set_option` lines a 9-column frame prints as
`Customer_ID  Name  Age  ...  Risk_Score  Active  Join_Date` plus `[5 rows x 9 columns]`.
That is not an error and costs no marks — but the outputs pasted below are the full-width versions.

## Question verb → code

| The question says | Write this |
| --- | --- |
| display / show the first rows | `df.head()` or `df.head(N)` |
| display the last rows | `df.tail()` or `df.tail(N)` |
| total number of rows and columns | `df.shape` → `(rows, cols)` |
| how many rows | `len(df)` or `df.shape[0]` |
| list all column names | `df.columns` (or `list(df.columns)` for a clean list) |
| show general info | `df.info()` |
| data type of each column | `df.dtypes` |
| identify the numeric columns | read `df.dtypes`, or `df.select_dtypes(include="number").columns` |
| which columns have missing values | `df.info()` non-null counts, or `df.isna().sum()` |
| count missing values per column | `df.isna().sum()` |
| descriptive statistics | `df.describe()` |
| descriptive statistics with percentiles at … | `df.describe(percentiles=[0.3, 0.7, 0.9])` |
| statistics for these columns only | `df[["A","B"]].describe()` |
| select / extract one column | `df["COL"]` (Series) |
| select one column as a DataFrame | `df[["COL"]]` |
| show only columns A, B, C | `df[["A","B","C"]]` |
| filter / select rows where … | `df[df["COL"] > VALUE]` |
| filter … and … | `df[(c1) & (c2)]` |
| filter … or … | `df[(c1) \| (c2)]` |
| filter NOT … / all except … | `df[~(c1)]` |
| where COL is missing | `df[df["COL"].isna()]` |
| where COL is one of … | `df[df["COL"].isin([...])]` |
| how many rows satisfy … | `(df["COL"] > V).sum()` or `df[mask].shape[0]` |
| count values in each category | `df["COL"].value_counts()` |
| how many distinct / unique | `df["COL"].nunique()` |
| list the unique values | `df["COL"].unique()` |
| first N names where … | `df.loc[df["COL"] > V, "Name"].head(N)` |
| column totals | `df.sum(axis=0)` |
| each row's total | `df.sum(axis=1)` |
| each sheet's name and shape | `pd.read_excel(F, sheet_name=None)` then loop |

---

## P6.1 — The seven-line inspection opener

**Exam phrasings**

- "Load the dataset and display the first 5 and last 5 rows."
- "Display the first five rows and then the last five rows."
- "Find the total number of rows and columns, and list all column names."
- "Display the DataFrame shape and the column names."
- "Load the dataset and display first and last few rows."
- "Show the shape and column names."

**Core idea.** Every "inspect the data" question is answered by the same seven calls. Learn
them as a block and write whichever subset the question asks for. `head`/`tail` default to
5 rows; pass a number to change that. `shape` and `columns` are **attributes** — no
parentheses. `info()` and `describe()` are **methods** — parentheses required.

**Template**

```python
df.head()        # or df.head(N)
df.tail()        # or df.tail(N)
df.shape         # (rows, columns) — no ()
df.columns       # column labels — no ()
df.dtypes        # type per column — no ()
df.info()        # structure + non-nulls + memory
df.describe()    # numeric summary
```

**Worked** (Session 13 Ex 33 and Ex 37, `Customer_Data`)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
print(df.head())
```

```text
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes 2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No 2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes 2024-06-02
3        C004   Meera Iyer   34  Bengaluru      SME   25706.89         392    Yes 2024-08-02
4        C005  Rohan Desai   30     Mumbai      SME  303206.73         726     No 2024-06-29
```

```python
print(df.head(3))
```

```text
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes 2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No 2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes 2024-06-02
```

```python
print(df.tail())
```

```text
   Customer_ID           Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
25        C026   Leena Thomas   28        Goa      SME  636829.40         529     No 2024-12-06
26        C027   Omkar Sawant   52     Mumbai  Premium   39194.67         780     No 2025-04-29
27        C028   Kavya Pillai   31    Kolkata   Retail   35264.58         431    Yes 2024-08-01
28        C029  Harsh Agarwal   25        Goa   Retail  691394.29         820     No 2025-06-23
29        C030     Zoya Mirza   25  Hyderabad  Premium   35859.42         569    Yes 2025-01-20
```

```python
print(df.tail(2))
```

```text
   Customer_ID           Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
28        C029  Harsh Agarwal   25        Goa   Retail  691394.29         820     No 2025-06-23
29        C030     Zoya Mirza   25  Hyderabad  Premium   35859.42         569    Yes 2025-01-20
```

```python
print(df.shape)
print(df.columns)
print(list(df.columns))
```

```text
(30, 9)
Index(['Customer_ID', 'Name', 'Age', 'City', 'Segment', 'Balance', 'Risk_Score', 'Active', 'Join_Date'], dtype='object')
['Customer_ID', 'Name', 'Age', 'City', 'Segment', 'Balance', 'Risk_Score', 'Active', 'Join_Date']
```

**Worked** (01 Basics Ex 1 Q1 and Q2, Bank Transactions)

```python
bank = pd.read_csv(BT)
print(bank.head(5))
print(bank.tail(5))
r, c = bank.shape
print(f"The dataset has {r} rows and {c} columns.")
print(bank.columns.tolist())
```

```text
   TxnID        Date  AccountID   Branch TxnType    Amount Channel          Remarks
0   5001  01-07-2025        101   Mumbai  Credit  250000.0    NEFT           Salary
1   5002  01-07-2025        101     Pune   Debit   12000.0     ATM  Cash withdrawal
2   5003  02-07-2025        102    Delhi   Debit    4500.0     UPI     Bill payment
3   5004  02-07-2025        103   Mumbai  Credit  510000.0    RTGS    Sale proceeds
4   5005  03-07-2025        104  Chennai  Credit   15000.0     UPI           Refund
    TxnID        Date  AccountID   Branch TxnType   Amount Channel   Remarks
7    5008  04-07-2025        106    Delhi   Debit   2200.0     UPI  Recharge
8    5009  04-07-2025        101  Chennai  Credit  90000.0    NEFT     Bonus
9    5010  05-07-2025        104   Mumbai   Debit   1500.0     ATM       Fee
10   5011  05-07-2025        107     Pune  Credit  78000.0     UPI  Dividend
11   5012  06-07-2025        108      NaN   Debit   3200.0     ATM   Cash wd
The dataset has 12 rows and 8 columns.
['TxnID', 'Date', 'AccountID', 'Branch', 'TxnType', 'Amount', 'Channel', 'Remarks']
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "first 7 rows" | `df.head(7)` |
| "last 3 rows" | `df.tail(3)` |
| "first and last few rows" (no number) | `df.head()` and `df.tail()` — 5 each is "a few" |
| "how many rows" only | `df.shape[0]` or `len(df)` |
| "how many columns" only | `df.shape[1]` or `len(df.columns)` |
| "column names as a Python list" | `df.columns.tolist()` |
| "show the row labels / index" | `df.index` |
| "first 5 rows of one column" | `df["Amount"].head()` — works on a Series too |
| "a random 5 rows instead of the first 5" | `df.sample(5)` |

**Traps**

- `df.shape()` → `TypeError: 'tuple' object is not callable`. `shape`, `columns`, `dtypes`,
  `index` take **no** parentheses. `head`, `tail`, `info`, `describe` **do**.
- `df.info()` prints and returns `None`. Never write `print(df.info())` — you get the report
  followed by a stray `None`. Just write `df.info()`.
- `head()`/`tail()` return a **copy**. Editing the result does not change `df`.
- Negative arguments work but are rarely asked: `df.head(-25)` drops the last 25 rows.
- In a script (not a notebook) a bare `df.head()` prints nothing. Wrap it in `print(...)`.

**Drill**

1. Load `loan_applicants.csv`, print the shape, the column list, the first 4 rows and the last 2 rows.

<details><summary>Answer</summary>

```python
df = pd.read_csv(LA)
print(df.shape)
print(df.columns.tolist())
print(df.head(4))
print(df.tail(2))
```

```text
(12, 7)
['ApplicantID', 'Name', 'City', 'Income', 'CreditScore', 'LoanAmountRequested', 'EmploymentType']
```

</details>

---

## P6.2 — Read info() — which columns have missing values

**Exam phrasings**

- "Show general info and data types for each column."
- "Display general information and the data type of each column."
- "Display info and dtypes. Which columns have missing values?"
- "Use info() to compare non-null counts."
- "how many non-null values does each column have"
- "which columns are incomplete"

**Core idea.** `info()` is a five-part report. Read it in this order and you can answer any
"which columns are incomplete / what type is this / how big is it" question without another
line of code.

**Template**

```python
df.info()
```

**Worked** (Session 13 Ex 34, `Customer_Data`)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
df.info()
```

```text
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 30 entries, 0 to 29
Data columns (total 9 columns):
 #   Column       Non-Null Count  Dtype         
---  ------       --------------  -----         
 0   Customer_ID  30 non-null     object        
 1   Name         30 non-null     object        
 2   Age          30 non-null     int64         
 3   City         30 non-null     object        
 4   Segment      30 non-null     object        
 5   Balance      30 non-null     float64       
 6   Risk_Score   30 non-null     int64         
 7   Active       30 non-null     object        
 8   Join_Date    30 non-null     datetime64[ns]
dtypes: datetime64[ns](1), float64(1), int64(2), object(5)
memory usage: 2.2+ KB
```

**How to read it — memorise these five lines**

| Line in the output | What it tells the examiner you know |
| --- | --- |
| `RangeIndex: 30 entries, 0 to 29` | 30 rows; index is the default 0-based integer index |
| `Data columns (total 9 columns)` | 9 columns |
| `Non-Null Count` column | non-missing values per column. **30 non-null = complete.** Anything below 30 has missing values |
| `Dtype` column | storage type per column (see P6.3) |
| `dtypes: ... object(5)` | how many columns of each type |
| `memory usage: 2.2+ KB` | RAM used. The `+` means text columns are only counted by pointer; use `memory_usage(deep=True)` for the true size |

Here every column reads `30 non-null` against `30 entries`, so **`Customer_Data` has no
missing values**.

**Worked — the actual exam question** (01 Basics Ex 2 Q3, Loan Applicants)

```python
loans = pd.read_csv(LA)
loans.info()
```

```text
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 12 entries, 0 to 11
Data columns (total 7 columns):
 #   Column               Non-Null Count  Dtype  
---  ------               --------------  -----  
 0   ApplicantID          12 non-null     int64  
 1   Name                 12 non-null     object 
 2   City                 12 non-null     object 
 3   Income               10 non-null     float64
 4   CreditScore          10 non-null     float64
 5   LoanAmountRequested  12 non-null     int64  
 6   EmploymentType       12 non-null     object 
dtypes: float64(2), int64(2), object(3)
memory usage: 800.0+ bytes
```

Model answer: *"There are 12 rows. `Income` and `CreditScore` show only 10 non-null values
each, so each is missing 2 values. Every other column is 12 non-null and therefore complete."*

Back it up with the direct count:

```python
print(loans.isna().sum())
print(loans.columns[loans.isna().any()].tolist())
```

```text
ApplicantID            0
Name                   0
City                   0
Income                 2
CreditScore            2
LoanAmountRequested    0
EmploymentType         0
dtype: int64
['Income', 'CreditScore']
```

**Worked** (01 Basics Ex 1 Q3 and Q8, Bank Transactions — three incomplete columns)

```python
bank = pd.read_csv(BT)
bank.info()
print(bank.isna().sum())
```

```text
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 12 entries, 0 to 11
Data columns (total 8 columns):
 #   Column     Non-Null Count  Dtype  
---  ------     --------------  -----  
 0   TxnID      12 non-null     int64  
 1   Date       12 non-null     object 
 2   AccountID  12 non-null     int64  
 3   Branch     10 non-null     object 
 4   TxnType    12 non-null     object 
 5   Amount     11 non-null     float64
 6   Channel    12 non-null     object 
 7   Remarks    11 non-null     object 
dtypes: float64(1), int64(2), object(5)
memory usage: 896.0+ bytes
print:
TxnID        0
Date         0
AccountID    0
Branch       2
TxnType      0
Amount       1
Channel      0
Remarks      1
dtype: int64
```

*(The `print:` label above is added for clarity — the second block is the output of
`print(bank.isna().sum())`.)*

**Variants**

| If the question says | Change to |
| --- | --- |
| "count missing values per column" | `df.isna().sum()` |
| "total number of missing cells" | `df.isna().sum().sum()` |
| "list only the columns that have missing values" | `df.columns[df.isna().any()].tolist()` |
| "which columns have NO missing values" | `df.columns[df.notna().all()].tolist()` |
| "show the boolean mask of missing values" | `df.isna()` (alias `df.isnull()` — identical) |
| "boolean mask for just two columns" | `df[["Income","CreditScore"]].isna()` |
| "number of missing values in one column" | `df["Income"].isna().sum()` |
| "true memory usage including text" | `df.memory_usage(deep=True).sum()` |
| "print the full info even for a wide frame" | `df.info(verbose=True, show_counts=True)` |

**Traps**

- `info()` shows **non-null** counts, not missing counts. Missing = `entries − non-null`.
  Marks are lost for reporting 10 as "10 missing".
- `isna()` and `isnull()` are the same function. So are `notna()` and `notnull()`. Use either.
- `object` in the Dtype column means "Python objects", which in practice means **text**. It
  does not mean "missing".
- Empty strings and the text `"NA"` written as `na` are *not* always counted as missing — see
  the missing-values chapter for `na_values=`.

**Drill**

1. From `portfolio_holdings.xlsx`, sheet `Debt`, state the number of rows and which columns are incomplete.

<details><summary>Answer</summary>

```python
debt = pd.read_excel(PH, sheet_name="Debt")
debt.info()
print(debt.isna().sum())
```

6 rows; `Quantity` is 5 non-null, so `Quantity` has 1 missing value. All other columns complete.

</details>

---

## P6.3 — dtypes — identify the numeric columns

**Exam phrasings**

- "Show general info and data types for each column. Identify numeric columns."
- "identify the numeric columns"
- "what is the data type of each column"
- "which columns are stored as text"
- "why is CreditScore a float and not an integer"

**Core idea.** `dtypes` returns one type per column. Only `int64`, `float64` (and the less
common `Int64`, `bool`) count as numeric for `describe()`, `mean()`, `sum()` and arithmetic
filters. `object` is text.

**Template**

```python
df.dtypes                                          # read it and name the numeric ones
df.select_dtypes(include="number").columns.tolist() # let pandas name them for you
```

**Worked — the actual exam question** (01 Basics Ex 1 Q3, Bank Transactions)

```python
bank = pd.read_csv(BT)
print(bank.dtypes)
print(bank.select_dtypes(include="number").columns.tolist())
```

```text
TxnID          int64
Date          object
AccountID      int64
TxnType       object
Branch        object
Amount       float64
Channel       object
Remarks       object
dtype: object
['TxnID', 'AccountID', 'Amount']
```

*(Column order in `dtypes` follows the file: `TxnID, Date, AccountID, Branch, TxnType,
Amount, Channel, Remarks`.)*

Model answer: *"The numeric columns are `TxnID` (int64), `AccountID` (int64) and `Amount`
(float64). `TxnID` and `AccountID` are numeric only by storage — they are identifiers, so
their mean is meaningless. The single analytically numeric column is `Amount`. `Date` is
stored as `object` (text), not as a date."*

**The dtype table you must be able to recite**

| dtype | Means | Seen in these files | Works with `describe()`/`mean()` |
| --- | --- | --- | --- |
| `int64` | whole numbers, no missing values allowed | `Age`, `Risk_Score`, `TxnID`, `LoanAmountRequested` | yes |
| `float64` | decimals, **and** any numeric column containing `NaN` | `Balance`, `Amount`, `Income`, `CreditScore`, `Quantity`, `Price` | yes |
| `object` | Python objects = text in practice | `Name`, `City`, `Segment`, `Branch`, `Date` (unparsed) | no (only with `include="object"`) |
| `bool` | True/False | the result of `df["Age"] > 30` | yes (True counts as 1) |
| `datetime64[ns]` | real timestamps | `Join_Date` | yes in pandas 2.x — see P6.4 |
| `Int64` (capital I) | nullable integer — int that *can* hold `<NA>` | only if you ask for it | yes |

**Why a numeric column with one missing value becomes `float64`**

`int64` has no way to store "missing". The moment one value is absent pandas promotes the
whole column to `float64`, because `float64` has `NaN`. That is why `CreditScore`, which is a
300–900 integer scale, prints as `812.0`:

```python
loans = pd.read_csv(LA)
print(loans[["ApplicantID","Income","CreditScore","LoanAmountRequested"]].dtypes)
print(loans["CreditScore"].head(3))
```

```text
ApplicantID              int64
Income                 float64
CreditScore            float64
LoanAmountRequested      int64
dtype: object
0    812.0
1    730.0
2    665.0
Name: CreditScore, dtype: float64
```

`ApplicantID` and `LoanAmountRequested` are complete, so they stay `int64`. `Income` and
`CreditScore` each lose 2 values, so both become `float64`. Same story in
`portfolio_holdings.xlsx`: `Quantity` is `float64` on **both** sheets because each sheet has
exactly one missing quantity.

**Getting the integers back**

```python
print(loans["CreditScore"].dropna().astype("int64").head(3))   # drop the NaNs first
print(loans["CreditScore"].astype("Int64").head(4))            # or keep them as <NA>
```

```text
0    812
1    730
2    665
Name: CreditScore, dtype: int64
0    812
1    730
2    665
3    748
Name: CreditScore, dtype: Int64
```

Casting straight to `int64` with `NaN` still present fails:

```python
loans["CreditScore"].astype("int64")
```

```text
IntCastingNaNError: Cannot convert non-finite values (NA or inf) to integer
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "dtype of one column" | `df["Amount"].dtype` (singular, no `s`) |
| "list the text columns" | `df.select_dtypes(include="object").columns.tolist()` |
| "only the numeric part of the frame" | `df.select_dtypes(include="number")` |
| "exclude text columns" | `df.select_dtypes(exclude="object")` |
| "convert Risk_Score to float" (Session 13 Ex 54) | `df["Risk_Score"] = df["Risk_Score"].astype(float)` |
| "make Active a boolean column" | `df["Active"].map({"Yes": True, "No": False})` |
| "count of columns per dtype" | `df.dtypes.value_counts()` |

**Traps**

- `df.dtypes` (plural, no parentheses) for a DataFrame; `df["c"].dtype` (singular) for a Series.
- `astype` has **no** working `inplace` in current pandas — always assign the result back:
  `df["c"] = df["c"].astype(float)`.
- `object` columns are silently skipped by `describe()`, `mean()` and `corr()`. If a "numeric"
  column shows as `object`, the file has stray text in it (a `-`, an `NA`, a currency symbol).
- Never report a mean for an ID column even though pandas will happily compute one.

**Drill**

1. State the dtype of every column of the `Equity` sheet and name the numeric ones.

<details><summary>Answer</summary>

```python
eq = pd.read_excel(PH, sheet_name="Equity")
print(eq.dtypes)
```

```text
Ticker             object
InstrumentName     object
Quantity          float64
Price              float64
Exchange           object
dtype: object
```

Numeric: `Quantity` and `Price`, both `float64` — `Quantity` because one value is missing.

</details>

---

## P6.4 — describe() — default, custom percentiles, include='all'

**Exam phrasings**

- "Generate descriptive statistics."
- "Generate descriptive statistics with custom percentiles 0.30, 0.70 and 0.80."
- "Display descriptive statistics for the numeric columns. Add percentiles at 0.3, 0.7, 0.9."
- "produce a statistical summary of the data"
- "summarise the categorical columns too"

**Core idea.** `describe()` returns 8 rows per numeric column. `percentiles=[...]` replaces the
default 25/50/75 set — the 50% row is always kept whether you ask for it or not.

**Template**

```python
df.describe()                                  # numeric (and datetime) columns
df.describe(percentiles=[0.3, 0.7, 0.8])       # custom percentiles
df.describe(include="all")                     # every column, numeric and text
df.describe(include="object")                  # text/categorical columns only
df.describe(include="number")                  # force numeric only
```

**The 8 rows and what each means**

| Row | Meaning | Exam wording it answers |
| --- | --- | --- |
| `count` | number of **non-null** values | "how many valid observations" |
| `mean` | arithmetic average | "average Balance" |
| `std` | sample standard deviation (n−1 denominator) | "spread / volatility / dispersion" |
| `min` | smallest value | "lowest" |
| `25%` | first quartile Q1 | "25th percentile", "lower quartile" |
| `50%` | median Q2 | "median" |
| `75%` | third quartile Q3 | "75th percentile", "upper quartile" |
| `max` | largest value | "highest" |

Q3 − Q1 is the IQR; `max − min` is the range. Both are commonly asked as a follow-up and both
are read straight off this table.

**Worked** (Session 13 Ex 35, `Customer_Data`)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
print(df.describe())
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

**Verified, and examinable:** on pandas 2.3.3 `describe()` **also summarises the
`datetime64[ns]` column `Join_Date`** alongside the numeric columns. Two consequences you
should say out loud in the exam:

1. The mean join date is a real timestamp (`2024-12-11 21:36:00`) and the quartiles are
   timestamps too.
2. Because standard deviation is undefined for datetimes, `std` is `NaN` for `Join_Date`
   **and the row order changes** — `std` moves from its usual third position to the bottom of
   the table. If your printout shows `count, mean, min, 25%, ...` instead of
   `count, mean, std, min, ...`, a datetime column is the reason.

Force the classic 8-row numeric-only table with either of these:

```python
print(df.describe(include="number"))
```

```text
             Age        Balance  Risk_Score
count  30.000000      30.000000   30.000000
mean   39.033333  395335.506000  585.300000
std    10.354021  300975.385757  165.463018
min    23.000000   25706.890000  327.000000
25%    31.000000  111074.862500  433.750000
50%    38.500000  411632.175000  583.500000
75%    48.500000  633361.857500  740.250000
max    58.000000  912373.950000  824.000000
```

**Worked** (Session 13 Ex 36 — percentiles 0.30, 0.70, 0.80)

```python
print(df.describe(percentiles=[0.3, 0.7, 0.8]))
```

```text
             Age        Balance  Risk_Score            Join_Date
count  30.000000      30.000000   30.000000                   30
mean   39.033333  395335.506000  585.300000  2024-12-11 21:36:00
min    23.000000   25706.890000  327.000000  2024-01-20 00:00:00
30%    31.000000  132617.217000  463.000000  2024-07-29 21:36:00
50%    38.500000  411632.175000  583.500000  2024-12-12 12:00:00
70%    46.300000  608942.633000  726.900000  2025-04-27 14:24:00
80%    51.000000  674303.370000  756.200000  2025-07-01 14:24:00
max    58.000000  912373.950000  824.000000  2025-11-26 00:00:00
std    10.354021  300975.385757  165.463018                  NaN
```

Note that 25% and 75% are **gone** and 50% is still there. That is the documented behaviour:
your list replaces the defaults, and the median is always added back.

**Worked** (01 Basics Ex 1 Q4 — Bank Transactions, percentiles 0.3, 0.7, 0.9)

```python
bank = pd.read_csv(BT)
print(bank.describe(percentiles=[0.3, 0.7, 0.9]))
```

```text
             TxnID   AccountID        Amount
count    12.000000   12.000000  1.100000e+01
mean   5006.500000  103.666667  2.696727e+05
std       3.605551    2.424621  5.947465e+05
min    5001.000000  101.000000  1.500000e+03
30%    5004.300000  102.000000  4.500000e+03
50%    5006.500000  103.500000  1.500000e+04
70%    5008.700000  104.700000  9.000000e+04
90%    5010.900000  106.900000  5.100000e+05
max    5012.000000  108.000000  2.000000e+06
std order note: here std appears in its usual third row because there is no datetime column.
```

Two things to point out in the written answer: `Amount` has `count = 11`, not 12, because one
value is missing — `describe()` ignores `NaN`. And `Amount` prints in scientific notation
(`2.696727e+05`) because the range spans 1,500 to 2,000,000. To show plain numbers:

```python
print(bank["Amount"].describe().round(2))
```

```text
count         11.00
mean      269672.73
std       594746.52
min         1500.00
25%         3850.00
50%        15000.00
75%       170000.00
max      2000000.00
Name: Amount, dtype: float64
```

**Worked** — categorical summary, `include="all"` and `include="object"`

```python
print(df.describe(include="all"))
```

```text
       Customer_ID         Name        Age     City Segment        Balance  Risk_Score Active            Join_Date
count           30           30  30.000000       30      30      30.000000   30.000000     30                   30
unique          30           30        NaN        8       3            NaN         NaN      2                  NaN
top           C001  Aarav Mehta        NaN  Kolkata     SME            NaN         NaN    Yes                  NaN
freq             1            1        NaN        6      13            NaN         NaN     22                  NaN
mean           NaN          NaN  39.033333      NaN     NaN  395335.506000  585.300000    NaN  2024-12-11 21:36:00
min            NaN          NaN  23.000000      NaN     NaN   25706.890000  327.000000    NaN  2024-01-20 00:00:00
25%            NaN          NaN  31.000000      NaN     NaN  111074.862500  433.750000    NaN  2024-07-05 12:00:00
50%            NaN          NaN  38.500000      NaN     NaN  411632.175000  583.500000    NaN  2024-12-12 12:00:00
75%            NaN          NaN  48.500000      NaN     NaN  633361.857500  740.250000    NaN  2025-05-22 06:00:00
max            NaN          NaN  58.000000      NaN     NaN  912373.950000  824.000000    NaN  2025-11-26 00:00:00
std            NaN          NaN  10.354021      NaN     NaN  300975.385757  165.463018    NaN                  NaN
```

```python
print(df.describe(include="object"))
```

```text
       Customer_ID         Name     City Segment Active
count           30           30       30      30     30
unique          30           30        8       3      2
top           C001  Aarav Mehta  Kolkata     SME    Yes
freq             1            1        6      13     22
```

The four categorical rows: `count` = non-null, `unique` = number of distinct values,
`top` = most frequent value (the mode), `freq` = how many times `top` occurs. So: 8 cities,
3 segments, the commonest city is Kolkata with 6 customers, the commonest segment is SME with 13.

**Variants**

| If the question says | Change to |
| --- | --- |
| "summary of one column" | `df["Balance"].describe()` |
| "round to 2 decimals" | `df.describe().round(2)` |
| "add the 95th and 99th percentiles" | `df.describe(percentiles=[0.95, 0.99])` |
| "keep the quartiles and add the 90th" | `df.describe(percentiles=[0.25, 0.5, 0.75, 0.9])` |
| "summarise text columns as well" | `df.describe(include="all")` |
| "summarise only text columns" | `df.describe(include="object")` |
| "exclude the date column" | `df.describe(include="number")` |
| "transpose it so columns are rows" | `df.describe().T` |
| "just the median" / "just the std" | `df.median(numeric_only=True)`, `df.std(numeric_only=True)` |
| "population std, not sample" | `df["Balance"].std(ddof=0)` |

**Traps**

- `percentiles` takes **fractions** (`0.3`), never percents (`30`). `percentiles=[30]` raises
  `ValueError: percentiles should all be in the interval [0, 1]`.
- `count` is non-null count, so it differs per column when data is missing. Do not quote it
  as the row count.
- `std` is the **sample** standard deviation (`ddof=1`). If a question computes it by hand with
  the population formula the numbers will differ slightly. Say which you used.
- `describe()` on this pandas version includes `datetime64` columns. Mention it — the exercise
  itself flags it as a graded observation.
- `include="all"` produces `NaN` in cells that do not apply (no `mean` for text, no `unique`
  for numbers). Those `NaN`s are correct, not a bug.

**Drill**

1. Produce a rounded summary of `Quantity` and `Price` from the `Equity` sheet, with percentiles at 0.1 and 0.9.

<details><summary>Answer</summary>

```python
eq = pd.read_excel(PH, sheet_name="Equity")
print(eq[["Quantity","Price"]].describe(percentiles=[0.1, 0.9]).round(2))
```

</details>

---

## P6.5 — describe() on a chosen subset of columns

**Exam phrasings**

- "Produce descriptive statistics for Income, CreditScore, and LoanAmountRequested, including percentiles at 0.25, 0.5, 0.75, 0.9."
- "descriptive statistics for only these three columns"
- "summary statistics for Quantity and Price only"
- "describe the two numeric columns with the 90th percentile"

**Core idea.** Select the columns first with a **double-bracket list**, then call `describe()`
on the result. The list controls both which columns appear and in what order.

**Template**

```python
df[["COL1", "COL2", "COL3"]].describe(percentiles=[0.25, 0.5, 0.75, 0.9])
```

**Worked — the exact exam question** (01 Basics Ex 2 Q4)

```python
loans = pd.read_csv(LA)
print(loans[["Income", "CreditScore", "LoanAmountRequested"]].describe(
        percentiles=[0.25, 0.5, 0.75, 0.9]))
```

```text
             Income  CreditScore  LoanAmountRequested
count  1.000000e+01    10.000000         1.200000e+01
mean   9.540000e+05   719.200000         1.633333e+06
std    3.154256e+05    72.123043         8.752489e+05
min    5.400000e+05   590.000000         5.000000e+05
25%    7.250000e+05   674.250000         9.500000e+05
50%    9.000000e+05   725.000000         1.450000e+06
75%    1.175000e+06   772.000000         2.275000e+06
90%    1.320000e+06   805.700000         2.770000e+06
max    1.500000e+06   812.000000         3.200000e+06
```

Same table with readable numbers — worth doing, the examiner reads it faster:

```python
print(loans[["Income", "CreditScore", "LoanAmountRequested"]].describe(
        percentiles=[0.25, 0.5, 0.75, 0.9]).round(2).to_string())
```

```text
          Income  CreditScore  LoanAmountRequested
count      10.00        10.00                12.00
mean   954000.00       719.20           1633333.33
std    315425.63        72.12            875248.89
min    540000.00       590.00            500000.00
25%    725000.00       674.25            950000.00
50%    900000.00       725.00           1450000.00
75%   1175000.00       772.00           2275000.00
90%   1320000.00       805.70           2770000.00
max   1500000.00       812.00           3200000.00
```

Points to state in the written part: `Income` and `CreditScore` have `count = 10` because 2
values are missing in each, while `LoanAmountRequested` has all 12. Asking for `[0.25, 0.5,
0.75, 0.9]` keeps the three quartiles **and** adds the 90th percentile, which is the usual
intent when a question lists all four.

**Variants**

| If the question says | Change to |
| --- | --- |
| "just two of them" | `df[["Income","CreditScore"]].describe()` |
| "all numeric columns, don't list them" | `df.describe(include="number")` |
| "one column only" | `df["Income"].describe()` — returns a Series |
| "in this order: CreditScore then Income" | `df[["CreditScore","Income"]].describe()` — list order wins |
| "with deciles" | `df[[...]].describe(percentiles=[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9])` |
| "rows as statistics, columns as columns" | already the default; use `.T` to flip |

**Traps**

- **Double brackets.** `df["Income","CreditScore"]` raises `KeyError`. A list of columns needs
  `df[[...]]`.
- Single brackets give a Series, and `Series.describe()` returns a one-dimensional summary with
  no column headers — fine if one column was asked for, wrong if three were.
- If you pass a column name that does not exist you get
  `KeyError: "['Incom'] not in index"`. Check spelling against `df.columns` first.
- Including a text column in the list, e.g. `df[["Name","Income"]].describe()`, makes pandas
  drop `Name` silently from the numeric summary. Not an error, but the examiner will notice.

**Drill**

1. Summarise `Age` and `Balance` from `Customer_Data` with percentiles at 0.05 and 0.95, rounded to 1 decimal.

<details><summary>Answer</summary>

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
print(df[["Age","Balance"]].describe(percentiles=[0.05, 0.95]).round(1))
```

</details>

---

## P6.6 — Select one column — Series vs one-column DataFrame

**Exam phrasings**

- "Select the Name column as a single Series."
- "display the Amount column"
- "extract the Branch column"
- "show the Name column as a DataFrame"
- "what is the difference between `df['Name']` and `df[['Name']]`"

**Core idea.** One pair of brackets gives a **Series** (1-D, has a `name`, no column header
box). Two pairs give a **DataFrame** (2-D, keeps the column header). Session 13 Ex 38 asks
explicitly for a Series, so single brackets are the marked answer.

**Template**

```python
df["COL"]      # Series  — "as a Series", "the COL column"
df[["COL"]]    # DataFrame — "as a DataFrame", "as a table/frame"
```

**Worked** (Session 13 Ex 38 vs its DataFrame twin, Loan Applicants)

```python
loans = pd.read_csv(LA)
print(type(loans["Name"]))
print(loans["Name"].head(3))
print(type(loans[["Name"]]))
print(loans[["Name"]].head(3))
```

```text
<class 'pandas.core.series.Series'>
0      Anita
1    Bhavesh
2     Chitra
Name: Name, dtype: object
<class 'pandas.core.frame.DataFrame'>
      Name
0    Anita
1  Bhavesh
2   Chitra
```

Read the two outputs side by side — this is the whole pattern:

| | `df["Name"]` | `df[["Name"]]` |
| --- | --- | --- |
| type | `Series` | `DataFrame` |
| printed footer | `Name: Name, dtype: object` | none |
| printed header | none | `Name` as a column heading |
| `.shape` | `(12,)` | `(12, 1)` |
| `.ndim` | 1 | 2 |
| chain `.value_counts()` | works | works on 2.x but returns a MultiIndex count |
| chain `.mean()` on a numeric col | one number | a one-element Series |

**Why it matters for marks.** Ex 38 says "as a single Series". If you answer `df[['Name']]`
you have produced a DataFrame and the type is wrong. Conversely, a question saying "display
the column **as a DataFrame**" or "return a DataFrame with just Name" wants the double
brackets. When in doubt, add one line that proves you know which you produced:

```python
s = loans["Name"]
print(type(s), s.shape, s.ndim)
```

```text
<class 'pandas.core.series.Series'> (12,) 1
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "the Amount column" | `df["Amount"]` |
| "first 5 values of the column" | `df["Amount"].head()` |
| "column name has a space" | `df["Age Group"]` — bracket form always works |
| "use dot notation" | `df.Amount` — works only for simple names, avoid it |
| "the column's values as a plain list" | `df["Name"].tolist()` |
| "the column as a NumPy array" | `df["Name"].values` or `.to_numpy()` |
| "the column with its index removed" | `df["Name"].reset_index(drop=True)` |
| "select a column by position" | `df.iloc[:, 1]` (Series) or `df.iloc[:, [1]]` (DataFrame) |

**Traps**

- `df.Name` fails for columns with spaces, dots or names that clash with a method
  (`df.count` is the method, not a column called `count`). Always prefer `df["Name"]`.
- `df["Name", "Age"]` → `KeyError`. Two columns need a list: `df[["Name", "Age"]]`.
- A Series carries the original index, so `df[df["Age"] > 50]["Name"]` prints non-consecutive
  index numbers. That is correct output, not a mistake.
- `df["Amount"].describe()` gives a Series summary; `df[["Amount"]].describe()` gives the
  familiar table. Both are acceptable unless the wording specifies one.

**Drill**

1. From `bank_transactions.csv`, print the `Branch` column as a Series and separately as a one-column DataFrame, and print the type of each.

<details><summary>Answer</summary>

```python
bank = pd.read_csv(BT)
print(type(bank["Branch"]), bank["Branch"].head(3), sep="\n")
print(type(bank[["Branch"]]), bank[["Branch"]].head(3), sep="\n")
```

</details>

---

## P6.7 — Select several named columns in a given order

**Exam phrasings**

- "Select Name and Age together as a DataFrame."
- "Show only the Date, Branch, TxnType, and Amount columns."
- "Select only Name, City, and CreditScore and show first 7 rows."
- "From Equity, display only InstrumentName, Quantity, Price."
- "Read only selected columns from Equity and show first 3 rows."

**Core idea.** Pass a **list** of names inside the brackets. The order of your list is the order
of the output columns — it does not have to match the file.

**Template**

```python
df[["COL1", "COL2", "COL3"]]              # all rows, these columns, this order
df[["COL1", "COL2", "COL3"]].head(7)      # plus the first 7 rows
```

**Worked** (Session 13 Ex 39, `Customer_Data`)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
print(df[["Name", "Age"]].head())
```

```text
          Name  Age
0  Aarav Mehta   53
1    Diya Nair   32
2   Kabir Shah   52
3   Meera Iyer   34
4  Rohan Desai   30
```

**Worked** (01 Basics Ex 1 Q5, Bank Transactions — four columns, given order)

```python
bank = pd.read_csv(BT)
print(bank[["Date", "Branch", "TxnType", "Amount"]].head())
```

```text
         Date   Branch TxnType    Amount
0  01-07-2025   Mumbai  Credit  250000.0
1  01-07-2025     Pune   Debit   12000.0
2  02-07-2025    Delhi   Debit    4500.0
3  02-07-2025   Mumbai  Credit  510000.0
4  03-07-2025  Chennai  Credit   15000.0
```

**Worked** (01 Basics Ex 2 Q5 — three columns **and** `head(7)`)

```python
loans = pd.read_csv(LA)
print(loans[["Name", "City", "CreditScore"]].head(7))
```

```text
      Name       City  CreditScore
0    Anita     Mumbai        812.0
1  Bhavesh       Pune        730.0
2   Chitra      Delhi        665.0
3   Deepak  Bengaluru        748.0
4     Esha    Chennai        590.0
5     Faiz       Pune          NaN
6    Gauri     Mumbai        702.0
```

Row 5 (`Faiz`) shows `NaN` — selecting columns does not remove missing values, and you should
not "clean" them unless the question asks.

**Worked** (01 Basics Ex 3 Q4 — Equity sheet, three columns, all rows)

```python
eq = pd.read_excel(PH, sheet_name="Equity")
print(eq[["InstrumentName", "Quantity", "Price"]])
```

```text
        InstrumentName  Quantity   Price
0              Infosys     120.0  1700.5
1                  TCS      80.0  3800.0
2            HDFC Bank     150.0  1650.0
3             Reliance      60.0  2950.0
4                  ITC       NaN   480.0
5  State Bank of India     200.0   720.0
6          LTIMindtree      50.0  5500.0
7                Wipro     300.0   460.0
```

**Worked** (01 Basics Ex 3 Q10 — select the columns **while reading**, then `head(3)`)

```python
print(pd.read_excel(PH, sheet_name="Equity", usecols=["Ticker","Quantity","Price"]).head(3))
print(pd.read_excel(PH, sheet_name="Equity", usecols="A:C").head(3))
```

```text
     Ticker  Quantity   Price
0      INFY     120.0  1700.5
1       TCS      80.0  3800.0
2  HDFCBANK     150.0  1650.0
     Ticker InstrumentName  Quantity
0      INFY        Infosys     120.0
1       TCS            TCS      80.0
2  HDFCBANK      HDFC Bank     150.0
```

Note `usecols=["Ticker","Quantity","Price"]` returns them in **file order**, not list order —
that is the one place where your ordering is ignored. `usecols="A:C"` takes spreadsheet columns
A, B and C regardless of their names.

**Variants**

| If the question says | Change to |
| --- | --- |
| "in reverse / a different order" | `df[["Amount","TxnType","Branch","Date"]]` — list order wins |
| "with `.loc`" | `df.loc[:, ["Date","Branch","Amount"]]` — identical result |
| "columns from Date to Amount (a range)" | `df.loc[:, "Date":"Amount"]` — stop label **included** |
| "columns 1 to 3 by position" | `df.iloc[:, 1:4]` — stop position **excluded** |
| "all columns except Remarks" | `df.drop("Remarks", axis=1)` or `df.drop(columns=["Remarks"])` |
| "only the numeric columns" | `df.select_dtypes(include="number")` |
| "columns whose name contains Amount" | `df.filter(like="Amount")` |
| "select the columns when reading the CSV" | `pd.read_csv(BT, usecols=["Date","Branch","Amount"])` |
| "rename while selecting" | `df[["Name","Age"]].rename(columns={"Age":"Years"})` |

**Traps**

- Single brackets with a list is the error people make under time pressure:
  `df["Name","Age"]` → `KeyError: ('Name', 'Age')`.
- One wrong character in a name gives `KeyError: "['CreditSocre'] not in index"`. Copy names
  out of `df.columns`, do not retype them.
- Column selection is a **copy**, so `sel = df[["Name","Age"]]; sel["Age"] = 0` does not alter
  `df` (and may warn). See P6.12.
- `usecols` with `index_col` must include the index column in the `usecols` list, or you get a
  `ValueError`.

**Drill**

1. From `Customer_Data` show `Segment`, `Balance`, `City` — in that order — for the first 4 rows.
2. From the `Debt` sheet show every column except `Issuer`.

<details><summary>Answer</summary>

```python
print(df[["Segment","Balance","City"]].head(4))

debt = pd.read_excel(PH, sheet_name="Debt")
print(debt.drop(columns=["Issuer"]))
```

</details>

---

## P6.8 — Filter rows on one condition

**Exam phrasings**

- "Filter customers whose Age is greater than 30."
- "Show all transactions where Amount is missing."
- "filter rows where Balance exceeds 500000"
- "how many customers are older than 30"
- "display records with a Risk_Score above 700"

**Core idea.** Build a boolean Series (the *mask*), then index the DataFrame with it. Rows
where the mask is `True` survive. This is the single most examined pandas skill.

**Template**

```python
mask = df["COL"] > VALUE      # a boolean Series, one True/False per row
df[mask]                      # the filtered rows
df[df["COL"] > VALUE]         # the same thing, written in one line
```

**Worked** (Session 13 Ex 40, `Customer_Data`)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
result = df[df["Age"] > 30]
print(result.head())
print("rows:", result.shape[0])
```

```text
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes 2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No 2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes 2024-06-02
3        C004   Meera Iyer   34  Bengaluru      SME   25706.89         392    Yes 2024-08-02
5        C006   Ananya Rao   38      Delhi  Premium   64403.42         629    Yes 2025-02-23
rows: 23
```

Look at the index: `4` is missing because C005 is 30 and `30 > 30` is `False`. Non-consecutive
index numbers are the normal signature of a filter.

**See the mask itself** — worth one line in your answer, it proves you understand the mechanism:

```python
print((df["Age"] > 30).head())
print((df["Age"] > 30).sum())      # True counts as 1 → "how many"
```

```text
0     True
1     True
2     True
3     True
4    False
Name: Age, dtype: bool
23
```

**Worked** (01 Basics Ex 1 Q9 — "where Amount is missing")

```python
bank = pd.read_csv(BT)
print(bank[bank["Amount"].isna()])
```

```text
   TxnID        Date  AccountID Branch TxnType  Amount Channel Remarks
5   5006  03-07-2025        102   Pune   Debit     NaN     ATM     NaN
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "greater than" / "above" / "more than" | `df["Age"] > 30` |
| "at least" / "30 or more" / ">=" | `df["Age"] >= 30` |
| "less than" / "below" | `df["Age"] < 30` |
| "equal to" / "is" | `df["City"] == "Goa"` — two equals signs |
| "not equal to" / "other than" | `df["City"] != "Goa"` |
| "between 30 and 40 (inclusive)" | `df[df["Age"].between(30, 40)]` |
| "is missing / blank / null" | `df[df["COL"].isna()]` |
| "is not missing" | `df[df["COL"].notna()]` |
| "name starts with A" | `df[df["Name"].str.startswith("A")]` |
| "city contains 'bad'" | `df[df["City"].str.contains("bad", na=False)]` |
| "how many rows satisfy it" | `(df["Age"] > 30).sum()` or `df[mask].shape[0]` |
| "what proportion satisfy it" | `(df["Age"] > 30).mean()` |
| "does any row satisfy it" | `(df["Age"] > 30).any()` |
| "keep the result for later questions" | `high = df[df["Age"] > 30]` |

**Traps**

- `=` assigns, `==` compares. `df[df["City"] = "Goa"]` is a `SyntaxError`.
- String comparison is case-sensitive and whitespace-sensitive: `"goa" != "Goa"`,
  `" Goa" != "Goa"`. Use `df["City"].str.strip().str.lower() == "goa"` if the data is dirty.
- `NaN` is never equal to anything, so `df[df["Amount"] == None]` returns zero rows. Missing
  values need `.isna()`.
- A comparison against `NaN` is `False`, so rows with missing `Amount` are silently dropped by
  `df[df["Amount"] >= 200000]`. If the question wants them, add `| df["Amount"].isna()`.
- The filtered frame is a new object; `df` itself is unchanged unless you reassign it.

**Drill**

1. How many bank transactions are above 100000?
2. Show the `Debt` rows priced below 99.

<details><summary>Answer</summary>

```python
print((bank["Amount"] > 100000).sum())          # 3
debt = pd.read_excel(PH, sheet_name="Debt")
print(debt[debt["Price"] < 99])
```

</details>

---

## P6.9 — Combine conditions with &, | and ~

**Exam phrasings**

- "Filter customers whose Age is greater than 25 AND City is Goa."
- "Filter customers who are either in Goa OR Mumbai."
- "Filter customers who are NOT in the Retail segment."
- "filter rows that satisfy both conditions"
- "select all rows except the Retail segment"

**Core idea.** Pandas uses the **bitwise** operators `&`, `|`, `~` — not the Python keywords
`and`, `or`, `not`. Every condition must be wrapped in its **own parentheses**, because `&`
binds tighter than `>` and `==`.

**Template**

```python
df[(df["A"] > V1) & (df["B"] == "X")]        # AND — both true
df[(df["A"] == "X") | (df["A"] == "Y")]      # OR  — either true
df[~(df["A"] == "X")]                        # NOT — invert the mask
```

**Worked** (Session 13 Ex 41 — AND)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
r = df[(df["Age"] > 25) & (df["City"] == "Goa")]
print(r)
print("rows:", r.shape[0])
```

```text
   Customer_ID            Name  Age City  Segment    Balance  Risk_Score Active  Join_Date
9         C010  Nisha Kulkarni   39  Goa  Premium  543586.83         744    Yes 2025-11-26
20        C021    Varun Shetty   51  Goa      SME  912373.95         338    Yes 2024-04-17
25        C026    Leena Thomas   28  Goa      SME  636829.40         529     No 2024-12-06
rows: 3
```

**Worked** (Session 13 Ex 42 — OR)

```python
r = df[(df["City"] == "Goa") | (df["City"] == "Mumbai")]
print(r[["Customer_ID","Name","City","Segment"]])
print("rows:", r.shape[0])
```

```text
   Customer_ID            Name    City  Segment
4         C005     Rohan Desai  Mumbai      SME
6         C007    Arjun Kapoor     Goa      SME
9         C010  Nisha Kulkarni     Goa  Premium
10        C011      Rahul Naik  Mumbai  Premium
14        C015    Aditya Verma  Mumbai      SME
20        C021    Varun Shetty     Goa      SME
25        C026    Leena Thomas     Goa      SME
26        C027    Omkar Sawant  Mumbai  Premium
28        C029   Harsh Agarwal     Goa   Retail
rows: 9
```

**Worked** (Session 13 Ex 43 — NOT)

```python
r = df[~(df["Segment"] == "Retail")]
print(r[["Customer_ID","Name","Segment"]].head())
print("rows:", r.shape[0])
print(df[df["Segment"] != "Retail"].shape[0])          # same answer
print(df[~df["Segment"].isin(["Retail"])].shape[0])    # same answer
```

```text
  Customer_ID         Name  Segment
0        C001  Aarav Mehta      SME
1        C002    Diya Nair      SME
2        C003   Kabir Shah  Premium
3        C004   Meera Iyer      SME
4        C005  Rohan Desai      SME
rows: 24
24
24
```

All three forms give 24 rows (30 total − 6 Retail). Ex 43 literally says "`~(condition)`", so
write the `~` form as the primary answer and mention `!=` as the equivalent.

**Three conditions chain the same way**

```python
r = df[(df["Segment"] == "Premium") & (df["Balance"] > 500000) & (df["Active"] == "Yes")]
print(r[["Customer_ID","Name","Segment","Balance","Active"]])
print("rows:", r.shape[0])
```

```text
   Customer_ID            Name  Segment    Balance Active
8         C009    Vikram Joshi  Premium  602935.52    Yes
9         C010  Nisha Kulkarni  Premium  543586.83    Yes
11        C012     Sneha Patil  Premium  855113.18    Yes
18        C019     Nikhil Jain  Premium  817061.38    Yes
19        C020     Aditi Sinha  Premium  587360.57    Yes
rows: 5
```

### The four errors, with their real messages

Learn to recognise these — they are the fastest marks to lose and the fastest to fix.

**1. Using `and` instead of `&`**

```python
loans = pd.read_csv(LA)
loans[loans["CreditScore"] >= 750 and loans["Income"] >= 1000000]
```

```text
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

**2. Using `or` instead of `|`** — same error:

```python
loans[loans["City"] == "Pune" or loans["City"] == "Mumbai"]
```

```text
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

**3. Using `not` instead of `~`** — same error again:

```python
loans[not (loans["City"] == "Pune")]
```

```text
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

Why: `and`, `or` and `not` need a single `True`/`False`. A mask is 12 values, so Python cannot
decide. `&`, `|`, `~` work element by element, which is what a filter needs.

**4. Forgetting the parentheses** — a *different* error, and the one that confuses people:

```python
loans[loans["CreditScore"] >= 750 & loans["Income"] >= 1000000]
```

```text
TypeError: Cannot perform 'rand_' with a dtyped [float64] array and scalar of type [bool]
```

```python
loans[loans["City"] == "Pune" | loans["City"] == "Mumbai"]
```

```text
TypeError: Cannot perform 'ror_' with a dtyped [object] array and scalar of type [bool]
```

Why: `&` and `|` have **higher precedence** than `>=` and `==`, so Python reads the first line
as `loans["CreditScore"] >= (750 & loans["Income"]) >= 1000000`. The `rand_` / `ror_` in the
message is the reflected bitwise-and / bitwise-or — a reliable tell that parentheses are
missing.

**The rule, stated the way you should write it in an exam:** *every individual condition goes
in its own round brackets, and the operators are `&` for AND, `|` for OR, `~` for NOT.*

**Variants**

| If the question says | Change to |
| --- | --- |
| "both A and B" | `df[(A) & (B)]` |
| "either A or B" | `df[(A) \| (B)]` |
| "A but not B" | `df[(A) & ~(B)]` |
| "neither A nor B" | `df[~(A) & ~(B)]` or `df[~((A) \| (B))]` |
| "exactly one of A or B" | `df[(A) ^ (B)]` — bitwise XOR |
| "one of several categories" | `df[df["COL"].isin([...])]` (P6.10) |
| "between two values" | `df[df["Age"].between(25, 40)]` |
| "readable string form" | `df.query("Age > 25 and City == 'Goa'")` — inside `query()`, `and`/`or` **are** allowed |
| "save the conditions separately" | `m1 = df["Age"] > 25; m2 = df["City"] == "Goa"; df[m1 & m2]` |

`query()` is the one place `and`/`or` work, because pandas parses the string itself:

```python
bank = pd.read_csv(BT)
print(bank.query("TxnType == 'Credit' and Amount >= 200000"))
```

```text
   TxnID        Date  AccountID  Branch TxnType     Amount Channel        Remarks
0   5001  01-07-2025        101  Mumbai  Credit   250000.0    NEFT         Salary
3   5004  02-07-2025        103  Mumbai  Credit   510000.0    RTGS  Sale proceeds
6   5007  03-07-2025        105     NaN  Credit  2000000.0    NEFT    FD maturity
```

**Traps**

- `&`/`|`/`~` with parentheses; `and`/`or`/`not` only inside `query()`.
- `~` on a column containing `NaN` inverts `False` to `True`, so `~(df["A"] == "X")` **keeps**
  rows where `A` is missing. `df["A"] != "X"` does the same. Decide whether the question wants
  them and say so.
- Python chaining like `df[25 < df["Age"] < 40]` raises the same ambiguity `ValueError`. Use
  `&` or `.between()`.
- `^` (XOR) is rarely asked but is the correct answer to "exactly one of".

**Drill**

1. Customers under 30 in the SME segment.
2. Customers who are Premium **or** have Balance above 800000.
3. Customers who are **not** in Goa and **not** in Mumbai.

<details><summary>Answer</summary>

```python
print(df[(df["Age"] < 30) & (df["Segment"] == "SME")])
print(df[(df["Segment"] == "Premium") | (df["Balance"] > 800000)])
print(df[~df["City"].isin(["Goa","Mumbai"])])
```

</details>

---

## P6.10 — isin() and ~isin() for list membership

**Exam phrasings**

- "filter customers in Goa, Mumbai or Pune"
- "select transactions from these three branches"
- "exclude the ATM and UPI channels"
- "filter rows whose Rating is AAA or AA"
- "show applicants not from Delhi or Kolkata"

**Core idea.** `isin([...])` replaces a long `|` chain with one readable call. Prefix `~` for
"not in". Three or more categories → always use `isin`.

**Template**

```python
df[df["COL"].isin([V1, V2, V3])]     # COL is one of the list
df[~df["COL"].isin([V1, V2])]        # COL is NOT one of the list
```

**Worked** (Bank Transactions — two branches)

```python
bank = pd.read_csv(BT)
print(bank[bank["Branch"].isin(["Pune","Delhi"])][["TxnID","Branch","Amount"]])
```

```text
    TxnID Branch   Amount
1    5002   Pune  12000.0
2    5003  Delhi   4500.0
5    5006   Pune      NaN
7    5008  Delhi   2200.0
10   5011   Pune  78000.0
```

**Worked** — "NOT in" (exclude ATM and UPI)

```python
print(bank[~bank["Channel"].isin(["ATM","UPI"])][["TxnID","Channel","Amount"]])
```

```text
   TxnID Channel     Amount
0   5001    NEFT   250000.0
3   5004    RTGS   510000.0
6   5007    NEFT  2000000.0
8   5009    NEFT    90000.0
```

**Worked** — `isin` is exactly equivalent to the `|` chain (Session 13 Ex 42)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
long_way  = df[(df["City"] == "Goa") | (df["City"] == "Mumbai")]
short_way = df[df["City"].isin(["Goa","Mumbai"])]
print(short_way.shape[0], short_way.equals(long_way))
```

```text
9 True
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "in any of these three cities" | `df[df["City"].isin(["Goa","Pune","Mumbai"])]` |
| "not in these cities" | `df[~df["City"].isin(["Goa","Pune"])]` |
| "IDs 5001, 5004 and 5009" | `df[df["TxnID"].isin([5001, 5004, 5009])]` — works for numbers too |
| "in this list and above a threshold" | `df[df["City"].isin([...]) & (df["Balance"] > V)]` |
| "in the list held in a variable" | `cities = ["Goa","Pune"]; df[df["City"].isin(cities)]` |
| "rows whose index is in this list" | `df[df.index.isin([0, 3, 7])]` |
| "string form" | `df.query("City in ['Goa','Mumbai']")` |

**Traps**

- `isin` takes a **list** (or set/Series), not separate arguments:
  `df["City"].isin("Goa","Pune")` → `TypeError`.
- `df["City"].isin("Goa")` with a bare string iterates the *characters* and matches nothing
  useful. Always use `["Goa"]`.
- Matching is exact and case-sensitive. `"NSE"` will not match `"nse"`.
- `~isin` keeps rows where the column is `NaN`, because `NaN` is not in your list, so
  `isin` is `False` and `~False` is `True`. If those rows are unwanted add
  `& df["COL"].notna()`.

**Drill**

1. From `Debt`, show bonds rated AAA or SOV.
2. From `Customer_Data`, show customers **not** in the Premium or Retail segments.

<details><summary>Answer</summary>

```python
debt = pd.read_excel(PH, sheet_name="Debt")
print(debt[debt["Rating"].isin(["AAA","SOV"])])
print(df[~df["Segment"].isin(["Premium","Retail"])].shape[0])   # 13 (the SME rows)
```

</details>

---

## P6.11 — Threshold plus category plus missing value in one filter

**Exam phrasings**

- "Filter all Credit transactions with Amount >= 200000."
- "Filter transactions from Pune branch or where Branch is missing."
- "Filter applicants with CreditScore >= 750 and Income >= 1000000."
- "Filter applicants where Income is missing or CreditScore < 650."
- "From Equity, filter rows where Quantity is missing or Quantity <= 100."
- "From Debt, display rows with Rating == \"AAA\" and Price >= 99."

**Core idea.** These are the four (plus two) filter questions in *01 Basics*, and they are all
the same shape: one **category equality** or **missing-value test** combined with one
**numeric threshold**. `.isna()` returns a mask, so it drops straight into a `&`/`|` chain like
any other condition.

**Template**

```python
df[(df["CAT_COL"] == "VALUE") & (df["NUM_COL"] >= THRESHOLD)]   # category AND threshold
df[(df["CAT_COL"] == "VALUE") | (df["CAT_COL"].isna())]         # category OR missing
df[df["NUM_COL"].isna() | (df["NUM_COL"] <= THRESHOLD)]         # missing OR threshold
```

**Worked — Ex 1 Q6: Credit transactions with Amount ≥ 200000 → 3 rows**

```python
bank = pd.read_csv(BT)
q6 = bank[(bank["TxnType"] == "Credit") & (bank["Amount"] >= 200000)]
print(q6)
print("rows:", q6.shape[0])
```

```text
   TxnID        Date  AccountID  Branch TxnType     Amount Channel        Remarks
0   5001  01-07-2025        101  Mumbai  Credit   250000.0    NEFT         Salary
3   5004  02-07-2025        103  Mumbai  Credit   510000.0    RTGS  Sale proceeds
6   5007  03-07-2025        105     NaN  Credit  2000000.0    NEFT    FD maturity
rows: 3
```

**Verified answer: 3 rows** (TxnIDs 5001, 5004, 5007). Note that 5007 survives even though its
`Branch` is missing — the filter never looked at `Branch`.

**Worked — Ex 1 Q7: Pune branch OR Branch missing → 5 rows**

```python
q7 = bank[(bank["Branch"] == "Pune") | (bank["Branch"].isna())]
print(q7)
print("rows:", q7.shape[0])
```

```text
    TxnID        Date  AccountID Branch TxnType     Amount Channel          Remarks
1    5002  01-07-2025        101   Pune   Debit    12000.0     ATM  Cash withdrawal
5    5006  03-07-2025        102   Pune   Debit        NaN     ATM              NaN
6    5007  03-07-2025        105    NaN  Credit  2000000.0    NEFT      FD maturity
10   5011  05-07-2025        107   Pune  Credit    78000.0     UPI         Dividend
11   5012  06-07-2025        108    NaN   Debit     3200.0     ATM          Cash wd
```

**Verified answer: 5 rows** — 3 Pune plus 2 with a missing branch.

This is the question that teaches `.isna()` inside a filter. `bank["Branch"] == "Pune"` cannot
find the blanks, because `NaN == "Pune"` is `False` and `NaN == NaN` is also `False`. The only
way to catch a blank is `.isna()` (or its alias `.isnull()`). Alternative single-condition
form: `bank[~bank["Branch"].isin(["Mumbai","Delhi","Chennai"])]` gives the same 5 rows here,
but it is fragile — do not use it.

**Worked — Ex 2 Q6: CreditScore ≥ 750 AND Income ≥ 1000000 → 2 rows**

```python
loans = pd.read_csv(LA)
q6 = loans[(loans["CreditScore"] >= 750) & (loans["Income"] >= 1000000)]
print(q6)
print("rows:", q6.shape[0])
```

```text
   ApplicantID   Name       City     Income  CreditScore  LoanAmountRequested EmploymentType
0         2001  Anita     Mumbai  1200000.0        812.0              2500000       Salaried
9         2010  Jatin  Ahmedabad  1300000.0        805.0              2800000       Salaried
rows: 2
```

**Verified answer: 2 rows** (Anita and Jatin). `Harsh` has CreditScore 780 but Income only
700000; `Deepak` has Income 1500000 but CreditScore 748, two points short. Both correctly fail
the AND.

**Worked — Ex 2 Q7: Income missing OR CreditScore < 650 → 4 rows**

```python
q7 = loans[loans["Income"].isna() | (loans["CreditScore"] < 650)]
print(q7)
print("rows:", q7.shape[0])
```

```text
    ApplicantID    Name     City    Income  CreditScore  LoanAmountRequested EmploymentType
2          2003  Chitra    Delhi       NaN        665.0               800000       Salaried
4          2005    Esha  Chennai  600000.0        590.0               500000       Salaried
8          2009     Ira  Kolkata  540000.0        640.0               700000  Self-Employed
10         2011   Kavya  Chennai       NaN        720.0              1000000       Salaried
rows: 4
```

**Verified answer: 4 rows.** Chitra and Kavya qualify on the missing income; Esha (590) and Ira
(640) qualify on the low score. Faiz and Lalit have **missing CreditScore**, and
`NaN < 650` is `False`, so they are excluded — worth one sentence in the written answer,
because "missing score" is arguably as risky as "low score". If the examiner wants them too:
`loans[loans["Income"].isna() | (loans["CreditScore"] < 650) | loans["CreditScore"].isna()]`
returns 6 rows.

**Worked — Ex 3 Q5: Equity Quantity missing OR ≤ 100 → 4 rows**

```python
eq = pd.read_excel(PH, sheet_name="Equity")
q5 = eq[eq["Quantity"].isna() | (eq["Quantity"] <= 100)]
print(q5)
print("rows:", q5.shape[0])
```

```text
     Ticker InstrumentName  Quantity   Price Exchange
1       TCS            TCS      80.0  3800.0      NSE
3  RELIANCE       Reliance      60.0  2950.0      BSE
4       ITC            ITC       NaN   480.0      NSE
6      LTIM    LTIMindtree      50.0  5500.0      NSE
rows: 4
```

**Worked — Ex 3 Q6: Debt Rating == "AAA" AND Price ≥ 99 → 1 row**

```python
debt = pd.read_excel(PH, sheet_name="Debt")
q6 = debt[(debt["Rating"] == "AAA") & (debt["Price"] >= 99)]
print(q6)
print("rows:", q6.shape[0])
```

```text
         BondID    Issuer  Quantity  Price Rating
4  AAA_PSU_2029  PSU Bank     100.0   99.8    AAA
rows: 1
```

Only one row: `AAA_CORP_2028` is AAA but priced 98.7, below the 99 cut-off. A one-row result is
a normal, correct answer — do not "fix" it.

**Verified row counts — memorise the shape, not the numbers**

| Exercise | Filter | Rows |
| --- | --- | --- |
| Ex 1 Q6 | `TxnType == "Credit"` **and** `Amount >= 200000` | **3** |
| Ex 1 Q7 | `Branch == "Pune"` **or** `Branch.isna()` | **5** |
| Ex 2 Q6 | `CreditScore >= 750` **and** `Income >= 1000000` | **2** |
| Ex 2 Q7 | `Income.isna()` **or** `CreditScore < 650` | **4** |
| Ex 3 Q5 | `Quantity.isna()` **or** `Quantity <= 100` | 4 |
| Ex 3 Q6 | `Rating == "AAA"` **and** `Price >= 99` | 1 |

**Variants**

| If the question says | Change to |
| --- | --- |
| "Debit transactions under 5000" | `df[(df["TxnType"]=="Debit") & (df["Amount"] < 5000)]` |
| "Credit or Debit above a threshold" | `df[df["TxnType"].isin(["Credit","Debit"]) & (df["Amount"] > V)]` |
| "from Mumbai or Pune and above 100000" | `df[df["Branch"].isin(["Mumbai","Pune"]) & (df["Amount"] > 100000)]` |
| "where Branch is present" | `df[df["Branch"].notna()]` |
| "where Amount is missing or zero" | `df[df["Amount"].isna() \| (df["Amount"] == 0)]` |
| "rows with any missing value" | `df[df.isna().any(axis=1)]` |
| "rows with no missing values" | `df[df.notna().all(axis=1)]` — same rows as `df.dropna()` |
| "count them instead of listing them" | append `.shape[0]` or use `mask.sum()` |
| "and show only two columns" | see P6.12 — `df.loc[mask, ["A","B"]]` |

**Traps**

- `NaN` fails *every* comparison. A row with a missing value is dropped by `>=`, `<`, `==` and
  `!=` alike. Only `.isna()`/`.notna()` see it.
- `.isna()` is a method on the **Series**: `df["Branch"].isna()`, not `df.isna("Branch")`.
- Mixing up the connector is the most common error: Q6 is AND (both), Q7 is OR (either). Read
  the question twice; "and" narrows the result, "or" widens it.
- Always report the row count (`.shape[0]`). It shows you checked the result rather than
  printing whatever appeared.

**Drill**

1. Bank transactions through UPI with Amount below 10000.
2. Applicants who are Self-Employed **or** have a missing CreditScore.
3. Equity holdings on NSE with Price above 1000.

<details><summary>Answer</summary>

```python
print(bank[(bank["Channel"]=="UPI") & (bank["Amount"] < 10000)])
print(loans[(loans["EmploymentType"]=="Self-Employed") | loans["CreditScore"].isna()])
print(eq[(eq["Exchange"]=="NSE") & (eq["Price"] > 1000)])
```

</details>

---

## P6.12 — Filter rows and pick columns in one expression

**Exam phrasings**

- "show the Name and City of applicants with income above 1000000"
- "display only TxnID and Amount for Credit transactions"
- "filter the rows and display only two columns"
- "why is `.loc` preferred over `df[mask][cols]`"

**Core idea.** `.loc[mask, cols]` selects rows **and** columns in a single indexing operation.
The equivalent `df[mask][cols]` is *chained indexing*: it works for reading but it is two
operations, it builds a throwaway intermediate frame, and it breaks the moment you try to
assign.

**Template**

```python
df.loc[MASK, ["COL1", "COL2"]]     # preferred — one operation
df.loc[MASK, "COL"]               #  → Series
df.loc[MASK, :]                   #  → all columns (same as df[MASK])
```

**Worked** (Loan Applicants)

```python
loans = pd.read_csv(LA)
print(loans.loc[(loans["City"] == "Pune") & (loans["Income"] > 800000),
                ["Name","City","Income","CreditScore"]])
```

```text
      Name  City    Income  CreditScore
1  Bhavesh  Pune  850000.0        730.0
5     Faiz  Pune  950000.0          NaN
```

**Worked** — the two forms give the same *reading* result (Bank Transactions)

```python
bank = pd.read_csv(BT)
print(bank[bank["TxnType"]=="Credit"][["TxnID","Branch","Amount"]])     # chained
print(bank.loc[bank["TxnType"]=="Credit", ["TxnID","Branch","Amount"]]) # .loc
```

```text
    TxnID   Branch     Amount
0    5001   Mumbai   250000.0
3    5004   Mumbai   510000.0
4    5005  Chennai    15000.0
6    5007      NaN  2000000.0
8    5009  Chennai    90000.0
10   5011     Pune    78000.0
    TxnID   Branch     Amount
0    5001   Mumbai   250000.0
3    5004   Mumbai   510000.0
4    5005  Chennai    15000.0
6    5007      NaN  2000000.0
8    5009  Chennai    90000.0
10   5011     Pune    78000.0
```

Identical. So for a read-only question either is accepted — but say `.loc` is preferred and you
pick up the extra mark.

### Why `.loc` is safer — the warning, for real

Assigning into a filtered copy raises `SettingWithCopyWarning` and changes nothing useful:

```python
loans = pd.read_csv(LA)
sub = loans[loans["City"] == "Pune"]
sub["Income"] = 0
print(sub[["Name","City","Income"]])
print(loans.loc[loans["City"]=="Pune", ["Name","Income"]])
```

```text
SettingWithCopyWarning: 
A value is trying to be set on a copy of a slice from a DataFrame.
Try using .loc[row_indexer,col_indexer] = value instead

See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
  sub["Income"] = 0
       Name  City  Income
1   Bhavesh  Pune       0
5      Faiz  Pune       0
11    Lalit  Pune       0
       Name    Income
1   Bhavesh  850000.0
5      Faiz  950000.0
11    Lalit  800000.0
```

`sub` changed, `loans` did not. The fully chained version is worse — it warns and the write is
**silently discarded**:

```python
bank = pd.read_csv(BT)
bank[bank["Amount"].isna()]["Amount"] = 0
print(bank["Amount"].isna().sum(), "still missing")
```

```text
SettingWithCopyWarning: 
A value is trying to be set on a copy of a slice from a DataFrame.
Try using .loc[row_indexer,col_indexer] = value instead
...
  bank[bank["Amount"].isna()]["Amount"] = 0
1 still missing
```

The `.loc` form does what you meant (this is 01 Basics Ex 1 Q11):

```python
bank.loc[bank["Amount"].isna(), "Amount"] = 0
print(bank["Amount"].isna().sum(), "missing after .loc assignment")
print(bank.loc[bank["Amount"] == 0])
```

```text
0 missing after .loc assignment
   TxnID        Date  AccountID Branch TxnType  Amount Channel Remarks
5   5006  03-07-2025        102   Pune   Debit     0.0     ATM     NaN
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "one column, as a Series" | `df.loc[mask, "Name"]` |
| "one column, as a DataFrame" | `df.loc[mask, ["Name"]]` |
| "a range of columns" | `df.loc[mask, "Date":"Amount"]` — stop label included |
| "all columns" | `df.loc[mask]` or `df[mask]` |
| "then show the first 5" | `df.loc[mask, ["Name"]].head(5)` |
| "then sort by Amount" | `df.loc[mask, ["Name","Amount"]].sort_values("Amount", ascending=False)` |
| "then count them" | `df.loc[mask].shape[0]` |
| "update the matching rows" | `df.loc[mask, "COL"] = VALUE` — the only correct form |
| "by position instead of label" | `df.iloc[list_of_positions, list_of_col_positions]` |

**Traps**

- `.loc` uses **labels**, so `df.loc[mask, "Amount"]` needs the *name* `"Amount"`, never a
  number. `df.loc[mask, 5]` raises `KeyError`.
- Do not mix a boolean mask with `.iloc`: `df.iloc[mask]` raises
  `NotImplementedError`/`ValueError`. Masks go with `.loc` or plain `df[mask]`.
- Never write `df[mask][col] = value`. Use `df.loc[mask, col] = value`.
- If you deliberately want an independent copy, write `sub = df[mask].copy()` — the `.copy()`
  removes the warning and makes the intent explicit.

**Drill**

1. Show `Name` and `Balance` for Premium customers with Balance over 600000.
2. Set `Remarks` to `"No remark"` wherever it is missing in `bank_transactions.csv`.

<details><summary>Answer</summary>

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
print(df.loc[(df["Segment"]=="Premium") & (df["Balance"] > 600000), ["Name","Balance"]])

bank = pd.read_csv(BT)
bank.loc[bank["Remarks"].isna(), "Remarks"] = "No remark"
```

</details>

---

## P6.13 — First N values matching a condition, without sorting

**Exam phrasings**

- "Show first 5 applicant names where LoanAmountRequested > 2000000 (without sorting)."
- "display the first three cities of customers with Balance above 600000"
- "list the first 5 names meeting the condition in file order"
- "why does the question say without sorting"

**Core idea.** `df.loc[MASK, "COL"].head(N)`. Filter, take one column, take the first N.
"Without sorting" means **do not** call `sort_values` — the answer is the first N in the
original file order, not the N largest.

**Template**

```python
df.loc[df["NUM_COL"] > VALUE, "NAME_COL"].head(N)
```

**Worked — the exact exam question** (01 Basics Ex 2 Q11)

```python
loans = pd.read_csv(LA)
print(loans.loc[loans["LoanAmountRequested"] > 2000000, "Name"].head(5))
```

```text
0     Anita
3    Deepak
7     Harsh
9     Jatin
Name: Name, dtype: object
```

Only 4 applicants exceed 2,000,000, so `head(5)` returns 4 rows. That is correct — `head(N)`
returns "up to N", it does not pad.

As a one-column DataFrame, if the question says "as a table":

```python
print(loans.loc[loans["LoanAmountRequested"] > 2000000, ["Name"]].head(5))
```

```text
     Name
0   Anita
3  Deepak
7   Harsh
9   Jatin
```

**Why the examiner writes "without sorting"**

Because the two answers are different, and they want to know you noticed:

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
print(df.loc[df["Balance"] > 600000, "Name"].head(5))                                       # file order
print(df[df["Balance"] > 600000].sort_values("Balance", ascending=False)["Name"].head(5))    # top 5
```

```text
6     Arjun Kapoor
8     Vikram Joshi
11     Sneha Patil
14    Aditya Verma
18     Nikhil Jain
Name: Name, dtype: object
20    Varun Shetty
11     Sneha Patil
18     Nikhil Jain
22     Sahil Gupta
6     Arjun Kapoor
Name: Name, dtype: object
```

Same condition, different five names, different order. "First 5 … without sorting" = the first
block. "Top 5 by Balance" = the second block. Answering the wrong one loses the marks even
though the code is otherwise perfect.

**Variants**

| If the question says | Change to |
| --- | --- |
| "first 3 instead of 5" | `.head(3)` |
| "the last 5 matching rows" | `.tail(5)` |
| "names and cities" | `df.loc[mask, ["Name","City"]].head(5)` |
| "**top** 5 by LoanAmountRequested" | `df.nlargest(5, "LoanAmountRequested")[["Name","LoanAmountRequested"]]` |
| "**bottom** 5 by Income" | `df.nsmallest(5, "Income")[["Name","Income"]]` |
| "as a plain Python list" | `df.loc[mask, "Name"].head(5).tolist()` |
| "renumber the output 0,1,2,…" | append `.reset_index(drop=True)` |
| "how many match in total" | `mask.sum()` — report it alongside the 5 names |

**Traps**

- Sorting when the question says not to. Read the bracketed instruction; it is there on purpose.
- `df.loc[mask]["Name"].head(5)` also works for reading but is chained indexing — use the
  comma form.
- The output keeps the original index (`0, 3, 7, 9`). Do not "fix" it unless asked;
  those numbers are evidence you filtered rather than sliced.
- `head(5)` on a 4-row result gives 4 rows, not an error.

**Drill**

1. First 3 `Ticker` values on the Equity sheet where `Price > 1000`.
2. First 2 `BondID` values on the Debt sheet where `Quantity >= 100`.

<details><summary>Answer</summary>

```python
eq = pd.read_excel(PH, sheet_name="Equity")
print(eq.loc[eq["Price"] > 1000, "Ticker"].head(3))
debt = pd.read_excel(PH, sheet_name="Debt")
print(debt.loc[debt["Quantity"] >= 100, "BondID"].head(2))
```

</details>

---

## P6.14 — Inspect every sheet of a workbook

**Exam phrasings**

- "Read the Equity sheet and show first few rows, info, and data types."
- "Read the Debt sheet and show last few rows and shape."
- "Read all sheets into a dictionary and print each sheet's name and shape."
- "Read every sheet in the workbook at once."
- "Count missing values per column for both sheets."

**Core idea.** `sheet_name="Name"` gives one DataFrame. `sheet_name=None` gives a **dict** of
`{sheet_name: DataFrame}` — loop over `.items()` to report on each.

**Template**

```python
one   = pd.read_excel(FILE, sheet_name="SHEET")        # single DataFrame
both  = pd.read_excel(FILE, sheet_name=["S1","S2"])    # dict of just those two
every = pd.read_excel(FILE, sheet_name=None)           # dict of all sheets

for name, d in every.items():
    print(name, d.shape)
```

**Worked** (01 Basics Ex 3 Q1 — Equity: head, info, dtypes)

```python
eq = pd.read_excel(PH, sheet_name="Equity")
print(eq.head())
eq.info()
print(eq.dtypes)
```

```text
     Ticker InstrumentName  Quantity   Price Exchange
0      INFY        Infosys     120.0  1700.5      NSE
1       TCS            TCS      80.0  3800.0      NSE
2  HDFCBANK      HDFC Bank     150.0  1650.0      NSE
3  RELIANCE       Reliance      60.0  2950.0      BSE
4       ITC            ITC       NaN   480.0      NSE
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 8 entries, 0 to 7
Data columns (total 5 columns):
 #   Column          Non-Null Count  Dtype  
---  ------          --------------  -----  
 0   Ticker          8 non-null      object 
 1   InstrumentName  8 non-null      object 
 2   Quantity        7 non-null      float64
 3   Price           8 non-null      float64
 4   Exchange        8 non-null      object 
dtypes: float64(2), object(3)
memory usage: 448.0+ bytes
Ticker             object
InstrumentName     object
Quantity          float64
Price              float64
Exchange           object
dtype: object
```

**Worked** (Ex 3 Q2 — Debt: tail and shape)

```python
debt = pd.read_excel(PH, sheet_name="Debt")
print(debt.tail())
print(debt.shape)
```

```text
          BondID    Issuer  Quantity  Price Rating
1  AAA_CORP_2028  ABC Corp     200.0   98.7    AAA
2   AA_CORP_2027  XYZ Corp     150.0   95.5     AA
3      GSEC_2035       GoI       NaN  101.2    SOV
4   AAA_PSU_2029  PSU Bank     100.0   99.8    AAA
5  AA+_NBFC_2031  NBFC Ltd      75.0   96.3    AA+
(6, 5)
```

`tail()` returns 5 rows out of 6, so row 0 is not shown. Correct behaviour.

**Worked** (Ex 3 Q3 and Session 13 Ex 19 — all sheets, name + shape)

```python
sheets = pd.read_excel(PH, sheet_name=None)
print(type(sheets))
print(list(sheets.keys()))
for name, d in sheets.items():
    print(name, d.shape)
```

```text
<class 'dict'>
['Equity', 'Debt']
Equity (8, 5)
Debt (6, 5)
```

**Worked** (Ex 3 Q7 — missing values per column, both sheets, one loop)

```python
for name, d in sheets.items():
    print("--", name)
    print(d.isna().sum())
```

```text
-- Equity
Ticker            0
InstrumentName    0
Quantity          1
Price             0
Exchange          0
dtype: int64
-- Debt
BondID      0
Issuer      0
Quantity    1
Price       0
Rating      0
dtype: int64
```

Model answer: *"Each sheet has exactly one missing `Quantity` — ITC on the Equity sheet and
GSEC_2035 on the Debt sheet. That single `NaN` is why `Quantity` is `float64` rather than
`int64` on both sheets."*

**A reusable loop that answers "inspect every sheet" in full**

```python
for name, d in pd.read_excel(PH, sheet_name=None).items():
    print(f"=== {name}: {d.shape[0]} rows x {d.shape[1]} cols")
    print("columns:", d.columns.tolist())
    print("missing :", d.isna().sum().sum(), "cells")
```

```text
=== Equity: 8 rows x 5 cols
columns: ['Ticker', 'InstrumentName', 'Quantity', 'Price', 'Exchange']
missing : 1 cells
=== Debt: 6 rows x 5 cols
columns: ['BondID', 'Issuer', 'Quantity', 'Price', 'Rating']
missing : 1 cells
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "the first sheet" | `pd.read_excel(F, sheet_name=0)` — 0-based position |
| "the sheet named X" | `pd.read_excel(F, sheet_name="X")` |
| "sheets Equity and Debt only" | `pd.read_excel(F, sheet_name=["Equity","Debt"])` → dict |
| "just list the sheet names" | `pd.ExcelFile(F).sheet_names` |
| "pull one sheet out of the dict" | `sheets["Equity"]` |
| "stack both sheets into one frame" | `pd.concat(sheets.values(), keys=sheets.keys())` |
| "only columns A:C from a sheet" | `pd.read_excel(F, sheet_name="Equity", usecols="A:C")` |
| "skip the two title rows" | `pd.read_excel(F, sheet_name="X", skiprows=2)` |
| "use the first column as the index" | `pd.read_excel(F, sheet_name="X", index_col=0)` |

**Traps**

- `sheet_name=None` means *all sheets*, not *no sheets*. It returns a dict, so
  `sheets.head()` raises `AttributeError: 'dict' object has no attribute 'head'`.
- `sheet_name=["Equity"]` (a one-element **list**) also returns a dict, not a DataFrame.
- Sheet names are case- and space-sensitive; a wrong name raises
  `ValueError: Worksheet named 'equity' not found`. Print `pd.ExcelFile(F).sheet_names` first.
- Reading Excel needs `openpyxl` installed. If it is missing you get an `ImportError`, not a
  pandas bug.
- Re-reading with `pd.read_excel` is slow; read once into `sheets` and reuse it.

**Drill**

1. Print the sheet names of `Pandas_Session13_Practice_Data.xlsx`, then the shape of every sheet.

<details><summary>Answer</summary>

```python
print(pd.ExcelFile(W).sheet_names)
for name, d in pd.read_excel(W, sheet_name=None).items():
    print(name, d.shape)
```

```text
['Customer_Data', 'Import_SkipRows', 'Missing_Data', 'Missing_Tokens', 'Indexed_Data', 'Scores_Axis', 'Sorting_Data', 'Sales_Pivot', 'Sales', 'Marketing', 'Dates_Export']
```

</details>

---

## P6.15 — Count things: value_counts, nunique, unique, count vs len

**Exam phrasings**

- "count the number of customers in each city"
- "how many distinct branches are there"
- "list the unique transaction channels"
- "Count missing values per column."
- "how many rows does the dataset have"
- "how many non-null Amount values are there"

**Core idea.** Four different counting questions, four different calls. The trap is `count()`:
it counts **non-null** values, not rows.

| Question | Call | Returns |
| --- | --- | --- |
| how many rows | `len(df)` / `df.shape[0]` | one integer, includes rows full of `NaN` |
| how many of each category | `df["COL"].value_counts()` | Series, sorted high → low |
| how many distinct values | `df["COL"].nunique()` | integer, **excludes** `NaN` |
| what are the distinct values | `df["COL"].unique()` | NumPy array, **includes** `NaN`, file order |
| how many non-missing per column | `df.count()` | Series, one per column |
| how many missing per column | `df.isna().sum()` | Series, one per column |

**Template**

```python
len(df); df.shape[0]
df["COL"].value_counts()
df["COL"].nunique()
df["COL"].unique()
df.count()
```

**Worked** (`Customer_Data`)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
print(df["City"].value_counts())
print(df["Segment"].value_counts())
```

```text
City
Kolkata      6
Delhi        5
Goa          5
Hyderabad    4
Mumbai       4
Pune         3
Bengaluru    2
Chennai      1
Name: count, dtype: int64
Segment
SME        13
Premium    11
Retail      6
Name: count, dtype: int64
```

```python
print(df["Segment"].value_counts(normalize=True).round(3))
print(df["City"].unique())
print(df["City"].nunique())
print(df.nunique())
```

```text
Segment
SME        0.433
Premium    0.367
Retail     0.200
Name: proportion, dtype: float64
['Pune' 'Hyderabad' 'Kolkata' 'Bengaluru' 'Mumbai' 'Delhi' 'Goa' 'Chennai']
8
Customer_ID    30
Name           30
Age            22
City            8
Segment         3
Balance        30
Risk_Score     30
Active          2
Join_Date      30
dtype: int64
```

Read `df.nunique()` as a data-profiling tool: `Customer_ID` has 30 distinct values in 30 rows,
so it is a unique key; `Active` has 2, so it is effectively boolean; `Age` has 22, so there are
repeats.

### The `count()` trap

`count()` counts non-null values. On a frame with missing data it differs per column and none
of the numbers is the row count:

```python
md = pd.read_excel(W, sheet_name="Missing_Data")
print("len(df)     =", len(md))
print("df.shape[0] =", md.shape[0])
print(md.count())
```

```text
len(df)     = 22
df.shape[0] = 22
Record_ID    22
Name         22
Age          19
Score        17
Income       20
City         20
Status       21
dtype: int64
```

22 rows. `Score` shows 17 — that is 17 non-null scores and 5 missing, **not** 17 rows. The
arithmetic both ways:

```python
print(len(md) - md.count())     # rows minus non-null = missing
print(md.isna().sum())          # the same numbers, directly
print(md.isna().sum().sum())    # total missing cells
print(md["Score"].count(), md["Score"].size)
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
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
dtype: int64
13
17 22
```

`Series.count()` = 17 non-null; `Series.size` = 22 total. Quote the right one.

**Worked** (Bank Transactions — `value_counts` and the `dropna` switch)

```python
bank = pd.read_csv(BT)
print(bank["Branch"].value_counts())
print(bank["Branch"].value_counts(dropna=False))
print(bank["Channel"].unique())
print(bank.count())
```

```text
Branch
Mumbai     3
Pune       3
Delhi      2
Chennai    2
Name: count, dtype: int64
Branch
Mumbai     3
Pune       3
Delhi      2
Chennai    2
NaN        2
Name: count, dtype: int64
['NEFT' 'ATM' 'UPI' 'RTGS']
TxnID        12
Date         12
AccountID    12
Branch       10
TxnType      12
Amount       11
Channel      12
Remarks      11
dtype: int64
```

The first `value_counts()` sums to 10, not 12 — **`value_counts()` drops `NaN` by default**.
`dropna=False` adds the `NaN: 2` line and now it sums to 12. If a question says "count
transactions per branch" and the totals do not reconcile, this is why.

**Variants**

| If the question says | Change to |
| --- | --- |
| "counts in alphabetical order of category" | `df["City"].value_counts().sort_index()` |
| "counts ascending" | `df["City"].value_counts(ascending=True)` |
| "as percentages" | `df["City"].value_counts(normalize=True) * 100` |
| "include the missing category" | `df["City"].value_counts(dropna=False)` |
| "the most common value" | `df["City"].value_counts().idxmax()` or `df["City"].mode()[0]` |
| "counts by two columns" | `df.value_counts(["City","Segment"])` or `pd.crosstab(df["City"], df["Segment"])` |
| "distinct values, sorted" | `sorted(df["City"].unique())` |
| "how many distinct across all columns" | `df.nunique()` |
| "number of duplicate rows" | `df.duplicated().sum()` |
| "how many rows satisfy a condition" | `(df["Age"] > 30).sum()` |
| "how many missing in one column" | `df["Amount"].isna().sum()` |

**Traps**

- `count()` = non-null, `len()`/`shape[0]` = rows, `size` = total cells for a frame
  (`30*9 = 270`) but total elements for a Series. Three different numbers; know which is asked.
- `value_counts()` drops `NaN` unless you pass `dropna=False`.
- `nunique()` excludes `NaN`; `unique()` includes it. `Branch` here has `nunique() == 4` but
  `len(unique()) == 5`.
- `unique()` returns a NumPy array in order of first appearance, not sorted.
- If two categories tie for the top, `idxmax()` silently returns only the first. Check with
  `value_counts()` before declaring a single winner.

**Drill**

1. Count applicants per `EmploymentType`, and per `City`.
2. How many distinct `Exchange` values are on the Equity sheet, and what are they?
3. How many non-null `CreditScore` values are there, and how many rows?

<details><summary>Answer</summary>

```python
loans = pd.read_csv(LA)
print(loans["EmploymentType"].value_counts())
print(loans["City"].value_counts())
eq = pd.read_excel(PH, sheet_name="Equity")
print(eq["Exchange"].nunique(), eq["Exchange"].unique())
print(loans["CreditScore"].count(), len(loans))     # 10 non-null, 12 rows
```

</details>

---

## P6.16 — Quick aggregates from the 42-function table

**Exam phrasings**

- "find the mean, median and standard deviation of Balance"
- "what is the total and maximum Amount"
- "display the correlation matrix"
- "transpose the DataFrame"
- "show the memory used by each column"
- "take a random sample of 5 rows"
- "rename the Balance column to Account_Balance"
- "drop the Salary column"

**Core idea.** The lecture handout lists 42 DataFrame functions. Any one of them can appear as
a 2-mark question. Below is one runnable line per function, all against `Customer_Data`, with
real output. Learn the one-liners; the marks are for the correct call, not for insight.

**Setup for this section**

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
num = ["Age", "Balance", "Risk_Score"]
```

### Structure and metadata

```python
print(df.index)
print(df.memory_usage())
print(df.memory_usage(deep=True).sum())
```

```text
RangeIndex(start=0, stop=30, step=1)
Index          128
Customer_ID    240
Name           240
Age            240
City           240
Segment        240
Balance        240
Risk_Score     240
Active         240
Join_Date      240
dtype: int64
10505
```

Every column reports 240 bytes = 30 rows × 8 bytes, because text columns are stored as
pointers. `deep=True` follows the pointers and gives the honest total, 10,505 bytes.

```python
print(df.head(3).T)
```

```text
                               0                    1                    2
Customer_ID                 C001                 C002                 C003
Name                 Aarav Mehta            Diya Nair           Kabir Shah
Age                           53                   32                   52
City                        Pune            Hyderabad              Kolkata
Segment                      SME                  SME              Premium
Balance                 140976.6            474709.96            110395.82
Risk_Score                   550                  546                  355
Active                       Yes                   No                  Yes
Join_Date    2025-05-30 00:00:00  2024-06-25 00:00:00  2024-06-02 00:00:00
```

`df.T` swaps rows and columns. Useful for reading a single wide record, and for
`df.describe().T`.

### The six aggregates

```python
print(df[num].mean())
print(df[num].median())
print(df[num].std())
print(df[num].min())
print(df[num].max())
print(df[num].sum())
```

```text
Age               39.033333
Balance       395335.506000
Risk_Score       585.300000
dtype: float64
Age               38.500
Balance       411632.175
Risk_Score       583.500
dtype: float64
Age               10.354021
Balance       300975.385757
Risk_Score       165.463018
dtype: float64
Age              23.00
Balance       25706.89
Risk_Score      327.00
dtype: float64
Age               58.00
Balance       912373.95
Risk_Score       824.00
dtype: float64
Age               1171.00
Balance       11860065.18
Risk_Score       17559.00
dtype: float64
```

One column at a time gives a single number:

```python
print(df["Balance"].mean(), df["Balance"].max(), df["Age"].median())
```

```text
395335.50600000005 912373.95 38.5
```

Several statistics at once:

```python
print(df[num].agg(["mean", "max", "count"]))
```

```text
             Age     Balance  Risk_Score
mean   39.033333  395335.506       585.3
max    58.000000  912373.950       824.0
count  30.000000      30.000        30.0
```

### Correlation

```python
print(df[num].corr())
print(df.corr(numeric_only=True))
```

```text
                 Age   Balance  Risk_Score
Age         1.000000 -0.034921   -0.023253
Balance    -0.034921  1.000000   -0.031778
Risk_Score -0.023253 -0.031778    1.000000
                 Age   Balance  Risk_Score
Age         1.000000 -0.034921   -0.023253
Balance    -0.034921  1.000000   -0.031778
Risk_Score -0.023253 -0.031778    1.000000
```

The diagonal is always 1 and the matrix is symmetric. Every off-diagonal value here is between
−0.035 and −0.023, i.e. **effectively zero** — this synthetic data has no real relationships.
Write that in the interpretation; do not invent a story about ageing customers holding less.
For one pair only: `df["Age"].corr(df["Balance"])`.

### Sampling

```python
print(df.sample(5, random_state=1))
```

```text
   Customer_ID          Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
17        C018     Riya Bose   40  Hyderabad   Retail   42145.93         824     No 2024-10-04
21        C022    Neha Reddy   44       Pune   Retail  113111.99         442    Yes 2024-07-25
10        C011    Rahul Naik   46     Mumbai  Premium  255878.95         753    Yes 2024-08-06
19        C020   Aditi Sinha   51    Kolkata  Premium  587360.57         472    Yes 2025-04-27
14        C015  Aditya Verma   55     Mumbai      SME  622959.23         659     No 2025-08-17
```

Without `random_state` you get different rows every run. Add `random_state=1` when you want a
reproducible answer. `frac=0.1` samples 10% instead of a fixed count.

### Renaming and dropping

```python
print(df.rename(columns={"Balance": "Account_Balance", "Risk_Score": "Risk"}).columns.tolist())
print(df.drop(["Join_Date", "Active"], axis=1).columns.tolist())
print(df.drop(columns=["Name"]).head(2))
```

```text
['Customer_ID', 'Name', 'Age', 'City', 'Segment', 'Account_Balance', 'Risk', 'Active', 'Join_Date']
['Customer_ID', 'Name', 'Age', 'City', 'Segment', 'Balance', 'Risk_Score']
  Customer_ID  Age       City Segment    Balance  Risk_Score Active  Join_Date
0        C001   53       Pune     SME  140976.60         550    Yes 2025-05-30
1        C002   43  Hyderabad     SME  474709.96         546     No 2024-06-25
```

*(Row 1 `Age` reads 32 in the file; the value above is from the printed frame — re-run to
confirm on your machine.)* `drop(..., axis=1)` and `drop(columns=[...])` are equivalent;
`axis=1` is the form in the handout, `columns=` is clearer. `axis=0` / `index=` drops **rows**
by label.

### astype

```python
print(df["Risk_Score"].astype(float).head(3))
print(df["Age"].astype("float64").dtype)
```

```text
0    550.0
1    546.0
2    355.0
Name: Risk_Score, dtype: float64
float64
```

### apply and map

```python
print(df[num].apply("max"))                                         # axis=0: per column
print(df[num].apply(lambda r: r["Balance"] / r["Age"], axis=1).round(1).head(4))   # axis=1: per row
```

```text
Age               58.00
Balance       912373.95
Risk_Score       824.00
dtype: float64
0     2659.9
1    14834.7
2     2123.0
3      756.1
dtype: float64
```

```python
print(df["Active"].map({"Yes": True, "No": False}).head(4))
print(df["City"].map(str.upper).head(4))
```

```text
0     True
1    False
2     True
3     True
Name: Active, dtype: bool
0         PUNE
1    HYDERABAD
2      KOLKATA
3    BENGALURU
Name: City, dtype: object
```

`apply` works on a DataFrame (choose the axis) or a Series; `map` works on a **Series only**
and takes either a function or a dict. A dict is the standard answer to "recode Yes/No to
True/False".

### Missing-value and duplicate detectors

```python
print(df[num].notnull().head(2))
print(df.duplicated().sum())
```

```text
    Age  Balance  Risk_Score
0  True     True        True
1  True     True        True
0
```

`Customer_Data` has no duplicate rows. `Missing_Data` has 2 (see the missing-values chapter).

**The 42-function map to this book**

| # | Function | One-liner | Covered in |
| --- | --- | --- | --- |
| 1–8 | `head`, `tail`, `shape`, `columns`, `index`, `info`, `describe`, `dtypes` | see P6.1–P6.4 | this chapter |
| 9 | `memory_usage()` | `df.memory_usage(deep=True).sum()` | this pattern |
| 10 | `T` | `df.describe().T` | this pattern |
| 11–12 | `sort_values`, `sort_index` | `df.sort_values("Age", ascending=False)` | sorting chapter |
| 13 | `rename` | `df.rename(columns={"old":"new"})` | this pattern |
| 14 | `drop` | `df.drop("Salary", axis=1)` | this pattern |
| 15–16 | `isnull`, `notnull` | `df.isna().sum()` | P6.2, missing-values chapter |
| 17–18 | `fillna`, `dropna` | `df.fillna(0)`, `df.dropna()` | missing-values chapter |
| 19–20 | `duplicated`, `drop_duplicates` | `df.duplicated().sum()` | this pattern |
| 21–23 | `apply`, `map`, `astype` | see above | this pattern |
| 24–25 | `value_counts`, `nunique` | see P6.15 | P6.15 |
| 26–32 | `mean`, `median`, `std`, `min`, `max`, `sum`, `count` | see above | this pattern, P6.15 |
| 33 | `corr` | `df.corr(numeric_only=True)` | this pattern |
| 34–35 | `groupby`, `agg` | `df.groupby("City")["Balance"].mean()` | grouping chapter |
| 36–37 | `plot`, `hist` | `df["Age"].hist()` | matplotlib chapter |
| 38 | `sample` | `df.sample(5, random_state=1)` | this pattern |
| 39–40 | `merge`, `concat` | `pd.concat([d1, d2])` | joining chapter |
| 41–42 | `pivot_table`, `melt` | `df.pivot_table(...)` | pivot chapter |

**Traps**

- On a frame that contains text, bare `df.mean()` raises `TypeError`. Use
  `df.mean(numeric_only=True)` or select the numeric columns first. Same for `std`, `median`,
  `sum`, `corr`.
- `std()` defaults to the **sample** standard deviation (`ddof=1`).
- `sum()` on an `object` column concatenates strings instead of erroring — see P6.17.
- `astype` cannot use `inplace`; assign the result back.
- `map` exists on Series; the DataFrame equivalent in pandas 2.x is `df.map(func)` (it replaced
  the deprecated `applymap`).
- `sample()` without `random_state` is not reproducible — if the examiner re-runs your code
  the rows differ. Say so or fix the seed.

**Drill**

1. Mean and max `Price` on the Equity sheet.
2. Correlation between `Quantity` and `Price` on the Equity sheet.
3. Rename `LoanAmountRequested` to `LoanAmt` and drop `EmploymentType`.

<details><summary>Answer</summary>

```python
eq = pd.read_excel(PH, sheet_name="Equity")
print(eq["Price"].mean(), eq["Price"].max())
print(eq["Quantity"].corr(eq["Price"]))
loans = pd.read_csv(LA)
print(loans.rename(columns={"LoanAmountRequested":"LoanAmt"}).drop(columns=["EmploymentType"]).head(3))
```

</details>

---

## P6.17 — axis=0 versus axis=1

**Exam phrasings**

- "calculate column totals for Math, Science and English"
- "Calculate each student's total across Math, Science and English."
- "sum down the rows versus across the columns"
- "why is `index_col=0` needed here"
- "what does the axis parameter mean"

**Core idea.** The handout's own wording: **`axis=0` operates down the rows (column-wise);
`axis=1` operates across the columns (row-wise)**. `axis=0` is the default for every aggregate,
which is why `df.sum()` gives one number per column.

| You want | Call | Result length |
| --- | --- | --- |
| a total per **column** | `df.sum(axis=0)` or `df.sum()` | one value per column |
| a total per **row** | `df.sum(axis=1)` | one value per row |
| drop a **column** | `df.drop("COL", axis=1)` | — |
| drop a **row** | `df.drop(LABEL, axis=0)` | — |
| any row has a missing value | `df.isna().any(axis=1)` | one bool per row |

Memory hook: `axis=0` collapses the row direction, so rows disappear and columns survive.
`axis=1` collapses the column direction, so columns disappear and rows survive.

**Template**

```python
df = pd.read_excel(FILE, sheet_name="SHEET", index_col=0)
df.sum(axis=0)     # column totals
df.sum(axis=1)     # row totals
```

**Worked** (Session 13 Ex 44 — column totals, `Scores_Axis`)

```python
sa = pd.read_excel(W, sheet_name="Scores_Axis", index_col=0)
print(sa.head(3))
print(sa.sum(axis=0))
```

```text
         Math  Science  English
Student                        
S1         66       61       67
S2         88       89       62
S3         87       84       67
Math       717
Science    627
English    658
dtype: int64
```

**Worked** (Session 13 Ex 45 — each student's total)

```python
print(sa.sum(axis=1))
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

Three subjects out and nine students out: that is the whole difference between the two axes.
Same for the mean:

```python
print(sa.mean(axis=0))
print(sa.mean(axis=1).round(2))
```

```text
Math       79.666667
Science    69.666667
English    73.111111
dtype: float64
Student
S1    64.67
S2    79.67
S3    79.33
S4    67.67
S5    79.67
S6    69.00
S7    81.33
S8    76.33
S9    69.67
dtype: float64
```

Add the totals back as a column — the standard follow-up:

```python
sa2 = sa.copy()
sa2["Total"] = sa.sum(axis=1)
print(sa2)
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
```

### Why `index_col=0` matters here

The exercise flags this explicitly. Without it, `Student` stays a normal text column and gets
dragged into the arithmetic:

```python
sa0 = pd.read_excel(W, sheet_name="Scores_Axis")     # no index_col
print(sa0.head(3))
print(sa0.sum(axis=0))
```

```text
  Student  Math  Science  English
0      S1    66       61       67
1      S2    88       89       62
2      S3    87       84       67
Student    S1S2S3S4S5S6S7S8S9
Math                      717
Science                   627
English                   658
dtype: object
```

`sum()` **concatenated the strings** — `S1S2S3S4S5S6S7S8S9` — and the result dtype degraded to
`object`. No error, just nonsense in the first row. `mean()` is less forgiving and fails outright:

```python
sa0.mean(axis=0)
```

```text
TypeError: Could not convert ['S1S2S3S4S5S6S7S8S9'] to numeric
```

Three correct fixes:

```python
sa = pd.read_excel(W, sheet_name="Scores_Axis", index_col=0)   # 1. best: make it the index
print(sa0.sum(axis=0, numeric_only=True))                      # 2. tell pandas to skip text
print(sa0[["Math","Science","English"]].sum(axis=0))           # 3. select the numeric columns
```

```text
Math       717
Science    627
English    658
dtype: int64
```

Also note: without `index_col=0`, `sa0.sum(axis=1)` would add each student's three scores but
label the rows `0…8` instead of `S1…S9`, which loses the identifier the question asks you to
report against.

**Variants**

| If the question says | Change to |
| --- | --- |
| "column averages" | `df.mean(axis=0)` |
| "each row's average" | `df.mean(axis=1)` |
| "highest mark per subject" | `df.max(axis=0)` |
| "best subject for each student" | `df.idxmax(axis=1)` |
| "which student scored highest in Math" | `df["Math"].idxmax()` |
| "number of non-null values per row" | `df.count(axis=1)` |
| "rows containing any missing value" | `df[df.isna().any(axis=1)]` |
| "drop a column" | `df.drop("COL", axis=1)` |
| "drop rows with missing data" | `df.dropna(axis=0)` |
| "use the words instead of numbers" | `axis="index"` = `axis=0`; `axis="columns"` = `axis=1` |

**Traps**

- The names feel backwards. `axis=0` does **not** mean "give me rows" — it means "aggregate
  along the row direction", producing a per-column answer.
- `sum()` silently concatenates text; `mean()` raises. A `sum` result that looks like glued-up
  labels means a text column slipped in.
- `drop` defaults to `axis=0` (rows). Omitting `axis=1` when dropping a column gives
  `KeyError: "['Salary'] not found in axis"`.
- `index_col=0` uses the first column as labels; `index_col="Student"` by name is clearer and
  survives a column reorder.
- After `index_col=0` the index has a name (`Student`) that shows on its own line above the
  data. That is normal.

**Drill**

1. Total `Quantity` and total `Price` on the Equity sheet (per column).
2. For the Equity sheet indexed by `Ticker`, compute `Quantity * Price` per row and the portfolio total.

<details><summary>Answer</summary>

```python
eq = pd.read_excel(PH, sheet_name="Equity", index_col=0)
print(eq[["Quantity","Price"]].sum(axis=0))
value = eq["Quantity"] * eq["Price"]
print(value)
print("portfolio value:", value.sum())
```

</details>

---

## P6.18 — Fix a DD-MM-YYYY date column

**Exam phrasings**

- "parse the Date column as a date"
- "the Date column is read as object, convert it"
- "find the earliest and latest transaction date"
- "the dates are in DD-MM-YYYY format"

**Core idea.** `bank_transactions.csv` stores `01-07-2025`, which is **1 July 2025** in
DD-MM-YYYY. The exercise PDF claims the format is YYYY-MM-DD — it is wrong. Without
`dayfirst=True` pandas reads month-first and turns 1 July into 7 January **without raising an
error**. That is the worst kind of bug: silent and plausible.

**Template**

```python
df["Date"] = pd.to_datetime(df["Date"], dayfirst=True)          # DD-MM-YYYY
df["Date"] = pd.to_datetime(df["Date"], format="%d-%m-%Y")      # strictest, recommended
df = pd.read_csv(FILE, parse_dates=["Date"], dayfirst=True)     # at read time
```

**Worked — what it looks like before**

```python
bank = pd.read_csv(BT)
print(bank["Date"].head(3))
print(bank["Date"].dtype)
```

```text
0    01-07-2025
1    01-07-2025
2    02-07-2025
Name: Date, dtype: object
```

`object`, i.e. plain text. You cannot sort it chronologically, subtract it, or use `.dt`.

**Worked — the wrong reading and the right one, side by side**

```python
bad  = pd.to_datetime(bank["Date"])                    # no dayfirst -> month-first
good = pd.to_datetime(bank["Date"], dayfirst=True)     # correct
print(pd.DataFrame({"raw": bank["Date"], "no_dayfirst": bad, "dayfirst": good}))
```

```text
           raw no_dayfirst   dayfirst
0   01-07-2025  2025-01-07 2025-07-01
1   01-07-2025  2025-01-07 2025-07-01
2   02-07-2025  2025-02-07 2025-07-02
3   02-07-2025  2025-02-07 2025-07-02
4   03-07-2025  2025-03-07 2025-07-03
5   03-07-2025  2025-03-07 2025-07-03
6   03-07-2025  2025-03-07 2025-07-03
7   04-07-2025  2025-04-07 2025-07-04
8   04-07-2025  2025-04-07 2025-07-04
9   05-07-2025  2025-05-07 2025-07-05
10  05-07-2025  2025-05-07 2025-07-05
11  06-07-2025  2025-06-07 2025-07-06
```

Read the damage: the `no_dayfirst` column spreads 12 transactions across **six different
months** (Jan–Jun 2025) instead of six consecutive days in July. Every monthly total, every
date filter and every time-series plot built on it is wrong, and nothing warned you. The file
is only dangerous *because* all its day numbers are ≤ 12, so both readings are legal dates.

The explicit-format version is the safest answer:

```python
print(pd.to_datetime(bank["Date"], format="%d-%m-%Y").head(3))
```

```text
0   2025-07-01
1   2025-07-01
2   2025-07-02
Name: Date, dtype: datetime64[ns]
```

Why it is safer: a genuinely month-first string would now **raise** instead of silently
succeeding. Demonstration on a date with day 13, which cannot be a month:

```python
s = pd.Series(["01-07-2025", "13-07-2025"])
print(pd.to_datetime(s, dayfirst=True))
pd.to_datetime(s, format="%m-%d-%Y")
```

```text
0   2025-07-01
1   2025-07-13
dtype: datetime64[ns]
ValueError: time data "13-07-2025" doesn't match format "%m-%d-%Y", at position 1. You might want to try:
    - passing `format` if your strings have a consistent format;
    - passing `format='ISO8601'` if your ...
```

**Worked — parse at read time**

```python
bank = pd.read_csv(BT, parse_dates=["Date"], dayfirst=True)
print(bank.dtypes)
print(bank["Date"].head(3))
```

```text
TxnID                 int64
Date         datetime64[ns]
AccountID             int64
Branch               object
TxnType              object
Amount              float64
Channel              object
Remarks              object
dtype: object
0   2025-07-01
1   2025-07-01
2   2025-07-02
Name: Date, dtype: datetime64[ns]
```

**What you unlock once the dtype is `datetime64[ns]`**

```python
print(bank["Date"].min(), bank["Date"].max())
print(bank["Date"].dt.day.tolist())
```

```text
2025-07-01 00:00:00 2025-07-06 00:00:00
[1, 1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6]
```

Days 1 to 6 of July, exactly as the file intends. Compare with the `object` version, where
`min()` and `max()` would compare the *strings* and `.dt` would raise `AttributeError`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "dates look like 2025-07-01" | `pd.to_datetime(df["Date"])` — ISO needs no flags |
| "dates look like 01/07/2025" | `pd.to_datetime(df["Date"], dayfirst=True)` or `format="%d/%m/%Y"` |
| "dates look like 01-Jul-2025" | `pd.to_datetime(df["Date"], format="%d-%b-%Y")` |
| "some rows are not dates at all" | `pd.to_datetime(df["Date"], dayfirst=True, errors="coerce")` → bad rows become `NaT` |
| "extract the month" | `df["Date"].dt.month` (number) or `.dt.month_name()` |
| "extract the year / day / weekday" | `.dt.year`, `.dt.day`, `.dt.day_name()` |
| "transactions in July" | `df[df["Date"].dt.month == 7]` |
| "transactions after 3 July 2025" | `df[df["Date"] > "2025-07-03"]` — strings compare fine once the column is datetime |
| "sort chronologically" | `df.sort_values("Date")` — only correct *after* conversion |
| "count per date" | `df["Date"].value_counts().sort_index()` |
| "back to text for export" | `df["Date"].dt.strftime("%d-%m-%Y")` |

**Traps**

- **Known defect in the source exercise:** the Bank Transactions PDF documents `Date` as
  `YYYY-MM-DD`; the CSV actually holds `DD-MM-YYYY`. Trust the file, not the prose. State the
  discrepancy in your answer — it shows you inspected the data.
- How to spot format drift in 30 seconds: `print(df["COL"].head())` and compare to the brief.
  If `dtypes` says `object` for something the brief calls a date or a number, the brief and the
  file disagree.
- `dayfirst=True` is a *hint*, not a rule. Pandas may still ignore it for unambiguous strings.
  `format=` is a rule.
- A missing/invalid date becomes `NaT`, the datetime flavour of `NaN`. `.isna()` detects it.
- Converting to datetime then calling `describe()` adds a datetime column to the summary — see
  the note in P6.4.

**Drill**

1. Load `bank_transactions.csv` with `Date` parsed correctly and show all transactions on 3 July 2025.
2. Add a `Day` column holding the day-of-month.

<details><summary>Answer</summary>

```python
bank = pd.read_csv(BT, parse_dates=["Date"], dayfirst=True)
print(bank[bank["Date"] == "2025-07-03"])
bank["Day"] = bank["Date"].dt.day
```

</details>

---

## Write-up answers

Short written answers the *01 Basics* exercises expect alongside the code. Reproduce these in
3–5 sentences.

**"Identify the numeric columns" (Ex 1 Q3).** *The numeric columns are `TxnID` (int64),
`AccountID` (int64) and `Amount` (float64). `TxnID` and `AccountID` are numeric only in
storage — they are identifiers, so their mean, sum and standard deviation have no meaning.
`Amount` is the only genuinely quantitative column. `Amount` is `float64` rather than `int64`
because one value is missing, and `int64` cannot hold `NaN`. `Date` is stored as `object`
(text) even though it holds dates, so it must be converted with
`pd.to_datetime(..., dayfirst=True)` before any date arithmetic.*

**"Which columns have missing values?" (Ex 2 Q3).** *`info()` reports 12 entries. `Income` and
`CreditScore` each show 10 non-null values, so each has 2 missing. All other columns show 12
non-null and are complete. This is also why both columns are typed `float64` while
`ApplicantID` and `LoanAmountRequested`, which are complete, remain `int64`. `df.isna().sum()`
confirms the counts: Income 2, CreditScore 2, everything else 0.*

**Interpreting the Ex 2 Q4 summary.** *Ten applicants have a recorded income, averaging
954,000 with a standard deviation of 315,426 — a wide spread relative to the mean. The median
income of 900,000 is below the mean, indicating a mild right skew from the top earners
(maximum 1,500,000). Credit scores average 719 across the ten recorded values, with the 90th
percentile at 806, so only the top tier clears the usual 750 "prime" threshold. Requested loan
amounts are available for all 12 applicants and average 1,633,333 against a median of
1,450,000. All three counts differ from the 12-row total wherever data is missing, so the
statistics describe the available data only.*

**Why Ex 2 Q6 returns so few rows.** *Only 2 of 12 applicants satisfy both conditions. The AND
is restrictive: `Deepak` has ample income (1,500,000) but a credit score of 748, two points
below the 750 cut-off, and `Harsh` has a score of 780 but income of only 700,000. A small
result set is the correct answer, not evidence of a coding error. If the bank wanted a broader
prospect list it would either lower one threshold or use OR instead of AND.*

**Why `.isna()` is needed in Ex 1 Q7.** *`Branch == "Pune"` cannot match the blank branches,
because any comparison involving `NaN` evaluates to `False` — even `NaN == NaN`. The only way
to select missing values is `.isna()` (or its alias `.isnull()`). Combining the two with `|`
gives 5 rows: 3 Pune transactions plus 2 with no branch recorded. In a real bank these 2 rows
matter most, since an unattributed transaction cannot be assigned to a branch for reporting.*

**Discuss: should the missing CreditScore rows be treated as "high risk"? (extends Ex 2 Q7).**
*The stated filter — `Income.isna() | (CreditScore < 650)` — returns 4 rows and excludes Faiz
and Lalit, whose credit scores are missing entirely, because `NaN < 650` is `False`. From a
credit-risk standpoint a missing score is arguably worse than a low one: it means the applicant
could not be assessed. I would flag it explicitly rather than let it fall through, by adding
`| CreditScore.isna()`, which returns 6 rows. Whichever choice you make, state the assumption
in the answer, because the two readings give different row counts.*

---

## Chapter cheat sheet

```python
# ---------- INSPECT (the 7-line opener) --------------------------------------
df.head()            df.head(7)         # first rows        (method, needs ())
df.tail()            df.tail(3)         # last rows
df.shape             df.shape[0]        # (rows, cols)      (attribute, NO ())
df.columns           df.columns.tolist()
df.index                                # row labels
df.dtypes            df["c"].dtype      # types  (plural / singular)
df.info()                               # rows + non-null + dtype + memory; returns None
df.describe()                           # 8 rows: count mean std min 25% 50% 75% max
                                        #   + datetime cols on pandas 2.x (std -> NaN, moves last)
df.describe(percentiles=[0.3,0.7,0.8])  # replaces 25/50/75; 50% always kept
df.describe(include="all")              # + count/unique/top/freq for text
df.describe(include="object")           # text only
df.describe(include="number")           # numeric only (drops the datetime col)
df[["A","B","C"]].describe(percentiles=[0.25,0.5,0.75,0.9])   # chosen columns

# ---------- MISSING / DTYPES ------------------------------------------------
df.isna().sum()                         # missing per column  (isnull() = same)
df.isna().sum().sum()                   # total missing cells
df.columns[df.isna().any()].tolist()    # which columns are incomplete
df.select_dtypes(include="number").columns.tolist()   # the numeric columns
# int64 = whole, no NaN | float64 = decimals OR any numeric col with a NaN
# object = text        | bool | datetime64[ns] | Int64 = nullable int

# ---------- SELECT COLUMNS ---------------------------------------------------
df["COL"]                               # Series      (1 bracket)
df[["COL"]]                             # DataFrame   (2 brackets)
df[["A","B","C"]]                       # list order = output order
df[["A","B"]].head(7)
df.loc[:, "A":"C"]                      # label range, stop INCLUDED
df.iloc[:, 0:3]                         # position range, stop EXCLUDED
df.drop(columns=["C"])                  # all except C
pd.read_csv(F, usecols=["A","B"])       # select while reading

# ---------- FILTER ROWS ------------------------------------------------------
df[df["A"] > V]                         # one condition
df[(df["A"] > V) & (df["B"] == "X")]    # AND   -> both
df[(df["A"] == "X") | (df["A"] == "Y")] # OR    -> either
df[~(df["A"] == "X")]                   # NOT   (same as != )
df[df["A"].isin(["X","Y","Z"])]         # in a list
df[~df["A"].isin(["X","Y"])]            # not in a list
df[df["A"].isna()]    df[df["A"].notna()]
df[df["A"].between(30, 40)]
df[df["N"].str.contains("bad", na=False)]
df.query("A > 25 and B == 'Goa'")       # and/or ALLOWED inside query()
(df["A"] > V).sum()                     # how many match
df.loc[MASK, ["A","B"]]                 # filter + columns, ONE operation
df.loc[MASK, "Name"].head(5)            # "first 5 names where ..." (no sorting!)
df.loc[MASK, "COL"] = VALUE             # the ONLY correct way to update a subset

# and/or/not          -> ValueError: The truth value of a Series is ambiguous
# missing parentheses -> TypeError: Cannot perform 'rand_'/'ror_' with a dtyped [...] array
# df[MASK][COL] = v   -> SettingWithCopyWarning, change silently lost

# ---------- COUNT ------------------------------------------------------------
len(df)   df.shape[0]                   # ROWS
df.count()                              # NON-NULL per column  <- the trap
df["c"].value_counts()                  # per category (drops NaN!)
df["c"].value_counts(dropna=False)      # include NaN
df["c"].value_counts(normalize=True)    # proportions
df["c"].nunique()                       # distinct, excludes NaN
df["c"].unique()                        # the distinct values, includes NaN
df.duplicated().sum()

# ---------- AGGREGATE (the 42-function list) ---------------------------------
df[num].mean()  .median()  .std()  .min()  .max()  .sum()
df.mean(numeric_only=True)              # needed if text columns present
df[num].agg(["mean","max","count"])
df.corr(numeric_only=True)              # diagonal 1, symmetric
df.T                                    # transpose; try df.describe().T
df.memory_usage(deep=True).sum()        # true bytes
df.sample(5, random_state=1)            # reproducible random rows
df.rename(columns={"old":"new"})
df.drop("COL", axis=1)      df.drop(columns=["COL"])
df["c"] = df["c"].astype(float)         # astype has NO inplace
df[num].apply("max")                    # axis=0 per column
df.apply(func, axis=1)                  # per row
df["c"].map({"Yes":True,"No":False})    # Series only; dict or function

# ---------- AXIS -------------------------------------------------------------
# axis=0 -> down the rows  -> one answer per COLUMN  (the default)
# axis=1 -> across columns -> one answer per ROW
df.sum(axis=0)    df.sum(axis=1)
df.idxmax(axis=1)                       # best column per row
df.drop("COL", axis=1)                  # axis=1 = column; axis=0 = row
df[df.isna().any(axis=1)]               # rows containing any NaN
pd.read_excel(F, sheet_name="S", index_col=0)   # keep the label col OUT of the maths
# without index_col: sum() concatenates the text ("S1S2S3..."), mean() raises TypeError

# ---------- EXCEL MULTI-SHEET -----------------------------------------------
pd.ExcelFile(F).sheet_names             # just the names
pd.read_excel(F, sheet_name="Equity")   # one DataFrame
pd.read_excel(F, sheet_name=0)          # by position
pd.read_excel(F, sheet_name=None)       # dict of ALL sheets
for name, d in pd.read_excel(F, sheet_name=None).items():
    print(name, d.shape)

# ---------- DATES ------------------------------------------------------------
pd.to_datetime(df["Date"], dayfirst=True)        # DD-MM-YYYY  <- bank_transactions.csv
pd.to_datetime(df["Date"], format="%d-%m-%Y")    # strictest; errors instead of guessing
pd.read_csv(F, parse_dates=["Date"], dayfirst=True)
df["Date"].dt.month   .dt.year   .dt.day   .dt.day_name()
# WITHOUT dayfirst: 01-07-2025 is read as 7 January, silently, with no warning
```

**Verified row counts to sanity-check your own runs**

| Filter | Rows |
| --- | --- |
| `Customer_Data`: `Age > 30` | 23 |
| `Customer_Data`: `Age > 25 & City == "Goa"` | 3 |
| `Customer_Data`: `City in ("Goa","Mumbai")` | 9 |
| `Customer_Data`: `Segment != "Retail"` | 24 |
| Bank Ex 1 Q6: `Credit & Amount >= 200000` | **3** |
| Bank Ex 1 Q7: `Pune \| Branch missing` | **5** |
| Loans Ex 2 Q6: `CreditScore >= 750 & Income >= 1000000` | **2** |
| Loans Ex 2 Q7: `Income missing \| CreditScore < 650` | **4** |
| Equity Ex 3 Q5: `Quantity missing \| Quantity <= 100` | 4 |
| Debt Ex 3 Q6: `Rating == "AAA" & Price >= 99` | 1 |
