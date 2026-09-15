---
id: 13-timeseries
part: "Part V — Stock and Time-Series Analysis"
title: "Stock Analysis: Changes, Returns, Wealth Index, Rolling Windows"
blurb: "Date indexes, mean filters, stock profiles, shift/diff, pct_change, Wealth Index, moving averages and rolling volatility — the whole Case 1 time-series block."
order: 130
covers:
  - "Integrated exercises — Case 1 — Q2 to Q8 (and the time-series half of Q9, Q10, Q12, Q13)"
  - "03 Sorting and slicing in Pandas — Exercise 3 (Stock Prices of ACME Ltd.)"
  - "02 Missing values — Exercise 3 (Daily Stock Market Data)"
datafiles:
  - "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
  - "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 3 - Stock Prices/EX_C_stock_ACME.csv"
  - "Pandas exercises/02 Missing values/Exercise 3 - Stock market/Exercise 3 - stock market.csv"
patterns:
  - id: P13.1
    title: "Turn a Date column into a DatetimeIndex and slice by date"
    phrasings:
      - "For all three stock DataFrames, make Date the index"
      - "Set Date as the index and slice records from 2024-03-10 to 2024-03-20"
      - "display all observations for March 2020"
      - "display observations from 1 March 2020 to 31 March 2020"
      - "extract only the year 2022 from the data"
      - "use only the common calendar period 2021-01-01 to 2022-12-30"
      - "convert the date column to datetime and sort chronologically"
  - id: P13.2
    title: "Pull year, month, day name and quarter out of a date"
    phrasings:
      - "split the DataFrame into 2019 and 2020 and into 2021 and 2022"
      - "add a Year and Month column from the date"
      - "how many observations fall in March 2020"
      - "compute the average closing price for each year"
      - "which weekday has the most trading days"
      - "report mean Close by quarter for 2022"
  - id: P13.3
    title: "Filter rows against a column's own mean (AND / OR)"
    phrasings:
      - "calculate the overall mean closing price"
      - "extract all days on which Close was greater than this mean"
      - "extract observations where both Close was above its mean and Volume was above its mean"
      - "extract observations where either Close was above its mean or Volume was above its mean"
      - "count the number of days on which the closing price exceeded its average"
      - "Repeat parts 1-3 for TCS and Infosys"
  - id: P13.4
    title: "Build a complete stock profile as one reusable function"
    phrasings:
      - "Prepare a complete stock profile"
      - "first trading date, last trading date, first closing price, last closing price"
      - "highest closing price and the date of the highest closing price"
      - "five highest-volume trading days"
      - "number of days on which the closing price was above its own mean closing price"
      - "Finally, compare the three stock profiles"
  - id: P13.5
    title: "Previous close and daily price change: shift() vs diff()"
    phrasings:
      - "Calculate Previous_Close by shifting closing prices by one observation"
      - "calculate the price change separately using diff() and verify that the results are the same"
      - "largest positive price change and its date"
      - "largest negative price change and its date"
      - "mean price change"
      - "create a column holding the previous day's close"
  - id: P13.6
    title: "Daily returns with pct_change()"
    phrasings:
      - "Create a Return column for each stock using closing prices"
      - "mean daily return, median daily return, standard deviation of daily returns"
      - "maximum daily return and its date"
      - "display its five highest-return days and its five lowest-return days"
      - "explain why the first return observation is missing"
      - "compute the percentage change in closing price from one day to the next"
  - id: P13.7
    title: "Cumulative return and Wealth Index of 100"
    phrasings:
      - "Calculate cumulative return and Wealth Index"
      - "convert returns into growth factors and calculate cumulative growth"
      - "create a Wealth_Index assuming an initial investment value of 100"
      - "Determine the final Wealth Index value for each stock"
      - "identify which investment finished with the highest value over its own available period"
      - "show the growth of Rs 100 invested on the first day"
  - id: P13.8
    title: "Moving averages and rolling volatility"
    phrasings:
      - "Moving averages and rolling volatility"
      - "20-day moving average of Close, 50-day, 200-day"
      - "20-day rolling standard deviation of Return"
      - "determine the maximum 20-day rolling standard deviation and its date"
      - "extract the last 10 rows containing Close, MA20, MA50 and MA200"
      - "explain why the beginning of the moving-average columns contains missing values"
  - id: P13.9
    title: "One prepare() function that enriches every stock sheet"
    phrasings:
      - "repeat the entire analysis for TCS and Infosys"
      - "do the same for each of the three stocks"
      - "write a function that adds returns and moving averages to any price DataFrame"
      - "process all sheets of the workbook in a loop"
  - id: P13.10
    title: "Combine the stocks by date: joins and a long frame"
    phrasings:
      - "Create three one-column DataFrames containing only closing price"
      - "an inner join of Reliance and TCS, an outer join, a left join, a right join"
      - "For each result, report its shape"
      - "count missing values in every column and identify why the missing values appear"
      - "add a column named Stock containing the company name and concatenate vertically"
      - "report the first date and the last date of the inner combination"
  - id: P13.11
    title: "Return intervals with pd.cut()"
    phrasings:
      - "Create return intervals using pd.cut()"
      - "use the class limits less than -2%, -2% to -1%, -1% to 0%, 0% to 1%, 1% to 2%, greater than 2%"
      - "create a frequency table for Reliance using value_counts()"
      - "add cumulative frequency"
      - "create a cross-tabulation with Stock as rows and Return Interval as columns"
      - "Identify the most frequently occurring return interval for each stock"
  - id: P13.12
    title: "Small-file versions: 60-row ACME prices and a gappy 10-row series"
    phrasings:
      - "Show the first 7 and last 7 rows of the dataset"
      - "Slice the dataset by dates 2024-03-15 to 2024-03-24, and then slice the same rows by their positions"
      - "Filter days where Close is at least 100 and Volume is at least 6000, then sort them by Close descending"
      - "Use forward fill (ffill) to handle missing ClosingPrice"
      - "Use backward fill (bfill) for missing Volume"
      - "Identify missing data in ClosingPrice and Volume"
  - id: P13.13
    title: "Phrase to code lookup for time-series questions"
    phrasings:
      - "previous day's close"
      - "daily change in price"
      - "daily return"
      - "20-day moving average"
      - "rolling volatility"
      - "date of the highest closing price"
      - "growth of 100 rupees"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| [P13.1](#p131--turn-a-date-column-into-a-datetimeindex-and-slice-by-date) | The question says "make Date the index", "observations for March 2020", "from date A to date B" |
| [P13.2](#p132--pull-year-month-day-name-and-quarter-out-of-a-date) | "split into 2019–20 and 2021–22", "average by year", "which weekday", "by quarter" |
| [P13.3](#p133--filter-uploads-against-a-columns-own-mean-and--or) | "days on which Close was above its mean", "both above their means", "either condition" |
| [P13.4](#p134--build-a-complete-stock-profile-as-one-reusable-function) | "prepare a complete stock profile", "highest close and its date", "five highest-volume days" |
| [P13.5](#p135--previous-close-and-daily-price-change-shift-vs-diff) | "previous close", "price change", "verify diff() gives the same answer", "largest gain and its date" |
| [P13.6](#p136--daily-returns-with-pct_change) | "daily return", "mean/median/std of returns", "five highest-return days", "why is the first return missing" |
| [P13.7](#p137--cumulative-return-and-wealth-index-of-100) | "growth factors", "cumprod", "Wealth Index of ₹100", "which investment finished highest" |
| [P13.8](#p138--moving-averages-and-rolling-volatility) | "20/50/200-day moving average", "rolling standard deviation", "why are the first values NaN" |
| [P13.9](#p139--one-prepare-function-that-enriches-every-stock-sheet) | Any question that says "repeat for all three stocks" — write the pipeline once |
| [P13.10](#p1310--combine-the-stocks-by-date-joins-and-a-long-frame) | "one-column Close frames", "inner/outer join", "add a Stock column and concatenate" |
| [P13.11](#p1311--return-intervals-with-pdcut) | "return intervals", "class limits −2% to −1%", "frequency table of returns", "crosstab" |
| [P13.12](#p1312--small-file-versions-60-row-acme-prices-and-a-gappy-10-row-series) | The examiner hands you a 60-row CSV instead of the workbook, or a price series with gaps |
| [P13.13](#p1313--phrase-to-code-lookup-for-time-series-questions) | You know what the sentence means but not which method to type |

Base path used everywhere in this chapter. **Swap in your own path in the exam** — in the hall the
file is usually in the same folder as your notebook, so `"Stock_Practice.xlsx"` alone may work.

```python
import pandas as pd
import numpy as np

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W    = BASE + "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
ACME = BASE + "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 3 - Stock Prices/EX_C_stock_ACME.csv"
GAPS = BASE + "Pandas exercises/02 Missing values/Exercise 3 - Stock market/Exercise 3 - stock market.csv"
```

What is in the workbook (checked, not guessed):

| Sheet | Rows | Period | Columns |
| --- | --- | --- | --- |
| `Reliance` | 1022 | 2019-01-01 → 2022-12-30 | Date, Open, High, Low, Close, Volume |
| `TCS` | 1024 | 2020-01-01 → 2023-12-29 | same |
| `Infosys` | 1026 | 2021-01-01 → 2024-12-31 | same |
| `Company_Master` | 3 | — | Ticker, Company, Sector |
| `Read_Me` | — | — | notes only |

`Date` already arrives as `datetime64[ns]` from `read_excel`, there are **no duplicate dates**, and
the three sheets **do not align row-for-row** — dates are deliberately punched out. The three-way
common date set is only **492 rows**, all inside 2021-01-01 → 2022-12-30.

---

## P13.1 — Turn a Date column into a DatetimeIndex and slice by date

**Exam phrasings**

- "For all three stock DataFrames, make Date the index."
- "Set Date as the index and slice records from 2024-03-10 to 2024-03-20, showing only the Close and Volume columns."
- "display all observations for March 2020"
- "display observations from 1 March 2020 to 31 March 2020"
- "extract only the year 2022"
- "use only the common calendar period 2021-01-01 to 2022-12-30"

**Core idea.** Three steps, always in this order: **convert → set as index → sort**. Once the index
is a `DatetimeIndex`, `.loc` accepts *date strings*, and a partial string like `'2020-03'` expands to
the whole month. Everything else in this chapter depends on this one step.

**Template**

```python
df['DATE_COL'] = pd.to_datetime(df['DATE_COL'])   # skip only if it is already datetime64
df = df.set_index('DATE_COL').sort_index()

df.loc['YYYY']                     # a whole year
df.loc['YYYY-MM']                  # a whole month
df.loc['YYYY-MM-DD']               # one day
df.loc['START':'STOP']             # inclusive of STOP
df.loc['START':'STOP', ['COL_A','COL_B']]
```

**Worked — Case 1 Q2, all seven parts**

```python
import pandas as pd
W = "/Volumes/rythmn103/code/bisa_guide/Exercises/Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"

rel = pd.read_excel(W, sheet_name="Reliance")
print("dtype before:", rel['Date'].dtype)
rel['Date'] = pd.to_datetime(rel['Date'])
rel = rel.set_index('Date').sort_index()
print("index dtype:", rel.index.dtype, "| type:", type(rel.index).__name__)
```

```text
dtype before: datetime64[ns]
index dtype: datetime64[ns] | type: DatetimeIndex
```

```python
# Q2.1 first row by position
print(rel.iloc[0])
```

```text
Open          1118.38
High          1138.36
Low           1092.27
Close         1112.14
Volume    14715077.00
Name: 2019-01-01 00:00:00, dtype: float64
```

```python
# Q2.2 last row by position
print(rel.iloc[-1])
```

```text
Open         2611.21
High         2632.54
Low          2562.77
Close        2583.87
Volume    6388694.00
Name: 2022-12-30 00:00:00, dtype: float64
```

```python
# Q2.3 rows at positions 10 to 19
print(rel.iloc[10:20])
```

```text
               Open     High      Low    Close    Volume
Date
2019-01-15  1080.65  1109.39  1070.27  1098.84   7859518
2019-01-16  1100.49  1115.37  1086.68  1101.55   9535633
2019-01-17  1096.89  1107.22  1089.88  1100.20   5967969
2019-01-18  1100.29  1106.86  1065.08  1071.47  10588826
2019-01-21  1064.66  1076.02  1052.95  1064.31   7525833
2019-01-22  1065.19  1095.28  1047.40  1077.28   6380533
2019-01-23  1075.21  1089.17  1067.57  1081.49   4761771
2019-01-24  1073.45  1102.60  1062.08  1091.04   8299382
2019-01-25  1083.29  1111.27  1069.86  1097.67   6377518
2019-01-28  1095.94  1122.96  1077.29  1104.17   6587600
```

```python
# Q2.4 only Close and Volume
print(rel[['Close','Volume']].head())
```

```text
              Close    Volume
Date
2019-01-01  1112.14  14715077
2019-01-02  1091.76   8639311
2019-01-03  1087.02  11770746
2019-01-04  1095.88   8998440
2019-01-07  1085.62   9587233
```

```python
# Q2.5 first 15 rows, only Open High Low Close
print(rel.loc[:, 'Open':'Close'].head(15))
```

```text
               Open     High      Low    Close
Date
2019-01-01  1118.38  1138.36  1092.27  1112.14
2019-01-02  1113.65  1124.37  1081.25  1091.76
2019-01-03  1099.08  1111.71  1074.53  1087.02
2019-01-04  1088.39  1112.12  1072.27  1095.88
2019-01-07  1100.03  1107.05  1078.69  1085.62
2019-01-08  1087.52  1093.95  1071.79  1078.17
2019-01-09  1083.96  1105.81  1076.93  1098.68
2019-01-10  1095.35  1116.37  1088.82  1109.76
2019-01-11  1113.95  1128.95  1077.84  1092.55
2019-01-14  1091.56  1108.14  1063.87  1080.28
2019-01-15  1080.65  1109.39  1070.27  1098.84
2019-01-16  1100.49  1115.37  1086.68  1101.55
2019-01-17  1096.89  1107.22  1089.88  1100.20
2019-01-18  1100.29  1106.86  1065.08  1071.47
2019-01-21  1064.66  1076.02  1052.95  1064.31
```

```python
# Q2.6 all observations for March 2020
march = rel.loc['2020-03']
print(march.shape)
print(march.head(5))
```

```text
(22, 5)
               Open     High      Low    Close    Volume
Date
2020-03-02  1736.47  1764.54  1713.95  1741.95   7105334
2020-03-03  1724.78  1827.49  1695.07  1796.54   6796653
2020-03-04  1798.55  1815.29  1760.89  1777.43   8759712
2020-03-05  1782.12  1804.37  1753.91  1776.09   7510730
2020-03-06  1785.02  1806.58  1784.09  1805.64  10112535
# ... (17 rows omitted; last is 2020-03-31, Close 1816.94)
```

```python
# Q2.7 explicit range 1 Mar 2020 to 31 Mar 2020
span = rel.loc['2020-03-01':'2020-03-31']
print(span.shape)
print("identical to loc['2020-03']?", span.equals(rel.loc['2020-03']))
```

```text
(22, 5)
identical to loc['2020-03']? True
```

**More slices the examiner may ask for**

```python
print(rel.loc['2022'].shape)                              # whole year
common = rel.loc['2021-01-01':'2022-12-30']
print(common.shape, common.index.min().date(), common.index.max().date())
```

```text
(254, 5)
(510, 5) 2021-01-01 2022-12-30
```

**Variants**

| If the question says | Change to |
| --- | --- |
| Dates are `01-07-2025` (day first) | `pd.to_datetime(df['Date'], dayfirst=True)` |
| Dates are text in a fixed shape | `pd.to_datetime(df['Date'], format="%d-%m-%Y")` — fastest and safest |
| Some dates are junk | `pd.to_datetime(df['Date'], errors="coerce")` → bad ones become `NaT` |
| Reading a CSV | `pd.read_csv(path, parse_dates=['Date'])` does the conversion for you |
| "keep Date as a column too" | `df = df.set_index('Date', drop=False)` |
| "undo the index" | `df.reset_index()` |
| "newest first" | `df.sort_index(ascending=False)` |
| "just Close and Volume for that month" | `df.loc['2020-03', ['Close','Volume']]` |
| "from the start up to a date" | `df.loc[:'2020-03-31']` |
| "check the index really is dates" | `df.index.dtype` → `datetime64[ns]` |

```python
s = pd.Series(["01-07-2025","15-08-2025","03-12-2025"])
print(pd.to_datetime(s, dayfirst=True).tolist())
print(pd.to_datetime(s, format="%d-%m-%Y").tolist())
print(pd.to_datetime(pd.Series(["2024/03/01","bad"]), errors="coerce").tolist())
```

```text
[Timestamp('2025-07-01 00:00:00'), Timestamp('2025-08-15 00:00:00'), Timestamp('2025-12-03 00:00:00')]
[Timestamp('2025-07-01 00:00:00'), Timestamp('2025-08-15 00:00:00'), Timestamp('2025-12-03 00:00:00')]
[Timestamp('2024-03-01 00:00:00'), NaT]
```

**Traps**

- **If you forget `pd.to_datetime`, the index is `object` (plain strings) and month slicing dies.**
  ISO strings *look* sortable, so `df.loc['2024-03-10':'2024-03-20']` silently works by alphabet
  while `df.loc['2024-03']` raises:

  ```python
  raw = pd.read_csv(ACME)                 # no parse_dates
  bad = raw.set_index('Date')
  print("index dtype:", bad.index.dtype, type(bad.index).__name__)
  try:
      bad.loc['2024-03']
  except Exception as e:
      print("loc['2024-03'] ->", type(e).__name__, e)
  print("lexical slice still returns:", bad.loc['2024-03-10':'2024-03-20'].shape)
  ```

  ```text
  index dtype: object Index
  loc['2024-03'] -> KeyError '2024-03'
  lexical slice still returns: (11, 3)
  ```

- `.dt` on a non-datetime column raises `AttributeError: Can only use .dt accessor with datetimelike values`.
- **Always `sort_index()`.** Range slicing an unsorted `DatetimeIndex` raises
  `KeyError: 'Value based partial slicing on non-monotonic DatetimeIndexes with non-existing keys is not allowed.'`
  (A single partial key like `.loc['2024-03']` happens to still work — do not rely on it.)
- With `.loc` the **stop label is included**; with `.iloc` the stop position is excluded. Say this in
  your written answer — Q5 of the ACME exercise asks for exactly this comparison (see P13.12).
- `2020-03` has 22 rows, not 31: these are trading days and some dates are intentionally missing.
  Never write "March has 31 rows".

**Drill**

1. Load the `TCS` sheet, index it by date, and report the shape of June 2021.
2. Report the number of rows of `Infosys` in the window 2021-01-01 to 2022-12-30.

<details><summary>Answers</summary>

```python
tcs = pd.read_excel(W, sheet_name="TCS").set_index('Date').sort_index()
print(tcs.loc['2021-06'].shape)        # (21, 5)

inf = pd.read_excel(W, sheet_name="Infosys").set_index('Date').sort_index()
print(inf.loc['2021-01-01':'2022-12-30'].shape)   # (513, 5)
```

</details>

---

## P13.2 — Pull year, month, day name and quarter out of a date

**Exam phrasings**

- "Split the Reliance DataFrame into reliance_early: 2019 and 2020; reliance_late: 2021 and 2022."
- "add a Year and Month column from the date"
- "how many observations fall in March 2020"
- "compute the average closing price for each year"
- "report mean Close by quarter for 2022"
- "which weekday has the most trading days"

**Core idea.** On a **column** use `.dt.<part>`. On an **index** drop the `.dt` and use
`df.index.<part>` directly. Both give you plain integers (or strings for names) that you can filter,
group or compare.

**Template**

```python
# date still a column
df['Year']     = df['DATE_COL'].dt.year
df['Month']    = df['DATE_COL'].dt.month
df['Day']      = df['DATE_COL'].dt.day
df['DayName']  = df['DATE_COL'].dt.day_name()
df['Quarter']  = df['DATE_COL'].dt.quarter

# date is the index — NO .dt
df[df.index.year == 2022]
df[df.index.year.isin([2019, 2020])]
df[(df.index.year == 2020) & (df.index.month == 3)]
df.groupby(df.index.year)['COL'].mean()
```

**Worked**

```python
raw = pd.read_excel(W, sheet_name="Reliance")
d = raw.copy()
d['Year']      = d['Date'].dt.year
d['Month']     = d['Date'].dt.month
d['Day']       = d['Date'].dt.day
d['DayName']   = d['Date'].dt.day_name()
d['Quarter']   = d['Date'].dt.quarter
d['MonthName'] = d['Date'].dt.month_name()
print(d[['Date','Year','Month','Day','DayName','Quarter','MonthName']].head(4))
```

```text
        Date  Year  Month  Day    DayName  Quarter MonthName
0 2019-01-01  2019      1    1    Tuesday        1   January
1 2019-01-02  2019      1    2  Wednesday        1   January
2 2019-01-03  2019      1    3   Thursday        1   January
3 2019-01-04  2019      1    4     Friday        1   January
```

```python
rel = raw.set_index('Date').sort_index()
print("index.year head:", rel.index.year[:5].tolist())
print("March 2020 count:", ((rel.index.year == 2020) & (rel.index.month == 3)).sum())
```

```text
index.year head: [2019, 2019, 2019, 2019, 2019]
March 2020 count: 22
```

**Worked — the Q9 per-year split**

```python
early = rel[rel.index.year.isin([2019, 2020])]
late  = rel[rel.index.year.isin([2021, 2022])]
print("early", early.shape, early.index.min().date(), early.index.max().date())
print("late ", late.shape,  late.index.min().date(),  late.index.max().date())
print("rows preserved?", len(early) + len(late) == len(rel), len(rel))
```

```text
early (512, 5) 2019-01-01 2020-12-31
late  (510, 5) 2021-01-01 2022-12-30
rows preserved? True 1022
```

(`pd.concat([early, late])` then rebuilds the original 1022 rows — that is Q9's concatenation half.)

**Worked — grouping by date parts**

```python
print(rel.groupby(rel.index.year)['Close'].agg(['count','mean']).round(2))
```

```text
      count     mean
Date
2019    256  1512.08
2020    256  1860.30
2021    256  2640.13
2022    254  2416.60
```

```python
g = rel.groupby([rel.index.year, rel.index.month])['Close'].mean().round(2)
g.index.names = ['Year','Month']
print(g.head(6))
```

```text
Year  Month
2019  1        1093.45
      2        1158.90
      3        1211.09
      4        1344.28
      5        1478.89
      6        1505.33
Name: Close, dtype: float64
```

```python
y22 = rel.loc['2022']
print(y22.groupby(y22.index.quarter)['Close'].mean().round(2))
print(rel.index.day_name().value_counts())
```

```text
Date
1    2567.90
2    2431.05
3    2303.12
4    2370.10
Name: Close, dtype: float64
Date
Tuesday      205
Thursday     205
Wednesday    204
Friday       204
Monday       204
Name: count, dtype: int64
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "week number" / "day of year" | `.dt.isocalendar().week` / `.dt.dayofyear` |
| "month as Jan, Feb…" | `.dt.month_name().str[:3]` |
| "first/last day of the month" | `.dt.is_month_start`, `.dt.is_month_end` |
| "financial year starting April" | `.dt.to_period('Q-MAR')` |
| "monthly average without groupby" | `rel['Close'].resample('ME').mean()` (`'ME'` in pandas 2.2+, was `'M'`) |
| "group by year and stock" | `df.groupby([df.index.year, 'Stock'])['Close'].mean()` |
| "label rows as early/late" | `np.where(df.index.year <= 2020, 'Early', 'Late')` |

```python
print(rel['Close'].resample('ME').mean().round(2).head(4))
```

```text
Date
2019-01-31    1093.45
2019-02-28    1158.90
2019-03-31    1211.09
2019-04-30    1344.28
Freq: ME, Name: Close, dtype: float64
```

**Traps**

- `df.index.year` has **no** `.dt` — writing `df.index.dt.year` raises `AttributeError`.
- `df.index.year.isin([...])` works because the result is an `Index`; on a plain NumPy array you
  would need `np.isin`.
- `.dt.month` returns **1–12 integers**, so `df['Month'] == 'March'` never matches. Use
  `.dt.month_name()` if you want to compare to text.
- `resample` needs a datetime index; `groupby(df.index.year)` does not need equal spacing.

**Drill**

1. Count the Reliance trading days in each quarter of 2020.
2. Build a Series of mean Close by day name for Reliance.

<details><summary>Answers</summary>

```python
y20 = rel.loc['2020']
print(y20.groupby(y20.index.quarter)['Close'].count())
print(rel.groupby(rel.index.day_name())['Close'].mean().round(2))
```

</details>

---

## P13.3 — Filter rows against a column's own mean (AND / OR)

**Exam phrasings**

- "calculate the overall mean closing price"
- "extract all days on which Close was greater than this mean"
- "extract observations where both Close was above its mean and Volume was above its mean"
- "extract observations where either Close was above its mean or Volume was above its mean"
- "count the number of days on which the closing price exceeded its average"
- "Repeat parts 1–3 for TCS and Infosys."

**Core idea.** Store the mean in a variable first — then the threshold is written once and the code
reads like the question. **Every individual condition goes in its own parentheses**; `&` = and,
`|` = or.

**Template**

```python
m  = df['COL'].mean()
mv = df['COL2'].mean()

df[df['COL'] > m]                            # single condition
df[(df['COL'] > m) & (df['COL2'] > mv)]      # AND — both
df[(df['COL'] > m) | (df['COL2'] > mv)]      # OR  — either
(df['COL'] > m).sum()                        # just the count
```

**Worked — Case 1 Q3 for Reliance**

```python
rel = pd.read_excel(W, sheet_name="Reliance").set_index('Date').sort_index()

m  = rel['Close'].mean()
mv = rel['Volume'].mean()
print("mean Close :", round(m, 2))
print("mean Volume:", round(mv, 2))

above  = rel[rel['Close'] > m]
both   = rel[(rel['Close'] > m) & (rel['Volume'] > mv)]
either = rel[(rel['Close'] > m) | (rel['Volume'] > mv)]
print("Close above mean  :", len(above))
print("AND (both above)  :", len(both))
print("OR  (either above):", len(either))
print(above.head(3))
```

```text
mean Close : 2106.67
mean Volume: 7581845.18
Close above mean  : 548
AND (both above)  : 263
OR  (either above): 770
               Open     High      Low    Close   Volume
Date
2020-11-09  2099.57  2146.44  2080.65  2127.27  8944057
2020-11-10  2121.64  2153.30  2105.14  2136.68  7714872
2020-11-11  2123.70  2141.36  2104.41  2122.06  6556936
```

**Worked — "repeat for TCS and Infosys": the three-stock count table**

```python
S = {s: pd.read_excel(W, sheet_name=s).set_index('Date').sort_index()
     for s in ['Reliance','TCS','Infosys']}

rows = []
for name, d in S.items():
    mc, mvv = d['Close'].mean(), d['Volume'].mean()
    rows.append({'Stock': name,
                 'Total_rows':  len(d),
                 'Mean_Close':  round(mc, 2),
                 'Mean_Volume': round(mvv, 0),
                 'Close_above': int((d['Close'] > mc).sum()),
                 'AND':         int(((d['Close'] > mc) & (d['Volume'] > mvv)).sum()),
                 'OR':          int(((d['Close'] > mc) | (d['Volume'] > mvv)).sum())})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
   Stock  Total_rows  Mean_Close  Mean_Volume  Close_above  AND  OR
Reliance        1022     2106.67    7581845.0          548  263 770
     TCS        1024     3270.40    3235198.0          649  317 822
 Infosys        1026     1285.17    5162952.0          581  288 792
```

**Worked — Q3.5 and Q3.6 sorting**

```python
print(rel.sort_values('Close', ascending=False).head(5))
```

```text
               Open     High      Low    Close   Volume
Date
2021-09-23  2870.88  2923.75  2854.73  2907.39  8683428
2021-09-29  2890.86  2917.91  2856.24  2883.22  5885126
2021-09-27  2875.14  2895.01  2862.03  2881.87  7788672
2021-09-22  2842.44  2901.37  2815.04  2873.67  8928762
2021-09-28  2868.41  2911.90  2827.43  2870.88  9733952
```

```python
print(rel.sort_values(['Volume','Close'], ascending=[False, False]).head(5))
```

```text
               Open     High      Low    Close    Volume
Date
2021-08-26  2687.06  2715.71  2607.10  2635.19  22332150
2022-07-15  2385.83  2419.83  2320.21  2353.76  20443423
2020-04-29  1813.49  1835.04  1796.59  1818.10  19969440
2021-03-18  2560.94  2583.43  2547.70  2570.13  18756550
2020-10-07  1901.67  1950.83  1885.35  1934.23  17985216
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "at or above the mean" | `df['Close'] >= m` |
| "below the median instead" | `df[df['Close'] < df['Close'].median()]` |
| "above the mean but not the top 5%" | `df[(df['Close'] > m) & (df['Close'] < df['Close'].quantile(0.95))]` |
| "within 10% of the mean" | `df[df['Close'].between(m*0.9, m*1.1)]` |
| "neither condition holds" | `df[~((df['Close'] > m) \| (df['Volume'] > mv))]` |
| "one condition, readable" | `df.query('Close > @m and Volume > @mv')` |
| "above its own yearly mean" | `df[df['Close'] > df.groupby(df.index.year)['Close'].transform('mean')]` |
| "only show Close and Volume of those rows" | `df.loc[df['Close'] > m, ['Close','Volume']]` |

```python
print(rel.query('Close > @m and Volume > @mv').shape)
print(rel[rel['Close'].between(m, m*1.1)].shape)
```

```text
(263, 5)
(89, 5)
```

**Traps**

- `and`/`or` on Series raise `ValueError: The truth value of a Series is ambiguous`. Use `&` / `|`.
- Missing parentheses: `df[df['Close'] > m & df['Volume'] > mv]` fails, because `&` binds tighter
  than `>`.
- The mean is computed **after** any filtering you have already done. If the question says
  "the overall mean", compute it on the full frame before slicing.
- `AND` count is never larger than either single count; `OR` is never smaller. Use that as a sanity
  check: 263 ≤ 548 ≤ 770. ✔
- `sum()` on a boolean Series returns a NumPy integer; wrap in `int()` if you build a DataFrame.

**Drill**

1. How many TCS days had Volume above the TCS mean volume?
2. Show Infosys rows where Close was below its mean **and** Volume was above its mean; report the count.

<details><summary>Answers</summary>

```python
tcs = S['TCS']
print(int((tcs['Volume'] > tcs['Volume'].mean()).sum()))     # 490

inf = S['Infosys']
sel = inf[(inf['Close'] < inf['Close'].mean()) & (inf['Volume'] > inf['Volume'].mean())]
print(len(sel))
```

</details>

---

## P13.4 — Build a complete stock profile as one reusable function

**Exam phrasings**

- "Prepare a complete stock profile."
- "first trading date; last trading date; first closing price; last closing price"
- "highest closing price; date of the highest closing price"
- "five highest-volume trading days"
- "number of days on which the closing price was above its own mean closing price"
- "Finally, compare the three stock profiles."

**Core idea.** Thirteen sub-questions, one function. `idxmax()` / `idxmin()` return the **index
label** of the extreme value — which is a *date* only because you set the date index in P13.1. Return
a `pd.Series` so that three calls stack into a comparison table with `pd.DataFrame({...})`.

**Template**

```python
def profile(df, name="STOCK", price="Close", vol="Volume"):
    c = df[price]
    return pd.Series({
        'First_Date'     : df.index[0].date(),
        'Last_Date'      : df.index[-1].date(),
        'First_Close'    : round(c.iloc[0], 2),
        'Last_Close'     : round(c.iloc[-1], 2),
        'Highest_Close'  : round(c.max(), 2),
        'Highest_Date'   : c.idxmax().date(),
        'Lowest_Close'   : round(c.min(), 2),
        'Lowest_Date'    : c.idxmin().date(),
        'Mean_Close'     : round(c.mean(), 2),
        'Median_Close'   : round(c.median(), 2),
        'Avg_Volume'     : round(df[vol].mean(), 0),
        'Days_Above_Mean': int((c > c.mean()).sum()),
    }, name=name)
```

**Worked — one stock**

```python
print(profile(S['Reliance'], 'Reliance'))
```

```text
First_Date         2019-01-01
Last_Date          2022-12-30
First_Close           1112.14
Last_Close            2583.87
Highest_Close         2907.39
Highest_Date       2021-09-23
Lowest_Close          1064.31
Lowest_Date        2019-01-21
Mean_Close            2106.67
Median_Close           2211.5
Avg_Volume          7581845.0
Days_Above_Mean           548
Name: Reliance, dtype: object
```

**Worked — Q4's comparison of all three**

```python
prof = pd.DataFrame({n: profile(d, n) for n, d in S.items()})
print(prof.to_string())
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
```

**Worked — item 12, the five highest-volume days (both accepted forms)**

```python
print(S['Reliance'].nlargest(5, 'Volume')[['Close','Volume']])
print("sort_values equivalent identical?",
      S['Reliance'].nlargest(5, 'Volume')
        .equals(S['Reliance'].sort_values('Volume', ascending=False).head(5)))
```

```text
              Close    Volume
Date
2021-08-26  2635.19  22332150
2022-07-15  2353.76  20443423
2020-04-29  1818.10  19969440
2021-03-18  2570.13  18756550
2020-10-07  1934.23  17985216
sort_values equivalent identical? True
```

```python
for n, d in S.items():
    print(n, "top-5 volume dates:", [str(x.date()) for x in d.nlargest(5, 'Volume').index])
```

```text
Reliance top-5 volume dates: ['2021-08-26', '2022-07-15', '2020-04-29', '2021-03-18', '2020-10-07']
TCS top-5 volume dates: ['2022-03-16', '2022-08-25', '2020-01-01', '2020-06-10', '2021-04-28']
Infosys top-5 volume dates: ['2021-01-01', '2024-02-01', '2023-08-24', '2022-10-06', '2023-03-16']
```

**Why the date index matters — run this and you will never forget it**

```python
raw = pd.read_excel(W, sheet_name="Reliance")             # Date still a column
print("idxmax on the default RangeIndex:", raw['Close'].idxmax())
print(raw.loc[raw['Close'].idxmax(), ['Date','Close']].to_dict())

rel = raw.set_index('Date').sort_index()
print("idxmax on the DatetimeIndex     :", rel['Close'].idxmax())
```

```text
idxmax on the default RangeIndex: 697
{'Date': Timestamp('2021-09-23 00:00:00'), 'Close': 2907.39}
idxmax on the DatetimeIndex     : 2021-09-23 00:00:00
```

`idxmax()` gives you the label, not the value and not the position. With a `RangeIndex` that label is
a meaningless row number `697`; with a `DatetimeIndex` it is the answer the question wants.

**Variants**

| If the question says | Change to |
| --- | --- |
| "the whole row of the highest close" | `df.loc[df['Close'].idxmax()]` |
| "position of the highest, not the date" | `df['Close'].argmax()` → `697` |
| "five lowest-volume days" | `df.nsmallest(5, 'Volume')` |
| "top 5 by Close within each year" | `df.groupby(df.index.year, group_keys=False).apply(lambda g: g.nlargest(5,'Close'))` |
| "highest High, not Close" | swap the column: `df['High'].idxmax()` |
| "price range" | `df['Close'].max() - df['Close'].min()` |
| "return a dict instead" | `profile(df).to_dict()` |
| "add mean return and std" | add `'Mean_Return': df['Close'].pct_change().mean()` to the dict |
| "one row per stock in a table" | `pd.DataFrame([profile(d, n) for n, d in S.items()])` (stocks as rows) |

**Traps**

- **Ties.** `idxmax()` returns only the **first** matching label. If two days share the maximum, the
  second is silently dropped. Tie-safe reporting:

  ```python
  c = S['Reliance']['Close']
  print("all dates at the max close:", [str(x.date()) for x in c[c == c.max()].index])
  for n, d in S.items():
      print(n, "rows at max close:", int((d['Close'] == d['Close'].max()).sum()))
  ```

  ```text
  all dates at the max close: ['2021-09-23']
  Reliance rows at max close: 1
  TCS rows at max close: 1
  Infosys rows at max close: 1
  ```

  No ties in this workbook, but say the sentence "no ties were present, so `idxmax()` is safe here" —
  it costs one line and earns the mark.
- `nlargest(5, 'Volume')` with ties keeps 5 rows arbitrarily; `keep='all'` keeps every tied row.
- `.iloc[0]` / `.iloc[-1]` are **first and last rows in index order** — meaningless unless you sorted.
- `df.index[0]` is a `Timestamp`. Print `.date()` to avoid the ugly ` 00:00:00`.
- `Median_Close` prints as `2211.5` not `2211.50` — that is just float display, not an error.

**Drill**

1. Which Infosys day had the lowest close, and what was it?
2. Report TCS's three lowest-volume days with their closes.

<details><summary>Answers</summary>

```python
inf = S['Infosys']
print(inf['Close'].idxmin().date(), inf['Close'].min())      # 2021-07-30 853.42
print(S['TCS'].nsmallest(3, 'Volume')[['Close','Volume']])
```

```text
              Close   Volume
Date
2020-05-26  2191.07  1059557
2021-11-29  3739.28  1168198
2023-04-12  3917.00  1190190
```

</details>

---

## P13.5 — Previous close and daily price change: shift() vs diff()

**Exam phrasings**

- "Calculate Previous_Close by shifting closing prices by one observation."
- "Calculate Price_Change first as Close − Previous_Close."
- "Then calculate the price change separately using diff() and verify that the results are the same."
- "largest positive price change and its date; largest negative price change and its date; mean price change"
- "create a column holding the previous day's close"

**Core idea.** `shift(1)` slides the column **down** one row, so row *t* sees row *t−1*'s value.
`diff()` is shorthand for exactly `s - s.shift(1)`. Row 0 has nothing above it, so both produce `NaN`
there.

**Template**

```python
df['Previous_Close'] = df['Close'].shift(1)
df['Price_Change']   = df['Close'] - df['Previous_Close']
df['Diff_Check']     = df['Close'].diff()

print(df['Price_Change'].equals(df['Diff_Check']))
print((df['Price_Change'] - df['Diff_Check']).abs().max())

ch = df['Close'].diff()
print(ch.max(), ch.idxmax())     # largest gain and its date
print(ch.min(), ch.idxmin())     # largest fall and its date
print(ch.mean())
```

**Worked**

```python
rel = S['Reliance'].copy()
rel['Previous_Close'] = rel['Close'].shift(1)
rel['Price_Change']   = rel['Close'] - rel['Previous_Close']
rel['Diff_Check']     = rel['Close'].diff()
print(rel[['Close','Previous_Close','Price_Change','Diff_Check']].head(4))
```

```text
              Close  Previous_Close  Price_Change  Diff_Check
Date
2019-01-01  1112.14             NaN           NaN         NaN
2019-01-02  1091.76         1112.14        -20.38      -20.38
2019-01-03  1087.02         1091.76         -4.74       -4.74
2019-01-04  1095.88         1087.02          8.86        8.86
```

**Worked — the verification Q5 explicitly asks for**

```python
a, b = rel['Price_Change'], rel['Diff_Check']
print("equals() as-is        :", a.equals(b))
print("equals() after dropna :", a.dropna().equals(b.dropna()))
print("max abs difference    :", (a - b).abs().max())
print("rows not exactly equal:", int((a.dropna() != b.dropna()).sum()))
```

```text
equals() as-is        : True
equals() after dropna : True
max abs difference    : 0.0
rows not exactly equal: 0
```

On **this** data the two are bit-for-bit identical for all three stocks (max abs difference `0.0`),
because `diff()` performs the same subtraction internally. `equals()` also treats `NaN == NaN` as
equal, so you do not even need the `dropna()`.

```python
for n, d in S.items():
    a = d['Close'] - d['Close'].shift(1)
    b = d['Close'].diff()
    print(n, "equals:", a.equals(b), "| max abs diff:", (a - b).abs().max())
```

```text
Reliance equals: True | max abs diff: 0.0
TCS equals: True | max abs diff: 0.0
Infosys equals: True | max abs diff: 0.0
```

**Exam wording for the verification.** "`diff()` is defined as the current value minus the previous
value, i.e. `s - s.shift(1)`, so the two columns are computed by the same arithmetic. Comparing them
with `.equals()` returns `True` and the maximum absolute difference is 0.0, confirming they match.
The first row is `NaN` in both because there is no earlier observation." If your data ever gives a
tiny non-zero maximum such as `1.1e-13`, that is floating-point rounding — state that and use
`(a-b).abs().max() < 1e-9` instead of exact equality.

**Worked — Q5's three answers for every stock**

```python
rows = []
for n, d in S.items():
    ch = d['Close'].diff()
    rows.append({'Stock': n,
                 'Max_Gain': round(ch.max(), 2), 'Max_Gain_Date': ch.idxmax().date(),
                 'Max_Loss': round(ch.min(), 2), 'Max_Loss_Date': ch.idxmin().date(),
                 'Mean_Change': round(ch.mean(), 4)})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
   Stock  Max_Gain Max_Gain_Date  Max_Loss Max_Loss_Date  Mean_Change
Reliance    107.04    2021-06-07    -95.45    2021-06-04       1.4415
     TCS    161.42    2023-03-14   -169.35    2022-10-06       1.6460
 Infosys     52.53    2024-04-12    -54.26    2023-11-23      -0.1315
```

**Variants**

```python
v = S['Reliance'][['Close']].copy()
v['Next_Close']   = v['Close'].shift(-1)          # look AHEAD one day
v['Change_5d']    = v['Close'].diff(5)            # change over five sessions
v['Pct_of_Prev']  = (v['Close'] / v['Close'].shift(1)).round(4)
print(v.head(7))
print(v.tail(2))
```

```text
              Close  Next_Close  Change_5d  Pct_of_Prev
Date
2019-01-01  1112.14     1091.76        NaN          NaN
2019-01-02  1091.76     1087.02        NaN       0.9817
2019-01-03  1087.02     1095.88        NaN       0.9957
2019-01-04  1095.88     1085.62        NaN       1.0082
2019-01-07  1085.62     1078.17        NaN       0.9906
2019-01-08  1078.17     1098.68     -33.97       0.9931
2019-01-09  1098.68     1109.76       6.92       1.0190
              Close  Next_Close  Change_5d  Pct_of_Prev
Date
2022-12-29  2617.74     2583.87      71.02       1.0010
2022-12-30  2583.87         NaN      35.71       0.9871
```

| If the question says | Change to |
| --- | --- |
| "next day's close" / "look-ahead" | `df['Close'].shift(-1)` — **last** row becomes NaN |
| "change over 5 trading days" | `df['Close'].diff(5)` — first 5 rows NaN |
| "change versus a week ago by calendar" | `df['Close'].diff()` on a resampled/reindexed series, or `df['Close'] - df['Close'].shift(1, freq='7D')` |
| "absolute change" | `df['Close'].diff().abs()` |
| "number of up days" | `(df['Close'].diff() > 0).sum()` |
| "cumulative change since day 1" | `df['Close'] - df['Close'].iloc[0]` |
| "previous close per stock in a long frame" | `long.groupby('Stock')['Close'].shift(1)` |
| "fill the first NaN with the close itself" | `df['Close'].shift(1).fillna(df['Close'].iloc[0])` |

**Traps**

- **Row 0 is `NaN` by definition** — `Price_Change` needs two prices and only one exists. Never
  "fix" it with `fillna(0)` before reporting `mean()`; a fake zero drags the mean toward zero.
  `mean()` skips `NaN` automatically.
- `shift()` moves **rows, not dates**. If the frame is not sorted by date, "previous" is whatever
  row happens to sit above. Sort first.
- In a stacked/long frame covering several stocks, a plain `shift(1)` leaks the last row of one
  stock into the first row of the next. Always `groupby('Stock')` first.
- `shift(-1)` is a *look-ahead*: never use it to build a trading rule, and expect the **last** row
  to be `NaN` rather than the first.
- `diff()` on an `int` column returns `float` (because of the `NaN`). That is expected.

**Drill**

1. On which date did TCS have its largest single-day fall, and how big was it?
2. Add a `Change_20d` column to Infosys and report how many rows are NaN.

<details><summary>Answers</summary>

```python
ch = S['TCS']['Close'].diff()
print(ch.idxmin().date(), round(ch.min(), 2))     # 2022-10-06 -169.35

inf = S['Infosys'].copy()
inf['Change_20d'] = inf['Close'].diff(20)
print(int(inf['Change_20d'].isna().sum()))        # 20
```

</details>

---

## P13.6 — Daily returns with pct_change()

**Exam phrasings**

- "Create a Return column for each stock using closing prices."
- "mean daily return; median daily return; standard deviation of daily returns"
- "maximum daily return and its date; minimum daily return and its date"
- "sort each stock by Return and display its five highest-return days; its five lowest-return days"
- "Also explain why the first return observation is missing."
- "compute the percentage change in closing price from one day to the next"

**Core idea.** A daily return is `(Close_t − Close_{t−1}) / Close_{t−1}`. `pct_change()` does that in
one call and returns a **fraction** (`-0.018325` = −1.83%). Multiply by 100 only for display.

**Template**

```python
df['Return'] = df['Close'].pct_change()              # fraction
df['Return_pct'] = df['Return'] * 100                # percent, for display only

r = df['Return'].dropna()
print(r.mean(), r.median(), r.std())
print(r.max(), r.idxmax())
print(r.min(), r.idxmin())
print(r.sort_values(ascending=False).head(5))        # five highest
print(r.sort_values().head(5))                       # five lowest
```

**Worked**

```python
rel = S['Reliance'].copy()
rel['Return']     = rel['Close'].pct_change()
rel['Return_pct'] = rel['Return'] * 100
print(rel[['Close','Return','Return_pct']].head(3).round(6))

manual = rel['Close'] / rel['Close'].shift(1) - 1
print("pct_change == manual formula?", rel['Return'].equals(manual),
      "| max abs diff:", (rel['Return'] - manual).abs().max())
```

```text
              Close    Return  Return_pct
Date
2019-01-01  1112.14       NaN         NaN
2019-01-02  1091.76 -0.018325   -1.832503
2019-01-03  1087.02 -0.004342   -0.434161
pct_change == manual formula? True | max abs diff: 0.0
```

**Worked — Q6's five statistics for all three stocks**

```python
rows = []
for n, d in S.items():
    r = d['Close'].pct_change().dropna()
    rows.append({'Stock': n, 'N': len(r),
                 'Mean_%':   round(r.mean()*100, 4),
                 'Median_%': round(r.median()*100, 4),
                 'Std_%':    round(r.std()*100, 4),
                 'Max_%':    round(r.max()*100, 4),  'Max_Date': r.idxmax().date(),
                 'Min_%':    round(r.min()*100, 4),  'Min_Date': r.idxmin().date()})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
   Stock    N  Mean_%  Median_%  Std_%  Max_%   Max_Date   Min_%   Min_Date
Reliance 1021  0.0911    0.0680 1.3085 4.0159 2021-06-07 -4.4100 2019-12-11
     TCS 1023  0.0640    0.0555 1.2303 4.2395 2023-03-14 -4.4429 2022-10-06
 Infosys 1025 -0.0023   -0.0141 1.3017 3.8317 2021-07-14 -4.0648 2023-11-23
```

Note `N` = rows − 1 in every case (1021, 1023, 1025): exactly one return is lost per stock.

**Worked — five highest and five lowest return days**

```python
r = rel['Return'].dropna()
print((r.sort_values(ascending=False).head(5) * 100).round(3))
print((r.sort_values().head(5) * 100).round(3))
print("nlargest gives the same order?",
      r.nlargest(5).index.equals(r.sort_values(ascending=False).head(5).index))
```

```text
Date
2021-06-07    4.016
2019-02-19    3.933
2019-10-17    3.609
2021-07-22    3.466
2020-04-14    3.396
Name: Return, dtype: float64
Date
2019-12-11   -4.410
2022-06-06   -3.712
2021-06-04   -3.457
2021-12-20   -3.432
2020-07-16   -3.235
Name: Return, dtype: float64
nlargest gives the same order? True
```

**Write-up answer — "why is the first return missing?"**

> A return compares a closing price with the **previous** closing price. The first row of the data set
> has no earlier observation to compare against, so the numerator `Close_t − Close_{t−1}` cannot be
> formed and pandas records `NaN`. It is a structural consequence of differencing, not a data-quality
> problem. The Series therefore contains n−1 usable returns for n prices (1021 for Reliance's 1022
> rows). Before computing statistics we call `dropna()` so that the count reported is the number of
> genuine returns; `mean()`, `std()` and `idxmax()` already skip `NaN`, but `dropna()` makes the
> reported `count` honest and avoids a `NaN` appearing at the start of a chart.

**Variants**

| If the question says | Change to |
| --- | --- |
| "return in percent" | `df['Close'].pct_change() * 100` |
| "weekly / 5-day return" | `df['Close'].pct_change(5)` |
| "log return" | `np.log(df['Close'] / df['Close'].shift(1))` |
| "return from Open to Close" | `(df['Close'] - df['Open']) / df['Open']` |
| "total return over the period" | `df['Close'].iloc[-1] / df['Close'].iloc[0] - 1` |
| "annualised volatility" | `df['Close'].pct_change().std() * np.sqrt(252)` |
| "count of positive return days" | `(df['Close'].pct_change() > 0).sum()` |
| "returns per stock in a long frame" | `long.groupby('Stock')['Close'].pct_change()` |
| "five best days including ties" | `r.nlargest(5, keep='all')` |

**Traps**

- **Scale.** `pct_change()` gives `0.0402`, not `4.02`. Mixing the two ruins every downstream number
  (see P13.11 for the classic `pd.cut` disaster).
- **`fill_method` deprecation.** If the price column itself contains `NaN`, pandas 2.x prints:

  ```text
  FutureWarning: The default fill_method='pad' in Series.pct_change is deprecated and will be
  removed in a future version. Either fill in any non-leading NA values prior to calling
  pct_change or specify 'fill_method=None' to not fill NA values.
  ```

  Fix it by cleaning first (P13.12) or by writing `pct_change(fill_method=None)`. The Case 1 sheets
  have no missing prices, so the warning does not appear there.
- Do not `dropna()` the whole DataFrame just to clean one Return column — you would delete row 0
  entirely and lose a trading day. Drop on the **Series** you are analysing.
- `describe()` on the un-dropped Series already reports `count 1021` (it excludes `NaN`), so
  `dropna()` changes nothing numerically here — it only guarantees it.
- Mean return ≠ mean price change ÷ mean price. Report whichever the question asked for.

**Drill**

1. Which was Infosys's worst return day and by how much?
2. How many Reliance days returned more than +2%?

<details><summary>Answers</summary>

```python
ir = S['Infosys']['Close'].pct_change()
print(ir.idxmin().date(), round(ir.min()*100, 3))      # 2023-11-23 -4.065

print(int((S['Reliance']['Close'].pct_change() > 0.02).sum()))
```

</details>

---

## P13.7 — Cumulative return and Wealth Index of ₹100

**Exam phrasings**

- "Calculate cumulative return and Wealth Index."
- "convert returns into growth factors; calculate cumulative growth"
- "create a Cumulative_Return column"
- "create a Wealth_Index assuming an initial investment value of ₹100"
- "Determine the final Wealth Index value for each stock."
- "Based only on the calculated Wealth Index, identify which investment finished with the highest value over its own available period."

**Core idea.** Four lines, in this order:

1. `Return = Close.pct_change()`
2. **Growth factor** `= 1 + Return`, with the first (missing) return treated as 0 → factor 1
3. **Cumulative growth** `= Growth_Factor.cumprod()`
4. `Cumulative_Return = Cum_Growth − 1` and `Wealth_Index = Cum_Growth × 100`

**Template**

```python
df['Return']            = df['Close'].pct_change()
df['Growth_Factor']     = 1 + df['Return'].fillna(0)
df['Cum_Growth']        = df['Growth_Factor'].cumprod()
df['Cumulative_Return'] = df['Cum_Growth'] - 1
df['Wealth_Index']      = df['Cum_Growth'] * 100

print(df['Wealth_Index'].iloc[-1])
```

**Worked**

```python
rel = S['Reliance'].copy()
rel['Return']            = rel['Close'].pct_change()
rel['Growth_Factor']     = 1 + rel['Return'].fillna(0)
rel['Cum_Growth']        = rel['Growth_Factor'].cumprod()
rel['Cumulative_Return'] = rel['Cum_Growth'] - 1
rel['Wealth_Index']      = rel['Cum_Growth'] * 100
print(rel[['Close','Return','Growth_Factor','Cum_Growth','Cumulative_Return','Wealth_Index']].head(4).round(6))
```

```text
              Close    Return  Growth_Factor  Cum_Growth  Cumulative_Return  Wealth_Index
Date
2019-01-01  1112.14       NaN       1.000000    1.000000           0.000000    100.000000
2019-01-02  1091.76 -0.018325       0.981675    0.981675          -0.018325     98.167497
2019-01-03  1087.02 -0.004342       0.995658    0.977413          -0.022587     97.741292
2019-01-04  1095.88  0.008151       1.008151    0.985380          -0.014620     98.537954
```

```python
print(rel[['Close','Return','Cumulative_Return','Wealth_Index']].tail(3).round(4))
```

```text
              Close  Return  Cumulative_Return  Wealth_Index
Date
2022-12-28  2615.06  0.0011             1.3514      235.1377
2022-12-29  2617.74  0.0010             1.3538      235.3786
2022-12-30  2583.87 -0.0129             1.3233      232.3332
```

**How to handle the first missing return — the choice, and why it does not matter here**

```python
r = S['Reliance']['Close'].pct_change()

v1 = (1 + r.fillna(0)).cumprod()                   # treat day 1's return as 0
v2 = (1 + r); v2.iloc[0] = 1.0; v2 = v2.cumprod()  # set the first FACTOR to 1
v3 = (1 + r.dropna()).cumprod()                    # drop day 1 entirely
v4 = (1 + r).cumprod()                             # leave the NaN in place

print("fillna(0)        :", round(v1.iloc[-1]*100, 4))
print("first factor = 1 :", round(v2.iloc[-1]*100, 4))
print("dropna           :", round(v3.iloc[-1]*100, 4))
print("NaN left in      :", round(v4.iloc[-1]*100, 4), "| NaN rows:", int(v4.isna().sum()))
print("Close ratio x100 :", round(S['Reliance']['Close'].iloc[-1] / S['Reliance']['Close'].iloc[0] * 100, 4))
```

```text
fillna(0)        : 232.3332
first factor = 1 : 232.3332
dropna           : 232.3332
NaN left in      : 232.3332 | NaN rows: 1
Close ratio x100 : 232.3332
```

All four give the same **final** value, and it equals `last Close / first Close × 100` — a free
sanity check you should quote. The difference is only in the **first row**: `fillna(0)` gives a clean
`100.0` on day 1, `dropna()` starts the series on day 2, and leaving the `NaN` in makes day 1's
Wealth Index `NaN`, which puts a hole at the left edge of the Q15 chart. **Use `fillna(0)`** — the
hint in the exercise ("replace the initial missing return appropriately") is asking for exactly that.

**Worked — Q7's answer: final Wealth Index over each stock's own period**

```python
rows = []
for n, d in S.items():
    r  = d['Close'].pct_change()
    wi = (1 + r.fillna(0)).cumprod() * 100
    rows.append({'Stock': n, 'Start': d.index[0].date(), 'End': d.index[-1].date(),
                 'First_Close': round(d['Close'].iloc[0], 2),
                 'Last_Close':  round(d['Close'].iloc[-1], 2),
                 'Final_Wealth_Index': round(wi.iloc[-1], 2),
                 'Cumulative_Return_%': round((wi.iloc[-1]/100 - 1)*100, 2)})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
   Stock      Start        End  First_Close  Last_Close  Final_Wealth_Index  Cumulative_Return_%
Reliance 2019-01-01 2022-12-30      1112.14     2583.87              232.33               132.33
     TCS 2020-01-01 2023-12-29      2154.47     3838.28              178.15                78.15
 Infosys 2021-01-01 2024-12-31      1292.51     1157.72               89.57               -10.43
```

**Answer to "which investment finished highest?"** Reliance, at a final Wealth Index of **232.33** —
₹100 invested on its first trading day would be worth ₹232.33 on 2022-12-30. TCS finishes at 178.15
and Infosys at 89.57, i.e. Infosys **lost** money (−10.43%) over its window.

**The caveat that earns the mark.** The three Wealth Indices are **not comparable**: each is measured
over that stock's own, different four-year window (Reliance 2019–2022, TCS 2020–2023, Infosys
2021–2024). Different periods mean different market conditions, so the ranking says as much about
*when* each series runs as about the stocks. For a like-for-like comparison, rebase all three to 100
on the same date inside the common period.

**Worked — the common-period version (this is what the Q15 chart needs)**

```python
rows = []
for n, d in S.items():
    sub = d.loc['2021-01-01':'2022-12-30']
    wi  = (1 + sub['Close'].pct_change().fillna(0)).cumprod() * 100
    rows.append({'Stock': n, 'Rows': len(sub), 'Start': sub.index[0].date(),
                 'End': sub.index[-1].date(), 'Final_Wealth_Index': round(wi.iloc[-1], 2)})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
   Stock  Rows      Start        End  Final_Wealth_Index
Reliance   510 2021-01-01 2022-12-30              109.40
     TCS   511 2021-01-01 2022-12-30              146.25
 Infosys   513 2021-01-01 2022-12-30               86.60
```

Rebased on the same window the ranking **reverses**: TCS 146.25 > Reliance 109.40 > Infosys 86.60.
Quote both results and the reason they differ.

The strictly-aligned version (only the 492 dates all three actually share) gives the same numbers,
because the first and last common dates coincide with the window edges:

```python
closes = {n: d['Close'].rename(n) for n, d in S.items()}
wide = pd.concat(closes.values(), axis=1, join='inner')     # 492 shared dates
wi   = (1 + wide.pct_change().fillna(0)).cumprod() * 100
print("shape:", wide.shape, wide.index.min().date(), "->", wide.index.max().date())
print(wi.tail(3).round(2))
print(wi.iloc[-1].round(2).to_string())
print((wide / wide.iloc[0] * 100).iloc[-1].round(2).to_string())   # normalised-price shortcut
```

```text
shape: (492, 3) 2021-01-01 -> 2022-12-30
            Reliance     TCS  Infosys
Date
2022-12-28    110.72  147.33    87.31
2022-12-29    110.83  146.42    85.29
2022-12-30    109.40  146.25    86.60
Reliance    109.40
TCS         146.25
Infosys      86.60
Reliance    109.40
TCS         146.25
Infosys      86.60
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "initial investment of ₹10,000" | `Cum_Growth * 10000` |
| "cumulative return in percent" | `(Cum_Growth - 1) * 100` |
| "running maximum / drawdown" | `wi / wi.cummax() - 1` |
| "CAGR" | `(wi.iloc[-1]/100) ** (252/len(wi)) - 1` (252 trading days ≈ 1 year) |
| "growth of all three on one chart" | build the wide inner-join frame above, then `wi.plot()` |
| "wealth index per stock in a long frame" | `long.groupby('Stock')['Return'].transform(lambda r: (1+r.fillna(0)).cumprod()*100)` |
| "cumulative sum of returns instead" | `r.cumsum()` — an *approximation*, not the same as `cumprod` |

**Traps**

- `cumprod()` **skips** `NaN` but leaves it in place, so the final number is right while row 0 shows
  `NaN`. That is why the Q15 line chart looks broken if you forget `fillna(0)`.
- `fillna(0)` belongs on the **Return**, never on the Close. Filling a price with 0 would produce a
  −100% return.
- Do not add returns instead of compounding them: `r.sum()` for Reliance is not 1.3233.
- Compare Wealth Index **levels** only if the series start on the same date and at the same base.
- The exercise writes "₹100"; keep the currency symbol out of column names.

**Drill**

1. Compute Infosys's Wealth Index using only calendar 2022 and report the final value.
2. Verify for TCS that the final Wealth Index equals `last Close / first Close × 100`.

<details><summary>Answers</summary>

```python
inf22 = S['Infosys'].loc['2022']
print(round((1 + inf22['Close'].pct_change().fillna(0)).cumprod().iloc[-1] * 100, 2))   # 97.53

t = S['TCS']
wi = (1 + t['Close'].pct_change().fillna(0)).cumprod() * 100
print(round(wi.iloc[-1], 2), round(t['Close'].iloc[-1]/t['Close'].iloc[0]*100, 2))      # 178.15 178.15
```

</details>

---

## P13.8 — Moving averages and rolling volatility

**Exam phrasings**

- "Moving averages and rolling volatility"
- "20-day moving average of Close; 50-day moving average; 200-day moving average"
- "20-day rolling standard deviation of Return"
- "determine the maximum 20-day rolling standard deviation and its date"
- "extract the last 10 rows containing Close, MA20, MA50 and MA200"
- "explain why the beginning of the moving-average columns contains missing values"

**Core idea.** `s.rolling(N)` makes a window of the **last N rows including the current one**; the
aggregation follows (`.mean()`, `.std()`, `.max()`…). Windows are counted in **rows, not calendar
days**, so "20-day" means 20 trading rows.

**Template**

```python
df['MA20']  = df['Close'].rolling(20).mean()
df['MA50']  = df['Close'].rolling(50).mean()
df['MA200'] = df['Close'].rolling(200).mean()
df['Roll20_Std'] = df['Return'].rolling(20).std()

rs = df['Roll20_Std']
print(rs.max(), rs.idxmax())
print(df[['Close','MA20','MA50','MA200']].tail(10))
```

**Worked**

```python
rel = S['Reliance'].copy()
rel['Return']     = rel['Close'].pct_change()
rel['MA20']       = rel['Close'].rolling(20).mean()
rel['MA50']       = rel['Close'].rolling(50).mean()
rel['MA200']      = rel['Close'].rolling(200).mean()
rel['Roll20_Std'] = rel['Return'].rolling(20).std()
print(rel[['Close','MA20','MA50','MA200']].tail(10).round(2))
```

```text
              Close     MA20     MA50    MA200
Date
2022-12-19  2566.08  2368.48  2331.60  2383.51
2022-12-20  2568.21  2383.28  2336.28  2383.03
2022-12-21  2559.15  2397.83  2341.14  2382.30
2022-12-22  2546.72  2408.18  2345.57  2381.55
2022-12-23  2548.16  2419.22  2350.33  2380.76
2022-12-26  2594.23  2432.50  2356.77  2380.12
2022-12-27  2612.25  2447.74  2363.04  2379.64
2022-12-28  2615.06  2463.75  2368.63  2379.09
2022-12-29  2617.74  2481.72  2373.30  2378.66
2022-12-30  2583.87  2494.59  2377.82  2377.98
```

```python
print(rel[['MA20','MA50','MA200','Roll20_Std']].isna().sum())
first = rel['MA20'].notna().idxmax()
print("first non-null MA20:", first.date(), "at row #", rel.index.get_loc(first))
print("first non-null Roll20_Std at row #", rel.index.get_loc(rel['Roll20_Std'].notna().idxmax()))
```

```text
MA20           19
MA50           49
MA200         199
Roll20_Std     20
dtype: int64
first non-null MA20: 2019-01-28 at row # 19
first non-null Roll20_Std at row # 20
```

**Write-up answer — "why are the first values missing?"**

> A 20-day moving average is the mean of the current observation and the 19 before it. At row 0 only
> one price exists, at row 1 only two, and so on, so the window cannot be filled until row 19
> (the 20th observation). pandas records `NaN` for every row before that, giving exactly
> **19 missing values for MA20, 49 for MA50 and 199 for MA200** — always N−1. The 20-day rolling
> standard deviation of Return shows **20** missing values rather than 19, because the Return series
> already loses its own first value to `pct_change()`. Passing `min_periods=` would produce numbers
> earlier, but they would be averages of fewer than N days and therefore not the statistic asked for.

**Worked — Q8.1 max rolling volatility for all three**

```python
rows = []
for n, d in S.items():
    rs = d['Close'].pct_change().rolling(20).std()
    rows.append({'Stock': n,
                 'Max_Roll20_Std': round(rs.max(), 6), 'Max_%': round(rs.max()*100, 4),
                 'Max_Date': rs.idxmax().date(),
                 'Min_%': round(rs.min()*100, 4), 'Min_Date': rs.idxmin().date()})
print(pd.DataFrame(rows).to_string(index=False))
```

```text
   Stock  Max_Roll20_Std  Max_%   Max_Date  Min_%   Min_Date
Reliance        0.018149 1.8149 2021-06-07        0.7619 2022-04-25
     TCS        0.018237 1.8237 2023-02-02        0.7384 2020-05-08
 Infosys        0.019689 1.9689 2021-08-06        0.7599 2024-05-24
```

**Variants**

```python
print(rel['Close'].rolling(20, min_periods=1).mean().head(5).round(2))     # no leading NaN
```

```text
Date
2019-01-01    1112.14
2019-01-02    1101.95
2019-01-03    1096.97
2019-01-04    1096.70
2019-01-07    1094.48
Name: Close, dtype: float64
```

```python
v = rel[['Close']].copy()
v['Roll20_Max'] = v['Close'].rolling(20).max()
v['Roll20_Min'] = v['Close'].rolling(20).min()
v['Exp_Mean']   = v['Close'].expanding().mean()
v['Exp_Max']    = v['Close'].expanding().max()
print(v.tail(3).round(2))
```

```text
              Close  Roll20_Max  Roll20_Min  Exp_Mean  Exp_Max
Date
2022-12-28  2615.06     2615.06     2258.36   2105.70  2907.39
2022-12-29  2617.74     2617.74     2301.00   2106.21  2907.39
2022-12-30  2583.87     2617.74     2301.00   2106.67  2907.39
```

`expanding()` uses **every row so far** instead of a fixed window, so `Exp_Mean` on the last row
equals the overall mean 2106.67 — matching P13.3. Only the first row is ever available, so there are
no leading `NaN`s.

| If the question says | Change to |
| --- | --- |
| "10-day / 100-day average" | `rolling(10)`, `rolling(100)` |
| "no missing values at the start" | `rolling(20, min_periods=1)` |
| "centred moving average" | `rolling(5, center=True).mean()` — NaN at **both** ends |
| "exponential moving average" | `df['Close'].ewm(span=20).mean()` |
| "rolling median / max / sum" | `rolling(20).median()`, `.max()`, `.sum()` |
| "annualised rolling volatility" | `df['Return'].rolling(20).std() * np.sqrt(252)` |
| "cumulative max to date" | `df['Close'].expanding().max()` or `.cummax()` |
| "days where MA20 is above MA50" | `(df['MA20'] > df['MA50']).sum()` |
| "moving average per stock in a long frame" | `long.groupby('Stock')['Close'].transform(lambda s: s.rolling(20).mean())` |
| "rolling 20 calendar days" | `df['Close'].rolling('20D').mean()` — needs a sorted DatetimeIndex |

```python
print(rel['Close'].rolling(5, center=True).mean().head(4).round(2))
print("annualised 20-day vol, max %:", round((rel['Return'].rolling(20).std()*np.sqrt(252)).max()*100, 2))
print("days MA20 > MA50:", int((rel['MA20'] > rel['MA50']).sum()),
      "of", int(rel['MA50'].notna().sum()), "comparable days")
```

```text
Date
2019-01-01        NaN
2019-01-02        NaN
2019-01-03    1094.48
2019-01-04    1087.69
Name: Close, dtype: float64
annualised 20-day vol, max %: 28.81
days MA20 > MA50: 602 of 973 comparable days
```

**Traps**

- The window counts **rows**, not dates. With holidays punched out, `rolling(20)` spans more than 20
  calendar days. Say "20 trading observations" in your answer.
- **Sort the index first.** `rolling` walks rows in order; an unsorted frame gives nonsense with no error.
- `rolling(20).std()` on Return has **20** NaNs, not 19 — the extra one is inherited from `pct_change()`.
  Examiners like this detail.
- `std()` uses the sample denominator (n−1) by default; add `ddof=0` only if the question demands the
  population version.
- `min_periods=1` changes the numbers, it does not "fix" them. Only use it when asked.
- Never `dropna()` the frame to clear MA200's 199 NaNs unless the question says so — you would throw
  away the first 199 trading days of Close data too.

**Drill**

1. Add a 100-day moving average to Infosys; report its last value and its NaN count.
2. Find the date of the highest 10-day average Volume for Reliance.

<details><summary>Answers</summary>

```python
ma100 = S['Infosys']['Close'].rolling(100).mean()
print(round(ma100.iloc[-1], 2), int(ma100.isna().sum()))     # 1354.07 99

rv = S['Reliance']['Volume'].rolling(10).mean()
print(rv.idxmax().date(), round(rv.max(), 0))                # 2022-07-25 9660028.0
```

</details>

---

## P13.9 — One prepare() function that enriches every stock sheet

**Exam phrasings**

- "repeat the entire analysis for TCS and Infosys"
- "do the same for each of the three stocks"
- "write a function that adds returns and moving averages to any price DataFrame"
- "process all sheets of the workbook"

**Core idea.** Case 1 asks Q2–Q8 **three times**. Write the pipeline once, call it three times in a
dict comprehension. This single block reproduces every column the rest of the case needs — memorise
it, it is the highest-value 12 lines in the chapter.

**Template — copy this verbatim, rename only the strings**

```python
import pandas as pd

def prepare(df, date_col="Date", price_col="Close"):
    d = df.copy()
    d[date_col] = pd.to_datetime(d[date_col])
    d = d.set_index(date_col).sort_index()
    d["Previous_Close"]    = d[price_col].shift(1)
    d["Price_Change"]      = d[price_col].diff()
    d["Return"]            = d[price_col].pct_change()
    d["MA20"]              = d[price_col].rolling(20).mean()
    d["MA50"]              = d[price_col].rolling(50).mean()
    d["MA200"]             = d[price_col].rolling(200).mean()
    d["Roll20_Std"]        = d["Return"].rolling(20).std()
    d["Cum_Growth"]        = (1 + d["Return"].fillna(0)).cumprod()
    d["Cumulative_Return"] = d["Cum_Growth"] - 1
    d["Wealth_Index"]      = d["Cum_Growth"] * 100
    return d

NAMES  = ["Reliance", "TCS", "Infosys"]
stocks = {n: prepare(pd.read_excel(W, sheet_name=n)) for n in NAMES}
```

**Worked**

```python
for n, d in stocks.items():
    print(n, d.shape)
print(list(stocks['Reliance'].columns))
```

```text
Reliance (1022, 15)
TCS (1024, 15)
Infosys (1026, 15)
['Open', 'High', 'Low', 'Close', 'Volume', 'Previous_Close', 'Price_Change', 'Return', 'MA20', 'MA50', 'MA200', 'Roll20_Std', 'Cum_Growth', 'Cumulative_Return', 'Wealth_Index']
```

```python
print(stocks['Reliance'].tail(3).round(3).to_string())
```

```text
               Open     High      Low    Close   Volume  Previous_Close  Price_Change  Return      MA20      MA50     MA200  Roll20_Std  Cum_Growth  Cumulative_Return  Wealth_Index
Date
2022-12-28  2608.38  2624.35  2599.12  2615.06  7295110         2612.25          2.81   0.001  2463.752  2368.629  2379.091       0.012       2.351              1.351       235.138
2022-12-29  2599.32  2642.59  2574.64  2617.74  7231363         2615.06          2.68   0.001  2481.721  2373.301  2378.658       0.011       2.354              1.354       235.379
2022-12-30  2611.21  2632.54  2562.77  2583.87  6388694         2617.74        -33.87  -0.013  2494.593  2377.818  2377.978       0.010       2.323              1.323       232.333
```

**Worked — the Q11 summary table straight out of the dict**

```python
summary = pd.DataFrame({n: {
    'Rows'              : len(d),
    'Mean_Close'        : round(d['Close'].mean(), 2),
    'Median_Close'      : round(d['Close'].median(), 2),
    'Highest_Close'     : round(d['Close'].max(), 2),
    'Lowest_Close'      : round(d['Close'].min(), 2),
    'Average_Volume'    : round(d['Volume'].mean(), 0),
    'Mean_Return'       : round(d['Return'].mean(), 6),
    'Return_Std'        : round(d['Return'].std(), 6),
    'Final_Wealth_Index': round(d['Wealth_Index'].iloc[-1], 2),
} for n, d in stocks.items()}).T
print(summary.to_string())
```

```text
            Rows  Mean_Close  Median_Close  Highest_Close  Lowest_Close  Average_Volume  Mean_Return  Return_Std  Final_Wealth_Index
Reliance  1022.0     2106.67       2211.50        2907.39       1064.31       7581845.0     0.000911    0.013085              232.33
TCS       1024.0     3270.40       3629.10        4312.09       1965.75       3235198.0     0.000640    0.012303              178.15
Infosys   1026.0     1285.17       1314.34        1608.65        853.42       5162952.0    -0.000023    0.013017               89.57
```

```python
master = pd.read_excel(W, sheet_name="Company_Master")
summ = summary.reset_index().rename(columns={'index': 'Stock'})
summ['Ticker'] = summ['Stock'].map({'Reliance':'RELIANCE.NS','TCS':'TCS.NS','Infosys':'INFY.NS'})
merged = pd.merge(summ, master, on='Ticker', how='left').sort_values('Mean_Return', ascending=False)
print(merged[['Ticker','Company','Sector','Mean_Close','Mean_Return','Return_Std','Final_Wealth_Index']].to_string(index=False))
```

```text
     Ticker                   Company Sector  Mean_Close  Mean_Return  Return_Std  Final_Wealth_Index
RELIANCE.NS       Reliance Industries Energy     2106.67     0.000911    0.013085              232.33
     TCS.NS Tata Consultancy Services     IT     3270.40     0.000640    0.012303              178.15
    INFY.NS                   Infosys     IT     1285.17    -0.000023    0.013017               89.57
```

**Variants**

| If the question says | Change to |
| --- | --- |
| Column is `Closing_Price`, not `Close` | `prepare(df, price_col="Closing_Price")` |
| Date column is `Trade_Date` | `prepare(df, date_col="Trade_Date")` |
| Data is one CSV per stock | `stocks = {n: prepare(pd.read_csv(f"{n}.csv")) for n in NAMES}` |
| "read every sheet automatically" | `all_sheets = pd.read_excel(W, sheet_name=None)` then loop, skipping `Read_Me` / `Company_Master` |
| "only returns and MA20 are needed" | delete the lines you do not need — the function is a menu |
| "keep the date as a column" | `d = d.sort_values(date_col)` instead of `set_index`, and use `groupby` versions of every method |
| "combine them into one long frame" | see P13.10 |

```python
all_sheets = pd.read_excel(W, sheet_name=None)          # dict of every sheet
stocks = {n: prepare(df) for n, df in all_sheets.items()
          if {'Date','Close','Volume'}.issubset(df.columns)}
print(list(stocks))
```

```text
['Reliance', 'TCS', 'Infosys']
```

**Traps**

- `df.copy()` on the first line. Without it, `prepare` mutates the caller's frame and a second run in
  the same notebook behaves differently.
- Compute `Return` **before** `Roll20_Std` and `Cum_Growth`; they depend on it.
- Call `prepare` on the **raw** sheet. Running it twice on an already-indexed frame raises
  `KeyError: 'Date'` because Date is no longer a column.
- `pd.read_excel(W, sheet_name=None)` also returns `Read_Me` and `Company_Master`; filter by columns
  as shown or the loop crashes.
- Keep the names `Previous_Close`, `Price_Change`, `Return`, `MA20`, `MA50`, `MA200` exactly as the
  question spells them — marks are given for the named columns.

**Drill**

1. Use `prepare` on the ACME CSV (`Close` column, `Date` column) and print the last three rows of
   `Close`, `Return`, `MA20`.

<details><summary>Answer</summary>

```python
acme = prepare(pd.read_csv(ACME))
print(acme[['Close','Return','MA20']].tail(3).round(4))
```

Only 60 rows, so `MA50` and `MA200` are entirely `NaN` — worth stating rather than hiding.

</details>

---

## P13.10 — Combine the stocks by date: joins and a long frame

**Exam phrasings**

- "Create three one-column DataFrames containing only closing price. Rename their columns meaningfully."
- "an inner join of Reliance and TCS; an outer join; a left join with Reliance controlling the dates; a right join with TCS controlling"
- "For each result, report its shape."
- "count missing values in every column; identify why the missing values appear"
- "add a column named Stock containing the company name" then "concatenate the three extracted datasets vertically"
- "report the first date; report the last date" of the inner combination

**Core idea.** `join()` matches on the **index**, which here is the date — so the date index from
P13.1 is what makes alignment automatic. Two shapes of result:

- **wide**: one column per stock, dates as rows (for charts and correlations)
- **long / tidy**: one row per stock-date with a `Stock` label column (for `pivot_table`, `crosstab`, `groupby`)

**Template**

```python
a = df_a[['Close']].rename(columns={'Close': 'NAME_A'})
b = df_b[['Close']].rename(columns={'Close': 'NAME_B'})

a.join(b, how='inner')            # only dates present in BOTH
a.join(b, how='outer')            # all dates from either, NaN where missing
a.join(b, how='left')             # a's dates control
a.join(b, how='right')            # b's dates control
a.join([b, c], how='inner')       # three or more at once
pd.concat([a, b, c], axis=1, join='inner')   # equivalent

# long form
parts = []
for name, d in S.items():
    sub = d.loc['START':'STOP'].copy()
    sub['Stock'] = name
    parts.append(sub.reset_index())
long = pd.concat(parts, axis=0, ignore_index=True)
```

**Worked — Q10, all six combinations with shapes**

```python
rel_c = S['Reliance'][['Close']].rename(columns={'Close':'Reliance'})
tcs_c = S['TCS'][['Close']].rename(columns={'Close':'TCS'})
inf_c = S['Infosys'][['Close']].rename(columns={'Close':'Infosys'})
print("one-column shapes:", rel_c.shape, tcs_c.shape, inf_c.shape)

pairs = {
 'inner  Rel+TCS'  : rel_c.join(tcs_c, how='inner'),
 'outer  Rel+TCS'  : rel_c.join(tcs_c, how='outer'),
 'left   Rel+TCS'  : rel_c.join(tcs_c, how='left'),
 'right  Rel+TCS'  : rel_c.join(tcs_c, how='right'),
 'outer  all three': rel_c.join([tcs_c, inf_c], how='outer'),
 'inner  all three': rel_c.join([tcs_c, inf_c], how='inner'),
}
for k, v in pairs.items():
    print(f"{k:18s} shape={v.shape}  {v.index.min().date()} -> {v.index.max().date()}")
```

```text
one-column shapes: (1022, 1) (1024, 1) (1026, 1)
inner  Rel+TCS     shape=(752, 2)  2020-01-01 -> 2022-12-30
outer  Rel+TCS     shape=(1294, 2)  2019-01-01 -> 2023-12-29
left   Rel+TCS     shape=(1022, 2)  2019-01-01 -> 2022-12-30
right  Rel+TCS     shape=(1024, 2)  2020-01-01 -> 2023-12-29
outer  all three   shape=(1557, 3)  2019-01-01 -> 2024-12-31
inner  all three   shape=(492, 3)  2021-01-01 -> 2022-12-30
```

```python
out3, in3 = pairs['outer  all three'], pairs['inner  all three']
print(out3.isna().sum())
print("inner first date:", in3.index.min().date(), "| last date:", in3.index.max().date())
print(in3.head(3).round(2))
```

```text
Reliance    535
TCS         533
Infosys     531
dtype: int64
inner first date: 2021-01-01 | last date: 2022-12-30
            Reliance      TCS  Infosys
Date
2021-01-01   2361.87  2699.87  1292.51
2021-01-04   2386.58  2746.67  1305.37
2021-01-06   2466.45  2724.58  1256.88
```

**Why the NaNs appear (the written answer).** The outer join keeps the **union** of all dates —
1557 distinct dates. Each stock only trades on its own subset: Reliance covers 1022 of those dates, so
1557 − 1022 = **535** dates have no Reliance price; TCS 1557 − 1024 = **533**; Infosys 1557 − 1026 =
**531**. Two causes stack up: the three series cover *different years* (Reliance stops in 2022,
Infosys starts in 2021), and inside the overlap individual dates are missing from some sheets. The
inner join keeps the **intersection**, only **492** dates, running 2021-01-01 → 2022-12-30.

```python
w = pd.concat([rel_c, tcs_c, inf_c], axis=1, join='inner')
print("concat inner shape:", w.shape, "| identical to join inner?", w.equals(in3))
```

```text
concat inner shape: (492, 3) | identical to join inner? True
```

**Worked — Q12's long frame over the common period**

```python
parts = []
for n, d in S.items():
    sub = d.loc['2021-01-01':'2022-12-30'].copy()
    sub['Return'] = sub['Close'].pct_change()
    sub['Stock']  = n
    parts.append(sub.reset_index())
long = pd.concat(parts, axis=0, ignore_index=True)
print("long shape:", long.shape)
print(long['Stock'].value_counts().to_string())
print(long.head(3).round(2).to_string(index=False))
```

```text
long shape: (1534, 8)
Stock
Infosys     513
TCS         511
Reliance    510
      Date    Open    High     Low   Close  Volume    Stock  Return
2021-01-01 2385.17 2397.07 2350.09 2361.87 6912301 Reliance     NaN
2021-01-04 2355.48 2389.63 2352.47 2386.58 8735024 Reliance    0.01
2021-01-05 2389.72 2426.90 2372.74 2409.78 6796339 Reliance    0.01
```

510 + 511 + 513 = 1534. The counts differ **because the sheets have different dates punched out** —
this is the same fact that made the inner join only 492 rows.

```python
print(long.pivot_table(index='Stock', values='Close', aggfunc='mean').round(2))
print(long.pivot_table(index='Stock', values='Close', aggfunc=['min','max']).round(2))
print(long.pivot_table(index='Stock', values=['Close','Volume'], aggfunc='mean').round(2))
print(long.pivot_table(index='Stock', values='Volume', aggfunc=['min','mean','max']).round(0))
```

```text
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

**Variants**

| If the question says | Change to |
| --- | --- |
| "match on a Ticker column, not the index" | `pd.merge(left, right, on='Ticker', how='inner')` |
| "join Volume as well as Close" | rename with a suffix: `d[['Close','Volume']].add_prefix('REL_')` |
| "keep only dates where all three traded" | `wide.dropna()` — the same 492 rows |
| "correlation of the three closes" | `wide.corr().round(3)` |
| "align two return Series for a scatter" | `pd.concat([r1, r2], axis=1, join='inner').dropna()` |
| "returns computed per stock in the long frame" | `long.groupby('Stock')['Close'].pct_change()` |
| "stack them but reset the index" | `pd.concat(parts, ignore_index=True)` |
| "keep track of which frame each row came from" | `pd.concat({...}, names=['Stock'])`, then `reset_index()` |

**Traps**

- `join` on two frames that both have a `Close` column raises
  `ValueError: columns overlap but no suffix specified`. **Rename before joining** — that is exactly
  why Q10 tells you to rename the columns.
- `concat(axis=1)` defaults to `join='outer'`. Pass `join='inner'` if you want the intersection.
- For a long frame, `reset_index()` before `concat` so the Date survives as a column; otherwise a
  duplicate-heavy index sneaks through.
- `pct_change()` on a long frame **without** `groupby` computes a bogus return across the
  Reliance→TCS boundary. In the loop above each stock's Return is computed before concatenating,
  which avoids it.
- `left` join row count = left frame's row count (1022), `right` = right frame's (1024). Use that to
  check you got the direction right.

**Drill**

1. Report the shape of the inner join of TCS and Infosys closes, and its first and last date.
2. Report the correlation matrix of the three closes over the common dates.

<details><summary>Answers</summary>

```python
ti = tcs_c.join(inf_c, how='inner')
print(ti.shape, ti.index.min().date(), ti.index.max().date())
print(rel_c.join([tcs_c, inf_c], how='inner').corr().round(3))
```

</details>

---

## P13.11 — Return intervals with pd.cut()

**Exam phrasings**

- "Create return intervals using pd.cut()."
- "Use the following class limits: less than −2%; −2% to −1%; −1% to 0%; 0% to 1%; 1% to 2%; greater than 2%"
- "create a frequency table for Reliance using value_counts()"
- "arrange the intervals in their proper order; convert the result to a DataFrame; add cumulative frequency"
- "create a cross-tabulation with Stock as rows and Return Interval as columns"
- "Identify the most frequently occurring return interval for each stock."

**Core idea.** Open-ended first and last classes need **infinite edges**: `-np.inf` and `np.inf`.
Six classes need **seven** edges. `labels=` gives the classes readable names and — crucially —
`pd.cut` returns an **ordered Categorical**, so `value_counts().sort_index()` comes out in class order
instead of frequency order.

**The scale decision — read this before you type anything.** The class limits are written in
**percent** (−2%, −1%…) but `pct_change()` returns **fractions**. Pick one and be consistent:

| Data you cut | Edges to use |
| --- | --- |
| `df['Return']` (fraction, e.g. `-0.0183`) | `[-np.inf, -0.02, -0.01, 0, 0.01, 0.02, np.inf]` |
| `df['Return'] * 100` (percent, e.g. `-1.83`) | `[-np.inf, -2, -1, 0, 1, 2, np.inf]` |

**Template**

```python
EDGES  = [-np.inf, -0.02, -0.01, 0, 0.01, 0.02, np.inf]
LABELS = ['< -2%', '-2% to -1%', '-1% to 0%', '0% to 1%', '1% to 2%', '> 2%']

long['Return_Interval'] = pd.cut(long['Return'], bins=EDGES, labels=LABELS)

ft = long.loc[long['Stock'] == 'NAME', 'Return_Interval'].value_counts().sort_index()
tab = ft.reset_index()
tab.columns = ['Return_Interval', 'Frequency']
tab['Cumulative_Frequency'] = tab['Frequency'].cumsum()
pd.crosstab(long['Stock'], long['Return_Interval'])
```

**Worked — cutting on the fraction (matches the stated class limits)**

```python
EDGES  = [-np.inf, -0.02, -0.01, 0, 0.01, 0.02, np.inf]
LABELS = ['< -2%', '-2% to -1%', '-1% to 0%', '0% to 1%', '1% to 2%', '> 2%']
long['Return_Interval'] = pd.cut(long['Return'], bins=EDGES, labels=LABELS)

rel_long = long[long['Stock'] == 'Reliance']
ft = rel_long['Return_Interval'].value_counts().sort_index()
print(ft.to_string())
print("classified:", int(ft.sum()), "of", len(rel_long), "rows (1 NaN return)")
```

```text
Return_Interval
< -2%          28
-2% to -1%     81
-1% to 0%     146
0% to 1%      141
1% to 2%       83
> 2%           30
classified: 509 of 510 rows (1 NaN return)
```

**Worked — the classic silent error, shown on purpose**

```python
long['Return_pct'] = long['Return'] * 100
wrong = pd.cut(long.loc[long['Stock']=='Reliance', 'Return_pct'], bins=EDGES, labels=LABELS)
print(wrong.value_counts().sort_index().to_string())
```

```text
Return_pct
< -2%         250
-2% to -1%      2
-1% to 0%       3
0% to 1%        3
1% to 2%        3
> 2%          248
```

Percent values against fraction edges: everything below −0.02% lands in `< -2%` and everything above
+0.02% in `> 2%`, so **498 of 509 days** fall into the two open-ended classes. No error, no warning —
just a completely wrong table. The fix is to move the edges to the same scale:

```python
EDGES_P = [-np.inf, -2, -1, 0, 1, 2, np.inf]
right = pd.cut(long.loc[long['Stock']=='Reliance','Return_pct'], bins=EDGES_P, labels=LABELS)
print(right.value_counts().sort_index().to_string())
print("matches the fraction version?", bool((right.value_counts().sort_index().values == ft.values).all()))
```

```text
Return_pct
< -2%          28
-2% to -1%     81
-1% to 0%     146
0% to 1%      141
1% to 2%       83
> 2%           30
matches the fraction version? True
```

**Worked — Q13.3 and Q13.4, DataFrame plus cumulative frequency**

```python
tab = ft.reset_index()
tab.columns = ['Return_Interval', 'Frequency']
tab['Cumulative_Frequency'] = tab['Frequency'].cumsum()
tab['Relative_%'] = (tab['Frequency'] / tab['Frequency'].sum() * 100).round(2)
print(tab.to_string(index=False))
```

```text
Return_Interval  Frequency  Cumulative_Frequency  Relative_%
          < -2%         28                    28        5.50
     -2% to -1%         81                   109       15.91
      -1% to 0%        146                   255       28.68
       0% to 1%        141                   396       27.70
       1% to 2%         83                   479       16.31
           > 2%         30                   509        5.89
```

**Worked — Q13.5 to Q13.7 and the modal class**

```python
for n in ['Reliance','TCS','Infosys']:
    t = long.loc[long['Stock'] == n, 'Return_Interval'].value_counts().sort_index()
    print(n, "| modal class:", t.idxmax(), "| count:", int(t.max()))
print(pd.crosstab(long['Stock'], long['Return_Interval']).to_string())
```

```text
Reliance | modal class: -1% to 0% | count: 146
TCS | modal class: -1% to 0% | count: 157
Infosys | modal class: -1% to 0% | count: 145
```

```text
Return_Interval  < -2%  -2% to -1%  -1% to 0%  0% to 1%  1% to 2%  > 2%
Stock
Infosys             30          88        145       136        81    32
Reliance            28          81        146       141        83    30
TCS                 19          70        157       153        83    28
```

**Answer:** the most frequent interval is **−1% to 0%** for all three stocks (Reliance 146, TCS 157,
Infosys 145). The `0% to 1%` class is a close second in every case (141 / 153 / 136), so state that
the two central classes dominate and the distribution is roughly symmetric with thin tails.

**Variants**

| If the question says | Change to |
| --- | --- |
| "left-closed classes" | `pd.cut(..., right=False)` — `[-2%, -1%)` instead of `(-2%, -1%]` |
| "equal-width bins, count unspecified" | `pd.cut(s, bins=6)` — pandas picks the edges |
| "equal-frequency classes / quartiles" | `pd.qcut(s, 4)` |
| "keep the interval object, not a label" | omit `labels=` — you get `(-0.02, -0.01]` etc. |
| "show the counts in class order" | `value_counts().sort_index()`; **never** plain `value_counts()` |
| "include the empty classes" | `value_counts()` on a Categorical already keeps zero-count classes |
| "percentages instead of counts" | `value_counts(normalize=True).sort_index() * 100` |
| "crosstab with row percentages" | `pd.crosstab(..., normalize='index').round(3) * 100` |
| "closed both ends" | `pd.cut(s, bins=EDGES, labels=LABELS, include_lowest=True)` |

```python
lc = pd.cut(rel_long['Return'], bins=EDGES, labels=LABELS, right=False).value_counts().sort_index()
print(pd.DataFrame({'right=True (default)': ft, 'right=False': lc}).to_string())
print("exact 0.0 returns:", int((rel_long['Return'] == 0).sum()),
      "| exact -0.01 returns:", int((rel_long['Return'] == -0.01).sum()))
```

```text
            right=True (default)  right=False
< -2%                         28           28
-2% to -1%                    81           81
-1% to 0%                    146          146
0% to 1%                     141          141
1% to 2%                      83           83
> 2%                          30           30
```

```text
exact 0.0 returns: 0 | exact -0.01 returns: 0
```

Here `right=True` and `right=False` give identical counts **because no return sits exactly on a
boundary**. Check that before claiming the convention is irrelevant, and write the sentence
"intervals are upper-limit-inclusive, i.e. `(-2%, -1%]`; no observation falls exactly on a boundary,
so the choice does not affect the counts."

**Traps**

- **Six classes need seven edges.** `len(labels)` must be `len(bins) - 1` or you get
  `ValueError: Bin labels must be one fewer than the number of bin edges`.
- **Use `-np.inf` / `np.inf`** for the open-ended classes. A finite guess like `-1` clips real
  observations into `NaN`.
- The `NaN` return of each stock's first day is **not** categorised: the counts sum to 509 not 510
  (Reliance), 510 not 511 (TCS), 512 not 513 (Infosys). Say so.
- Plain `value_counts()` sorts by **frequency**. Q13.2 explicitly asks you to "arrange the intervals
  in their proper order" — that is `sort_index()`.
- In a long frame, compute each stock's Return **per stock** before cutting, or the first row of TCS
  inherits a bogus return from Reliance's last row.
- `ft.reset_index()` column names differ across pandas versions; assign `tab.columns = [...]`
  explicitly, as above.

**Drill**

1. Build the Infosys return frequency table with cumulative frequency over the common period.
2. Produce the crosstab as row percentages rounded to 1 dp.

<details><summary>Answers</summary>

```python
t = long.loc[long['Stock']=='Infosys','Return_Interval'].value_counts().sort_index().reset_index()
t.columns = ['Return_Interval','Frequency']
t['Cumulative_Frequency'] = t['Frequency'].cumsum()
print(t.to_string(index=False))

print((pd.crosstab(long['Stock'], long['Return_Interval'], normalize='index')*100).round(1))
```

</details>

---

## P13.12 — Small-file versions: 60-row ACME prices and a gappy 10-row series

**Exam phrasings**

- "Show the first 7 and last 7 rows of the dataset."
- "Set Date as the index and slice records from 2024-03-10 to 2024-03-20, showing only the Close and Volume columns."
- "Filter days where Close is at least 100 and Volume is at least 6000, then sort them by Close descending."
- "Slice the dataset by dates 2024-03-15 to 2024-03-24, and then slice the same rows by their positions. Compare the difference in inclusion of the last row."
- "Identify missing data in ClosingPrice and Volume."
- "Use forward fill (ffill) to handle missing ClosingPrice." / "Use backward fill (bfill) for missing Volume."

**Core idea.** Identical skills, smaller file. `EX_C_stock_ACME.csv` is 60 rows with
`Date, Ticker, Close, Volume`; the missing-values CSV is 10 rows with `Date, ClosingPrice, Volume`.
An examiner short on time will hand you one of these instead of the workbook.

### ACME — 60 rows

```python
ACME = BASE + "Pandas exercises/03 Sorting and slicing in Pandas/Exercise 3 - Stock Prices/EX_C_stock_ACME.csv"
acme = pd.read_csv(ACME, parse_dates=['Date']).set_index('Date').sort_index()
print("shape:", acme.shape, "| index dtype:", acme.index.dtype)
print(acme.loc['2024-03-10':'2024-03-20', ['Close','Volume']])
```

```text
shape: (60, 3) | index dtype: datetime64[ns]
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
```

**Q5 — `.loc` includes the stop, `.iloc` does not**

```python
lbl = acme.loc['2024-03-15':'2024-03-24']
start = acme.index.get_loc(pd.Timestamp('2024-03-15'))
stop  = acme.index.get_loc(pd.Timestamp('2024-03-24'))
print("loc rows:", len(lbl), "| last date:", lbl.index[-1].date())
print("positions:", start, stop)
print("iloc[start:stop]   rows:", len(acme.iloc[start:stop]),
      "| last date:", acme.iloc[start:stop].index[-1].date())
print("iloc[start:stop+1] rows:", len(acme.iloc[start:stop+1]))
```

```text
loc rows: 10 | last date: 2024-03-24
positions: 14 23
iloc[start:stop]   rows: 9 | last date: 2024-03-23
iloc[start:stop+1] rows: 10
```

> **Model written answer.** `.loc['2024-03-15':'2024-03-24']` is label-based and **includes** the stop
> label, returning 10 rows ending on 2024-03-24. `.iloc[14:23]` is position-based and **excludes** the
> stop position, returning only 9 rows ending on 2024-03-23. To reproduce the `.loc` result by
> position you must write `.iloc[14:24]`, i.e. add one to the stop.

**Returns, a 5-day moving average, and the best day on 60 rows**

```python
acme['Change'] = acme['Close'].diff()
acme['Return'] = acme['Close'].pct_change()
acme['MA5']    = acme['Close'].rolling(5).mean()
print(acme[['Close','Change','Return','MA5']].head(7).round(4))
```

```text
             Close  Change  Return      MA5
Date
2024-03-01  100.72     NaN     NaN      NaN
2024-03-02  101.55    0.83  0.0082      NaN
2024-03-03  101.93    0.38  0.0037      NaN
2024-03-04  100.13   -1.80 -0.0177      NaN
2024-03-05   99.90   -0.23 -0.0023  100.846
2024-03-06   98.37   -1.53 -0.0153  100.376
2024-03-07   98.18   -0.19 -0.0019   99.702
```

```python
r = acme['Return'].dropna()
print("best day :", r.idxmax().date(), round(r.max()*100, 3), "%")
print("worst day:", r.idxmin().date(), round(r.min()*100, 3), "%")
print("mean %:", round(r.mean()*100, 4), "| std %:", round(r.std()*100, 4))
print("final Wealth Index:", round((1 + acme['Return'].fillna(0)).cumprod().iloc[-1]*100, 2))
print("highest close:", acme['Close'].max(), "on", acme['Close'].idxmax().date())
print("days above mean close:", int((acme['Close'] > acme['Close'].mean()).sum()), "of", len(acme))
print(acme.nlargest(3, 'Volume')[['Close','Volume']])
```

```text
best day : 2024-03-13 4.212 %
worst day: 2024-03-15 -2.113 %
mean %: 0.3893 | std %: 1.3153
final Wealth Index: 125.14
highest close: 127.53 on 2024-04-26
days above mean close: 31 of 60
             Close  Volume
Date
2024-03-10  101.00   11902
2024-04-08  115.88   11538
2024-03-01  100.72   11509
```

```python
f = acme[(acme['Close'] >= 100) & (acme['Volume'] >= 6000)].sort_values('Close', ascending=False)
print(f.shape)
print(f[['Close','Volume']].head(5))
```

```text
(41, 6)
             Close  Volume
Date
2024-04-26  127.53    7300
2024-04-27  126.14    6068
2024-04-29  126.04    7351
2024-04-24  123.68    7181
2024-04-20  122.53   10903
```

### Gap filling — 10 rows, missing prices and volumes

```python
GAPS = BASE + "Pandas exercises/02 Missing values/Exercise 3 - Stock market/Exercise 3 - stock market.csv"
g = pd.read_csv(GAPS, parse_dates=['Date']).set_index('Date')
print(g)
print(g.isna().sum())
```

```text
            ClosingPrice  Volume
Date
2024-01-01         100.0     NaN
2024-01-02           NaN  5000.0
2024-01-03         102.0     NaN
2024-01-04           NaN     0.0
2024-01-05           NaN     NaN
2024-01-06         101.0  7000.0
2024-01-07          99.0     NaN
2024-01-08           NaN  6000.0
2024-01-09          98.0     NaN
2024-01-10           NaN     NaN
ClosingPrice    5
Volume          6
dtype: int64
```

```python
g2 = g.copy()
g2['ClosingPrice'] = g2['ClosingPrice'].ffill()     # carry the last known price forward
g2['Volume']       = g2['Volume'].bfill()           # pull the next known volume backward
print(g2)
print("remaining NaN:", int(g2.isna().sum().sum()))
```

```text
            ClosingPrice  Volume
Date
2024-01-01         100.0  5000.0
2024-01-02         100.0  5000.0
2024-01-03         102.0     0.0
2024-01-04         102.0     0.0
2024-01-05         102.0  7000.0
2024-01-06         101.0  7000.0
2024-01-07          99.0  6000.0
2024-01-08          99.0  6000.0
2024-01-09          98.0     NaN
2024-01-10          98.0     NaN
remaining NaN: 2
```

**Important, and worth a mark: `bfill` alone does not finish the job.** The last two Volume values
have no *later* value to borrow, so 2 NaNs survive. State it and fix it:

```python
print(g['Volume'].bfill().ffill().tolist())
```

```text
[5000.0, 5000.0, 0.0, 0.0, 7000.0, 7000.0, 6000.0, 6000.0, 6000.0, 6000.0]
```

Symmetrically, `ffill` alone cannot fill a gap in the **first** row — here `ClosingPrice` starts with
a real value (100.0) so it works, but `ffill().bfill()` is the safe pair.

**Worked — fill strategies side by side**

```python
c = g['ClosingPrice']
print("ffill        :", c.ffill().tolist())
print("bfill        :", c.bfill().tolist())
print("ffill+bfill  :", c.ffill().bfill().tolist())
print("mean fill    :", c.fillna(round(c.mean(), 2)).tolist())
print("interpolate  :", c.interpolate().round(2).tolist())
print("ffill limit=1:", c.ffill(limit=1).tolist())
```

```text
ffill        : [100.0, 100.0, 102.0, 102.0, 102.0, 101.0, 99.0, 99.0, 98.0, 98.0]
bfill        : [100.0, 102.0, 102.0, 101.0, 101.0, 101.0, 99.0, 98.0, 98.0, nan]
ffill+bfill  : [100.0, 100.0, 102.0, 102.0, 102.0, 101.0, 99.0, 99.0, 98.0, 98.0]
mean fill    : [100.0, 100.0, 102.0, 100.0, 100.0, 101.0, 99.0, 100.0, 98.0, 100.0]
interpolate  : [100.0, 101.0, 102.0, 101.67, 101.33, 101.0, 99.0, 98.5, 98.0, 98.0]
ffill limit=1: [100.0, 100.0, 102.0, 102.0, nan, 101.0, 99.0, 99.0, 98.0, 98.0]
```

**Why the gaps matter for returns**

```python
import warnings
with warnings.catch_warnings(record=True) as wl:
    warnings.simplefilter("always")
    out = g['ClosingPrice'].pct_change()
    print("default        :", out.round(4).tolist())
    print("WARNING:", str(wl[0].message)[:110], "...")
print("fill_method=None:", g['ClosingPrice'].pct_change(fill_method=None).round(4).tolist())
print("after ffill     :", g2['ClosingPrice'].pct_change().round(4).tolist())
```

```text
default        : [nan, 0.0, 0.02, 0.0, 0.0, -0.0098, -0.0198, 0.0, -0.0101, 0.0]
WARNING: The default fill_method='pad' in Series.pct_change is deprecated and will be removed in a future version ...
fill_method=None: [nan, nan, nan, nan, nan, nan, -0.0198, nan, nan, nan]
```

```text
after ffill     : [nan, 0.0, 0.02, 0.0, 0.0, -0.0098, -0.0198, 0.0, -0.0101, 0.0]
```

Clean **first**, then compute returns. `fill_method=None` gives an almost entirely empty return
series; the default pads silently and warns.

**Variants**

| If the question says | Change to |
| --- | --- |
| "first 7 and last 7 rows" | `df.head(7)` and `df.tail(7)` |
| "sort by date ascending, show 10" | `df.sort_values('Date').head(10)` |
| "which rows have any missing value" | `df[df.isna().any(axis=1)]` |
| "count missing per row" | `df.isna().sum(axis=1)` |
| "fill with the previous value, max one day" | `df['COL'].ffill(limit=1)` |
| "fill by linear interpolation" | `df['COL'].interpolate()` (`method='time'` uses the date gaps) |
| "fill volume with 0, prices forward" | `df['Volume'].fillna(0)`, `df['Close'].ffill()` |
| "drop the incomplete days instead" | `df.dropna(subset=['ClosingPrice'])` |
| pandas 2.x deprecation | `fillna(method='ffill')` warns `Series.fillna with 'method' is deprecated...Use obj.ffill() or obj.bfill() instead.` — write `.ffill()` |

**Traps**

- `df['Close'].ffill()` does **not** write back into the frame unless you assign it. In pandas 2.x
  `df['Close'].ffill(inplace=True)` on a slice is chained assignment and may do nothing.
- `Volume` on 2024-01-04 is a real **0**, not a missing value — `isna()` correctly leaves it alone.
  Do not "fix" zeros.
- After `ffill`, consecutive equal prices produce **0.0% returns**, which deflates the standard
  deviation. Mention that when interpreting volatility on filled data.
- The 60-row ACME file cannot support `MA50` or `MA200`; say "insufficient observations" rather than
  printing a column of `NaN`.
- ACME `Close` values like `108.96000000000001` are float artefacts of the CSV, not data errors.
  `round(2)` for display.

**Drill**

1. Mean ACME Close for April 2024 only, plus the number of April rows.
2. Count ACME days with a return above +1%.

<details><summary>Answers</summary>

```python
print(round(acme.loc['2024-04','Close'].mean(), 2), len(acme.loc['2024-04']))   # 118.45 29
print(int((acme['Close'].pct_change() > 0.01).sum()))                           # 16
```

</details>

---

## P13.13 — Phrase to code lookup for time-series questions

**Exam phrasings**

- "previous day's close" / "daily change" / "daily return"
- "20-day moving average" / "rolling volatility"
- "date of the highest closing price" / "five highest"
- "growth of ₹100" / "days above its mean"

**Core idea.** Translate the sentence, then substitute your column name. `s` is a Series such as
`df['Close']`; `df` has a `DatetimeIndex`.

| The question says | You write |
| --- | --- |
| "previous day's close" | `df['Close'].shift(1)` |
| "next day's close" / "look ahead" | `df['Close'].shift(-1)` |
| "daily change" / "change from the previous day" | `df['Close'].diff()` |
| "change over the last 5 sessions" | `df['Close'].diff(5)` |
| "daily return" / "percentage change" | `df['Close'].pct_change()` |
| "return in percent" | `df['Close'].pct_change() * 100` |
| "20-day moving average" | `df['Close'].rolling(20).mean()` |
| "rolling volatility" / "rolling standard deviation" | `df['Return'].rolling(20).std()` |
| "cumulative average to date" | `df['Close'].expanding().mean()` |
| "date of the highest / lowest" | `s.idxmax()` / `s.idxmin()` |
| "the whole row of the highest" | `df.loc[df['Close'].idxmax()]` |
| "five highest" / "five lowest" | `df.nlargest(5, 'Volume')` / `df.nsmallest(5, 'Volume')` |
| "growth of ₹100" / "wealth index" | `(1 + df['Close'].pct_change().fillna(0)).cumprod() * 100` |
| "cumulative return" | `(1 + r.fillna(0)).cumprod() - 1` |
| "days above its mean" | `(s > s.mean()).sum()` |
| "observations for March 2020" | `df.loc['2020-03']` |
| "from date A to date B" | `df.loc['A':'B']` (stop included) |
| "just 2022" | `df.loc['2022']` |
| "which year / which month" | `df.index.year`, `df.index.month` |
| "which weekday" | `df.index.day_name()` |
| "average by year" | `df.groupby(df.index.year)['Close'].mean()` |
| "classify returns into intervals" | `pd.cut(r, bins=EDGES, labels=LABELS)` |
| "frequency table in class order" | `.value_counts().sort_index()` |
| "one column per stock, aligned by date" | `a.join([b, c], how='inner')` |
| "stack the stocks with a label column" | `pd.concat(parts, ignore_index=True)` after `sub['Stock'] = name` |
| "carry the last price forward" | `df['Close'].ffill()` |
| "fill a gap at the start" | `df['Close'].bfill()` |

**Traps**

- `idxmax()` returns a **label**, `argmax()` returns a **position**, `max()` returns the **value**.
- `pct_change()` is a fraction; class limits in the question are usually percentages.
- `rolling(N)` counts rows; `rolling('20D')` counts calendar days.
- Everything on this list assumes a **sorted DatetimeIndex**.

---

## Write-up answers

Reusable paragraphs. Change the numbers, keep the structure.

**Why the first return / first price change is missing (Q5, Q6).**
Both quantities compare a value with the one before it. The first observation has no predecessor, so
the difference cannot be computed and pandas stores `NaN`. For n prices you obtain n−1 returns — 1021
for Reliance's 1022 rows. This is a structural property of differencing, not missing data. We call
`dropna()` on the return Series before analysis so the reported count reflects genuine returns;
`mean()`, `std()`, `idxmax()` and `idxmin()` already ignore `NaN`.

**Why moving averages start with missing values (Q8).**
A 20-day moving average averages the current observation and the previous 19, so it is undefined until
20 observations exist. The first 19 rows are therefore `NaN`, the first 49 for MA50 and the first 199
for MA200 — always window − 1. The 20-day rolling standard deviation of returns has 20 leading `NaN`s
because the return series itself already lost its first value. `min_periods=1` would fill these gaps
with averages of fewer than 20 days, which is a different statistic and is not what was requested.

**Why the Wealth Index comparison is not like-for-like (Q7).**
Over its own period Reliance ends at 232.33, TCS at 178.15 and Infosys at 89.57, so on that basis
Reliance finished highest. However each index is computed over a **different** four-year window
(Reliance 2019–2022, TCS 2020–2023, Infosys 2021–2024), so the three numbers measure three different
market environments and cannot be ranked against each other. Rebasing all three to 100 on the first
common date (2021-01-01) and running to 2022-12-30 reverses the ranking: TCS 146.25, Reliance 109.40,
Infosys 86.60. The common-period figures are the comparable ones, and the discrepancy shows how much
the answer depends on the sample window.

**Why an outer join produces missing values (Q10).**
An outer join keeps the union of all dates, here 1557 distinct dates. Each stock trades on only a
subset — Reliance on 1022 of them, TCS on 1024, Infosys on 1026 — so 535, 533 and 531 dates
respectively have no price for that stock and become `NaN`. There are two causes: the series cover
different calendar years, and inside the overlap individual dates are absent from some sheets. The
inner join keeps only the 492 dates present in all three, running 2021-01-01 to 2022-12-30, and
contains no missing values.

**Why forward fill beats the mean for prices (Missing values, Exercise 3).**
Prices are a time series with trend and momentum, so the best estimate for a missing day is the last
observed price: forward fill preserves the level and the shape of the path. Substituting the column
mean would drag early observations up and late observations down toward a single flat number,
manufacturing artificial jumps and destroying the trend the analyst is trying to measure. Backward
fill is used where a gap sits at the **beginning** of a series and there is no earlier value to carry
forward. Note two consequences: forward-filled days show a 0% return, which slightly understates
measured volatility, and backward fill cannot fill a gap at the **end** of the series — here two
`Volume` values remain missing after `bfill()`, so `bfill().ffill()` is the complete fix.

**Stating a `pd.cut` convention (Q13).**
Classes were built with `pd.cut` and edges `[-inf, -0.02, -0.01, 0, 0.01, 0.02, inf]` on the return
expressed as a fraction, matching the stated limits of −2%, −1%, 0%, 1%, 2%. Infinite outer edges make
the first and last classes open-ended. pandas intervals are upper-limit-inclusive by default, i.e.
`(-2%, -1%]`; no observation falls exactly on a boundary, so the alternative `right=False` convention
gives identical counts. The counts sum to 509 rather than 510 for Reliance because the first day's
return is `NaN` and is not classified.

---

## Full solution — Case 1, Q2 through Q8

One continuous script. Run it top to bottom; every output above came from it.

```python
import pandas as pd
import numpy as np

W = "/Volumes/rythmn103/code/bisa_guide/Exercises/Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
NAMES = ["Reliance", "TCS", "Infosys"]

# ---- Q2 : date index + selection -------------------------------------------
S = {}
for n in NAMES:
    d = pd.read_excel(W, sheet_name=n)
    d['Date'] = pd.to_datetime(d['Date'])
    S[n] = d.set_index('Date').sort_index()

rel = S['Reliance']
print(rel.iloc[0])                                  # Q2.1
print(rel.iloc[-1])                                 # Q2.2
print(rel.iloc[10:20])                              # Q2.3
print(rel[['Close', 'Volume']])                     # Q2.4
print(rel.loc[:, 'Open':'Close'].head(15))          # Q2.5
print(rel.loc['2020-03'])                           # Q2.6
print(rel.loc['2020-03-01':'2020-03-31'])           # Q2.7

# ---- Q3 : mean filters + sorting -------------------------------------------
m, mv = rel['Close'].mean(), rel['Volume'].mean()
print(round(m, 2))                                                   # Q3.1
print(rel[rel['Close'] > m].shape)                                   # Q3.2
print(rel[(rel['Close'] > m) & (rel['Volume'] > mv)].shape)          # Q3.3
print(rel[(rel['Close'] > m) | (rel['Volume'] > mv)].shape)          # Q3.4
print(rel.sort_values('Close', ascending=False).head())              # Q3.5
print(rel.sort_values(['Volume','Close'], ascending=[False,False]).head())  # Q3.6
for n, d in S.items():                                               # repeat 1-3
    mc, mvv = d['Close'].mean(), d['Volume'].mean()
    print(n, round(mc,2), int((d['Close']>mc).sum()),
          int(((d['Close']>mc) & (d['Volume']>mvv)).sum()))

# ---- Q4 : stock profile ----------------------------------------------------
def profile(df, name="STOCK"):
    c = df['Close']
    return pd.Series({
        'First_Date': df.index[0].date(),      'Last_Date': df.index[-1].date(),
        'First_Close': round(c.iloc[0], 2),    'Last_Close': round(c.iloc[-1], 2),
        'Highest_Close': round(c.max(), 2),    'Highest_Date': c.idxmax().date(),
        'Lowest_Close': round(c.min(), 2),     'Lowest_Date': c.idxmin().date(),
        'Mean_Close': round(c.mean(), 2),      'Median_Close': round(c.median(), 2),
        'Avg_Volume': round(df['Volume'].mean(), 0),
        'Days_Above_Mean': int((c > c.mean()).sum()),
    }, name=name)

print(pd.DataFrame({n: profile(d, n) for n, d in S.items()}).to_string())
for n, d in S.items():
    print(n, d.nlargest(5, 'Volume')[['Close','Volume']], sep="\n")   # Q4.12

# ---- Q5 : previous close, price change, diff verification ------------------
for n, d in S.items():
    d['Previous_Close'] = d['Close'].shift(1)
    d['Price_Change']   = d['Close'] - d['Previous_Close']
    print(n, "diff matches shift form:", d['Price_Change'].equals(d['Close'].diff()),
          "| max abs diff:", (d['Price_Change'] - d['Close'].diff()).abs().max())
    ch = d['Price_Change']
    print("  max gain", round(ch.max(),2), ch.idxmax().date(),
          "| max loss", round(ch.min(),2), ch.idxmin().date(),
          "| mean", round(ch.mean(),4))

# ---- Q6 : returns ----------------------------------------------------------
for n, d in S.items():
    d['Return'] = d['Close'].pct_change()
    r = d['Return'].dropna()
    print(n, "mean", round(r.mean(),6), "median", round(r.median(),6), "std", round(r.std(),6),
          "| max", round(r.max(),6), r.idxmax().date(),
          "| min", round(r.min(),6), r.idxmin().date())
    print("  five highest:\n", r.sort_values(ascending=False).head(5))
    print("  five lowest :\n", r.sort_values().head(5))
# First return is NaN: no previous close exists for the first observation.

# ---- Q7 : cumulative return and Wealth Index -------------------------------
for n, d in S.items():
    d['Growth_Factor']     = 1 + d['Return'].fillna(0)
    d['Cum_Growth']        = d['Growth_Factor'].cumprod()
    d['Cumulative_Return'] = d['Cum_Growth'] - 1
    d['Wealth_Index']      = d['Cum_Growth'] * 100
    print(n, "final Wealth Index:", round(d['Wealth_Index'].iloc[-1], 2))
# Reliance 232.33 > TCS 178.15 > Infosys 89.57 over their OWN periods.
# Common period 2021-01-01..2022-12-30 reverses it: TCS 146.25 > Reliance 109.40 > Infosys 86.60.
for n, d in S.items():
    sub = d.loc['2021-01-01':'2022-12-30']
    print(n, "common-period WI:",
          round((1 + sub['Close'].pct_change().fillna(0)).cumprod().iloc[-1] * 100, 2))

# ---- Q8 : moving averages and rolling volatility ---------------------------
for n, d in S.items():
    d['MA20']       = d['Close'].rolling(20).mean()
    d['MA50']       = d['Close'].rolling(50).mean()
    d['MA200']      = d['Close'].rolling(200).mean()
    d['Roll20_Std'] = d['Return'].rolling(20).std()
    print(n, "max 20d vol:", round(d['Roll20_Std'].max(), 6),
          "on", d['Roll20_Std'].idxmax().date())                       # Q8.1
    print(d[['Close','MA20','MA50','MA200']].tail(10).round(2))        # Q8.2
    print(d[['MA20','MA50','MA200','Roll20_Std']].isna().sum().to_dict())  # Q8.3
# 19 / 49 / 199 leading NaN = window - 1; Roll20_Std has 20 because Return itself starts with NaN.
```

---

## Chapter cheat sheet

**The pipeline — write this once, use it for every stock.**

```python
import pandas as pd
import numpy as np

def prepare(df, date_col="Date", price_col="Close"):
    d = df.copy()
    d[date_col] = pd.to_datetime(d[date_col])          # dayfirst=True if DD-MM-YYYY
    d = d.set_index(date_col).sort_index()
    d["Previous_Close"]    = d[price_col].shift(1)
    d["Price_Change"]      = d[price_col].diff()
    d["Return"]            = d[price_col].pct_change()
    d["MA20"]              = d[price_col].rolling(20).mean()
    d["MA50"]              = d[price_col].rolling(50).mean()
    d["MA200"]             = d[price_col].rolling(200).mean()
    d["Roll20_Std"]        = d["Return"].rolling(20).std()
    d["Cum_Growth"]        = (1 + d["Return"].fillna(0)).cumprod()
    d["Cumulative_Return"] = d["Cum_Growth"] - 1
    d["Wealth_Index"]      = d["Cum_Growth"] * 100
    return d

NAMES  = ["Reliance", "TCS", "Infosys"]
stocks = {n: prepare(pd.read_excel(W, sheet_name=n)) for n in NAMES}

# wide, aligned by date
wide = pd.concat([d["Close"].rename(n) for n, d in stocks.items()], axis=1, join="inner")

# long / tidy, with a Stock label
long = pd.concat([d.loc["2021-01-01":"2022-12-30"].assign(Stock=n).reset_index()
                  for n, d in stocks.items()], ignore_index=True)
```

**Phrase → code.**

| The question says | You write |
| --- | --- |
| "make Date the index" | `df = df.set_index('Date').sort_index()` |
| "observations for March 2020" | `df.loc['2020-03']` |
| "from 1 Mar to 31 Mar 2020" | `df.loc['2020-03-01':'2020-03-31']` (stop included) |
| "only 2022" | `df.loc['2022']` |
| "split into 2019–20 and 2021–22" | `df[df.index.year.isin([2019,2020])]` |
| "which year / month / weekday / quarter" | `df.index.year` / `.month` / `.day_name()` / `.quarter` |
| "average by year" | `df.groupby(df.index.year)['Close'].mean()` |
| "days above its mean" | `(s > s.mean()).sum()` |
| "both conditions" / "either" | `df[(A) & (B)]` / `df[(A) \| (B)]` |
| "previous day's close" | `df['Close'].shift(1)` |
| "daily change" | `df['Close'].diff()` — identical to `Close - Close.shift(1)` |
| "change over 5 days" | `df['Close'].diff(5)` |
| "daily return" | `df['Close'].pct_change()` (a **fraction**) |
| "date of the highest / lowest" | `s.idxmax()` / `s.idxmin()` (returns the index **label**) |
| "five highest" | `df.nlargest(5, 'Volume')` = `df.sort_values('Volume', ascending=False).head(5)` |
| "growth of ₹100" | `(1 + r.fillna(0)).cumprod() * 100` |
| "cumulative return" | `(1 + r.fillna(0)).cumprod() - 1` |
| "20-day moving average" | `df['Close'].rolling(20).mean()` — first 19 are NaN |
| "rolling volatility" | `df['Return'].rolling(20).std()` — first 20 are NaN |
| "cumulative-to-date statistic" | `df['Close'].expanding().mean()` |
| "classify returns into intervals" | `pd.cut(r, [-np.inf,-0.02,-0.01,0,0.01,0.02,np.inf], labels=LABELS)` |
| "frequency table in class order" | `.value_counts().sort_index()` |
| "cumulative frequency" | `tab['Frequency'].cumsum()` |
| "crosstab of stock by interval" | `pd.crosstab(long['Stock'], long['Return_Interval'])` |
| "one column per stock by date" | `a.join([b, c], how='inner')` — rename columns first |
| "carry the last price forward" | `df['Close'].ffill()` (then `.bfill()` for leading gaps) |

**Numbers to recognise in this workbook** (a fast sanity check that you loaded the right thing):

| | Reliance | TCS | Infosys |
| --- | --- | --- | --- |
| Rows | 1022 | 1024 | 1026 |
| Period | 2019-01-01→2022-12-30 | 2020-01-01→2023-12-29 | 2021-01-01→2024-12-31 |
| Mean Close | 2106.67 | 3270.40 | 1285.17 |
| Highest Close (date) | 2907.39 (2021-09-23) | 4312.09 (2022-09-13) | 1608.65 (2024-06-25) |
| Days above mean Close | 548 | 649 | 581 |
| Mean daily return | +0.0911% | +0.0640% | −0.0023% |
| Max 20-day vol (date) | 1.8149% (2021-06-07) | 1.8237% (2023-02-02) | 1.9689% (2021-08-06) |
| Final Wealth Index, own period | **232.33** | 178.15 | 89.57 |
| Final Wealth Index, common period | 109.40 | **146.25** | 86.60 |

Three-way inner join = **492** dates, 2021-01-01 → 2022-12-30. Outer join = **1557** dates with
535 / 533 / 531 missing values.
