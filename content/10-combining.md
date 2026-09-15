---
id: 10-combining
part: "Part III — Selection, Ordering, Reshaping"
title: "Combining Data: concat, merge, join"
blurb: "Pick the right combining tool from the question wording, then stack, match or align two tables and explain every NaN and every extra row."
order: 100
covers:
  - "Concat merge join exercises — Exercises 1–10 (workbook sheet `Exercises`)"
  - "Integrated exercises Case 1 — Q9, Q10, Q11"
  - "Integrated exercises Case 2 — Part B Q4"
  - "Integrated exercises Case 3 — Part A Q3"
datafiles:
  - "Concat merge join exercises/pandas_concat_merge_join_practice_datasets.xlsx"
  - "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
  - "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
  - "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
patterns:
  - id: P10.1
    title: "Choose the tool: concat vs merge vs join"
    phrasings:
      - "combine the two datasets"
      - "build one portfolio-analysis table from E10_A to E10_D"
      - "combine the bond holdings with the bond master information using Bond_Code"
      - "combine the policy information with the claims information using Policy_ID"
      - "combine the three stocks horizontally by date"
      - "which function should be used to combine these tables"
  - id: P10.2
    title: "Translate the exam wording into a how= value"
    phrasings:
      - "all observations appearing in Bond_Holdings should remain in the resulting DataFrame"
      - "ensure that all observations from Claims are retained"
      - "create a result containing only transactions for which Client_ID exists in both datasets"
      - "combine them so that every security appearing in either table is retained"
      - "add RiskGrade to every loan application without dropping any application"
      - "keep all transactions even if a later lookup is missing"
  - id: P10.3
    title: "Stack rows that have the same columns"
    phrasings:
      - "The RELIANCE price observations are split across E1_A and E1_B. Combine them into one DataFrame in chronological order."
      - "The final DataFrame should have a fresh 0,1,2,... index rather than retaining the original row indexes"
      - "concatenate the two DataFrames vertically"
      - "create another concatenated version using a fresh integer index"
      - "verify whether the reconstructed data contain the same number of rows as the original"
      - "append the February transactions below the January transactions"
  - id: P10.4
    title: "Stack rows when the columns do not match"
    phrasings:
      - "First combine all rows while retaining every column that appears in either dataset"
      - "Then create a second result retaining only columns common to both datasets"
      - "Explain where the missing values come from in the first result"
      - "concatenate them once retaining all columns, once retaining only common columns"
      - "compare join='outer' with join='inner'"
  - id: P10.5
    title: "Put two series side by side using the index"
    phrasings:
      - "Set Date as the index in both DataFrames. Place the two series side-by-side once using all dates and once using only dates present in both datasets."
      - "Explain why some rows contain NaN"
      - "combine the RELIANCE closing price and the NIFTY closing value by date"
      - "align the two return series on common dates"
      - "add the index level next to the stock price for the same trading days"
  - id: P10.6
    title: "Label the pieces: keys=, names=, verify_integrity, sort"
    phrasings:
      - "mark which rows came from January and which from February"
      - "concatenate with a label identifying the source file"
      - "check that no date appears twice after combining"
      - "combine the two Close Series into one DataFrame with meaningful column names"
      - "create a MultiIndex identifying each source table"
  - id: P10.7
    title: "Merge on a shared key column and pick how="
    phrasings:
      - "E4_A contains transactions and E4_B contains client details. Create a result containing only transactions for which Client_ID exists in both datasets. Include the client Segment in the result."
      - "Identify which transaction disappears and why"
      - "merge the two tables on the common identifier"
      - "bring the customer Segment onto each transaction"
      - "report the number of rows produced by inner, left, right and outer joins"
  - id: P10.8
    title: "Keep every row of the left table (left merge)"
    phrasings:
      - "Add RiskGrade to every loan application without dropping any application. Then identify which rows had no matching risk record."
      - "All observations appearing in Bond_Holdings should remain in the resulting DataFrame"
      - "Ensure that all observations from Claims are retained"
      - "attach the master details without losing any transaction"
      - "which applications have no matching risk grade"
  - id: P10.9
    title: "Merge when the key columns have different names"
    phrasings:
      - "E6_A uses Ticker while E6_B uses Symbol. Combine them so that every security appearing in either table is retained."
      - "Identify securities found only in holdings and only in the master table"
      - "the two tables use different column names for the same identifier"
      - "merge Ticker against Symbol"
      - "use left_on and right_on"
  - id: P10.10
    title: "Duplicate keys and the many-to-many row explosion"
    phrasings:
      - "Before running any code, predict how many rows will result when E7_A and E7_B are merged on Investor_ID using an inner join"
      - "explain why Investor I01 produces multiple combinations"
      - "why does the merged table have more rows than either input"
      - "check whether the merge key is unique before merging"
      - "validate that this is a one-to-many relationship"
  - id: P10.11
    title: "Merge on several keys, or on the index"
    phrasings:
      - "merge on both Month and Ticker"
      - "match on the combination of Branch and Loan_Type"
      - "the lookup table is indexed by the key, not keyed by a column"
      - "rename the _x and _y columns meaningfully"
      - "both tables have a Close column - keep them apart"
  - id: P10.12
    title: "Index-based join and its how= values"
    phrasings:
      - "E8_A contains stock returns and E8_B contains the risk-free rate. Set Date as the index in both. Join the risk-free rate to the stock returns using the default join, then repeat using inner and outer joins."
      - "Compare the dates retained in each result"
      - "an inner join of Reliance and TCS"
      - "a left join with Reliance controlling the dates"
      - "a right join with TCS controlling the dates"
      - "an outer combination containing all three stocks"
      - "For each result, report its shape"
  - id: P10.13
    title: "Join frames that share column names"
    phrasings:
      - "E9_A and E9_B both contain columns named Close and Volume and are indexed by Date. Try joining them directly. Observe the problem."
      - "join them successfully so the final column names clearly identify RELIANCE and TCS"
      - "explain how this differs from concat(axis=1), which can permit duplicate column names"
      - "columns overlap but no suffix specified"
      - "use lsuffix and rsuffix"
  - id: P10.14
    title: "Find the keys that did not match"
    phrasings:
      - "identify which rows had no matching record"
      - "Identify which transaction disappears and why"
      - "Identify securities found only in holdings and only in the master table"
      - "how many policies never appear in any claim"
      - "list the dates present in one dataset but not the other"
      - "confirm that every Bond_Code found a match"
  - id: P10.15
    title: "Count and explain the NaNs a combine creates"
    phrasings:
      - "count missing values in every column"
      - "identify why the missing values appear"
      - "Explain where the missing values come from in the first result"
      - "Explain why some rows contain NaN"
      - "how many rows of the combined table are complete"
  - id: P10.16
    title: "Post-combine hygiene and dtype drift"
    phrasings:
      - "give the combined DataFrame a fresh integer index"
      - "remove the duplicated rows created by the concatenation"
      - "sort the combined table chronologically"
      - "why has Volume become a float column"
      - "check and display the shape of the combined DataFrame"
  - id: P10.17
    title: "Multi-stage pipeline: concat then merge then join"
    phrasings:
      - "Build one portfolio-analysis table from E10_A to E10_D"
      - "First combine the January and February transaction logs. Next enrich each transaction with Company and Sector from the company master. Finally attach the sector risk information."
      - "Keep all transactions even if a later lookup is missing"
      - "Merge this summary DataFrame with Company_Master so that the final table also contains Company and Sector"
      - "build one table showing transaction details, company information and sector risk"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| P10.1 | You must decide between `concat`, `merge` and `join` before writing anything |
| P10.2 | The question describes which rows survive, and you must turn that into `how=` |
| P10.3 | Same columns, more rows — vertical stacking |
| P10.4 | More rows but the two tables have different columns |
| P10.5 | Two value columns for the same dates, to be placed side by side |
| P10.6 | You must label, audit or name the pieces you concatenated |
| P10.7 | Two tables share a key **column** and you must choose inner/left/right/outer |
| P10.8 | "All observations from X must be retained" |
| P10.9 | The same identifier is called `Ticker` in one table and `Symbol` in the other |
| P10.10 | The key repeats on both sides and the row count explodes |
| P10.11 | The match needs two key columns, or one side is keyed by its index |
| P10.12 | Both tables are indexed by Date and you must align them |
| P10.13 | Both tables have a `Close` column and `join` refuses to run |
| P10.14 | "Identify which rows had no matching record" |
| P10.15 | "Count the missing values and explain why they appear" |
| P10.16 | After the combine: index, duplicates, order, dtypes |
| P10.17 | A question that needs concat **and** merge **and** join in sequence |

Then: **Full solution — workbook E1 to E10**, **Full solution — Case 1 Q9/Q10/Q11**,
**Full solution — Case 2 Q4 and Case 3 Q3**, **Write-up answers**, **Chapter cheat sheet**.

**Paths used in this chapter.** Define these once; in the exam swap in your own file name.

```python
import pandas as pd
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
W    = BASE + "Concat merge join exercises/pandas_concat_merge_join_practice_datasets.xlsx"
C1   = BASE + "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
C2   = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
C3   = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
pd.set_option("display.width", 200)
pd.set_option("display.max_columns", 50)
```

Everything below was run on **pandas 2.3.3 / Python 3.9.6**. Note that `df.append()` no longer
exists in pandas 2.x — `pd.concat` is the only vertical-stacking tool.

```python
p.append(q)
```

```text
AttributeError : 'DataFrame' object has no attribute 'append'
```

---

## P10.1 — Choose the tool: concat vs merge vs join

**Exam phrasings**

- "combine the two datasets"
- "Build one portfolio-analysis table from E10_A to E10_D"
- "Combine the bond holdings with the bond master information using Bond_Code"
- "Combine the policy information with the claims information using Policy_ID"
- "Combine the three stocks horizontally by date"
- "which function should be used to combine these tables"

**Core idea.** Answer two questions — *am I adding rows or columns?* and *what am I matching
on?* — and the tool is determined. Do this before typing.

**The decision table**

| What the question describes | Tool | Code |
| --- | --- | --- |
| **More rows, same columns** (Jan log + Feb log; 2019–20 + 2021–22) | `pd.concat(axis=0)` | `pd.concat([a, b], ignore_index=True)` |
| **More rows, different columns** | `pd.concat(axis=0)` + `join=` | `pd.concat([a, b], join="outer")` |
| **More columns, aligned by index** (two stocks by Date) | `pd.concat(axis=1)` or `.join()` | `pd.concat([a, b], axis=1)` / `a.join(b)` |
| **Match on a shared key *column*** (Client_ID, Bond_Code, Policy_ID) | `pd.merge` | `pd.merge(a, b, on="KEY", how="left")` |
| **Match on the *index*** (Date index in both) | `.join()` | `a.join(b, how="inner")` |
| **Key column on the left, index on the right** | `.join(on=)` or `merge` | `a.join(b_idx, on="KEY")` |
| **Key columns have different names** | `pd.merge` | `pd.merge(a, b, left_on="Ticker", right_on="Symbol")` |
| **Every row of A with every row of B** (rare) | `pd.merge(how="cross")` | `pd.merge(a, b, how="cross")` |

**Template**

```python
# rows:      same columns -> stack
pd.concat([df1, df2], ignore_index=True)
# columns:   shared index -> align
df1.join(df2, how="inner")
# key column -> match
pd.merge(df1, df2, on="KEY_COL", how="left")
```

**Worked** — the same two frames, three tools, three different answers.

```python
import pandas as pd
W = "/Volumes/rythmn103/code/bisa_guide/Exercises/Concat merge join exercises/pandas_concat_merge_join_practice_datasets.xlsx"
A = pd.read_excel(W, sheet_name="E3_A").set_index("Date")   # RELIANCE_Close
B = pd.read_excel(W, sheet_name="E3_B").set_index("Date")   # NIFTY_Close
print("concat axis=0 :", pd.concat([A, B]).shape)
print("concat axis=1 :", pd.concat([A, B], axis=1).shape)
print("join  (left)  :", A.join(B).shape)
print("merge on index:", pd.merge(A, B, left_index=True, right_index=True, how="outer").shape)
```

```text
concat axis=0 : (8, 2)
concat axis=1 : (5, 2)
join  (left)  : (4, 2)
merge on index: (5, 2)
```

`concat(axis=0)` gave 8 rows of mostly NaN because the frames have *different* columns — it was
the wrong tool. The shape alone tells you whether you chose correctly.

**Variants**

| If the question says | Use |
| --- | --- |
| "append", "stack", "one below the other", "split across two sheets" | `pd.concat(axis=0)` |
| "side by side", "horizontally", "for the same dates" | `pd.concat(axis=1)` or `.join()` |
| "using Bond_Code", "on Policy_ID", "the common identifier" | `pd.merge(..., on=)` |
| "enrich each transaction with", "attach the master details" | `pd.merge(..., how="left")` |
| "using Sector as an index" | `.join(other_indexed, on="Sector")` |

**Traps**

- `merge` **ignores the index** by default. If your key is the index you must either
  `reset_index()` first or pass `left_index=True`.
- `join` **ignores columns** by default. If your key is a column you must either `set_index()`
  first or pass `on=`.
- `merge` and `join` differ in their default `how`: **`merge` defaults to `inner`, `join`
  defaults to `left`.** State the `how=` explicitly in exam answers; it costs one word and
  removes all doubt.

**Drill**

1. Claims has a `Policy_ID` column, Policy_Master is indexed by `Policy_ID`. Attach the policy
   details to every claim without re-indexing Claims.

<details><summary>Answer</summary>

```python
claims.join(policy_master.set_index("Policy_ID"), on="Policy_ID", how="left")
# or: pd.merge(claims, policy_master, on="Policy_ID", how="left")
```

</details>

---

## P10.2 — Translate the exam wording into a how= value

**Exam phrasings**

- "All observations appearing in Bond_Holdings should remain in the resulting DataFrame"
- "Ensure that all observations from Claims are retained"
- "Create a result containing only transactions for which Client_ID exists in both datasets"
- "Combine them so that every security appearing in either table is retained"
- "Add RiskGrade to every loan application without dropping any application"
- "Keep all transactions even if a later lookup is missing"

**Core idea.** The examiner never writes "inner" or "outer". They describe which rows must
survive. Memorise this translation table — it is worth more marks than any syntax.

| Exam wording | `how=` | Which table goes on the left |
| --- | --- | --- |
| "all observations appearing in **X** should remain" | `left` | X |
| "ensure all observations from **Claims** are retained" | `left` | Claims |
| "without dropping any application" | `left` | applications |
| "keep all transactions even if a later lookup is missing" | `left` | transactions |
| "add Segment **to each** transaction" | `left` | transactions |
| "only records present in **both**" | `inner` | either |
| "for which Client_ID **exists in both** datasets" | `inner` | either |
| "only the **common** dates / the overlapping period" | `inner` | either |
| "**every** security appearing in **either** table" | `outer` | either |
| "the complete list of dates from both sources" | `outer` | either |
| "all rows of the **master**, whether or not they were traded" | `right` (or `left` with the master first) | master |

**Template**

```python
pd.merge(MUST_SURVIVE, LOOKUP, on="KEY", how="left")     # "all rows of MUST_SURVIVE remain"
pd.merge(A, B, on="KEY", how="inner")                    # "only records in both"
pd.merge(A, B, on="KEY", how="outer")                    # "everything from either side"
```

**Worked** — one pair of tables, all four answers, so the wording maps to a number.

```python
tx = pd.read_excel(W, sheet_name="E4_A")   # 4 transactions
cl = pd.read_excel(W, sheet_name="E4_B")   # 4 clients
for h in ["inner", "left", "right", "outer"]:
    print(f"{h:6s} -> {pd.merge(tx, cl, on='Client_ID', how=h).shape}")
```

```text
inner  -> (3, 5)
left   -> (4, 5)
right  -> (4, 5)
outer  -> (5, 5)
```

Four transactions, four clients, three keys in common, one key unique to each side:
inner = 3, left = 4, right = 4, outer = 5. **Row count = matched keys + unmatched keys you chose
to keep.**

**Variants**

| If the question says | Change to |
| --- | --- |
| "retain all bond master records too" | `how="outer"` |
| "discard claims whose policy is unknown" | `how="inner"` |
| "and tell me which ones were dropped" | add `indicator=True` and filter `_merge` |
| "index-based, not key-based" | same four words work in `.join(how=...)` |

**Traps**

- `left` vs `right` is only about **argument order**. `pd.merge(a, b, how="right")` equals
  `pd.merge(b, a, how="left")` with the columns in a different order. Prefer `left` and put the
  controlling table first — it is easier to defend in a write-up.
- A `left` merge can still *add* rows if the right table has duplicate keys (see P10.10).
  "Left" guarantees no row is **lost**, not that the count is unchanged.

**Drill**

1. "Merge Bond_Holdings with Bond_Master on Bond_Code so that the portfolio keeps all 120
   holdings." Write the one line.

<details><summary>Answer</summary>

```python
port = pd.merge(hold, mast, on="Bond_Code", how="left")
```

</details>

---

## P10.3 — Stack rows that have the same columns

**Exam phrasings**

- "The RELIANCE price observations are split across E1_A and E1_B. Combine them into one DataFrame in chronological order."
- "The final DataFrame should have a fresh 0,1,2,... index rather than retaining the original row indexes"
- "concatenate the two DataFrames vertically"
- "create another concatenated version using a fresh integer index"
- "verify whether the reconstructed data contain the same number of rows as the original Reliance DataFrame"
- "append the February transactions below the January transactions"

**Core idea.** `pd.concat([a, b])` stacks rows and **keeps the original index labels**, so you
get 0,1,2,0,1,2. `ignore_index=True` throws those labels away and renumbers 0..n-1.

**Template**

```python
pd.concat([df1, df2])                      # index labels repeat
pd.concat([df1, df2], ignore_index=True)   # fresh 0,1,2,... index
pd.concat([df1, df2, df3], ignore_index=True)   # any number of frames, in a list
```

**Worked — workbook Exercise 1**

```python
a = pd.read_excel(W, sheet_name="E1_A")
b = pd.read_excel(W, sheet_name="E1_B")
print(a); print(); print(b)
```

```text
         Date  Close   Volume
0  2026-01-02   1520  3200000
1  2026-01-05   1535  3500000
2  2026-01-06   1528  2900000

         Date  Close   Volume
0  2026-01-07   1542  3100000
1  2026-01-08   1550  3800000
2  2026-01-09   1547  3000000
```

```python
plain = pd.concat([a, b])
print(plain)
print("index:", list(plain.index))
print("duplicate index labels?", plain.index.duplicated().any())
```

```text
         Date  Close   Volume
0  2026-01-02   1520  3200000
1  2026-01-05   1535  3500000
2  2026-01-06   1528  2900000
0  2026-01-07   1542  3100000
1  2026-01-08   1550  3800000
2  2026-01-09   1547  3000000
index: [0, 1, 2, 0, 1, 2]
duplicate index labels? True
```

```python
fresh = pd.concat([a, b], ignore_index=True)
print(fresh)
print("shapes:", a.shape, b.shape, "->", fresh.shape)
```

```text
         Date  Close   Volume
0  2026-01-02   1520  3200000
1  2026-01-05   1535  3500000
2  2026-01-06   1528  2900000
3  2026-01-07   1542  3100000
4  2026-01-08   1550  3800000
5  2026-01-09   1547  3000000
shapes: (3, 3) (3, 3) -> (6, 3)
```

Why the fresh index matters — with duplicate labels, `.loc[0]` returns **two** rows:

```python
print(plain.loc[0])
```

```text
         Date  Close   Volume
0  2026-01-02   1520  3200000
0  2026-01-07   1542  3100000
```

Column **order** does not have to match; `concat` aligns on column *names*:

```python
p = pd.DataFrame({"Date": ["2026-01-02"], "Close": [1520], "Volume": [3200000]})
q = pd.DataFrame({"Volume": [3100000], "Date": ["2026-01-07"], "Close": [1542]})
print(pd.concat([p, q], ignore_index=True))
```

```text
         Date  Close   Volume
0  2026-01-02   1520  3200000
1  2026-01-07   1542  3100000
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "keep the Date index intact" | drop `ignore_index`; concat the `set_index("Date")` frames |
| "combine three monthly files" | `pd.concat([jan, feb, mar], ignore_index=True)` |
| "the result must be chronological" | `pd.concat([...]).sort_values("Date").reset_index(drop=True)` |
| "renumber an existing frame" | `df.reset_index(drop=True)` — same effect, after the fact |
| "record which file each row came from" | `keys=["Jan","Feb"]` (P10.6) |

**Traps**

- `ignore_index=True` with `axis=0` renumbers **rows**. With `axis=1` the same argument
  renumbers **columns** to 0,1,2 — almost never what you want. See P10.5.
- If `Date` is the index, `ignore_index=True` **destroys the dates**. Only use it when the index
  is meaningless row numbering.
- `pd.concat` takes a **list**. `pd.concat(a, b)` is a `TypeError`.

**Drill**

1. Stack `E10_A` and `E10_B` and confirm the result has 6 rows numbered 0–5.
2. Stack the same two frames but keep a `Source` label without using `keys=`.

<details><summary>Answer</summary>

```python
jan = pd.read_excel(W, sheet_name="E10_A"); feb = pd.read_excel(W, sheet_name="E10_B")
tx = pd.concat([jan, feb], ignore_index=True)
print(tx.shape, list(tx.index))          # (6, 4) [0, 1, 2, 3, 4, 5]

tx2 = pd.concat([jan.assign(Source="E10_A"), feb.assign(Source="E10_B")], ignore_index=True)
```

</details>

---

## P10.4 — Stack rows when the columns do not match

**Exam phrasings**

- "First combine all rows while retaining every column that appears in either dataset"
- "Then create a second result retaining only columns common to both datasets"
- "Explain where the missing values come from in the first result"
- "concatenate them once retaining all columns, once retaining only common columns"
- "compare `join='outer'` with `join='inner'`"

**Core idea.** For `axis=0`, `join=` controls the **columns**: `join='outer'` (default) keeps the
union of column names and fills the gaps with NaN; `join='inner'` keeps only the columns present
in every frame and silently drops the rest.

**Template**

```python
pd.concat([df1, df2], ignore_index=True)                  # join='outer' — union of columns
pd.concat([df1, df2], join="inner", ignore_index=True)    # intersection of columns
```

**Worked — workbook Exercise 2**

```python
a = pd.read_excel(W, sheet_name="E2_A")   # Date, Close, Volume
b = pd.read_excel(W, sheet_name="E2_B")   # Date, Close, Turnover
print(a); print(); print(b)
```

```text
         Date  Close   Volume
0  2026-02-02   1540  3000000
1  2026-02-03   1552  3300000
2  2026-02-04   1548  3100000

         Date  Close    Turnover
0  2026-02-05   1560  4680000000
1  2026-02-06   1571  5027200000
2  2026-02-09   1565  4773250000
```

```python
out = pd.concat([a, b], ignore_index=True)            # join='outer' is the default
print(out)
print(out.isna().sum())
```

```text
         Date  Close     Volume      Turnover
0  2026-02-02   1540  3000000.0           NaN
1  2026-02-03   1552  3300000.0           NaN
2  2026-02-04   1548  3100000.0           NaN
3  2026-02-05   1560        NaN  4.680000e+09
4  2026-02-06   1571        NaN  5.027200e+09
5  2026-02-09   1565        NaN  4.773250e+09
Date        0
Close       0
Volume      3
Turnover    3
dtype: int64
```

```python
inn = pd.concat([a, b], join="inner", ignore_index=True)
print(inn)
print("shapes:", out.shape, inn.shape)
print("common columns:", a.columns.intersection(b.columns).tolist())
```

```text
         Date  Close
0  2026-02-02   1540
1  2026-02-03   1552
2  2026-02-04   1548
3  2026-02-05   1560
4  2026-02-06   1571
5  2026-02-09   1565
shapes: (6, 4) (6, 2)
common columns: ['Date', 'Close']
```

Both results have **6 rows** — `join=` never changes the row count on `axis=0`, only the column
count (4 vs 2).

**Variants**

| If the question says | Change to |
| --- | --- |
| "put the columns in alphabetical order" | `sort=True` → `['Close','Date','Turnover','Volume']` |
| "I only need Date and Close anyway" | `pd.concat([a[["Date","Close"]], b[["Date","Close"]]])` |
| "keep Volume but fill the gaps with 0" | `pd.concat([a, b]).fillna({"Volume": 0})` |
| "why is Volume now a float?" | see P10.16 — NaN forces `int64` → `float64` |

**Traps**

- `join='inner'` **loses columns without warning**. Always print `.columns.tolist()` after it.
- `join=` on `axis=0` acts on columns; on `axis=1` it acts on rows. Same keyword, opposite axis.
- `sort=True` reorders the columns alphabetically — it does **not** sort the rows.

**Drill**

1. From `E2_A`/`E2_B`, produce a 6-row frame that has `Date`, `Close` and a single `Activity`
   column holding `Volume` where available and `Turnover` otherwise.

<details><summary>Answer</summary>

```python
out = pd.concat([a.rename(columns={"Volume": "Activity"}),
                 b.rename(columns={"Turnover": "Activity"})], ignore_index=True)
```

</details>

---

## P10.5 — Put two series side by side using the index

**Exam phrasings**

- "Set Date as the index in both DataFrames. Place the two series side-by-side once using all dates and once using only dates present in both datasets."
- "Explain why some rows contain NaN"
- "combine the RELIANCE closing price and the NIFTY closing value by date"
- "align the two return series on common dates"
- "add the index level next to the stock price for the same trading days"

**Core idea.** `pd.concat([a, b], axis=1)` aligns rows by **index label**, not by physical
position. Set the key as the index first, or the alignment is meaningless. `join='outer'`
(default) keeps the union of labels; `join='inner'` keeps the intersection.

**Template**

```python
a = df1.set_index("KEY")
b = df2.set_index("KEY")
pd.concat([a, b], axis=1)                  # all labels, NaN where one side is absent
pd.concat([a, b], axis=1, join="inner")    # only labels present in both
```

**Worked — workbook Exercise 3**

```python
a = pd.read_excel(W, sheet_name="E3_A").set_index("Date")
b = pd.read_excel(W, sheet_name="E3_B").set_index("Date")
print(a); print(); print(b)
```

```text
            RELIANCE_Close
Date
2026-03-02            1568
2026-03-03            1575
2026-03-04            1562
2026-03-05            1580

            NIFTY_Close
Date
2026-03-02        22840
2026-03-03        22910
2026-03-05        23020
2026-03-06        22975
```

```python
out = pd.concat([a, b], axis=1)               # outer
print(out)
print(out.isna().sum())
```

```text
            RELIANCE_Close  NIFTY_Close
Date
2026-03-02          1568.0      22840.0
2026-03-03          1575.0      22910.0
2026-03-04          1562.0          NaN
2026-03-05          1580.0      23020.0
2026-03-06             NaN      22975.0
RELIANCE_Close    1
NIFTY_Close       1
dtype: int64
```

```python
inn = pd.concat([a, b], axis=1, join="inner")
print(inn)
print("shapes:", out.shape, inn.shape)
print("dates only in A:", a.index.difference(b.index).tolist())
print("dates only in B:", b.index.difference(a.index).tolist())
```

```text
            RELIANCE_Close  NIFTY_Close
Date
2026-03-02            1568        22840
2026-03-03            1575        22910
2026-03-05            1580        23020
shapes: (5, 2) (3, 2)
dates only in A: ['2026-03-04']
dates only in B: ['2026-03-06']
```

**The mistake this exercise is testing.** Skip `set_index("Date")` and `concat(axis=1)` glues the
frames by row *position*:

```python
a2 = pd.read_excel(W, sheet_name="E3_A")
b2 = pd.read_excel(W, sheet_name="E3_B")
print(pd.concat([a2, b2], axis=1))
```

```text
         Date  RELIANCE_Close        Date  NIFTY_Close
0  2026-03-02            1568  2026-03-02        22840
1  2026-03-03            1575  2026-03-03        22910
2  2026-03-04            1562  2026-03-05        23020
3  2026-03-05            1580  2026-03-06        22975
```

Row 2 now pairs Reliance on **04 March** with NIFTY on **05 March**. No error, no NaN, wrong
numbers, and two columns both called `Date`. Always `set_index` first.

**Variants**

| If the question says | Change to |
| --- | --- |
| "three series side by side" | `pd.concat([a, b, c], axis=1)` |
| "use join() instead" | `a.join(b, how="outer")` — identical result (P10.12) |
| "use merge instead" | `pd.merge(a, b, left_index=True, right_index=True, how="outer")` |
| "label the blocks RELIANCE / NIFTY" | `pd.concat([a, b], axis=1, keys=["RELIANCE","NIFTY"])` |
| "only rows where both are present" | `join="inner"`, or `.dropna()` afterwards |

**Traps**

- `ignore_index=True` with `axis=1` renumbers the **columns** to `0, 1`, destroying the names:

  ```python
  print(pd.concat([a, b], axis=1, ignore_index=True))
  ```

  ```text
                   0        1
  Date
  2026-03-02  1568.0  22840.0
  2026-03-03  1575.0  22910.0
  2026-03-04  1562.0      NaN
  2026-03-05  1580.0  23020.0
  2026-03-06     NaN  22975.0
  ```

- The index dtypes must match. A string `"2026-03-02"` index will not align with a
  `Timestamp` index — nothing matches and you get an all-NaN outer result. Parse dates on both
  sides (`pd.to_datetime`) before aligning.
- `concat(axis=1)` permits **duplicate column names**; `join` does not (P10.13).

**Drill**

1. Place Reliance `Close` next to TCS `Close` for the dates where both traded, using `concat`.

<details><summary>Answer</summary>

```python
R = pd.read_excel(C1, sheet_name="Reliance").set_index("Date")[["Close"]].rename(columns={"Close":"Reliance"})
T = pd.read_excel(C1, sheet_name="TCS").set_index("Date")[["Close"]].rename(columns={"Close":"TCS"})
print(pd.concat([R, T], axis=1, join="inner").shape)      # (752, 2)
```

</details>

---

## P10.6 — Label the pieces: keys=, names=, verify_integrity, sort

**Exam phrasings**

- "mark which rows came from January and which from February"
- "concatenate with a label identifying the source file"
- "check that no date appears twice after combining"
- "combine the two Close Series into one DataFrame with meaningful column names"
- "create a MultiIndex identifying each source table"

**Core idea.** `keys=` tags each input frame; `names=` names the resulting index levels;
`verify_integrity=True` refuses to build a result with duplicate index labels.

**Template**

```python
pd.concat([df1, df2], keys=["Jan", "Feb"], names=["Source", "Row"])
pd.concat([df1, df2], keys=["Jan", "Feb"]).reset_index(level=0)   # label as a column
pd.concat([df1, df2], verify_integrity=True)                      # error on duplicate labels
```

**Worked**

```python
a = pd.read_excel(W, sheet_name="E1_A"); b = pd.read_excel(W, sheet_name="E1_B")
k = pd.concat([a, b], keys=["Jan_part1", "Jan_part2"], names=["Source", "Row"])
print(k)
```

```text
                     Date  Close   Volume
Source    Row
Jan_part1 0    2026-01-02   1520  3200000
          1    2026-01-05   1535  3500000
          2    2026-01-06   1528  2900000
Jan_part2 0    2026-01-07   1542  3100000
          1    2026-01-08   1550  3800000
          2    2026-01-09   1547  3000000
```

```python
print(k.loc["Jan_part2"])       # pull one block back out
print(k.reset_index())          # flatten the label into a column
```

```text
           Date  Close   Volume
Row
0    2026-01-07   1542  3100000
1    2026-01-08   1550  3800000
2    2026-01-09   1547  3000000
      Source  Row        Date  Close   Volume
0  Jan_part1    0  2026-01-02   1520  3200000
1  Jan_part1    1  2026-01-05   1535  3500000
2  Jan_part1    2  2026-01-06   1528  2900000
3  Jan_part2    0  2026-01-07   1542  3100000
4  Jan_part2    1  2026-01-08   1550  3800000
5  Jan_part2    2  2026-01-09   1547  3000000
```

`verify_integrity=True` — passes when the labels are unique, raises when they clash:

```python
ai = a.set_index("Date"); bi = b.set_index("Date")
print(pd.concat([ai, bi], verify_integrity=True).shape)
try:
    pd.concat([ai, ai], verify_integrity=True)
except Exception as e:
    print(type(e).__name__, ":", e)
```

```text
(6, 2)
ValueError : Indexes have overlapping values: Index(['2026-01-02', '2026-01-05', '2026-01-06'], dtype='object', name='Date')
```

**Series vs DataFrames.** `concat` accepts Series too, and the axis decides the result type:

```python
s1 = a.set_index("Date")["Close"]; s2 = b.set_index("Date")["Close"]
print(pd.concat([s1, s2]).shape, type(pd.concat([s1, s2])).__name__)
print(pd.concat([s1, s2], axis=1, keys=["First3", "Last3"]))
```

```text
(6,) Series
            First3   Last3
Date
2026-01-02  1520.0     NaN
2026-01-05  1535.0     NaN
2026-01-06  1528.0     NaN
2026-01-07     NaN  1542.0
2026-01-08     NaN  1550.0
2026-01-09     NaN  1547.0
```

Without `keys=`, `axis=1` uses each Series' `.name` — here **both** are called `Close`, so you
get two columns named `Close`. `keys=` or `.rename("...")` fixes it.

**Variants**

| If the question says | Change to |
| --- | --- |
| "add a Stock column naming the company" (Case 1 Q12) | `df.assign(Stock="Reliance")` before concat — simpler than `keys=` |
| "select all January rows afterwards" | `k.loc["Jan_part1"]` or `k.xs("Jan_part1")` |
| "flatten the MultiIndex" | `k.reset_index()` or `k.reset_index(level=0)` |
| "keys on axis=1" | `pd.concat([a, b], axis=1, keys=["RELIANCE","TCS"])` → MultiIndex columns |

**Traps**

- `keys=` must have the same length as the list of frames.
- `verify_integrity=True` checks the **index**, not the data. Two identical rows with different
  index labels pass. Use `drop_duplicates()` for data-level duplicates (P10.16).
- A MultiIndex breaks naive `df.loc[0]` style access. Flatten it before further work unless the
  question asks for it.

**Drill**

1. Concatenate `E10_A` and `E10_B` with `keys=["Jan","Feb"]`, then produce a flat frame with the
   label in a column named `Batch`.

<details><summary>Answer</summary>

```python
k = pd.concat([jan, feb], keys=["Jan", "Feb"], names=["Batch", "Row"])
flat = k.reset_index(level="Batch").reset_index(drop=True)
```

</details>

---

## P10.7 — Merge on a shared key column and pick how=

**Exam phrasings**

- "E4_A contains transactions and E4_B contains client details. Create a result containing only transactions for which Client_ID exists in both datasets. Include the client Segment in the result."
- "Identify which transaction disappears and why"
- "merge the two tables on the common identifier"
- "bring the customer Segment onto each transaction"
- "report the number of rows produced by inner, left, right and outer joins"

**Core idea.** `pd.merge(left, right, on="KEY", how=...)` matches rows whose `KEY` values are
equal. `how='inner'` is the **default** and keeps only keys found on both sides.

**Template**

```python
pd.merge(left, right, on="KEY", how="inner")
pd.merge(left, right[["KEY", "WANTED_COL"]], on="KEY", how="inner")   # bring one column only
left.merge(right, on="KEY", how="inner")                              # method form, chains well
```

**Worked — workbook Exercise 4**

```python
tx = pd.read_excel(W, sheet_name="E4_A")
cl = pd.read_excel(W, sheet_name="E4_B")
print(tx); print(); print(cl)
```

```text
  Transaction_ID Client_ID  Amount
0           T001      C101  125000
1           T002      C102   80000
2           T003      C105  210000
3           T004      C103   95000

  Client_ID Client_Name    Segment
0      C101       Aarav     Retail
1      C102       Meera        HNI
2      C103       Kabir     Retail
3      C104        Riya  Corporate
```

```python
inner = pd.merge(tx, cl, on="Client_ID", how="inner")
print(inner)
```

```text
  Transaction_ID Client_ID  Amount Client_Name Segment
0           T001      C101  125000       Aarav  Retail
1           T002      C102   80000       Meera     HNI
2           T004      C103   95000       Kabir  Retail
```

Only `Segment` was asked for — select the key plus the wanted column:

```python
print(pd.merge(tx, cl[["Client_ID", "Segment"]], on="Client_ID", how="inner"))
```

```text
  Transaction_ID Client_ID  Amount Segment
0           T001      C101  125000  Retail
1           T002      C102   80000     HNI
2           T004      C103   95000  Retail
```

**Row-count table for identical inputs** — memorise the shape of this table:

```python
for h in ["inner", "left", "right", "outer"]:
    print(f"{h:6s} -> {pd.merge(tx, cl, on='Client_ID', how=h).shape}")
```

```text
inner  -> (3, 5)
left   -> (4, 5)
right  -> (4, 5)
outer  -> (5, 5)
```

| `how` | Keys kept | Rows here | NaNs appear in |
| --- | --- | --- | --- |
| `inner` | in both | 3 | nowhere |
| `left` | all left keys | 4 | right-hand columns |
| `right` | all right keys | 4 | left-hand columns |
| `outer` | either side | 5 | both sides |

**Which transaction disappeared**

```python
print(pd.merge(tx, cl, on="Client_ID", how="outer", indicator=True))
```

```text
  Transaction_ID Client_ID    Amount Client_Name    Segment      _merge
0           T001      C101  125000.0       Aarav     Retail        both
1           T002      C102   80000.0       Meera        HNI        both
2           T004      C103   95000.0       Kabir     Retail        both
3            NaN      C104       NaN        Riya  Corporate  right_only
4           T003      C105  210000.0         NaN        NaN   left_only
```

`T003` (client `C105`, Rs. 210,000) is `left_only` — `C105` is absent from the client master, so
an inner join drops it. Separately, client `C104` (Riya) traded nothing and is `right_only`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "keep the unmatched transaction too" | `how="left"` |
| "the keys are called differently" | `left_on=` / `right_on=` (P10.9) |
| "match on Branch and Loan_Type together" | `on=["Branch","Loan_Type"]` (P10.11) |
| "one side is indexed by the key" | `right_index=True`, or `.join(on=)` |
| "keep the master rows that never traded" | `how="outer"` or `how="right"` |

**Traps**

- The default is `how='inner'`. Omitting `how=` silently deletes unmatched rows. **Always write
  `how=` explicitly.**
- `outer` (and `inner` on unsorted keys) returns rows **sorted by key**, not in the original
  order. Compare: outer gave `['C101','C102','C103','C104','C105']` while
  `how='left'` gave `['C101','C102','C105','C103']` — the original transaction order. Re-sort if
  the question asks for chronological output.
- The key column must have the same dtype on both sides. `'101'` (str) never matches `101`
  (int), and you get an empty inner join. Check with `df["KEY"].dtype`.

**Drill**

1. Merge the transactions with the clients so that all four transactions survive, and report how
   many rows have a missing `Segment`.

<details><summary>Answer</summary>

```python
m = pd.merge(tx, cl, on="Client_ID", how="left")
print(m.shape, m["Segment"].isna().sum())     # (4, 5) 1
```

</details>

---

## P10.8 — Keep every row of the left table (left merge)

**Exam phrasings**

- "Add RiskGrade to every loan application without dropping any application. Then identify which rows had no matching risk record."
- "All observations appearing in Bond_Holdings should remain in the resulting DataFrame"
- "Ensure that all observations from Claims are retained"
- "attach the master details without losing any transaction"
- "which applications have no matching risk grade"

**Core idea.** `how='left'` keeps every left row, filling right-hand columns with NaN where no
match exists. `indicator=True` adds a `_merge` column with values `both`, `left_only`,
`right_only` — the cleanest way to answer "which rows had no match".

**Template**

```python
res = pd.merge(left, right, on="KEY", how="left", indicator=True)
print(res["_merge"].value_counts())
print(res[res["_merge"] == "left_only"])
res = res.drop(columns="_merge")          # drop it before further analysis
```

**Worked — workbook Exercise 5**

```python
ap = pd.read_excel(W, sheet_name="E5_A")   # 5 applications
rg = pd.read_excel(W, sheet_name="E5_B")   # 5 risk grades
print(ap); print(); print(rg)
```

```text
  App_ID Customer_ID  LoanAmount
0   A001        CU01      500000
1   A002        CU02      750000
2   A003        CU03      300000
3   A004        CU05      900000
4   A005        CU06      450000

  Customer_ID RiskGrade
0        CU01         A
1        CU02         B
2        CU03         A
3        CU04         C
4        CU06         B
```

```python
left = pd.merge(ap, rg, on="Customer_ID", how="left")
print(left)
print("shape:", left.shape, " missing RiskGrade:", left["RiskGrade"].isna().sum())
```

```text
  App_ID Customer_ID  LoanAmount RiskGrade
0   A001        CU01      500000         A
1   A002        CU02      750000         B
2   A003        CU03      300000         A
3   A004        CU05      900000       NaN
4   A005        CU06      450000         B
shape: (5, 4)  missing RiskGrade: 1
```

```python
chk = pd.merge(ap, rg, on="Customer_ID", how="left", indicator=True)
print(chk["_merge"].value_counts())
print(chk[chk["_merge"] == "left_only"])
```

```text
_merge
both          4
left_only     1
right_only    0
Name: count, dtype: int64
  App_ID Customer_ID  LoanAmount RiskGrade     _merge
3   A004        CU05      900000       NaN  left_only
```

Application `A004` (customer `CU05`) has no risk record. Note `right_only` is always 0 in a left
merge — to see risk records that were never used, switch to `how='outer'` or use a set
difference:

```python
print("risk records never used:", sorted(set(rg["Customer_ID"]) - set(ap["Customer_ID"])))
```

```text
risk records never used: ['CU04']
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "flag them instead of listing them" | `res["Matched"] = res["_merge"].eq("both")` |
| "give unmatched rows a default grade" | `res["RiskGrade"] = res["RiskGrade"].fillna("Unrated")` |
| "remove the unmatched ones after all" | `res[res["_merge"] == "both"].drop(columns="_merge")` |
| "name the indicator column" | `indicator="Match_Source"` |
| "keep master rows too" | `how="outer"`, then read `right_only` |

**Traps**

- `_merge` is a `category` dtype. `value_counts()` shows all three levels including zeros — that
  is expected, not a bug.
- Drop `_merge` before writing to Excel or doing arithmetic; some operations choke on categorical
  columns.
- A left merge does not guarantee the row count is unchanged. If the right table has duplicate
  keys, rows multiply (P10.10). Verify with `len(res) == len(left)`.

**Drill**

1. Case 3: merge `Claims` (150 rows) with `Policy_Master` (60 rows) on `Policy_ID`, keeping all
   claims, and prove no claim lost its policy details.

<details><summary>Answer</summary>

```python
cl = pd.read_excel(C3, sheet_name="Claims"); pm = pd.read_excel(C3, sheet_name="Policy_Master")
res = pd.merge(cl, pm, on="Policy_ID", how="left", indicator=True)
print(res.shape, res["_merge"].value_counts().to_dict())
# (150, 12) {'both': 150, 'left_only': 0, 'right_only': 0}
```

</details>

---

## P10.9 — Merge when the key columns have different names

**Exam phrasings**

- "E6_A uses Ticker while E6_B uses Symbol. Combine them so that every security appearing in either table is retained."
- "Identify securities found only in holdings and only in the master table"
- "the two tables use different column names for the same identifier"
- "merge Ticker against Symbol"
- "use left_on and right_on"

**Core idea.** `left_on=` / `right_on=` name the key on each side. The result keeps **both** key
columns, and in an outer join each is NaN on the rows that came only from the other side — which
is ugly. Renaming one side first, then `on=`, gives a single clean key column.

**Template**

```python
pd.merge(left, right, left_on="Ticker", right_on="Symbol", how="outer")
# cleaner: rename then merge on one key
pd.merge(left, right.rename(columns={"Symbol": "Ticker"}), on="Ticker", how="outer")
```

**Worked — workbook Exercise 6**

```python
h = pd.read_excel(W, sheet_name="E6_A")   # Ticker, Qty, AvgCost
m = pd.read_excel(W, sheet_name="E6_B")   # Symbol, Company, Sector
print(h); print(); print(m)
```

```text
        Ticker  Qty  AvgCost
0  RELIANCE.NS  100     1510
1       TCS.NS   80     4020
2      INFY.NS  120     1680

        Symbol                    Company   Sector
0       TCS.NS  Tata Consultancy Services       IT
1      INFY.NS                    Infosys       IT
2  HDFCBANK.NS                  HDFC Bank  Banking
```

```python
out = pd.merge(h, m, left_on="Ticker", right_on="Symbol", how="outer", indicator=True)
print(out)
print("shape:", out.shape)
```

```text
        Ticker    Qty  AvgCost       Symbol                    Company   Sector      _merge
0          NaN    NaN      NaN  HDFCBANK.NS                  HDFC Bank  Banking  right_only
1      INFY.NS  120.0   1680.0      INFY.NS                    Infosys       IT        both
2  RELIANCE.NS  100.0   1510.0          NaN                        NaN      NaN   left_only
3       TCS.NS   80.0   4020.0       TCS.NS  Tata Consultancy Services       IT        both
```

```python
print(out.loc[out["_merge"] == "left_only",  ["Ticker", "Qty", "AvgCost"]])
print(out.loc[out["_merge"] == "right_only", ["Symbol", "Company", "Sector"]])
```

```text
        Ticker    Qty  AvgCost
2  RELIANCE.NS  100.0   1510.0
  Symbol    Company   Sector
0    HDFCBANK.NS  HDFC Bank  Banking
```

Only in holdings: `RELIANCE.NS` (held, but missing from the master). Only in the master:
`HDFCBANK.NS` (described, but not held). `TCS.NS` and `INFY.NS` are in both.

**The tidier version** — rename first, so there is one `Ticker` column and no NaN keys:

```python
tidy = pd.merge(h, m.rename(columns={"Symbol": "Ticker"}), on="Ticker", how="outer", indicator=True)
print(tidy)
print(tidy.isna().sum())
```

```text
        Ticker    Qty  AvgCost                    Company   Sector      _merge
0  HDFCBANK.NS    NaN      NaN                  HDFC Bank  Banking  right_only
1      INFY.NS  120.0   1680.0                    Infosys       IT        both
2  RELIANCE.NS  100.0   1510.0                        NaN      NaN   left_only
3       TCS.NS   80.0   4020.0  Tata Consultancy Services       IT        both
Ticker     0
Qty        1
AvgCost    1
Company    1
Sector     1
_merge     0
dtype: int64
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "keep only the held securities" | `how="left"` |
| "keep only securities in both" | `how="inner"` |
| "keep the two key columns but fill the blanks" | `out["Ticker"] = out["Ticker"].fillna(out["Symbol"])` then `drop(columns="Symbol")` |
| "the right table is indexed by Symbol" | `pd.merge(h, m_idx, left_on="Ticker", right_index=True, how="left")` |
| "keys differ in case / have stray spaces" | `df["KEY"] = df["KEY"].str.strip().str.upper()` on both sides first |

**Traps**

- With `left_on`/`right_on` you keep **two redundant key columns**. Drop or consolidate one.
- An outer merge returns rows **sorted by key**, so `HDFCBANK.NS` appears first even though it
  came from the right table's last row.
- Silent non-matching is the real danger: if nothing matches you get an empty inner join or an
  all-NaN outer one. Print `_merge.value_counts()` every time.

**Drill**

1. Merge `E10_A`+`E10_B` transactions against `E10_C` (keyed `Symbol`) keeping all transactions,
   and list the tickers with no company record.

<details><summary>Answer</summary>

```python
tx = pd.concat([pd.read_excel(W, sheet_name="E10_A"), pd.read_excel(W, sheet_name="E10_B")], ignore_index=True)
mst = pd.read_excel(W, sheet_name="E10_C")
res = pd.merge(tx, mst, left_on="Ticker", right_on="Symbol", how="left")
print(res.loc[res["Company"].isna(), ["Trade_ID", "Ticker"]])
#   Trade_ID      Ticker
# 5     F003  UNKNOWN.NS
```

</details>

---

## P10.10 — Duplicate keys and the many-to-many row explosion

**Exam phrasings**

- "Before running any code, predict how many rows will result when E7_A and E7_B are merged on Investor_ID using an inner join"
- "explain why Investor I01 produces multiple combinations"
- "why does the merged table have more rows than either input"
- "check whether the merge key is unique before merging"
- "validate that this is a one-to-many relationship"

**Core idea.** A merge produces, for **each key**, `left_matches x right_matches` rows. Sum that
product over all matched keys and you have the row count. One-to-one gives 1 row per key;
one-to-many repeats the "one" side; many-to-many multiplies.

**The formula**

```text
rows(inner) = SUM over matched keys k of  count_left(k) * count_right(k)
rows(left)  = rows(inner) + number of left rows whose key has no match
rows(outer) = rows(left)  + number of right rows whose key has no match
```

**Template — predict before you run**

```python
lc = left["KEY"].value_counts()
rc = right["KEY"].value_counts()
pred = pd.DataFrame({"left_rows": lc, "right_rows": rc}).dropna()
pred["product"] = pred["left_rows"] * pred["right_rows"]
print(pred, "\nPREDICTED rows =", int(pred["product"].sum()))
```

**Worked — workbook Exercise 7**

```python
t = pd.read_excel(W, sheet_name="E7_A")   # trades
c = pd.read_excel(W, sheet_name="E7_B")   # compliance checks
print(t); print(); print(c)
```

```text
  Trade_ID Investor_ID  Security
0     TR01         I01  RELIANCE
1     TR02         I01       TCS
2     TR03         I02      INFY

  Check_ID Investor_ID Check_Type
0     CK01         I01        KYC
1     CK02         I01        AML
2     CK03         I02        KYC
```

**Step 1 — predict.**

```python
lc = t["Investor_ID"].value_counts().sort_index()
rc = c["Investor_ID"].value_counts().sort_index()
pred = pd.DataFrame({"left_rows": lc, "right_rows": rc})
pred["product"] = pred["left_rows"] * pred["right_rows"]
print(pred)
print("PREDICTED total rows =", int(pred["product"].sum()))
```

```text
             left_rows  right_rows  product
Investor_ID
I01                  2           2        4
I02                  1           1        1
PREDICTED total rows = 5
```

**Step 2 — verify.**

```python
mm = pd.merge(t, c, on="Investor_ID", how="inner")
print(mm)
print("ACTUAL shape", mm.shape)
```

```text
  Trade_ID Investor_ID  Security Check_ID Check_Type
0     TR01         I01  RELIANCE     CK01        KYC
1     TR01         I01  RELIANCE     CK02        AML
2     TR02         I01       TCS     CK01        KYC
3     TR02         I01       TCS     CK02        AML
4     TR03         I02      INFY     CK03        KYC
ACTUAL shape (5, 5)
```

**Predicted 5, actual 5.** `I01` contributes 2 x 2 = 4 rows — every trade paired with every
check. `I02` contributes 1 x 1 = 1.

**Step 3 — detect it before it bites.**

```python
print("left dup keys? ", t["Investor_ID"].duplicated().any())
print("right dup keys?", c["Investor_ID"].duplicated().any())
```

```text
left dup keys?  True
right dup keys? True
```

`validate=` turns a silent explosion into a loud error:

```python
for v in ["one_to_one", "one_to_many"]:
    try:
        pd.merge(t, c, on="Investor_ID", how="inner", validate=v)
    except Exception as e:
        print(v, "->", type(e).__name__, ":", e)
print("many_to_many ->", pd.merge(t, c, on="Investor_ID", how="inner", validate="many_to_many").shape)
```

```text
one_to_one -> MergeError : Merge keys are not unique in either left or right dataset; not a one-to-one merge
one_to_many -> MergeError : Merge keys are not unique in left dataset; not a one-to-many merge
many_to_many -> (5, 5)
```

| `validate=` | Requires |
| --- | --- |
| `one_to_one` | key unique on **both** sides |
| `one_to_many` | key unique on the **left** |
| `many_to_one` | key unique on the **right** — the normal "fact table + master" case |
| `many_to_many` | no check (the default behaviour) |

**Variants**

| If the question says | Change to |
| --- | --- |
| "each holding must match exactly one master record" | `validate="many_to_one"` |
| "de-duplicate the lookup table first" | `right.drop_duplicates(subset="KEY")` before merging |
| "how many rows per key in the result" | `res["KEY"].value_counts()` |
| "did the row count change" | `assert len(res) == len(left)` |

**Traps**

- The explosion is **silent**. Nothing warns you; the only symptom is a row count you did not
  expect. Print `left.shape`, `right.shape` and `result.shape` on every merge.
- Duplicated keys in the *right* table alone still inflate a **left** merge.
- `validate="many_to_one"` is the cheapest insurance in this whole chapter. Use it whenever you
  attach a master table.

**Drill**

1. Predict then verify the row count for a `how='outer'` merge of `E7_A` and `E7_B`.

<details><summary>Answer</summary>

Both keys match on both sides, so outer = inner = 5 rows.

```python
print(pd.merge(t, c, on="Investor_ID", how="outer").shape)   # (5, 5)
```

</details>

---

## P10.11 — Merge on several keys, or on the index

**Exam phrasings**

- "merge on both Month and Ticker"
- "match on the combination of Branch and Loan_Type"
- "the lookup table is indexed by the key, not keyed by a column"
- "rename the _x and _y columns meaningfully"
- "both tables have a Close column - keep them apart"

**Core idea.** `on=` accepts a **list** — rows match only when every listed column agrees. When a
key lives in the index, use `left_index=True` / `right_index=True`. Non-key columns present on
both sides get `_x` / `_y` appended; `suffixes=` renames them.

**Template**

```python
pd.merge(a, b, on=["Month", "Ticker"], how="left")                 # composite key
pd.merge(a, b, left_on="Ticker", right_index=True, how="left")     # column vs index
pd.merge(a, b, left_index=True, right_index=True, how="outer")     # index vs index
pd.merge(a, b, on="ID", suffixes=("_Bloomberg", "_NSE"))           # meaningful suffixes
```

**Worked — a composite key, and what happens if you forget half of it**

```python
tx = pd.concat([pd.read_excel(W, sheet_name="E10_A"),
                pd.read_excel(W, sheet_name="E10_B")], ignore_index=True)
lim = pd.DataFrame({"Month":  ["Jan", "Jan", "Feb", "Feb"],
                    "Ticker": ["RELIANCE.NS", "TCS.NS", "TCS.NS", "HDFCBANK.NS"],
                    "Limit":  [200000, 150000, 100000, 150000]})
print(pd.merge(tx, lim, on=["Month", "Ticker"], how="left", indicator=True))
```

```text
  Month Trade_ID       Ticker  Amount     Limit     _merge
0   Jan     J001  RELIANCE.NS  150000  200000.0       both
1   Jan     J002       TCS.NS  120000  150000.0       both
2   Jan     J003      INFY.NS   90000       NaN  left_only
3   Feb     F001  HDFCBANK.NS  110000  150000.0       both
4   Feb     F002       TCS.NS   70000  100000.0       both
5   Feb     F003   UNKNOWN.NS   50000       NaN  left_only
```

Six transactions in, six out. Now merge on `Ticker` alone:

```python
m1 = pd.merge(tx, lim, on="Ticker", how="left")
print(m1)
print("shape", m1.shape, "vs input", tx.shape)
```

```text
  Month_x Trade_ID       Ticker  Amount Month_y     Limit
0     Jan     J001  RELIANCE.NS  150000     Jan  200000.0
1     Jan     J002       TCS.NS  120000     Jan  150000.0
2     Jan     J002       TCS.NS  120000     Feb  100000.0
3     Jan     J003      INFY.NS   90000     NaN       NaN
4     Feb     F001  HDFCBANK.NS  110000     Feb  150000.0
5     Feb     F002       TCS.NS   70000     Jan  150000.0
6     Feb     F002       TCS.NS   70000     Feb  100000.0
7     Feb     F003   UNKNOWN.NS   50000     NaN       NaN
```

Eight rows instead of six, each `TCS.NS` trade duplicated against both monthly limits, and the
shared `Month` column split into `Month_x` / `Month_y`. **Both symptoms mean "you missed a key".**

**Column against index**

```python
mst = pd.read_excel(W, sheet_name="E10_C").set_index("Symbol")
print(pd.merge(tx, mst, left_on="Ticker", right_index=True, how="left"))
```

```text
  Month Trade_ID       Ticker  Amount                    Company   Sector
0   Jan     J001  RELIANCE.NS  150000        Reliance Industries   Energy
1   Jan     J002       TCS.NS  120000  Tata Consultancy Services       IT
2   Jan     J003      INFY.NS   90000                    Infosys       IT
3   Feb     F001  HDFCBANK.NS  110000                  HDFC Bank  Banking
4   Feb     F002       TCS.NS   70000  Tata Consultancy Services       IT
5   Feb     F003   UNKNOWN.NS   50000                        NaN      NaN
```

No redundant key column — one of the advantages over `left_on`/`right_on`.

**Index against index** (equivalent to `concat(axis=1)` / `join`)

```python
A = pd.read_excel(W, sheet_name="E3_A").set_index("Date")
B = pd.read_excel(W, sheet_name="E3_B").set_index("Date")
print(pd.merge(A, B, left_index=True, right_index=True, how="outer"))
```

```text
            RELIANCE_Close  NIFTY_Close
Date
2026-03-02          1568.0      22840.0
2026-03-03          1575.0      22910.0
2026-03-04          1562.0          NaN
2026-03-05          1580.0      23020.0
2026-03-06             NaN      22975.0
```

**Suffixes**

```python
L = pd.DataFrame({"ID": ["X1", "X2"], "Close": [100, 200]})
R = pd.DataFrame({"ID": ["X1", "X2"], "Close": [110, 190]})
print(pd.merge(L, R, on="ID"))
print(pd.merge(L, R, on="ID", suffixes=("_Bloomberg", "_NSE")))
```

```text
   ID  Close_x  Close_y
0  X1      100      110
1  X2      200      190
   ID  Close_Bloomberg  Close_NSE
0  X1              100        110
1  X2              200        190
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "match on three columns" | `on=["A","B","C"]` |
| "left keys are two columns, right keys have other names" | `left_on=["M","T"], right_on=["Mon","Tick"]` |
| "left is keyed by index, right by a column" | `left_index=True, right_on="KEY"` |
| "cross product of every row pair" | `pd.merge(a, b, how="cross")` — 3 x 4 = 12 rows, no key |
| "keep both Close columns clearly labelled" | `suffixes=("_RELIANCE","_TCS")` |

**Traps**

- `_x` / `_y` in your output is a **diagnostic**: you merged on fewer keys than the tables share,
  or you forgot to drop a duplicated column. Investigate, don't just rename.
- `on=` requires the column to exist on **both** sides with the **same** name; otherwise
  `KeyError`.
- Mixing `on=` with `left_index=True` raises `MergeError`. Pick one addressing scheme per side.

**Drill**

1. `E10_D` is a Sector risk table. Attach `Risk_Level` to a transaction frame that has a
   `Sector` column, using `merge` and the index form.

<details><summary>Answer</summary>

```python
sec = pd.read_excel(W, sheet_name="E10_D").set_index("Sector")
res = pd.merge(txs, sec, left_on="Sector", right_index=True, how="left")
```

</details>

---

## P10.12 — Index-based join and its how= values

**Exam phrasings**

- "E8_A contains stock returns and E8_B contains the risk-free rate. Set Date as the index in both. Join the risk-free rate to the stock returns using the default join, then repeat using inner and outer joins."
- "Compare the dates retained in each result"
- "an inner join of Reliance and TCS"
- "a left join with Reliance controlling the dates"
- "a right join with TCS controlling the dates"
- "an outer combination containing all three stocks"
- "For each result, report its shape"

**Core idea.** `df.join(other)` matches on the **index** and its default is **`how='left'`, not
`how='inner'`**. This is the single most examined fact about `join`.

**Template**

```python
a = df1.set_index("Date")
b = df2.set_index("Date")
a.join(b)                  # how='left'  -> a's dates control
a.join(b, how="inner")     # dates in both
a.join(b, how="outer")     # union of dates
a.join(b, how="right")     # b's dates control
a.join([b, c], how="outer")   # several frames at once (left/inner/outer only)
```

**Worked — workbook Exercise 8**

```python
r = pd.read_excel(W, sheet_name="E8_A").set_index("Date")   # Stock_Return
f = pd.read_excel(W, sheet_name="E8_B").set_index("Date")   # Risk_Free_Rate
print(r); print(); print(f)
```

```text
            Stock_Return
Date
2026-04-01         0.012
2026-04-02        -0.006
2026-04-03         0.009
2026-04-06         0.004

            Risk_Free_Rate
Date
2026-04-02         0.00022
2026-04-03         0.00022
2026-04-06         0.00023
2026-04-07         0.00023
```

```python
for h in ["left", "inner", "outer", "right"]:
    j = r.join(f, how=h)
    print(f"--- how='{h}'  shape={j.shape}")
    print(j)
```

```text
--- how='left'  shape=(4, 2)
            Stock_Return  Risk_Free_Rate
Date
2026-04-01         0.012             NaN
2026-04-02        -0.006         0.00022
2026-04-03         0.009         0.00022
2026-04-06         0.004         0.00023
--- how='inner'  shape=(3, 2)
            Stock_Return  Risk_Free_Rate
Date
2026-04-02        -0.006         0.00022
2026-04-03         0.009         0.00022
2026-04-06         0.004         0.00023
--- how='outer'  shape=(5, 2)
            Stock_Return  Risk_Free_Rate
Date
2026-04-01         0.012             NaN
2026-04-02        -0.006         0.00022
2026-04-03         0.009         0.00022
2026-04-06         0.004         0.00023
2026-04-07           NaN         0.00023
--- how='right'  shape=(4, 2)
            Stock_Return  Risk_Free_Rate
Date
2026-04-02        -0.006         0.00022
2026-04-03         0.009         0.00022
2026-04-06         0.004         0.00023
2026-04-07           NaN         0.00023
```

```python
print("default == left?", r.join(f).equals(r.join(f, how="left")))
for h in ["left", "inner", "outer", "right"]:
    print(h, r.join(f, how=h).index.tolist())
```

```text
default == left? True
left ['2026-04-01', '2026-04-02', '2026-04-03', '2026-04-06']
inner ['2026-04-02', '2026-04-03', '2026-04-06']
outer ['2026-04-01', '2026-04-02', '2026-04-03', '2026-04-06', '2026-04-07']
right ['2026-04-02', '2026-04-03', '2026-04-06', '2026-04-07']
```

| `how` | Dates kept | Rows |
| --- | --- | --- |
| `left` (default) | the 4 stock-return dates | 4 |
| `inner` | the 3 overlapping dates | 3 |
| `outer` | all 5 distinct dates | 5 |
| `right` | the 4 risk-free dates | 4 |

**Why `how` matters downstream** — an outer join propagates NaN into every derived column:

```python
j = r.join(f, how="outer")
j["Excess_Return"] = j["Stock_Return"] - j["Risk_Free_Rate"]
print(j)
print(j.isna().sum())
```

```text
            Stock_Return  Risk_Free_Rate  Excess_Return
Date
2026-04-01         0.012             NaN            NaN
2026-04-02        -0.006         0.00022       -0.00622
2026-04-03         0.009         0.00022        0.00878
2026-04-06         0.004         0.00023        0.00377
2026-04-07           NaN         0.00023            NaN
Stock_Return      1
Risk_Free_Rate    1
Excess_Return     2
dtype: int64
```

For excess returns you want `how='inner'` (or `how='left'` then `.dropna()`), because a row with
only one of the two inputs is unusable.

**Variants**

| If the question says | Change to |
| --- | --- |
| "join a column against the other frame's index" | `a.join(b_idx, on="KEY")` |
| "join three frames at once" | `a.join([b, c], how="outer")` |
| "use merge instead" | `pd.merge(a, b, left_index=True, right_index=True, how=...)` |
| "the dates are strings" | `df.index = pd.to_datetime(df.index)` on both sides first |

**Traps**

- **`join` defaults to `left`; `merge` defaults to `inner`.** Write `how=` explicitly.
- Joining a **list** of frames supports only `left`, `inner`, `outer`. `how='right'` raises:

  ```python
  R.join([T, I], how="right")
  ```

  ```text
  ValueError : Only can inner (intersect) or outer (union) join the other axis
  ```

  For a right join, do it pairwise: `T.join(R, how="left")` or `R.join(T, how="right")`.
- If the two frames share a non-key column name, `join` **errors** instead of adding suffixes
  (P10.13).

**Drill**

1. Using Case 1, report the shape of the inner and outer joins of Reliance `Close` and TCS
   `Close`.

<details><summary>Answer</summary>

```python
print(R.join(T, how="inner").shape, R.join(T, how="outer").shape)   # (752, 2) (1294, 2)
```

</details>

---

## P10.13 — Join frames that share column names

**Exam phrasings**

- "E9_A and E9_B both contain columns named Close and Volume and are indexed by Date. Try joining them directly. Observe the problem."
- "join them successfully so the final column names clearly identify RELIANCE and TCS"
- "explain how this differs from concat(axis=1), which can permit duplicate column names"
- "columns overlap but no suffix specified"
- "use lsuffix and rsuffix"

**Core idea.** `join` refuses to create ambiguous column names: overlapping names raise
`ValueError` unless you supply `lsuffix` and/or `rsuffix`. `concat(axis=1)` has no such
protection and will happily produce two columns called `Close`.

**Template**

```python
a.join(b, lsuffix="_A", rsuffix="_B")                 # let join rename
a.add_suffix("_A").join(b.add_suffix("_B"))           # rename yourself — clearest
pd.merge(a, b, left_index=True, right_index=True, suffixes=("_A", "_B"))
pd.concat([a, b], axis=1, keys=["A", "B"])            # MultiIndex header instead of suffixes
```

**Worked — workbook Exercise 9**

```python
rel = pd.read_excel(W, sheet_name="E9_A").set_index("Date")
tcs = pd.read_excel(W, sheet_name="E9_B").set_index("Date")
print(rel); print(); print(tcs)
```

```text
            Close   Volume
Date
2026-05-04   1602  3400000
2026-05-05   1610  3650000
2026-05-06   1598  3900000

            Close   Volume
Date
2026-05-04   4085  1250000
2026-05-05   4102  1180000
2026-05-06   4076  1320000
```

**Step 1 — the error, reproduced exactly.**

```python
try:
    rel.join(tcs)
except Exception as e:
    print(type(e).__name__, ":", e)
```

```text
ValueError : columns overlap but no suffix specified: Index(['Close', 'Volume'], dtype='object')
```

**Step 2 — fix with suffixes.**

```python
j = rel.join(tcs, lsuffix="_RELIANCE", rsuffix="_TCS")
print(j)
print(j.columns.tolist())
```

```text
            Close_RELIANCE  Volume_RELIANCE  Close_TCS  Volume_TCS
Date
2026-05-04            1602          3400000       4085     1250000
2026-05-05            1610          3650000       4102     1180000
2026-05-06            1598          3900000       4076     1320000
['Close_RELIANCE', 'Volume_RELIANCE', 'Close_TCS', 'Volume_TCS']
```

Renaming up front gives the identical result and is easier to read:

```python
print(rel.add_suffix("_RELIANCE").join(tcs.add_suffix("_TCS")))
```

```text
            Close_RELIANCE  Volume_RELIANCE  Close_TCS  Volume_TCS
Date
2026-05-04            1602          3400000       4085     1250000
2026-05-05            1610          3650000       4102     1180000
2026-05-06            1598          3900000       4076     1320000
```

**Step 3 — the contrast with `concat(axis=1)`.**

```python
c = pd.concat([rel, tcs], axis=1)
print(c)
print("columns:", c.columns.tolist(), " duplicated?", c.columns.duplicated().any())
```

```text
            Close   Volume  Close   Volume
Date
2026-05-04   1602  3400000   4085  1250000
2026-05-05   1610  3650000   4102  1180000
2026-05-06   1598  3900000   4076  1320000
columns: ['Close', 'Volume', 'Close', 'Volume'] duplicated? True
```

No error — and now `c["Close"]` is ambiguous, returning a **DataFrame** of two columns rather
than a Series:

```python
print(c["Close"])
```

```text
            Close  Close
Date
2026-05-04   1602   4085
2026-05-05   1610   4102
2026-05-06   1598   4076
```

`c["Close"].mean()` would return two numbers; `c["Close"] * 100` broadcasts oddly; and writing to
Excel produces a file nobody can use. `keys=` avoids the collision properly:

```python
ck = pd.concat([rel, tcs], axis=1, keys=["RELIANCE", "TCS"])
print(ck)
print(ck.columns.tolist())
```

```text
           RELIANCE            TCS
              Close   Volume Close   Volume
Date
2026-05-04     1602  3400000  4085  1250000
2026-05-05     1610  3650000  4102  1180000
2026-05-06     1598  3900000  4076  1320000
[('RELIANCE', 'Close'), ('RELIANCE', 'Volume'), ('TCS', 'Close'), ('TCS', 'Volume')]
```

Now `ck["TCS"]["Close"]` (or `ck[("TCS","Close")]`) is unambiguous.

**Variants**

| If the question says | Change to |
| --- | --- |
| "only suffix the right-hand frame" | `rel.join(tcs, rsuffix="_TCS")` — left names stay bare |
| "I only need the two Close columns" | `rel[["Close"]].rename(columns={"Close":"Reliance"}).join(tcs[["Close"]].rename(columns={"Close":"TCS"}))` |
| "prefix instead of suffix" | `df.add_prefix("REL_")` |
| "merge, not join" | `suffixes=("_RELIANCE","_TCS")` |
| "flatten the MultiIndex columns" | `ck.columns = ["_".join(c) for c in ck.columns]` |

**Traps**

- Only **one** of `lsuffix`/`rsuffix` is needed to clear the error, but supplying both is what an
  examiner wants to see — the marks are for column names that identify the source.
- `merge` **auto-suffixes** (`_x`, `_y`) and never errors on overlap; `join` errors. Do not
  assume they behave alike.
- Reducing each frame to the one column you need, renamed, avoids the whole problem. Do that when
  the question only asks for closing prices.

**Drill**

1. Join `E9_A` and `E9_B` so that the columns read `RELIANCE_Close`, `RELIANCE_Volume`,
   `TCS_Close`, `TCS_Volume`.

<details><summary>Answer</summary>

```python
print(rel.add_prefix("RELIANCE_").join(tcs.add_prefix("TCS_")).columns.tolist())
# ['RELIANCE_Close', 'RELIANCE_Volume', 'TCS_Close', 'TCS_Volume']
```

</details>

---

## P10.14 — Find the keys that did not match

**Exam phrasings**

- "identify which rows had no matching record"
- "Identify which transaction disappears and why"
- "Identify securities found only in holdings and only in the master table"
- "how many policies never appear in any claim"
- "list the dates present in one dataset but not the other"
- "confirm that every Bond_Code found a match"

**Core idea.** Three interchangeable techniques. Use `indicator=True` when you want the offending
rows in context, `~isin()` when you want the rows from one table, and set / `Index` differences
when you want just the key values or a count.

**Template**

```python
# 1. indicator on an outer merge — sees both directions at once
chk = pd.merge(left, right, on="KEY", how="outer", indicator=True)
print(chk["_merge"].value_counts())
print(chk.loc[chk["_merge"] == "left_only"])

# 2. boolean mask with ~isin — returns real left rows
print(left[~left["KEY"].isin(right["KEY"])])

# 3. set / Index difference — returns key values and counts
print(sorted(set(left["KEY"]) - set(right["KEY"])))
print(pd.Index(right["KEY"]).difference(pd.Index(left["KEY"])).tolist())
```

**Worked — Case 3, Claims (150) vs Policy_Master (60)**

```python
cl = pd.read_excel(C3, sheet_name="Claims")
pm = pd.read_excel(C3, sheet_name="Policy_Master")

# way 1
chk = pd.merge(cl, pm, on="Policy_ID", how="outer", indicator=True)
print(chk["_merge"].value_counts())
print(chk.loc[chk["_merge"] == "right_only", "Policy_ID"].tolist())
```

```text
_merge
both          150
right_only      5
left_only       0
Name: count, dtype: int64
['P0013', 'P0024', 'P0033', 'P0036', 'P0042']
```

```python
# way 2
print("claims whose policy is missing:", cl.loc[~cl["Policy_ID"].isin(pm["Policy_ID"]), "Policy_ID"].tolist())
print("policies never claimed       :", pm.loc[~pm["Policy_ID"].isin(cl["Policy_ID"]), "Policy_ID"].tolist())
```

```text
claims whose policy is missing: []
policies never claimed       : ['P0013', 'P0024', 'P0033', 'P0036', 'P0042']
```

```python
# way 3
print("left  - right:", sorted(set(cl["Policy_ID"]) - set(pm["Policy_ID"])))
print("right - left :", sorted(set(pm["Policy_ID"]) - set(cl["Policy_ID"])))
print("counts: left-only", len(set(cl["Policy_ID"]) - set(pm["Policy_ID"])),
      " right-only", len(set(pm["Policy_ID"]) - set(cl["Policy_ID"])),
      " both", len(set(cl["Policy_ID"]) & set(pm["Policy_ID"])))
```

```text
left  - right: []
right - left : ['P0013', 'P0024', 'P0033', 'P0036', 'P0042']
counts: left-only 0  right-only 5  both 55
```

All 150 claims reference a known policy; 5 of the 60 policies produced no claim; 55 distinct
policies appear in the claims file.

**Index version — for date-aligned frames**

```python
rel = pd.read_excel(C1, sheet_name="Reliance").set_index("Date")
tcs = pd.read_excel(C1, sheet_name="TCS").set_index("Date")
print("dates in Reliance but not TCS:", len(rel.index.difference(tcs.index)))
print("dates in TCS but not Reliance:", len(tcs.index.difference(rel.index)))
print("dates in both                :", len(rel.index.intersection(tcs.index)))
print("union                        :", len(rel.index.union(tcs.index)))
```

```text
dates in Reliance but not TCS: 270
dates in TCS but not Reliance: 272
dates in both                : 752
union                        : 1294
```

Those four numbers *are* the join row counts: left = 1022, right = 1024, inner = 752,
outer = 1294 = 752 + 270 + 272.

**Variants**

| If the question says | Change to |
| --- | --- |
| "how many, not which" | `(~left["KEY"].isin(right["KEY"])).sum()` |
| "write the unmatched rows to a file" | `chk[chk["_merge"]=="left_only"].to_excel("unmatched.xlsx")` |
| "match rate as a percentage" | `chk["_merge"].value_counts(normalize=True) * 100` |
| "keys present in both" | `set(a) & set(b)` or `pd.Index(a).intersection(b)` |
| "duplicate keys, not missing keys" | `left["KEY"].duplicated().any()` (P10.10) |

**Traps**

- `~isin()` on the **left** only finds left-only keys. Run it both ways, or use an outer
  `indicator`.
- `set()` collapses duplicates. `set(cl["Policy_ID"])` has 55 elements, not 150 — fine for
  "which keys", wrong for "how many rows".
- `indicator=True` needs a **merge**; `join` has no equivalent. Convert with
  `a.reset_index().merge(b.reset_index(), on="Date", how="outer", indicator=True)`.

**Drill**

1. Case 2: prove every one of the 120 `Bond_Code` values in Bond_Holdings exists in Bond_Master,
   using two different methods.

<details><summary>Answer</summary>

```python
hold = pd.read_excel(C2, sheet_name="Bond_Holdings"); mast = pd.read_excel(C2, sheet_name="Bond_Master")
print(set(hold["Bond_Code"]) - set(mast["Bond_Code"]))                      # set()
print(pd.merge(hold, mast, on="Bond_Code", how="left", indicator=True)["_merge"].value_counts().to_dict())
# {'both': 120, 'left_only': 0, 'right_only': 0}
```

</details>

---

## P10.15 — Count and explain the NaNs a combine creates

**Exam phrasings**

- "count missing values in every column"
- "identify why the missing values appear"
- "Explain where the missing values come from in the first result"
- "Explain why some rows contain NaN"
- "how many rows of the combined table are complete"

**Core idea.** After any non-inner combine, `isna().sum()` tells you how many rows lacked a
partner on that side. The number is never arbitrary — it equals a set difference you can compute
independently, and that identity is the explanation the examiner wants.

**Template**

```python
print(res.isna().sum())                       # NaN per column
print(res.notna().all(axis=1).sum())          # fully complete rows
print((res.isna().mean() * 100).round(2))     # percentage missing per column
print(res[res.isna().any(axis=1)])            # the incomplete rows themselves
```

**The sentence to write.** Substitute the names:

> The combined table keeps **every date/key from both sources**. The `NIFTY_Close` column is
> empty on 2026-03-04 because that date exists in **E3_A** but not in **E3_B**, and
> `RELIANCE_Close` is empty on 2026-03-06 for the mirror-image reason. Missing values therefore
> mark **absent observations**, not zero values, and there are exactly as many of them as there
> are non-overlapping labels.

**Worked — prove the identity on Case 1**

```python
R = pd.read_excel(C1, sheet_name="Reliance").set_index("Date")[["Close"]].rename(columns={"Close": "Reliance"})
T = pd.read_excel(C1, sheet_name="TCS").set_index("Date")[["Close"]].rename(columns={"Close": "TCS"})
o = R.join(T, how="outer")
print(o.isna().sum())
print("rows:", len(o))
print("NaN in TCS      == dates only in Reliance:", int(o["TCS"].isna().sum()),      len(R.index.difference(T.index)))
print("NaN in Reliance == dates only in TCS     :", int(o["Reliance"].isna().sum()), len(T.index.difference(R.index)))
print(o.notna().all(axis=1).value_counts())
print((o.isna().mean() * 100).round(2))
```

```text
Reliance    272
TCS         270
dtype: int64
rows: 1294
NaN in TCS      == dates only in Reliance: 270 270
NaN in Reliance == dates only in TCS     : 272 272
True     752
False    542
Name: count, dtype: int64
Reliance    21.02
TCS         20.87
dtype: float64
```

752 complete rows — exactly the inner-join row count. 542 incomplete rows = 270 + 272.

**Worked — the column-mismatch case (workbook E2)**

```python
a = pd.read_excel(W, sheet_name="E2_A"); b = pd.read_excel(W, sheet_name="E2_B")
out = pd.concat([a, b], ignore_index=True)
print(out.isna().sum())
print("len(a) =", len(a), " Volume non-null =", out["Volume"].notna().sum())
print("len(b) =", len(b), " Turnover non-null =", out["Turnover"].notna().sum())
```

```text
Date        0
Close       0
Volume      3
Turnover    3
dtype: int64
len(a) = 3  Volume non-null = 3
len(b) = 3  Turnover non-null = 3
```

Same identity in the column direction: `Volume` is non-null exactly on the `len(a)` rows that came
from the frame that **had** a `Volume` column.

**Variants**

| If the question says | Change to |
| --- | --- |
| "drop the incomplete rows" | `res.dropna()` — equivalent to an inner join |
| "fill the gaps with 0" | `res.fillna(0)` — but say in the write-up that 0 is a *value*, not "unknown" |
| "carry the previous value forward" | `res.sort_index().ffill()` (never `fillna(method="ffill")`, removed in pandas 2.x) |
| "which rows are incomplete" | `res[res.isna().any(axis=1)]` |
| "count missing by row" | `res.isna().sum(axis=1)` |

**Traps**

- Do not fill NaNs with 0 for prices or returns — a 0 close price will drag every mean, and a 0
  return understates volatility. Say so if asked to discuss it.
- A NaN after a merge means "no matching record", which is different from "value recorded as
  missing in the source". Distinguish these two in a write-up.
- `isna().sum()` on a merged frame counts **rows**, not keys. With duplicate keys the two differ.

**Drill**

1. For the three-stock outer combination in Case 1 Q10, report the NaN count per column and
   verify each against the source row counts.

<details><summary>Answer</summary>

```python
o3 = R.join([T, I], how="outer")
print(o3.isna().sum())                 # Reliance 535, TCS 533, Infosys 531
print(len(o3), len(R), len(T), len(I)) # 1557 1022 1024 1026 -> 1557-1022=535 etc.
```

</details>

---

## P10.16 — Post-combine hygiene and dtype drift

**Exam phrasings**

- "give the combined DataFrame a fresh integer index"
- "remove the duplicated rows created by the concatenation"
- "sort the combined table chronologically"
- "why has Volume become a float column"
- "Check and display the shape of the combined DataFrame"

**Core idea.** Four checks after every combine: **index**, **duplicates**, **order**, **dtypes**.
The dtype one catches people out — the moment a NaN appears in an integer column, pandas promotes
it to `float64`.

**Template**

```python
res = res.reset_index(drop=True)                  # fresh 0..n-1 index
res = res.drop_duplicates()                       # exact duplicate rows
res = res.drop_duplicates(subset="KEY", keep="last")
res = res.sort_values("Date").reset_index(drop=True)
print(res.shape); print(res.dtypes)
```

**Worked — index and duplicates**

```python
a = pd.read_excel(W, sheet_name="E1_A"); b = pd.read_excel(W, sheet_name="E1_B")
plain = pd.concat([a, b])
print("index before:", list(plain.index))
print("index after :", list(plain.reset_index(drop=True).index))
print(plain.reset_index().head(4))          # WITHOUT drop=True the old labels become a column
```

```text
index before: [0, 1, 2, 0, 1, 2]
index after : [0, 1, 2, 3, 4, 5]
   index        Date  Close   Volume
0      0  2026-01-02   1520  3200000
1      1  2026-01-05   1535  3500000
2      2  2026-01-06   1528  2900000
3      0  2026-01-07   1542  3100000
```

```python
dbl = pd.concat([a, a, b], ignore_index=True)       # the file got appended twice
print("with the duplicate block:", dbl.shape)
print("drop_duplicates()       :", dbl.drop_duplicates().shape)
print("subset on the key       :", dbl.drop_duplicates(subset="Date").shape)
print("keep the LAST copy      :", dbl.drop_duplicates(subset="Date", keep="last").shape)
```

```text
with the duplicate block: (9, 3)
drop_duplicates()       : (6, 3)
subset on the key       : (6, 3)
keep the LAST copy      : (6, 3)
```

**Worked — order**

```python
mixed = pd.concat([b, a], ignore_index=True)        # concatenated in the wrong order
print(mixed["Date"].tolist())
print(mixed.sort_values("Date").reset_index(drop=True)["Date"].tolist())
```

```text
['2026-01-07', '2026-01-08', '2026-01-09', '2026-01-02', '2026-01-05', '2026-01-06']
['2026-01-02', '2026-01-05', '2026-01-06', '2026-01-07', '2026-01-08', '2026-01-09']
```

**Worked — the dtype surprise**

```python
x = pd.read_excel(W, sheet_name="E2_A"); y = pd.read_excel(W, sheet_name="E2_B")
print("E2_A Volume dtype:", x["Volume"].dtype)
z = pd.concat([x, y], ignore_index=True)
print("after outer concat:", z["Volume"].dtype)
print("fill then cast back:", z["Volume"].fillna(0).astype("int64").tolist())
print("nullable integer   :", z["Volume"].astype("Int64").tolist())
```

```text
E2_A Volume dtype: int64
after outer concat: float64
fill then cast back: [3000000, 3300000, 3100000, 0, 0, 0]
nullable integer   : [3000000, 3300000, 3100000, <NA>, <NA>, <NA>]
```

The same happens in Case 1 Q9: `Volume` is `int64` in the early-period frame and `float64` after
an outer concat, which is why volumes print as `14715077.0`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "keep the Date index" | `res.sort_index()` instead of `sort_values` |
| "sort by two columns" | `res.sort_values(["Sector", "Amount"], ascending=[True, False])` |
| "only the first record per customer" | `res.sort_values("Date").drop_duplicates("Customer_ID", keep="first")` |
| "report the duplicates rather than drop them" | `res[res.duplicated(keep=False)]` |
| "volumes must stay integers" | `.astype("Int64")` (capital I — nullable) |

**Traps**

- `reset_index()` without `drop=True` adds a junk `index` column. In an exam, that costs marks
  for a messy table.
- `drop_duplicates()` compares **all** columns by default; two genuine observations that happen to
  be identical will be deleted. Prefer `subset=` with the real key.
- `sort_values` returns a **new** frame. `df.sort_values("Date")` alone changes nothing; assign
  it back.
- After `ignore_index=True` on a Date-indexed frame, the dates are **gone**. Check
  `res.index[:3]` before moving on.

**Drill**

1. Concatenate `E1_A`, `E1_A`, `E1_B`, then produce a clean 6-row chronological frame with a
   0–5 index and integer volumes.

<details><summary>Answer</summary>

```python
clean = (pd.concat([a, a, b])
           .drop_duplicates(subset="Date")
           .sort_values("Date")
           .reset_index(drop=True))
print(clean.shape, clean["Volume"].dtype)      # (6, 3) int64
```

</details>

---

## P10.17 — Multi-stage pipeline: concat then merge then join

**Exam phrasings**

- "Build one portfolio-analysis table from E10_A to E10_D"
- "First combine the January and February transaction logs. Next enrich each transaction with Company and Sector from the company master. Finally attach the sector risk information."
- "Keep all transactions even if a later lookup is missing"
- "Merge this summary DataFrame with Company_Master so that the final table also contains Company and Sector"
- "build one table showing transaction details, company information and sector risk"

**Core idea.** Do one stage at a time, print the shape after each, and use `how='left'`
throughout so the transaction count never changes. Stage 1 adds rows (`concat`), stage 2 matches a
key column (`merge`), stage 3 matches an index (`join(on=)`).

**Template**

```python
s1 = pd.concat([part1, part2], ignore_index=True)                            # rows
s2 = pd.merge(s1, master, left_on="Ticker", right_on="Symbol", how="left")   # key column
s3 = s2.join(lookup.set_index("Sector"), on="Sector", how="left")            # index
print(s1.shape, s2.shape, s3.shape)
```

**Worked — workbook Exercise 10, stage by stage**

```python
jan = pd.read_excel(W, sheet_name="E10_A"); feb = pd.read_excel(W, sheet_name="E10_B")
mst = pd.read_excel(W, sheet_name="E10_C"); sec = pd.read_excel(W, sheet_name="E10_D")
print(jan); print(); print(feb); print(); print(mst); print(); print(sec)
```

```text
  Month Trade_ID       Ticker  Amount
0   Jan     J001  RELIANCE.NS  150000
1   Jan     J002       TCS.NS  120000
2   Jan     J003      INFY.NS   90000

  Month Trade_ID       Ticker  Amount
0   Feb     F001  HDFCBANK.NS  110000
1   Feb     F002       TCS.NS   70000
2   Feb     F003   UNKNOWN.NS   50000

        Symbol                    Company   Sector
0  RELIANCE.NS        Reliance Industries   Energy
1       TCS.NS  Tata Consultancy Services       IT
2      INFY.NS                    Infosys       IT
3  HDFCBANK.NS                  HDFC Bank  Banking

    Sector Risk_Level  Max_Portfolio_Weight
0   Energy     Medium                  0.30
1       IT     Medium                  0.35
2  Banking       High                  0.25
3   Pharma        Low                  0.20
```

```python
# STAGE 1 — more rows, same columns -> concat
tx = pd.concat([jan, feb], ignore_index=True)
print(tx); print("shape", tx.shape)
```

```text
  Month Trade_ID       Ticker  Amount
0   Jan     J001  RELIANCE.NS  150000
1   Jan     J002       TCS.NS  120000
2   Jan     J003      INFY.NS   90000
3   Feb     F001  HDFCBANK.NS  110000
4   Feb     F002       TCS.NS   70000
5   Feb     F003   UNKNOWN.NS   50000
shape (6, 4)
```

```python
# STAGE 2 — key column, different names, keep all transactions -> left merge
s2 = pd.merge(tx, mst, left_on="Ticker", right_on="Symbol", how="left")
print(s2); print("shape", s2.shape)
```

```text
  Month Trade_ID       Ticker  Amount       Symbol                    Company   Sector
0   Jan     J001  RELIANCE.NS  150000  RELIANCE.NS        Reliance Industries   Energy
1   Jan     J002       TCS.NS  120000       TCS.NS  Tata Consultancy Services       IT
2   Jan     J003      INFY.NS   90000      INFY.NS                    Infosys       IT
3   Feb     F001  HDFCBANK.NS  110000  HDFCBANK.NS                  HDFC Bank  Banking
4   Feb     F002       TCS.NS   70000       TCS.NS  Tata Consultancy Services       IT
5   Feb     F003   UNKNOWN.NS   50000          NaN                        NaN      NaN
shape (6, 7)
```

```python
# STAGE 3 — attach by Sector index -> join(on=)
final = s2.drop(columns="Symbol").join(sec.set_index("Sector"), on="Sector", how="left")
print(final); print("shape", final.shape)
print(final.isna().sum())
```

```text
  Month Trade_ID       Ticker  Amount                    Company   Sector Risk_Level  Max_Portfolio_Weight
0   Jan     J001  RELIANCE.NS  150000        Reliance Industries   Energy     Medium                  0.30
1   Jan     J002       TCS.NS  120000  Tata Consultancy Services       IT     Medium                  0.35
2   Jan     J003      INFY.NS   90000                    Infosys       IT     Medium                  0.35
3   Feb     F001  HDFCBANK.NS  110000                  HDFC Bank  Banking       High                  0.25
4   Feb     F002       TCS.NS   70000  Tata Consultancy Services       IT     Medium                  0.35
5   Feb     F003   UNKNOWN.NS   50000                        NaN      NaN        NaN                   NaN
shape (6, 8)
Month                   0
Trade_ID                0
Ticker                  0
Amount                  0
Company                 1
Sector                  1
Risk_Level              1
Max_Portfolio_Weight    1
dtype: int64
```

Six transactions in, six transactions out, at every stage. The single unmatched row is
`F003 / UNKNOWN.NS`, and because its `Sector` is NaN the stage-3 lookup fails too — the NaN
**propagates** through the chain.

**The one-liner** (same result, harder to debug — build it stage by stage first)

```python
one = (pd.concat([jan, feb], ignore_index=True)
         .merge(mst, left_on="Ticker", right_on="Symbol", how="left")
         .drop(columns="Symbol")
         .join(sec.set_index("Sector"), on="Sector", how="left"))
print(one.shape, one.equals(final))
```

```text
(6, 8) True
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "discard transactions with no company record" | stage 2 `how="inner"`, or `.dropna(subset="Company")` |
| "flag them instead" | `final["Company"] = final["Company"].fillna("UNMAPPED")` |
| "which sectors are unused" | `set(sec["Sector"]) - set(final["Sector"].dropna())` → `{'Pharma'}` |
| "total amount by sector risk" | `final.groupby("Risk_Level")["Amount"].sum()` |
| "use merge for stage 3 too" | `pd.merge(s2, sec, on="Sector", how="left")` — identical output |

**Traps**

- Use `how='left'` at **every** stage. One stray `inner` deep in the chain silently deletes the
  transaction the examiner is testing for.
- `left_on`/`right_on` leaves a redundant `Symbol` column. Drop it before the next stage or it
  reappears in the final table.
- Print `.shape` after each stage. A count that grows means duplicate keys (P10.10); a count that
  shrinks means an accidental `inner`.

**Drill**

1. Build the same table but keep only transactions in sectors whose `Max_Portfolio_Weight` is at
   least 0.30, and report the row count.

<details><summary>Answer</summary>

```python
print(final[final["Max_Portfolio_Weight"] >= 0.30].shape)      # (4, 8)
```

</details>

---
