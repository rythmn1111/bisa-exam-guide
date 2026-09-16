---
id: 12-matplotlib
part: "Part IV — Summarising and Visualising"
title: "Matplotlib: Six Charts and the Subplot Figure"
blurb: "The six chart calls the exam asks for, the 2x3 subplot figure that carries the most marks, and the interpretation sentence to write under each one."
order: 120
covers:
  - "Matplotlib exercises — Exercise 1 (bank branches), Q1-Q5"
  - "Matplotlib exercises — Exercise 2 (credit card usage), Q1-Q5"
  - "Matplotlib exercises — Exercise 3 (insurance claims), Q1-Q5"
  - "Matplotlib exercises — Exercise 4 (savings accounts), Q1-Q5"
  - "Integrated exercises Case 1 — Q14 (six individual charts) and Q15 (mandatory 2x3 figure)"
  - "Integrated exercises Case 2 — Part D (2x2 figure)"
  - "Integrated exercises Case 3 — Part D (1x3 figure, pie, boxplot)"
  - "Matplotlib DemoData PltData.xlsx — LineChart, BarChart, Histogram, PieChart, Scatter, BoxPlot, MultipleGraphs"
datafiles:
  - "Matplotlib/Matplotlib exercises/bank_branch_performance.csv"
  - "Matplotlib/Matplotlib exercises/credit_card_usage.csv"
  - "Matplotlib/Matplotlib exercises/insurance_claims.csv"
  - "Matplotlib/Matplotlib exercises/savings_account_analysis.csv"
  - "Matplotlib/DemoData/PltData.xlsx"
  - "Integrated exercises/Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
  - "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
  - "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
patterns:
  - id: P12.1
    title: "The universal chart skeleton"
    phrasings:
      - "create a chart with appropriate titles and axis labels"
      - "provide appropriate titles and axis labels, and add grids where suitable"
      - "add title, axes labels, legend and grid"
      - "display the completed figure"
      - "import matplotlib and plot the data"
  - id: P12.2
    title: "Histogram of one numeric column"
    phrasings:
      - "Visualize the Distribution of Customer Satisfaction Scores"
      - "Create a histogram to visualize the distribution of the total amount spent by customers"
      - "Visualize the Distribution of Claim Amounts"
      - "Visualize the Distribution of Account Balances"
      - "Histogram: distribution of Value_Change_pct using 10 bins"
      - "Histogram: distribution of Settlement_Days using 8 bins"
      - "plot the distribution of Reliance daily returns"
      - "show how the values are spread, with a line at the mean"
  - id: P12.3
    title: "Bar chart of group means"
    phrasings:
      - "Compare the Average Net Profit by City"
      - "Create a bar chart that shows the average net profit of branches in each city"
      - "Compare the Average Claim Amount by Insurance Type"
      - "Compare the Average Balance by Branch City"
      - "Bar chart: average Claim_Amount for each Policy_Type"
      - "compare the mean COL across GROUP_COL using a bar chart"
      - "which category has the highest average"
  - id: P12.4
    title: "Bar chart of the top N rows"
    phrasings:
      - "Bar chart: Plot the five highest-volume Reliance trading days"
      - "Bar chart: five largest bond holdings, with Issuer on the x-axis and Current_Value on the y-axis"
      - "plot the top five claims by Claim_Amount"
      - "display the five largest holdings based on Current_Value as a bar chart"
      - "chart the three worst-performing branches"
  - id: P12.5
    title: "Bin a numeric column into groups before plotting"
    phrasings:
      - "Compare the Average Credit Limit by Age Group"
      - "Visualize the Proportion of Customers in Each Age Group"
      - "Explore Customer Satisfaction Across Different Age Groups"
      - "Explore the Variability in Number of Transactions by Age"
      - "group customers into age bands 18-30, 31-40, 41-50, 51-60, 61-70 and compare"
      - "create balance slabs and compare the average number of transactions"
  - id: P12.6
    title: "Scatter plot with size and colour encoding"
    phrasings:
      - "Analyze the Relationship Between Total Deposits and Net Profit"
      - "Use marker size to represent the number of customers and marker color to represent customer satisfaction"
      - "Analyze the Relationship Between Credit Limit and Total Spend. Use marker size to represent the number of transactions"
      - "Analyze the Relationship Between Age and Claim Amount"
      - "Analyze the Relationship Between Age and Account Balance"
      - "Scatter plot: Holding_Months on the x-axis and Value_Change_pct on the y-axis"
      - "Scatter plot: Plot Reliance daily return against TCS daily return using only dates available for both stocks"
      - "comment on whether the two variables are related"
  - id: P12.7
    title: "Box plot comparing groups"
    phrasings:
      - "Explore the Variability in Claim Amounts by Insurance Type"
      - "Boxplot: compare Current_Value for AAA, AA and A-rated bonds"
      - "Create a separate boxplot comparing Claim_Amount for Motor, Health, Travel and Property policies"
      - "Boxplot: Compare the distributions of Reliance, TCS and Infosys daily returns"
      - "Explore Customer Satisfaction Across Different Age Groups"
      - "compare the spread of COL across the categories of GROUP_COL"
  - id: P12.8
    title: "Annotate median, quartiles and outliers on a box plot"
    phrasings:
      - "Explore the Variability in Total Loans Across Branches. Annotate the median, quartiles, and outliers on the plot"
      - "annotate using plt.text()"
      - "mark the median and the quartiles on the box plot"
      - "identify the outliers using the 1.5 x IQR rule and label them"
      - "report the five-number summary on the chart"
  - id: P12.9
    title: "Pie chart of proportions"
    phrasings:
      - "Visualize the Proportion of Branches in Different Cities"
      - "Visualize the Proportion of Claims Approved vs. Rejected"
      - "Visualize the Proportion of Accounts in Different Branch Cities"
      - "Create a separate pie chart showing the proportion of Approved, Rejected and Pending claims. Display percentage values on the chart"
      - "Pie chart: show the percentage of observations falling into positive-return days and non-positive-return days"
      - "show the share of each category as a percentage"
  - id: P12.10
    title: "Line chart with several series and a date axis"
    phrasings:
      - "Line chart: Plot Reliance Close, MA20 and MA50 during 2022 on the same chart"
      - "Line chart: Wealth Index of Reliance, TCS and Infosys for the common period"
      - "plot the closing price over time"
      - "plot three series on the same axes with a legend"
      - "use three plt.plot() commands followed by title, axes labels, legend and grid"
  - id: P12.11
    title: "Grouped and stacked bar charts"
    phrasings:
      - "compare the three stocks month by month using a grouped bar chart"
      - "plot the quarterly figures for each region side by side"
      - "show the composition of the total as a stacked bar chart"
      - "plot two series as bars next to each other"
  - id: P12.12
    title: "Subplots: many charts in one figure"
    phrasings:
      - "Create one single Matplotlib figure containing SIX charts"
      - "divide it into a 2-row x 3-column layout using plt.subplot(2, 3, position)"
      - "Create one Matplotlib figure with a 2 x 2 layout containing the following visualizations"
      - "Create one figure with a 1 x 3 layout"
      - "Every subplot should have an appropriate title"
      - "use plt.tight_layout() to prevent overlaps"
  - id: P12.13
    title: "Saving the figure as PNG and PDF"
    phrasings:
      - "save the complete figure as Stock_Analysis.png"
      - "save the same figure as Stock_Analysis.pdf"
      - "export the chart to an image file"
      - "save the figure at higher resolution without cutting off the labels"
  - id: P12.14
    title: "Styling marks: colours, grids, limits, ticks, annotations"
    phrasings:
      - "add grids where suitable"
      - "rotate the x-axis labels so they do not overlap"
      - "add a horizontal line at the overall mean"
      - "use a different colour for each bar and add a legend in the upper right"
      - "add an overall title to the figure"
      - "set the y-axis to start at zero"
---

## Chapter map

| Pattern | Use it when |
| --- | --- |
| [P12.1](#p121--the-universal-chart-skeleton) | Any chart at all — the five lines that earn the labelling marks |
| [P12.2](#p122--histogram-of-one-numeric-column) | "visualize the distribution of ..." |
| [P12.3](#p123--bar-chart-of-group-means) | "compare the average X by Y" |
| [P12.4](#p124--bar-chart-of-the-top-n-rows) | "plot the five largest / highest ..." |
| [P12.5](#p125--bin-a-numeric-column-into-groups-before-plotting) | The question says "by Age Group" but the file only has `Age` |
| [P12.6](#p126--scatter-plot-with-size-and-colour-encoding) | "analyze the relationship between X and Y", bubble size/colour |
| [P12.7](#p127--box-plot-comparing-groups) | "explore the variability in X by Y" |
| [P12.8](#p128--annotate-median-quartiles-and-outliers-on-a-box-plot) | Ex 1 Q4 — box plot **plus** `plt.text()` annotation |
| [P12.9](#p129--pie-chart-of-proportions) | "visualize the proportion of ..." |
| [P12.10](#p1210--line-chart-with-several-series-and-a-date-axis) | Price / index / moving average over time |
| [P12.11](#p1211--grouped-and-stacked-bar-charts) | Two or more series per category |
| [P12.12](#p1212--subplots-many-charts-in-one-figure) | "one figure with a 2 x 3 / 2 x 2 / 1 x 3 layout" |
| [P12.13](#p1213--saving-the-figure-as-png-and-pdf) | "save as Stock_Analysis.png and Stock_Analysis.pdf" |
| [P12.14](#p1214--styling-marks-colours-grids-limits-ticks-annotations) | The 1-2 mark cosmetic instructions |

Base path used everywhere in this chapter — **swap in your own path in the exam**:

```python
BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
MP   = BASE + "Matplotlib/Matplotlib exercises/"
INT  = BASE + "Integrated exercises/"
```

## Which chart does the question want?

The examiner's wording maps one-to-one onto a chart. Learn this table; it answers "which chart" in
every one of the four Matplotlib exercises and all three capstones.

| The question says | Data shape | Chart | Core call |
| --- | --- | --- | --- |
| "**visualize the distribution of** COL" | one numeric column | histogram | `plt.hist(df[COL], bins=10, edgecolor='black')` |
| "**compare the average** COL **by** GROUP" | numeric + category | bar of group means | `g = df.groupby(GROUP)[COL].mean()` → `plt.bar(g.index, g.values)` |
| "**analyze the relationship between** X **and** Y" | two numerics | scatter | `plt.scatter(df[X], df[Y])` |
| "**explore the variability in** COL (**by** GROUP)" | numeric (+ category) | box plot | `plt.boxplot([g[COL].values for _, g in df.groupby(GROUP)], tick_labels=...)` |
| "**visualize the proportion of** CAT" | one category | pie | `c = df[CAT].value_counts()` → `plt.pie(c.values, labels=c.index, autopct='%1.1f%%')` |
| "plot COL **over time** / **during 2022**" | date index + numeric | line | `plt.plot(df.index, df[COL], label=...)` |
| "the **five largest** / **highest** ..." | ranking | bar of `nlargest` | `t = df.nlargest(5, COL)` → `plt.bar(t[LABEL], t[COL])` |
| "**by Age Group**" and there is no Age Group column | numeric to bin | `pd.cut` first, then bar/box/pie | see [P12.5](#p125--bin-a-numeric-column-into-groups-before-plotting) |

![One dataset, six chart types: histogram, bar of means, scatter, box plot, pie, line](/figures/12-chooser-gallery.png)

Two more mappings worth memorising:

- "**variability**", "**spread**", "**consistency**", "**compare the distributions**" → box plot, not bar.
- "**share**", "**percentage of total**", "**composition**", "**proportion**" → pie (or a stacked bar).

## P12.1 — The universal chart skeleton

**Exam phrasings**

- "create a chart with appropriate titles and axis labels"
- "provide appropriate titles and axis labels, and add grids where suitable"
- "add title, axes labels, legend and grid"
- "display the completed figure"

**Core idea.** Every answer in this chapter is the same seven lines. Only the middle line changes.
The marks for title / xlabel / ylabel / legend / grid are awarded separately from the marks for the
plotting call, so never skip them.

**Template**

```python
import matplotlib.pyplot as plt          # 1. import (once per notebook)
# %matplotlib inline                     #    in Jupyter, if charts do not appear

data = df.groupby(GROUP_COL)[COL].mean() # 2. prepare the data with pandas FIRST

plt.figure(figsize=(8, 5))               # 3. one figure
plt.bar(data.index, data.values)         # 4. ONE plotting call
plt.title("TITLE")                       # 5. labels - marks live here
plt.xlabel("X LABEL")
plt.ylabel("Y LABEL")
plt.legend()                             #    only if you passed label=
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()                       # 6. stop labels overlapping
plt.savefig("chart.png")                 # 7. save BEFORE show
plt.show()                               #    show LAST
```

**Worked** — Exercise 1 Q1, the smallest complete answer.

```python
import pandas as pd
import matplotlib.pyplot as plt

MP = "/Volumes/rythmn103/code/bisa_guide/Exercises/Matplotlib/Matplotlib exercises/"
bank = pd.read_csv(MP + "bank_branch_performance.csv")
print(bank.columns.tolist())
print(bank['Customer Satisfaction'].describe().round(2))

plt.figure(figsize=(8, 5))
plt.hist(bank['Customer Satisfaction'], bins=10, edgecolor='black', color='steelblue')
plt.title('Distribution of Customer Satisfaction Scores')
plt.xlabel('Customer Satisfaction (1-10)')
plt.ylabel('Number of Branches')
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
```

```text
['Branch ID', 'City', 'Customers', 'Total Deposits', 'Total Loans', 'Net Profit', 'Customer Satisfaction']
count    100.00
mean       5.95
std        2.55
min        1.14
25%        3.94
50%        6.14
75%        8.32
max        9.96
Name: Customer Satisfaction, dtype: float64
```

![Histogram of customer satisfaction scores across 100 bank branches](/figures/12-hist-satisfaction.png)

Every figure in this chapter was produced by running exactly the code shown, with one
`plt.savefig(path, dpi=110, bbox_inches="tight")` line added before `plt.show()`.

**Variants**

| If the question says | Change to |
| --- | --- |
| "in a Jupyter notebook the chart does not show" | add `%matplotlib inline` in the first cell |
| "make the figure bigger" | `plt.figure(figsize=(12, 6))` before the plotting call |
| "use the object-oriented form" | `fig, ax = plt.subplots(figsize=(8,5))` then `ax.hist(...)`, `ax.set_title(...)` |
| "two charts in one answer" | `plt.subplot(1, 2, 1)` / `plt.subplot(1, 2, 2)` — see [P12.12](#p1212--subplots-many-charts-in-one-figure) |
| "no labels required" | still add them; they are free marks |

**Traps**

- `plt.figure()` must come **before** the plotting call, not after — otherwise you get two figures, one empty.
- `plt.show()` goes **last**. Anything you add after `show()` in a notebook lands on a *new* empty figure.
- `plt.legend()` with no `label=` anywhere prints `UserWarning: No artists with labels found to put in legend.` Only call it when a series has a label.
- Prepare the numbers with pandas **before** plotting. `plt.bar` cannot group, average or count anything.

**Drill**

1. Write the complete skeleton for a histogram of `Total Deposits` with 15 bins, titled "Deposit distribution".

<details><summary>Answer</summary>

```python
plt.figure(figsize=(8, 5))
plt.hist(bank['Total Deposits'], bins=15, edgecolor='black')
plt.title('Deposit distribution')
plt.xlabel('Total Deposits (USD)')
plt.ylabel('Number of Branches')
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
```

</details>

## P12.2 — Histogram of one numeric column

**Exam phrasings**

- "Visualize the Distribution of Customer Satisfaction Scores" (Ex 1 Q1)
- "Create a histogram to visualize the distribution of the total amount spent by customers" (Ex 2 Q1)
- "Visualize the Distribution of Claim Amounts" (Ex 3 Q1)
- "Visualize the Distribution of Account Balances" (Ex 4 Q1)
- "Histogram: distribution of Value_Change_pct using **10 bins**" (Case 2 Part D)
- "Histogram: distribution of Settlement_Days using **8 bins**" (Case 3 Part D)
- "Histogram: Plot the distribution of Reliance daily returns during the common period" (Case 1 Q14C)

**Core idea.** One numeric column in, frequency counts out. `bins` controls how many bars;
`edgecolor='black'` makes the bars readable and is worth a presentation mark.

**Template**

```python
plt.figure(figsize=(8, 5))
plt.hist(df[COL], bins=10, edgecolor='black')
plt.title('Distribution of COL')
plt.xlabel('COL')
plt.ylabel('Frequency')
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
```

**Worked 1** — Ex 1 Q1 bin counts (the figure is in [P12.1](#p121--the-universal-chart-skeleton)).

```python
import numpy as np
counts, edges = np.histogram(bank['Customer Satisfaction'], bins=10)
print("counts:", counts.tolist())
print("edges :", [round(e, 2) for e in edges])
```

```text
counts: [8, 5, 12, 9, 8, 13, 13, 5, 14, 13]
edges : [1.14, 2.02, 2.9, 3.79, 4.67, 5.55, 6.43, 7.32, 8.2, 9.08, 9.96]
```

Read that: 8 to 14 branches in every bin — a flat, near-uniform distribution with no mode. That is
the interpretation sentence (see [Write-up answers](#write-up-answers--interpretation-sentences)).

**Worked 2** — Ex 2 Q1, total spend, with the mean marked by `axvline`.

```python
cc = pd.read_csv(MP + "credit_card_usage.csv")
m = cc['Total Spend'].mean()
print("mean total spend:", round(m, 2), "median:", cc['Total Spend'].median())

plt.figure(figsize=(8, 5))
plt.hist(cc['Total Spend'], bins=10, edgecolor='black', color='#4C72B0')
plt.axvline(m, color='red', linestyle='--', linewidth=2, label=f'Mean = {m:,.0f}')
plt.title('Distribution of Total Spend')
plt.xlabel('Total Spend (USD)')
plt.ylabel('Number of Customers')
plt.legend()
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
```

```text
mean total spend: 15316.0 median: 15250.0
```

![Histogram of total spend with a dashed red line at the mean of 15,316](/figures/12-hist-spend.png)

**Worked 3** — Ex 3 Q1 (claim amounts) and Ex 4 Q1 (balances, `density=True`).

```python
ins = pd.read_csv(MP + "insurance_claims.csv")
sav = pd.read_csv(MP + "savings_account_analysis.csv")

plt.figure(figsize=(8, 5))
plt.hist(ins['Claim Amount'], bins=10, edgecolor='black', color='darkorange')
plt.title('Distribution of Claim Amounts')
plt.xlabel('Claim Amount (USD)'); plt.ylabel('Number of Claims')
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()

c, e = np.histogram(ins['Claim Amount'], bins=10)
print("counts:", c.tolist())
print("edges :", [round(x) for x in e])
print(sav['Balance'].describe().round(2))
```

```text
counts: [13, 8, 3, 8, 15, 14, 8, 7, 11, 13]
edges : [1197, 6070, 10943, 15815, 20688, 25561, 30434, 35307, 40179, 45052, 49925]
count      100.00
mean     52902.67
std      29193.44
min       1854.00
25%      27629.25
50%      53372.50
75%      75584.75
max      99506.00
Name: Balance, dtype: float64
```

![Histogram of insurance claim amounts in ten bins](/figures/12-hist-claims.png)

![Density histogram of savings account balances](/figures/12-hist-balances.png)

**Worked 4** — the two capstone histograms with a *fixed* bin count.

```python
INT = "/Volumes/rythmn103/code/bisa_guide/Exercises/Integrated exercises/"
port = pd.merge(pd.read_excel(INT + "Case 2/Bond_Portfolio_Practice.xlsx", sheet_name="Bond_Holdings"),
                pd.read_excel(INT + "Case 2/Bond_Portfolio_Practice.xlsx", sheet_name="Bond_Master"),
                on="Bond_Code", how="left")
port['Purchase_Value']   = port['Units_Held'] * port['Purchase_Price']
port['Current_Value']    = port['Units_Held'] * port['Current_Price']
port['Value_Change']     = port['Current_Value'] - port['Purchase_Value']
port['Value_Change_pct'] = port['Value_Change'] / port['Purchase_Value'] * 100
claims = pd.merge(pd.read_excel(INT + "Case 3/Insurance_Claims_Practice.xlsx", sheet_name="Claims"),
                  pd.read_excel(INT + "Case 3/Insurance_Claims_Practice.xlsx", sheet_name="Policy_Master"),
                  on="Policy_ID", how="left")

# Case 2 Part D (top-right panel): 10 bins
plt.hist(port['Value_Change_pct'], bins=10, edgecolor='black', color='teal')

# Case 3 Part D (left panel): 8 bins
plt.hist(claims['Settlement_Days'], bins=8, edgecolor='black', color='#55A868')
c, e = np.histogram(claims['Settlement_Days'], bins=8)
print("counts:", c.tolist(), "edges:", [round(x, 1) for x in e])
```

```text
counts: [16, 20, 15, 20, 18, 20, 24, 17] edges: [3.0, 12.0, 21.0, 30.0, 39.0, 48.0, 57.0, 66.0, 75.0]
```

![Histogram of bond value change percentage in ten bins](/figures/12-hist-case2-10bins.png)

![Histogram of claim settlement days in eight bins](/figures/12-hist-case3-8bins.png)

**Choosing `bins`.** If the question states a number, use it. If not, 10 is a safe default; 5 hides
structure, 20 on 100 rows produces gaps. Say which you chose and why in one clause.

![The same 100 satisfaction scores drawn with 5, 10 and 20 bins](/figures/12-hist-bins-compare.png)

**Variants**

| If the question says | Change to |
| --- | --- |
| "use 8 bins" / "use 10 bins" | `bins=8` / `bins=10` — never leave the default |
| "fix the axis from 0 to 10" | `plt.hist(x, bins=10, range=(0, 10))` |
| "show proportions / relative frequency" | `plt.hist(x, bins=10, density=True)` and label the y-axis "Density" |
| "mark the mean (or a threshold) on the chart" | `plt.axvline(x.mean(), color='red', linestyle='--')` |
| "overlay two groups" | two `plt.hist(..., alpha=0.5, label=...)` calls, then `plt.legend()` |
| "horizontal histogram" | `plt.hist(x, bins=10, orientation='horizontal')` |
| "use the pandas shortcut" | `df[COL].plot(kind='hist', bins=10)` or `df.hist(bins=10)` for all numeric columns |
| "cumulative distribution" | `plt.hist(x, bins=10, cumulative=True)` |

![range=(0,10) and density=True variants side by side](/figures/12-hist-range-density.png)

**Traps**

- **Missing values.** Case 1 Q14C says "remove missing return observations" for a reason. `Return`
  from `pct_change()` has one `NaN`. In matplotlib 3.9 `plt.hist` silently ignores it (1021 of 1022
  values counted), but `np.histogram` raises
  `ValueError: autodetected range of [nan, nan] is not finite`, and older matplotlib raises the same.
  Always write `.dropna()`.
- `bins` is a *count*, not a width. `bins=[0, 10, 20]` is a list of **edges** — legal, but different.
- A histogram takes **one** column. Passing a whole DataFrame draws one histogram per column stacked together.
- Don't call a bar chart of category counts a histogram in your written answer; the examiner reads the label.

**Drill**

1. Histogram of `Number of Transactions` from `savings_account_analysis.csv` with 8 bins and a mean line.
2. Histogram of `Claim_to_SumInsured_pct` (Case 3) with 10 bins and `density=True`.

<details><summary>Answers</summary>

```python
# 1
plt.figure(figsize=(8, 5))
plt.hist(sav['Number of Transactions'], bins=8, edgecolor='black')
plt.axvline(sav['Number of Transactions'].mean(), color='red', linestyle='--',
            label=f"Mean = {sav['Number of Transactions'].mean():.1f}")
plt.title('Distribution of Number of Transactions')
plt.xlabel('Number of Transactions'); plt.ylabel('Number of Accounts')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5); plt.tight_layout(); plt.show()

# 2
claims['Claim_to_SumInsured_pct'] = claims['Claim_Amount'] / claims['Sum_Insured'] * 100
plt.hist(claims['Claim_to_SumInsured_pct'].dropna(), bins=10, density=True, edgecolor='black')
plt.title('Claim as % of Sum Insured'); plt.xlabel('%'); plt.ylabel('Density')
plt.tight_layout(); plt.show()
```

</details>

## P12.3 — Bar chart of group means

**Exam phrasings**

- "Compare the Average Net Profit by City" (Ex 1 Q2)
- "Create a bar chart that shows the average net profit of branches in each city. Hint: Use plt.bar() and group the data by the 'City' column."
- "Compare the Average Claim Amount by Insurance Type" (Ex 3 Q2)
- "Compare the Average Balance by Branch City" (Ex 4 Q2)
- "Bar chart: average Claim_Amount for each Policy_Type" (Case 3 Part D)
- "which city has the highest average net profit?"

**Core idea.** Two steps, always the same two steps. **groupby in pandas, then plot the result.**
`plt.bar` cannot average anything itself.

**Template**

```python
g = df.groupby(GROUP_COL)[COL].mean()      # step 1 - a Series: index = groups, values = means
plt.figure(figsize=(8, 5))
plt.bar(g.index, g.values)                 # step 2 - index on x, values on y
plt.title('Average COL by GROUP_COL')
plt.xlabel('GROUP_COL'); plt.ylabel('Average COL')
plt.xticks(rotation=45)                    # long labels
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

**Worked** — Ex 1 Q2.

```python
g = bank.groupby('City')['Net Profit'].mean()
print(g.round(2))

plt.figure(figsize=(8, 5))
plt.bar(g.index, g.values, color='steelblue', edgecolor='black')
plt.title('Average Net Profit by City')
plt.xlabel('City')
plt.ylabel('Average Net Profit (USD)')
plt.xticks(rotation=45)
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
```

```text
City
Chicago        487511.44
Houston        526023.58
Los Angeles    548500.29
New York       554619.28
Phoenix        400370.74
Name: Net Profit, dtype: float64
```

![Bar chart of average net profit for five cities](/figures/12-bar-city-profit.png)

**Sorted bars with value labels.** "Which city is highest" is much easier to mark when the bars are
sorted and labelled.

```python
gs = g.sort_values(ascending=False)
print(gs.round(0))

plt.figure(figsize=(8, 5))
bars = plt.bar(gs.index, gs.values, color=['#4C72B0', '#55A868', '#C44E52', '#8172B2', '#CCB974'])
plt.bar_label(bars, fmt='%.0f', padding=3)
plt.title('Average Net Profit by City (sorted, labelled)')
plt.xlabel('City'); plt.ylabel('Average Net Profit (USD)')
plt.ylim(0, gs.max() * 1.15)
plt.xticks(rotation=45)
plt.tight_layout(); plt.show()
```

```text
City
New York       554619.0
Los Angeles    548500.0
Houston        526024.0
Chicago        487511.0
Phoenix        400371.0
Name: Net Profit, dtype: float64
```

![Sorted bar chart with the mean printed above each bar](/figures/12-bar-sorted-labels.png)

If `bar_label` is unavailable (matplotlib < 3.4), place the numbers by hand:

```python
for i, v in enumerate(gs.values):
    plt.text(i, v, f'{v:,.0f}', ha='center', va='bottom')
```

**Horizontal version** — use it when category names are long.

```python
plt.barh(gs.index, gs.values, color='darkorange', edgecolor='black')
plt.xlabel('Average Net Profit (USD)'); plt.ylabel('City')
```

![Horizontal bar chart of average net profit by city](/figures/12-barh-city.png)

**The same pattern on the other three datasets**

```python
print(ins.groupby('Insurance Type')['Claim Amount'].mean().round(2))
print(sav.groupby('Branch City')['Balance'].mean().round(2))
g3 = claims.groupby('Policy_Type')['Claim_Amount'].mean()
print(g3.round(2))
print("highest:", g3.idxmax(), round(g3.max(), 2))
```

```text
Insurance Type
Auto      25201.04
Health    27570.06
Home      29416.06
Life      24078.76
Name: Claim Amount, dtype: float64
Branch City
Chicago        47200.80
Houston        58170.36
Los Angeles    51251.38
New York       49214.56
Phoenix        58493.55
Name: Balance, dtype: float64
Policy_Type
Health      298188.60
Motor       244500.16
Property    485567.72
Travel       81770.07
Name: Claim_Amount, dtype: float64
highest: Property 485567.72
```

![Bar chart of average claim amount by insurance type](/figures/12-bar-claim-type.png)

![Bar chart of average balance by branch city](/figures/12-bar-branch-balance.png)

![Bar chart of average claim amount for Motor, Health, Property and Travel policies](/figures/12-bar-case3-policy-avg.png)

The lecture demo (`PltData.xlsx`, sheet `BarChart`) is the minimal form — no groupby needed because
the sheet already holds one value per category:

```python
W  = BASE + "Matplotlib/DemoData/PltData.xlsx"
bc = pd.read_excel(W, sheet_name="BarChart")
print(bc)
plt.bar(bc['Region'], bc['Q1'], color='skyblue')
plt.title('Q1 Sales by Region'); plt.xlabel('Region'); plt.ylabel('Q1 Sales')
plt.tight_layout(); plt.show()
```

```text
  Region   Q1
0  North  120
1  South  100
2   East   90
3   West  140
```

![Simple bar chart of Q1 sales for four regions](/figures/12-bar-demo.png)

**Variants**

| If the question says | Change to |
| --- | --- |
| "total instead of average" | `.sum()` |
| "count of branches per city" | `df[GROUP_COL].value_counts()` then `plt.bar(vc.index, vc.values)` |
| "median / maximum" | `.median()` / `.max()` |
| "sorted from highest to lowest" | `g.sort_values(ascending=False)` before plotting |
| "sorted by category name" | `g.sort_index()` |
| "two grouping columns" | `df.groupby([A, B])[COL].mean().unstack().plot(kind='bar')` — grouped bars |
| "labels overlap" | `plt.xticks(rotation=45)` or `rotation=45, ha='right'`, or use `plt.barh` |
| "put the value on top of each bar" | `plt.bar_label(bars, fmt='%.0f')` |
| "different colour per bar" | `color=['red','green','blue','orange','purple']` |
| "pandas shortcut" | `g.plot(kind='bar', title='...')` |
| "add the overall mean as a reference line" | `plt.axhline(df[COL].mean(), color='red', linestyle='--')` |

![The pandas shortcut g.plot(kind='bar')](/figures/12-pandas-plot-bar.png)

**Traps**

- `plt.bar(g)` alone is `TypeError: bar() missing 1 required positional argument: 'height'`. You must pass x **and** height.
- `g.index` may be a `CategoricalIndex` after `pd.cut`; convert with `g.index.astype(str)` if matplotlib complains.
- `groupby` sorts group keys alphabetically by default. If the exam wants a business order (AAA, AA, A or Motor, Health, Travel, Property) you must impose it yourself — see [P12.7](#p127--box-plot-comparing-groups).
- Bar charts of means hide spread. If the question says "variability", it wants a **box plot**, not this.
- A bar chart of counts is not a histogram, even though it looks like one.

**Drill**

1. Bar chart of the **total** `Total Deposits` per city, sorted descending, with value labels.
2. Bar chart of the mean `Settlement_Days` per `Risk_Category` (Case 3).

<details><summary>Answers</summary>

```python
# 1
t = bank.groupby('City')['Total Deposits'].sum().sort_values(ascending=False)
bars = plt.bar(t.index, t.values)
plt.bar_label(bars, fmt='%.0f')
plt.title('Total Deposits by City'); plt.xlabel('City'); plt.ylabel('Total Deposits (USD)')
plt.xticks(rotation=45); plt.tight_layout(); plt.show()

# 2
r = claims.groupby('Risk_Category')['Settlement_Days'].mean()
plt.bar(r.index, r.values)
plt.title('Mean Settlement Days by Risk Category'); plt.xlabel('Risk_Category'); plt.ylabel('Days')
plt.tight_layout(); plt.show()
```

</details>

## P12.4 — Bar chart of the top N rows

**Exam phrasings**

- "Bar chart: Plot the five highest-volume Reliance trading days. Hint: First obtain the five observations using Pandas and then use plt.bar()." (Case 1 Q14B)
- "Bar chart: five largest bond holdings, with Issuer on the x-axis and Current_Value on the y-axis" (Case 2 Part D)
- "display the five largest claims as a chart"
- "chart the three worst-performing branches"

**Core idea.** `nlargest` first, plot second. The x-axis labels come from an identifier column (or
from the index, formatted).

**Template**

```python
top = df.nlargest(5, COL)                 # DataFrame: 5 rows, original columns
plt.bar(top[LABEL_COL], top[COL])         # or top.index for an index-labelled frame
```

**Worked 1** — Case 1 Q14B. The index is a `DatetimeIndex`, so format it for the tick labels.

```python
INT = BASE + "Integrated exercises/"
X   = INT + "Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
rel = pd.read_excel(X, sheet_name="Reliance").set_index('Date')

top5 = rel['Volume'].nlargest(5)
print(top5)

plt.figure(figsize=(8, 5))
plt.bar(top5.index.strftime('%Y-%m-%d'), top5.values, color='steelblue', edgecolor='black')
plt.title('Five Highest-Volume Reliance Trading Days')
plt.xlabel('Date'); plt.ylabel('Volume')
plt.xticks(rotation=45)
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
Date
2021-08-26    22332150
2022-07-15    20443423
2020-04-29    19969440
2021-03-18    18756550
2020-10-07    17985216
Name: Volume, dtype: int64
```

![Bar chart of the five highest-volume Reliance trading days](/figures/12-bar-top5-volume.png)

**Worked 2** — Case 2, five largest holdings with `Issuer` on the x-axis.

```python
top5h = port.nlargest(5, 'Current_Value')
print(top5h[['Holding_ID', 'Issuer', 'Credit_Rating', 'Current_Value']].round(2).to_string(index=False))

plt.figure(figsize=(8, 5))
plt.bar(top5h['Issuer'], top5h['Current_Value'], color='teal', edgecolor='black')
plt.title('Five Largest Bond Holdings by Current Value')
plt.xlabel('Issuer'); plt.ylabel('Current Value (Rs.)')
plt.xticks(rotation=45, ha='right')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
Holding_ID            Issuer Credit_Rating  Current_Value
     H0018   Vertex Networks           AAA      246147.60
     H0074   Frontier Pharma             A      244002.85
     H0046      Indigo Roads             A      243645.60
     H0020 Zenith Healthcare             A      242670.20
     H0017 Riverstone Pharma             A      241293.60
```

![Bar chart of the five largest bond holdings labelled by issuer](/figures/12-bar-top5-holdings.png)

**Variants**

| If the question says | Change to |
| --- | --- |
| "five smallest / lowest" | `df.nsmallest(5, COL)` |
| "top 10" | `nlargest(10, COL)` and `plt.xticks(rotation=45, ha='right')` |
| "sorted by two columns" | `df.sort_values([A, B], ascending=[False, False]).head(5)` |
| "top 5 within each group" | `df.sort_values(COL, ascending=False).groupby(GROUP).head(5)` |
| "biggest categories, not rows" | `df.groupby(GROUP)[COL].sum().nlargest(5)` then `plt.bar(g.index, g.values)` |
| "the labels are duplicated issuers" | plot `top5['Holding_ID'] + ' - ' + top5['Issuer']` to keep the bars distinguishable |

**Traps**

- `nlargest` on a **Series** gives a Series (`top5.index` = labels); on a **DataFrame** it needs the column name and gives all columns. Don't mix them up.
- Date x-values plotted directly give a squashed axis. Use `.strftime('%Y-%m-%d')` (or `.astype(str)`) so the five dates become five discrete categories.
- Two holdings can share an `Issuer`; identical x labels make two bars look like one category.

**Drill**

1. Bar chart of the five largest `Claim_Amount` values in Case 3, labelled by `Claim_ID`.

<details><summary>Answer</summary>

```python
t = claims.nlargest(5, 'Claim_Amount')
plt.bar(t['Claim_ID'], t['Claim_Amount'], color='#C44E52')
plt.title('Five Largest Claims'); plt.xlabel('Claim_ID'); plt.ylabel('Claim_Amount (Rs.)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

</details>

## P12.5 — Bin a numeric column into groups before plotting

**Exam phrasings**

- "Compare the Average Credit Limit by **Age Group**" (Ex 2 Q2)
- "Explore Customer Satisfaction Across Different **Age Groups**" (Ex 2 Q4)
- "Visualize the Proportion of Customers in Each **Age Group**" (Ex 2 Q5)
- "Explore the Variability in Number of Transactions **by Age**" (Ex 4 Q4)
- "group customers into age bands 18-30, 31-40, 41-50, 51-60, 61-70 and compare"

**Core idea — read this before attempting Exercise 2.** The question says "Age Group", but
`credit_card_usage.csv` has **no such column**. It has a numeric `Age` from 19 to 69. You must create
the groups with `pd.cut()` first. This is a deliberate step, and the marks are for doing it.

```python
cc = pd.read_csv(MP + "credit_card_usage.csv")
print(cc.columns.tolist())
print("Age range:", cc['Age'].min(), "-", cc['Age'].max())
```

```text
['Customer ID', 'Age', 'Credit Limit', 'Total Spend', 'Number of Transactions', 'Customer Satisfaction']
Age range: 19 - 69
```

**Template**

```python
df['Age Group'] = pd.cut(df['Age'],
                         bins=[18, 30, 40, 50, 60, 70],
                         labels=['18-30', '31-40', '41-50', '51-60', '61-70'])

# then any of the three chart patterns:
g  = df.groupby('Age Group', observed=True)[COL].mean()      # -> bar   (P12.3)
c  = df['Age Group'].value_counts().sort_index()             # -> pie   (P12.9)
gr = [x[COL].values for _, x in df.groupby('Age Group', observed=True)]   # -> box (P12.7)
```

`bins` are the **edges**; `len(labels)` must equal `len(bins) - 1`. Default closure is
`(left, right]` — 30 falls in `18-30`, 31 in `31-40`, which is exactly what the label text promises.

**Worked** — Ex 2 Q2 and Q5 from one binning.

```python
cc['Age Group'] = pd.cut(cc['Age'], bins=[18, 30, 40, 50, 60, 70],
                         labels=['18-30', '31-40', '41-50', '51-60', '61-70'])
print(cc['Age Group'].value_counts().sort_index())

g = cc.groupby('Age Group', observed=True)['Credit Limit'].mean()
print(g.round(2))

plt.figure(figsize=(8, 5))
plt.bar(g.index.astype(str), g.values, color='#4C72B0', edgecolor='black')
plt.title('Average Credit Limit by Age Group')
plt.xlabel('Age Group'); plt.ylabel('Average Credit Limit (USD)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
Age Group
18-30    21
31-40    24
41-50    19
51-60    17
61-70    19
Name: count, dtype: int64
Age Group
18-30    32128.62
31-40    26801.04
41-50    26588.11
51-60    24692.88
61-70    24220.58
Name: Credit Limit, dtype: float64
```

![Bar chart of average credit limit for five age groups](/figures/12-bar-agegroup-limit.png)

```python
counts = cc['Age Group'].value_counts().sort_index()
plt.figure(figsize=(6.5, 6.5))
plt.pie(counts.values, labels=counts.index.astype(str), autopct='%1.1f%%', startangle=90)
plt.title('Proportion of Customers in Each Age Group')
plt.axis('equal')
plt.tight_layout(); plt.show()
```

![Pie chart of the share of customers in each age group](/figures/12-pie-agegroup.png)

**Ex 4 Q4 needs the same trick.** "Explore the Variability in Number of Transactions **by Age**" —
`Age` is numeric (19 to 79 here), so a box plot needs bands. Note the extra `71-80` edge: always
check `max()` before choosing the bins, or the oldest rows become `NaN` and vanish from the chart.

```python
print("savings Age range:", sav['Age'].min(), "-", sav['Age'].max())
sav['Age Group'] = pd.cut(sav['Age'], bins=[18, 30, 40, 50, 60, 70, 80],
                          labels=['18-30', '31-40', '41-50', '51-60', '61-70', '71-80'])
print(sav.groupby('Age Group', observed=True)['Number of Transactions'].agg(['count', 'median', 'std']).round(2))

groups = [g['Number of Transactions'].values for _, g in sav.groupby('Age Group', observed=True)]
labels = [str(k) for k, _ in sav.groupby('Age Group', observed=True)]

plt.figure(figsize=(9, 5))
plt.boxplot(groups, tick_labels=labels, patch_artist=True)
plt.title('Variability in Number of Transactions by Age Group')
plt.xlabel('Age Group'); plt.ylabel('Number of Transactions')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
savings Age range: 19 - 79
           count  median    std
Age Group                      
18-30         19    48.0  29.83
31-40         16    63.5  34.92
41-50         14    37.0  19.12
51-60         14    36.5  31.62
61-70         18    48.0  22.51
71-80         19    61.0  29.52
```

![Box plot of transaction counts across six age bands](/figures/12-box-tx-agegroup.png)

**Variants**

| If the question says | Change to |
| --- | --- |
| "four equal-sized groups / quartiles" | `pd.qcut(df['Age'], q=4)` — equal **counts**, unequal widths |
| "bands of 10 years" | `pd.cut(df['Age'], bins=range(10, 90, 10))` |
| "low / medium / high" | `pd.cut(df[COL], bins=3, labels=['Low','Medium','High'])` |
| "use the left-closed convention [18,30)" | `pd.cut(..., right=False)` and state the convention in your answer |
| "balance slabs of 25,000" | `pd.cut(df['Balance'], bins=[0, 25000, 50000, 75000, 100000])` |
| "youngest / oldest band open-ended" | `bins=[0, 30, 40, 50, 60, np.inf]` |

```python
print(pd.qcut(cc['Age'], q=4).value_counts().sort_index())
```

```text
Age
(18.999, 31.75]    25
(31.75, 42.0]      27
(42.0, 57.0]       25
(57.0, 69.0]       23
Name: count, dtype: int64
```

**Traps**

- **State the bin edges in your answer.** "Age Group is not present in the dataset, so I created it
  with `pd.cut` using edges 18/30/40/50/60/70" is a mark.
- Values **outside** the outermost edges become `NaN` and silently disappear. `Age = 79` with
  `bins=[...,70]` is dropped. Check `min()`/`max()` first.
- `pd.cut` returns a **categorical**. In pandas 2.3.3 `groupby` on it prints
  `FutureWarning: The default of observed=False is deprecated ...`; pass `observed=True`. With
  `observed=False` you also get rows for empty bins — a bar of height `NaN`.
- `value_counts()` sorts by frequency. For age bands you want bin order: add `.sort_index()`.
- `g.index` is a `CategoricalIndex`; use `g.index.astype(str)` for bar/pie labels.

**Drill**

1. Bin `Total Spend` into Low/Medium/High (three equal-width bins) and bar the mean
   `Customer Satisfaction` per band.
2. Bin `Balance` into four quartile groups and pie the share of accounts in each.

<details><summary>Answers</summary>

```python
# 1
cc['Spend Band'] = pd.cut(cc['Total Spend'], bins=3, labels=['Low', 'Medium', 'High'])
g = cc.groupby('Spend Band', observed=True)['Customer Satisfaction'].mean()
plt.bar(g.index.astype(str), g.values)
plt.title('Mean Satisfaction by Spend Band'); plt.xlabel('Spend Band'); plt.ylabel('Mean satisfaction')
plt.tight_layout(); plt.show()

# 2
sav['Balance Q'] = pd.qcut(sav['Balance'], q=4, labels=['Q1', 'Q2', 'Q3', 'Q4'])
c = sav['Balance Q'].value_counts().sort_index()
plt.pie(c.values, labels=c.index.astype(str), autopct='%1.1f%%', startangle=90)
plt.title('Accounts by Balance Quartile'); plt.axis('equal'); plt.show()
```

</details>

## P12.6 — Scatter plot with size and colour encoding

**Exam phrasings**

- "Analyze the Relationship Between Total Deposits and Net Profit" (Ex 1 Q3)
- "Use marker size to represent the number of customers and marker color to represent customer satisfaction" (Ex 1 Q3)
- "Analyze the Relationship Between Credit Limit and Total Spend. Use marker size to represent the number of transactions" (Ex 2 Q3)
- "Analyze the Relationship Between Age and Claim Amount" (Ex 3 Q3)
- "Analyze the Relationship Between Age and Account Balance" (Ex 4 Q3)
- "Scatter plot: Holding_Months on the x-axis and Value_Change_pct on the y-axis" (Case 2 Part D)
- "Scatter plot: Plot Reliance daily return against TCS daily return using only dates available for both stocks" (Case 1 Q14D)
- "comment on whether the two variables are related"

**Core idea.** `plt.scatter(x, y)` is two variables. Add `s=` and you have three; add `c=` plus a
colour bar and you have four. The exam asks for exactly that four-variable version in Exercise 1 Q3,
and the marks are for the **mapping**, not the picture: one sentence saying which column drives
size and which drives colour.

**Template**

```python
plt.figure(figsize=(9, 6))
plt.scatter(df[X], df[Y],
            s=df[SIZE_COL] / 10,        # marker AREA - divide until the bubbles fit
            c=df[COLOUR_COL],           # numeric -> continuous colour map
            cmap='viridis',
            alpha=0.7, edgecolors='black', linewidths=0.4)
plt.colorbar(label='COLOUR_COL')        # REQUIRED whenever you use c=
plt.title('X vs Y (size = SIZE_COL, colour = COLOUR_COL)')
plt.xlabel('X'); plt.ylabel('Y')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

**Worked 1** — Ex 1 Q3, the full four-channel answer.

```python
import pandas as pd
import matplotlib.pyplot as plt

MP = "/Volumes/rythmn103/code/bisa_guide/Exercises/Matplotlib/Matplotlib exercises/"
bank = pd.read_csv(MP + "bank_branch_performance.csv")

print("r(Total Deposits, Net Profit) =", round(bank['Total Deposits'].corr(bank['Net Profit']), 4))
print(bank[['Total Deposits', 'Net Profit', 'Customers', 'Customer Satisfaction']]
      .agg(['min', 'max']).round(2))

plt.figure(figsize=(9, 6))
plt.scatter(bank['Total Deposits'], bank['Net Profit'],
            s=bank['Customers'] / 10,
            c=bank['Customer Satisfaction'],
            cmap='viridis', alpha=0.7, edgecolors='black', linewidths=0.4)
plt.colorbar(label='Customer Satisfaction')
plt.title('Total Deposits vs Net Profit\n(size = customers, colour = satisfaction)')
plt.xlabel('Total Deposits (USD)'); plt.ylabel('Net Profit (USD)')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

```text
r(Total Deposits, Net Profit) = -0.0076
     Total Deposits  Net Profit  Customers  Customer Satisfaction
min         1071295      103051        646                   1.14
max         4976224      990617       4996                   9.96
```

![Bubble scatter of total deposits against net profit, bubble size from customer count and colour from satisfaction](/figures/12-scatter-deposits-profit.png)

**Why `/ 10`.** `s=` is the marker **area in points squared**. `Customers` runs 646 to 4996, so
`s=bank['Customers']` draws blobs 30 points across that swallow the chart. Divide until the
bubbles are separable; state the divisor in your answer ("marker area = Customers / 10").

```python
plt.figure(figsize=(15, 4.5))
for i, (d, t) in enumerate([(1, 's = Customers (too big)'),
                            (10, 's = Customers/10 (good)'),
                            (100, 's = Customers/100 (too small)')], start=1):
    plt.subplot(1, 3, i)
    plt.scatter(bank['Total Deposits'], bank['Net Profit'], s=bank['Customers'] / d, alpha=0.6)
    plt.title(t); plt.xlabel('Total Deposits'); plt.ylabel('Net Profit')
plt.suptitle('Scaling the s= argument')
plt.tight_layout(); plt.show()
```

![Three scatter plots of the same data with marker areas divided by 1, 10 and 100](/figures/12-scatter-size-scaling.png)

**Worked 2** — Ex 2 Q3. Size only, no colour, so **no colour bar**.

```python
cc = pd.read_csv(MP + "credit_card_usage.csv")
print("r(Credit Limit, Total Spend) =", round(cc['Credit Limit'].corr(cc['Total Spend']), 4))

plt.figure(figsize=(9, 6))
plt.scatter(cc['Credit Limit'], cc['Total Spend'],
            s=cc['Number of Transactions'],          # 4 to 197, usable as areas without a divisor
            alpha=0.6, color='#4C72B0', edgecolors='black', linewidths=0.4)
plt.title('Credit Limit vs Total Spend (size = number of transactions)')
plt.xlabel('Credit Limit (USD)'); plt.ylabel('Total Spend (USD)')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

```text
r(Credit Limit, Total Spend) = 0.1251
```

![Scatter of credit limit against total spend with marker size from transaction count](/figures/12-scatter-limit-spend.png)

**Worked 3** — Ex 3 Q3. Here the natural third variable (`Claim Status`) is **categorical**, so
`c=` will not take it. Loop over the groups and give each a `label=`; that is what produces a
legend rather than a colour bar.

```python
ins = pd.read_csv(MP + "insurance_claims.csv")
print("r(Age, Claim Amount) =", round(ins['Age'].corr(ins['Claim Amount']), 4))

plt.figure(figsize=(9, 6))
for status, sub in ins.groupby('Claim Status'):
    plt.scatter(sub['Age'], sub['Claim Amount'], label=status, alpha=0.7)
plt.title('Age vs Claim Amount by Claim Status')
plt.xlabel('Age'); plt.ylabel('Claim Amount (USD)')
plt.legend(title='Claim Status')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

```text
r(Age, Claim Amount) = -0.09
```

![Scatter of age against claim amount, points coloured by approved or rejected status](/figures/12-scatter-age-claim.png)

**Worked 4** — Ex 4 Q3, colour by a numeric column with a fixed marker size.

```python
sav = pd.read_csv(MP + "savings_account_analysis.csv")
print("r(Age, Balance) =", round(sav['Age'].corr(sav['Balance']), 4))

plt.figure(figsize=(9, 6))
plt.scatter(sav['Age'], sav['Balance'], c=sav['Number of Transactions'],
            cmap='plasma', s=60, alpha=0.8, edgecolors='black', linewidths=0.4)
plt.colorbar(label='Number of Transactions')
plt.title('Age vs Account Balance (colour = transactions)')
plt.xlabel('Age'); plt.ylabel('Balance (USD)')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

```text
r(Age, Balance) = 0.0385
```

![Scatter of age against account balance coloured by number of transactions](/figures/12-scatter-age-balance.png)

**The capstone scatters.** Case 2 wants `Holding_Months` against `Value_Change_pct` with a
reference line at zero; Case 3 wants `Sum_Insured` against `Claim_Amount` — and this is the **one
scatter in the whole course that shows a real relationship**, so say so.

```python
# Case 2 Part D, bottom-left panel.
# Value_Change_pct was derived in the Case 2 chapter:
#   port['Current_Value']    = port['Units_Held'] * port['Current_Price']
#   port['Purchase_Value']   = port['Units_Held'] * port['Purchase_Price']
#   port['Value_Change_pct'] = (port['Current_Value'] - port['Purchase_Value']) / port['Purchase_Value'] * 100
print("r =", round(port['Holding_Months'].corr(port['Value_Change_pct']), 4))
plt.figure(figsize=(9, 6))
plt.scatter(port['Holding_Months'], port['Value_Change_pct'], alpha=0.7, color='teal')
plt.axhline(0, color='red', linestyle='--', linewidth=1)     # break-even line
plt.title('Holding Months vs Value Change (%)')
plt.xlabel('Holding_Months'); plt.ylabel('Value_Change_pct')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

```text
r = 0.065
```

![Scatter of holding months against percentage value change with a zero reference line](/figures/12-scatter-case2-months.png)

```python
# Case 3 Figure 1, centre panel
print("r =", round(claims['Sum_Insured'].corr(claims['Claim_Amount']), 4))
plt.figure(figsize=(9, 6))
plt.scatter(claims['Sum_Insured'], claims['Claim_Amount'], alpha=0.7, color='#55A868')
plt.title('Sum Insured vs Claim Amount')
plt.xlabel('Sum_Insured (Rs.)'); plt.ylabel('Claim_Amount (Rs.)')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

```text
r = 0.6441
```

![Scatter of sum insured against claim amount showing a clear upward band](/figures/12-scatter-case3-suminsured.png)

**Worked 5** — Case 1 Q14D. "Using only dates available for both stocks" = **inner join first**,
scatter second. Joining on the `DatetimeIndex` does the alignment for you.

```python
X = INT + "Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
rel = pd.read_excel(X, sheet_name="Reliance").set_index('Date')
tcs = pd.read_excel(X, sheet_name="TCS").set_index('Date')
for d in (rel, tcs):
    d['Return'] = d['Close'].pct_change()

r = rel[['Return']].rename(columns={'Return': 'Reliance'})
t = tcs[['Return']].rename(columns={'Return': 'TCS'})
both = r.join(t, how='inner').dropna()
print("rows after inner join + dropna:", both.shape)
print("period:", both.index.min().date(), "to", both.index.max().date())
print("r(Reliance, TCS) =", round(both['Reliance'].corr(both['TCS']), 4))

plt.figure(figsize=(8, 6))
plt.scatter(both['Reliance'], both['TCS'], alpha=0.5, s=18)
plt.axhline(0, color='grey', linewidth=0.8); plt.axvline(0, color='grey', linewidth=0.8)
plt.title('Reliance Daily Return vs TCS Daily Return')
plt.xlabel('Reliance return'); plt.ylabel('TCS return')
plt.grid(True, linestyle='--', alpha=0.4)
plt.tight_layout(); plt.show()
```

```text
rows after inner join + dropna: (751, 2)
period: 2020-01-02 to 2022-12-30
r(Reliance, TCS) = -0.0139
```

![Scatter of Reliance daily returns against TCS daily returns forming a formless cloud around the origin](/figures/12-scatter-returns.png)

The lecture demo sheet is the opposite case — a near-perfect straight line, which is what a
textbook scatter is supposed to look like:

```python
W  = BASE + "Matplotlib/DemoData/PltData.xlsx"
sc = pd.read_excel(W, sheet_name="Scatter")
print("r =", round(sc['Advertising'].corr(sc['Sales']), 4))
plt.scatter(sc['Advertising'], sc['Sales'], color='red')
plt.title('Advertising vs Sales'); plt.xlabel('Advertising'); plt.ylabel('Sales')
plt.tight_layout(); plt.show()
```

```text
r = 0.9874
```

![Scatter of advertising against sales lying almost exactly on a straight line](/figures/12-scatter-demo.png)

**The honest reading.** Run `.corr()` before you write anything. These are the real numbers in the
four exercise files:

| Question | X | Y | r | What to write |
| --- | --- | --- | --- | --- |
| Ex 1 Q3 | Total Deposits | Net Profit | **-0.0076** | no relationship |
| Ex 2 Q3 | Credit Limit | Total Spend | **0.1251** | very weak, positive, not usable |
| Ex 3 Q3 | Age | Claim Amount | **-0.0900** | negligible |
| Ex 4 Q3 | Age | Balance | **0.0385** | none |
| Case 2 | Holding_Months | Value_Change_pct | **0.0650** | none |
| Case 3 | Sum_Insured | Claim_Amount | **0.6441** | moderate-to-strong, positive — real |
| Case 1 Q14D | Reliance return | TCS return | **-0.0139** | independent day to day |
| Demo sheet | Advertising | Sales | **0.9874** | near-perfect positive |

Do **not** invent a trend. See
[Write-up answers](#write-up-answers--interpretation-sentences) for the sentence to write when the
cloud is featureless — describing it correctly earns the mark; claiming "deposits drive profit"
loses it.

**Variants**

| If the question says | Change to |
| --- | --- |
| "just the relationship, no extras" | `plt.scatter(df[X], df[Y])` |
| "colour by a category" | loop `for k, sub in df.groupby(CAT): plt.scatter(..., label=k)` then `plt.legend()` |
| "colour by a number" | `c=df[COL], cmap='viridis'` + `plt.colorbar(label=...)` |
| "size by a number" | `s=df[COL] / K` — pick `K` so bubbles fit |
| "add a trend line" | `import numpy as np; m, b = np.polyfit(df[X], df[Y], 1); plt.plot(df[X], m*df[X]+b, 'r--')` |
| "report the correlation" | `df[X].corr(df[Y])` and put it in the title with an f-string |
| "mark the zero line" | `plt.axhline(0, color='red', linestyle='--')` |
| "different marker shape" | `marker='^'` (`o s ^ v D x +`) |
| "points overlap badly" | `alpha=0.3` and/or smaller `s=` |
| "only rows where both are present" | `.join(other, how='inner')` or `df[[X, Y]].dropna()` |

**Traps**

- `c=` with a **string** column raises `ValueError: 'c' argument must be a color ... or sequence of numbers`. Use the groupby-loop form instead.
- `plt.colorbar()` without a mappable on a plain scatter raises `RuntimeError: No mappable was found`. Only call it when you passed `c=`.
- `s=` is **area**, not radius. Doubling `s` does not double the width.
- Negative values in `s=` are dropped silently — check `df[SIZE_COL].min()`.
- `plt.scatter` does not align on the index. Two unaligned Series of different length raise `ValueError: x and y must be the same size`. Join first.
- Scatter of a category against a number is a strip of vertical stacks, not a relationship. If one axis is categorical, the examiner wants a **box plot** (P12.7) or a bar (P12.3).

**Drill**

1. Ex 2: scatter `Age` against `Total Spend`, colour by `Customer Satisfaction`, add a colour bar.
2. Ex 4: scatter `Number of Transactions` against `Balance`, bubble size from `Age`, and print the correlation in the title.

<details><summary>Answers</summary>

```python
# 1
plt.figure(figsize=(9, 6))
plt.scatter(cc['Age'], cc['Total Spend'], c=cc['Customer Satisfaction'], cmap='viridis', s=50)
plt.colorbar(label='Customer Satisfaction')
plt.title('Age vs Total Spend'); plt.xlabel('Age'); plt.ylabel('Total Spend (USD)')
plt.grid(True, linestyle='--', alpha=0.4); plt.tight_layout(); plt.show()

# 2
r = sav['Number of Transactions'].corr(sav['Balance'])
plt.figure(figsize=(9, 6))
plt.scatter(sav['Number of Transactions'], sav['Balance'], s=sav['Age'] * 2, alpha=0.6)
plt.title(f'Transactions vs Balance (r = {r:.3f})')
plt.xlabel('Number of Transactions'); plt.ylabel('Balance (USD)')
plt.grid(True, linestyle='--', alpha=0.4); plt.tight_layout(); plt.show()
```

</details>

## P12.7 — Box plot comparing groups

**Exam phrasings**

- "Explore the Variability in Claim Amounts by Insurance Type" (Ex 3 Q4)
- "Explore Customer Satisfaction Across Different Age Groups" (Ex 2 Q4)
- "Boxplot: compare Current_Value for AAA, AA and A-rated bonds" (Case 2 Part D)
- "Create a separate boxplot comparing Claim_Amount for Motor, Health, Travel and Property policies. Label each box appropriately" (Case 3 Figure 3)
- "Boxplot: Compare the distributions of Reliance, TCS and Infosys daily returns" (Case 1 Q14E)
- "compare the spread of COL across the categories of GROUP_COL"

**Core idea.** `plt.boxplot` does **not** understand a DataFrame and a group column. It wants a
**list of arrays** — one array per box. Build that list with a one-line comprehension over
`groupby`, and pass the matching names to `tick_labels=`.

**Template**

```python
groups = [g[COL].values for _, g in df.groupby(GROUP_COL)]   # list of arrays, one per box
labels = [k for k, _ in df.groupby(GROUP_COL)]               # matching names, same order

plt.figure(figsize=(8, 5))
plt.boxplot(groups, tick_labels=labels)     # matplotlib >= 3.9; use labels= on 3.8 and older
plt.title('Variability in COL by GROUP_COL')
plt.xlabel('GROUP_COL'); plt.ylabel('COL')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

**Reading the box — this is where the interpretation marks are.**

| Part of the drawing | What it is | How to get the number in pandas |
| --- | --- | --- |
| Bottom of the box | Q1, the 25th percentile | `s.quantile(0.25)` |
| Line inside the box | **median** (Q2), not the mean | `s.median()` |
| Top of the box | Q3, the 75th percentile | `s.quantile(0.75)` |
| Height of the box | **IQR** = Q3 - Q1, the middle 50% | `q3 - q1` |
| Whisker ends | last data point within 1.5 x IQR of the box | `q1 - 1.5*iqr`, `q3 + 1.5*iqr` are the *fences* |
| Circles beyond a whisker | **outliers / fliers** | `s[(s < lo) \| (s > hi)]` |
| Triangle (only with `showmeans=True`) | the mean | `s.mean()` |

Tall box = inconsistent group. Short box = consistent group. Median off-centre in the box = skew.

**Worked 1** — Ex 3 Q4.

```python
ins = pd.read_csv(MP + "insurance_claims.csv")
print(ins.groupby('Insurance Type')['Claim Amount'].describe().round(0).to_string())

groups = [g['Claim Amount'].values for _, g in ins.groupby('Insurance Type')]
labels = [k for k, _ in ins.groupby('Insurance Type')]
print("labels      :", labels)
print("group sizes :", [len(a) for a in groups])

plt.figure(figsize=(8, 5))
bp = plt.boxplot(groups, tick_labels=labels, patch_artist=True, showmeans=True)
for patch, c in zip(bp['boxes'], ['#4C72B0', '#55A868', '#C44E52', '#8172B2']):
    patch.set_facecolor(c)
plt.title('Variability in Claim Amounts by Insurance Type')
plt.xlabel('Insurance Type'); plt.ylabel('Claim Amount (USD)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
                count     mean      std     min      25%      50%      75%      max
Insurance Type
Auto             27.0  25201.0  14003.0  3327.0  13658.0  24776.0  33766.0  49925.0
Health           31.0  27570.0  15182.0  1197.0  19842.0  29021.0  39591.0  48323.0
Home             17.0  29416.0  12820.0  4304.0  22556.0  28728.0  41772.0  47645.0
Life             25.0  24079.0  15311.0  1854.0   8392.0  22834.0  35754.0  47717.0
labels      : ['Auto', 'Health', 'Home', 'Life']
group sizes : [27, 31, 17, 25]
```

![Coloured box plots of claim amount for Auto, Health, Home and Life insurance](/figures/12-box-claim-type.png)

Reading one box in full, so the numbers in your write-up match the picture:

```python
h = ins.loc[ins['Insurance Type'] == 'Health', 'Claim Amount']
q1, med, q3 = h.quantile(.25), h.quantile(.50), h.quantile(.75)
iqr = q3 - q1
print(f"min={h.min():,.0f}  Q1={q1:,.0f}  median={med:,.0f}  Q3={q3:,.0f}  max={h.max():,.0f}")
print(f"IQR={iqr:,.0f}  lower fence={q1-1.5*iqr:,.0f}  upper fence={q3+1.5*iqr:,.0f}")
print("points outside the fences:", int(((h < q1-1.5*iqr) | (h > q3+1.5*iqr)).sum()))
```

```text
min=1,197  Q1=19,842  median=29,021  Q3=39,591  max=48,323
IQR=19,749  lower fence=-9,782  upper fence=69,214
points outside the fences: 0
```

Long category names? Turn the boxes on their side with `vert=False` and swap the axis labels:

```python
plt.figure(figsize=(8, 5))
plt.boxplot(groups, tick_labels=labels, vert=False)
plt.title('Claim Amounts by Insurance Type (horizontal)')
plt.xlabel('Claim Amount (USD)'); plt.ylabel('Insurance Type')
plt.tight_layout(); plt.show()
```

![Horizontal box plots of claim amount by insurance type](/figures/12-box-horizontal.png)

**Worked 2** — Ex 2 Q4. The group column does not exist; bin `Age` first
([P12.5](#p125--bin-a-numeric-column-into-groups-before-plotting)), then the same comprehension
with `observed=True`.

```python
cc = pd.read_csv(MP + "credit_card_usage.csv")
cc['Age Group'] = pd.cut(cc['Age'], bins=[18, 30, 40, 50, 60, 70],
                         labels=['18-30', '31-40', '41-50', '51-60', '61-70'])
print(cc.groupby('Age Group', observed=True)['Customer Satisfaction'].describe().round(2).to_string())

groups = [g['Customer Satisfaction'].values for _, g in cc.groupby('Age Group', observed=True)]
labels = [str(k) for k, _ in cc.groupby('Age Group', observed=True)]

plt.figure(figsize=(8, 5))
plt.boxplot(groups, tick_labels=labels, patch_artist=True, showmeans=True)
plt.title('Customer Satisfaction by Age Group')
plt.xlabel('Age Group'); plt.ylabel('Customer Satisfaction')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
           count  mean   std   min   25%   50%   75%   max
Age Group
18-30       21.0  4.58  2.98  1.05  1.85  4.08  6.21  9.84
31-40       24.0  5.11  2.84  1.15  2.80  4.99  7.43  9.50
41-50       19.0  5.85  3.01  1.46  2.66  6.73  8.38  9.69
51-60       17.0  4.62  2.19  1.64  3.31  4.12  5.98  9.73
61-70       19.0  6.07  2.45  2.25  3.83  6.91  7.85  9.50
```

![Box plots of customer satisfaction across five age bands](/figures/12-box-satisfaction-agegroup.png)

**Worked 3** — Case 2. The question names the ratings in the order **AAA, AA, A**; `groupby`
would give you A, AA, AAA (alphabetical). Build the list from an explicit order list instead of
from `groupby`.

```python
order = ['AAA', 'AA', 'A']                       # business order, NOT alphabetical
box = [port.loc[port['Credit_Rating'] == r, 'Current_Value'].values for r in order]
print("alphabetical groupby order would be:", sorted(port['Credit_Rating'].unique()))
print(port.groupby('Credit_Rating')['Current_Value'].describe().round(0).loc[order].to_string())

plt.figure(figsize=(8, 5))
plt.boxplot(box, tick_labels=order, patch_artist=True)
plt.title('Current Value by Credit Rating')
plt.xlabel('Credit_Rating'); plt.ylabel('Current_Value (Rs.)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
alphabetical groupby order would be: ['A', 'AA', 'AAA']
               count      mean      std      min       25%       50%       75%       max
Credit_Rating
AAA             35.0  121123.0  55702.0  21173.0   84229.0  113569.0  155691.0  246148.0
AA              39.0  122691.0  63738.0  36865.0   64996.0  114569.0  180108.0  241023.0
A               46.0  144750.0  62096.0  20614.0  106523.0  145237.0  193677.0  244003.0
```

![Box plots of bond current value for AAA, AA and A ratings in that order](/figures/12-box-case2-rating.png)

**Worked 4** — Case 3 Figure 3, same trick with four named policy types. This is the one dataset
in the course whose boxes actually show **fliers**.

```python
order3 = ['Motor', 'Health', 'Travel', 'Property']
g3 = [claims.loc[claims['Policy_Type'] == p, 'Claim_Amount'].values for p in order3]
print(claims.groupby('Policy_Type')['Claim_Amount'].describe().round(0).to_string())

plt.figure(figsize=(8, 5))
plt.boxplot(g3, tick_labels=order3, patch_artist=True, showmeans=True)
plt.title('Claim Amount by Policy Type')
plt.xlabel('Policy_Type'); plt.ylabel('Claim_Amount (Rs.)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
             count      mean       std      min       25%       50%       75%        max
Policy_Type
Health        26.0  298189.0  203370.0  50046.0  179333.0  239733.0  358946.0   789736.0
Motor         36.0  244500.0  133339.0  34257.0  131649.0  257846.0  328758.0   560850.0
Property      41.0  485568.0  302101.0  46554.0  263084.0  497064.0  669520.0  1136029.0
Travel        47.0   81770.0   53562.0   7302.0   39770.0   75773.0  110294.0   245160.0
```

![Box plots of claim amount for Motor, Health, Travel and Property policies with visible outliers](/figures/12-box-case3-policy.png)

**Worked 5** — Case 1 Q14E. Three Series, no group column at all: just put them in a list.

```python
S, E = '2021-01-01', '2022-12-30'          # the common period of the three sheets
rr = rel.loc[S:E, 'Return'].dropna()
tt = tcs.loc[S:E, 'Return'].dropna()
ii = inf.loc[S:E, 'Return'].dropna()
print("return counts:", len(rr), len(tt), len(ii))
print(pd.DataFrame({'Reliance': rr.describe(), 'TCS': tt.describe(),
                    'Infosys': ii.describe()}).round(4))

plt.figure(figsize=(8, 5))
plt.boxplot([rr, tt, ii], tick_labels=['Reliance', 'TCS', 'Infosys'])
plt.title('Daily Returns of Reliance, TCS and Infosys (2021-2022)')
plt.ylabel('Daily return')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
return counts: 510 511 512
       Reliance       TCS   Infosys
count  510.0000  511.0000  512.0000
mean     0.0002    0.0008   -0.0002
std      0.0129    0.0120    0.0130
min     -0.0371   -0.0444   -0.0352
25%     -0.0090   -0.0071   -0.0092
50%     -0.0000    0.0006   -0.0004
75%      0.0087    0.0089    0.0089
max      0.0402    0.0383    0.0383
```

![Box plots of the daily returns of Reliance, TCS and Infosys side by side](/figures/12-box-returns-three.png)

The lecture demo sheet holds one column per box already, so no comprehension is needed:

```python
bx = pd.read_excel(W, sheet_name="BoxPlot")
print(bx.head())
plt.boxplot([bx['Category 1'], bx['Category 2'], bx['Category 3']],
            tick_labels=['Category 1', 'Category 2', 'Category 3'])
plt.title('Boxplot of three categories'); plt.ylabel('Value')
plt.tight_layout(); plt.show()
```

```text
   Category 1  Category 2  Category 3
0          20          22          18
1          25          27          23
2          30          32          28
3          35          37          33
4          40          42          38
```

![Box plots of three demo categories with almost identical spread](/figures/12-box-demo.png)

**Variants**

| If the question says | Change to |
| --- | --- |
| "one box for the whole column" | `plt.boxplot(df[COL])` — a bare Series is allowed |
| "several numeric columns side by side" | `plt.boxplot(df[[A, B, C]].values, tick_labels=[A, B, C])` |
| "label each box appropriately" | `tick_labels=labels` (matplotlib >= 3.9) or `labels=labels` (3.8 and older) |
| "in this order: Motor, Health, Travel, Property" | build the list from an `order = [...]` list, not from `groupby` |
| "horizontal box plot" | `vert=False` and swap `xlabel`/`ylabel` |
| "colour the boxes" | `patch_artist=True` then `for p, c in zip(bp['boxes'], colours): p.set_facecolor(c)` |
| "show the mean as well" | `showmeans=True` (draws a triangle) |
| "hide the outliers" | `showfliers=False` |
| "notched box plot" | `notch=True` |
| "pandas shortcut" | `df.boxplot(column=COL, by=GROUP_COL)` |
| "the groups have very different sizes" | print `[len(a) for a in groups]` and say so — a box over 17 points is not comparable to one over 47 |

**Traps**

- `plt.boxplot(df, GROUP_COL)` does not exist. The second positional argument of `boxplot` is `notch`, so you get a silent wrong chart or a `TypeError`. Always build the list first.
- `labels=` is deprecated. On matplotlib 3.9.4 it prints `MatplotlibDeprecationWarning: The 'labels' parameter of boxplot() has been renamed 'tick_labels' since Matplotlib 3.9; support for the old name will be dropped in 3.11.` Both still work today — mention the rename if you use the old name.
- `groupby` sorts keys **alphabetically**. AAA/AA/A and Motor/Health/Travel/Property come out in the wrong order unless you impose it.
- `NaN` inside a group makes the whole box vanish. `.dropna()` per group, which `g[COL].values` does **not** do for you — use `g[COL].dropna().values` if the column has gaps.
- The line in the box is the **median**. Writing "the average claim is 29,021" when you mean the median loses the mark.
- A box plot of means is nonsense. Pass the raw values, never `groupby().mean()`.
- Whiskers are at the last point **inside** the 1.5 x IQR fence, not at the fence itself and not at min/max.

**Drill**

1. Ex 1: box plot of `Net Profit` by `City`, with the means shown.
2. Ex 4: box plot of `Balance` by `Branch City`, horizontal, ordered alphabetically.
3. Case 3: box plot of `Settlement_Days` by `Claim_Status` in the order Approved, Pending, Rejected.

<details><summary>Answers</summary>

```python
# 1
groups = [g['Net Profit'].values for _, g in bank.groupby('City')]
labels = [k for k, _ in bank.groupby('City')]
plt.figure(figsize=(8, 5))
plt.boxplot(groups, tick_labels=labels, showmeans=True)
plt.title('Net Profit by City'); plt.xlabel('City'); plt.ylabel('Net Profit (USD)')
plt.xticks(rotation=30); plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()

# 2
groups = [g['Balance'].values for _, g in sav.groupby('Branch City')]
labels = [k for k, _ in sav.groupby('Branch City')]
plt.boxplot(groups, tick_labels=labels, vert=False)
plt.title('Balance by Branch City'); plt.xlabel('Balance (USD)'); plt.ylabel('Branch City')
plt.tight_layout(); plt.show()

# 3
order = ['Approved', 'Pending', 'Rejected']
g = [claims.loc[claims['Claim_Status'] == s, 'Settlement_Days'].values for s in order]
plt.boxplot(g, tick_labels=order)
plt.title('Settlement Days by Claim Status'); plt.xlabel('Claim_Status'); plt.ylabel('Settlement_Days')
plt.grid(True, axis='y', linestyle='--', alpha=0.5); plt.tight_layout(); plt.show()
```

</details>

## P12.8 — Annotate median, quartiles and outliers on a box plot

**Exam phrasings**

- "Explore the Variability in Total Loans Across Branches. Annotate the median, quartiles, and outliers on the plot" (Ex 1 Q4, verbatim)
- "Hint: Use plt.boxplot() and annotate using plt.text()" (Ex 1 Q4, verbatim)
- "mark the median and the quartiles on the box plot"
- "identify the outliers using the 1.5 x IQR rule and label them"
- "report the five-number summary on the chart"

**Core idea.** Three steps, in this order. (1) Compute Q1, median, Q3, IQR and the two fences with
`quantile()`. (2) Draw the box. (3) Put the numbers on the canvas with `plt.text(x, y, string)`,
where `x` is just to the right of the box (`1.06` when there is one box at position 1) and `y` is
the value itself — so each label sits at the height it describes.

`plt.text` takes **data coordinates**. That is why `y=med` lands exactly on the median line.

**Template**

```python
x  = df[COL]
q1, med, q3 = x.quantile(0.25), x.quantile(0.50), x.quantile(0.75)
iqr = q3 - q1
lo, hi = q1 - 1.5 * iqr, q3 + 1.5 * iqr      # the 1.5 x IQR fences
out = x[(x < lo) | (x > hi)]                 # the outliers, by the rule

plt.figure(figsize=(8, 6))
plt.boxplot(x, tick_labels=['All rows'], showmeans=True)
plt.text(1.06, q3,  f'Q3 = {q3:,.0f}',          color='green')
plt.text(1.06, med, f'Median = {med:,.0f}',     color='blue')
plt.text(1.06, q1,  f'Q1 = {q1:,.0f}',          color='green')
plt.text(1.06, hi,  f'Upper fence = {hi:,.0f}', color='grey')
plt.text(1.06, lo,  f'Lower fence = {lo:,.0f}', color='grey')
plt.text(0.58, (q1 + q3) / 2, f'IQR\n= {iqr:,.0f}', color='purple', ha='center', va='center')
for v in out:                                 # label every outlier
    plt.text(1.02, v, f'{v:,.0f}', color='red', fontsize=8, va='center')
plt.title('Variability in COL'); plt.ylabel('COL')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

**Worked** — Ex 1 Q4 exactly as asked. Compute first, print the numbers so the examiner can see
you did the arithmetic, then annotate.

```python
bank = pd.read_csv(MP + "bank_branch_performance.csv")
x = bank['Total Loans']
q1, med, q3 = x.quantile(0.25), x.quantile(0.50), x.quantile(0.75)
iqr = q3 - q1
lo, hi = q1 - 1.5 * iqr, q3 + 1.5 * iqr
out = x[(x < lo) | (x > hi)]

print("Q1     =", round(q1, 2))
print("Median =", round(med, 2))
print("Q3     =", round(q3, 2))
print("IQR    =", round(iqr, 2))
print("lower fence =", round(lo, 2), "| upper fence =", round(hi, 2))
print("outlier count =", len(out))
print("min =", x.min(), "| max =", x.max())

plt.figure(figsize=(8, 6))
plt.boxplot(x, tick_labels=['All branches'], showmeans=True)
plt.axhline(hi, color='grey', linestyle=':', linewidth=1)
plt.axhline(lo, color='grey', linestyle=':', linewidth=1)
plt.text(1.06, q3,  f'Q3 = {q3:,.0f}',          color='green')
plt.text(1.06, med, f'Median = {med:,.0f}',     color='blue')
plt.text(1.06, q1,  f'Q1 = {q1:,.0f}',          color='green')
plt.text(1.06, hi,  f'Upper fence = {hi:,.0f}', color='grey')
plt.text(1.06, lo,  f'Lower fence = {lo:,.0f}', color='grey')
plt.text(0.58, (q1 + q3) / 2, f'IQR\n= {iqr:,.0f}', color='purple', ha='center', va='center')
plt.text(0.58, hi, f'Outliers beyond\nthe fences: {len(out)}', color='red', ha='center', va='center')
plt.ylim(lo - 0.2 * iqr, hi + 0.2 * iqr)     # make room for the fence labels
plt.xlim(0.35, 1.95)                         # make room for the text on the right
plt.title('Variability in Total Loans Across Branches')
plt.ylabel('Total Loans (USD)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
Q1     = 1662357.75
Median = 2517402.0
Q3     = 3289419.75
IQR    = 1627062.0
lower fence = -778235.25 | upper fence = 5730012.75
outlier count = 0
min = 615294 | max = 3971080
```

![Box plot of total loans with Q1, median, Q3, IQR and both fences labelled by plt.text](/figures/12-box-loans-annotated.png)

**There are no outliers in this column, and that is the answer.** The upper fence is 5,730,013 but
the largest branch lends 3,971,080; the lower fence is negative, which is impossible for a loan
book. So write: *"Applying the 1.5 x IQR rule gives fences of -778,235 and 5,730,013. No branch
falls outside them, so Total Loans contains no outliers — the values are evenly spread between
615,294 and 3,971,080."* Do not draw circles that are not there.

**Worked 2** — the same annotation on a column that **does** have outliers (Case 3
`Claim_Amount`), so you can see the labelling loop working.

```python
x = claims['Claim_Amount']
q1, med, q3 = x.quantile(0.25), x.quantile(0.50), x.quantile(0.75)
iqr = q3 - q1
lo, hi = q1 - 1.5 * iqr, q3 + 1.5 * iqr
out = x[(x < lo) | (x > hi)]
print("Q1 =", round(q1, 2), "| Median =", round(med, 2), "| Q3 =", round(q3, 2))
print("IQR =", round(iqr, 2), "| upper fence =", round(hi, 2))
print("outliers:", len(out))
print(out.round(2).to_string())

plt.figure(figsize=(8, 6))
plt.boxplot(x, tick_labels=['All claims'], showmeans=True)
plt.text(1.06, q3,  f'Q3 = {q3:,.0f}', color='green')
plt.text(1.06, med, f'Median = {med:,.0f}', color='blue')
plt.text(1.06, q1,  f'Q1 = {q1:,.0f}', color='green')
plt.text(1.06, hi,  f'Upper fence = {hi:,.0f}', color='grey')
plt.text(0.55, hi * 1.02, f'{len(out)} outliers above the fence', color='red')
for v in out:
    plt.text(1.02, v, f'{v:,.0f}', color='red', fontsize=8, va='center')
plt.title('Claim Amount: median, quartiles and outliers')
plt.ylabel('Claim_Amount (Rs.)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
Q1 = 80094.57 | Median = 188095.74 | Q3 = 365871.64
IQR = 285777.07 | upper fence = 794537.25
outliers: 6
28     1008071.58
29      991062.86
48     1009846.83
55     1018696.13
132     874267.28
138    1136029.18
```

![Box plot of claim amount with the six outliers above the upper fence individually labelled](/figures/12-box-case3-annotated.png)

**Getting the numbers back out of the drawing.** `plt.boxplot` returns a dictionary of the artists
it drew. Reading it is the cross-check that your `quantile()` numbers really are the ones on the
chart:

```python
bp = plt.boxplot(bank['Total Loans'])
print("median   :", bp['medians'][0].get_ydata()[0])
print("box Q1/Q3:", bp['boxes'][0].get_ydata()[:3])
print("whiskers :", [w.get_ydata()[1] for w in bp['whiskers']])
print("fliers   :", bp['fliers'][0].get_ydata())
```

```text
median   : 2517402.0
box Q1/Q3: [1662357.75 1662357.75 3289419.75]
whiskers : [np.float64(615294.0), np.float64(3971080.0)]
fliers   : []
```

`fliers` is empty — the same answer as the 1.5 x IQR arithmetic. Note the whiskers stop at the
real min and max (615,294 and 3,971,080), not at the fences.

**Variants**

| If the question says | Change to |
| --- | --- |
| "annotate each group's median" | loop: `for i, s in enumerate(groups, start=1): plt.text(i + 0.1, np.median(s), f'{np.median(s):,.0f}')` |
| "draw an arrow to the biggest outlier" | `plt.annotate('max', xy=(1, x.max()), xytext=(1.3, x.max()), arrowprops=dict(arrowstyle='->'))` |
| "put the five-number summary in a corner" | one `plt.text` with `"\n".join(...)` and `bbox=dict(facecolor='white', alpha=0.8)` |
| "use the quartile definition from the notes" | `x.quantile(0.25, interpolation='lower')` if a specific convention is demanded — say which you used |
| "3 x IQR / extreme outliers" | replace `1.5` with `3.0` and call them extreme outliers |
| "list the outlier rows, not just the values" | `bank.loc[(x < lo) \| (x > hi)]` |
| "percentage of rows that are outliers" | `len(out) / len(x) * 100` |

**Traps**

- `plt.text` uses **data coordinates**. With one box at x = 1, useful x values are 1.02 to 1.10; at x = 5 they are 5.02 to 5.10. If the text vanishes, the y value is off the axis — widen with `ylim`.
- Text drawn outside the axes gets clipped away by `bbox_inches='tight'` on save. Extend `xlim`/`ylim` **before** saving, as above.
- Labels collide when two quartiles are close (here IQR/2 sits almost on the median). Move one label to a different x, or shorten the string.
- Outliers that cluster stack their labels on top of each other. Either label only the extreme ones or print the list in the text instead.
- `plt.text(y, x, ...)` reversed is the most common error: the signature is `plt.text(x, y, s)`.
- **Do not hand-compute quartiles.** `quantile()` and matplotlib use the same linear interpolation, so the numbers will match the drawing; a textbook by-hand method may not.
- The rule is 1.5 x IQR **beyond the quartiles**, not beyond the median.

**Drill**

1. Annotate Q1, median and Q3 on a box plot of `Customer Satisfaction` (Ex 1) and report the outlier count.
2. Case 2: annotate the median and both fences of `Value_Change_pct` and list the outliers.

<details><summary>Answers</summary>

```python
# 1
x = bank['Customer Satisfaction']
q1, med, q3 = x.quantile(.25), x.quantile(.50), x.quantile(.75)
iqr = q3 - q1; lo, hi = q1 - 1.5*iqr, q3 + 1.5*iqr
plt.figure(figsize=(7, 6))
plt.boxplot(x, tick_labels=['All branches'])
for v, lab, c in [(q1, 'Q1', 'green'), (med, 'Median', 'blue'), (q3, 'Q3', 'green')]:
    plt.text(1.06, v, f'{lab} = {v:.2f}', color=c)
plt.xlim(0.5, 1.8)
plt.title('Customer Satisfaction'); plt.ylabel('Score')
plt.tight_layout(); plt.show()
print("outliers:", int(((x < lo) | (x > hi)).sum()))

# 2
x = port['Value_Change_pct']
q1, med, q3 = x.quantile(.25), x.quantile(.50), x.quantile(.75)
iqr = q3 - q1; lo, hi = q1 - 1.5*iqr, q3 + 1.5*iqr
print(f"median={med:.2f}  fences={lo:.2f} / {hi:.2f}")
print("outliers:", int(((x < lo) | (x > hi)).sum()))
```

```text
median=0.78  fences=-20.49 / 25.00
outliers: 0
```

The percentage column has no outliers because it is bounded (-9.87% to 13.91%). The **absolute**
`Value_Change` column does have 3, which is the point: the 1.5 x IQR rule answers a question about
*one specific column*, so name the column in your answer.

</details>

## P12.9 — Pie chart of proportions

**Exam phrasings**

- "Visualize the Proportion of Branches in Different Cities" (Ex 1 Q5)
- "Hint: Use plt.pie() and include labels for each city" (Ex 1 Q5, verbatim)
- "Visualize the Proportion of Claims Approved vs. Rejected" (Ex 3 Q5)
- "Visualize the Proportion of Accounts in Different Branch Cities" (Ex 4 Q5)
- "Visualize the Proportion of Customers in Each Age Group" (Ex 2 Q5)
- "Create a separate pie chart showing the proportion of Approved, Rejected and Pending claims. Display percentage values on the chart" (Case 3 Figure 2)
- "Pie chart: show the percentage of observations falling into positive-return days and non-positive-return days" (Case 1 Q14F)
- "show the share of each category as a percentage"

**Core idea.** `value_counts()` then `plt.pie()`. Four arguments earn the marks:
`labels=` (names the slices), `autopct='%1.1f%%'` (prints the percentages — the words "display
percentage values" in the question mean exactly this), `startangle=90` (first slice starts at
12 o'clock) and `plt.axis('equal')` (keeps the pie round instead of oval).

**Template**

```python
counts = df[CAT_COL].value_counts()            # counts per category
print(counts)

plt.figure(figsize=(6.5, 6.5))
plt.pie(counts.values, labels=counts.index,
        autopct='%1.1f%%', startangle=90)
plt.title('Proportion of CAT_COL')
plt.axis('equal')                              # circular, not elliptical
plt.tight_layout(); plt.show()
```

A pie needs **no** `xlabel`, `ylabel` or `grid` — there are no axes. Adding them is not wrong, but
the marks are for the labels and the percentages.

**Worked** — Ex 1 Q5.

```python
bank = pd.read_csv(MP + "bank_branch_performance.csv")
counts = bank['City'].value_counts()
print(counts.to_string())
print("--- as percentages")
print(bank['City'].value_counts(normalize=True).mul(100).round(1).to_string())

plt.figure(figsize=(6.5, 6.5))
plt.pie(counts.values, labels=counts.index, autopct='%1.1f%%', startangle=90)
plt.title('Proportion of Branches in Different Cities')
plt.axis('equal')
plt.tight_layout(); plt.show()
```

```text
City
Houston        26
Los Angeles    21
Phoenix        19
New York       18
Chicago        16
--- as percentages
City
Houston        26.0
Los Angeles    21.0
Phoenix        19.0
New York       18.0
Chicago        16.0
```

![Pie chart of the share of branches in five cities](/figures/12-pie-cities.png)

With exactly 100 branches the counts *are* the percentages — say so, it shows you checked.

**Pulling out the biggest slice** (`explode`), plus custom colours and a shadow. `explode` is a
list the same length as the data, one offset per slice:

```python
explode = [0.1 if c == counts.idxmax() else 0 for c in counts.index]
print("idxmax:", counts.idxmax())
print("explode list:", explode)

plt.figure(figsize=(6.5, 6.5))
plt.pie(counts.values, labels=counts.index, autopct='%1.1f%%', startangle=90,
        explode=explode, shadow=True,
        colors=['#4C72B0', '#55A868', '#C44E52', '#8172B2', '#CCB974'])
plt.title('Branches by City (largest slice exploded)')
plt.axis('equal')
plt.tight_layout(); plt.show()
```

```text
idxmax: Houston
explode list: [0.1, 0, 0, 0, 0]
```

![Pie chart with the Houston slice pulled out from the circle](/figures/12-pie-explode.png)

**Worked 2** — Ex 3 Q5, a two-slice pie. Print the counts: the "proportion approved" is a number
the examiner wants in the sentence, not only in the picture.

```python
ins = pd.read_csv(MP + "insurance_claims.csv")
st = ins['Claim Status'].value_counts()
print(st.to_string())
print("approval rate:", round(st['Approved'] / st.sum() * 100, 1), "%")

plt.figure(figsize=(6, 6))
plt.pie(st.values, labels=st.index, autopct='%1.1f%%', startangle=90,
        colors=['#C44E52', '#55A868'], explode=[0, 0.05])
plt.title('Proportion of Claims Approved vs Rejected')
plt.axis('equal'); plt.tight_layout(); plt.show()
```

```text
Claim Status
Rejected    56
Approved    44
approval rate: 44.0 %
```

![Two-slice pie chart showing 56 percent rejected and 44 percent approved claims](/figures/12-pie-claim-status.png)

**The other three pies, same five lines.**

```python
# Ex 4 Q5
bc = sav['Branch City'].value_counts()
print(bc.to_string())
plt.pie(bc.values, labels=bc.index, autopct='%1.1f%%', startangle=90)
plt.title('Proportion of Accounts in Different Branch Cities'); plt.axis('equal'); plt.show()

# Case 3 Figure 2 - three statuses
cs = claims['Claim_Status'].value_counts()
print(cs.to_string())
plt.pie(cs.values, labels=cs.index, autopct='%1.1f%%', startangle=90)
plt.title('Claim Status Composition'); plt.axis('equal'); plt.show()
```

```text
Branch City
New York       25
Houston        22
Phoenix        20
Chicago        20
Los Angeles    13
Claim_Status
Approved    101
Pending      29
Rejected     20
```

![Pie chart of savings accounts by branch city](/figures/12-pie-branch-cities.png)

![Pie chart of approved, pending and rejected claims](/figures/12-pie-case3-status.png)

**Worked 3** — Case 1 Q14F. There is no category column at all: you must **create the two counts**
from a comparison, then hand them to `plt.pie` as a plain list.

```python
ir = inf.loc['2021-01-01':'2022-12-30', 'Return'].dropna()
pos = int((ir > 0).sum())
non = int((ir <= 0).sum())
print("positive:", pos, "| non-positive:", non, "| total:", len(ir))

plt.figure(figsize=(6, 6))
plt.pie([pos, non], labels=['Positive', 'Non-positive'], autopct='%1.1f%%',
        startangle=90, colors=['#55A868', '#C44E52'])
plt.title('Infosys: Positive vs Non-positive Return Days')
plt.axis('equal'); plt.tight_layout(); plt.show()
```

```text
positive: 249 | non-positive: 263 | total: 512
```

![Pie chart splitting Infosys trading days into positive and non-positive returns](/figures/12-pie-positive-returns.png)

Note the boundary: the question says positive versus **non-positive**, so zero goes with the
negatives — `> 0` and `<= 0`. State that choice; `>= 0` and `< 0` would give different counts.

The lecture demo sheet already holds the values, so no `value_counts` is needed:

```python
pc = pd.read_excel(W, sheet_name="PieChart")
print(pc)
plt.pie(pc['Values'], labels=pc['Category'], autopct='%1.1f%%', startangle=90)
plt.title('Category shares'); plt.axis('equal')
plt.tight_layout(); plt.show()
```

```text
  Category  Values
0        A      40
1        B      10
2        C      35
3        D      15
```

![Pie chart of four demo categories](/figures/12-pie-demo.png)

**Variants**

| If the question says | Change to |
| --- | --- |
| "in alphabetical / bin order, not by size" | `df[CAT].value_counts().sort_index()` |
| "by Age Group" (no such column) | `pd.cut` first — see [P12.5](#p125--bin-a-numeric-column-into-groups-before-plotting) |
| "one decimal / no decimals / two decimals" | `autopct='%1.1f%%'` / `'%1.0f%%'` / `'%1.2f%%'` |
| "show the counts, not the percentages" | `autopct=lambda p: f'{p*sum(counts)/100:.0f}'` |
| "put the names in a legend instead of on the slices" | drop `labels=`, then `plt.legend(counts.index, loc='best')` |
| "explode the smallest slice" | `[0.1 if c == counts.idxmin() else 0 for c in counts.index]` |
| "start at 3 o'clock" | `startangle=0` (the default) |
| "donut chart" | `wedgeprops=dict(width=0.4)` |
| "pie of the total value per category, not the count" | `df.groupby(CAT)[COL].sum()` then pie its `.values` |
| "pandas shortcut" | `counts.plot(kind='pie', autopct='%1.1f%%')` |

**Traps**

- **A pie needs one number per category.** `plt.pie(bank['Net Profit'])` runs without error and draws **100 wedges** — a useless black ring. Always `value_counts()` or `groupby().sum()` first.
- Negative values raise `ValueError: Wedge sizes 'x' must be non negative values`. You cannot pie a profit-and-loss column that has losses.
- `value_counts()` **drops NaN**. If a category column has blanks, your percentages are of the non-missing rows only; use `dropna=False` and say so.
- Without `plt.axis('equal')` the pie is an ellipse whenever the figure is not square. It is a presentation mark; take it.
- `labels=counts.index` on a `CategoricalIndex` (after `pd.cut`) can misbehave — use `counts.index.astype(str)`.
- More than about seven slices is unreadable. If the question gives many categories, say that a bar chart is preferable and draw the bar as well.
- `autopct` shows the share of the **plotted total**, so if you filter rows first the percentages are of the filtered subset. Mention the base.

**Drill**

1. Ex 3: pie of the share of claims by `Insurance Type`, ordered alphabetically, two decimals.
2. Case 2: pie of the number of holdings per `Credit_Rating`, with AAA exploded.
3. Ex 1: pie of **total deposits** per city (not the branch count).

<details><summary>Answers</summary>

```python
# 1
c = ins['Insurance Type'].value_counts().sort_index()
plt.pie(c.values, labels=c.index, autopct='%1.2f%%', startangle=90)
plt.title('Share of Claims by Insurance Type'); plt.axis('equal'); plt.show()

# 2
c = port['Credit_Rating'].value_counts()
plt.pie(c.values, labels=c.index, autopct='%1.1f%%', startangle=90,
        explode=[0.1 if r == 'AAA' else 0 for r in c.index])
plt.title('Holdings by Credit Rating'); plt.axis('equal'); plt.show()

# 3
g = bank.groupby('City')['Total Deposits'].sum()
plt.pie(g.values, labels=g.index, autopct='%1.1f%%', startangle=90)
plt.title('Share of Total Deposits by City'); plt.axis('equal'); plt.show()
```

</details>

## P12.10 — Line chart with several series and a date axis

**Exam phrasings**

- "Line chart: Plot Reliance Close, MA20 and MA50 during 2022 on the same chart" (Case 1 Q14A)
- "Hint: Use three plt.plot() commands followed by title, axes labels, legend and grid" (Case 1 Q14A, verbatim)
- "Line chart: Wealth Index of Reliance, TCS and Infosys for the common period" (Case 1 Q15, top-left)
- "plot the closing price over time"
- "plot three series on the same axes with a legend"

**Core idea.** One `plt.plot(x, y, label='...')` per series, all before a single `plt.legend()`.
Every `plot` call after the first draws onto the **same** axes — that is what "on the same chart"
means. With dates on the x-axis add `plt.xticks(rotation=45)`.

**Template**

```python
plt.figure(figsize=(11, 5.5))
plt.plot(df.index, df[COL1], label='COL1')
plt.plot(df.index, df[COL2], label='COL2', linestyle='--')
plt.plot(df.index, df[COL3], label='COL3', linestyle=':')
plt.title('TITLE')
plt.xlabel('Date'); plt.ylabel('Y LABEL')
plt.legend()                              # needs label= on at least one series
plt.grid(True, linestyle='--', alpha=0.5)
plt.xticks(rotation=45)                   # dates are long; rotate them
plt.tight_layout(); plt.show()
```

**Worked 1** — Case 1 Q14A. Build the moving averages with `rolling`, slice 2022 with
`.loc['2022']` (works because the index is a `DatetimeIndex`), then three `plot` calls.

```python
X = INT + "Case 1/Integrated_Pandas_Matplotlib_Stock_Practice.xlsx"
rel = pd.read_excel(X, sheet_name="Reliance").set_index('Date')
rel['MA20'] = rel['Close'].rolling(20).mean()
rel['MA50'] = rel['Close'].rolling(50).mean()

r22 = rel.loc['2022']                      # string slice on a DatetimeIndex
print("rows in 2022:", len(r22))
print(r22[['Close', 'MA20', 'MA50']].tail(2).round(2).to_string())

plt.figure(figsize=(11, 5.5))
plt.plot(r22.index, r22['Close'], label='Close')
plt.plot(r22.index, r22['MA20'], label='MA20', linestyle='--')
plt.plot(r22.index, r22['MA50'], label='MA50', linestyle=':')
plt.title('Reliance Close with MA20 and MA50 (2022)')
plt.xlabel('Date'); plt.ylabel('Price (Rs.)')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5)
plt.xticks(rotation=45)
plt.tight_layout(); plt.show()
```

```text
rows in 2022: 254
              Close     MA20     MA50
Date
2022-12-29  2617.74  2481.72  2373.30
2022-12-30  2583.87  2494.59  2377.82
```

![Line chart of Reliance close price with 20-day and 50-day moving averages during 2022](/figures/12-line-reliance-ma.png)

**Worked 2** — the wealth index that Case 1 Q15 puts in the top-left panel. "Rs.100 invested" =
cumulative product of `1 + return`, times 100.

```python
S, E = '2021-01-01', '2022-12-30'          # the period all three sheets cover
def wealth(d):
    r = d.loc[S:E, 'Close'].pct_change().fillna(0)
    return (1 + r).cumprod() * 100

wi = pd.DataFrame({'Reliance': wealth(rel), 'TCS': wealth(tcs), 'Infosys': wealth(inf)})
print(wi.tail(1).round(2).to_string())

plt.figure(figsize=(11, 5.5))
plt.plot(wi.index, wi['Reliance'], label='Reliance')
plt.plot(wi.index, wi['TCS'], label='TCS')
plt.plot(wi.index, wi['Infosys'], label='Infosys')
plt.axhline(100, color='grey', linestyle='--', linewidth=1)    # the starting capital
plt.title('Wealth Index of Rs.100 Invested (2021-2022)')
plt.xlabel('Date'); plt.ylabel('Wealth Index')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5)
plt.xticks(rotation=45)
plt.tight_layout(); plt.show()
```

```text
            Reliance     TCS  Infosys
Date
2022-12-30     109.4  146.25     86.6
```

![Line chart of the wealth index of three stocks with a reference line at 100](/figures/12-line-wealth-index.png)

Rs.100 becomes Rs.146.25 in TCS, Rs.109.40 in Reliance and Rs.86.60 in Infosys — that one line is
the whole interpretation.

**Finding "the common period" honestly.** The three sheets do not cover the same dates, so print
the ranges before you pick `S` and `E`:

```python
for n, d in [('Reliance', rel), ('TCS', tcs), ('Infosys', inf)]:
    print(f"{n:9s} rows={len(d):4d}  {d.index.min().date()} .. {d.index.max().date()}")
common = rel.index.intersection(tcs.index).intersection(inf.index)
print("common dates:", len(common), "from", common.min().date(), "to", common.max().date())
```

```text
Reliance  rows=1022  2019-01-01 .. 2022-12-30
TCS       rows=1024  2020-01-01 .. 2023-12-29
Infosys   rows=1026  2021-01-01 .. 2024-12-31
common dates: 492 from 2021-01-01 to 2022-12-30
```

The overlap is 2021-01-01 to 2022-12-30, and only **492** dates are present in all three sheets
(the union over that window is 521 rows). Slicing with `.loc['2021-01-01':'2022-12-30']` keeps all
521 and leaves `NaN` where a stock did not trade — matplotlib simply breaks the line there, which
is acceptable. For a gap-free version use `wi.loc[common]`.

The lecture demo sheet is the minimal three-series case, with markers:

```python
lc = pd.read_excel(W, sheet_name="LineChart")
print(lc)
plt.figure(figsize=(8, 5))
plt.plot(lc['Month'], lc['Reliance'], marker='o', label='Reliance')
plt.plot(lc['Month'], lc['TCS'], marker='s', linestyle='--', label='TCS')
plt.plot(lc['Month'], lc['Infosys'], marker='^', linestyle=':', color='green', label='Infosys')
plt.title('Monthly Closing Price of Three Stocks')
plt.xlabel('Month'); plt.ylabel('Price')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
  Month  Reliance   TCS  Infosys
0   Jan      2800  3900     1500
1   Feb      2840  3950     1520
2   Mar      2780  3880     1485
3   Apr      2860  4020     1550
4   May      2910  4100     1590
5   Jun      2950  4150     1620
```

![Line chart of three stocks over six months with circle, square and triangle markers](/figures/12-line-demo.png)

**Variants**

| If the question says | Change to |
| --- | --- |
| "plot the Series directly" | `plt.plot(s)` — a Series plots its index on x automatically |
| "dashed / dotted / dash-dot" | `linestyle='--'` / `':'` / `'-.'` |
| "mark each observation" | `marker='o'` (`o s ^ v D x +`) |
| "thicker line" | `linewidth=2` |
| "shorthand format string" | `plt.plot(x, y, 'r--o')` = red, dashed, circles |
| "only 2022" | `.loc['2022']`; a single month is `.loc['2022-03']` |
| "labels overlap" | `plt.xticks(rotation=45)`, or `rotation=45, ha='right'` |
| "show only some dates on the axis" | `plt.xticks(df.index[::20], rotation=45)` |
| "shade the area under the line" | `plt.fill_between(df.index, df[COL], alpha=0.3)` |
| "two different scales" | `ax2 = plt.gca().twinx()` then `ax2.plot(...)` — and say why |
| "mark the mean / a threshold" | `plt.axhline(value, color='red', linestyle='--')` |
| "pandas shortcut" | `df[[COL1, COL2]].plot(figsize=(11, 5))` — draws both with a legend |

**Traps**

- `plt.legend()` with no `label=` anywhere prints `UserWarning: No artists with labels found to put in legend.` and draws an empty box.
- **Sort by date first.** `plt.plot` joins points in row order, so unsorted dates give a zig-zag scribble. `df.sort_index()` or `sort_values('Date')`.
- Dates read as **strings** are plotted as evenly spaced categories, not as time. Use `parse_dates=['Date']` or `pd.to_datetime`, and remember `dayfirst=True` for `DD-MM-YYYY` files.
- `rolling(20)` leaves the first 19 rows `NaN`, and `rolling(50)` the first 49. That is why MA50 starts later than the price — do not "fix" it by filling.
- `.loc['2022']` needs a `DatetimeIndex`. On a plain integer index it raises `KeyError`.
- One `plt.figure()` per chart. Two `plt.plot` calls with a `plt.show()` between them give two separate charts, not one with two lines.

**Drill**

1. Plot Reliance `Close` and `High` for March 2022 on one chart with a legend.
2. Plot the demo sheet's `MultipleGraphs` columns `Y1`, `Y2`, `Y3` against `X`, each with a different marker.

<details><summary>Answers</summary>

```python
# 1
m = rel.loc['2022-03']
plt.figure(figsize=(10, 5))
plt.plot(m.index, m['Close'], label='Close', marker='o')
plt.plot(m.index, m['High'], label='High', linestyle='--')
plt.title('Reliance Close and High, March 2022')
plt.xlabel('Date'); plt.ylabel('Price (Rs.)')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5); plt.xticks(rotation=45)
plt.tight_layout(); plt.show()

# 2
mg = pd.read_excel(W, sheet_name="MultipleGraphs")
for col, mk in zip(['Y1', 'Y2', 'Y3'], ['o', 's', '^']):
    plt.plot(mg['X'], mg[col], marker=mk, label=col)
plt.title('Three series'); plt.xlabel('X'); plt.ylabel('Value')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

</details>

## P12.11 — Grouped and stacked bar charts

**Exam phrasings**

- "compare the three stocks month by month using a grouped bar chart"
- "plot the quarterly figures for each region side by side"
- "show the composition of the total as a stacked bar chart"
- "plot two series as bars next to each other"

**Core idea.** `plt.bar` can only put one bar at each x position, so for several series you must
**shift x by hand**. Make numeric positions with `np.arange`, offset each series by the bar width,
then relabel the ticks with `plt.xticks(x, names)`. For a stacked bar you do not shift x at all —
you raise the bottom with `bottom=`.

**Template**

```python
import numpy as np

x = np.arange(len(df))            # 0, 1, 2, ... one slot per category
w = 0.25                          # bar width; n series x w should be < 1

plt.figure(figsize=(9, 5))
plt.bar(x - w, df[S1], width=w, label='S1')     # grouped: shift left
plt.bar(x,     df[S2], width=w, label='S2')     #          centre
plt.bar(x + w, df[S3], width=w, label='S3')     #          shift right
plt.xticks(x, df[CAT_COL])        # put the real names back on the axis
plt.title('TITLE'); plt.xlabel('CAT_COL'); plt.ylabel('Value')
plt.legend(); plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

**Worked** — three series from the demo `LineChart` sheet, first side by side then stacked.

```python
import numpy as np
lc = pd.read_excel(W, sheet_name="LineChart")
print(lc)

x = np.arange(len(lc))
w = 0.25
plt.figure(figsize=(9, 5))
plt.bar(x - w, lc['Reliance'], width=w, label='Reliance')
plt.bar(x,     lc['TCS'],      width=w, label='TCS')
plt.bar(x + w, lc['Infosys'],  width=w, label='Infosys')
plt.xticks(x, lc['Month'])
plt.title('Grouped bar: three stocks by month')
plt.xlabel('Month'); plt.ylabel('Price'); plt.legend()
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
  Month  Reliance   TCS  Infosys
0   Jan      2800  3900     1500
1   Feb      2840  3950     1520
2   Mar      2780  3880     1485
3   Apr      2860  4020     1550
4   May      2910  4100     1590
5   Jun      2950  4150     1620
```

![Grouped bar chart with three bars per month for Reliance, TCS and Infosys](/figures/12-bar-grouped.png)

```python
plt.figure(figsize=(9, 5))
plt.bar(lc['Month'], lc['Reliance'], label='Reliance')
plt.bar(lc['Month'], lc['TCS'], bottom=lc['Reliance'], label='TCS')
plt.bar(lc['Month'], lc['Infosys'], bottom=lc['Reliance'] + lc['TCS'], label='Infosys')
plt.title('Stacked bar: combined value by month')
plt.xlabel('Month'); plt.ylabel('Stacked price'); plt.legend()
plt.tight_layout(); plt.show()
```

![Stacked bar chart of the three stocks summed month by month](/figures/12-bar-stacked.png)

Each `bottom=` must be the **running total of everything already drawn**, so the third series sits
on `Reliance + TCS`. Get that wrong and the segments overlap.

**The pandas shortcut is almost always faster in an exam.** Build a two-key table with
`crosstab` or `pivot_table`, then let pandas place the bars:

```python
ct = pd.crosstab(ins['Insurance Type'], ins['Claim Status'])
print(ct.to_string())

ax = ct.plot(kind='bar', figsize=(8, 5))            # grouped, legend automatic
ax.set_title('Claims by Insurance Type and Status')
ax.set_xlabel('Insurance Type'); ax.set_ylabel('Number of claims')
plt.tight_layout(); plt.show()

ct.plot(kind='bar', stacked=True, figsize=(8, 5))   # stacked version
plt.tight_layout(); plt.show()
```

```text
Claim Status    Approved  Rejected
Insurance Type
Auto                  10        17
Health                14        17
Home                   5        12
Life                  15        10
```

The same shape from a numeric aggregate rather than counts:

```python
pt = ins.pivot_table(index='Insurance Type', columns='Claim Status',
                     values='Claim Amount', aggfunc='mean').round(0)
print(pt.to_string())
```

```text
Claim Status    Approved  Rejected
Insurance Type
Auto             26344.0   24529.0
Health           24073.0   30450.0
Home             32870.0   27977.0
Life             23396.0   25103.0
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "two series" | offsets `x - w/2` and `x + w/2` with `w = 0.4` |
| "four series" | `w = 0.2` and offsets `-1.5w, -0.5w, +0.5w, +1.5w` |
| "stacked" | keep x fixed, add `bottom=` (cumulative) |
| "100% stacked / share of total" | divide first: `ct.div(ct.sum(axis=1), axis=0)` then `stacked=True` |
| "grouped from a two-key groupby" | `df.groupby([A, B])[COL].mean().unstack().plot(kind='bar')` |
| "horizontal" | `plt.barh(y - w, ...)` with `height=w` instead of `width=w` |
| "value on each bar" | keep the return value: `bars = plt.bar(...)` then `plt.bar_label(bars, fmt='%.0f')` |
| "compare two years side by side" | one series per year, grouped by month |

**Traps**

- Forgetting `plt.xticks(x, names)` leaves 0, 1, 2 ... on the axis. That costs the axis-label mark.
- `width` larger than `1 / n_series` makes the groups overlap. Three series need `w <= 0.33`.
- `bottom=` must be cumulative, not the previous series alone.
- A stacked bar of **averages** is meaningless — you can only stack quantities that add up.
- `unstack()` produces `NaN` for combinations that never occur; `plt.bar` skips them but `bottom=` arithmetic turns them into `NaN` bars. `fillna(0)` first.
- `ct.plot(kind='bar')` rotates the tick labels to 90 degrees by default; add `rot=0` or `rot=45`.

**Drill**

1. Grouped bar of mean `Balance` and mean `Number of Transactions` per `Branch City` (Ex 4). Note the scale problem in one sentence.
2. Stacked bar of the count of Approved and Rejected claims per `Insurance Type`.

<details><summary>Answers</summary>

```python
# 1  - Balance is in tens of thousands, transactions under 60, so one series is invisible.
#      Say so and either use a twin axis or plot them separately.
g = sav.groupby('Branch City')[['Balance', 'Number of Transactions']].mean()
x = np.arange(len(g)); w = 0.4
plt.bar(x - w/2, g['Balance'], width=w, label='Mean Balance')
plt.bar(x + w/2, g['Number of Transactions'], width=w, label='Mean Transactions')
plt.xticks(x, g.index, rotation=45)
plt.title('Balance vs Transactions by City'); plt.legend()
plt.tight_layout(); plt.show()

# 2
ct = pd.crosstab(ins['Insurance Type'], ins['Claim Status'])
ct.plot(kind='bar', stacked=True, figsize=(8, 5), rot=0)
plt.title('Claim Status Composition by Insurance Type')
plt.xlabel('Insurance Type'); plt.ylabel('Number of claims')
plt.tight_layout(); plt.show()
```

</details>

## P12.12 — Subplots: many charts in one figure

**Exam phrasings**

- "Create one single Matplotlib figure containing SIX charts" (Case 1 Q15)
- "Use plt.figure(figsize=(18, 10)) and divide it into a 2-row x 3-column layout using plt.subplot(2, 3, position)" (Case 1 Q15, verbatim)
- "Create one Matplotlib figure with a 2 x 2 layout containing the following visualizations" (Case 2 Part D)
- "Create one figure with a 1 x 3 layout" (Case 3 Figure 1)
- "Every subplot should have an appropriate title. Add x-axis and y-axis labels where meaningful, legends where multiple series appear, and grids where suitable" (Case 1 Q15, verbatim)
- "use plt.tight_layout() to prevent overlaps"

**Core idea — the lecture's state-machine form.** One figure, then for each panel:
`plt.subplot(nrows, ncols, index)` to *select* the panel, then the ordinary chart calls, which land
in whichever panel is currently selected. Index counts **left to right, then down**, starting at 1.
Finish with `plt.tight_layout()` once, then save, then show.

```text
plt.subplot(2, 3, i)       plt.subplot(2, 2, i)     plt.subplot(1, 3, i)
 +-----+-----+-----+        +------+------+          +-----+-----+-----+
 |  1  |  2  |  3  |        |  1   |  2   |          |  1  |  2  |  3  |
 +-----+-----+-----+        +------+------+          +-----+-----+-----+
 |  4  |  5  |  6  |        |  3   |  4   |
 +-----+-----+-----+        +------+------+
```

**Template**

```python
plt.figure(figsize=(18, 10))         # ONE figure, big enough for the grid

plt.subplot(2, 3, 1)                 # select panel 1
plt.plot(...)                        # draw into panel 1
plt.title('Panel 1'); plt.xlabel('...'); plt.ylabel('...')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5)

plt.subplot(2, 3, 2)                 # select panel 2 - previous panel is finished
plt.bar(...)
plt.title('Panel 2'); plt.xlabel('...'); plt.ylabel('...')

# ... panels 3 to 6 ...

plt.suptitle('OVERALL TITLE', fontsize=15)   # optional figure-level title
plt.tight_layout()                            # once, at the end
plt.savefig('Name.png', dpi=110, bbox_inches='tight')
plt.savefig('Name.pdf', bbox_inches='tight')
plt.show()                                    # LAST
```

**Sizing rule of thumb.** About 5 to 6 inches of width per column and 5 inches per row:
2 x 3 -> `figsize=(18, 10)` (the exam states this one), 2 x 2 -> `(14, 10)`,
1 x 3 -> `(18, 5)`, 3 x 1 -> `(8, 14)`.

**Worked 1 — Case 1 Q15, the mandatory 2 x 3 figure, panel by panel as specified.**

```python
# --- prepare everything with pandas FIRST, so the plotting block is uninterrupted
S, E = '2021-01-01', '2022-12-30'                 # common period
def wealth(d):
    r = d.loc[S:E, 'Close'].pct_change().fillna(0)
    return (1 + r).cumprod() * 100
wi_r, wi_t, wi_i = wealth(rel), wealth(tcs), wealth(inf)

top5  = rel['Volume'].nlargest(5)                 # panel 2
ret_r = rel.loc[S:E, 'Return'].dropna()           # panels 3, 5
ret_t = tcs.loc[S:E, 'Return'].dropna()
ret_i = inf.loc[S:E, 'Return'].dropna()
both  = pd.DataFrame({'Reliance': ret_r}).join(pd.DataFrame({'TCS': ret_t}), how='inner')
pos, non = int((ret_i > 0).sum()), int((ret_i <= 0).sum())   # panel 6

print("wealth index final values:", round(wi_r.iloc[-1], 2), round(wi_t.iloc[-1], 2), round(wi_i.iloc[-1], 2))
print("scatter rows:", both.dropna().shape, "| pie counts:", pos, non)

# --- the figure
plt.figure(figsize=(18, 10))

plt.subplot(2, 3, 1)                              # top-left: wealth index line chart
plt.plot(wi_r.index, wi_r.values, label='Reliance')
plt.plot(wi_t.index, wi_t.values, label='TCS')
plt.plot(wi_i.index, wi_i.values, label='Infosys')
plt.title('Wealth Index (Rs.100 invested)')
plt.xlabel('Date'); plt.ylabel('Wealth Index')
plt.legend(); plt.grid(True, linestyle='--', alpha=0.5)
plt.xticks(rotation=45)

plt.subplot(2, 3, 2)                              # top-centre: top-5 volume bars
plt.bar(top5.index.strftime('%Y-%m-%d'), top5.values, color='steelblue')
plt.title('Five Highest-Volume Reliance Days')
plt.xlabel('Date'); plt.ylabel('Volume')
plt.xticks(rotation=45)
plt.grid(True, axis='y', linestyle='--', alpha=0.5)

plt.subplot(2, 3, 3)                              # top-right: histogram
plt.hist(ret_r, bins=20, edgecolor='black')
plt.title('Reliance Daily Returns')
plt.xlabel('Daily return'); plt.ylabel('Frequency')
plt.grid(True, linestyle='--', alpha=0.5)

plt.subplot(2, 3, 4)                              # bottom-left: scatter
plt.scatter(both['Reliance'], both['TCS'], alpha=0.5, s=15)
plt.title('Reliance vs TCS Returns')
plt.xlabel('Reliance return'); plt.ylabel('TCS return')
plt.grid(True, linestyle='--', alpha=0.5)

plt.subplot(2, 3, 5)                              # bottom-centre: box plot
plt.boxplot([ret_r, ret_t, ret_i], tick_labels=['Reliance', 'TCS', 'Infosys'])
plt.title('Daily Returns Comparison')
plt.ylabel('Daily return')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)

plt.subplot(2, 3, 6)                              # bottom-right: pie
plt.pie([pos, non], labels=['Positive', 'Non-positive'], autopct='%1.1f%%', startangle=90)
plt.title('Infosys Return Days')
plt.axis('equal')

plt.suptitle('Comparative Analysis of Reliance, TCS and Infosys', fontsize=15)
plt.tight_layout()
plt.savefig('Stock_Analysis.png', dpi=110, bbox_inches='tight')   # both formats are demanded
plt.savefig('Stock_Analysis.pdf', bbox_inches='tight')
plt.show()
```

```text
wealth index final values: 109.4 146.25 86.6
scatter rows: (500, 2) | pie counts: 249 263
```

![Six-panel 2 by 3 figure: wealth index, top-5 volume bars, return histogram, return scatter, return box plots and a positive-versus-non-positive pie](/figures/12-subplot-2x3-stock.png)

**Worked 2 — Case 2 Part D, the 2 x 2 figure**, in the exact order the question lists
(top-left bar, top-right histogram, bottom-left scatter, bottom-right box plot).

```python
top5h = port.nlargest(5, 'Current_Value')
order = ['AAA', 'AA', 'A']
box = [port.loc[port['Credit_Rating'] == r, 'Current_Value'].values for r in order]
print(top5h[['Holding_ID', 'Issuer', 'Credit_Rating', 'Current_Value']].round(2).to_string(index=False))

plt.figure(figsize=(14, 10))

plt.subplot(2, 2, 1)
plt.bar(top5h['Issuer'], top5h['Current_Value'], color='teal')
plt.title('Five Largest Holdings'); plt.xlabel('Issuer'); plt.ylabel('Current_Value (Rs.)')
plt.xticks(rotation=45, ha='right'); plt.grid(True, axis='y', linestyle='--', alpha=0.5)

plt.subplot(2, 2, 2)
plt.hist(port['Value_Change_pct'], bins=10, edgecolor='black', color='#4C72B0')
plt.title('Distribution of Value_Change_pct (10 bins)')
plt.xlabel('Value change (%)'); plt.ylabel('Holdings')
plt.grid(True, linestyle='--', alpha=0.5)

plt.subplot(2, 2, 3)
plt.scatter(port['Holding_Months'], port['Value_Change_pct'], alpha=0.7, color='darkorange')
plt.axhline(0, color='red', linestyle='--', linewidth=1)
plt.title('Holding Months vs Value Change (%)')
plt.xlabel('Holding_Months'); plt.ylabel('Value_Change_pct')
plt.grid(True, linestyle='--', alpha=0.5)

plt.subplot(2, 2, 4)
plt.boxplot(box, tick_labels=order, patch_artist=True)
plt.title('Current Value by Credit Rating')
plt.xlabel('Credit_Rating'); plt.ylabel('Current_Value (Rs.)')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)

plt.suptitle('Corporate Bond Portfolio Review', fontsize=15)
plt.tight_layout()
plt.show()
```

```text
Holding_ID            Issuer Credit_Rating  Current_Value
     H0018   Vertex Networks           AAA      246147.60
     H0074   Frontier Pharma             A      244002.85
     H0046      Indigo Roads             A      243645.60
     H0020 Zenith Healthcare             A      242670.20
     H0017 Riverstone Pharma             A      241293.60
```

![Four-panel 2 by 2 figure of the bond portfolio: largest holdings, value-change histogram, holding-months scatter and current-value box plots by rating](/figures/12-subplot-2x2-bond.png)

**Worked 3 — Case 3 Figure 1, the 1 x 3 figure.** With one row, `figsize=(18, 5)`.

```python
g = claims.groupby('Policy_Type')['Claim_Amount'].mean()
print(claims['Settlement_Days'].describe().round(2).to_string())
print(g.round(2).to_string())

plt.figure(figsize=(18, 5))

plt.subplot(1, 3, 1)
plt.hist(claims['Settlement_Days'], bins=8, edgecolor='black', color='#55A868')
plt.title('Settlement Days (8 bins)'); plt.xlabel('Settlement_Days'); plt.ylabel('Claims')
plt.grid(True, linestyle='--', alpha=0.5)

plt.subplot(1, 3, 2)
plt.scatter(claims['Sum_Insured'], claims['Claim_Amount'], alpha=0.7)
plt.title('Sum Insured vs Claim Amount'); plt.xlabel('Sum_Insured'); plt.ylabel('Claim_Amount')
plt.grid(True, linestyle='--', alpha=0.5)

plt.subplot(1, 3, 3)
plt.bar(g.index, g.values, color='#8172B2')
plt.title('Average Claim Amount by Policy Type'); plt.xlabel('Policy_Type'); plt.ylabel('Mean Claim_Amount')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)

plt.tight_layout()
plt.show()
```

```text
count    150.00
mean      40.01
std       20.68
min        3.00
25%       22.00
50%       40.50
75%       58.75
max       75.00
Policy_Type
Health      298188.60
Motor       244500.16
Property    485567.72
Travel       81770.07
```

![Three-panel 1 by 3 figure: settlement-days histogram, sum-insured scatter and average claim by policy type](/figures/12-subplot-1x3-claims.png)

Case 3 then asks for **Figure 2** (the status pie, [P12.9](#p129--pie-chart-of-proportions)) and
**Figure 3** (the policy-type box plot, [P12.7](#p127--box-plot-comparing-groups)) as *separate*
figures. "Separate" means a fresh `plt.figure()` and its own `plt.show()` — do not add them as a
fourth and fifth panel.

**The object form.** `fig, axes = plt.subplots(nrows, ncols)` builds all the panels at once and
hands you an array. Every `plt.xxx()` becomes `ax.xxx()`, and the label setters gain `set_`:

| State-machine form | Object form |
| --- | --- |
| `plt.subplot(2, 2, 1)` then `plt.hist(...)` | `axes[0, 0].hist(...)` |
| `plt.title('t')` | `ax.set_title('t')` |
| `plt.xlabel('x')` / `plt.ylabel('y')` | `ax.set_xlabel('x')` / `ax.set_ylabel('y')` |
| `plt.xticks(rotation=45)` | `ax.tick_params(axis='x', rotation=45)` |
| `plt.xlim(0, 10)` | `ax.set_xlim(0, 10)` |
| `plt.suptitle('s')` | `fig.suptitle('s')` |
| `plt.tight_layout()` | `fig.tight_layout()` |
| `plt.savefig('f.png')` | `fig.savefig('f.png')` |

```python
gm = bank.groupby('City')['Net Profit'].mean()
counts = bank['City'].value_counts()

fig, axes = plt.subplots(2, 2, figsize=(12, 9))
axes[0, 0].hist(bank['Customer Satisfaction'], bins=10, edgecolor='black')
axes[0, 0].set_title('Satisfaction'); axes[0, 0].set_xlabel('Score'); axes[0, 0].set_ylabel('Branches')
axes[0, 1].bar(gm.index, gm.values)
axes[0, 1].set_title('Avg Net Profit by City'); axes[0, 1].tick_params(axis='x', rotation=45)
axes[1, 0].scatter(bank['Total Deposits'], bank['Net Profit'], alpha=0.6)
axes[1, 0].set_title('Deposits vs Profit'); axes[1, 0].set_xlabel('Total Deposits'); axes[1, 0].set_ylabel('Net Profit')
axes[1, 1].pie(counts.values, labels=counts.index, autopct='%1.1f%%')
axes[1, 1].set_title('Branch Share by City')
fig.suptitle('Object form: fig, axes = plt.subplots(2, 2)', fontsize=14)
fig.tight_layout()
print("axes shape:", axes.shape, "| type:", type(axes[0, 0]).__name__)
plt.show()
```

```text
axes shape: (2, 2) | type: Axes
```

![Four-panel figure built with the fig, axes = plt.subplots object form](/figures/12-subplots-object-form.png)

The shape of `axes` depends on the grid, which is the usual source of `IndexError`:

```python
f1, a1 = plt.subplots(1, 3)
f2, a2 = plt.subplots(2, 2)
f3, a3 = plt.subplots()
print("subplots(1,3) ->", a1.shape, "| subplots(2,2) ->", a2.shape, "| subplots() ->", type(a3).__name__)
```

```text
subplots(1,3) -> (3,) | subplots(2,2) -> (2, 2) | subplots() -> Axes
```

So index `axes[0]`, `axes[1]`, `axes[2]` for one row; `axes[0, 0]` ... `axes[1, 1]` for a 2 x 2;
and no index at all for a single plot. `plt.subplots(2, 3)` with
`axes = axes.flatten()` lets you write `axes[0]` ... `axes[5]` in reading order.

**Use the state-machine form in the exam.** The question dictates it ("using
`plt.subplot(2, 3, position)`"), and it is what the slides show.

**Variants**

| If the question says | Change to |
| --- | --- |
| "2 rows x 3 columns" | `plt.subplot(2, 3, i)` for `i` in 1..6 |
| "1 x 3" / "3 x 1" | `plt.subplot(1, 3, i)` / `plt.subplot(3, 1, i)` |
| "two charts side by side" | `plt.subplot(1, 2, 1)` and `plt.subplot(1, 2, 2)` |
| "one panel should be twice as wide" | give it two slots: `plt.subplot(2, 2, (1, 2))` |
| "share the y-axis" | `fig, axes = plt.subplots(1, 3, sharey=True)` |
| "one overall title" | `plt.suptitle('...', fontsize=15)` |
| "panels still overlap after tight_layout" | `plt.subplots_adjust(hspace=0.4, wspace=0.3)` |
| "loop over the panels" | `for i, col in enumerate(cols, start=1): plt.subplot(2, 3, i); plt.hist(df[col])` |
| "all the numeric columns at once" | `df.hist(bins=10, figsize=(10, 7))` — pandas builds the grid |
| "save the whole figure" | one `plt.savefig` after `tight_layout` saves all panels together |

**Traps**

- `plt.subplot(2, 3, 7)` raises `ValueError: num must be an integer with 1 <= num <= 6, not 7`. The index is bounded by `nrows * ncols`.
- **Do not mix the two styles.** After `fig, axes = plt.subplots(2, 2)` a bare `plt.title('T')` goes to the *current* axes, which is the **last** panel created:

```python
fig, axes = plt.subplots(2, 2, figsize=(6, 4))
plt.title('THIS TITLE')
print("axes[0,0] title:", repr(axes[0, 0].get_title()))
print("axes[1,1] title:", repr(axes[1, 1].get_title()))
print("plt.gca() is axes[1,1]:", plt.gca() is axes[1, 1])
```

```text
axes[0,0] title: ''
axes[1,1] title: 'THIS TITLE'
plt.gca() is axes[1,1]: True
```

- `plt.figure()` **inside** the panel loop creates a new figure per chart, so you end up with six one-panel figures and an empty grid. One `plt.figure()` only.
- `plt.tight_layout()` goes once, after the last panel. Calling it per panel wastes time and can still leave overlaps.
- Omitting `figsize` gives the 6.4 x 4.8 inch default, and six panels inside it are illegible. The exam hands you `(18, 10)` — use it.
- Each panel needs its **own** title/labels. A single `plt.title()` before the panels titles nothing; after them it titles only the last one.
- `plt.axis('equal')` on a pie panel is per-panel and is needed there, not on the figure.
- `plt.show()` ends the figure. Anything drawn afterwards starts a new one.

**Drill**

1. Build a 1 x 2 figure: histogram of `Customer Satisfaction` and bar of mean `Net Profit` by city.
2. Build a 2 x 2 figure for Exercise 3: histogram of `Claim Amount`, bar of mean claim by type, scatter of `Age` vs `Claim Amount`, pie of `Claim Status`. Add a `suptitle`.

<details><summary>Answers</summary>

```python
# 1
plt.figure(figsize=(12, 5))
plt.subplot(1, 2, 1)
plt.hist(bank['Customer Satisfaction'], bins=10, edgecolor='black')
plt.title('Satisfaction'); plt.xlabel('Score'); plt.ylabel('Branches')
plt.subplot(1, 2, 2)
g = bank.groupby('City')['Net Profit'].mean()
plt.bar(g.index, g.values); plt.xticks(rotation=45)
plt.title('Avg Net Profit by City'); plt.xlabel('City'); plt.ylabel('Net Profit')
plt.tight_layout(); plt.show()

# 2
g = ins.groupby('Insurance Type')['Claim Amount'].mean()
st = ins['Claim Status'].value_counts()
plt.figure(figsize=(14, 10))
plt.subplot(2, 2, 1)
plt.hist(ins['Claim Amount'], bins=10, edgecolor='black')
plt.title('Claim Amount distribution'); plt.xlabel('Claim Amount'); plt.ylabel('Claims')
plt.subplot(2, 2, 2)
plt.bar(g.index, g.values); plt.title('Mean Claim by Type')
plt.xlabel('Insurance Type'); plt.ylabel('Mean Claim Amount')
plt.subplot(2, 2, 3)
plt.scatter(ins['Age'], ins['Claim Amount'], alpha=0.6)
plt.title('Age vs Claim Amount'); plt.xlabel('Age'); plt.ylabel('Claim Amount')
plt.subplot(2, 2, 4)
plt.pie(st.values, labels=st.index, autopct='%1.1f%%', startangle=90)
plt.title('Claim Status'); plt.axis('equal')
plt.suptitle('Insurance Claim Analysis', fontsize=15)
plt.tight_layout(); plt.show()
```

</details>

## P12.13 — Saving the figure as PNG and PDF

**Exam phrasings**

- "save the complete figure as Stock_Analysis.png" (Case 1 Q15)
- "save the same figure as Stock_Analysis.pdf" (Case 1 Q15)
- "export the chart to an image file"
- "save the figure at higher resolution without cutting off the labels"

**Core idea.** `plt.savefig(path)` writes the **current figure** to disk. The file type comes from
the extension, so the same figure goes to both formats with two consecutive calls. `savefig` must
come **before** `plt.show()`.

**Template**

```python
plt.tight_layout()
plt.savefig('Stock_Analysis.png', dpi=300, bbox_inches='tight')
plt.savefig('Stock_Analysis.pdf', bbox_inches='tight')
plt.show()
```

| Argument | What it does | When to use it |
| --- | --- | --- |
| `dpi=300` | dots per inch; raises pixel resolution of raster formats | any PNG/JPG for printing (default is 100) |
| `bbox_inches='tight'` | crops to the drawn content, keeping rotated labels and text | always — it is the fix for chopped-off axis labels |
| `transparent=True` | no white background | slides only |
| `facecolor='white'` | forces a white background | when a style set a dark one |
| `format='pdf'` | overrides the extension | rarely needed |

**Worked** — the same bar chart saved four ways, with the real file sizes.

```python
import os
g = bank.groupby('City')['Net Profit'].mean()
plt.figure(figsize=(8, 5))
plt.bar(g.index, g.values)
plt.title('Average Net Profit by City')
plt.xlabel('City'); plt.ylabel('Average Net Profit (USD)')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("Stock_Analysis.png")
plt.savefig("Stock_Analysis.pdf")
plt.savefig("hi.png", dpi=300)
plt.savefig("tight.png", dpi=300, bbox_inches='tight')
plt.show()

for f in ["Stock_Analysis.png", "Stock_Analysis.pdf", "hi.png", "tight.png"]:
    print(f"{f:20s} {os.path.getsize(f)/1024:,.1f} KB")
```

```text
Stock_Analysis.png   24.5 KB
Stock_Analysis.pdf   14.2 KB
hi.png               96.4 KB
tight.png            95.9 KB
```

One figure, four files. The PDF is a vector file — it stays sharp at any zoom and ignores `dpi`.

**Order matters.** In a notebook `plt.show()` renders the figure and hands it to the inline
backend, which then **closes** it; a `savefig` after that has nothing left to write and produces a
blank canvas. You can reproduce the failure deliberately with `plt.close()`, which is what the
inline backend does for you:

```python
plt.figure(figsize=(8, 5))
plt.bar(g.index, g.values)
plt.close()                        # <- what Jupyter's inline backend does on show()
plt.savefig("blank.png")           # nothing left to save
print("blank.png", round(os.path.getsize("blank.png")/1024, 1), "KB")

plt.figure(figsize=(8, 5))
plt.bar(g.index, g.values)
plt.savefig("good.png")            # correct order
plt.close()
print("good.png ", round(os.path.getsize("good.png")/1024, 1), "KB")
```

```text
blank.png 2.3 KB
good.png  12.9 KB
```

2.3 KB is an empty white rectangle. Rule: **`tight_layout` -> `savefig` -> `show`.**

(In a plain `.py` script with the non-interactive Agg backend, `plt.show()` only warns
`UserWarning: FigureCanvasAgg is non-interactive, and thus cannot be shown` and leaves the figure
open, so `savefig` after `show` happens to still work. Do not rely on that — the exam is marked on
notebook behaviour.)

**Every format matplotlib will write** on this build:

```python
print(sorted(plt.gcf().canvas.get_supported_filetypes()))
```

```text
['eps', 'jpeg', 'jpg', 'pdf', 'pgf', 'png', 'ps', 'raw', 'rgba', 'svg', 'svgz', 'tif', 'tiff', 'webp']
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "as a PDF as well" | a second `plt.savefig('name.pdf')` on the same figure |
| "high resolution" | `dpi=300` (or 600 for print) |
| "the labels are cut off" | `bbox_inches='tight'` |
| "save each subplot separately" | build them as separate figures, or `fig.savefig` per figure |
| "object form" | `fig.savefig('name.png', dpi=300, bbox_inches='tight')` |
| "save into a folder" | `plt.savefig('output/Stock_Analysis.png')` — the folder must already exist |
| "vector graphic for the report" | `.pdf` or `.svg` |

**Traps**

- `savefig` after `show()` in a notebook writes a blank file. This is the single most common lost mark in the capstone.
- No extension (`plt.savefig('chart')`) writes `chart.png` silently — give the extension the question asks for.
- A non-existent directory raises `FileNotFoundError`. Create it or save into the working directory.
- `savefig` saves the **figure**, all panels included; you cannot save one subplot with it.
- `dpi` does nothing for `.pdf`/`.svg` — they are vector formats.
- Text placed outside the axes (see [P12.8](#p128--annotate-median-quartiles-and-outliers-on-a-box-plot)) can be cropped away. `bbox_inches='tight'` keeps what is attached to the figure but not what sits beyond your `xlim`/`ylim`.
- Saving inside a loop without `plt.close()` keeps every figure in memory and eventually prints `RuntimeWarning: More than 20 figures have been opened`.

**Drill**

1. Save the Case 1 2 x 3 figure as `Stock_Analysis.png` at 300 dpi and as `Stock_Analysis.pdf`, both cropped tight, and print the two file sizes.

<details><summary>Answer</summary>

```python
plt.tight_layout()
plt.savefig('Stock_Analysis.png', dpi=300, bbox_inches='tight')
plt.savefig('Stock_Analysis.pdf', bbox_inches='tight')
plt.show()
import os
for f in ['Stock_Analysis.png', 'Stock_Analysis.pdf']:
    print(f, round(os.path.getsize(f) / 1024, 1), 'KB')
```

</details>

## P12.14 — Styling marks: colours, grids, limits, ticks, annotations

**Exam phrasings**

- "add grids where suitable"
- "rotate the x-axis labels so they do not overlap"
- "add a horizontal line at the overall mean"
- "use a different colour for each bar and add a legend in the upper right"
- "add an overall title to the figure"
- "set the y-axis to start at zero"

**Core idea.** These are the cheap marks. Each instruction in the question maps to exactly one
call. Learn the table; it is worth more per minute than any chart.

**The grab-bag**

| Instruction in the question | Call |
| --- | --- |
| "make the chart bigger / 12 by 6" | `plt.figure(figsize=(12, 6))` |
| "use a specific colour" | `color='steelblue'` (name, `#4C72B0`, or `'C0'`) |
| "a different colour for each bar" | `color=['red', 'green', 'blue', 'orange', 'purple']` |
| "make the markers see-through" | `alpha=0.6` (0 = invisible, 1 = solid) |
| "outline the bars/bins" | `edgecolor='black'` |
| "add grid lines" | `plt.grid(True, linestyle='--', alpha=0.5)` |
| "horizontal grid lines only" | `plt.grid(True, axis='y', ...)` |
| "start the y-axis at zero" | `plt.ylim(0, None)` or `plt.ylim(bottom=0)` |
| "limit the x-axis to 0-10" | `plt.xlim(0, 10)` |
| "rotate the tick labels" | `plt.xticks(rotation=45)` or `rotation=45, ha='right'` |
| "relabel the ticks" | `plt.xticks(positions, names)` |
| "show every fifth date" | `plt.xticks(df.index[::5], rotation=45)` |
| "add a legend in the upper right" | `plt.legend(loc='upper right')` |
| "name the legend box" | `plt.legend(title='Claim Status')` |
| "an overall title above all panels" | `plt.suptitle('...', fontsize=15)` |
| "bigger title font" | `plt.title('...', fontsize=14)` |
| "a line at the overall mean" | `plt.axhline(df[COL].mean(), color='red', linestyle='--')` |
| "a vertical line at a threshold" | `plt.axvline(VALUE, color='red', linestyle='--')` |
| "shade a region" | `plt.axhspan(lo, hi, color='grey', alpha=0.2)` |
| "point at the highest bar with an arrow" | `plt.annotate('Highest', xy=(x, y), xytext=(x2, y2), arrowprops=dict(arrowstyle='->'))` |
| "write text on the chart" | `plt.text(x, y, 'string')` |
| "put the value on top of each bar" | `bars = plt.bar(...)` then `plt.bar_label(bars, fmt='%.0f')` |
| "use a nicer default look" | `plt.style.use('ggplot')` |
| "stop the labels overlapping" | `plt.tight_layout()` |

**Worked 1** — one chart carrying six of those instructions at once: reference line, arrow
annotation, `ylim`, rotated ticks, legend in the upper right, y-only grid.

```python
g = bank.groupby('City')['Net Profit'].mean().sort_values(ascending=False)
overall = bank['Net Profit'].mean()
print(g.round(2).to_string())
print("overall mean Net Profit:", round(overall, 2))
print("highest:", g.idxmax(), round(g.max(), 2), "| lowest:", g.idxmin(), round(g.min(), 2))

plt.figure(figsize=(9, 5.5))
bars = plt.bar(g.index, g.values, color='steelblue', edgecolor='black', label='City mean')
plt.axhline(overall, color='red', linestyle='--', linewidth=2,
            label=f'Overall mean = {overall:,.0f}')
plt.annotate(f'Highest: {g.idxmax()}',
             xy=(0, g.iloc[0]), xytext=(0.6, g.iloc[0] * 1.12),
             arrowprops=dict(arrowstyle='->', color='black'))
plt.title('Average Net Profit by City', fontsize=14)
plt.xlabel('City'); plt.ylabel('Average Net Profit (USD)')
plt.ylim(0, g.max() * 1.25)
plt.xticks(rotation=30)
plt.legend(loc='upper right')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()
```

```text
City
New York       554619.28
Los Angeles    548500.29
Houston        526023.58
Chicago        487511.44
Phoenix        400370.74
overall mean Net Profit: 505854.93
highest: New York 554619.28 | lowest: Phoenix 400370.74
```

![Bar chart of average net profit by city with a red mean line, an arrow annotation and a legend](/figures/12-style-annotate.png)

`annotate` takes **two** points: `xy=` is the tip of the arrow (the thing you are pointing at) and
`xytext=` is where the words go. Both are in data coordinates.

**Legend positions** accepted by `loc=`:

```text
['best', 'upper right', 'upper left', 'lower left', 'lower right', 'right',
 'center left', 'center right', 'lower center', 'upper center', 'center']
```

**Worked 2** — `plt.style.use`. One line restyles every chart that follows, so set it once at the
top and reset with `plt.style.use('default')` if you want the plain look back.

```python
print(plt.style.available)

plt.style.use('ggplot')
plt.figure(figsize=(8, 5))
plt.hist(bank['Customer Satisfaction'], bins=10, edgecolor='black')
plt.title("plt.style.use('ggplot')")
plt.xlabel('Customer Satisfaction'); plt.ylabel('Branches')
plt.tight_layout(); plt.show()
plt.style.use('default')          # put it back
```

```text
['Solarize_Light2', '_classic_test_patch', '_mpl-gallery', '_mpl-gallery-nogrid', 'bmh', 'classic', 'dark_background', 'fast', 'fivethirtyeight', 'ggplot', 'grayscale', 'seaborn-v0_8', 'seaborn-v0_8-bright', 'seaborn-v0_8-colorblind', 'seaborn-v0_8-dark', 'seaborn-v0_8-dark-palette', 'seaborn-v0_8-darkgrid', 'seaborn-v0_8-deep', 'seaborn-v0_8-muted', 'seaborn-v0_8-notebook', 'seaborn-v0_8-paper', 'seaborn-v0_8-pastel', 'seaborn-v0_8-poster', 'seaborn-v0_8-talk', 'seaborn-v0_8-ticks', 'seaborn-v0_8-white', 'seaborn-v0_8-whitegrid', 'tableau-colorblind10']
```

![Histogram of customer satisfaction rendered in the ggplot style with a grey background](/figures/12-style-ggplot.png)

**Worked 3 — the two pandas shortcuts from the lecture's function list.** `df.plot(kind=...)` and
`df.hist()` are matplotlib underneath, so you can keep styling the result.

```python
g = bank.groupby('City')['Net Profit'].mean()
ax = g.plot(kind='bar', title='Avg Net Profit by City (pandas shortcut)',
            figsize=(7, 4), color='steelblue')
print("type:", type(ax).__name__)
ax.set_xlabel('City'); ax.set_ylabel('Average Net Profit')
plt.tight_layout(); plt.show()
```

```text
type: Axes
```

The figure for that call is in [P12.3](#p123--bar-chart-of-group-means). `df.hist()` goes further
and builds the whole grid for you — one histogram per numeric column:

```python
axarr = bank[['Customers', 'Total Deposits', 'Net Profit', 'Customer Satisfaction']] \
        .hist(bins=10, figsize=(10, 7), edgecolor='black')
print("shape:", axarr.shape, "| titles:", [a.get_title() for row in axarr for a in row])
plt.suptitle('df.hist() on four numeric columns')
plt.tight_layout(); plt.show()
```

```text
shape: (2, 2) | titles: ['Customers', 'Total Deposits', 'Net Profit', 'Customer Satisfaction']
```

![Two-by-two grid of histograms produced by df.hist() on four numeric columns](/figures/12-pandas-df-hist.png)

`kind=` accepts `'line'`, `'bar'`, `'barh'`, `'hist'`, `'box'`, `'pie'`, `'scatter'`, `'area'`,
`'kde'`. It is quick, but the exam asks for `plt.bar` / `plt.hist` by name — use the shortcut only
when the question does not prescribe the call.

**Traps**

- `plt.grid()` with no arguments **toggles**. Calling it twice turns the grid back off. Use `plt.grid(True, ...)`.
- `plt.legend()` needs `label=` on a plotted series, otherwise `UserWarning: No artists with labels found to put in legend.`
- `plt.xticks(rotation=45)` must come **after** the plotting call that created the ticks.
- `plt.xticks(names)` with one argument is read as *positions*, not labels. Pass both: `plt.xticks(range(len(names)), names)`.
- `plt.ylim(0, g.max())` clips the tallest bar flat. Leave headroom: `g.max() * 1.15`.
- `plt.style.use(...)` is **global and sticky** for the rest of the session. Reset with `'default'`.
- `plt.suptitle` plus `tight_layout` can still collide; add `plt.subplots_adjust(top=0.92)` if the overall title sits on a panel title.
- `alpha` on a bar chart with `edgecolor='black'` fades the outline too. Set `edgecolor` after, or keep `alpha` for scatter only.
- `annotate` with `xytext` outside the axes puts the text off-screen. Extend `ylim`/`xlim` first.

**Drill**

1. Take the Ex 4 bar of mean `Balance` by `Branch City`: sort it descending, colour each bar differently, add value labels, a red dashed line at the overall mean, a legend in the upper right, and start y at zero.
2. Draw the Ex 1 satisfaction histogram with `fivethirtyeight` style and a vertical line at the median.

<details><summary>Answers</summary>

```python
# 1
g = sav.groupby('Branch City')['Balance'].mean().sort_values(ascending=False)
m = sav['Balance'].mean()
plt.figure(figsize=(9, 5))
bars = plt.bar(g.index, g.values, color=['#4C72B0', '#55A868', '#C44E52', '#8172B2', '#CCB974'],
               edgecolor='black', label='City mean')
plt.bar_label(bars, fmt='%.0f', padding=3)
plt.axhline(m, color='red', linestyle='--', label=f'Overall mean = {m:,.0f}')
plt.title('Average Balance by Branch City'); plt.xlabel('Branch City'); plt.ylabel('Average Balance (USD)')
plt.ylim(0, g.max() * 1.2); plt.xticks(rotation=30); plt.legend(loc='upper right')
plt.grid(True, axis='y', linestyle='--', alpha=0.5)
plt.tight_layout(); plt.show()

# 2
plt.style.use('fivethirtyeight')
plt.figure(figsize=(8, 5))
plt.hist(bank['Customer Satisfaction'], bins=10, edgecolor='black')
plt.axvline(bank['Customer Satisfaction'].median(), color='black', linestyle='--',
            label=f"median = {bank['Customer Satisfaction'].median():.2f}")
plt.title('Customer Satisfaction'); plt.xlabel('Score'); plt.ylabel('Branches')
plt.legend(); plt.tight_layout(); plt.show()
plt.style.use('default')
```

</details>

## Write-up answers — interpretation sentences

Every chart question is followed, explicitly or implicitly, by "what does it show". Two sentences
are enough, but they must contain **numbers read off the chart**. Use these skeletons; the bold
parts are what you substitute.

| Chart | Sentence 1 — shape | Sentence 2 — consequence |
| --- | --- | --- |
| Histogram | "**COL** ranges from **MIN** to **MAX**, is centred near **MEDIAN**, and the distribution is (symmetric / right-skewed / flat with no clear mode)." | "The tallest bin holds **N** of the **TOTAL** observations, so the most common **COL** is around **VALUE**." |
| Bar of group means | "Average **COL** is highest for **BEST** (**VALUE**) and lowest for **WORST** (**VALUE**), a gap of **DIFF** (**PCT**% of the lowest)." | "The remaining categories sit within **RANGE** of the overall mean of **MEAN**, so **BEST**/**WORST** are the only ones worth acting on." |
| Bar of top N | "The five largest **COL** values are **V1** ... **V5**, all recorded by **LABELS**." | "The largest is **PCT**% above the fifth, so the ranking is (dominated by one observation / tightly bunched)." |
| Scatter | "The points form (a rising band / a falling band / a formless cloud); the correlation is **r**." | "So **X** (does / does not) help predict **Y** in this dataset." |
| Box plot | "**GROUP** has the highest median (**MED**) and **GROUP2** the widest box (IQR **IQR**), so **GROUP2** is the least consistent." | "**N** observations fall beyond the 1.5 x IQR fences, all in **GROUP3**." |
| Pie | "**CAT1** accounts for **PCT**% of the **TOTAL** records, **CAT2** for **PCT**%; the smallest share is **CATn** at **PCT**%." | "The distribution across categories is (balanced / concentrated in **CAT1**)." |
| Line | "**SERIES** rose/fell from **START** to **END** over the period, a change of **PCT**%." | "**BEST** outperformed the other series throughout / crossed above **OTHER** in **MONTH**." |

**Model answers for the four Matplotlib exercises.** These are the real numbers; the figures are
in the pattern sections above.

> **Ex 1 Q1 (histogram of Customer Satisfaction).** Scores run from 1.14 to 9.96 with a median of
> 6.14, and the ten bins hold between 8 and 14 branches each. The distribution is essentially flat
> with no mode: satisfaction is spread uniformly across the whole 1-10 scale rather than clustering
> at a typical level, so there is no "normal" satisfaction score for this bank.

> **Ex 1 Q2 (bar of average Net Profit by City).** New York has the highest average net profit
> (554,619) and Phoenix the lowest (400,371) — a gap of 154,249, or 39% of the lowest city, around
> an overall mean of 505,855. The other three cities lie between 487,511 and 548,500, so Phoenix is
> the single clear underperformer and the only one worth investigating.

> **Ex 1 Q3 (scatter of Total Deposits vs Net Profit).** The points fill the whole rectangle with
> no visible slope, and the correlation is -0.008. Total deposits therefore carry no information
> about net profit in this dataset: branch profitability is not explained by deposit size, and
> bubble size (customers) and colour (satisfaction) show no pattern either.

> **Ex 1 Q4 (box plot of Total Loans).** The median loan book is 2,517,402 with a quartile range of
> 1,662,358 to 3,289,420, giving an IQR of 1,627,062 — a spread of roughly 65% of the median, so
> branches differ widely in lending volume. Applying the 1.5 x IQR rule gives fences at -778,235
> and 5,730,013; no branch lies outside them, so there are no outliers.

> **Ex 1 Q5 (pie of branches by city).** Houston holds the largest share of branches (26 of 100,
> 26.0%), followed by Los Angeles (21.0%) and Phoenix (19.0%); Chicago is smallest at 16.0%. With
> 100 branches the counts equal the percentages. The network is spread fairly evenly, so no single
> city dominates the bank's footprint.

> **Ex 2 Q2 (bar of average Credit Limit by Age Group).** Age Group is not a column in
> `credit_card_usage.csv`, so I created it with `pd.cut` using edges 18/30/40/50/60/70. Average
> credit limit falls steadily across the bands, from 32,129 for 18-30 to 24,221 for 61-70 — a 25%
> decline. The underlying correlation between age and credit limit is only -0.198 and the bands hold
> just 17 to 24 customers each, so the apparent trend is weak and should not be read as a policy.

> **Ex 3 Q2 and Q4 (claim amount by insurance type).** Mean claim amounts are close together:
> Home is highest at 29,416 and Life lowest at 24,079, a gap of 22% around an overall mean of
> 26,371. The box plot adds what the bars hide — Life has the widest box (IQR 27,362 against about
> 19,000-20,000 for the others) and the lowest median (22,834), so Life claims are the least
> predictable even though their average is the smallest. No group contains any 1.5 x IQR outliers.

> **Ex 3 Q5 (pie of claim status).** 56 of the 100 claims were rejected (56.0%) and 44 approved
> (44.0%), so fewer than half of all claims are paid. Approval is close to a coin toss, which is
> worth flagging to the claims team.

> **Ex 4 Q1-Q5 (savings accounts).** Balances run from 1,854 to 99,506 with a median of 53,372 and
> a skew of -0.14, i.e. an almost symmetric, flat distribution. Average balance is highest in
> Phoenix (58,494) and lowest in Chicago (47,201), a 24% gap. Age explains nothing: r(Age, Balance)
> = 0.04, and the transaction-count box plots across the six age bands have overlapping boxes with
> medians between 36.5 and 63.5, so transaction activity does not vary systematically with age.

**Writing an honest reading of a featureless scatter.** All four exercise CSVs are randomly
generated, so three of the four "analyze the relationship" questions have **no relationship to
find**. The marks are for describing what is actually there:

| r | Words to use | Words to avoid |
| --- | --- | --- |
| below 0.10 | "no relationship", "a formless cloud", "independent" | "slight upward trend" |
| 0.10 to 0.30 | "very weak", "not usable for prediction" | "clear", "drives" |
| 0.30 to 0.60 | "moderate" | "causes" |
| above 0.60 | "strong" | "causes" (still) |

A safe three-sentence answer for a featureless scatter:

> The scatter plot shows the points spread across the full range of both axes with no upward or
> downward band and no clustering. The correlation coefficient is **-0.008**, effectively zero, which
> confirms what the picture shows. I therefore conclude that **Total Deposits** and **Net Profit**
> are unrelated in this dataset, and that a branch's deposit base cannot be used to predict its
> profitability.

Two further honesty points that carry marks:

- **Correlation is not causation**, even for Case 3, where `Sum_Insured` and `Claim_Amount` really do move together (r = 0.644). Larger policies allow larger claims; that is a ceiling effect, not proof that insuring more causes claiming more.
- **Say when the groups are too small.** Several of these bands hold fewer than 20 rows (Ex 2 age bands: 21/24/19/17/19; Ex 3 Home: 17 claims). One sentence — "with only 17 observations in the Home group this comparison is indicative, not conclusive" — is worth more than an extra chart.

## Chapter cheat sheet

**The six chart calls.** Prepare the numbers with pandas first, then one call.

```python
import pandas as pd
import matplotlib.pyplot as plt

# 1. HISTOGRAM  - "visualize the distribution of COL"
plt.hist(df[COL], bins=10, edgecolor='black')

# 2. BAR OF GROUP MEANS  - "compare the average COL by GROUP"
g = df.groupby(GROUP)[COL].mean()
plt.bar(g.index, g.values)
#    top N variant: t = df.nlargest(5, COL); plt.bar(t[LABEL], t[COL])

# 3. SCATTER  - "analyze the relationship between X and Y"
plt.scatter(df[X], df[Y], s=df[SIZE]/10, c=df[COLOUR], cmap='viridis', alpha=0.7)
plt.colorbar(label=COLOUR)                      # only when you pass c=

# 4. BOX PLOT  - "explore the variability in COL by GROUP"
groups = [x[COL].values for _, x in df.groupby(GROUP)]
labels = [k for k, _ in df.groupby(GROUP)]
plt.boxplot(groups, tick_labels=labels, showmeans=True)

# 5. PIE  - "visualize the proportion of CAT"
c = df[CAT].value_counts()
plt.pie(c.values, labels=c.index, autopct='%1.1f%%', startangle=90)
plt.axis('equal')

# 6. LINE  - "plot COL over time"
plt.plot(df.index, df[COL1], label='COL1')
plt.plot(df.index, df[COL2], label='COL2', linestyle='--')
plt.legend(); plt.xticks(rotation=45)
```

**The labelling block that follows every chart** (free marks — never skip it):

```python
plt.title('TITLE'); plt.xlabel('X'); plt.ylabel('Y')
plt.legend()                                   # only if a series has label=
plt.grid(True, linestyle='--', alpha=0.5)      # axis='y' for bars/boxes
plt.tight_layout()
plt.savefig('name.png', dpi=300, bbox_inches='tight')   # BEFORE show
plt.show()                                              # LAST
```

**The subplot skeleton** (Case 1 Q15 is exactly this with six panels):

```python
plt.figure(figsize=(18, 10))          # 2x3 -> (18,10); 2x2 -> (14,10); 1x3 -> (18,5)

plt.subplot(2, 3, 1); ...chart...; plt.title('...'); plt.xlabel('...'); plt.ylabel('...')
plt.subplot(2, 3, 2); ...chart...; plt.title('...')
plt.subplot(2, 3, 3); ...chart...; plt.title('...')
plt.subplot(2, 3, 4); ...chart...; plt.title('...')
plt.subplot(2, 3, 5); ...chart...; plt.title('...')
plt.subplot(2, 3, 6); ...chart...; plt.title('...')

plt.suptitle('OVERALL TITLE', fontsize=15)
plt.tight_layout()
plt.savefig('Stock_Analysis.png', dpi=110, bbox_inches='tight')
plt.savefig('Stock_Analysis.pdf', bbox_inches='tight')
plt.show()
```

Object form, if the question does not prescribe `plt.subplot`:
`fig, axes = plt.subplots(2, 3, figsize=(18, 10))` -> `axes[0, 0].hist(...)`,
`axes[0, 0].set_title(...)`, `fig.tight_layout()`, `fig.savefig(...)`. **Never mix the two.**

**One-line lookups**

| Need | Code |
| --- | --- |
| Which chart? | distribution -> hist; average by -> bar; relationship -> scatter; variability -> box; proportion -> pie; over time -> line |
| Group column missing | `df['Age Group'] = pd.cut(df['Age'], bins=[18,30,40,50,60,70], labels=['18-30','31-40','41-50','51-60','61-70'])` |
| Bin order, not frequency order | `.value_counts().sort_index()` |
| Business order for boxes | build from `order = ['AAA','AA','A']`, not from `groupby` |
| Five-number summary | `s.quantile([0, .25, .5, .75, 1])` or `s.describe()` |
| Outliers | `iqr = q3-q1; s[(s < q1-1.5*iqr) \| (s > q3+1.5*iqr)]` |
| Correlation for the write-up | `df[X].corr(df[Y])` |
| Text on the chart | `plt.text(x, y, f'Median = {med:,.0f}')` |
| Arrow to a point | `plt.annotate('label', xy=(x,y), xytext=(x2,y2), arrowprops=dict(arrowstyle='->'))` |
| Reference line | `plt.axhline(value, color='red', linestyle='--')` / `plt.axvline(...)` |
| Value on each bar | `bars = plt.bar(...)`; `plt.bar_label(bars, fmt='%.0f')` |
| Rotate labels | `plt.xticks(rotation=45, ha='right')` |
| Grouped bars | `x = np.arange(n)`; `plt.bar(x-w, s1, width=w)`, `plt.bar(x, s2, width=w)`; `plt.xticks(x, names)` |
| Stacked bars | `plt.bar(names, s1)`; `plt.bar(names, s2, bottom=s1)` |
| Pandas shortcuts | `g.plot(kind='bar')`, `df.hist(bins=10)`, `df.boxplot(column=COL, by=GROUP)` |
| Restyle everything | `plt.style.use('ggplot')` ... `plt.style.use('default')` |
| Chart missing in Jupyter | `%matplotlib inline` in the first cell |

**The five errors that cost the most marks**

1. `plt.savefig` written **after** `plt.show()` — the file is blank.
2. `plt.boxplot(df, GROUP_COL)` — boxplot needs a **list of arrays**, built by comprehension.
3. Plotting raw rows where a `groupby` was needed — `plt.bar` cannot average anything.
4. Missing per-panel titles and axis labels in a subplot figure — six panels, six sets of labels.
5. Inventing a trend in a scatter whose correlation is 0.00 — describe the cloud instead.
