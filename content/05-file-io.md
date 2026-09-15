---
id: 05-file-io
part: "Part II — Pandas Foundations"
title: "Reading and Writing Files"
blurb: "Every read_csv / read_excel / to_csv / to_excel parameter the examiner can ask for, with the exact call for each file shape."
order: 50
covers:
  - "Session 13 — Exercises 1–32 (Setup & Core Structures, Reading CSV, Reading Excel, File Paths, Writing CSV, Writing Excel)"
  - "Data files input and output using Pandas — full lecture handout"
  - "01 Basics — Exercise 1 (date parsing trap), Exercise 3 (multi-sheet workbook)"
datafiles:
  - "Pandas exercises/Class exercises/customers.csv"
  - "Pandas exercises/Class exercises/customers_semicolon.csv"
  - "Pandas exercises/Class exercises/customers_tab.tsv"
  - "Pandas exercises/Class exercises/customers_preamble.csv"
  - "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
  - "Pandas exercises/01 Basics/Exercise 3 - Portfolio Holdings/portfolio_holdings.xlsx"
  - "Pandas exercises/01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv"
patterns:
  - id: P5.1
    title: "Import pandas and build a Series"
    phrasings:
      - "Install pandas if needed, then import it using the alias shown in the slides"
      - "Create a Series containing 12, 18, 25, 31 without specifying an index. Print it and observe the default index"
      - "Create a Series containing 100, 200, 300 with labels A, B, C. Print it"
      - "import pandas with the standard alias pd"
      - "create a Series with a custom index and print its dtype"
      - "why is pandas imported as pd"
  - id: P5.2
    title: "Build a DataFrame from scratch"
    phrasings:
      - "Create a DataFrame from a dictionary with columns Name, Age and City and at least four rows. Print the DataFrame"
      - "build a DataFrame from a dict of lists"
      - "build a DataFrame from a list of dictionaries"
      - "create a DataFrame from a list of lists and supply the column names"
      - "make a small DataFrame with custom row labels"
  - id: P5.3
    title: "Read a CSV with the right separator"
    phrasings:
      - "Read the CSV file into a DataFrame and display it"
      - "Read the file while explicitly stating that the separator is a comma"
      - "Read the semicolon-separated file correctly. First try reading it without sep and observe what goes wrong"
      - "Read the tab-separated file correctly"
      - "load the .tsv file into pandas"
      - "the file opened as one single column - fix it"
      - "read a pipe-delimited file"
  - id: P5.4
    title: "Use a column as the row index while reading"
    phrasings:
      - "Read the file and use the first column as the row labels"
      - "read the CSV using Customer_ID as the index"
      - "set the ID column as the row index at read time"
      - "read the sheet keeping Student as the row label"
      - "use index_col so the text column is not included in the calculation"
  - id: P5.5
    title: "Read only some columns (usecols)"
    phrasings:
      - "Read only Customer_ID, Name and Age"
      - "import only the three columns you need"
      - "read only columns A:C from the worksheet"
      - "load only selected columns from the Equity sheet and show first 3 rows"
      - "read columns by position instead of by name"
  - id: P5.6
    title: "Read only some rows, and skip junk rows"
    phrasings:
      - "Read only the first 10 data rows"
      - "Skip the first line and load the actual table"
      - "Load the table by skipping the first two non-data rows"
      - "the file has a title line above the header - load it correctly"
      - "read a sample of the first 5 records only"
      - "this sheet holds 18 customers, not 30"
  - id: P5.7
    title: "Control the header row (header, names)"
    phrasings:
      - "Read the file with header=0 explicitly specified. Compare the result with Exercise 5"
      - "the file has no header row - supply your own column names"
      - "read the file treating the first row as data, not as column names"
      - "rename the columns while reading the file"
      - "the header is on the second row of the file"
  - id: P5.8
    title: "Combine usecols, index_col and nrows in one call"
    phrasings:
      - "In one command, read Customer_ID, Name and Age, use Customer_ID as the index, and load only the first 5 rows"
      - "Note that index_col must refer to a column that is also listed in usecols"
      - "in a single read_csv call select columns, set the index and limit the rows"
      - "why does index_col raise ValueError Index ... invalid"
  - id: P5.9
    title: "Read an Excel worksheet"
    phrasings:
      - "Read the first worksheet by its 0-based sheet index"
      - "Read the worksheet named Customer_Data"
      - "Read only columns A:C"
      - "Load the table by skipping the first two non-data rows"
      - "read the Equity sheet and show first few rows, info, and data types"
      - "open the .xlsx workbook in pandas"
  - id: P5.10
    title: "Read every sheet at once, or a named list of sheets"
    phrasings:
      - "Read every sheet in the workbook at once. Display the returned object's type and the sheet names it contains"
      - "Read all sheets into a dictionary and print each sheet's name and shape"
      - "read only the Equity and Debt sheets"
      - "list the sheet names in the workbook without loading the data"
      - "loop over every worksheet and print its shape"
  - id: P5.11
    title: "File paths, and the Windows backslash problem"
    phrasings:
      - "Move a copy of customers.csv to another folder and read it using a complete absolute path"
      - "On Windows try forward slashes and a raw string path; on macOS or Linux use a normal forward-slash path"
      - "explain the three ways to write a Windows path in Python"
      - "why does pandas raise FileNotFoundError"
      - "what is the difference between an absolute and a relative path"
      - "which package must be installed to read .xlsx files"
  - id: P5.12
    title: "Write a CSV (to_csv)"
    phrasings:
      - "Export the DataFrame to output_customers.csv without writing the index"
      - "Export the DataFrame using a semicolon as the delimiter"
      - "Export only Name, City and Balance to a new CSV file, without the index"
      - "save the filtered rows to a new CSV"
      - "write the results out without the extra unnamed first column"
  - id: P5.13
    title: "Write an Excel file (to_excel)"
    phrasings:
      - "Write the DataFrame to output.xlsx on a sheet named Summary, without the index"
      - "Export only Name and Balance columns to Excel"
      - "Write the data beginning at row offset 2 and column offset 1"
      - "Write the data with the first row frozen when the file is opened in Excel"
      - "Write the data without column headers"
      - "Write the data and represent missing values as N/A"
      - "Write floating-point values with two decimal places"
  - id: P5.14
    title: "Write several DataFrames into one workbook (ExcelWriter)"
    phrasings:
      - "Read Sales and Marketing into separate DataFrames and write both into one new workbook on separate worksheets"
      - "export two tables to one Excel file on different sheets"
      - "use pd.ExcelWriter with a with statement"
      - "add a new sheet to an existing workbook"
      - "write Equity and Debt into a single output workbook"
  - id: P5.15
    title: "Control date and datetime formats on export"
    phrasings:
      - "Using ExcelWriter, write date and datetime columns with YYYY-MM-DD and YYYY-MM-DD HH:MM:SS formats as listed in the slides"
      - "convert the date column with dt.date then export"
      - "Run it once without that conversion to see that date_format is ignored"
      - "why does date_format have no effect on my date column"
      - "format the timestamp column as YYYY-MM-DD HH:MM:SS in the exported Excel file"
  - id: P5.16
    title: "Parse dates correctly when reading"
    phrasings:
      - "Load the dataset and display the first 5 and last 5 rows"
      - "convert the Date column to datetime"
      - "the dates are DD-MM-YYYY - parse them correctly"
      - "why are all my transactions showing different months"
      - "use dayfirst=True when reading the transaction file"
      - "parse dates at read time with parse_dates"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| P5.1 — Import pandas and build a Series | The question says "import pandas", "create a Series" |
| P5.2 — Build a DataFrame from scratch | "Create a DataFrame from a dictionary…" — no file given |
| P5.3 — Read a CSV with the right separator | `.csv`, `.tsv`, semicolon file, "it came in as one column" |
| P5.4 — Use a column as the row index while reading | "use the first column as row labels", `index_col` |
| P5.5 — Read only some columns | "read only Customer_ID, Name and Age", `usecols='A:C'` |
| P5.6 — Read only some rows, and skip junk rows | `nrows`, `skiprows`, a title line above the header |
| P5.7 — Control the header row | `header=0`, `header=None`, `names=[...]` |
| P5.8 — Combine usecols, index_col and nrows | "in one command…" |
| P5.9 — Read an Excel worksheet | `.xlsx`, `sheet_name=`, `usecols='A:C'`, `skiprows=` |
| P5.10 — Read every sheet at once | `sheet_name=None`, `sheet_name=['Equity','Debt']` |
| P5.11 — File paths and the backslash problem | Absolute vs relative, `r""`, `FileNotFoundError` |
| P5.12 — Write a CSV | `to_csv`, `index=False`, `sep=';'`, `columns=[...]` |
| P5.13 — Write an Excel file | `to_excel` and all nine of its parameters |
| P5.14 — Write several DataFrames into one workbook | `pd.ExcelWriter`, two sheets, `mode='a'` |
| P5.15 — Control date and datetime formats on export | `date_format`, `datetime_format`, `.dt.date` |
| P5.16 — Parse dates correctly when reading | `parse_dates`, `dayfirst=True`, DD-MM-YYYY files |

## The file-reading decision tree

**This table is the most useful thing in the chapter.** Match the description of the file to the row, copy the call.

| The file / the question says | The exact call |
| --- | --- |
| plain `.csv` | `pd.read_csv(PATH)` |
| "state explicitly that the separator is a comma" | `pd.read_csv(PATH, sep=",")` |
| semicolon-separated (`a;b;c`) | `pd.read_csv(PATH, sep=";")` |
| tab-separated / `.tsv` | `pd.read_csv(PATH, sep="\t")` |
| pipe-separated (`a\|b\|c`) | `pd.read_csv(PATH, sep="\|")` |
| "everything loaded into one single column" | you forgot `sep=` — look at the column name, it tells you the real delimiter |
| unknown / mixed whitespace delimiter | `pd.read_csv(PATH, sep=r"\s+")` |
| "use the first column as row labels" | `pd.read_csv(PATH, index_col=0)` |
| "use Customer_ID as the index" | `pd.read_csv(PATH, index_col="Customer_ID")` |
| "read only these columns" | `pd.read_csv(PATH, usecols=["A","B","C"])` |
| "read only the first N data rows" | `pd.read_csv(PATH, nrows=N)` |
| "there is a title / junk line above the header" | `pd.read_csv(PATH, skiprows=1)` |
| "two junk rows above the header" | `pd.read_csv(PATH, skiprows=2)` |
| "the file has no header row" | `pd.read_csv(PATH, header=None, names=["A","B"])` |
| "the header is on the 2nd line" | `pd.read_csv(PATH, header=1)` (same result as `skiprows=1`) |
| `-`, `?`, `###`, `NA` used for blanks | `pd.read_csv(PATH, na_values=["-","?","###","NA"])` |
| dates stored as `01-07-2025` (DD-MM-YYYY) | `pd.read_csv(PATH, parse_dates=["Date"], dayfirst=True)` |
| `.xlsx`, first sheet | `pd.read_excel(PATH)` or `pd.read_excel(PATH, sheet_name=0)` |
| `.xlsx`, named sheet | `pd.read_excel(PATH, sheet_name="Customer_Data")` |
| `.xlsx`, "only columns A to C" | `pd.read_excel(PATH, sheet_name=S, usecols="A:C")` |
| `.xlsx`, junk rows on top | `pd.read_excel(PATH, sheet_name=S, skiprows=2)` |
| `.xlsx`, "read all the sheets" | `pd.read_excel(PATH, sheet_name=None)` → **dict** |
| `.xlsx`, "read the Equity and Debt sheets" | `pd.read_excel(PATH, sheet_name=["Equity","Debt"])` → **dict** |
| "just list the sheet names" | `pd.ExcelFile(PATH).sheet_names` |
| "save to CSV without the index" | `df.to_csv(PATH, index=False)` |
| "save to CSV with a semicolon" | `df.to_csv(PATH, sep=";", index=False)` |
| "save only these columns" | `df.to_csv(PATH, columns=["A","B"], index=False)` |
| "save to Excel on a sheet named Summary" | `df.to_excel(PATH, sheet_name="Summary", index=False)` |
| "save two tables into one workbook" | `with pd.ExcelWriter(PATH) as w: df1.to_excel(w, sheet_name="S1"); df2.to_excel(w, sheet_name="S2")` |

## Setup and base paths

Define the base path once. **In the exam, swap these two strings for the path the invigilator gives you.**

```python
import pandas as pd

# In the exam: replace with your own folder.
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/Pandas exercises/Class exercises/"
W    = BASE + "Pandas_Session13_Practice_Data.xlsx"

# Only so the printed tables below are not truncated. Not examinable.
pd.set_option("display.width", 200)
pd.set_option("display.max_columns", 30)
```

`.xlsx` reading and writing needs the `openpyxl` engine. If pandas raises
`ImportError: Missing optional dependency 'openpyxl'`, run this once in a terminal (or in a
notebook cell with a leading `!`):

```text
pip install openpyxl
```

Version used for every output in this chapter: pandas 2.3.3, openpyxl 3.1.5, Python 3.9.6, macOS.

## Reading a file you have never seen

Run these five lines **before** you answer anything. They take ten seconds and they catch every
mismatch between the question paper and the actual file.

```python
df = pd.read_excel(W, sheet_name="Missing_Data")   # or pd.read_csv(...)
print(df.shape)          # 1. how many rows and columns really exist
print(df.head())         # 2. what the data looks like
print(df.columns.tolist())  # 3. the REAL column names
print(df.dtypes)         # 4. is Amount numeric? is Date a datetime or a string?
print(df.isna().sum())   # 5. where the missing values are
```

```text
(22, 7)
  Record_ID         Name   Age  Score     Income       City    Status
0      R001  Aarav Mehta  54.0   79.0   65833.65  Hyderabad  Inactive
1      R002    Diya Nair   NaN   87.0   80027.09  Bengaluru   Pending
2      R003   Kabir Shah  24.0   59.0  124850.58     Mumbai  Inactive
3      R004   Meera Iyer  25.0    NaN   76126.52        Goa  Inactive
4      R005  Rohan Desai  43.0   82.0  130406.43      Delhi   Pending
['Record_ID', 'Name', 'Age', 'Score', 'Income', 'City', 'Status']
Record_ID     object
Name          object
Age          float64
Score        float64
Income       float64
City          object
Status        object
dtype: object
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
dtype: int64
```

What each line tells you:

| Line | What you learn | What it saves you from |
| --- | --- | --- |
| `.shape` | true row/column count | question says 30 rows, sheet has 18 |
| `.head()` | delimiter worked, index looks right | one-column CSV, junk header rows |
| `.columns` | real spelling of column names | question says `Revenue`, file says `DisbursedAmount` |
| `.dtypes` | `object` where you expected numeric or datetime | `-`/`###` tokens, `Date` still a string |
| `.isna().sum()` | which columns have blanks | a `mean()` that silently skips rows |

**If `.columns` disagrees with the question paper, answer with the real column names and write one
line saying so.** The exercise PDFs in this course drift from their own data files in at least four
places; the examiner accepts the corrected reading.

---

## P5.1 — Import pandas and build a Series

**Exam phrasings**

- "Install pandas if needed, then import it using the alias shown in the slides"
- "Create a Series containing 12, 18, 25, 31 without specifying an index. Print it and observe the default index"
- "Create a Series containing 100, 200, 300 with labels A, B, C. Print it"
- "import pandas with the standard alias pd"
- "create a Series with a custom index and print its dtype"

**Core idea.** `import pandas as pd` — the alias is a universal convention, not a requirement:
every textbook, every StackOverflow answer and every slide in this course writes `pd.`, so code is
readable across sources and shorter to type. A `Series` is one labelled column. With no `index=` it
gets the default integer labels `0..n-1`; pandas prints the labels on the left, the values on the
right, and the **dtype on the last line**.

**Template**

```python
import pandas as pd

s = pd.Series([V1, V2, V3])                      # default index 0..n-1
s = pd.Series([V1, V2, V3], index=[L1, L2, L3])  # custom labels
```

**Worked** (Session 13, Ex 1–3)

```python
import pandas as pd

s = pd.Series([12, 18, 25, 31])
print(s)
print(s.index)
print(s.dtype)
```

```text
0    12
1    18
2    25
3    31
dtype: int64
RangeIndex(start=0, stop=4, step=1)
int64
```

```python
s2 = pd.Series([100, 200, 300], index=["A", "B", "C"])
print(s2)
```

```text
A    100
B    200
C    300
dtype: int64
```

**Variants**

| If the question says | Change to | Real output |
| --- | --- | --- |
| "from a dictionary" | `pd.Series({"A":100,"B":200,"C":300})` | keys become the index — same result as above |
| "give the Series a name" | `pd.Series([12.5,18.0,25.5], index=["Jan","Feb","Mar"], name="Sales")` | prints `Name: Sales, dtype: float64` |
| "mixed types" | `pd.Series([12, "x", 3.5])` | `dtype: object` |
| "just the values / just the labels" | `s.values`, `s.index` | |
| "install pandas" | `pip install pandas` in a terminal, `!pip install pandas` in a notebook | |

**Traps**

- The default index is `0..n-1`, so `pd.Series([12,18,25,31])` has labels 0,1,2,3 — **not** 1,2,3,4.
- One integer value plus one string makes the whole Series `object`, and arithmetic then fails. Say
  which dtype you got if the question says "observe".
- `import pandas` alone means you must write `pandas.Series(...)`. Never mix: pick `as pd`.

**Drill**

1. Create a Series of balances 15000, 22500, 31000 labelled `SB-01`, `SB-02`, `SB-03` and print it.

<details><summary>Answer</summary>

```python
print(pd.Series([15000, 22500, 31000], index=["SB-01", "SB-02", "SB-03"]))
```

```text
SB-01    15000
SB-02    22500
SB-03    31000
dtype: int64
```

</details>

---

## P5.2 — Build a DataFrame from scratch

**Exam phrasings**

- "Create a DataFrame from a dictionary with columns Name, Age and City and at least four rows. Print the DataFrame"
- "build a DataFrame from a dict of lists"
- "build a DataFrame from a list of dictionaries"
- "create a DataFrame from a list of lists and supply the column names"
- "make a small DataFrame with custom row labels"

**Core idea.** `pd.DataFrame(...)` accepts three shapes the examiner can ask for: a **dict of lists**
(keys become columns), a **list of dicts** (one dict per row), or a **list of lists plus
`columns=`**. All three give an identical frame.

**Template**

```python
df = pd.DataFrame({"COL1": [...], "COL2": [...]})             # dict of lists
df = pd.DataFrame([{"COL1": v, "COL2": v}, {...}])            # list of dicts
df = pd.DataFrame([[v, v], [v, v]], columns=["COL1","COL2"])  # list of lists
```

**Worked** (Session 13, Ex 4)

```python
data = {"Name": ["Aarav Mehta", "Diya Nair", "Kabir Shah", "Meera Iyer"],
        "Age":  [53, 32, 52, 34],
        "City": ["Pune", "Hyderabad", "Kolkata", "Bengaluru"]}
df = pd.DataFrame(data)
print(df)
print(df.shape)
print(df.dtypes)
```

```text
          Name  Age       City
0  Aarav Mehta   53       Pune
1    Diya Nair   32  Hyderabad
2   Kabir Shah   52    Kolkata
3   Meera Iyer   34  Bengaluru
(4, 3)
Name    object
Age      int64
City    object
dtype: object
```

**Variants**

```python
# list of dicts
rows = [{"Name":"Aarav Mehta","Age":53,"City":"Pune"},
        {"Name":"Diya Nair","Age":32,"City":"Hyderabad"}]
print(pd.DataFrame(rows))

# list of lists + columns=
vals = [["Aarav Mehta",53,"Pune"], ["Diya Nair",32,"Hyderabad"]]
print(pd.DataFrame(vals, columns=["Name","Age","City"]))
```

```text
          Name  Age       City
0  Aarav Mehta   53       Pune
1    Diya Nair   32  Hyderabad
          Name  Age       City
0  Aarav Mehta   53       Pune
1    Diya Nair   32  Hyderabad
```

| If the question says | Change to |
| --- | --- |
| "use customer IDs as row labels" | `pd.DataFrame(data, index=["C001","C002","C003","C004"])` |
| "only these columns, in this order" | `pd.DataFrame(data, columns=["City","Name"])` |
| "from a Series" | `pd.DataFrame({"Balance": s})` |
| "from two lists" | `pd.DataFrame({"Name": names, "Age": ages})` |

With `index=`:

```text
             Name  Age       City
C001  Aarav Mehta   53       Pune
C002    Diya Nair   32  Hyderabad
C003   Kabir Shah   52    Kolkata
C004   Meera Iyer   34  Bengaluru
```

**Traps**

- Every list in the dict must have the same length:

```python
pd.DataFrame({"Name": ["a", "b"], "Age": [1]})
```

```text
ValueError: All arrays must be of the same length
```

- A dict of **scalars** (not lists) raises `ValueError: If using all scalar values, you must pass
  an index`. Wrap each value in a list, or pass `index=[0]`.
- Dict keys are the column names, so the order of the dict is the column order in pandas 2.x.

**Drill**

1. Build a 2-row DataFrame with columns `Ticker`, `Qty`, `Price` for INFY (120 @ 1700.5) and TCS (80 @ 3800.0).

<details><summary>Answer</summary>

```python
print(pd.DataFrame({"Ticker": ["INFY","TCS"], "Qty": [120, 80], "Price": [1700.5, 3800.0]}))
```

```text
  Ticker  Qty   Price
0   INFY  120  1700.5
1    TCS   80  3800.0
```

</details>

---

## P5.3 — Read a CSV with the right separator

**Exam phrasings**

- "Read the CSV file into a DataFrame and display it"
- "Read the file while explicitly stating that the separator is a comma"
- "Read the semicolon-separated file correctly. First try reading it without sep and observe what goes wrong"
- "Read the tab-separated file correctly"
- "load the .tsv file into pandas"
- "the file opened as one single column - fix it"

**Core idea.** `pd.read_csv(PATH)` assumes the separator is a comma. If the file uses something
else, every line stays glued together and you get **one column whose name is the entire header
line**. `sep=` fixes it.

**Template**

```python
df = pd.read_csv(PATH)             # comma (default)
df = pd.read_csv(PATH, sep=",")    # comma, stated explicitly
df = pd.read_csv(PATH, sep=";")    # semicolon
df = pd.read_csv(PATH, sep="\t")   # tab  (.tsv files)
```

**Worked — plain comma file** (Session 13, Ex 5 and Ex 6)

```python
df = pd.read_csv(BASE + "customers.csv")
print(df.shape)
print(df.head())

df_explicit = pd.read_csv(BASE + "customers.csv", sep=",")
print(df_explicit.equals(df))
```

```text
(30, 9)
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active   Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes  2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No  2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes  2024-06-02
3        C004   Meera Iyer   34  Bengaluru      SME   25706.89         392    Yes  2024-08-02
4        C005  Rohan Desai   30     Mumbai      SME  303206.73         726     No  2024-06-29
True
```

`sep=","` is the default, so Ex 5 and Ex 6 give **byte-identical** frames — `equals()` returns `True`.

**Worked — the semicolon file read the WRONG way** (Session 13, Ex 7, part 1)

This comparison is an exam favourite. Learn to recognise the symptom.

```python
bad = pd.read_csv(BASE + "customers_semicolon.csv")     # no sep= -> broken
print(bad.shape)
print(bad.columns.tolist())
print(bad.head(3))
```

```text
(30, 1)
['Customer_ID;Name;Age;City;Segment;Balance;Risk_Score;Active;Join_Date']
  Customer_ID;Name;Age;City;Segment;Balance;Risk_Score;Active;Join_Date
0  C001;Aarav Mehta;53;Pune;SME;140976.6;550;Yes;...
1  C002;Diya Nair;32;Hyderabad;SME;474709.96;546;...
2  C003;Kabir Shah;52;Kolkata;Premium;110395.82;3...
```

**Nine columns collapsed into one.** The shape is `(30, 1)` instead of `(30, 9)` and the single
column name still contains the semicolons — that is the tell-tale sign, and it also tells you which
separator to pass.

**Worked — the same file read the RIGHT way** (Session 13, Ex 7, part 2)

```python
good = pd.read_csv(BASE + "customers_semicolon.csv", sep=";")
print(good.shape)
print(good.head(3))
```

```text
(30, 9)
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active   Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes  2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No  2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes  2024-06-02
```

**Worked — tab file** (Session 13, Ex 8)

```python
tsv = pd.read_csv(BASE + "customers_tab.tsv", sep="\t")
print(tsv.shape)
print(tsv.head(3))
```

```text
(30, 9)
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active   Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes  2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No  2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes  2024-06-02
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "tab-separated" | `sep="\t"` (also `delimiter="\t"` — an alias) |
| "pipe-separated" | `sep="\|"` |
| "colon-separated" | `sep=":"` |
| "separated by one or more spaces" | `sep=r"\s+"` |
| "let pandas guess the delimiter" | `sep=None, engine="python"` |
| "the file is in UTF-16 / has odd characters" | `encoding="utf-16"`, `encoding="latin-1"` |
| "European decimal comma (`1.234,56`)" | `sep=";", decimal=",", thousands="."` |

**Traps**

- `sep="\t"` must be a **real tab escape**, not the two characters `\` and `t`. Inside a normal
  Python string `"\t"` is correct; inside a raw string `r"\t"` is also accepted by `read_csv`
  because it treats it as a regex, but write `"\t"` in the exam.
- A `.csv` extension does not guarantee commas. Always check `.shape` — if the second number is
  `1`, you have the wrong separator.
- `delimiter=` and `sep=` are the same parameter; passing both raises an error.

**Drill**

1. Read `customers_tab.tsv` and print its shape.

<details><summary>Answer</summary>

```python
print(pd.read_csv(BASE + "customers_tab.tsv", sep="\t").shape)
```

```text
(30, 9)
```

</details>

---

## P5.4 — Use a column as the row index while reading

**Exam phrasings**

- "Read the file and use the first column as the row labels"
- "read the CSV using Customer_ID as the index"
- "set the ID column as the row index at read time"
- "read the sheet keeping Student as the row label"
- "use index_col so the text column is not included in the calculation"

**Core idea.** `index_col=0` uses the **first column by position**; `index_col="COL"` uses it **by
name**. Both move that column out of the columns and into the index, so the column count drops by
one and `.loc["C003"]` starts working.

**Template**

```python
df = pd.read_csv(PATH, index_col=0)          # by position
df = pd.read_csv(PATH, index_col="COL")      # by name  <- safer, say which column you meant
```

**Worked** (Session 13, Ex 9)

```python
df = pd.read_csv(BASE + "customers.csv", index_col=0)
print(df.head(3))
print(df.index.name, "|", df.shape)
```

```text
                    Name  Age       City  Segment    Balance  Risk_Score Active   Join_Date
Customer_ID
C001         Aarav Mehta   53       Pune      SME  140976.60         550    Yes  2025-05-30
C002           Diya Nair   32  Hyderabad      SME  474709.96         546     No  2024-06-25
C003          Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes  2024-06-02
Customer_ID | (30, 8)
```

By name gives exactly the same frame:

```python
df2 = pd.read_csv(BASE + "customers.csv", index_col="Customer_ID")
print(df2.columns.tolist())
```

```text
['Name', 'Age', 'City', 'Segment', 'Balance', 'Risk_Score', 'Active', 'Join_Date']
```

Compare with no `index_col`: **9 columns** `['Customer_ID', 'Name', 'Age', 'City', 'Segment',
'Balance', 'Risk_Score', 'Active', 'Join_Date']` and a plain `0..29` index.

**Variants**

| If the question says | Change to |
| --- | --- |
| "Excel sheet, keep Student_ID as the label" | `pd.read_excel(W, sheet_name="Indexed_Data", index_col="Student_ID")` |
| "index by City then Customer_ID" | `index_col=["City","Customer_ID"]` (MultiIndex) |
| "the index came in as an unnamed first column" | you saved with `index=True`; re-read with `index_col=0` |
| "set the index after reading instead" | `df = pd.read_csv(PATH); df = df.set_index("COL")` |
| "put the index back into a column" | `df.reset_index()` |
| "column totals, ignoring the text label column" | `pd.read_excel(W, sheet_name="Scores_Axis", index_col=0).sum(axis=0)` |

Two index columns:

```text
                              Name  Age  Segment    Balance  Risk_Score Active   Join_Date
City      Customer_ID
Pune      C001         Aarav Mehta   53      SME  140976.60         550    Yes  2025-05-30
Hyderabad C002           Diya Nair   32      SME  474709.96         546     No  2024-06-25
Kolkata   C003          Kabir Shah   52  Premium  110395.82         355    Yes  2024-06-02
Bengaluru C004          Meera Iyer   34      SME   25706.89         392    Yes  2024-08-02
```

**Traps**

- Misspell the name and you get a `ValueError`, not a warning:

```python
pd.read_csv(BASE + "customers.csv", index_col="CustID")
```

```text
ValueError: Index CustID invalid
```

- `index_col` removes the column, so `df["Customer_ID"]` afterwards raises `KeyError`. Use
  `df.index` instead.
- **Why `index_col` matters for `sum()`**: on the `Scores_Axis` sheet, without `index_col=0` the
  text column `Student` is still a column, so `df.sum(axis=1)` and `df.sum(axis=0)` try to include
  it. Set the index and the arithmetic sees only the numeric columns.

**Drill**

1. Read `customers.csv` with `Customer_ID` as the index and print the record for `C007`.

<details><summary>Answer</summary>

```python
df = pd.read_csv(BASE + "customers.csv", index_col="Customer_ID")
print(df.loc["C007"])
```

```text
Name          Arjun Kapoor
Age                     23
City                   Goa
Segment                SME
Balance          757356.26
Risk_Score             729
Active                 Yes
Join_Date       2025-01-19
Name: C007, dtype: object
```

</details>

---

## P5.5 — Read only some columns (usecols)

**Exam phrasings**

- "Read only Customer_ID, Name and Age"
- "import only the three columns you need"
- "read only columns A:C from the worksheet"
- "load only selected columns from the Equity sheet and show first 3 rows"
- "read columns by position instead of by name"

**Core idea.** `usecols=` accepts a list of **names**, a list of **0-based positions**, or (Excel
only) an **Excel letter range** like `"A:C"`. The columns always come out in **file order**, never
in the order you listed them.

**Template**

```python
df = pd.read_csv(PATH, usecols=["COL1","COL2","COL3"])   # by name
df = pd.read_csv(PATH, usecols=[0, 1, 2])                # by position
df = pd.read_excel(PATH, sheet_name=S, usecols="A:C")    # Excel letters
```

**Worked** (Session 13, Ex 10)

```python
print(pd.read_csv(BASE + "customers.csv", usecols=["Customer_ID","Name","Age"]).head(3))
print(pd.read_csv(BASE + "customers.csv", usecols=[0, 1, 2]).head(3))
```

```text
  Customer_ID         Name  Age
0        C001  Aarav Mehta   53
1        C002    Diya Nair   32
2        C003   Kabir Shah   52
  Customer_ID         Name  Age
0        C001  Aarav Mehta   53
1        C002    Diya Nair   32
2        C003   Kabir Shah   52
```

Identical results. `usecols=[0,1,2]` is the positional equivalent of naming the first three columns.

**Variants**

| If the question says | Change to | Result |
| --- | --- | --- |
| "columns A to C of the sheet" | `pd.read_excel(W, sheet_name="Customer_Data", usecols="A:C")` | `Customer_ID, Name, Age` |
| "columns A, and C to E" | `usecols="A,C:E"` | `Customer_ID, Age, City, Segment` |
| "only the ID columns and Balance" | `usecols=lambda c: c.endswith("_ID") or c == "Balance"` | `Customer_ID, Balance` |
| "all columns except Risk_Score" | read all, then `df.drop(columns=["Risk_Score"])` | `usecols` cannot exclude — drop after reading |
| "select columns after reading" | `df[["Name","Age"]]` | same result, but the whole file was parsed first |

Callable form, real output:

```text
  Customer_ID    Balance
0        C001  140976.60
1        C002  474709.96
2        C003  110395.82
```

**Traps**

- **Order is ignored.** `usecols=["Age","Name","Customer_ID"]` still returns
  `['Customer_ID', 'Name', 'Age']`. If the question demands a specific order, re-order afterwards:
  `df[["Age","Name","Customer_ID"]]`.
- A typo is fatal, and the message names the offender:

```python
pd.read_csv(BASE + "customers.csv", usecols=["Customer_ID","Nmae"])
```

```text
ValueError: Usecols do not match columns, columns expected but not found: ['Nmae']
```

- `usecols="A:C"` is **Excel only**. Passing a string to `read_csv`'s `usecols` fails.
- Excel letters are 1-based (`A` is the first column); positions are 0-based (`0` is the first
  column). Do not mix them up.

**Drill**

1. Read only `Name`, `City` and `Balance` from `customers.csv`, first 3 rows.

<details><summary>Answer</summary>

```python
print(pd.read_csv(BASE + "customers.csv", usecols=["Name","City","Balance"], nrows=3))
```

```text
          Name       City    Balance
0  Aarav Mehta       Pune  140976.60
1    Diya Nair  Hyderabad  474709.96
2   Kabir Shah    Kolkata  110395.82
```

</details>

---

## P5.6 — Read only some rows, and skip junk rows

**Exam phrasings**

- "Read only the first 10 data rows"
- "Skip the first line and load the actual table"
- "Load the table by skipping the first two non-data rows"
- "the file has a title line above the header - load it correctly"
- "read a sample of the first 5 records only"
- "this sheet holds 18 customers, not 30"

**Core idea.** `nrows=N` reads the first **N data rows** (the header does not count).
`skiprows=N` throws away the first N **physical lines of the file** before the header is looked for.

**Template**

```python
df = pd.read_csv(PATH, nrows=10)     # first 10 data rows
df = pd.read_csv(PATH, skiprows=1)   # drop 1 junk line, then use the next line as header
df = pd.read_csv(PATH, skiprows=2)   # drop 2 junk lines
```

**Worked — nrows** (Session 13, Ex 11)

```python
d = pd.read_csv(BASE + "customers.csv", nrows=10)
print(d.shape)
print(d.tail(2))
```

```text
(10, 9)
  Customer_ID            Name  Age       City  Segment    Balance  Risk_Score Active   Join_Date
8        C009    Vikram Joshi   31  Bengaluru  Premium  602935.52         377    Yes  2025-08-05
9        C010  Nisha Kulkarni   39        Goa  Premium  543586.83         744    Yes  2025-11-26
```

Ten rows, and the header still became the column names — `nrows` counts **data** rows only.

**Worked — skiprows, BEFORE** (Session 13, Ex 12)

`customers_preamble.csv` starts with a title line:

```text
Customer export for pandas skiprows practice
Customer_ID,Name,Age,City,Segment,Balance,Risk_Score,Active,Join_Date
C001,Aarav Mehta,53,Pune,SME,140976.6,550,Yes,2025-05-30
```

Read it without `skiprows` and pandas uses the title as the header:

```python
bad = pd.read_csv(BASE + "customers_preamble.csv")
print(bad.shape)
print(bad.columns.tolist())
print(bad.index.nlevels)
print(bad.head(3))
```

```text
(31, 1)
['Customer export for pandas skiprows practice']
8
                                                                          Customer export for pandas skiprows practice
Customer_ID Name        Age City      Segment Balance   Risk_Score Active                                    Join_Date
C001        Aarav Mehta 53  Pune      SME     140976.6  550        Yes                                      2025-05-30
Column2     ...
```

Note the damage: **1 column, 31 rows, and an 8-level MultiIndex**. Because the header line offered
only one field but every data line has nine, pandas treated the first eight fields of each row as
index levels. The real header row (`Customer_ID,Name,...`) became the first *data* row.

**Worked — skiprows, AFTER**

```python
good = pd.read_csv(BASE + "customers_preamble.csv", skiprows=1)
print(good.shape)
print(good.head(3))
```

```text
(30, 9)
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active   Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes  2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No  2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes  2024-06-02
```

30 rows, 9 columns, correct header. (`header=1` gives the identical frame — see P5.7.)

**Variants**

| If the question says | Change to |
| --- | --- |
| "skip the first two rows of the sheet" | `pd.read_excel(W, sheet_name="Import_SkipRows", skiprows=2)` |
| "skip rows 1, 3 and 5" | `skiprows=[0, 2, 4]` (0-based line numbers) |
| "ignore the last 17 rows (a totals block)" | `skipfooter=17` — Excel, or `engine="python"` for CSV |
| "read rows 11 to 20" | `pd.read_csv(PATH, skiprows=range(1, 11), nrows=10)` — keep line 0, the header |
| "skip blank lines" | `skip_blank_lines=True` (default) |
| "first 5 rows after reading" | `df.head(5)` — reads everything, then trims |

**Traps**

- `skiprows=1` removes a **line of the file**, not a data row. On a well-formed CSV it deletes the
  header and promotes `C001...` to the header row. Only use it when there is junk on top.
- `nrows` and `head()` are not the same: `nrows` never loads the rest of the file; `head()` loads
  everything first. Either satisfies the exam question, but say which you used.
- `skipfooter` forces the slow Python engine for CSV and is incompatible with `nrows`.

**Drill**

1. From `customers_preamble.csv`, load the table properly but keep only the first 5 records. Print the shape.

<details><summary>Answer</summary>

```python
print(pd.read_csv(BASE + "customers_preamble.csv", skiprows=1, nrows=5).shape)
```

```text
(5, 9)
```

</details>

---

## P5.7 — Control the header row (header, names)

**Exam phrasings**

- "Read the file with header=0 explicitly specified. Compare the result with Exercise 5"
- "the file has no header row - supply your own column names"
- "read the file treating the first row as data, not as column names"
- "rename the columns while reading the file"
- "the header is on the second row of the file"

**Core idea.** `header=0` is the **default**: line 0 is the column names. `header=None` means the
file has no header, so pandas numbers the columns `0..n-1` and treats line 0 as data. `names=[...]`
supplies your own column names and implies `header=None`.

**Template**

```python
df = pd.read_csv(PATH)                                    # header=0 implicitly
df = pd.read_csv(PATH, header=0)                          # same thing, stated
df = pd.read_csv(PATH, header=None)                       # no header -> columns 0,1,2,...
df = pd.read_csv(PATH, header=None, names=["A","B","C"])  # no header, my names
df = pd.read_csv(PATH, header=1)                          # header is on the 2nd line
```

**Worked — `header=0` vs the default** (Session 13, Ex 13)

```python
a = pd.read_csv(BASE + "customers.csv")
b = pd.read_csv(BASE + "customers.csv", header=0)
print(a.equals(b))
print(b.head(2))
```

```text
True
  Customer_ID         Name  Age       City Segment    Balance  Risk_Score Active   Join_Date
0        C001  Aarav Mehta   53       Pune     SME  140976.60         550    Yes  2025-05-30
1        C002    Diya Nair   32  Hyderabad     SME  474709.96         546     No  2024-06-25
```

**No difference at all.** That is the whole point of Ex 13: `header=0` is the default, so writing it
is documentation, not behaviour. Say exactly that in your answer.

**Worked — `header=None`**

```python
c = pd.read_csv(BASE + "customers.csv", header=None)
print(c.shape)
print(c.head(3))
```

```text
(31, 9)
             0            1    2          3        4          5           6       7           8
0  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score  Active   Join_Date
1         C001  Aarav Mehta   53       Pune      SME   140976.6         550     Yes  2025-05-30
2         C002    Diya Nair   32  Hyderabad      SME  474709.96         546      No  2024-06-25
```

31 rows instead of 30 (the header became row 0), integer column labels, and **every column is now
`object`** because the text header sits in the same column as the numbers.

**Worked — `header=None` + `names=[...]`**

```python
cols = ["CustID","Cust_Name","Cust_Age","Cust_City","Seg","Bal","Risk","Act","Joined"]
d = pd.read_csv(BASE + "customers.csv", header=None, names=cols, skiprows=1)
print(d.shape)
print(d.head(3))
```

```text
(30, 9)
  CustID    Cust_Name  Cust_Age  Cust_City      Seg        Bal  Risk  Act      Joined
0   C001  Aarav Mehta        53       Pune      SME  140976.60   550  Yes  2025-05-30
1   C002    Diya Nair        32  Hyderabad      SME  474709.96   546   No  2024-06-25
2   C003   Kabir Shah        52    Kolkata  Premium  110395.82   355  Yes  2024-06-02
```

`skiprows=1` is what discards the file's own header line. Without it you get 31 rows with the old
header sitting in row 0.

**Variants**

| If the question says | Change to | Real result |
| --- | --- | --- |
| "the header is on line 2" | `pd.read_csv(BASE+"customers_preamble.csv", header=1)` | `(30, 9)`, correct names |
| "rename after reading" | `df.columns = cols` or `df.rename(columns={"old":"new"})` | |
| "Excel sheet without headers" | `pd.read_excel(W, sheet_name="Sales", header=None)` | columns `0..4` |
| "Excel sheet, my own names" | `pd.read_excel(W, sheet_name="Sales", header=None, skiprows=1, names=["OID","Reg","Prod","U","Rev"])` | see below |
| "two header rows" | `header=[0,1]` (MultiIndex columns) | |

```text
    OID    Reg Prod   U   Rev
0  O001  North    C  18  1800
1  O002  North    A   6   900
2  O003   East    C  23  2300
```

**Traps**

- `names=` **without** `header=None` does not drop the existing header — it renames the columns and
  leaves the old header as data row 0, giving 31 rows:

```text
        CustID    Cust_Name Cust_Age Cust_City      Seg       Bal        Risk     Act      Joined
0  Customer_ID         Name      Age      City  Segment   Balance  Risk_Score  Active   Join_Date
1         C001  Aarav Mehta       53      Pune      SME  140976.6         550     Yes  2025-05-30
```

  Always pair `names=` with either `header=None, skiprows=1` or just `header=0` if you want to
  replace an existing header.
- `names=` must have exactly as many entries as the file has columns.
- After `header=None`, dtypes are all `object` if the header text is in the data. Check `.dtypes`.

**Drill**

1. Read `customers.csv` with no header, your own short names `ID, Nm, Ag, Ct, Sg, Bl, Rs, Ac, Jd`,
   discarding the file's header, first 3 rows.

<details><summary>Answer</summary>

```python
print(pd.read_csv(BASE + "customers.csv", header=None, skiprows=1,
                  names=["ID","Nm","Ag","Ct","Sg","Bl","Rs","Ac","Jd"], nrows=3))
```

```text
     ID           Nm  Ag         Ct       Sg         Bl   Rs   Ac          Jd
0  C001  Aarav Mehta  53       Pune      SME  140976.60  550  Yes  2025-05-30
1  C002    Diya Nair  32  Hyderabad      SME  474709.96  546   No  2024-06-25
2  C003   Kabir Shah  52    Kolkata  Premium  110395.82  355  Yes  2024-06-02
```

</details>

---

## P5.8 — Combine usecols, index_col and nrows in one call

**Exam phrasings**

- "In one command, read Customer_ID, Name and Age, use Customer_ID as the index, and load only the first 5 rows"
- "Note that index_col must refer to a column that is also listed in usecols"
- "in a single read_csv call select columns, set the index and limit the rows"
- "why does index_col raise ValueError Index ... invalid"

**Core idea.** The `read_csv` parameters are independent and stack in one call. The one constraint:
**`index_col` must name a column that survives `usecols`**, because `usecols` is applied first.

**Template**

```python
df = pd.read_csv(PATH,
                 usecols=["ID_COL", "COL1", "COL2"],
                 index_col="ID_COL",
                 nrows=5)
```

**Worked** (Session 13, Ex 14)

```python
df = pd.read_csv(BASE + "customers.csv",
                 usecols=["Customer_ID", "Name", "Age"],
                 index_col="Customer_ID",
                 nrows=5)
print(df)
print(df.shape)
```

```text
                    Name  Age
Customer_ID
C001         Aarav Mehta   53
C002           Diya Nair   32
C003          Kabir Shah   52
C004          Meera Iyer   34
C005         Rohan Desai   30
(5, 2)
```

Shape is `(5, 2)`, not `(5, 3)` — `Customer_ID` moved into the index.

**Worked — the trap: `index_col` not listed in `usecols`**

```python
pd.read_csv(BASE + "customers.csv",
            usecols=["Name", "Age"],          # Customer_ID NOT included
            index_col="Customer_ID",
            nrows=5)
```

```text
ValueError: Index Customer_ID invalid
```

Fix: add `"Customer_ID"` back into `usecols`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "index by position" | `usecols=["Customer_ID","Name","Age"], index_col=0` — 0 means "first of the **kept** columns" |
| "all positional" | `usecols=[0,1,2], index_col=0` |
| "and it is a semicolon file" | add `sep=";"` |
| "same thing from Excel" | `pd.read_excel(W, sheet_name="Indexed_Data", index_col="Student_ID", nrows=4)` |
| "select after reading instead" | `pd.read_csv(PATH).set_index("Customer_ID")[["Name","Age"]].head(5)` |

Everything at once on the semicolon file:

```python
print(pd.read_csv(BASE + "customers_semicolon.csv", sep=";",
                  usecols=["Customer_ID","City","Balance"],
                  index_col="Customer_ID", nrows=4))
```

```text
                  City    Balance
Customer_ID
C001              Pune  140976.60
C002         Hyderabad  474709.96
C003           Kolkata  110395.82
C004         Bengaluru   25706.89
```

Excel version:

```text
                    Name  Age       City  Score
Student_ID
ST101         Ananya Rao   22     Mumbai     71
ST102       Arjun Kapoor   34  Bengaluru     80
ST103         Ishita Sen   33       Pune     90
ST104       Vikram Joshi   26       Pune     95
```

**Traps**

- `index_col=0` after `usecols` refers to the first of the **selected** columns, not the first
  column in the file. With `usecols=["Name","Age","Customer_ID"]`, `index_col=0` indexes by
  `Customer_ID`? No — the kept columns come out in file order, so position 0 is `Customer_ID` only
  if it is the leftmost column in the file. Prefer naming the column.
- `nrows` is applied **after** `skiprows`, so `skiprows=1, nrows=5` gives you file lines 3–7.
- The error `ValueError: Index Customer_ID invalid` has exactly two causes: the name is misspelled,
  or it was filtered out by `usecols`.

**Drill**

1. From `customers_semicolon.csv`, read `Customer_ID`, `Name` and `Balance`, index by `Customer_ID`,
   first 5 rows.

<details><summary>Answer</summary>

```python
print(pd.read_csv(BASE + "customers_semicolon.csv", sep=";",
                  usecols=["Customer_ID","Name","Balance"],
                  index_col="Customer_ID", nrows=5))
```

```text
                    Name    Balance
Customer_ID
C001         Aarav Mehta  140976.60
C002           Diya Nair  474709.96
C003          Kabir Shah  110395.82
C004          Meera Iyer   25706.89
C005         Rohan Desai  303206.73
```

</details>

---

## P5.9 — Read an Excel worksheet

**Exam phrasings**

- "Read the first worksheet by its 0-based sheet index"
- "Read the worksheet named Customer_Data"
- "Read only columns A:C"
- "Load the table by skipping the first two non-data rows. This sheet holds 18 customers, not 30"
- "read the Equity sheet and show first few rows, info, and data types"
- "open the .xlsx workbook in pandas"

**Core idea.** `pd.read_excel(PATH, sheet_name=...)` where `sheet_name` is an **integer position**
(0-based) or the **sheet name string**. Default is `sheet_name=0`. `usecols` accepts Excel letter
ranges. `skiprows` behaves as for CSV. Requires `openpyxl`.

**Template**

```python
df = pd.read_excel(PATH)                                  # first sheet
df = pd.read_excel(PATH, sheet_name=0)                    # first sheet, stated
df = pd.read_excel(PATH, sheet_name="SHEET")              # by name
df = pd.read_excel(PATH, sheet_name="SHEET", usecols="A:C")
df = pd.read_excel(PATH, sheet_name="SHEET", skiprows=2)
```

**Worked — `sheet_name=0` and `sheet_name='Customer_Data'`** (Session 13, Ex 15, 16)

```python
df = pd.read_excel(W, sheet_name=0)
print(df.shape)
print(df.head(3))

df2 = pd.read_excel(W, sheet_name="Customer_Data")
print(df2.equals(df))
print(df.dtypes)
```

```text
(30, 9)
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes 2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No 2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes 2024-06-02
True
Customer_ID            object
Name                   object
Age                     int64
City                   object
Segment                object
Balance               float64
Risk_Score              int64
Active                 object
Join_Date      datetime64[ns]
dtype: object
```

`Customer_Data` **is** sheet 0 of this workbook, so both calls match. Note `Join_Date` arrives as
`datetime64[ns]` from Excel but as `object` (string) from the identical CSV — Excel stores a real
date type, CSV stores text.

**Worked — `usecols='A:C'`** (Session 13, Ex 17)

```python
print(pd.read_excel(W, sheet_name="Customer_Data", usecols="A:C").head(3))
```

```text
  Customer_ID         Name  Age
0        C001  Aarav Mehta   53
1        C002    Diya Nair   32
2        C003   Kabir Shah   52
```

**Worked — `skiprows=2` on Import_SkipRows** (Session 13, Ex 18)

Without `skiprows`, the two note rows poison the header:

```python
bad = pd.read_excel(W, sheet_name="Import_SkipRows")
print(bad.shape)
print(bad.columns[:3].tolist())
print(bad.iloc[0:4, 0:3])
```

```text
(20, 9)
['Customer Import Practice — the first two rows are deliberately not part of the data table.', 'Unnamed: 1', 'Unnamed: 2']
  Customer Import Practice — the first two rows are deliberately not part of the data table.   Unnamed: 1 Unnamed: 2
0  Use skiprows=2 in pd.read_excel() so row 3 bec...                                                  NaN        NaN
1                                        Customer_ID                                                 Name        Age
2                                               C001                                          Aarav Mehta         53
3                                               C002                                            Diya Nair         32
```

`Unnamed: 1 ... Unnamed: 8` column names are the signature of a junk header row in Excel.

With `skiprows=2`:

```python
good = pd.read_excel(W, sheet_name="Import_SkipRows", skiprows=2)
print(good.shape)
print(len(good), "customers")
print(good.head(3))
print(good.dtypes)
```

```text
(18, 9)
18 customers
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes 2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No 2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes 2024-06-02
Customer_ID            object
Name                   object
Age                     int64
City                   object
Segment                object
Balance               float64
Risk_Score              int64
Active                 object
Join_Date      datetime64[ns]
dtype: object
```

**Verified: exactly 18 rows**, matching the PDF's note "This sheet holds 18 customers, not 30 — that
is intentional". If you get 20 rows you forgot `skiprows`; if you get 30 you read the wrong sheet.
The dtypes are also correct again (`int64`, `float64`, `datetime64`) — with the junk header
everything was `object`.

**Variants**

| If the question says | Change to | Real result |
| --- | --- | --- |
| "columns A, and C to E" | `usecols="A,C:E"` | `Customer_ID, Age, City, Segment` |
| "by column name" | `usecols=["Name","Balance"]` | `Name, Balance` |
| "by position" | `usecols=[0, 5]` | `Customer_ID, Balance` |
| "skip rows AND take only A:C" | `skiprows=2, usecols="A:C"` | `(18, 3)` |
| "only the first 4 records" | `nrows=4` | works on Excel too |
| "ignore the last 17 rows" | `skipfooter=17` | `Sales` sheet → `(3, 5)` |
| "keep the ID as the row label" | `index_col="Student_ID"` | |
| "sheet 2 of the workbook" | `sheet_name=1` (0-based!) | |
| ".xls (old format)" | same call | needs `pip install xlrd` |

**Traps**

- Sheet names are **case- and space-sensitive**:

```python
pd.read_excel(W, sheet_name="Customer Data")   # space instead of underscore
```

```text
ValueError: Worksheet named 'Customer Data' not found
```

```python
pd.read_excel(W, sheet_name=99)
```

```text
ValueError: Worksheet index 99 is invalid, 11 worksheets found
```

- `sheet_name=0` is the **first** sheet. There is no sheet "1" meaning the first one.
- Excel letter ranges in `usecols` are 1-based letters (`A` = first column); integer `usecols` are
  0-based. `usecols="A:C"` and `usecols=[0,1,2]` select the same three columns.
- `read_excel` loads the whole workbook into memory even for one sheet. Fine for exam-sized files.

**Drill**

1. Read columns A:C of the `Marketing` sheet and print the first 3 rows.

<details><summary>Answer</summary>

```python
print(pd.read_excel(W, sheet_name="Marketing", usecols="A:C").head(3))
```

```text
  Campaign_ID Channel Region
0        M001   Email   East
1        M002   Email   West
2        M003  Search  South
```

</details>

---

## P5.10 — Read every sheet at once, or a named list of sheets

**Exam phrasings**

- "Read every sheet in the workbook at once. Display the returned object's type and the sheet names it contains"
- "Read all sheets into a dictionary and print each sheet's name and shape"
- "read only the Equity and Debt sheets"
- "list the sheet names in the workbook without loading the data"
- "loop over every worksheet and print its shape"

**Core idea.** `sheet_name=None` returns a **`dict`** mapping sheet name → DataFrame, not a
DataFrame. So does `sheet_name=["A","B"]`. A single name or integer returns a DataFrame. Getting
this wrong is the classic "`AttributeError: 'dict' object has no attribute 'head'`".

**Template**

```python
sheets = pd.read_excel(PATH, sheet_name=None)          # dict of ALL sheets
print(type(sheets))
print(sheets.keys())
for name, d in sheets.items():
    print(name, d.shape)
df = sheets["SHEET"]                                    # pull one out
```

**Worked — all sheets** (Session 13, Ex 19)

```python
sheets = pd.read_excel(W, sheet_name=None)
print(type(sheets))
print(list(sheets.keys()))
for name, d in sheets.items():
    print(name, d.shape)
```

```text
<class 'dict'>
['Customer_Data', 'Import_SkipRows', 'Missing_Data', 'Missing_Tokens', 'Indexed_Data', 'Scores_Axis', 'Sorting_Data', 'Sales_Pivot', 'Sales', 'Marketing', 'Dates_Export']
Customer_Data (30, 9)
Import_SkipRows (20, 9)
Missing_Data (22, 7)
Missing_Tokens (15, 6)
Indexed_Data (15, 5)
Scores_Axis (9, 4)
Sorting_Data (17, 6)
Sales_Pivot (69, 6)
Sales (20, 5)
Marketing (15, 5)
Dates_Export (13, 6)
```

Then pull one sheet out of the dict like any dict value:

```python
print(sheets["Sales"].head(3))
```

```text
  Order_ID Region Product  Units  Revenue
0     O001  North       C     18     1800
1     O002  North       A      6      900
2     O003   East       C     23     2300
```

**Worked — a specific list of sheets** (`01 Basics/Exercise 3`, Q3)

```python
P = ("/Volumes/rythmn103/code/bisa_guide/Exercises/Pandas exercises/"
     "01 Basics/Exercise 3 - Portfolio Holdings/portfolio_holdings.xlsx")

two = pd.read_excel(P, sheet_name=["Equity", "Debt"])
print(type(two))
print(list(two.keys()))
for k, v in two.items():
    print(k, v.shape)
print(two["Equity"].head(4))
print(two["Debt"].tail(3))
```

```text
<class 'dict'>
['Equity', 'Debt']
Equity (8, 5)
Debt (6, 5)
     Ticker InstrumentName  Quantity   Price Exchange
0      INFY        Infosys     120.0  1700.5      NSE
1       TCS            TCS      80.0  3800.0      NSE
2  HDFCBANK      HDFC Bank     150.0  1650.0      NSE
3  RELIANCE       Reliance      60.0  2950.0      BSE
          BondID    Issuer  Quantity  Price Rating
3      GSEC_2035       GoI       NaN  101.2    SOV
4   AAA_PSU_2029  PSU Bank     100.0   99.8    AAA
5  AA+_NBFC_2031  NBFC Ltd      75.0   96.3    AA+
```

**Variants**

| If the question says | Change to | Real result |
| --- | --- | --- |
| "just the sheet names, don't load data" | `pd.ExcelFile(PATH).sheet_names` | `['Customer_Data', ..., 'Dates_Export']` |
| "load one sheet from an open ExcelFile" | `xl = pd.ExcelFile(W); xl.parse("Marketing")` | |
| "sheets 0 and Debt" | `sheet_name=[0, "Debt"]` | keys are `[0, 'Debt']` — the integer stays an integer |
| "stack all sheets into one frame" | `pd.concat(sheets.values(), keys=sheets.keys())` | |
| "same skiprows for every sheet" | `pd.read_excel(PATH, sheet_name=None, skiprows=2)` | applied to all sheets |

`pd.ExcelFile` also lets you avoid re-opening the file for every sheet:

```python
xl = pd.ExcelFile(W)
print(xl.sheet_names)
print(xl.parse("Marketing").head(2))
xl.close()
```

```text
['Customer_Data', 'Import_SkipRows', 'Missing_Data', 'Missing_Tokens', 'Indexed_Data', 'Scores_Axis', 'Sorting_Data', 'Sales_Pivot', 'Sales', 'Marketing', 'Dates_Export']
  Campaign_ID Channel Region  Leads     Spend
0        M001   Email   East    177  47208.20
1        M002   Email   West     82  18986.34
```

**Traps**

- `sheet_name=None` gives a **dict**. `sheets.head()` raises `AttributeError`. Index into it first.
- `sheet_name=["Equity"]` — a list with one element — also gives a **dict**, not a DataFrame. Drop
  the brackets if you want a frame.
- Dict key order follows the workbook's tab order, not alphabetical order.
- `sheet_name=None` reads every sheet, including junk sheets like `Import_SkipRows` whose header row
  is a note. Do not average across the dict blindly.

**Drill**

1. Read all sheets of `portfolio_holdings.xlsx` and print each sheet name with its shape.

<details><summary>Answer</summary>

```python
for k, v in pd.read_excel(P, sheet_name=None).items():
    print(k, v.shape)
```

```text
Equity (8, 5)
Debt (6, 5)
```

</details>

---

## P5.11 — File paths, and the Windows backslash problem

**Exam phrasings**

- "Move a copy of customers.csv to another folder and read it using a complete absolute path"
- "On Windows try forward slashes and a raw string path; on macOS or Linux use a normal forward-slash path"
- "explain the three ways to write a Windows path in Python"
- "why does pandas raise FileNotFoundError"
- "what is the difference between an absolute and a relative path"
- "which package must be installed to read .xlsx files"

**Core idea.** An **absolute** path starts at the filesystem root (`/` on macOS/Linux, `C:\` on
Windows) and works from any folder. A **relative** path is resolved against the current working
directory, so it breaks the moment you run the script from elsewhere. On Windows, backslashes in a
normal Python string are escape characters, so you must use forward slashes, a raw string `r"..."`,
or doubled backslashes.

**Template**

```python
# macOS / Linux — absolute (what you will use on this machine)
df = pd.read_csv("/Users/you/Documents/data/customers.csv")

# Windows — three legal forms, all equivalent
df = pd.read_csv("C:/Users/Analyst/Documents/data/sales_data.csv")     # forward slashes
df = pd.read_csv(r"C:\Users\Analyst\Documents\data\sales_data.csv")    # raw string
df = pd.read_csv("C:\\Users\\Analyst\\Documents\\data\\sales_data.csv")  # doubled backslashes

# Relative — resolved against os.getcwd()
df = pd.read_csv("customers.csv")
df = pd.read_csv("data/customers.csv")
df = pd.read_csv("../customers.csv")
```

**Worked — absolute and relative on macOS** (Session 13, Ex 20)

```python
import os, shutil

A = ("/Volumes/rythmn103/code/bisa_guide/Exercises/Pandas exercises/"
     "Class exercises/customers.csv")
print(pd.read_csv(A).shape)          # absolute

print(os.getcwd())                   # where relative paths start from
shutil.copy(A, "customers.csv")      # "move a copy to another folder"
print(pd.read_csv("customers.csv").shape)   # relative
```

```text
(30, 9)
/private/tmp/claude-501/.../scratchpad
(30, 9)
```

Both work. The absolute path keeps working if you move the notebook; the relative one does not.

**Worked — what Python does to a Windows path**

```python
print(repr("C:\temp\new\data.csv"))        # WRONG: \t and \n are escapes
print(repr(r"C:\temp\new\data.csv"))       # raw string
print(repr("C:\\temp\\new\\data.csv"))     # doubled backslashes
print(repr("C:/temp/new/data.csv"))        # forward slashes
```

```text
'C:\temp\new\\data.csv'
'C:\\temp\\new\\data.csv'
'C:\\temp\\new\\data.csv'
'C:/temp/new/data.csv'
```

The first line is silently corrupted — `\t` became a real tab and `\n` a real newline. Worse, some
letters make it a hard error before pandas is even reached:

```python
p = "C:\Users\Analyst\data\sales.csv"
```

```text
  File "<string>", line 1
    p = "C:\Users\Analyst\data\sales.csv"
                                          ^
SyntaxError: (unicode error) 'unicodeescape' codec can't decode bytes in position 2-3: truncated \UXXXXXXXX escape
```

`\U` starts a Unicode escape, so `C:\Users\...` will not even compile. This is exactly why the
handout recommends `r""`.

**The `openpyxl` requirement**

`.xlsx` reading and writing is delegated to `openpyxl`. If it is missing:

```text
ImportError: Missing optional dependency 'openpyxl'.
Use pip or conda to install openpyxl.
```

Fix once: `pip install openpyxl` (older `.xls` files need `pip install xlrd` instead). Verify:

```python
import openpyxl
print(openpyxl.__version__)
```

```text
3.1.5
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "build the path safely in code" | `import os; os.path.join(FOLDER, "customers.csv")` |
| "what folder am I in" | `import os; os.getcwd()` |
| "list the files I can read" | `import os; os.listdir(FOLDER)` |
| "the path has spaces in it" | nothing special — Python strings handle spaces; only *shells* need quoting |
| "read straight from a URL" | `pd.read_csv("https://.../file.csv")` |
| "modern path objects" | `from pathlib import Path; pd.read_csv(Path(FOLDER) / "customers.csv")` |

`os.path.join` output:

```text
/Volumes/rythmn103/code/bisa_guide/Exercises/Pandas exercises/Class exercises/customers.csv
```

**Traps**

- A typo gives `FileNotFoundError`, and the message shows exactly what pandas looked for:

```python
pd.read_csv("customers_typo.csv")
```

```text
FileNotFoundError: [Errno 2] No such file or directory: 'customers_typo.csv'
```

  Diagnose it with `os.getcwd()` and `os.listdir(".")` before changing the code.
- Do not add `r""` to a **forward-slash** path — harmless but pointless. `r""` is only for
  backslashes.
- `r"C:\data\"` is a syntax error: a raw string cannot end in a single backslash. Write
  `r"C:\data" + "\\"` or just use forward slashes.
- On macOS the path separator is `/` and there are no drive letters. A question written for Windows
  still expects you to *explain* `r""`; only the worked path changes.

## Write-up answers

**"Why is pandas imported as `pd`?"** (Ex 1)

> `import pandas as pd` binds the module to the short alias `pd`. It is a community convention, not
> a language rule: every pandas tutorial, textbook and official example writes `pd.read_csv(...)`,
> so using the same alias makes code instantly readable to anyone else and keeps long chains of
> calls short. Using a different alias works but makes code harder to share.

**"Why use a complete file path?"** (Ex 20)

> An absolute path starts from the root of the filesystem (`/` on macOS/Linux, `C:\` on Windows) and
> therefore identifies the file unambiguously no matter which directory the script is run from. A
> relative path is resolved against the current working directory, so the same code raises
> `FileNotFoundError` when the notebook is moved or run from a different folder. Absolute paths are
> also what you need when the data lives outside the project folder or on a shared network drive.
> The cost is portability: the path only works on that one machine.

**"Why do Windows paths need special handling?"** (Ex 20)

> Windows separates folders with a backslash, but in a Python string a backslash starts an escape
> sequence: `"\t"` is a tab, `"\n"` is a newline and `"\U"` begins a Unicode escape. So
> `"C:\temp\new\data.csv"` silently becomes a string containing a tab and a newline, and
> `"C:\Users\..."` fails to compile at all with a `SyntaxError`. The three safe forms are forward
> slashes `"C:/Users/..."`, a raw string `r"C:\Users\..."`, or doubled backslashes
> `"C:\\Users\\..."`. On macOS and Linux the separator is `/`, which is not an escape character, so
> no special handling is needed.

---

## P5.12 — Write a CSV (to_csv)

**Exam phrasings**

- "Export the DataFrame to output_customers.csv without writing the index"
- "Export the DataFrame using a semicolon as the delimiter"
- "Export only Name, City and Balance to a new CSV file, without the index"
- "save the filtered rows to a new CSV"
- "write the results out without the extra unnamed first column"

**Core idea.** `df.to_csv(PATH)` writes the index as an unnamed first column by default. Almost
every exam question says "without the index", so `index=False` is the default you should type.
`sep=` changes the delimiter, `columns=[...]` limits and orders the exported columns.

**Template**

```python
df.to_csv(PATH, index=False)
df.to_csv(PATH, sep=";", index=False)
df.to_csv(PATH, columns=["COL1","COL2"], index=False)
```

**Worked — `index=False`** (Session 13, Ex 21)

```python
OUT = "/tmp/"                     # in the exam: your own output folder
df  = pd.read_excel(W, sheet_name="Customer_Data")

df.to_csv(OUT + "output_customers.csv", index=False)
print(open(OUT + "output_customers.csv").read().split("\n")[0])
print(open(OUT + "output_customers.csv").read().split("\n")[1])
```

```text
Customer_ID,Name,Age,City,Segment,Balance,Risk_Score,Active,Join_Date
C001,Aarav Mehta,53,Pune,SME,140976.6,550,Yes,2025-05-30
```

Now the default, for contrast:

```python
df.to_csv(OUT + "with_index.csv")           # index=True is the default
txt = open(OUT + "with_index.csv").read().split("\n")
print(txt[0]); print(txt[1])
```

```text
,Customer_ID,Name,Age,City,Segment,Balance,Risk_Score,Active,Join_Date
C001... 
```

Actual bytes:

```text
,Customer_ID,Name,Age,City,Segment,Balance,Risk_Score,Active,Join_Date
0,C001,Aarav Mehta,53,Pune,SME,140976.6,550,Yes,2025-05-30
```

The header now starts with a **bare comma** and every row carries `0,1,2,...`. Read that file back
and you get the notorious `Unnamed: 0` column. `index=False` prevents it.

**Worked — `sep=';'`** (Session 13, Ex 22)

```python
df.to_csv(OUT + "output_semicolon.csv", sep=";", index=False)
t = open(OUT + "output_semicolon.csv").read().split("\n")
print(t[0]); print(t[1])
print(pd.read_csv(OUT + "output_semicolon.csv", sep=";").shape)
```

```text
Customer_ID;Name;Age;City;Segment;Balance;Risk_Score;Active;Join_Date
C001;Aarav Mehta;53;Pune;SME;140976.6;550;Yes;2025-05-30
(30, 9)
```

Reading it back **needs `sep=";"`** as well — that is P5.3 in reverse.

**Worked — `columns=[...]`** (Session 13, Ex 23)

```python
df.to_csv(OUT + "output_subset.csv", columns=["Name","City","Balance"], index=False)
print(open(OUT + "output_subset.csv").read().split("\n")[:4])
print(pd.read_csv(OUT + "output_subset.csv").head(3))
```

```text
['Name,City,Balance', 'Aarav Mehta,Pune,140976.6', 'Diya Nair,Hyderabad,474709.96', 'Kabir Shah,Kolkata,110395.82']
          Name       City    Balance
0  Aarav Mehta       Pune  140976.60
1    Diya Nair  Hyderabad  474709.96
2   Kabir Shah    Kolkata  110395.82
```

Three columns only, in the order you listed them. Unlike `usecols` on read, `columns=` on write
**does respect your order**.

**Variants**

| If the question says | Change to | Real bytes written |
| --- | --- | --- |
| "no column headers" | `header=False` | `C001,Aarav Mehta,53,Pune,SME,140976.6,550,Yes,2025-05-30` |
| "write missing values as N/A" | `na_rep="N/A"` | `R002,Diya Nair,N/A,87.0,80027.09,Bengaluru,Pending` |
| default missing handling | (nothing) | `R002,Diya Nair,,87.0,80027.09,Bengaluru,Pending` — empty field |
| "two decimal places" | `float_format="%.2f"` | `Aarav Mehta,140976.60` |
| "keep the index but name it" | `index=True, index_label="CustID"` | `CustID,Name,Age,...` |
| "tab-separated output" | `sep="\t"` | |
| "append to an existing file" | `mode="a", header=False` | |
| "Excel-friendly on Windows" | `encoding="utf-8-sig"` | |
| "get the CSV as a string, not a file" | `df.to_csv(index=False)` — returns text | `Name,Age\nAarav Mehta,53\n...` |

`to_csv()` with no path returns the CSV as a Python string:

```text
Name,Age
Aarav Mehta,53
Diya Nair,32
```

**Traps**

- Forgetting `index=False` is the single most common mark lost here. Read the written file back and
  look for `Unnamed: 0`.
- `columns=` silently ignores nothing — a misspelled name raises `KeyError`.
- `to_csv` **overwrites** without warning. Use a new filename.
- `float_format="%.2f"` applies to *every* float column, not just one. To format a single column,
  round it first: `df["Balance"] = df["Balance"].round(2)`.
- A CSV has no data types. Everything written is text, so `Join_Date` comes back as `object` unless
  you pass `parse_dates=` when reading.

**Drill**

1. Export `Employee_ID`, `Name` and `Salary` from the `Sorting_Data` sheet to a semicolon CSV
   without the index, then print the first three lines of the file.

<details><summary>Answer</summary>

```python
sd = pd.read_excel(W, sheet_name="Sorting_Data")
sd.to_csv(OUT + "emp.csv", columns=["Employee_ID","Name","Salary"], index=False, sep=";")
print(open(OUT + "emp.csv").read().split("\n")[:3])
```

```text
['Employee_ID;Name;Salary', 'E001;Sneha Patil;74966', 'E002;Karan Malhotra;74361']
```

</details>

---

## P5.13 — Write an Excel file (to_excel)

**Exam phrasings**

- "Write the DataFrame to output.xlsx on a sheet named Summary, without the index"
- "Export only Name and Balance columns to Excel"
- "Write the data beginning at row offset 2 and column offset 1"
- "Write the data with the first row frozen when the file is opened in Excel"
- "Write the data without column headers"
- "Write the data and represent missing values as N/A"
- "Write floating-point values with two decimal places"

**Core idea.** `df.to_excel(PATH, sheet_name=..., index=False, ...)`. Nine parameters are
examinable; all of them are verifiable by reading the file back.

**Template**

```python
df.to_excel(PATH,
            sheet_name="Summary",       # worksheet name (default "Sheet1")
            index=False,                # do not write the row labels
            columns=["COL1","COL2"],    # only these columns, in this order
            startrow=2, startcol=1,     # 0-based offset of the top-left cell
            freeze_panes=(1, 0),        # freeze 1 row, 0 columns
            header=False,               # omit the column-name row
            na_rep="N/A",               # text for NaN
            float_format="%.2f")        # float formatting
```

**Worked — `sheet_name='Summary'`, `index=False`** (Session 13, Ex 24)

```python
df = pd.read_excel(W, sheet_name="Customer_Data")
df.to_excel(OUT + "output.xlsx", sheet_name="Summary", index=False)

back = pd.read_excel(OUT + "output.xlsx", sheet_name=None)
print(list(back.keys()))
print(back["Summary"].shape)
print(back["Summary"].head(3))
```

```text
['Summary']
(30, 9)
  Customer_ID         Name  Age       City  Segment    Balance  Risk_Score Active  Join_Date
0        C001  Aarav Mehta   53       Pune      SME  140976.60         550    Yes 2025-05-30
1        C002    Diya Nair   32  Hyderabad      SME  474709.96         546     No 2024-06-25
2        C003   Kabir Shah   52    Kolkata  Premium  110395.82         355    Yes 2024-06-02
```

One sheet, named `Summary`, 9 columns. Without `index=False` you would get **10**:

```python
df.to_excel(OUT + "output_idx.xlsx", sheet_name="Summary")     # index written
b2 = pd.read_excel(OUT + "output_idx.xlsx", sheet_name="Summary")
print(b2.columns.tolist())
```

```text
['Unnamed: 0', 'Customer_ID', 'Name', 'Age', 'City', 'Segment', 'Balance', 'Risk_Score', 'Active', 'Join_Date']
```

That `Unnamed: 0` is the giveaway. Omitting `sheet_name` entirely gives `['Sheet1']`.

**Worked — `columns=['Name','Balance']`** (Session 13, Ex 26)

```python
df.to_excel(OUT + "cols.xlsx", columns=["Name","Balance"], index=False)
print(pd.read_excel(OUT + "cols.xlsx").head(3))
```

```text
          Name    Balance
0  Aarav Mehta  140976.60
1    Diya Nair  474709.96
2   Kabir Shah  110395.82
```

**Worked — `startrow=2, startcol=1`** (Session 13, Ex 27)

```python
df.to_excel(OUT + "offset.xlsx", sheet_name="Summary",
            startrow=2, startcol=1, index=False)

raw = pd.read_excel(OUT + "offset.xlsx", sheet_name="Summary", header=None)
print(raw.shape)
print(raw.iloc[0:5, 0:5].to_string())
```

```text
(33, 10)
    0            1            2    3          4
0 NaN          NaN          NaN  NaN        NaN
1 NaN          NaN          NaN  NaN        NaN
2 NaN  Customer_ID         Name  Age       City
3 NaN         C001  Aarav Mehta   53       Pune
4 NaN         C002    Diya Nair   32  Hyderabad
```

Two blank rows on top, one blank column on the left. Confirmed at the cell level with `openpyxl`:

```python
import openpyxl
wb = openpyxl.load_workbook(OUT + "offset.xlsx"); ws = wb["Summary"]
print("B3 =", ws["B3"].value, "| A1 =", ws["A1"].value, "| C3 =", ws["C3"].value)
wb.close()
```

```text
B3 = Customer_ID | A1 = None | C3 = Name
```

`startrow`/`startcol` are **0-based**, so `startrow=2, startcol=1` puts the header in Excel cell
**B3**. To read such a file back properly:

```python
ok = pd.read_excel(OUT + "offset.xlsx", sheet_name="Summary", skiprows=2, usecols="B:J")
print(ok.shape)
```

```text
(30, 9)
```

**Worked — `freeze_panes=(1,0)`** (Session 13, Ex 28)

```python
df.to_excel(OUT + "freeze.xlsx", sheet_name="Summary", index=False, freeze_panes=(1, 0))

wb = openpyxl.load_workbook(OUT + "freeze.xlsx")
print("freeze_panes =", wb["Summary"].freeze_panes)
wb.close()
```

```text
freeze_panes = A2
```

`(1, 0)` means "freeze 1 row and 0 columns", which Excel records as the split point **A2** — rows
above A2 (i.e. row 1, the header) stay visible while you scroll. `freeze_panes=(1, 1)` gives `B2`
(header row **and** first column frozen). You cannot see this in a pandas printout; you verify it
either by opening the file in Excel or by checking `worksheet.freeze_panes` as above.

**Worked — `header=False`** (Session 13, Ex 29)

```python
df.to_excel(OUT + "nohdr.xlsx", sheet_name="Summary", index=False, header=False)

b = pd.read_excel(OUT + "nohdr.xlsx", sheet_name="Summary", header=None)
print(b.shape)
print(b.head(2).to_string())
```

```text
(30, 9)
      0            1   2          3    4          5    6    7          8
0  C001  Aarav Mehta  53       Pune  SME  140976.60  550  Yes 2025-05-30
1  C002    Diya Nair  32  Hyderabad  SME  474709.96  546   No 2024-06-25
```

30 data rows, no header row. **You must read it back with `header=None`**, otherwise pandas eats the
first record:

```python
b2 = pd.read_excel(OUT + "nohdr.xlsx", sheet_name="Summary")   # WRONG
print(b2.shape)
print(b2.columns.tolist())
```

```text
(29, 9)
['C001', 'Aarav Mehta', 53, 'Pune', 'SME', 140976.6, 550, 'Yes', datetime.datetime(2025, 5, 30, 0, 0)]
```

29 rows and customer C001's data used as column names.

**Worked — `na_rep='N/A'`** (Session 13, Ex 30)

```python
md = pd.read_excel(W, sheet_name="Missing_Data")
print(md.isna().sum().to_string())

md.to_excel(OUT + "na.xlsx", sheet_name="Missing", index=False, na_rep="N/A")

wb = openpyxl.load_workbook(OUT + "na.xlsx"); ws = wb["Missing"]
for r in range(1, 6):
    print([ws.cell(row=r, column=c).value for c in range(1, 8)])
wb.close()
```

```text
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
['Record_ID', 'Name', 'Age', 'Score', 'Income', 'City', 'Status']
['R001', 'Aarav Mehta', 54, 79, 65833.65, 'Hyderabad', 'Inactive']
['R002', 'Diya Nair', 'N/A', 87, 80027.09, 'Bengaluru', 'Pending']
['R003', 'Kabir Shah', 24, 59, 124850.58, 'Mumbai', 'Inactive']
['R004', 'Meera Iyer', 25, 'N/A', 76126.52, 'Goa', 'Inactive']
```

The blank cells now literally hold the text `N/A`. Without `na_rep` the same cells hold `None`
(truly empty):

```text
['R002', 'Diya Nair', None, 87, 80027.09, 'Bengaluru', 'Pending']
```

**Surprising but verified:** reading the `na_rep="N/A"` file back shows `NaN` again, because `"N/A"`
is on pandas' default list of NA strings.

```python
b = pd.read_excel(OUT + "na.xlsx", sheet_name="Missing")
print(b.isna().sum().to_string())
```

```text
Record_ID    0
Name         0
Age          3
Score        5
Income       2
City         2
Status       1
```

To see the literal text, switch off the default NA list — note every column then becomes `object`:

```python
b = pd.read_excel(OUT + "na.xlsx", sheet_name="Missing", keep_default_na=False)
print(b.head(3))
print(b.dtypes["Age"])
```

```text
  Record_ID         Name  Age Score     Income       City    Status
0      R001  Aarav Mehta   54    79   65833.65  Hyderabad  Inactive
1      R002    Diya Nair  N/A    87   80027.09  Bengaluru   Pending
2      R003   Kabir Shah   24    59  124850.58     Mumbai  Inactive
object
```

**Worked — `float_format='%.2f'`** (Session 13, Ex 31)

`Customer_Data.Balance` already has two decimals, so use the `Dates_Export` sheet where `Discount`
has four:

```python
dd = pd.read_excel(W, sheet_name="Dates_Export")
print(dd[["Amount","Discount"]].head(4))

dd.to_excel(OUT + "ff.xlsx", sheet_name="F", index=False, float_format="%.2f")
wb = openpyxl.load_workbook(OUT + "ff.xlsx"); ws = wb["F"]
for r in range(1, 4):
    print([ws.cell(row=r, column=c).value for c in range(1, 7)])
wb.close()
```

```text
     Amount  Discount
0   7661.83    0.1597
1  16691.18    0.1419
2  20353.02    0.1506
3  22188.64    0.1317
['Order_ID', 'Order_Date', 'Order_Timestamp', 'Amount', 'Discount', 'Remarks']
['D001', datetime.datetime(2026, 1, 8, 0, 0), datetime.datetime(2026, 1, 8, 10, 0), 7661.83, 0.16, 'Priority']
['D002', datetime.datetime(2026, 1, 15, 0, 0), datetime.datetime(2026, 1, 15, 16, 45), 16691.18, 0.14, 'Review']
```

Without `float_format` the same cells hold the full precision:

```text
['D001', datetime.datetime(2026, 1, 8, 0, 0), datetime.datetime(2026, 1, 8, 10, 0), 7661.83, 0.1597, 'Priority']
```

**`float_format` changes the stored value, not just the display.** `0.1597` was written as `0.16`,
and reading the file back confirms the precision is gone:

```python
print(pd.read_excel(OUT + "ff.xlsx", sheet_name="F")[["Amount","Discount"]].head(4))
```

```text
     Amount  Discount
0   7661.83      0.16
1  16691.18      0.14
2  20353.02      0.15
3  22188.64      0.13
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "flatten a MultiIndex instead of merging cells" | `merge_cells=False` |
| "start in cell C5" | `startrow=4, startcol=2` (0-based) |
| "freeze the header and the first column" | `freeze_panes=(1, 1)` |
| "freeze the top two rows" | `freeze_panes=(2, 0)` |
| "keep the index and label it" | `index=True, index_label="Customer_ID"` |
| "only the numeric columns" | `columns=df.select_dtypes("number").columns.tolist()` |
| "old .xls format" | not supported for writing by pandas 2.x — write `.xlsx` |

**Traps**

- `startrow`/`startcol` are **0-based counts of blank rows/columns to leave**, so `startrow=2` puts
  the header in Excel row **3**.
- `freeze_panes` is `(rows_to_freeze, cols_to_freeze)`, not an Excel cell reference. `(1,0)` → `A2`.
- `header=False` writes a file that is unreadable by a default `read_excel` — always pair it with
  `header=None` when you read it back.
- `float_format` rounds the data. If the question only wants a *display* format, do it in Excel or
  round the column explicitly and say so.
- `to_excel` on an existing path **replaces the whole workbook**, destroying other sheets. Use
  `pd.ExcelWriter` (P5.14) to keep them.

**Drill**

1. Write the `Missing_Data` sheet to Excel on a sheet called `Clean`, without the index, with
   missing values shown as `MISSING` and floats to one decimal. Print the first three rows of cells.

<details><summary>Answer</summary>

```python
md = pd.read_excel(W, sheet_name="Missing_Data")
md.to_excel(OUT + "drill_md.xlsx", sheet_name="Clean", index=False,
            na_rep="MISSING", float_format="%.1f")

import openpyxl
wb = openpyxl.load_workbook(OUT + "drill_md.xlsx"); ws = wb["Clean"]
for r in range(1, 4):
    print([ws.cell(row=r, column=c).value for c in range(1, 8)])
wb.close()
```

```text
['Record_ID', 'Name', 'Age', 'Score', 'Income', 'City', 'Status']
['R001', 'Aarav Mehta', 54, 79, 65833.6, 'Hyderabad', 'Inactive']
['R002', 'Diya Nair', 'MISSING', 87, 80027.1, 'Bengaluru', 'Pending']
```

</details>

---

## P5.14 — Write several DataFrames into one workbook (ExcelWriter)

**Exam phrasings**

- "Read Sales and Marketing into separate DataFrames and write both into one new workbook on separate worksheets"
- "export two tables to one Excel file on different sheets"
- "use pd.ExcelWriter with a with statement"
- "add a new sheet to an existing workbook"
- "write Equity and Debt into a single output workbook"

**Core idea.** Calling `to_excel` twice on the same path **overwrites** the file, so you end up with
only the last sheet. `pd.ExcelWriter` keeps one workbook open across several `to_excel` calls. Use
the `with` form — it closes and saves the file for you.

**Template**

```python
with pd.ExcelWriter(PATH) as writer:
    df1.to_excel(writer, sheet_name="SHEET1", index=False)
    df2.to_excel(writer, sheet_name="SHEET2", index=False)
```

**Worked** (Session 13, Ex 25)

```python
sales = pd.read_excel(W, sheet_name="Sales")
mkt   = pd.read_excel(W, sheet_name="Marketing")
print(sales.shape, mkt.shape)

with pd.ExcelWriter(OUT + "multi_sheet.xlsx") as writer:
    sales.to_excel(writer, sheet_name="Sales", index=False)
    mkt.to_excel(writer, sheet_name="Marketing", index=False)
```

Verify with `sheet_name=None`:

```python
back = pd.read_excel(OUT + "multi_sheet.xlsx", sheet_name=None)
print(type(back))
print(list(back.keys()))
for k, v in back.items():
    print(k, v.shape)
print(back["Sales"].head(3))
print(back["Marketing"].head(3))
```

```text
(20, 5) (15, 5)
<class 'dict'>
['Sales', 'Marketing']
Sales (20, 5)
Marketing (15, 5)
  Order_ID Region Product  Units  Revenue
0     O001  North       C     18     1800
1     O002  North       A      6      900
2     O003   East       C     23     2300
  Campaign_ID Channel Region  Leads     Spend
0        M001   Email   East    177  47208.20
1        M002   Email   West     82  18986.34
2        M003  Search  South    207  22648.26
```

Two sheets, correct shapes, correct data.

**Worked — why the naive version fails**

```python
sales.to_excel(OUT + "twice.xlsx", sheet_name="Sales", index=False)
mkt.to_excel(OUT + "twice.xlsx", sheet_name="Marketing", index=False)
print(pd.ExcelFile(OUT + "twice.xlsx").sheet_names)
```

```text
['Marketing']
```

The `Sales` sheet is **gone**. This is the mark-losing mistake this exercise exists to teach.

**Variants**

| If the question says | Change to |
| --- | --- |
| "loop over a dictionary of frames" | see below |
| "add a sheet to an existing workbook" | `pd.ExcelWriter(PATH, mode="a", engine="openpyxl")` |
| "replace a sheet that already exists" | `mode="a", if_sheet_exists="replace"` |
| "two tables on the SAME sheet" | two `to_excel(writer, sheet_name="Both", startrow=...)` calls |
| "one sheet per region" | `for r, g in df.groupby("Region"): g.to_excel(writer, sheet_name=r, index=False)` |
| "without the `with` statement" | `w = pd.ExcelWriter(PATH); df1.to_excel(w, ...); w.close()` — you must call `close()` |

Loop form:

```python
frames = {"Sales": sales, "Marketing": mkt}
with pd.ExcelWriter(OUT + "loop.xlsx", engine="openpyxl") as writer:
    for name, d in frames.items():
        d.to_excel(writer, sheet_name=name, index=False)
print(pd.ExcelFile(OUT + "loop.xlsx").sheet_names)
```

```text
['Sales', 'Marketing']
```

Two tables stacked on one sheet:

```python
with pd.ExcelWriter(OUT + "stacked.xlsx") as writer:
    sales.head(3).to_excel(writer, sheet_name="Both", index=False, startrow=0)
    mkt.head(3).to_excel(writer, sheet_name="Both", index=False, startrow=5)
print(pd.read_excel(OUT + "stacked.xlsx", sheet_name="Both", header=None).to_string())
```

```text
             0        1        2      3         4
0     Order_ID   Region  Product  Units   Revenue
1         O001    North        C     18      1800
2         O002    North        A      6       900
3         O003     East        C     23      2300
4          NaN      NaN      NaN    NaN       NaN
5  Campaign_ID  Channel   Region  Leads     Spend
6         M001    Email     East    177   47208.2
7         M002    Email     West     82  18986.34
8         M003   Search    South    207  22648.26
```

Append a sheet to a workbook that already exists:

```python
with pd.ExcelWriter(OUT + "multi_sheet.xlsx", mode="a", engine="openpyxl") as writer:
    sales.head(2).to_excel(writer, sheet_name="Extra", index=False)
print(pd.ExcelFile(OUT + "multi_sheet.xlsx").sheet_names)
```

```text
['Sales', 'Marketing', 'Extra']
```

**Traps**

- Pass the **writer object**, not the path: `df.to_excel(writer, sheet_name="Sales")`.
- Without `with` (or an explicit `writer.close()`) the file is left empty or corrupt.
- `mode="a"` requires the file to already exist, and only works with `engine="openpyxl"`.
- With `mode="a"`, writing to a sheet name that already exists raises
  `ValueError: Sheet 'Sales' already exists and if_sheet_exists is set to 'error'`. Pass
  `if_sheet_exists="replace"` or `"new"`.
- Excel sheet names are limited to 31 characters and cannot contain `: \ / ? * [ ]`.
- `index=False` still has to be given on **each** `to_excel` call.

**Drill**

1. Write the `Equity` and `Debt` sheets of `portfolio_holdings.xlsx` into one new workbook, then
   verify the sheets and shapes.

<details><summary>Answer</summary>

```python
eq = pd.read_excel(P, sheet_name="Equity")
de = pd.read_excel(P, sheet_name="Debt")
with pd.ExcelWriter(OUT + "drill_pf.xlsx") as w:
    eq.to_excel(w, sheet_name="Equity", index=False)
    de.to_excel(w, sheet_name="Debt", index=False)

print({k: v.shape for k, v in pd.read_excel(OUT + "drill_pf.xlsx", sheet_name=None).items()})
```

```text
{'Equity': (8, 5), 'Debt': (6, 5)}
```

</details>

---

## P5.15 — Control date and datetime formats on export

**Exam phrasings**

- "Using ExcelWriter, write date and datetime columns with YYYY-MM-DD and YYYY-MM-DD HH:MM:SS formats as listed in the slides"
- "convert the date column with dt.date then export"
- "Run it once without that conversion to see that date_format is ignored"
- "why does date_format have no effect on my date column"
- "format the timestamp column as YYYY-MM-DD HH:MM:SS in the exported Excel file"

**Core idea.** `pd.ExcelWriter` applies `datetime_format` to values pandas sees as **datetimes** and
`date_format` to values it sees as **dates**. A `datetime64[ns]` column is always a datetime, even
when every time component is `00:00:00`. So to make `date_format` bite, you must first turn the
column into real `datetime.date` objects with `.dt.date`.

**Template**

```python
df["DATE_COL"] = df["DATE_COL"].dt.date        # <- the required step

with pd.ExcelWriter(PATH,
                    date_format="YYYY-MM-DD",
                    datetime_format="YYYY-MM-DD HH:MM:SS") as writer:
    df.to_excel(writer, sheet_name="Dates", index=False)
```

**The source data**

```python
dd = pd.read_excel(W, sheet_name="Dates_Export")
print(dd.head(3))
print(dd.dtypes)
```

```text
  Order_ID Order_Date     Order_Timestamp    Amount  Discount   Remarks
0     D001 2026-01-08 2026-01-08 10:00:00   7661.83    0.1597  Priority
1     D002 2026-01-15 2026-01-15 16:45:00  16691.18    0.1419    Review
2     D003 2026-01-22 2026-01-22 12:45:00  20353.02    0.1506    Normal
Order_ID                   object
Order_Date         datetime64[ns]
Order_Timestamp    datetime64[ns]
Amount                    float64
Discount                  float64
Remarks                    object
dtype: object
```

Both date columns are `datetime64[ns]` — exactly as the exercise warns.

**Worked — run 1: WITHOUT `.dt.date`** (Session 13, Ex 32, first pass)

```python
import openpyxl

def show(path, sheet="Dates"):
    wb = openpyxl.load_workbook(path); ws = wb[sheet]
    for r in range(2, 4):
        for c in (2, 3):
            cell = ws.cell(row=r, column=c)
            print(f"  {cell.coordinate}: value={cell.value!r} number_format={cell.number_format!r}")
    wb.close()

with pd.ExcelWriter(OUT + "dates_raw.xlsx",
                    date_format="YYYY-MM-DD",
                    datetime_format="YYYY-MM-DD HH:MM:SS") as w:
    dd.to_excel(w, sheet_name="Dates", index=False)
show(OUT + "dates_raw.xlsx")
```

```text
  B2: value=datetime.datetime(2026, 1, 8, 0, 0) number_format='YYYY-MM-DD HH:MM:SS'
  C2: value=datetime.datetime(2026, 1, 8, 10, 0) number_format='YYYY-MM-DD HH:MM:SS'
  B3: value=datetime.datetime(2026, 1, 15, 0, 0) number_format='YYYY-MM-DD HH:MM:SS'
  C3: value=datetime.datetime(2026, 1, 15, 16, 45) number_format='YYYY-MM-DD HH:MM:SS'
```

`Order_Date` (column B) got the **datetime** format, not the date format. `date_format` was ignored.
In Excel, `Order_Date` therefore displays as `2026-01-08 00:00:00`.

**Worked — run 2: WITH `.dt.date`** (Session 13, Ex 32, second pass)

```python
d2 = dd.copy()
d2["Order_Date"] = d2["Order_Date"].dt.date
print(d2.dtypes["Order_Date"], "|", type(d2["Order_Date"].iloc[0]))

with pd.ExcelWriter(OUT + "dates_fixed.xlsx",
                    date_format="YYYY-MM-DD",
                    datetime_format="YYYY-MM-DD HH:MM:SS") as w:
    d2.to_excel(w, sheet_name="Dates", index=False)
show(OUT + "dates_fixed.xlsx")
```

```text
object | <class 'datetime.date'>
  B2: value=datetime.datetime(2026, 1, 8, 0, 0) number_format='YYYY-MM-DD'
  C2: value=datetime.datetime(2026, 1, 8, 10, 0) number_format='YYYY-MM-DD HH:MM:SS'
  B3: value=datetime.datetime(2026, 1, 15, 0, 0) number_format='YYYY-MM-DD'
  C3: value=datetime.datetime(2026, 1, 15, 16, 45) number_format='YYYY-MM-DD HH:MM:SS'
```

**This is the whole exercise in two lines of output.** After `.dt.date` the column dtype becomes
`object` holding `datetime.date` objects, pandas classifies them as dates, and column B gets
`YYYY-MM-DD` while column C keeps `YYYY-MM-DD HH:MM:SS`.

Side-by-side:

| | `Order_Date` (B) | `Order_Timestamp` (C) |
| --- | --- | --- |
| no conversion | `YYYY-MM-DD HH:MM:SS` | `YYYY-MM-DD HH:MM:SS` |
| after `.dt.date` | **`YYYY-MM-DD`** | `YYYY-MM-DD HH:MM:SS` |

**What you must know about the pandas version you are sitting in front of**

Two verified facts about **pandas 2.3.3 with the openpyxl engine** that go beyond the exercise text:

1. **The exercise's expected output appears even with no arguments at all.** `pd.ExcelWriter`
   defaults to `date_format="YYYY-MM-DD"` and `datetime_format="YYYY-MM-DD HH:MM:SS"` internally, so
   `with pd.ExcelWriter(path) as w:` produces the same cell formats as the fully-specified call. The
   `.dt.date` step is what changes the result, not the two keyword arguments.

2. **`date_format=` / `datetime_format=` passed to `pd.ExcelWriter` are silently ignored by the
   openpyxl engine.** `OpenpyxlWriter.__init__` accepts them but does not forward them to
   `ExcelWriter.__init__`, so the built-in defaults always win:

```python
with pd.ExcelWriter(OUT + "w1.xlsx", date_format="DD-MMM-YYYY", datetime_format="HH:MM") as w:
    print("writer.date_format     =", w.date_format)
    print("writer.datetime_format =", w.datetime_format)
    d2.to_excel(w, sheet_name="Dates", index=False)
```

```text
writer.date_format     = YYYY-MM-DD
writer.datetime_format = YYYY-MM-DD HH:MM:SS
```

  The cells come out as `('YYYY-MM-DD', 'YYYY-MM-DD HH:MM:SS')`, **not** the formats requested.
  Because the exercise asks for exactly the two default formats, the expected answer still works —
  but do not claim you "changed" the format to something custom unless you checked.

**Write the answer like this in the exam:** give the `.dt.date` line, give the `ExcelWriter` call
with both format arguments (that is what the slides show and what the marks are for), and add one
sentence: *"pandas reads both columns as `datetime64`, so without `.dt.date` both cells get the
datetime format and `date_format` has no visible effect."*

**Variants**

| If the question says | Change to | Verified result |
| --- | --- | --- |
| "a custom format that actually applies" | set the private attributes after construction | see below |
| "write the date as plain text" | `df["Order_Date"] = df["Order_Date"].dt.strftime("%Y-%m-%d")` | cell holds the string `'2026-01-08'`, format `General`, reads back as `object` |
| "date_format on to_excel itself" | not a parameter | `TypeError: to_excel() got an unexpected keyword argument 'date_format'` |
| "DD-MM-YYYY output" | `dt.strftime("%d-%m-%Y")` (text) — reliable across versions | |
| "also format the datetime column" | `datetime_format="YYYY-MM-DD HH:MM:SS"` (already the default) | |
| "CSV output instead" | `df.to_csv(PATH, date_format="%Y-%m-%d")` — this one **does** work on `to_csv` | |

The working custom-format escape hatch, if a question insists on a non-default format:

```python
w = pd.ExcelWriter(OUT + "w3.xlsx", engine="openpyxl")
w._date_format     = "DD-MMM-YYYY"
w._datetime_format = "HH:MM"
d2.to_excel(w, sheet_name="Dates", index=False)
w.close()
```

```text
cells: ('DD-MMM-YYYY', 'HH:MM')
```

**Traps**

- `date_format` / `datetime_format` set the **Excel display format** only. The underlying value is
  unchanged, so reading any of these files back gives `datetime64[ns]` for **both** columns with
  full timestamps:

```text
dates_raw.xlsx   | datetime64[ns] | datetime64[ns]
dates_fixed.xlsx | datetime64[ns] | datetime64[ns]
dates_none.xlsx  | datetime64[ns] | datetime64[ns]
```

  A round-trip through pandas cannot prove the formatting worked. Inspect
  `openpyxl` `cell.number_format`, or open the file in Excel.
- `.dt.date` makes the column `object`. Do date arithmetic **before** this step, not after.
- Excel format strings are Excel codes (`YYYY-MM-DD`), not `strftime` codes (`%Y-%m-%d`). `to_csv`
  uses `strftime` codes. Do not swap them.
- `.dt` only exists on datetime columns. On a string column it raises
  `AttributeError: Can only use .dt accessor with datetimelike values` — parse with
  `pd.to_datetime` first (P5.16).

**Drill**

1. Export `Dates_Export` so that `Order_Date` shows as a plain date and `Order_Timestamp` keeps its
   time, and prove it at the cell level.

<details><summary>Answer</summary>

```python
d = pd.read_excel(W, sheet_name="Dates_Export")
d["Order_Date"] = d["Order_Date"].dt.date
with pd.ExcelWriter(OUT + "drill_dates.xlsx",
                    date_format="YYYY-MM-DD",
                    datetime_format="YYYY-MM-DD HH:MM:SS") as w:
    d.to_excel(w, sheet_name="Dates", index=False)

import openpyxl
wb = openpyxl.load_workbook(OUT + "drill_dates.xlsx"); ws = wb["Dates"]
print(ws["B2"].number_format, "|", ws["C2"].number_format)
wb.close()
```

```text
YYYY-MM-DD | YYYY-MM-DD HH:MM:SS
```

</details>

---

## P5.16 — Parse dates correctly when reading

**Exam phrasings**

- "Load the dataset and display the first 5 and last 5 rows"
- "convert the Date column to datetime"
- "the dates are DD-MM-YYYY - parse them correctly"
- "why are all my transactions showing different months"
- "use dayfirst=True when reading the transaction file"
- "parse dates at read time with parse_dates"

**Core idea.** CSV has no data types, so a date column arrives as `object`. `pd.to_datetime` or
`parse_dates=` converts it — but when the file is **DD-MM-YYYY** and the day is ≤ 12, pandas
silently reads it as MM-DD-YYYY and gives you wrong months with **no warning and no error**.
`dayfirst=True` (or an explicit `format=`) fixes it.

**Template**

```python
df = pd.read_csv(PATH, parse_dates=["DATE_COL"], dayfirst=True)   # at read time
df["DATE_COL"] = pd.to_datetime(df["DATE_COL"], dayfirst=True)    # after reading
df["DATE_COL"] = pd.to_datetime(df["DATE_COL"], format="%d-%m-%Y")  # strictest
```

**The documented defect in `01 Basics/Exercise 1`**

The PDF's dataset overview says *"Date – Transaction date (YYYY-MM-DD)"*. The CSV does not:

```python
F = ("/Volumes/rythmn103/code/bisa_guide/Exercises/Pandas exercises/"
     "01 Basics/Exercise 1 - Bank Transactions/bank_transactions.csv")
df = pd.read_csv(F)
print(df["Date"].unique())
print(df.dtypes["Date"])
```

```text
['01-07-2025' '02-07-2025' '03-07-2025' '04-07-2025' '05-07-2025'
 '06-07-2025']
object
```

The values are **DD-MM-YYYY** (1 July to 6 July 2025), stored as text.

**Worked — both parses side by side**

```python
a = pd.to_datetime(df["Date"])                   # WRONG for this file
b = pd.to_datetime(df["Date"], dayfirst=True)    # CORRECT
print(pd.DataFrame({"raw": df["Date"], "default": a, "dayfirst": b}).head(6).to_string())
```

```text
          raw    default   dayfirst
0  01-07-2025 2025-01-07 2025-07-01
1  01-07-2025 2025-01-07 2025-07-01
2  02-07-2025 2025-02-07 2025-07-02
3  02-07-2025 2025-02-07 2025-07-02
4  03-07-2025 2025-03-07 2025-07-03
5  03-07-2025 2025-03-07 2025-07-03
```

The damage in one line:

```python
print("default months: ", sorted(a.dt.month.unique()))
print("dayfirst months:", sorted(b.dt.month.unique()))
```

```text
default months:  [1, 2, 3, 4, 5, 6]
dayfirst months: [7]
```

The default parse invents **six different months** for what is a single week in July. Any
"transactions per month" answer built on it is wrong, and nothing in the output warns you. Because
every day in this file is ≤ 12, there is no ambiguity error to catch it:

```python
print([v for v in df["Date"].unique() if int(v.split("-")[0]) > 12])
```

```text
[]
```

**Both fixes, verified**

```python
print(pd.to_datetime(df["Date"], format="%d-%m-%Y").head(3).tolist())

d = pd.read_csv(F, parse_dates=["Date"], dayfirst=True)
print(d.dtypes["Date"], d["Date"].head(2).tolist())
```

```text
[Timestamp('2025-07-01 00:00:00'), Timestamp('2025-07-01 00:00:00'), Timestamp('2025-07-02 00:00:00')]
datetime64[ns] [Timestamp('2025-07-01 00:00:00'), Timestamp('2025-07-01 00:00:00')]
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "parse two date columns" | `parse_dates=["Start_Date","End_Date"]` |
| "the date is in column 1" | `parse_dates=[1]` |
| "combine a date and a time column" | parse each, then `df["Date"] + pd.to_timedelta(df["Time"])` |
| "the format is YYYY-MM-DD" (e.g. `customers.csv`) | `parse_dates=["Join_Date"]` — no `dayfirst` needed |
| "bad rows should become NaT, not crash" | `pd.to_datetime(col, dayfirst=True, errors="coerce")` |
| "extract the month / year" | `df["Date"].dt.month`, `.dt.year`, `.dt.day_name()` |
| "read Excel dates" | nothing — Excel stores real dates, so `read_excel` gives `datetime64` already |

`customers.csv` (ISO dates) for contrast:

```python
print(pd.read_csv(BASE + "customers.csv", parse_dates=["Join_Date"]).dtypes["Join_Date"])
```

```text
datetime64[ns]
```

**Other read-time cleaning parameters the examiner can combine with this**

| Parameter | Use |
| --- | --- |
| `na_values=["-","?","###","NA","n/a","missing"]` | treat junk tokens as `NaN` so the column parses as numeric |
| `keep_default_na=False` | stop pandas turning `"N/A"`, `"NA"`, `"null"` into `NaN` |
| `dtype={"Risk_Score": "str"}` | force a column to text (account numbers, PIN codes with leading zeros) |
| `thousands=","` | read `1,234,567` as a number |
| `true_values=["Yes"], false_values=["No"]` | read a Yes/No column as boolean |

On the `Missing_Tokens` sheet the junk tokens are `-`, `@@`, `#`, `na`, `nAN`, `?`, `nuLL`, `###`,
which is why `Age`, `Own_house`, `Income_2020` and `Income_2021` all arrive as `object`.

**Traps**

- **The wrong parse does not raise.** It silently produces plausible-looking dates. Always print
  `df["Date"].min()`, `.max()` and `dt.month.unique()` and sanity-check against the question.
- `dayfirst=True` is a *hint*, not a guarantee; pandas may ignore it for unambiguous strings such as
  `2025-07-01`. `format="%d-%m-%Y"` is strict and will raise on anything that does not match — use
  it when you are certain.
- `parse_dates=` on `read_csv` needs the column **name or position**, and pairs with `dayfirst=True`
  on the same call.
- `dayfirst` belongs to `to_datetime`/`read_csv`. It has no meaning for `read_excel` because Excel
  already stores a date type.

**Drill**

1. Read `bank_transactions.csv` so that `Date` is a proper `datetime64`, then print the earliest and
   latest transaction date.

<details><summary>Answer</summary>

```python
d = pd.read_csv(F, parse_dates=["Date"], dayfirst=True)
print(d["Date"].min(), "->", d["Date"].max())
```

```text
2025-07-01 00:00:00 -> 2025-07-06 00:00:00
```

</details>

---

## Session 13 exercise index (Exercises 1–32)

Every drill from the class exercise PDF, mapped to its pattern.

| Ex | Task | Pattern | The call |
| --- | --- | --- | --- |
| 1 | install and import pandas | P5.1 | `pip install pandas`; `import pandas as pd` |
| 2 | Series, default index | P5.1 | `pd.Series([12,18,25,31])` |
| 3 | Series with labels A,B,C | P5.1 | `pd.Series([100,200,300], index=["A","B","C"])` |
| 4 | DataFrame from a dict | P5.2 | `pd.DataFrame({"Name":[...],"Age":[...],"City":[...]})` |
| 5 | read `customers.csv` | P5.3 | `pd.read_csv(BASE+"customers.csv")` |
| 6 | state the comma separator | P5.3 | `pd.read_csv(..., sep=",")` — identical to Ex 5 |
| 7 | semicolon file, wrong then right | P5.3 | `pd.read_csv(..., sep=";")`; without it → `(30, 1)` |
| 8 | tab file | P5.3 | `pd.read_csv(BASE+"customers_tab.tsv", sep="\t")` |
| 9 | first column as row labels | P5.4 | `pd.read_csv(..., index_col=0)` |
| 10 | only Customer_ID, Name, Age | P5.5 | `pd.read_csv(..., usecols=["Customer_ID","Name","Age"])` |
| 11 | first 10 data rows | P5.6 | `pd.read_csv(..., nrows=10)` |
| 12 | skip the preamble line | P5.6 | `pd.read_csv(BASE+"customers_preamble.csv", skiprows=1)` |
| 13 | `header=0` explicitly | P5.7 | `pd.read_csv(..., header=0)` — `equals(Ex 5)` is `True` |
| 14 | usecols + index_col + nrows | P5.8 | `usecols=["Customer_ID","Name","Age"], index_col="Customer_ID", nrows=5` |
| 15 | first worksheet by index | P5.9 | `pd.read_excel(W, sheet_name=0)` |
| 16 | worksheet `Customer_Data` | P5.9 | `pd.read_excel(W, sheet_name="Customer_Data")` |
| 17 | only columns A:C | P5.9 | `pd.read_excel(W, sheet_name="Customer_Data", usecols="A:C")` |
| 18 | skip 2 rows → 18 customers | P5.9 | `pd.read_excel(W, sheet_name="Import_SkipRows", skiprows=2)` → `(18, 9)` |
| 19 | all sheets, type and keys | P5.10 | `pd.read_excel(W, sheet_name=None)` → `dict`, 11 keys |
| 20 | absolute paths, backslashes | P5.11 | `pd.read_csv("/abs/path.csv")`; `r"C:\..."` |
| 21 | CSV without the index | P5.12 | `df.to_csv(OUT+"output_customers.csv", index=False)` |
| 22 | CSV with `;` | P5.12 | `df.to_csv(..., sep=";")` |
| 23 | only Name, City, Balance | P5.12 | `df.to_csv(..., columns=["Name","City","Balance"], index=False)` |
| 24 | Excel, sheet `Summary`, no index | P5.13 | `df.to_excel(..., sheet_name="Summary", index=False)` |
| 25 | Sales + Marketing, one workbook | P5.14 | `with pd.ExcelWriter(...) as w:` two `to_excel` calls |
| 26 | only Name and Balance | P5.13 | `df.to_excel(..., columns=["Name","Balance"])` |
| 27 | start at row 2, column 1 | P5.13 | `df.to_excel(..., startrow=2, startcol=1)` → header in B3 |
| 28 | freeze the first row | P5.13 | `df.to_excel(..., freeze_panes=(1,0))` → `freeze_panes == "A2"` |
| 29 | no column headers | P5.13 | `df.to_excel(..., header=False)` |
| 30 | missing values as `N/A` | P5.13 | `df.to_excel(..., na_rep="N/A")` on `Missing_Data` |
| 31 | floats to 2 decimals | P5.13 | `df.to_excel(..., float_format="%.2f")` |
| 32 | date and datetime formats | P5.15 | `df["Order_Date"] = df["Order_Date"].dt.date` then `pd.ExcelWriter(..., date_format=..., datetime_format=...)` |

## Chapter cheat sheet

**Read**

| Parameter | `read_csv` | `read_excel` | Meaning | Example |
| --- | --- | --- | --- | --- |
| `sep` / `delimiter` | yes | – | field delimiter | `sep=";"`, `sep="\t"`, `sep=r"\s+"` |
| `sheet_name` | – | yes | which worksheet | `0`, `"Sales"`, `None`, `["Equity","Debt"]` |
| `header` | yes | yes | row used as column names | `0` (default), `None`, `1`, `[0,1]` |
| `names` | yes | yes | supply column names | `names=["A","B"]` + `header=None` |
| `index_col` | yes | yes | column → row labels | `0`, `"Customer_ID"`, `["City","Customer_ID"]` |
| `usecols` | yes | yes | which columns | `["A","B"]`, `[0,1,2]`, `"A:C"` (Excel), callable |
| `nrows` | yes | yes | read first N data rows | `nrows=10` |
| `skiprows` | yes | yes | drop leading lines | `1`, `2`, `[0,2,4]` |
| `skipfooter` | `engine="python"` | yes | drop trailing lines | `skipfooter=17` |
| `na_values` | yes | yes | extra NaN tokens | `na_values=["-","?","###"]` |
| `keep_default_na` | yes | yes | keep pandas' NA list | `keep_default_na=False` |
| `dtype` | yes | yes | force column types | `dtype={"Risk_Score":"str"}` |
| `parse_dates` | yes | yes | convert to datetime | `parse_dates=["Date"]` |
| `dayfirst` | yes | – | DD-MM-YYYY input | `dayfirst=True` |
| `thousands` / `decimal` | yes | yes | number punctuation | `thousands=",", decimal="."` |
| `encoding` | yes | – | text encoding | `encoding="latin-1"` |

**Write**

| Parameter | `to_csv` | `to_excel` | Meaning | Example |
| --- | --- | --- | --- | --- |
| path / writer | yes | yes | destination | `"out.csv"`, `writer` |
| `sheet_name` | – | yes | worksheet name | `sheet_name="Summary"` |
| `index` | yes | yes | write row labels | `index=False` ← almost always |
| `index_label` | yes | yes | name for the index column | `index_label="CustID"` |
| `columns` | yes | yes | only these, in this order | `columns=["Name","Balance"]` |
| `header` | yes | yes | write column names | `header=False` |
| `sep` | yes | – | delimiter | `sep=";"` |
| `na_rep` | yes | yes | text for NaN | `na_rep="N/A"` |
| `float_format` | yes | yes | float formatting (**rounds the value**) | `float_format="%.2f"` |
| `startrow` / `startcol` | – | yes | 0-based top-left offset | `startrow=2, startcol=1` → B3 |
| `freeze_panes` | – | yes | `(rows, cols)` to freeze | `freeze_panes=(1,0)` → `A2` |
| `merge_cells` | – | yes | merge MultiIndex cells | `merge_cells=False` |
| `date_format` | yes (`strftime`) | via `ExcelWriter` | date formatting | `to_csv(..., date_format="%Y-%m-%d")` |
| `datetime_format` | – | via `ExcelWriter` | datetime formatting | `datetime_format="YYYY-MM-DD HH:MM:SS"` |
| `mode` | yes | via `ExcelWriter` | `"w"` / `"a"` | `mode="a"` (Excel needs `engine="openpyxl"`) |
| `encoding` | yes | – | text encoding | `encoding="utf-8-sig"` |

**The five calls to memorise**

```python
pd.read_csv(PATH, sep=";", usecols=["A","B"], index_col="A", nrows=5, skiprows=1)
pd.read_excel(PATH, sheet_name="Sheet", usecols="A:C", skiprows=2)
pd.read_excel(PATH, sheet_name=None)                      # -> dict of every sheet
df.to_csv(PATH, sep=";", columns=["A","B"], index=False)
with pd.ExcelWriter(PATH) as w:
    df1.to_excel(w, sheet_name="S1", index=False)
    df2.to_excel(w, sheet_name="S2", index=False)
```

**Symptom → cause**

| Symptom | Cause | Fix |
| --- | --- | --- |
| shape is `(n, 1)`, column name holds delimiters | wrong `sep` | `sep=";"` / `sep="\t"` |
| columns named `Unnamed: 1 … Unnamed: 8` | junk header row | `skiprows=1` or `2` |
| column named `Unnamed: 0` full of `0,1,2,…` | saved with the index | `index=False` on write, `index_col=0` on read |
| `ValueError: Index X invalid` | `index_col` misspelled or filtered out by `usecols` | add it to `usecols` / fix the spelling |
| `ValueError: Usecols do not match columns …` | column name typo | check `df.columns.tolist()` |
| `ValueError: Worksheet named 'X' not found` | sheet name case/spacing | `pd.ExcelFile(PATH).sheet_names` |
| `AttributeError: 'dict' object has no attribute 'head'` | `sheet_name=None` or a list | index the dict: `sheets["Sales"]` |
| `ImportError: Missing optional dependency 'openpyxl'` | engine not installed | `pip install openpyxl` |
| `FileNotFoundError` | wrong path / wrong working directory | `os.getcwd()`, `os.listdir(".")`, use an absolute path |
| `SyntaxError: (unicode error) 'unicodeescape' …` | raw backslashes in a Windows path | `r"C:\..."` or forward slashes |
| only the last sheet is in the workbook | two separate `to_excel` calls to one path | `pd.ExcelWriter` |
| one row of data disappeared after a round trip | wrote `header=False`, read with default header | read with `header=None` |
| dates all in different months | DD-MM-YYYY parsed as MM-DD-YYYY | `dayfirst=True` or `format="%d-%m-%Y"` |
| `date_format` had no effect | column is `datetime64`, not `date` | `df[C] = df[C].dt.date` first |
