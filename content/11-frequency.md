---
id: 11-frequency
part: "Part IV — Summarising and Visualising"
title: "Frequency Distributions, Binning and Cross-tabs"
blurb: "One 9-question template — value_counts, pd.cut, a frequency-table DataFrame, six statistics, two cross-tabs and the interpretation — solved for all four course datasets."
order: 110
covers:
  - "Frequency distribution — Demo case (loan applications, 30 rows)"
  - "Frequency distribution — Practice Case 1 (mutual fund investors, 40 rows)"
  - "Frequency distribution — Practice Case 2 (credit-card spending, 40 rows)"
  - "Frequency distribution — Practice Case 3 (stock transactions, 40 rows)"
  - "Integrated exercises — Case 1 Q13 (return frequency tables)"
  - "Matplotlib exercises — Exercise 2 (Age Group binning)"
datafiles:
  - "Frequency distribution/Demo case/loan_frequency_demo_dataset.xlsx"
  - "Frequency distribution/Demo case/FrequencyDistrib.ipynb"
  - "Frequency distribution/Practice exercises/Case 1/exercise_1_mutual_fund_transactions.xlsx"
  - "Frequency distribution/Practice exercises/Case 2/exercise_2_credit_card_spending.xlsx"
  - "Frequency distribution/Practice exercises/Case 3/exercise_3_stock_transactions.xlsx"
  - "Matplotlib/Matplotlib exercises/credit_card_usage.csv"
patterns:
  - id: P11.1
    title: "Categorical frequency table with value_counts()"
    phrasings:
      - "Find the number of customers in each Risk_Category using value_counts()"
      - "Find the frequency of each Loan_Type"
      - "Find how many loan applications came from each Branch"
      - "Find the frequency of transactions for each Sector"
      - "Find the number of investors belonging to each Investor_Type"
      - "Find the frequency of each Payment_Status"
      - "prepare a simple frequency table for the column"
  - id: P11.2
    title: "Reorder, normalise and count missing values in a frequency table"
    phrasings:
      - "arrange the intervals in their proper order"
      - "show the frequency distribution in ascending order of count"
      - "express the frequencies as percentages of the total"
      - "give the relative frequency / proportion of each category"
      - "how many records have a missing value in this column"
      - "how many distinct categories are present"
  - id: P11.3
    title: "Most common category, tie-safe"
    phrasings:
      - "Identify the most common risk category"
      - "Most common investor type"
      - "the branch with the highest number of applications"
      - "Sector with the highest number of transactions"
      - "which payment status occurs most frequently"
      - "find the mode of the column"
  - id: P11.4
    title: "Grouped frequency distribution from stated class intervals"
    phrasings:
      - "Create the following class intervals for Processing_Days: 0-5, 5-10, 10-15, 15-20, 20-25"
      - "Create a grouped frequency distribution for Investment_Amount using the intervals ₹0-50,000, ₹50,000-1,00,000 ..."
      - "Create a grouped frequency distribution for Monthly_Spend using the intervals ₹0-20,000, ₹20,000-40,000 ..."
      - "Create a frequency distribution table showing the number of applications in each interval"
      - "Create return intervals using pd.cut()"
      - "bin the numeric column into the given class intervals and count each class"
  - id: P11.5
    title: "Choose and declare the class-boundary convention"
    phrasings:
      - "the intervals are given as 0-5, 5-10 — which class does a value of exactly 5 belong to"
      - "state the assumption you have made about the class limits"
      - "use right=False in pd.cut"
      - "why does my frequency table differ from the model answer by one observation"
      - "explain inclusive and exclusive class limits"
  - id: P11.6
    title: "Automatic, quantile and open-ended bins"
    phrasings:
      - "divide the column into five equal-width classes"
      - "create quartile groups of the numeric column"
      - "classify the customers into four equal-sized spending groups"
      - "use the class limits: less than -2%, -2% to -1%, ... greater than 2%"
      - "create an open-ended first and last class"
  - id: P11.7
    title: "The frequency-distribution DataFrame (Group / Frequency / Percentage / Cumulative)"
    phrasings:
      - "Convert the grouped frequency distribution into a DataFrame with the columns Processing_Days, Frequency, Percentage, Cumulative_Frequency"
      - "Convert the grouped frequency distribution into a DataFrame containing Investment Amount Group, Frequency, Percentage, Cumulative Frequency"
      - "convert the result to a DataFrame and add cumulative frequency"
      - "add a percentage column and a cumulative frequency column to the frequency table"
      - "present the frequency distribution as a tidy table with cumulative percentage"
  - id: P11.8
    title: "Count, mean, median, min, max and standard deviation"
    phrasings:
      - "For Processing_Days, find Count, Mean, Median, Minimum, Maximum, Standard deviation"
      - "Find the count, mean, median, minimum, maximum and standard deviation of Investment_Amount"
      - "report the basic descriptive statistics of the numeric column"
      - "use describe() to summarise the column"
      - "compute the population standard deviation instead of the sample one"
      - "find the variance, the mode and the quartiles"
  - id: P11.9
    title: "Cross-tabulation of two categorical columns"
    phrasings:
      - "Create a cross-tabulation showing the number of customers in each Risk_Category for each Branch"
      - "Create a cross-tabulation between Loan_Type and Risk_Category"
      - "Create a cross-tabulation between Investor_Type and Transaction_Type"
      - "Create a cross-tabulation between Card_Type and Payment_Status"
      - "create a cross-tabulation with Stock as rows and Return Interval as columns"
      - "produce a two-way table of counts for the two categorical columns"
  - id: P11.10
    title: "Cross-tab variants — totals, percentages, aggregated values, three-way"
    phrasings:
      - "add row and column totals to the cross-tabulation"
      - "express each cell as a percentage of its row total"
      - "what percentage of Gold cards pay late"
      - "show the mean loan amount for each Branch and Loan_Type combination"
      - "create a three-way cross-tabulation"
      - "produce the same table using pivot_table or groupby"
  - id: P11.11
    title: "Report the modal class interval"
    phrasings:
      - "The processing-time interval containing the largest number of applications"
      - "Investment amount interval having the highest frequency"
      - "Monthly spending interval having the highest frequency"
      - "Transaction-value interval having the highest frequency"
      - "Identify the most frequently occurring return interval for each stock"
      - "which class interval is the modal class"
  - id: P11.12
    title: "Keep a frequency table in class order"
    phrasings:
      - "arrange the intervals in their proper order"
      - "my class intervals come out sorted 10-15, 15-20, 20-25, 5-10 — fix the order"
      - "display the frequency table from the highest class to the lowest"
      - "why did the empty class disappear from my table"
      - "explain the Categorical dtype produced by pd.cut"
  - id: P11.13
    title: "Frequency of a derived or Boolean column"
    phrasings:
      - "Compare the average credit limit by Age Group"
      - "Visualize the proportion of customers in each age group"
      - "there is no Age Group column — create one"
      - "how many transactions had a positive return"
      - "count how many customers spent more than the average"
      - "tabulate a flag created with np.where"
---

## Chapter map

Frequency distribution is the most predictable topic in the paper. One demo case and three
practice cases ask **the same nine questions** in the same order, only the dataset and the
column names change. Learn the nine-step script once (bottom of this chapter) and the whole
question is mechanical.

| Pattern | Use it when |
| --- | --- |
| P11.1 | "find the frequency of each X" — one categorical column (Q1–Q3) |
| P11.2 | the order, the percentages or the missing values matter |
| P11.3 | "identify the most common X" (Q9) — and there may be a tie |
| P11.4 | "create a grouped frequency distribution using the intervals …" (Q4) |
| P11.5 | the intervals are written `0–5, 5–10` and you must decide where `5` goes |
| P11.6 | "five equal classes", "quartiles", "less than −2% / greater than 2%" |
| P11.7 | "convert it into a DataFrame with Frequency, Percentage, Cumulative_Frequency" (Q5) |
| P11.8 | "find the count, mean, median, min, max and standard deviation" (Q6) |
| P11.9 | "create a cross-tabulation between A and B" (Q7, Q8) |
| P11.10 | totals, row/column percentages, means inside a cross-tab, three keys |
| P11.11 | "the interval having the highest frequency" (Q9) |
| P11.12 | the class intervals print in the wrong order, or a class vanished |
| P11.13 | the column the question groups by does not exist yet |

## Setup

Define the base path once. **In the exam, replace it with the path to your own file** — the
examiner's own notebook uses a raw Windows string, `r"C:\Users\GIM\Downloads\file.xlsx"`, and
either style is accepted.

```python
import pandas as pd
import numpy as np

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/Frequency distribution/"
demo = pd.read_excel(BASE + "Demo case/loan_frequency_demo_dataset.xlsx",
                     sheet_name="Loan_Data")
c1 = pd.read_excel(BASE + "Practice exercises/Case 1/exercise_1_mutual_fund_transactions.xlsx",
                   sheet_name="Mutual_Fund_Data")
c2 = pd.read_excel(BASE + "Practice exercises/Case 2/exercise_2_credit_card_spending.xlsx",
                   sheet_name="Credit_Card_Data")
c3 = pd.read_excel(BASE + "Practice exercises/Case 3/exercise_3_stock_transactions.xlsx",
                   sheet_name="Stock_Transactions")

pd.set_option("display.width", 200)       # wide tables print on one line
pd.set_option("display.max_columns", 20)  # do not hide columns behind "..."
```

```text
(30, 6) (40, 5) (40, 5) (40, 5)
2.3.3
```

The two `set_option` lines are only needed when printing to a terminal. Inside Jupyter,
DataFrames render as HTML tables and nothing is truncated — you do **not** need them in the exam.

| Dataset | Shape | Categorical columns | Numeric column to bin |
| --- | --- | --- | --- |
| `demo` — `Loan_Data` | 30 × 6 | `Branch`, `Loan_Type`, `Risk_Category` | `Processing_Days` (also `Loan_Amount_Lakh`) |
| `c1` — `Mutual_Fund_Data` | 40 × 5 | `Investor_Type`, `Transaction_Type`, `Risk_Profile` | `Investment_Amount` |
| `c2` — `Credit_Card_Data` | 40 × 5 | `Card_Type`, `Customer_Segment`, `Payment_Status` | `Monthly_Spend` |
| `c3` — `Stock_Transactions` | 40 × 5 | `Sector`, `Transaction_Type`, `Investor_Risk` | `Transaction_Value` |

No dataset has a single missing value, so `dropna` never changes an answer here — but see
P11.2, because the examiner can easily hand you a file that does.

### The examiner's house style

The only worked solution that exists anywhere in the course material is
`Frequency distribution/Demo case/FrequencyDistrib.ipynb` — a single code cell. Everything in
this chapter is written in **that** style, deliberately, because that is what the marker is
looking for:

- a `# ----------` comment banner naming the question before each block;
- one variable per answer, named after the thing (`risk_freq`, `loan_freq`, `branch_freq`,
  `processing_freq`, `freq_table`, `branch_risk`, `loan_risk`, `most_common_risk`, `top_branch`);
- a `print("\nHeading:")` line before every result, so the output is self-labelling;
- **`pd.cut(..., right=False)`** for class intervals;
- `.value_counts().sort_index()` for grouped tables, plain `.value_counts()` for categorical ones;
- `freq_table.columns = [...]` to rename after `reset_index()`;
- `.idxmax()` for the Q9 interpretation answers (this one has a bug — see P11.3).

## P11.1 — Categorical frequency table with value_counts()

**Exam phrasings**

- "Find the number of customers in each Risk_Category using value_counts()"
- "Find the frequency of each Loan_Type"
- "Find how many loan applications came from each Branch"
- "Find the frequency of transactions for each Sector"
- "Find the number of investors belonging to each Investor_Type"

**Core idea.** `Series.value_counts()` counts each distinct value and returns a Series
**sorted by count, descending**. Q1, Q2 and Q3 of every case are this one method, three times.

**Template**

```python
df["COL"].value_counts()
```

**Worked** — exactly as the examiner wrote it:

```python
risk_freq = demo["Risk_Category"].value_counts()
print("\nFrequency Distribution of Risk Category:")
print(risk_freq)
```

```text

Frequency Distribution of Risk Category:
Risk_Category
Low       14
Medium    10
High       6
Name: count, dtype: int64
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "in label order / alphabetically" | `df["COL"].value_counts().sort_index()` |
| "smallest first" | `df["COL"].value_counts(ascending=True)` |
| "as a proportion / relative frequency" | `df["COL"].value_counts(normalize=True)` |
| "as a percentage" | `(df["COL"].value_counts(normalize=True) * 100).round(2)` |
| "include missing values" | `df["COL"].value_counts(dropna=False)` |
| "as a DataFrame" | `df["COL"].value_counts().to_frame()` |
| "how many distinct values" | `df["COL"].nunique()` / `df["COL"].unique()` |
| "the count of each value of a numeric column, grouped" | `df["COL"].value_counts(bins=5)` |
| "frequencies for every text column at once" | `df.describe(include="object")` |
| "counts of the two columns jointly" | `df.value_counts(["A", "B"])` or P11.9 |

**Traps**

- `value_counts()` returns a **Series**, not a DataFrame. Its index name is the column name and
  its own name is `count` (pandas 2.x). That matters in P11.7.
- The default order is by count, so two runs on different data can list categories in a
  different order. If the question says "arrange in order", you must add `.sort_index()`.
- `value_counts()` silently drops `NaN`. If the marks are for "how many are missing", use
  `dropna=False` or `df["COL"].isna().sum()`.
- `df.value_counts()` on a whole DataFrame counts distinct **rows**, not values in one column.

**Drill**

1. Frequency of each `Sector` in `c3`.
2. Percentage of customers in each `Payment_Status` in `c2`.

<details><summary>Answers</summary>

```python
print(c3["Sector"].value_counts())
print((c2["Payment_Status"].value_counts(normalize=True) * 100).round(2))
```

```text
Sector
Banking    10
IT          8
Auto        8
FMCG        8
Pharma      6
Name: count, dtype: int64

Payment_Status
On Time    62.5
Late       37.5
Name: proportion, dtype: float64
```

</details>

## P11.2 — Reorder, normalise and count missing values in a frequency table

**Exam phrasings**

- "arrange the intervals in their proper order"
- "show the frequency distribution in ascending order of count"
- "express the frequencies as percentages of the total"
- "give the relative frequency of each category"
- "how many records have a missing value in this column"

**Core idea.** Every question about a frequency table is one keyword away from the default:
`sort_index()` for label order, `ascending=` for count order, `normalize=True` for shares,
`dropna=False` for missing.

**Template**

```python
df["COL"].value_counts()                      # by count, descending  (default)
df["COL"].value_counts().sort_index()          # by label
df["COL"].value_counts(ascending=True)         # by count, ascending
df["COL"].value_counts(normalize=True)         # proportions, sum to 1
df["COL"].value_counts(dropna=False)           # NaN gets its own row
```

**Worked**

```python
s = demo["Risk_Category"]
print("default (descending by count):"); print(s.value_counts())
print("\nsort_index() (alphabetical / label order):"); print(s.value_counts().sort_index())
print("\nascending=True (smallest count first):"); print(s.value_counts(ascending=True))
print("\nnormalize=True (proportions):"); print(s.value_counts(normalize=True))
print("\nnormalize=True * 100 rounded (percentages):")
print((s.value_counts(normalize=True) * 100).round(2))
print("\nas a DataFrame:"); print(s.value_counts().to_frame())
print("\nnunique:", s.nunique())
print("unique:", s.unique())
print("mode():"); print(s.mode())
```

```text
default (descending by count):
Risk_Category
Low       14
Medium    10
High       6
Name: count, dtype: int64

sort_index() (alphabetical / label order):
Risk_Category
High       6
Low       14
Medium    10
Name: count, dtype: int64

ascending=True (smallest count first):
Risk_Category
High       6
Medium    10
Low       14
Name: count, dtype: int64

normalize=True (proportions):
Risk_Category
Low       0.466667
Medium    0.333333
High      0.200000
Name: proportion, dtype: float64

normalize=True * 100 rounded (percentages):
Risk_Category
Low       46.67
Medium    33.33
High      20.00
Name: proportion, dtype: float64

as a DataFrame:
               count
Risk_Category       
Low               14
Medium            10
High               6

nunique: 3
unique: ['Low' 'Medium' 'High']
mode():
0    Low
Name: Risk_Category, dtype: object
```

**Worked — missing values.** None of the four course files has a `NaN`, so here is what would
happen if two were introduced:

```python
# dropna: build a copy with two missing values to show the difference
tmp = demo.copy()
tmp.loc[[0, 1], "Risk_Category"] = np.nan
print("default (NaN skipped):")
print(tmp["Risk_Category"].value_counts())
print("\ndropna=False (NaN counted):")
print(tmp["Risk_Category"].value_counts(dropna=False))
print("\nisna().sum() cross-check:", tmp["Risk_Category"].isna().sum())
```

```text
default (NaN skipped):
Risk_Category
Low       13
Medium     9
High       6
Name: count, dtype: int64

dropna=False (NaN counted):
Risk_Category
Low       13
Medium     9
High       6
NaN        2
Name: count, dtype: int64

isna().sum() cross-check: 2
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "sorted by name, Z to A" | `.value_counts().sort_index(ascending=False)` |
| "largest three categories" | `.value_counts().head(3)` |
| "percentages that must add to 100" | `.value_counts(normalize=True).mul(100).round(2)` |
| "also show the total" | `vc = s.value_counts(); vc["Total"] = vc.sum()` |
| "counts and percentages side by side" | see P11.7 — build the DataFrame |

**Traps**

- `normalize=True` divides by the number of **non-missing** values unless you also pass
  `dropna=False`. Say which denominator you used if any data are missing.
- The Series produced by `normalize=True` is named `proportion`, not `count`. Harmless when
  printing, but it becomes the column name after `reset_index()`.
- `.sort_index()` on string labels is alphabetical, so `"10-15"` sorts before `"5-10"`. For
  class intervals, keep the `pd.cut` output as a Categorical — see P11.12.

**Drill**

1. `c1["Risk_Profile"]` in label order, then in ascending-count order.

<details><summary>Answer</summary>

```python
print(c1["Risk_Profile"].value_counts().sort_index())
print(c1["Risk_Profile"].value_counts(ascending=True))
```

```text
Risk_Profile
High        15
Low         11
Moderate    14
Name: count, dtype: int64

Risk_Profile
Low         11
Moderate    14
High        15
Name: count, dtype: int64
```

</details>

## P11.3 — Most common category, tie-safe

**Exam phrasings**

- "Identify the most common risk category"
- "Most common investor type" / "Most common transaction type" / "Most common risk profile"
- "the branch with the highest number of applications"
- "Sector with the highest number of transactions"
- "find the mode of the column"

**Core idea.** `value_counts().idxmax()` returns the label with the largest count — but when
two or more categories are tied it returns **only the first one pandas happens to see**. The
examiner's own notebook falls into exactly this trap.

**Template**

```python
# what the examiner writes
df["COL"].value_counts().idxmax()

# what you should write — reports every tied winner
def modal_categories(series):
    """Return every category tied for the highest count."""
    vc = series.value_counts()
    top = vc.max()
    return list(vc[vc == top].index), int(top)
```

**Worked — the demo data contains two three-way ties**

```python
def modal_categories(series):
    """Return every category tied for the highest count."""
    vc = series.value_counts()
    top = vc.max()
    return list(vc[vc == top].index), int(top)

for col in ["Risk_Category", "Loan_Type", "Branch"]:
    winners, n = modal_categories(demo[col])
    tie = " (TIE)" if len(winners) > 1 else ""
    print(f"{col:15s} -> {winners} at {n} each{tie}")

print("\nWhat idxmax() / head(1) report instead:")
print("idxmax Loan_Type :", demo["Loan_Type"].value_counts().idxmax())
print("idxmax Branch    :", demo["Branch"].value_counts().idxmax())
print("head(1) Loan_Type:"); print(demo["Loan_Type"].value_counts().head(1))
print("mode() Loan_Type :"); print(demo["Loan_Type"].mode())
print("mode() Branch    :"); print(demo["Branch"].mode())
```

```text
Risk_Category   -> ['Low'] at 14 each
Loan_Type       -> ['Home', 'Personal', 'Vehicle'] at 10 each (TIE)
Branch          -> ['Panaji', 'Margao', 'Vasco'] at 10 each (TIE)

What idxmax() / head(1) report instead:
idxmax Loan_Type : Home
idxmax Branch    : Panaji
head(1) Loan_Type:
Loan_Type
Home    10
Name: count, dtype: int64
mode() Loan_Type :
0        Home
1    Personal
2     Vehicle
Name: Loan_Type, dtype: object
mode() Branch    :
0    Margao
1    Panaji
2     Vasco
Name: Branch, dtype: object
```

**Known defect in the source material.** `FrequencyDistrib.ipynb` prints
`Most Common Loan Type: Home` and `Branch with Most Applications: Panaji`. Both are
**three-way ties at 10 applications each** (Home / Personal / Vehicle, and Panaji / Margao /
Vasco). `idxmax()` just returned the first label in the count-sorted index. `Series.mode()`
gets it right: it returns all three.

**The sentence to write when a tie occurs**

> All three loan types occur with the same frequency (10 applications each, 33.3% of the
> portfolio), so there is no single modal loan type — `Home`, `Personal` and `Vehicle` are
> jointly most common. (`idxmax()` would report only `Home` because it breaks the tie by
> position, so `mode()` has been used instead.)

That sentence earns the interpretation mark **and** the "understands the method" mark.

**Variants**

| If the question says | Change to |
| --- | --- |
| "the most common category" | `df["COL"].mode()` — returns all tied winners |
| "the most common category and its count" | `df["COL"].value_counts().head(1)` |
| "just the label" | `df["COL"].value_counts().idxmax()` |
| "the least common category" | `df["COL"].value_counts().idxmin()` (same tie problem) |
| "top / freq for every text column" | `df.describe(include="object")` |
| "the most common combination of two columns" | `df.value_counts(["A", "B"]).idxmax()` |

**Traps**

- `describe(include="object")` has the same blind spot: its `top` row shows one winner only.

  ```python
  print(demo.describe(include="object"))
  ```

  ```text
         Customer_ID  Branch Loan_Type Risk_Category
  count           30      30        30            30
  unique          30       3         3             3
  top            C01  Panaji      Home           Low
  freq             1      10        10            14
  ```

  `Customer_ID` has 30 unique values and `top` is arbitrary — a 30-way tie.
- `mode()` returns a Series, so `print(df["COL"].mode())` shows an index column. Use
  `df["COL"].mode().tolist()` or `", ".join(df["COL"].mode())` for a clean sentence.
- `idxmax()` on an **empty** Series raises `ValueError`. Guard with `if len(vc):` if a filter
  may have removed every row.

**Drill**

1. Tie-safe modal category for each categorical column of `c3`.

<details><summary>Answer</summary>

```python
for col in ["Sector", "Transaction_Type", "Investor_Risk"]:
    print(col, modal_categories(c3[col]))
```

```text
Sector (['Banking'], 10)
Transaction_Type (['Buy'], 26)
Investor_Risk (['Moderate'], 15)
```

No ties in `c3` — but you cannot know that until you check.

</details>

## P11.4 — Grouped frequency distribution from stated class intervals

**Exam phrasings**

- "Create the following class intervals for Processing_Days: 0–5, 5–10, 10–15, 15–20, 20–25 days"
- "Create a grouped frequency distribution for Investment_Amount using the intervals ₹0–50,000, ₹50,000–1,00,000, ₹1,00,000–1,50,000 …"
- "Create a grouped frequency distribution for Monthly_Spend using the intervals ₹0–20,000, ₹20,000–40,000 …"
- "Create a frequency distribution table showing the number of applications in each interval"
- "Create return intervals using pd.cut()"

**Core idea.** `pd.cut` turns a numeric column into an **ordered Categorical** of class
intervals. The question gives you k classes; you write k+1 edges. Then
`.value_counts().sort_index()` is the frequency distribution.

**Reading the intervals off the question.** Write down the first lower limit, then every
upper limit. That is the edge list.

| Case | Intervals as printed | Edge list to type |
| --- | --- | --- |
| Demo — `Processing_Days` | 0–5, 5–10, 10–15, 15–20, 20–25 days | `[0, 5, 10, 15, 20, 25]` |
| Case 1 — `Investment_Amount` | ₹0–50,000 … ₹2,50,000–3,00,000 | `[0, 50000, 100000, 150000, 200000, 250000, 300000]` |
| Case 2 — `Monthly_Spend` | ₹0–20,000 … ₹80,000–1,00,000 | `[0, 20000, 40000, 60000, 80000, 100000]` |
| Case 3 — `Transaction_Value` | ₹20,000–40,000 … ₹1,20,000–1,40,000 | `[20000, 40000, 60000, 80000, 100000, 120000, 140000]` |

Indian digit grouping is the thing to watch: **`1,00,000` is one lakh = `100000`**, and
`1,20,000` = `120000`. Six classes need seven edges; five classes need six.

**Template**

```python
bins = [E0, E1, E2, E3, E4, E5]                                   # k+1 edges
df["GROUP_COL"] = pd.cut(df["NUM_COL"], bins=bins, right=False)   # right=False -> [a, b)
grouped_freq = df["GROUP_COL"].value_counts().sort_index()
print(grouped_freq)
```

**Worked** — the examiner's own block, verbatim:

```python
# ---------------------------------------------------------
# Q4. GROUPED FREQUENCY DISTRIBUTION OF PROCESSING DAYS
# Class intervals:  0-5, 5-10, 10-15, 15-20, 20-25
# ---------------------------------------------------------
bins = [0, 5, 10, 15, 20, 25]
demo["Processing_Group"] = pd.cut(demo["Processing_Days"], bins=bins, right=False)
processing_freq = (demo["Processing_Group"].value_counts().sort_index())
print("\nGrouped Frequency Distribution of Processing Days:")
print(processing_freq)
```

```text

Grouped Frequency Distribution of Processing Days:
Processing_Group
[0, 5)       0
[5, 10)     13
[10, 15)     9
[15, 20)     6
[20, 25)     2
Name: count, dtype: int64
```

**Worked — readable labels.** `labels=[...]` replaces `[5, 10)` with whatever text the
question used. One label per class, so **k labels for k+1 edges**.

```python
bins = [0, 5, 10, 15, 20, 25]
labels = ["0-5", "5-10", "10-15", "15-20", "20-25"]
demo["Processing_Group"] = pd.cut(demo["Processing_Days"], bins=bins,
                                 labels=labels, right=False)
print(demo["Processing_Group"].value_counts().sort_index())
print("\ndtype of the pd.cut result:", demo["Processing_Group"].dtype)
print("categories in order:", list(demo["Processing_Group"].cat.categories))
print("\nfirst 6 rows, value next to its class:")
print(demo[["Processing_Days", "Processing_Group"]].head(6))
```

```text
Processing_Group
0-5       0
5-10     13
10-15     9
15-20     6
20-25     2
Name: count, dtype: int64

dtype of the pd.cut result: category
categories in order: ['0-5', '5-10', '10-15', '15-20', '20-25']

first 6 rows, value next to its class:
   Processing_Days Processing_Group
0                5             5-10
1               12            10-15
2                8             5-10
3               19            15-20
4               14            10-15
5                7             5-10
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "0–5, 5–10 …" (limits stated) | `pd.cut(x, bins=[0,5,10,...], right=False)` |
| "five equal classes" | `pd.cut(x, bins=5)` — P11.6 |
| "quartile groups" | `pd.qcut(x, 4)` — P11.6 |
| "less than −2% / greater than 2%" | `bins=[-np.inf, -2, ..., 2, np.inf]` — P11.6 |
| "use the labels Low/Medium/High" | add `labels=["Low","Medium","High"]` |
| "0 must be included in the first class" | `right=True, include_lowest=True` — P11.5 |
| "don't add a column, just count" | `pd.cut(df["NUM"], bins=bins, right=False).value_counts().sort_index()` |

**Traps**

- **`len(labels)` must equal `len(bins) - 1`**, otherwise
  `ValueError: Bin labels must be one fewer than the number of bin edges`.
- A value that falls outside **every** bin becomes `NaN`, and `value_counts()` hides it:

  ```python
  x = demo["Processing_Days"]

  # A bin list that does not reach the maximum -> values outside every bin become NaN
  short = pd.cut(x, bins=[0, 5, 10, 15], right=False)
  print("value_counts() hides them:")
  print(short.value_counts().sort_index())
  print("\nNaN count (values outside all bins):", short.isna().sum())
  print("the offending values:", sorted(x[short.isna()].tolist()))
  print("\ndropna=False makes the loss visible:")
  print(short.value_counts(dropna=False).sort_index())
  ```

  ```text
  value_counts() hides them:
  Processing_Days
  [0, 5)       0
  [5, 10)     13
  [10, 15)     9
  Name: count, dtype: int64

  NaN count (values outside all bins): 8
  the offending values: [15, 16, 17, 18, 18, 19, 20, 21]

  dropna=False makes the loss visible:
  Processing_Days
  [0.0, 5.0)       0
  [5.0, 10.0)     13
  [10.0, 15.0)      9
  NaN              8
  Name: count, dtype: int64
  ```

  **So always check that the frequencies add up to `len(df)`.** One line, and it catches every
  binning mistake:

  ```python
  print("total", grouped_freq.sum(), "of", len(df), "rows")
  ```
- With `right=False`, a value exactly equal to the **last** edge is outside all classes:

  ```python
  # right=False: a value equal to the FINAL edge falls outside every class
  s = pd.Series([10, 20, 25])
  print(pd.cut(s, bins=[0, 25], right=False))
  print("\nSo always check the total:")
  g = pd.cut(s, bins=[0, 25], right=False)
  print("frequencies total", int(g.value_counts().sum()), "of", len(s), "rows")
  print("\nFix: extend the last edge (or use right=True with include_lowest=True)")
  print(pd.cut(s, bins=[0, 25.001], right=False).value_counts())
  ```

  ```text
  0    [0.0, 25.0)
  1    [0.0, 25.0)
  2            NaN
  dtype: category
  Categories (1, interval[int64, left]): [[0, 25)]

  So always check the total:
  frequencies total 2 of 3 rows

  Fix: extend the last edge (or use right=True with include_lowest=True)
  [0.0, 25.001)    3
  Name: count, dtype: int64
  ```

  In all four course datasets the maximum is strictly below the top edge, so this does not
  bite — but check it on exam data.
- `pd.cut` returns a new Series; it does **not** modify the column in place. Assign it.

**Drill**

1. Grouped frequency distribution of `c2["Monthly_Spend"]` using the stated intervals.

<details><summary>Answer</summary>

```python
print(pd.cut(c2["Monthly_Spend"], bins=[0, 20000, 40000, 60000, 80000, 100000],
             right=False).value_counts().sort_index())
```

```text
Monthly_Spend
[0, 20000)         11
[20000, 40000)     13
[40000, 60000)      6
[60000, 80000)      7
[80000, 100000)     3
Name: count, dtype: int64
```

</details>

## P11.5 — Choose and declare the class-boundary convention

**Exam phrasings**

- "the intervals are given as 0–5, 5–10 — which class does a value of exactly 5 belong to"
- "state the assumption you have made about the class limits"
- "use `right=False` in `pd.cut`"
- "why does my frequency table differ from the model answer by one observation"
- "explain inclusive and exclusive class limits"

**Core idea.** The question writes `0–5, 5–10`. That text does **not** say where a value of
exactly `5` goes. `pd.cut` has to be told:

| Argument | Class shape | 5 goes into | Reads as |
| --- | --- | --- | --- |
| `right=False` | `[lower, upper)` | `[5, 10)` | "5 and up to but not including 10" |
| `right=True` (the pandas default) | `(lower, upper]` | `(0, 5]` | "over 0 and up to and including 5" |

**Use `right=False`.** That is what `FrequencyDistrib.ipynb` does, and it matches how a
statistics textbook reads `0–5, 5–10`: each class takes its own lower limit. But `right=True`
is the pandas **default**, so if you forget the argument you silently get the other answer.

**Template**

```python
# the one to write
pd.cut(df["NUM_COL"], bins=EDGES, right=False)             # [a, b)

# the alternative, if the question's wording demands it
pd.cut(df["NUM_COL"], bins=EDGES, right=True, include_lowest=True)   # (a, b]
```

**Worked — how much it matters, on all four course datasets**

```python
def compare_closure(s, bins, name):
    left  = pd.cut(s, bins=bins, right=False).value_counts().sort_index()
    right = pd.cut(s, bins=bins, right=True,
                   include_lowest=True).value_counts().sort_index()
    out = pd.DataFrame({
        "class": [str(i) for i in left.index],
        "right=False": left.values,
        "right=True": right.values,
    })
    out["diff"] = out["right=True"] - out["right=False"]
    print("\n" + name)
    print("  on-edge values:", sorted(s[s.isin(bins)].unique().tolist()))
    print(out.to_string(index=False))
    print("  totals:", left.sum(), "vs", right.sum(), "of", len(s), "rows")

compare_closure(demo["Processing_Days"], [0, 5, 10, 15, 20, 25], "DEMO  Processing_Days")
compare_closure(c1["Investment_Amount"],
                [0, 50000, 100000, 150000, 200000, 250000, 300000], "CASE 1  Investment_Amount")
compare_closure(c2["Monthly_Spend"], [0, 20000, 40000, 60000, 80000, 100000],
                "CASE 2  Monthly_Spend")
compare_closure(c3["Transaction_Value"],
                [20000, 40000, 60000, 80000, 100000, 120000, 140000], "CASE 3  Transaction_Value")
```

```text

DEMO  Processing_Days
  on-edge values: [5, 10, 15, 20]
   class  right=False  right=True  diff
  [0, 5)            0           2     2
 [5, 10)           13          12    -1
[10, 15)            9           9     0
[15, 20)            6           6     0
[20, 25)            2           1    -1
  totals: 30 vs 30 of 30 rows

CASE 1  Investment_Amount
  on-edge values: [50000, 150000, 200000, 250000]
           class  right=False  right=True  diff
      [0, 50000)           17          18     1
 [50000, 100000)            9           8    -1
[100000, 150000)            4           5     1
[150000, 200000)            5           5     0
[200000, 250000)            4           4     0
[250000, 300000)            1           0    -1
  totals: 40 vs 40 of 40 rows

CASE 2  Monthly_Spend
  on-edge values: []
          class  right=False  right=True  diff
     [0, 20000)           11          11     0
 [20000, 40000)           13          13     0
 [40000, 60000)            6           6     0
 [60000, 80000)            7           7     0
[80000, 100000)            3           3     0
  totals: 40 vs 40 of 40 rows

CASE 3  Transaction_Value
  on-edge values: [60000, 120000]
           class  right=False  right=True  diff
  [20000, 40000)           12          12     0
  [40000, 60000)            7           8     1
  [60000, 80000)            8           7    -1
 [80000, 100000)            7           7     0
[100000, 120000)            3           4     1
[120000, 140000)            3           2    -1
  totals: 40 vs 40 of 40 rows
```

**Exactly which cells move, and why**

| Dataset | Rows on a boundary | Cells that differ | Verdict |
| --- | --- | --- | --- |
| **Demo** `Processing_Days` | `C01`=5, `C25`=5, `C21`=10, `C15`=15, `C22`=20 | `[0,5)` 0→2, `[5,10)` 13→12, `[20,25)` 2→1 | tables differ |
| **Case 1** `Investment_Amount` | `I16`=50,000, `I10`=1,50,000, `I05`=2,00,000, `I15`=2,50,000 | `[0,50000)` 17→18, `[50000,100000)` 9→8, `[100000,150000)` 4→5, `[250000,300000)` **1→0** | tables differ |
| **Case 2** `Monthly_Spend` | none | none | **identical either way** |
| **Case 3** `Transaction_Value` | `T34`=60,000, `T37`=1,20,000 | `[40000,60000)` 7→8, `[60000,80000)` 8→7, `[100000,120000)` 3→4, `[120000,140000)` 3→2 | tables differ |

The Case 1 top class is the dangerous one: the maximum investment is exactly ₹2,50,000, so with
`right=False` it lands in `[250000, 300000)` and the last class has **1**, while with
`right=True` it lands in `(200000, 250000]` and the last class has **0** — an empty top class
that makes the whole table look wrong.

**The assumption sentence to write.** Put this as a comment in the code and as a line under
the table. It costs one line and protects every downstream answer:

> **Assumption:** the class intervals are taken as lower-limit-inclusive and
> upper-limit-exclusive, i.e. `0–50,000` means `[0, 50,000)`, so an investment of exactly
> ₹50,000 is counted in the `50,000–1,00,000` class. This is implemented with
> `pd.cut(..., right=False)`. Four observations (`I16`, `I10`, `I05`, `I15`) sit exactly on a
> class boundary, so the opposite convention (`right=True`) would move them one class down.

For Case 2 you can add "no observation falls on a class boundary, so both conventions give the
same table" — that sentence shows you checked.

**One line that checks it for you**

```python
s, bins = c1["Investment_Amount"], [0, 50000, 100000, 150000, 200000, 250000, 300000]
print("rows sitting exactly on a class boundary:", int(s.isin(bins).sum()))
```

```text
rows sitting exactly on a class boundary: 4
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "0 and above but under 5" / textbook style | `right=False` |
| "more than 0 and up to 5" | `right=True` |
| "the first class must include the minimum value" | `right=True, include_lowest=True` |
| "0–4, 5–9, 10–14" (integer, non-overlapping) | `bins=[0,5,10,15], right=False` — same thing, cleaner wording |
| "up to 5, 5 to 10, above 20" (open-ended) | `bins=[-np.inf, 5, 10, 20, np.inf]` — P11.6 |
| "state your assumption" | write the sentence above |

**Traps**

- `include_lowest=True` only matters with `right=True`, and only when a value equals the
  **first** edge. It changes the printed first class to `(-0.001, 5.0]`, which looks odd but is
  correct.

  ```python
  s = pd.Series([0, 5, 10, 20, 25], name="x")
  bins = [0, 5, 10, 15, 20, 25]
  print("right=True WITHOUT include_lowest: the value 0 gets NO class")
  print(pd.cut(s, bins=bins, right=True))
  print("\nright=True WITH include_lowest=True: first class becomes (-0.001, 5]")
  print(pd.cut(s, bins=bins, right=True, include_lowest=True))
  print("\nright=False: 0 is fine, but 25 (the last edge) gets NO class")
  print(pd.cut(s, bins=bins, right=False))
  ```

  ```text
  right=True WITHOUT include_lowest: the value 0 gets NO class
  0             NaN
  1      (0.0, 5.0]
  2     (5.0, 10.0]
  3    (15.0, 20.0]
  4    (20.0, 25.0]
  Name: x, dtype: category
  Categories (5, interval[int64, right]): [(0, 5] < (5, 10] < (10, 15] < (15, 20] < (20, 25]]

  right=True WITH include_lowest=True: first class becomes (-0.001, 5]
  0    (-0.001, 5.0]
  1    (-0.001, 5.0]
  2      (5.0, 10.0]
  3     (15.0, 20.0]
  4     (20.0, 25.0]
  Name: x, dtype: category
  Categories (5, interval[float64, right]): [(-0.001, 5.0] < (5.0, 10.0] < (10.0, 15.0] < (15.0, 20.0] < (20.0, 25.0]]

  right=False: 0 is fine, but 25 (the last edge) gets NO class
  0      [0.0, 5.0)
  1     [5.0, 10.0)
  2    [10.0, 15.0)
  3    [20.0, 25.0)
  4             NaN
  Name: x, dtype: category
  Categories (5, interval[int64, left]): [[0, 5) < [5, 10) < [10, 15) < [15, 20) < [20, 25)]
  ```

- The convention flips the **printed labels** too: `[5, 10)` versus `(5, 10]`. If you pass your
  own `labels=["0-5","5-10",...]` the labels hide the convention completely — which is exactly
  why the assumption sentence is needed.
- Never compare your numbers with a classmate's without first comparing the `right=` argument.
  A one-observation gap is almost always this, not an arithmetic error.

**Drill**

1. Produce the Case 3 `Transaction_Value` table both ways and name every cell that changes.

<details><summary>Answer</summary>

```python
B = [20000, 40000, 60000, 80000, 100000, 120000, 140000]
L = pd.cut(c3["Transaction_Value"], bins=B, right=False).value_counts().sort_index()
R = pd.cut(c3["Transaction_Value"], bins=B, right=True,
           include_lowest=True).value_counts().sort_index()
print(pd.DataFrame({"right=False": L.values, "right=True": R.values,
                    "diff": R.values - L.values},
                   index=[str(i) for i in L.index]))
```

```text
                  right=False  right=True  diff
[20000, 40000)             12          12     0
[40000, 60000)              7           8     1
[60000, 80000)              8           7    -1
[80000, 100000)             7           7     0
[100000, 120000)            3           4     1
[120000, 140000)            3           2    -1
```

Two rows cause all four changes: `T34` at 60,000 and `T37` at 1,20,000.

</details>

## P11.6 — Automatic, quantile and open-ended bins

**Exam phrasings**

- "divide the column into five equal-width classes"
- "create quartile groups of the numeric column"
- "classify the customers into four equal-sized spending groups"
- "Use the following class limits: less than −2%, −2% to −1%, −1% to 0%, 0% to 1%, 1% to 2%, greater than 2%"
- "create an open-ended first and last class"

**Core idea.** Three ways to get classes when the question does **not** hand you edges:

| Question wants | Tool | Classes are |
| --- | --- | --- |
| equal-**width** classes | `pd.cut(x, k)` | same numeric width, unequal counts |
| equal-**count** classes (quartiles, deciles) | `pd.qcut(x, k)` | same count, unequal widths |
| open-ended first/last class | `pd.cut(x, [-np.inf, ..., np.inf])` | unbounded ends |

**Template**

```python
pd.cut(df["NUM"], bins=5)                                  # 5 equal-width classes
pd.cut(df["NUM"], bins=5, precision=0)                     # tidier printed edges
pd.qcut(df["NUM"], 4)                                      # quartile groups
pd.qcut(df["NUM"], 4, labels=["Q1","Q2","Q3","Q4"])        # named quartiles
pd.cut(df["NUM"], bins=[-np.inf, A, B, C, np.inf],         # open-ended ends
       labels=["< A", "A to B", "B to C", "> C"])
```

**Worked — equal-width vs equal-count on the same column**

```python
x = c2["Monthly_Spend"]

print("pd.cut(x, bins=5) — five EQUAL-WIDTH classes, edges chosen by pandas:")
print(pd.cut(x, bins=5).value_counts().sort_index())

print("\npd.qcut(x, 4) — four EQUAL-COUNT classes (quartile groups):")
print(pd.qcut(x, 4).value_counts().sort_index())

print("\npd.qcut with labels:")
print(pd.qcut(x, 4, labels=["Q1 Low", "Q2", "Q3", "Q4 High"]).value_counts().sort_index())

print("\nthe quartile cut points qcut used:", pd.qcut(x, 4, retbins=True)[1].round(2))
print("\nvalue_counts(bins=5) — same as pd.cut(x, 5) but sorted by count:")
print(x.value_counts(bins=5))
```

```text
pd.cut(x, bins=5) — five EQUAL-WIDTH classes, edges chosen by pandas:
Monthly_Spend
(7920.0, 24000.0]     14
(24000.0, 40000.0]    10
(40000.0, 56000.0]     6
(56000.0, 72000.0]     4
(72000.0, 88000.0]     6
Name: count, dtype: int64

pd.qcut(x, 4) — four EQUAL-COUNT classes (quartile groups):
Monthly_Spend
(7999.999, 17750.0]    10
(17750.0, 33500.0]     10
(33500.0, 58250.0]     10
(58250.0, 88000.0]     10
Name: count, dtype: int64

pd.qcut with labels:
Monthly_Spend
Q1 Low     10
Q2         10
Q3         10
Q4 High    10
Name: count, dtype: int64

the quartile cut points qcut used: [ 8000. 17750. 33500. 58250. 88000.]

value_counts(bins=5) — same as pd.cut(x, 5) but sorted by count:
(7919.999, 24000.0]    14
(24000.0, 40000.0]     10
(40000.0, 56000.0]      6
(72000.0, 88000.0]      6
(56000.0, 72000.0]      4
Name: count, dtype: int64
```

`pd.cut(x, 5)` stretches the lowest edge down by 0.1% of the range so the minimum is included —
that is where `7920.0` comes from (min is 8,000). `value_counts(bins=5)` does the same thing but
prints `7919.999`; both are correct, neither is a rounding bug.

**Worked — open-ended classes (Integrated exercises, Case 1, Q13)**

Q13 gives class limits `less than −2%`, `−2% to −1%`, …, `greater than 2%`. The two outer
classes have no bound, so use `-np.inf` and `np.inf`. **Six classes, seven edges, six labels.**

```python
IBASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/Integrated exercises/Case 1/"
rel = pd.read_excel(IBASE + "Integrated_Pandas_Matplotlib_Stock_Practice.xlsx",
                    sheet_name="Reliance")
rel["Return"] = rel["Close"].pct_change()          # a FRACTION: 0.0123 means 1.23%

bins = [-np.inf, -0.02, -0.01, 0, 0.01, 0.02, np.inf]
labels = ["< -2%", "-2% to -1%", "-1% to 0%", "0% to 1%", "1% to 2%", "> 2%"]
rel["Return_Interval"] = pd.cut(rel["Return"], bins=bins, labels=labels, right=False)

print("Reliance return frequency table (fraction cut points):")
print(rel["Return_Interval"].value_counts().sort_index())
print("\nrows:", len(rel), " NaN returns (first row has no previous close):",
      int(rel["Return"].isna().sum()))
print("frequencies total:", int(rel["Return_Interval"].value_counts().sum()))
```

```text
Reliance return frequency table (fraction cut points):
Return_Interval
< -2%          62
-2% to -1%    135
-1% to 0%     286
0% to 1%      289
1% to 2%      182
> 2%           67
Name: count, dtype: int64

rows: 1022  NaN returns (first row has no previous close): 1
frequencies total: 1021
```

The total is 1021, not 1022, and that is **correct**: `pct_change()` cannot compute a return for
the first trading day. Say so — otherwise the marker reads it as a lost observation.

**The silent error: fraction cut points versus percentage cut points**

`pct_change()` returns `0.0123` for a 1.23% move. The question's limits are written as `−2%`
and `2%`. If you type the cut points as `-2` and `2` against a fraction column, **nothing errors
and no value is dropped** — every return simply falls into the two classes around zero.

```python
# WRONG: percentage cut points on a fraction column
wrong = pd.cut(rel["Return"], bins=[-np.inf, -2, -1, 0, 1, 2, np.inf],
               labels=labels, right=False)
print("WRONG — cut points 2/1 against a column that holds 0.0123:")
print(wrong.value_counts().sort_index())

# RIGHT, option A: cut the fraction on fraction edges
a = pd.cut(rel["Return"], bins=[-np.inf, -0.02, -0.01, 0, 0.01, 0.02, np.inf],
           labels=labels, right=False)
# RIGHT, option B: convert the column to percent first, then cut on 2/1
rel["Return_Pct"] = rel["Close"].pct_change() * 100
b = pd.cut(rel["Return_Pct"], bins=[-np.inf, -2, -1, 0, 1, 2, np.inf],
           labels=labels, right=False)
print("\nfraction edges == percent column with percent edges:",
      a.value_counts().sort_index().equals(b.value_counts().sort_index()))
print(pd.DataFrame({"fraction edges": a.value_counts().sort_index(),
                    "percent column": b.value_counts().sort_index()}))
```

```text
WRONG — cut points 2/1 against a column that holds 0.0123:
Return
< -2%           0
-2% to -1%      0
-1% to 0%     483
0% to 1%      538
1% to 2%        0
> 2%            0
Name: count, dtype: int64

fraction edges == percent column with percent edges: True
            fraction edges  percent column
< -2%                   62              62
-2% to -1%             135             135
-1% to 0%              286             286
0% to 1%               289             289
1% to 2%               182             182
> 2%                    67              67
```

Four empty classes and two huge middle classes is the fingerprint of this mistake. **Pick one
scale and stay on it:** either keep `Return` as a fraction and cut on `0.02`, or build
`Return_Pct = pct_change() * 100` and cut on `2`. Never mix.

**Worked — the full Q13, all seven sub-parts, in 20 lines**

```python
IB = "/Volumes/rythmn103/code/bisa_guide/Exercises/Integrated exercises/Case 1/"
W = IB + "Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"

bins = [-np.inf, -0.02, -0.01, 0, 0.01, 0.02, np.inf]
labels = ["< -2%", "-2% to -1%", "-1% to 0%", "0% to 1%", "1% to 2%", "> 2%"]

frames = {}
for stock in ["Reliance", "TCS", "Infosys"]:
    d = pd.read_excel(W, sheet_name=stock).sort_values("Date")
    d["Return"] = d["Close"].pct_change()                 # fraction, not percent
    d["Return_Interval"] = pd.cut(d["Return"], bins=bins, labels=labels, right=False)
    d["Stock"] = stock
    frames[stock] = d

for stock, d in frames.items():                            # Q13.1, 13.5, 13.6
    print("\nReturn frequency table —", stock)
    print(d["Return_Interval"].value_counts().sort_index())  # Q13.2 proper order

ft = frames["Reliance"]["Return_Interval"].value_counts().sort_index().reset_index()
ft.columns = ["Return_Interval", "Frequency"]              # Q13.3 DataFrame
ft["Cumulative_Frequency"] = ft["Frequency"].cumsum()      # Q13.4 cumulative
print("\nReliance as a DataFrame with cumulative frequency:")
print(ft.to_string(index=False))

allst = pd.concat(frames.values(), ignore_index=True)      # Q13.7 cross-tab
print("\nCross-tabulation: Stock vs Return_Interval")
print(pd.crosstab(allst["Stock"], allst["Return_Interval"]))
```

```text

Return frequency table — Reliance
Return_Interval
< -2%          62
-2% to -1%    135
-1% to 0%     286
0% to 1%      289
1% to 2%      182
> 2%           67
Name: count, dtype: int64

Return frequency table — TCS
Return_Interval
< -2%          45
-2% to -1%    147
-1% to 0%     302
0% to 1%      300
1% to 2%      174
> 2%           55
Name: count, dtype: int64

Return frequency table — Infosys
Return_Interval
< -2%          59
-2% to -1%    166
-1% to 0%     291
0% to 1%      281
1% to 2%      163
> 2%           65
Name: count, dtype: int64

Reliance as a DataFrame with cumulative frequency:
Return_Interval  Frequency  Cumulative_Frequency
          < -2%         62                    62
     -2% to -1%        135                   197
      -1% to 0%        286                   483
       0% to 1%        289                   772
       1% to 2%        182                   954
           > 2%         67                  1021

Cross-tabulation: Stock vs Return_Interval
Return_Interval  < -2%  -2% to -1%  -1% to 0%  0% to 1%  1% to 2%  > 2%
Stock                                                                  
Infosys             59         166        291       281       163    65
Reliance            62         135        286       289       182    67
TCS                 45         147        302       300       174    55
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "five classes of equal width" | `pd.cut(x, 5)` |
| "round the automatic edges" | `pd.cut(x, 5, precision=0)` |
| "quartiles / four equal groups" | `pd.qcut(x, 4)` |
| "deciles" | `pd.qcut(x, 10)` |
| "terciles named Low/Mid/High" | `pd.qcut(x, 3, labels=["Low","Mid","High"])` |
| "top 25% flag" | `pd.qcut(x, 4, labels=False) == 3` |
| "also show me the edges pandas chose" | `pd.cut(x, 5, retbins=True)` → `(series, array)` |
| "less than X / greater than Y" | `bins=[-np.inf, X, ..., Y, np.inf]` |
| "class width of 10 starting at 0" | `bins=range(0, x.max() + 11, 10)` |

**Traps**

- **`pd.cut` = equal width, `pd.qcut` = equal count.** "Four equal-sized groups" means `qcut`;
  "four equal classes" almost always means `cut`. If the wording is ambiguous, state which you
  used in one sentence.
- `pd.qcut` raises when too many values are identical, because two quantiles land on the same
  edge:

  ```python
  s = pd.Series([0, 0, 0, 0, 0, 0, 1, 2, 3, 4])
  try:
      pd.qcut(s, 4)
  except ValueError as e:
      print("ValueError:", e)
  q = pd.qcut(s, 4, duplicates="drop")
  print(q.value_counts().sort_index())
  print("classes asked for: 4   classes produced:", len(q.cat.categories))
  ```

  ```text
  ValueError: Bin edges must be unique: Index([0.0, 0.0, 0.0, 1.75, 4.0], dtype='float64').
  You can drop duplicate edges by setting the 'duplicates' kwarg
  (-0.001, 1.75]    7
  (1.75, 4.0]       3
  Name: count, dtype: int64
  classes asked for: 4   classes produced: 2
  ```

  `duplicates="drop"` fixes the error but gives you **fewer classes than asked for** — say so.
- With `np.inf` edges, `right=False` and `right=True` still differ at the inner edges. The
  P11.5 assumption sentence still applies.
- `np.inf` needs `import numpy as np`. `float("inf")` works too.
- Open-ended labels must be **text** (`"< -2%"`), never numbers, or `sort_index()` will try to
  order them numerically.

**Drill**

1. Four equal-count classes of `c1["Investment_Amount"]`, labelled `Q1`–`Q4`.
2. Four equal-width classes of `c3["Transaction_Value"]` with tidy edges.

<details><summary>Answers</summary>

```python
print(pd.qcut(c1["Investment_Amount"], 4,
              labels=["Q1", "Q2", "Q3", "Q4"]).value_counts().sort_index())
print(pd.cut(c3["Transaction_Value"], bins=4, precision=0).value_counts().sort_index())
```

```text
Investment_Amount
Q1    11
Q2     9
Q3    10
Q4    10
Name: count, dtype: int64
Transaction_Value
(23889.0, 51750.0]      16
(51750.0, 79500.0]      11
(79500.0, 107250.0]      8
(107250.0, 135000.0]     5
Name: count, dtype: int64
```

`qcut` gives 11/9/10/10 rather than a perfect 10/10/10/10 because several investors share the
same amount — equal-count binning cannot split identical values.

</details>

## P11.7 — The frequency-distribution DataFrame (Group / Frequency / Percentage / Cumulative)

**Exam phrasings**

- "Convert the grouped frequency distribution into a DataFrame with the columns Processing_Days, Frequency, Percentage, Cumulative_Frequency"
- "Convert the grouped frequency distribution into a DataFrame containing Investment Amount Group, Frequency, Percentage, Cumulative Frequency"
- "convert the result to a DataFrame"
- "add cumulative frequency"
- "add a percentage column and a cumulative frequency column to the frequency table"
- "present the frequency distribution as a tidy table with cumulative percentage"

**Core idea.** Four steps, always the same: `reset_index()` → rename columns → percentage →
`cumsum()`. This is Q5 of every case and it is worth the most marks per line in the chapter.

**Template**

```python
freq_table = df["GROUP_COL"].value_counts().sort_index().reset_index()
freq_table.columns = ["GROUP_NAME", "Frequency"]
freq_table["Percentage"] = freq_table["Frequency"] / freq_table["Frequency"].sum() * 100
freq_table["Cumulative_Frequency"] = freq_table["Frequency"].cumsum()
print(freq_table)
```

**Worked** — the examiner's own Q5 block, verbatim:

```python
bins = [0, 5, 10, 15, 20, 25]
demo["Processing_Group"] = pd.cut(demo["Processing_Days"], bins=bins, right=False)

# ---------------------------------------------------------
# Q5. CREATE THE FREQUENCY DISTRIBUTION AS A DATAFRAME
# ---------------------------------------------------------
freq_table = (demo["Processing_Group"].value_counts().sort_index().reset_index())
# Rename the columns
freq_table.columns = ["Processing_Days", "Frequency"]
# Add percentage frequency
freq_table["Percentage"] = (freq_table["Frequency"] / freq_table["Frequency"].sum()) * 100
# Add cumulative frequency
freq_table["Cumulative_Frequency"] = (freq_table["Frequency"].cumsum())
print("\nComplete Frequency Distribution Table:")
print(freq_table)
```

```text

Complete Frequency Distribution Table:
  Processing_Days  Frequency  Percentage  Cumulative_Frequency
0          [0, 5)          0    0.000000                     0
1         [5, 10)         13   43.333333                    13
2        [10, 15)          9   30.000000                    22
3        [15, 20)          6   20.000000                    28
4        [20, 25)          2    6.666667                    30
```

Note the column name is `Processing_Days` even though the values are class intervals — the
question asked for that name, so use it. **Copy the column names from the question, letter for
letter**, including the spaces in Case 1's `Investment Amount Group`.

**Worked — rounded, plus cumulative percentage and a total row**

```python
g = pd.cut(demo["Processing_Days"], bins=[0, 5, 10, 15, 20, 25], right=False)
vc = g.value_counts().sort_index()

ft = vc.reset_index()
print("what reset_index() gives you in pandas 2.x:", list(ft.columns))

ft.columns = ["Processing_Days", "Frequency"]
ft["Percentage"] = (ft["Frequency"] / ft["Frequency"].sum() * 100).round(2)
ft["Cumulative_Frequency"] = ft["Frequency"].cumsum()
ft["Cumulative_Percentage"] = ft["Percentage"].cumsum().round(2)
print("\nrounded, with cumulative percentage as well:")
print(ft.to_string(index=False))

print("\nwith a TOTAL row (only if asked):")
total = pd.DataFrame([["Total", ft["Frequency"].sum(), 100.00, "", ""]], columns=ft.columns)
print(pd.concat([ft.astype(object), total], ignore_index=True).to_string(index=False))
```

```text
what reset_index() gives you in pandas 2.x: ['Processing_Days', 'count']

rounded, with cumulative percentage as well:
Processing_Days  Frequency  Percentage  Cumulative_Frequency  Cumulative_Percentage
         [0, 5)          0        0.00                     0                   0.00
        [5, 10)         13       43.33                    13                  43.33
       [10, 15)          9       30.00                    22                  73.33
       [15, 20)          6       20.00                    28                  93.33
       [20, 25)          2        6.67                    30                 100.00

with a TOTAL row (only if asked):
Processing_Days Frequency Percentage Cumulative_Frequency Cumulative_Percentage
         [0, 5)         0        0.0                    0                   0.0
        [5, 10)        13      43.33                   13                 43.33
       [10, 15)         9       30.0                   22                 73.33
       [15, 20)         6       20.0                   28                 93.33
       [20, 25)         2       6.67                   30                 100.0
          Total        30      100.0
```

**Worked — Case 1 with the question's own rupee labels, plus a "more-than" cumulative**

```python
bins = [0, 50000, 100000, 150000, 200000, 250000, 300000]
labels = ["0-50,000", "50,000-1,00,000", "1,00,000-1,50,000",
          "1,50,000-2,00,000", "2,00,000-2,50,000", "2,50,000-3,00,000"]
g = pd.cut(c1["Investment_Amount"], bins=bins, labels=labels, right=False)

ft = g.value_counts().sort_index().reset_index()
ft.columns = ["Investment Amount Group", "Frequency"]
ft["Percentage"] = (ft["Frequency"] / ft["Frequency"].sum() * 100).round(2)
ft["Cumulative Frequency"] = ft["Frequency"].cumsum()
ft["More-than Cumulative"] = ft["Frequency"][::-1].cumsum()[::-1]
print(ft.to_string(index=False))

print("\nsame table for a CATEGORICAL column (no pd.cut needed):")
ct = demo["Risk_Category"].value_counts().reset_index()
ct.columns = ["Risk_Category", "Frequency"]
ct["Percentage"] = (ct["Frequency"] / ct["Frequency"].sum() * 100).round(2)
ct["Cumulative_Frequency"] = ct["Frequency"].cumsum()
print(ct.to_string(index=False))
```

```text
Investment Amount Group  Frequency  Percentage  Cumulative Frequency  More-than Cumulative
               0-50,000         17        42.5                    17                    40
        50,000-1,00,000          9        22.5                    26                    23
      1,00,000-1,50,000          4        10.0                    30                    14
      1,50,000-2,00,000          5        12.5                    35                    10
      2,00,000-2,50,000          4        10.0                    39                     5
      2,50,000-3,00,000          1         2.5                    40                     1

same table for a CATEGORICAL column (no pd.cut needed):
Risk_Category  Frequency  Percentage  Cumulative_Frequency
          Low         14       46.67                    14
       Medium         10       33.33                    24
         High          6       20.00                    30
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "percentage, to two decimals" | `(… * 100).round(2)` |
| "relative frequency (not percent)" | `freq_table["Frequency"] / freq_table["Frequency"].sum()` |
| "cumulative percentage" | `freq_table["Percentage"].cumsum()` |
| "less-than cumulative frequency" | `…["Frequency"].cumsum()` (the normal one) |
| "more-than cumulative frequency" | `…["Frequency"][::-1].cumsum()[::-1]` |
| "hide the row numbers" | `print(freq_table.to_string(index=False))` |
| "keep the intervals as the index" | skip `reset_index()`; build the columns on a DataFrame made with `vc.to_frame("Frequency")` |
| "add a total row" | see above — only when asked, it breaks the dtypes |
| "sorted by frequency instead of class" | drop `.sort_index()`; but then cumulative frequency is meaningless — say so |
| "export it to Excel" | `freq_table.to_excel("freq.xlsx", index=False)` |

**Traps**

- **pandas 2.x renamed the count column.** `value_counts().reset_index()` gives
  `['Processing_Days', 'count']`. In pandas 1.x it gave `['index', 'Processing_Group']`. The
  examiner's `freq_table.columns = [...]` assignment is version-proof because it overwrites both
  names positionally — **use that, not `rename()`**.
- `cumsum()` only means something on a table sorted by class. Always `.sort_index()` **before**
  `reset_index()`.
- The last cumulative frequency must equal `len(df)`. If it does not, values fell outside your
  bins (P11.4) or were `NaN`.
- The examiner's unrounded output prints `43.333333`. That is acceptable. Rounding is nicer but
  is not worth a mark, so do not waste time on formatting.
- Adding a `"Total"` row turns the numeric columns into `object` dtype, so later arithmetic
  fails. Build the total row last, and never feed that DataFrame into further calculations.

**Drill**

1. Build the full Q5 table for `c3["Transaction_Value"]`.

<details><summary>Answer</summary>

```python
bins = [20000, 40000, 60000, 80000, 100000, 120000, 140000]
ft = pd.cut(c3["Transaction_Value"], bins=bins,
            right=False).value_counts().sort_index().reset_index()
ft.columns = ["Transaction Value Group", "Frequency"]
ft["Percentage"] = (ft["Frequency"] / ft["Frequency"].sum() * 100).round(2)
ft["Cumulative Frequency"] = ft["Frequency"].cumsum()
print(ft.to_string(index=False))
```

```text
Transaction Value Group  Frequency  Percentage  Cumulative Frequency
         [20000, 40000)         12        30.0                    12
         [40000, 60000)          7        17.5                    19
         [60000, 80000)          8        20.0                    27
        [80000, 100000)          7        17.5                    34
       [100000, 120000)          3         7.5                    37
       [120000, 140000)          3         7.5                    40
```

</details>

## P11.8 — Count, mean, median, min, max and standard deviation

**Exam phrasings**

- "For Processing_Days, find: Count, Mean, Median, Minimum, Maximum, Standard deviation"
- "Find the count, mean, median, minimum, maximum and standard deviation of Investment_Amount"
- "report the basic descriptive statistics of the numeric column"
- "use describe() to summarise the column"
- "compute the population standard deviation instead of the sample one"
- "find the variance, the mode and the quartiles"

**Core idea.** Six one-word methods on one Series. `.describe()` gives five of the six plus the
quartiles, but **not the median by that name** (it is the `50%` row) — so print both.

**Template**

```python
print("Count:", df["NUM"].count())
print("Mean:", df["NUM"].mean())
print("Median:", df["NUM"].median())
print("Minimum:", df["NUM"].min())
print("Maximum:", df["NUM"].max())
print("Standard Deviation:", df["NUM"].std())

# or all six in one line
df["NUM"].agg(["count", "mean", "median", "min", "max", "std"])
```

**Worked** — the examiner's own Q6 block, verbatim:

```python
# ---------------------------------------------------------
# Q6. BASIC STATISTICS FOR PROCESSING DAYS
# ---------------------------------------------------------
print("\nBasic Statistics for Processing Days:")
print("Count:", demo["Processing_Days"].count())
print("Mean:", demo["Processing_Days"].mean())
print("Median:", demo["Processing_Days"].median())
print("Minimum:", demo["Processing_Days"].min())
print("Maximum:", demo["Processing_Days"].max())
print("Standard Deviation:", demo["Processing_Days"].std())

# We can also obtain several statistics together
print("\nUsing describe():")
print(demo["Processing_Days"].describe())
```

```text

Basic Statistics for Processing Days:
Count: 30
Mean: 11.6
Median: 11.0
Minimum: 5
Maximum: 21
Standard Deviation: 4.724112761070627

Using describe():
count    30.000000
mean     11.600000
std       4.724113
min       5.000000
25%       8.000000
50%      11.000000
75%      14.750000
max      21.000000
Name: Processing_Days, dtype: float64
```

**Worked — everything else they could ask alongside**

```python
x = demo["Processing_Days"]
print("sample std      (ddof=1, default):", x.std())
print("population std  (ddof=0)         :", x.std(ddof=0))
print("sample variance                  :", x.var())
print("range (max - min)                :", x.max() - x.min())
print("mode                             :", x.mode().tolist())
print("quartiles                        :", x.quantile([0.25, 0.5, 0.75]).tolist())
print("IQR                              :", x.quantile(0.75) - x.quantile(0.25))

print("\nall six in one call, as a tidy Series:")
print(x.agg(["count", "mean", "median", "min", "max", "std"]).round(2))

print("\nthe same six as a one-row DataFrame (nice for a report):")
stats = (x.agg(["count", "mean", "median", "min", "max", "std"])
          .round(2).to_frame(name="Processing_Days").T)
print(stats)

print("\nevery numeric column at once:")
print(demo.describe().round(2))

print("\nstatistics per group (a very likely follow-up):")
print(demo.groupby("Branch")["Processing_Days"]
          .agg(["count", "mean", "median", "min", "max", "std"]).round(2))
```

```text
sample std      (ddof=1, default): 4.724112761070627
population std  (ddof=0)         : 4.644710252893428
sample variance                  : 22.317241379310342
range (max - min)                : 16
mode                             : [7, 8, 9]
quartiles                        : [8.0, 11.0, 14.75]
IQR                              : 6.75

all six in one call, as a tidy Series:
count     30.00
mean      11.60
median    11.00
min        5.00
max       21.00
std        4.72
Name: Processing_Days, dtype: float64

the same six as a one-row DataFrame (nice for a report):
                 count  mean  median  min   max   std
Processing_Days   30.0  11.6    11.0  5.0  21.0  4.72

every numeric column at once:
       Processing_Days  Loan_Amount_Lakh
count            30.00             30.00
mean             11.60             25.07
std               4.72             19.19
min               5.00              6.00
25%               8.00             10.00
50%              11.00             15.00
75%              14.75             41.50
max              21.00             65.00

statistics per group (a very likely follow-up):
        count  mean  median  min  max   std
Branch                                     
Margao     10  12.4    12.5    8   16  2.17
Panaji     10  10.7     8.0    5   21  6.58
Vasco      10  11.7     9.5    7   18  4.72
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "population standard deviation" | `df["NUM"].std(ddof=0)` |
| "variance" | `df["NUM"].var()` (also `ddof=0` for population) |
| "range" | `df["NUM"].max() - df["NUM"].min()` |
| "mode of a numeric column" | `df["NUM"].mode()` — can return several values |
| "quartiles / percentiles / P90" | `df["NUM"].quantile([.25,.5,.75])`, `df["NUM"].quantile(0.9)` |
| "interquartile range" | `df["NUM"].quantile(.75) - df["NUM"].quantile(.25)` |
| "coefficient of variation" | `df["NUM"].std() / df["NUM"].mean() * 100` |
| "skewness / kurtosis" | `df["NUM"].skew()`, `df["NUM"].kurt()` |
| "summarise all numeric columns" | `df.describe()` |
| "summarise the text columns" | `df.describe(include="object")` |
| "these statistics for each branch" | `df.groupby("GROUP")["NUM"].agg([...])` |
| "total / sum" | `df["NUM"].sum()` |
| "round everything to 2 decimals" | `.round(2)` on the result |

**Traps**

- **`.std()` is the SAMPLE standard deviation (`ddof=1`).** Excel's `STDEV.P` and most
  statistics-textbook "σ" are `ddof=0`. On the demo data the two differ: `4.7241` vs `4.6447`.
  If the question says "standard deviation" with no qualifier, `.std()` is accepted — but write
  "sample standard deviation (ddof=1)" next to it.
- `count()` counts **non-missing** values. `len(df)` counts rows. They differ the moment the
  file has a `NaN`; quote both if any are missing.
- `describe()` has no `median` row — the median is the `50%` row. Markers look for the word
  "median", so print it separately.
- `mode()` on a numeric column can return many values (here `[7, 8, 9]`, a three-way tie).
  Never index it with `[0]` without checking `len`.
- `df.describe()` silently skips text columns; `df.describe(include="all")` shows both but
  fills the irrelevant cells with `NaN`.
- `.mean()` of an integer column returns a float — `11.6`, not `11`. Do not round it to look
  tidier unless asked; the exact value is the answer.

**Drill**

1. The six statistics for `c1["Investment_Amount"]`, plus the population standard deviation.

<details><summary>Answer</summary>

```python
x = c1["Investment_Amount"]
print(x.agg(["count", "mean", "median", "min", "max", "std"]).round(2))
print("population std (ddof=0):", round(x.std(ddof=0), 2))
```

```text
count         40.00
mean       88900.00
median     57500.00
min        15000.00
max       250000.00
std        71404.16
Name: Investment_Amount, dtype: float64
population std (ddof=0): 70505.96
```

</details>

## P11.9 — Cross-tabulation of two categorical columns

**Exam phrasings**

- "Create a cross-tabulation showing the number of customers in each Risk_Category for each Branch"
- "Create a cross-tabulation between Loan_Type and Risk_Category"
- "Create a cross-tabulation between Investor_Type and Transaction_Type"
- "Create a cross-tabulation between Card_Type and Payment_Status"
- "create a cross-tabulation with Stock as rows and Return Interval as columns"
- "produce a two-way table of counts for the two categorical columns"

**Core idea.** `pd.crosstab(rows, cols)` counts how many rows fall in each combination.
**First argument = rows, second = columns.** Read the question for which is which: "the number
of customers in each Risk_Category **for each Branch**" means Branch on the rows.

**Template**

```python
pd.crosstab(df["ROW_COL"], df["COL_COL"])
```

**Worked** — the examiner's Q7 and Q8, verbatim:

```python
# ---------------------------------------------------------
# Q7. CROSS-TABULATION: BRANCH x RISK CATEGORY
# ---------------------------------------------------------
branch_risk = pd.crosstab(demo["Branch"], demo["Risk_Category"])
print("\nCross-tabulation: Branch vs Risk Category")
print(branch_risk)
# ---------------------------------------------------------
# Q8. CROSS-TABULATION: LOAN TYPE x RISK CATEGORY
# ---------------------------------------------------------
loan_risk = pd.crosstab(demo["Loan_Type"], demo["Risk_Category"])
print("\nCross-tabulation: Loan Type vs Risk Category")
print(loan_risk)
```

```text

Cross-tabulation: Branch vs Risk Category
Risk_Category  High  Low  Medium
Branch                          
Margao            0    1       9
Panaji            3    7       0
Vasco             3    6       1

Cross-tabulation: Loan Type vs Risk Category
Risk_Category  High  Low  Medium
Loan_Type                       
Home              2    8       0
Personal          2    1       7
Vehicle           2    5       3
```

Every cell is a count; every row sums to 10 here because each branch has 10 applications.
`Margao` has zero High-risk applicants and `Panaji` zero Medium — those zeros are real data,
not missing cells.

**Worked — headers, missing values, one-way**

```python
print("rownames / colnames rename the axis headers:")
print(pd.crosstab(demo["Branch"], demo["Risk_Category"],
                  rownames=["Branch"], colnames=["Risk"]))

print("\nmissing values are DROPPED by default:")
d = demo.copy()
d.loc[0:2, "Risk_Category"] = np.nan
print(pd.crosstab(d["Branch"], d["Risk_Category"]))
print("total counted:", pd.crosstab(d["Branch"], d["Risk_Category"]).values.sum(),
      "of", len(d), "rows")

print("\ndropna=False gives NaN its own column:")
print(pd.crosstab(d["Branch"], d["Risk_Category"], dropna=False))

print("\none-way 'cross-tab' (same as value_counts, but as a DataFrame):")
print(pd.crosstab(index=demo["Branch"], columns="Count"))
```

```text
rownames / colnames rename the axis headers:
Risk    High  Low  Medium
Branch                   
Margao     0    1       9
Panaji     3    7       0
Vasco      3    6       1

missing values are DROPPED by default:
Risk_Category  High  Low  Medium
Branch                          
Margao            0    1       8
Panaji            3    6       0
Vasco             3    5       1
total counted: 27 of 30 rows

dropna=False gives NaN its own column:
Risk_Category  High  Low  Medium  NaN
Branch                               
Margao            0    1       8    1
Panaji            3    6       0    1
Vasco             3    5       1    1

one-way 'cross-tab' (same as value_counts, but as a DataFrame):
col_0   Count
Branch       
Margao     10
Panaji     10
Vasco      10
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "A as rows, B as columns" | `pd.crosstab(df["A"], df["B"])` |
| "swap the axes" | `pd.crosstab(df["B"], df["A"])` or `.T` on the result |
| "with row and column totals" | `margins=True` — P11.10 |
| "as percentages" | `normalize=...` — P11.10 |
| "against class intervals" | `pd.crosstab(df["A"], pd.cut(df["NUM"], bins=EDGES, right=False))` |
| "rename the header rows" | `rownames=["..."], colnames=["..."]` |
| "count the missing ones too" | `dropna=False` |
| "sort the rows by total" | `ct.loc[ct.sum(axis=1).sort_values(ascending=False).index]` |
| "which single cell is the largest" | `ct.stack().idxmax()` → `(row, col)` |

**Traps**

- Pass **Series**, not strings: `pd.crosstab(df["A"], df["B"])`. `pd.crosstab("A", "B")` is a
  silent nonsense table of one cell.
- Rows come first. Half the marks on these questions are for putting the right variable on the
  right axis.
- Cross-tabs drop `NaN` in either column by default, so the grand total can be less than
  `len(df)`. Check `ct.values.sum()`.
- A category with no rows at all disappears from the table (see P11.12) — a cross-tab shows only
  the combinations that occur.
- `pd.crosstab` returns a DataFrame, so `ct.loc["Panaji", "Low"]` reads a single cell and
  `ct.sum(axis=1)` gives row totals.

**Drill**

1. Cross-tab `Sector` (rows) against `Investor_Risk` (columns) in `c3`, and name the largest cell.

<details><summary>Answer</summary>

```python
ct = pd.crosstab(c3["Sector"], c3["Investor_Risk"])
print(ct)
print("\nlargest cell:", ct.stack().idxmax(), "=", ct.stack().max())
```

```text
Investor_Risk  High  Low  Moderate
Sector                            
Auto              2    1         5
Banking           3    0         7
FMCG              0    6         2
IT                8    0         0
Pharma            0    5         1

largest cell: ('IT', 'High') = 8
```

Every IT transaction came from a High-risk investor, and no IT transaction came from a Low-risk
one — worth a sentence in the interpretation.

</details>

## P11.10 — Cross-tab variants — totals, percentages, aggregated values, three-way

**Exam phrasings**

- "add row and column totals to the cross-tabulation"
- "express each cell as a percentage of its row total"
- "what percentage of Gold cards pay late"
- "show the mean loan amount for each Branch and Loan_Type combination"
- "create a three-way cross-tabulation"
- "produce the same table using pivot_table or groupby"

**Core idea.** Three arguments do everything: `margins` (totals), `normalize` (percentages),
`values` + `aggfunc` (a statistic instead of a count).

**Template**

```python
pd.crosstab(df["A"], df["B"], margins=True)                       # totals row + column
pd.crosstab(df["A"], df["B"], normalize="index")                   # share of each ROW
pd.crosstab(df["A"], df["B"], normalize="columns")                 # share of each COLUMN
pd.crosstab(df["A"], df["B"], normalize="all")                     # share of the grand total
pd.crosstab(df["A"], df["B"], values=df["NUM"], aggfunc="mean")    # mean instead of count
pd.crosstab([df["A"], df["B"]], df["C"])                           # three-way
```

**Worked**

```python
print("margins=True — row and column totals:")
print(pd.crosstab(demo["Branch"], demo["Risk_Category"], margins=True))

print("\nnormalize='index' — each cell as a share of its ROW (x100, rounded):")
print((pd.crosstab(demo["Branch"], demo["Risk_Category"],
                   normalize="index") * 100).round(1))

print("\nnormalize='columns' — share of its COLUMN:")
print((pd.crosstab(demo["Branch"], demo["Risk_Category"],
                   normalize="columns") * 100).round(1))

print("\nnormalize='all' — share of the grand total:")
print((pd.crosstab(demo["Branch"], demo["Risk_Category"],
                   normalize="all") * 100).round(1))

print("\nvalues + aggfunc — mean loan amount per cell instead of a count:")
print(pd.crosstab(demo["Branch"], demo["Loan_Type"],
                  values=demo["Loan_Amount_Lakh"], aggfunc="mean").round(2))

print("\nthree-way: two row keys:")
print(pd.crosstab([demo["Branch"], demo["Loan_Type"]], demo["Risk_Category"]))
```

```text
margins=True — row and column totals:
Risk_Category  High  Low  Medium  All
Branch                               
Margao            0    1       9   10
Panaji            3    7       0   10
Vasco             3    6       1   10
All               6   14      10   30

normalize='index' — each cell as a share of its ROW (x100, rounded):
Risk_Category  High   Low  Medium
Branch                           
Margao          0.0  10.0    90.0
Panaji         30.0  70.0     0.0
Vasco          30.0  60.0    10.0

normalize='columns' — share of its COLUMN:
Risk_Category  High   Low  Medium
Branch                           
Margao          0.0   7.1    90.0
Panaji         50.0  50.0     0.0
Vasco          50.0  42.9    10.0

normalize='all' — share of the grand total:
Risk_Category  High   Low  Medium
Branch                           
Margao          0.0   3.3    30.0
Panaji         10.0  23.3     0.0
Vasco          10.0  20.0     3.3

values + aggfunc — mean loan amount per cell instead of a count:
Loan_Type   Home  Personal  Vehicle
Branch                             
Margao     42.00      9.00    15.00
Panaji     47.33       NaN    65.00
Vasco        NaN      7.75    14.83

three-way: two row keys:
Risk_Category     High  Low  Medium
Branch Loan_Type                   
Margao Home          0    1       0
       Personal      0    0       6
       Vehicle       0    0       3
Panaji Home          2    7       0
       Vehicle       1    0       0
Vasco  Personal      2    1       1
       Vehicle       1    5       0
```

The `NaN` cells in the `aggfunc="mean"` table are combinations that **never occur** (no Personal
loans in Panaji, no Home loans in Vasco). A mean of nothing is not zero — leave it as `NaN` and
say so, or pass `fill_value=0` only if the question wants zeros.

**Worked — the same table three ways, and a real question answered**

```python
print("pivot_table gives the same counts:")
print(demo.pivot_table(index="Branch", columns="Risk_Category",
                       values="Customer_ID", aggfunc="count", fill_value=0))

print("\ngroupby + unstack gives the same counts:")
print(demo.groupby(["Branch", "Risk_Category"]).size().unstack(fill_value=0))

print("\nnumeric column against a BINNED column (cut inside crosstab):")
g = pd.cut(demo["Processing_Days"], bins=[0, 5, 10, 15, 20, 25], right=False)
print(pd.crosstab(demo["Branch"], g))

print("\nwhat percentage of Gold cards pay late (Case 2):")
ct = (pd.crosstab(c2["Card_Type"], c2["Payment_Status"], normalize="index") * 100).round(1)
print(ct)
print("\nGold -> Late:", ct.loc["Gold", "Late"], "%")
```

```text
pivot_table gives the same counts:
Risk_Category  High  Low  Medium
Branch                          
Margao            0    1       9
Panaji            3    7       0
Vasco             3    6       1

groupby + unstack gives the same counts:
Risk_Category  High  Low  Medium
Branch                          
Margao            0    1       9
Panaji            3    7       0
Vasco             3    6       1

numeric column against a BINNED column (cut inside crosstab):
Processing_Days  [5, 10)  [10, 15)  [15, 20)  [20, 25)
Branch                                                
Margao                 1         8         1         0
Panaji                 7         0         1         2
Vasco                  5         1         4         0

what percentage of Gold cards pay late (Case 2):
Payment_Status  Late  On Time
Card_Type                    
Gold            12.5     87.5
Platinum        40.0     60.0
Silver          64.3     35.7

Gold -> Late: 12.5 %
```

Note the last cross-tab: the empty class `[0, 5)` has **vanished** from the columns, because
`crosstab` keeps only observed categories. Fix in P11.12.

**Variants**

| If the question says | Change to |
| --- | --- |
| "with totals" | `margins=True` |
| "name the totals row 'Total'" | `margins=True, margins_name="Total"` |
| "row-wise percentages" | `normalize="index"` |
| "column-wise percentages" | `normalize="columns"` |
| "percentage of all customers" | `normalize="all"` |
| "percentages with totals" | `margins=True, normalize="index"` |
| "average / total / max of a numeric column per cell" | `values=df["NUM"], aggfunc="mean"` / `"sum"` / `"max"` |
| "fill the empty combinations with 0" | `pivot_table(..., fill_value=0)` |
| "three variables" | `pd.crosstab([df["A"], df["B"]], df["C"])` |
| "two column keys" | `pd.crosstab(df["A"], [df["B"], df["C"]])` |
| "the table as percentages of the row, to 1 decimal" | `(pd.crosstab(...,normalize="index")*100).round(1)` |

**Traps**

- `normalize=True` is the same as `normalize="all"`. `normalize="index"` divides by row totals;
  `"columns"` by column totals. Getting these two the wrong way round is the commonest error —
  check that the direction you chose sums to 100.
- `normalize` returns **proportions** (0–1). Multiply by 100 yourself.
- `margins=True` adds a row **and** a column both labelled `All`. If you then do arithmetic on
  the table you will double-count. Compute first, add margins last.
- With `values=` you **must** give `aggfunc=`, otherwise `ValueError: aggfunc cannot be used
  without values`.
- `pivot_table` defaults to `aggfunc="mean"`, `crosstab` defaults to counting. They are not
  drop-in replacements.

**Drill**

1. What percentage of each `Customer_Segment` in `c2` pays late?

<details><summary>Answer</summary>

```python
print((pd.crosstab(c2["Customer_Segment"], c2["Payment_Status"],
                   normalize="index") * 100).round(1))
```

```text
Payment_Status    Late  On Time
Customer_Segment               
Business          33.3     66.7
Salaried          12.5     87.5
Student           88.9     11.1
```

88.9% of students pay late against 12.5% of salaried customers — the single strongest
relationship in Case 2.

</details>

## P11.11 — Report the modal class interval

**Exam phrasings**

- "The processing-time interval containing the largest number of applications"
- "Investment amount interval having the highest frequency"
- "Monthly spending interval having the highest frequency"
- "Transaction-value interval having the highest frequency"
- "Identify the most frequently occurring return interval for each stock"
- "which class interval is the modal class"

**Core idea.** The modal class is the row of the grouped frequency table with the largest
frequency: `grouped_freq.idxmax()`. Two classes can tie, exactly as in P11.3, so check.

**Template**

```python
# what the examiner writes
grouped_freq.idxmax()

# tie-safe, and it gives you the frequency too
def modal_classes(freq):
    top = freq.max()
    return [str(i) for i in freq[freq == top].index], int(top)
```

**Worked**

```python
processing_freq = (pd.cut(demo["Processing_Days"], bins=[0, 5, 10, 15, 20, 25], right=False)
                     .value_counts().sort_index())

# what the examiner writes
top_processing_group = processing_freq.idxmax()
print("Most Common Processing-Time Interval:", top_processing_group)
print("its frequency:", processing_freq.max())

# tie-safe version
def modal_classes(freq):
    """Return every class interval tied for the highest frequency."""
    top = freq.max()
    return [str(i) for i in freq[freq == top].index], int(top)

print("\ntie-safe:", modal_classes(processing_freq))

print("\nsame question on all four cases:")
specs = [("demo Processing_Days", demo["Processing_Days"], [0, 5, 10, 15, 20, 25]),
         ("c1 Investment_Amount", c1["Investment_Amount"],
          [0, 50000, 100000, 150000, 200000, 250000, 300000]),
         ("c2 Monthly_Spend", c2["Monthly_Spend"], [0, 20000, 40000, 60000, 80000, 100000]),
         ("c3 Transaction_Value", c3["Transaction_Value"],
          [20000, 40000, 60000, 80000, 100000, 120000, 140000])]
for name, s, b in specs:
    f = pd.cut(s, bins=b, right=False).value_counts().sort_index()
    cls, n = modal_classes(f)
    print(f"  {name:22s} modal class {cls} with {n} of {len(s)} "
          f"({n/len(s)*100:.1f}%)")
```

```text
Most Common Processing-Time Interval: [5, 10)
its frequency: 13

tie-safe: (['[5, 10)'], 13)

same question on all four cases:
  demo Processing_Days   modal class ['[5, 10)'] with 13 of 30 (43.3%)
  c1 Investment_Amount   modal class ['[0, 50000)'] with 17 of 40 (42.5%)
  c2 Monthly_Spend       modal class ['[20000, 40000)'] with 13 of 40 (32.5%)
  c3 Transaction_Value   modal class ['[20000, 40000)'] with 12 of 40 (30.0%)
```

**The sentence to write.** Never write just the interval — write the interval, the frequency,
the share, and one clause of meaning:

> The modal class is `[5, 10)` days: 13 of the 30 applications (43.3%) are processed in 5 to
> under 10 days, and 22 of 30 (73.3%) within 15 days, so the distribution is concentrated at
> the fast end with a thin tail of slow cases (2 applications took 20 days or more).

Lift the 73.3% straight out of the `Cumulative_Percentage` column from P11.7 — that is what the
cumulative column is for.

**Variants**

| If the question says | Change to |
| --- | --- |
| "the interval with the highest frequency" | `grouped_freq.idxmax()` |
| "and its frequency" | `grouped_freq.max()` |
| "the least frequent interval" | `grouped_freq.idxmin()` (empty classes win — check!) |
| "the interval and the count together" | `grouped_freq.nlargest(1)` |
| "the top two intervals" | `grouped_freq.nlargest(2)` |
| "as a plain string for a sentence" | `str(grouped_freq.idxmax())` |
| "the modal class for each stock / branch" | `pd.crosstab(df["G"], cut).idxmax(axis=1)` |
| "the median class" | first class where `Cumulative_Frequency >= len(df)/2` |

**Traps**

- `idxmax()` returns an **Interval object**, not a string. `print()` shows `[5, 10)`, but
  `"the modal class is " + grouped_freq.idxmax()` raises `TypeError`. Wrap it in `str(...)`.
- `idxmin()` on a table with an empty class returns that empty class — technically right,
  usually not what the question wants. Say "the lowest non-empty class" if that is meant.
- The modal class depends on the closure convention. On Case 1, `right=True` moves one
  observation into the first class and the modal class count changes from 17 to 18 — same
  winner, different number. Quote the number from the table you actually printed.
- The modal class is **not** the mode of the raw column. `demo["Processing_Days"].mode()` is
  `[7, 8, 9]`; the modal class is `[5, 10)`. Different questions, different answers.

**Drill**

1. Modal class of `c1["Investment_Amount"]` with its frequency and percentage, as a sentence.

<details><summary>Answer</summary>

```python
f = pd.cut(c1["Investment_Amount"],
           bins=[0, 50000, 100000, 150000, 200000, 250000, 300000],
           right=False).value_counts().sort_index()
print("modal class:", str(f.idxmax()), "| frequency:", f.max(),
      "| share:", round(f.max() / f.sum() * 100, 1), "%")
```

```text
modal class: [0, 50000) | frequency: 17 | share: 42.5 %
```

> The modal class is ₹0–50,000: 17 of the 40 transactions (42.5%) are under ₹50,000, and 26 of
> 40 (65%) are under ₹1,00,000, so the scheme's flow is dominated by small retail tickets.

</details>

## P11.12 — Keep a frequency table in class order

**Exam phrasings**

- "arrange the intervals in their proper order"
- "my class intervals come out sorted 10-15, 15-20, 20-25, 5-10 — fix the order"
- "display the frequency table from the highest class to the lowest"
- "why did the empty class disappear from my table"
- "explain the Categorical dtype produced by pd.cut"

**Core idea.** `pd.cut` returns an **ordered Categorical**. While it stays a Categorical,
`.sort_index()` is class order. The instant you turn the labels into plain strings, it becomes
alphabetical and `"10-15"` sorts before `"5-10"`.

**Template**

```python
g = pd.cut(df["NUM"], bins=EDGES, labels=LABELS, right=False)   # ordered Categorical
g.value_counts().sort_index()                    # class order - correct
g.value_counts().sort_index(ascending=False)     # highest class first
g.value_counts().reindex(LABELS)                 # any order you name, keeps empty classes
```

**Worked — the order trap**

```python
labels = ["0-5", "5-10", "10-15", "15-20", "20-25"]
g = pd.cut(demo["Processing_Days"], bins=[0, 5, 10, 15, 20, 25],
           labels=labels, right=False)

print("pd.cut output is an ORDERED Categorical, so sort_index() is class order:")
print(g.value_counts().sort_index())

print("\nBUT if you turn the labels into plain strings first, sort_index() is ALPHABETICAL:")
print(g.astype(str).value_counts().sort_index())

print("\nhighest class first:")
print(g.value_counts().sort_index(ascending=False))

print("\nreindex — force any order you like, keeps empty classes:")
print(g.value_counts().reindex(labels))
```

```text
pd.cut output is an ORDERED Categorical, so sort_index() is class order:
Processing_Days
0-5       0
5-10     13
10-15     9
15-20     6
20-25     2
Name: count, dtype: int64

BUT if you turn the labels into plain strings first, sort_index() is ALPHABETICAL:
Processing_Days
10-15     9
15-20     6
20-25     2
5-10     13
Name: count, dtype: int64

highest class first:
Processing_Days
20-25     2
15-20     6
10-15     9
5-10     13
0-5       0
Name: count, dtype: int64

reindex — force any order you like, keeps empty classes:
Processing_Days
0-5       0
5-10     13
10-15     9
15-20     6
20-25     2
Name: count, dtype: int64
```

Look at the second table: not only is the order wrong, the empty `0-5` class has **gone**.
`astype(str)` throws away the category list, and a string that appears zero times cannot be
counted.

**Worked — where the empty class survives and where it vanishes**

```python
labels = ["0-5", "5-10", "10-15", "15-20", "20-25"]
demo["PG"] = pd.cut(demo["Processing_Days"], bins=[0, 5, 10, 15, 20, 25],
                    labels=labels, right=False)

print("value_counts() keeps the empty class (it is a category):")
print(demo["PG"].value_counts().sort_index())

print("\ngroupby(observed=True) DROPS it:")
print(demo.groupby("PG", observed=True)["Processing_Days"].count())

print("\ngroupby(observed=False) KEEPS it:")
print(demo.groupby("PG", observed=False)["Processing_Days"].count())

print("\ncrosstab DROPS empty categories too:")
print(pd.crosstab(demo["Branch"], demo["PG"]))

print("\nfix — reindex the columns back onto the full class list:")
print(pd.crosstab(demo["Branch"], demo["PG"]).reindex(columns=labels, fill_value=0))

print("\nthe Categorical carries the class list and its order:")
print(demo["PG"].cat.categories.tolist(), "ordered =", demo["PG"].cat.ordered)
```

```text
value_counts() keeps the empty class (it is a category):
PG
0-5       0
5-10     13
10-15     9
15-20     6
20-25     2
Name: count, dtype: int64

groupby(observed=True) DROPS it:
PG
5-10     13
10-15     9
15-20     6
20-25     2
Name: Processing_Days, dtype: int64

groupby(observed=False) KEEPS it:
PG
0-5       0
5-10     13
10-15     9
15-20     6
20-25     2
Name: Processing_Days, dtype: int64

crosstab DROPS empty categories too:
PG      5-10  10-15  15-20  20-25
Branch                           
Margao     1      8      1      0
Panaji     7      0      1      2
Vasco      5      1      4      0

fix — reindex the columns back onto the full class list:
PG      0-5  5-10  10-15  15-20  20-25
Branch                                
Margao    0     1      8      1      0
Panaji    0     7      0      1      2
Vasco     0     5      1      4      0

the Categorical carries the class list and its order:
['0-5', '5-10', '10-15', '15-20', '20-25'] ordered = True
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "in their proper order" | `.value_counts().sort_index()` on the Categorical |
| "highest class first" | `.sort_index(ascending=False)` |
| "in the order I listed them" | `.reindex(LABELS)` |
| "keep the class with zero observations" | never `astype(str)`; use `observed=False` in `groupby` |
| "put the class intervals back as columns of a cross-tab" | `.reindex(columns=LABELS, fill_value=0)` |
| "sort a CATEGORY (not interval) table my way" | `vc.reindex(["Low","Medium","High"])` |
| "make Low/Medium/High sort in that order everywhere" | `df["C"] = pd.Categorical(df["C"], ["Low","Medium","High"], ordered=True)` |
| "show the class list" | `g.cat.categories` |

**Traps**

- `astype(str)` / `.apply(str)` / writing to CSV and reading back all destroy the Categorical
  order. Do the sorting **before** any conversion.
- A `Risk_Category` column of plain strings sorts `High, Low, Medium` — alphabetical, and
  statistically meaningless. If the marker expects `Low, Medium, High`, either
  `reindex(["Low","Medium","High"])` or make it an ordered Categorical.
- In pandas 2.x `groupby` on a Categorical warns about the `observed` default. **Pass `observed`
  explicitly** and the warning goes away and your intent is documented.
- `reindex` with a label that is not in the table inserts `NaN`, not 0. Use
  `.reindex(LABELS, fill_value=0)` when you want zeros.
- `sort_values()` sorts by frequency; `sort_index()` sorts by class. The question's "proper
  order" always means `sort_index()`.

**Drill**

1. Print the `c3["Transaction_Value"]` table from the highest class down, with short labels.

<details><summary>Answer</summary>

```python
labels = ["20-40k", "40-60k", "60-80k", "80k-1L", "1L-1.2L", "1.2L-1.4L"]
g = pd.cut(c3["Transaction_Value"],
           bins=[20000, 40000, 60000, 80000, 100000, 120000, 140000],
           labels=labels, right=False)
print(g.value_counts().sort_index(ascending=False))
```

```text
Transaction_Value
1.2L-1.4L     3
1L-1.2L       3
80k-1L        7
60-80k        8
40-60k        7
20-40k       12
Name: count, dtype: int64
```

</details>

## P11.13 — Frequency of a derived or Boolean column

**Exam phrasings**

- "Compare the Average Credit Limit by Age Group"
- "Visualize the Proportion of Customers in Each Age Group"
- "there is no Age Group column — create one"
- "how many transactions had a positive return"
- "count how many customers spent more than the average"
- "tabulate a flag created with np.where"

**Core idea.** When the question groups by a column that does not exist, **you build it** —
with `pd.cut` for a numeric band, `np.where` for a two-way flag, `np.select` for three or more.
Then every earlier pattern applies unchanged.

**Template**

```python
df["BAND"] = pd.cut(df["NUM"], bins=EDGES, labels=LABELS)        # numeric -> band
df["FLAG"] = np.where(df["NUM"] > THRESHOLD, "Yes", "No")         # two-way flag
df["BAND"] = np.select([cond1, cond2], ["Low", "Medium"], default="High")  # n-way
df["BAND"].value_counts().sort_index()
```

**Worked — the missing `Age Group` column (Matplotlib Exercise 2)**

`credit_card_usage.csv` is asked to be grouped "by Age Group" in three separate questions, and
**the file has no such column**. Bin `Age` and state your bands.

```python
MPL = "/Volumes/rythmn103/code/bisa_guide/Exercises/Matplotlib/Matplotlib exercises/"
cc = pd.read_csv(MPL + "credit_card_usage.csv")
print("columns in the file:", list(cc.columns))
print("there is NO 'Age Group' column, so build one:")
print("Age range:", cc["Age"].min(), "to", cc["Age"].max(), " rows:", len(cc))

bins = [18, 30, 45, 60, 100]
labels = ["18-30", "31-45", "46-60", "60+"]
cc["Age Group"] = pd.cut(cc["Age"], bins=bins, labels=labels, right=True)

print("\nfrequency of each age group:")
print(cc["Age Group"].value_counts().sort_index())
print("\nproportion in each age group (for the pie chart):")
print((cc["Age Group"].value_counts(normalize=True).sort_index() * 100).round(1))
print("\naverage credit limit by age group (for the bar chart):")
print(cc.groupby("Age Group", observed=False)["Credit Limit"].mean().round(0))
```

```text
columns in the file: ['Customer ID', 'Age', 'Credit Limit', 'Total Spend', 'Number of Transactions', 'Customer Satisfaction']
there is NO 'Age Group' column, so build one:
Age range: 19 to 69  rows: 100

frequency of each age group:
Age Group
18-30    21
31-45    37
46-60    23
60+      19
Name: count, dtype: int64

proportion in each age group (for the pie chart):
Age Group
18-30    21.0
31-45    37.0
46-60    23.0
60+      19.0
Name: proportion, dtype: float64

average credit limit by age group (for the bar chart):
Age Group
18-30    32129.0
31-45    26738.0
46-60    25168.0
60+      24221.0
Name: Credit Limit, dtype: float64
```

Here `right=True` is the natural choice because age bands are written `18–30, 31–45` — 30 is in
the first band and 31 starts the second. Say so in one line: "age bands are upper-limit
inclusive, so a customer aged 30 is in 18–30."

**Worked — Boolean and multi-way flags**

```python
print("Boolean Series -> value_counts() counts True and False:")
above = c2["Monthly_Spend"] > c2["Monthly_Spend"].mean()
print(above.value_counts())
print("how many spent more than the average:", int(above.sum()), "of", len(c2))

print("\nnp.where turns the condition into readable labels:")
c2["Spend_Flag"] = np.where(c2["Monthly_Spend"] > c2["Monthly_Spend"].mean(),
                            "Above average", "At or below average")
print(c2["Spend_Flag"].value_counts())

print("\ncross-tab the derived flag against a real column:")
print(pd.crosstab(c2["Card_Type"], c2["Spend_Flag"]))

print("\nmulti-condition flag with np.select:")
c2["Spend_Band"] = np.select(
    [c2["Monthly_Spend"] < 20000, c2["Monthly_Spend"] < 50000],
    ["Low", "Medium"], default="High")
print(c2["Spend_Band"].value_counts())

print("\nflag from a text column (.str.contains):")
print(c2["Payment_Status"].str.contains("Late").value_counts())
```

```text
Boolean Series -> value_counts() counts True and False:
Monthly_Spend
False    24
True     16
Name: count, dtype: int64
how many spent more than the average: 16 of 40

np.where turns the condition into readable labels:
Spend_Flag
At or below average    24
Above average          16
Name: count, dtype: int64

cross-tab the derived flag against a real column:
Spend_Flag  Above average  At or below average
Card_Type                                     
Gold                    6                   10
Platinum               10                    0
Silver                  0                   14

multi-condition flag with np.select:
Spend_Band
Medium    17
High      12
Low       11
Name: count, dtype: int64

flag from a text column (.str.contains):
Payment_Status
False    25
True     15
Name: count, dtype: int64
```

Every Platinum customer and no Silver customer spends above average — the derived flag turned a
numeric column into a one-line finding.

**Variants**

| If the question says | Change to |
| --- | --- |
| "how many rows satisfy the condition" | `(df["NUM"] > VALUE).sum()` |
| "what proportion satisfy it" | `(df["NUM"] > VALUE).mean()` — a Boolean mean is the share |
| "label them Yes / No" | `np.where(cond, "Yes", "No")` |
| "three or more bands from conditions" | `np.select([c1, c2], ["A", "B"], default="C")` |
| "bands from numeric limits" | `pd.cut(df["NUM"], bins=EDGES, labels=LABELS)` |
| "positive / negative / zero" | `np.select([x > 0, x < 0], ["Up", "Down"], default="Flat")` |
| "above or below the median" | compare against `df["NUM"].median()` |
| "flag rows whose text contains X" | `df["TXT"].str.contains("X")` |
| "first letter / prefix of an ID" | `df["ID"].str[0].value_counts()` |
| "year or month of a date" | `df["Date"].dt.year.value_counts().sort_index()` |
| "compare the mean of the numeric column by band" | `df.groupby("BAND", observed=False)["NUM"].mean()` |

**Traps**

- The threshold must be computed **before** the comparison if it depends on the data
  (`df["NUM"].mean()`), and it must be the same threshold everywhere in your answer. Store it in
  a variable.
- `np.where` needs `import numpy as np`.
- `np.select` conditions are evaluated **in order** and the first match wins, so write them
  narrowest-first. `[x < 20000, x < 50000]` works; reversing them puts everything in `Medium`.
- A Boolean `value_counts()` labels rows `True` / `False`, which reads badly in a report. Convert
  to text with `np.where` when the output is for a marker.
- Age bands are a **choice**. Any sensible set is accepted, but you must state it, and you must
  use the same set in every sub-question.
- `pd.cut` on `Age` with `bins=[18, 30, ...]` and `right=True` drops anyone aged exactly 18
  (they land outside). Use `include_lowest=True` or start the edge at 17.

**Drill**

1. In `c1`, cross-tabulate `Investor_Type` against an "above / below the mean investment" flag.

<details><summary>Answer</summary>

```python
c1["Above_Avg"] = np.where(c1["Investment_Amount"] > c1["Investment_Amount"].mean(),
                           "Above average", "Below average")
print(pd.crosstab(c1["Investor_Type"], c1["Above_Avg"]))
```

```text
Above_Avg      Above average  Below average
Investor_Type                              
Corporate                  8              0
HNI                        7              1
Retail                     0             24
```

Not one Retail investor is above the ₹88,900 mean — the mean is being pulled up entirely by the
16 Corporate and HNI tickets.

</details>

## The four cases, fully answered

All four papers ask the **same nine questions**. Write these three helpers once at the top of
your notebook and each case collapses to about fifteen lines.

```python
# --------------------------------------------------------------------
# Three helpers that answer the whole nine-question template
# --------------------------------------------------------------------
def freq_table(series, bins=None, labels=None, right=False, group_name=None):
    """Q4 + Q5: frequency / percentage / cumulative table.
    Categorical column -> leave bins=None.  Numeric column -> pass the class edges."""
    if bins is None:
        vc = series.value_counts().sort_index()
    else:
        vc = pd.cut(series, bins=bins, labels=labels,
                    right=right).value_counts().sort_index()
    t = vc.reset_index()
    t.columns = [group_name or series.name, "Frequency"]
    t["Percentage"] = (t["Frequency"] / t["Frequency"].sum() * 100).round(2)
    t["Cumulative_Frequency"] = t["Frequency"].cumsum()
    return t


def stats6(series):
    """Q6: the six statistics the paper always asks for."""
    return series.agg(["count", "mean", "median", "min", "max", "std"]).round(2)


def modal(labelled):
    """Q9: every category or class tied for the highest frequency."""
    vc = labelled.value_counts() if hasattr(labelled, "value_counts") else labelled
    top = vc.max()
    return [str(i) for i in vc[vc == top].index], int(top)
```

`modal()` accepts a raw column **or** the output of `pd.cut`, so it answers all four parts of Q9
with one function. It returns `(list_of_winners, frequency)` — a list of length 1 means no tie.

### Demo case — loan applications (30 × 6)

```python
BINS = [0, 5, 10, 15, 20, 25]

print("Q1  Risk_Category");      print(demo["Risk_Category"].value_counts())
print("\nQ2  Loan_Type");        print(demo["Loan_Type"].value_counts())
print("\nQ3  Branch");           print(demo["Branch"].value_counts())
print("\nQ4  Processing_Days grouped (right=False)")
print(pd.cut(demo["Processing_Days"], bins=BINS, right=False).value_counts().sort_index())
print("\nQ5  frequency-distribution DataFrame")
print(freq_table(demo["Processing_Days"], bins=BINS, group_name="Processing_Days")
      .to_string(index=False))
print("\nQ6  statistics of Processing_Days"); print(stats6(demo["Processing_Days"]))
print("\nQ7  Branch x Risk_Category");  print(pd.crosstab(demo["Branch"], demo["Risk_Category"]))
print("\nQ8  Loan_Type x Risk_Category"); print(pd.crosstab(demo["Loan_Type"], demo["Risk_Category"]))
print("\nQ9  interpretation (tie-safe)")
print("  most common risk category :", modal(demo["Risk_Category"]))
print("  most common loan type     :", modal(demo["Loan_Type"]))
print("  branch with most applications:", modal(demo["Branch"]))
print("  modal processing interval :",
      modal(pd.cut(demo["Processing_Days"], bins=BINS, right=False)))
```

```text
Q1  Risk_Category
Risk_Category
Low       14
Medium    10
High       6
Name: count, dtype: int64

Q2  Loan_Type
Loan_Type
Home        10
Personal    10
Vehicle     10
Name: count, dtype: int64

Q3  Branch
Branch
Panaji    10
Margao    10
Vasco     10
Name: count, dtype: int64

Q4  Processing_Days grouped (right=False)
Processing_Days
[0, 5)       0
[5, 10)     13
[10, 15)     9
[15, 20)     6
[20, 25)     2
Name: count, dtype: int64

Q5  frequency-distribution DataFrame
Processing_Days  Frequency  Percentage  Cumulative_Frequency
         [0, 5)          0        0.00                     0
        [5, 10)         13       43.33                    13
       [10, 15)          9       30.00                    22
       [15, 20)          6       20.00                    28
       [20, 25)          2        6.67                    30

Q6  statistics of Processing_Days
count     30.00
mean      11.60
median    11.00
min        5.00
max       21.00
std        4.72
Name: Processing_Days, dtype: float64

Q7  Branch x Risk_Category
Risk_Category  High  Low  Medium
Branch                          
Margao            0    1       9
Panaji            3    7       0
Vasco             3    6       1

Q8  Loan_Type x Risk_Category
Risk_Category  High  Low  Medium
Loan_Type                       
Home              2    8       0
Personal          2    1       7
Vehicle           2    5       3

Q9  interpretation (tie-safe)
  most common risk category : (['Low'], 14)
  most common loan type     : (['Home', 'Personal', 'Vehicle'], 10)
  branch with most applications: (['Panaji', 'Margao', 'Vasco'], 10)
  modal processing interval : (['[5, 10)'], 13)
```

**Write-up answer for the demo Q9.**

> `Low` is the most common risk category (14 of 30 applications, 46.7%). `Loan_Type` and
> `Branch` are both **exact three-way ties at 10 applications each** (Home / Personal / Vehicle,
> and Panaji / Margao / Vasco), so neither has a single modal value; the portfolio is balanced
> by design across product and branch. The modal processing-time class is `[5, 10)` days with 13
> of 30 applications (43.3%), and 22 of 30 (73.3%) complete within 15 days. Note that
> `value_counts().idxmax()` would report `Home` and `Panaji` only, because it breaks ties by
> position; `mode()` or the `modal()` helper reports all tied winners.
>
> **Assumption:** class intervals are lower-limit-inclusive, upper-limit-exclusive
> (`pd.cut(..., right=False)`), so a 5-day application is counted in `[5, 10)`. Five rows sit
> exactly on a boundary, so the opposite convention would shift them.

### Practice Case 1 — mutual fund investor transactions (40 × 5)

```python
BINS = [0, 50000, 100000, 150000, 200000, 250000, 300000]

print("Q1  Investor_Type");    print(c1["Investor_Type"].value_counts())
print("\nQ2  Transaction_Type"); print(c1["Transaction_Type"].value_counts())
print("\nQ3  Risk_Profile");    print(c1["Risk_Profile"].value_counts())
print("\nQ4  Investment_Amount grouped (right=False)")
print(pd.cut(c1["Investment_Amount"], bins=BINS, right=False).value_counts().sort_index())
print("\nQ5  frequency-distribution DataFrame")
print(freq_table(c1["Investment_Amount"], bins=BINS,
                 group_name="Investment Amount Group").to_string(index=False))
print("\nQ6  statistics of Investment_Amount"); print(stats6(c1["Investment_Amount"]))
print("\nQ7  Investor_Type x Transaction_Type")
print(pd.crosstab(c1["Investor_Type"], c1["Transaction_Type"]))
print("\nQ8  Investor_Type x Risk_Profile")
print(pd.crosstab(c1["Investor_Type"], c1["Risk_Profile"]))
print("\nQ9  interpretation (tie-safe)")
print("  most common investor type   :", modal(c1["Investor_Type"]))
print("  most common transaction type:", modal(c1["Transaction_Type"]))
print("  most common risk profile    :", modal(c1["Risk_Profile"]))
print("  modal investment interval   :",
      modal(pd.cut(c1["Investment_Amount"], bins=BINS, right=False)))
```

```text
Q1  Investor_Type
Investor_Type
Retail       24
HNI           8
Corporate     8
Name: count, dtype: int64

Q2  Transaction_Type
Transaction_Type
Purchase      17
SIP           15
Redemption     8
Name: count, dtype: int64

Q3  Risk_Profile
Risk_Profile
High        15
Moderate    14
Low         11
Name: count, dtype: int64

Q4  Investment_Amount grouped (right=False)
Investment_Amount
[0, 50000)          17
[50000, 100000)      9
[100000, 150000)     4
[150000, 200000)     5
[200000, 250000)     4
[250000, 300000)     1
Name: count, dtype: int64

Q5  frequency-distribution DataFrame
Investment Amount Group  Frequency  Percentage  Cumulative_Frequency
             [0, 50000)         17        42.5                    17
        [50000, 100000)          9        22.5                    26
       [100000, 150000)          4        10.0                    30
       [150000, 200000)          5        12.5                    35
       [200000, 250000)          4        10.0                    39
       [250000, 300000)          1         2.5                    40

Q6  statistics of Investment_Amount
count         40.00
mean       88900.00
median     57500.00
min        15000.00
max       250000.00
std        71404.16
Name: Investment_Amount, dtype: float64

Q7  Investor_Type x Transaction_Type
Transaction_Type  Purchase  Redemption  SIP
Investor_Type                              
Corporate                6           2    0
HNI                      3           2    3
Retail                   8           4   12

Q8  Investor_Type x Risk_Profile
Risk_Profile   High  Low  Moderate
Investor_Type                     
Corporate         8    0         0
HNI               7    0         1
Retail            0   11        13

Q9  interpretation (tie-safe)
  most common investor type   : (['Retail'], 24)
  most common transaction type: (['Purchase'], 17)
  most common risk profile    : (['High'], 15)
  modal investment interval   : (['[0, 50000)'], 17)
```

**Case 1 needs the closure sentence.** Four rows (`I16` at ₹50,000, `I10` at ₹1,50,000, `I05`
at ₹2,00,000, `I15` at ₹2,50,000) sit exactly on a class edge, so `right=True` gives a
different table — 18/8/5/5/4/**0** instead of 17/9/4/5/4/**1**. State the convention (P11.5).

**Write-up answer for Case 1 Q9.**

> `Retail` is the most common investor type (24 of 40, 60%), `Purchase` the most common
> transaction type (17 of 40, 42.5%) and `High` the most common risk profile (15 of 40, 37.5%).
> The modal investment class is ₹0–50,000 with 17 of 40 transactions (42.5%); 26 of 40 (65%) are
> below ₹1,00,000, while the mean of ₹88,900 is well above the median of ₹57,500, confirming a
> right-skewed distribution driven by a small number of large HNI and Corporate tickets. The
> cross-tabs show the split cleanly: all 8 Corporate and 7 of 8 HNI investors are High risk,
> while all 24 Retail investors are Low or Moderate, and SIPs are almost exclusively Retail
> (12 of 15).
>
> **Assumption:** `pd.cut(..., right=False)`, so ₹50,000 is counted in the ₹50,000–1,00,000
> class. Four observations lie on a class boundary.

### Practice Case 2 — credit-card spending (40 × 5)

```python
BINS = [0, 20000, 40000, 60000, 80000, 100000]

print("Q1  Card_Type");          print(c2["Card_Type"].value_counts())
print("\nQ2  Customer_Segment"); print(c2["Customer_Segment"].value_counts())
print("\nQ3  Payment_Status");   print(c2["Payment_Status"].value_counts())
print("\nQ4  Monthly_Spend grouped (right=False)")
print(pd.cut(c2["Monthly_Spend"], bins=BINS, right=False).value_counts().sort_index())
print("\nQ5  frequency-distribution DataFrame")
print(freq_table(c2["Monthly_Spend"], bins=BINS,
                 group_name="Monthly Spend Group").to_string(index=False))
print("\nQ6  statistics of Monthly_Spend"); print(stats6(c2["Monthly_Spend"]))
print("\nQ7  Card_Type x Payment_Status")
print(pd.crosstab(c2["Card_Type"], c2["Payment_Status"]))
print("\nQ8  Customer_Segment x Payment_Status")
print(pd.crosstab(c2["Customer_Segment"], c2["Payment_Status"]))
print("\nQ9  interpretation (tie-safe)")
print("  most common card type       :", modal(c2["Card_Type"]))
print("  most common customer segment:", modal(c2["Customer_Segment"]))
print("  most common payment status  :", modal(c2["Payment_Status"]))
print("  modal spending interval     :",
      modal(pd.cut(c2["Monthly_Spend"], bins=BINS, right=False)))
```

```text
Q1  Card_Type
Card_Type
Gold        16
Silver      14
Platinum    10
Name: count, dtype: int64

Q2  Customer_Segment
Customer_Segment
Salaried    16
Business    15
Student      9
Name: count, dtype: int64

Q3  Payment_Status
Payment_Status
On Time    25
Late       15
Name: count, dtype: int64

Q4  Monthly_Spend grouped (right=False)
Monthly_Spend
[0, 20000)         11
[20000, 40000)     13
[40000, 60000)      6
[60000, 80000)      7
[80000, 100000)     3
Name: count, dtype: int64

Q5  frequency-distribution DataFrame
Monthly Spend Group  Frequency  Percentage  Cumulative_Frequency
         [0, 20000)         11        27.5                    11
     [20000, 40000)         13        32.5                    24
     [40000, 60000)          6        15.0                    30
     [60000, 80000)          7        17.5                    37
    [80000, 100000)          3         7.5                    40

Q6  statistics of Monthly_Spend
count        40.00
mean      39350.00
median    33500.00
min        8000.00
max       88000.00
std       24556.11
Name: Monthly_Spend, dtype: float64

Q7  Card_Type x Payment_Status
Payment_Status  Late  On Time
Card_Type                    
Gold               2       14
Platinum           4        6
Silver             9        5

Q8  Customer_Segment x Payment_Status
Payment_Status    Late  On Time
Customer_Segment               
Business             5       10
Salaried             2       14
Student              8        1

Q9  interpretation (tie-safe)
  most common card type       : (['Gold'], 16)
  most common customer segment: (['Salaried'], 16)
  most common payment status  : (['On Time'], 25)
  modal spending interval     : (['[20000, 40000)'], 13)
```

**Case 2 is the safe one:** no `Monthly_Spend` value falls on a class boundary, so `right=True`
and `right=False` give the identical table. Say that — it shows you checked.

**Write-up answer for Case 2 Q9.**

> `Gold` is the most common card type (16 of 40, 40%), `Salaried` the most common segment
> (16 of 40, 40%) and `On Time` the most common payment status (25 of 40, 62.5%). The modal
> spending class is ₹20,000–40,000 with 13 of 40 customers (32.5%), and 24 of 40 (60%) spend
> under ₹40,000; the mean of ₹39,350 sits above the median of ₹33,500, so spending is mildly
> right-skewed. The cross-tabs reveal the risk concentration: 9 of 14 Silver cardholders pay
> late (64.3%) against 2 of 16 Gold (12.5%), and 8 of 9 Students pay late (88.9%) against 2 of
> 16 Salaried customers (12.5%).
>
> **Assumption:** `pd.cut(..., right=False)`. No observation falls exactly on a class boundary,
> so the upper-limit-inclusive convention would give the same frequencies.

### Practice Case 3 — stock portfolio transactions (40 × 5)

```python
BINS = [20000, 40000, 60000, 80000, 100000, 120000, 140000]

print("Q1  Sector");             print(c3["Sector"].value_counts())
print("\nQ2  Transaction_Type"); print(c3["Transaction_Type"].value_counts())
print("\nQ3  Investor_Risk");    print(c3["Investor_Risk"].value_counts())
print("\nQ4  Transaction_Value grouped (right=False)")
print(pd.cut(c3["Transaction_Value"], bins=BINS, right=False).value_counts().sort_index())
print("\nQ5  frequency-distribution DataFrame")
print(freq_table(c3["Transaction_Value"], bins=BINS,
                 group_name="Transaction Value Group").to_string(index=False))
print("\nQ6  statistics of Transaction_Value"); print(stats6(c3["Transaction_Value"]))
print("\nQ7  Sector x Transaction_Type")
print(pd.crosstab(c3["Sector"], c3["Transaction_Type"]))
print("\nQ8  Sector x Investor_Risk")
print(pd.crosstab(c3["Sector"], c3["Investor_Risk"]))
print("\nQ9  interpretation (tie-safe)")
print("  sector with most transactions :", modal(c3["Sector"]))
print("  most common transaction type  :", modal(c3["Transaction_Type"]))
print("  most common investor risk     :", modal(c3["Investor_Risk"]))
print("  modal transaction-value class :",
      modal(pd.cut(c3["Transaction_Value"], bins=BINS, right=False)))
```

```text
Q1  Sector
Sector
Banking    10
IT          8
Auto        8
FMCG        8
Pharma      6
Name: count, dtype: int64

Q2  Transaction_Type
Transaction_Type
Buy     26
Sell    14
Name: count, dtype: int64

Q3  Investor_Risk
Investor_Risk
Moderate    15
High        13
Low         12
Name: count, dtype: int64

Q4  Transaction_Value grouped (right=False)
Transaction_Value
[20000, 40000)      12
[40000, 60000)       7
[60000, 80000)       8
[80000, 100000)      7
[100000, 120000)     3
[120000, 140000)     3
Name: count, dtype: int64

Q5  frequency-distribution DataFrame
Transaction Value Group  Frequency  Percentage  Cumulative_Frequency
         [20000, 40000)         12        30.0                    12
         [40000, 60000)          7        17.5                    19
         [60000, 80000)          8        20.0                    27
        [80000, 100000)          7        17.5                    34
       [100000, 120000)          3         7.5                    37
       [120000, 140000)          3         7.5                    40

Q6  statistics of Transaction_Value
count         40.00
mean       65125.00
median     61000.00
min        24000.00
max       135000.00
std        31483.97
Name: Transaction_Value, dtype: float64

Q7  Sector x Transaction_Type
Transaction_Type  Buy  Sell
Sector                     
Auto                5     3
Banking             6     4
FMCG                5     3
IT                  6     2
Pharma              4     2

Q8  Sector x Investor_Risk
Investor_Risk  High  Low  Moderate
Sector                            
Auto              2    1         5
Banking           3    0         7
FMCG              0    6         2
IT                8    0         0
Pharma            0    5         1

Q9  interpretation (tie-safe)
  sector with most transactions : (['Banking'], 10)
  most common transaction type  : (['Buy'], 26)
  most common investor risk     : (['Moderate'], 15)
  modal transaction-value class : (['[20000, 40000)'], 12)
```

**Case 3 needs the closure sentence too.** `T34` at ₹60,000 and `T37` at ₹1,20,000 sit on class
edges, so `right=True` gives 12/**8**/**7**/7/**4**/**2** instead of 12/**7**/**8**/7/**3**/**3**.
Note also that `Sector` has a hidden three-way tie for **second** place (IT / Auto / FMCG at 8
each); `Banking` at 10 is the clear winner, but mention the tie if the question asks you to rank
sectors.

**Write-up answer for Case 3 Q9.**

> `Banking` has the highest number of transactions (10 of 40, 25%), followed by a three-way tie
> between IT, Auto and FMCG at 8 each. `Buy` is the most common transaction type (26 of 40, 65%)
> and `Moderate` the most common investor-risk category (15 of 40, 37.5%). The modal
> transaction-value class is ₹20,000–40,000 with 12 of 40 transactions (30%); the mean of
> ₹65,125 is close to the median of ₹61,000, so transaction values are far more symmetric than
> in Case 1. The sector cross-tab is almost deterministic: all 8 IT transactions come from
> High-risk investors, 6 of 8 FMCG and 5 of 6 Pharma transactions come from Low-risk
> investors with none from High-risk investors, and Banking is
> concentrated in Moderate risk (7 of 10).
>
> **Assumption:** `pd.cut(..., right=False)`. Two observations (`T34`, `T37`) lie exactly on a
> class boundary and would move one class down under the upper-limit-inclusive convention.

### Where the ties are, across all four datasets

| Dataset | Column | Counts | Tie? |
| --- | --- | --- | --- |
| demo | `Risk_Category` | 14 / 10 / 6 | no |
| demo | `Loan_Type` | **10 / 10 / 10** | **three-way tie for first** |
| demo | `Branch` | **10 / 10 / 10** | **three-way tie for first** |
| c1 | `Investor_Type` | 24 / 8 / 8 | tie for second only |
| c1 | `Transaction_Type` | 17 / 15 / 8 | no |
| c1 | `Risk_Profile` | 15 / 14 / 11 | no |
| c2 | `Card_Type` | 16 / 14 / 10 | no |
| c2 | `Customer_Segment` | 16 / 15 / 9 | no |
| c2 | `Payment_Status` | 25 / 15 | no |
| c3 | `Sector` | 10 / 8 / 8 / 8 / 6 | tie for second only |
| c3 | `Transaction_Type` | 26 / 14 | no |
| c3 | `Investor_Risk` | 15 / 13 / 12 | no |

Only the **demo** data has ties for first place — and that is precisely the dataset the
examiner's notebook answers with `idxmax()`, which is why the published answers "Home" and
"Panaji" are wrong as stated. Use `modal()` and you are safe either way.

## Chapter cheat sheet

**One-line answers**

| Task | Code |
| --- | --- |
| frequency of a category | `df["C"].value_counts()` |
| …in label order | `df["C"].value_counts().sort_index()` |
| …smallest first | `df["C"].value_counts(ascending=True)` |
| …as proportions / percentages | `df["C"].value_counts(normalize=True)` / `… * 100` |
| …counting missing values too | `df["C"].value_counts(dropna=False)` |
| how many missing / distinct | `df["C"].isna().sum()` / `df["C"].nunique()` |
| most common category (tie-safe) | `df["C"].mode().tolist()` |
| most common category (examiner's) | `df["C"].value_counts().idxmax()` |
| stated class intervals | `pd.cut(df["N"], bins=EDGES, right=False)` |
| …with readable labels | `pd.cut(df["N"], bins=EDGES, labels=LABELS, right=False)` |
| grouped frequency distribution | `pd.cut(...).value_counts().sort_index()` |
| k equal-width classes | `pd.cut(df["N"], k)` |
| k equal-count classes | `pd.qcut(df["N"], k)` |
| open-ended first / last class | `bins=[-np.inf, a, b, np.inf]` |
| frequency DataFrame | `vc.sort_index().reset_index()`; `df.columns = [...]` |
| percentage column | `ft["F"] / ft["F"].sum() * 100` |
| cumulative frequency | `ft["F"].cumsum()` |
| more-than cumulative | `ft["F"][::-1].cumsum()[::-1]` |
| the six statistics | `df["N"].agg(["count","mean","median","min","max","std"])` |
| population std / variance | `df["N"].std(ddof=0)` / `df["N"].var()` |
| everything at once | `df["N"].describe()` |
| cross-tabulation | `pd.crosstab(df["A"], df["B"])` |
| …with totals | `pd.crosstab(df["A"], df["B"], margins=True)` |
| …as row percentages | `pd.crosstab(df["A"], df["B"], normalize="index") * 100` |
| …with a mean instead of a count | `pd.crosstab(df["A"], df["B"], values=df["N"], aggfunc="mean")` |
| …three-way | `pd.crosstab([df["A"], df["B"]], df["C"])` |
| modal class interval | `grouped_freq.idxmax()` (wrap in `str()` to concatenate) |
| force class order | `.sort_index()` / `.reindex(LABELS)` |
| stats or counts per group | `df.groupby("G", observed=False)["N"].agg([...])` |
| build a missing band column | `pd.cut(df["N"], bins=EDGES, labels=LABELS)` |
| build a flag | `np.where(cond, "Yes", "No")` / `np.select([...], [...], default=...)` |

**Class-interval edges for the four course datasets**

| Case | Column | Edges |
| --- | --- | --- |
| Demo | `Processing_Days` | `[0, 5, 10, 15, 20, 25]` |
| Case 1 | `Investment_Amount` | `[0, 50000, 100000, 150000, 200000, 250000, 300000]` |
| Case 2 | `Monthly_Spend` | `[0, 20000, 40000, 60000, 80000, 100000]` |
| Case 3 | `Transaction_Value` | `[20000, 40000, 60000, 80000, 100000, 120000, 140000]` |
| Integrated C1 Q13 | `Return` (a fraction) | `[-inf, -0.02, -0.01, 0, 0.01, 0.02, inf]` |

**The five things that lose marks**

1. Forgetting `right=False` — pandas defaults to `right=True` and you get a different table.
2. Not stating the class-boundary assumption when values sit on an edge.
3. `idxmax()` on tied counts — report all winners with `mode()` or `modal()`.
4. Frequencies that do not add up to `len(df)` — a value fell outside your bins.
5. Cutting on `2` when the column holds `0.02` (percent vs fraction) — no error, wrong table.

**Three sanity checks to run on every answer**

```python
print("rows:", len(df), "frequencies total:", grouped_freq.sum())      # must match
print("on-edge rows:", int(df["NUM"].isin(bins).sum()))                # 0 means safe
print("ties:", modal(df["CAT"]))                                       # list length > 1 = tie
```

## Exam script

When any frequency-distribution question appears, write this. It is the examiner's own layout —
comment banner per question, one named variable per answer, a `print()` heading before every
result. **Change only the four names on line 3, the edge list on line 4, and the two cross-tab
pairings.**

```python
import pandas as pd
df = pd.read_excel(r"C:\path\to\your_file.xlsx", sheet_name="SHEET")
CAT1, CAT2, CAT3, NUM = "Risk_Category", "Loan_Type", "Branch", "Processing_Days"
bins = [0, 5, 10, 15, 20, 25]
# --------------------------------------------------------- Q1-Q3 FREQUENCY DISTRIBUTIONS
for col in [CAT1, CAT2, CAT3]:
    print("\nFrequency Distribution of", col + ":")
    print(df[col].value_counts())
# --------------------------------------------------------- Q4 GROUPED FREQUENCY DISTRIBUTION
df["Group"] = pd.cut(df[NUM], bins=bins, right=False)   # classes are [lower, upper)
grouped_freq = df["Group"].value_counts().sort_index()
print("\nGrouped Frequency Distribution of", NUM + ":")
print(grouped_freq)
print("check: frequencies total", grouped_freq.sum(), "of", len(df), "rows")
# --------------------------------------------------------- Q5 FREQUENCY DISTRIBUTION TABLE
freq_table = grouped_freq.reset_index()
freq_table.columns = [NUM, "Frequency"]
freq_table["Percentage"] = freq_table["Frequency"] / freq_table["Frequency"].sum() * 100
freq_table["Cumulative_Frequency"] = freq_table["Frequency"].cumsum()
print("\nComplete Frequency Distribution Table:")
print(freq_table)
# --------------------------------------------------------- Q6 BASIC STATISTICS
print("\nBasic Statistics for", NUM + ":")
print(df[NUM].agg(["count", "mean", "median", "min", "max", "std"]))
# --------------------------------------------------------- Q7-Q8 CROSS-TABULATIONS
print("\nCross-tabulation:", CAT3, "vs", CAT1); print(pd.crosstab(df[CAT3], df[CAT1]))
print("\nCross-tabulation:", CAT2, "vs", CAT1); print(pd.crosstab(df[CAT2], df[CAT1]))
# --------------------------------------------------------- Q9 INTERPRETATION (TIE-SAFE)
def modal(s):
    vc = s.value_counts(); return [str(i) for i in vc[vc == vc.max()].index], int(vc.max())
print("\nSummary:")
for col in [CAT1, CAT2, CAT3]:
    print("Most common", col + ":", modal(df[col]))
print("Modal class of " + NUM + ":", modal(df["Group"]))
```

Run against the demo file, this is the whole paper answered:

```text

Frequency Distribution of Risk_Category:
Risk_Category
Low       14
Medium    10
High       6
Name: count, dtype: int64

Frequency Distribution of Loan_Type:
Loan_Type
Home        10
Personal    10
Vehicle     10
Name: count, dtype: int64

Frequency Distribution of Branch:
Branch
Panaji    10
Margao    10
Vasco     10
Name: count, dtype: int64

Grouped Frequency Distribution of Processing_Days:
Group
[0, 5)       0
[5, 10)     13
[10, 15)     9
[15, 20)     6
[20, 25)     2
Name: count, dtype: int64
check: frequencies total 30 of 30 rows

Complete Frequency Distribution Table:
  Processing_Days  Frequency  Percentage  Cumulative_Frequency
0          [0, 5)          0    0.000000                     0
1         [5, 10)         13   43.333333                    13
2        [10, 15)          9   30.000000                    22
3        [15, 20)          6   20.000000                    28
4        [20, 25)          2    6.666667                    30

Basic Statistics for Processing_Days:
count     30.000000
mean      11.600000
median    11.000000
min        5.000000
max       21.000000
std        4.724113
Name: Processing_Days, dtype: float64

Cross-tabulation: Branch vs Risk_Category
Risk_Category  High  Low  Medium
Branch                          
Margao            0    1       9
Panaji            3    7       0
Vasco             3    6       1

Cross-tabulation: Loan_Type vs Risk_Category
Risk_Category  High  Low  Medium
Loan_Type                       
Home              2    8       0
Personal          2    1       7
Vehicle           2    5       3

Summary:
Most common Risk_Category: (['Low'], 14)
Most common Loan_Type: (['Home', 'Personal', 'Vehicle'], 10)
Most common Branch: (['Panaji', 'Margao', 'Vasco'], 10)
Modal class of Processing_Days: (['[5, 10)'], 13)
```

**Then write two sentences by hand**, because no script earns the interpretation marks:

1. The assumption sentence from P11.5 (`right=False`, and whether any value sits on an edge).
2. The modal-class sentence from P11.11 (interval, frequency, percentage, cumulative percentage)
   plus a tie note from P11.3 if any `modal()` list has more than one entry.
