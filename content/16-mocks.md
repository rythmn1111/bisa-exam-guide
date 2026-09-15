---
id: 16-mocks
part: "Part VII — Exam Room"
title: "Mock Papers with Answer Keys"
blurb: "The real midterm decoded, then four complete mock papers — pre-midterm, Pandas, Matplotlib, and a 100-mark full paper — with marking schemes, verified answer keys, a question-spotting index and a 48-hour revision plan."
order: 160
covers:
  - "BIFS 2026-27 ITP MT QP — the actual midterm paper, Q1 to Q3"
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercises 1 to 10"
  - "Pandas exercises — 04 Sorting, slicing and pivot — Exercise 2 (Retail Bank Loans)"
  - "Integrated exercises — Case 2 (Corporate Bond Portfolio Review)"
  - "Integrated exercises — Case 3 (Insurance Claims Portfolio Analysis)"
datafiles:
  - "Pandas exercises/04 Sorting, slicing and pivot/Exercise 2/bank_loans.csv"
  - "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
  - "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
patterns:
  - id: P16.1
    title: "Read the paper and budget the clock"
    phrasings:
      - "Answer Q1 in the space provided"
      - "ANSWERS TO Q2 AND Q3 TO BE PROVIDED IN JUPYTER NOTEBOOK"
      - "SAVE THE OUTPUT BEFORE SUBMITTING"
      - "ENSURE THAT YOU SUBMIT THE RIGHT FILE"
      - "Write a well commented Python program to"
      - "Sample input and output are provided purely for illustration"
      - "The program should continue to work if the values in the supplied lists are changed"
      - "Display all monetary values up to two decimal places"
  - id: P16.2
    title: "Turn an exam phrasing into the right technique"
    phrasings:
      - "which method do I use when the question says handle the missing values"
      - "what does display the record of customer C007 mean in code"
      - "the question says frequency distribution with class intervals"
      - "the question says create one figure with a 2 by 2 layout"
      - "the question says all observations appearing in the left table should remain"
      - "I know what the sentence means but not which function to type"
---

## Reading the real paper

The 2026-27 midterm is four printed pages, **50 marks**, three questions. Here is the whole
skeleton.

| Q | Marks | Answered | Archetype | Skill under test |
| --- | --- | --- | --- | --- |
| Q1 | 10 | On paper, "in the space provided" | Design critique | `set` / `tuple` / `list` / `str` — when each is wrong |
| Q2 | 20 | Jupyter notebook | Loop-and-classify | parallel lists, `strip`, `title`, `in`, `if/elif/else`, `append`, `len` |
| Q3 | 20 | Jupyter notebook | Function-and-formula | `input()`, compulsory vs default parameters, docstring, `return` of three values, unpacking, `.2f`, a Markdown cell |
| | **50** | | | |

**Forty of the fifty marks are typed into a notebook.** Roughly **30 of the 50** are boilerplate
you can write before you have finished reading the question: the comment header, the loop over
`range(len(...))` or `zip(...)`, the empty accumulator lists, the `def` line with its docstring,
the `format(x, ".2f")` printing, the Markdown cell.

### The three archetypes, and nothing else

1. **The written critique (10).** A junior analyst has picked the wrong container four times.
   You name the container, name the symptom, name the correct container, and say why. Four
   defects, roughly 2–3 marks each, plus marks for structure.
2. **The loop-and-classify (20).** Two or three *parallel* lists. Clean the strings. Apply a
   numeric rule **OR** a keyword rule. Push names into category lists. Count them. Print. The
   paper's own footnote — *"The program should continue to work if the values in the supplied
   lists are changed"* — is the marking instruction: no hard-coded `5`, no hard-coded counts.
3. **The function-and-formula (20).** Three `input()` calls with correct casts. One `def` with
   two compulsory parameters and one default. A compound formula. `return` of three values.
   Unpack into three variables. Print each to two decimals. Plus a Markdown cell with a
   level-1 heading, a bold-and-italic subtitle and a three-item bulleted list.

The ten "Exercises to practice pre-midterm portion" are the same two archetypes ten times over:
five loop-and-classify (deposits, returns, delay days, claims, risk scores) and five
function-and-formula (advisory fee, claim settlement, trade cost, FD maturity, loan cost). Every
single one of the five function questions asks for **three compulsory parameters plus one
default**, **three return values**, **a classification after the call**, **two decimal places**,
**a docstring** and **a Markdown cell**. Learn that one shape and you have 20 marks before you
read the formula.

### What the rubric plainly rewards

These are the paper's own words. Each is a mark.

| The paper says | What the marker ticks |
| --- | --- |
| "Write a well commented Python program" | `#` comments on every logical step, not one at the top |
| "regular comments as well as docstring" | **Both.** A docstring alone loses the comment mark |
| "SAVE THE OUTPUT BEFORE SUBMITTING" | Cells show output. An unrun notebook scores code only |
| "ENSURE THAT YOU SUBMIT THE RIGHT FILE" | Correct filename, correct folder, `.ipynb` not `.py` |
| "should continue to work if the values … are changed" | `len()`, loops, no magic numbers |
| "Display all monetary values up to two decimal places" | `format(x, ".2f")` or an f-string |
| "compulsory parameters … must be a default parameter" | Parameter *kinds* are marked separately |
| "Call the function without passing the annual rate of return" | You must actually exercise the default |
| "Store the three returned values in separate variables" | Tuple unpacking, not `result[0]` |
| "Use a level-1 heading … bold and italics … a bulleted list" | The Markdown cell carries marks |
| "using suitable data types" | `float(input(...))` and `int(input(...))`, not raw strings |

---

## P16.1 — Read the paper and budget the clock

**Exam phrasings**

- "Answer Q1 in the space provided."
- "ANSWERS TO Q2 AND Q3 TO BE PROVIDED IN JUPYTER NOTEBOOK. SAVE THE OUTPUT BEFORE SUBMITTING."
- "Write a well commented Python program to:"
- "Note: Sample input and output are provided purely for illustration."
- "The program should continue to work if the values in the supplied lists are changed."
- "Display all monetary values up to two decimal places."

**Core idea.** Spend the first four minutes *not coding*. Read all questions, write the
boilerplate, then answer in the order **cheapest marks first**. The Markdown cell in Q3 is worth
2–3 marks and takes 40 seconds; the design critique is worth 10 and needs no machine at all.

**Template** — the first cell of every exam notebook, typed from memory before you read anything:

```python
# Name: <your name>   Roll: <your roll no>   BIFS ITP <paper>
# ------------------------------------------------------------------
import pandas as pd                 # only if the paper touches data files
import numpy as np                  # only if you need np.nan
import matplotlib.pyplot as plt     # only if the paper asks for a chart

pd.set_option("display.width", 140)      # stops wide frames wrapping ugly
pd.set_option("display.max_columns", 40)

PATH = "bank_loans.csv"             # <-- the file sitting next to this notebook
```

**Worked — a 60-minute, 50-mark budget**

| Minutes | Do this | Why |
| --- | --- | --- |
| 0–4 | Read all three questions end to end. Underline every number, every keyword list, every "two decimal places" | You cannot budget what you have not read |
| 4–6 | Type the boilerplate cell above **and** the Q3 Markdown cell | 3 marks banked in 2 minutes |
| 6–18 | Q1 on paper. Four defects, four paragraphs, each: container → symptom → correction → reason | 10 marks, no debugging risk |
| 18–38 | Q2 in the notebook. Loop skeleton first, cleaning second, rules third, printing last | 20 marks |
| 38–55 | Q3 in the notebook. `def` + docstring first, formula second, `input()` third, printing last | 20 marks |
| 55–58 | Run every cell **top to bottom** once. Fix anything red | "SAVE THE OUTPUT" |
| 58–60 | Save. Rename to the required filename. Upload. Confirm the upload | "SUBMIT THE RIGHT FILE" |

For the 100-mark, 90-minute post-midterm paper the arithmetic is **0.9 minutes per mark**. Read
for 6 minutes, write the import cell, then never spend more than 9 minutes on a 10-mark question.
If a question is stuck, `print()` whatever you have, write a one-line comment saying what you
intended, and move on — partial credit is real.

**Variants**

| If the paper says | Change the plan to |
| --- | --- |
| "Answer any three of the following five" | Read all five, score them 1–5 on confidence, do the three highest **in that order** |
| "Q1 in the space provided" | Answer it in ink, not in the notebook — a critique typed in a code cell can be marked zero |
| "attach the saved figure" | `plt.savefig("q9.png", dpi=110, bbox_inches="tight")` **before** `plt.show()`, and check the file exists |
| "the dataset will be provided in the lab folder" | First cell: `import os; print(os.listdir())` — confirm the exact filename before you type it |
| "state any assumptions you make" | Add a Markdown cell titled `Assumptions` and list them. Free marks |

**Traps**

- Writing the code before the Markdown cell. You run out of time and lose the easiest marks in
  the paper.
- Answering the written question in the notebook when the paper says "in the space provided".
- `plt.show()` before `plt.savefig()` — the saved file is blank. Save first, always.
- Not re-running from the top. A notebook that only works because of a cell you deleted will
  fail the marker's re-run.
- Forgetting the final upload check. Every year somebody submits an empty file.

**Drill**

1. Time yourself: type the boilerplate cell and the Q3 Markdown cell from memory. Target: under
   120 seconds, zero syntax errors.

---

## Mock A — pre-midterm shape (50 marks, 60 minutes)

**Data**: none. All data is printed inside the questions. Q1 is answered on paper; Q2 and Q3 in a
Jupyter notebook named `MockA_<yourroll>.ipynb`. Save the output before submitting.

### Q1 (10 marks) — answer in the space provided

A mutual fund **registrar and transfer agent (RTA)** in Panaji is building a folio-servicing
system. A junior analyst has produced the first design.

The complete schedule of a folio's SIP instalment dates has been stored in a **set**. During
user testing the operations team found that the instalments no longer appeared in date order,
and that two instalments debited on the same date were shown only once.

Each investor's **name, age, city, mobile number and KYC status** were stored together in a
single **tuple**. The RTA has since been asked to let investors update their city, mobile number
and KYC status independently of one another. The development team also complained that nobody
could remember which position in the tuple held which detail.

The RTA services schemes from several asset management companies. The analyst put every **scheme
code** into a **list**, including the codes that arrived repeatedly from three different feed
files. The **ISIN prefix and check digit**, which together form a fixed two-part security
identifier that must never change, were also stored in a **list**.

Investor PAN numbers such as `ABCDE1234F` were stored as collections of individual characters
rather than as one value.

Evaluate the analyst's design, identify the errors and suggest appropriate corrections.

**Marking scheme.** Four defect areas, 2 marks each — 1 mark for naming the wrong container and
its symptom, 1 mark for naming the correct container. The third paragraph hides **two** separate
list errors, so treat it as one area with two halves. 2 further marks for a structured answer that
states the general principle: ordered/unordered, mutable/immutable, duplicates allowed/collapsed.

### Q2 (20 marks) — Jupyter notebook

A bank has collected remarks from customers who used its new mobile banking app.

```text
Customer names:
[" ravi shet  ", "NEELAM  KAMAT", "  sagar naik", "farida shaikh   ",
 " dinesh   prabhu ", "tanvi dessai", "  ARJUN  fernandes "]

Customer remarks:
["  Transfers are smooth and quick  ", "Statement download FAILED twice",
 " Support staff were polite ", "UPI mandate error every month",
 "  Login delay in the mornings", " App is okay for now  ",
 "Portfolio view is very clear"]

Ratings: 5, 1, 3, 2, 3, 3, 4
```

Write a well commented Python program to:

- Process every customer record using a loop.
- Remove extra spaces from each customer name and remark, including repeated spaces **inside**
  a name.
- Convert each customer name to title case.
- Classify the remark as **Positive** if the rating is 4 or above, **or** the remark contains
  `"smooth"` or `"quick"`.
- Classify the remark as **Negative** if the rating is 2 or below, **or** the remark contains
  `"failed"`, `"delay"` or `"error"`.
- Classify all other remarks as **Neutral**.
- Store the names of customers giving positive remarks in one list and the names giving negative
  remarks in another list.
- Count the number of positive, negative and neutral responses.
- Print a one-line audit trail per customer, then both final lists and all three counts.

The output should look as under:

```text
Customers Giving Positive Feedback: ['Ravi Shet', 'Arjun Fernandes']
Number of Positive Responses: 2
Customers Giving Negative Feedback: ['Neelam Kamat', 'Farida Shaikh', 'Dinesh Prabhu']
Number of Negative Responses: 3
Number of Neutral Responses: 2
```

*Note: sample input and output are provided purely for illustration. The program must continue to
work if the values in the supplied lists are changed, including if a sixth or eighth customer is
added.*

**Marking scheme (20).** 3 marks single loop driven by `len()` or `zip()`; 2 marks whitespace
cleaned including internal runs; 2 marks `.title()`; 4 marks the Positive rule with **both** the
numeric and the keyword branch; 4 marks the Negative rule likewise; 2 marks the two name lists
populated correctly; 2 marks counts taken with `len()` not hard-coded; 1 mark comments throughout.
Marks are lost for lower-casing the *stored* name, for case-sensitive keyword matching, and for
testing Negative before Positive.

### Q3 (20 marks) — Jupyter notebook

A housing finance company wants a program that estimates the cost of a home loan. Write a well
commented Python program that accepts the following inputs from the user using suitable data
types:

- borrower name,
- loan amount sanctioned, and
- repayment tenure in years.

Create a well commented function (regular comments **as well as** a docstring) named
`emi_summary()` that accepts the **loan amount** and the **tenure in years** as compulsory
parameters. The annual rate of interest must be a **default parameter with a default value of
9.5**.

Inside the function calculate:

```text
Monthly Rate  r = Annual Rate / (12 x 100)
Instalments   n = Tenure in Years x 12

                      r (1 + r)^n
EMI = Loan Amount x -----------------
                      (1 + r)^n - 1

Total Amount Repayable = EMI x n
Total Interest Payable = Total Amount Repayable - Loan Amount
```

The function must return three values: **the monthly EMI, the total interest payable and the
total amount repayable**.

Call the function **without** passing the annual rate of interest. Store the three returned
values in separate variables and print each value individually. Then compute the total interest
as a percentage of the loan amount and classify the burden as:

- **Low Interest Burden** if the percentage is below 100%,
- **Moderate Interest Burden** if it is from 100% to 150%, inclusive,
- **High Interest Burden** if it is above 150%.

Display all monetary values up to two decimal places.

```text
Sample input:
Enter borrower name: Rohit Naik
Enter loan amount: 2500000
Enter tenure in years: 20

Sample output:
Borrower Name: Rohit Naik
Monthly EMI: Rs. 23303.28
Total Interest Payable: Rs. 3092787.13
Total Amount Repayable: Rs. 5592787.13
Interest as % of Principal: 123.71 %
Interest Burden: Moderate Interest Burden
```

Before writing the Python program, create a Markdown cell that should appear in the notebook as:

```text
Home Loan EMI Calculator
Monthly repayment planner

This program estimates:

  - Monthly EMI
  - Total interest payable
  - Total amount repayable
```

Use a level-1 heading for the title, **bold and italics** for the subtitle, and a bulleted list
for the three outputs.

**Total: 10 + 20 + 20 = 50 marks.**

**Marking scheme.** 3 marks three `input()` calls with correct casts (`str`, `float`, `int`);
2 marks function name and the two compulsory parameters; 2 marks the default parameter
`annual_rate=9.5`; 2 marks docstring; 2 marks regular comments; 4 marks the EMI formula
(1 for `r`, 1 for `n`, 2 for the compound expression); 2 marks `return` of three values and
unpacking into three variables; 1 mark two-decimal formatting; 1 mark the classification;
1 mark the Markdown cell with all three required elements.

### Answer key

<details><summary>Q1 — model answer (10 marks)</summary>

Write it as four labelled defects. Each paragraph: **container used → symptom observed →
correct container → why**. A marker scanning for keywords wants to see *ordered*, *mutable*,
*duplicates*, *immutable*, *named access*.

> **Defect 1 — SIP instalment schedule stored in a `set`.**
> A `set` is an *unordered* collection that *cannot hold duplicates*. That is exactly why the
> instalment dates lost their chronological sequence and why two instalments debited on the same
> date collapsed into one entry. An instalment schedule is a sequence in which repetition is
> meaningful, so it must be stored in a **`list`** (ordered, mutable, duplicates allowed). If the
> schedule must never be edited after generation, a **`tuple`** is acceptable; a `set` is not.
>
> **Defect 2 — investor name, age, city, mobile number and KYC status in a single `tuple`.**
> A `tuple` is *immutable*, so the requirement to update city, mobile number and KYC status
> independently cannot be met at all — any change forces the whole record to be rebuilt. A tuple
> is also accessed by position, which is why the team could not remember whether `investor[2]`
> was the city or the mobile number. The correct structure is a **`dict`** with descriptive keys
> (`{"name": ..., "age": ..., "city": ..., "mobile": ..., "kyc_status": ...}`): mutable, and
> self-documenting because each field is reached by name.
>
> **Defect 3a — scheme codes in a `list` that contains repeats.**
> A `list` permits duplicates, so the same scheme code arriving from three feed files is stored
> three times, which inflates every count and every loop. A master catalogue of scheme codes is a
> collection of *unique* identifiers, so it should be a **`set`** — duplicates are removed
> automatically and membership testing (`code in scheme_codes`) is fast.
>
> **Defect 3b — the ISIN prefix and check digit in a `list`.**
> These two elements form a fixed two-part record that must never change, yet a `list` is mutable
> and can be appended to, so nothing prevents a third element or an accidental overwrite. A
> fixed-length record that must stay constant belongs in a **`tuple`**, whose immutability is the
> protection required.
>
> **Defect 4 — PAN stored as individual characters.**
> Splitting `ABCDE1234F` into ten single-character items destroys it as a value: it cannot be
> compared with another PAN, validated for its five-letters-four-digits-one-letter pattern, or
> printed without being rejoined. A PAN is a single textual value and must be stored as a
> **`str`**, which still supports character access (`pan[0]`), slicing (`pan[5:9]`) and methods
> such as `.startswith()` and `.isalnum()`.
>
> **Principle.** Choose the container from three questions: does order matter, must the contents
> change, and are duplicates meaningful? Ordered and changeable → `list`. Ordered and fixed →
> `tuple`. Unordered and unique → `set`. Fields with names → `dict`. A single text value →
> `str`.

Evidence you can run in 30 seconds if the paper allows a notebook. Quote the output in your
answer.

```python
# --- evidence for the Q1 write-up (run it, quote it) ---------------
sip_dates = {"05-04-2026", "05-05-2026", "05-04-2026", "05-06-2026"}
print("set stored :", sip_dates)                 # order gone, duplicate gone
print("length     :", len(sip_dates), "instead of 4")

investor = ("Riya Naik", 34, "Panaji", "9822011223", "Active")
try:
    investor[3] = "9822099887"                    # try to change the mobile number
except TypeError as e:
    print("TypeError  :", e)

investor_dict = {"name": "Riya Naik", "age": 34, "city": "Panaji",
                 "mobile": "9822011223", "kyc_status": "Active"}
investor_dict["mobile"] = "9822099887"            # self-documenting and mutable
print("dict after :", investor_dict["mobile"])

scheme_codes = ["HDFC01", "ICICI02", "HDFC01", "SBI03", "ICICI02"]
print("list       :", scheme_codes, "->", len(scheme_codes), "entries")
print("set        :", sorted(set(scheme_codes)), "->", len(set(scheme_codes)), "unique schemes")

pan_chars = ['A','B','C','D','E','1','2','3','4','F']
print("as chars   :", pan_chars, "len", len(pan_chars))
pan = "".join(pan_chars)
print("as str     :", pan, "| startswith ABC:", pan.startswith("ABC"), "| pan[5:9]:", pan[5:9])
```

```text
set stored : {'05-04-2026', '05-05-2026', '05-06-2026'}
length     : 3 instead of 4
TypeError  : 'tuple' object does not support item assignment
dict after : 9822099887
list       : ['HDFC01', 'ICICI02', 'HDFC01', 'SBI03', 'ICICI02'] -> 5 entries
set        : ['HDFC01', 'ICICI02', 'SBI03'] -> 3 unique schemes
as chars   : ['A', 'B', 'C', 'D', 'E', '1', '2', '3', '4', 'F'] len 10
as str     : ABCDE1234F | startswith ABC: True | pan[5:9]: 1234
```

The order inside `{...}` may differ on your machine — Python does not promise a set's order, and
**that is precisely the defect** the question is describing.

</details>

<details><summary>Q2 — full solution (20 marks)</summary>

```python
# ------------------------------------------------------------------
# Mock A - Q2 : classify customer remarks on the mobile banking app
# ------------------------------------------------------------------

# --- Input data: three PARALLEL lists (same length, same order) ----
names = [" ravi shet  ", "NEELAM  KAMAT", "  sagar naik",
         "farida shaikh   ", " dinesh   prabhu ", "tanvi dessai",
         "  ARJUN  fernandes "]

remarks = ["  Transfers are smooth and quick  ",
           "Statement download FAILED twice",
           " Support staff were polite ",
           "UPI mandate error every month",
           "  Login delay in the mornings",
           " App is okay for now  ",
           "Portfolio view is very clear"]

ratings = [5, 1, 3, 2, 3, 3, 4]

# --- Keyword rules kept in lists so the marker can see them --------
POSITIVE_WORDS = ["smooth", "quick"]
NEGATIVE_WORDS = ["failed", "delay", "error"]

# --- Output containers --------------------------------------------
positive_names = []
negative_names = []
neutral_names  = []

# --- Process every record with ONE loop over the index ------------
for i in range(len(names)):

    # 1. clean the name: strip the ends AND squeeze inner runs of spaces
    clean_name = " ".join(names[i].split())
    clean_name = clean_name.title()

    # 2. clean the remark the same way, keep a lower-case copy for matching
    clean_remark = " ".join(remarks[i].split())
    remark_lower = clean_remark.lower()

    rating = ratings[i]

    # 3. classify - POSITIVE test first, then NEGATIVE, else NEUTRAL
    if rating >= 4 or any(word in remark_lower for word in POSITIVE_WORDS):
        category = "Positive"
        positive_names.append(clean_name)
    elif rating <= 2 or any(word in remark_lower for word in NEGATIVE_WORDS):
        category = "Negative"
        negative_names.append(clean_name)
    else:
        category = "Neutral"
        neutral_names.append(clean_name)

    # 4. per-record audit line
    print(clean_name, "|", rating, "|", category)

# --- Summary -------------------------------------------------------
print()
print("Customers Giving Positive Feedback:", positive_names)
print("Number of Positive Responses:", len(positive_names))
print("Customers Giving Negative Feedback:", negative_names)
print("Number of Negative Responses:", len(negative_names))
print("Number of Neutral Responses:", len(neutral_names))
```

```text
Ravi Shet | 5 | Positive
Neelam Kamat | 1 | Negative
Sagar Naik | 3 | Neutral
Farida Shaikh | 2 | Negative
Dinesh Prabhu | 3 | Negative
Tanvi Dessai | 3 | Neutral
Arjun Fernandes | 4 | Positive

Customers Giving Positive Feedback: ['Ravi Shet', 'Arjun Fernandes']
Number of Positive Responses: 2
Customers Giving Negative Feedback: ['Neelam Kamat', 'Farida Shaikh', 'Dinesh Prabhu']
Number of Negative Responses: 3
Number of Neutral Responses: 2
```

**Why each line earns its mark**

| Line | Mark |
| --- | --- |
| `for i in range(len(names))` | Works for any list length — the footnote's requirement |
| `" ".join(x.split())` | Strips the ends **and** collapses `"NEELAM  KAMAT"` to one space |
| `.title()` applied **after** cleaning | `"  sagar naik"` → `"Sagar Naik"` |
| `remark_lower` used only for matching | `"FAILED"` still matches `"failed"`; the stored name stays title case |
| `any(w in remark_lower for w in WORDS)` | One expression covers the whole keyword list |
| Positive tested before Negative | The paper lists Positive first; Dinesh (rating 3, "delay") must land in Negative |
| `len(positive_names)` | Never a typed number |

**Variants the examiner can spring**

Use `zip()` instead of `range(len(...))` and collect into a dictionary of buckets:

```python
names = [" ravi shet  ", "NEELAM  KAMAT", "  sagar naik", "farida shaikh   ",
         " dinesh   prabhu ", "tanvi dessai", "  ARJUN  fernandes "]
remarks = ["  Transfers are smooth and quick  ", "Statement download FAILED twice",
           " Support staff were polite ", "UPI mandate error every month",
           "  Login delay in the mornings", " App is okay for now  ",
           "Portfolio view is very clear"]
ratings = [5, 1, 3, 2, 3, 3, 4]

buckets = {"Positive": [], "Negative": [], "Neutral": []}
for raw_name, raw_remark, rating in zip(names, remarks, ratings):
    name = " ".join(raw_name.split()).title()
    text = " ".join(raw_remark.split()).lower()
    if rating >= 4 or any(w in text for w in ["smooth", "quick"]):
        buckets["Positive"].append(name)
    elif rating <= 2 or any(w in text for w in ["failed", "delay", "error"]):
        buckets["Negative"].append(name)
    else:
        buckets["Neutral"].append(name)

for label in ["Positive", "Negative", "Neutral"]:
    print(label, len(buckets[label]), buckets[label])
```

```text
Positive 2 ['Ravi Shet', 'Arjun Fernandes']
Negative 3 ['Neelam Kamat', 'Farida Shaikh', 'Dinesh Prabhu']
Neutral 2 ['Sagar Naik', 'Tanvi Dessai']
```

"Also report the average rating in each category" — accumulate inside the loop, never with
`sum()` if the paper forbids it:

```python
tot = {"Positive": 0, "Negative": 0, "Neutral": 0}
cnt = {"Positive": 0, "Negative": 0, "Neutral": 0}
for raw_name, raw_remark, rating in zip(names, remarks, ratings):
    text = " ".join(raw_remark.split()).lower()
    if rating >= 4 or any(w in text for w in ["smooth", "quick"]):
        c = "Positive"
    elif rating <= 2 or any(w in text for w in ["failed", "delay", "error"]):
        c = "Negative"
    else:
        c = "Neutral"
    tot[c] += rating
    cnt[c] += 1

for c in tot:
    print(c, "average rating:", format(tot[c] / cnt[c], ".2f"))
```

```text
Positive average rating: 4.50
Negative average rating: 2.00
Neutral average rating: 3.00
```

Why `.strip()` alone is not enough when the paper says "remove extra spaces":

```python
print(repr("NEELAM  KAMAT".strip().title()))
print(repr(" ".join("NEELAM  KAMAT".split()).title()))
```

```text
'Neelam  Kamat'
'Neelam Kamat'
```

</details>

<details><summary>Q3 — full solution (20 marks)</summary>

**The Markdown cell** (type it exactly like this in a Markdown cell, not a code cell):

```text
# Home Loan EMI Calculator
***Monthly repayment planner***

This program estimates:

- Monthly EMI
- Total interest payable
- Total amount repayable
```

`#` = level-1 heading. `***text***` = bold **and** italic in one go (`**_text_**` also works).
`-` = bulleted list. Three bullets, because the question asked for three.

**The code cell**

```python
# ==================================================================
# Mock A - Q3 : Home Loan EMI Calculator
# ==================================================================

def emi_summary(principal, tenure_years, annual_rate=9.5):
    """
    Estimate the monthly instalment of a reducing-balance home loan.

    Parameters
    ----------
    principal : float
        Loan amount sanctioned, in rupees (compulsory parameter).
    tenure_years : int
        Repayment period in years (compulsory parameter).
    annual_rate : float, optional
        Annual rate of interest in per cent. Default parameter, value 9.5.

    Returns
    -------
    tuple of (float, float, float)
        monthly_emi, total_interest, total_repayment
    """
    # monthly rate as a decimal fraction
    r = annual_rate / (12 * 100)
    # total number of monthly instalments
    n = tenure_years * 12

    # EMI = P * r * (1+r)^n / ((1+r)^n - 1)
    growth = (1 + r) ** n
    monthly_emi = principal * r * growth / (growth - 1)

    # derived totals
    total_repayment = monthly_emi * n
    total_interest  = total_repayment - principal

    return monthly_emi, total_interest, total_repayment


# --- 1. three inputs, each cast to a suitable data type ------------
borrower_name = input("Enter borrower name: ")            # str
loan_amount   = float(input("Enter loan amount: "))       # float
tenure        = int(input("Enter tenure in years: "))     # int

# --- 2. call WITHOUT the rate so the default 9.5 is used -----------
emi, interest, repayment = emi_summary(loan_amount, tenure)

# --- 3. classify the interest burden -------------------------------
burden_pct = interest / loan_amount * 100
if burden_pct < 100:
    burden = "Low Interest Burden"
elif burden_pct <= 150:
    burden = "Moderate Interest Burden"
else:
    burden = "High Interest Burden"

# --- 4. print every returned value separately, 2 decimal places ----
print()
print("Borrower Name:", borrower_name)
print("Monthly EMI: Rs.", format(emi, ".2f"))
print("Total Interest Payable: Rs.", format(interest, ".2f"))
print("Total Amount Repayable: Rs.", format(repayment, ".2f"))
print("Interest as % of Principal:", format(burden_pct, ".2f"), "%")
print("Interest Burden:", burden)
```

Typing `Rohit Naik`, `2500000`, `20` at the three prompts:

```text
Borrower Name: Rohit Naik
Monthly EMI: Rs. 23303.28
Total Interest Payable: Rs. 3092787.13
Total Amount Repayable: Rs. 5592787.13
Interest as % of Principal: 123.71 %
Interest Burden: Moderate Interest Burden
```

In a notebook each `input()` prompt appears on its own line with the typed value beside it. If
you run the same file from a terminal with piped input the three prompts print on one line — that
is a terminal artefact, not a bug.

**Variants** — the same function, exercised three ways:

```python
def emi_summary(principal, tenure_years, annual_rate=9.5):
    """EMI, total interest and total repayment for a reducing-balance loan."""
    r = annual_rate / (12 * 100)
    n = tenure_years * 12
    growth = (1 + r) ** n
    emi = principal * r * growth / (growth - 1)
    total = emi * n
    return emi, total - principal, total

print("### default rate 9.5 ###")
e, i, t = emi_summary(2500000, 20)
print(f"EMI Rs. {e:.2f} | Interest Rs. {i:.2f} | Repayment Rs. {t:.2f}")

print("### rate passed explicitly ###")
e, i, t = emi_summary(2500000, 20, 8.25)
print(f"EMI Rs. {e:.2f} | Interest Rs. {i:.2f} | Repayment Rs. {t:.2f}")

print("### keyword arguments, order does not matter ###")
e, i, t = emi_summary(annual_rate=11.0, tenure_years=15, principal=1800000)
print(f"EMI Rs. {e:.2f} | Interest Rs. {i:.2f} | Repayment Rs. {t:.2f}")
```

```text
### default rate 9.5 ###
EMI Rs. 23303.28 | Interest Rs. 3092787.13 | Repayment Rs. 5592787.13
### rate passed explicitly ###
EMI Rs. 21301.64 | Interest Rs. 2612393.91 | Repayment Rs. 5112393.91
### keyword arguments, order does not matter ###
EMI Rs. 20458.74 | Interest Rs. 1882574.07 | Repayment Rs. 3682574.07
```

The **same shape** answers every other formula the examiner can substitute. Two more, verified:

```python
def rd_summary(monthly_deposit, tenure_years, annual_rate=7.0):
    """Maturity value of a recurring deposit compounded monthly."""
    r = annual_rate / (12 * 100)
    n = tenure_years * 12
    maturity = monthly_deposit * (((1 + r) ** n - 1) / r) * (1 + r)
    invested = monthly_deposit * n
    return invested, maturity - invested, maturity

inv, gain, mat = rd_summary(4000, 5)
print(f"Invested Rs. {inv:.2f} | Interest Rs. {gain:.2f} | Maturity Rs. {mat:.2f}")

def redemption_summary(units, nav, holding_days, exit_load_pct=1.0):
    """Gross amount, exit load and net payout on a mutual-fund redemption.
    The exit load applies only if the units are held for less than 365 days."""
    gross = units * nav
    load = gross * exit_load_pct / 100 if holding_days < 365 else 0.0
    return gross, load, gross - load

for d in (200, 400):
    g, l, n = redemption_summary(1250.5, 46.82, d)
    print("days", d, "| gross Rs.", format(g, ".2f"),
          "| load Rs.", format(l, ".2f"), "| net Rs.", format(n, ".2f"))
```

```text
Invested Rs. 240000.00 | Interest Rs. 48042.11 | Maturity Rs. 288042.11
days 200 | gross Rs. 58548.41 | load Rs. 585.48 | net Rs. 57962.93
days 400 | gross Rs. 58548.41 | load Rs. 0.00 | net Rs. 58548.41
```

And the real paper's own SIP formula, so you can check the published sample output:

```python
def sip_summary(monthly_investment, years, annual_rate=12.0):
    """Future value of a SIP - the actual midterm Q3."""
    r = annual_rate / (12 * 100)
    n = years * 12
    fv = monthly_investment * (((1 + r) ** n - 1) / r) * (1 + r)
    invested = monthly_investment * n
    return invested, fv - invested, fv

a, b, c = sip_summary(5000, 10)
print(f"Invested Rs. {a:.2f} | Wealth gain Rs. {b:.2f} | Future value Rs. {c:.2f}")
```

```text
Invested Rs. 600000.00 | Wealth gain Rs. 561695.38 | Future value Rs. 1161695.38
```

Those three numbers match the printed paper exactly — so the reading of the formula is right, and
the `(1 + r)` multiplier at the end (the "end-of-month investment" adjustment) is genuinely
required.

</details>

---

## Mock B — post-midterm Pandas (50 marks, 60 minutes)

**Data**: `Exercises/Pandas exercises/04 Sorting, slicing and pivot/Exercise 2/bank_loans.csv`
— 80 rows, 10 columns: `loan_id`, `branch`, `product`, `risk_grade`, `principal_lakhs`,
`interest_rate`, `tenure_months`, `secured`, `status`, `emi_estimate`. Branches are Panaji,
Margao, Vasco, Mapusa and Ponda. Answer in a notebook. Save the output.

One base path for the whole paper. **Swap in your own path in the exam** — in the lab the file
usually sits beside your notebook, so `"bank_loans.csv"` alone will do.

```python
import pandas as pd
import numpy as np

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
CSV  = BASE + "Pandas exercises/04 Sorting, slicing and pivot/Exercise 2/bank_loans.csv"
```

### Q1 (8 marks) — Import and inspect

(a) Read the file into a DataFrame named `loans`, using `loan_id` as the index. **(3)**
(b) Display the first five observations, the shape, the column names, the data types, and the
general DataFrame information. **(3)**
(c) Obtain descriptive statistics for the numerical variables, rounded to two decimals. **(2)**

**Marking scheme.** 1 mark `pd.read_csv`, 2 marks `index_col="loan_id"`; 1 mark each for
`head()`, `shape`/`columns`, `dtypes` + `info()`; 2 marks `describe().round(2)`.

### Q2 (8 marks) — Data quality and missing values

(a) Report the number of missing values in every column and state in one line whether any
imputation is required. **(2)**
(b) The Panaji operations desk confirms that the interest rate was **not captured** for loans
`20005`, `20021` and `20044`. Mark those three values as missing and confirm the new count. **(3)**
(c) Fill the missing interest rates with the **median interest rate of the same `product`**.
Confirm that no missing values remain and print the three repaired rows. **(3)**

**Marking scheme.** 2 marks `isnull().sum()` plus an explicit verbal conclusion; 2 marks
`.loc[list, "interest_rate"] = np.nan`, 1 mark re-count; 2 marks a group-wise median (not a
global one), 1 mark verification.

### Q3 (10 marks) — Selection, filtering and sorting

(a) Using `.loc`, show `branch`, `product` and `principal_lakhs` for loans whose `risk_grade` is
`"C"` or `"D"` **and** which are **not** secured, sorted by `principal_lakhs` descending. Report
how many rows match and display the first ten. **(4)**
(b) Using `.iloc`, display the rows in positions 10 to 19 together with the first four columns.
**(3)**
(c) Sort the portfolio by `branch` ascending and `emi_estimate` descending, and display the top
ten rows showing `branch`, `product` and `emi_estimate`. **(3)**

**Marking scheme.** (a) 1 mark `.isin(["C","D"])`, 1 mark the `secured == False` condition,
1 mark `&` with **parentheses around each condition**, 1 mark `sort_values(..., ascending=False)`.
(b) 2 marks correct `iloc[10:20, 0:4]` — stop excluded on both axes, 1 mark stating that. (c)
2 marks the two-key sort with a list of booleans, 1 mark `head(10)`.

### Q4 (8 marks) — Pivot tables

(a) Total `principal_lakhs` by `branch` (rows) and `product` (columns), showing 0 where a
combination is empty, with row and column totals, rounded to two decimals. **(5)**
(b) Mean `interest_rate` by `risk_grade` (rows) and `status` (columns), rounded to two decimals.
**(3)**

**Marking scheme.** (a) 1 mark `index`, 1 mark `columns`, 1 mark `values` + `aggfunc="sum"`,
1 mark `fill_value=0`, 1 mark `margins=True`. (b) 2 marks correct axes, 1 mark
`aggfunc="mean"` with rounding.

### Q5 (8 marks) — Frequency distribution

Group `principal_lakhs` into the classes **0–10, 10–20, 20–30 and 30–40 (Rs. lakhs)**. Treat every
class as **left-closed and right-open** — that is, `[lower, upper)`. Produce a table showing the
**frequency, the relative frequency in per cent and the cumulative frequency** for each class,
state the total, and name the modal class. **(8)**

**Marking scheme.** 2 marks `bins` list with five edges, 1 mark `labels`, 2 marks
`right=False` **and** a sentence stating the closure convention, 1 mark `value_counts()` with
`sort_index()` (not sorted by size), 1 mark relative frequency, 1 mark `cumsum()`. A tie-safe
statement of the modal class earns the last mark even if there is no tie.

### Q6 (8 marks) — Cross-tabulation

(a) Cross-tabulate `branch` (rows) against `status` (columns) with row and column totals. **(4)**
(b) Express the same cross-tabulation as **row percentages**, rounded to one decimal. **(2)**
(c) In one sentence, name the branch with the highest delinquency share and quote the figure.
**(2)**

**Marking scheme.** (a) 2 marks `pd.crosstab(rows, cols)`, 2 marks `margins=True`. (b) 2 marks
`normalize="index"` multiplied by 100 — not `normalize=True`. (c) 1 mark the correct branch,
1 mark the number quoted with its unit.

**Total: 8 + 8 + 10 + 8 + 8 + 8 = 50 marks.**

### Answer key

<details><summary>Q1 — Import and inspect (8 marks)</summary>

```python
import pandas as pd
import numpy as np
pd.set_option("display.width", 130)
pd.set_option("display.max_columns", 30)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
CSV  = BASE + "Pandas exercises/04 Sorting, slicing and pivot/Exercise 2/bank_loans.csv"

# (a) read with loan_id promoted to the index
loans = pd.read_csv(CSV, index_col="loan_id")
print(loans.head())

# (b) shape, columns, dtypes, info
print("Shape:", loans.shape)
print("Columns:", list(loans.columns))
print(loans.dtypes)
loans.info()

# (c) descriptive statistics for the numeric columns
print(loans.describe().round(2))
```

```text
         branch   product risk_grade  principal_lakhs  interest_rate  tenure_months  secured      status  emi_estimate
loan_id
20001    Margao  Personal          B            12.70           7.56            184     True     Current      11678.25
20002     Vasco      Auto          B            16.35           8.31            169     True     Current      16445.47
20003     Vasco      Home          C            30.07           9.46            150     True  Delinquent      34252.88
20004    Mapusa      Home          B            25.39           5.00             48     True  Delinquent      58471.38
20005     Vasco  Personal          C            15.98          11.10            180    False      Closed      18263.29
Shape: (80, 9)
Columns: ['branch', 'product', 'risk_grade', 'principal_lakhs', 'interest_rate', 'tenure_months', 'secured', 'status', 'emi_estimate']
branch              object
product             object
risk_grade          object
principal_lakhs    float64
interest_rate      float64
tenure_months        int64
secured               bool
status               object
emi_estimate       float64
dtype: object
<class 'pandas.core.frame.DataFrame'>
Index: 80 entries, 20001 to 20080
Data columns (total 9 columns):
 #   Column           Non-Null Count  Dtype
---  ------           --------------  -----
 0   branch           80 non-null     object
 1   product          80 non-null     object
 2   risk_grade       80 non-null     object
 3   principal_lakhs  80 non-null     float64
 4   interest_rate    80 non-null     float64
 5   tenure_months    80 non-null     int64
 6   secured          80 non-null     bool
 7   status           80 non-null     object
 8   emi_estimate     80 non-null     float64
dtypes: bool(1), float64(3), int64(1), object(4)
memory usage: 5.7+ KB
       principal_lakhs  interest_rate  tenure_months  emi_estimate
count            80.00          80.00          80.00         80.00
mean             18.23           9.70         126.26      29373.01
std               7.29           1.91          59.79      22500.50
min               2.00           5.00          15.00       2655.26
25%              14.02           8.41          82.25      16941.00
50%              19.05           9.44         122.50      24345.03
75%              23.74          11.06         171.25      34537.88
max              30.42          15.00         237.00     137342.01
```

Note `Shape: (80, 9)` — **nine** columns, not ten, because `loan_id` became the index. Say so in
your answer; markers look for the explanation. `describe()` reports only the four numeric
columns; `secured` is `bool` and is excluded.

</details>

<details><summary>Q2 — Data quality and missing values (8 marks)</summary>

```python
# (a) how many missing values are there, column by column?
print(loans.isnull().sum())
print("Total missing values in the file:", loans.isnull().sum().sum())
```

```text
branch             0
product            0
risk_grade         0
principal_lakhs    0
interest_rate      0
tenure_months      0
secured            0
status             0
emi_estimate       0
dtype: int64
Total missing values in the file: 0
```

> **Conclusion (write this sentence).** Every column reports zero nulls across all 80 loans, so
> the file as supplied needs no imputation. Any missing-value treatment below is applied to a
> deliberately damaged copy of the interest-rate column.

```python
# (b) mark the three mis-keyed interest rates as missing
BAD = [20005, 20021, 20044]
loans.loc[BAD, "interest_rate"] = np.nan
print(loans["interest_rate"].isnull().sum(), "missing interest rates after the correction")
print(loans.loc[BAD, ["branch", "product", "interest_rate"]])
```

```text
3 missing interest rates after the correction
         branch   product  interest_rate
loan_id
20005     Vasco  Personal            NaN
20021    Margao      Auto            NaN
20044     Ponda  Personal            NaN
```

```python
# (c) impute with the median rate of the SAME product
med = loans.groupby("product")["interest_rate"].median()
print("Product-wise median interest rate:")
print(med.round(2))

loans["interest_rate"] = loans["interest_rate"].fillna(loans["product"].map(med))
print("Missing values remaining:", loans["interest_rate"].isnull().sum())
print(loans.loc[BAD, ["branch", "product", "interest_rate"]].round(2))
```

```text
Product-wise median interest rate:
product
Auto         9.60
Home         9.35
Personal     9.41
SME         10.78
Name: interest_rate, dtype: float64
Missing values remaining: 0
         branch   product  interest_rate
loan_id
20005     Vasco  Personal           9.41
20021    Margao      Auto           9.60
20044     Ponda  Personal           9.41
```

`loans["product"].map(med)` is the whole trick: it turns the product column into a column of
group medians, which `fillna` then consumes row by row. The alternative that also scores full
marks:

```python
loans["interest_rate"] = loans.groupby("product")["interest_rate"] \
                              .transform(lambda s: s.fillna(s.median()))
```

**Variants**

| If the question says | Use |
| --- | --- |
| "fill with the overall mean" | `loans["interest_rate"].fillna(loans["interest_rate"].mean())` |
| "drop the affected rows" | `loans.dropna(subset=["interest_rate"])` — then report the new shape |
| "forward fill" | `loans["interest_rate"].ffill()` — **not** `fillna(method="ffill")`, deprecated in pandas 2.x |
| "fill text columns with Unknown" | `loans["branch"] = loans["branch"].fillna("Unknown")` |
| "how many rows have any missing value" | `loans.isnull().any(axis=1).sum()` |

</details>

<details><summary>Q3 — Selection, filtering and sorting (10 marks)</summary>

```python
# (a) risky AND unsecured, biggest principal first
mask = loans["risk_grade"].isin(["C", "D"]) & (loans["secured"] == False)
risky = loans.loc[mask, ["branch", "product", "principal_lakhs"]] \
             .sort_values("principal_lakhs", ascending=False)
print("Rows matching:", risky.shape[0])
print(risky.head(10))
```

```text
Rows matching: 25
         branch   product  principal_lakhs
loan_id
20032    Panaji  Personal            29.78
20039    Mapusa      Auto            29.67
20023    Margao  Personal            27.88
20036    Margao      Home            26.93
20042    Margao  Personal            26.70
20012    Panaji      Auto            26.66
20073     Ponda      Auto            23.92
20074     Ponda       SME            23.68
20016    Mapusa      Home            20.57
20048     Vasco      Auto            17.86
```

```python
# (b) positional slice: rows 10..19, columns 0..3
print(loans.iloc[10:20, 0:4])
```

```text
         branch   product risk_grade  principal_lakhs
loan_id
20011    Mapusa      Auto          D            11.93
20012    Panaji      Auto          D            26.66
20013     Vasco      Home          A            19.61
20014     Ponda      Home          A            21.83
20015     Ponda       SME          C            19.06
20016    Mapusa      Home          C            20.57
20017     Ponda      Auto          D            20.94
20018     Vasco  Personal          A            23.36
20019    Panaji      Auto          A            19.13
20020    Panaji       SME          B            11.59
```

State it in your answer: **`.iloc` excludes the stop**, so `10:20` gives ten rows (positions 10
to 19) and `0:4` gives four columns. `.loc` would *include* the stop label.

```python
# (c) branch A-Z, then biggest EMI first inside each branch
top = loans.sort_values(["branch", "emi_estimate"], ascending=[True, False])
print(top[["branch", "product", "emi_estimate"]].head(10))
```

```text
         branch   product  emi_estimate
loan_id
20016    Mapusa      Home      93113.35
20057    Mapusa      Auto      72107.05
20004    Mapusa      Home      58471.38
20060    Mapusa       SME      58232.52
20024    Mapusa  Personal      35659.54
20065    Mapusa       SME      33332.16
20026    Mapusa       SME      31301.22
20039    Mapusa      Auto      28303.99
20006    Mapusa      Home      27323.63
20050    Mapusa      Home      26477.08
```

All ten rows are Mapusa — the alphabetically first branch. That is correct behaviour for a
two-key sort, and worth one sentence in your answer so the marker does not think you sorted only
by EMI.

**Variants**

| If the question says | Change to |
| --- | --- |
| "loans from Panaji or Vasco with tenure over 120 months" | `loans.loc[loans["branch"].isin(["Panaji","Vasco"]) & (loans["tenure_months"] > 120), ["branch","tenure_months"]]` |
| "every 5th row from 0 to 50, columns 0, 3, 4, 5" | `loans.iloc[0:50:5, [0, 3, 4, 5]]` |
| "SME loans, or Auto loans priced below 8%" | `loans.loc[(loans["product"] == "SME") \| ((loans["product"] == "Auto") & (loans["interest_rate"] < 8))]` |
| "loans 20010 to 20015, columns branch to interest_rate" | `loans.loc[20010:20015, "branch":"interest_rate"]` — stop **included** |
| "the ten largest principals" | `loans.nlargest(10, "principal_lakhs")` |

**Traps** — both of these are real errors from this file:

```python
# missing parentheses around each condition
loans[loans["principal_lakhs"] > 20 & loans["interest_rate"] > 10]
```

```text
TypeError: Cannot perform 'rand_' with a dtyped [float64] array and scalar of type [bool]
```

```python
# python's "and" instead of "&"
loans[(loans["principal_lakhs"] > 20) and (loans["interest_rate"] > 10)]
```

```text
ValueError: The truth value of a Series is ambiguous. Use a.empty, a.bool(), a.item(), a.any() or a.all().
```

`&` for AND, `|` for OR, `~` for NOT, and **parentheses around every single condition**.

</details>

<details><summary>Q4 — Pivot tables (8 marks)</summary>

```python
# (a) total principal by branch x product, zero-filled, with totals
p1 = pd.pivot_table(loans, index="branch", columns="product",
                    values="principal_lakhs", aggfunc="sum",
                    fill_value=0, margins=True, margins_name="Total")
print(p1.round(2))
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

```python
# (b) mean interest rate by risk grade x status
p2 = pd.pivot_table(loans, index="risk_grade", columns="status",
                    values="interest_rate", aggfunc="mean")
print(p2.round(2))
```

```text
status      Closed  Current  Delinquent
risk_grade
A            10.92     9.19       10.41
B             9.95    10.16        9.57
C             9.01     8.57       10.16
D             8.25     9.52        9.78
```

**These means use the interest rates you repaired in Q2** — a notebook run top to bottom carries
that change forward. On the untouched file the same three cells read C/Closed 9.22,
C/Delinquent 10.23 and D/Delinquent 9.74. Either table earns the marks; **state which frame you
aggregated**. This is why the marker re-runs your notebook from the top.

**An honest note about `fill_value=0`.** In *this* file all 20 branch-by-product combinations are
populated, so the pivot has no `NaN` and `fill_value=0` changes nothing:

```python
p = pd.pivot_table(loans, index="branch", columns="product",
                   values="principal_lakhs", aggfunc="sum")
print("any NaN?", p.isnull().any().any())
```

```text
any NaN? False
```

Include `fill_value=0` anyway. It is a named mark in the question, the marker is looking for the
argument, and on a smaller subset it does matter.

**Variants**

| If the question says | Change to |
| --- | --- |
| "count of loans by status and branch" | `aggfunc="count"` with `values="principal_lakhs"` — or use `pd.crosstab` |
| "standard deviation of EMI by product and secured" | `index="product", columns="secured", values="emi_estimate", aggfunc="std"` |
| "both the sum and the mean" | `aggfunc=["sum", "mean"]`, then `p.columns = ["_".join(c) for c in p.columns]` to flatten |
| "two value columns at once" | `values=["principal_lakhs", "emi_estimate"]` |
| "variance of interest rate by grade and product" | `aggfunc="var"` |
| "first and last tenure by branch and product" | `aggfunc=["first", "last"]` |
| "use groupby instead" | `loans.groupby(["branch","product"])["principal_lakhs"].sum().unstack(fill_value=0)` |

</details>

<details><summary>Q5 — Frequency distribution (8 marks)</summary>

```python
# state the convention BEFORE the code: classes are [lower, upper)
bins   = [0, 10, 20, 30, 40]
labels = ["0-10", "10-20", "20-30", "30-40"]

loans["principal_class"] = pd.cut(loans["principal_lakhs"], bins=bins,
                                  labels=labels, right=False)

freq = loans["principal_class"].value_counts().sort_index()   # sort_index, NOT by size
table = pd.DataFrame({"Frequency": freq})
table["Relative %"] = (table["Frequency"] / table["Frequency"].sum() * 100).round(2)
table["Cumulative Frequency"] = table["Frequency"].cumsum()
table.index.name = "Principal (Rs. lakhs)"
print(table)
print("Total:", int(table["Frequency"].sum()))
print("Modal class(es):", list(table.index[table["Frequency"] == table["Frequency"].max()]))
```

```text
                       Frequency  Relative %  Cumulative Frequency
Principal (Rs. lakhs)
0-10                          12       15.00                    12
10-20                         34       42.50                    46
20-30                         31       38.75                    77
30-40                          3        3.75                    80
Total: 80
Modal class(es): ['10-20']
```

> **Assumption (write this).** Each class is taken as left-closed and right-open, `[lower, upper)`,
> which is `pd.cut(..., right=False)`. A principal of exactly 20.00 lakhs would therefore be
> counted in 20–30, not in 10–20.

In this particular file the assumption does not change a single count, because no principal sits
exactly on a bin edge. Prove it, then say so — that is what "state your assumptions" means:

```python
p = loans["principal_lakhs"]
print("values exactly on a bin edge:", int(p.isin([0, 10, 20, 30, 40]).sum()))
print("min / max:", p.min(), "/", p.max())
print("right=False:"); print(pd.cut(p, bins, right=False).value_counts().sort_index().to_string())
print("right=True :"); print(pd.cut(p, bins, right=True ).value_counts().sort_index().to_string())
```

```text
values exactly on a bin edge: 0
min / max: 2.0 / 30.42
right=False:
principal_lakhs
[0, 10)     12
[10, 20)    34
[20, 30)    31
[30, 40)     3
right=True :
principal_lakhs
(0, 10]     12
(10, 20]    34
(20, 30]    31
(30, 40]     3
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "use five equal-width classes" | `pd.cut(p, bins=5)` — let pandas pick the edges, then report them |
| "use quartile classes" | `pd.qcut(p, 4)` |
| "class intervals of 5 lakhs up to 35" | `bins = list(range(0, 40, 5))` |
| "include the cumulative percentage" | `table["Cumulative %"] = table["Relative %"].cumsum()` |
| "frequency distribution of a text column" | `loans["branch"].value_counts()` — no `cut` needed |
| "which class has the highest frequency" | Never `idxmax()` alone. Use the tie-safe mask shown above |

**Traps**

- `value_counts()` sorts by size by default and scrambles your class order. Always `.sort_index()`.
- `idxmax()` silently returns only the first winner when counts tie. Several exercises in this
  course have exact 10/10/10 ties, and the published notebook gets them wrong.
- Relative percentages that are rounded before being cumulated can total 100.01. Say "rounding".

</details>

<details><summary>Q6 — Cross-tabulation (8 marks)</summary>

```python
# (a) counts with row and column totals
ct = pd.crosstab(loans["branch"], loans["status"], margins=True, margins_name="Total")
print(ct)
```

```text
status  Closed  Current  Delinquent  Total
branch
Mapusa       4        4           8     16
Margao       6        8           2     16
Panaji       2        3           7     12
Ponda        5        3           8     16
Vasco        7        5           8     20
Total       24       23          33     80
```

```python
# (b) the same table as row percentages
ctp = pd.crosstab(loans["branch"], loans["status"], normalize="index") * 100
print(ctp.round(1))
```

```text
status  Closed  Current  Delinquent
branch
Mapusa    25.0     25.0        50.0
Margao    37.5     50.0        12.5
Panaji    16.7     25.0        58.3
Ponda     31.2     18.8        50.0
Vasco     35.0     25.0        40.0
```

```python
# (c) who is worst?
share = ctp["Delinquent"].round(1)
print(share.sort_values(ascending=False))
print("Highest delinquency share:", share.idxmax(), format(share.max(), ".1f") + "%")
```

```text
branch
Panaji    58.3
Mapusa    50.0
Ponda     50.0
Vasco     40.0
Margao    12.5
Name: Delinquent, dtype: float64
Highest delinquency share: Panaji 58.3%
```

> **Model sentence.** Panaji carries the highest delinquency share at 58.3% of its 12 loans
> (7 of 12), against a portfolio average of 41.3% (33 of 80); Margao is the strongest branch at
> 12.5%. Note that Panaji also has the smallest book, so the percentage rests on a small base and
> should be read alongside the absolute count.

**Variants**

| If the question says | Change to |
| --- | --- |
| "as a percentage of the grand total" | `normalize="all"` (or `normalize=True`) |
| "column percentages" | `normalize="columns"` |
| "cross-tabulate three variables" | `pd.crosstab([loans["branch"], loans["product"]], loans["status"])` |
| "average principal in each cell, not a count" | `pd.crosstab(loans["branch"], loans["status"], values=loans["principal_lakhs"], aggfunc="mean")` |
| "do it with pivot_table" | `pd.pivot_table(loans, index="branch", columns="status", values="loan_id", aggfunc="count")` — needs `loans.reset_index()` first, because `loan_id` is the index |

</details>

---

## Mock C — Matplotlib and integrated analysis (50 marks, 60 minutes)

**Data**: `Exercises/Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx`. Two sheets —
`Bond_Holdings` (120 rows × 6 columns: `Holding_ID`, `Bond_Code`, `Units_Held`, `Purchase_Price`,
`Current_Price`, `Holding_Months`) and `Bond_Master` (24 rows × 6 columns: `Bond_Code`, `Issuer`,
`Industry`, `Credit_Rating`, `Coupon_Rate`, `Face_Value`). Answer in a notebook. Save the output
and submit the two image files you are asked to produce.

```python
import pandas as pd
import matplotlib.pyplot as plt

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
XL   = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"
```

### Q1 (6 marks) — Import and inspect

(a) Read both sheets into separate DataFrames named `holdings` and `master`, and print the shape
of each. **(2)**
(b) For `holdings`, display the first five observations, the column names, the data types and the
general DataFrame information. **(2)**
(c) Obtain descriptive statistics for the numerical variables in `holdings`, rounded to two
decimals. **(2)**

**Marking scheme.** 1 mark `sheet_name=` used twice, 1 mark both shapes printed; 1 mark
`head()`, 1 mark `dtypes` + `info()`; 2 marks `describe().round(2)`.

### Q2 (10 marks) — Combine and derive

(a) Combine the holdings with the master information using `Bond_Code`. **All observations
appearing in `Bond_Holdings` must remain** in the result. Name the join type you used, justify it
in one line, print the resulting shape, and confirm that no `Issuer` came back empty. **(4)**
(b) Create the following columns and print `Holding_ID`, `Issuer`, `Purchase_Value`,
`Current_Value`, `Value_Change`, `Value_Change_pct` and `Annual_Coupon_Income` for the first five
holdings, rounded to two decimals. **(6)**

```text
Purchase_Value       = Units_Held x Purchase_Price
Current_Value        = Units_Held x Current_Price
Value_Change         = Current_Value - Purchase_Value
Value_Change_pct     = (Value_Change / Purchase_Value) x 100
Annual_Coupon_Income = Units_Held x Face_Value x (Coupon_Rate / 100)
```

**Marking scheme.** (a) 1 mark `pd.merge(..., on="Bond_Code")`, 2 marks `how="left"` **with the
justification**, 1 mark the shape and the null check. (b) 1 mark per correct derived column
(5 marks), 1 mark the rounded display of the required columns in the required order.

### Q3 (8 marks) — Two pivot tables

(a) A pivot table showing the **mean `Current_Value` by `Industry`**, sorted from highest to
lowest, rounded to two decimals. **(4)**
(b) A single pivot table showing **both the mean and the maximum `Value_Change_pct` for each
`Credit_Rating`**, rounded to two decimals. **(4)**

**Marking scheme.** (a) 2 marks `pivot_table(index="Industry", values=..., aggfunc="mean")`,
2 marks `sort_values(..., ascending=False)`. (b) 2 marks `aggfunc=["mean", "max"]` in one call,
2 marks correct output with the two-level column header explained.

### Q4 (16 marks) — One figure, four panels

Create **one** Matplotlib figure with a **2 × 2 layout** containing:

- **Top-left** — bar chart of the **five largest holdings** by `Current_Value`, with `Issuer` on
  the x-axis and `Current_Value` on the y-axis.
- **Top-right** — histogram of `Value_Change_pct` using **10 bins**.
- **Bottom-left** — scatter plot of `Holding_Months` (x) against `Value_Change_pct` (y).
- **Bottom-right** — boxplot comparing `Current_Value` for **AAA, AA and A**-rated bonds, in that
  order.

Use appropriate titles and axis labels, add grids where suitable, apply `tight_layout()`, and save
the completed figure **both as a PNG at 110 dpi and as a PDF** before displaying it. **(16)**

**Marking scheme.** 3 marks per panel for the correct chart type with title, x-label and y-label
(12); 2 marks `plt.subplots(2, 2, figsize=...)` plus `tight_layout()`; 2 marks `savefig` to both
formats, called **before** `plt.show()`. Rotated x-tick labels on the bar panel and a legible
grid are inside the panel marks.

### Q5 (6 marks) — Composition chart

Produce a **pie chart** showing each `Industry`'s share of the portfolio's **total
`Annual_Coupon_Income`**, largest slice first, percentages displayed to one decimal, starting at
the 12 o'clock position. Title it and save it as a PNG at 110 dpi. **(6)**

**Marking scheme.** 2 marks `groupby(...).sum()` on the right column, 1 mark
`sort_values(ascending=False)`, 1 mark `autopct="%1.1f%%"`, 1 mark `startangle=90`, 1 mark title
and `savefig`.

### Q6 (4 marks) — Written

Extract the holdings for which `Credit_Rating` is `"AAA"` **and** `Current_Value` exceeds
Rs. 4,00,000. Show your code and its output. Then explain what you obtained, why, and propose a
defensible corrected threshold with evidence from the data. **(4)**

**Marking scheme.** 1 mark correct compound filter with parentheses; 1 mark reporting the result
honestly rather than silently changing the question; 1 mark diagnosing the cause with a statistic;
1 mark a justified replacement threshold.

**Total: 6 + 10 + 8 + 16 + 6 + 4 = 50 marks.**

### Answer key

<details><summary>Q1 — Import and inspect (6 marks)</summary>

```python
import pandas as pd
pd.set_option("display.width", 160)
pd.set_option("display.max_columns", 30)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
XL   = BASE + "Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx"

# (a) one read_excel call per sheet
holdings = pd.read_excel(XL, sheet_name="Bond_Holdings")
master   = pd.read_excel(XL, sheet_name="Bond_Master")
print("Bond_Holdings:", holdings.shape)
print("Bond_Master  :", master.shape)

# (b) inspect the holdings sheet
print(holdings.head())
print("Columns:", list(holdings.columns))
print(holdings.dtypes)
holdings.info()

# (c) descriptive statistics
print(holdings.describe().round(2))
```

```text
Bond_Holdings: (120, 6)
Bond_Master  : (24, 6)
  Holding_ID Bond_Code  Units_Held  Purchase_Price  Current_Price  Holding_Months
0      H0001    BND012         167         1000.53         946.65               6
1      H0002    BND008         217          857.79         831.59               7
2      H0003    BND004         117          995.40         962.27              42
3      H0004    BND006         114          991.80         977.19              44
4      H0005    BND022         185          895.39         821.19              42
Columns: ['Holding_ID', 'Bond_Code', 'Units_Held', 'Purchase_Price', 'Current_Price', 'Holding_Months']
Holding_ID         object
Bond_Code          object
Units_Held          int64
Purchase_Price    float64
Current_Price     float64
Holding_Months      int64
dtype: object
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

`sheet_name="Bond_Holdings"` is compulsory — without it `read_excel` gives you only the first
sheet. To see the sheet names first: `print(pd.ExcelFile(XL).sheet_names)`.

</details>

<details><summary>Q2 — Combine and derive (10 marks)</summary>

```python
# (a) LEFT join: every holding survives, master attributes are attached
port = pd.merge(holdings, master, on="Bond_Code", how="left")
print("Merged shape:", port.shape)
print("Missing Issuer after merge:", int(port["Issuer"].isnull().sum()))
```

```text
Merged shape: (120, 11)
Missing Issuer after merge: 0
```

> **Justification (write this).** "All observations appearing in `Bond_Holdings` should remain"
> is the definition of a **left join** with `Bond_Holdings` as the left frame, so
> `how="left"`. The result keeps all 120 holdings and gains the five master attributes, giving
> 11 columns (6 + 6 − 1 shared key). Because every `Bond_Code` in the holdings sheet exists in the
> master, an inner join would give the same 120 rows here — but left is what the wording asks for,
> and it is the join that would expose an unmatched code as a null `Issuer`.

```python
# (b) five derived columns, in dependency order
port["Purchase_Value"]       = port["Units_Held"] * port["Purchase_Price"]
port["Current_Value"]        = port["Units_Held"] * port["Current_Price"]
port["Value_Change"]         = port["Current_Value"] - port["Purchase_Value"]
port["Value_Change_pct"]     = (port["Value_Change"] / port["Purchase_Value"]) * 100
port["Annual_Coupon_Income"] = port["Units_Held"] * port["Face_Value"] * (port["Coupon_Rate"] / 100)

cols = ["Holding_ID", "Issuer", "Purchase_Value", "Current_Value", "Value_Change",
        "Value_Change_pct", "Annual_Coupon_Income"]
print(port[cols].head().round(2))
```

```text
  Holding_ID            Issuer  Purchase_Value  Current_Value  Value_Change  Value_Change_pct  Annual_Coupon_Income
0      H0001  Lotus Healthcare       167088.51      158090.55      -8997.96             -5.39               69054.5
1      H0002     Harbor Energy       186140.43      180455.03      -5685.40             -3.05              157759.0
2      H0003    Dynamo Telecom       116461.80      112585.59      -3876.21             -3.33               78039.0
3      H0004   Frontier Pharma       113065.20      111399.66      -1665.54             -1.47               10168.8
4      H0005   Vertex Networks       165647.15      151920.15     -13727.00             -8.29               62622.5
```

Order matters: `Value_Change` needs both values, `Value_Change_pct` needs `Value_Change`. Write
them in that sequence and no `KeyError` can occur.

**Variants**

| If the question says | Change to |
| --- | --- |
| "keep only holdings whose bond exists in the master" | `how="inner"` |
| "keep every bond in the master even if never held" | `how="right"` (or swap the frames and use left) |
| "keep everything from both" | `how="outer"`, then count the nulls it creates |
| "the key columns are named differently" | `pd.merge(a, b, left_on="Bond_Code", right_on="Code", how="left")` |
| "join on the index" | `holdings.set_index("Bond_Code").join(master.set_index("Bond_Code"))` |
| "stack the two years of holdings on top of each other" | `pd.concat([h2025, h2026], ignore_index=True)` |

</details>

<details><summary>Q3 — Two pivot tables (8 marks)</summary>

```python
# (a) mean current value by industry, richest industry first
pv1 = pd.pivot_table(port, index="Industry", values="Current_Value", aggfunc="mean")
print(pv1.sort_values("Current_Value", ascending=False).round(2))
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

```python
# (b) two aggregations in ONE pivot call
pv2 = pd.pivot_table(port, index="Credit_Rating", values="Value_Change_pct",
                     aggfunc=["mean", "max"])
print(pv2.round(2))
```

```text
                          mean              max
              Value_Change_pct Value_Change_pct
Credit_Rating
A                         2.43            13.54
AA                        2.39            13.61
AAA                       0.38            13.91
```

The two-level column header is normal for `aggfunc=[...]`. If the question says "flatten the
column names", add:

```python
pv2.columns = ["_".join(c) for c in pv2.columns]
print(pv2.round(2))
```

```text
               mean_Value_Change_pct  max_Value_Change_pct
Credit_Rating
A                               2.43                 13.54
AA                              2.39                 13.61
AAA                             0.38                 13.91
```

> **Reading it (one sentence earns a mark).** Mean appreciation is almost identical for A and AA
> (2.43% and 2.39%) and much weaker for AAA (0.38%), which is what the risk-return relationship
> predicts: the safest paper pays the least. The *maximum* is near 13.5–13.9% in all three
> grades, so the difference sits in the average, not in the best case.

</details>

<details><summary>Q4 — One figure, four panels (16 marks)</summary>

```python
import matplotlib
matplotlib.use("Agg")            # only needed when running as a .py script
import matplotlib.pyplot as plt

# the five largest holdings, biggest first - reused by the top-left panel
top5 = port.nlargest(5, "Current_Value")
print(top5[["Holding_ID", "Issuer", "Current_Value"]].round(2).to_string())

fig, ax = plt.subplots(2, 2, figsize=(14, 10))

# --- Top-left: bar chart of the five largest holdings --------------
ax[0, 0].bar(top5["Issuer"], top5["Current_Value"], color="steelblue")
ax[0, 0].set_title("Five Largest Holdings by Current Value")
ax[0, 0].set_xlabel("Issuer")
ax[0, 0].set_ylabel("Current Value (Rs.)")
ax[0, 0].tick_params(axis="x", rotation=30)       # long issuer names would overlap
ax[0, 0].grid(axis="y", alpha=0.3)

# --- Top-right: histogram of Value_Change_pct, 10 bins -------------
ax[0, 1].hist(port["Value_Change_pct"], bins=10, color="orange", edgecolor="black")
ax[0, 1].set_title("Distribution of Value Change %")
ax[0, 1].set_xlabel("Value Change (%)")
ax[0, 1].set_ylabel("Number of Holdings")
ax[0, 1].grid(axis="y", alpha=0.3)

# --- Bottom-left: scatter of holding age against appreciation ------
ax[1, 0].scatter(port["Holding_Months"], port["Value_Change_pct"],
                 color="mediumseagreen", alpha=0.7)
ax[1, 0].set_title("Holding Months vs Value Change %")
ax[1, 0].set_xlabel("Holding Months")
ax[1, 0].set_ylabel("Value Change (%)")
ax[1, 0].grid(alpha=0.3)

# --- Bottom-right: boxplot of Current_Value by rating --------------
order  = ["AAA", "AA", "A"]                        # the order the question asked for
groups = [port.loc[port["Credit_Rating"] == r, "Current_Value"] for r in order]
ax[1, 1].boxplot(groups, tick_labels=order)
ax[1, 1].set_title("Current Value by Credit Rating")
ax[1, 1].set_xlabel("Credit Rating")
ax[1, 1].set_ylabel("Current Value (Rs.)")
ax[1, 1].grid(axis="y", alpha=0.3)

plt.tight_layout()
plt.savefig("bond_panel.png", dpi=110)     # SAVE FIRST
plt.savefig("bond_panel.pdf")              # vector copy for printing
plt.show()                                 # then display
```

```text
   Holding_ID             Issuer  Current_Value
17      H0018    Vertex Networks      246147.60
73      H0074    Frontier Pharma      244002.85
45      H0046       Indigo Roads      243645.60
19      H0020  Zenith Healthcare      242670.20
16      H0017  Riverstone Pharma      241293.60
```

![Mock C Q4 — 2x2 panel: five largest bond holdings, distribution of value change %, holding months against value change %, and current value by credit rating](/figures/16-mockC-fig1.png)

`figsize=(14, 10)` at `dpi=110` gives a 1540 × 1100 PNG, which is what the marker opens.

**Variants**

| If the question says | Change to |
| --- | --- |
| "a 1 × 3 layout" | `fig, ax = plt.subplots(1, 3, figsize=(18, 5))` then `ax[0]`, `ax[1]`, `ax[2]` |
| "a 2 × 3 layout" | `plt.subplots(2, 3, figsize=(18, 10))`, index `ax[0,0] … ax[1,2]` |
| "use plt.subplot() instead" | `plt.subplot(2, 2, 1)` … `plt.subplot(2, 2, 4)`, one-based, row-major |
| "a horizontal bar chart" | `ax.barh(labels, values)` and swap the axis labels |
| "20 bins" / "a density histogram" | `bins=20` / `density=True` |
| "horizontal boxplots" | `boxplot(groups, vert=False, tick_labels=order)` |
| "colour the points by credit rating" | loop the ratings and call `scatter` once per rating, then `ax.legend()` |
| "add a trend line" | `import numpy as np; m, c = np.polyfit(x, y, 1); ax.plot(x, m*x + c)` |

**Traps**

- `plt.show()` before `plt.savefig()` writes a blank file. Save first.
- `boxplot(groups, labels=order)` still works but prints
  `MatplotlibDeprecationWarning: The 'labels' parameter of boxplot() has been renamed
  'tick_labels' since Matplotlib 3.9`. Either name scores; `tick_labels=` is warning-free on the
  lab build (Matplotlib 3.9.4).
- Without `tight_layout()` the rotated issuer names are clipped out of the saved PNG. It is a
  named mark in the question.
- `nlargest(5, "Current_Value")` already returns the rows in descending order — do not sort again
  and do not use `head(5)` on an unsorted frame.

</details>

<details><summary>Q5 — Composition chart (6 marks)</summary>

```python
# total annual coupon income per industry, largest first
ind = port.groupby("Industry")["Annual_Coupon_Income"].sum().sort_values(ascending=False)
print(ind.round(2).to_string())
print("share %:")
print((ind / ind.sum() * 100).round(1).to_string())

plt.figure(figsize=(7, 7))
plt.pie(ind, labels=ind.index, autopct="%1.1f%%", startangle=90)
plt.title("Share of Annual Coupon Income by Industry")
plt.savefig("coupon_share.png", dpi=110)
plt.show()
```

```text
Industry
Power              2058916.5
Pharmaceuticals    1376887.0
Telecom            1132655.1
Infrastructure     1034997.5
Automobile          397619.2
Banking            328395.8
share %:
Industry
Power              32.5
Pharmaceuticals    21.8
Telecom            17.9
Infrastructure     16.4
Automobile          6.3
Banking            5.2
```

![Mock C Q5 — pie chart of each industry's share of total annual coupon income, Power 32.5% the largest](/figures/16-mockC-fig2.png)

> **Reading it.** Power alone generates 32.5% of the portfolio's annual coupon income and the top
> three industries generate 72.2% of it, so income is materially concentrated. Note that this is
> a *coupon income* share, not a *value* share — Power's weight comes from high face values and
> coupon rates rather than from the number of holdings.

**Variants**

| If the question says | Change to |
| --- | --- |
| "pull the largest slice out" | `explode = [0.1] + [0]*(len(ind)-1)` then `plt.pie(..., explode=explode)` |
| "show the rupee amounts, not percentages" | `autopct=lambda p: format(p*ind.sum()/100, ".0f")` |
| "clockwise from the top" | `plt.pie(..., startangle=90, counterclock=False)` |
| "use a donut" | `plt.pie(..., wedgeprops={"width": 0.4})` |
| "a bar chart instead" | `ind.plot(kind="bar")` — better than a pie above six categories |
| "share of Current_Value instead" | swap the aggregated column; everything else is identical |

</details>

<details><summary>Q6 — Written: the empty-result trap (4 marks)</summary>

```python
q = port.loc[(port["Credit_Rating"] == "AAA") & (port["Current_Value"] > 400000)]
print("Rows returned:", q.shape[0])
print(q[["Holding_ID", "Issuer", "Credit_Rating", "Current_Value"]])
```

```text
Rows returned: 0
Empty DataFrame
Columns: [Holding_ID, Issuer, Credit_Rating, Current_Value]
Index: []
```

```python
print("Portfolio max Current_Value:", round(port["Current_Value"].max(), 2))
print("Max Current_Value among AAA :",
      round(port.loc[port["Credit_Rating"] == "AAA", "Current_Value"].max(), 2))
print("AAA holdings above Rs 2,00,000:",
      int(((port["Credit_Rating"] == "AAA") & (port["Current_Value"] > 200000)).sum()))
print(port.loc[(port["Credit_Rating"] == "AAA") & (port["Current_Value"] > 200000),
               ["Holding_ID", "Issuer", "Current_Value"]].round(2))
```

```text
Portfolio max Current_Value: 246147.6
Max Current_Value among AAA : 246147.6
AAA holdings above Rs 2,00,000: 3
   Holding_ID           Issuer  Current_Value
17      H0018  Vertex Networks      246147.60
51      H0052  Vertex Networks      218337.60
87      H0088  Vertex Networks      210678.78
```

> **Model answer.** The filter is syntactically correct but returns an empty DataFrame: **no
> holding in the portfolio satisfies it**. The reason is a scale mismatch in the question, not an
> error in the code. `Current_Value = Units_Held × Current_Price`, and the data caps units at 250
> and current price at Rs. 1,139.63, so the arithmetic maximum is roughly Rs. 2.85 lakh; the
> observed maximum is **Rs. 2,46,147.60**, which is also the largest AAA holding. A threshold of
> Rs. 4,00,000 therefore lies above the entire distribution.
>
> An empty result is a legitimate answer and must be reported as such — the correct output is
> "0 holdings match". Silently deleting the condition would be wrong. To make the question
> answerable I would reset the threshold to **Rs. 2,00,000**, which sits above the AAA upper
> quartile of Rs. 1,55,690.94 and so still isolates only the genuinely large AAA positions. It
> returns three holdings, all issued by Vertex Networks: H0018 (Rs. 2,46,147.60),
> H0052 (Rs. 2,18,337.60) and H0088 (Rs. 2,10,678.78). I would state the substituted threshold in
> the answer.

This is a defect in the published Case 2 question (Q11), and it is exactly the kind of thing a
re-skinned exam paper inherits. **Whenever a filter returns zero rows, print
`df[COL].max()` / `.min()` before you conclude anything.**

</details>

---

## Mock D — the full paper (100 marks, 90 minutes)

**Data**: `Exercises/Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx`. Two sheets —
`Claims` (150 rows × 6 columns: `Claim_ID`, `Policy_ID`, `Claim_Date`, `Claim_Amount`,
`Settlement_Days`, `Claim_Status`) and `Policy_Master` (60 rows × 6 columns: `Policy_ID`,
`Policy_Type`, `Annual_Premium`, `Sum_Insured`, `Region`, `Risk_Category`). Q1 and Q2 use only
the literal data printed in the question. Answer Q1 and Q10 in the space provided; everything
else in a notebook. **Save the output before submitting.**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
XL   = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"
```

### Q1 (8 marks) — written, in the space provided

A third-party administrator (TPA) is building a cashless-claims desk for a hospital network. A
trainee has proposed the following storage design.

- The **sequence of pre-authorisation amounts** approved against one claim (an initial approval
  and two enhancements, two of which were for the same amount) is stored in a **set**.
- A policyholder's **name, policy number, hospital, room category and claim status** are stored in
  one **tuple**, even though room category and claim status change several times a day.
- The list of **empanelled hospital codes**, assembled by appending three regional files
  end-to-end, is stored in a **list** and now contains each code two or three times.
- Each policy number such as `P0038` is stored as `['P', '0', '0', '3', '8']`.

Identify each error, name the container that should have been used, and justify your choice in one
sentence each. **(8)**

**Marking scheme.** 2 marks per defect: 1 for naming the symptom (order lost / duplicates
collapsed / immutable / duplicates allowed / value fragmented), 1 for naming the correct container
with a reason. A closing sentence stating the general rule earns one of the marks back if a
defect is weakly argued.

### Q2 (12 marks) — core Python, Jupyter

A claims desk has the following records.

```text
claim_ids = ["C1001", "C1002", "C1003", "C1004", "C1005"]
amounts   = [312013.63, 99722.73, 573508.62, 145900.00, 268450.50]
days      = [70, 27, 61, 12, 45]
statuses  = ["  approved ", "APPROVED", "pending", "rejected ", " approved"]
```

Write a well commented program that:

- defines a function `claim_summary()` with **`claim_amount` and `settlement_days` as compulsory
  parameters** and **`coinsurance_pct` as a default parameter with the value 10.0**. Include a
  docstring. The function must compute the coinsurance deduction (`coinsurance_pct` per cent of
  the claim amount), the net payable (claim amount less the deduction) and the delay interest
  (8% per annum on the net payable for `settlement_days` days, using a 365-day year), and
  **return all three values**;
- calls the function for the **first** claim **without** passing the coinsurance, unpacks the
  three returned values into separate variables, and prints each to two decimal places;
- then loops over every record, cleans each status string (strip the ends, collapse internal
  spaces, title case), classifies the turnaround as **Fast** (30 days or fewer), **Normal** (31
  to 60 days) or **Slow** (over 60 days), prints one audit line per claim including the net
  payable, and finally prints the three band counts and the list of claim IDs that breached the
  60-day turnaround. **(12)**

**Marking scheme.** 2 marks function signature (two compulsory, one default); 1 mark docstring;
3 marks the three formulas; 1 mark `return` of three values; 1 mark unpacking plus two-decimal
printing; 1 mark the call that exercises the default; 2 marks the loop with `zip()` and the string
cleaning; 1 mark the three-way band logic with correct boundaries.

### Q3 (8 marks) — read and inspect

(a) Read both sheets into `claims` and `policy`. Print the shape of each. **(2)**
(b) For `claims`, display the first five observations, the data types and the general DataFrame
information. Confirm in one line what type `Claim_Date` arrived as. **(3)**
(c) Descriptive statistics for `claims`, rounded to two decimals, plus the first and last claim
dates in the file. **(3)**

**Marking scheme.** 1 mark each `sheet_name`; 1 mark `head()`, 1 mark `dtypes`, 1 mark the
`datetime64[ns]` observation; 2 marks `describe().round(2)`, 1 mark `min()` / `max()` on the date.

### Q4 (8 marks) — missing values

(a) Set `Claim_ID` as the index. Report the missing-value count for every column and state
whether imputation is needed. **(2)**
(b) The audit team reports that `Settlement_Days` was never recorded for claims `C0003`, `C0010`
and `C0100`, and that `Claim_Amount` is unreadable for claim `C0007`. Mark those four cells
missing and show the affected rows. **(3)**
(c) Impute `Settlement_Days` with the **overall median** and `Claim_Amount` with the **mean of
claims having the same `Claim_Status`**. Verify that nothing is missing and print the four
repaired rows. **(3)**

**Marking scheme.** 2 marks `isnull().sum()` and a stated conclusion; 2 marks `.loc` assignment
of `np.nan` using a list of labels, 1 mark the affected rows shown; 1 mark median imputation,
1 mark **group-wise** mean imputation, 1 mark verification.

### Q5 (10 marks) — selection, filtering and sorting

(a) Using `.loc`, list `Policy_ID`, `Claim_Date` and `Claim_Amount` for approved claims above
Rs. 5,00,000, largest first. Report how many match and display the first eight. **(4)**
(b) Using `.iloc`, display the first ten rows together with columns in positions 1 to 3. **(3)**
(c) Display the five slowest settlements, breaking ties by claim amount descending. **(3)**

**Marking scheme.** (a) 2 marks the compound condition with parentheses, 1 mark column list,
1 mark the sort; (b) 2 marks correct `iloc` ranges, 1 mark stating that the stop is excluded;
(c) 2 marks the two-key `sort_values` with a list of booleans, 1 mark `head(5)`.

### Q6 (10 marks) — combine and export

(a) Attach the policy attributes to every claim using `Policy_ID`, keeping **all** claims. Report
the merged shape, the number of claims whose policy was not found, and the number of policies in
the master against which **no** claim was ever made. **(4)**
(b) Add `Claim_Ratio_pct = Claim_Amount / Sum_Insured × 100` and show the first five rows with
`Claim_ID`, `Policy_ID`, `Policy_Type`, `Claim_Amount`, `Sum_Insured` and `Claim_Ratio_pct`.
Report how many claims exceed their sum insured. **(3)**
(c) Write the merged table to `claims_merged.csv` **without** the index, read it back, and confirm
the shape and the `Claim_Date` dtype after the round trip. **(3)**

**Marking scheme.** (a) 1 mark `on="Policy_ID"`, 1 mark `how="left"`, 2 marks both unmatched
counts computed the right way round; (b) 2 marks the derived column, 1 mark the count; (c) 1 mark
`to_csv(..., index=False)`, 1 mark re-read, 1 mark spotting that a CSV loses the datetime type
unless you `parse_dates`.

### Q7 (10 marks) — pivot tables

(a) Mean `Claim_Amount` by `Policy_Type` (rows) and `Claim_Status` (columns), zero-filled, with
totals. **(5)**
(b) Count of claims by `Region` (rows) and `Risk_Category` (columns). **(3)**
(c) Total `Claim_Amount` for each calendar month of claim. **(2)**

**Marking scheme.** (a) 1 mark each for `index`, `columns`, `values` + `aggfunc`, `fill_value=0`,
`margins=True`; (b) 2 marks correct axes with `aggfunc="count"`, 1 mark `fill_value=0`;
(c) 2 marks `dt.to_period("M")` (or `dt.year` plus `dt.month`) with a `groupby` sum.

### Q8 (10 marks) — frequency distribution and cross-tabulation

(a) Group `Claim_Amount` into the classes **0–2 lakh, 2–4 lakh, 4–6 lakh, 6–8 lakh and
8–12 lakh**, treating each as left-closed and right-open. Report frequency, relative frequency
(%), cumulative frequency and cumulative percentage; state the total; name the modal class; and
state your closure assumption. **(6)**
(b) Cross-tabulate `Region` against `Claim_Status` with totals, then again as row percentages
rounded to one decimal. **(4)**

**Marking scheme.** (a) 2 marks the six bin edges, 1 mark labels, 1 mark `right=False` **plus**
the stated assumption, 1 mark `sort_index()`, 1 mark the cumulative columns; (b) 2 marks
`crosstab` with `margins=True`, 2 marks `normalize="index"` scaled to per cent.

### Q9 (16 marks) — one figure, four panels

Create one figure with a **2 × 2** layout:

- **Top-left** — bar chart of **total `Claim_Amount` by `Policy_Type`**, largest first.
- **Top-right** — histogram of `Claim_Amount` with **10 bins**.
- **Bottom-left** — scatter plot of `Sum_Insured` (x) against `Claim_Amount` (y).
- **Bottom-right** — boxplot of `Settlement_Days` for Approved, Pending and Rejected claims, in
  that order.

Title and label every panel, add grids, apply `tight_layout()`, and save the figure as a PNG at
110 dpi **before** displaying it. **(16)**

**Marking scheme.** 3 marks per panel (chart type, title, both axis labels) = 12; 2 marks
`subplots(2, 2)` and `tight_layout()`; 2 marks `savefig` before `show` with the dpi set.

### Q10 (8 marks) — written, in the space provided

(a) Write a five-point note to the claims committee based on your results in Q7, Q8 and Q9. Every
point must quote a number you actually computed. **(5)**
(b) State the closure convention you assumed in Q8 and explain, in two sentences, whether it
changed any frequency in this dataset and how you established that. **(3)**

**Marking scheme.** (a) 1 mark per point that names a figure and draws a conclusion from it;
generic statements score zero. (b) 1 mark naming the convention, 2 marks the *evidence* that it
did or did not matter.

**Total: 8 + 12 + 8 + 8 + 10 + 10 + 10 + 10 + 16 + 8 = 100 marks.**

### Answer key

<details><summary>Q1 — model answer (8 marks)</summary>

> **Defect 1 — pre-authorisation amounts in a `set`.** A `set` is unordered and discards
> duplicates, so the initial approval and its two enhancements lost their chronological sequence
> and the two identical amounts were reduced to one entry, understating the total authorised.
> Approvals form an ordered sequence in which repetition is meaningful, so the correct container
> is a **`list`**.
>
> **Defect 2 — five changeable policyholder fields in one `tuple`.** A `tuple` is immutable, so a
> room-category or claim-status change forces the whole record to be rebuilt, and positional
> access (`record[3]`) makes the code unreadable. Use a **`dict`** keyed by field name —
> `{"name": ..., "policy_no": ..., "hospital": ..., "room_category": ..., "claim_status": ...}` —
> which is both mutable and self-documenting.
>
> **Defect 3 — empanelled hospital codes in a `list` built by appending three files.** A `list`
> allows duplicates, so each hospital now appears two or three times and every count, loop and
> membership test is wrong. A catalogue of unique identifiers belongs in a **`set`**, which
> de-duplicates on insertion and tests membership quickly.
>
> **Defect 4 — a policy number stored as a list of characters.** `['P','0','0','3','8']` is no
> longer a value: it cannot be compared with another policy number, validated against a pattern,
> used as a merge key, or printed without rejoining. Store it as a **`str`** — `"P0038"` still
> supports `pol[0]`, `pol[1:]`, `.startswith("P")` and `len()`.
>
> **Rule.** Decide from three questions — does order matter, must the contents change, are
> duplicates meaningful? Ordered and changeable → `list`; ordered and fixed → `tuple`; unordered
> and unique → `set`; named fields → `dict`; a single text value → `str`.

</details>

<details><summary>Q2 — core Python (12 marks)</summary>

```python
# ==================================================================
# Mock D - Q2 : claim processing from literal data
# ==================================================================
claim_ids = ["C1001", "C1002", "C1003", "C1004", "C1005"]
amounts   = [312013.63, 99722.73, 573508.62, 145900.00, 268450.50]
days      = [70, 27, 61, 12, 45]
statuses  = ["  approved ", "APPROVED", "pending", "rejected ", " approved"]


def claim_summary(claim_amount, settlement_days, coinsurance_pct=10.0):
    """
    Work out what an insurer actually pays on one claim.

    Parameters
    ----------
    claim_amount : float
        Amount claimed by the policyholder, in rupees (compulsory).
    settlement_days : int
        Days taken to settle the claim (compulsory).
    coinsurance_pct : float, optional
        Policyholder's co-payment share, in per cent. Default 10.0.

    Returns
    -------
    tuple of (float, float, float)
        coinsurance_deduction, net_payable, delay_interest
    """
    # 1. the share the policyholder bears
    coinsurance_deduction = claim_amount * coinsurance_pct / 100
    # 2. what the insurer settles
    net_payable = claim_amount - coinsurance_deduction
    # 3. delay interest at 8% p.a. on the net payable, 365-day year
    delay_interest = net_payable * 0.08 * settlement_days / 365
    return coinsurance_deduction, net_payable, delay_interest


# --- called WITHOUT coinsurance_pct so the default 10.0 applies ----
ded, net, interest = claim_summary(amounts[0], days[0])
print("Claim ID:", claim_ids[0])
print("Coinsurance Deduction: Rs.", format(ded, ".2f"))
print("Net Payable: Rs.", format(net, ".2f"))
print("Delay Interest: Rs.", format(interest, ".2f"))

# --- loop over every claim: clean the status, band the turnaround --
print()
fast, normal, slow = 0, 0, 0
slow_claims = []
for cid, amt, d, raw_status in zip(claim_ids, amounts, days, statuses):
    status = " ".join(raw_status.split()).title()   # strip + squeeze + title case

    if d <= 30:
        band = "Fast"
        fast += 1
    elif d <= 60:
        band = "Normal"
        normal += 1
    else:
        band = "Slow"
        slow += 1
        slow_claims.append(cid)

    _, net_amt, _ = claim_summary(amt, d)           # reuse the function
    print(cid, "|", status, "|", d, "days |", band, "| net Rs.", format(net_amt, ".2f"))

print()
print("Fast:", fast, " Normal:", normal, " Slow:", slow)
print("Claims breaching the 60-day TAT:", slow_claims)
```

```text
Claim ID: C1001
Coinsurance Deduction: Rs. 31201.36
Net Payable: Rs. 280812.27
Delay Interest: Rs. 4308.35

C1001 | Approved | 70 days | Slow | net Rs. 280812.27
C1002 | Approved | 27 days | Fast | net Rs. 89750.46
C1003 | Pending | 61 days | Slow | net Rs. 516157.76
C1004 | Rejected | 12 days | Fast | net Rs. 131310.00
C1005 | Approved | 45 days | Normal | net Rs. 241605.45

Fast: 2  Normal: 1  Slow: 2
Claims breaching the 60-day TAT: ['C1001', 'C1003']
```

Note `_, net_amt, _ = claim_summary(...)`. Underscore is the conventional name for a returned
value you do not need; you still have to unpack all three.

Boundary check the examiner will test: 30 → Fast, 31 → Normal, 60 → Normal, 61 → Slow. Write
`d <= 30` then `d <= 60`, never `d < 30` / `d < 60`.

</details>

<details><summary>Q3 — read and inspect (8 marks)</summary>

```python
import pandas as pd
import numpy as np
pd.set_option("display.width", 170)
pd.set_option("display.max_columns", 30)

BASE = "/Volumes/rythmn103/code/bisa_guide/Exercises/"
XL   = BASE + "Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx"

# (a)
claims = pd.read_excel(XL, sheet_name="Claims")
policy = pd.read_excel(XL, sheet_name="Policy_Master")
print("Claims:", claims.shape, " Policy_Master:", policy.shape)

# (b)
print(claims.head())
print(claims.dtypes)
claims.info()

# (c)
print(claims.describe().round(2))
print("Claim_Date range:", claims["Claim_Date"].min().date(),
      "to", claims["Claim_Date"].max().date())
```

```text
Claims: (150, 6)  Policy_Master: (60, 6)
  Claim_ID Policy_ID Claim_Date  Claim_Amount  Settlement_Days Claim_Status
0    C0001     P0038 2026-04-10     312013.63               70     Approved
1    C0002     P0048 2025-12-28     573508.62               61     Approved
2    C0003     P0017 2026-07-05      99722.73               27     Approved
3    C0004     P0048 2026-07-26     559165.67               26     Approved
4    C0005     P0048 2026-07-06     508146.10               70     Approved
Claim_ID                   object
Policy_ID                  object
Claim_Date         datetime64[ns]
Claim_Amount              float64
Settlement_Days             int64
Claim_Status               object
dtype: object
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 150 entries, 0 to 149
Data columns (total 6 columns):
 #   Column           Non-Null Count  Dtype
---  ------           --------------  -----
 0   Claim_ID         150 non-null    object
 1   Policy_ID        150 non-null    object
 2   Claim_Date       150 non-null    datetime64[ns]
 3   Claim_Amount     150 non-null    float64
 4   Settlement_Days  150 non-null    int64
 5   Claim_Status     150 non-null    object
dtypes: datetime64[ns](1), float64(1), int64(1), object(3)
memory usage: 7.2+ KB
                Claim_Date  Claim_Amount  Settlement_Days
count                  150        150.00           150.00
mean   2026-01-31 20:28:48     268709.20            40.01
min    2025-07-04 00:00:00       7302.37             3.00
25%    2025-10-29 00:00:00      80094.57            22.00
50%    2026-01-28 00:00:00     188095.74            40.50
75%    2026-05-03 00:00:00     365871.64            58.75
max    2026-08-30 00:00:00    1136029.18            75.00
std                    NaN     246494.05            20.68
Claim_Date range: 2025-07-04 to 2026-08-30
```

> **The `Claim_Date` sentence (1 mark).** `read_excel` returned `Claim_Date` already typed as
> `datetime64[ns]`, because Excel stores it as a real date. No `pd.to_datetime()` call is
> required. A CSV would have given `object` and would have needed
> `pd.to_datetime(..., dayfirst=True)` if the file wrote dates as `DD-MM-YYYY`.

Also note that in pandas 2.3 `describe()` includes the datetime column, which is why `std` shows
`NaN` on that row — a mean date exists, a standard deviation of dates does not.

</details>

<details><summary>Q4 — missing values (8 marks)</summary>

```python
# (a) Claim_ID becomes the index, then count the nulls
claims = claims.set_index("Claim_ID")
print(claims.isnull().sum())
print("Total missing cells:", int(claims.isnull().sum().sum()))
```

```text
Policy_ID          0
Claim_Date         0
Claim_Amount       0
Settlement_Days    0
Claim_Status       0
dtype: int64
Total missing cells: 0
```

> **Conclusion.** No column has a single null across all 150 claims, so the file as supplied needs
> no imputation. The treatment below is applied to the four cells the audit team has flagged.

```python
# (b) mark the four audited cells as missing
claims.loc[["C0003", "C0010", "C0100"], "Settlement_Days"] = np.nan
claims.loc["C0007", "Claim_Amount"] = np.nan
print(claims.isnull().sum().to_string())
print(claims.loc[["C0003", "C0007", "C0010", "C0100"]])
```

```text
Policy_ID          0
Claim_Date         0
Claim_Amount       1
Settlement_Days    3
Claim_Status       0
         Policy_ID Claim_Date  Claim_Amount  Settlement_Days Claim_Status
Claim_ID
C0003        P0017 2026-07-05      99722.73              NaN     Approved
C0007        P0020 2026-03-31           NaN             19.0     Approved
C0010        P0029 2025-07-27     227089.44              NaN      Pending
C0100        P0022 2025-09-03     228289.18              NaN     Approved
```

Assigning `np.nan` into an `int64` column silently promotes it to `float64` — that is why
`Settlement_Days` now prints `19.0` rather than `19`.

```python
# (c) median for the days, status-wise mean for the amount
med_days = claims["Settlement_Days"].median()
print("Median Settlement_Days:", med_days)
claims["Settlement_Days"] = claims["Settlement_Days"].fillna(med_days)

status_mean = claims.groupby("Claim_Status")["Claim_Amount"].mean()
print("Mean Claim_Amount by status:")
print(status_mean.round(2))
claims["Claim_Amount"] = claims["Claim_Amount"].fillna(claims["Claim_Status"].map(status_mean))

print("Missing cells remaining:", int(claims.isnull().sum().sum()))
print(claims.loc[["C0003", "C0007", "C0010", "C0100"]].round(2))
```

```text
Median Settlement_Days: 41.0
Mean Claim_Amount by status:
Claim_Status
Approved    250417.10
Pending     320636.91
Rejected    295982.24
Name: Claim_Amount, dtype: float64
Missing cells remaining: 0
         Policy_ID Claim_Date  Claim_Amount  Settlement_Days Claim_Status
Claim_ID
C0003        P0017 2026-07-05      99722.73             41.0     Approved
C0007        P0020 2026-03-31     250417.10             19.0     Approved
C0010        P0029 2025-07-27     227089.44             41.0      Pending
C0100        P0022 2025-09-03     228289.18             41.0     Approved
```

C0007 is an Approved claim, so it received the Approved mean of Rs. 2,50,417.10 — say that
explicitly; it is the mark for using a *group-wise* mean rather than a global one.

</details>

<details><summary>Q5 — selection, filtering and sorting (10 marks)</summary>

```python
# (a) big approved claims, largest first
mask = (claims["Claim_Amount"] > 500000) & (claims["Claim_Status"] == "Approved")
big = claims.loc[mask, ["Policy_ID", "Claim_Date", "Claim_Amount"]] \
            .sort_values("Claim_Amount", ascending=False)
print("Rows matching:", big.shape[0])
print(big.head(8).round(2))
```

```text
Rows matching: 13
         Policy_ID Claim_Date  Claim_Amount
Claim_ID
C0133        P0020 2026-08-02     874267.28
C0121        P0038 2026-04-14     789735.82
C0090        P0020 2025-08-29     789610.15
C0128        P0060 2026-06-21     751969.77
C0127        P0050 2026-05-11     738763.05
C0035        P0026 2026-04-08     734446.64
C0093        P0048 2026-04-03     717777.94
C0085        P0052 2025-08-16     682055.76
```

```python
# (b) positional slice
print(claims.iloc[0:10, 1:4])
```

```text
         Claim_Date  Claim_Amount  Settlement_Days
Claim_ID
C0001    2026-04-10    312013.630             70.0
C0002    2025-12-28    573508.620             61.0
C0003    2026-07-05     99722.730             41.0
C0004    2026-07-26    559165.670             26.0
C0005    2026-07-06    508146.100             70.0
C0006    2025-11-29     75773.410             32.0
C0007    2026-03-31    250417.105             19.0
C0008    2026-06-23    317746.660             19.0
C0009    2025-07-07    257984.950             39.0
C0010    2025-07-27    227089.440             41.0
```

`1:4` returns **three** columns — positions 1, 2 and 3 — because `.iloc` excludes the stop. Say
so. C0007 shows `250417.105`, the imputed Approved mean carried to full precision.

```python
# (c) slowest five, ties broken by amount
slow = claims.sort_values(["Settlement_Days", "Claim_Amount"], ascending=[False, False])
print(slow[["Policy_ID", "Claim_Amount", "Settlement_Days", "Claim_Status"]].head(5).round(2))
```

```text
         Policy_ID  Claim_Amount  Settlement_Days Claim_Status
Claim_ID
C0133        P0020     874267.28             75.0     Approved
C0127        P0050     738763.05             74.0     Approved
C0115        P0007      72413.17             73.0     Rejected
C0039        P0049      40547.83             73.0     Approved
C0037        P0053     252148.61             72.0     Approved
```

The tie at 73 days is resolved by amount: C0115 (Rs. 72,413.17) before C0039 (Rs. 40,547.83).
That is exactly what the second sort key is for.

</details>

<details><summary>Q6 — combine and export (10 marks)</summary>

```python
# (a) LEFT join so that all 150 claims survive
full = pd.merge(claims.reset_index(), policy, on="Policy_ID", how="left")
print("Merged shape:", full.shape)
print("Unmatched Policy_IDs:", int(full["Policy_Type"].isnull().sum()))
print("Policies in master never claimed:",
      int((~policy["Policy_ID"].isin(claims["Policy_ID"])).sum()))
```

```text
Merged shape: (150, 11)
Unmatched Policy_IDs: 0
Policies in master never claimed: 5
```

`claims.reset_index()` first, because `Claim_ID` is the index and you want it back as a column in
the merged table. 150 rows × 11 columns = 6 claim columns + 6 policy columns − 1 shared key.

The two "unmatched" counts run in **opposite directions** and both are marked:

| Question | Code | Answer |
| --- | --- | --- |
| Claims whose policy is missing from the master | `full["Policy_Type"].isnull().sum()` | 0 |
| Policies never claimed against | `(~policy["Policy_ID"].isin(claims["Policy_ID"])).sum()` | 5 |

```python
# (b) claim as a percentage of the cover
full["Claim_Ratio_pct"] = full["Claim_Amount"] / full["Sum_Insured"] * 100
print(full[["Claim_ID", "Policy_ID", "Policy_Type", "Claim_Amount",
            "Sum_Insured", "Claim_Ratio_pct"]].head().round(2))
print("Claims exceeding the sum insured:", int((full["Claim_Ratio_pct"] > 100).sum()))
```

```text
  Claim_ID Policy_ID Policy_Type  Claim_Amount  Sum_Insured  Claim_Ratio_pct
0    C0001     P0038      Health     312013.63      1100000            28.36
1    C0002     P0048    Property     573508.62      1850000            31.00
2    C0003     P0017       Motor      99722.73       450000            22.16
3    C0004     P0048    Property     559165.67      1850000            30.23
4    C0005     P0048    Property     508146.10      1850000            27.47
Claims exceeding the sum insured: 0
```

```python
# (c) round trip through a CSV
OUT = "claims_merged.csv"
full.to_csv(OUT, index=False)
check = pd.read_csv(OUT, parse_dates=["Claim_Date"])
print("Written rows x cols:", full.shape, "| read back:", check.shape)
print("Claim_Date dtype after re-read:", check["Claim_Date"].dtype)
```

```text
Written rows x cols: (150, 12) | read back: (150, 12)
Claim_Date dtype after re-read: datetime64[ns]
```

Twelve columns now — the eleven from the merge plus `Claim_Ratio_pct`. Two marked points:
`index=False` stops a junk `Unnamed: 0` column appearing on the next read, and **without**
`parse_dates=["Claim_Date"]` the re-read date comes back as `object`, because a CSV is plain text
and carries no types.

</details>

<details><summary>Q7 — pivot tables (10 marks)</summary>

```python
# (a) mean claim by policy type x status, zero-filled, with totals
pv1 = pd.pivot_table(full, index="Policy_Type", columns="Claim_Status",
                     values="Claim_Amount", aggfunc="mean",
                     fill_value=0, margins=True, margins_name="All")
print(pv1.round(2))
```

```text
Claim_Status   Approved    Pending   Rejected        All
Policy_Type
Health        308004.58  294370.91  251017.52  298188.60
Motor         237987.24  280715.04  189784.04  244500.16
Property      397194.19  663072.11  737225.19  490540.00
Travel         89512.24   66444.59   67187.53   81770.07
All           250417.10  320636.91  295982.24  270068.29
```

The `All` row and column are recomputed by pandas **from the raw rows**, not by averaging the
four cells beside them — so `All`/`All` = 270068.29 is the overall mean claim, not the mean of the
twelve cell means. Say so if the question asks you to interpret the margins.

```python
# (b) claim counts by region x risk category
pv2 = pd.pivot_table(full, index="Region", columns="Risk_Category",
                     values="Claim_ID", aggfunc="count", fill_value=0)
print(pv2)
```

```text
Risk_Category  High  Low  Moderate
Region
East             15   21        11
North            10   12        14
South             9    5        12
West             18    8        15
```

```python
# (c) monthly claim spend
full["Claim_Month"] = full["Claim_Date"].dt.to_period("M")
monthly = full.groupby("Claim_Month")["Claim_Amount"].sum().round(2)
print(monthly.to_string())
```

```text
Claim_Month
2025-07    2211236.67
2025-08    5507372.28
2025-09     967851.77
2025-10    2056566.12
2025-11    2562091.96
2025-12    2452490.94
2026-01    3016415.33
2026-02    2401388.85
2026-03     688728.98
2026-04    7072715.71
2026-05    3528415.61
2026-06    2546479.47
2026-07    3322295.00
2026-08    2176194.20
```

**Variants**

| If the question says | Change to |
| --- | --- |
| "by year and month separately" | `full["Y"] = full["Claim_Date"].dt.year; full["M"] = full["Claim_Date"].dt.month` then pivot `index="Y", columns="M"` |
| "by quarter" | `full["Claim_Date"].dt.to_period("Q")` |
| "count and total in one table" | `aggfunc=["count", "sum"]` |
| "the highest-spending month" | `monthly.idxmax(), monthly.max()` — check for ties first |

</details>

<details><summary>Q8 — frequency distribution and cross-tabulation (10 marks)</summary>

```python
# (a) five classes, left-closed and right-open
bins   = [0, 200000, 400000, 600000, 800000, 1200000]
labels = ["0-2 lakh", "2-4 lakh", "4-6 lakh", "6-8 lakh", "8-12 lakh"]

full["Amount_Class"] = pd.cut(full["Claim_Amount"], bins=bins, labels=labels, right=False)

f = full["Amount_Class"].value_counts().sort_index()
tab = pd.DataFrame({"Frequency": f})
tab["Relative %"] = (tab["Frequency"] / tab["Frequency"].sum() * 100).round(2)
tab["Cumulative Frequency"] = tab["Frequency"].cumsum()
tab["Cumulative %"] = tab["Relative %"].cumsum().round(2)
tab.index.name = "Claim amount class"
print(tab)
print("Total:", int(tab["Frequency"].sum()))
print("Modal class(es):", list(tab.index[tab["Frequency"] == tab["Frequency"].max()]))
print("values exactly on a bin edge:", int(full["Claim_Amount"].isin(bins).sum()))
```

```text
                    Frequency  Relative %  Cumulative Frequency  Cumulative %
Claim amount class
0-2 lakh                   76       50.67                    76         50.67
2-4 lakh                   42       28.00                   118         78.67
4-6 lakh                   16       10.67                   134         89.34
6-8 lakh                   10        6.67                   144         96.01
8-12 lakh                   6        4.00                   150        100.01
Total: 150
Modal class(es): ['0-2 lakh']
values exactly on a bin edge: 0
```

Cumulative % ends at **100.01**, not 100.00, because each relative frequency was rounded to two
decimals before being cumulated. Write one line saying "the 0.01 excess is rounding" — markers
deduct for an unexplained 100.01.

```python
# (b) region against status, counts then row percentages
ct = pd.crosstab(full["Region"], full["Claim_Status"], margins=True, margins_name="Total")
print(ct)
print()
print((pd.crosstab(full["Region"], full["Claim_Status"], normalize="index") * 100).round(1))
```

```text
Claim_Status  Approved  Pending  Rejected  Total
Region
East                31        9         7     47
North               22       10         4     36
South               20        2         4     26
West                28        8         5     41
Total              101       29        20    150

Claim_Status  Approved  Pending  Rejected
Region                                   
East              66.0     19.1      14.9
North             61.1     27.8      11.1
South             76.9      7.7      15.4
West              68.3     19.5      12.2
```

</details>

<details><summary>Q9 — one figure, four panels (16 marks)</summary>

```python
import matplotlib
matplotlib.use("Agg")            # only when running as a .py script
import matplotlib.pyplot as plt

by_type = full.groupby("Policy_Type")["Claim_Amount"].sum().sort_values(ascending=False)
print(by_type.round(2).to_string())
order = ["Approved", "Pending", "Rejected"]
print(full.groupby("Claim_Status")["Settlement_Days"].median().to_string())

fig, ax = plt.subplots(2, 2, figsize=(14, 10))

# --- Top-left: total claim amount by policy type -------------------
ax[0, 0].bar(by_type.index, by_type.values, color="steelblue")
ax[0, 0].set_title("Total Claim Amount by Policy Type")
ax[0, 0].set_xlabel("Policy Type")
ax[0, 0].set_ylabel("Total Claim Amount (Rs.)")
ax[0, 0].grid(axis="y", alpha=0.3)

# --- Top-right: distribution of claim amounts, 10 bins -------------
ax[0, 1].hist(full["Claim_Amount"], bins=10, color="orange", edgecolor="black")
ax[0, 1].set_title("Distribution of Claim Amount (10 bins)")
ax[0, 1].set_xlabel("Claim Amount (Rs.)")
ax[0, 1].set_ylabel("Number of Claims")
ax[0, 1].grid(axis="y", alpha=0.3)

# --- Bottom-left: cover against claim size -------------------------
ax[1, 0].scatter(full["Sum_Insured"], full["Claim_Amount"],
                 color="mediumseagreen", alpha=0.7)
ax[1, 0].set_title("Sum Insured vs Claim Amount")
ax[1, 0].set_xlabel("Sum Insured (Rs.)")
ax[1, 0].set_ylabel("Claim Amount (Rs.)")
ax[1, 0].grid(alpha=0.3)

# --- Bottom-right: turnaround by status ----------------------------
groups = [full.loc[full["Claim_Status"] == s, "Settlement_Days"] for s in order]
ax[1, 1].boxplot(groups, tick_labels=order)
ax[1, 1].set_title("Settlement Days by Claim Status")
ax[1, 1].set_xlabel("Claim Status")
ax[1, 1].set_ylabel("Settlement Days")
ax[1, 1].grid(axis="y", alpha=0.3)

plt.tight_layout()
plt.savefig("claims_panel.png", dpi=110, bbox_inches="tight")   # SAVE FIRST
plt.show()

# supporting numbers for the written answer
print("corr(Sum_Insured, Claim_Amount) =", round(full["Sum_Insured"].corr(full["Claim_Amount"]), 3))
print("corr(Settlement_Days, Claim_Amount) =",
      round(full["Settlement_Days"].corr(full["Claim_Amount"]), 3))
```

```text
Policy_Type
Property    20112140.10
Motor        8802005.85
Health       7752903.56
Travel       3843193.39
Claim_Status
Approved    41.0
Pending     45.0
Rejected    36.0
corr(Sum_Insured, Claim_Amount) = 0.657
corr(Settlement_Days, Claim_Amount) = -0.042
```

![Mock D Q9 — 2x2 panel: total claim amount by policy type, distribution of claim amount, sum insured against claim amount, and settlement days by claim status](/figures/16-mockD-fig1.png)

</details>

<details><summary>Q10 — written (8 marks)</summary>

> **(a) Note to the claims committee.**
>
> 1. **Property drives the book.** Property claims total Rs. 2.01 crore of the Rs. 4.05 crore
>    claimed across all 150 records, and they carry the highest mean claim at Rs. 4,90,540 against a portfolio mean of
>    Rs. 2,70,068 — roughly 1.8 times the average.
> 2. **The claim distribution is strongly right-skewed.** 76 of 150 claims (50.67%) fall below
>    Rs. 2 lakh and 118 (78.67%) below Rs. 4 lakh, yet the largest single claim is
>    Rs. 11,36,029. Reserving on the mean alone will under-provide for the tail; use the
>    8–12 lakh class, which still holds 6 claims (4.00%).
> 3. **Rejection is concentrated in high-value Property claims.** Mean rejected Property claim is
>    Rs. 7,37,225, the single largest cell in the Q7(a) pivot and nearly three times the
>    Rs. 2,51,018 mean of rejected Health claims — worth an underwriting review rather than a
>    claims-process review.
> 4. **Approval rates vary by region.** South approves 76.9% of its claims against North's 61.1%,
>    and North has the highest pending share at 27.8%. With only 26 claims South's figure rests on
>    a small base, but the 15.8-point spread justifies a regional process audit.
> 5. **Turnaround is not driven by claim size.** The correlation between `Settlement_Days` and
>    `Claim_Amount` is −0.042, effectively zero, and median turnaround is 41, 45 and 36 days for
>    Approved, Pending and Rejected claims respectively. Delays are therefore procedural, not a
>    function of value. `Sum_Insured` and `Claim_Amount` do move together (r = 0.657), which is
>    expected — bigger cover permits bigger claims.
>
> **(b) Closure assumption.** In Q8 every class was taken as **left-closed and right-open**,
> `[lower, upper)`, implemented as `pd.cut(..., right=False)`; a claim of exactly Rs. 2,00,000
> would therefore be counted in 2–4 lakh, not in 0–2 lakh. It changed no frequency in this
> dataset: I checked with `full["Claim_Amount"].isin(bins).sum()`, which returned **0**, so no
> observation sits exactly on any of the six bin edges and the two conventions produce identical
> counts here.

</details>

---

## P16.2 — Turn an exam phrasing into the right technique

**Exam phrasings**

- "handle the missing values appropriately"
- "display the record of customer C007"
- "prepare a frequency distribution using the class intervals given below"
- "create one figure with a 2 × 2 layout"
- "all observations appearing in the left table should remain in the result"
- "obtain descriptive statistics for the numerical variables"

**Core idea.** Exam sentences are written in *business* language and answered in *pandas*
language. There are only about a dozen verbs in the whole course. Find the verb, find its object,
and the method follows mechanically.

**Template** — the three-step decode, used on every question in every mock above:

```text
1. VERB      show / display / extract / filter / sort / count / group / combine / plot / save
2. OBJECT    rows? columns? cells? groups? a distribution? a figure?
3. BY WHAT   a label -> .loc      a position -> .iloc     a condition -> a boolean mask
             a category -> groupby / pivot_table / crosstab
             a numeric band -> pd.cut
             a key column -> pd.merge      a stack of frames -> pd.concat
```

**Worked** — four real sentences decoded:

| Sentence | Verb | By what | Code |
| --- | --- | --- | --- |
| "Extract holdings for which Credit_Rating is AAA and Current_Value exceeds 4,00,000" | extract rows | two conditions | `df.loc[(df["Credit_Rating"]=="AAA") & (df["Current_Value"]>400000)]` |
| "Using .iloc, return rows 5:35 and columns 1:8" | slice | positions | `df.iloc[5:35, 1:8]` |
| "Count of loans by status × branch" | count | two categories | `pd.crosstab(df["status"], df["branch"])` |
| "All observations appearing in Bond_Holdings should remain" | combine | a key, left priority | `pd.merge(holdings, master, on="Bond_Code", how="left")` |

**Variants**

| Phrase family | Always means |
| --- | --- |
| "display / show / print the record(s) of …" | a `.loc` selection, then `print()` |
| "extract / filter / identify all … where …" | a boolean mask inside `.loc` |
| "arrange / order / rank" | `sort_values` — check for "descending" |
| "summarise / average / total by …" | `groupby` or `pivot_table` |
| "how many … in each …" | `value_counts` or `crosstab` |
| "distribution of" + numeric column | `pd.cut` then `value_counts().sort_index()`, or a histogram |
| "relationship between A and B" | a scatter plot, plus `.corr()` |
| "compare A across categories" | a boxplot, or a grouped bar chart |
| "composition / share of" | a pie chart, or `normalize=` on a crosstab |
| "combine / attach / bring in" | `merge` if there is a key, `concat` if you are stacking |

**Traps**

- "exceeds" / "above" is `>`, "at least" / "not less than" is `>=`. Papers use both in one
  question. The mark is on the boundary.
- "and" in business English is sometimes `&` and sometimes two separate outputs. Read whether the
  conditions apply to the same row.
- "top five" means sort *then* take five, or `nlargest(5, COL)` — not `head(5)` of an unsorted
  frame.
- "each" almost always signals a `groupby` key. "Overall" almost always removes it.

**Drill**

1. Decode these three into code without looking anything up: "Show the five highest-volume
   trading days." / "Report the mean interest rate for each risk grade and product." / "Keep every
   bond in the master even if it was never held."

<details><summary>Answer</summary>

```python
df.nlargest(5, "Volume")
pd.pivot_table(df, index="risk_grade", columns="product", values="interest_rate", aggfunc="mean")
pd.merge(holdings, master, on="Bond_Code", how="right")
```

</details>

---

## Question-spotting guide

Phrasings only. Find your sentence, note the technique, open the chapter. Chapters: 01
orientation, 02 functions, 03 loops, 04 data structures, 05 file I/O, 06 inspect/filter,
07 missing data, 08 loc/iloc/sorting, 09 pivot/groupby, 10 concat/merge/join, 11 frequency,
12 matplotlib, 13 time series, 14 capstones, 15 traps.

### Core Python

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "accepts the following inputs from the user using suitable data types" | `input()` wrapped in `float()` / `int()` | 01 |
| "display all monetary values up to two decimal places" | `format(x, ".2f")` or `f"{x:.2f}"` | 01 |
| "create a Markdown cell with a level-1 heading, a bold-and-italic subtitle and a bulleted list" | `#`, `***text***`, `-` bullets | 01 |
| "evaluate the analyst's design, identify the errors and suggest corrections" | set / tuple / list / dict / str trade-offs | 04 |
| "the original sequence was not available" / "identical values were represented only once" | a `set` was used where a `list` belongs | 04 |
| "should be able to update … independently" / "difficult to understand which position" | a `tuple` was used where a `dict` belongs | 04 |
| "including repeated codes received from different reports" | a `list` was used where a `set` belongs | 04 |
| "a fixed two-part record" | a `list` was used where a `tuple` belongs | 04 |
| "stored as collections of individual characters" | should be a single `str` | 04 |
| "create a function named X with compulsory parameters … and a default parameter" | `def X(a, b, c=VALUE):` | 02 |
| "regular comments as well as a docstring" | `#` lines **and** a `"""…"""` block | 02 |
| "the function must return three values" | `return a, b, c` | 02 |
| "store the returned values in separate variables" | `x, y, z = f(...)` | 02 |
| "call the function without passing the …" | rely on the default; do not pass it | 02 |
| "process every record using a loop" | `for i in range(len(L))` or `zip(a, b, c)` | 03 |
| "remove extra spaces" / "convert to title case" | `" ".join(s.split())`, `.title()` | 03 |
| "classify as … if the rating is 4 or above, **or** the text contains …" | `if num_rule or any(w in text.lower() for w in WORDS)` | 03 |
| "store the names in a separate list" / "count the number of …" | `.append()`, then `len()` | 03 |
| "do not use sum(); build the total inside the loop" | `total = 0` then `total += x` | 03 |
| "must continue to work if the values in the lists are changed" | no magic numbers, drive everything off `len()` | 03 |

### Reading files and first look

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "read the CSV file into a DataFrame" | `pd.read_csv(PATH)` | 05 |
| "the file is semicolon separated" / "tab separated" | `sep=";"` / `sep="\t"` | 05 |
| "skip the first three descriptive lines" | `skiprows=3` | 05 |
| "use column X as the index" | `index_col="X"` | 05 |
| "read both sheets into separate DataFrames" | `pd.read_excel(XL, sheet_name="…")`, twice | 05 |
| "list the sheets in the workbook" | `pd.ExcelFile(XL).sheet_names` | 05 |
| "export the result to a CSV without the index" | `to_csv("out.csv", index=False)` | 05 |
| "the dates are in DD-MM-YYYY" | `pd.to_datetime(col, dayfirst=True)` | 05 |
| "display the first five observations" / "the last five" | `head()` / `tail()` | 06 |
| "shape, column names, data types and general information" | `shape`, `columns`, `dtypes`, `info()` | 06 |
| "obtain descriptive statistics for the numerical variables" | `describe().round(2)` | 06 |
| "how many unique branches are there" | `nunique()`, `unique()` | 06 |
| "extract all records where …" | a boolean mask in `.loc` | 06 |
| "records satisfying both / either condition" | `&` / `\|` with parentheses around each | 06 |
| "records where the branch is one of Panaji, Vasco or Ponda" | `.isin([...])` | 06 |

### Missing values

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "check for missing values" / "count the missing values in each column" | `isnull().sum()` | 07 |
| "how many rows have at least one missing value" | `isnull().any(axis=1).sum()` | 07 |
| "handle the missing values appropriately" | choose and **state** the method | 07 |
| "replace missing amounts with the mean / median" | `fillna(df[COL].mean())` | 07 |
| "fill using the average of the same product / branch / status" | `df[COL].fillna(df[GROUP].map(df.groupby(GROUP)[COL].mean()))` | 07 |
| "use forward fill" / "backward fill" | `ffill()` / `bfill()` — not `fillna(method=…)` | 07 |
| "drop rows with missing values in this column" | `dropna(subset=[COL])`, then report the new shape | 07 |
| "discuss what would happen if missing prices were filled with 0" | written answer: means collapse, sums unaffected | 07 |
| "why did missing values appear after the join" | unmatched keys on the outer side | 10 |

### Selecting, slicing, sorting

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "display the record of customer C007" / "the row labelled ST101" | `df.loc["C007"]` | 08 |
| "rows 25 through 40 showing columns Name to Total" | `df.loc[25:40, "Name":"Total"]` — stop **included** | 08 |
| "using .iloc, return rows 5:35 and columns 1:8" | `df.iloc[5:35, 1:8]` — stop **excluded** | 08 |
| "every fifth row from 0 to 50" | `df.iloc[0:50:5]` | 08 |
| "the first four columns" | `df.iloc[:, 0:4]` | 08 |
| "sorted by amount descending" | `sort_values(COL, ascending=False)` | 08 |
| "sort by branch ascending and EMI descending" | `sort_values([A, B], ascending=[True, False])` | 08 |
| "the top ten rows using slicing" | `.head(10)` after the sort | 08 |
| "the five largest / smallest" | `nlargest(5, COL)` / `nsmallest(5, COL)` | 08 |
| "reset the index after filtering" | `reset_index(drop=True)` | 08 |

### Grouping and pivots

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "total sales by city" / "average score by department" | `groupby(COL)[VAL].sum()` / `.mean()` | 09 |
| "sum of principal by branch × product" | `pivot_table(index=, columns=, values=, aggfunc="sum")` | 09 |
| "with fill_value=0 and totals" | `fill_value=0, margins=True` | 09 |
| "count of loans by status × branch" | `aggfunc="count"` or `pd.crosstab` | 09 |
| "both the sum and the mean" | `aggfunc=["sum", "mean"]`, then flatten the columns | 09 |
| "multiple value columns" | `values=[COL_A, COL_B]` | 09 |
| "flatten the column names" | `df.columns = ["_".join(c) for c in df.columns]` | 09 |
| "standard deviation / variance by group" | `aggfunc="std"` / `"var"` | 09 |
| "first and last value in each group" | `aggfunc=["first", "last"]` | 09 |
| "which group has the highest total" | `idxmax()` — but check for ties first | 09 |

### Combining tables

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "combine the two tables using the common column" | `pd.merge(a, b, on=KEY)` | 10 |
| "all observations appearing in the left table should remain" | `how="left"` | 10 |
| "keep only the records present in both" | `how="inner"` | 10 |
| "keep everything from both tables" | `how="outer"` | 10 |
| "the key columns have different names" | `left_on=`, `right_on=` | 10 |
| "stack the two months of data on top of each other" | `pd.concat([a, b], ignore_index=True)` | 10 |
| "add a column naming the source before concatenating" | `a["Source"] = "…"` then `concat` | 10 |
| "join on the index" | `a.join(b)` after `set_index` on both | 10 |
| "report the shape of each join result" | `.shape` after every join — a common mark | 10 |
| "which policies were never claimed against" | `~master[KEY].isin(txn[KEY])` | 10 |

### Frequency distributions

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "prepare a frequency distribution using the class intervals below" | `pd.cut(col, bins=[...], labels=[...])` | 11 |
| "0–10, 10–20, 20–30" with no closure stated | pick `right=False`, **state the assumption** | 11 |
| "relative frequency" / "percentage frequency" | `freq / freq.sum() * 100` | 11 |
| "cumulative frequency" | `freq.cumsum()` | 11 |
| "the modal class" | a tie-safe mask, not bare `idxmax()` | 11 |
| "five equal-width classes" | `pd.cut(col, bins=5)`, then report the edges | 11 |
| "quartile classes" | `pd.qcut(col, 4)` | 11 |
| "cross-tabulate A against B" | `pd.crosstab(df[A], df[B])` | 11 |
| "as a percentage of the row / column / total" | `normalize="index"` / `"columns"` / `"all"` | 11 |
| "frequency distribution of a text column" | `value_counts()` — no binning | 11 |

### Charts

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "one figure with a 2 × 2 layout" | `fig, ax = plt.subplots(2, 2, figsize=(14, 10))` | 12 |
| "a 1 × 3 layout" | `plt.subplots(1, 3, figsize=(18, 5))` | 12 |
| "bar chart of the five largest" | `nlargest(5, COL)` then `ax.bar` | 12 |
| "histogram using 10 bins" | `ax.hist(col, bins=10, edgecolor="black")` | 12 |
| "scatter plot of A against B" | `ax.scatter(df[A], df[B], alpha=0.7)` | 12 |
| "boxplot comparing X across categories" | `ax.boxplot([g1, g2, g3], tick_labels=[...])` | 12 |
| "pie chart showing the share of" | `plt.pie(s, labels=s.index, autopct="%1.1f%%", startangle=90)` | 12 |
| "add appropriate titles, axis labels and grids" | `set_title`, `set_xlabel`, `set_ylabel`, `grid(alpha=0.3)` | 12 |
| "apply tight_layout() and display the figure" | `plt.tight_layout()` then `plt.show()` | 12 |
| "save the figure as a PNG" | `plt.savefig("x.png", dpi=110)` **before** `plt.show()` | 12 |
| "the x labels overlap" | `ax.tick_params(axis="x", rotation=30)` | 12 |
| "group by age group" when there is no age-group column | bin `Age` yourself with `pd.cut` | 12 |

### Time series

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "make Date the index" | `pd.to_datetime` → `set_index` → `sort_index` | 13 |
| "all observations for March 2020" | `df.loc["2020-03"]` | 13 |
| "records from 2024-03-10 to 2024-03-20" | `df.loc["2024-03-10":"2024-03-20"]` | 13 |
| "add a Year / Month / quarter column" | `.dt.year`, `.dt.month`, `.dt.to_period("Q")` | 13 |
| "the previous day's close" / "the daily price change" | `shift(1)` / `diff()` | 13 |
| "daily returns" | `pct_change()` | 13 |
| "cumulative return" / "Wealth Index of Rs 100" | `(1 + r).cumprod()`, times 100 | 13 |
| "20-day moving average" / "rolling volatility" | `rolling(20).mean()` / `rolling(20).std()` | 13 |
| "why are the first values missing" | the window or the shift has no prior data | 13 |
| "days on which Close exceeded its own mean" | `df[df[COL] > df[COL].mean()]` | 13 |

### Written answers and whole-case questions

| If the paper says | Technique | Ch |
| --- | --- | --- |
| "state any assumptions you make" | a Markdown cell titled Assumptions — free marks | 15 |
| "interpret the result" / "write a note to management" | quote a number in every sentence | 14 |
| "discuss the limitation of this measure" | small base, skew, rounding, ties, correlation ≠ cause | 15 |
| "the filter returned no rows — explain" | print `max()` / `min()`; report the empty result honestly | 15 |
| "the prose says column X but the file has column Y" | print `df.columns` first, use the real names, note the drift | 15 |
| "why is the correlation so weak" | the four Matplotlib CSVs are random noise, all `\|r\| < 0.13` | 15 |
| "repeat the whole analysis for the other two sheets" | write one function, loop the sheet names | 14 |
| "save the output before submitting" | run the notebook top to bottom, then save | 15 |

---

## The 48-hour revision plan

Two days, roughly 16 working hours. Chapter numbers are this book's. "Redo from scratch" means
close the answer, open a blank notebook, and type it — reading a solution is not revision.

### Day 1 — rebuild the toolkit (8 hours)

| Block | Time | Do this |
| --- | --- | --- |
| 1 | 90 min | Read **01, 02, 03, 04**. Then redo *from scratch*: pre-midterm practice Exercise 2 (deposits), Exercise 4 (stock returns) and Exercise 9 (risk scores). Three loop-and-classify questions, 30 minutes total |
| 2 | 90 min | Redo *from scratch*: pre-midterm Exercise 1 (advisory fee), Exercise 8 (FD maturity) and Exercise 10 (loan cost). Three function-and-formula questions. Type the docstring every time |
| — | 20 min | Break |
| 3 | 60 min | **Sit Mock A under timed conditions. 60 minutes, no notes.** Mark it yourself against the marking schemes |
| 4 | 60 min | Read **05, 06, 07**. Redo `01 Basics/Exercise 1` (Bank Transactions — the `dayfirst=True` file) and `02 Missing values/Exercise 1` |
| 5 | 90 min | Read **08, 09**. Redo `03 Sorting and slicing/Exercise 1` (the file whose column names do not match the prose) and `04 Sorting, slicing and pivot/Exercise 1` |
| 6 | 30 min | Review every mistake from Mock A. Write the three you got wrong on one index card |

### Day 2 — papers, charts and the long case (8 hours)

| Block | Time | Do this |
| --- | --- | --- |
| 7 | 60 min | Read **10, 11**. Redo `Concat merge join exercises` and `Frequency distribution/Practice exercises/Case 1` |
| 8 | 60 min | **Sit Mock B. 60 minutes, no notes.** Mark it |
| 9 | 75 min | Read **12**. Redo the four Matplotlib exercises. Practise a 2 × 2 and a 1 × 3 figure from memory, `savefig` included |
| — | 20 min | Break |
| 10 | 60 min | **Sit Mock C. 60 minutes, no notes.** Mark it. Check your figure actually saved to disk |
| 11 | 75 min | Read **13, 14**. Redo `Integrated exercises/Case 1` Parts B and C (returns, wealth index, moving averages) |
| 12 | 95 min | **Sit Mock D. 90 minutes, no notes.** Mark it. This is the dress rehearsal |
| 13 | 35 min | Read **15** (traps) end to end. Re-read your three index cards |

If you only have 24 hours, drop blocks 5, 7 and 11 and keep every mock. If you only have 8 hours:
read 15, sit Mock A, sit Mock B, and skim the question-spotting guide.

### Final-morning checklist — the ten things people forget

Read this on the way in. Every item has cost somebody marks.

| # | Check | Why |
| --- | --- | --- |
| 1 | **Imports.** `import pandas as pd`, `import numpy as np`, `import matplotlib.pyplot as plt` | A `NameError` in cell 1 kills the whole notebook |
| 2 | **`dayfirst=True`** when a CSV holds `01-07-2025` | Without it July 1 becomes January 7, silently |
| 3 | **Parentheses around every condition** in a filter, and `&` / `\|` not `and` / `or` | `TypeError: Cannot perform 'rand_'` or `ValueError: The truth value of a Series is ambiguous` |
| 4 | **`fill_value=0`** in `pivot_table`, and `margins=True` when totals are asked for | Named in the question, therefore a named mark |
| 5 | **`tight_layout()`** on every multi-panel figure | Without it labels are clipped out of the saved file |
| 6 | **`savefig` before `show`** | `show()` clears the figure; the saved PNG comes out blank |
| 7 | **Two decimals** on every money value: `format(x, ".2f")` or `f"{x:.2f}"` | Explicitly marked in every function question |
| 8 | **Docstring *and* regular comments** in every function | The paper asks for both; one alone loses a mark |
| 9 | **State your assumptions** — bin closure, tie handling, imputation choice, join type | The cheapest marks in the paper |
| 10 | **Run top to bottom, save the output, check the filename, confirm the upload** | "SAVE THE OUTPUT BEFORE SUBMITTING. ENSURE THAT YOU SUBMIT THE RIGHT FILE." |

Two more that are not on anyone's list but should be:

- `sort_index()` after `value_counts()` in a frequency table, or your classes come out in the
  wrong order.
- `reset_index()` before merging when the key you need is currently the index.

---

## Chapter cheat sheet

```python
# ---------- the exam notebook's first cell ------------------------
import pandas as pd, numpy as np, matplotlib.pyplot as plt
pd.set_option("display.width", 140); pd.set_option("display.max_columns", 40)

# ---------- core python, 20-mark archetypes -----------------------
for a, b, c in zip(names, texts, nums):          # parallel lists
    name = " ".join(a.split()).title()           # strip + squeeze + title
    if nums_rule or any(w in b.lower() for w in WORDS):
        bucket.append(name)
print(len(bucket))                               # never a typed number

def f(compulsory_1, compulsory_2, default_p=VALUE):
    """One-line summary. Parameters / Returns."""
    return x, y, z                               # three values
x, y, z = f(a, b)                                # call WITHOUT the default
print("Rs.", format(x, ".2f"))                   # two decimals

# ---------- read, inspect ----------------------------------------
df  = pd.read_csv(P, index_col="id", sep=",", skiprows=0, parse_dates=["Date"])
df  = pd.read_excel(XL, sheet_name="Sheet1");  pd.ExcelFile(XL).sheet_names
df.head(); df.shape; df.columns; df.dtypes; df.info(); df.describe().round(2)
df.to_csv("out.csv", index=False)

# ---------- missing ----------------------------------------------
df.isnull().sum(); df.isnull().any(axis=1).sum()
df[C] = df[C].fillna(df[C].median())
df[C] = df[C].fillna(df[G].map(df.groupby(G)[C].mean()))    # group-wise
df[C] = df[C].ffill();  df = df.dropna(subset=[C])

# ---------- select, sort ------------------------------------------
df.loc["ID007"];  df.loc["A":"B", "ColA":"ColB"]            # stop INCLUDED
df.iloc[10:20, 0:4];  df.iloc[0:50:5, [0,3,4]]              # stop EXCLUDED
df.loc[(df[A] > 1) & df[B].isin(["X","Y"]) & ~df[C]]        # () round each
df.sort_values([A, B], ascending=[True, False]).head(10)
df.nlargest(5, COL)

# ---------- group, pivot, crosstab --------------------------------
pd.pivot_table(df, index=R, columns=K, values=V, aggfunc="sum",
               fill_value=0, margins=True, margins_name="Total").round(2)
pd.pivot_table(df, index=R, values=V, aggfunc=["mean", "max"])
p.columns = ["_".join(c) for c in p.columns]                # flatten
pd.crosstab(df[R], df[K], margins=True)
pd.crosstab(df[R], df[K], normalize="index") * 100

# ---------- combine ----------------------------------------------
pd.merge(left, right, on=KEY, how="left")       # "all left rows remain"
pd.merge(l, r, left_on=A, right_on=B, how="inner")
pd.concat([a, b], ignore_index=True)
(~master[KEY].isin(txn[KEY])).sum()             # never matched

# ---------- frequency ---------------------------------------------
df[CLS] = pd.cut(df[C], bins=[0,10,20,30], labels=["0-10","10-20","20-30"],
                 right=False)                   # [lower, upper) - STATE IT
f = df[CLS].value_counts().sort_index()
t = pd.DataFrame({"Frequency": f})
t["Relative %"] = (t.Frequency / t.Frequency.sum() * 100).round(2)
t["Cumulative"] = t.Frequency.cumsum()
list(t.index[t.Frequency == t.Frequency.max()])  # tie-safe modal class

# ---------- charts -------------------------------------------------
fig, ax = plt.subplots(2, 2, figsize=(14, 10))
ax[0,0].bar(s.index, s.values, color="steelblue")
ax[0,1].hist(df[C], bins=10, color="orange", edgecolor="black")
ax[1,0].scatter(df[X], df[Y], color="mediumseagreen", alpha=0.7)
ax[1,1].boxplot([g1, g2, g3], tick_labels=["AAA","AA","A"])
for a in ax.flat:
    a.set_title("T"); a.set_xlabel("X"); a.set_ylabel("Y"); a.grid(alpha=0.3)
plt.tight_layout()
plt.savefig("q.png", dpi=110, bbox_inches="tight")   # SAVE
plt.savefig("q.pdf")
plt.show()                                           # then SHOW

plt.figure(figsize=(7, 7))
plt.pie(s, labels=s.index, autopct="%1.1f%%", startangle=90)
```

| Mock | Marks | Minutes | Data file |
| --- | --- | --- | --- |
| A | 50 | 60 | none — data is printed in the questions |
| B | 50 | 60 | `04 Sorting, slicing and pivot/Exercise 2/bank_loans.csv` |
| C | 50 | 60 | `Integrated exercises/Case 2/Bond_Portfolio_Practice.xlsx` |
| D | 100 | 90 | `Integrated exercises/Case 3/Insurance_Claims_Practice.xlsx` |
