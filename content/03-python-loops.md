---
id: 03-python-loops
part: "Part I — Core Python"
title: "Loops, Classification and Running Totals"
blurb: "One skeleton answers every list-classification question: loop, label with if/elif/else, count, total, average — plus the midterm's parallel-list string-cleaning variant."
order: 30
covers:
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercise 2 (Bank Branch Deposit Analysis)"
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercise 4 (Daily Stock Return Classification)"
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercise 5 (Loan Repayment Delay Analysis)"
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercise 7 (Insurance Claim Screening)"
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercise 9 (Credit-Risk Score Review)"
  - "BIFS 2026-27 ITP MT QP — Q2 (20 marks)"
patterns:
  - id: P3.1
    title: "The loop-classify-count-total skeleton"
    phrasings:
      - "Use a loop to process every deposit. Display each deposit and classify it as Small, Medium or Large"
      - "Process all observations using a loop. For each return, display the value and classify it"
      - "Process every score using a loop and classify it as Low Risk, Moderate Risk or High Risk"
      - "For every claim, display the claim amount and its classification"
      - "write a program that loops over the list, labels each value and prints a summary"
      - "after all records have been processed, calculate and display the number, total and average"
  - id: P3.2
    title: "Choose the right iteration form: value, index, enumerate, zip"
    phrasings:
      - "Process every customer record using a loop"
      - "process every record in the list"
      - "display the record number along with the value"
      - "the names, the feedback and the ratings are in three separate lists"
      - "use the index position to read the corresponding entry from the other list"
      - "iterate over two lists at the same time"
  - id: P3.3
    title: "Running total, counter and average without sum()"
    phrasings:
      - "Do not use sum() to calculate the total. Build the total inside the loop"
      - "calculate and display the total amount deposited and the average deposit amount"
      - "total number of delayed days across all borrowers"
      - "total of all risk scores and average risk score"
      - "sum of all daily returns"
      - "find the average without using the built-in functions"
  - id: P3.4
    title: "The if / elif / else classification ladder and threshold wording"
    phrasings:
      - "Small Deposit if the amount is less than Rs. 75,000"
      - "Medium Deposit if the amount is from Rs. 75,000 to Rs. 1,50,000, inclusive"
      - "Gain if return is greater than 0% but not more than 2%"
      - "Loss if return is less than 0% but not less than -2%"
      - "No addition for up to 2 completed years"
      - "No Change if return is exactly 0%"
      - "Moderate if above 1% but not above 2%"
  - id: P3.5
    title: "Collecting matching records into result lists"
    phrasings:
      - "Store the names of customers giving positive feedback in a separate list"
      - "Store the names of customers giving negative feedback in another list"
      - "Count the number of positive and negative responses"
      - "Print both final lists"
      - "make a list of all borrowers who defaulted"
      - "display the names of the customers in the High Risk band"
  - id: P3.6
    title: "Conditional totals and per-band subtotals"
    phrasings:
      - "total value of only those claims requiring Senior Review"
      - "total value of all claims"
      - "number of claims requiring Senior Review"
      - "total amount of the deposits classified as Large"
      - "total and average for each category"
      - "what percentage of the total book is in the highest band"
  - id: P3.7
    title: "Cleaning text: strip, title, lower, split and join"
    phrasings:
      - "Remove extra spaces from each customer name and feedback entry"
      - "Convert each customer name to title case"
      - "clean the names before comparing them"
      - "the entries contain leading and trailing blanks"
      - "standardise the case of the text column"
      - "remove the double spaces inside the string"
  - id: P3.8
    title: "Keyword classification with in, or and any()"
    phrasings:
      - "Classify the feedback as Positive if the rating is 4 or above, or the feedback contains excellent or helpful"
      - "Classify the feedback as Negative if the rating is 2 or below, or the feedback contains issue, not working or waiting"
      - "Classify all other feedback as Neutral"
      - "check whether the remark contains any of the following words"
      - "flag the complaint if it mentions fraud, blocked or bounced"
      - "the rule is satisfied if either condition holds"
  - id: P3.9
    title: "while loops and sentinel-controlled input"
    phrasings:
      - "keep accepting deposits until the user enters 0"
      - "keep asking until a valid rating between 1 and 5 is entered"
      - "repeat the process until the balance reaches the target"
      - "the number of entries is not known in advance"
      - "use a while loop instead of a for loop"
  - id: P3.10
    title: "Aligned output with f-strings"
    phrasings:
      - "Display the deposit and its classification appropriately"
      - "Display results up to two decimal places"
      - "Display all monetary values to two decimal places"
      - "print a neat table of the values and their labels"
      - "display the value along with its category on one line"
  - id: P3.11
    title: "Loop controls: continue, break, for/else and flags"
    phrasings:
      - "skip the records where the delay is zero"
      - "stop at the first record that breaches the limit"
      - "check whether any borrower exceeded 30 days"
      - "report the first claim above the limit and then stop"
---

## Chapter map

Every list-classification question in the pre-midterm set is the **same program** with
different numbers and different band names. Learn P3.1, then use P3.2–P3.4 to refill it.

| Pattern | Use it when |
| --- | --- |
| P3.1 | The question says "use a loop to process every X, classify each, then report counts/totals/averages". This is the master template. |
| P3.2 | Deciding between `for x in list`, `enumerate`, `range(len(...))` and `zip` — especially when the data is in 2–3 parallel lists. |
| P3.3 | "Build the total inside the loop", "do not use `sum()`", "display the average". |
| P3.4 | Translating "less than", "from X to Y inclusive", "above", "not more than", "exactly 0" into Python conditions in the right order. |
| P3.5 | "Store the names in a separate list", "print both final lists". |
| P3.6 | "Total value of ONLY those claims requiring Senior Review" — a subtotal for one band. |
| P3.7 | "Remove extra spaces", "convert to title case". |
| P3.8 | "Classify as Positive if the rating is 4 or above OR the feedback contains 'excellent'". |
| P3.9 | "Keep accepting values until ...", "the number of records is not known". |
| P3.10 | "Display appropriately", "to two decimal places", neat tables. |
| P3.11 | "Skip", "stop at the first", "check whether any". |

No data files are needed for this chapter — every exercise supplies the list in the question
paper. Type the list exactly as printed, including negatives and the `0.0`.

---

## P3.1 — The loop-classify-count-total skeleton

**Exam phrasings**

- "Use a loop to process every deposit. Display each deposit and classify it as Small, Medium or Large"
- "Process all observations using a loop. For each return, display the value and classify it"
- "Process every score using a loop and classify it as Low Risk, Moderate Risk or High Risk"
- "For every claim, display the claim amount and its classification"
- "write a program that loops over the list, labels each value and prints a summary"
- "after all records have been processed, calculate and display the number, total and average"

**Core idea.** Eight fixed slots. Pre-midterm Exercises 2, 4, 5, 7 and 9 differ only in the
data, the band thresholds and which summary lines are demanded.

```text
1. the data list                     -> copy from the question
2. accumulators = 0                  -> BEFORE the loop, one per reported number
3. for <item> in <list>:             -> "process every record"
4.     if / elif / else ladder       -> assign `label`
5.     counters += 1 inside branches -> only the bands the question asks about
6.     total += <item>               -> outside the ladder if it is a grand total
7.     print(item, label)            -> the per-record line
8. print the summary block           -> AFTER the loop, never inside it
```

**Template**

```python
values = [ ... ]            # 1. the data from the question

total = 0                   # 2. accumulators, always initialised to 0
count_target = 0

for v in values:            # 3. one pass per record
    if v < LOW:             # 4. classification ladder
        label = "BAND_A"
    elif v <= HIGH:
        label = "BAND_B"
    else:
        label = "BAND_C"
        count_target += 1   # 5. count inside the branch

    total += v              # 6. running total
    print(v, "-", label)    # 7. per-record output

print("Count of BAND_C:", count_target)     # 8. summary, after the loop
print("Total:", total)
print("Average:", total / len(values))
```

**Worked** — the skeleton filled in for Exercise 2.

```python
# --- THE MASTER SKELETON, filled in for Exercise 2 -------------------------
values = [45000, 125000, 78000, 210000, 95000, 165000]   # 1. the data

total = 0          # 2. running total  -> starts at 0
count_target = 0   # 3. counter for the band we must report -> starts at 0

for v in values:                       # 4. visit every record
    if v < 75000:                      # 5. classification ladder
        label = "Small Deposit"
    elif v <= 150000:
        label = "Medium Deposit"
    else:
        label = "Large Deposit"
        count_target += 1              # 6. count inside the branch

    total += v                         # 7. accumulate (NOT sum())
    print(v, "-", label)               # 8. per-record line

print("Large Deposits:", count_target)              # 9. summary block
print("Total:", total)
print("Average:", total / len(values))
```

```text
45000 - Small Deposit
125000 - Medium Deposit
78000 - Medium Deposit
210000 - Large Deposit
95000 - Medium Deposit
165000 - Large Deposit
Large Deposits: 2
Total: 718000
Average: 119666.66666666667
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "count each of the three categories" | three counters, one `+= 1` in each branch (see Exercise 9) |
| "there are five bands" | more `elif` rungs; the `else` is always the last band |
| "also report the total for one band only" | a second accumulator **inside** that branch — P3.6 |
| "report counts for many bands" | a dictionary of counters, `counts[label] += 1` |
| "also give the highest and lowest" | track `highest`/`lowest` inside the loop |
| "store the labels too" | `labels.append(label)` |

```python
deposits = [45000, 125000, 78000, 210000, 95000, 165000]

# VARIANT A: one dictionary of counters instead of three named counters.
counts = {"Small Deposit": 0, "Medium Deposit": 0, "Large Deposit": 0}
labels = []                      # a parallel list of the labels, if asked for
total = 0
highest = deposits[0]            # "largest deposit" without max()
lowest = deposits[0]             # "smallest deposit" without min()

for d in deposits:
    if d < 75000:
        label = "Small Deposit"
    elif d <= 150000:
        label = "Medium Deposit"
    else:
        label = "Large Deposit"

    counts[label] += 1           # one line handles any number of bands
    labels.append(label)
    total += d
    if d > highest:
        highest = d
    if d < lowest:
        lowest = d

print("counts  :", counts)
print("labels  :", labels)
print("total   :", total)
print("highest :", highest, " (max() check:", max(deposits), ")")
print("lowest  :", lowest, " (min() check:", min(deposits), ")")
print("count of Large via dict:", counts["Large Deposit"])

# VARIANT B: report every band as count + share, tie-safe, no idxmax()
print()
for band, c in counts.items():
    print(f"{band:<15} {c:>2} records  {c/len(deposits)*100:>6.2f}%")
```

```text
counts  : {'Small Deposit': 1, 'Medium Deposit': 3, 'Large Deposit': 2}
labels  : ['Small Deposit', 'Medium Deposit', 'Medium Deposit', 'Large Deposit', 'Medium Deposit', 'Large Deposit']
total   : 718000
highest : 210000  (max() check: 210000 )
lowest  : 45000  (min() check: 45000 )
count of Large via dict: 2

Small Deposit    1 records   16.67%
Medium Deposit   3 records   50.00%
Large Deposit    2 records   33.33%
```

**Traps**

- **Accumulators initialised inside the loop.** `total = 0` on the wrong side of `for` resets
  it every pass and the answer equals the last record. This is the single most common lost mark.
- **Summary printed inside the loop.** Indentation decides. The summary `print`s must be at
  the same indentation as `for`, not inside it.
- Counting a band but forgetting to count the rest: cross-check that your counters add up to
  `len(values)`.
- Using `sum()` when Exercise 2 forbids it. The instruction is explicit: "Do not use `sum()` to
  calculate the total. Build the total inside the loop."

**Drill**

1. Monthly rents `[12000, 18500, 30000, 47000, 15000, 62000]`. Budget below 15000, Mid from
   15000 to 30000 inclusive, Premium above 30000. Print each rent with its band, then the
   number of Premium rents, the total and the average.

<details><summary>Answer</summary>

```python
rents = [12000, 18500, 30000, 47000, 15000, 62000]
total = 0
premium = 0
for r in rents:
    if r < 15000:
        label = "Budget"
    elif r <= 30000:
        label = "Mid"
    else:
        label = "Premium"
        premium += 1
    total += r
    print(r, "->", label)
print("Premium count:", premium)
print("Total:", total)
print(f"Average: {total/len(rents):.2f}")
```

```text
12000 -> Budget
18500 -> Mid
30000 -> Mid
47000 -> Premium
15000 -> Mid
62000 -> Premium
Premium count: 2
Total: 184500
Average: 30750.00
```

</details>

---

## P3.2 — Choose the right iteration form: value, index, enumerate, zip

**Exam phrasings**

- "Process every customer record using a loop"
- "process every record in the list"
- "display the record number along with the value"
- "the names, the feedback and the ratings are in three separate lists"
- "use the index position to read the corresponding entry from the other list"
- "iterate over two lists at the same time"

**Core idea.** "Process every record" only tells you to loop once per item. **What you must
print** decides the form.

| The question asks for | Use | Why |
| --- | --- | --- |
| just the value ("display each deposit") | `for v in values:` | shortest, no index needed |
| a record number ("Day 1, Day 2 ...") | `for i, v in enumerate(values, start=1):` | gives 1-based numbering free |
| a 0-based position | `for i, v in enumerate(values):` | default `start=0` |
| two or more parallel lists | `for a, b in zip(list_a, list_b):` | reads the i-th item of each |
| parallel lists **and** the number | `for i, (a, b) in enumerate(zip(a_list, b_list), start=1):` | combines both |
| "use the index position" | `for i in range(len(values)):` then `values[i]` | the examiner explicitly asked for indexing |
| writing back into the list | `for i in range(len(values)):` then `values[i] = ...` | `for v in values` cannot modify the list |

**Template**

```python
for v in LIST:                                  # value only
for i, v in enumerate(LIST, start=1):           # 1-based number + value
for i in range(len(LIST)):                      # index only -> LIST[i]
for a, b in zip(LIST_A, LIST_B):                # two lists in lockstep
for a, b, c in zip(LIST_A, LIST_B, LIST_C):     # three lists in lockstep
for i, (a, b) in enumerate(zip(LIST_A, LIST_B), start=1):   # number + both
```

**Worked**

```python
deposits = [45000, 125000, 78000]
branches = ["Panaji", "Margao", "Vasco"]

print("--- A. for x in list  (value only)")
for d in deposits:
    print(d)

print("--- B. enumerate(list, start=1)  (1-based record number + value)")
for i, d in enumerate(deposits, start=1):
    print("Deposit", i, "=", d)

print("--- C. enumerate(list)  (0-based, default)")
for i, d in enumerate(deposits):
    print(i, d)

print("--- D. range(len(list))  (index only, then index in)")
for i in range(len(deposits)):
    print(i, deposits[i])

print("--- E. zip(list1, list2)  (two lists in lockstep)")
for b, d in zip(branches, deposits):
    print(b, "->", d)

print("--- F. index into several parallel lists")
for i in range(len(deposits)):
    print(i + 1, branches[i], deposits[i])

print("--- G. enumerate + index into the other lists")
for i, d in enumerate(deposits):
    print(branches[i], d)
```

```text
--- A. for x in list  (value only)
45000
125000
78000
--- B. enumerate(list, start=1)  (1-based record number + value)
Deposit 1 = 45000
Deposit 2 = 125000
Deposit 3 = 78000
--- C. enumerate(list)  (0-based, default)
0 45000
1 125000
2 78000
--- D. range(len(list))  (index only, then index in)
0 45000
1 125000
2 78000
--- E. zip(list1, list2)  (two lists in lockstep)
Panaji -> 45000
Margao -> 125000
Vasco -> 78000
--- F. index into several parallel lists
1 Panaji 45000
2 Margao 125000
3 Vasco 78000
--- G. enumerate + index into the other lists
Panaji 45000
Margao 125000
Vasco 78000
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "in reverse order" | `for v in reversed(values):` or `for v in values[::-1]:` |
| "every second record" | `for v in values[::2]:` |
| "only the first three" | `for v in values[:3]:` |
| "from the second record onwards" | `for v in values[1:]:` |
| "number the records starting from 101" | `enumerate(values, start=101)` |
| "in ascending order of value" | `for v in sorted(values):` |
| "pair each name with its rank" | `for r, n in enumerate(sorted(names), start=1):` |

**Traps**

- **`zip()` stops at the shortest list.** Extra records disappear with no error.

```python
# TRAP: zip() stops at the SHORTEST list - two records vanish silently.
names   = ["Riya", "Karan", "Meena", "Dev", "Asha"]
ratings = [5, 2, 4]                       # examiner's data is short by two
for n, r in zip(names, ratings):
    print(n, r)
print("records processed by zip():", len(list(zip(names, ratings))))
print("len(names) =", len(names), " len(ratings) =", len(ratings))

# Defensive check worth one mark: prove the lists line up before looping.
if len(names) == len(ratings):
    print("lists aligned - safe to loop")
else:
    print("WARNING: list lengths differ:", len(names), "vs", len(ratings))
```

```text
Riya 5
Karan 2
Meena 4
records processed by zip(): 3
len(names) = 5  len(ratings) = 3
WARNING: list lengths differ: 5 vs 3
```

- `range(len(values))` yields `0 .. len-1`. Printing `i` gives `0` for the first record; print
  `i + 1` when the question wants "Customer 1".
- `enumerate` returns **two** values. `for x in enumerate(v):` gives you tuples like
  `(0, 45000)`, not the number.
- Do not `append` to or `remove` from the list you are looping over — the iteration skips items.

**Drill**

1. `branches = ["Panaji", "Margao", "Vasco", "Ponda"]`,
   `deposits = [45000, 125000, 78000, 210000]`. Print `1. Panaji   Rs. 45000` for every record.

<details><summary>Answer</summary>

```python
branches = ["Panaji", "Margao", "Vasco", "Ponda"]
deposits = [45000, 125000, 78000, 210000]
for i, (b, d) in enumerate(zip(branches, deposits), start=1):
    print(f"{i}. {b:<8} Rs. {d}")
```

```text
1. Panaji   Rs. 45000
2. Margao   Rs. 125000
3. Vasco    Rs. 78000
4. Ponda    Rs. 210000
```

</details>

---

## P3.3 — Running total, counter and average without sum()

**Exam phrasings**

- "Do not use sum() to calculate the total. Build the total inside the loop"
- "calculate and display the total amount deposited and the average deposit amount"
- "total number of delayed days across all borrowers"
- "total of all risk scores and average risk score"
- "sum of all daily returns"
- "find the average without using the built-in functions"

**Core idea.** Three lines, always in this shape:

```text
before the loop:   total = 0        count = 0
inside the loop:   total += value   count += 1
after the loop:    average = total / count      (guard count == 0 first)
```

**Which denominator?**

| The question asks for | Denominator |
| --- | --- |
| "average deposit amount" (all records) | `len(values)` — or a `count` that counted every record |
| "average of the High Risk cases" | the **counter for that band**, not `len(values)` |
| "average delay per borrower" | `len(values)` (zeros are still borrowers) |
| "average delay of the borrowers who were late" | the counter of late borrowers |

**Template**

```python
total = 0                      # NEVER inside the loop
count = 0
for v in values:
    total += v                 # same as total = total + v
    count += 1                 # same as count = count + 1

if count > 0:                  # the ZeroDivisionError guard
    average = total / count
else:
    average = 0                # or print "not applicable"
print("Total:", total)
print("Average:", average)
```

**Worked**

```python
returns = [1.8, -0.7, 0.2, -2.4, 3.1, 0.0, -1.1]

total = 0            # running total: ALWAYS initialise before the loop
pos_count = 0        # counter
for r in returns:
    total += r       # same as: total = total + r
    if r > 0:
        pos_count += 1

print("total            =", total)
print("sum() cross-check=", sum(returns))
print("round(total, 2)  =", round(total, 2))
print("positive days    =", pos_count)
print("average over ALL =", total / len(returns))

# Average of ONLY the positive days -> divide by the COUNTER, not by len()
pos_total = 0
pos_n = 0
for r in returns:
    if r > 0:
        pos_total += r
        pos_n += 1

if pos_n > 0:                                  # the ZeroDivisionError guard
    print("average of positives =", pos_total / pos_n)
else:
    print("average of positives = not applicable (no positive days)")
```

```text
total            = 0.8999999999999999
sum() cross-check= 0.8999999999999999
round(total, 2)  = 0.9
positive days    = 3
average over ALL = 0.12857142857142856
average of positives = 1.7
```

Note the `0.8999999999999999`. Binary floating point cannot store `0.1`-style decimals exactly,
so a loop over floats drifts. `sum()` gives exactly the same drift — this is not a bug in your
loop. **Always print money and percentages through `:.2f` or `round(x, 2)`.**

**Variants**

| If the question says | Change to |
| --- | --- |
| "count of records" | `count += 1` inside the loop, or just `len(values)` |
| "how many are above X" | `if v > X: count += 1` |
| "total of the Large band only" | accumulator inside that `elif`/`else` branch — P3.6 |
| "average without using len()" | keep your own `count += 1` and divide by it |
| "running balance after each deposit" | `print(v, balance)` inside the loop after `balance += v` |
| "product instead of total" | `product = 1` then `product *= v` (start at **1**, not 0) |
| "percentage of total" | second pass: `for v in values: print(v / total * 100)` |

**Traps**

- `total = 0` inside the loop. Answer becomes the last value.
- `total =+ v` is not `total += v`. `=+ v` assigns `+v` and destroys the total. No syntax error.
- Dividing by `len(values)` when the question wants the average of one band.
- **ZeroDivisionError** when the band is empty:

```python
strong = []          # nothing will match
total = 0
n = 0
print("n =", n)
print(total / n)     # this is the crash the examiner is hoping you guard
```

```text
n = 0
Traceback (most recent call last):
  File "s03b_zerodiv.py", line 5, in <module>
    print(total / n)     # this is the crash the examiner is hoping you guard
ZeroDivisionError: division by zero
```

- `/` gives a float, `//` gives floor division. An "average" always uses `/`.

**Drill**

1. `scores = [18, 42, 67, 29, 81, 55, 34]`. Compute total and average with your own counter, no
   `sum()` and no `len()`. Then show that your code survives an empty list.

<details><summary>Answer</summary>

```python
scores = [18, 42, 67, 29, 81, 55, 34]
total = 0
n = 0
for s in scores:
    total += s
    n += 1
print("total =", total, "count =", n)
print(f"average = {total/n:.2f}" if n else "average = not applicable")

empty = []
t2, n2 = 0, 0
for s in empty:
    t2 += s
    n2 += 1
print("empty list ->", f"{t2/n2:.2f}" if n2 else "average = not applicable")
```

```text
total = 326 count = 7
average = 46.57
empty list -> average = not applicable
```

</details>

---

## P3.4 — The if / elif / else classification ladder and threshold wording

**Exam phrasings**

- "Small Deposit if the amount is less than Rs. 75,000"
- "Medium Deposit if the amount is from Rs. 75,000 to Rs. 1,50,000, inclusive"
- "Gain if return is greater than 0% but not more than 2%"
- "Loss if return is less than 0% but not less than -2%"
- "No addition for up to 2 completed years"
- "No Change if return is exactly 0%"
- "Moderate if above 1% but not above 2%"

**Core idea.** Write the rungs in the order that makes each `elif` mean "and we already know it
failed everything above". Then the middle bands need only **one** comparison each.

### Wording → condition (memorise this table)

| The paper says | Python condition | Sole comparison after an earlier rung |
| --- | --- | --- |
| "less than X" / "below X" | `v < X` | — |
| "X or less" / "up to X" / "not more than X" / "X or below" | `v <= X` | — |
| "more than X" / "above X" / "greater than X" / "exceeds X" | `v > X` | — |
| "X or more" / "X or above" / "at least X" / "not less than X" | `v >= X` | — |
| "from X to Y, inclusive" | `X <= v <= Y` | `v <= Y` |
| "from X to Y" (counts, e.g. "1 to 10 days") | `X <= v <= Y` | `v <= Y` |
| "more than X but not more than Y" | `X < v <= Y` | `v <= Y` |
| "greater than X% but not more than Y%" | `X < v <= Y` | `v <= Y` |
| "less than X but not less than Y" (Y negative) | `Y <= v < X` | `v >= Y` |
| "exactly 0" / "is 0 days" | `v == 0` | — |
| "up to 2 completed years" | `v <= 2` | — |
| "3 to 5 completed years" | `3 <= v <= 5` | `v <= 5` |
| "more than 5 completed years" | `v > 5` | `else` |
| "60 years or older" | `v >= 60` | — |
| "1% or less" | `v <= 1` | — |

**Template** — three bands, the shape used by Exercises 2, 7 and 9:

```python
if v < LOW:                # "less than LOW"
    label = "BAND_A"
elif v <= HIGH:            # "from LOW to HIGH, inclusive"  -> LOW already guaranteed
    label = "BAND_B"
else:                      # "above HIGH"
    label = "BAND_C"
```

Five bands, the shape used by Exercise 4 — **most extreme first, then narrow inwards**:

```python
if v > HIGH2:      label = "BAND_TOP"      # "greater than HIGH2"
elif v > 0:        label = "BAND_UP"       # "greater than 0 but not more than HIGH2"
elif v == 0:       label = "BAND_FLAT"     # "exactly 0"
elif v >= LOW2:    label = "BAND_DOWN"     # "less than 0 but not less than LOW2"
else:              label = "BAND_BOTTOM"   # "below LOW2"
```

**Worked** — correct order vs wrong order, same data.

```python
returns = [1.8, -0.7, 0.2, -2.4, 3.1, 0.0, -1.1]

print("--- CORRECT order: most extreme first, then narrow inwards")
for r in returns:
    if r > 2:                     # "greater than 2%"
        label = "Strong Gain"
    elif r > 0:                   # "greater than 0% but not more than 2%"
        label = "Gain"
    elif r == 0:                  # "exactly 0%"
        label = "No Change"
    elif r >= -2:                 # "less than 0% but NOT less than -2%"
        label = "Loss"
    else:                         # "below -2%"
        label = "Strong Loss"
    print(r, "->", label)

print("--- WRONG order: the wide band swallows the extreme band")
for r in returns:
    if r > 0:                     # BUG: 3.1 is caught here and never reaches "> 2"
        label = "Gain"
    elif r > 2:
        label = "Strong Gain"
    elif r == 0:
        label = "No Change"
    elif r >= -2:
        label = "Loss"
    else:
        label = "Strong Loss"
    print(r, "->", label)
```

```text
--- CORRECT order: most extreme first, then narrow inwards
1.8 -> Gain
-0.7 -> Loss
0.2 -> Gain
-2.4 -> Strong Loss
3.1 -> Strong Gain
0.0 -> No Change
-1.1 -> Loss
--- WRONG order: the wide band swallows the extreme band
1.8 -> Gain
-0.7 -> Loss
0.2 -> Gain
-2.4 -> Strong Loss
3.1 -> Gain
0.0 -> No Change
-1.1 -> Loss
```

`3.1` is reported as `Gain` in the second block. The `elif r > 2` rung is **unreachable** —
Python never prints a warning for that.

### "less than -2" vs "not less than -2"

Exercise 4 says Loss is "less than 0% but **not less than** -2%", and Strong Loss is "**below**
-2%". Negative numbers invert your intuition: `-2.4` is *smaller* than `-2`.

```python
# "less than -2"  vs  "not less than -2"  -- the Exercise 4 trap
for r in [-1.9, -2.0, -2.1, -2.4]:
    print(r,
          "| r < -2  ->", r < -2,
          "| r >= -2 ->", r >= -2,
          "| not (r < -2) ->", not (r < -2))
```

```text
-1.9 | r < -2  -> False | r >= -2 -> True | not (r < -2) -> True
-2.0 | r < -2  -> False | r >= -2 -> True | not (r < -2) -> True
-2.1 | r < -2  -> True | r >= -2 -> False | not (r < -2) -> False
-2.4 | r < -2  -> True | r >= -2 -> False | not (r < -2) -> False
```

So "not less than -2" is `r >= -2` — and `-2.0` itself is a **Loss**, not a Strong Loss.

### Always probe the boundaries before you submit

```python
# Boundary probe: run the exact band edges through the ladder before you submit.
def band(v):
    if v < 75000:
        return "Small"
    elif v <= 150000:               # "from 75,000 to 1,50,000 INCLUSIVE"
        return "Medium"
    else:
        return "Large"

for v in [74999, 75000, 75001, 149999, 150000, 150001]:
    print(v, "->", band(v))
```

```text
74999 -> Small
75000 -> Medium
75001 -> Medium
149999 -> Medium
150000 -> Medium
150001 -> Large
```

`75000` and `150000` must both be Medium. If either lands elsewhere, your comparison operator
is wrong.

**Variants**

| If the question says | Change to |
| --- | --- |
| "classify as A or B only" | `if` ... `else`, no `elif` |
| "the bands are on a text column" | `if transaction_type == "Delivery":` — use `==`, never `=` |
| "ignore the case of the entry" | `if t.strip().lower() == "delivery":` |
| "two conditions must both hold" | `if a > X and b < Y:` |
| "either condition is enough" | `if a > X or b < Y:` — P3.8 |
| "between X and Y" (no "inclusive" stated) | state your assumption in a comment: `# taking both limits as included` |
| "a discount that depends on age" | same ladder, but assign a number instead of a label: `discount = 0.10` |

**Traps**

- `elif` order. Widest band first makes later rungs dead code.
- `=` vs `==` in a condition is a `SyntaxError`; catching it costs exam minutes.
- Writing `if 0 < r < 2` is legal Python and often clearer than two conditions — but it means
  "strictly between", so it excludes `2`. "Not more than 2" needs `0 < r <= 2`.
- Using separate `if` statements instead of `elif` re-tests every value and can assign two
  labels; the last one wins.
- `elif v <= 150000` **without** an earlier `if v < 75000` rung wrongly labels `1000` as Medium.
  The ladder's correctness depends on the order.
- Where the paper does not say whether a limit is included, write one comment stating your
  reading. Examiners give the mark for a stated assumption.

**Drill**

1. Exercise 8's tenure bands: "Short Term for up to 1 year", "Medium Term for more than 1 year
   but not more than 3 years", "Long Term for more than 3 years". Test with
   `0.5, 1, 1.5, 3, 3.5, 7`.

<details><summary>Answer</summary>

```python
for years in [0.5, 1, 1.5, 3, 3.5, 7]:
    if years <= 1:
        label = "Short Term"
    elif years <= 3:
        label = "Medium Term"
    else:
        label = "Long Term"
    print(years, "->", label)
```

```text
0.5 -> Short Term
1 -> Short Term
1.5 -> Medium Term
3 -> Medium Term
3.5 -> Long Term
7 -> Long Term
```

</details>

---

## P3.5 — Collecting matching records into result lists

**Exam phrasings**

- "Store the names of customers giving positive feedback in a separate list"
- "Store the names of customers giving negative feedback in another list"
- "Count the number of positive and negative responses"
- "Print both final lists"
- "make a list of all borrowers who defaulted"
- "display the names of the customers in the High Risk band"

**Core idea.** `results = []` before the loop, `results.append(item)` inside the matching
branch, `len(results)` for the count. You do **not** need a separate counter — but a counter is
never wrong, and the midterm paper asks for both the list and the count.

**Template**

```python
matched = []                   # empty list BEFORE the loop
for name, value in zip(names, values):
    if CONDITION:
        matched.append(name)   # one item per call
print("Matched:", matched)
print("Count:", len(matched))
```

**Worked**

```python
names   = ["Riya", "Karan", "Meena", "Dev", "Asha"]
ratings = [5, 2, 4, 1, 3]

positive_names = []      # empty list BEFORE the loop
negative_names = []
pos_counter = 0          # a parallel counter, for comparison

for n, r in zip(names, ratings):
    if r >= 4:
        positive_names.append(n)      # append() adds ONE item to the end
        pos_counter += 1
    elif r <= 2:
        negative_names.append(n)

print("positive_names      =", positive_names)
print("len(positive_names) =", len(positive_names))
print("pos_counter         =", pos_counter)
print("negative_names      =", negative_names)
print("len(negative_names) =", len(negative_names))

# append vs extend -- a classic slip
bad = []
bad.append(["Riya", "Meena"])    # appends the LIST as one item
good = []
good.extend(["Riya", "Meena"])   # adds each item separately
print("append(list) ->", bad)
print("extend(list) ->", good)
```

```text
positive_names      = ['Riya', 'Meena']
len(positive_names) = 2
pos_counter         = 2
negative_names      = ['Karan', 'Dev']
len(negative_names) = 2
append(list) -> [['Riya', 'Meena']]
extend(list) -> ['Riya', 'Meena']
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "store the amounts, not the names" | `matched.append(value)` |
| "store name and amount together" | `matched.append((name, value))` — a list of tuples |
| "store the record number" | `matched.append(i)` with `enumerate` |
| "print them one per line" | `for m in matched: print(m)` |
| "no duplicates" | `matched_set = set()` then `.add(name)` — but order is lost |
| "in sorted order" | `print(sorted(matched))` |
| "a list per band" | one empty list per band, `append` in each branch |
| "how many, as a percentage" | `len(matched) / len(names) * 100` |

**Traps**

- `matched = []` inside the loop — the list holds at most one item at the end.
- `append` vs `extend`: `append(a_list)` nests the list (see output above).
- `matched.append()` with no argument is a `TypeError`.
- `print(matched)` prints Python list syntax with square brackets and single quotes —
  **that is exactly what the midterm sample output shows**, so do not hand-format it.
- Appending the *raw* name rather than the cleaned one. The paper's expected output is
  `'Meena Patil'`, not `'Meena Patil                          '`.

**Drill**

1. `borrowers = ["Riya", "Karan", "Meena", "Dev", "Asha", "Vikram"]`,
   `delay_days = [0, 8, 21, 4, 35, 12]`. List the borrowers delayed more than 10 days and count them.

<details><summary>Answer</summary>

```python
borrowers = ["Riya", "Karan", "Meena", "Dev", "Asha", "Vikram"]
delay_days = [0, 8, 21, 4, 35, 12]
delayed_names = []
for name, d in zip(borrowers, delay_days):
    if d > 10:
        delayed_names.append(name)
print("Borrowers delayed over 10 days:", delayed_names)
print("Count:", len(delayed_names))
```

```text
Borrowers delayed over 10 days: ['Meena', 'Asha', 'Vikram']
Count: 3
```

</details>

---

## P3.6 — Conditional totals and per-band subtotals

**Exam phrasings**

- "total value of only those claims requiring Senior Review"
- "total value of all claims"
- "number of claims requiring Senior Review"
- "total amount of the deposits classified as Large"
- "total and average for each category"
- "what percentage of the total book is in the highest band"

**Core idea.** Indentation decides the scope of a total.

```text
total += v        at the same level as the if/elif/else   -> total of EVERYTHING
total += v        indented inside one branch              -> total of THAT BAND ONLY
```

**Template**

```python
grand_total = 0
band_total = 0
band_count = 0

for v in values:
    grand_total += v            # OUTSIDE the ladder -> every record
    if v < LOW:
        label = "BAND_A"
    elif v <= HIGH:
        label = "BAND_B"
    else:
        label = "BAND_C"
        band_total += v         # INSIDE the branch -> only BAND_C
        band_count += 1

print("BAND_C count:", band_count)
print("Total of all:", grand_total)
print("Total of BAND_C:", band_total)
```

**Worked** — Exercise 7's "total value of only those claims requiring Senior Review".

```python
claims = [18000, 95000, 240000, 62000, 310000, 125000]

grand_total = 0        # total of EVERY claim
senior_total = 0       # total of ONLY the Senior Review claims
senior_count = 0

for c in claims:
    grand_total += c                  # outside the if -> counts everything
    if c < 50000:
        label = "Routine"
    elif c <= 150000:
        label = "Review"
    else:
        label = "Senior Review"
        senior_total += c             # INSIDE the branch -> counts only this band
        senior_count += 1
    print(c, "->", label)

print("Senior Review count :", senior_count)
print("Total of all claims :", grand_total)
print("Total of Senior only:", senior_total)
print("Senior share of book:", round(senior_total / grand_total * 100, 2), "%")
```

```text
18000 -> Routine
95000 -> Review
240000 -> Senior Review
62000 -> Review
310000 -> Senior Review
125000 -> Review
Senior Review count : 2
Total of all claims : 850000
Total of Senior only: 550000
Senior share of book: 64.71 %
```

**Variants** — "give the count, total and average for **every** band":

```python
# VARIANT: a total PER band (the examiner's favourite follow-up question)
claims = [18000, 95000, 240000, 62000, 310000, 125000]

band_count = {"Routine": 0, "Review": 0, "Senior Review": 0}
band_total = {"Routine": 0, "Review": 0, "Senior Review": 0}

for c in claims:
    if c < 50000:
        label = "Routine"
    elif c <= 150000:
        label = "Review"
    else:
        label = "Senior Review"
    band_count[label] += 1
    band_total[label] += c

print(f"{'Band':<15}{'Count':>7}{'Total':>12}{'Average':>12}")
for label in band_count:
    n = band_count[label]
    t = band_total[label]
    avg = t / n if n > 0 else 0          # guard: a band can be empty
    print(f"{label:<15}{n:>7}{t:>12}{avg:>12.2f}")
```

```text
Band             Count       Total     Average
Routine              1       18000    18000.00
Review               3      282000    94000.00
Senior Review        2      550000   275000.00
```

| If the question says | Change to |
| --- | --- |
| "total of everything except the top band" | `grand_total - band_total` |
| "average of that band" | `band_total / band_count` with the zero guard |
| "count and total for two bands" | two pairs of accumulators |
| "total of values above X, ignoring the labels" | a plain `if v > X: cond_total += v` |
| "the total of the amounts, weighted by a rate" | `total += v * RATE` |

**Traps**

- Putting `grand_total += c` inside the `else` — the grand total then equals the band total.
- Adding to the band total **after** the ladder using the `label` variable is fine too:
  `if label == "Senior Review": senior_total += c`. Both get full marks; pick one.
- Percentages: `senior_total / grand_total * 100`, not `senior_total / 100`.
- If no record falls in the band, the subtotal is legitimately `0`. Print it; do not omit the line.

**Drill**

1. Same `claims` list. Print the total value of only the **Routine** claims and the number of
   claims that are not Routine.

<details><summary>Answer</summary>

```python
claims = [18000, 95000, 240000, 62000, 310000, 125000]
routine_total = 0
non_routine = 0
for c in claims:
    if c < 50000:
        routine_total += c
    else:
        non_routine += 1
print("Total of Routine claims:", routine_total)
print("Claims that are not Routine:", non_routine)
```

```text
Total of Routine claims: 18000
Claims that are not Routine: 5
```

</details>

---

## P3.7 — Cleaning text: strip, title, lower, split and join

**Exam phrasings**

- "Remove extra spaces from each customer name and feedback entry"
- "Convert each customer name to title case"
- "clean the names before comparing them"
- "the entries contain leading and trailing blanks"
- "standardise the case of the text column"
- "remove the double spaces inside the string"

**Core idea.** String methods **return** a new string; they never change the original. Assign
the result back.

| Method | Removes / does | Keeps internal spaces? |
| --- | --- | --- |
| `s.strip()` | whitespace at **both** ends | yes |
| `s.lstrip()` | whitespace at the left end | yes |
| `s.rstrip()` | whitespace at the right end | yes |
| `s.strip("#")` | those specific characters from both ends | yes |
| `s.title()` | First Letter Of Each Word Capitalised | yes |
| `s.upper()` / `s.lower()` | case conversion | yes |
| `s.replace(" ", "")` | deletes **all** spaces, including between words | no |
| `s.split()` | list of words, splitting on any run of whitespace | n/a |
| `" ".join(s.split())` | strips the ends **and** collapses internal runs to one space | one space |

**Template**

```python
clean = " ".join(RAW.split())      # ends + internal double spaces, in one step
clean = clean.title()              # title case for names
text  = clean.lower()              # lowercase COPY for keyword tests
```

**Worked**

```python
raw = "   Meena   Patil   "

print("raw          ->", repr(raw))
print(".strip()     ->", repr(raw.strip()))        # both ends
print(".lstrip()    ->", repr(raw.lstrip()))       # left end only
print(".rstrip()    ->", repr(raw.rstrip()))       # right end only
print(".title()     ->", repr(raw.strip().title()))
print(".upper()     ->", repr(raw.strip().upper()))
print(".lower()     ->", repr(raw.strip().lower()))
print(".replace()   ->", repr(raw.replace(" ", "")))
print(".split()     ->", raw.split())              # no arg -> splits on ANY run of whitespace
print("join+split   ->", repr(" ".join(raw.split())))   # kills internal double spaces too

print()
print("title() on lowercase name:", "meena patil".title())
print("title() on SHOUTED name  :", "MEENA PATIL".title())
print("strip() does NOT fix the middle:", repr("Meena   Patil".strip()))
print("the robust clean            :", repr(" ".join("  Meena   Patil ".split())))
```

```text
raw          -> '   Meena   Patil   '
.strip()     -> 'Meena   Patil'
.lstrip()    -> 'Meena   Patil   '
.rstrip()    -> '   Meena   Patil'
.title()     -> 'Meena   Patil'
.upper()     -> 'MEENA   PATIL'
.lower()     -> 'meena   patil'
.replace()   -> 'MeenaPatil'
.split()     -> ['Meena', 'Patil']
join+split   -> 'Meena Patil'

title() on lowercase name: Meena Patil
title() on SHOUTED name  : Meena Patil
strip() does NOT fix the middle: 'Meena   Patil'
the robust clean            : 'Meena Patil'
```

`.title()` on `"meena patil"` gives `"Meena Patil"` — and it also fixes `"MEENA PATIL"`, which
`.strip()` alone cannot.

**Variants**

```python
# Edge cases the examiner can hide in the data
print("title() breaks apostrophes:", "d'souza".title())          # -> D'Souza
print("title() breaks initials   :", "r.naik".title())
print("strip a specific character:", repr("##Riya##".strip("#")))
print("split on a comma          :", "Panaji, Margao, Vasco".split(","))
print("strip each piece after split:", [p.strip() for p in "Panaji, Margao, Vasco".split(",")])
print("tabs and newlines are whitespace:", repr("\tRiya Naik\n".strip()))
```

```text
title() breaks apostrophes: D'Souza
title() breaks initials   : R.Naik
strip a specific character: 'Riya'
split on a comma          : ['Panaji', ' Margao', ' Vasco']
strip each piece after split: ['Panaji', 'Margao', 'Vasco']
tabs and newlines are whitespace: 'Riya Naik'
```

| If the question says | Change to |
| --- | --- |
| "remove only the trailing spaces" | `s.rstrip()` |
| "all capitals" | `s.upper()` |
| "sentence case" | `s.capitalize()` — only the first letter of the whole string |
| "split the full name into first and last" | `parts = s.split()` then `parts[0]`, `parts[-1]` |
| "join a list of names with commas" | `", ".join(names)` |
| "how many words in the feedback" | `len(s.split())` |
| "replace the hyphens with spaces" | `s.replace("-", " ")` |
| "check it starts with 'Mr'" | `s.startswith("Mr")`; ends with: `s.endswith(".com")` |
| "count how many times a word appears" | `s.lower().count("delay")` |

**Traps**

- `raw.strip()` alone does **not** remove `"Meena   Patil"`'s internal gap. Only
  `" ".join(raw.split())` (or `.replace("  ", " ")` repeatedly) does.
- Methods do not mutate: `name.strip()` on its own line changes nothing. Write
  `name = name.strip()`.
- `.replace(" ", "")` glues words together — never use it to "remove extra spaces" in a name.
- `.title()` capitalises after every non-letter, so `d'souza` becomes `D'Souza` and `r.naik`
  becomes `R.Naik`. Mention it in a comment if the data has initials; no exam deducts for it.
- Do not `.lower()` the name you are going to print — the paper wants `'Riya Naik'`. Lowercase a
  **separate copy** of the feedback for keyword testing.

**Drill**

1. Clean `["  ravi    shinde ", "PRIYA   D SOUZA", "\tamit rao\n", "  Neha  Joshi  "]` into
   single-spaced title case.

<details><summary>Answer</summary>

```python
raw_names = ["  ravi    shinde ", "PRIYA   D SOUZA", "\tamit rao\n", "  Neha  Joshi  "]
clean = []
for n in raw_names:
    clean.append(" ".join(n.split()).title())
print(clean)
```

```text
['Ravi Shinde', 'Priya D Souza', 'Amit Rao', 'Neha Joshi']
```

</details>

---

## P3.8 — Keyword classification with in, or and any()

**Exam phrasings**

- "Classify the feedback as Positive if the rating is 4 or above, or the feedback contains excellent or helpful"
- "Classify the feedback as Negative if the rating is 2 or below, or the feedback contains issue, not working or waiting"
- "Classify all other feedback as Neutral"
- "check whether the remark contains any of the following words"
- "flag the complaint if it mentions fraud, blocked or bounced"
- "the rule is satisfied if either condition holds"

**Core idea.** `"word" in text` is a substring test returning `True`/`False`. It is **case
sensitive**, so lowercase the text once before testing. For several keywords, `any(k in text for
k in keywords)` replaces a chain of `or`s and lets you add keywords without touching the `if`.

**Template**

```python
POSITIVE_WORDS = ["excellent", "helpful"]
NEGATIVE_WORDS = ["issue", "not working", "waiting"]

text = " ".join(RAW_TEXT.split()).lower()          # clean + lowercase ONCE

has_pos = any(w in text for w in POSITIVE_WORDS)   # scalable
has_neg = any(w in text for w in NEGATIVE_WORDS)

if RATING >= 4 or has_pos:          # OR-combined rule
    label = "Positive"
elif RATING <= 2 or has_neg:
    label = "Negative"
else:                               # Neutral is the else branch
    label = "Neutral"
```

The two-keyword version with plain `or` is equally acceptable in the exam:

```python
if rating >= 4 or "excellent" in text or "helpful" in text:
    label = "Positive"
```

**Worked**

```python
positive_words = ["excellent", "helpful", "quick", "polite"]
negative_words = ["issue", "not working", "waiting", "delay", "rude"]

feedback = [" Excellent branch service ", "ATM was not working",
            "Staff was helpful ", "Long waiting time", "Mobile app issue"]

for f in feedback:
    text = " ".join(f.split()).lower()      # clean + lowercase ONCE, then test
    # chained `or` -- fine for two keywords, unreadable for five
    pos_or  = ("excellent" in text) or ("helpful" in text)
    # any() over a keyword list -- scales to any number of keywords
    pos_any = any(k in text for k in positive_words)
    neg_any = any(k in text for k in negative_words)
    print(repr(text), "| or:", pos_or, "| any-pos:", pos_any, "| any-neg:", neg_any)

print()
# `in` is case SENSITIVE -- this is the single most common lost mark
print('"excellent" in "Excellent branch service" ->', "excellent" in "Excellent branch service")
print('"excellent" in "excellent branch service" ->', "excellent" in "excellent branch service")
# which keyword matched? use a loop instead of any() when you must report it
for k in negative_words:
    if k in "atm was not working":
        print("matched keyword:", k)
```

```text
'excellent branch service' | or: True | any-pos: True | any-neg: False
'atm was not working' | or: False | any-pos: False | any-neg: True
'staff was helpful' | or: True | any-pos: True | any-neg: False
'long waiting time' | or: False | any-pos: False | any-neg: True
'mobile app issue' | or: False | any-pos: False | any-neg: True

"excellent" in "Excellent branch service" -> False
"excellent" in "excellent branch service" -> True
matched keyword: not working
```

### Rule order matters when a record satisfies both rules

```python
# WHY "Positive first" matters: a record can satisfy BOTH rules.
name, text, rating = "Neha Joshi", "app has an issue", 4

print("--- Positive tested first (matches the paper's wording order)")
if rating >= 4 or "excellent" in text or "helpful" in text:
    print(name, "-> Positive")
elif rating <= 2 or "issue" in text or "not working" in text or "waiting" in text:
    print(name, "-> Negative")
else:
    print(name, "-> Neutral")

print("--- Negative tested first (same data, DIFFERENT answer)")
if rating <= 2 or "issue" in text or "not working" in text or "waiting" in text:
    print(name, "-> Negative")
elif rating >= 4 or "excellent" in text or "helpful" in text:
    print(name, "-> Positive")
else:
    print(name, "-> Neutral")
```

```text
--- Positive tested first (matches the paper's wording order)
Neha Joshi -> Positive
--- Negative tested first (same data, DIFFERENT answer)
Neha Joshi -> Negative
```

The paper lists the Positive rule first, so test Positive first and say so in a comment.

**Variants**

| If the question says | Change to |
| --- | --- |
| "must contain ALL of these words" | `all(k in text for k in keywords)` |
| "must not contain any of these" | `not any(k in text for k in keywords)` |
| "count how many keywords matched" | `sum(k in text for k in keywords)` (a count of `True`s) |
| "report which keyword matched" | `for k in keywords: if k in text: print(k); break` |
| "the whole entry equals 'Delivery'" | `text == "delivery"` — `in` would also match `"delivery fee"` |
| "the word must stand alone" | `k in text.split()` instead of `k in text` |
| "both conditions must hold" | `and` instead of `or` |
| "high rating but negative words" (contradiction report) | `if rating >= 4 and has_neg:` |

**Traps**

- **Case.** `"excellent" in "Excellent branch service"` is `False`. Lowercase first.
- `"not working"` contains a space — test it against the *cleaned* text, otherwise
  `"not  working"` (double space) fails. `" ".join(text.split())` fixes that.
- `in` on a string is a substring test, so `"issue" in "issued"` is `True`. Usually harmless
  here; use `.split()` if the examiner insists on whole words.
- `any(...)` needs a generator or list inside: `any("a" in text, "b" in text)` is a `TypeError`.
- Don't test the *raw* string and print the *cleaned* one, or vice versa. Clean once, reuse.
- `or` with an empty string is falsy: `if rating >= 4 or text:` is a different rule entirely.

**Drill**

1. Flag any complaint in `["Cheque bounced twice", "Very polite staff", "Net banking down again",
   "Card blocked without notice"]` that mentions `bounced`, `down`, `blocked` or `fraud`; print
   the flagged count.

<details><summary>Answer</summary>

```python
complaints = ["Cheque bounced twice", "Very polite staff", "Net banking down again",
              "Card blocked without notice"]
bad_words = ["bounced", "down", "blocked", "fraud"]
flagged = []
for c in complaints:
    text = " ".join(c.split()).lower()
    if any(w in text for w in bad_words):
        flagged.append(c)
        print("FLAG  :", c)
    else:
        print("ok    :", c)
print("Flagged count:", len(flagged))
```

```text
FLAG  : Cheque bounced twice
ok    : Very polite staff
FLAG  : Net banking down again
FLAG  : Card blocked without notice
Flagged count: 3
```

</details>

---

## P3.9 — while loops and sentinel-controlled input

**Exam phrasings**

- "keep accepting deposits until the user enters 0"
- "keep asking until a valid rating between 1 and 5 is entered"
- "repeat the process until the balance reaches the target"
- "the number of entries is not known in advance"
- "use a while loop instead of a for loop"

**Core idea.** Use `for` when the **number of repetitions is known** (a list, a `range`). Use
`while` when the stop is a **condition**, not a count. The examiner's wording gives it away:

| Wording | Loop |
| --- | --- |
| "process every value in the list" | `for` |
| "for seven trading days" | `for` |
| "keep accepting ... until the user enters 0" | `while` |
| "until a valid value is entered" | `while` |
| "until the balance reaches X" | `while` |
| "as long as the delay is under 30 days" | `while` |

**Template**

```python
# Form 1 - sentinel value ends the input
total = 0
count = 0
while True:                                 # loop forever ...
    entry = float(input("Enter value (0 to stop): "))
    if entry == 0:                          # ... until the sentinel arrives
        break
    total += entry
    count += 1

# Form 2 - condition at the top
n = 1
while n <= N:
    ...
    n += 1                                  # NEVER forget the increment

# Form 3 - input validation
v = int(input("Enter rating (1-5): "))
while v < 1 or v > 5:
    print("Invalid. Try again.")
    v = int(input("Enter rating (1-5): "))
```

**Worked** — three `while` shapes, driven by a list instead of `input()` so the output is reproducible.

```python
# WHILE form 1: sentinel -- "keep accepting deposits until the user enters 0"
inputs = [45000, 125000, 78000, 0]      # stand-in for input(); in the exam use input()
i = 0
total = 0
count = 0
value = inputs[i]
while value != 0:                       # condition tested BEFORE each pass
    total += value
    count += 1
    i += 1
    value = inputs[i]
print("deposits accepted:", count, "total:", total)

# WHILE form 2: counter-controlled (a for loop is usually better here)
n = 1
while n <= 3:
    print("pass", n)
    n += 1                              # FORGET THIS LINE -> infinite loop

# WHILE form 3: run until a target is reached
balance = 100000
rate = 0.08
years = 0
while balance < 150000:
    balance = balance * (1 + rate)
    years += 1
print("years to reach 1,50,000:", years, "| final balance:", round(balance, 2))
```

```text
deposits accepted: 3 total: 248000
pass 1
pass 2
pass 3
years to reach 1,50,000: 6 | final balance: 158687.43
```

**The real `input()` version**, run here with `45000, 125000, 78000, 0` typed in:

```python
# "Keep accepting deposits until the user enters 0" -- the real input() form.
total = 0
count = 0
while True:                                   # loop forever ...
    entry = float(input("Enter deposit (0 to stop): "))
    if entry == 0:                            # ... until the sentinel arrives
        break
    total += entry
    count += 1

print("Deposits entered :", count)
print(f"Total collected  : Rs. {total:.2f}")
if count > 0:
    print(f"Average deposit  : Rs. {total / count:.2f}")
else:
    print("Average deposit  : not applicable (no deposits entered)")
```

```text
Enter deposit (0 to stop): Enter deposit (0 to stop): Enter deposit (0 to stop): Enter deposit (0 to stop): Deposits entered : 3
Total collected  : Rs. 248000.00
Average deposit  : Rs. 82666.67
```

(The prompts run together because the input came from a pipe; in a notebook each prompt appears
on its own line.)

**Validation loop**, run with `9, 0, 4`:

```python
# "Keep asking until a valid rating between 1 and 5 is entered"
rating = int(input("Enter rating (1-5): "))
while rating < 1 or rating > 5:               # re-ask while the value is bad
    print("Invalid rating. Try again.")
    rating = int(input("Enter rating (1-5): "))
print("Accepted rating:", rating)
```

```text
Enter rating (1-5): Invalid rating. Try again.
Enter rating (1-5): Invalid rating. Try again.
Enter rating (1-5): Accepted rating: 4
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "stop when the user types 'done'" | `entry = input(...)` then `if entry.strip().lower() == "done": break` |
| "at least one value must be read" | `while True:` + `break` (runs the body before the test) |
| "at most 10 entries" | `while count < 10:` combined with the sentinel `break` |
| "count the entries too" | `count += 1` inside the loop, then use it as the average denominator |
| "the values are already in a list" | switch to `for` — no `while` needed |

**Traps**

- **Infinite loop** from a missing `n += 1` or from never reassigning the sentinel variable.
  In Jupyter, interrupt the kernel; in the exam, re-read the increment line before running.
- `input()` returns a **string**. `while entry != 0` compares `str` to `int` and never ends.
  Convert: `int(input(...))` or `float(input(...))`.
- The sentinel record must not be counted or added — `break` before the accumulators.
- With `while` you need the average guard: if the user stops immediately, `count` is `0`.

**Drill**

1. Keep accepting risk scores until `-1` is entered. Report how many were entered, how many were
   High Risk (above 60), the total and the average. Test with `18, 67, 81, 42, -1`.

<details><summary>Answer</summary>

```python
high = 0
n = 0
total = 0
while True:
    s = int(input("Enter risk score (-1 to stop): "))
    if s == -1:
        break
    n += 1
    total += s
    if s > 60:
        high += 1
print("Scores entered:", n, "High Risk:", high, "Total:", total)
if n:
    print(f"Average: {total/n:.2f}")
```

```text
Enter risk score (-1 to stop): Enter risk score (-1 to stop): Enter risk score (-1 to stop): Enter risk score (-1 to stop): Enter risk score (-1 to stop): Scores entered: 4 High Risk: 2 Total: 208
Average: 52.00
```

</details>

---

## P3.10 — Aligned output with f-strings

**Exam phrasings**

- "Display the deposit and its classification appropriately"
- "Display results up to two decimal places"
- "Display all monetary values to two decimal places"
- "print a neat table of the values and their labels"
- "display the value along with its category on one line"

**Core idea.** `f"...{expr:spec}"`. The spec after the colon is
`[align][width][,][.decimals][type]`.

| Spec | Meaning | Example |
| --- | --- | --- |
| `{x}` | plain value | `45000` |
| `{x:.2f}` | two decimals | `119666.67` |
| `{x:,.2f}` | thousands separator + two decimals | `119,666.67` |
| `{x:>12}` | right-aligned in 12 columns | numbers |
| `{x:<15}` | left-aligned in 15 columns | text |
| `{x:^10}` | centred in 10 columns | headings |
| `{x:>12,.2f}` | width + separator + decimals | money columns |
| `{x:.2%}` | fraction printed as a percentage | `0.6471` -> `64.71%` |
| `{x!r}` | `repr()`, shows the quotes and hidden spaces | debugging |

**Template**

```python
print(f"{'Header A':<14}{'Header B':>12}")             # header row
print("-" * 26)
for a, b in zip(LIST_A, LIST_B):
    print(f"{a:<14}{b:>12,.2f}")                        # one line per record
```

**Worked**

```python
deposits = [45000, 125000, 78000, 210000, 95000, 165000]
labels   = ["Small Deposit", "Medium Deposit", "Medium Deposit",
            "Large Deposit", "Medium Deposit", "Large Deposit"]

print("--- plain print with commas (simplest, always accepted)")
for d, L in zip(deposits, labels):
    print("Deposit:", d, "Category:", L)

print()
print("--- f-string, one line per record")
for d, L in zip(deposits, labels):
    print(f"Deposit: Rs. {d} -> {L}")

print()
print("--- f-string with field widths: >10 right-aligns, <15 left-aligns")
print(f"{'Deposit':>12} | {'Category':<15}")
print("-" * 30)
for d, L in zip(deposits, labels):
    print(f"{d:>12} | {L:<15}")

print()
print("--- number formats you will need")
x = 119666.66666666667
print(f"{x:.2f}       <- two decimals")
print(f"{x:,.2f}      <- thousands separator + two decimals")
print(f"Rs. {x:10.2f} <- width 10, two decimals")
print(f"{0.6471:.2%}     <- percentage from a fraction")
print(f"{326/7:.2f}       <- average to two decimals")
```

```text
--- plain print with commas (simplest, always accepted)
Deposit: 45000 Category: Small Deposit
Deposit: 125000 Category: Medium Deposit
Deposit: 78000 Category: Medium Deposit
Deposit: 210000 Category: Large Deposit
Deposit: 95000 Category: Medium Deposit
Deposit: 165000 Category: Large Deposit

--- f-string, one line per record
Deposit: Rs. 45000 -> Small Deposit
Deposit: Rs. 125000 -> Medium Deposit
Deposit: Rs. 78000 -> Medium Deposit
Deposit: Rs. 210000 -> Large Deposit
Deposit: Rs. 95000 -> Medium Deposit
Deposit: Rs. 165000 -> Large Deposit

--- f-string with field widths: >10 right-aligns, <15 left-aligns
     Deposit | Category       
------------------------------
       45000 | Small Deposit  
      125000 | Medium Deposit 
       78000 | Medium Deposit 
      210000 | Large Deposit  
       95000 | Medium Deposit 
      165000 | Large Deposit  

--- number formats you will need
119666.67       <- two decimals
119,666.67      <- thousands separator + two decimals
Rs.  119666.67 <- width 10, two decimals
64.71%     <- percentage from a fraction
46.57       <- average to two decimals
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "print exactly as shown in the sample output" | copy the sample's punctuation character for character, including `Rs. ` and the colon |
| "print the list" | `print(my_list)` — square brackets and quotes are correct output |
| "round to two decimals" (a value, not display) | `round(x, 2)` |
| "no decimals" | `f"{x:.0f}"` or `f"{x:,.0f}"` |
| "use `.format()` instead" | `"Deposit: {} -> {}".format(d, L)` |
| "old style" | `"Deposit: %d -> %s" % (d, L)` |
| "print on the same line" | `print(x, end=" ")` |
| "a blank line between sections" | `print()` |

**Traps**

- The thousands separator in `{x:,.2f}` produces `119,666.67` — Western grouping, not the Indian
  lakh grouping. If the paper writes `Rs. 1,50,000` in prose, do not try to reproduce that
  grouping; plain `150000` or `150,000.00` is accepted.
- `f` prefix missing: `print("{d}")` prints the literal `{d}`.
- Nested quotes: inside an f-string delimited by `"`, use `'` for dict keys and literals
  (`f"{'Deposit':>12}"`). Python 3.9 cannot reuse the same quote character.
- `{x:.2f}` on a string is a `ValueError`. Convert with `float(x)` first.
- Width specs pad but never truncate: a 20-character label breaks a `<15` column.

**Drill**

1. Print a three-column report of `["Riya Naik", "Karan Shah", "Meena Patil"]`,
   `[45000.5, 1250000, 78000]` and `["Small", "Large", "Medium"]` with the amount
   right-aligned, comma-grouped, two decimals.

<details><summary>Answer</summary>

```python
names = ["Riya Naik", "Karan Shah", "Meena Patil"]
amounts = [45000.5, 1250000, 78000]
labels = ["Small", "Large", "Medium"]
print(f"{'Customer':<14}{'Amount':>14}  {'Band':<8}")
print("-" * 38)
for n, a, L in zip(names, amounts, labels):
    print(f"{n:<14}{a:>14,.2f}  {L:<8}")
```

```text
Customer              Amount  Band    
--------------------------------------
Riya Naik          45,000.50  Small   
Karan Shah      1,250,000.00  Large   
Meena Patil        78,000.00  Medium  
```

</details>

---

## P3.11 — Loop controls: continue, break, for/else and flags

**Exam phrasings**

- "skip the records where the delay is zero"
- "stop at the first record that breaches the limit"
- "check whether any borrower exceeded 30 days"
- "report the first claim above the limit and then stop"

**Core idea.** `continue` skips the rest of **this** iteration. `break` exits the loop
entirely. A `for ... else` block runs only when the loop finished **without** a `break`.

**Template**

```python
for v in values:
    if SKIP_CONDITION:
        continue            # go to the next record
    ...

for v in values:
    if STOP_CONDITION:
        print("found", v)
        break               # leave the loop
else:
    print("not found")      # only runs if break never fired

found = False               # flag pattern
for v in values:
    if CONDITION:
        found = True
```

**Worked**

```python
# Loop controls the examiner sometimes asks for by name
delay_days = [0, 8, 21, 4, 35, 12]

print("--- continue: skip On Time borrowers, total only the delayed ones")
total_delayed = 0
for d in delay_days:
    if d == 0:
        continue                 # jump to the next iteration
    total_delayed += d
print("total of non-zero delays:", total_delayed)

print("--- break: stop at the first Serious Delay")
for i, d in enumerate(delay_days, start=1):
    if d > 30:
        print("first Serious Delay at borrower", i, "with", d, "days")
        break                    # leave the loop entirely
else:
    print("no Serious Delay found")     # for/else runs only if no break

print("--- flag pattern: did ANY borrower exceed 30 days?")
found = False
for d in delay_days:
    if d > 30:
        found = True
print("any serious delay:", found, "| any() one-liner:", any(d > 30 for d in delay_days))
```

```text
--- continue: skip On Time borrowers, total only the delayed ones
total of non-zero delays: 80
--- break: stop at the first Serious Delay
first Serious Delay at borrower 5 with 35 days
--- flag pattern: did ANY borrower exceed 30 days?
any serious delay: True | any() one-liner: True
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "ignore the missing values" | `if v is None: continue` |
| "the last record that breaches the limit" | drop the `break` and keep overwriting a variable |
| "do all of them exceed X?" | `all(v > X for v in values)` |
| "how many exceed X" | a counter, or `sum(v > X for v in values)` |
| "position of the first match" | `enumerate` + `break`, or `values.index(target)` |

**Traps**

- `continue` placed after `total += v` does not skip the accumulation. Put the guard first.
- `break` inside a nested loop only exits the **inner** loop.
- `pass` is not `continue`; `pass` does nothing and execution carries on to the next line.
- `for ... else` surprises readers. A flag variable is clearer and never wrong.

**Drill**

1. `claims = [18000, 95000, 240000, 62000, 310000, 125000]`. Total the claims of Rs. 50,000 and
   above by *skipping* the rest, report the claim number of the first claim above Rs. 2,00,000
   and then stop, and say whether any claim exceeds Rs. 5,00,000.

<details><summary>Answer</summary>

```python
claims = [18000, 95000, 240000, 62000, 310000, 125000]

# skip the Routine claims when totalling
total_reviewable = 0
for c in claims:
    if c < 50000:
        continue
    total_reviewable += c
print("Total of claims needing any review:", total_reviewable)

# first claim above 2,00,000 then stop
for i, c in enumerate(claims, start=1):
    if c > 200000:
        print("First claim above 2,00,000: claim", i, "=", c)
        break
else:
    print("No claim above 2,00,000")

print("Any claim above 5,00,000?", any(c > 500000 for c in claims))
```

```text
Total of claims needing any review: 832000
First claim above 2,00,000: claim 3 = 240000
Any claim above 5,00,000? False
```

Cross-check: 832000 = 850000 (all claims, from P3.6) minus the single Routine claim of 18000.

</details>

---

## Full solutions — pre-midterm Exercises 2, 4, 5, 7, 9

All five are the P3.1 skeleton. **Verified summary figures are stated after each answer — check
your own run against them.**

### Exercise 2 — Bank Branch Deposit Analysis

> "Use a loop to process every deposit. Display each deposit and classify it as Small Deposit if
> the amount is less than Rs. 75,000; Medium Deposit if the amount is from Rs. 75,000 to
> Rs. 1,50,000, inclusive; Large Deposit if the amount is above Rs. 1,50,000. ... **Do not use
> `sum()` to calculate the total. Build the total inside the loop.**"

```python
# ===========================================================================
# Exercise 2 - Bank Branch Deposit Analysis
# Classify each promotional deposit, then report Large count, total, average.
# Constraint from the question: DO NOT use sum(). Build the total in the loop.
# ===========================================================================

# Given data
deposits = [45000, 125000, 78000, 210000, 95000, 165000]

# Accumulators - every one of them must be initialised BEFORE the loop
total_deposit = 0      # running total, built up inside the loop (no sum())
large_count = 0        # number of Large Deposits

print("Deposit-wise classification")
print("-" * 40)

# Process every deposit
for deposit in deposits:

    # --- classification ladder -------------------------------------------
    if deposit < 75000:                     # less than Rs. 75,000
        category = "Small Deposit"
    elif deposit <= 150000:                 # Rs. 75,000 to Rs. 1,50,000 inclusive
        category = "Medium Deposit"
    else:                                   # above Rs. 1,50,000
        category = "Large Deposit"
        large_count += 1                    # count only inside this branch

    # --- running total (replaces sum()) ----------------------------------
    total_deposit += deposit

    # --- per-record output -----------------------------------------------
    print(f"Deposit: Rs. {deposit:>8} -> {category}")

# Average = total / number of deposits. Guard against an empty list.
if len(deposits) > 0:
    average_deposit = total_deposit / len(deposits)
else:
    average_deposit = 0

print("-" * 40)
print("Summary")
print("Number of Large Deposits :", large_count)
print(f"Total Amount Deposited   : Rs. {total_deposit}")
print(f"Average Deposit Amount   : Rs. {average_deposit:.2f}")
```

```text
Deposit-wise classification
----------------------------------------
Deposit: Rs.    45000 -> Small Deposit
Deposit: Rs.   125000 -> Medium Deposit
Deposit: Rs.    78000 -> Medium Deposit
Deposit: Rs.   210000 -> Large Deposit
Deposit: Rs.    95000 -> Medium Deposit
Deposit: Rs.   165000 -> Large Deposit
----------------------------------------
Summary
Number of Large Deposits : 2
Total Amount Deposited   : Rs. 718000
Average Deposit Amount   : Rs. 119666.67
```

**Verified figures.** Small 1 (45000). Medium 3 (125000, 78000, 95000). Large **2** (210000,
165000). Total **718000** = 45000 + 125000 + 78000 + 210000 + 95000 + 165000.
Average **119666.67** = 718000 / 6. Counts add to 6 = `len(deposits)`.

### Exercise 4 — Daily Stock Return Classification

> "Strong Gain if return is greater than 2%. Gain if return is greater than 0% but not more than
> 2%. No Change if return is exactly 0%. Loss if return is less than 0% but not less than -2%.
> Strong Loss if return is below -2%."

```python
# ===========================================================================
# Exercise 4 - Daily Stock Return Classification
# Five bands, then positive days / negative days / sum of returns.
# ===========================================================================

returns = [1.8, -0.7, 0.2, -2.4, 3.1, 0.0, -1.1]

total_return = 0       # running total of the daily returns
positive_days = 0      # counter: return > 0
negative_days = 0      # counter: return < 0

print("Day-wise return classification")
print("-" * 40)

# enumerate(..., start=1) gives a 1-based day number with the value
for day, r in enumerate(returns, start=1):

    # --- ladder: widest/most extreme band FIRST, then narrow inwards ------
    if r > 2:                      # greater than 2%
        category = "Strong Gain"
    elif r > 0:                    # greater than 0% but not more than 2%
        category = "Gain"
    elif r == 0:                   # exactly 0%
        category = "No Change"
    elif r >= -2:                  # less than 0% but NOT less than -2%
        category = "Loss"
    else:                          # below -2%
        category = "Strong Loss"

    # --- counters for the summary ----------------------------------------
    if r > 0:
        positive_days += 1
    elif r < 0:                    # 0.0 is neither positive nor negative
        negative_days += 1

    total_return += r              # running total

    print(f"Day {day}: Return = {r:>5}% -> {category}")

print("-" * 40)
print("Summary")
print("Number of positive-return days :", positive_days)
print("Number of negative-return days :", negative_days)
print("Raw total (float artefact)     :", total_return)
print(f"Sum of all daily returns       : {total_return:.2f}%")
print(f"Average daily return           : {total_return / len(returns):.2f}%")
```

```text
Day-wise return classification
----------------------------------------
Day 1: Return =   1.8% -> Gain
Day 2: Return =  -0.7% -> Loss
Day 3: Return =   0.2% -> Gain
Day 4: Return =  -2.4% -> Strong Loss
Day 5: Return =   3.1% -> Strong Gain
Day 6: Return =   0.0% -> No Change
Day 7: Return =  -1.1% -> Loss
----------------------------------------
Summary
Number of positive-return days : 3
Number of negative-return days : 3
Raw total (float artefact)     : 0.8999999999999999
Sum of all daily returns       : 0.90%
Average daily return           : 0.13%
```

**Verified figures.** Strong Gain 1 (3.1). Gain 2 (1.8, 0.2). No Change 1 (0.0). Loss 2 (-0.7,
-1.1). Strong Loss 1 (-2.4). Positive days **3**, negative days **3**, and `0.0` is in
neither — 3 + 3 + 1 = 7. Sum = 1.8 - 0.7 + 0.2 - 2.4 + 3.1 + 0.0 - 1.1 = **0.90**
(printed raw as `0.8999999999999999` — float artefact, see P3.3). Average = 0.9 / 7 = **0.13%**.

Note `-2.4` is Strong Loss because "below -2" is `r < -2`, and `-2.4 < -2` is `True`.

### Exercise 5 — Loan Repayment Delay Analysis

> "On Time if delay is 0 days. Minor Delay if delay is from 1 to 10 days. Moderate Delay if
> delay is from 11 to 30 days. Serious Delay if delay is more than 30 days."

```python
# ===========================================================================
# Exercise 5 - Loan Repayment Delay Analysis
# Four bands, then Serious count / On Time count / total delayed days.
# ===========================================================================

delay_days = [0, 8, 21, 4, 35, 12]

total_delay = 0        # total number of delayed days across all borrowers
serious_count = 0      # borrowers with a Serious Delay
ontime_count = 0       # borrowers who paid On Time

print("Borrower-wise repayment classification")
print("-" * 45)

for borrower, days in enumerate(delay_days, start=1):

    # --- ladder ----------------------------------------------------------
    if days == 0:                       # On Time if delay is 0 days
        category = "On Time"
        ontime_count += 1
    elif days <= 10:                    # from 1 to 10 days
        category = "Minor Delay"
    elif days <= 30:                    # from 11 to 30 days
        category = "Moderate Delay"
    else:                               # more than 30 days
        category = "Serious Delay"
        serious_count += 1

    total_delay += days                 # running total, no sum()

    print(f"Borrower {borrower}: Delay = {days:>2} day(s) -> {category}")

print("-" * 45)
print("Summary")
print("Borrowers with a Serious Delay :", serious_count)
print("Borrowers who paid On Time     :", ontime_count)
print("Total delayed days (all)       :", total_delay)
print(f"Average delay per borrower     : {total_delay / len(delay_days):.2f} days")
```

```text
Borrower-wise repayment classification
---------------------------------------------
Borrower 1: Delay =  0 day(s) -> On Time
Borrower 2: Delay =  8 day(s) -> Minor Delay
Borrower 3: Delay = 21 day(s) -> Moderate Delay
Borrower 4: Delay =  4 day(s) -> Minor Delay
Borrower 5: Delay = 35 day(s) -> Serious Delay
Borrower 6: Delay = 12 day(s) -> Moderate Delay
---------------------------------------------
Summary
Borrowers with a Serious Delay : 1
Borrowers who paid On Time     : 1
Total delayed days (all)       : 80
Average delay per borrower     : 13.33 days
```

**Verified figures.** On Time **1** (0). Minor 2 (8, 4). Moderate 2 (21, 12). Serious **1** (35).
Counts add to 6. Total delayed days **80** = 0 + 8 + 21 + 4 + 35 + 12. Average 80 / 6 = 13.33.

Because "On Time" is `days == 0`, the `elif days <= 10` rung safely means "1 to 10" — zero was
already caught. The bands are integers, so there is no gap between 10 and 11.

### Exercise 7 — Insurance Claim Screening

> "Routine if the amount is less than Rs. 50,000. Review if the amount is from Rs. 50,000 to
> Rs. 1,50,000, inclusive. Senior Review if the amount is more than Rs. 1,50,000. ... display
> the number of claims requiring Senior Review, total value of all claims, **total value of only
> those claims requiring Senior Review**."

```python
# ===========================================================================
# Exercise 7 - Insurance Claim Screening
# Three bands, then Senior Review count / total of ALL claims /
# total of ONLY the Senior Review claims  (a conditional total).
# ===========================================================================

claims = [18000, 95000, 240000, 62000, 310000, 125000]

total_all = 0          # total value of all claims
total_senior = 0       # total value of ONLY Senior Review claims
senior_count = 0       # number of claims requiring Senior Review

print("Claim-wise screening")
print("-" * 46)

for claim_no, amount in enumerate(claims, start=1):

    # --- ladder ----------------------------------------------------------
    if amount < 50000:                  # less than Rs. 50,000
        category = "Routine"
    elif amount <= 150000:              # Rs. 50,000 to Rs. 1,50,000 inclusive
        category = "Review"
    else:                               # more than Rs. 1,50,000
        category = "Senior Review"
        senior_count += 1               # count  -> inside the branch
        total_senior += amount          # subtotal -> inside the branch

    total_all += amount                 # grand total -> OUTSIDE the branch

    print(f"Claim {claim_no}: Rs. {amount:>7} -> {category}")

print("-" * 46)
print("Summary")
print("Claims requiring Senior Review      :", senior_count)
print(f"Total value of all claims           : Rs. {total_all}")
print(f"Total value of Senior Review claims : Rs. {total_senior}")
print(f"Senior Review share of total value  : {total_senior / total_all * 100:.2f}%")
```

```text
Claim-wise screening
----------------------------------------------
Claim 1: Rs.   18000 -> Routine
Claim 2: Rs.   95000 -> Review
Claim 3: Rs.  240000 -> Senior Review
Claim 4: Rs.   62000 -> Review
Claim 5: Rs.  310000 -> Senior Review
Claim 6: Rs.  125000 -> Review
----------------------------------------------
Summary
Claims requiring Senior Review      : 2
Total value of all claims           : Rs. 850000
Total value of Senior Review claims : Rs. 550000
Senior Review share of total value  : 64.71%
```

**Verified figures.** Routine 1 (18000). Review 3 (95000, 62000, 125000 — subtotal 282000).
Senior Review **2** (240000, 310000). Total of all claims **850000**. Senior Review subtotal
**550000** = 240000 + 310000. Cross-check: 18000 + 282000 + 550000 = 850000. Senior share
550000 / 850000 = 64.71%.

### Exercise 9 — Credit-Risk Score Review

> "Low Risk for scores below 30. Moderate Risk for scores from 30 to 60, inclusive. High Risk
> for scores above 60. ... display the number of Low-Risk cases, Moderate-Risk cases, High-Risk
> cases, total of all risk scores and average risk score."

```python
# ===========================================================================
# Exercise 9 - Credit-Risk Score Review
# Three bands, counts for ALL THREE bands, total and average score.
# ===========================================================================

risk_scores = [18, 42, 67, 29, 81, 55, 34]

low_count = 0          # scores below 30
moderate_count = 0     # scores from 30 to 60 inclusive
high_count = 0         # scores above 60
total_score = 0        # running total of all scores

print("Case-wise risk classification")
print("-" * 40)

for case, score in enumerate(risk_scores, start=1):

    # --- ladder ----------------------------------------------------------
    if score < 30:                      # below 30
        category = "Low Risk"
        low_count += 1
    elif score <= 60:                   # from 30 to 60 inclusive
        category = "Moderate Risk"
        moderate_count += 1
    else:                               # above 60
        category = "High Risk"
        high_count += 1

    total_score += score                # running total, no sum()

    print(f"Case {case}: Risk Score = {score:>2} -> {category}")

print("-" * 40)
print("Summary")
print("Number of Low-Risk cases      :", low_count)
print("Number of Moderate-Risk cases :", moderate_count)
print("Number of High-Risk cases     :", high_count)
print("Total of all risk scores      :", total_score)
print(f"Average risk score            : {total_score / len(risk_scores):.2f}")

# Cross-check: the three counts must add back to the number of records
print("Count check:", low_count + moderate_count + high_count, "==", len(risk_scores))
```

```text
Case-wise risk classification
----------------------------------------
Case 1: Risk Score = 18 -> Low Risk
Case 2: Risk Score = 42 -> Moderate Risk
Case 3: Risk Score = 67 -> High Risk
Case 4: Risk Score = 29 -> Low Risk
Case 5: Risk Score = 81 -> High Risk
Case 6: Risk Score = 55 -> Moderate Risk
Case 7: Risk Score = 34 -> Moderate Risk
----------------------------------------
Summary
Number of Low-Risk cases      : 2
Number of Moderate-Risk cases : 3
Number of High-Risk cases     : 2
Total of all risk scores      : 326
Average risk score            : 46.57
Count check: 7 == 7
```

**Verified figures.** Low **2** (18, 29). Moderate **3** (42, 55, 34). High **2** (67, 81).
2 + 3 + 2 = 7 records. Total **326** = 18 + 42 + 67 + 29 + 81 + 55 + 34.
Average **46.57** = 326 / 7 = 46.5714...

---

## Full solution — Midterm Q2 (20 marks): parallel lists, string cleaning, keyword rules

The paper gives three **parallel** lists and eleven bullet requirements. Map every bullet to a
line of code — that is how the 20 marks are awarded.

| Paper bullet | Code |
| --- | --- |
| "Process every customer record using a loop" | `for name, feedback, rating in zip(...)` |
| "Remove extra spaces from each customer name and feedback entry" | `" ".join(x.split())` |
| "Convert each customer name to title case" | `.title()` |
| "Positive if the rating is 4 or above, **or** the feedback contains 'excellent' or 'helpful'" | `if rating >= 4 or has_positive_word:` |
| "Negative if the rating is 2 or below, **or** the feedback contains 'issue', 'not working' or 'waiting'" | `elif rating <= 2 or has_negative_word:` |
| "Classify all other feedback as Neutral" | `else:` |
| "Store the names of customers giving positive feedback in a separate list" | `positive_customers.append(clean_name)` |
| "Store the names ... negative ... in another list" | `negative_customers.append(clean_name)` |
| "Count the number of positive and negative responses" | `positive_count += 1`, `negative_count += 1` |
| "Print both final lists" | the four `print`s at the end |
| "well commented Python program" | a comment per numbered step |

```python
# ===========================================================================
# BIFS 2026-27 ITP Midterm - Q2 (20 marks)
# Customer feedback classification: clean the text, apply OR-combined rules,
# collect the Positive and Negative names, count them, print both lists.
# ===========================================================================

# --- Given data: three PARALLEL lists. Record i = names[i] + feedback[i] + ratings[i]
customer_names = [" Riya Naik", "Karan Shah", "Meena Patil                          ",
                  "Dev Rao", "Asha Singh"]
customer_feedback = [" Excellent branch service ", "ATM was not working",
                     "Staff was helpful ", "Long waiting time", "Mobile app issue"]
ratings = [5, 2, 4, 1, 3]

# --- Keyword rules kept as lists, so new keywords need no code change
positive_keywords = ["excellent", "helpful"]
negative_keywords = ["issue", "not working", "waiting"]

# --- Result containers, initialised BEFORE the loop
positive_customers = []     # names of customers giving positive feedback
negative_customers = []     # names of customers giving negative feedback
positive_count = 0          # number of positive responses
negative_count = 0          # number of negative responses
neutral_count = 0           # everything that is neither (not asked, but cheap)

# --- Process every customer record in lockstep using zip()
for name, feedback, rating in zip(customer_names, customer_feedback, ratings):

    # 1. Remove extra spaces. " ".join(x.split()) removes leading, trailing
    #    AND repeated internal spaces in one step.
    clean_name = " ".join(name.split())
    clean_feedback = " ".join(feedback.split())

    # 2. Convert the customer name to title case
    clean_name = clean_name.title()

    # 3. Lowercase a COPY of the feedback for case-insensitive keyword tests.
    #    `in` is case sensitive, so "Excellent" would not match "excellent".
    feedback_lower = clean_feedback.lower()

    # 4. Build the two rule flags. any() is True if ANY keyword is present.
    has_positive_word = any(word in feedback_lower for word in positive_keywords)
    has_negative_word = any(word in feedback_lower for word in negative_keywords)

    # 5. Classify. Positive is tested FIRST, so a record satisfying both
    #    rules is reported as Positive. Neutral is the else branch.
    if rating >= 4 or has_positive_word:
        sentiment = "Positive"
        positive_customers.append(clean_name)
        positive_count += 1
    elif rating <= 2 or has_negative_word:
        sentiment = "Negative"
        negative_customers.append(clean_name)
        negative_count += 1
    else:
        sentiment = "Neutral"
        neutral_count += 1

    # 6. Per-record trace line
    print(f"{clean_name:<15} | Rating: {rating} | {clean_feedback:<25} | {sentiment}")

# --- Required final output -------------------------------------------------
print()
print("Customers Giving Positive Feedback:", positive_customers)
print("Number of Positive Responses:", positive_count)
print("Customers Giving Negative Feedback:", negative_customers)
print("Number of Negative Responses:", negative_count)
```

```text
Riya Naik       | Rating: 5 | Excellent branch service  | Positive
Karan Shah      | Rating: 2 | ATM was not working       | Negative
Meena Patil     | Rating: 4 | Staff was helpful         | Positive
Dev Rao         | Rating: 1 | Long waiting time         | Negative
Asha Singh      | Rating: 3 | Mobile app issue          | Negative

Customers Giving Positive Feedback: ['Riya Naik', 'Meena Patil']
Number of Positive Responses: 2
Customers Giving Negative Feedback: ['Karan Shah', 'Dev Rao', 'Asha Singh']
Number of Negative Responses: 3
```

**This matches the paper's stated output exactly**, line for line:

```text
Customers Giving Positive Feedback: ['Riya Naik', 'Meena Patil']
Number of Positive Responses: 2
Customers Giving Negative Feedback: ['Karan Shah', 'Dev Rao', 'Asha Singh']
Number of Negative Responses: 3
```

**Record-by-record justification** (write this reasoning in your notebook as a Markdown cell —
it defends the answer if the grader disagrees):

| # | Cleaned name | Rating | Cleaned feedback | Rule that fired | Result |
| --- | --- | --- | --- | --- | --- |
| 1 | Riya Naik | 5 | Excellent branch service | `rating >= 4` (also "excellent") | Positive |
| 2 | Karan Shah | 2 | ATM was not working | `rating <= 2` (also "not working") | Negative |
| 3 | Meena Patil | 4 | Staff was helpful | `rating >= 4` (also "helpful") | Positive |
| 4 | Dev Rao | 1 | Long waiting time | `rating <= 2` (also "waiting") | Negative |
| 5 | Asha Singh | 3 | Mobile app issue | rating 3 fires nothing; keyword **"issue"** | Negative |

Record 5 is the one that tests whether you implemented the `or`. Rating 3 is neither `>= 4` nor
`<= 2`; only the keyword rule makes it Negative. If your answer prints Asha Singh as Neutral,
your `or` is missing.

### The paper demands it keep working when the lists change

> "Note: Sample input and output are provided purely for illustration. The program should
> continue to work if the values in the supplied lists are changed."

Nothing above hard-codes a name, an index or a count, so **only the three data lists change**.
Re-run with six different records, messy spacing and mixed case:

```python
# SAME PROGRAM, DIFFERENT DATA - only the three lists below were edited.
customer_names = ["  anita   dcruz ", "ROHIT MEHTA", "sunil  kamat",
                  "  Fatima  Shaikh", "vikram rane   ", "neha  joshi"]
customer_feedback = ["Loan process was quick", "  Excellent support from staff ",
                     "Card not working at POS", "Branch was fine",
                     "Very rude behaviour", "  App has an issue  "]
ratings = [3, 3, 5, 3, 1, 4]

positive_keywords = ["excellent", "helpful"]
negative_keywords = ["issue", "not working", "waiting"]

positive_customers = []
negative_customers = []
positive_count = 0
negative_count = 0
neutral_count = 0

for name, feedback, rating in zip(customer_names, customer_feedback, ratings):
    clean_name = " ".join(name.split()).title()
    clean_feedback = " ".join(feedback.split())
    feedback_lower = clean_feedback.lower()

    has_positive_word = any(word in feedback_lower for word in positive_keywords)
    has_negative_word = any(word in feedback_lower for word in negative_keywords)

    if rating >= 4 or has_positive_word:
        sentiment = "Positive"
        positive_customers.append(clean_name)
        positive_count += 1
    elif rating <= 2 or has_negative_word:
        sentiment = "Negative"
        negative_customers.append(clean_name)
        negative_count += 1
    else:
        sentiment = "Neutral"
        neutral_count += 1

    print(f"{clean_name:<15} | Rating: {rating} | {clean_feedback:<30} | {sentiment}")

print()
print("Customers Giving Positive Feedback:", positive_customers)
print("Number of Positive Responses:", positive_count)
print("Customers Giving Negative Feedback:", negative_customers)
print("Number of Negative Responses:", negative_count)
print("Number of Neutral Responses:", neutral_count)
```

```text
Anita Dcruz     | Rating: 3 | Loan process was quick         | Neutral
Rohit Mehta     | Rating: 3 | Excellent support from staff   | Positive
Sunil Kamat     | Rating: 5 | Card not working at POS        | Positive
Fatima Shaikh   | Rating: 3 | Branch was fine                | Neutral
Vikram Rane     | Rating: 1 | Very rude behaviour            | Negative
Neha Joshi      | Rating: 4 | App has an issue               | Positive
```

```text
Customers Giving Positive Feedback: ['Rohit Mehta', 'Sunil Kamat', 'Neha Joshi']
Number of Positive Responses: 3
Customers Giving Negative Feedback: ['Vikram Rane']
Number of Negative Responses: 1
Number of Neutral Responses: 2
```

Six records, not five. Three Positive, one Negative, two Neutral. Four behaviours worth noting:

- `"ROHIT MEHTA"` and `"sunil  kamat"` both come out title-cased and single-spaced.
- Rohit is Positive on the **keyword** alone (rating 3).
- Sunil is Positive on the **rating** alone, even though the text says "not working" — the
  Positive rung is tested first, exactly as the paper's bullet order implies.
- Neha (rating 4, text "app has an issue") is likewise Positive for the same reason.
- `"Very rude behaviour"` matches no keyword in the paper's list; Vikram is Negative purely
  because the rating is 1.

### Index-based version, if the examiner says "use the index"

```python
# Index-based variant of the same loop. Use this when you ALSO need the
# record number, or when the examiner says "use the index position".
customer_names = [" Riya Naik", "Karan Shah", "Meena Patil                          ",
                  "Dev Rao", "Asha Singh"]
customer_feedback = [" Excellent branch service ", "ATM was not working",
                     "Staff was helpful ", "Long waiting time", "Mobile app issue"]
ratings = [5, 2, 4, 1, 3]

for i in range(len(customer_names)):          # 0, 1, 2, 3, 4
    name = " ".join(customer_names[i].split()).title()
    text = " ".join(customer_feedback[i].split()).lower()
    rating = ratings[i]
    print(f"Record {i+1}: {name:<12} rating={rating} text={text!r}")
```

```text
Record 1: Riya Naik    rating=5 text='excellent branch service'
Record 2: Karan Shah   rating=2 text='atm was not working'
Record 3: Meena Patil  rating=4 text='staff was helpful'
Record 4: Dev Rao      rating=1 text='long waiting time'
Record 5: Asha Singh   rating=3 text='mobile app issue'
```

**Variants of Q2 the examiner can ask instead**

| Variant | Change |
| --- | --- |
| "also print the Neutral customers" | a third list `neutral_customers` + `append` in the `else` |
| "count for each sentiment" | already there: three counters |
| "report the average rating of the Positive customers" | `pos_rating_total += rating` in the Positive branch, divide by `positive_count` with the zero guard |
| "use a dictionary instead of two lists" | `results = {"Positive": [], "Negative": [], "Neutral": []}` then `results[sentiment].append(clean_name)` |
| "the keywords are supplied as a list" | already there: `positive_keywords`, `negative_keywords` |
| "print the feedback in upper case" | `clean_feedback.upper()` |
| "sort the positive names alphabetically" | `print(sorted(positive_customers))` |
| "a record is Negative only if the rating is low AND a bad word appears" | `and` instead of `or` |
| "there is also a city list" | add it to the `zip(...)` call: `zip(names, feedback, ratings, cities)` |

**Traps specific to Q2**

- Appending the **raw** name gives `'Meena Patil                          '` in the output list
  and loses marks even though the logic is right.
- `.title()` on the *feedback* is wrong — the paper only asks for the name in title case.
- Lowercasing the **name** breaks the expected `'Riya Naik'`.
- Testing `"excellent" in feedback` against the un-lowercased `" Excellent branch service "`
  returns `False`, and Riya then falls through to... Positive anyway (rating 5). The bug hides
  here and only shows up on a record like Rohit above. Lowercase always.
- Order: Positive rung first. See P3.8.
- `print("...", positive_customers)` is the required output shape — do not `join` the list into
  a bare string; the sample output shows Python's list repr with square brackets.

---

## Write-up answers

Short written answers that carry marks when the paper asks "explain" or "discuss".

**"Why must the total be built inside the loop instead of using `sum()`?"**
The exercise is testing loop mechanics, not the standard library. Building the total inside the
loop shows that you understand accumulation: a variable initialised to zero before the loop and
increased by each element as it is visited. It is also the only approach that generalises to
conditional totals — for example, the total of only the Senior Review claims — because the
addition sits inside the relevant `if` branch. `sum()` can only total a whole sequence, so it
would need a separate filtering step.

**"Why does the order of the `elif` conditions matter?"**
Python evaluates the rungs of an `if / elif / else` ladder top to bottom and stops at the first
`True`. A later condition therefore only ever sees values that already failed every earlier one.
If a wide band such as `return > 0` is placed above a narrow band such as `return > 2`, every
value above 2 is captured by the wide band and the narrow rung becomes unreachable code. Python
gives no warning. The rule is to order from the most extreme or most specific band inwards, which
also lets each middle band be written with a single comparison.

**"The sum of the returns prints as 0.8999999999999999. Is the program wrong?"**
No. Values such as 1.8 and -0.7 cannot be represented exactly in binary floating point, so each
addition carries a tiny rounding error and the errors accumulate. `sum()` produces exactly the
same value, which confirms the loop is correct. The fix is presentational: display the result
with `f"{total:.2f}"` or `round(total, 2)`, which gives 0.9. Never compare floats for equality
for the same reason — use a tolerance if you must.

**"What happens if the list is empty, or if a band has no members?"**
`len(values)` is then 0, or the band counter is 0, and computing the average raises
`ZeroDivisionError`, which stops the whole program. Guard every division with
`if count > 0:` and print an explicit "not applicable" message in the `else`. The counts and
totals themselves are still valid at 0 and should be printed, because "zero claims in this band"
is a genuine finding.

**"Why clean the text with `" ".join(s.split())` rather than `s.strip()`?"**
`strip()` only removes whitespace at the two ends of the string, so `"Meena   Patil"` keeps its
internal double space and would not compare equal to `"Meena Patil"`. `s.split()` with no
argument splits on any run of whitespace and discards the empties; re-joining with a single
space therefore normalises the ends **and** the interior in one expression. `s.replace(" ", "")`
must not be used for this, because it deletes the separator between the words as well.

---

## Chapter cheat sheet

```python
# ---------- THE SKELETON (Ex 2, 4, 5, 7, 9 and Midterm Q2 all fit this) ----
values = [...]                      # data from the question
total = 0; count_a = 0; matched = []          # accumulators BEFORE the loop
for v in values:                              # or enumerate / zip / range(len)
    if   v <  LOW:  label = "A"
    elif v <= HIGH: label = "B"               # "LOW to HIGH inclusive"
    else:           label = "C"; count_a += 1 # count inside the branch
    total += v                                # outside ladder = grand total
    print(v, "-", label)                      # per-record line
print(count_a, total, total / len(values))    # summary AFTER the loop

# ---------- ITERATION ------------------------------------------------------
for v in L:                             # value only
for i, v in enumerate(L, start=1):      # 1-based number + value
for i in range(len(L)):                 # index -> L[i]; needed to modify L
for a, b in zip(A, B):                  # parallel lists (stops at shortest!)
for i, (a, b) in enumerate(zip(A, B), start=1)
for v in reversed(L) / sorted(L) / L[::2] / L[1:]

# ---------- ACCUMULATE -----------------------------------------------------
total += v      count += 1      product *= v        # product starts at 1
matched.append(x)        len(matched)               # list + its count
counts[label] += 1                                  # dict of counters
if count: avg = total / count                       # ZeroDivisionError guard
if v > highest: highest = v                         # max without max()

# ---------- WORDING -> CONDITION -------------------------------------------
# less than X / below X ............ v <  X
# X or less / up to X / not more ... v <= X
# more than X / above X / exceeds .. v >  X
# X or more / at least / not less .. v >= X
# from X to Y inclusive ............ X <= v <= Y   (after an earlier rung: v <= Y)
# more than X but not more than Y .. X <  v <= Y   (after: v <= Y)
# less than X but not less than Y .. Y <= v <  X   (after: v >= Y)
# exactly 0 ........................ v == 0
# up to 2 completed years .......... v <= 2
# ORDER: most extreme / most specific rung first; else = the last band.

# ---------- STRINGS --------------------------------------------------------
s.strip()  s.lstrip()  s.rstrip()  s.strip("#")     # ends only
" ".join(s.split())                                 # ends + internal runs
s.title()  s.upper()  s.lower()  s.capitalize()
s.replace(old, new)   s.split()   s.split(",")   ", ".join(list)
s.startswith(p)  s.endswith(p)  s.count(w)  len(s.split())

# ---------- KEYWORD RULES --------------------------------------------------
t = " ".join(raw.split()).lower()                   # clean + lowercase ONCE
"word" in t                                         # substring, CASE SENSITIVE
any(k in t for k in KEYWORDS)                       # any keyword present
all(k in t for k in KEYWORDS)                       # every keyword present
not any(k in t for k in KEYWORDS)                   # none present
sum(k in t for k in KEYWORDS)                       # how many matched
if rating >= 4 or has_pos: ... elif rating <= 2 or has_neg: ... else: ...

# ---------- WHILE ----------------------------------------------------------
while True:                                # sentinel: unknown count of inputs
    e = float(input("... (0 to stop): "))
    if e == 0: break
    total += e; count += 1
while v < 1 or v > 5: v = int(input(...))  # validation
n = 1
while n <= N: ...; n += 1                  # forget n += 1 -> infinite loop

# ---------- LOOP CONTROL ---------------------------------------------------
continue        # skip the rest of THIS pass (put the guard first)
break           # exit the loop
for...else      # else runs only if no break fired
any(c for v in L) / all(...)               # one-line flag

# ---------- OUTPUT ---------------------------------------------------------
f"{x:.2f}"    f"{x:,.2f}"    f"{x:>12}"    f"{s:<15}"    f"{s:^10}"
f"{x:>12,.2f}"    f"{0.6471:.2%}"    f"{s!r}"    print("-" * 40)    print()
print("Label:", my_list)                   # list repr IS the required output
```

**Five checks before you submit a loop answer**

1. Every accumulator is initialised **above** the `for`, and every summary `print` is **below** it.
2. The ladder's rungs go extreme-to-narrow, and the two band-edge values land in the right bands.
3. The counts add up to `len(values)`.
4. Every division is guarded, and every money/percentage value is printed through `:.2f`.
5. If the paper printed a sample output, your text matches it character for character.
