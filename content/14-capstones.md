---
id: 14-capstones
part: "Part VI — Capstone Cases"
title: "The Three Integrated Cases, Solved End to End"
blurb: "Case 1 (Reliance/TCS/Infosys, Q1-Q15 with the mandatory 2x3 figure), Case 2 (bond portfolio, Q1-Q17 plus a 2x2 figure) and Case 3 (insurance claims, Q1-Q19 plus three figures) answered question by question, plus the orchestration habits that make a 90-minute case fit in 90 minutes."
order: 140
covers:
  - "Integrated exercises — Case 1 — Integrated Exercise — Q1 to Q15"
  - "Integrated exercises — Case 2 — Corporate Bond Portfolio Review — Q1 to Q17 and Part D"
  - "Integrated exercises — Case 3 — Insurance Claims Portfolio Analysis — Q1 to Q19 and Part D"
datafiles:
  - "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
  - "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
  - "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
patterns:
  - id: P14.1
    title: "How to attack a capstone"
    phrasings:
      - "Read the Reliance, TCS and Infosys sheets into three separate DataFrames"
      - "Read both sheets into separate DataFrames"
      - "Read the two sheets into separate DataFrames"
      - "obtain general DataFrame information"
      - "Check and display the shape of the combined DataFrame"
      - "Import and inspect the datasets"
      - "display the first five observations, shape, column names, data types"
  - id: P14.2
    title: "Derived-column formula sheet"
    phrasings:
      - "Create a new column Purchase_Value using the following relationship"
      - "Create Value_Change_pct"
      - "Estimate the annual coupon income for every holding"
      - "Create Claim_to_SumInsured_pct"
      - "Create a Return column for each stock using closing prices"
      - "create a Wealth_Index assuming an initial investment value of 100"
      - "Calculate Previous_Close by shifting closing prices by one observation"
      - "20-day moving average of Close"
  - id: P14.3
    title: "What a re-skinned capstone looks like"
    phrasings:
      - "Combine the policy information with the claims information using Policy_ID"
      - "All observations appearing in Bond_Holdings should remain in the resulting DataFrame"
      - "Create one Matplotlib figure with a 2 x 2 layout"
      - "Produce a frequency table showing the number of holdings belonging to each Credit_Rating"
      - "Create a pivot table showing mean Current_Value by Industry"
      - "Identify the Policy_Type having the highest average Claim_Amount"
---

## Chapter map

| Section | Use it when |
| --- | --- |
| **P14.1 — How to attack a capstone** | The paper is one long case and you have 90 minutes. Read this before you type. |
| **Case 1 — Reliance / TCS / Infosys** | Three stock sheets with different date ranges, Q1–Q15, mandatory 2×3 `plt.subplot` figure. |
| **Case 2 — Corporate Bond Portfolio Review** | `Bond_Holdings` + `Bond_Master`, Q1–Q17, 2×2 figure. Contains the famous **empty-result Q11**. |
| **Case 3 — Insurance Claims Portfolio Analysis** | `Claims` + `Policy_Master`, Q1–Q19, three separate figures. |
| **P14.2 — Derived-column formula sheet** | You need the exact Python for `Value_Change_pct`, `Wealth_Index`, `Annual_Coupon_Income`, `MA20`… |
| **P14.3 — What a re-skinned capstone looks like** | The exam case has different names but the same shape. Copy the 40-line template. |

This chapter is the **orchestration** chapter. The individual techniques are taught elsewhere:

| Skill you need mid-case | Chapter |
| --- | --- |
| `head`, `tail`, `shape`, `dtypes`, `info`, `describe`, boolean filters | Chapter 6 |
| `loc` / `iloc`, label slicing, `sort_values`, `nlargest` | Chapter 8 |
| `pivot_table`, `groupby`, multiple aggfuncs | Chapter 9 |
| `concat`, `merge`, `join`, `how=`, counting the NaNs a join creates | Chapter 10 |
| `value_counts`, `pd.cut`, `crosstab`, cumulative frequency | Chapter 11 |
| `plt.bar`, `plt.hist`, `plt.scatter`, `plt.boxplot`, `plt.pie`, `plt.subplot` | Chapter 12 |
| `shift`, `diff`, `pct_change`, `cumprod`, `rolling` | Chapter 13 |

Define the base path once. **In the exam, swap this for wherever the invigilator put the workbook** (often the same folder as your notebook, in which case just use the file name).

```python
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
```

## P14.1 — How to attack a capstone

**Exam phrasings**

- "Import and inspect the datasets"
- "Read the Reliance, TCS and Infosys sheets into three separate DataFrames"
- "Read both sheets into separate DataFrames"
- "display the first five observations, shape, column names, data types and general DataFrame information"
- "Check and display the shape of the combined DataFrame"
- "obtain descriptive statistics for the numerical variables"

**Core idea.** A capstone is not 17 questions. It is **one dataset built once**, then 17 one-line reads off it. Everything that can go wrong goes wrong in the first ten minutes: wrong sheet name, a key that does not match, a merge that silently duplicates rows, a derived column spelled differently from the question. So spend the first ten minutes on the data and the remaining eighty on answers.

**Template — the 10-line opening block.** Type this before you read question 1. It works on every one of the three cases.

```python
import pandas as pd
xl = pd.ExcelFile(WB)                                  # 1. what sheets are actually there?
print("sheets:", xl.sheet_names)
sheets = {s: pd.read_excel(WB, sheet_name=s) for s in xl.sheet_names}
for name, d in sheets.items():                         # 2. shape + real column names
    print(f"{name:15s} {str(d.shape):10s} {list(d.columns)}")
for name, d in sheets.items():                         # 3. nulls and duplicate rows
    print(f"{name:15s} nulls={int(d.isna().sum().sum())}  dup_rows={int(d.duplicated().sum())}")
txn, mst = sheets["TXN_SHEET"], sheets["MASTER_SHEET"] # 4. name the two tables
print("keys missing from master:", set(txn[KEY]) - set(mst[KEY]))   # 5. key check
print("master key unique:", mst[KEY].is_unique)        # 6. guards against row explosion
df = pd.merge(txn, mst, on=KEY, how="left")            # 7. one analysis frame
print("merged:", df.shape, "| rows preserved:", len(df) == len(txn))
```

**Worked** (Case 3, but the block is identical for the other two)

```python
import pandas as pd
pd.set_option("display.width", 130)
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"

xl = pd.ExcelFile(W)
print("sheets:", xl.sheet_names)
sheets = {s: pd.read_excel(W, sheet_name=s) for s in xl.sheet_names}
for name, d in sheets.items():
    print(f"{name:15s} {str(d.shape):10s} {list(d.columns)}")
for name, d in sheets.items():
    print(f"{name:15s} nulls={int(d.isna().sum().sum())}  dup_rows={int(d.duplicated().sum())}")
```

```text
sheets: ['Claims', 'Policy_Master']
Claims          (150, 6)   ['Claim_ID', 'Policy_ID', 'Claim_Date', 'Claim_Amount', 'Settlement_Days', 'Claim_Status']
Policy_Master   (60, 6)    ['Policy_ID', 'Policy_Type', 'Annual_Premium', 'Sum_Insured', 'Region', 'Risk_Category']
Claims          nulls=0  dup_rows=0
Policy_Master   nulls=0  dup_rows=0
```

Run it across all three workbooks and you have the whole exam's geography in eight lines of output:

```python
for p in ["Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx",
          "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx",
          "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"]:
    W = BASE + p
    xl = pd.ExcelFile(W)
    print(p.split("/")[-1], "->", xl.sheet_names)
    for s in xl.sheet_names:
        print(f"   {s:16s} {pd.read_excel(W, sheet_name=s).shape}")
```

```text
Integrated_Pandas_Matplotlib_Stock_Practice.xlsx -> ['Read_Me', 'Reliance', 'TCS', 'Infosys', 'Company_Master']
   Read_Me          (13, 2)
   Reliance         (1022, 6)
   TCS              (1024, 6)
   Infosys          (1026, 6)
   Company_Master   (3, 3)
Bond_Portfolio_Practice.xlsx -> ['Bond_Holdings', 'Bond_Master']
   Bond_Holdings    (120, 6)
   Bond_Master      (24, 6)
Insurance_Claims_Practice.xlsx -> ['Claims', 'Policy_Master']
   Claims           (150, 6)
   Policy_Master    (60, 6)
```

**Then create every derived column ONCE, immediately after the merge.** This is the single highest-value habit in this chapter. Case 2 asks for five derived columns in Q5–Q9 and then uses them in Q10, Q11, Q12, Q13, Q14, Q16, Q17 and all four panels of the figure. If you compute `Current_Value` inside each answer you will type it eleven times and get it wrong once. After the prep block, **most later questions are genuinely one line**:

```python
port["Value_Change"] = port["Current_Value"] - port["Purchase_Value"]   # once, in Q7
# Q10  -> port[port["Value_Change"] > 0]
# Q14  -> port["Value_Change"].max(), port["Value_Change"].min()
# Q17  -> pd.pivot_table(port, values="Value_Change_pct", index="Credit_Rating", aggfunc=["mean","max"])
```

**Time budget (90-minute paper).**

| Minutes | Do this |
| --- | --- |
| 0–5 | Read the whole paper. Mark which questions need a figure and which need a written finding. |
| 5–15 | The 10-line opening block. Key check. Merge. **All** derived columns. Print `df.head(3)` and `df.shape` and stop touching the data. |
| 15–55 | Answer the questions in paper order. One cell per question, `# Q7` as the first line of the cell. |
| 55–75 | Figures. Individual charts first, then the combined multi-panel figure. Save it. |
| 75–85 | The one- or two-sentence interpretations. These are pure marks and take 30 seconds each. |
| 85–90 | Restart the kernel, Run All, confirm no errors, re-save the notebook and the figure files. |

**Order to answer in.** Paper order, with three exceptions:

1. **Do the merge/join question early even if it is numbered 4 (Case 2) or 3 (Case 3)** — everything downstream needs it.
2. **Do all the derived columns together**, even if the paper splits them across five numbered parts. Answer them as one cell and label it `# Q5-Q9`.
3. **Leave the multi-panel figure for last**, but compute its inputs (top-5 rows, return series, group means) while answering the questions that ask for them, and keep them in named variables: `top5`, `cp_ret`, `wi`, `status_counts`, `avg_by_type`. The figure then becomes pure plotting code.

**Variants**

| If the question says | Do this |
| --- | --- |
| "Read the sheets into separate DataFrames" (names given) | `pd.read_excel(W, sheet_name="Claims")` per sheet — do not merge yet |
| "read all sheets" / sheet names not given | `pd.read_excel(W, sheet_name=None)` returns a dict of every sheet |
| "the file is a CSV" | `pd.read_csv(path)`; add `parse_dates=["Date"]` and `dayfirst=True` if dates are `DD-MM-YYYY` |
| "obtain general DataFrame information" | `df.info()` — note it prints, it does not return, so never write `print(df.info())` in an answer you want to look clean |
| "descriptive statistics for the numerical variables" | `df.describe()`; add `include="all"` if they want the object columns too |
| "check the shape of the combined DataFrame" | `print(df.shape)` and **say in words** whether it equals the transaction table's row count |

**Traps**

- **Sheet names are case- and space-sensitive.** `Bond_Master` not `Bond master`. Print `xl.sheet_names` rather than guessing.
- **Case 1 has a `Read_Me` sheet.** `pd.read_excel(W)` with no `sheet_name` returns the *first* sheet, which is `Read_Me` (13×2) — not stock data.
- **A left merge with a non-unique master key duplicates rows.** Always print `mst[KEY].is_unique`. In all three cases here it is `True`, so a left merge preserves the row count exactly.
- Do not `round()` a column in place early on. Round only in the `print`, with `.round(2)`, or your later sums will drift.
- Set `pd.set_option("display.width", 120)` once at the top so wide frames stop wrapping into unreadable blocks.

**Drill**

1. Write the opening block for Case 2 and report, in one line each: the two sheet shapes, whether any `Bond_Code` in the holdings is missing from the master, and whether the master key is unique.

<details><summary>Answer</summary>

```python
W = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
hold = pd.read_excel(W, sheet_name="Bond_Holdings")
mast = pd.read_excel(W, sheet_name="Bond_Master")
print(hold.shape, mast.shape)                                   # (120, 6) (24, 6)
print(set(hold["Bond_Code"]) - set(mast["Bond_Code"]))           # set()
print(mast["Bond_Code"].is_unique)                               # True
```

</details>

## Case 1 — Reliance / TCS / Infosys (Q1–Q15)

> "You are assisting an investment-analysis team that wants to examine the historical behaviour of three stocks. The analyst has received the data in an Excel workbook, but the three stocks cover different periods."

**Dataset facts** — establish these before answering anything.

| Sheet | Rows × cols | Date range |
| --- | --- | --- |
| `Read_Me` | 13 × 2 | (documentation, not data) |
| `Reliance` | 1022 × 6 | 2019-01-01 → 2022-12-30 |
| `TCS` | 1024 × 6 | 2020-01-01 → 2023-12-29 |
| `Infosys` | 1026 × 6 | 2021-01-01 → 2024-12-31 |
| `Company_Master` | 3 × 3 | `Ticker`, `Company`, `Sector` |

Columns in all three stock sheets: `Date, Open, High, Low, Close, Volume`. No nulls, no duplicate dates, already in date order:

```python
import pandas as pd
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"

for s in ["Reliance", "TCS", "Infosys"]:
    d = pd.read_excel(W, sheet_name=s)
    print(f"{s:9s} rows={len(d):5d} duplicate dates={int(d['Date'].duplicated().sum())}"
          f" monotonic={d['Date'].is_monotonic_increasing} nulls={int(d.isna().sum().sum())}")
```

```text
Reliance  rows= 1022 duplicate dates=0 monotonic=True nulls=0
TCS       rows= 1024 duplicate dates=0 monotonic=True nulls=0
Infosys   rows= 1026 duplicate dates=0 monotonic=True nulls=0
```

The `Read_Me` sheet states the periods and warns that the common overlap is "2021-01-01 to 2022-12-30 (subject to intentionally omitted dates)". Trading calendars differ per sheet, so **the three-way common date count is 492, not the ~500 a calendar would suggest.** Compute it, never assume it.

### The one prep block (do this before Q2)

Every question from Q2 to Q15 reads off these three enriched frames. Type it once.

```python
import pandas as pd, numpy as np
pd.set_option("display.width", 120)
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"

def prep(df):
    df = df.copy()
    df["Date"] = pd.to_datetime(df["Date"])
    df = df.set_index("Date").sort_index()
    df["Previous_Close"]    = df["Close"].shift(1)                 # Q5
    df["Price_Change"]      = df["Close"] - df["Previous_Close"]   # Q5
    df["Return"]            = df["Close"].pct_change()             # Q6
    df["Growth"]            = 1 + df["Return"].fillna(0)           # Q7
    df["Cum_Growth"]        = df["Growth"].cumprod()               # Q7
    df["Cumulative_Return"] = df["Cum_Growth"] - 1                 # Q7
    df["Wealth_Index"]      = df["Cum_Growth"] * 100               # Q7
    df["MA20"]  = df["Close"].rolling(20).mean()                   # Q8
    df["MA50"]  = df["Close"].rolling(50).mean()                   # Q8
    df["MA200"] = df["Close"].rolling(200).mean()                  # Q8
    df["Vol20"] = df["Return"].rolling(20).std()                   # Q8
    return df

rel = prep(pd.read_excel(W, sheet_name="Reliance"))
tcs = prep(pd.read_excel(W, sheet_name="TCS"))
inf = prep(pd.read_excel(W, sheet_name="Infosys"))
master = pd.read_excel(W, sheet_name="Company_Master")
stocks = {"Reliance": rel, "TCS": tcs, "Infosys": inf}

print(rel.shape, list(rel.columns))
print(rel[["Close","Return","Wealth_Index","MA20"]].head(3).round(4).to_string())
```

```text
(1022, 16) ['Open', 'High', 'Low', 'Close', 'Volume', 'Previous_Close', 'Price_Change', 'Return', 'Growth', 'Cum_Growth', 'Cumulative_Return', 'Wealth_Index', 'MA20', 'MA50', 'MA200', 'Vol20']
              Close  Return  Wealth_Index  MA20
Date                                           
2019-01-01  1112.14     NaN      100.0000   NaN
2019-01-02  1091.76 -0.0183       98.1675   NaN
2019-01-03  1087.02 -0.0043       97.7413   NaN
```

The `stocks` dict is what turns "repeat for TCS and Infosys" from a copy-paste chore into a three-line `for` loop. Techniques: Chapter 13 (P13.1, P13.5–P13.8).

### Q1 — Import and inspect the datasets

**Asked.** Read the three stock sheets and `Company_Master`; for each stock frame show head, tail, shape, columns, dtypes, `info()` and `describe()`.

```python
rel_raw = pd.read_excel(W, sheet_name="Reliance")
tcs_raw = pd.read_excel(W, sheet_name="TCS")
inf_raw = pd.read_excel(W, sheet_name="Infosys")
master  = pd.read_excel(W, sheet_name="Company_Master")

for s in ["Reliance", "TCS", "Infosys"]:
    d = pd.read_excel(W, sheet_name=s)
    print(f"{s:9s} shape={d.shape} {d['Date'].min().date()} -> {d['Date'].max().date()} cols={list(d.columns)}")
```

```text
Reliance  shape=(1022, 6) 2019-01-01 -> 2022-12-30 cols=['Date', 'Open', 'High', 'Low', 'Close', 'Volume']
TCS       shape=(1024, 6) 2020-01-01 -> 2023-12-29 cols=['Date', 'Open', 'High', 'Low', 'Close', 'Volume']
Infosys   shape=(1026, 6) 2021-01-01 -> 2024-12-31 cols=['Date', 'Open', 'High', 'Low', 'Close', 'Volume']
```

Then the seven required displays. Shown for Reliance; run the identical five lines for `tcs_raw` and `inf_raw`.

```python
print(rel_raw.head(5)); print(rel_raw.tail(5))
print(rel_raw.shape); print(list(rel_raw.columns)); print(rel_raw.dtypes)
rel_raw.info()
print(rel_raw.describe().round(2))
print(master)
```

```text
        Date     Open     High      Low    Close    Volume
0 2019-01-01  1118.38  1138.36  1092.27  1112.14  14715077
1 2019-01-02  1113.65  1124.37  1081.25  1091.76   8639311
2 2019-01-03  1099.08  1111.71  1074.53  1087.02  11770746
# ... (rows 3-4 omitted)
           Date     Open     High      Low    Close   Volume
1019 2022-12-28  2608.38  2624.35  2599.12  2615.06  7295110
1020 2022-12-29  2599.32  2642.59  2574.64  2617.74  7231363
1021 2022-12-30  2611.21  2632.54  2562.77  2583.87  6388694

Date      datetime64[ns]
Open             float64
High             float64
Low              float64
Close            float64
Volume             int64

<class 'pandas.core.frame.DataFrame'>
RangeIndex: 1022 entries, 0 to 1021
Data columns (total 6 columns):
 #   Column  Non-Null Count  Dtype         
---  ------  --------------  -----         
 0   Date    1022 non-null   datetime64[ns]
 1   Open    1022 non-null   float64       
 2   High    1022 non-null   float64       
 3   Low     1022 non-null   float64       
 4   Close   1022 non-null   float64       
 5   Volume  1022 non-null   int64         
dtypes: datetime64[ns](1), float64(4), int64(1)
memory usage: 48.0 KB

                                Date     Open     High      Low    Close       Volume
count                           1022  1022.00  1022.00  1022.00  1022.00      1022.00
mean   2020-12-30 03:46:50.958903808  2105.26  2136.61  2075.53  2106.67   7581845.18
min              2019-01-01 00:00:00  1064.66  1076.02  1047.40  1064.31   2319391.00
25%              2019-12-31 06:00:00  1717.51  1744.64  1690.18  1719.08   6318583.25
50%              2020-12-30 12:00:00  2209.45  2245.58  2183.24  2211.50   7419014.00
75%              2021-12-29 18:00:00  2544.54  2584.42  2512.54  2548.07   8662703.00
max              2022-12-30 00:00:00  2920.81  2937.55  2862.03  2907.39  22332150.00
std                              NaN   481.54   487.66   474.60   480.86   1974411.32

        Ticker                    Company  Sector
0  RELIANCE.NS        Reliance Industries  Energy
1       TCS.NS  Tata Consultancy Services      IT
2      INFY.NS                    Infosys      IT
```

**Finding.** `Date` already arrives as `datetime64[ns]`, so no `pd.to_datetime` conversion is strictly required — but do it anyway in the prep block, because an examiner who exports the same data to CSV will hand you strings. `describe()` on a datetime column reports date quantiles and a `NaN` standard deviation; that is normal, not an error.

### Q2 — Prepare the date index and practise selection

**Asked.** Make `Date` the index in all three frames, then seven selections on Reliance.

```python
# rel/tcs/inf already have Date as a sorted DatetimeIndex (prep block)
print(rel.iloc[-1][["Open","High","Low","Close","Volume"]])   # 2. last row by position
print(rel.iloc[10:20, 0:5])                                    # 3. positions 10-19
print(rel[["Close","Volume"]].head(3))                         # 4. two columns
print(rel.loc[:, "Open":"Close"].head(15).shape)               # 5. first 15 rows, Open..Close
print(rel.loc["2020-03"].shape)                                # 6. all of March 2020
print(rel.loc["2020-03-01":"2020-03-31"].shape)                # 7. explicit date range
```

```text
Open         2611.21
High         2632.54
Low          2562.77
Close        2583.87
Volume    6388694.00
Name: 2022-12-30 00:00:00, dtype: float64

               Open     High      Low    Close    Volume
Date                                                    
2019-01-15  1080.65  1109.39  1070.27  1098.84   7859518
2019-01-16  1100.49  1115.37  1086.68  1101.55   9535633
2019-01-17  1096.89  1107.22  1089.88  1100.20   5967969
# ... (7 rows omitted, 10 in total)

              Close    Volume
Date                         
2019-01-01  1112.14  14715077
2019-01-02  1091.76   8639311
2019-01-03  1087.02  11770746

(15, 4)
(22, 16)
(22, 16)
```

`rel.iloc[0]` prints the whole 16-field first row; because the prep block ran, `Previous_Close`, `Price_Change`, `Return`, `MA20`, `MA50`, `MA200` and `Vol20` are all `NaN` on day one and `Wealth_Index` is exactly `100.00`.

**Finding.** Parts 6 and 7 give the **same 22 rows** — `rel.loc["2020-03"]` is partial-string indexing and `rel.loc["2020-03-01":"2020-03-31"]` is an inclusive label slice; `mar.equals(mar2)` returns `True`. Say this in your answer: with a `DatetimeIndex`, `.loc` slicing includes the stop label, unlike `.iloc`.

### Q3 — Filter and sort stock observations

**Asked.** Mean close; days above it; AND and OR combinations with volume; two sorts. Repeat parts 1–3 for TCS and Infosys.

```python
mc, mv = rel["Close"].mean(), rel["Volume"].mean()
print("Reliance mean Close =", round(mc, 2))
print("Close > mean     :", rel[rel["Close"] > mc].shape)
print("Close AND Volume :", rel[(rel["Close"] > mc) & (rel["Volume"] > mv)].shape)
print("Close OR  Volume :", rel[(rel["Close"] > mc) | (rel["Volume"] > mv)].shape)
print(rel.sort_values("Close", ascending=False)[["Close","Volume"]].head(3))
print(rel.sort_values(["Volume","Close"], ascending=[False, False])[["Close","Volume"]].head(3))
```

```text
Reliance mean Close = 2106.67
Close > mean     : (548, 16)
Close AND Volume : (263, 16)
Close OR  Volume : (770, 16)
              Close   Volume
Date                        
2021-09-23  2907.39  8683428
2021-09-29  2883.22  5885126
2021-09-27  2881.87  7788672
              Close    Volume
Date                         
2021-08-26  2635.19  22332150
2022-07-15  2353.76  20443423
2020-04-29  1818.10  19969440
```

"Repeat parts 1–3 for TCS and Infosys" — one loop, one table:

```python
rows = []
for name, d in stocks.items():
    m1, m2 = d["Close"].mean(), d["Volume"].mean()
    rows.append({"Stock": name, "Mean_Close": round(m1, 2),
                 "Days_Close_above_mean": int((d["Close"] > m1).sum()),
                 "Days_Close_and_Vol_above": int(((d["Close"] > m1) & (d["Volume"] > m2)).sum()),
                 "Days_Close_or_Vol_above": int(((d["Close"] > m1) | (d["Volume"] > m2)).sum())})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
   Stock  Mean_Close  Days_Close_above_mean  Days_Close_and_Vol_above  Days_Close_or_Vol_above
Reliance     2106.67                    548                       263                      770
     TCS     3270.40                    649                       317                      822
 Infosys     1285.17                    581                       288                      792
```

**Finding.** All three stocks spend **more than half** their days above their own mean close (548/1022, 649/1024, 581/1026) — the signature of a series that trends upward and then plateaus, since a rising series drags its own mean below the later values. AND always returns fewer rows than either single condition; OR always returns more. Check: 548 + (days volume above mean) − 263 = 770.

### Q4 — Prepare a complete stock profile

**Asked.** Thirteen facts per stock, then compare.

```python
def profile(d):
    return pd.Series({
        "First_Date": d.index.min().date(), "Last_Date": d.index.max().date(),
        "First_Close": round(d["Close"].iloc[0], 2), "Last_Close": round(d["Close"].iloc[-1], 2),
        "Highest_Close": round(d["Close"].max(), 2), "Highest_Date": d["Close"].idxmax().date(),
        "Lowest_Close": round(d["Close"].min(), 2), "Lowest_Date": d["Close"].idxmin().date(),
        "Mean_Close": round(d["Close"].mean(), 2), "Median_Close": round(d["Close"].median(), 2),
        "Avg_Volume": round(d["Volume"].mean(), 0),
        "Days_Above_Mean": int((d["Close"] > d["Close"].mean()).sum())})

print(pd.DataFrame({k: profile(v) for k, v in stocks.items()}).to_string())
for name, d in stocks.items():
    print(name, "top-5 volume days:", [str(x.date()) for x in d["Volume"].nlargest(5).index])
```

```text
                   Reliance         TCS     Infosys
First_Date       2019-01-01  2020-01-01  2021-01-01
Last_Date        2022-12-30  2023-12-29  2024-12-31
First_Close         1112.14     2154.47     1292.51
Last_Close          2583.87     3838.28     1157.72
Highest_Close       2907.39     4312.09     1608.65
Highest_Date     2021-09-23  2022-09-13  2024-06-25
Lowest_Close        1064.31     1965.75      853.42
Lowest_Date      2019-01-21  2020-06-22  2021-07-30
Mean_Close          2106.67      3270.4     1285.17
Median_Close         2211.5      3629.1     1314.34
Avg_Volume        7581845.0   3235198.0   5162952.0
Days_Above_Mean         548         649         581

Reliance top-5 volume days: ['2021-08-26', '2022-07-15', '2020-04-29', '2021-03-18', '2020-10-07']
TCS top-5 volume days: ['2022-03-16', '2022-08-25', '2020-01-01', '2020-06-10', '2021-04-28']
Infosys top-5 volume days: ['2021-01-01', '2024-02-01', '2023-08-24', '2022-10-06', '2023-03-16']
```

**Finding (the required comparison).** Reliance more than doubled over its window (1112 → 2584) and TCS rose strongly (2154 → 3838), while Infosys *fell* over its own window (1293 → 1158). Median close exceeds mean close for all three, so each price distribution is left-skewed — a long tail of cheap early days. Reliance trades on roughly 2.3× TCS's average volume. **The windows are different, so this is not a fair like-for-like comparison** — that is exactly what Q12's common-period dataset fixes, and saying so earns the mark.

### Q5 — Examine price changes

**Asked.** `Previous_Close` by `shift(1)`, `Price_Change` by subtraction, verify against `diff()`, then extremes per stock.

```python
print("Price_Change equals diff():", rel["Price_Change"].equals(rel["Close"].diff()))
print(rel[["Close","Previous_Close","Price_Change"]].head(3).to_string())

rows = []
for name, d in stocks.items():
    pc = d["Price_Change"]
    rows.append({"Stock": name, "Max_Rise": round(pc.max(),2), "Max_Rise_Date": pc.idxmax().date(),
                 "Max_Fall": round(pc.min(),2), "Max_Fall_Date": pc.idxmin().date(),
                 "Mean_Change": round(pc.mean(),4)})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
Price_Change equals diff(): True
              Close  Previous_Close  Price_Change
Date                                             
2019-01-01  1112.14             NaN           NaN
2019-01-02  1091.76         1112.14        -20.38
2019-01-03  1087.02         1091.76         -4.74

   Stock  Max_Rise Max_Rise_Date  Max_Fall Max_Fall_Date  Mean_Change
Reliance    107.04    2021-06-07    -95.45    2021-06-04       1.4415
     TCS    161.42    2023-03-14   -169.35    2022-10-06       1.6460
 Infosys     52.53    2024-04-12    -54.26    2023-11-23      -0.1315
```

**Finding.** `Close - Close.shift(1)` and `Close.diff()` are identical including the leading `NaN`; `.equals()` returns `True`, which is the verification the question wants. Mean daily change is positive for Reliance (+1.44) and TCS (+1.65) and slightly negative for Infosys (−0.13), consistent with the profiles in Q4. Reliance's largest rise and largest fall are three trading days apart (4 and 7 June 2021) — volatility clusters.

### Q6 — Calculate and analyse daily returns

**Asked.** `Return` via `pct_change()`, five statistics per stock, top-5 and bottom-5 return days, and why the first observation is missing.

```python
rows = []
for name, d in stocks.items():
    r = d["Return"].dropna()
    rows.append({"Stock": name, "Mean_Return": round(r.mean(),6), "Median_Return": round(r.median(),6),
                 "Std_Return": round(r.std(),6), "Max_Return": round(r.max(),6), "Max_Date": r.idxmax().date(),
                 "Min_Return": round(r.min(),6), "Min_Date": r.idxmin().date()})
print(pd.DataFrame(rows).to_string(index=False))
print((rel["Return"].dropna().nlargest(5)*100).round(2).to_string())
print((rel["Return"].dropna().nsmallest(5)*100).round(2).to_string())
print("first Return value:", rel["Return"].iloc[0], "| NaN count:", int(rel["Return"].isna().sum()))
```

```text
   Stock  Mean_Return  Median_Return  Std_Return  Max_Return   Max_Date  Min_Return   Min_Date
Reliance     0.000911       0.000680    0.013085    0.040159 2021-06-07   -0.044100 2019-12-11
     TCS     0.000640       0.000555    0.012303    0.042395 2023-03-14   -0.044429 2022-10-06
 Infosys    -0.000023      -0.000141    0.013017    0.038317 2021-07-14   -0.040648 2023-11-23

Date
2021-06-07    4.02
2019-02-19    3.93
2019-10-17    3.61
2021-07-22    3.47
2020-04-14    3.40
Date
2019-12-11   -4.41
2022-06-06   -3.71
2021-06-04   -3.46
2021-12-20   -3.43
2020-07-16   -3.23
```

```text
first Return value: nan | NaN count: 1
```

**Finding.** Mean daily returns are tiny (0.09%, 0.06%, −0.002%) against a daily standard deviation of about 1.3% — the day-to-day noise is roughly 14–19× the drift, which is why you compound returns (Q7) rather than multiply the mean by the number of days. The best and worst days are both around ±4% for all three stocks. **Exactly one value is missing per stock**: a return needs today's and yesterday's close, and the first row has no yesterday.

### Q7 — Cumulative return and Wealth Index

**Asked.** Growth factors, cumulative growth, `Cumulative_Return`, `Wealth_Index` from ₹100, final value per stock, and which investment finished highest.

```python
rows = []
for name, d in stocks.items():
    rows.append({"Stock": name, "First_Close": round(d["Close"].iloc[0],2),
                 "Last_Close": round(d["Close"].iloc[-1],2),
                 "Final_Cumulative_Return_pct": round(d["Cumulative_Return"].iloc[-1]*100,2),
                 "Final_Wealth_Index": round(d["Wealth_Index"].iloc[-1],2)})
wi = pd.DataFrame(rows)
print(wi.to_string(index=False))
print("Highest final Wealth Index:", wi.loc[wi["Final_Wealth_Index"].idxmax(), "Stock"])
```

```text
   Stock  First_Close  Last_Close  Final_Cumulative_Return_pct  Final_Wealth_Index
Reliance      1112.14     2583.87                       132.33              232.33
     TCS      2154.47     3838.28                        78.15              178.15
 Infosys      1292.51     1157.72                       -10.43               89.57
Highest final Wealth Index: Reliance
```

**Finding.** ₹100 invested on each stock's own first trading day finishes at ₹232.33 (Reliance), ₹178.15 (TCS) and ₹89.57 (Infosys), so **Reliance finished with the highest value over its own available period**. Cross-check the arithmetic: 2583.87 / 1112.14 × 100 = 232.33, so the `cumprod` chain is consistent with the raw price ratio. Note the caveat the marker wants: these are three *different* four-year windows, so this ranks the windows as much as the companies.

### Q8 — Moving averages and rolling volatility

**Asked.** MA20/MA50/MA200, 20-day rolling standard deviation of return, its maximum and date, last 10 rows of Close+MAs, and why the columns start with missing values.

```python
rows = []
for name, d in stocks.items():
    v = d["Vol20"]
    rows.append({"Stock": name, "Max_Vol20": round(v.max(),6), "Date": v.idxmax().date(),
                 "NaN_in_MA200": int(d["MA200"].isna().sum())})
print(pd.DataFrame(rows).to_string(index=False))
print(rel[["Close","MA20","MA50","MA200"]].tail(10).round(2).to_string())
```

```text
   Stock  Max_Vol20       Date  NaN_in_MA200
Reliance   0.018149 2021-06-07           199
     TCS   0.018237 2023-02-02           199
 Infosys   0.019689 2021-08-06           199

              Close     MA20     MA50    MA200
Date                                          
2022-12-19  2566.08  2368.48  2331.60  2383.51
2022-12-20  2568.21  2383.28  2336.28  2383.03
2022-12-21  2559.15  2397.83  2341.14  2382.30
# ... (5 rows omitted)
2022-12-29  2617.74  2481.72  2373.30  2378.66
2022-12-30  2583.87  2494.59  2377.82  2377.98
```

**Finding.** A window of *n* needs *n* observations before it can produce a number, so `MA20` has 19 leading `NaN`s, `MA50` has 49 and `MA200` has exactly **199** in all three stocks. Peak 20-day volatility is about 1.8–2.0% daily for all three, and Reliance's peak (2021-06-07) is the same date as its largest single-day rise — rolling volatility spikes *after* a shock enters the window and stays elevated for 20 days. At the end of 2022 Reliance sits above MA20 > MA50 and just above MA200, i.e. a short-term recovery inside a flat long-term trend. (Q14A plots exactly this — see the chart there.)

### Q9 — Vertical concatenation using the Reliance data

**Asked.** Split Reliance into 2019–20 and 2021–22, concatenate twice (keeping the index, and with a fresh integer index), verify the row count, then concat two frames with *different* columns using `join='outer'` and `join='inner'` and explain the difference.

```python
reliance_early = rel.loc["2019":"2020"]
reliance_late  = rel.loc["2021":"2022"]
print("early:", reliance_early.shape, "late:", reliance_late.shape)
print(rel.index.year.value_counts().sort_index().to_string())

recon     = pd.concat([reliance_early, reliance_late], axis=0)
recon_new = pd.concat([reliance_early, reliance_late], axis=0, ignore_index=True)
print("recon:", recon.shape, "| recon_new:", recon_new.shape, "| original:", rel.shape)
print("same row count as original:", len(recon) == len(rel))
print("index identical to original:", recon.index.equals(rel.index), "| values identical:", recon.equals(rel))
```

```text
early: (512, 16) late: (510, 16)
Date
2019    256
2020    256
2021    256
2022    254

recon: (1022, 16) | recon_new: (1022, 16) | original: (1022, 16)
same row count as original: True
index identical to original: True | values identical: True
```

```python
A = reliance_early[["Close","Volume"]]
B = reliance_late[["Close","High"]]
outer = pd.concat([A, B], axis=0, join="outer")     # default
inner = pd.concat([A, B], axis=0, join="inner")
print("A:", A.shape, "B:", B.shape)
print("outer:", outer.shape, list(outer.columns))
print("inner:", inner.shape, list(inner.columns))
print(outer.isna().sum().to_string())
print(outer.head(2).to_string()); print(outer.tail(2).to_string())
```

```text
A: (512, 2) B: (510, 2)
outer: (1022, 3) ['Close', 'Volume', 'High']
inner: (1022, 1) ['Close']
Close       0
Volume    510
High      512
              Close      Volume  High
Date                                 
2019-01-01  1112.14  14715077.0   NaN
2019-01-02  1091.76   8639311.0   NaN
              Close  Volume     High
Date                                
2022-12-29  2617.74     NaN  2642.59
2022-12-30  2583.87     NaN  2632.54
```

**Finding (the required explanation).** Both concatenations keep all 1022 rows — a vertical concat never drops rows. What changes is the **columns**. `join="outer"` keeps the union `{Close, Volume, High}` and fills the missing cells with `NaN`: exactly 510 missing `Volume` values (the length of B, which has no `Volume`) and 512 missing `High` values (the length of A). `join="inner"` keeps only the intersection `{Close}`, so nothing is `NaN` but two columns of data are silently thrown away. Also note `ignore_index=True` **destroys the dates** — the index becomes `0..1021` and you can no longer slice by date, so use it only when the index carries no information. A side effect worth mentioning: `Volume` is `int64` in A but `float64` in the outer result, because `NaN` forces a float column.

### Q10 — Combine the three stocks horizontally by date

**Asked.** Three one-column close-price frames renamed `Reliance`/`TCS`/`Infosys`, then six joins with shapes, missing-value counts on the outer three-way result, and the first/last date of the inner three-way result.

```python
r = rel[["Close"]].rename(columns={"Close": "Reliance"})
t = tcs[["Close"]].rename(columns={"Close": "TCS"})
i = inf[["Close"]].rename(columns={"Close": "Infosys"})

res = {"1 inner  R+T": r.join(t, how="inner"), "2 outer  R+T": r.join(t, how="outer"),
       "3 left   R+T": r.join(t, how="left"),  "4 right  R+T": r.join(t, how="right"),
       "5 outer  R+T+I": r.join([t, i], how="outer"), "6 inner  R+T+I": r.join([t, i], how="inner")}
for k, v in res.items():
    print(f"{k:16s} {str(v.shape):12s} {v.index.min().date()} -> {v.index.max().date()}")
```

```text
1 inner  R+T     (752, 2)     2020-01-01 -> 2022-12-30
2 outer  R+T     (1294, 2)    2019-01-01 -> 2023-12-29
3 left   R+T     (1022, 2)    2019-01-01 -> 2022-12-30
4 right  R+T     (1024, 2)    2020-01-01 -> 2023-12-29
5 outer  R+T+I   (1557, 3)    2019-01-01 -> 2024-12-31
6 inner  R+T+I   (492, 3)     2021-01-01 -> 2022-12-30
```

```python
o3, cp = res["5 outer  R+T+I"], res["6 inner  R+T+I"]
print(o3.isna().sum().to_string())
print("Reliance non-null", o3["Reliance"].notna().sum(), "= len(r)", len(r))
print("rows fully complete in the outer result:", int(o3.notna().all(axis=1).sum()))
print("first common date:", cp.index.min().date(), " last:", cp.index.max().date(), " rows:", len(cp))
print(cp.head(3).to_string())
```

```text
Reliance    535
TCS         533
Infosys     531
Reliance non-null 1022 = len(r) 1022
rows fully complete in the outer result: 492
first common date: 2021-01-01  last: 2022-12-30  rows: 492
            Reliance      TCS  Infosys
Date                                  
2021-01-01   2361.87  2699.87  1292.51
2021-01-04   2386.58  2746.67  1305.37
2021-01-06   2466.45  2724.58  1256.88
```

**Finding (the required explanation of the missing values).** The outer three-way result has 1557 rows — the *union* of the three date sets. Each column can only be non-null on the dates its own sheet covers, so `Reliance` is missing on 1557 − 1022 = **535** dates, `TCS` on 1557 − 1024 = **533**, and `Infosys` on 1557 − 1026 = **531**. The missing values are not data errors; they are dates the other stocks traded on and this one did not (different windows plus different intentionally-omitted dates). The inner result keeps only the 492 dates present in all three — the same as the count of fully-complete rows in the outer result, which is the arithmetic check to state in your answer.

`left` keeps Reliance's 1022 dates and `right` keeps TCS's 1024, confirming that the controlling frame decides the date set. Equivalent form with `concat`: `pd.concat([r,t,i], axis=1)` → (1557, 3) and `pd.concat([r,t,i], axis=1, join="inner")` → (492, 3). Techniques: Chapter 10 (P10.5, P10.12, P10.15).

### Q11 — Create and merge a stock-summary DataFrame

**Asked.** One row per stock with seven statistics, merged with `Company_Master` on `Ticker`, sorted by `Mean_Return` descending.

```python
summary = pd.DataFrame([
    {"Ticker": tk, "Mean_Close": round(d["Close"].mean(),2), "Median_Close": round(d["Close"].median(),2),
     "Highest_Close": round(d["Close"].max(),2), "Lowest_Close": round(d["Close"].min(),2),
     "Average_Volume": round(d["Volume"].mean(),0), "Mean_Return": round(d["Return"].mean(),6),
     "Return_Std": round(d["Return"].std(),6)}
    for tk, d in [("RELIANCE.NS", rel), ("TCS.NS", tcs), ("INFY.NS", inf)]])
print(summary.to_string(index=False))

final = pd.merge(summary, master, on="Ticker", how="left").sort_values("Mean_Return", ascending=False)
print(final[["Ticker","Company","Sector","Mean_Close","Mean_Return","Return_Std"]].to_string(index=False))
print(pd.merge(summary, master, on="Ticker", how="outer", indicator=True)["_merge"].value_counts().to_string())
```

```text
     Ticker  Mean_Close  Median_Close  Highest_Close  Lowest_Close  Average_Volume  Mean_Return  Return_Std
RELIANCE.NS     2106.67       2211.50        2907.39       1064.31       7581845.0     0.000911    0.013085
     TCS.NS     3270.40       3629.10        4312.09       1965.75       3235198.0     0.000640    0.012303
    INFY.NS     1285.17       1314.34        1608.65        853.42       5162952.0    -0.000023    0.013017

     Ticker                   Company Sector  Mean_Close  Mean_Return  Return_Std
RELIANCE.NS       Reliance Industries Energy     2106.67     0.000911    0.013085
     TCS.NS Tata Consultancy Services     IT     3270.40     0.000640    0.012303
    INFY.NS                   Infosys     IT     1285.17    -0.000023    0.013017

both          3
left_only     0
right_only    0
```

**Finding.** All three tickers match, so the merge is lossless: (3, 8) + (3, 3) → (3, 10). Ranked by mean daily return, Reliance (0.000911) beats TCS (0.000640) beats Infosys (−0.000023) — the same order as the Wealth Index in Q7, as it must be. Return standard deviations are nearly identical (1.23–1.31%), so Reliance delivered the best return per unit of risk here.

**Why `merge` and not `join`.** `Ticker` is an ordinary *column* in both frames. `join()` matches on the index, so it would need `summary.set_index("Ticker").join(master.set_index("Ticker"))` — two extra calls for the same answer. When the match key is a column, use `pd.merge(..., on="Ticker")`.

### Q12 — Common-period dataset and pivot tables

**Asked.** Slice 2021-01-01 → 2022-12-30 from each stock, add a `Stock` label column, concatenate vertically, then four pivot tables.

```python
START, END = "2021-01-01", "2022-12-30"
parts = []
for name, d in stocks.items():
    p = d.loc[START:END].copy()
    p["Stock"] = name
    parts.append(p)
combined = pd.concat(parts, axis=0)
print(combined["Stock"].value_counts().to_string())
print("combined shape:", combined.shape)

print(pd.pivot_table(combined, values="Close", index="Stock", aggfunc="mean").round(2).to_string())
print(pd.pivot_table(combined, values="Close", index="Stock", aggfunc=["min","max"]).round(2).to_string())
print(pd.pivot_table(combined, values=["Close","Volume"], index="Stock", aggfunc="mean").round(2).to_string())
print(pd.pivot_table(combined, values="Volume", index="Stock", aggfunc=["min","mean","max"]).round(0).to_string())
```

```text
Stock
Infosys     513
TCS         511
Reliance    510
combined shape: (1534, 17)

            Close
Stock            
Infosys   1194.37
Reliance  2528.81
TCS       3511.49

              min      max
            Close    Close
Stock                     
Infosys    853.42  1464.82
Reliance  2141.99  2907.39
TCS       2586.87  4312.09

            Close      Volume
Stock                        
Infosys   1194.37  5191400.13
Reliance  2528.81  7601119.76
TCS       3511.49  3214944.14

              min       mean       max
           Volume     Volume    Volume
Stock                                 
Infosys   2083661  5191400.0  18331339
Reliance  3038132  7601120.0  22332150
TCS       1168198  3214944.0   8037554
```

**Finding.** Inside the same 24-month window TCS has the highest mean close (3511) and Reliance the highest volume (7.6 m/day, more than double TCS). **The three row counts differ (510 / 511 / 513) even though the window is identical** — each sheet has its own omitted dates. That is why Q10's *inner* join gave 492: the long frame here is a per-stock slice (union-style), whereas the inner join keeps only dates all three share. Use the long frame for per-stock pivots and the inner join for anything that compares stocks day by day (scatter, correlation).

**Trap.** A two-level pivot column index (`("min","Close")`) breaks `pv["Close"]`. Flatten it when you need to index into it: `pv.columns = ["Min_Close", "Max_Close"]`.

### Q13 — Return frequency tables

**Asked.** `pd.cut` the returns into six classes, a `value_counts` frequency table for each stock in interval order with cumulative frequency, and a crosstab of `Stock` × interval. Identify each stock's modal interval.

```python
bins   = [-np.inf, -0.02, -0.01, 0.0, 0.01, 0.02, np.inf]
labels = ["< -2%", "-2% to -1%", "-1% to 0%", "0% to 1%", "1% to 2%", "> 2%"]
combined["Return_Interval"] = pd.cut(combined["Return"], bins=bins, labels=labels)

def freq_table(df, stock):
    f = df[df["Stock"] == stock]["Return_Interval"].value_counts().sort_index()
    out = f.reset_index(); out.columns = ["Return_Interval", "Frequency"]
    out["Cumulative_Frequency"] = out["Frequency"].cumsum()
    return out

print(freq_table(combined, "Reliance").to_string(index=False))
ct = pd.crosstab(combined["Stock"], combined["Return_Interval"])
print(ct.to_string())
print(ct.idxmax(axis=1).to_string())
print(ct.max(axis=1).to_string())
```

```text
Return_Interval  Frequency  Cumulative_Frequency
          < -2%         28                    28
     -2% to -1%         82                   110
      -1% to 0%        146                   256
       0% to 1%        141                   397
       1% to 2%         83                   480
           > 2%         30                   510

Return_Interval  < -2%  -2% to -1%  -1% to 0%  0% to 1%  1% to 2%  > 2%
Stock                                                                  
Infosys             30          88        145       136        81    32
Reliance            28          82        146       141        83    30
TCS                 19          71        157       153        83    28

Infosys     -1% to 0%
Reliance    -1% to 0%
TCS         -1% to 0%

Infosys     145
Reliance    146
TCS         157
```

The three frequency totals are 510, 511 and 512 against window row counts of 510, 511 and 513 — so only **Infosys** is one short. `pd.cut` drops the `NaN` returns, and Infosys has exactly one: its window begins on its very first trading day (2021-01-01), which has no previous close. Reliance's and TCS's windows start mid-history, so `Return` was already computed for their first window row:

```python
print(combined[combined["Return"].isna()]["Stock"].value_counts().to_string())
```

```text
Stock
Infosys    1
```

**Finding.** Every stock's modal interval is **−1% to 0%** (Reliance 146, TCS 157, Infosys 145) and the distributions are close to symmetric — the two central bins hold 55–61% of all days (Infosys 54.9%, Reliance 56.3%, TCS 60.7%), and the extreme bins beyond ±2% hold only 9–12%. There is no tie here, but always print `ct.max(axis=1)` alongside `idxmax` so a tie would be visible: `idxmax()` silently returns the first of a tied set. Techniques: Chapter 11 (P11.4, P11.6).

### Q14 — Individual Matplotlib visualizations

**Asked.** Six standalone charts: (A) Reliance Close + MA20 + MA50 in 2022, (B) five highest-volume Reliance days, (C) histogram of Reliance returns in the common period, (D) Reliance vs TCS returns scatter on common dates, (E) boxplot of all three return series, (F) pie of Infosys positive vs non-positive return days.

Build the shared inputs **once** — Q15 reuses all of them:

```python
cp     = r.join([t, i], how="inner")            # 492 common dates (from Q10)
cp_ret = cp.pct_change().dropna()               # 491 aligned daily returns
wi     = (1 + cp.pct_change().fillna(0)).cumprod() * 100
top5   = rel["Volume"].nlargest(5)
pos    = int((cp_ret["Infosys"] > 0).sum())
nonpos = int((cp_ret["Infosys"] <= 0).sum())

print("cp:", cp.shape, cp.index.min().date(), "->", cp.index.max().date(), "| cp_ret:", cp_ret.shape)
print(wi.iloc[-1].round(2).to_string())
print("Infosys positive:", pos, "| non-positive:", nonpos, "| total:", pos + nonpos)
print(top5.to_string())
print("corr(Reliance, TCS) =", round(cp_ret["Reliance"].corr(cp_ret["TCS"]), 4))
```

```text
cp: (492, 3) 2021-01-01 -> 2022-12-30 | cp_ret: (491, 3)
Reliance    109.40
TCS         146.25
Infosys      86.60
Infosys positive: 239 | non-positive: 252 | total: 491
Date
2021-08-26    22332150
2022-07-15    20443423
2020-04-29    19969440
2021-03-18    18756550
2020-10-07    17985216
corr(Reliance, TCS) = -0.049
```

**A — line chart**

```python
r22 = rel.loc["2022"]
plt.figure(figsize=(10, 5))
plt.plot(r22.index, r22["Close"], label="Close")
plt.plot(r22.index, r22["MA20"],  label="MA20")
plt.plot(r22.index, r22["MA50"],  label="MA50")
plt.title("Reliance Close with MA20 and MA50 (2022)")
plt.xlabel("Date"); plt.ylabel("Price (Rs.)")
plt.legend(); plt.grid(True)
plt.tight_layout(); plt.show()
```

![Reliance Close with MA20 and MA50 plotted through 2022, price falling from about 2600 to 2200 by September then recovering](/figures/14-case1-q14a-ma.png)

There are 254 rows in 2022 and **zero** `NaN` MA20 values inside 2022, because the rolling window was computed on the full 2019–2022 history before slicing. If you slice first and roll second you lose the first 19 days of the chart — slice *after* the rolling calculation.

**B–F — the other five**

```python
plt.figure(figsize=(8,4)); plt.bar(top5.index.strftime("%d-%b-%y"), top5.values)      # B
plt.title("Reliance: five highest-volume days"); plt.xlabel("Date"); plt.ylabel("Volume"); plt.show()

plt.figure(figsize=(8,4)); plt.hist(cp_ret["Reliance"], bins=30, edgecolor="black")   # C
plt.title("Reliance daily returns (common period)"); plt.xlabel("Daily return"); plt.ylabel("Days"); plt.show()

plt.figure(figsize=(8,4)); plt.scatter(cp_ret["Reliance"], cp_ret["TCS"], s=12)       # D
plt.title("Reliance vs TCS daily returns"); plt.xlabel("Reliance return"); plt.ylabel("TCS return"); plt.show()

plt.figure(figsize=(8,4))                                                             # E
plt.boxplot([cp_ret["Reliance"], cp_ret["TCS"], cp_ret["Infosys"]])
plt.xticks([1,2,3], ["Reliance","TCS","Infosys"]); plt.ylabel("Daily return"); plt.show()

plt.figure(figsize=(5,5))                                                             # F
plt.pie([pos, nonpos], labels=["Positive","Non-positive"], autopct="%1.1f%%")
plt.title("Infosys: positive vs non-positive return days"); plt.show()
```

All five render identically to the corresponding panels of the Q15 figure below, so use that image as your reference for what each should look like. Chart syntax and styling options: Chapter 12.

**Findings to write next to the charts.** (B) The five heaviest volume days are spread across 2020–2022 and all sit near 18–22 m shares, roughly 2.4–2.9× the 7.6 m average. (C) The return histogram is single-peaked and centred just above zero with symmetric tails out to about ±4% — no fat one-sided tail. (D) The Reliance-vs-TCS scatter is a shapeless cloud; the correlation is **−0.049**, i.e. effectively zero, so on this simulated data the two stocks' daily moves are unrelated (do not claim a relationship the number does not support). (E) All three boxes are centred on zero with near-identical spread; Infosys and Reliance show slightly longer tails. (F) Infosys had 239 positive and 252 non-positive days in the common period — **48.7% vs 51.3%**, which is why its Wealth Index ends below 100.

### Q15 — Final integrated figure (mandatory 2 × 3 layout)

**Asked.** One figure, `plt.figure(figsize=(18, 10))`, six panels at the exact positions in the paper, titles/labels/legends/grids, `tight_layout()`, saved as **both** `Stock_Analysis.png` and `Stock_Analysis.pdf`, then displayed.

```python
plt.figure(figsize=(18, 10))

plt.subplot(2, 3, 1)                                   # top-left: Wealth Index, three lines
for c in ["Reliance", "TCS", "Infosys"]:
    plt.plot(wi.index, wi[c], label=c)
plt.title("Wealth Index (Rs.100 invested, common period)")
plt.xlabel("Date"); plt.ylabel("Wealth Index"); plt.legend(); plt.grid(True); plt.xticks(rotation=30)

plt.subplot(2, 3, 2)                                   # top-centre: top-5 volume bar
plt.bar(top5.index.strftime("%d-%b-%y"), top5.values, color="steelblue")
plt.title("Reliance: five highest-volume days")
plt.xlabel("Date"); plt.ylabel("Volume"); plt.xticks(rotation=45); plt.grid(True, axis="y")

plt.subplot(2, 3, 3)                                   # top-right: return histogram
plt.hist(cp_ret["Reliance"], bins=30, color="darkorange", edgecolor="black")
plt.title("Reliance daily returns (common period)")
plt.xlabel("Daily return"); plt.ylabel("Number of days"); plt.grid(True, axis="y")

plt.subplot(2, 3, 4)                                   # bottom-left: scatter
plt.scatter(cp_ret["Reliance"], cp_ret["TCS"], s=12, alpha=0.6)
plt.title("Reliance vs TCS daily returns")
plt.xlabel("Reliance return"); plt.ylabel("TCS return"); plt.grid(True)

plt.subplot(2, 3, 5)                                   # bottom-centre: boxplot
plt.boxplot([cp_ret["Reliance"], cp_ret["TCS"], cp_ret["Infosys"]])
plt.xticks([1, 2, 3], ["Reliance", "TCS", "Infosys"])
plt.title("Daily return distributions (common period)")
plt.ylabel("Daily return"); plt.grid(True, axis="y")

plt.subplot(2, 3, 6)                                   # bottom-right: pie
plt.pie([pos, nonpos], labels=["Positive", "Non-positive"], autopct="%1.1f%%", startangle=90)
plt.title("Infosys: positive vs non-positive return days")

plt.tight_layout()
plt.savefig("Stock_Analysis.png")
plt.savefig("Stock_Analysis.pdf")
plt.show()
```

![Six-panel 2x3 figure: Wealth Index lines for the three stocks, top-five Reliance volume bars, Reliance return histogram, Reliance-versus-TCS return scatter, three return boxplots, and an Infosys positive-versus-non-positive pie](/figures/14-case1-q15-2x3.png)

Verified: the two files are written (191,883 bytes PNG and 47,522 bytes PDF at `dpi=110`).

**Finding.** Over the *common* 2021–2022 window the ranking flips from Q7: ₹100 becomes **₹146.25 on TCS**, ₹109.40 on Reliance and ₹86.60 on Infosys. Q7 ranked Reliance first because Reliance's window starts in 2019 and includes its big 2019–2020 run-up. **State this explicitly** — it is the whole point of the case: a like-for-like comparison needs a common period, and a comparison over each asset's own window measures the window as much as the asset.

**Traps for Q15.**

- `plt.subplot(2, 3, position)` — positions are **1-indexed and row-major**: 1,2,3 across the top row and 4,5,6 across the bottom. Getting 4 and 2 the wrong way round loses marks even if the charts are right.
- Call `plt.savefig()` **before** `plt.show()`. In a script `show()` can clear the figure and you will save a blank page.
- Save the PDF without `dpi` — PDF is vector, so `dpi` does nothing useful there. Both calls can otherwise be identical: `plt.savefig("Stock_Analysis.png")` then `plt.savefig("Stock_Analysis.pdf")`.
- The file names in the paper are exact. `Stock_Analysis.png`, capital S, capital A, underscore.
- `plt.tight_layout()` goes after the last subplot and before the saves, otherwise the rotated x-labels in panels 1 and 2 overlap the panels below.

## Full solution — Case 1

One continuous script. **I ran this exact script top to bottom with `python3` and it completed with no errors** (exit code 0, and `Stock_Analysis.png` / `Stock_Analysis.pdf` written to the working directory). The only console notes are matplotlib's `UserWarning: FigureCanvasAgg is non-interactive` from each `plt.show()` under the `Agg` backend; delete the `matplotlib.use("Agg")` line in Jupyter and they disappear.

```python
# ===== CASE 1 — Reliance / TCS / Infosys — full solution, Q1 to Q15 =====
import pandas as pd, numpy as np
import matplotlib
matplotlib.use("Agg")                      # drop this line in Jupyter
import matplotlib.pyplot as plt
pd.set_option("display.width", 120)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"

# Q1 read and inspect
rel_raw = pd.read_excel(W, sheet_name="Reliance")
tcs_raw = pd.read_excel(W, sheet_name="TCS")
inf_raw = pd.read_excel(W, sheet_name="Infosys")
master  = pd.read_excel(W, sheet_name="Company_Master")
for nm, d in [("Reliance", rel_raw), ("TCS", tcs_raw), ("Infosys", inf_raw)]:
    print(nm, d.shape, list(d.columns))
    print(d.head(5)); print(d.tail(5)); print(d.dtypes.to_string()); d.info(); print(d.describe().round(2))
print(master)

# ONE PREP BLOCK — every derived column every later question needs
def prep(df):
    df = df.copy()
    df["Date"] = pd.to_datetime(df["Date"])
    df = df.set_index("Date").sort_index()
    df["Previous_Close"]    = df["Close"].shift(1)                 # Q5
    df["Price_Change"]      = df["Close"] - df["Previous_Close"]   # Q5
    df["Return"]            = df["Close"].pct_change()             # Q6
    df["Growth"]            = 1 + df["Return"].fillna(0)           # Q7
    df["Cum_Growth"]        = df["Growth"].cumprod()               # Q7
    df["Cumulative_Return"] = df["Cum_Growth"] - 1                 # Q7
    df["Wealth_Index"]      = df["Cum_Growth"] * 100               # Q7
    df["MA20"]  = df["Close"].rolling(20).mean()                   # Q8
    df["MA50"]  = df["Close"].rolling(50).mean()                   # Q8
    df["MA200"] = df["Close"].rolling(200).mean()                  # Q8
    df["Vol20"] = df["Return"].rolling(20).std()                   # Q8
    return df

rel, tcs, inf = prep(rel_raw), prep(tcs_raw), prep(inf_raw)
stocks = {"Reliance": rel, "TCS": tcs, "Infosys": inf}

# Q2 selection practice on Reliance
print(rel.iloc[0]); print(rel.iloc[-1])
print(rel.iloc[10:20, 0:5])
print(rel[["Close", "Volume"]].head())
print(rel.loc[:, "Open":"Close"].head(15))
print(rel.loc["2020-03"].shape)
print(rel.loc["2020-03-01":"2020-03-31"].shape)

# Q3 filter and sort
mc, mv = rel["Close"].mean(), rel["Volume"].mean()
print(round(mc, 2))
print(rel[rel["Close"] > mc].shape)
print(rel[(rel["Close"] > mc) & (rel["Volume"] > mv)].shape)
print(rel[(rel["Close"] > mc) | (rel["Volume"] > mv)].shape)
print(rel.sort_values("Close", ascending=False).head(3)[["Close"]])
print(rel.sort_values(["Volume", "Close"], ascending=[False, False]).head(3)[["Close", "Volume"]])
for nm, d in stocks.items():
    m1, m2 = d["Close"].mean(), d["Volume"].mean()
    print(nm, round(m1, 2), int((d["Close"] > m1).sum()),
          int(((d["Close"] > m1) & (d["Volume"] > m2)).sum()),
          int(((d["Close"] > m1) | (d["Volume"] > m2)).sum()))

# Q4 stock profile
def profile(d):
    return pd.Series({
        "First_Date": d.index.min().date(), "Last_Date": d.index.max().date(),
        "First_Close": round(d["Close"].iloc[0], 2), "Last_Close": round(d["Close"].iloc[-1], 2),
        "Highest_Close": round(d["Close"].max(), 2), "Highest_Date": d["Close"].idxmax().date(),
        "Lowest_Close": round(d["Close"].min(), 2), "Lowest_Date": d["Close"].idxmin().date(),
        "Mean_Close": round(d["Close"].mean(), 2), "Median_Close": round(d["Close"].median(), 2),
        "Avg_Volume": round(d["Volume"].mean(), 0),
        "Days_Above_Mean": int((d["Close"] > d["Close"].mean()).sum())})
print(pd.DataFrame({k: profile(v) for k, v in stocks.items()}))
for nm, d in stocks.items():
    print(nm, "top-5 volume"); print(d["Volume"].nlargest(5))

# Q5 price changes
print(rel["Price_Change"].equals(rel["Close"].diff()))
for nm, d in stocks.items():
    pc = d["Price_Change"]
    print(nm, round(pc.max(), 2), pc.idxmax().date(), round(pc.min(), 2), pc.idxmin().date(), round(pc.mean(), 4))

# Q6 returns
for nm, d in stocks.items():
    r = d["Return"].dropna()
    print(nm, round(r.mean(), 6), round(r.median(), 6), round(r.std(), 6),
          round(r.max(), 6), r.idxmax().date(), round(r.min(), 6), r.idxmin().date())
    print(r.nlargest(5)); print(r.nsmallest(5))
print("first Return is NaN:", bool(pd.isna(rel["Return"].iloc[0])))

# Q7 wealth index
for nm, d in stocks.items():
    print(nm, round(d["Cumulative_Return"].iloc[-1] * 100, 2), round(d["Wealth_Index"].iloc[-1], 2))

# Q8 moving averages and rolling volatility
for nm, d in stocks.items():
    print(nm, round(d["Vol20"].max(), 6), d["Vol20"].idxmax().date(), int(d["MA200"].isna().sum()))
print(rel[["Close", "MA20", "MA50", "MA200"]].tail(10).round(2))

# Q9 vertical concatenation
reliance_early = rel.loc["2019":"2020"]
reliance_late  = rel.loc["2021":"2022"]
recon     = pd.concat([reliance_early, reliance_late], axis=0)
recon_new = pd.concat([reliance_early, reliance_late], axis=0, ignore_index=True)
print(reliance_early.shape, reliance_late.shape, recon.shape, recon_new.shape, len(recon) == len(rel))
A = reliance_early[["Close", "Volume"]]
B = reliance_late[["Close", "High"]]
out_ab = pd.concat([A, B], axis=0, join="outer")
in_ab  = pd.concat([A, B], axis=0, join="inner")
print(out_ab.shape, list(out_ab.columns), in_ab.shape, list(in_ab.columns))
print(out_ab.isna().sum())

# Q10 horizontal joins by date
r = rel[["Close"]].rename(columns={"Close": "Reliance"})
t = tcs[["Close"]].rename(columns={"Close": "TCS"})
i = inf[["Close"]].rename(columns={"Close": "Infosys"})
joins = {"inner RT": r.join(t, how="inner"), "outer RT": r.join(t, how="outer"),
         "left RT":  r.join(t, how="left"),  "right RT": r.join(t, how="right"),
         "outer RTI": r.join([t, i], how="outer"), "inner RTI": r.join([t, i], how="inner")}
for k, v in joins.items(): print(k, v.shape)
o3, cp = joins["outer RTI"], joins["inner RTI"]
print(o3.isna().sum())
print(cp.index.min().date(), cp.index.max().date(), cp.shape)

# Q11 summary frame merged with Company_Master
summary = pd.DataFrame([
    {"Ticker": tk, "Mean_Close": round(d["Close"].mean(), 2), "Median_Close": round(d["Close"].median(), 2),
     "Highest_Close": round(d["Close"].max(), 2), "Lowest_Close": round(d["Close"].min(), 2),
     "Average_Volume": round(d["Volume"].mean(), 0), "Mean_Return": round(d["Return"].mean(), 6),
     "Return_Std": round(d["Return"].std(), 6)}
    for tk, d in [("RELIANCE.NS", rel), ("TCS.NS", tcs), ("INFY.NS", inf)]])
final = pd.merge(summary, master, on="Ticker", how="left").sort_values("Mean_Return", ascending=False)
print(final)

# Q12 common-period long frame and pivot tables
START, END = "2021-01-01", "2022-12-30"
parts = []
for nm, d in stocks.items():
    p = d.loc[START:END].copy(); p["Stock"] = nm; parts.append(p)
combined = pd.concat(parts, axis=0)
print(combined.shape); print(combined["Stock"].value_counts())
print(pd.pivot_table(combined, values="Close", index="Stock", aggfunc="mean").round(2))
print(pd.pivot_table(combined, values="Close", index="Stock", aggfunc=["min", "max"]).round(2))
print(pd.pivot_table(combined, values=["Close", "Volume"], index="Stock", aggfunc="mean").round(2))
print(pd.pivot_table(combined, values="Volume", index="Stock", aggfunc=["min", "mean", "max"]).round(0))

# Q13 return interval frequency tables
bins   = [-np.inf, -0.02, -0.01, 0.0, 0.01, 0.02, np.inf]
labels = ["< -2%", "-2% to -1%", "-1% to 0%", "0% to 1%", "1% to 2%", "> 2%"]
combined["Return_Interval"] = pd.cut(combined["Return"], bins=bins, labels=labels)
for s in ["Reliance", "TCS", "Infosys"]:
    f = combined[combined["Stock"] == s]["Return_Interval"].value_counts().sort_index()
    ft = f.reset_index(); ft.columns = ["Return_Interval", "Frequency"]
    ft["Cumulative_Frequency"] = ft["Frequency"].cumsum()
    print(s); print(ft)
ct = pd.crosstab(combined["Stock"], combined["Return_Interval"])
print(ct); print(ct.idxmax(axis=1))

# Q14 / Q15 shared objects
cp_ret = cp.pct_change().dropna()
wi     = (1 + cp.pct_change().fillna(0)).cumprod() * 100
top5   = rel["Volume"].nlargest(5)
pos    = int((cp_ret["Infosys"] > 0).sum())
nonpos = int((cp_ret["Infosys"] <= 0).sum())

# Q14A line chart
r22 = rel.loc["2022"]
plt.figure(figsize=(10, 5))
plt.plot(r22.index, r22["Close"], label="Close")
plt.plot(r22.index, r22["MA20"], label="MA20")
plt.plot(r22.index, r22["MA50"], label="MA50")
plt.title("Reliance Close with MA20 and MA50 (2022)"); plt.xlabel("Date"); plt.ylabel("Price (Rs.)")
plt.legend(); plt.grid(True); plt.tight_layout(); plt.show()
# Q14B bar, Q14C histogram, Q14D scatter, Q14E boxplot, Q14F pie
plt.figure(); plt.bar(top5.index.strftime("%d-%b-%y"), top5.values); plt.show()
plt.figure(); plt.hist(cp_ret["Reliance"], bins=30); plt.show()
plt.figure(); plt.scatter(cp_ret["Reliance"], cp_ret["TCS"], s=12); plt.show()
plt.figure(); plt.boxplot([cp_ret["Reliance"], cp_ret["TCS"], cp_ret["Infosys"]]); plt.show()
plt.figure(); plt.pie([pos, nonpos], labels=["Positive", "Non-positive"], autopct="%1.1f%%"); plt.show()

# Q15 mandatory 2 x 3 figure
plt.figure(figsize=(18, 10))
plt.subplot(2, 3, 1)
for c in ["Reliance", "TCS", "Infosys"]:
    plt.plot(wi.index, wi[c], label=c)
plt.title("Wealth Index (Rs.100 invested, common period)")
plt.xlabel("Date"); plt.ylabel("Wealth Index"); plt.legend(); plt.grid(True); plt.xticks(rotation=30)

plt.subplot(2, 3, 2)
plt.bar(top5.index.strftime("%d-%b-%y"), top5.values, color="steelblue")
plt.title("Reliance: five highest-volume days")
plt.xlabel("Date"); plt.ylabel("Volume"); plt.xticks(rotation=45); plt.grid(True, axis="y")

plt.subplot(2, 3, 3)
plt.hist(cp_ret["Reliance"], bins=30, color="darkorange", edgecolor="black")
plt.title("Reliance daily returns (common period)")
plt.xlabel("Daily return"); plt.ylabel("Number of days"); plt.grid(True, axis="y")

plt.subplot(2, 3, 4)
plt.scatter(cp_ret["Reliance"], cp_ret["TCS"], s=12, alpha=0.6)
plt.title("Reliance vs TCS daily returns")
plt.xlabel("Reliance return"); plt.ylabel("TCS return"); plt.grid(True)

plt.subplot(2, 3, 5)
plt.boxplot([cp_ret["Reliance"], cp_ret["TCS"], cp_ret["Infosys"]])
plt.xticks([1, 2, 3], ["Reliance", "TCS", "Infosys"])
plt.title("Daily return distributions (common period)"); plt.ylabel("Daily return"); plt.grid(True, axis="y")

plt.subplot(2, 3, 6)
plt.pie([pos, nonpos], labels=["Positive", "Non-positive"], autopct="%1.1f%%", startangle=90)
plt.title("Infosys: positive vs non-positive return days")

plt.tight_layout()
plt.savefig("Stock_Analysis.png")
plt.savefig("Stock_Analysis.pdf")
plt.show()
print("CASE 1 COMPLETE — Stock_Analysis.png and Stock_Analysis.pdf written")
```

```text
CASE 1 COMPLETE — Stock_Analysis.png and Stock_Analysis.pdf written
```

## Case 2 — Corporate Bond Portfolio Review (Q1–Q17 + Part D)

> "An investment company holds bonds issued by companies from different industries. The investment team wants to examine the current value, coupon income and composition of its bond portfolio."

**Dataset facts.**

| Sheet | Rows × cols | Columns |
| --- | --- | --- |
| `Bond_Holdings` | 120 × 6 | `Holding_ID`, `Bond_Code`, `Units_Held`, `Purchase_Price`, `Current_Price`, `Holding_Months` |
| `Bond_Master` | 24 × 6 | `Bond_Code`, `Issuer`, `Industry`, `Credit_Rating`, `Coupon_Rate`, `Face_Value` |

24 bonds, 8 per credit rating in the master; 120 holdings referencing all 24 codes, so the left merge keeps exactly 120 rows. Six industries. No nulls anywhere.

### Part A — Import and inspect (Q1–Q3)

### Q1 — Read both sheets

```python
import pandas as pd
import matplotlib.pyplot as plt
pd.set_option("display.width", 120)
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"

hold = pd.read_excel(W, sheet_name="Bond_Holdings")
mast = pd.read_excel(W, sheet_name="Bond_Master")
print("Bond_Holdings:", hold.shape, "| Bond_Master:", mast.shape)
```

```text
Bond_Holdings: (120, 6) | Bond_Master: (24, 6)
```

### Q2 — Inspect Bond_Holdings

```python
print(hold.head(5).to_string())
print("shape:", hold.shape)
print("columns:", list(hold.columns))
print(hold.dtypes.to_string())
hold.info()
```

```text
  Holding_ID Bond_Code  Units_Held  Purchase_Price  Current_Price  Holding_Months
0      H0001    BND012         167         1000.53         946.65               6
1      H0002    BND008         217          857.79         831.59               7
2      H0003    BND004         117          995.40         962.27              42
3      H0004    BND006         114          991.80         977.19              44
4      H0005    BND022         185          895.39         821.19              42
shape: (120, 6)
columns: ['Holding_ID', 'Bond_Code', 'Units_Held', 'Purchase_Price', 'Current_Price', 'Holding_Months']
Holding_ID         object
Bond_Code          object
Units_Held          int64
Purchase_Price    float64
Current_Price     float64
Holding_Months      int64

<class 'pandas.core.frame.DataFrame'>
RangeIndex: 120 entries, 0 to 119
Data columns (total 6 columns):
 #   Column          Non-Null Count  Dtype  
---  ------          --------------  -----  
 0   Holding_ID      120 non-null    object 
 1   Bond_Code       120 non-null    object 
 2   Units_Held      120 non-null    int64  
 3   Purchase_Price  120 non-null    float64
 4   Current_Price   120 non-null    float64
 5   Holding_Months  120 non-null    int64  
dtypes: float64(2), int64(2), object(2)
memory usage: 5.8+ KB
```

**Finding.** `Holding_ID` and `Bond_Code` are `object` (text), the two prices are `float64` and the two counts are `int64` — nothing needs converting. All 120 rows are complete, so no missing-value handling is required anywhere in this case.

### Q3 — Descriptive statistics for the numerical variables

```python
print(hold.describe().round(2).to_string())
```

```text
       Units_Held  Purchase_Price  Current_Price  Holding_Months
count      120.00          120.00         120.00          120.00
mean       137.99          934.08         950.72           25.92
std         64.61           48.44          76.33           13.81
min         22.00          854.58         799.67            2.00
25%         80.50          892.66         889.16           13.75
50%        136.50          927.66         949.16           26.50
75%        195.25          979.56        1000.49           38.00
max        250.00         1019.34        1139.63           48.00
```

**Finding.** `describe()` automatically restricts itself to the four numeric columns and skips the two text ones, which is exactly what "numerical variables" asks for. Mean current price (950.72) exceeds mean purchase price (934.08), so the portfolio is in aggregate slightly up; current prices are also far more dispersed (std 76.3 vs 48.4) because market moves have pulled the holdings apart.

### Part B — Prepare the portfolio data (Q4–Q9)

### Q4 — Combine holdings with master on Bond_Code (keep all holdings)

"All observations appearing in `Bond_Holdings` should remain" = **left merge with `Bond_Holdings` on the left**.

```python
print("codes in holdings missing from master:", set(hold["Bond_Code"]) - set(mast["Bond_Code"]))
print("distinct codes in holdings:", hold["Bond_Code"].nunique(), "| master key unique:", mast["Bond_Code"].is_unique)

port = pd.merge(hold, mast, on="Bond_Code", how="left")
print("merged shape:", port.shape, "| rows preserved:", len(port) == len(hold))
print("missing master fields after merge:", int(port["Issuer"].isna().sum()))
print(port.head(3).to_string())
```

```text
codes in holdings missing from master: set()
distinct codes in holdings: 24 | master key unique: True
merged shape: (120, 11) | rows preserved: True
missing master fields after merge: 0
  Holding_ID Bond_Code  Units_Held  Purchase_Price  Current_Price  Holding_Months            Issuer         Industry Credit_Rating  Coupon_Rate  Face_Value
0      H0001    BND012         167         1000.53         946.65               6  Lotus Healthcare  Pharmaceuticals             A         8.27        5000
1      H0002    BND008         217          857.79         831.59               7     Harbor Energy   Infrastructure            AA         7.27       10000
2      H0003    BND004         117          995.40         962.27              42    Dynamo Telecom          Telecom           AAA         6.67       10000
```

**Finding.** 120 × 6 merged with 24 × 6 on one shared key gives 120 × 11 (6 + 6 − 1 for the shared key). Every code matches, so `how="left"`, `"inner"`, `"right"` and `"outer"` all return (120, 11) here — but **write `how="left"`**, because that is the only one guaranteed to satisfy the wording if a code had been missing. The proof to include:

```python
chk = pd.merge(hold, mast, on="Bond_Code", how="left", indicator=True)
print(chk["_merge"].value_counts().to_string())
```

```text
both          120
left_only       0
right_only      0
```

### Q5–Q9 — The derived-column block

Five columns, one cell, done once. Everything from Q10 onwards reads these.

```python
port["Purchase_Value"]       = port["Units_Held"] * port["Purchase_Price"]                  # Q5
port["Current_Value"]        = port["Units_Held"] * port["Current_Price"]                   # Q6
port["Value_Change"]         = port["Current_Value"] - port["Purchase_Value"]               # Q7
port["Value_Change_pct"]     = (port["Value_Change"] / port["Purchase_Value"]) * 100        # Q8
port["Annual_Coupon_Income"] = port["Units_Held"] * port["Face_Value"] * (port["Coupon_Rate"] / 100)  # Q9

print(port[["Holding_ID","Units_Held","Purchase_Value","Current_Value",
            "Value_Change","Value_Change_pct","Annual_Coupon_Income"]].head(5).round(2).to_string())
print(port[["Purchase_Value","Current_Value","Value_Change","Annual_Coupon_Income"]].sum().round(2).to_string())
```

```text
  Holding_ID  Units_Held  Purchase_Value  Current_Value  Value_Change  Value_Change_pct  Annual_Coupon_Income
0      H0001         167       167088.51      158090.55      -8997.96             -5.39               69054.5
1      H0002         217       186140.43      180455.03      -5685.40             -3.05              157759.0
2      H0003         117       116461.80      112585.59      -3876.21             -3.33               78039.0
3      H0004         114       113065.20      111399.66      -1665.54             -1.47               10168.8
4      H0005         185       165647.15      151920.15     -13727.00             -8.29               62622.5

Purchase_Value          15453445.04
Current_Value           15682743.47
Value_Change              229298.43
Annual_Coupon_Income     6329471.10
```

**Finding.** The portfolio cost ₹1.545 crore and is worth ₹1.568 crore, a net gain of ₹2.29 lakh (+1.48%), with ₹63.3 lakh of annual coupon income. **Note that `Annual_Coupon_Income` uses `Face_Value`, not price** — coupons are paid on face value, so a holding can be down in price and still be the biggest income earner. Printing the four totals is a free sanity check: if `Value_Change` does not equal `Current_Value − Purchase_Value` at the total level, one of your formulas is wrong.

### Part C — Explore the portfolio (Q10–Q17)

### Q10 — Holdings with a positive Value_Change

```python
gainers = port[port["Value_Change"] > 0]
print("holdings with a positive Value_Change:", gainers.shape)
print(gainers[["Holding_ID","Issuer","Credit_Rating","Value_Change","Value_Change_pct"]].head(5).round(2).to_string(index=False))
```

```text
holdings with a positive Value_Change: (64, 16)
Holding_ID          Issuer Credit_Rating  Value_Change  Value_Change_pct
     H0007     Unity Roads             A       5911.36              3.37
     H0008  BluePeak Infra            AA       6864.78              9.72
     H0009  Crescent Power             A       8096.34             11.92
     H0010   Keystone Auto            AA       4236.50              5.73
     H0015 Frontier Pharma             A      12312.12              6.33
# ... (59 rows omitted)
```

**Finding.** 64 of 120 holdings (53.3%) have gained value; 56 have lost. That near-even split with a small net positive total is the picture a boxplot or histogram of `Value_Change_pct` will confirm in Part D.

### Q11 — "Credit_Rating is AAA and Current_Value exceeds Rs. 4,00,000" — the empty result

**This question as printed has no answer rows. Handle it head-on; do not "fix" it silently.**

```python
q11 = port[(port["Credit_Rating"] == "AAA") & (port["Current_Value"] > 400000)]
print(q11)
print("shape:", q11.shape)
print("rows returned:", len(q11))
```

```text
Empty DataFrame
Columns: [Holding_ID, Bond_Code, Units_Held, Purchase_Price, Current_Price, Holding_Months, Issuer, Industry, Credit_Rating, Coupon_Rate, Face_Value, Purchase_Value, Current_Value, Value_Change, Value_Change_pct, Annual_Coupon_Income]
Index: []
shape: (0, 16)
rows returned: 0
```

**The shape is `(0, 16)`** — zero rows, all 16 columns still present.

Now prove it is the data, not your code:

```python
print("portfolio maximum Current_Value :", round(port["Current_Value"].max(), 2))
print("AAA maximum Current_Value       :", round(port[port["Credit_Rating"] == "AAA"]["Current_Value"].max(), 2))
print("AAA holdings in the portfolio   :", int((port["Credit_Rating"] == "AAA").sum()))
print("holdings above 400000 (any rating):", int((port["Current_Value"] > 400000).sum()))
```

```text
portfolio maximum Current_Value : 246147.6
AAA maximum Current_Value       : 246147.6
AAA holdings in the portfolio   : 35
holdings above 400000 (any rating): 0
```

**Write exactly this in the exam** (two sentences, and they carry the marks):

> The filter is valid and correctly implemented; no holding in the portfolio satisfies it, so the result is an empty DataFrame of shape (0, 16). I report zero rows and state the portfolio maximum: the largest `Current_Value` is ₹246,147.60 — held by a AAA bond — so the ₹4,00,000 threshold cannot be met by any rating.

Then **repair the threshold** so you can still demonstrate the skill. `> 150000` is a sensible cut because it sits between the median (133,706) and the 75th percentile (180,613) of `Current_Value`, so it keeps a meaningful minority of holdings:

```python
q11_fixed = port[(port["Credit_Rating"] == "AAA") & (port["Current_Value"] > 150000)]
print("shape:", q11_fixed.shape)
print(q11_fixed[["Holding_ID","Issuer","Credit_Rating","Units_Held","Current_Value","Value_Change_pct"]]
      .sort_values("Current_Value", ascending=False).round(2).to_string(index=False))
```

```text
shape: (13, 16)
Holding_ID           Issuer Credit_Rating  Units_Held  Current_Value  Value_Change_pct
     H0018  Vertex Networks           AAA         246      246147.60              2.89
     H0052  Vertex Networks           AAA         240      218337.60             -4.35
     H0088  Vertex Networks           AAA         237      210678.78             -7.01
     H0063   Dynamo Telecom           AAA         210      194100.90              3.28
     H0112   Summit Finance           AAA         198      179811.72             -9.53
     H0064  Granite Finance           AAA         203      179046.00             -1.77
     H0016    Meridian Bank           AAA         172      168647.72             13.91
     H0036   Summit Finance           AAA         167      164670.35              1.34
     H0029  Granite Finance           AAA         158      157502.30              8.13
     H0095 Jupiter Networks           AAA         151      153879.57              5.93
     H0005  Vertex Networks           AAA         185      151920.15             -8.29
     H0118    Meridian Bank           AAA         171      151314.48              3.55
     H0032       Aster Bank           AAA         170      151170.80              3.29
```

**The general lesson — memorise this three-line reflex.** When a filter returns nothing, do not retype the code and do not change the question. Print the extremes of the columns you filtered on:

```python
print(df[NUM_COL].max(), df[NUM_COL].min())   # is the threshold reachable at all?
print(df[CAT_COL].unique())                   # is the category spelled the way I typed it?
print(df[df[CAT_COL] == VALUE].shape)         # does either half of the AND match on its own?
```

Three outcomes, three different answers to write:

| What you find | What it means | What to write |
| --- | --- | --- |
| `max` is below the threshold | The data cannot satisfy the question | "Filter correct; zero rows; portfolio maximum is X" |
| The category is not in `unique()` | Typo or different spelling/case in the data | Fix the string, e.g. `"AAA "` with a trailing space, or `.str.strip()` |
| Each half matches alone but AND gives zero | The two conditions are genuinely disjoint | "No observation satisfies both conditions simultaneously" |

An empty result is a **finding**, not a failure. What loses marks is leaving a blank cell or quietly swapping `&` for `|` to make something appear.

### Q12 — Sort the portfolio by Current_Value, highest to lowest

```python
port_sorted = port.sort_values("Current_Value", ascending=False)
print(port_sorted[["Holding_ID","Issuer","Credit_Rating","Current_Value"]].head(5).round(2).to_string(index=False))
print("shape =", port_sorted.shape)
```

```text
Holding_ID            Issuer Credit_Rating  Current_Value
     H0018   Vertex Networks           AAA      246147.60
     H0074   Frontier Pharma             A      244002.85
     H0046      Indigo Roads             A      243645.60
     H0020 Zenith Healthcare             A      242670.20
     H0017 Riverstone Pharma             A      241293.60
# ... (115 rows omitted)
shape = (120, 16)
```

`sort_values` returns a **new** frame; the original `port` is untouched, which is what you want since later questions use the unsorted version. Add `inplace=True` only if the question says "sort the DataFrame itself".

### Q13 — The five largest holdings

```python
top5 = port.nlargest(5, "Current_Value")
print(top5[["Holding_ID","Issuer","Industry","Credit_Rating","Units_Held","Current_Price","Current_Value"]]
      .round(2).to_string(index=False))
```

```text
Holding_ID            Issuer        Industry Credit_Rating  Units_Held  Current_Price  Current_Value
     H0018   Vertex Networks         Telecom           AAA         246        1000.60      246147.60
     H0074   Frontier Pharma Pharmaceuticals             A         245         995.93      244002.85
     H0046      Indigo Roads           Power             A         220        1107.48      243645.60
     H0020 Zenith Healthcare Pharmaceuticals             A         244         994.55      242670.20
     H0017 Riverstone Pharma Pharmaceuticals             A         240        1005.39      241293.60
```

`port.nlargest(5, "Current_Value")` and `port.sort_values("Current_Value", ascending=False).head(5)` give the same five rows — use either. **Finding:** the top five are all large *unit counts* (220–246 units) rather than high prices; three of the five are Pharmaceuticals, and four of the five are A-rated, so the biggest positions are not the safest ones.

### Q14 — Mean, median, std of Current_Value; largest and smallest Value_Change

```python
print("Current_Value  mean   :", round(port["Current_Value"].mean(), 2))
print("Current_Value  median :", round(port["Current_Value"].median(), 2))
print("Current_Value  std    :", round(port["Current_Value"].std(), 2))
print("Value_Change   max    :", round(port["Value_Change"].max(), 2))
print("Value_Change   min    :", round(port["Value_Change"].min(), 2))
```

```text
Current_Value  mean   : 130689.53
Current_Value  median : 133706.47
Current_Value  std    : 61369.23
Value_Change   max    : 27036.0
Value_Change   min    : -18944.64
```

One-call alternative when the question wants a tidy table:

```python
print(port.agg({"Current_Value": ["mean","median","std"], "Value_Change": ["max","min"]}).round(2).to_string())
```

```text
        Current_Value  Value_Change
mean        130689.53           NaN
median      133706.47           NaN
std          61369.23           NaN
max               NaN      27036.00
min               NaN     -18944.64
```

**Finding.** Median (133,706) slightly exceeds mean (130,690), so `Current_Value` is mildly left-skewed — there is no single dominating mega-holding. The best holding gained ₹27,036 and the worst lost ₹18,945, so gains and losses are of similar magnitude. The `NaN`s in the `agg()` version are expected: each statistic was only requested for one of the two columns.

### Q15 — Frequency table of Credit_Rating

```python
print(port["Credit_Rating"].value_counts().to_string())

ft = port["Credit_Rating"].value_counts().reset_index()
ft.columns = ["Credit_Rating", "Holdings"]
ft["Percent"] = (ft["Holdings"] / ft["Holdings"].sum() * 100).round(1)
print(ft.to_string(index=False))
```

```text
Credit_Rating
A      46
AA     39
AAA    35

Credit_Rating  Holdings  Percent
            A        46     38.3
           AA        39     32.5
          AAA        35     29.2
```

**Finding.** The *master* has 8 bonds in each rating band, but the *holdings* are not evenly spread: 46 A, 39 AA, 35 AAA. The frequency table counts **holdings, not bonds** — say which one you are counting, because "the number of holdings belonging to each Credit_Rating" is the holdings count (120 total), while `mast["Credit_Rating"].value_counts()` would give 8/8/8.

### Q16 — Pivot table: mean Current_Value by Industry

```python
print(pd.pivot_table(port, values="Current_Value", index="Industry", aggfunc="mean").round(2).to_string())
```

```text
                 Current_Value
Industry                      
Automobile           103574.81
Banking              115003.46
Infrastructure       133396.71
Pharmaceuticals      161081.29
Power                131030.83
Telecom              127602.25
```

Add `.sort_values("Current_Value", ascending=False)` when the question says "which industry has the largest average holding":

```text
                 Current_Value
Industry                      
Pharmaceuticals      161081.29
Infrastructure       133396.71
Power                131030.83
Telecom              127602.25
Banking              115003.46
Automobile           103574.81
```

**Finding.** Pharmaceuticals has the largest average holding (₹161,081) and Automobile the smallest (₹103,575) — a 1.56× spread. A quirk of this dataset worth one sentence: **`Industry` and `Credit_Rating` are perfectly nested** (every Automobile bond is AA, every Banking bond is AAA, and so on), so a two-way pivot is mostly empty:

```python
print(pd.pivot_table(port, values="Current_Value", index="Industry",
                     columns="Credit_Rating", aggfunc="mean").round(0).to_string())
```

```text
Credit_Rating           A        AA       AAA
Industry                                     
Automobile            NaN  103575.0       NaN
Banking               NaN       NaN  115003.0
Infrastructure        NaN  133397.0       NaN
Pharmaceuticals  161081.0       NaN       NaN
Power            131031.0       NaN       NaN
Telecom               NaN       NaN  127602.0
```

The `NaN`s mean "no such combination exists in the data", not "missing value" — a two-way pivot on nested categories always looks like this.

### Q17 — Pivot table: mean and max Value_Change_pct by Credit_Rating

```python
print(pd.pivot_table(port, values="Value_Change_pct", index="Credit_Rating",
                     aggfunc=["mean","max"]).round(2).to_string())
```

```text
                          mean              max
              Value_Change_pct Value_Change_pct
Credit_Rating                                  
A                         2.43            13.54
AA                        2.39            13.61
AAA                       0.38            13.91
```

Two aggfuncs produce a **two-level column index**. Flatten it if you need to index or plot from it:

```python
pv = pd.pivot_table(port, values="Value_Change_pct", index="Credit_Rating", aggfunc=["mean","max"])
pv.columns = ["Mean_pct", "Max_pct"]
print(pv.round(2).to_string())
```

```text
               Mean_pct  Max_pct
Credit_Rating                   
A                  2.43    13.54
AA                 2.39    13.61
AAA                0.38    13.91
```

**Finding.** A and AA holdings averaged about +2.4% while AAA averaged only +0.38%, yet the single best performer overall is AAA (+13.91%). Best-case outcomes are nearly identical across ratings (13.5–13.9%); it is the *average* that separates them. Do not over-claim: `Value_Change_pct` spans roughly −9.9% to +13.9% across the whole portfolio and the rating gap is small relative to that spread.

### Part D — Matplotlib analysis: the 2 × 2 figure

```python
top5 = port.nlargest(5, "Current_Value")

plt.figure(figsize=(14, 10))

plt.subplot(2, 2, 1)                                   # top-left: five largest holdings
plt.bar(top5["Issuer"], top5["Current_Value"], color="steelblue")
plt.title("Five largest holdings by Current Value")
plt.xlabel("Issuer"); plt.ylabel("Current Value (Rs.)")
plt.xticks(rotation=30, ha="right"); plt.grid(True, axis="y")

plt.subplot(2, 2, 2)                                   # top-right: histogram, 10 bins
plt.hist(port["Value_Change_pct"], bins=10, color="darkorange", edgecolor="black")
plt.title("Distribution of Value_Change_pct (10 bins)")
plt.xlabel("Value change (%)"); plt.ylabel("Number of holdings"); plt.grid(True, axis="y")

plt.subplot(2, 2, 3)                                   # bottom-left: scatter
plt.scatter(port["Holding_Months"], port["Value_Change_pct"], s=18, alpha=0.7)
plt.title("Holding months vs value change")
plt.xlabel("Holding_Months"); plt.ylabel("Value change (%)"); plt.grid(True)

plt.subplot(2, 2, 4)                                   # bottom-right: boxplot by rating
groups = [port[port["Credit_Rating"] == g]["Current_Value"] for g in ["AAA", "AA", "A"]]
plt.boxplot(groups)
plt.xticks([1, 2, 3], ["AAA", "AA", "A"])
plt.title("Current Value by Credit Rating")
plt.xlabel("Credit rating"); plt.ylabel("Current Value (Rs.)"); plt.grid(True, axis="y")

plt.tight_layout()
plt.show()
```

![Four-panel 2x2 bond figure: bar chart of the five largest holdings by issuer, ten-bin histogram of value change percentage, scatter of holding months against value change, and boxplots of current value for AAA, AA and A ratings](/figures/14-case2-2x2.png)

```python
print("boxplot group sizes:", [len(g) for g in groups])
print("Holding_Months range:", port["Holding_Months"].min(), "-", port["Holding_Months"].max())
print("corr(Holding_Months, Value_Change_pct) =", round(port["Holding_Months"].corr(port["Value_Change_pct"]), 4))
```

```text
boxplot group sizes: [35, 39, 46]
Holding_Months range: 2 - 48
corr(Holding_Months, Value_Change_pct) = 0.065
```

**Findings for the four panels.**

1. **Bar** — the five largest holdings are all within about 2% of each other (₹241,294–₹246,148), so no single position dominates the portfolio. Note `plt.xticks(rotation=30, ha="right")`: issuer names are long and will overlap without it.
2. **Histogram** — `Value_Change_pct` spreads from about −10% to +14% with no single dominant peak; the bins on either side of zero are the fullest, matching the 64/56 gainers/losers split from Q10.
3. **Scatter** — no relationship. The correlation is **+0.065**, i.e. essentially zero, so **do not write "longer holdings performed better"**. The correct sentence is: holding period explains none of the variation in value change in this portfolio.
4. **Boxplot** — the three rating bands have overlapping value distributions with medians between roughly ₹110k and ₹145k; A-rated holdings have the highest median (145,237) and AA the widest box (IQR 115,112 against 87,154 for A and 71,462 for AAA). Group sizes (35, 39, 46) match the Q15 frequency table, which is the check that your boxplot used the right subsets.

**Traps for Part D.** Pass a *list of Series* to `plt.boxplot`, one per group, and label them with `plt.xticks([1,2,3], [...])` — `plt.boxplot` will not read group labels off a DataFrame. And keep the order of the list and the order of the labels in sync; swapping them silently mislabels every box.

## Full solution — Case 2

**I ran this exact script top to bottom with `python3` and it completed with no errors** (exit code 0; `Bond_Portfolio.png` written).

```python
# ===== CASE 2 — Corporate Bond Portfolio Review — full solution, Q1 to Q17 + Part D =====
import pandas as pd
import matplotlib
matplotlib.use("Agg")                      # drop this line in Jupyter
import matplotlib.pyplot as plt
pd.set_option("display.width", 120)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"

# Q1 read both sheets
hold = pd.read_excel(W, sheet_name="Bond_Holdings")
mast = pd.read_excel(W, sheet_name="Bond_Master")
print(hold.shape, mast.shape)

# Q2 inspect Bond_Holdings
print(hold.head(5)); print(hold.shape); print(list(hold.columns)); print(hold.dtypes); hold.info()

# Q3 descriptive statistics
print(hold.describe().round(2))

# Q4 left merge on Bond_Code  (key check first)
print(set(hold["Bond_Code"]) - set(mast["Bond_Code"]), mast["Bond_Code"].is_unique)
port = pd.merge(hold, mast, on="Bond_Code", how="left")
print(port.shape, len(port) == len(hold), int(port["Issuer"].isna().sum()))

# Q5-Q9 derived columns — created once, used by every question below
port["Purchase_Value"]       = port["Units_Held"] * port["Purchase_Price"]
port["Current_Value"]        = port["Units_Held"] * port["Current_Price"]
port["Value_Change"]         = port["Current_Value"] - port["Purchase_Value"]
port["Value_Change_pct"]     = (port["Value_Change"] / port["Purchase_Value"]) * 100
port["Annual_Coupon_Income"] = port["Units_Held"] * port["Face_Value"] * (port["Coupon_Rate"] / 100)
print(port[["Holding_ID", "Purchase_Value", "Current_Value", "Value_Change",
            "Value_Change_pct", "Annual_Coupon_Income"]].head(5).round(2))

# Q10 positive Value_Change
gainers = port[port["Value_Change"] > 0]
print(gainers.shape)
print(gainers[["Holding_ID", "Issuer", "Value_Change", "Value_Change_pct"]].head().round(2))

# Q11 AAA and Current_Value > 400000  -> EMPTY; prove it is the data
q11 = port[(port["Credit_Rating"] == "AAA") & (port["Current_Value"] > 400000)]
print(q11); print("shape:", q11.shape)
print("portfolio max Current_Value:", round(port["Current_Value"].max(), 2))
q11_fixed = port[(port["Credit_Rating"] == "AAA") & (port["Current_Value"] > 150000)]
print("repaired threshold 150000 ->", q11_fixed.shape)

# Q12 sort by Current_Value descending
port_sorted = port.sort_values("Current_Value", ascending=False)
print(port_sorted[["Holding_ID", "Issuer", "Current_Value"]].head().round(2))

# Q13 five largest holdings
top5 = port.nlargest(5, "Current_Value")
print(top5[["Holding_ID", "Issuer", "Industry", "Credit_Rating", "Current_Value"]].round(2))

# Q14 summary statistics
print(round(port["Current_Value"].mean(), 2), round(port["Current_Value"].median(), 2),
      round(port["Current_Value"].std(), 2), round(port["Value_Change"].max(), 2),
      round(port["Value_Change"].min(), 2))

# Q15 frequency table of Credit_Rating
print(port["Credit_Rating"].value_counts())

# Q16 pivot: mean Current_Value by Industry
print(pd.pivot_table(port, values="Current_Value", index="Industry", aggfunc="mean").round(2))

# Q17 pivot: mean and max Value_Change_pct by Credit_Rating
print(pd.pivot_table(port, values="Value_Change_pct", index="Credit_Rating",
                     aggfunc=["mean", "max"]).round(2))

# Part D 2 x 2 figure
plt.figure(figsize=(14, 10))
plt.subplot(2, 2, 1)
plt.bar(top5["Issuer"], top5["Current_Value"], color="steelblue")
plt.title("Five largest holdings by Current Value"); plt.xlabel("Issuer"); plt.ylabel("Current Value (Rs.)")
plt.xticks(rotation=30, ha="right"); plt.grid(True, axis="y")

plt.subplot(2, 2, 2)
plt.hist(port["Value_Change_pct"], bins=10, color="darkorange", edgecolor="black")
plt.title("Distribution of Value_Change_pct (10 bins)")
plt.xlabel("Value change (%)"); plt.ylabel("Number of holdings"); plt.grid(True, axis="y")

plt.subplot(2, 2, 3)
plt.scatter(port["Holding_Months"], port["Value_Change_pct"], s=18, alpha=0.7)
plt.title("Holding months vs value change"); plt.xlabel("Holding_Months"); plt.ylabel("Value change (%)")
plt.grid(True)

plt.subplot(2, 2, 4)
plt.boxplot([port[port["Credit_Rating"] == g]["Current_Value"] for g in ["AAA", "AA", "A"]])
plt.xticks([1, 2, 3], ["AAA", "AA", "A"])
plt.title("Current Value by Credit Rating"); plt.xlabel("Credit rating"); plt.ylabel("Current Value (Rs.)")
plt.grid(True, axis="y")

plt.tight_layout()
plt.savefig("Bond_Portfolio.png")
plt.show()
print("CASE 2 COMPLETE")
```

```text
CASE 2 COMPLETE
```

## Case 3 — Insurance Claims Portfolio Analysis (Q1–Q19 + Part D)

> "An insurance company wants to examine claims received under different types of insurance policies. Claims information and policy information are maintained separately."

**Dataset facts.**

| Sheet | Rows × cols | Columns |
| --- | --- | --- |
| `Claims` | 150 × 6 | `Claim_ID`, `Policy_ID`, `Claim_Date`, `Claim_Amount`, `Settlement_Days`, `Claim_Status` |
| `Policy_Master` | 60 × 6 | `Policy_ID`, `Policy_Type`, `Annual_Premium`, `Sum_Insured`, `Region`, `Risk_Category` |

150 claims against 55 distinct policies out of 60; 15 policies per `Policy_Type` and 15 per `Region`; no nulls. Claims per policy are uneven — `P0048` alone has 13 claims.

### Part A — Construct the analysis dataset (Q1–Q6)

### Q1 — Read the two sheets

```python
import pandas as pd
import matplotlib.pyplot as plt
pd.set_option("display.width", 125)
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"

claims = pd.read_excel(W, sheet_name="Claims")
policy = pd.read_excel(W, sheet_name="Policy_Master")
print("Claims:", claims.shape, "| Policy_Master:", policy.shape)
```

```text
Claims: (150, 6) | Policy_Master: (60, 6)
```

### Q2 — First five observations of each

```python
print(claims.head(5).to_string())
print(policy.head(5).to_string())
```

```text
  Claim_ID Policy_ID Claim_Date  Claim_Amount  Settlement_Days Claim_Status
0    C0001     P0038 2026-04-10     312013.63               70     Approved
1    C0002     P0048 2025-12-28     573508.62               61     Approved
2    C0003     P0017 2026-07-05      99722.73               27     Approved
3    C0004     P0048 2026-07-26     559165.67               26     Approved
4    C0005     P0048 2026-07-06     508146.10               70     Approved

  Policy_ID Policy_Type  Annual_Premium  Sum_Insured Region Risk_Category
0     P0001       Motor        20655.80       700000  North           Low
1     P0002      Health        12143.84       850000  South      Moderate
2     P0003      Travel         6794.08       750000   East          High
3     P0004    Property         7232.76      1000000   West           Low
4     P0005       Motor        13857.87      1050000  North      Moderate
```

`Claim_Date` arrives as `datetime64[ns]`. Nothing in Q1–Q19 needs it, but it is there if a re-skinned paper asks for claims in a date range — see Chapter 13 (P13.1).

### Q3 — Combine policy information with claims, retaining all claims

"Ensure that all observations from `Claims` are retained" = **left merge with `Claims` on the left**. Do the key check first, and show the reader *why* `how` matters here:

```python
print("Policy_ID in Claims not in Policy_Master:", set(claims["Policy_ID"]) - set(policy["Policy_ID"]))
never = sorted(set(policy["Policy_ID"]) - set(claims["Policy_ID"]))
print("policies that never appear in a claim:", len(never), never)

df = pd.merge(claims, policy, on="Policy_ID", how="left")
print("left  merge:", df.shape)
print("inner merge:", pd.merge(claims, policy, on="Policy_ID", how="inner").shape)
print("outer merge:", pd.merge(claims, policy, on="Policy_ID", how="outer").shape)
```

```text
Policy_ID in Claims not in Policy_Master: set()
policies that never appear in a claim: 5 ['P0013', 'P0024', 'P0033', 'P0036', 'P0042']
left  merge: (150, 11)
inner merge: (150, 11)
outer merge: (155, 11)
```

**Finding (this is the marked point).** Every `Policy_ID` in `Claims` exists in the master, so the left merge keeps exactly **150 rows** — one per claim, nothing added, nothing lost. Five policies have never been claimed against. A **left merge correctly drops them**; an **outer merge adds 5 empty rows** — 155 rows in which `Claim_ID`, `Claim_Date`, `Claim_Amount`, `Settlement_Days` and `Claim_Status` are all missing:

```python
outer = pd.merge(claims, policy, on="Policy_ID", how="outer", indicator=True)
print(outer["_merge"].value_counts().to_string())
print(outer[outer["Claim_ID"].isna()][["Policy_ID","Claim_ID","Claim_Amount","Policy_Type","Sum_Insured"]]
      .to_string(index=False))
```

```text
both          150
right_only      5
left_only       0

Policy_ID Claim_ID  Claim_Amount Policy_Type  Sum_Insured
    P0013      NaN           NaN       Motor       500000
    P0024      NaN           NaN    Property      2400000
    P0033      NaN           NaN       Motor       750000
    P0036      NaN           NaN    Property      3800000
    P0042      NaN           NaN      Health       350000
```

Those five phantom rows would poison every later count: `len(df)` becomes 155, `value_counts()` on `Claim_Status` gains 5 `NaN`s, and the mean `Claim_Amount` is computed over 150 values but divided by whatever you assume. **Use `how="left"` and say in words that the row count equals the claim count.**

### Q4 — Shape of the combined DataFrame

```python
print("shape:", df.shape)
print("columns:", list(df.columns))
print("total missing values:", int(df.isna().sum().sum()))
```

```text
shape: (150, 11)
columns: ['Claim_ID', 'Policy_ID', 'Claim_Date', 'Claim_Amount', 'Settlement_Days', 'Claim_Status', 'Policy_Type', 'Annual_Premium', 'Sum_Insured', 'Region', 'Risk_Category']
total missing values: 0
```

**Finding.** 150 rows = the `Claims` row count, so no claim was dropped and none was duplicated. 11 columns = 6 + 6 − 1 shared key. Zero missing values, which confirms every key matched. Those three sentences are the whole answer to "check and display the shape".

### Q5–Q6 — The derived-column block

```python
df["Claim_to_SumInsured_pct"]   = (df["Claim_Amount"]   / df["Sum_Insured"]) * 100
df["Premium_to_SumInsured_pct"] = (df["Annual_Premium"] / df["Sum_Insured"]) * 100

print(df[["Claim_ID","Claim_Amount","Sum_Insured","Claim_to_SumInsured_pct",
          "Annual_Premium","Premium_to_SumInsured_pct"]].head(5).round(2).to_string(index=False))
print("claims exceeding their Sum_Insured:", int((df["Claim_to_SumInsured_pct"] > 100).sum()))
print("Claim_to_SumInsured_pct range:", round(df["Claim_to_SumInsured_pct"].min(), 2), "-",
      round(df["Claim_to_SumInsured_pct"].max(), 2))
```

```text
Claim_ID  Claim_Amount  Sum_Insured  Claim_to_SumInsured_pct  Annual_Premium  Premium_to_SumInsured_pct
   C0001     312013.63      1100000                    28.36        26090.01                       2.37
   C0002     573508.62      1850000                    31.00        11457.84                       0.62
   C0003      99722.73       450000                    22.16        15384.86                       3.42
   C0004     559165.67      1850000                    30.23        11457.84                       0.62
   C0005     508146.10      1850000                    27.47        11457.84                       0.62

claims exceeding their Sum_Insured: 0
Claim_to_SumInsured_pct range: 1.48 - 84.05
```

**Finding.** **No claim exceeds its own sum insured** — the ratio tops out at 84.05% — so the data are internally consistent and no capping or data-cleaning step is required. `Premium_to_SumInsured_pct` is the effective rate charged: 0.62% on the ₹18.5 lakh property policy versus 3.42% on the ₹4.5 lakh motor policy, i.e. small policies are priced at a much higher rate per rupee insured. That one sentence is a genuine insurance insight and is worth writing.

### Part B — Selection, filtering and summaries (Q7–Q14)

### Q7 — Display five specific columns

```python
cols = ["Claim_ID", "Policy_Type", "Claim_Amount", "Settlement_Days", "Claim_Status"]
print(df[cols].head(5).to_string(index=False))
print("shape:", df[cols].shape)
```

```text
Claim_ID Policy_Type  Claim_Amount  Settlement_Days Claim_Status
   C0001      Health     312013.63               70     Approved
   C0002    Property     573508.62               61     Approved
   C0003       Motor      99722.73               27     Approved
   C0004    Property     559165.67               26     Approved
   C0005    Property     508146.10               70     Approved
shape: (150, 5)
```

Use a **list of names inside one pair of brackets**: `df[["A","B"]]`. `df["A","B"]` is a `KeyError`. The equivalent `.loc` form is `df.loc[:, cols]`.

### Q8 — Extract all Approved claims

```python
approved = df[df["Claim_Status"] == "Approved"]
print("Approved claims:", approved.shape)
```

```text
Approved claims: (101, 13)
```

101 of 150 claims (67.3%) are approved. 13 columns because the two derived columns from Q5–Q6 are now part of `df`.

### Q9 — Settlement_Days > 30 OR Claim_Amount > 200000

```python
slow_or_big = df[(df["Settlement_Days"] > 30) | (df["Claim_Amount"] > 200000)]
print("OR filter :", slow_or_big.shape)
print("Settlement_Days > 30 alone   :", int((df["Settlement_Days"] > 30).sum()))
print("Claim_Amount > 200000 alone  :", int((df["Claim_Amount"] > 200000).sum()))
print("both at once (AND)           :", int(((df["Settlement_Days"] > 30) & (df["Claim_Amount"] > 200000)).sum()))
```

```text
OR filter : (124, 13)
Settlement_Days > 30 alone   : 98
Claim_Amount > 200000 alone  : 73
both at once (AND)           : 47
```

**Finding.** The OR filter matches **124 of 150 claims (82.7%)** — a very wide net, because either condition alone already catches most of the portfolio. Check the arithmetic: 98 + 73 − 47 = 124. Quote that identity in your answer; it proves you used OR and not AND. Each individual condition must be wrapped in parentheses — `df[df["A"] > 1 | df["B"] > 2]` raises, because `|` binds tighter than `>`.

### Q10 — High-risk policies where the claim was Approved

```python
hr = df[(df["Risk_Category"] == "High") & (df["Claim_Status"] == "Approved")]
print("High-risk AND Approved:", hr.shape)
print(hr[["Claim_ID","Policy_ID","Policy_Type","Risk_Category","Claim_Amount","Claim_Status"]]
      .head(5).to_string(index=False))
```

```text
High-risk AND Approved: (36, 13)
Claim_ID Policy_ID Policy_Type Risk_Category  Claim_Amount Claim_Status
   C0002     P0048    Property          High     573508.62     Approved
   C0004     P0048    Property          High     559165.67     Approved
   C0005     P0048    Property          High     508146.10     Approved
   C0017     P0048    Property          High     127993.16     Approved
   C0022     P0051      Travel          High     143468.36     Approved
```

36 claims satisfy both conditions. Two categorical equalities joined with `&` — the everyday form of this question. If the examiner asks for several categories at once, switch to `.isin()`: `df[df["Risk_Category"].isin(["High","Moderate"])]`.

### Q11 — Sort claims by Claim_Amount, highest to lowest

```python
by_amt = df.sort_values("Claim_Amount", ascending=False)
print(by_amt[["Claim_ID","Policy_Type","Claim_Amount","Claim_Status"]].head(5).round(2).to_string(index=False))
print("shape =", by_amt.shape)
```

```text
Claim_ID Policy_Type  Claim_Amount Claim_Status
   C0139    Property    1136029.18     Rejected
   C0056    Property    1018696.13      Pending
   C0049    Property    1009846.83      Pending
   C0029    Property    1008071.58      Pending
   C0030    Property     991062.86     Rejected
# ... (145 rows omitted)
shape = (150, 13)
```

### Q12 — The five largest claims

```python
print(df.nlargest(5, "Claim_Amount")[["Claim_ID","Policy_ID","Policy_Type","Region","Claim_Amount",
                                      "Sum_Insured","Claim_to_SumInsured_pct","Claim_Status"]]
      .round(2).to_string(index=False))
```

```text
Claim_ID Policy_ID Policy_Type Region  Claim_Amount  Sum_Insured  Claim_to_SumInsured_pct Claim_Status
   C0139     P0020    Property   West    1136029.18      2900000                    39.17     Rejected
   C0056     P0056    Property   West    1018696.13      3500000                    29.11      Pending
   C0049     P0020    Property   West    1009846.83      2900000                    34.82      Pending
   C0029     P0044    Property   West    1008071.58      3450000                    29.22      Pending
   C0030     P0044    Property   West     991062.86      3450000                    28.73      Rejected
```

**Finding.** All five largest claims are **Property policies in the West region**, and none of them is Approved — two are Rejected and three are Pending. Every one sits at only 29–39% of its sum insured, so these are large claims on very large policies rather than claims near their limit. Worth a sentence: large Property claims are the slow/contested end of this portfolio.

### Q13 — Descriptive statistics for five columns

```python
stat_cols = ["Annual_Premium","Sum_Insured","Claim_Amount","Settlement_Days","Claim_to_SumInsured_pct"]
print(df[stat_cols].describe().round(2).to_string())
```

```text
       Annual_Premium  Sum_Insured  Claim_Amount  Settlement_Days  Claim_to_SumInsured_pct
count          150.00       150.00        150.00           150.00                   150.00
mean         12406.93   1072333.33     268709.20            40.01                    29.88
std           9365.43    943852.18     246494.05            20.68                    19.23
min           1305.70    150000.00       7302.37             3.00                     1.48
25%           4818.72    400000.00      80094.57            22.00                    12.35
50%          11457.84    750000.00     188095.74            40.50                    28.84
75%          17108.75   1237500.00     365871.64            58.75                    45.45
max          43823.74   3900000.00    1136029.18            75.00                    84.05
```

**Finding.** `Claim_Amount` has mean 268,709 against median 188,096 — a strong right skew driven by the handful of million-rupee Property claims. `Settlement_Days` is almost perfectly symmetric (mean 40.01, median 40.50) and spans the full 3–75 range, so it behaves like a uniform spread rather than a bell.

### Q14 — Settlement_Days: mean, median, std, min, max

```python
print(df["Settlement_Days"].agg(["mean","median","std","min","max"]).round(2).to_string())
```

```text
mean      40.01
median    40.50
std       20.68
min        3.00
max       75.00
```

The long form gives identical numbers and is equally acceptable:

```python
sd = df["Settlement_Days"]
print(pd.Series({"mean": sd.mean(), "median": sd.median(), "std": sd.std(),
                 "min": sd.min(), "max": sd.max()}).round(2).to_string())
```

**Finding.** Mean ≈ median = 40 days with a standard deviation of 20.7 — settlement time is spread very wide and evenly, from 3 days to 75. Half of all claims take longer than 40 days, which is the number an operations reviewer would act on.

### Part C — Tables and comparisons (Q15–Q19)

### Q15 — Frequency table for Claim_Status

```python
status_counts = df["Claim_Status"].value_counts()
print(status_counts.to_string())

ft = status_counts.reset_index(); ft.columns = ["Claim_Status", "Claims"]
ft["Percent"] = (ft["Claims"] / ft["Claims"].sum() * 100).round(1)
print(ft.to_string(index=False))
```

```text
Claim_Status
Approved    101
Pending      29
Rejected     20

Claim_Status  Claims  Percent
    Approved     101     67.3
     Pending      29     19.3
    Rejected      20     13.3
```

**Finding.** 67.3% approved, 19.3% pending, 13.3% rejected. No ties, so `idxmax()` is safe here — but the habit from Chapter 11 (P11.3) still applies: print the counts next to the winner so a tie would be visible.

### Q16 — Cross-tabulation: Policy_Type × Claim_Status

```python
print(pd.crosstab(df["Policy_Type"], df["Claim_Status"]).to_string())
print(pd.crosstab(df["Policy_Type"], df["Claim_Status"], margins=True, margins_name="Total").to_string())
```

```text
Claim_Status  Approved  Pending  Rejected
Policy_Type                              
Health              20        2         4
Motor               22       10         4
Property            28        8         5
Travel              31        9         7

Claim_Status  Approved  Pending  Rejected  Total
Policy_Type                                     
Health              20        2         4     26
Motor               22       10         4     36
Property            28        8         5     41
Travel              31        9         7     47
Total              101       29        20    150
```

Counts alone hide the story, because the four policy types have different claim volumes (26 to 47). Normalise by row:

```python
print((pd.crosstab(df["Policy_Type"], df["Claim_Status"], normalize="index") * 100).round(1).to_string())
```

```text
Claim_Status  Approved  Pending  Rejected
Policy_Type                              
Health            76.9      7.7      15.4
Motor             61.1     27.8      11.1
Property          68.3     19.5      12.2
Travel            66.0     19.1      14.9
```

**Finding.** Health claims are approved most often (76.9%) and Motor least (61.1%); Motor also has by far the largest pending backlog (27.8% versus 7.7% for Health). Travel has the highest rejection rate (14.9%). The raw counts would have suggested Travel is the problem type simply because it has the most claims — normalising by row is what turns the crosstab into a finding.

### Q17 — Pivot table: mean Claim_Amount for each Policy_Type

```python
pv = pd.pivot_table(df, values="Claim_Amount", index="Policy_Type", aggfunc="mean")
print(pv.round(2).to_string())
```

```text
             Claim_Amount
Policy_Type              
Health          298188.60
Motor           244500.16
Property        485567.72
Travel           81770.07
```

### Q18 — Pivot table: min, mean, max Settlement_Days by Risk_Category

```python
print(pd.pivot_table(df, values="Settlement_Days", index="Risk_Category",
                     aggfunc=["min","mean","max"]).round(2).to_string())
```

```text
                          min            mean             max
              Settlement_Days Settlement_Days Settlement_Days
Risk_Category                                                
High                        3           39.75              70
Low                         7           41.70              75
Moderate                    5           38.77              75
```

**Finding.** Risk category has **almost no effect** on settlement time: means of 38.8, 39.8 and 41.7 days across Moderate, High and Low, against a standard deviation of 20.7 days within each group. Do not report a 3-day gap as a pattern. The honest sentence: settlement duration is unrelated to risk category in this portfolio, so delays are driven by something the dataset does not record.

### Q19 — Policy_Type with the highest average Claim_Amount

```python
print("highest average Claim_Amount:", pv["Claim_Amount"].idxmax(), "at", round(pv["Claim_Amount"].max(), 2))
print(pv.sort_values("Claim_Amount", ascending=False).round(2).to_string())
```

```text
highest average Claim_Amount: Property at 485567.72

             Claim_Amount
Policy_Type              
Property        485567.72
Health          298188.60
Motor           244500.16
Travel           81770.07
```

**Finding.** **Property** has the highest average claim, ₹485,568 — 1.6× Health, 2.0× Motor and **5.9× Travel**. This follows directly from the sums insured: Property policies carry the largest cover (up to ₹39 lakh), so their claims scale accordingly. Print the full ranked table next to the `idxmax()` answer so a tie would be visible and so the marker can see the gap.

### Part D — Three figures

**Figure 1 — 1 × 3 layout**

```python
avg_by_type = df.groupby("Policy_Type")["Claim_Amount"].mean().sort_values(ascending=False)

plt.figure(figsize=(16, 4.5))
plt.subplot(1, 3, 1)
plt.hist(df["Settlement_Days"], bins=8, color="steelblue", edgecolor="black")
plt.title("Distribution of Settlement_Days (8 bins)")
plt.xlabel("Settlement days"); plt.ylabel("Number of claims"); plt.grid(True, axis="y")

plt.subplot(1, 3, 2)
plt.scatter(df["Sum_Insured"], df["Claim_Amount"], s=18, alpha=0.7, color="darkorange")
plt.title("Sum Insured vs Claim Amount")
plt.xlabel("Sum_Insured (Rs.)"); plt.ylabel("Claim_Amount (Rs.)"); plt.grid(True)

plt.subplot(1, 3, 3)
plt.bar(avg_by_type.index, avg_by_type.values, color="seagreen")
plt.title("Average Claim Amount by Policy Type")
plt.xlabel("Policy type"); plt.ylabel("Mean Claim_Amount (Rs.)"); plt.grid(True, axis="y")

plt.tight_layout()
plt.show()
```

![Three-panel figure: eight-bin histogram of settlement days, scatter of sum insured against claim amount showing a positive relationship, and a bar chart of average claim amount with Property highest and Travel lowest](/figures/14-case3-1x3.png)

```python
print("corr(Sum_Insured, Claim_Amount) =", round(df["Sum_Insured"].corr(df["Claim_Amount"]), 4))
```

```text
corr(Sum_Insured, Claim_Amount) = 0.6441
```

**Findings.** The `Settlement_Days` histogram is broadly flat across 3–75 days with the tallest bin (24 claims) covering 57–66 days — no typical settlement time, which supports the Q14 reading. The scatter shows a **genuine positive relationship, correlation +0.64** — the one real correlation anywhere in these three cases, so say so plainly: bigger cover produces bigger claims, and the vertical stripes are multiple claims against the same policy (hence the same `Sum_Insured`). The bar chart repeats Q19: Property ≫ Health > Motor ≫ Travel.

**Figure 2 — pie chart of claim-status composition**

```python
plt.figure(figsize=(6, 6))
plt.pie(status_counts.values, labels=status_counts.index, autopct="%1.1f%%", startangle=90)
plt.title("Claim status composition (n = %d)" % len(df))
plt.tight_layout()
plt.show()
```

![Pie chart of claim status: Approved 67.3 percent, Pending 19.3 percent, Rejected 13.3 percent](/figures/14-case3-pie.png)

`autopct="%1.1f%%"` is what "display percentage values on the chart" asks for — the doubled `%%` prints a literal percent sign. Pass `status_counts.values` with `labels=status_counts.index` so the slice order and the labels cannot drift apart. Putting `n = 150` in the title tells the marker the pie covers every claim.

**Figure 3 — boxplot of Claim_Amount by policy type**

```python
types = ["Motor", "Health", "Travel", "Property"]
groups = [df[df["Policy_Type"] == t]["Claim_Amount"] for t in types]

plt.figure(figsize=(8, 5))
plt.boxplot(groups)
plt.xticks([1, 2, 3, 4], types)
plt.title("Claim Amount by Policy Type")
plt.xlabel("Policy type"); plt.ylabel("Claim_Amount (Rs.)"); plt.grid(True, axis="y")
plt.tight_layout()
plt.show()
```

![Boxplot of claim amount for Motor, Health, Travel and Property; Property has a far higher and wider box, Travel is compressed near zero](/figures/14-case3-box.png)

```python
print("boxplot group sizes:", dict(zip(types, [len(g) for g in groups])))
```

```text
boxplot group sizes: {'Motor': 36, 'Health': 26, 'Travel': 47, 'Property': 41}
```

**Finding.** Property's box sits far above the others (median ₹4,97,064, top whisker ₹11,36,029) while Travel is compressed near zero (median ₹75,773, max ₹2,45,160); Motor (₹2,57,846) and Health (₹2,39,733) have almost identical medians. Health shows two high outliers above ₹7 lakh. The four group sizes (36, 26, 47, 41) sum to 150, which is the check that the boxplot used every claim exactly once. The `types` list is in the order the question names them ("Motor, Health, Travel and Property"), so **the boxes appear in the question's order, not alphabetically** — match the question.

## Full solution — Case 3

**I ran this exact script top to bottom with `python3` and it completed with no errors** (exit code 0; `Claims_Figure1.png`, `Claims_Figure2.png` and `Claims_Figure3.png` written).

```python
# ===== CASE 3 — Insurance Claims Portfolio Analysis — full solution, Q1 to Q19 + Part D =====
import pandas as pd
import matplotlib
matplotlib.use("Agg")                      # drop this line in Jupyter
import matplotlib.pyplot as plt
pd.set_option("display.width", 125)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"

# Q1 read both sheets
claims = pd.read_excel(W, sheet_name="Claims")
policy = pd.read_excel(W, sheet_name="Policy_Master")
print(claims.shape, policy.shape)

# Q2 first five observations of each
print(claims.head(5)); print(policy.head(5))

# Q3 left merge on Policy_ID (all Claims rows retained)
print(set(claims["Policy_ID"]) - set(policy["Policy_ID"]))
print("policies with no claim:", len(set(policy["Policy_ID"]) - set(claims["Policy_ID"])))
df = pd.merge(claims, policy, on="Policy_ID", how="left")
print("left:", df.shape, "| outer:", pd.merge(claims, policy, on="Policy_ID", how="outer").shape)

# Q4 shape of the combined DataFrame
print(df.shape); print(list(df.columns)); print(int(df.isna().sum().sum()))

# Q5-Q6 derived columns — created once, used by every question below
df["Claim_to_SumInsured_pct"]   = (df["Claim_Amount"]   / df["Sum_Insured"]) * 100
df["Premium_to_SumInsured_pct"] = (df["Annual_Premium"] / df["Sum_Insured"]) * 100
print(df[["Claim_ID", "Claim_Amount", "Sum_Insured", "Claim_to_SumInsured_pct",
          "Premium_to_SumInsured_pct"]].head(5).round(2))

# Q7 column subset
cols = ["Claim_ID", "Policy_Type", "Claim_Amount", "Settlement_Days", "Claim_Status"]
print(df[cols].head(5))

# Q8 Approved claims
approved = df[df["Claim_Status"] == "Approved"]
print(approved.shape)

# Q9 slow OR large claims
slow_or_big = df[(df["Settlement_Days"] > 30) | (df["Claim_Amount"] > 200000)]
print(slow_or_big.shape)

# Q10 High risk AND Approved
hr = df[(df["Risk_Category"] == "High") & (df["Claim_Status"] == "Approved")]
print(hr.shape)

# Q11 sort by Claim_Amount descending
by_amt = df.sort_values("Claim_Amount", ascending=False)
print(by_amt[["Claim_ID", "Policy_Type", "Claim_Amount", "Claim_Status"]].head().round(2))

# Q12 five largest claims
print(df.nlargest(5, "Claim_Amount")[["Claim_ID", "Policy_Type", "Claim_Amount",
                                      "Claim_to_SumInsured_pct"]].round(2))

# Q13 descriptive statistics for five columns
stat_cols = ["Annual_Premium", "Sum_Insured", "Claim_Amount", "Settlement_Days",
             "Claim_to_SumInsured_pct"]
print(df[stat_cols].describe().round(2))

# Q14 Settlement_Days statistics
print(df["Settlement_Days"].agg(["mean", "median", "std", "min", "max"]).round(2))

# Q15 frequency table for Claim_Status
status_counts = df["Claim_Status"].value_counts()
print(status_counts)

# Q16 crosstab Policy_Type x Claim_Status
print(pd.crosstab(df["Policy_Type"], df["Claim_Status"], margins=True, margins_name="Total"))

# Q17 pivot: mean Claim_Amount by Policy_Type
pv = pd.pivot_table(df, values="Claim_Amount", index="Policy_Type", aggfunc="mean")
print(pv.round(2))

# Q18 pivot: min / mean / max Settlement_Days by Risk_Category
print(pd.pivot_table(df, values="Settlement_Days", index="Risk_Category",
                     aggfunc=["min", "mean", "max"]).round(2))

# Q19 Policy_Type with the highest average Claim_Amount
print(pv["Claim_Amount"].idxmax(), round(pv["Claim_Amount"].max(), 2))
print(pv.sort_values("Claim_Amount", ascending=False).round(2))

# Part D Figure 1 — 1 x 3
avg_by_type = df.groupby("Policy_Type")["Claim_Amount"].mean().sort_values(ascending=False)
plt.figure(figsize=(16, 4.5))
plt.subplot(1, 3, 1)
plt.hist(df["Settlement_Days"], bins=8, color="steelblue", edgecolor="black")
plt.title("Distribution of Settlement_Days (8 bins)")
plt.xlabel("Settlement days"); plt.ylabel("Number of claims"); plt.grid(True, axis="y")
plt.subplot(1, 3, 2)
plt.scatter(df["Sum_Insured"], df["Claim_Amount"], s=18, alpha=0.7, color="darkorange")
plt.title("Sum Insured vs Claim Amount")
plt.xlabel("Sum_Insured (Rs.)"); plt.ylabel("Claim_Amount (Rs.)"); plt.grid(True)
plt.subplot(1, 3, 3)
plt.bar(avg_by_type.index, avg_by_type.values, color="seagreen")
plt.title("Average Claim Amount by Policy Type")
plt.xlabel("Policy type"); plt.ylabel("Mean Claim_Amount (Rs.)"); plt.grid(True, axis="y")
plt.tight_layout(); plt.savefig("Claims_Figure1.png"); plt.show()

# Part D Figure 2 — pie
plt.figure(figsize=(6, 6))
plt.pie(status_counts.values, labels=status_counts.index, autopct="%1.1f%%", startangle=90)
plt.title("Claim status composition (n = %d)" % len(df))
plt.tight_layout(); plt.savefig("Claims_Figure2.png"); plt.show()

# Part D Figure 3 — boxplot by policy type
types = ["Motor", "Health", "Travel", "Property"]
plt.figure(figsize=(8, 5))
plt.boxplot([df[df["Policy_Type"] == t]["Claim_Amount"] for t in types])
plt.xticks([1, 2, 3, 4], types)
plt.title("Claim Amount by Policy Type")
plt.xlabel("Policy type"); plt.ylabel("Claim_Amount (Rs.)"); plt.grid(True, axis="y")
plt.tight_layout(); plt.savefig("Claims_Figure3.png"); plt.show()
print("CASE 3 COMPLETE")
```

```text
CASE 3 COMPLETE
```

## P14.2 — Derived-column formula sheet

**Exam phrasings**

- "Create a new column `Purchase_Value` using the following relationship"
- "Create `Value_Change_pct`"
- "Estimate the annual coupon income for every holding"
- "Create `Claim_to_SumInsured_pct`"
- "Create a `Return` column for each stock using closing prices"
- "create a `Wealth_Index` assuming an initial investment value of ₹100"
- "Calculate `Previous_Close` by shifting closing prices by one observation"
- "20-day moving average of `Close`"

**Core idea.** Every capstone in this course builds its answers on a handful of derived columns. **Create them all in one cell immediately after the merge**, then never recompute. The formulas are given in the paper; the only thing you have to get right is the Python.

| Column | Formula as printed in the paper | Exact Python | Case |
| --- | --- | --- | --- |
| `Purchase_Value` | Units_Held × Purchase_Price | `df["Units_Held"] * df["Purchase_Price"]` | 2 (Q5) |
| `Current_Value` | Units_Held × Current_Price | `df["Units_Held"] * df["Current_Price"]` | 2 (Q6) |
| `Value_Change` | Current_Value − Purchase_Value | `df["Current_Value"] - df["Purchase_Value"]` | 2 (Q7) |
| `Value_Change_pct` | (Value_Change / Purchase_Value) × 100 | `(df["Value_Change"] / df["Purchase_Value"]) * 100` | 2 (Q8) |
| `Annual_Coupon_Income` | Units_Held × Face_Value × (Coupon_Rate / 100) | `df["Units_Held"] * df["Face_Value"] * (df["Coupon_Rate"] / 100)` | 2 (Q9) |
| `Claim_to_SumInsured_pct` | (Claim_Amount / Sum_Insured) × 100 | `(df["Claim_Amount"] / df["Sum_Insured"]) * 100` | 3 (Q5) |
| `Premium_to_SumInsured_pct` | (Annual_Premium / Sum_Insured) × 100 | `(df["Annual_Premium"] / df["Sum_Insured"]) * 100` | 3 (Q6) |
| `Previous_Close` | close shifted by one observation | `df["Close"].shift(1)` | 1 (Q5) |
| `Price_Change` | Close − Previous_Close | `df["Close"] - df["Previous_Close"]` — same as `df["Close"].diff()` | 1 (Q5) |
| `Return` | percentage change in Close | `df["Close"].pct_change()` | 1 (Q6) |
| growth factor | 1 + Return | `1 + df["Return"].fillna(0)` | 1 (Q7) |
| cumulative growth | product of growth factors | `df["Growth"].cumprod()` | 1 (Q7) |
| `Cumulative_Return` | cumulative growth − 1 | `df["Cum_Growth"] - 1` | 1 (Q7) |
| `Wealth_Index` | cumulative growth × 100 | `df["Cum_Growth"] * 100` | 1 (Q7) |
| `MA20` | 20-day moving average of Close | `df["Close"].rolling(20).mean()` | 1 (Q8) |
| `MA50` | 50-day moving average of Close | `df["Close"].rolling(50).mean()` | 1 (Q8) |
| `MA200` | 200-day moving average of Close | `df["Close"].rolling(200).mean()` | 1 (Q8) |
| `Vol20` | 20-day rolling std of Return | `df["Return"].rolling(20).std()` | 1 (Q8) |

**Template — paste and delete what you do not need.**

```python
# --- value / ratio columns (Cases 2 and 3 shape) ---
df["Purchase_Value"]            = df["Units_Held"] * df["Purchase_Price"]
df["Current_Value"]             = df["Units_Held"] * df["Current_Price"]
df["Value_Change"]              = df["Current_Value"] - df["Purchase_Value"]
df["Value_Change_pct"]          = (df["Value_Change"] / df["Purchase_Value"]) * 100
df["Annual_Coupon_Income"]      = df["Units_Held"] * df["Face_Value"] * (df["Coupon_Rate"] / 100)
df["Claim_to_SumInsured_pct"]   = (df["Claim_Amount"] / df["Sum_Insured"]) * 100
df["Premium_to_SumInsured_pct"] = (df["Annual_Premium"] / df["Sum_Insured"]) * 100

# --- time-series columns (Case 1 shape; needs a sorted DatetimeIndex) ---
df["Previous_Close"]    = df["Close"].shift(1)
df["Price_Change"]      = df["Close"] - df["Previous_Close"]
df["Return"]            = df["Close"].pct_change()
df["Growth"]            = 1 + df["Return"].fillna(0)
df["Cum_Growth"]        = df["Growth"].cumprod()
df["Cumulative_Return"] = df["Cum_Growth"] - 1
df["Wealth_Index"]      = df["Cum_Growth"] * 100
df["MA20"]  = df["Close"].rolling(20).mean()
df["MA50"]  = df["Close"].rolling(50).mean()
df["MA200"] = df["Close"].rolling(200).mean()
df["Vol20"] = df["Return"].rolling(20).std()
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "value change as a fraction, not a percentage" | drop the `* 100` |
| "semi-annual coupon" | `... * (df["Coupon_Rate"] / 100) / 2` |
| "coupon income on current market value" | replace `Face_Value` with `Current_Price` — but say that coupons are legally paid on face value |
| "monthly return" instead of daily | `df["Close"].pct_change(21)` for 21 trading days, or resample first (Chapter 13) |
| "Wealth Index starting at 1000" | `df["Cum_Growth"] * 1000` |
| "log returns" | `np.log(df["Close"] / df["Close"].shift(1))` |
| "5-day and 10-day moving averages" | `rolling(5)`, `rolling(10)` — the number in the paper is the only thing that changes |
| "centred moving average" | `rolling(20, center=True).mean()` |
| "rolling volatility over 30 days" | `df["Return"].rolling(30).std()` |
| "annualised volatility" | `df["Return"].rolling(20).std() * (252 ** 0.5)` |

**Traps**

- **`pct_change()` returns a fraction, not a percentage.** 0.0402 means +4.02%. Multiply by 100 only for display, and label the axis or column accordingly.
- **`Wealth_Index` needs `fillna(0)` on the first return**, otherwise `cumprod()` propagates the leading `NaN` through the whole column and every value is `NaN`.
- **Rolling needs the rows in date order.** Sort the index first; `rolling` uses row position, not dates, so an unsorted frame produces silently wrong moving averages.
- **Roll before you slice.** Compute `MA20` on the full history, then slice the year you want to plot, or you lose the first 19 points of the chart.
- **Percentage columns divide by the *purchase* or *insured* base, not by the current value.** `Value_Change / Purchase_Value`, never `Value_Change / Current_Value`.
- Watch out for a zero denominator. If a `Purchase_Value` or `Sum_Insured` could be 0 you get `inf`, not an error — check with `np.isinf(df[COL]).sum()`.

**Drill**

1. Add a `Gain_Per_Unit` column to the Case 2 portfolio equal to `Current_Price − Purchase_Price`, and report its mean rounded to 2 places.
2. Add a `Settlement_Weeks` column to the Case 3 frame equal to `Settlement_Days / 7`, and report its maximum.

<details><summary>Answers</summary>

```python
port["Gain_Per_Unit"] = port["Current_Price"] - port["Purchase_Price"]
print(round(port["Gain_Per_Unit"].mean(), 2))        # 16.64

df["Settlement_Weeks"] = df["Settlement_Days"] / 7
print(round(df["Settlement_Weeks"].max(), 2))        # 10.71
```

</details>

## P14.3 — What a re-skinned capstone looks like

**Exam phrasings**

- "Combine the policy information with the claims information using `Policy_ID`"
- "All observations appearing in `Bond_Holdings` should remain in the resulting DataFrame"
- "Create one Matplotlib figure with a 2 × 2 layout"
- "Produce a frequency table showing the number of holdings belonging to each `Credit_Rating`"
- "Create a pivot table showing mean `Current_Value` by `Industry`"
- "Identify the `Policy_Type` having the highest average `Claim_Amount`"

**Core idea.** The examiner reuses **one shape**. Cases 2 and 3 are the same paper with different nouns, and any new case will be too:

| The shape | Case 2 | Case 3 | A new case will have |
| --- | --- | --- | --- |
| Two sheets: a transaction table + a master table | `Bond_Holdings` (120) + `Bond_Master` (24) | `Claims` (150) + `Policy_Master` (60) | 100–200 transaction rows + 20–60 master rows |
| A key to merge on | `Bond_Code` | `Policy_ID` | one shared ID column |
| 3–5 derived columns | `Purchase_Value`, `Current_Value`, `Value_Change`, `Value_Change_pct`, `Annual_Coupon_Income` | `Claim_to_SumInsured_pct`, `Premium_to_SumInsured_pct` | products and ratio-×-100 columns |
| Filters (one `&`, one `\|`) | AAA **and** value > threshold | days > 30 **or** amount > threshold | same two forms |
| A sort and a top-5 | by `Current_Value` | by `Claim_Amount` | by the biggest money column |
| A frequency table | `Credit_Rating` | `Claim_Status` | the 3–4 level categorical |
| Two pivots (one single-agg, one multi-agg) | mean by `Industry`; mean+max by `Credit_Rating` | mean by `Policy_Type`; min/mean/max by `Risk_Category` | same two forms |
| A multi-panel figure | 2 × 2 | 1 × 3 + pie + boxplot | bar / hist / scatter / boxplot |

So learn **one 40-line template** with placeholder names and the case becomes substitution.

**Template — answers any two-sheet capstone. Change only the CAPITALS.**

```python
# ===== GENERIC TWO-SHEET CAPSTONE TEMPLATE — change only the CAPITALS =====
import pandas as pd
import matplotlib.pyplot as plt

WB        = "PATH/TO/Workbook.xlsx"
TXN_SHEET = "TRANSACTION_SHEET"   # the many side (holdings / claims / transactions)
MST_SHEET = "MASTER_SHEET"        # the one side (bond master / policy master)
KEY       = "KEY_COL"             # column present in both sheets
QTY, RATE = "MONEY_COL", "BASE_COL"   # the two numbers the ratio question needs
GROUP     = "GROUP_COL"           # first categorical: pivots, bar chart, boxplot
CAT       = "CAT_COL"             # second categorical: frequency table, crosstab, pie
NUM       = "NUM_COL"             # a plain numeric column: histogram, describe
THRESH    = 200000                # the filter threshold in the question

txn = pd.read_excel(WB, sheet_name=TXN_SHEET)
mst = pd.read_excel(WB, sheet_name=MST_SHEET)
print("shapes:", txn.shape, mst.shape)
print("keys missing from master:", set(txn[KEY]) - set(mst[KEY]), "| master key unique:", mst[KEY].is_unique)

df = pd.merge(txn, mst, on=KEY, how="left")            # keep every transaction row
print("merged:", df.shape, "| rows preserved:", len(df) == len(txn))

df["Ratio_pct"] = df[QTY] / df[RATE] * 100             # derived columns, created ONCE
df["Flag"]      = df[QTY] > THRESH
print(df[[KEY, QTY, RATE, "Ratio_pct", "Flag"]].head(3).round(2).to_string(index=False))

print("filter", QTY, ">", THRESH, "->", df[df[QTY] > THRESH].shape)
print("OR filter ->", df[(df[NUM] > 30) | (df[QTY] > THRESH)].shape)
print("max", QTY, "=", round(df[QTY].max(), 2))        # proves an empty result is the data
print(df.sort_values(QTY, ascending=False)[[KEY, GROUP, QTY]].head(3).round(2).to_string(index=False))
print(df.nlargest(5, QTY)[[KEY, GROUP, QTY, "Ratio_pct"]].round(2).to_string(index=False))
print(df[[QTY, RATE, NUM, "Ratio_pct"]].describe().round(2).to_string())

print(df[CAT].value_counts().to_string())                                   # frequency table
print(pd.crosstab(df[GROUP], df[CAT]).to_string())                          # crosstab
print(pd.pivot_table(df, values=QTY, index=GROUP, aggfunc="mean").round(2).to_string())
print(pd.pivot_table(df, values=NUM, index=GROUP, aggfunc=["min", "mean", "max"]).round(2).to_string())

means  = df.groupby(GROUP)[QTY].mean().sort_values(ascending=False)
levels = list(df[GROUP].unique())
plt.figure(figsize=(14, 10))
plt.subplot(2, 2, 1); plt.bar(means.index, means.values); plt.title(f"Mean {QTY} by {GROUP}")
plt.xlabel(GROUP); plt.ylabel(f"Mean {QTY}"); plt.grid(True, axis="y")
plt.subplot(2, 2, 2); plt.hist(df[NUM], bins=10, edgecolor="black"); plt.title(f"Distribution of {NUM}")
plt.xlabel(NUM); plt.ylabel("Count"); plt.grid(True, axis="y")
plt.subplot(2, 2, 3); plt.scatter(df[RATE], df[QTY], s=18, alpha=0.7); plt.title(f"{RATE} vs {QTY}")
plt.xlabel(RATE); plt.ylabel(QTY); plt.grid(True)
plt.subplot(2, 2, 4); plt.boxplot([df[df[GROUP] == g][QTY] for g in levels])
plt.xticks(range(1, len(levels) + 1), levels); plt.title(f"{QTY} by {GROUP}")
plt.xlabel(GROUP); plt.ylabel(QTY); plt.grid(True, axis="y")
plt.tight_layout(); plt.savefig("Capstone_Figure.png"); plt.show()
```

**Worked — the template bound to Case 3's names, unchanged otherwise.** This is the proof that substitution is all it takes: set eight variables and the template answers Case 3's Q1, Q3, Q4, Q5, Q9, Q11, Q12, Q13, Q15, Q16, Q17, Q18 and Part D.

```python
WB        = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
TXN_SHEET = "Claims"
MST_SHEET = "Policy_Master"
KEY       = "Policy_ID"
QTY, RATE = "Claim_Amount", "Sum_Insured"
GROUP     = "Policy_Type"
CAT       = "Claim_Status"
NUM       = "Settlement_Days"
THRESH    = 200000
```

```text
shapes: (150, 6) (60, 6)
keys missing from master: set() | master key unique: True
merged: (150, 11) | rows preserved: True
Policy_ID  Claim_Amount  Sum_Insured  Ratio_pct  Flag
    P0038     312013.63      1100000      28.36  True
    P0048     573508.62      1850000      31.00  True
    P0017      99722.73       450000      22.16 False
filter Claim_Amount > 200000 -> (73, 13)
OR filter -> (124, 13)
max Claim_Amount = 1136029.18
Policy_ID Policy_Type  Claim_Amount
    P0020    Property    1136029.18
    P0056    Property    1018696.13
    P0020    Property    1009846.83
# ... (top-5, describe, frequency table and crosstab omitted)
             Claim_Amount
Policy_Type              
Health          298188.60
Motor           244500.16
Property        485567.72
Travel           81770.07
# ... (the min/mean/max Settlement_Days pivot omitted)
figure written: Capstone_Figure.png
```

Rebinding the same eight variables to `Bond_Holdings` / `Bond_Master` / `Bond_Code` / `Current_Value` / `Purchase_Value` / `Industry` / `Credit_Rating` / `Holding_Months` answers Case 2 instead.

### A new case, invented to prove the template transfers

**"Fixed Deposit Book Review."** A bank's treasury desk holds fixed deposits under several schemes. Deposit-level data and scheme-level data are maintained separately.

| Sheet | Columns |
| --- | --- |
| `FD_Book` (80 rows) | `FD_ID`, `Scheme_Code`, `Principal`, `Months_Elapsed` |
| `Scheme_Master` (12 rows) | `Scheme_Code`, `Scheme_Name`, `Category`, `Interest_Rate`, `Tenure_Months` |

Questions, in the examiner's usual order: (1) read and inspect both sheets; (2) combine them on `Scheme_Code` keeping every deposit; (3) create `Annual_Interest`, `Accrued_Interest`, `Current_Value`, `Accrual_pct` and a `Matured` flag; (4) extract Senior-category deposits with `Current_Value` above ₹4,00,000, and deposits that are matured **or** have accrued more than 15%; (5) the five largest deposits by `Current_Value`; (6) a frequency table of `Category`; (7) a pivot of mean `Current_Value` by `Category` and a pivot of min/mean/max `Accrual_pct` by `Category`; (8) a crosstab of `Category` × `Matured`; (9) a 2 × 2 figure.

Build a stand-in workbook so the whole thing is reproducible (in the exam the file is handed to you — skip this cell):

```python
import numpy as np
rng = np.random.default_rng(7)
schemes = pd.DataFrame({
    "Scheme_Code":   [f"FD{i:02d}" for i in range(1, 13)],
    "Scheme_Name":   ["Regular 1Y","Regular 2Y","Regular 3Y","Senior 1Y","Senior 2Y","Senior 3Y",
                      "Tax Saver 5Y","Tax Saver 5Y+","Flexi 6M","Flexi 9M","Corporate 1Y","Corporate 2Y"],
    "Category":      ["Regular"]*3 + ["Senior"]*3 + ["Tax-Saver"]*2 + ["Flexi"]*2 + ["Corporate"]*2,
    "Interest_Rate": [6.80,7.10,7.25,7.30,7.60,7.75,7.00,7.15,6.10,6.40,7.45,7.70],
    "Tenure_Months": [12,24,36,12,24,36,60,60,6,9,12,24],
})
book = pd.DataFrame({
    "FD_ID":          [f"FD{i:04d}" for i in range(1, 81)],
    "Scheme_Code":    rng.choice(schemes["Scheme_Code"], 80),
    "Principal":      rng.integers(50, 501, 80) * 1000,
    "Months_Elapsed": rng.integers(1, 37, 80),
})
```

**Steps 1–2 — inspect and merge** (template lines 1–20, only the CAPITALS changed):

```python
print("book:", book.shape, "| schemes:", schemes.shape)
print("keys in book missing from master:", set(book["Scheme_Code"]) - set(schemes["Scheme_Code"]))
df = pd.merge(book, schemes, on="Scheme_Code", how="left")
print("merged:", df.shape, "| rows preserved:", len(df) == len(book))
```

```text
book: (80, 4) | schemes: (12, 5)
keys in book missing from master: set()
merged: (80, 8) | rows preserved: True
```

**Step 3 — derived columns, once:**

```python
df["Annual_Interest"]  = df["Principal"] * df["Interest_Rate"] / 100
df["Accrued_Interest"] = df["Annual_Interest"] * df["Months_Elapsed"] / 12
df["Current_Value"]    = df["Principal"] + df["Accrued_Interest"]
df["Accrual_pct"]      = df["Accrued_Interest"] / df["Principal"] * 100
df["Matured"]          = df["Months_Elapsed"] >= df["Tenure_Months"]
print(df[["FD_ID","Category","Principal","Interest_Rate","Months_Elapsed",
          "Accrued_Interest","Current_Value","Accrual_pct","Matured"]].head(4).round(2).to_string(index=False))
```

```text
 FD_ID  Category  Principal  Interest_Rate  Months_Elapsed  Accrued_Interest  Current_Value  Accrual_pct  Matured
FD0001 Corporate     290000           7.70              21          39077.50      329077.50        13.48    False
FD0002 Tax-Saver     170000           7.15               7           7090.42      177090.42         4.17    False
FD0003     Flexi     485000           6.10              28          69031.67      554031.67        14.23     True
FD0004 Corporate     447000           7.45              34          94354.25      541354.25        21.11     True
```

**Step 4 — the two filters, with the max printed as proof:**

```python
print("Senior AND Current_Value > 400000 :", df[(df["Category"]=="Senior") & (df["Current_Value"]>400000)].shape)
print("matured OR Accrual_pct > 15       :", df[(df["Matured"]) | (df["Accrual_pct"]>15)].shape)
print("max Current_Value in the book     :", round(df["Current_Value"].max(), 2))
```

```text
Senior AND Current_Value > 400000 : (6, 13)
matured OR Accrual_pct > 15       : (48, 13)
max Current_Value in the book     : 581086.88
```

Here the AND filter does return rows (6 of them) because the maximum, ₹581,087, clears the ₹4,00,000 threshold. **That is the contrast with Case 2 Q11** — same question shape, but this time the data can satisfy it. The only way to tell the two situations apart is to print the maximum.

**Steps 5–8 — top-5, frequency table, two pivots, crosstab:**

```python
print(df.nlargest(5, "Current_Value")[["FD_ID","Scheme_Name","Category","Principal","Current_Value"]]
        .round(2).to_string(index=False))
print(df["Category"].value_counts().to_string())
print(pd.pivot_table(df, values="Current_Value", index="Category", aggfunc="mean").round(2).to_string())
print(pd.pivot_table(df, values="Accrual_pct", index="Category", aggfunc=["min","mean","max"]).round(2).to_string())
print(pd.crosstab(df["Category"], df["Matured"]).to_string())
```

```text
 FD_ID   Scheme_Name  Category  Principal  Current_Value
FD0059     Senior 3Y    Senior     479000      581086.88
FD0077 Tax Saver 5Y+ Tax-Saver     483000      572214.12
FD0074     Senior 2Y    Senior     476000      566440.00
FD0003      Flexi 6M     Flexi     485000      554031.67
FD0004  Corporate 1Y Corporate     447000      541354.25

Category
Senior       20
Regular      18
Corporate    15
Flexi        14
Tax-Saver    13

           Current_Value
Category                
Corporate      344506.46
Flexi          308291.96
Regular        332682.50
Senior         301317.87
Tax-Saver      274970.95

                  min        mean         max
          Accrual_pct Accrual_pct Accrual_pct
Category                                     
Corporate        0.64       11.15       23.10
Flexi            0.51       10.48       17.07
Regular          1.78       12.29       21.30
Senior           1.22       14.29       22.17
Tax-Saver        1.17        9.07       18.47

Matured    False  True 
Category               
Corporate      7      8
Flexi          1     13
Regular       10      8
Senior        11      9
Tax-Saver     13      0
```

**Step 9 — the 2 × 2 figure**, the template's four panels with `Category` as `GROUP`, `Accrual_pct` as the histogram column and `Months_Elapsed` on the scatter's x-axis:

![Four-panel figure for the invented fixed-deposit case: bar chart of the five largest deposits, ten-bin histogram of accrual percentage, a tight upward-sloping scatter of months elapsed against accrual, and boxplots of current value by category](/figures/14-newcase-2x2.png)

**Findings for the new case.** Senior-category deposits have the highest mean accrual (14.29%) — they carry the joint-highest mean rate (7.58%) *and* the longest mean elapsed period (22.65 months). Tax-Saver accrues least (9.07%) despite a middling 7.07% rate, because its deposits are the youngest (15.38 months on average) — so accrual is driven by elapsed time here, not by the rate alone. The `Category` × `Matured` crosstab is the real story: **all 13 Tax-Saver deposits are unmatured** (a 60-month tenure cannot mature within a 36-month book) while 13 of 14 Flexi deposits have matured (6–9 month tenures). The scatter is the one panel that differs in character from the real cases — `Accrual_pct` is a deterministic function of `Months_Elapsed` and the rate, so the points form a tight upward band rather than a cloud. Note how that changes the sentence you write: "accrual rises almost linearly with elapsed months, as the simple-interest formula requires" — as against Case 2's "holding period explains none of the variation".

**Variants — how an examiner re-skins the same case**

| Re-skin | What changes in the template |
| --- | --- |
| Mutual fund folios + scheme master | `Units × NAV` instead of `Units_Held × Current_Price`; `Category` instead of `Credit_Rating` |
| Loan accounts + branch master | `EMI × Tenure` for total repayment; `Branch` as `GROUP`; `Loan_Status` as `CAT` |
| Retail orders + product master | `Quantity × Unit_Price`; `Product_Category` as `GROUP`; `Order_Status` as `CAT` |
| Employee payroll + department master | `Basic × (1 + Allowance_pct/100)`; `Department` as `GROUP` |
| Three sheets instead of two | merge twice: `pd.merge(pd.merge(txn, m1, on=K1), m2, on=K2)` |
| Transaction table has a date column | add `df["Year"] = df["DATE_COL"].dt.year` and pivot by year (Chapter 13, P13.2) |
| Master key is named differently in the two sheets | `pd.merge(txn, mst, left_on="Bond_Cd", right_on="Bond_Code")` (Chapter 10, P10.9) |
| Missing values present in the transaction table | inspect with `df.isna().sum()` and handle before the derived columns (Chapter 7) |

**Traps**

- **Do not merge in the other direction.** `pd.merge(mst, txn, how="left")` keeps every *master* row and invents nothing for masters with no transactions — Case 3 would become 155 rows. The transaction table goes on the left.
- **Check `mst[KEY].is_unique` every time.** If the master has duplicate keys, a left merge multiplies rows and every total you report afterwards is inflated (Chapter 10, P10.10).
- The `GROUP` levels in `df[GROUP].unique()` come out in **first-appearance order**, not alphabetically. Fine for a boxplot as long as the `xticks` labels come from the same list; use an explicit list when the paper names an order.
- `f"Mean {QTY} by {GROUP}"` in a title is handy while drafting, but **retype the titles in plain English before you submit** — "Mean Claim_Amount by Policy_Type" reads worse than "Average claim amount by policy type".

**Drill**

1. Bind the template to Case 2: what eight values do `TXN_SHEET`, `MST_SHEET`, `KEY`, `QTY`, `RATE`, `GROUP`, `CAT`, `NUM` take?

<details><summary>Answer</summary>

```python
TXN_SHEET = "Bond_Holdings"; MST_SHEET = "Bond_Master"; KEY = "Bond_Code"
QTY, RATE = "Current_Value", "Purchase_Value"      # Ratio_pct then equals Value_Change_pct + 100
GROUP     = "Industry"                             # or "Credit_Rating" for the boxplot panel
CAT       = "Credit_Rating"
NUM       = "Holding_Months"
THRESH    = 150000                                 # not 400000 — see Q11
```

Note `QTY`/`RATE` here are themselves derived, so create `Purchase_Value` and `Current_Value` immediately after the merge and before the template's ratio line.

</details>

## Write-up answers

Every discussion prompt in the three cases, with a model answer you can reproduce in 3–5 sentences. These carry marks on their own.

**Case 1 Q4 — "Finally, compare the three stock profiles."**

> Over each stock's own window, Reliance rose from ₹1,112.14 to ₹2,583.87 and TCS from ₹2,154.47 to ₹3,838.28, while Infosys fell from ₹1,292.51 to ₹1,157.72. TCS trades at the highest price level (mean ₹3,270.40) and Infosys the lowest (mean ₹1,285.17); Reliance is the most heavily traded, averaging 7.58 million shares a day against 3.24 million for TCS. All three have median close above mean close, indicating a left-skewed price distribution — a long tail of cheaper early days. The comparison is not strictly like-for-like, because the three windows are different four-year periods (2019–2022, 2020–2023, 2021–2024); the common-period dataset in Q12 is the fair basis for ranking them.

**Case 1 Q6 — "Explain why the first return observation is missing."**

> A daily return is computed as (today's close − yesterday's close) / yesterday's close, so it needs two consecutive observations. The first row of each stock has no preceding row, so `pct_change()` returns `NaN` there — exactly one missing value per stock, which `isna().sum()` confirms. This is a structural consequence of the calculation and not a data-quality defect, so the right treatment is `dropna()` when summarising the return series, not imputation. If you fill it with 0 instead, the Wealth Index is unaffected (a growth factor of 1 changes nothing) but the mean and standard deviation of returns are both biased slightly towards zero.

**Case 1 Q8 — "Explain why the beginning of the moving-average columns contains missing values."**

> A rolling window of width *n* cannot produce a value until *n* observations have accumulated, so the first *n* − 1 rows are `NaN`. `MA20` therefore has 19 leading `NaN`s, `MA50` has 49 and `MA200` has 199 — verified here as exactly 199 missing `MA200` values in all three stocks. The same applies to the 20-day rolling standard deviation of returns, which loses 20 rows because `Return` itself already starts with one `NaN`. This is by design: reporting a "20-day average" from 5 days of data would be misleading, so pandas withholds the value. Use `min_periods=` only if the question explicitly permits partial windows.

**Case 1 Q9 — "Explain the differences between the two results."**

> Both concatenations stack all 1,022 rows; a vertical `concat` never drops rows. The difference is in the columns. With `join="outer"` (the default) pandas keeps the union of the column names — `Close`, `Volume` and `High` — and fills the cells that one input does not supply with `NaN`: 510 missing `Volume` values (the length of B, which lacks `Volume`) and 512 missing `High` values (the length of A). With `join="inner"` pandas keeps only the columns common to both inputs, so the result has the single column `Close` and no missing values, at the cost of discarding `Volume` and `High` entirely. A side effect of the outer form is dtype promotion: `Volume` is `int64` in A but becomes `float64` in the result, because `NaN` cannot be stored in an integer column.

**Case 1 Q10 — "Identify why the missing values appear."**

> The outer three-way join keeps the union of the three date indexes, which is 1,557 distinct dates, while each stock only has prices on the dates in its own sheet. So each column is missing on every date it does not cover: Reliance on 1,557 − 1,022 = 535 dates, TCS on 1,557 − 1,024 = 533, and Infosys on 1,557 − 1,026 = 531. The gaps arise from two causes — the three windows only partially overlap (2019–2022, 2020–2023, 2021–2024), and the sheets have intentionally omitted trading days, so even inside the overlap the calendars differ. The 492 rows with no missing values at all are precisely the dates common to all three sheets, which is why the inner join returns 492 rows.

**Case 1 Q7 / Q15 — "Identify which investment finished with the highest value."**

> On its own window, Reliance finished highest: ₹100 invested on each stock's first trading day grows to ₹232.33 for Reliance, ₹178.15 for TCS and ₹89.57 for Infosys. Restricted to the common period 2021-01-01 to 2022-12-30, the ranking reverses: TCS ends at ₹146.25, Reliance at ₹109.40 and Infosys at ₹86.60. Reliance wins on the full-window measure only because its window begins in 2019 and captures its 2019–2020 run-up. The defensible conclusion is therefore period-specific: **TCS was the best of the three over the shared 2021–2022 period**, and the full-window figures compare four different two-year regimes as much as three companies.

**Case 2 Q11 — "Extract holdings for which Credit_Rating is AAA and Current_Value exceeds Rs. 4,00,000."**

> The filter is valid and correctly implemented; no holding in the portfolio satisfies it, so the result is an empty DataFrame of shape (0, 16). I report zero rows and state the portfolio maximum: the largest `Current_Value` is ₹246,147.60 — itself a AAA holding — so no holding of any rating can exceed ₹4,00,000. Repeating the query with a reachable threshold of ₹1,50,000 returns 13 AAA holdings, which demonstrates that the filter logic is sound. An empty result is a finding about the data, not an error in the code.

**Case 3 Q3 — "Ensure that all observations from Claims are retained."**

> A left merge with `Claims` on the left retains all 150 claims and adds the five policy attributes, giving a (150, 11) frame with zero missing values because every `Policy_ID` in `Claims` exists in `Policy_Master`. Five policies — P0013, P0024, P0033, P0036 and P0042 — never appear in a claim; the left merge correctly drops them, because a policy without a claim is not an observation of a claim. An outer merge would instead add those five as rows with `Claim_ID`, `Claim_Date`, `Claim_Amount`, `Settlement_Days` and `Claim_Status` all missing, inflating the frame to 155 rows and corrupting every subsequent count, mean and frequency table. The row count of the combined frame equalling the row count of `Claims` is the check to state explicitly.

**Case 3 Q19 — "Identify the Policy_Type having the highest average Claim_Amount."**

> Property has the highest average claim at ₹485,567.72, followed by Health (₹298,188.60), Motor (₹244,500.16) and Travel (₹81,770.07) — Property's average is 5.9× Travel's. The driver is the sum insured: Property policies carry cover up to ₹39 lakh while Travel policies are much smaller, and `Claim_Amount` correlates +0.64 with `Sum_Insured`. As a proportion of cover the picture is flatter, since `Claim_to_SumInsured_pct` averages 29.9% across the whole portfolio and no claim exceeds its sum insured. So Property drives absolute claim cost but is not unusually severe relative to the cover written.

**If the question asks "what would happen if you used an inner join instead?" (a standard follow-up)**

> For Case 2 nothing changes — every `Bond_Code` in the holdings exists in the master, so inner, left, right and outer all return (120, 11). For Case 3 the inner and left results are also identical at (150, 11), because every claim's policy exists; only the outer and right forms differ, adding the five never-claimed policies to reach 155 rows. The general rule is that `how=` only matters when a key is unmatched on one side, which is why the first thing to print is `set(txn[KEY]) - set(mst[KEY])` and `set(mst[KEY]) - set(txn[KEY])`. Write `how="left"` regardless, because it is the only value that *guarantees* the wording "all observations from the transaction table are retained" even on data where keys do go missing.

## Chapter cheat sheet

```python
# ---------- 0. OPEN EVERY CAPSTONE WITH THIS ----------
xl = pd.ExcelFile(W); print(xl.sheet_names)
for s in xl.sheet_names: print(s, pd.read_excel(W, sheet_name=s).shape)
print(set(txn[KEY]) - set(mst[KEY]), mst[KEY].is_unique)      # key check
df = pd.merge(txn, mst, on=KEY, how="left")                   # transaction table LEFT
print(df.shape, len(df) == len(txn))

# ---------- 1. DERIVED COLUMNS — ONCE, HERE ----------
df["Purchase_Value"]   = df["Units_Held"] * df["Purchase_Price"]
df["Current_Value"]    = df["Units_Held"] * df["Current_Price"]
df["Value_Change"]     = df["Current_Value"] - df["Purchase_Value"]
df["Value_Change_pct"] = df["Value_Change"] / df["Purchase_Value"] * 100
df["Annual_Coupon_Income"] = df["Units_Held"] * df["Face_Value"] * df["Coupon_Rate"] / 100
df["Claim_to_SumInsured_pct"]   = df["Claim_Amount"]   / df["Sum_Insured"] * 100
df["Premium_to_SumInsured_pct"] = df["Annual_Premium"] / df["Sum_Insured"] * 100
# time series (sorted DatetimeIndex first)
df["Previous_Close"] = df["Close"].shift(1);  df["Price_Change"] = df["Close"].diff()
df["Return"] = df["Close"].pct_change()
df["Cum_Growth"] = (1 + df["Return"].fillna(0)).cumprod()
df["Cumulative_Return"] = df["Cum_Growth"] - 1;  df["Wealth_Index"] = df["Cum_Growth"] * 100
df["MA20"] = df["Close"].rolling(20).mean()   # MA50, MA200 likewise
df["Vol20"] = df["Return"].rolling(20).std()

# ---------- 2. FILTER / SORT / TOP-N ----------
df[df[C] > df[C].mean()]                       # against its own mean
df[(df[A] > x) & (df[B] > y)]                  # AND  (parentheses are mandatory)
df[(df[A] > x) | (df[B] > y)]                  # OR
df[df[CAT].isin(["High", "Moderate"])]         # several categories
df.sort_values(C, ascending=False)             # one key
df.sort_values([C1, C2], ascending=[False, False])
df.nlargest(5, C)                              # == sort_values(C, ascending=False).head(5)
print(df[C].max())                             # WHEN A FILTER RETURNS 0 ROWS, PRINT THIS

# ---------- 3. STATS / TABLES ----------
df[C].agg(["mean", "median", "std", "min", "max"])
df[[C1, C2, C3]].describe().round(2)
df[C].idxmax(), df.loc[df[C].idxmax()]         # which row holds the max
df[CAT].value_counts()                         # frequency table
pd.crosstab(df[G], df[CAT], margins=True)      # add normalize="index" for row %
pd.pivot_table(df, values=V, index=G, aggfunc="mean")
pd.pivot_table(df, values=V, index=G, aggfunc=["min", "mean", "max"])   # 2-level columns
pd.cut(df[C], bins=[-np.inf, -.02, -.01, 0, .01, .02, np.inf], labels=LBL)

# ---------- 4. COMBINE ----------
pd.concat([a, b], axis=0)                      # stack rows, keeps index
pd.concat([a, b], axis=0, ignore_index=True)   # stack rows, 0..n-1 (index LOST)
pd.concat([a, b], axis=0, join="inner")        # only common COLUMNS
A.join(B, how="inner"/"outer"/"left"/"right")  # on the index
A.join([B, C], how="inner")                    # three frames at once
pd.merge(a, b, on=KEY, how="left", indicator=True)   # _merge column proves the match

# ---------- 5. FIGURES ----------
plt.figure(figsize=(18, 10))                   # 2x3 needs this size
plt.subplot(2, 3, 1)                           # 1-indexed, ROW-MAJOR: 1 2 3 / 4 5 6
plt.plot(x, y, label="Close"); plt.legend()
plt.bar(labels, values); plt.xticks(rotation=45)
plt.hist(series.dropna(), bins=10, edgecolor="black")
plt.scatter(x, y, s=18, alpha=0.7)
plt.boxplot([g1, g2, g3]); plt.xticks([1,2,3], ["A","B","C"])
plt.pie(counts, labels=names, autopct="%1.1f%%", startangle=90)
plt.title(...); plt.xlabel(...); plt.ylabel(...); plt.grid(True, axis="y")
plt.tight_layout()
plt.savefig("Stock_Analysis.png"); plt.savefig("Stock_Analysis.pdf")   # BEFORE show()
plt.show()
```

**The five sentences that earn marks in any capstone.** Keep them in your head and adapt the numbers:

1. "The merge preserved all N rows of the transaction table, so no observation was lost or duplicated."
2. "The filter is valid; no observation satisfies it, and the maximum of the column is X."
3. "The first value is missing because the calculation needs a previous observation / n observations."
4. "The missing values in the outer result are dates or keys the other table does not cover, not data errors."
5. "The correlation is r = X, so I do not claim a relationship / the relationship is genuine and positive."
