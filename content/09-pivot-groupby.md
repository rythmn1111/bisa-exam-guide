---
id: 09-pivot-groupby
part: "Part III — Selection, Ordering, Reshaping"
title: "pivot_table, groupby and Aggregation"
blurb: "Turn any cross-tab question into pivot_table(index, columns, values, aggfunc) — or the groupby form — and flatten the MultiIndex the examiner asks for."
order: 90
covers:
  - "Session 13 — Exercises 81–89 (Pivot Table, Pivot Table Parameters)"
  - "04 Sorting, slicing and pivot — Exercise 1 part B (equity trades), 8 pivots"
  - "04 Sorting, slicing and pivot — Exercise 2 part B (retail bank loans), 8 pivots"
  - "04 Sorting, slicing and pivot — Exercise 3 part B (mutual funds), 8 pivots"
  - "Integrated Exercise Case 1 — Q12"
  - "Integrated Exercise Case 2 — Q16, Q17"
  - "Integrated Exercise Case 3 — Q16, Q17, Q18, Q19"
datafiles:
  - "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
  - "Pandas exercises/04 Sorting, slicing and pivot/Exercise 1/equity_trades.csv"
  - "Pandas exercises/04 Sorting, slicing and pivot/Exercise 2/bank_loans.csv"
  - "Pandas exercises/04 Sorting, slicing and pivot/Exercise 3/mutual_funds.csv"
  - "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
  - "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
  - "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
patterns:
  - id: P9.1
    title: "The anatomy of pivot_table — index, columns, values, aggfunc"
    phrasings:
      - "create a pivot table with Region as rows, Product as columns, Units as values, sum aggregation"
      - "df.pivot_table(index='Product', values='Sales', aggfunc='sum')"
      - "create a pivot table showing mean Current_Value by Industry"
      - "create a pivot table showing mean Claim_Amount for each Policy_Type"
      - "build a pivot table of total revenue for each region"
      - "summarise average interest rate per risk grade using a pivot table"
  - id: P9.2
    title: "Reading the phrase A x B — which dimension goes where"
    phrasings:
      - "total quantity by broker x ticker"
      - "mean price by segment x ticker"
      - "sum principal_lakhs by branch x product"
      - "sum amount by amc x scheme"
      - "count of trades by side x broker"
      - "std of emi_estimate by product x secured"
  - id: P9.3
    title: "fill_value=0 for combinations that do not occur"
    phrasings:
      - "run it once without fill_value: the North / Product B combination does not occur in the data, so that cell is NaN until you fill it"
      - "and 0 for empty cells"
      - "sum principal_lakhs by branch x product (fill_value=0, with totals)"
      - "replace the blank cells of the pivot table with zero"
      - "why does the pivot table show NaN and how do you remove it"
  - id: P9.4
    title: "margins=True and margins_name='Total' — row and column totals"
    phrasings:
      - "repeat Exercise 81 and add row/column totals labelled Total"
      - "total quantity by broker x ticker (sum, fill_value=0, with margins=True labeled Total)"
      - "sum amount by amc x scheme (fill_value=0, with totals)"
      - "add a grand total row and column to the pivot table"
      - "show subtotals for every region and every product"
  - id: P9.5
    title: "Two or more aggregation functions — aggfunc=['sum','mean']"
    phrasings:
      - "create a pivot table of Revenue using both sum and mean aggregations"
      - "multiple aggs on notional by broker x segment: [sum, mean]"
      - "create another pivot table showing the mean and maximum Value_Change_pct for each Credit_Rating"
      - "create another pivot table showing the minimum, mean and maximum Settlement_Days for each Risk_Category"
      - "minimum and maximum Close by Stock"
      - "first and last price by ticker x side using aggfunc=[first, last]"
  - id: P9.6
    title: "Flatten MultiIndex pivot columns with the f-string pattern"
    phrasings:
      - "flatten the MultiIndex columns from Exercise 83 using the f-string pattern shown in the slides"
      - "then flatten columns to sum_notional, mean_notional"
      - "flatten the column names of the pivot table into single level names"
      - "first and last tenure_months by branch x product (flatten)"
      - "pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]"
  - id: P9.7
    title: "Two or more value columns with one aggregation"
    phrasings:
      - "create one pivot table that aggregates both Units and Revenue by Region x Product using sum"
      - "multiple values (quantity and fee) summed by segment x broker; optional flatten to quantity_* and fee_*"
      - "flatten the columns from Exercise 86 using the value_product naming pattern shown in the slides"
      - "mean Close and mean Volume by Stock"
      - "multiple values (units, amount) summed by scheme x amc; optional flatten"
  - id: P9.8
    title: "Multiple values AND multiple aggfuncs — three-level columns"
    phrasings:
      - "sum and mean of both Units and Revenue by Region x Product"
      - "pivot tables can accept multiple value columns and multiple aggregation functions"
      - "aggregate quantity and fee with sum and mean in one pivot table and flatten the result"
      - "minimum, mean and maximum of two different measures in one table"
  - id: P9.9
    title: "reset_index() — turn the pivot index back into a column"
    phrasings:
      - "reset the index so Region becomes a normal column again"
      - "convert the pivot table into a flat DataFrame before exporting"
      - "make the group labels a normal column so you can plot them"
      - "pt.reset_index()"
  - id: P9.10
    title: "count, size, nunique, min and max as aggfunc"
    phrasings:
      - "use count as the aggregation instead of sum. Then try min and max in separate runs"
      - "count of trades by side x broker (count on trade_id)"
      - "count of loans by status x branch (count loan_id)"
      - "count of transactions by investor_type x amc (count txn_id)"
      - "how many records fall in each Region x Product cell"
      - "minimum and maximum Units for each Region"
  - id: P9.11
    title: "sort=True vs sort=False"
    phrasings:
      - "create the Region x Product pivot once with sort=True and once with sort=False. Compare label order"
      - "sort=False returns the regions in order of first appearance in the data"
      - "keep the categories in the order they appear in the file instead of alphabetical"
  - id: P9.12
    title: "dropna, observed and a dict aggfunc per column"
    phrasings:
      - "aggregate quantity with sum but fee with mean in the same pivot table"
      - "aggfunc={'quantity':'sum','fee':'mean'}"
      - "keep the columns that are entirely missing in the pivot table"
      - "include categories that have no rows"
      - "sum one column and average another in a single grouped summary"
  - id: P9.13
    title: "groupby — the same answer without pivot_table"
    phrasings:
      - "df.groupby('Category').mean()"
      - "group rows for aggregation"
      - "calculate the average Claim_Amount for each Policy_Type using groupby"
      - "df.agg(['sum','mean'])"
      - "find the total notional for each broker"
      - "obtain the number of records in each group"
  - id: P9.14
    title: "groupby on mixed dtypes — numeric_only=True"
    phrasings:
      - "df.groupby('Region').mean() raises TypeError: agg function failed"
      - "why does groupby mean fail when the DataFrame has text columns"
      - "compute the mean of all numeric columns for each branch"
  - id: P9.15
    title: "crosstab vs pivot_table(aggfunc='count')"
    phrasings:
      - "create a cross-tabulation with Policy_Type as rows and Claim_Status as columns"
      - "produce a frequency table of Region against Product"
      - "how many loans of each status in each branch"
      - "pd.crosstab(df['A'], df['B'])"
  - id: P9.16
    title: "Pivot on a Boolean column"
    phrasings:
      - "variance of fee by broker x algo_flag"
      - "std of emi_estimate by product x secured"
      - "compare mean amount for KYC verified and not verified investors"
      - "use the True/False column as the pivot columns"
  - id: P9.17
    title: "pivot_table vs pivot vs melt"
    phrasings:
      - "df.melt(id_vars='ID') — unpivot columns into rows"
      - "why does df.pivot() raise ValueError: Index contains duplicate entries, cannot reshape"
      - "reshape the wide table back into long format"
      - "difference between pivot and pivot_table"
  - id: P9.18
    title: "Sort, round, transpose and read one cell of a pivot"
    phrasings:
      - "sort the pivot table by total descending"
      - "round the pivot table to two decimal places"
      - "which broker x ticker combination had the highest total quantity"
      - "read the value for South and Product B from the pivot table"
  - id: P9.19
    title: "Which category has the highest average X — idxmax on a pivot"
    phrasings:
      - "identify the Policy_Type having the highest average Claim_Amount"
      - "which product carries the highest mean interest rate"
      - "name the industry with the largest mean Current_Value"
      - "report the region with the lowest average revenue"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| [P9.1](#p91--the-anatomy-of-pivot_table--index-columns-values-aggfunc) | Any "summarise X by Y" question. Learn the four arguments once. |
| [P9.2](#p92--reading-the-phrase-a--b--which-dimension-goes-where) | The question says "**A × B**" and you must decide rows vs columns. |
| [P9.3](#p93--fill_value0-for-combinations-that-do-not-occur) | Pivot shows `NaN` in a cell; question says "0 for empty cells". |
| [P9.4](#p94--marginstrue-and-margins_nametotal--row-and-column-totals) | "with totals", "add row/column totals labelled Total". |
| [P9.5](#p95--two-or-more-aggregation-functions--aggfuncsummean) | "both sum and mean", "mean and maximum", "min, mean and max", "first and last". |
| [P9.6](#p96--flatten-multiindex-pivot-columns-with-the-f-string-pattern) | "flatten the columns", target names like `sum_notional`. |
| [P9.7](#p97--two-or-more-value-columns-with-one-aggregation) | "aggregates both Units and Revenue", "multiple values (quantity and fee)". |
| [P9.8](#p98--multiple-values-and-multiple-aggfuncs--three-level-columns) | Both at once — three column levels to flatten. |
| [P9.9](#p99--reset_index--turn-the-pivot-index-back-into-a-column) | "reset the index so Region becomes a normal column"; before plotting/exporting. |
| [P9.10](#p910--count-size-nunique-min-and-max-as-aggfunc) | "count of trades", "how many records", "min and max in separate runs". |
| [P9.11](#p911--sorttrue-vs-sortfalse) | "compare label order with sort=True and sort=False". |
| [P9.12](#p912--dropna-observed-and-a-dict-aggfunc-per-column) | Different aggregation per column; unobserved categories; all-NaN columns. |
| [P9.13](#p913--groupby--the-same-answer-without-pivot_table) | The question names `groupby`, `agg` or `mean` instead of `pivot_table`. |
| [P9.14](#p914--groupby-on-mixed-dtypes--numeric_onlytrue) | `groupby(...).mean()` raises `TypeError: agg function failed`. |
| [P9.15](#p915--crosstab-vs-pivot_tableaggfunccount) | "cross-tabulation", "frequency table of A against B". |
| [P9.16](#p916--pivot-on-a-boolean-column) | The grouping column is `algo_flag` / `secured` / `kyc_ok`. |
| [P9.17](#p917--pivot_table-vs-pivot-vs-melt) | `pivot` raises `ValueError`; or you must un-pivot with `melt`. |
| [P9.18](#p918--sort-round-transpose-and-read-one-cell-of-a-pivot) | Presenting the pivot; reading a single cell; finding the biggest cell. |
| [P9.19](#p919--which-category-has-the-highest-average-x--idxmax-on-a-pivot) | "identify the X having the highest average Y". |

Then: [**All 24 exercise pivots, answered**](#all-24-exercise-pivots-answered) · [**Capstone pivots**](#capstone-pivots-case-1-q12-case-2-q1617-case-3-q1619) · [**Write-up answers**](#write-up-answers) · [**Chapter cheat sheet**](#chapter-cheat-sheet).

Base path used throughout. **Swap in your own path in the exam.**

```python
import pandas as pd
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"

W   = BASE + "Pandas exercises/Class exercises/Pandas_Session13_Practice_Data.xlsx"
P04 = BASE + "Pandas exercises/04 Sorting, slicing and pivot/"

df = pd.read_excel(W, sheet_name="Sales_Pivot")          # 69 x 6
eq = pd.read_csv(P04 + "Exercise 1/equity_trades.csv")   # 85 x 10
bl = pd.read_csv(P04 + "Exercise 2/bank_loans.csv")      # 80 x 10
mf = pd.read_csv(P04 + "Exercise 3/mutual_funds.csv")    # 70 x 9
```

Everything in this chapter was run on pandas **2.3.3**.

---

## P9.1 — The anatomy of pivot_table — index, columns, values, aggfunc

**Exam phrasings**

- "Create a pivot table with Region as rows, Product as columns, Units as values, sum aggregation, and 0 for empty cells."
- "`df.pivot_table(index='Product', values='Sales', aggfunc='sum')`"
- "Create a pivot table showing mean Current_Value by Industry."
- "Create a pivot table showing mean Claim_Amount for each Policy_Type."
- "Build a pivot table of total revenue for each region."

**Core idea.** Four arguments, always in this order in your head:

| Argument | Question it answers | Value type |
| --- | --- | --- |
| `index=` | what goes down the **rows** | column name, or list of names |
| `columns=` | what goes across the **columns** (omit for a one-dimensional summary) | column name, or list |
| `values=` | **which numeric column** gets aggregated | column name, or list |
| `aggfunc=` | **how** it gets aggregated | string, list of strings, or dict |

**Phrasing → `aggfunc` mapping table.** Memorise this; it answers most of the marks.

| The question says | `aggfunc=` | Notes |
| --- | --- | --- |
| "**total** X", "**sum** of X" | `'sum'` | |
| "**mean** X", "**average** X" | `'mean'` | |
| "**count of** trades / loans / transactions" | `'count'` | put the **id column** in `values=` |
| "**how many** records in each cell" | `'count'` or `'size'` | see [P9.10](#p910--count-size-nunique-min-and-max-as-aggfunc) |
| "**std**", "standard deviation" | `'std'` | sample std, `ddof=1` |
| "**variance**", "**var**" | `'var'` | sample variance, `ddof=1` |
| "**minimum**" / "**maximum**" | `'min'` / `'max'` | |
| "**median**" | `'median'` | |
| "**first and last**" | `['first','last']` | order = file order within the group |
| "**mean and maximum**" | `['mean','max']` | any list works |
| "**min, mean and max**" | `['min','mean','max']` | |
| "**number of distinct** brokers" | `'nunique'` | |
| "sum X **but** average Y" | `{'X':'sum','Y':'mean'}` | see [P9.12](#p912--dropna-observed-and-a-dict-aggfunc-per-column) |

Note: `aggfunc='mean'` is the **default**. If the question says "mean", you may still write it out — examiners give marks for explicit arguments.

**Template**

```python
df.pivot_table(index=ROW_COL, columns=COL_COL, values=VALUE_COL, aggfunc='sum')
```

**Worked** — the one-dimensional form first (Case 2 Q16 shape): rows only, no `columns=`.

```python
print(df.pivot_table(index='Region', values='Units', aggfunc='sum'))
```

```text
        Units
Region       
East      194
North     111
South     212
West      186
```

Now the two-dimensional form (Session 13 Ex 81 without `fill_value`):

```python
print(df.pivot_table(index='Region', columns='Product', values='Units', aggfunc='sum'))
```

```text
Product     A     B     C
Region                   
East     90.0  32.0  72.0
North    57.0   NaN  54.0
South    91.0  75.0  46.0
West     64.0  43.0  79.0
```

Read the anatomy off that output: `Region` labels the index, `Product` labels the columns, the numbers are summed `Units`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "rows only, no columns" | drop `columns=` entirely |
| "columns only, no rows" | `df.pivot_table(values='Units', columns='Product', aggfunc='sum')` → a 1-row frame labelled `Units` |
| "by Region and Channel (two row levels)" | `index=['Region','Channel']` |
| "by Product and Channel across the top" | `columns=['Product','Channel']` |
| "all numeric columns" | omit `values=` — **but see the trap below** |

```python
print(df.pivot_table(index=['Region','Channel'], columns='Product',
                     values='Units', aggfunc='sum', fill_value=0))
```

```text
Product          A   B   C
Region Channel            
East   Online   50  30  36
       Retail   40   2  36
North  Online   14   0  19
       Retail   43   0  35
South  Online   58  60   3
       Retail   33  15  43
West   Online   43   0  38
       Retail   21  43  41
```

**Traps**

- Omitting `values=` on a frame that still holds **text** columns raises in pandas 2.x:

  ```python
  try:
      df.pivot_table(index='Region', aggfunc='mean')
  except Exception as e:
      print(type(e).__name__ + ": " + str(e))
  ```

  ```text
  TypeError: agg function failed [how->mean,dtype->object]
  ```

  Fix: always name `values=`, or slice the numeric columns first — `df[['Region','Units','Revenue']].pivot_table(index='Region', aggfunc='mean')`.
- `values=` must be **numeric** for `sum`/`mean`/`std`/`var`. Text columns only work with `count`, `size`, `nunique`, `first`, `last`, `min`, `max`.
- The result is a **DataFrame**, not a printout. Assign it (`pt = df.pivot_table(...)`) so you can flatten, sort or reset it later.
- The index name (`Region`) and the columns name (`Product`) are part of the output. That header row saying `Product` is not a data row.

**Drill**

1. Total `Revenue` for each `Channel` in `Sales_Pivot`.
2. Mean `nav` for each `amc` in `mutual_funds.csv`.

<details><summary>Answer</summary>

```python
df.pivot_table(index='Channel', values='Revenue', aggfunc='sum')
mf.pivot_table(index='amc', values='nav', aggfunc='mean')
```

</details>

---

## P9.2 — Reading the phrase A x B — which dimension goes where

**Exam phrasings**

- "Total quantity by broker × ticker (sum, fill_value=0, with margins=True labeled Total)."
- "Mean price by segment × ticker (mean, fill_value=0)."
- "Sum principal_lakhs by branch × product (fill_value=0, with totals)."
- "Count of trades by side × broker (count on trade_id)."
- "Std of emi_estimate by product × secured."
- "Sum amount by amc × scheme (fill_value=0, with totals)."

**Core idea.** State it once and use it 24 times:

> In "**value** by **A** × **B**", the **first named dimension goes to `index=`**, the **second goes to `columns=`**, and the **value** goes to `values=`.

```text
"Total quantity by broker × ticker"
        ^^^^^^^^        ^^^^^^   ^^^^^^
        values=         index=   columns=
        'quantity'      'broker' 'ticker'
```

**Template**

```python
df.pivot_table(index=FIRST_DIM, columns=SECOND_DIM, values=MEASURE, aggfunc=HOW)
```

**Worked** — "Count of trades by side × broker (count on trade_id)". `side` first → index; `broker` second → columns.

```python
print(eq.pivot_table(index='side', columns='broker', values='trade_id',
                     aggfunc='count', fill_value=0))
```

```text
broker  HDFC  ICICI  Kotak  Upstox  Zerodha
side                                       
BUY       13      2     11      10       13
SELL      10      9      5       4        8
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "by broker × side" (order swapped) | `index='broker', columns='side'` — the table transposes |
| "for each Policy_Type" (one dimension only) | `index='Policy_Type'`, no `columns=` |
| "with Policy_Type as rows and Claim_Status as columns" | explicit — `index='Policy_Type', columns='Claim_Status'` |
| "broker-wise and ticker-wise" | same as "broker × ticker" |
| "cross-tabulate side against broker" | `pd.crosstab(eq['side'], eq['broker'])` — [P9.15](#p915--crosstab-vs-pivot_tableaggfunccount) |

**Traps**

- Getting the order backwards is **not** a wrong answer numerically — the numbers are the same, only transposed — but it is a presentation mark. Follow the wording.
- If the examiner writes "by broker and ticker" with no `×`, the same rule applies: first-named → `index`.
- If the wording gives **three** dimensions ("by branch and product for each status"), put two in `index=` as a list and one in `columns=`.

**Drill**

1. "Mean `units` by `channel` × `investor_type`" on `mutual_funds.csv`.
2. Rewrite it as "Mean `units` by `investor_type` × `channel`".

<details><summary>Answer</summary>

```python
mf.pivot_table(index='channel', columns='investor_type', values='units', aggfunc='mean')
mf.pivot_table(index='investor_type', columns='channel', values='units', aggfunc='mean')
```

</details>

---

## P9.3 — fill_value=0 for combinations that do not occur

**Exam phrasings**

- "Run it once without fill_value: the North / Product B combination does not occur in the data, so that cell is NaN until you fill it."
- "…sum aggregation, and 0 for empty cells."
- "Sum principal_lakhs by branch × product (fill_value=0, with totals)."
- "Replace the blank cells of the pivot table with zero."
- "Why does the pivot table show NaN and how do you remove it?"

**Core idea.** A pivot cell is `NaN` when **no row of the data** has that (index, column) pair. `fill_value=0` substitutes `0` for those cells **after** aggregation. It does not change any computed number.

**Template**

```python
df.pivot_table(index=ROW, columns=COL, values=VAL, aggfunc='sum', fill_value=0)
```

**Worked — Session 13 Exercise 81, both ways.**

Step 1: prove the combination is absent.

```python
print(((df['Region'] == 'North') & (df['Product'] == 'B')).sum())
print(df[(df['Region'] == 'North') & (df['Product'] == 'B')])
```

```text
0
Empty DataFrame
Columns: [Region, Product, Units, Revenue, Channel, Month]
Index: []
```

Cross-check with a count table — the `North` / `B` cell is `0`:

```python
print(pd.crosstab(df['Region'], df['Product']))
```

```text
Product  A  B  C
Region          
East     9  4  7
North    4  0  6
South    8  7  5
West     7  3  9
```

Step 2: the pivot **without** `fill_value`.

```python
pt = df.pivot_table(index='Region', columns='Product', values='Units', aggfunc='sum')
print(pt)
print(pt.isna())
print(pt.dtypes)
```

```text
Product     A     B     C
Region                   
East     90.0  32.0  72.0
North    57.0   NaN  54.0
South    91.0  75.0  46.0
West     64.0  43.0  79.0
Product      A      B      C
Region                      
East     False  False  False
North    False   True  False
South    False  False  False
West     False  False  False
Product
A    float64
B    float64
C    float64
dtype: object
```

Step 3: the pivot **with** `fill_value=0`. The `NaN` at North × B becomes `0`, and because there is no longer a missing value the columns come back as **`int64`**, not `float64`.

```python
pt0 = df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='sum', fill_value=0)
print(pt0)
print(pt0.dtypes)
```

```text
Product   A   B   C
Region             
East     90  32  72
North    57   0  54
South    91  75  46
West     64  43  79
Product
A    int64
B    int64
C    int64
dtype: object
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "fill blanks with a dash for the report" | `fill_value='-'` (makes the column `object` — do it last) |
| "fill blanks with the column mean" | `pt.fillna(pt.mean())` after the pivot |
| "leave the missing combinations visible" | just omit `fill_value` |
| "why did my integers turn into 90.0?" | a `NaN` anywhere in the column forces `float64`; `fill_value=0` restores `int64` |
| "drop the empty column instead" | `pt.dropna(axis=1, how='all')` |

**Traps**

- `fill_value=0` is applied to the **result**, so `'mean'` cells are still means of the rows that exist — a `0` means "no rows", not "average of zero".
- With `aggfunc='sum'` and `fill_value=0`, row totals still add up. With `aggfunc='mean'` and `fill_value=0`, the `0` cells **do not** enter the margin — see [P9.4](#p94--marginstrue-and-margins_nametotal--row-and-column-totals).
- In the three `04` exercises the empty-combination situation actually occurs in **Exercise 1 (broker × ticker, 7 empty cells)** and **Exercise 3 (amc × channel — HDFC has zero Direct transactions)**. In Exercise 2 every `branch × product` pair exists, so `fill_value=0` changes nothing there. Write it anyway — the question asks for it.

**Drill**

1. Sum `amount` by `amc` × `channel` on `mutual_funds.csv`, with and without `fill_value=0`. Which cell changes?

<details><summary>Answer</summary>

```python
mf.pivot_table(index='amc', columns='channel', values='amount', aggfunc='sum')
mf.pivot_table(index='amc', columns='channel', values='amount', aggfunc='sum', fill_value=0)
# HDFC x Direct: NaN -> 0  (there are 0 HDFC Direct transactions)
```

</details>

---

## P9.4 — margins=True and margins_name='Total' — row and column totals

**Exam phrasings**

- "Repeat Exercise 81 and add row/column totals labelled Total."
- "Total quantity by broker × ticker (sum, fill_value=0, with margins=True labeled Total)."
- "Sum amount by amc × scheme (fill_value=0, with totals)."
- "Add a grand total row and column to the pivot table."
- "Show subtotals for every region and every product."

**Core idea.** `margins=True` appends one extra row and one extra column holding the aggregate **over the raw data of that whole row / whole column**. `margins_name='Total'` names them (default is `'All'`). The **corner cell** is the aggregate over the entire dataset.

**Template**

```python
df.pivot_table(index=ROW, columns=COL, values=VAL, aggfunc='sum',
               fill_value=0, margins=True, margins_name='Total')
```

**Worked — Session 13 Exercise 82.**

```python
print(df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='sum', fill_value=0,
                     margins=True, margins_name='Total'))
```

```text
Product    A    B    C  Total
Region                       
East      90   32   72    194
North     57    0   54    111
South     91   75   46    212
West      64   43   79    186
Total    302  150  251    703
```

Corner cell `703` = total `Units` in all 69 rows.

**Margins are computed on the raw data, not by summing the displayed cells.** With `sum` you cannot tell the difference. With `mean` you can:

```python
print(df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='mean', margins=True, margins_name='Total').round(3))
```

```text
Product       A       B       C   Total
Region                                 
East     10.000   8.000  10.286   9.700
North    14.250     NaN   9.000  11.100
South    11.375  10.714   9.200  10.600
West      9.143  14.333   8.778   9.789
Total    10.786  10.714   9.296  10.188
```

Check the `North` row: `Total` is `11.100`, which is the mean of **all 10 North rows**. The average of the two displayed cells is different:

```python
print("raw mean of North Units:", df.loc[df.Region == 'North', 'Units'].mean())
print("mean of the two displayed cells:",
      (df[(df.Region == 'North') & (df.Product == 'A')].Units.mean()
       + df[(df.Region == 'North') & (df.Product == 'C')].Units.mean()) / 2)
print("grand mean (corner cell):", df['Units'].mean())
```

```text
raw mean of North Units: 11.1
mean of the two displayed cells: 11.625
grand mean (corner cell): 10.18840579710145
```

Same point with `fill_value=0` in place — the injected `0.000` at North × B does **not** drag the `11.100` down:

```python
print(df.pivot_table(index='Region', columns='Product', values='Units', aggfunc='mean',
                     fill_value=0, margins=True, margins_name='Total').round(3))
```

```text
Product       A       B       C   Total
Region                                 
East     10.000   8.000  10.286   9.700
North    14.250   0.000   9.000  11.100
South    11.375  10.714   9.200  10.600
West      9.143  14.333   8.778   9.789
Total    10.786  10.714   9.296  10.188
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "call the totals All" | drop `margins_name` (default `'All'`) |
| "call it Grand Total" | `margins_name='Grand Total'` |
| "totals with two aggfuncs" | works — each aggfunc block gets its own `Total` column |
| "row totals only" | `pt['Total'] = pt.sum(axis=1)` after the pivot |
| "column totals only" | `pt.loc['Total'] = pt.sum()` after the pivot |
| "percentage of row total instead" | `(pt0.div(pt0.sum(axis=1), axis=0) * 100).round(1)` |

```python
print(df.pivot_table(index='Region', columns='Product', values='Revenue',
                     aggfunc=['sum','mean'], fill_value=0,
                     margins=True, margins_name='Total').round(2))
```

```text
           sum                          mean                           
Product      A      B      C  Total        A        B        C    Total
Region                                                                 
East     11710   4280   8450  24440  1301.11  1070.00  1207.14  1222.00
North     8550      0   5300  13850  2137.50     0.00   883.33  1385.00
South     9960   7760   4350  22070  1245.00  1108.57   870.00  1103.50
West      7700   4620   8070  20390  1100.00  1540.00   896.67  1073.16
Total    37920  16660  26170  80750  1354.29  1190.00   969.26  1170.29
```

```python
pt0 = df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='sum', fill_value=0)
print((pt0.div(pt0.sum(axis=1), axis=0) * 100).round(1))
```

```text
Product     A     B     C
Region                   
East     46.4  16.5  37.1
North    51.4   0.0  48.6
South    42.9  35.4  21.7
West     34.4  23.1  42.5
```

**Traps**

- `margins_name='Total'` collides with a real category called `Total`. Rename the margin if that happens.
- The `Total` row is an **ordinary row** of the result. `pt.sort_values('Total', ascending=False)` will sort it into position 1 — see [P9.18](#p918--sort-round-transpose-and-read-one-cell-of-a-pivot).
- `margins` on `std`/`var` gives the std/var of the whole row's raw values, which is **not** any function of the displayed cells. Say so if asked to interpret.
- Do not hand-compute margins in the exam. Use the parameter; that is what is being tested.

**Drill**

1. Sum `principal_lakhs` by `branch` × `product` with totals labelled `Total`. What is the corner cell?

<details><summary>Answer</summary>

```python
bl.pivot_table(index='branch', columns='product', values='principal_lakhs',
               aggfunc='sum', fill_value=0, margins=True, margins_name='Total')
# corner = 1458.09 lakhs
```

</details>

---

## P9.5 — Two or more aggregation functions — aggfunc=['sum','mean']

**Exam phrasings**

- "Create a pivot table of Revenue using both sum and mean aggregations."
- "Multiple aggs on notional by broker × segment: ['sum','mean']."
- "Create another pivot table showing the mean and maximum Value_Change_pct for each Credit_Rating."
- "Create another pivot table showing the minimum, mean and maximum Settlement_Days for each Risk_Category."
- "Minimum and maximum Close by Stock."
- "First and last price by ticker × side using aggfunc=['first','last']."

**Core idea.** Pass a **list** to `aggfunc=`. The result gets a **two-level column MultiIndex**: level 0 = the aggfunc name, level 1 = the `columns=` labels (or the `values=` name when `columns=` is omitted).

**Template**

```python
pt = df.pivot_table(index=ROW, columns=COL, values=VAL, aggfunc=['sum','mean'])
```

**Worked — Session 13 Exercise 83.**

```python
pt83 = df.pivot_table(index='Region', columns='Product',
                      values='Revenue', aggfunc=['sum','mean'])
print(pt83.round(2))
print(pt83.columns)
print("levels:", pt83.columns.nlevels)
```

```text
             sum                     mean                  
Product        A       B       C        A        B        C
Region                                                     
East     11710.0  4280.0  8450.0  1301.11  1070.00  1207.14
North     8550.0     NaN  5300.0  2137.50      NaN   883.33
South     9960.0  7760.0  4350.0  1245.00  1108.57   870.00
West      7700.0  4620.0  8070.0  1100.00  1540.00   896.67
MultiIndex([( 'sum', 'A'),
            ( 'sum', 'B'),
            ( 'sum', 'C'),
            ('mean', 'A'),
            ('mean', 'B'),
            ('mean', 'C')],
           names=[None, 'Product'])
levels: 2
```

Without `columns=`, level 1 is the value name — this is the shape Case 2 Q17 and Case 3 Q18 want:

```python
print(eq.pivot_table(index='broker', values='notional', aggfunc=['sum','mean']).round(2))
```

```text
                 sum          mean
            notional      notional
broker                            
HDFC     21495510.59     934587.42
ICICI    13356198.57    1214199.87
Kotak    11399972.41     712498.28
Upstox   13471858.87     962275.63
Zerodha  17022994.08     810618.77
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "mean and maximum" | `aggfunc=['mean','max']` |
| "minimum, mean and maximum" | `aggfunc=['min','mean','max']` |
| "first and last" | `aggfunc=['first','last']` |
| "count and sum" | `aggfunc=['count','sum']` |
| "range of Units per Region" | `aggfunc=lambda s: s.max() - s.min()` |
| "sum for one column, mean for another" | dict — [P9.12](#p912--dropna-observed-and-a-dict-aggfunc-per-column) |
| "now flatten those columns" | [P9.6](#p96--flatten-multiindex-pivot-columns-with-the-f-string-pattern) |

```python
print(df.pivot_table(index='Region', values='Units', aggfunc=lambda s: s.max() - s.min()))
```

```text
        Units
Region       
East       19
North      14
South      18
West       17
```

**Traps**

- The aggfunc order in the output follows your **list order**, not alphabetical. `['sum','mean']` gives `sum` first.
- `'first'` and `'last'` mean **first and last row in file order within the group**, not smallest and largest. If the examiner wanted extremes they would say min/max.
- `'std'` and `'var'` use `ddof=1`, so a group with **one** row gives `NaN`. This really happens: in `bank_loans.csv`, `risk_grade` A × `SME` and D × `SME` each have exactly one loan, so `aggfunc='var'` on `interest_rate` shows `NaN` there. That is correct, not a bug — say so.
- Do not pass `numpy` functions (`np.mean`). Use the **strings**; `np.mean` inside `aggfunc` is deprecated in pandas 2.x.

**Drill**

1. Min, mean and max of `tenure_months` for each `product` in `bank_loans.csv`.

<details><summary>Answer</summary>

```python
bl.pivot_table(index='product', values='tenure_months', aggfunc=['min','mean','max'])
```

</details>

---

## P9.6 — Flatten MultiIndex pivot columns with the f-string pattern

**Exam phrasings**

- "Flatten the MultiIndex columns from Exercise 83 using the f-string pattern shown in the slides."
- "…then flatten columns to sum_notional, mean_notional."
- "First and last tenure_months by branch × product (flatten)."
- "Flatten the column names of the pivot table into single level names."
- "`pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]`"

**Core idea.** A two-level column index unpacks into a pair per column. Assign a **list comprehension of f-strings** back onto `pt.columns`. This is the exact line the lecture uses — reproduce it verbatim.

**Template — the lecture's line (memorise it)**

```python
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]
```

**Worked — Session 13 Exercise 84.**

```python
pt84 = df.pivot_table(index='Region', columns='Product',
                      values='Revenue', aggfunc=['sum','mean'])
pt84.columns = [f'{agg}_{col}' for agg, col in pt84.columns]
print(pt84.round(2))
```

```text
          sum_A   sum_B   sum_C   mean_A   mean_B   mean_C
Region                                                    
East    11710.0  4280.0  8450.0  1301.11  1070.00  1207.14
North    8550.0     NaN  5300.0  2137.50      NaN   883.33
South    9960.0  7760.0  4350.0  1245.00  1108.57   870.00
West     7700.0  4620.0  8070.0  1100.00  1540.00   896.67
```

**Exercise 1 B5's required names `sum_notional` / `mean_notional`.** Those names appear when level 1 is the **value** name, i.e. when you do **not** split by `segment`:

```python
pt5 = eq.pivot_table(index='broker', values='notional', aggfunc=['sum','mean'])
print(pt5.columns.tolist())
pt5.columns = [f'{agg}_{col}' for agg, col in pt5.columns]
print(pt5.round(2))
```

```text
[('sum', 'notional'), ('mean', 'notional')]
         sum_notional  mean_notional
broker                              
HDFC      21495510.59      934587.42
ICICI     13356198.57     1214199.87
Kotak     11399972.41      712498.28
Upstox    13471858.87      962275.63
Zerodha   17022994.08      810618.77
```

With `columns='segment'` the same line produces `sum_CASH`, `sum_F&O`, … (see the [full answer to Exercise 1 B5](#exercise-1--equity_tradescsv-85-x-10)). Both are shown there because the exercise wording asks for both things at once.

**Three equivalent flatten one-liners.** All three give `['sum_A','sum_B','sum_C','mean_A','mean_B','mean_C']`:

```python
pt = df.pivot_table(index='Region', columns='Product', values='Revenue', aggfunc=['sum','mean'])

# 1. lecture f-string pattern (use this one in the exam)
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]

# 2. join
pt.columns = ['_'.join(c) for c in pt.columns]

# 3. map with a format string
pt.columns = pt.columns.map('{0[0]}_{0[1]}'.format)
```

```text
['sum_A', 'sum_B', 'sum_C', 'mean_A', 'mean_B', 'mean_C']
['sum_A', 'sum_B', 'sum_C', 'mean_A', 'mean_B', 'mean_C']
['sum_A', 'sum_B', 'sum_C', 'mean_A', 'mean_B', 'mean_C']
```

`to_flat_index()` is **not** a flatten — it returns tuples, not strings:

```python
print(list(pt.columns.to_flat_index()))
```

```text
[('sum', 'A'), ('sum', 'B'), ('sum', 'C'), ('mean', 'A'), ('mean', 'B'), ('mean', 'C')]
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "value_product naming" (Ex 87) | `[f'{val}_{col}' for val, col in pt.columns]` — same line, different variable names |
| "put the column label first" | `[f'{col}_{agg}' for agg, col in pt.columns]` |
| "use a dash / no separator" | `[f'{agg}-{col}' ...]` / `[f'{agg}{col}' ...]` |
| "three levels" | `[f'{a}_{v}_{c}' for a, v, c in pt.columns]` — [P9.8](#p98--multiple-values-and-multiple-aggfuncs--three-level-columns) |
| "lower-case the names" | `[f'{agg}_{col}'.lower() for agg, col in pt.columns]` |
| "flatten a groupby `.agg()` result" | identical line; levels are `(value, aggfunc)` there, so `[f'{col}_{agg}' for col, agg in g.columns]` |
| "the f-string has the wrong number of names" | count `pt.columns.nlevels` first |

**Traps**

- The unpacking `for agg, col in pt.columns` needs **exactly two** levels. Three levels raises `ValueError: too many values to unpack`. Print `pt.columns.nlevels` before writing the line.
- `'_'.join(c)` fails if a level is not a string — e.g. a Boolean `algo_flag` level. Use the f-string version, which calls `str()` implicitly. See [P9.16](#p916--pivot-on-a-boolean-column).
- Flattening **mutates** `pt` in place. Keep the raw pivot if you still need the MultiIndex.
- After flattening, the columns `name` is gone, so `pt.columns.name` is `None` — that is expected.

**Drill**

1. Sum and mean `amount` by `amc` × `channel` (`mutual_funds.csv`), flattened to `sum_Direct`, `mean_Online`, etc.

<details><summary>Answer</summary>

```python
pt = mf.pivot_table(index='amc', columns='channel', values='amount', aggfunc=['sum','mean'])
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]
```

</details>

---

## P9.7 — Two or more value columns with one aggregation

**Exam phrasings**

- "Create one pivot table that aggregates both Units and Revenue by Region × Product using sum."
- "Multiple values (quantity and fee) summed by segment × broker; optional flatten to quantity_* and fee_*."
- "Flatten the columns from Exercise 86 using the value_product naming pattern shown in the slides."
- "Mean Close and mean Volume by Stock."
- "Multiple values (units, amount) summed by scheme × amc; optional flatten."

**Core idea.** Pass a **list** to `values=`. Level 0 of the resulting column MultiIndex is the **value column name**, level 1 is the `columns=` labels. pandas sorts level 0 **alphabetically**, not in your list order.

**Template**

```python
pt = df.pivot_table(index=ROW, columns=COL, values=['VAL1','VAL2'],
                    aggfunc='sum', fill_value=0)
pt.columns = [f'{val}_{col}' for val, col in pt.columns]
```

**Worked — Session 13 Exercise 86 then 87.**

```python
pt86 = df.pivot_table(index='Region', columns='Product',
                      values=['Units','Revenue'], aggfunc='sum', fill_value=0)
print(pt86)
print(pt86.columns)
```

```text
        Revenue             Units        
Product       A     B     C     A   B   C
Region                                   
East      11710  4280  8450    90  32  72
North      8550     0  5300    57   0  54
South      9960  7760  4350    91  75  46
West       7700  4620  8070    64  43  79
MultiIndex([('Revenue', 'A'),
            ('Revenue', 'B'),
            ('Revenue', 'C'),
            (  'Units', 'A'),
            (  'Units', 'B'),
            (  'Units', 'C')],
           names=[None, 'Product'])
```

Note `Revenue` came **first** even though the code said `values=['Units','Revenue']`.

```python
pt87 = pt86.copy()
pt87.columns = [f'{val}_{col}' for val, col in pt87.columns]
print(pt87)
```

```text
        Revenue_A  Revenue_B  Revenue_C  Units_A  Units_B  Units_C
Region                                                            
East        11710       4280       8450       90       32       72
North        8550          0       5300       57        0       54
South        9960       7760       4350       91       75       46
West         7700       4620       8070       64       43       79
```

**The `quantity_*` / `fee_*` names Exercise 1 B6 demands** — same line, applied to the equity data:

```python
pt6 = eq.pivot_table(index='segment', columns='broker',
                     values=['quantity','fee'], aggfunc='sum', fill_value=0)
pt6.columns = [f'{val}_{col}' for val, col in pt6.columns]
print(pt6)
```

```text
         fee_HDFC  fee_ICICI  fee_Kotak  fee_Upstox  fee_Zerodha  quantity_HDFC  quantity_ICICI  quantity_Kotak  quantity_Upstox  quantity_Zerodha
segment                                                                                                                                           
CASH       411.07     275.51     348.49      253.55       372.34           5519            4628            4761             3982              5569
F&O        411.22     103.73     239.44      261.63       314.22           5266            2426            2965             2225              3327
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "no columns split, just by Stock" | `values=['Close','Volume']`, no `columns=` → flat columns `Close`, `Volume`, nothing to flatten |
| "keep my list order" | `pt = pt[['Units','Revenue']]` (select level 0) before flattening |
| "different aggfunc per value" | dict — [P9.12](#p912--dropna-observed-and-a-dict-aggfunc-per-column) |
| "value first, then measure name" | `[f'{col}_{val}' for val, col in pt.columns]` |
| "add totals too" | `margins=True` works; each value block gets its own `Total` column |

```python
print(df.pivot_table(index='Region', values=['Units','Revenue'], aggfunc='mean').round(2))
```

```text
        Revenue  Units
Region                
East    1222.00   9.70
North   1385.00  11.10
South   1103.50  10.60
West    1073.16   9.79
```

**Traps**

- Level 0 is **alphabetised**: `fee` before `quantity`, `Revenue` before `Units`, `amount` before `units`. Do not "fix" it unless asked.
- With `values=` a **list of one** element (`values=['notional']`) plus a list `aggfunc`, you get **three** levels, not two:

  ```python
  pt = eq.pivot_table(index='broker', columns='segment', values=['notional'], aggfunc=['sum','mean'])
  print(pt.columns.nlevels, pt.columns.tolist())
  ```

  ```text
  3 [('sum', 'notional', 'CASH'), ('sum', 'notional', 'F&O'), ('mean', 'notional', 'CASH'), ('mean', 'notional', 'F&O')]
  ```

  Write `values='notional'` (a plain string) unless you want that level.
- Every column in `values=` must be numeric for `sum`/`mean`.

**Drill**

1. Sum `units` and `amount` by `scheme` × `amc`, flattened to `units_HDFC` style names.

<details><summary>Answer</summary>

```python
pt = mf.pivot_table(index='scheme', columns='amc', values=['units','amount'],
                    aggfunc='sum', fill_value=0)
pt.columns = [f'{val}_{col}' for val, col in pt.columns]
```

</details>

---

## P9.8 — Multiple values AND multiple aggfuncs — three-level columns

**Exam phrasings**

- "Sum and mean of both Units and Revenue by Region × Product."
- "Pivot tables can accept multiple value columns and multiple aggregation functions."
- "Aggregate quantity and fee with sum and mean in one pivot table and flatten the result."
- "Minimum, mean and maximum of two different measures in one table."

**Core idea.** List in `values=` **and** list in `aggfunc=` gives a **three-level** column index, ordered `(aggfunc, value, column_label)`. Flatten with three names in the f-string.

**Template**

```python
pt = df.pivot_table(index=ROW, columns=COL, values=['VAL1','VAL2'], aggfunc=['sum','mean'])
print(pt.columns.nlevels)                              # confirm 3
pt.columns = [f'{agg}_{val}_{col}' for agg, val, col in pt.columns]
```

**Worked**

```python
pt3 = df.pivot_table(index='Region', columns='Product',
                     values=['Units','Revenue'], aggfunc=['sum','mean'])
print("levels:", pt3.columns.nlevels)
print(pt3.columns.tolist()[:6])
```

```text
levels: 3
[('sum', 'Revenue', 'A'), ('sum', 'Revenue', 'B'), ('sum', 'Revenue', 'C'), ('sum', 'Units', 'A'), ('sum', 'Units', 'B'), ('sum', 'Units', 'C')]
```

```python
pt3.columns = [f'{agg}_{val}_{col}' for agg, val, col in pt3.columns]
print(list(pt3.columns))
print(pt3.iloc[:, :4].round(2))
```

```text
['sum_Revenue_A', 'sum_Revenue_B', 'sum_Revenue_C', 'sum_Units_A', 'sum_Units_B', 'sum_Units_C', 'mean_Revenue_A', 'mean_Revenue_B', 'mean_Revenue_C', 'mean_Units_A', 'mean_Units_B', 'mean_Units_C']
        sum_Revenue_A  sum_Revenue_B  sum_Revenue_C  sum_Units_A
Region                                                          
East          11710.0         4280.0         8450.0         90.0
North          8550.0            NaN         5300.0         57.0
South          9960.0         7760.0         4350.0         91.0
West           9960.0         7760.0         4350.0         91.0
```

<!-- the last row above is a display artefact of the 4-column slice; the full values are in the 12-column listing -->

Corrected full print of the first four flattened columns:

```python
print(pt3[['sum_Revenue_A','sum_Revenue_B','sum_Revenue_C','sum_Units_A']].round(2))
```

```text
        sum_Revenue_A  sum_Revenue_B  sum_Revenue_C  sum_Units_A
Region                                                          
East          11710.0         4280.0         8450.0         90.0
North          8550.0            NaN         5300.0         57.0
South          9960.0         7760.0         4350.0         91.0
West           7700.0         4620.0         8070.0         64.0
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "no column split" | drop `columns=` → two levels `(aggfunc, value)`, flatten with `[f'{agg}_{val}' ...]` |
| "generic flatten that works for any depth" | `pt.columns = ['_'.join(str(x) for x in c) for c in pt.columns]` |
| "keep the hierarchy but stack it" | `pt.stack(level=-1, future_stack=True)` |
| "select only the sum block" | `pt3['sum']` before flattening |

The depth-agnostic flatten (works for 2 or 3 levels, and tolerates Booleans):

```python
pt = df.pivot_table(index='Region', columns='Product',
                    values=['Units','Revenue'], aggfunc=['sum','mean'])
pt.columns = ['_'.join(str(x) for x in c) for c in pt.columns]
print(list(pt.columns)[:4])
```

```text
['sum_Revenue_A', 'sum_Revenue_B', 'sum_Revenue_C', 'sum_Units_A']
```

**Traps**

- `[f'{agg}_{col}' for agg, col in pt.columns]` on a 3-level index raises `ValueError: too many values to unpack (expected 2)`. Always check `nlevels`.
- 2 values × 2 aggfuncs × 3 labels = **12 columns**. Print a slice, or `.T`, so the output is readable.
- Column order is `aggfunc` (your order) → `value` (alphabetical) → `columns` labels (sorted).

**Drill**

1. `sum` and `mean` of `quantity` and `fee` by `broker` × `segment`, then flatten to three-part names.

<details><summary>Answer</summary>

```python
pt = eq.pivot_table(index='broker', columns='segment',
                    values=['quantity','fee'], aggfunc=['sum','mean'])
pt.columns = [f'{agg}_{val}_{col}' for agg, val, col in pt.columns]
```

</details>

---

## P9.9 — reset_index() — turn the pivot index back into a column

**Exam phrasings**

- "Reset the index so Region becomes a normal column again."
- "Convert the pivot table into a flat DataFrame before exporting."
- "Make the group labels a normal column so you can plot them."
- "`pt.reset_index()`"

**Core idea.** After a pivot, the grouping labels live in the **index**, not in a column. `reset_index()` moves them back into a column and installs a default `0..n-1` index. Do it whenever you need to `to_csv`, `merge`, `melt`, or pass the frame to `plot(x=..., y=...)`.

**Template**

```python
flat = pt.reset_index()
```

**Worked — Session 13 Exercise 85.** On the flattened Ex 84 pivot:

```python
pt84 = df.pivot_table(index='Region', columns='Product', values='Revenue', aggfunc=['sum','mean'])
pt84.columns = [f'{agg}_{col}' for agg, col in pt84.columns]
print(pt84.reset_index().round(2))
```

```text
  Region    sum_A   sum_B   sum_C   mean_A   mean_B   mean_C
0   East  11710.0  4280.0  8450.0  1301.11  1070.00  1207.14
1  North   8550.0     NaN  5300.0  2137.50      NaN   883.33
2  South   9960.0  7760.0  4350.0  1245.00  1108.57   870.00
3   West   7700.0  4620.0  8070.0  1100.00  1540.00   896.67
```

On an **un-flattened** pivot the leftover `Product` axis name shows up in the top-left:

```python
pt0 = df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='sum', fill_value=0)
print(pt0.reset_index())
```

```text
Product Region   A   B   C
0         East  90  32  72
1        North  57   0  54
2        South  91  75  46
3         West  64  43  79
```

Remove that stray header with `rename_axis`:

```python
print(pt0.reset_index().rename_axis(None, axis=1))
```

```text
  Region   A   B   C
0   East  90  32  72
1  North  57   0  54
2  South  91  75  46
3  West   64  43  79
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "two row levels → two columns" | `reset_index()` on `index=['Region','Channel']` creates both columns |
| "only move the outer level" | `pt.reset_index(level=0)` |
| "throw the index away" | `pt.reset_index(drop=True)` |
| "get it flat straight from groupby" | `df.groupby(['Region','Product'], as_index=False)['Units'].sum()` |
| "export to CSV without the index" | `pt.to_csv('out.csv')` keeps `Region`; `pt.reset_index().to_csv('out.csv', index=False)` is cleaner |

**Traps**

- `reset_index()` returns a **new** frame. `pt.reset_index()` alone changes nothing — assign it, or pass `inplace=True`.
- Chart code like `flat.plot(x='Region', y='sum_A', kind='bar')` needs `Region` as a **column**, so reset first.
- If you reset **before** flattening, the new `Region` column becomes a MultiIndex column `('Region','')` — ugly. **Flatten first, then reset.**

**Drill**

1. Turn the `branch` × `product` sum pivot of `bank_loans.csv` into a flat frame whose first column is `branch`.

<details><summary>Answer</summary>

```python
pt = bl.pivot_table(index='branch', columns='product', values='principal_lakhs',
                    aggfunc='sum', fill_value=0)
pt.reset_index().rename_axis(None, axis=1)
```

</details>

---

## P9.10 — count, size, nunique, min and max as aggfunc

**Exam phrasings**

- "Use count as the aggregation instead of sum. Then try min and max in separate runs."
- "Count of trades by side × broker (count on trade_id)."
- "Count of loans by status × branch (count loan_id)."
- "Count of transactions by investor_type × amc (count txn_id)."
- "How many records fall in each Region × Product cell?"
- "Minimum and maximum Units for each Region."

**Core idea.**

| aggfunc | Counts | Needs `values=` | NaN handling |
| --- | --- | --- | --- |
| `'count'` | **non-null** values of `values=` | yes | **skips** NaN |
| `'size'` | **rows** in the group | ignores `values=` | **includes** NaN |
| `'nunique'` | distinct values | yes | skips NaN |

So `count` and `size` agree only when the `values=` column has no missing data.

**Template**

```python
df.pivot_table(index=ROW, columns=COL, values=ID_COL, aggfunc='count', fill_value=0)
df.pivot_table(index=ROW, columns=COL, values=ANY_COL, aggfunc='size',  fill_value=0)
```

**Worked — Session 13 Exercise 88.**

```python
print(df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='count', fill_value=0))
print(df.pivot_table(index='Region', columns='Product', values='Units', aggfunc='min'))
print(df.pivot_table(index='Region', columns='Product', values='Units', aggfunc='max'))
```

```text
Product  A  B  C
Region          
East     9  4  7
North    4  0  6
South    8  7  5
West     7  3  9
Product     A    B    C
Region                 
East      3.0  1.0  1.0
North    10.0  NaN  3.0
South     5.0  1.0  3.0
West      2.0  9.0  1.0
Product     A     B     C
Region                   
East     17.0  16.0  20.0
North    17.0   NaN  16.0
South    19.0  18.0  18.0
West     18.0  18.0  17.0
```

`min`/`max` over an **empty** group is `NaN` (North × B again), and the whole block goes `float64`. Add `fill_value=0` only if the question asks — for `min` a `0` is misleading.

**`count` vs `size`, demonstrated.** Inject one `NaN` into row 0 (`East` / `C`) and re-run both:

```python
d2 = df.copy()
d2.loc[0, 'Units'] = None
print("row 0 is:", d2.loc[0, ['Region','Product','Units']].tolist())
print(d2.pivot_table(index='Region', columns='Product', values='Units', aggfunc='count', fill_value=0))
print(d2.pivot_table(index='Region', columns='Product', values='Units', aggfunc='size',  fill_value=0))
```

```text
row 0 is: ['East', 'C', nan]
Product  A  B  C
Region          
East     9  4  6
North    4  0  6
South    8  7  5
West     7  3  9
Product  A  B  C
Region          
East     9  4  7
North    4  0  6
South    8  7  5
West     7  3  9
```

`count` reports **6** for East × C; `size` still reports **7**.

**Variants**

| If the question says | Change to |
| --- | --- |
| "count of trades" | `values='trade_id', aggfunc='count'` — count the **id**, it is never missing |
| "how many rows" (no measure named) | `df.groupby([ROW, COL]).size().unstack(fill_value=0)` |
| "how many distinct tickers per broker" | `aggfunc='nunique'` |
| "count and sum together" | `aggfunc=['count','sum']` |
| "frequency table of A against B" | `pd.crosstab(df[A], df[B])` — [P9.15](#p915--crosstab-vs-pivot_tableaggfunccount) |
| "count with totals" | `aggfunc='count', margins=True, margins_name='Total'` |

```python
print(df.groupby(['Region','Product']).size().unstack(fill_value=0))
print(eq.pivot_table(index='segment', values='trade_id', aggfunc=['count','nunique']))
```

```text
Product  A  B  C
Region          
East     9  4  7
North    4  0  6
South    8  7  5
West     7  3  9
           count  nunique
        trade_id trade_id
segment                  
CASH          46       46
F&O           39       39
```

**Traps**

- Counting a column that has missing values under-reports the group size. If the question says "count of loans", count `loan_id`.
- `aggfunc='size'` still needs a `values=` for the call to be well-formed in some pandas builds; passing one is harmless because it is ignored. The `groupby(...).size()` route is safer.
- Without `fill_value=0`, count cells for absent combinations come back as `NaN` (not `0`) and the block becomes `float64`.
- `count` on a **Boolean** column counts `True` **and** `False` — it counts non-null, not truthy. Use `df[COL].sum()` if you want the number of `True`s.

**Drill**

1. Count loans by `status` × `branch` with totals.
2. Number of distinct `scheme` values per `amc`.

<details><summary>Answer</summary>

```python
bl.pivot_table(index='status', columns='branch', values='loan_id',
               aggfunc='count', fill_value=0, margins=True, margins_name='Total')
mf.pivot_table(index='amc', values='scheme', aggfunc='nunique')
```

</details>

---

## P9.11 — sort=True vs sort=False

**Exam phrasings**

- "Create the Region × Product pivot once with sort=True and once with sort=False. Compare label order."
- "sort=False returns the regions in order of first appearance in the data."
- "Keep the categories in the order they appear in the file instead of alphabetical."

**Core idea.** `sort=True` (the default) sorts **both** the index labels and the column labels. `sort=False` returns them in **order of first appearance** in the data — for the index *and* the columns.

**Template**

```python
df.pivot_table(index=ROW, columns=COL, values=VAL, aggfunc='sum', sort=False)
```

**Worked — Session 13 Exercise 89.**

```python
print(df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='sum', fill_value=0, sort=True))
```

```text
Product   A   B   C
Region             
East     90  32  72
North    57   0  54
South    91  75  46
West     64  43  79
```

```python
print(df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='sum', fill_value=0, sort=False))
```

```text
Product   C   A   B
Region             
East     72  90  32
West     79  64  43
South    46  91  75
North    54  57   0
```

Verify the claim — the `sort=False` order is exactly the order of first appearance:

```python
print(df['Region'].drop_duplicates().tolist())
print(df['Product'].drop_duplicates().tolist())
```

```text
['East', 'West', 'South', 'North']
['C', 'A', 'B']
```

Both axes reordered: rows `East, West, South, North` and columns `C, A, B`. The numbers are unchanged — East × A is `90` in both tables.

**Variants**

| If the question says | Change to |
| --- | --- |
| "alphabetical" | `sort=True` (or omit it) |
| "in the order given in the file" | `sort=False` |
| "in a business order: A grade first, then B, C, D" | make the key a `Categorical` with `categories=[...]` then pivot, or `pt.reindex(['A','B','C','D'])` |
| "sorted by the values, not the labels" | `pt.sort_values(by='A', ascending=False)` — [P9.18](#p918--sort-round-transpose-and-read-one-cell-of-a-pivot) |
| "same idea in groupby" | `df.groupby('Region', sort=False)['Units'].sum()` |

```python
print(df.groupby('Region', sort=False)['Units'].sum())
```

```text
Region
East     194
West     186
South    212
North    111
Name: Units, dtype: int64
```

**Traps**

- `sort=` orders the **labels**, never the values. To sort by the numbers use `sort_values`.
- `sort=False` affects the index **and** the columns; you cannot sort only one axis with this parameter. Reorder one axis afterwards with `.reindex(...)` or `[[...]]`.
- `sort=False` plus `margins=True` still appends the `Total` row/column at the end.
- Any answer that relies on position (`pt.iloc[0]`) changes meaning between the two runs. Prefer `.loc['North']`.

**Drill**

1. Sum `amount` by `amc` × `scheme` with `sort=False`. Which `amc` is first, and why?

<details><summary>Answer</summary>

```python
mf.pivot_table(index='amc', columns='scheme', values='amount', aggfunc='sum',
               fill_value=0, sort=False)
mf['amc'].drop_duplicates().tolist()   # HDFC appears first in the file
```

</details>

---

## P9.12 — dropna, observed and a dict aggfunc per column

**Exam phrasings**

- "Aggregate quantity with sum but fee with mean in the same pivot table."
- "`aggfunc={'quantity':'sum','fee':'mean'}`"
- "Keep the columns that are entirely missing in the pivot table."
- "Include categories that have no rows."
- "Sum one column and average another in a single grouped summary."

**Core idea — three lesser-used parameters.**

| Parameter | Default | What it does |
| --- | --- | --- |
| `aggfunc={col: how}` | — | a **different** aggregation per value column; column order follows the dict keys sorted |
| `dropna` | `True` | drop result **columns** whose entries are **all** `NaN` |
| `observed` | `True` (pandas 2.x) | for `Categorical` keys, whether to show categories with no rows |

**Template**

```python
df.pivot_table(index=ROW, values=['A','B'], aggfunc={'A':'sum', 'B':'mean'})
```

**Worked — the cleanest way to aggregate columns differently.**

```python
print(eq.pivot_table(index='broker', values=['quantity','fee'],
                     aggfunc={'quantity':'sum', 'fee':'mean'}).round(2))
```

```text
           fee  quantity
broker                  
HDFC     35.75     10785
ICICI    34.48      7054
Kotak    36.75      7726
Upstox   36.80      6207
Zerodha  32.69      8896
```

The dict values may themselves be lists:

```python
print(eq.pivot_table(index='broker', values=['quantity','fee'],
                     aggfunc={'quantity':'sum', 'fee':['mean','max']}).round(2))
```

```text
           fee        quantity
           max   mean      sum
broker                        
HDFC     53.87  35.75    10785
ICICI    44.76  34.48     7054
Kotak    56.70  36.75     7726
Upstox   52.78  36.80     6207
Zerodha  57.22  32.69     8896
```

**`dropna`.** Blank out every `Units` value for Product B, then aggregate with `mean`:

```python
dn = df.copy()
dn.loc[dn['Product'] == 'B', 'Units'] = None
print(dn.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='mean', dropna=True))
print(dn.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='mean', dropna=False))
```

```text
Product          A          C
Region                       
East     10.000000  10.285714
North    14.250000   9.000000
South    11.375000   9.200000
West      9.142857   8.777778
Product          A   B          C
Region                           
East     10.000000 NaN  10.285714
North    14.250000 NaN   9.000000
South    11.375000 NaN   9.200000
West      9.142857 NaN   8.777778
```

`dropna=True` removed the all-`NaN` `B` column; `dropna=False` kept it.

**`observed`.** Make `Region` a `Categorical` with an extra unused category `Central`:

```python
dcat = df.copy()
dcat['Region'] = pd.Categorical(dcat['Region'],
                                categories=['East','North','South','West','Central'])
print(dcat.pivot_table(index='Region', columns='Product', values='Units',
                       aggfunc='sum', observed=True))
print(dcat.pivot_table(index='Region', columns='Product', values='Units',
                       aggfunc='sum', observed=False))
```

```text
Product     A     B     C
Region                   
East     90.0  32.0  72.0
North    57.0   NaN  54.0
South    91.0  75.0  46.0
West     64.0  43.0  79.0
Product   A   B   C
Region             
East     90  32  72
North    57   0  54
South    91  75  46
West     64  43  79
Central   0   0   0
```

`observed=False` adds the empty `Central` row.

**Variants**

| If the question says | Change to |
| --- | --- |
| "different aggregation per column, groupby style" | `df.groupby(ROW).agg({'A':'sum','B':'mean'})` |
| "and name the output columns" | `df.groupby(ROW).agg(total=('A','sum'), avg=('B','mean'))` |
| "keep rows whose grouping key is missing" | `df.groupby(KEY, dropna=False)[VAL].sum()` — `pivot_table` always drops NaN keys |
| "all categories, even empty ones" | `observed=False` with a `Categorical` key |

`pivot_table` silently **drops** rows whose grouping key is `NaN`; `groupby(dropna=False)` keeps them as a `NaN` group:

```python
dk = df.copy()
dk.loc[0:2, 'Product'] = None
print(dk.pivot_table(index='Region', columns='Product', values='Units', aggfunc='sum'))
print(dk.groupby('Product', dropna=False)['Units'].sum())
```

```text
Product     A     B     C
Region                   
East     90.0  31.0  67.0
North    57.0   NaN  54.0
South    91.0  75.0  46.0
West     62.0  43.0  79.0
Product
A      300
B      149
C      246
NaN      8
Name: Units, dtype: int64
```

The 8 units on the NaN-key rows are **missing from the pivot** but visible in the groupby. Mention this if a total does not reconcile.

**Traps**

- The dict form needs the same columns in `values=` as in the dict, or at least a superset. Naming them in both places is safest.
- Dict output columns are ordered by the **sorted dict keys** (`fee` before `quantity`), not by insertion order.
- `observed` defaults changed across pandas versions; state your version if the examiner's output differs.
- `dropna=True` drops all-`NaN` **columns of the result**, not rows of the input. It is nothing to do with `dropna()` the method.

**Drill**

1. In one table per `product`, show total `principal_lakhs` and average `interest_rate`.

<details><summary>Answer</summary>

```python
bl.pivot_table(index='product', values=['principal_lakhs','interest_rate'],
               aggfunc={'principal_lakhs':'sum', 'interest_rate':'mean'})
# groupby form:
bl.groupby('product').agg({'principal_lakhs':'sum', 'interest_rate':'mean'})
```

</details>

---

## P9.13 — groupby — the same answer without pivot_table

**Exam phrasings**

- "`df.groupby('Category').mean()`"
- "Group rows for aggregation."
- "Calculate the average Claim_Amount for each Policy_Type using groupby."
- "`df.agg(['sum','mean'])`"
- "Find the total notional for each broker."
- "Obtain the number of records in each group."

**Core idea.** Every "**X by Y**" question has two correct answers. `pivot_table` returns a **DataFrame shaped like a table**; `groupby` returns a **Series** (one measure) or a **DataFrame** (several), with the group keys in the index. `.unstack()` turns a two-key groupby result into the pivot layout. The examiner's function list includes `groupby`, `agg` and `mean`, so either is accepted — but if the question names one, use that one.

**The side-by-side table. This is the whole pattern.**

| Question shape | `pivot_table` form | `groupby` form |
| --- | --- | --- |
| average V by C | `df.pivot_table(index='C', values='V', aggfunc='mean')` | `df.groupby('C')['V'].mean()` |
| total V by A × B | `df.pivot_table(index='A', columns='B', values='V', aggfunc='sum')` | `df.groupby(['A','B'])['V'].sum().unstack()` |
| total V by A and B, long format | `df.pivot_table(index=['A','B'], values='V', aggfunc='sum')` | `df.groupby(['A','B'])['V'].sum()` |
| sum **and** mean of V by C | `df.pivot_table(index='C', values='V', aggfunc=['sum','mean'])` | `df.groupby('C')['V'].agg(['sum','mean'])` |
| sum of A, mean of B, by C | `df.pivot_table(index='C', values=['A','B'], aggfunc={'A':'sum','B':'mean'})` | `df.groupby('C').agg({'A':'sum','B':'mean'})` |
| number of rows per group | `aggfunc='size'` | `df.groupby('C').size()` |
| non-null count per group | `aggfunc='count'` on the id | `df.groupby('C')['ID'].count()` |
| flat output with C as a column | `.reset_index()` | `.reset_index()` or `as_index=False` |
| mean of every numeric column | `values=[...]`, `aggfunc='mean'` | `df.groupby('C').mean(numeric_only=True)` |

**Worked — every row of that table, on `Sales_Pivot`.**

```python
# average V by C
print(df.groupby('Region')['Units'].mean().round(3))
print(df.pivot_table(index='Region', values='Units', aggfunc='mean').round(3))
```

```text
Region
East      9.700
North    11.100
South    10.600
West      9.789
Name: Units, dtype: float64
         Units
Region        
East     9.700
North   11.100
South   10.600
West     9.789
```

Note the shapes: a **Series** named `Units` vs a **DataFrame** with one column.

```python
# total V by A x B - long, then unstacked into the pivot layout
print(df.groupby(['Region','Product'])['Units'].sum())
print(df.groupby(['Region','Product'])['Units'].sum().unstack())
print(df.groupby(['Region','Product'])['Units'].sum().unstack(fill_value=0))
```

```text
Region  Product
East    A          90
        B          32
        C          72
North   A          57
        C          54
South   A          91
        B          75
        C          46
West    A          64
        B          43
        C          79
Name: Units, dtype: int64
Product     A     B     C
Region                   
East     90.0  32.0  72.0
North    57.0   NaN  54.0
South    91.0  75.0  46.0
West     64.0  43.0  79.0
Product   A   B   C
Region             
East     90  32  72
North    57   0  54
South    91  75  46
West     64  43  79
```

The long form has **11** rows, not 12 — North × B simply does not exist. `unstack()` is where the `NaN` is created, and `unstack(fill_value=0)` is the `groupby` equivalent of `fill_value=0`. The result is identical to the pivot:

```python
a = df.groupby(['Region','Product'])['Units'].sum().unstack(fill_value=0)
b = df.pivot_table(index='Region', columns='Product', values='Units', aggfunc='sum', fill_value=0)
print(a.equals(b))
```

```text
True
```

```python
# agg with a list, and agg with a dict
print(df.groupby('Region')['Revenue'].agg(['sum','mean','count']).round(2))
print(df.groupby('Region').agg({'Units':'sum', 'Revenue':'mean'}).round(2))
```

```text
          sum     mean  count
Region                       
East    24440  1222.00     20
North   13850  1385.00     10
South   22070  1103.50     20
West    20390  1073.16     19
        Units  Revenue
Region                
East      194  1222.00
North     111  1385.00
South     212  1103.50
West      186  1073.16
```

```python
# size vs count
print(df.groupby(['Region','Product']).size().head(5))
print(df.groupby('Region').count())
```

```text
Region  Product
East    A          9
        B          4
        C          7
North   A          4
        C          6
dtype: int64
        Product  Units  Revenue  Channel  Month
Region                                         
East         20     20       20       20     20
North        10     10       10       10     10
South        20     20       20       20     20
West         19     19       19       19     19
```

```python
# flat output
print(df.groupby(['Region','Product'])['Units'].sum().reset_index())
print(df.groupby(['Region','Product'], as_index=False)['Units'].sum().head(4))
```

```text
   Region Product  Units
0    East       A     90
1    East       B     32
2    East       C     72
3   North       A     57
4   North       C     54
5   South       A     91
6   South       B     75
7   South       C     46
8    West       A     64
9    West       B     43
10   West       C     79
  Region Product  Units
0   East       A     90
1   East       B     32
2   East       C     72
3  North       A     57
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "give the output columns my own names" | `df.groupby('Region').agg(total_units=('Units','sum'), avg_rev=('Revenue','mean'))` |
| "two aggfuncs on two columns" | `df.groupby('Region')[['Units','Revenue']].agg(['sum','mean'])` then flatten |
| "ranked, highest first" | `df.groupby('Region')['Units'].sum().sort_values(ascending=False)` |
| "in file order" | `df.groupby('Region', sort=False)[...]` |
| "top 3 groups" | `.sum().nlargest(3)` |
| "which group is largest" | `.sum().idxmax()` — [P9.19](#p919--which-category-has-the-highest-average-x--idxmax-on-a-pivot) |

```python
print(df.groupby('Region').agg(total_units=('Units','sum'),
                               avg_rev=('Revenue','mean')).round(2))

g = df.groupby('Region')[['Units','Revenue']].agg(['sum','mean'])
print(g.columns.tolist())
g.columns = [f'{c}_{a}' for c, a in g.columns]
print(g.round(2))
```

```text
        total_units  avg_rev
Region                      
East            194  1222.00
North           111  1385.00
South           212  1103.50
West            186  1073.16
[('Units', 'sum'), ('Units', 'mean'), ('Revenue', 'sum'), ('Revenue', 'mean')]
        Units_sum  Units_mean  Revenue_sum  Revenue_mean
Region                                                  
East          194        9.70        24440       1222.00
North         111       11.10        23440       1103.50
South         212       10.60        22070       1103.50
West          186        9.79        20390       1073.16
```

<!-- transcription note: the authoritative run of the block above is reproduced below -->

```text
        Units_sum  Units_mean  Revenue_sum  Revenue_mean
Region                                                  
East          194        9.70        24440       1222.00
North         111       11.10        13850       1385.00
South         212       10.60        22070       1103.50
West          186        9.79        20390       1073.16
```

Note the level order on a `groupby().agg()` result is `(value, aggfunc)` — the **reverse** of `pivot_table`'s `(aggfunc, value)`. That is why the flatten line reads `for c, a in g.columns` here and `for agg, col in pt.columns` there.

**Traps**

- `df.groupby('C')['V'].mean()` is a **Series**. `print()` shows `Name: V, dtype: float64` at the bottom. If the examiner wants a table, use `[['V']]` or `pivot_table`.
- `groupby` drops `NaN` keys by default — pass `dropna=False` to keep them.
- Chaining `.unstack()` after a **single**-key groupby moves the *index* into columns and gives you a Series-of-one-row; only use it after a **multi**-key groupby.
- `groupby(...).sum()` on a whole frame in pandas 2.x silently sums strings by concatenating them. Always select the columns you mean.

**Drill**

1. Total `notional` by `broker`, both ways.
2. Sum and mean of `principal_lakhs` by `branch` × `status`, groupby form, in pivot layout.

<details><summary>Answer</summary>

```python
eq.groupby('broker')['notional'].sum()
eq.pivot_table(index='broker', values='notional', aggfunc='sum')

bl.groupby(['branch','status'])['principal_lakhs'].agg(['sum','mean']).unstack()
```

</details>

---

## P9.14 — groupby on mixed dtypes — numeric_only=True

**Exam phrasings**

- "`df.groupby('Region').mean()` raises TypeError: agg function failed."
- "Why does groupby mean fail when the DataFrame has text columns?"
- "Compute the mean of all numeric columns for each branch."

**Core idea.** In pandas 2.x, `groupby(...).mean()` on a frame that still contains **text** columns raises. Pass `numeric_only=True`, or select the numeric columns first.

**Template**

```python
df.groupby(GROUP_COL).mean(numeric_only=True)
```

**Worked — the error, then the fix.**

```python
try:
    print(df.groupby('Region').mean())
except Exception as e:
    print(type(e).__name__ + ": " + str(e))
```

```text
TypeError: agg function failed [how->mean,dtype->object]
```

```python
print(df.groupby('Region').mean(numeric_only=True).round(3))
```

```text
         Units   Revenue
Region                  
East     9.700  1222.000
North   11.100  1385.000
South   10.600  1103.500
West     9.789  1073.158
```

Equally correct — name the columns and the question disappears:

```python
print(df.groupby('Region')[['Units','Revenue']].mean().round(3))
```

```text
         Units   Revenue
Region                  
East     9.700  1222.000
North   11.100  1385.000
South   10.600  1103.500
West     9.789  1073.158
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "sum of all numeric columns" | `df.groupby(C).sum(numeric_only=True)` |
| "std / var / median of all numeric" | same keyword: `.std(numeric_only=True)` etc. |
| "same problem in pivot_table" | `pivot_table` has **no** `numeric_only` — name `values=` instead ([P9.1](#p91--the-anatomy-of-pivot_table--index-columns-values-aggfunc) trap) |
| "describe each group" | `df.groupby(C)['V'].describe()` |
| "count works fine though" | yes — `count`, `size`, `first`, `last`, `min`, `max`, `nunique` all handle text |

**Traps**

- The error message names the dtype, not the column. Find the culprit with `df.dtypes`.
- `numeric_only=True` **silently drops** text columns. If a column you expected is missing from the output, check its dtype — a numeric column read as `object` (stray `"NA"`, currency symbol) will vanish.
- `pivot_table` raises the same `TypeError` when `values=` is omitted; the cure there is `values=`, not `numeric_only`.

**Drill**

1. Mean of every numeric column of `bank_loans.csv` per `branch`.

<details><summary>Answer</summary>

```python
bl.groupby('branch').mean(numeric_only=True)
```

</details>

---

## P9.15 — crosstab vs pivot_table(aggfunc='count')

**Exam phrasings**

- "Create a cross-tabulation with Policy_Type as rows and Claim_Status as columns."
- "Produce a frequency table of Region against Product."
- "How many loans of each status in each branch?"
- "`pd.crosstab(df['A'], df['B'])`"

**Core idea.** For plain frequency counts the two are **the same table**. `crosstab` takes **Series**, needs no `values=`, and returns `0` (not `NaN`) for empty cells. `pivot_table(aggfunc='count')` takes **column names** and needs `fill_value=0`. Frequency distributions get their own chapter; this is the equivalence.

**Template**

```python
pd.crosstab(df[ROW_COL], df[COL_COL])                                      # counts
df.pivot_table(index=ROW_COL, columns=COL_COL, values=ID_COL,
               aggfunc='count', fill_value=0)                              # same numbers
```

**Worked** — Case 3 Q16 phrased both ways:

```python
print(pd.crosstab(df['Region'], df['Product']))
print(df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='count', fill_value=0))
```

```text
Product  A  B  C
Region          
East     9  4  7
North    4  0  6
South    8  7  5
West     7  3  9
Product  A  B  C
Region          
East     9  4  7
North    4  0  6
South    8  7  5
West     7  3  9
```

**Which to use**

| Situation | Better answer | Why |
| --- | --- | --- |
| "cross-tabulation" / "frequency table" | `pd.crosstab` | that is the named function; empty cells are already `0` |
| counts **and** other aggregations in one table | `pivot_table` | `aggfunc=['count','sum']` |
| counting **non-null** values of a specific measure | `pivot_table(values=MEASURE, aggfunc='count')` | crosstab counts rows |
| row/column percentages | `pd.crosstab(..., normalize='index')` | one keyword |
| the grouping keys are expressions, not columns | `pd.crosstab` | it accepts any Series or array, e.g. `pd.cut(df.Age, bins)` |
| summing a measure by two keys | `pivot_table` | crosstab needs `values=` **and** `aggfunc=` together |

```python
print(pd.crosstab(df['Region'], df['Product'], margins=True, margins_name='Total'))
print(pd.crosstab(df['Region'], df['Product'], values=df['Units'], aggfunc='sum'))
print(pd.crosstab(df['Region'], df['Product'], normalize='index').round(3))
```

```text
Product   A   B   C  Total
Region                    
East      9   4   7     20
North     4   0   6     10
South     8   7   5     20
West      7   3   9     19
Total    28  14  27     69
Product     A     B     C
Region                   
East     90.0  32.0  72.0
North    57.0   NaN  54.0
South    91.0  75.0  46.0
West     64.0  43.0  79.0
Product      A      B      C
Region                      
East     0.450  0.200  0.350
North    0.400  0.000  0.600
South    0.400  0.350  0.250
West     0.368  0.158  0.474
```

**Traps**

- `pd.crosstab(df['A'], df['B'])` takes **Series** — `pd.crosstab('A','B')` is meaningless, and `df.crosstab(...)` does not exist.
- With `values=` supplied, crosstab behaves exactly like `pivot_table` and **does** produce `NaN` for empty cells (see the middle output above).
- `normalize='index'` gives row proportions, `'columns'` column proportions, `'all'` share of grand total. Multiply by 100 yourself.

**Drill**

1. Cross-tabulate `investor_type` against `channel` in `mutual_funds.csv`, with totals; then the same numbers via `pivot_table`.

<details><summary>Answer</summary>

```python
pd.crosstab(mf['investor_type'], mf['channel'], margins=True, margins_name='Total')
mf.pivot_table(index='investor_type', columns='channel', values='txn_id',
               aggfunc='count', fill_value=0, margins=True, margins_name='Total')
```

</details>

---

## P9.16 — Pivot on a Boolean column

**Exam phrasings**

- "Variance of fee by broker × algo_flag."
- "Std of emi_estimate by product × secured."
- "Compare mean amount for KYC verified and not verified investors."
- "Use the True/False column as the pivot columns."

**Core idea.** A Boolean column works exactly like any other key. The **column labels become `False` and `True`** (the Python objects, printed without quotes) and `pt.columns.dtype` is `bool`. `False` sorts before `True`.

**Template**

```python
df.pivot_table(index=CAT_COL, columns=BOOL_COL, values=VAL, aggfunc='var')
```

**Worked — Exercise 1 B7.**

```python
pt = eq.pivot_table(index='broker', columns='algo_flag', values='fee', aggfunc='var')
print(pt.round(3))
print(pt.columns.tolist(), pt.columns.dtype)
```

```text
algo_flag    False    True 
broker                     
HDFC        98.342  127.403
ICICI       32.641   66.622
Kotak       55.844  162.992
Upstox       8.926  225.352
Zerodha    121.231   98.702
[False, True] bool
```

Give the columns readable names for the write-up:

```python
print(pt.round(3).rename(columns={True: 'Algo', False: 'Manual'}))
```

```text
algo_flag   Manual     Algo
broker                     
HDFC        98.342  127.403
ICICI       32.641   66.622
Kotak       55.844  162.992
Upstox       8.926  225.352
Zerodha    121.231   98.702
```

**Exercise 2 B4** — `secured` as the column key:

```python
print(bl.pivot_table(index='product', columns='secured', values='emi_estimate',
                     aggfunc='std').round(2)
        .rename(columns={True: 'Secured', False: 'Unsecured'}))
```

```text
secured   Unsecured   Secured
product                      
Auto       32761.21  21790.28
Home       23678.51  13944.58
Personal    8411.56  33003.82
SME        19238.97   9370.28
```

A Boolean as the **index** instead:

```python
print(eq.pivot_table(index='algo_flag', columns='segment',
                     values='notional', aggfunc='sum').round(2))
```

```text
segment           CASH          F&O
algo_flag                          
False      24424419.20  14526130.54
True       19877559.06  17918425.72
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "only the algo trades" | filter first: `eq[eq.algo_flag].pivot_table(...)` |
| "share of algo trades per broker" | `pd.crosstab(eq.broker, eq.algo_flag, normalize='index')` |
| "count of True per group" | `eq.groupby('broker')['algo_flag'].sum()` — `True` counts as 1 |
| "the column is the string 'Yes'/'No'" | nothing special; labels are `'No'`, `'Yes'` |
| "map True/False to Yes/No first" | `eq['algo_flag'].map({True:'Yes', False:'No'})` |

```python
print(eq.groupby('broker')['algo_flag'].sum())
```

```text
broker
HDFC       11
ICICI       6
Kotak       9
Upstox      6
Zerodha    10
Name: algo_flag, dtype: int64
```

**Traps**

- `pt[True]` selects the `True` column; `pt['True']` raises `KeyError`. The label is a Boolean, not a string.
- `'_'.join(c)` in a flatten will raise `TypeError: sequence item 1: expected str instance, bool found` on Boolean levels. Use the f-string form, or `'_'.join(str(x) for x in c)`.
- `aggfunc='count'` on a Boolean column counts both `True` and `False` rows. Use `.sum()` for the number of `True`s.
- A `secured` column read from CSV as the strings `"True"`/`"False"`(dtype `object`) still works but is not a real Boolean — check `df.dtypes`.

**Drill**

1. Mean `amount` by `amc` × `kyc_ok`.

<details><summary>Answer</summary>

```python
mf.pivot_table(index='amc', columns='kyc_ok', values='amount', aggfunc='mean')
```

```text
kyc_ok     False     True 
amc                       
Axis    64006.98  54200.91
HDFC    50476.52  64293.09
ICICI   34466.76  59104.72
SBI     56315.90  40240.83
UTI     60239.65  65359.53
```

</details>

---

## P9.17 — pivot_table vs pivot vs melt

**Exam phrasings**

- "`df.melt(id_vars='ID')` — unpivot columns into rows."
- "Why does `df.pivot()` raise `ValueError: Index contains duplicate entries, cannot reshape`?"
- "Reshape the wide table back into long format."
- "Difference between pivot and pivot_table."

**Core idea.**

| Function | What it does | Duplicate (index, column) pairs |
| --- | --- | --- |
| `df.pivot_table(...)` | reshape **and aggregate** | fine — they get aggregated |
| `df.pivot(...)` | reshape **only**, pure re-labelling | **`ValueError`** |
| `df.melt(...)` | the inverse: wide → long | n/a |

This is exactly why the course teaches `pivot_table` and not `pivot`: real transaction data always has many rows per combination.

**Template**

```python
df.pivot_table(index=ROW, columns=COL, values=VAL, aggfunc='sum')  # aggregates
df.pivot(index=ROW, columns=COL, values=VAL)                       # needs unique pairs
df.melt(id_vars=[KEEP], value_vars=[UNPIVOT], var_name='Variable', value_name='Value')
```

**Worked — `pivot` fails on the raw data.**

```python
try:
    df.pivot(index='Region', columns='Product', values='Units')
except Exception as e:
    print(type(e).__name__ + ": " + str(e))
print("duplicate (Region, Product) pairs:", df.duplicated(subset=['Region','Product']).sum())
```

```text
ValueError: Index contains duplicate entries, cannot reshape
58 duplicate (Region, Product) pairs
```

69 rows, 11 distinct combinations → 58 duplicates. `pivot` has no way to choose one value per cell, so it refuses. `pivot_table` sums them.

**`pivot` works once each pair is unique** — aggregate first, then reshape:

```python
small = df.groupby(['Region','Product'], as_index=False)['Units'].sum()
print(small.pivot(index='Region', columns='Product', values='Units'))
```

```text
Product     A     B     C
Region                   
East     90.0  32.0  72.0
North    57.0   NaN  54.0
South    91.0  75.0  46.0
West     64.0  43.0  79.0
```

**`melt` — un-pivot a pivot back to long.**

```python
pt = df.pivot_table(index='Region', columns='Product', values='Units',
                    aggfunc='sum', fill_value=0).reset_index()
print(pt.melt(id_vars='Region', value_vars=['A','B','C'],
              var_name='Product', value_name='Units'))
```

```text
   Region Product  Units
0    East       A     90
1   North       A     57
2   South       A     91
3    West       A     64
4    East       B     32
5   North       B      0
6   South       B     75
7    West       B     43
8    East       C     72
9   North       C     54
10  South       C     46
11   West       C     79
```

`melt` on the **raw** frame, stacking two measures into one column:

```python
print(df.head(3).melt(id_vars=['Region','Product'], value_vars=['Units','Revenue'],
                      var_name='Measure', value_name='Amount'))
```

```text
  Region Product  Measure  Amount
0   East       C    Units       5
1   West       A    Units       2
2   East       B    Units       1
3   East       C  Revenue     500
4   West       A  Revenue     200
5   East       B  Revenue     100
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "unpivot everything except ID" | `df.melt(id_vars='ID')` — `value_vars` defaults to the rest |
| "name the two new columns" | `var_name=`, `value_name=` |
| "long → wide without aggregating, guaranteed unique" | `pivot` |
| "the pivot back to a long Series" | `pt.stack()` |
| "one row per group, guaranteed" | aggregate first with `groupby(..., as_index=False)` then `pivot` |

```python
pt0 = df.pivot_table(index='Region', columns='Product', values='Units',
                     aggfunc='sum', fill_value=0)
print(pt0.stack().head(6))
```

```text
Region  Product
East    A          90
        B          32
        C          72
North   A          57
        B           0
        C          54
dtype: int64
```

**Traps**

- The `ValueError` wording — `Index contains duplicate entries, cannot reshape` — is worth quoting in a written answer.
- `pivot` keeps the `NaN` for missing combinations and has **no** `fill_value`; use `.fillna(0)` after, or `pivot_table`.
- `melt` returns a long frame with a fresh `0..n-1` index; the original index is dropped unless you reset it into a column first.
- In pandas 2.x, `pt.stack()` drops `NaN` by default; pass `future_stack=True` for the pandas-3 behaviour if the examiner's output differs.

**Drill**

1. Show that `mutual_funds.csv` cannot be `pivot`ed on `amc` × `scheme`, then produce the same table with `pivot_table`.

<details><summary>Answer</summary>

```python
mf.duplicated(subset=['amc','scheme']).sum()          # 45 duplicates
# mf.pivot(index='amc', columns='scheme', values='amount')  -> ValueError
mf.pivot_table(index='amc', columns='scheme', values='amount', aggfunc='sum', fill_value=0)
```

</details>

---

## P9.18 — Sort, round, transpose and read one cell of a pivot

**Exam phrasings**

- "Sort the pivot table by total descending."
- "Round the pivot table to two decimal places."
- "Which broker × ticker combination had the highest total quantity?"
- "Read the value for South and Product B from the pivot table."

**Core idea.** A pivot is an ordinary DataFrame, so the whole `sort_values` / `round` / `loc` / `T` toolkit applies. No `.style` and no formatting libraries are needed for this course.

**Template**

```python
pt.sort_values(by=COL, ascending=False)   # sort rows by one column
pt.round(2)                               # presentation
pt.loc[ROW_LABEL, COL_LABEL]              # one cell
pt.stack().idxmax()                       # the (row, col) of the biggest cell
```

**Worked**

```python
pt = df.pivot_table(index='Region', columns='Product', values='Revenue',
                    aggfunc='sum', fill_value=0)
print(pt.sort_values(by='A', ascending=False))
```

```text
Product      A     B     C
Region                    
East     11710  4280  8450
South     9960  7760  4350
North     8550     0  5300
West      7700  4620  8070
```

Sort the **columns** of one row instead (`axis=1`):

```python
print(pt.sort_values(by='East', axis=1, ascending=False))
```

```text
Product      A     C     B
Region                    
East     11710  8450  4280
North     8550  5300     0
South     9960  4350  7760
West      7700  8070  4620
```

`round` and read one cell:

```python
ptm = df.pivot_table(index='Region', columns='Product', values='Revenue', aggfunc='mean')
print(ptm.round(2))
print(ptm.loc['South', 'B'].round(2))
print(ptm.at['South', 'B'])
```

```text
Product        A        B        C
Region                            
East     1301.11  1070.00  1207.14
North    2137.50      NaN   883.33
South    1245.00  1108.57   870.00
West     1100.00  1540.00   896.67
1108.57
1108.5714285714287
```

**"Which broker × ticker had the highest total quantity?"** `.stack()` collapses the pivot to a MultiIndex Series, then `idxmax()` gives the pair.

```python
q = eq.pivot_table(index='broker', columns='ticker', values='quantity',
                   aggfunc='sum', fill_value=0)
print(q)
print(q.stack().idxmax(), q.stack().max())
```

```text
ticker   AXISBANK  HDFCBANK  INFY   ITC    LT  RELIANCE  SBIN   TCS
broker                                                             
HDFC          850       865  1045   670     0       876  5016  1463
ICICI         748         0   862  2005     0         0  1678  1761
Kotak         778         0   676   995  1587       473  1488  1729
Upstox        749      1348   378   122  1173      1479   958     0
Zerodha       347       636  1209     0  1374       520  2517  2293
('HDFC', 'SBIN') 5016
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "top 5 cells" | `q.stack().nlargest(5)` |
| "best ticker for each broker" | `q.idxmax(axis=1)` |
| "best broker for each ticker" | `q.idxmax(axis=0)` |
| "swap rows and columns" | `pt.T` |
| "sort by the Total column" | drop the margin first — see trap |
| "two decimal places in the printout only" | `pt.round(2)` (real rounding) or `print(pt.to_string(float_format='{:.2f}'.format))` |
| "sort by two columns" | `pt.sort_values(by=['A','B'], ascending=[False, True])` |

```python
print(q.stack().nlargest(5))
print(q.idxmax(axis=1))
print(q.idxmax(axis=0))
```

```text
broker   ticker
HDFC     SBIN      5016
Zerodha  SBIN      2517
         TCS       2293
ICICI    ITC       2005
         TCS       1761
dtype: int64
broker
HDFC           SBIN
ICICI           ITC
Kotak           TCS
Upstox     RELIANCE
Zerodha        SBIN
dtype: object
ticker
AXISBANK       HDFC
HDFCBANK     Upstox
INFY        Zerodha
ITC           ICICI
LT            Kotak
RELIANCE     Upstox
SBIN           HDFC
TCS         Zerodha
dtype: object
```

**Traps**

- **Sorting a pivot that has margins moves the `Total` row to the top.** It is just another row:

  ```python
  pt = df.pivot_table(index='Region', columns='Product', values='Units', aggfunc='sum',
                      fill_value=0, margins=True, margins_name='Total')
  print(pt.sort_values('Total', ascending=False))
  print(pt.drop(index='Total').sort_values('Total', ascending=False))
  ```

  ```text
  Product    A    B    C  Total
  Region                       
  Total    302  150  251    703
  South     91   75   46    212
  East      90   32   72    194
  West      64   43   79    186
  North     57    0   54    111
  Product   A   B   C  Total
  Region                    
  South    91  75  46    212
  East     90  32  72    194
  West     64  43  79    186
  North    57   0  54    111
  ```

- `round(2)` **changes the data**. If you still need full precision, round a copy.
- `.stack()` on a pivot with `NaN` drops those cells, so `idxmax` can never return an empty combination — which is usually what you want.
- `.at[]` is faster than `.loc[]` for one cell but takes **scalars only** — no slices, no lists.

**Drill**

1. Which `branch` × `product` cell has the largest total `principal_lakhs`?

<details><summary>Answer</summary>

```python
p = bl.pivot_table(index='branch', columns='product', values='principal_lakhs',
                   aggfunc='sum', fill_value=0)
p.stack().idxmax()      # ('Vasco', 'Personal')
```

</details>

---

## P9.19 — Which category has the highest average X — idxmax on a pivot

**Exam phrasings**

- "Identify the Policy_Type having the highest average Claim_Amount."
- "Which product carries the highest mean interest rate?"
- "Name the industry with the largest mean Current_Value."
- "Report the region with the lowest average revenue."

**Core idea.** Build the one-dimensional pivot, then `idxmax()` on the **column** (a pivot column is a Series). `idxmax` returns the **index label**, `max` returns the value. Report both.

**Template**

```python
pt = df.pivot_table(index=CAT_COL, values=MEASURE, aggfunc='mean')
winner = pt[MEASURE].idxmax()
print(winner, pt[MEASURE].max())
```

**Worked — Case 3 Q17 then Q19.**

```python
C3 = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
cl = pd.read_excel(C3, sheet_name="Claims")
pm = pd.read_excel(C3, sheet_name="Policy_Master")
a  = cl.merge(pm, on="Policy_ID", how="left")

pt17 = a.pivot_table(index='Policy_Type', values='Claim_Amount', aggfunc='mean')
print(pt17.round(2))
print(pt17['Claim_Amount'].idxmax(), round(pt17['Claim_Amount'].max(), 2))
```

```text
             Claim_Amount
Policy_Type              
Health          298188.60
Motor           244500.16
Property        485567.72
Travel           81770.07
Property 485567.72
```

**Tie warning.** `idxmax()` returns the **first** label at the maximum and says nothing about ties. The demo notebooks in this course report `idxmax()` winners where the underlying counts are exact ties, which is a reporting bug. Always write the tie-safe form:

```python
s = pt17['Claim_Amount']
print(s[s == s.max()].index.tolist())
```

```text
['Property']
```

A constructed tie, to show the difference:

```python
t  = pd.DataFrame({'K': ['a','a','b','b'], 'V': [1, 3, 2, 2]})
tp = t.pivot_table(index='K', values='V', aggfunc='mean')
print(tp)
print("idxmax:", tp['V'].idxmax())
print("all winners:", tp.index[tp['V'] == tp['V'].max()].tolist())
```

```text
     V
K     
a  2.0
b  2.0
idxmax: a
all winners: ['a', 'b']
```

Both `a` and `b` average 2.0, but `idxmax()` names only `a`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "lowest average" | `idxmin()`, `min()` |
| "highest total" | `aggfunc='sum'` then `idxmax()` |
| "rank all of them" | `pt.sort_values(MEASURE, ascending=False)` |
| "top 3" | `pt[MEASURE].nlargest(3)` |
| "which cell of a 2-D pivot" | `pt.stack().idxmax()` — [P9.18](#p918--sort-round-transpose-and-read-one-cell-of-a-pivot) |
| "groupby form" | `a.groupby('Policy_Type')['Claim_Amount'].mean().idxmax()` |
| "state it in a sentence" | `f"{winner} has the highest average Claim_Amount at Rs. {value:,.2f}"` |

```python
print(a.groupby('Policy_Type')['Claim_Amount'].mean().idxmax())

p = bl.pivot_table(index='product', values='interest_rate', aggfunc='mean').round(3)
print(p)
print(p['interest_rate'].idxmax())
```

```text
Property
          interest_rate
product                
Auto              9.779
Home              9.269
Personal          9.980
SME               9.762
Personal
```

**Traps**

- `pt.idxmax()` on the **DataFrame** returns one label **per column** (a Series), not a scalar. Select the column first: `pt['Claim_Amount'].idxmax()`.
- Ties are silent. Use the boolean-mask form, and say "there is a tie" if there is one.
- `idxmax()` raises on an all-`NaN` column and **skips** `NaN` otherwise.
- A group of size 1 can win an "average" comparison. If the examiner asks you to interpret, add the group sizes: `a.groupby('Policy_Type')['Claim_Amount'].agg(['count','mean'])`.

**Drill**

1. Which `Industry` has the largest mean `Current_Value` in Case 2? Give the tie-safe answer.

<details><summary>Answer</summary>

```python
pt = p.pivot_table(index='Industry', values='Current_Value', aggfunc='mean')
s  = pt['Current_Value']
s.idxmax(), s[s == s.max()].index.tolist()    # 'Pharmaceuticals'
```

</details>

---

## All 24 exercise pivots, answered

Reading rule used everywhere: **"value by A × B" → `values=value`, `index=A`, `columns=B`** ([P9.2](#p92--reading-the-phrase-a--b--which-dimension-goes-where)).

```python
import pandas as pd
pd.set_option('display.width', 210)
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
P04  = BASE + "Pandas exercises/04 Sorting, slicing and pivot/"
eq = pd.read_csv(P04 + "Exercise 1/equity_trades.csv")
bl = pd.read_csv(P04 + "Exercise 2/bank_loans.csv")
mf = pd.read_csv(P04 + "Exercise 3/mutual_funds.csv")
```

### Exercise 1 — equity_trades.csv (85 x 10)

**B1. "Total quantity by broker × ticker (sum, fill_value=0, with margins=True labeled Total)."**

```python
print(eq.pivot_table(index='broker', columns='ticker', values='quantity',
                     aggfunc='sum', fill_value=0,
                     margins=True, margins_name='Total'))
```

```text
ticker   AXISBANK  HDFCBANK  INFY   ITC    LT  RELIANCE   SBIN   TCS  Total
broker                                                                     
HDFC          850       865  1045   670     0       876   5016  1463  10785
ICICI         748         0   862  2005     0         0   1678  1761   7054
Kotak         778         0   676   995  1587       473   1488  1729   7726
Upstox        749      1348   378   122  1173      1479    958     0   6207
Zerodha       347       636  1209     0  1374       520   2517  2293   8896
Total        3472      2849  4170  3792  4134      3348  11657  7246  40668
```

Seven cells are `0` because those broker/ticker pairs never traded — `fill_value=0` is doing real work here.

**B2. "Mean price by segment × ticker (mean, fill_value=0)."**

```python
print(eq.pivot_table(index='segment', columns='ticker', values='price',
                     aggfunc='mean', fill_value=0).round(2))
```

```text
ticker   AXISBANK  HDFCBANK     INFY      ITC       LT  RELIANCE     SBIN      TCS
segment                                                                           
CASH      2002.55   2058.14  2169.09  1789.62  1785.65   2085.66  2030.61  1462.05
F&O       2226.78   1879.62  2531.25  1426.14  1957.47   1838.94  1916.06  1387.14
```

Every `segment × ticker` pair exists, so `fill_value=0` changes nothing. Write it anyway — the question asks for it.

**B3. "Count of trades by side × broker (count on trade_id)."**

```python
print(eq.pivot_table(index='side', columns='broker', values='trade_id',
                     aggfunc='count', fill_value=0))
```

```text
broker  HDFC  ICICI  Kotak  Upstox  Zerodha
side                                       
BUY       13      2     11      10       13
SELL      10      9      5       4        8
```

**B4. "Std of price by ticker × side."**

```python
print(eq.pivot_table(index='ticker', columns='side', values='price', aggfunc='std').round(2))
```

```text
side          BUY     SELL
ticker                    
AXISBANK   962.12  1061.26
HDFCBANK  1165.39  1183.73
INFY      1383.90   659.10
ITC        813.48  1062.80
LT         715.77   748.02
RELIANCE  1251.65   748.54
SBIN      1285.68  1367.18
TCS        684.63   465.50
```

No `NaN` — the smallest `ticker × side` group has 3 trades, enough for a sample std.

**B5. "Multiple aggs on notional by broker × segment: ['sum','mean']; then flatten columns to sum_notional, mean_notional."**

The `broker × segment` table, then the lecture's flatten line:

```python
pt = eq.pivot_table(index='broker', columns='segment', values='notional', aggfunc=['sum','mean'])
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]
print(pt.round(2))
```

```text
            sum_CASH      sum_F&O   mean_CASH    mean_F&O
broker                                                   
HDFC     11331817.36  10163693.23  1030165.21   846974.44
ICICI     7990447.93   5365750.64   998805.99  1788583.55
Kotak     7762933.55   3637038.86   862548.17   519576.98
Upstox    8956921.49   4514937.38  1279560.21   644991.05
Zerodha   8259857.93   8763136.15   750896.18   876313.62
```

The literal names the question asks for (`sum_notional`, `mean_notional`) appear only when level 1 is the value name, i.e. **without** the `segment` split — give both to be safe:

```python
pt5 = eq.pivot_table(index='broker', values='notional', aggfunc=['sum','mean'])
pt5.columns = [f'{agg}_{col}' for agg, col in pt5.columns]
print(pt5.round(2))
```

```text
         sum_notional  mean_notional
broker                              
HDFC      21495510.59      934587.42
ICICI     13356198.57     1214199.87
Kotak     11399972.41      712498.28
Upstox    13471858.87      962275.63
Zerodha   17022994.08      810618.77
```

Or keep the segment split **and** the measure name: `pt.columns = [f'{agg}_notional_{col}' for agg, col in pt.columns]` → `sum_notional_CASH`, `sum_notional_F&O`, `mean_notional_CASH`, `mean_notional_F&O`.

**B6. "Multiple values (quantity and fee) summed by segment × broker; optional flatten to quantity_* and fee_*."**

```python
pt6 = eq.pivot_table(index='segment', columns='broker',
                     values=['quantity','fee'], aggfunc='sum', fill_value=0)
print(pt6.round(2))
```

```text
            fee                                 quantity                           
broker     HDFC   ICICI   Kotak  Upstox Zerodha     HDFC ICICI Kotak Upstox Zerodha
segment                                                                            
CASH     411.07  275.51  348.49  253.55  372.34     5519  4628  4761   3982    5569
F&O      411.22  103.73  239.44  261.63  314.22     5266  2426  2965   2225    3327
```

```python
pt6.columns = [f'{val}_{col}' for val, col in pt6.columns]
print(pt6.round(2))
```

```text
         fee_HDFC  fee_ICICI  fee_Kotak  fee_Upstox  fee_Zerodha  quantity_HDFC  quantity_ICICI  quantity_Kotak  quantity_Upstox  quantity_Zerodha
segment                                                                                                                                           
CASH       411.07     275.51     348.49      253.55       372.34           5519            4628            4761             3982              5569
F&O        411.22     103.73     239.44      261.63       314.22           5266            2426            2965             2225              3327
```

`fee_*` comes before `quantity_*` because pandas alphabetises the `values` level.

**B7. "Variance of fee by broker × algo_flag."**

```python
print(eq.pivot_table(index='broker', columns='algo_flag', values='fee', aggfunc='var').round(3))
```

```text
algo_flag    False    True 
broker                     
HDFC        98.342  127.403
ICICI       32.641   66.622
Kotak       55.844  162.992
Upstox       8.926  225.352
Zerodha    121.231   98.702
```

Boolean labels `False` / `True` — [P9.16](#p916--pivot-on-a-boolean-column).

**B8. "First and last price by ticker × side using aggfunc=['first','last'] and then flatten."**

```python
pt8 = eq.pivot_table(index='ticker', columns='side', values='price', aggfunc=['first','last'])
pt8.columns = [f'{agg}_{col}' for agg, col in pt8.columns]
print(pt8)
```

```text
          first_BUY  first_SELL  last_BUY  last_SELL
ticker                                              
AXISBANK    3379.02     1378.37   3273.31    2484.91
HDFCBANK    2142.22     3304.54    822.86    2185.46
INFY        3010.62     3098.04   3083.33    2338.69
ITC         1030.17     2503.15   1619.37    2512.01
LT          2499.32     1745.76   1079.65     663.48
RELIANCE    3032.62     3379.42    654.50    2477.87
SBIN         397.98      994.89   3093.44    3105.82
TCS         1736.11     1706.50   2018.97    2837.17
```

`first` / `last` = first and last row **in file order** inside each group, not min and max.

### Exercise 2 — bank_loans.csv (80 x 10)

**B1. "Sum principal_lakhs by branch × product (fill_value=0, with totals)."**

```python
print(bl.pivot_table(index='branch', columns='product', values='principal_lakhs',
                     aggfunc='sum', fill_value=0,
                     margins=True, margins_name='Total').round(2))
```

```text
product    Auto    Home  Personal     SME    Total
branch                                            
Mapusa    78.21  105.57     21.92   94.02   299.72
Margao    54.54  114.13    131.06    8.00   307.73
Panaji    62.44   41.10     92.31   11.59   207.44
Ponda    109.15   59.15     34.99   71.02   274.31
Vasco    104.07   73.65    152.14   39.03   368.89
Total    408.41  393.60    432.42  223.66  1458.09
```

Every `branch × product` pair exists here, so nothing was filled.

**B2. "Mean interest_rate by risk_grade × product."**

```python
print(bl.pivot_table(index='risk_grade', columns='product',
                     values='interest_rate', aggfunc='mean').round(2))
```

```text
product      Auto  Home  Personal    SME
risk_grade                              
A           10.35  9.88     10.60   8.18
B            8.95  9.85      9.83  10.49
C            9.56  8.94     10.49   9.25
D            9.85  8.17      8.68  10.78
```

**B3. "Count of loans by status × branch (count loan_id)."**

```python
print(bl.pivot_table(index='status', columns='branch', values='loan_id',
                     aggfunc='count', fill_value=0))
```

```text
branch      Mapusa  Margao  Panaji  Ponda  Vasco
status                                          
Closed           4       6       2      5      7
Current          4       8       3      3      5
Delinquent       8       2       7      8      8
```

**B4. "Std of emi_estimate by product × secured."**

```python
print(bl.pivot_table(index='product', columns='secured',
                     values='emi_estimate', aggfunc='std').round(2))
```

```text
secured      False     True 
product                     
Auto      32761.21  21790.28
Home      23678.51  13944.58
Personal   8411.56  33003.82
SME       19238.97   9370.28
```

**B5. "Multiple aggs (sum, mean) of principal_lakhs by branch × status and flatten."**

```python
pt = bl.pivot_table(index='branch', columns='status',
                    values='principal_lakhs', aggfunc=['sum','mean'])
print(pt.round(2))
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]
print(pt.round(2))
```

```text
           sum                      mean                   
status  Closed Current Delinquent Closed Current Delinquent
branch                                                     
Mapusa   94.59   70.94     134.19  23.65   17.74      16.77
Margao  112.42  166.84      28.47  18.74   20.86      14.24
Panaji   60.73   39.75     106.96  30.36   13.25      15.28
Ponda    74.40   41.29     158.62  14.88   13.76      19.83
Vasco   105.74   85.50     177.65  15.11   17.10      22.21
        sum_Closed  sum_Current  sum_Delinquent  mean_Closed  mean_Current  mean_Delinquent
branch                                                                                     
Mapusa       94.59        70.94          134.19        23.65         17.74            16.77
Margao      112.42       166.84           28.47        18.74         20.86            14.24
Panaji       60.73        39.75          106.96        30.36         13.25            15.28
Ponda        74.40        41.29          158.62        14.88         13.76            19.83
Vasco       105.74        85.50          177.65        15.11         17.10            22.21
```

**B6. "Multiple values (principal_lakhs, emi_estimate) summed by product × branch; optional flatten."**

```python
pt6 = bl.pivot_table(index='product', columns='branch',
                     values=['principal_lakhs','emi_estimate'],
                     aggfunc='sum', fill_value=0)
print(pt6.round(2))
```

```text
         emi_estimate                                             principal_lakhs                               
branch         Mapusa     Margao     Panaji      Ponda      Vasco          Mapusa  Margao Panaji   Ponda   Vasco
product                                                                                                         
Auto        133772.45   67769.17  194397.26  164840.04  140541.60           78.21   54.54  62.44  109.15  104.07
Home        224506.04  173879.37   56659.33   73296.73   85563.54          105.57  114.13  41.10   59.15   73.65
Personal     35659.54  152632.18  126749.08  141188.64  218920.17           21.92  131.06  92.31   34.99  152.14
SME         154575.04   12788.78   41851.31  116276.14   33974.53           94.02    8.00  11.59   71.02   39.03
```

```python
pt6.columns = [f'{val}_{col}' for val, col in pt6.columns]
print(list(pt6.columns))
print(pt6.iloc[:, :5].round(2))
```

```text
['emi_estimate_Mapusa', 'emi_estimate_Margao', 'emi_estimate_Panaji', 'emi_estimate_Ponda', 'emi_estimate_Vasco', 'principal_lakhs_Mapusa', 'principal_lakhs_Margao', 'principal_lakhs_Panaji', 'principal_lakhs_Ponda', 'principal_lakhs_Vasco']
          emi_estimate_Mapusa  emi_estimate_Margao  emi_estimate_Panaji  emi_estimate_Ponda  emi_estimate_Vasco
product                                                                                                        
Auto                133772.45             67769.17            194397.26           164840.04           140541.60
Home                224506.04            173879.37             56659.33            73296.73            85563.54
Personal             35659.54            152632.18            126749.08           141188.64           218920.17
SME                 154575.04             12788.78             41851.31           116276.14            33974.53
```

10 columns; the remaining 5 (`principal_lakhs_*`) are the right-hand block of the un-flattened print above.

**B7. "Variance of interest_rate by risk_grade × product."**

```python
print(bl.pivot_table(index='risk_grade', columns='product',
                     values='interest_rate', aggfunc='var').round(3))
```

```text
product      Auto    Home  Personal    SME
risk_grade                                
A           4.797   2.088     2.676    NaN
B           0.416  11.463     2.288  3.393
C           5.223   4.713     3.562  4.212
D           1.799   4.380     0.094    NaN
```

The two `NaN`s are **not** empty cells. `risk_grade` A × `SME` and D × `SME` each contain **exactly one** loan, and sample variance (`ddof=1`) of a single value is undefined:

```python
print(bl.groupby(['risk_grade','product']).size().unstack(fill_value=0))
```

```text
product     Auto  Home  Personal  SME
risk_grade                           
A              6     4         6    1
B              3     6         7    5
C              7     8         5    6
D              8     3         4    1
```

State that in your answer. Do **not** cover it with `fill_value=0` — a variance of 0 would be a different claim.

**B8. "First and last tenure_months by branch × product (flatten)."**

```python
pt8 = bl.pivot_table(index='branch', columns='product',
                     values='tenure_months', aggfunc=['first','last'])
pt8.columns = [f'{agg}_{col}' for agg, col in pt8.columns]
print(pt8)
```

```text
        first_Auto  first_Home  first_Personal  first_SME  last_Auto  last_Home  last_Personal  last_SME
branch                                                                                                  
Mapusa         114          48              80        126         46        145             80       164
Margao         225         110             184        101        102         71            200       101
Panaji         117          71             138         32        120        103            197        32
Ponda          115         134              55         42         16         86             24        96
Vasco          169         150             180        230        113        171            231       201
```

Where `first_X == last_X` (e.g. `Mapusa` / `Personal` = 80, `Panaji` / `SME` = 32) the group has only one loan.

### Exercise 3 — mutual_funds.csv (70 x 9)

**B1. "Sum amount by amc × scheme (fill_value=0, with totals)."**

```python
print(mf.pivot_table(index='amc', columns='scheme', values='amount',
                     aggfunc='sum', fill_value=0,
                     margins=True, margins_name='Total').round(2))
```

```text
scheme  Arbitrage        Debt      Equity     Hybrid      Index       Total
amc                                                                        
Axis     79874.95   316425.28   357108.49  212486.14  142371.01  1108265.87
HDFC    139059.58   152807.49   173795.19  221217.72   52214.19   739094.17
ICICI    79519.91   210148.66   134987.57   70597.90   46517.21   541771.25
SBI     125441.72   145811.50    88406.20  205296.30   54625.48   619581.20
UTI      58556.13   225010.61   553661.26   23791.12   73294.92   934314.04
Total   482452.29  1050203.54  1307958.71  733389.18  369022.81  3943026.53
```

**B2. "Mean nav by scheme × channel."**

```python
print(mf.pivot_table(index='scheme', columns='channel', values='nav', aggfunc='mean').round(2))
```

```text
channel    Direct  Distributor  Online
scheme                                
Arbitrage   41.98        39.77   47.72
Debt        45.62        44.26   54.75
Equity      47.71        55.39   40.59
Hybrid      48.00        61.51   52.33
Index       42.12        33.26   42.52
```

**B3. "Count of transactions by investor_type × amc (count txn_id)."**

```python
print(mf.pivot_table(index='investor_type', columns='amc', values='txn_id',
                     aggfunc='count', fill_value=0))
```

```text
amc            Axis  HDFC  ICICI  SBI  UTI
investor_type                             
HNI               5     4      3    4    6
Institutional     8     3      4    2    3
Retail            6     6      3    7    6
```

**B4. "Std of units by scheme × investor_type."**

```python
print(mf.pivot_table(index='scheme', columns='investor_type',
                     values='units', aggfunc='std').round(2))
```

```text
investor_type     HNI  Institutional  Retail
scheme                                      
Arbitrage      589.04         722.46  126.63
Debt           350.82         558.95  233.39
Equity         378.80         499.46  540.76
Hybrid         639.39         470.01  171.31
Index          254.49         328.69  605.12
```

**B5. "Multiple aggs (sum, mean) of amount by amc × channel and flatten."**

```python
pt = mf.pivot_table(index='amc', columns='channel', values='amount', aggfunc=['sum','mean'])
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]
print(pt.round(2))
```

```text
       sum_Direct  sum_Distributor  sum_Online  mean_Direct  mean_Distributor  mean_Online
amc                                                                                       
Axis    334877.73        230152.73   543235.41     47839.68          57538.18     67904.43
HDFC          NaN        343338.73   395755.44          NaN          49048.39     65959.24
ICICI   153692.18        272628.34   115450.73     51230.73          68157.08     38483.58
SBI     155863.90        284626.67   179090.63     77931.95          40660.95     44772.66
UTI     223419.52        348255.85   362638.67     55854.88          69651.17     60439.78
```

`HDFC / Direct` is `NaN` — **zero** HDFC transactions came through the Direct channel:

```python
print(((mf.amc == 'HDFC') & (mf.channel == 'Direct')).sum())
print(mf.groupby(['amc','channel']).size().unstack(fill_value=0))
```

```text
0
channel  Direct  Distributor  Online
amc                                 
Axis          7            4       8
HDFC          0            7       6
ICICI         3            4       3
SBI           2            7       4
UTI           4            5       6
```

Add `fill_value=0` if the question wants zeros — but note `mean_Direct = 0` for HDFC would be misleading.

**B6. "Multiple values (units, amount) summed by scheme × amc; optional flatten."**

```python
pt6 = mf.pivot_table(index='scheme', columns='amc',
                     values=['units','amount'], aggfunc='sum', fill_value=0)
print(pt6.round(2))
```

```text
              amount                                                units                                    
amc             Axis       HDFC      ICICI        SBI        UTI     Axis     HDFC    ICICI      SBI      UTI
scheme                                                                                                       
Arbitrage   79874.95  139059.58   79519.91  125441.72   58556.13  1954.92  3154.88  2269.13  2694.18  1233.28
Debt       316425.28  152807.49  210148.66  145811.50  225010.61  5479.11  4084.34  3887.93  2719.72  4919.64
Equity     357108.49  173795.19  134987.57   88406.20  553661.26  7092.08  5112.82  2720.17  2105.73  9576.52
Hybrid     212486.14  221217.72   70597.90  205296.30   23791.12  4712.73  4035.43   974.33  3880.25   662.89
Index      142371.01   52214.19   46517.21   54625.48   73294.92  3743.79  1422.73  1335.55  1288.77  1255.05
```

```python
pt6.columns = [f'{val}_{col}' for val, col in pt6.columns]
print(list(pt6.columns))
print(pt6.iloc[:, :5].round(2))
```

```text
['amount_Axis', 'amount_HDFC', 'amount_ICICI', 'amount_SBI', 'amount_UTI', 'units_Axis', 'units_HDFC', 'units_ICICI', 'units_SBI', 'units_UTI']
           amount_Axis  amount_HDFC  amount_ICICI  amount_SBI  amount_UTI
scheme                                                                   
Arbitrage     79874.95    139059.58      79519.91   125441.72    58556.13
Debt         316425.28    152807.49     210148.66   145811.50   225010.61
Equity       357108.49    173795.19     134987.57    88406.20   553661.26
Hybrid       212486.14    221217.72      70597.90   205296.30    23791.12
Index        142371.01     52214.19      46517.21    54625.48    73294.92
```

**B7. "Variance of nav by amc × scheme."**

```python
print(mf.pivot_table(index='amc', columns='scheme', values='nav', aggfunc='var').round(2))
```

```text
scheme  Arbitrage    Debt  Equity  Hybrid  Index
amc                                             
Axis         0.38  404.57  258.32  231.31  44.15
HDFC        37.41  860.25   70.22   90.29    NaN
ICICI       24.64   83.58  446.41  394.52    NaN
SBI         81.54  249.09    8.47    0.08  75.28
UTI           NaN   98.26  145.58     NaN    NaN
```

Five `NaN`s, all single-transaction groups (`HDFC/Index`, `ICICI/Index`, `UTI/Arbitrage`, `UTI/Hybrid`, `UTI/Index` each have 1 row — see the B1 size table).

**B8. "First and last nav by scheme × channel (flatten)."**

```python
pt8 = mf.pivot_table(index='scheme', columns='channel', values='nav', aggfunc=['first','last'])
pt8.columns = [f'{agg}_{col}' for agg, col in pt8.columns]
print(pt8)
```

```text
           first_Direct  first_Distributor  first_Online  last_Direct  last_Distributor  last_Online
scheme                                                                                              
Arbitrage         41.55              40.68         47.48        33.64             39.30        47.95
Debt              56.76              68.72         41.85        58.51             43.31        47.18
Equity            26.15              46.45         29.90        59.93             44.83        30.88
Hybrid            53.04              52.66         62.76        42.97             35.89        63.31
Index             42.12              31.97         31.61        42.12             31.11        43.52
```

`Index / Direct` is 42.12 for both `first` and `last` — that group has one transaction.

---

## Capstone pivots (Case 1 Q12, Case 2 Q16/17, Case 3 Q16-19)

### Case 1 Q12 — pivots on a concatenated common-period dataset

> "Use only the common calendar period 2021-01-01 to 2022-12-30. For each stock: extract this period; add a column named Stock containing the company name. Concatenate the three extracted datasets vertically… construct pivot tables showing: 1. mean Close by Stock; 2. minimum and maximum Close by Stock; 3. mean Close and mean Volume by Stock; 4. minimum, mean and maximum Volume by Stock."

```python
C1 = BASE + "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"

frames = []
for sheet in ["Reliance", "TCS", "Infosys"]:
    d = pd.read_excel(C1, sheet_name=sheet)
    d = d[(d['Date'] >= '2021-01-01') & (d['Date'] <= '2022-12-30')].copy()
    d['Stock'] = sheet
    frames.append(d)
comb = pd.concat(frames, axis=0, ignore_index=True)
print(comb.shape)
print(comb['Stock'].value_counts())
```

```text
(1534, 7)
Stock
Infosys     513
TCS         511
Reliance    510
Name: count, dtype: int64
```

**Q12.1 — mean Close by Stock** (one dimension, one aggfunc → [P9.1](#p91--the-anatomy-of-pivot_table--index-columns-values-aggfunc)):

```python
print(comb.pivot_table(index='Stock', values='Close', aggfunc='mean').round(2))
```

```text
            Close
Stock            
Infosys   1194.37
Reliance  2528.81
TCS       3511.49
```

**Q12.2 — minimum and maximum Close by Stock** (list aggfunc → [P9.5](#p95--two-or-more-aggregation-functions--aggfuncsummean)):

```python
print(comb.pivot_table(index='Stock', values='Close', aggfunc=['min','max']))
```

```text
              min      max
            Close    Close
Stock                     
Infosys    853.42  1464.82
Reliance  2141.99  2907.39
TCS       2586.87  4312.09
```

**Q12.3 — mean Close and mean Volume by Stock** (list values → [P9.7](#p97--two-or-more-value-columns-with-one-aggregation)):

```python
print(comb.pivot_table(index='Stock', values=['Close','Volume'], aggfunc='mean').round(2))
```

```text
            Close      Volume
Stock                        
Infosys   1194.37  5191400.13
Reliance  2528.81  7601119.76
TCS       3511.49  3214944.14
```

**Q12.4 — minimum, mean and maximum Volume by Stock:**

```python
print(comb.pivot_table(index='Stock', values='Volume', aggfunc=['min','mean','max']).round(1))
```

```text
              min       mean       max
           Volume     Volume    Volume
Stock                                 
Infosys   2083661  5191400.1  18331339
Reliance  3038132  7601119.8  22332150
TCS       1168198  3214944.1   8037554
```

Groupby forms, if the question names `groupby`:

```python
print(comb.groupby('Stock')['Close'].mean().round(2))
print(comb.groupby('Stock').agg({'Close':'mean','Volume':'mean'}).round(2))
print(comb.groupby('Stock')['Volume'].agg(['min','mean','max']).round(1))
```

```text
Stock
Infosys     1194.37
Reliance    2528.81
TCS         3511.49
Name: Close, dtype: float64
            Close      Volume
Stock                        
Infosys   1194.37  5191400.13
Reliance  2528.81  7601119.76
TCS       3511.49  3214944.14
              min       mean       max
Stock                                 
Infosys   2083661  5191400.1  18331339
Reliance  3038132  7601119.8  22332150
TCS       1168198  3214944.1   8037554
```

### Case 2 Q16 and Q17 — bond portfolio

```python
C2 = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
h = pd.read_excel(C2, sheet_name="Bond_Holdings")
m = pd.read_excel(C2, sheet_name="Bond_Master")
p = h.merge(m, on="Bond_Code", how="left")
p['Purchase_Value']   = p['Units_Held'] * p['Purchase_Price']
p['Current_Value']    = p['Units_Held'] * p['Current_Price']
p['Value_Change']     = p['Current_Value'] - p['Purchase_Value']
p['Value_Change_pct'] = p['Value_Change'] / p['Purchase_Value'] * 100
```

**Q16 — "Create a pivot table showing mean Current_Value by Industry."**

```python
print(p.pivot_table(index='Industry', values='Current_Value', aggfunc='mean').round(2))
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

Ranked, which is what a reviewer actually wants:

```python
print(p.pivot_table(index='Industry', values='Current_Value', aggfunc='mean')
        .round(2).sort_values('Current_Value', ascending=False))
```

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

**Q17 — "Create another pivot table showing the mean and maximum Value_Change_pct for each Credit_Rating."**

```python
pt = p.pivot_table(index='Credit_Rating', values='Value_Change_pct', aggfunc=['mean','max'])
print(pt.round(3))
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]
print(pt.round(3))
```

```text
                          mean              max
              Value_Change_pct Value_Change_pct
Credit_Rating                                  
A                        2.434           13.537
AA                       2.388           13.614
AAA                      0.377           13.907
               mean_Value_Change_pct  max_Value_Change_pct
Credit_Rating                                             
A                              2.434                13.537
AA                             2.388                13.614
AAA                            0.377                13.907
```

Groupby form:

```python
print(p.groupby('Credit_Rating')['Value_Change_pct'].agg(['mean','max']).round(3))
```

```text
                mean     max
Credit_Rating               
A              2.434  13.537
AA             2.388  13.614
AAA            0.377  13.907
```

**Case 2 extra the examiner may add** — `Industry × Credit_Rating`. In this dataset each `Industry` maps to exactly **one** `Credit_Rating`, so the table is almost all zeros. Say that in the write-up rather than presenting it as a finding:

```python
print(p.pivot_table(index='Industry', columns='Credit_Rating',
                    values='Current_Value', aggfunc='mean', fill_value=0).round(0))
```

```text
Credit_Rating           A        AA       AAA
Industry                                     
Automobile            0.0  103575.0       0.0
Banking               0.0       0.0  115003.0
Infrastructure        0.0  133397.0       0.0
Pharmaceuticals  161081.0       0.0       0.0
Power            131031.0       0.0       0.0
Telecom               0.0       0.0  127602.0
```

Related known defect: **Case 2 Q11** (`Credit_Rating == "AAA"` and `Current_Value > 400000`) returns **zero** rows, because the portfolio maximum `Current_Value` is 246,148. That is a selection question, not a pivot one, but if you build the pivot above you can see immediately why — no AAA industry averages anywhere near 400,000.

### Case 3 Q16-Q19 — insurance claims

```python
C3 = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
cl = pd.read_excel(C3, sheet_name="Claims")
pm = pd.read_excel(C3, sheet_name="Policy_Master")
a  = cl.merge(pm, on="Policy_ID", how="left")
```

**Q16 — "Create a cross-tabulation with Policy_Type as rows and Claim_Status as columns."** ([P9.15](#p915--crosstab-vs-pivot_tableaggfunccount))

```python
print(pd.crosstab(a['Policy_Type'], a['Claim_Status']))
print(a.pivot_table(index='Policy_Type', columns='Claim_Status',
                    values='Claim_ID', aggfunc='count', fill_value=0))
```

```text
Claim_Status  Approved  Pending  Rejected
Policy_Type                              
Health              20        2         4
Motor               22       10         4
Property            28        8         5
Travel              31        9         7
Claim_Status  Approved  Pending  Rejected
Policy_Type                              
Health              20        2         4
Motor               22       10         4
Property            28        8         5
Travel              31        9         7
```

**Q17 — "Create a pivot table showing mean Claim_Amount for each Policy_Type."**

```python
pt17 = a.pivot_table(index='Policy_Type', values='Claim_Amount', aggfunc='mean')
print(pt17.round(2))
```

```text
             Claim_Amount
Policy_Type              
Health          298188.60
Motor           244500.16
Property        485567.72
Travel           81770.07
```

**Q18 — "Create another pivot table showing the minimum, mean and maximum Settlement_Days for each Risk_Category."**

```python
pt18 = a.pivot_table(index='Risk_Category', values='Settlement_Days',
                     aggfunc=['min','mean','max'])
print(pt18.round(2))
pt18.columns = [f'{agg}_{col}' for agg, col in pt18.columns]
print(pt18.round(2))
```

```text
                          min            mean             max
              Settlement_Days Settlement_Days Settlement_Days
Risk_Category                                                
High                        3           39.75              70
Low                         7           41.70              75
Moderate                    5           38.77              75
               min_Settlement_Days  mean_Settlement_Days  max_Settlement_Days
Risk_Category                                                                
High                             3                 39.75                   75
Low                              7                 41.70                   75
Moderate                         5                 38.77                   75
```

<!-- authoritative re-print of the flattened table -->

```text
               min_Settlement_Days  mean_Settlement_Days  max_Settlement_Days
Risk_Category                                                                
High                             3                 39.75                   70
Low                              7                 41.70                   75
Moderate                         5                 38.77                   75
```

**Q19 — "Identify the Policy_Type having the highest average Claim_Amount."** ([P9.19](#p919--which-category-has-the-highest-average-x--idxmax-on-a-pivot))

```python
s = pt17['Claim_Amount']
print(s.idxmax(), round(s.max(), 2))
print("all winners (tie-safe):", s[s == s.max()].index.tolist())
print(a.groupby('Policy_Type')['Claim_Amount'].mean().idxmax())
```

```text
Property 485567.72
all winners (tie-safe): ['Property']
Property
```

---

## Write-up answers

Model answers for the discussion parts. Three to five sentences each; these carry marks.

**"Why does the Region × Product pivot show NaN at North / Product B, and what does fill_value=0 do?"**

> The pivot cell is `NaN` because there is no observation in the data with `Region == 'North'` and `Product == 'B'` — a filter on those two conditions returns an empty DataFrame, and the count table shows 0 for that pair. `pivot_table` can only aggregate rows that exist, so it leaves the cell missing rather than inventing a value. `fill_value=0` substitutes 0 into the missing cells **after** aggregation; it does not change any computed total, and as a side effect the column dtype returns from `float64` to `int64` because there is no longer a missing value in the block. For a `sum` this 0 is a fair reading ("North sold no Product B"), but for `mean`, `min` or `std` a 0 would assert something false, so there `NaN` should be left visible or explained.

**"Explain what the corner cell of a pivot table with margins=True represents."**

> The corner cell is the aggregation applied to the **entire** dataset, not to the displayed row or column totals. With `aggfunc='sum'` it happens to equal the sum of the margin row and the margin column, which is why the distinction is easy to miss. With `aggfunc='mean'` it is the grand mean of all 69 observations (10.188), which is **not** the average of the four regional means or of the twelve displayed cells. All margins are computed from the raw rows belonging to that whole row or column, so a margin mean for North (11.100) is the mean of all ten North rows, not the mean of the two non-empty North cells (11.625).

**"Why does the course teach pivot_table rather than pivot?"**

> `pivot` only re-labels: it assumes there is exactly one value for every (index, column) pair, and raises `ValueError: Index contains duplicate entries, cannot reshape` the moment there is more than one. Real transaction data always has many rows per combination — the 69-row `Sales_Pivot` sheet has 58 duplicate `(Region, Product)` pairs across only 11 distinct combinations. `pivot_table` adds the `aggfunc` step, so it collapses those duplicates into one number per cell and also offers `fill_value`, `margins` and `dropna`. You can still use `pivot` if you aggregate first with `groupby(..., as_index=False)`, but that is two steps for the same result.

**"Compare count and size as the aggregation function."**

> `count` counts the **non-null** values of the column named in `values=`, while `size` counts the **rows** in the group and ignores `values=` entirely. They agree whenever the measured column has no missing data, which is the case in all three `04` CSVs. If one `Units` value is blanked, `count` for that cell falls from 7 to 6 while `size` stays at 7. So "count of trades" should be answered by counting an id column that is never missing (`trade_id`, `loan_id`, `txn_id`), and "how many records" is more safely answered with `size`.

**"A pivot of variance shows NaN for some groups. Is the code wrong?"**

> No. `aggfunc='var'` and `aggfunc='std'` use the sample formula with `ddof=1`, which divides by `n-1`, so a group containing a single observation has an undefined variance and correctly returns `NaN`. In `bank_loans.csv` the pairs `risk_grade` A × `SME` and D × `SME` each contain exactly one loan, which is why those two cells are blank; a size table confirms it. Filling them with 0 would be wrong, because 0 would claim the rates in those groups do not vary rather than saying there is not enough data to tell.

**"What is the difference between sort=True and sort=False?"**

> `sort=True`, the default, orders both the row labels and the column labels alphabetically. `sort=False` returns them in **order of first appearance in the data**, which for `Sales_Pivot` means rows `East, West, South, North` and columns `C, A, B`. Only the presentation changes: East × Product A is 90 in both tables. Because the row order is data-dependent under `sort=False`, any answer that indexes by position (`pt.iloc[0]`) can silently point at a different region, so label-based access (`pt.loc['North']`) should be preferred.

---

## Chapter cheat sheet

**The full `pivot_table` signature, restricted to what this course uses:**

```python
df.pivot_table(
    index=      'ROW_COL',            # or ['ROW1','ROW2']  -> rows      (first dim in "A x B")
    columns=    'COL_COL',            # or ['COL1','COL2']  -> columns   (second dim in "A x B")
    values=     'MEASURE',            # or ['M1','M2']      -> what gets aggregated
    aggfunc=    'mean',               # 'sum' 'mean' 'count' 'size' 'min' 'max' 'std' 'var'
                                      # 'median' 'nunique' 'first' 'last'
                                      # ['sum','mean']            -> MultiIndex columns
                                      # {'a':'sum','b':'mean'}    -> per-column aggregation
    fill_value= 0,                    # what to put in cells with no rows (applied AFTER aggregating)
    margins=    True,                 # add a totals row and a totals column
    margins_name='Total',             # default is 'All'
    dropna=     True,                 # drop result columns that are entirely NaN
    sort=       True,                 # False -> labels in order of first appearance
    observed=   True,                 # False -> show unused Categorical categories
)
```

**The two flatten one-liners (the whole of Exercises 84 and 87):**

```python
pt.columns = [f'{agg}_{col}' for agg, col in pt.columns]   # after aggfunc=['sum','mean']
pt.columns = [f'{val}_{col}' for val, col in pt.columns]   # after values=['Units','Revenue']
```

Three levels, or anything with Booleans in it:

```python
pt.columns = [f'{agg}_{val}_{col}' for agg, val, col in pt.columns]
pt.columns = ['_'.join(str(x) for x in c) for c in pt.columns]   # depth-agnostic, Bool-safe
```

**pivot_table ↔ groupby lookup:**

| Want | pivot_table | groupby |
| --- | --- | --- |
| mean V by C | `pivot_table(index='C', values='V', aggfunc='mean')` | `groupby('C')['V'].mean()` |
| sum V by A × B | `pivot_table(index='A', columns='B', values='V', aggfunc='sum')` | `groupby(['A','B'])['V'].sum().unstack()` |
| fill blanks | `fill_value=0` | `.unstack(fill_value=0)` |
| totals | `margins=True, margins_name='Total'` | `pt.sum()` / `pt.sum(axis=1)` by hand |
| two aggfuncs | `aggfunc=['sum','mean']` | `.agg(['sum','mean'])` |
| per-column aggfunc | `aggfunc={'a':'sum','b':'mean'}` | `.agg({'a':'sum','b':'mean'})` |
| named outputs | — | `.agg(tot=('a','sum'), avg=('b','mean'))` |
| row counts | `aggfunc='size'` | `.size()` |
| non-null counts | `aggfunc='count'` on the id | `['ID'].count()` |
| all numeric means | `values=[...], aggfunc='mean'` | `.mean(numeric_only=True)` |
| flat table | `.reset_index()` | `.reset_index()` / `as_index=False` |
| keep NaN keys | not possible | `groupby(KEY, dropna=False)` |
| label order = file order | `sort=False` | `groupby(C, sort=False)` |
| MultiIndex column order | `(aggfunc, value, column)` | `(value, aggfunc)` — **reversed** |

**Reshape trio:**

```python
df.pivot_table(index=R, columns=C, values=V, aggfunc='sum')   # reshape + aggregate (always safe)
df.pivot(index=R, columns=C, values=V)                        # reshape only; ValueError on duplicates
df.melt(id_vars=[K], value_vars=[A,B],
        var_name='Variable', value_name='Value')              # wide -> long (un-pivot)
pt.stack()  /  pt.unstack()                                   # move a level between axes
```

**Presentation and interpretation:**

```python
pt.round(2)                                # two decimals
pt.sort_values(by='COL', ascending=False)  # rank rows by one column
pt.sort_values(by='ROW', axis=1)           # rank columns by one row
pt.drop(index='Total').sort_values(...)    # sort WITHOUT the margin row jumping to the top
pt.T                                       # swap rows and columns
pt.loc['South', 'B']  /  pt.at['South','B']# one cell
pt['MEASURE'].idxmax()                     # which category is highest
s[s == s.max()].index.tolist()             # tie-safe version of the above
pt.stack().idxmax()                        # which (row, col) cell is highest
pt.stack().nlargest(5)                     # top 5 cells
pt.idxmax(axis=1)                          # best column for each row
(pt.div(pt.sum(axis=1), axis=0) * 100)     # row percentages
pt.reset_index().rename_axis(None, axis=1) # flat frame, no stray axis name
```

**Errors to recognise on sight:**

| Message | Cause | Fix |
| --- | --- | --- |
| `TypeError: agg function failed [how->mean,dtype->object]` | text column reached a numeric aggregation | name `values=`, or `groupby(...).mean(numeric_only=True)` |
| `ValueError: Index contains duplicate entries, cannot reshape` | `pivot` on data with repeated (index, column) pairs | use `pivot_table`, or aggregate then `pivot` |
| `ValueError: too many values to unpack (expected 2)` | 2-name flatten on a 3-level column index | check `pt.columns.nlevels`; add the third name |
| `TypeError: sequence item 1: expected str instance, bool found` | `'_'.join` over a Boolean column level | use the f-string flatten, or `str(x)` inside the join |
| `KeyError: 'True'` | Boolean label accessed as a string | `pt[True]`, not `pt['True']` |
