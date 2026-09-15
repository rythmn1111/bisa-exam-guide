---
id: 02-python-functions
part: "Part I — Core Python"
title: "Functions, Parameters and Return Values"
blurb: "The 20-mark archetype: accept user input, write a function with compulsory plus default parameters, apply a tiered rule, return three values, unpack them, classify the result and print to two decimals."
order: 20
covers:
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercises 1, 3, 6, 8, 10"
  - "BIFS 2026-27 ITP MT QP — Q3 (SIP calculator, 20 marks)"
patterns:
  - id: P2.1
    title: "The five-block master skeleton"
    phrasings:
      - "write a Python program that accepts the following inputs from the user"
      - "create a function named advisory_fee()"
      - "the function must calculate and return three values"
      - "call the function without passing the default parameter and store the returned values in separate variables"
      - "after calling the function, classify the result"
      - "write a well-commented Python program that accepts inputs, calls a function and classifies the output"
  - id: P2.2
    title: "Read user input and convert it to the right type"
    phrasings:
      - "accepts the following inputs from the user using suitable data types"
      - "accept the investor name, investment amount and investment period in years"
      - "enter monthly investment amount"
      - "accept the depositor name, principal amount, investment period in years and depositor age"
      - "read the loan amount and annual income from the user"
  - id: P2.3
    title: "Compulsory parameters, default parameters and parameter order"
    phrasings:
      - "the compulsory parameters should be investment_amount, investment_period, age"
      - "the function must also contain the default parameter annual_fee_rate = 0.75"
      - "the expected annual rate of return must be a default parameter with a default value of 12.0"
      - "use the compulsory parameters claim_amount, sum_insured, policy_years and the default parameter deductible_rate = 4"
      - "why must a default parameter be written last"
  - id: P2.4
    title: "Call the function without the default, and with an override"
    phrasings:
      - "call the function without passing the annual rate of return"
      - "call the function without passing the default parameter"
      - "call the function again with a different fee rate"
      - "show how the result changes if the default value is overridden"
  - id: P2.5
    title: "Return three values and unpack them"
    phrasings:
      - "the function must return three values"
      - "store the three returned values in separate variables and print each value individually"
      - "the function must return the deductible, loyalty addition and final settlement amount"
      - "the function must return Trade Value, final brokerage and total transaction charges"
      - "the function should return the applicable interest rate, total interest earned and maturity amount"
  - id: P2.6
    title: "Docstring and comments that earn the mark"
    phrasings:
      - "the function must contain a suitable docstring and regular comments"
      - "create a well commented (regular comments as well as docstring) function"
      - "include a function docstring and suitable comments"
      - "add an appropriate function docstring and comments"
      - "write a well commented Python program"
  - id: P2.7
    title: "Tiered rules and inclusive boundaries"
    phrasings:
      - "10% discount if age is from 50 to 60 years, inclusive"
      - "2% of the preliminary settlement for 3 to 5 completed years"
      - "8% if loan amount is above Rs. 5,00,000 but not above Rs. 15,00,000"
      - "if the depositor is 60 years or older, add a senior-citizen bonus of 0.50 percentage points"
      - "Intraday transactions are charged 60% of the calculated brokerage"
      - "apply the following age-based discount"
  - id: P2.8
    title: "Classify a computed percentage into three bands"
    phrasings:
      - "after calling the function, classify the annual advisory cost as Economical, Standard or High"
      - "classify it as Low Settlement if below 70%, Moderate Settlement if from 70% to 90%, inclusive, High Settlement if above 90%"
      - "classify the transaction as Low Cost, Normal Cost or High Cost"
      - "classify the charge burden as Low, Moderate or High"
      - "classify the investment duration as Short Term, Medium Term or Long Term"
  - id: P2.9
    title: "Print money and percentages to two decimal places"
    phrasings:
      - "display all monetary values up to two decimal places"
      - "display results up to two decimal places"
      - "display the investor name and all monetary values to two decimal places"
      - "print Rs. 600000.00 style output"
      - "round the answer to 2 decimals"
  - id: P2.10
    title: "Percentage-of-a-base arithmetic"
    phrasings:
      - "the default value represents an annual advisory fee of 0.75% of the investment amount"
      - "calculate the basic brokerage as a percentage of Trade Value"
      - "annual fee as a percentage of the investment amount"
      - "total initial charges as a percentage of annual income"
      - "also calculate a transaction levy equal to 0.05% of Trade Value"
      - "calculate the final settlement as a percentage of the original claim"
  - id: P2.11
    title: "Translate an exam formula into Python"
    phrasings:
      - "Interest = (Principal x Rate x Years) / 100"
      - "Processing Fee = Loan Amount x (Processing Rate / 100)"
      - "Trade Value = Quantity x Price"
      - "calculate the maturity amount using simple interest"
      - "convert the given formula into a Python expression"
  - id: P2.12
    title: "Compound growth and the SIP future-value formula"
    phrasings:
      - "the estimated future value of the SIP must be calculated using M [((1+r)^n - 1)/r] (1+r)"
      - "Monthly Rate = Annual Rate of Return / (12 x 100)"
      - "Number of Investments = Investment Period in Years x 12"
      - "Estimated Wealth Gain = Future Value - Total Amount Invested"
      - "estimate the future value of a customer's Systematic Investment Plan"
  - id: P2.13
    title: "The Markdown cell before the program"
    phrasings:
      - "before the code, create a Markdown cell containing a level-1 title, an italic subtitle, and a three-item bulleted list explaining the outputs"
      - "create a Markdown cell before the program containing a level-1 heading, a bold-and-italic subtitle, and a bulleted list"
      - "the notebook should begin with a Markdown cell containing a level-1 heading, a bold introductory sentence, and a bulleted list of the three calculated outputs"
      - "use a level-1 heading for the title, bold and italics for the subtitle, and a bulleted list for the three outputs"
      - "include a short Markdown introduction to the program"
  - id: P2.14
    title: "Test an input() program without typing anything"
    phrasings:
      - "test the program before submitting"
      - "save the output before submitting"
      - "how do I re-run the notebook quickly with the same inputs"
      - "sample input and output are provided purely for illustration"
  - id: P2.15
    title: "Model answer — advisory_fee() (Exercise 1)"
    phrasings:
      - "Mutual Fund Advisory Fee Calculator"
      - "an investment advisory company charges investors an annual advisory fee"
      - "create a function named advisory_fee()"
      - "no discount if age is below 50 years, 10% discount if age is from 50 to 60 years, inclusive, 20% discount if age is above 60 years"
      - "classify the annual advisory cost as Economical, Standard or High"
  - id: P2.16
    title: "Model answer — claim_settlement() (Exercise 3)"
    phrasings:
      - "Insurance Claim Settlement Estimator"
      - "create a function named claim_settlement()"
      - "first ensure that the amount considered for settlement does not exceed the sum insured"
      - "provide a loyalty addition based on completed policy years"
      - "classify it as Low Settlement, Moderate Settlement or High Settlement"
  - id: P2.17
    title: "Model answer — trade_cost() (Exercise 6)"
    phrasings:
      - "Securities Transaction Cost Calculator"
      - "create a function named trade_cost()"
      - "Delivery transactions use the full calculated brokerage, Intraday transactions are charged 60%"
      - "also calculate a transaction levy equal to 0.05% of Trade Value"
      - "classify the transaction as Low Cost, Normal Cost or High Cost"
  - id: P2.18
    title: "Model answer — fd_maturity() (Exercise 8)"
    phrasings:
      - "Fixed Deposit Maturity Estimator"
      - "create a function named fd_maturity()"
      - "if the depositor is 60 years or older, add a senior-citizen bonus of 0.50 percentage points to the interest rate"
      - "classify the investment duration as Short Term, Medium Term or Long Term"
      - "estimate the maturity value of fixed deposits using simple interest"
  - id: P2.19
    title: "Model answer — loan_cost() (Exercise 10)"
    phrasings:
      - "Loan Processing Cost Estimator"
      - "create a function named loan_cost()"
      - "calculate an additional documentation charge as follows"
      - "total initial charges as a percentage of annual income"
      - "classify the charge burden as Low, Moderate or High"
  - id: P2.20
    title: "Model answer — sip_summary() (Midterm Q3)"
    phrasings:
      - "an investment company wants to create a program that estimates the future value of a customer's Systematic Investment Plan (SIP)"
      - "create a well commented function named sip_summary()"
      - "call the function without passing the annual rate of return"
      - "Total Amount Invested: Rs. 600000.00"
      - "SIP Investment Growth Calculator"
---

This chapter uses **no data files**. Everything here runs on values typed in by the user, so
the whole chapter is reproducible in a bare notebook cell. All outputs below were produced with
Python 3.9.6.

Exercises 1, 3, 6, 8 and 10 of *Exercises to practice pre-midterm portion*, and Q3 of the
*BIFS 2026-27 ITP MT QP* (20 marks), are **the same question six times over**. Learn one
skeleton (P2.1), learn the boundary table (P2.7), and all six are mechanical refills.

## Chapter map

| Pattern | Use it when |
| --- | --- |
| P2.1 | The question says "accept inputs, create a function, return values, then classify" — start here |
| P2.2 | Any "accepts the following inputs from the user" line |
| P2.3 | "compulsory parameters ... and the default parameter ..." |
| P2.4 | "call the function without passing the default" |
| P2.5 | "the function must return three values" / "store in separate variables" |
| P2.6 | "suitable docstring and regular comments" |
| P2.7 | Any tier / band / slab rule inside the function |
| P2.8 | Any "after calling the function, classify ..." rule |
| P2.9 | "display all monetary values to two decimal places" |
| P2.10 | "X% of the investment amount / trade value / annual income" |
| P2.11 | A formula is printed in the question paper in maths notation |
| P2.12 | SIP, compound growth, future value, `(1+r)**n` |
| P2.13 | "before the code, create a Markdown cell ..." |
| P2.14 | You need to re-run and screenshot an `input()` program fast |
| P2.15–P2.20 | Complete model answers for the six known variants |

---

## P2.1 — The five-block master skeleton

**Exam phrasings**

- "write a Python program that accepts the following inputs from the user"
- "create a function named advisory_fee()"
- "the function must calculate and return three values"
- "call the function without passing the default parameter and store the returned values in separate variables"
- "after calling the function, classify the result"
- "write a well-commented Python program that accepts inputs, calls a function and classifies the output"

**Core idea.** Every one of the six variants is the same five blocks in the same order. Write the
five comment headers on your answer sheet first, then fill them. You cannot lose structure marks
if the five blocks are visibly present.

| Block | What goes in it | Marks it protects |
| --- | --- | --- |
| 1. INPUT | one `input()` per bullet in the question, wrapped in `int`/`float` where needed | data-type marks |
| 2. FUNCTION | `def name(compulsory..., default=value):`, docstring, comments, tier ladder, `return a, b, c` | most of the marks |
| 3. CALL | call with only the compulsory arguments, unpack into three names | "call without the default" mark |
| 4. CLASSIFY | `if / elif / else` on the returned percentage | classification marks |
| 5. PRINT | name first, then every value with `:.2f` | formatting marks |

**Template**

```python
# ---------- BLOCK 1: INPUT ----------
NAME_VAR   = input("Enter NAME: ")            # str
BASE_VAR   = float(input("Enter AMOUNT: "))   # money -> float
PERIOD_VAR = int(input("Enter YEARS: "))      # count -> int
TIER_VAR   = int(input("Enter AGE: "))        # value the tier rule tests

# ---------- BLOCK 2: FUNCTION ----------
def FUNC_NAME(BASE_VAR, PERIOD_VAR, TIER_VAR, RATE_PARAM=DEFAULT_VALUE):
    """One-line summary.

    BASE_VAR   : float - ... (compulsory)
    PERIOD_VAR : int   - ... (compulsory)
    TIER_VAR   : int   - ... (compulsory)
    RATE_PARAM : float - ...; default DEFAULT_VALUE

    Returns a tuple: (VALUE_1, VALUE_2, PERCENTAGE)
    """
    basic = BASE_VAR * RATE_PARAM / 100         # percentage of the base

    if TIER_VAR < LOW_EDGE:                     # "below LOW_EDGE"
        adjustment = RATE_A
    elif LOW_EDGE <= TIER_VAR <= HIGH_EDGE:     # "from LOW_EDGE to HIGH_EDGE, inclusive"
        adjustment = RATE_B
    else:                                       # "above HIGH_EDGE"
        adjustment = RATE_C

    VALUE_1 = ...
    VALUE_2 = ...
    PERCENTAGE = VALUE_1 / BASE_VAR * 100
    return VALUE_1, VALUE_2, PERCENTAGE

# ---------- BLOCK 3: CALL WITHOUT THE DEFAULT ----------
out_1, out_2, out_pct = FUNC_NAME(BASE_VAR, PERIOD_VAR, TIER_VAR)

# ---------- BLOCK 4: CLASSIFY ----------
if out_pct < BAND_LOW:
    band = "LABEL_1"
elif out_pct <= BAND_HIGH:
    band = "LABEL_2"
else:
    band = "LABEL_3"

# ---------- BLOCK 5: PRINT ----------
print("Customer Name   :", NAME_VAR)
print(f"Value 1         : Rs. {out_1:.2f}")
print(f"Value 2         : Rs. {out_2:.2f}")
print(f"Percentage      : {out_pct:.2f}%")
print("Category        :", band)
```

**Worked** — the skeleton filled in with neutral names, so you can see it actually runs.

```python
# ---------- BLOCK 1: INPUT ----------
customer_name = input("Enter customer name: ")               # str
base_amount   = float(input("Enter transaction amount: "))   # money -> float
period        = int(input("Enter period in years: "))        # count -> int
tier_value    = int(input("Enter customer age: "))           # the value the tier rule tests


# ---------- BLOCK 2: FUNCTION ----------
def service_charge(base_amount, period, tier_value, charge_rate=0.75):
    """Compute the service charge on a transaction.

    base_amount : float  - amount the charge is a percentage of (compulsory)
    period      : int    - number of years (compulsory)
    tier_value  : int    - value tested by the tiered rule (compulsory)
    charge_rate : float  - charge as a percentage of base_amount; default 0.75

    Returns a tuple: (charge after adjustment, charge over the period,
                      charge as a percentage of base_amount)
    """
    basic = base_amount * charge_rate / 100        # percentage of base

    if tier_value < 50:                            # "below 50"
        adjustment = 0.00
    elif 50 <= tier_value <= 60:                   # "from 50 to 60, inclusive"
        adjustment = 0.10
    else:                                          # "above 60"
        adjustment = 0.20

    value_1 = basic - basic * adjustment           # adjusted charge
    value_2 = value_1 * period                     # cumulative charge
    value_3 = value_1 / base_amount * 100          # charge as % of base
    return value_1, value_2, value_3


# ---------- BLOCK 3: CALL WITHOUT THE DEFAULT ----------
out_1, out_2, out_pct = service_charge(base_amount, period, tier_value)


# ---------- BLOCK 4: CLASSIFY THE PERCENTAGE ----------
if out_pct < 0.60:
    band = "Economical"
elif out_pct <= 0.75:
    band = "Standard"
else:
    band = "High"


# ---------- BLOCK 5: PRINT ----------
print("Customer Name   :", customer_name)
print(f"Adjusted Charge : Rs. {out_1:.2f}")
print(f"Total Charge    : Rs. {out_2:.2f}")
print(f"Charge % of Base: {out_pct:.2f}%")
print("Category        :", band)
```

Inputs typed: `Anita Fernandes`, `400000`, `3`, `62`.

```text
Enter customer name: Anita Fernandes
Enter transaction amount: 400000
Enter period in years: 3
Enter customer age: 62
Customer Name   : Anita Fernandes
Adjusted Charge : Rs. 2400.00
Total Charge    : Rs. 7200.00
Charge % of Base: 0.60%
Category        : Standard
```

Hand-check: `400000 * 0.75 / 100 = 3000`; age 62 is above 60 so a 20% discount gives
`3000 * 0.8 = 2400`; over 3 years `7200`; `2400 / 400000 * 100 = 0.60%`.

**Variants**

| If the question says | Change |
| --- | --- |
| "return two values" | drop one name on both sides: `return a, b` / `a, b = f(...)` |
| "return four values" | `return a, b, c, d` / `a, b, c, d = f(...)` |
| the percentage is returned by the function (Ex 10) | compute it in Block 2, not Block 4 |
| the percentage is computed after the call (Ex 3, Ex 6) | compute it at the top of Block 4 |
| classification uses an **input**, not a returned value (Ex 8 duration) | classify `years`, not any returned value |
| no classification asked (Q3) | delete Block 4; keep the other four |

**Traps**

- Do not define the function *inside* another block or after the call. In a notebook, the `def`
  cell must run before the calling cell.
- The order of the five blocks is part of the answer. Markers look for `def`, then a call, then
  the classification.
- Do not read the inputs *inside* the function. The question says the **program** accepts the
  inputs and the **function** receives them as parameters.

**Drill**

1. Rewrite the skeleton for a rule with the tier test on the **amount**, not the age: "2% if
   amount is Rs. 1,00,000 or below, 3% if above 1,00,000 but not above 5,00,000, 4% if above
   5,00,000".

<details><summary>Answer</summary>

```python
if base_amount <= 100000:
    adjustment = 0.02
elif base_amount <= 500000:
    adjustment = 0.03
else:
    adjustment = 0.04
```

</details>

---

## P2.2 — Read user input and convert it to the right type

**Exam phrasings**

- "accepts the following inputs from the user using suitable data types"
- "accept the investor name, investment amount and investment period in years"
- "enter monthly investment amount"
- "accept the depositor name, principal amount, investment period in years and depositor age"
- "read the loan amount and annual income from the user"

**Core idea.** `input()` **always** returns a `str`, even when the user types digits. If you do
not convert, arithmetic either fails with `TypeError` or silently does string repetition.
"Using suitable data types" in the question is a direct instruction to wrap `input()` in
`int()` or `float()`.

**Template**

```python
name   = input("Enter NAME: ")             # str   - leave as-is
amount = float(input("Enter AMOUNT: "))    # float - money, rates, prices
years  = int(input("Enter YEARS: "))       # int   - years, age, quantity, counts
kind   = input("Enter TYPE: ")             # str   - Delivery / Intraday, Yes / No
```

**Worked** — proof that `input()` returns a string.

```python
raw_amount = input("Enter investment amount: ")
print("value repr :", repr(raw_amount))
print("type       :", type(raw_amount))
print("raw * 2    :", raw_amount * 2)          # string repeated, NOT doubled
amount = float(raw_amount)                     # convert once, use everywhere
print("float repr :", repr(amount))
print("amount * 2 :", amount * 2)
```

Input typed: `500000`.

```text
Enter investment amount: value repr : '500000'
type       : <class 'str'>
raw * 2    : 500000500000
float repr : 500000.0
amount * 2 : 1000000.0
```

Conversion behaviour you need to know:

```python
print(int("10"), type(int("10")))
print(float("5000"), type(float("5000")))
print(float("6.5"), type(float("6.5")))
print(int(float("10.0")))          # safe route from "10.0" to int
try:
    int("10.0")                    # int() will NOT parse a decimal string
except ValueError as e:
    print("int('10.0') ->", type(e).__name__, ":", e)
try:
    float("5,00,000")              # commas are not accepted
except ValueError as e:
    print("float('5,00,000') ->", type(e).__name__, ":", e)
print(float("  5000  "))           # surrounding spaces are tolerated
```

```text
10 <class 'int'>
5000.0 <class 'float'>
6.5 <class 'float'>
10
int('10.0') -> ValueError : invalid literal for int() with base 10: '10.0'
float('5,00,000') -> ValueError : could not convert string to float: '5,00,000'
5000.0
```

**Variants**

| Question wording | Conversion to use | Why |
| --- | --- | --- |
| "investment amount", "principal", "claim amount", "price per share", "annual income" | `float(input(...))` | may have paise |
| "investment period in years", "completed policy years", "loan tenure in years", "age", "quantity of shares" | `int(input(...))` | whole numbers |
| "expected annual rate of return", "interest rate", "brokerage rate" | `float(input(...))` | `6.5`, `12.0`, `0.40` |
| "investor name", "transaction type, entered as Delivery or Intraday" | no conversion | already `str` |
| the examiner allows a decimal period such as `2.5` years | `float(input(...))` | `int("2.5")` raises `ValueError` |

Safe if you are unsure whether a numeric input is whole:

```python
years = int(float(input("Enter investment period in years: ")))
```

**Traps**

- `float(input(...))` — the brackets nest. `float(input)` (no call) returns a `TypeError`.
- Do not type the rupee symbol, commas or the word "years" in your test input; `float()` rejects them.
- `int()` on `"10.0"` is a `ValueError`. If the examiner's sample input shows `10`, `int()` is fine.
- Putting the prompt text in the wrong place — `input()` prints its argument, so write the whole
  prompt inside: `input("Enter investor name: ")` with a trailing space.

**Drill**

1. Write the four input lines for Exercise 10 (borrower name, loan amount, loan tenure in years, annual income).

<details><summary>Answer</summary>

```python
borrower_name = input("Enter borrower name: ")
loan_amount   = float(input("Enter loan amount: "))
loan_tenure   = int(input("Enter loan tenure in years: "))
annual_income = float(input("Enter annual income: "))
```

</details>

---

## P2.3 — Compulsory parameters, default parameters and parameter order

**Exam phrasings**

- "the compulsory parameters should be investment_amount, investment_period, age"
- "the function must also contain the default parameter annual_fee_rate = 0.75"
- "the expected annual rate of return must be a default parameter with a default value of 12.0"
- "use the compulsory parameters claim_amount, sum_insured, policy_years and the default parameter deductible_rate = 4"
- "why must a default parameter be written last"

**Core idea.** A **compulsory** (positional) parameter has no `=` in the `def` line and the
caller *must* supply it. A **default** parameter has `= value` in the `def` line and the caller
*may* omit it. **All defaults must come after all compulsory parameters** — otherwise Python
raises `SyntaxError` before the program even starts.

**Template**

```python
def FUNC_NAME(COMPULSORY_1, COMPULSORY_2, COMPULSORY_3, DEFAULT_PARAM=DEFAULT_VALUE):
    ...
```

**Worked** — all four ways of supplying the arguments.

```python
def advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75):
    return investment_amount * annual_fee_rate / 100

# 1. called WITHOUT the default -> 0.75 is used  (this is what every exercise demands)
print(advisory_fee(500000, 5, 45))

# 2. default overridden POSITIONALLY (4th argument)
print(advisory_fee(500000, 5, 45, 1.10))

# 3. default overridden by KEYWORD -- clearer, and order no longer matters
print(advisory_fee(500000, 5, 45, annual_fee_rate=1.10))
print(advisory_fee(age=45, investment_amount=500000, investment_period=5))

# 4. inspect what the defaults are
print(advisory_fee.__defaults__)
```

```text
3750.0
5500.0
5500.0
3750.0
(0.75,)
```

Put the default first and the file will not even compile:

```python
def bad(investment_amount, annual_fee_rate=0.75, age):
    return investment_amount
```

```text
  File "s04.py", line 1
    def bad(investment_amount, annual_fee_rate=0.75, age):
                                                        ^
SyntaxError: non-default argument follows default argument
```

Miss a compulsory argument and you get a `TypeError` at call time:

```python
def advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75):
    return investment_amount * annual_fee_rate / 100
print(advisory_fee(500000, 5))
```

```text
    print(advisory_fee(500000, 5))
TypeError: advisory_fee() missing 1 required positional argument: 'age'
```

**The six exam signatures, copy them exactly**

| Exercise | Signature |
| --- | --- |
| Ex 1 | `def advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75):` |
| Ex 3 | `def claim_settlement(claim_amount, sum_insured, policy_years, deductible_rate=4):` |
| Ex 6 | `def trade_cost(quantity, price, transaction_type, brokerage_rate=0.40):` |
| Ex 8 | `def fd_maturity(principal, years, age, interest_rate=6.5):` |
| Ex 10 | `def loan_cost(loan_amount, loan_tenure, annual_income, processing_rate=1.25):` |
| Q3 | `def sip_summary(monthly_investment, investment_period, annual_rate_of_return=12.0):` |

**Variants**

| If the question says | Write |
| --- | --- |
| "two default parameters" | `def f(a, b, rate=0.75, levy=0.05):` — both after all compulsory ones |
| "the rate must be supplied by the user" | make it compulsory: remove `= 0.75` and add an `input()` |
| "the parameter may be passed in any order" | call with keywords: `f(age=45, investment_amount=500000, ...)` |
| "force the caller to name the optional argument" | `def f(a, b, *, rate=0.75):` (rarely asked, but valid) |

**Traps**

- The default **value** belongs in the `def` line only. Never also write `annual_fee_rate = 0.75`
  inside the body — that throws away any override the caller passed.
- Match the parameter **names** in the question letter for letter. Examiners award marks for them.
- Never use a mutable default (`def f(x, items=[])`). The list is created once and shared between
  calls. Use `items=None` and build the list inside.
- A keyword argument cannot come before a positional one: `f(investment_amount=1, 5, 45)` is a `SyntaxError`.

**Drill**

1. Write the `def` line for a function `emi_summary()` with compulsory `principal`, `tenure_years`
   and a default `annual_rate` of `9.5`.

<details><summary>Answer</summary>

```python
def emi_summary(principal, tenure_years, annual_rate=9.5):
    ...
```

</details>

---

## P2.4 — Call the function without the default, and with an override

**Exam phrasings**

- "call the function without passing the annual rate of return"
- "call the function without passing the default parameter"
- "call the function again with a different fee rate"
- "show how the result changes if the default value is overridden"

**Core idea.** "Call the function without passing X" is worth a mark on its own. It means the
call must list **exactly the compulsory arguments and nothing else**. Passing the default
explicitly — even with the correct value — loses that mark.

**Template**

```python
# correct: only the compulsory arguments
v1, v2, v3 = FUNC_NAME(ARG_1, ARG_2, ARG_3)

# override, when asked separately
v1, v2, v3 = FUNC_NAME(ARG_1, ARG_2, ARG_3, DEFAULT_PARAM=NEW_VALUE)
```

**Worked** — the same function, three different rates, showing the band actually moves.

```python
# same advisory_fee() as above; only the CALL changes
for rate in [1.20, 0.75, 0.50]:
    fee, total, pct = advisory_fee(500000.0, 5, 68, annual_fee_rate=rate)
    if pct < 0.60:
        band = "Economical"
    elif pct <= 0.75:
        band = "Standard"
    else:
        band = "High"
    print(f"rate={rate:.2f}%  annual fee=Rs. {fee:.2f}  pct={pct:.2f}%  -> {band}")
```

```text
rate=1.20%  annual fee=Rs. 4800.00  pct=0.96%  -> High
rate=0.75%  annual fee=Rs. 3000.00  pct=0.60%  -> Standard
rate=0.50%  annual fee=Rs. 2000.00  pct=0.40%  -> Economical
```

**Variants**

| Wording | Call |
| --- | --- |
| "call the function without passing the default" | `f(a, b, c)` |
| "call the function with a fee rate of 1.10%" | `f(a, b, c, annual_fee_rate=1.10)` |
| "call it twice and compare" | two calls, two sets of unpacked names: `f1a, f1b, f1c = ...` |
| "call the function for each investor in the list" | put the call inside a `for` loop |

**Traps**

- `f(a, b, c, 1.10)` works but is easy to mis-position. Prefer the keyword form.
- Writing `advisory_fee(investment_amount, investment_period, age, 0.75)` when the question said
  "without passing the default" is a lost mark even though the number is right.
- Calling the function but not storing the result (`advisory_fee(...)` on its own line) throws
  the values away.

---

## P2.5 — Return three values and unpack them

**Exam phrasings**

- "the function must return three values"
- "store the three returned values in separate variables and print each value individually"
- "the function must return the deductible, loyalty addition and final settlement amount"
- "the function must return Trade Value, final brokerage and total transaction charges"
- "the function should return the applicable interest rate, total interest earned and maturity amount"

**Core idea.** `return a, b, c` builds one **tuple** and returns it. Writing three names on the
left of `=` **unpacks** that tuple into three separate variables. The number of names must equal
the number of returned values, and the **order** is the order in the `return` statement — the
question always states that order, so follow it.

**Template**

```python
def FUNC_NAME(...):
    ...
    return VALUE_1, VALUE_2, VALUE_3          # a tuple of three

name_1, name_2, name_3 = FUNC_NAME(...)       # unpack into three variables
```

**Worked**

```python
def three_values(p, r, t):
    interest = p * r * t / 100
    maturity = p + interest
    return r, interest, maturity          # one tuple, three items

# (a) catch it as a single object -> it is a tuple
result = three_values(200000, 7.0, 5)
print("type  :", type(result))
print("tuple :", result)
print("item 0:", result[0])

# (b) unpack into three separate variables -- the exam wants this
rate, interest, maturity = three_values(200000, 7.0, 5)
print("rate     =", rate)
print("interest =", interest)
print("maturity =", maturity)

# (c) wrong number of names on the left -> ValueError
try:
    a, b = three_values(200000, 7.0, 5)
except ValueError as e:
    print("2 names for 3 values ->", type(e).__name__, ":", e)

# (d) throw one away with the conventional underscore
_, interest_only, _ = three_values(200000, 7.0, 5)
print("interest_only =", interest_only)
```

```text
type  : <class 'tuple'>
tuple : (7.0, 70000.0, 270000.0)
item 0: 7.0
rate     = 7.0
interest = 70000.0
maturity = 270000.0
2 names for 3 values -> ValueError : too many values to unpack (expected 2)
interest_only = 70000.0
```

**Variants**

| If the question says | Write |
| --- | --- |
| "return three values" | `return a, b, c` |
| "return the three values as a tuple" | identical — `return a, b, c` *is* a tuple |
| "return the values in a list" | `return [a, b, c]`; unpacking still works |
| "return the values with their labels" | `return {"fee": a, "total": b, "pct": c}` then `d["fee"]` |
| you only need one of the three | `_, _, pct = f(...)` |
| the question prints the tuple directly | `print(f(...))` shows `(7.0, 70000.0, 270000.0)` — not 2-decimal formatted, so unpack instead |

**Traps**

- `return a` then `return b` on the next line: the second `return` never runs. One `return` only.
- Unpacking into the wrong number of names is a `ValueError`, not a silent bug — but it *is* a
  crash in your submitted notebook, so count the names.
- The order in your `return` must match the order the question lists. Q3 says
  "1. total amount invested, 2. estimated wealth gain, 3. estimated future value" — return them
  in that order or your printed labels will be attached to the wrong numbers.
- A bare `print(...)` inside the function is **not** a return. See the write-up answer at the end.

**Drill**

1. `claim_settlement()` must return the deductible, loyalty addition and final settlement.
   Write the `return` line and the unpacking line.

<details><summary>Answer</summary>

```python
    return deductible, loyalty_addition, final_settlement

deductible, loyalty_addition, final_settlement = claim_settlement(
    claim_amount, sum_insured, policy_years)
```

</details>

---

## P2.6 — Docstring and comments that earn the mark

**Exam phrasings**

- "the function must contain a suitable docstring and regular comments"
- "create a well commented (regular comments as well as docstring) function"
- "include a function docstring and suitable comments"
- "add an appropriate function docstring and comments"
- "write a well commented Python program"

**Core idea.** A **docstring** is a triple-quoted string that is the **first statement inside the
function body**. A **regular comment** starts with `#`. The question asks for **both**; they are
separate marks. A full-marks docstring names every parameter (saying which are compulsory and
what the default is) and says what is returned.

**Template**

```python
def FUNC_NAME(COMPULSORY_1, COMPULSORY_2, COMPULSORY_3, DEFAULT_PARAM=DEFAULT_VALUE):
    """ONE LINE SAYING WHAT THE FUNCTION COMPUTES.

    Parameters
    ----------
    COMPULSORY_1 : float
        WHAT IT IS, in rupees (compulsory parameter).
    COMPULSORY_2 : int
        WHAT IT IS, in years (compulsory parameter).
    COMPULSORY_3 : int
        WHAT IT IS (compulsory parameter).
    DEFAULT_PARAM : float, optional
        WHAT IT IS, as a percentage. Default is DEFAULT_VALUE, i.e. DEFAULT_VALUE%.

    Returns
    -------
    tuple
        (VALUE_1, VALUE_2, VALUE_3)
    """
    # regular comment: explain the business rule, not the syntax
    ...
```

**Worked** — the docstring is a real object; `help()` reads it back.

```python
def advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75):
    """Calculate the annual advisory fee after the age-based discount.

    Parameters
    ----------
    investment_amount : float
        Amount invested, in rupees (compulsory).
    investment_period : int
        Holding period in years (compulsory).
    age : int
        Age of the investor in completed years (compulsory).
    annual_fee_rate : float, optional
        Annual advisory fee as a percentage of the investment amount.
        Default is 0.75, i.e. 0.75%.

    Returns
    -------
    tuple of (float, float, float)
        (annual fee after discount, total fee over the period,
         annual fee as a percentage of the investment amount)
    """
    return investment_amount * annual_fee_rate / 100, 0, 0

print(advisory_fee.__doc__.splitlines()[0])     # the summary line only
print("---")
help(advisory_fee)
```

```text
Calculate the annual advisory fee after the age-based discount.
---
Help on function advisory_fee in module __main__:

advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75)
    Calculate the annual advisory fee after the age-based discount.
    
    Parameters
    ----------
    investment_amount : float
        Amount invested, in rupees (compulsory).
    investment_period : int
        Holding period in years (compulsory).
    age : int
        Age of the investor in completed years (compulsory).
    annual_fee_rate : float, optional
        Annual advisory fee as a percentage of the investment amount.
        Default is 0.75, i.e. 0.75%.
    
    Returns
    -------
    tuple of (float, float, float)
        (annual fee after discount, total fee over the period,
         annual fee as a percentage of the investment amount)
```

**A shorter docstring that still earns the mark** — use this when you are short of time:

```python
def fd_maturity(principal, years, age, interest_rate=6.5):
    """Estimate the maturity value of a fixed deposit using simple interest.

    principal     : float - amount deposited in rupees (compulsory)
    years         : int   - investment period in years (compulsory)
    age           : int   - depositor's age in completed years (compulsory)
    interest_rate : float - annual simple-interest rate in percent; default 6.5

    Returns a tuple: (applicable rate, total interest, maturity amount)
    """
```

**Where the regular comments must appear** — one per business rule:

```python
    # Senior-citizen bonus: 0.50 PERCENTAGE POINTS added to the rate
    # Interest = (Principal x Rate x Years) / 100
    # Maturity Amount = Principal + Interest
    # Return the three required values
```

**Variants**

| Wording | Meaning |
| --- | --- |
| "suitable docstring" | triple-quoted string, first statement in the body |
| "regular comments" | `#` comments in the body and above the input block |
| "well commented program" | comments outside the function too — above each of the five blocks |
| "explain the parameters" | name each one and say compulsory / default in the docstring |

**Traps**

- The docstring must be **inside** the function, **below** the `def` line. A triple-quoted string
  above `def` is just a loose string, not a docstring, and `help()` will not show it.
- `'''...'''` and `"""..."""` both work. `"""` is the convention.
- A `#` comment on the line after `def` is **not** a docstring. You need both.
- Comments that restate the syntax (`# add 1 to x`) score nothing. Comment the **rule**
  (`# 10% discount if age is from 50 to 60, inclusive`).

**Drill**

1. Add a two-line docstring to `trade_cost()` that names the default parameter and its value.

<details><summary>Answer</summary>

```python
def trade_cost(quantity, price, transaction_type, brokerage_rate=0.40):
    """Estimate charges on an equity transaction.
    brokerage_rate is a default parameter: brokerage as % of trade value, default 0.40.
    Returns a tuple: (trade value, final brokerage, total charges).
    """
```

</details>

---

## P2.7 — Tiered rules and inclusive boundaries

**Exam phrasings**

- "10% discount if age is from 50 to 60 years, inclusive"
- "2% of the preliminary settlement for 3 to 5 completed years"
- "8% if loan amount is above Rs. 5,00,000 but not above Rs. 15,00,000"
- "if the depositor is 60 years or older, add a senior-citizen bonus of 0.50 percentage points"
- "Intraday transactions are charged 60% of the calculated brokerage"
- "apply the following age-based discount"

**Core idea.** Every tier rule is an `if / elif / else` ladder with **exactly two boundary
numbers** for three bands. The marks are lost on `<` vs `<=`, not on the structure. Translate the
English literally using the table below, and write the question's own words as the comment on
each branch so the marker can see you read it.

### English-to-operator table — memorise this

| English in the question | Python condition |
| --- | --- |
| "below 50" / "less than 50" / "under 50" | `x < 50` |
| "up to 2 completed years" / "not more than 2" / "2 or less" | `x <= 2` |
| "up to 1 year" (Short Term) | `x <= 1` |
| "1% or less" | `x <= 1` |
| "Rs. 5,00,000 or below" | `x <= 500000` |
| "from 50 to 60 years, inclusive" | `50 <= x <= 60` |
| "from 3 to 5 completed years" | `3 <= x <= 5` |
| "from 0.60% to 0.75%, inclusive" | `0.60 <= x <= 0.75` |
| "from Rs. 75,000 to Rs. 1,50,000, inclusive" | `75000 <= x <= 150000` |
| "above Rs. 5,00,000 but not above Rs. 15,00,000" | `500000 < x <= 1500000` |
| "more than 1 year but not more than 3 years" | `1 < x <= 3` |
| "above 1% but not above 2%" | `1 < x <= 2` |
| "greater than 0% but not more than 2%" | `0 < x <= 2` |
| "less than 0% but not less than -2%" | `-2 <= x < 0` |
| "above 60" / "more than 60" / "exceeds 60" | `x > 60` |
| "more than 5 completed years" | `x > 5` |
| "exceeds Rs. 15,00,000" | `x > 1500000` |
| "60 years or older" / "at least 60" | `x >= 60` |
| "exactly 0%" / "0 days" | `x == 0` |
| "entered as Delivery or Intraday" | `x.strip().lower() == "intraday"` |

Reading rules: **"inclusive", "or below", "or older", "up to", "not more than", "at least"** all
mean the boundary is **included** (`<=` or `>=`). **"below", "above", "more than", "exceeds",
"under", "less than"** all mean it is **excluded** (`<` or `>`).

**Template**

```python
if TIER_VALUE < LOW_EDGE:                       # "below LOW_EDGE"
    RATE = RATE_A
elif LOW_EDGE <= TIER_VALUE <= HIGH_EDGE:       # "from LOW_EDGE to HIGH_EDGE, inclusive"
    RATE = RATE_B
else:                                           # "above HIGH_EDGE"
    RATE = RATE_C
```

**Worked** — every boundary value tested.

```python
def age_discount(age):
    """Return the discount fraction for an age-based advisory-fee discount."""
    if age < 50:                      # "below 50 years"
        return 0.00
    elif 50 <= age <= 60:             # "from 50 to 60 years, inclusive"
        return 0.10
    else:                             # "above 60 years"
        return 0.20

for a in [30, 49, 50, 55, 60, 61, 75]:
    print(f"age {a:>3} -> discount {age_discount(a):.2f}")
```

```text
age  30 -> discount 0.00
age  49 -> discount 0.00
age  50 -> discount 0.10
age  55 -> discount 0.10
age  60 -> discount 0.10
age  61 -> discount 0.20
age  75 -> discount 0.20
```

Because `elif` only runs when the previous condition was false, the lower edge is already
guaranteed — so the short form and the explicit form agree on every input:

```python
def band_short(age):
    if age < 50:
        return 0.00
    elif age <= 60:        # reaching here already means age >= 50
        return 0.10
    else:
        return 0.20

def band_long(age):
    if age < 50:
        return 0.00
    elif 50 <= age <= 60:  # explicit -- write this in the exam, it shows the examiner you read the range
        return 0.10
    else:
        return 0.20

print(all(band_short(a) == band_long(a) for a in range(0, 101)))
```

```text
True
```

### The six ladders you may be asked for, ready to copy

```python
# Ex 1 - age-based advisory-fee discount
if age < 50:
    discount_rate = 0.00
elif 50 <= age <= 60:
    discount_rate = 0.10
else:
    discount_rate = 0.20

# Ex 3 - loyalty addition by completed policy years
if policy_years <= 2:
    loyalty_rate = 0.00
elif 3 <= policy_years <= 5:
    loyalty_rate = 0.02
else:
    loyalty_rate = 0.05

# Ex 6 - Delivery vs Intraday brokerage (two branches, not three)
if transaction_type.strip().lower() == "intraday":
    final_brokerage = basic_brokerage * 0.60
else:
    final_brokerage = basic_brokerage

# Ex 8 - senior-citizen rate bonus (two branches)
if age >= 60:
    applicable_rate = interest_rate + 0.50      # percentage POINTS
else:
    applicable_rate = interest_rate

# Ex 10 - documentation charge by loan size
if loan_amount <= 500000:
    documentation_rate = 0.05
elif loan_amount <= 1500000:
    documentation_rate = 0.08
else:
    documentation_rate = 0.12

# Ex 8 - duration classification (post-call, on the INPUT years)
if years <= 1:
    duration_category = "Short Term"
elif years <= 3:
    duration_category = "Medium Term"
else:
    duration_category = "Long Term"
```

**Variants**

| If the question says | Change |
| --- | --- |
| four bands instead of three | add a second `elif`; you now have three boundary numbers |
| "a flat Rs. 500 for the middle band" | the branch assigns a rupee amount, not a rate: `charge = 500` |
| the tier tests a returned value, not an input | move the ladder to Block 4 |
| the tier is on a string ("Delivery"/"Intraday") | compare with `==` after `.strip().lower()` |
| the tiers overlap or leave a gap in the question | state your assumption in a comment and use `<=` on the lower band |

**Traps**

- **Percentage points vs percent.** Ex 8 says "add a senior-citizen bonus of **0.50 percentage
  points**" → `interest_rate + 0.50` (6.5 becomes 7.0). It does **not** mean
  `interest_rate * 1.005`.
- **Discount vs final rate.** "10% discount" means multiply the fee by `0.90` (or subtract
  `fee * 0.10`), not set the rate to `0.10`.
- **Percentage of what.** Ex 10's documentation charge is a percentage **of the processing fee**,
  not of the loan amount. Ex 3's loyalty addition is a percentage **of the preliminary
  settlement**, not of the claim.
- Never use `==` on a computed float. `if pct == 0.45:` can be `False` even when `print` shows
  `0.45` — see P2.9.
- If you write `if` twice instead of `if`/`elif`, both branches can run and the second overwrites
  the first. Use `elif`.

**Drill**

1. "Charge 3% for tenure up to 3 years, 5% for more than 3 but not more than 7 years, 7% above 7 years." Write the ladder.

<details><summary>Answer</summary>

```python
if tenure <= 3:
    rate = 0.03
elif tenure <= 7:
    rate = 0.05
else:
    rate = 0.07
```

</details>

---

## P2.8 — Classify a computed percentage into three bands

**Exam phrasings**

- "after calling the function, classify the annual advisory cost as Economical, Standard or High"
- "classify it as Low Settlement if below 70%, Moderate Settlement if from 70% to 90%, inclusive, High Settlement if above 90%"
- "classify the transaction as Low Cost, Normal Cost or High Cost"
- "classify the charge burden as Low, Moderate or High"
- "classify the investment duration as Short Term, Medium Term or Long Term"

**Core idea.** This ladder sits **outside** the function, after the call, in Block 4. It reads an
unpacked value (usually a percentage) and assigns a **label string** to one variable, which
Block 5 prints. The percentage is either (a) returned by the function, or (b) computed in Block 4
from two returned values — read the question to see which.

**Template**

```python
# if the percentage was NOT returned, compute it here first
PERCENT_VAR = RETURNED_VALUE / BASE_VALUE * 100

if PERCENT_VAR < BAND_LOW:              # "below BAND_LOW"
    category = "LABEL_1"
elif PERCENT_VAR <= BAND_HIGH:          # "from BAND_LOW to BAND_HIGH, inclusive"
    category = "LABEL_2"
else:                                   # "above BAND_HIGH"
    category = "LABEL_3"

print("Category :", category)
```

**Worked** — one reusable classifier, driven by the two edges and three labels.

```python
def classify(value, low_limit, high_limit, low_label, mid_label, high_label):
    """Return the band label for `value` using a below / inclusive-range / above rule."""
    if value < low_limit:
        return low_label
    elif value <= high_limit:          # reaching here means value >= low_limit
        return mid_label
    else:
        return high_label

# Exercise 1 bands
for p in [0.40, 0.59, 0.60, 0.675, 0.75, 0.80]:
    print(f"{p:.3f} -> {classify(p, 0.60, 0.75, 'Economical', 'Standard', 'High')}")
print("---")
# Exercise 6 bands
for p in [0.29, 0.30, 0.45, 0.50, 0.51]:
    print(f"{p:.2f} -> {classify(p, 0.30, 0.50, 'Low Cost', 'Normal Cost', 'High Cost')}")
```

```text
0.400 -> Economical
0.590 -> Economical
0.600 -> Standard
0.675 -> Standard
0.750 -> Standard
0.800 -> High
---
0.29 -> Low Cost
0.30 -> Normal Cost
0.45 -> Normal Cost
0.50 -> Normal Cost
0.51 -> High Cost
```

In the exam write the plain ladder, not this helper — the marker wants to see `if/elif/else`.

### The five classification ladders in the source exercises

| Exercise | Classify | Bands |
| --- | --- | --- |
| Ex 1 | annual fee as % of investment | `< 0.60` Economical / `<= 0.75` Standard / else High |
| Ex 3 | final settlement as % of original claim | `< 70` Low Settlement / `<= 90` Moderate Settlement / else High Settlement |
| Ex 6 | total charges as % of trade value | `< 0.30` Low Cost / `<= 0.50` Normal Cost / else High Cost |
| Ex 8 | investment **duration in years** | `<= 1` Short Term / `<= 3` Medium Term / else Long Term |
| Ex 10 | total charges as % of annual income | `<= 1` Low / `<= 2` Moderate / else High |

**Variants**

| If the question says | Change |
| --- | --- |
| "classify and also count how many fall in each band" | keep three counters, `count_high += 1` inside the branch |
| "classify each investor in a list" | wrap Blocks 3–5 in `for name, amt, yrs, age in records:` |
| the bands are named differently ("Cheap/Fair/Expensive") | only the label strings change |
| the question gives the bands as percentages but you have a fraction | multiply by 100 before comparing |
| the question wants the classification returned by the function | move the ladder into Block 2 and `return v1, v2, category` |

**Traps**

- Ex 10's low band is "**1% or less**" → `<= 1`, not `< 1`. Ex 1's low band is "**below**
  0.60%" → `< 0.60`. The two exercises use opposite operators on the low band. Read every time.
- Ex 8 classifies the **duration**, not a percentage. Don't try to derive it from the returned values.
- Ex 3's percentage is of the **original claim amount**, not of the capped "amount considered".
  With a claim above the sum insured the two are different numbers.
- Compare the **unrounded** value but print the rounded one, unless the question insists on
  2-decimal comparison (then `round(pct, 2)` first — see P2.9).

**Drill**

1. Charges are 2.33% of income. Which band under Ex 10's rule, and what condition proves it?

<details><summary>Answer</summary>

`High`, because `2.33 <= 1` is False and `2.33 <= 2` is False, so the `else` branch runs.

</details>

---

## P2.9 — Print money and percentages to two decimal places

**Exam phrasings**

- "display all monetary values up to two decimal places"
- "display results up to two decimal places"
- "display the investor name and all monetary values to two decimal places"
- "print Rs. 600000.00 style output"
- "round the answer to 2 decimals"

**Core idea.** Three ways exist; **use the f-string**. `f"{x:.2f}"` always shows exactly two
decimals, including trailing zeros. `round(x, 2)` returns a *number*, so `round(600000.0, 2)`
prints `600000.0` — one decimal — and loses the mark.

**Template**

```python
print(f"Total Amount Invested: Rs. {VALUE:.2f}")     # f-string      <- use this
print("Total Amount Invested: Rs. %.2f" % VALUE)     # %-formatting
print("Total Amount Invested: Rs.", round(VALUE, 2)) # round()  <- risky, see below
```

**Worked** — all three, plus what not to do.

```python
x = 1161695.3817597027

# 1. f-string  -- use this in the exam
print(f"Rs. {x:.2f}")
print(f"Estimated Future Value: Rs. {x:.2f}")

# 2. round() then print -- note round() returns a NUMBER, so trailing zeros vanish
print("Rs.", round(x, 2))
print("Rs.", round(600000.0, 2))          # prints 600000.0, NOT 600000.00
print("Rs.", round(1350.5, 2))

# 3. old-style % formatting
print("Rs. %.2f" % x)
print("Name: %s  Fee: %.2f  Years: %d" % ("Amit Rao", 3375.0, 5))

# 4. str.format()
print("Rs. {:.2f}".format(x))
print("Rs. {:,.2f}".format(x))            # thousands separators (Western grouping)

# 5. what NOT to do: plain print of a float
print("Rs.", x)
```

```text
Rs. 1161695.38
Estimated Future Value: Rs. 1161695.38
Rs. 1161695.38
Rs. 600000.0
Rs. 1350.5
Rs. 1161695.38
Name: Amit Rao  Fee: 3375.00  Years: 5
Rs. 1161695.38
Rs. 1,161,695.38
Rs. 1161695.3817597027
```

| Method | Code | `600000.0` prints as | Verdict |
| --- | --- | --- | --- |
| f-string | `f"Rs. {x:.2f}"` | `Rs. 600000.00` | use this |
| `%` | `"Rs. %.2f" % x` | `Rs. 600000.00` | fine |
| `.format()` | `"Rs. {:.2f}".format(x)` | `Rs. 600000.00` | fine |
| `round()` | `print("Rs.", round(x, 2))` | `Rs. 600000.0` | loses the mark |
| `round()` + f-string | `f"Rs. {round(x, 2):.2f}"` | `Rs. 600000.00` | works, but redundant |

**The float-equality trap.** Never compare a computed float with `==`:

```python
trade_value = 200 * 1500.0
brokerage   = trade_value * 0.40 / 100      # 1200.0
levy        = trade_value * 0.05 / 100      #  150.0
total       = brokerage + levy              # 1350.0
pct         = total / trade_value * 100

print("total charges :", total)
print("pct exact     :", repr(pct))         # NOT 0.45
print("pct printed   :", f"{pct:.2f}")
print("pct == 0.45   :", pct == 0.45)
print("pct <= 0.45   :", pct <= 0.45)       # this one is fine

# Fix: compare the value rounded to the precision the question states
pct2 = round(pct, 2)
print("round(pct,2)  :", repr(pct2), " pct2 <= 0.45 :", pct2 <= 0.45)
```

```text
total charges : 1350.0
pct exact     : 0.44999999999999996
pct printed   : 0.45
pct == 0.45   : False
pct <= 0.45   : True
round(pct,2)  : 0.45  pct2 <= 0.45 : True
```

`<` and `<=` ladders are safe for all the numbers in these exercises, but `==` is not. If the
question stresses two decimals, classify `round(pct, 2)`.

Half-a-paisa amounts round the way binary floats allow, not the way you were taught:

```python
x = 984.6 + 205.125
print(repr(x), f'{x:.2f}', round(x,2))
print(f'{2.675:.2f}', f'{2.665:.2f}')
```

```text
1189.725 1189.72 1189.72
2.67 2.67
```

This is correct Python behaviour, not a bug. Do not try to "fix" it in the exam.

**Variants**

| If the question says | Write |
| --- | --- |
| "to two decimal places" | `f"{x:.2f}"` |
| "to the nearest rupee" | `f"{x:.0f}"` or `round(x)` |
| "with the rupee symbol" | `f"Rs. {x:.2f}"` — the paper writes `Rs.`, match it |
| "as a percentage" | `f"{x:.2f}%"` |
| "aligned in a column" | `f"{x:>15.2f}"` (right-aligned in 15 characters) |
| "with thousands separators" | `f"{x:,.2f}"` |

**Traps**

- Forgetting the `f` prefix: `print("Rs. {x:.2f}")` prints the literal text `Rs. {x:.2f}`.
- `:.2f` on a string raises `ValueError: Unknown format code 'f' for object of type 'str'`.
  Convert first.
- Inside an f-string, a `{` you want to print literally must be doubled: `{{`.
- `print("Rs.", x)` inserts a space after `Rs.` automatically — match the paper's spacing:
  `Rs. 600000.00` has one space, which `print("...: Rs.", round(x,2))` also produces, but the
  decimals will be wrong. Use the f-string.

**Drill**

1. Print `total = 13500.0` as `Total Initial Charges  : Rs. 13500.00` using the f-string.

<details><summary>Answer</summary>

```python
print(f"Total Initial Charges  : Rs. {total:.2f}")
```

</details>

---

## P2.10 — Percentage-of-a-base arithmetic

**Exam phrasings**

- "the default value represents an annual advisory fee of 0.75% of the investment amount"
- "calculate the basic brokerage as a percentage of Trade Value"
- "annual fee as a percentage of the investment amount"
- "total initial charges as a percentage of annual income"
- "also calculate a transaction levy equal to 0.05% of Trade Value"
- "calculate the final settlement as a percentage of the original claim"

**Core idea.** The rate parameters in these exercises are **percentage numbers** (`0.75` means
0.75%, `4` means 4%, `12.0` means 12%), so you must divide by 100. Two directions:

| Direction | Formula |
| --- | --- |
| "X% of BASE" | `BASE * X / 100` |
| "express PART as a percentage of BASE" | `PART / BASE * 100` |

**Template**

```python
part    = BASE * RATE / 100          # "RATE% of BASE"
percent = PART / BASE * 100          # "PART as a percentage of BASE"
reduced = part * (1 - FRACTION)      # "a FRACTION discount"  (FRACTION as 0.10, not 10)
charged = part * FRACTION            # "charged FRACTION of the calculated amount"
new_rate = RATE + POINTS             # "add POINTS percentage points"
```

**Worked**

```python
BASE = 500000.0        # investment amount / trade value / annual income / loan amount
RATE = 0.75            # the rate the question gives as a PERCENTAGE number

# (a) "X% of the base"  ->  base * rate / 100
part = BASE * RATE / 100
print("0.75% of 500000 =", part)

# (b) the same thing written with an explicit bracket (the exam formula style)
print("with brackets   =", BASE * (RATE / 100))

# (c) reverse direction: "express part as a percentage of base"
print("part as % of base =", part / BASE * 100)

# (d) "reduce by 10%" - two equivalent forms
print("minus 10%  (a)  =", part - part * 0.10)
print("minus 10%  (b)  =", part * (1 - 0.10))

# (e) "charge 60% of it"
print("60% of it       =", part * 0.60)

# (f) "add 0.50 PERCENTAGE POINTS to a rate of 6.5"  - add, do not multiply
print("6.5 + 0.50 pp   =", 6.5 + 0.50)
print("6.5 + 0.50%     =", 6.5 * 1.005, "  <- this is what 'increase by 0.5%' would mean")
```

```text
0.75% of 500000 = 3750.0
with brackets   = 3750.0
part as % of base = 0.75
minus 10%  (a)  = 3375.0
minus 10%  (b)  = 3375.0
60% of it       = 2250.0
6.5 + 0.50 pp   = 7.0
6.5 + 0.50%     = 6.532499999999999   <- this is what 'increase by 0.5%' would mean
```

### What each exercise's percentage is a percentage OF

| Exercise | Quantity | Base |
| --- | --- | --- |
| Ex 1 | basic annual fee (0.75%) | investment amount |
| Ex 1 | discount (10% / 20%) | the basic annual fee |
| Ex 1 | reported percentage | investment amount |
| Ex 3 | deductible (4%) | the amount **considered** (claim capped at sum insured) |
| Ex 3 | loyalty addition (2% / 5%) | the **preliminary settlement** |
| Ex 3 | reported percentage | the **original claim amount** |
| Ex 6 | basic brokerage (0.40%) | trade value |
| Ex 6 | Intraday adjustment (60%) | the basic brokerage |
| Ex 6 | transaction levy (0.05%) | trade value |
| Ex 6 | reported percentage | trade value |
| Ex 8 | interest | `principal * rate * years / 100` |
| Ex 10 | processing fee (1.25%) | loan amount |
| Ex 10 | documentation charge (5% / 8% / 12%) | the **processing fee** |
| Ex 10 | reported percentage | **annual income** |

**Variants**

| If the question says | Write |
| --- | --- |
| the rate is given as a fraction (`0.0075`) | `BASE * RATE` — no `/ 100` |
| "the fee is 0.75% per annum, charged monthly" | `BASE * RATE / 100 / 12` |
| "subject to a minimum of Rs. 500" | `fee = max(fee, 500)` |
| "capped at Rs. 20,000" | `fee = min(fee, 20000)` |
| "18% GST on the brokerage" | `gst = final_brokerage * 18 / 100` |

**Traps**

- **`/ 100` exactly once.** `0.40 / 100 / 100` is the commonest arithmetic slip here.
- The discount / adjustment fractions (`0.10`, `0.20`, `0.60`, `0.02`, `0.05`, `0.08`, `0.12`)
  are already fractions, **not** percentage numbers. Do not divide them by 100 as well.
- Read the base carefully: Ex 10's documentation charge is a percentage of the **fee**; if you
  take it off the loan amount your total is roughly 80x too large.
- Ex 3's reported percentage uses the **original claim**, which can make the answer exceed 100%
  when the loyalty addition is large.

**Drill**

1. Trade value 410250, brokerage rate 0.40%, Intraday. Compute the final brokerage.

<details><summary>Answer</summary>

`410250 * 0.40 / 100 = 1641.0`, then `1641.0 * 0.60 = 984.60`.

</details>

---

## P2.11 — Translate an exam formula into Python

**Exam phrasings**

- "Interest = (Principal x Rate x Years) / 100"
- "Processing Fee = Loan Amount x (Processing Rate / 100)"
- "Trade Value = Quantity x Price"
- "calculate the maturity amount using simple interest"
- "convert the given formula into a Python expression"

**Core idea.** Copy the formula's **brackets** verbatim, replace `×` with `*`, replace
superscripts with `**`, and replace the fraction bar with `/` plus a bracket around the whole
numerator and the whole denominator. When in doubt, add brackets — they never change a correct
answer.

### Notation table

| Exam notation | Python |
| --- | --- |
| `a × b` | `a * b` |
| `a ÷ b`, fraction bar | `a / b` |
| `a` over `b` (fraction bar) | `(a) / (b)` |
| `(1 + r)ⁿ` | `(1 + r) ** n` |
| `x²` | `x ** 2` |
| `M [ ... ] (1 + r)` | `M * ( ... ) * (1 + r)` — implicit multiplication needs an explicit `*` |
| `√x` | `x ** 0.5` |
| `P × R × T / 100` | `P * R * T / 100` |
| `12 × 100` in a denominator | `/ (12 * 100)` — keep the bracket |

**Operator precedence, highest first:** `**`, then unary `-`, then `* / // %`, then `+ -`.
Same-precedence operators evaluate **left to right**.

**Template**

```python
# Simple interest
interest = principal * rate * years / 100
maturity = principal + interest

# Percentage of a base, exam-bracket style
processing_fee = loan_amount * (processing_rate / 100)

# Product
trade_value = quantity * price

# A fraction with a compound numerator and denominator
value = (TOP_EXPRESSION) / (BOTTOM_EXPRESSION)
```

**Worked**

```python
P, R, T = 200000.0, 7.0, 5

print("P * R * T / 100      =", P * R * T / 100)       # correct: (P*R*T)/100
print("P * R * T / 100.0    =", P * R * T / 100.0)
print("P * (R * T / 100)    =", P * (R * T / 100))     # same answer, clearer
print("P * R / 100 * T      =", P * R / 100 * T)       # also the same -- left to right

M, r, n = 5000.0, 0.01, 120
print("(1+r)**n             =", (1 + r) ** n)
print("1+r**n  (WRONG)      =", 1 + r ** n)            # ** binds tighter than +
print("-r ** 2              =", -r ** 2)               # ** binds tighter than unary minus
print("(-r) ** 2            =", (-r) ** 2)
print("M*((1+r)**n-1)/r     =", M * ((1 + r) ** n - 1) / r)
print("M*(((1+r)**n-1)/r)*(1+r) =", M * (((1 + r) ** n - 1) / r) * (1 + r))
print("10 / 3  =", 10 / 3, "   10 // 3 =", 10 // 3)    # / is always float in Python 3
```

```text
P * R * T / 100      = 70000.0
P * R * T / 100.0    = 70000.0
P * (R * T / 100)    = 70000.0
P * R / 100 * T      = 70000.0
(1+r)**n             = 3.3003868945736685
1+r**n  (WRONG)      = 1.0
-r ** 2              = -0.0001
(-r) ** 2            = 0.0001
M*((1+r)**n-1)/r     = 1150193.4472868342
M*(((1+r)**n-1)/r)*(1+r) = 1161695.3817597027
```

**Variants**

| Formula in the paper | Python |
| --- | --- |
| `Trade Value = Quantity × Price` | `trade_value = quantity * price` |
| `Processing Fee = Loan Amount × (Processing Rate / 100)` | `loan_amount * (processing_rate / 100)` |
| `Interest = (Principal × Rate × Years) / 100` | `principal * rate * years / 100` |
| `Maturity = Principal + Interest` | `principal + interest` |
| `Monthly Rate = Annual Rate / (12 × 100)` | `annual_rate / (12 * 100)` |
| `Compound Amount = P(1 + r/100)ⁿ` | `p * (1 + r / 100) ** n` |
| `EMI = P·r(1+r)ⁿ / ((1+r)ⁿ − 1)` | `p * r * (1+r)**n / ((1+r)**n - 1)` |

**Traps**

- `1 + r ** n` is **not** `(1 + r) ** n`. This single missing bracket destroys the whole SIP answer.
- `^` is **not** exponentiation in Python; it is bitwise XOR. `2 ^ 3` gives `1`, not `8`.
- `/` in Python 3 always gives a float, so `10 / 4` is `2.5`. `//` truncates. Use `/`.
- Implicit multiplication in maths notation (`M [ ... ] (1 + r)`) needs **two** explicit `*` signs.
- Keep `(12 * 100)` bracketed. `annual_rate / 12 * 100` is 10,000 times the right answer.

**Drill**

1. Translate `Compound Interest = P[(1 + R/100)^T − 1]`.

<details><summary>Answer</summary>

```python
compound_interest = p * ((1 + r / 100) ** t - 1)
```

</details>

---

## P2.12 — Compound growth and the SIP future-value formula

**Exam phrasings**

- "the estimated future value of the SIP must be calculated using M [((1+r)^n - 1)/r] (1+r)"
- "Monthly Rate = Annual Rate of Return / (12 x 100)"
- "Number of Investments = Investment Period in Years x 12"
- "Estimated Wealth Gain = Future Value - Total Amount Invested"
- "estimate the future value of a customer's Systematic Investment Plan"

**Core idea.** The SIP future value is an annuity-due formula. Build it in **four named steps**
so a bracket error is visible, then check the sanity condition: future value must exceed total
invested whenever the rate is positive.

**Template**

```python
monthly_rate          = ANNUAL_RATE / (12 * 100)        # percent -> monthly fraction
number_of_investments = YEARS * 12

M = MONTHLY_AMOUNT
r = monthly_rate
n = number_of_investments

future_value   = M * (((1 + r) ** n - 1) / r) * (1 + r)
total_invested = M * n
wealth_gain    = future_value - total_invested
```

**Worked** — the paper's own sample: Rs. 5000/month, 10 years, default 12%.

```python
M = 5000.0
r = 12.0 / (12 * 100)        # 0.01
n = 10 * 12                  # 120

fv    = M * (((1 + r) ** n - 1) / r) * (1 + r)
total = M * n
gain  = fv - total

print("monthly rate r        :", r)
print("number of instalments :", n)
print(f"Total Amount Invested : Rs. {total:.2f}")
print(f"Estimated Wealth Gain : Rs. {gain:.2f}")
print(f"Estimated Future Value: Rs. {fv:.2f}")
print("unrounded future value:", repr(fv))
```

```text
monthly rate r        : 0.01
number of instalments : 120
Total Amount Invested : Rs. 600000.00
Estimated Wealth Gain : Rs. 561695.38
Estimated Future Value: Rs. 1161695.38
unrounded future value: 1161695.3817597027
```

This **matches the question paper's printed sample output exactly** (600000.00 / 561695.38 /
1161695.38). If your answer differs, check the trailing `* (1 + r)` first.

**Formula family you may be given instead**

| Name | Formula | Python |
| --- | --- | --- |
| Simple interest | `I = P·R·T / 100` | `p * r * t / 100` |
| Maturity (simple) | `A = P + I` | `p + interest` |
| Compound amount | `A = P(1 + R/100)ᵀ` | `p * (1 + r / 100) ** t` |
| Compound interest | `CI = A − P` | `amount - p` |
| Compound, m times a year | `A = P(1 + R/(100m))^(mT)` | `p * (1 + r / (100 * m)) ** (m * t)` |
| SIP future value (annuity **due**, instalment at start of month) | `M[((1+r)ⁿ−1)/r](1+r)` | `m * (((1+r)**n - 1) / r) * (1+r)` |
| SIP future value (annuity **ordinary**, instalment at month end) | `M[((1+r)ⁿ−1)/r]` | `m * (((1+r)**n - 1) / r)` |
| CAGR | `(FV/PV)^(1/T) − 1` | `(fv / pv) ** (1 / t) - 1` |

The question paper uses the **annuity-due** version (the `(1 + r)` multiplier at the end). Drop it
and you get `1150193.45`, which is wrong by Rs. 11,501.93.

**Variants**

| If the question says | Change |
| --- | --- |
| "quarterly SIP" | `r = annual_rate / (4 * 100)`, `n = years * 4` |
| "instalment at the end of each month" | delete the trailing `* (1 + r)` |
| "also report the value if the return is 15%" | `sip_summary(M, years, annual_rate_of_return=15.0)` |
| "classify the wealth gain" | `gain_pct = gain / total * 100`, then a three-band ladder |
| "use simple interest instead" | `principal * rate * years / 100` — Ex 8's formula |

**Traps**

- The trailing `* (1 + r)` is the whole difference between annuity-due and ordinary annuity.
  Copy the paper's formula.
- `r` must be the **monthly** fraction (`0.01`), not the annual percent (`12.0`).
- A rate of `0` makes `r` zero and `/ r` raises `ZeroDivisionError`. Only guard it if the
  examiner allows an arbitrary rate.
- `n` must be an integer count of instalments: `years * 12`, not `years`.

**Drill**

1. Rs. 10,000 a month for 5 years at the default 12%. What is the total invested, and is the
   future value above or below Rs. 8,00,000?

<details><summary>Answer</summary>

Total invested `= 10000 * 60 = 600000.00`. `r = 0.01`, `n = 60`, so
`fv = 10000 * (((1.01)**60 - 1)/0.01) * 1.01 = 824863.67` — above Rs. 8,00,000.

</details>

---

## P2.13 — The Markdown cell before the program

**Exam phrasings**

- "before the code, create a Markdown cell containing a level-1 title, an italic subtitle, and a three-item bulleted list explaining the outputs"
- "create a Markdown cell before the program containing a level-1 heading, a bold-and-italic subtitle, and a bulleted list"
- "the notebook should begin with a Markdown cell containing a level-1 heading, a bold introductory sentence, and a bulleted list of the three calculated outputs"
- "use a level-1 heading for the title, bold and italics for the subtitle, and a bulleted list for the three outputs"
- "include a short Markdown introduction to the program"

**Core idea.** Five pieces of syntax carry all the marks. Change the cell type to **Markdown**
(`Esc` then `M` in Jupyter) and **run the cell** so it renders — an unrendered Markdown cell
looks like a code cell in the saved output and can cost the marks.

| Requirement in the question | Markdown to type | Renders as |
| --- | --- | --- |
| level-1 heading / level-1 title | `# Title` | largest heading |
| level-2 heading | `## Subtitle` | second-level heading |
| bold subtitle / bold introductory sentence | `**Text**` | **Text** |
| italic subtitle | `*Text*` | *Text* |
| bold-and-italic subtitle / "bold and italics" | `***Text***` | ***Text*** |
| bulleted list | `- item` on each line | bullet points |
| numbered list | `1. item` on each line | numbered points |

**Template**

```text
# TITLE OF THE PROGRAM
***SUBTITLE***

This program estimates:

- OUTPUT 1
- OUTPUT 2
- OUTPUT 3
```

### The literal Markdown for each of the six exercises

**Exercise 1** — "a level-1 title, an italic subtitle, and a three-item bulleted list explaining the outputs"

```text
# Mutual Fund Advisory Fee Calculator
*Annual advisory cost and its impact on your investment*

This program reports:

- Annual advisory fee after the age-based discount
- Total advisory fee over the investment period
- Annual fee as a percentage of the investment amount
```

**Exercise 3** — "a short Markdown introduction to the program" (no structure specified, so give the full set and you cannot be short)

```text
# Insurance Claim Settlement Estimator
*Estimating the amount payable on an approved claim*

The claim is capped at the sum insured, the policy deductible is applied and a
loyalty benefit is added for completed policy years. The program reports:

- Deductible amount
- Loyalty addition
- Final settlement amount
```

**Exercise 6** — "a level-1 heading, a bold-and-italic subtitle, and a bulleted list explaining what the program reports"

```text
# Securities Transaction Cost Calculator
***Brokerage and levy on an equity trade***

This program reports:

- Trade value of the transaction
- Final brokerage after the Delivery / Intraday adjustment
- Total transaction charges
```

**Exercise 8** — "a level-1 heading, a bold introductory sentence, and a bulleted list of the three calculated outputs"

```text
# Fixed Deposit Maturity Estimator

**This program estimates the maturity value of a fixed deposit using simple interest.**

- Applicable rate of interest
- Total interest earned
- Maturity amount
```

**Exercise 10** — "a level-1 heading and a short bulleted description of the program"

```text
# Loan Processing Cost Estimator

This program estimates the initial charges payable on a loan and reports:

- Processing fee on the loan amount
- Total initial charges, including the documentation charge
- Total initial charges as a percentage of annual income
```

**Midterm Q3** — "a level-1 heading for the title, bold and italics for the subtitle, and a bulleted list for the three outputs". The paper prints the rendered cell, so this one has to match:

```text
# SIP Investment Growth Calculator
***Long-term investment projection***

This program estimates:

- Total amount invested
- Estimated wealth gain
- Future value of the investment
```

**Variants**

| If the question says | Type |
| --- | --- |
| "level-2 heading" | `## Text` |
| "level-3 heading" | `### Text` |
| "a horizontal line" | `---` on its own line |
| "a numbered list" | `1. first` / `2. second` |
| "show the formula" | `$FV = M\left[\frac{(1+r)^n-1}{r}\right](1+r)$` (LaTeX renders in Jupyter Markdown) |
| "show the formula as code" | indent four spaces, or wrap in a fenced block |
| "a table" | `\| A \| B \|` header, then `\| --- \| --- \|` |

**Traps**

- A blank line is required **before** a bulleted list, otherwise it renders as one paragraph.
- `#Title` with no space after `#` does **not** render as a heading in Jupyter. Always `# Title`.
- `***Text***` is bold **and** italic. `**Text**` alone is only bold — if the question says
  "bold and italics", two asterisks is a lost mark.
- Use `-` or `*` for bullets consistently. Mixing them can start a new list.
- The cell must be **above** the code cell, and it must be executed so it renders before you save.

**Drill**

1. Write the Markdown for "a level-1 heading, an italic subtitle and a two-item bulleted list".

<details><summary>Answer</summary>

```text
# Loan Eligibility Checker
*Quick pre-approval estimate*

- Eligible loan amount
- Monthly instalment
```

</details>

---

## P2.14 — Test an `input()` program without typing anything

**Exam phrasings**

- "test the program before submitting"
- "save the output before submitting"
- "how do I re-run the notebook quickly with the same inputs"
- "sample input and output are provided purely for illustration"

**Core idea.** Your **submitted** answer must use `input()`. But re-typing four values on every
run wastes exam time and risks a typo in the saved output. Put a small harness in a cell
**above** your answer that feeds the values in and echoes them, run everything, then **delete the
harness cell** and do one final real run before saving.

**Template**

```python
# ---------- TEST HARNESS: delete this cell before submitting ----------
_test_inputs = iter(["VALUE_1", "VALUE_2", "VALUE_3"])   # what you would have typed, in order
def input(prompt=""):                                    # shadows the built-in input()
    value = next(_test_inputs)
    print(prompt + value)                                # echo it so the output looks real
    return value
# ----------------------------------------------------------------------
```

**Worked**

```python
# ---------- TEST HARNESS: put this in a cell ABOVE your answer, delete before submitting ----------
_test_inputs = iter(["Amit Rao", "5000", "10"])     # the values you would have typed, in order
def input(prompt=""):                               # shadows the built-in input()
    value = next(_test_inputs)
    print(prompt + value)                           # echo it so the transcript looks real
    return value
# --------------------------------------------------------------------------------------------------

# your answer, completely unchanged:
investor_name      = input("Enter investor name: ")
monthly_investment = float(input("Enter monthly investment amount: "))
investment_period  = int(input("Enter investment period in years: "))
print("parsed:", repr(investor_name), monthly_investment, investment_period)
```

```text
Enter investor name: Amit Rao
Enter monthly investment amount: 5000
Enter investment period in years: 10
parsed: 'Amit Rao' 5000.0 10
```

To get the real `input()` back without restarting the kernel, delete the shadow:

```python
_test_inputs = iter(['x'])
def input(prompt=''):
    return next(_test_inputs)
print(input('a: '))
del input                 # remove the shadow -> the real input() is back
print('shadow removed; builtins.input is', __builtins__.input)
```

```text
x
shadow removed; builtins.input is <built-in function input>
```

Every output in patterns P2.15–P2.20 of this chapter was produced this way: the published code
uses `input()` unchanged, and the prompt lines in the output come from the harness echoing the
values that were fed in.

**Variants**

| Situation | Approach |
| --- | --- |
| running a `.py` file from a terminal | `printf 'Amit Rao\n5000\n10\n' \| python3 answer.py` |
| you want to try several input sets | change the list in `_test_inputs` and re-run the two cells |
| the examiner forbids any extra code | hardcode temporarily: `monthly_investment = 5000.0  # TODO: input()`, then switch back |
| you need the saved notebook to show a real typed session | delete the harness, restart the kernel, run all, type the values, save |

**Traps**

- **Delete the harness before submitting.** A shadowed `input` in the submitted notebook is a
  correctness problem, not a style one.
- `StopIteration` means you supplied fewer values than the program asks for. Add the missing ones.
- Hardcoding and forgetting to restore `input()` fails the "accepts inputs from the user"
  requirement outright.
- Restarting the kernel clears the shadow — remember to re-run the harness cell if you restart.

---

## P2.15 — Model answer: `advisory_fee()` (Exercise 1)

**Exam phrasings**

- "Mutual Fund Advisory Fee Calculator"
- "an investment advisory company charges investors an annual advisory fee"
- "create a function named advisory_fee()"
- "no discount if age is below 50 years, 10% discount if age is from 50 to 60 years, inclusive, 20% discount if age is above 60 years"
- "classify the annual advisory cost as Economical, Standard or High"

**Core idea.** Compulsory `investment_amount, investment_period, age`; default
`annual_fee_rate = 0.75`. Fee is 0.75% of the amount, discounted by age band. Returns
(annual fee after discount, total fee over the period, annual fee as % of amount). Classified
Economical / Standard / High.

**Markdown cell** (level-1 title, italic subtitle, three-item bulleted list):

```text
# Mutual Fund Advisory Fee Calculator
*Annual advisory cost and its impact on your investment*

This program reports:

- Annual advisory fee after the age-based discount
- Total advisory fee over the investment period
- Annual fee as a percentage of the investment amount
```

**Code cell**

```python
# ============================================================
# Exercise 1 - Mutual Fund Advisory Fee Calculator
# ============================================================

# ---------- 1. Accept the inputs from the user ----------
investor_name     = input("Enter investor name: ")                 # str - no conversion needed
investment_amount = float(input("Enter investment amount: "))      # money -> float
investment_period = int(input("Enter investment period in years: "))  # whole years -> int
age               = int(input("Enter investor age: "))             # whole years -> int


# ---------- 2. Define the function ----------
def advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75):
    """Calculate the advisory fee payable on a mutual fund investment.

    Parameters
    ----------
    investment_amount : float
        Amount invested, in rupees (compulsory parameter).
    investment_period : int
        Investment period in years (compulsory parameter).
    age : int
        Age of the investor in completed years (compulsory parameter).
    annual_fee_rate : float, optional
        Annual advisory fee as a percentage of the investment amount.
        Default is 0.75, i.e. 0.75% per year.

    Returns
    -------
    tuple
        (annual fee after discount, total fee over the period,
         annual fee as a percentage of the investment amount)
    """

    # Basic annual fee = the fee rate applied to the investment amount
    basic_annual_fee = investment_amount * annual_fee_rate / 100

    # Age-based discount on the basic annual fee
    if age < 50:                      # "No discount if age is below 50 years"
        discount_rate = 0.00
    elif 50 <= age <= 60:             # "10% discount if age is from 50 to 60 years, inclusive"
        discount_rate = 0.10
    else:                             # "20% discount if age is above 60 years"
        discount_rate = 0.20

    discount_amount = basic_annual_fee * discount_rate       # rupee value of the discount
    annual_fee_after_discount = basic_annual_fee - discount_amount

    # Total fee charged over the whole investment period
    total_fee = annual_fee_after_discount * investment_period

    # Annual fee expressed as a percentage of the amount invested
    fee_percentage = annual_fee_after_discount / investment_amount * 100

    # Return the three required values as one tuple
    return annual_fee_after_discount, total_fee, fee_percentage


# ---------- 3. Call the function WITHOUT passing the default parameter ----------
annual_fee, total_fee, fee_pct = advisory_fee(investment_amount, investment_period, age)


# ---------- 4. Classify the annual advisory cost ----------
if fee_pct < 0.60:                    # "Economical if the percentage is below 0.60%"
    cost_category = "Economical"
elif fee_pct <= 0.75:                 # "Standard if from 0.60% to 0.75%, inclusive"
    cost_category = "Standard"
else:                                 # "High if the percentage is above 0.75%"
    cost_category = "High"


# ---------- 5. Display the results ----------
print("\n--- Mutual Fund Advisory Fee Summary ---")
print("Investor Name              :", investor_name)
print(f"Investment Amount          : Rs. {investment_amount:.2f}")
print(f"Investment Period          : {investment_period} years")
print(f"Investor Age               : {age} years")
print(f"Annual Advisory Fee        : Rs. {annual_fee:.2f}")
print(f"Total Advisory Fee         : Rs. {total_fee:.2f}")
print(f"Annual Fee as % of Amount  : {fee_pct:.2f}%")
print("Advisory Cost Category     :", cost_category)
```

**Output** (inputs `Priya Nayak`, `500000`, `5`, `55`; fed in with the P2.14 harness)

```text
Enter investor name: Priya Nayak
Enter investment amount: 500000
Enter investment period in years: 5
Enter investor age: 55

--- Mutual Fund Advisory Fee Summary ---
Investor Name              : Priya Nayak
Investment Amount          : Rs. 500000.00
Investment Period          : 5 years
Investor Age               : 55 years
Annual Advisory Fee        : Rs. 3375.00
Total Advisory Fee         : Rs. 16875.00
Annual Fee as % of Amount  : 0.68%
Advisory Cost Category     : Standard
```

**Hand-check.** `500000 * 0.75 / 100 = 3750`. Age 55 is in `50..60` so the discount is 10%:
`3750 - 375 = 3375`. Over 5 years: `3375 * 5 = 16875`. Percentage:
`3375 / 500000 * 100 = 0.675`, printed as `0.68`, and `0.60 <= 0.675 <= 0.75` → **Standard**. Correct.

**Variants** — the other two age bands:

```text
######## age 45 ########
Investor Age               : 45 years
Annual Advisory Fee        : Rs. 3750.00
Total Advisory Fee         : Rs. 18750.00
Annual Fee as % of Amount  : 0.75%
Advisory Cost Category     : Standard
######## age 68 ########
Investor Age               : 68 years
Annual Advisory Fee        : Rs. 4800.00
Total Advisory Fee         : Rs. 48000.00
Annual Fee as % of Amount  : 0.60%
Advisory Cost Category     : Standard
```

| If the question says | Change |
| --- | --- |
| a different default rate, e.g. `1.00` | `annual_fee_rate=1.00` in the `def` line only |
| "also report the discount amount" | `return annual_fee_after_discount, total_fee, fee_percentage, discount_amount` and unpack four |
| "fee charged monthly" | `monthly_fee = annual_fee_after_discount / 12` |
| "classify using the pre-discount rate" | classify `annual_fee_rate` instead of `fee_pct` |
| age bands change to 55/65 | `if age < 55:` / `elif 55 <= age <= 65:` |

**Traps**

- With the **default** rate of 0.75 the percentage is always 0.75, 0.675 or 0.60 — i.e.
  **always "Standard"**, for every age. That is the correct answer to the question as written.
  Do not "fix" the bands. Both outer bands only appear when the rate is overridden:

```text
rate=1.20%  annual fee=Rs. 4800.00  pct=0.96%  -> High
rate=0.75%  annual fee=Rs. 3000.00  pct=0.60%  -> Standard
rate=0.50%  annual fee=Rs. 2000.00  pct=0.40%  -> Economical
```

- Because the age-68 case lands on **exactly 0.60**, writing `<= 0.60` for the first band instead
  of `< 0.60` gives "Economical" and loses the classification mark. The boundary matters.
- "10% discount" is `basic * 0.10` subtracted, not a rate of 0.10.
- `investment_period` is used only for the total. It must still be a compulsory parameter.

**Drill**

1. Investment Rs. 2,50,000, 3 years, age 61. Give all four printed numbers.

<details><summary>Answer</summary>

Basic `= 250000 * 0.75 / 100 = 1875`; age above 60 so 20% off → `1500.00`; total
`1500 * 3 = 4500.00`; percentage `1500 / 250000 * 100 = 0.60%` → **Standard**.

</details>

---

## P2.16 — Model answer: `claim_settlement()` (Exercise 3)

**Exam phrasings**

- "Insurance Claim Settlement Estimator"
- "create a function named claim_settlement()"
- "first ensure that the amount considered for settlement does not exceed the sum insured"
- "provide a loyalty addition based on completed policy years"
- "classify it as Low Settlement, Moderate Settlement or High Settlement"

**Core idea.** Compulsory `claim_amount, sum_insured, policy_years`; default
`deductible_rate = 4`. Cap the claim at the sum insured **first**, then deduct 4%, then add a
loyalty bonus on the *preliminary* settlement. Returns (deductible, loyalty addition, final
settlement). The reported percentage is of the **original claim**.

**Markdown cell**

```text
# Insurance Claim Settlement Estimator
*Estimating the amount payable on an approved claim*

The claim is capped at the sum insured, the policy deductible is applied and a
loyalty benefit is added for completed policy years. The program reports:

- Deductible amount
- Loyalty addition
- Final settlement amount
```

**Code cell**

```python
# ============================================================
# Exercise 3 - Insurance Claim Settlement Estimator
# ============================================================

# ---------- 1. Accept the inputs from the user ----------
policyholder_name = input("Enter policyholder name: ")                 # str
claim_amount      = float(input("Enter claim amount: "))               # money -> float
sum_insured       = float(input("Enter sum insured: "))                # money -> float
policy_years      = int(input("Enter number of completed policy years: "))  # whole years -> int


# ---------- 2. Define the function ----------
def claim_settlement(claim_amount, sum_insured, policy_years, deductible_rate=4):
    """Estimate the amount payable on an approved insurance claim.

    Parameters
    ----------
    claim_amount : float
        Amount claimed by the policyholder, in rupees (compulsory parameter).
    sum_insured : float
        Maximum liability under the policy, in rupees (compulsory parameter).
    policy_years : int
        Number of completed policy years (compulsory parameter).
    deductible_rate : float, optional
        Deductible as a percentage of the amount considered for settlement.
        Default is 4, i.e. 4%.

    Returns
    -------
    tuple
        (deductible amount, loyalty addition, final settlement amount)
    """

    # The amount considered for settlement can never exceed the sum insured
    if claim_amount > sum_insured:
        considered_amount = sum_insured
    else:
        considered_amount = claim_amount
    # (the same thing in one line:  considered_amount = min(claim_amount, sum_insured))

    # Deductible and preliminary settlement
    deductible = considered_amount * deductible_rate / 100
    preliminary_settlement = considered_amount - deductible

    # Loyalty addition based on completed policy years
    if policy_years <= 2:                        # "No addition for up to 2 completed years"
        loyalty_rate = 0.00
    elif 3 <= policy_years <= 5:                 # "2% for 3 to 5 completed years"
        loyalty_rate = 0.02
    else:                                        # "5% for more than 5 completed years"
        loyalty_rate = 0.05

    loyalty_addition = preliminary_settlement * loyalty_rate

    # Final amount payable
    final_settlement = preliminary_settlement + loyalty_addition

    # Return the three required values
    return deductible, loyalty_addition, final_settlement


# ---------- 3. Call the function WITHOUT passing the default parameter ----------
deductible, loyalty_addition, final_settlement = claim_settlement(
    claim_amount, sum_insured, policy_years)


# ---------- 4. Settlement as a percentage of the ORIGINAL claim, then classify ----------
settlement_pct = final_settlement / claim_amount * 100

if settlement_pct < 70:                 # "Low Settlement if below 70%"
    settlement_category = "Low Settlement"
elif settlement_pct <= 90:              # "Moderate Settlement if from 70% to 90%, inclusive"
    settlement_category = "Moderate Settlement"
else:                                   # "High Settlement if above 90%"
    settlement_category = "High Settlement"


# ---------- 5. Display the results to two decimal places ----------
print("\n--- Claim Settlement Estimate ---")
print("Policyholder Name      :", policyholder_name)
print(f"Claim Amount           : Rs. {claim_amount:.2f}")
print(f"Sum Insured            : Rs. {sum_insured:.2f}")
print(f"Completed Policy Years : {policy_years}")
print(f"Deductible             : Rs. {deductible:.2f}")
print(f"Loyalty Addition       : Rs. {loyalty_addition:.2f}")
print(f"Final Settlement       : Rs. {final_settlement:.2f}")
print(f"Settlement % of Claim  : {settlement_pct:.2f}%")
print("Settlement Category    :", settlement_category)
```

**Output** (inputs `Meena Patil`, `600000`, `500000`, `4` — the claim exceeds the sum insured, so the cap bites)

```text
Enter policyholder name: Meena Patil
Enter claim amount: 600000
Enter sum insured: 500000
Enter number of completed policy years: 4

--- Claim Settlement Estimate ---
Policyholder Name      : Meena Patil
Claim Amount           : Rs. 600000.00
Sum Insured            : Rs. 500000.00
Completed Policy Years : 4
Deductible             : Rs. 20000.00
Loyalty Addition       : Rs. 9600.00
Final Settlement       : Rs. 489600.00
Settlement % of Claim  : 81.60%
Settlement Category    : Moderate Settlement
```

**Hand-check.** Claim 600000 > sum insured 500000, so considered = 500000. Deductible
`500000 * 4 / 100 = 20000`. Preliminary `= 480000`. 4 completed years is in `3..5` so loyalty
`= 480000 * 0.02 = 9600`. Final `= 489600`. Percentage of the **original claim**
`= 489600 / 600000 * 100 = 81.60%`, and `70 <= 81.60 <= 90` → **Moderate Settlement**. Correct.

**Variants** — the other two loyalty bands, with no cap in play:

```text
######## claim 200000, sum insured 500000, 7 years ########
Completed Policy Years : 7
Deductible             : Rs. 8000.00
Loyalty Addition       : Rs. 9600.00
Final Settlement       : Rs. 201600.00
Settlement % of Claim  : 100.80%
Settlement Category    : High Settlement
######## claim 300000, sum insured 300000, 1 year ########
Completed Policy Years : 1
Deductible             : Rs. 12000.00
Loyalty Addition       : Rs. 0.00
Final Settlement       : Rs. 288000.00
Settlement % of Claim  : 96.00%
Settlement Category    : High Settlement
```

| If the question says | Change |
| --- | --- |
| a different default deductible, e.g. `5` | `deductible_rate=5` in the `def` line only |
| "the deductible has a minimum of Rs. 5,000" | `deductible = max(deductible, 5000)` |
| "also return the amount considered" | return four values and unpack four |
| "percentage of the sum insured" | `settlement_pct = final_settlement / sum_insured * 100` |
| "the loyalty addition is capped at Rs. 10,000" | `loyalty_addition = min(loyalty_addition, 10000)` |

**Traps**

- **Cap first, then deduct.** If you deduct 4% of the raw claim and then cap, a claim of 600000
  gives a deductible of 24000 instead of 20000.
- The loyalty addition is a percentage of the **preliminary settlement**, not of the claim or the
  sum insured.
- The reported percentage uses the **original claim amount**. When the cap bites, this is a
  different denominator from the one used inside the function.
- With more than 5 completed years and no cap, the final settlement **exceeds the original
  claim** (100.80% above). That is what the question's arithmetic produces; report it as-is and
  note it in one comment rather than clamping it.
- "up to 2 completed years" includes 0, 1 and 2 → `policy_years <= 2`.

**Drill**

1. Claim Rs. 1,00,000, sum insured Rs. 2,00,000, 6 completed years. Deductible, loyalty
   addition, final settlement and band?

<details><summary>Answer</summary>

Considered 100000; deductible `4000.00`; preliminary 96000; 6 years → 5% → loyalty `4800.00`;
final `100800.00`; `100.80%` → **High Settlement**.

</details>

---

## P2.17 — Model answer: `trade_cost()` (Exercise 6)

**Exam phrasings**

- "Securities Transaction Cost Calculator"
- "create a function named trade_cost()"
- "Delivery transactions use the full calculated brokerage, Intraday transactions are charged 60%"
- "also calculate a transaction levy equal to 0.05% of Trade Value"
- "classify the transaction as Low Cost, Normal Cost or High Cost"

**Core idea.** Compulsory `quantity, price, transaction_type`; default `brokerage_rate = 0.40`.
`Trade Value = Quantity x Price`. Brokerage is 0.40% of trade value, reduced to 60% for
Intraday. Levy is 0.05% of trade value. Returns (trade value, final brokerage, total charges).
This is the only variant with a **string** tier test.

**Markdown cell** (level-1 heading, bold-and-italic subtitle, bulleted list):

```text
# Securities Transaction Cost Calculator
***Brokerage and levy on an equity trade***

This program reports:

- Trade value of the transaction
- Final brokerage after the Delivery / Intraday adjustment
- Total transaction charges
```

**Code cell**

```python
# ============================================================
# Exercise 6 - Securities Transaction Cost Calculator
# ============================================================

# ---------- 1. Accept the inputs from the user ----------
investor_name    = input("Enter investor name: ")                       # str
quantity         = int(input("Enter quantity of shares: "))             # whole shares -> int
price            = float(input("Enter price per share: "))              # money -> float
transaction_type = input("Enter transaction type (Delivery/Intraday): ")  # str


# ---------- 2. Define the function ----------
def trade_cost(quantity, price, transaction_type, brokerage_rate=0.40):
    """Estimate the charges payable on an equity transaction.

    Parameters
    ----------
    quantity : int
        Number of shares traded (compulsory parameter).
    price : float
        Price per share, in rupees (compulsory parameter).
    transaction_type : str
        Either "Delivery" or "Intraday" (compulsory parameter).
    brokerage_rate : float, optional
        Brokerage as a percentage of the trade value. Default is 0.40, i.e. 0.40%.

    Returns
    -------
    tuple
        (trade value, final brokerage, total transaction charges)
    """

    # Trade Value = Quantity x Price
    trade_value = quantity * price

    # Basic brokerage as a percentage of the trade value
    basic_brokerage = trade_value * brokerage_rate / 100

    # Adjust the brokerage for the transaction type.
    # .strip().lower() makes the comparison immune to spaces and capitalisation.
    if transaction_type.strip().lower() == "intraday":
        final_brokerage = basic_brokerage * 0.60     # Intraday pays 60% of the brokerage
    else:
        final_brokerage = basic_brokerage            # Delivery pays the full brokerage

    # Transaction levy = 0.05% of trade value
    transaction_levy = trade_value * 0.05 / 100

    # Total charges payable
    total_charges = final_brokerage + transaction_levy

    # Return the three required values
    return trade_value, final_brokerage, total_charges


# ---------- 3. Call the function WITHOUT passing the default parameter ----------
trade_value, final_brokerage, total_charges = trade_cost(quantity, price, transaction_type)


# ---------- 4. Charges as a percentage of trade value, then classify ----------
charges_pct = total_charges / trade_value * 100

if charges_pct < 0.30:                # "Low Cost if the percentage is below 0.30%"
    cost_category = "Low Cost"
elif charges_pct <= 0.50:             # "Normal Cost if from 0.30% to 0.50%, inclusive"
    cost_category = "Normal Cost"
else:                                 # "High Cost if the percentage is above 0.50%"
    cost_category = "High Cost"


# ---------- 5. Display the results to two decimal places ----------
print("\n--- Securities Transaction Cost Summary ---")
print("Investor Name          :", investor_name)
print("Transaction Type       :", transaction_type.strip().title())
print(f"Quantity               : {quantity}")
print(f"Price per Share        : Rs. {price:.2f}")
print(f"Trade Value            : Rs. {trade_value:.2f}")
print(f"Final Brokerage        : Rs. {final_brokerage:.2f}")
print(f"Total Charges          : Rs. {total_charges:.2f}")
print(f"Charges % of Trade Val : {charges_pct:.2f}%")
print("Cost Category          :", cost_category)
```

**Output** (inputs `Karan Shah`, `200`, `1500`, `Delivery`)

```text
Enter investor name: Karan Shah
Enter quantity of shares: 200
Enter price per share: 1500
Enter transaction type (Delivery/Intraday): Delivery

--- Securities Transaction Cost Summary ---
Investor Name          : Karan Shah
Transaction Type       : Delivery
Quantity               : 200
Price per Share        : Rs. 1500.00
Trade Value            : Rs. 300000.00
Final Brokerage        : Rs. 1200.00
Total Charges          : Rs. 1350.00
Charges % of Trade Val : 0.45%
Cost Category          : Normal Cost
```

**Hand-check.** `200 * 1500 = 300000`. Brokerage `300000 * 0.40 / 100 = 1200`; Delivery so no
reduction. Levy `300000 * 0.05 / 100 = 150`. Total `1350`. Percentage
`1350 / 300000 * 100 = 0.45%`, and `0.30 <= 0.45 <= 0.50` → **Normal Cost**. Correct.

**Variant** — Intraday, typed with stray spaces and lower case, to show `.strip().lower()` works:

```text
Quantity               : 500
Price per Share        : Rs. 820.50
Trade Value            : Rs. 410250.00
Final Brokerage        : Rs. 984.60
Total Charges          : Rs. 1189.72
Charges % of Trade Val : 0.29%
Cost Category          : Low Cost
```

`410250 * 0.40 / 100 = 1641.00`; Intraday → `1641 * 0.60 = 984.60`; levy `205.125`; total
`1189.725`, printed `1189.72` (binary rounding — see P2.9); `0.29%` → **Low Cost**.

| If the question says | Change |
| --- | --- |
| a third type, e.g. "F&O charged 40%" | add an `elif transaction_type.strip().lower() == "f&o":` branch |
| "add 18% GST on the brokerage" | `gst = final_brokerage * 18 / 100`, add to `total_charges` |
| "brokerage has a minimum of Rs. 20" | `final_brokerage = max(final_brokerage, 20)` |
| "levy rate is also a default parameter" | `def trade_cost(quantity, price, transaction_type, brokerage_rate=0.40, levy_rate=0.05):` |
| "return the levy too" | return four values and unpack four |

**Traps**

- With the default rate the percentage is **fixed**: Delivery is always `0.45%` and Intraday is
  always `0.29%`, whatever the quantity and price, because both charges are percentages of the
  same trade value. So Delivery is always "Normal Cost" and Intraday always "Low Cost". That is
  the correct answer as the question is written.
- Compare the transaction type **case-insensitively**. A user typing `intraday` or `INTRADAY`
  must still get the 60% treatment. `.strip()` also removes the trailing space users add.
- `transaction_type == "Intraday"` alone is fragile and is the commonest lost mark here.
- Do not apply the 60% reduction to the levy — only to the brokerage.
- `quantity` is an `int` and `price` a `float`; `int * float` gives a `float`, which is what you want.

**Drill**

1. 1000 shares at Rs. 250, Intraday. Trade value, final brokerage, total charges, band?

<details><summary>Answer</summary>

Trade value `250000.00`; brokerage `250000 * 0.40/100 = 1000`, Intraday → `600.00`; levy
`125.00`; total `725.00`; `725/250000*100 = 0.29%` → **Low Cost**.

</details>

---

## P2.18 — Model answer: `fd_maturity()` (Exercise 8)

**Exam phrasings**

- "Fixed Deposit Maturity Estimator"
- "create a function named fd_maturity()"
- "if the depositor is 60 years or older, add a senior-citizen bonus of 0.50 percentage points to the interest rate"
- "classify the investment duration as Short Term, Medium Term or Long Term"
- "estimate the maturity value of fixed deposits using simple interest"

**Core idea.** Compulsory `principal, years, age`; default `interest_rate = 6.5`. Add 0.50
**percentage points** for age 60+. `Interest = P * R * T / 100`, `Maturity = P + Interest`.
Returns (applicable rate, interest, maturity). The classification is on the **duration in
years** — an input, not a returned value.

**Markdown cell** (level-1 heading, bold introductory sentence, bulleted list of the three outputs):

```text
# Fixed Deposit Maturity Estimator

**This program estimates the maturity value of a fixed deposit using simple interest.**

- Applicable rate of interest
- Total interest earned
- Maturity amount
```

**Code cell**

```python
# ============================================================
# Exercise 8 - Fixed Deposit Maturity Estimator (simple interest)
# ============================================================

# ---------- 1. Accept the inputs from the user ----------
depositor_name = input("Enter depositor name: ")                  # str
principal      = float(input("Enter principal amount: "))         # money -> float
years          = int(input("Enter investment period in years: ")) # whole years -> int
age            = int(input("Enter depositor age: "))              # whole years -> int


# ---------- 2. Define the function ----------
def fd_maturity(principal, years, age, interest_rate=6.5):
    """Estimate the maturity value of a fixed deposit using simple interest.

    Parameters
    ----------
    principal : float
        Amount deposited, in rupees (compulsory parameter).
    years : int
        Investment period in years (compulsory parameter).
    age : int
        Age of the depositor in completed years (compulsory parameter).
    interest_rate : float, optional
        Annual rate of simple interest in percent. Default is 6.5, i.e. 6.5% p.a.

    Returns
    -------
    tuple
        (applicable interest rate, total interest earned, maturity amount)
    """

    # Senior-citizen bonus: 0.50 PERCENTAGE POINTS added to the rate, not 0.50%
    if age >= 60:                              # "60 years or older"
        applicable_rate = interest_rate + 0.50
    else:
        applicable_rate = interest_rate

    # Interest = (Principal x Rate x Years) / 100
    interest = principal * applicable_rate * years / 100

    # Maturity Amount = Principal + Interest
    maturity_amount = principal + interest

    # Return the three required values
    return applicable_rate, interest, maturity_amount


# ---------- 3. Call the function WITHOUT passing the default parameter ----------
applicable_rate, interest, maturity_amount = fd_maturity(principal, years, age)


# ---------- 4. Classify the investment duration (uses the INPUT years) ----------
if years <= 1:                 # "Short Term for up to 1 year"
    duration_category = "Short Term"
elif years <= 3:               # "more than 1 year but not more than 3 years"
    duration_category = "Medium Term"
else:                          # "Long Term for more than 3 years"
    duration_category = "Long Term"


# ---------- 5. Display the results to two decimal places ----------
print("\n--- Fixed Deposit Maturity Estimate ---")
print("Depositor Name       :", depositor_name)
print(f"Principal Amount     : Rs. {principal:.2f}")
print(f"Depositor Age        : {age} years")
print(f"Applicable Rate      : {applicable_rate:.2f}% p.a.")
print(f"Total Interest       : Rs. {interest:.2f}")
print(f"Maturity Amount      : Rs. {maturity_amount:.2f}")
print(f"Investment Period    : {years} years")
print("Duration Category    :", duration_category)
```

**Output** (inputs `Suresh Kamat`, `200000`, `5`, `65`)

```text
Enter depositor name: Suresh Kamat
Enter principal amount: 200000
Enter investment period in years: 5
Enter depositor age: 65

--- Fixed Deposit Maturity Estimate ---
Depositor Name       : Suresh Kamat
Principal Amount     : Rs. 200000.00
Depositor Age        : 65 years
Applicable Rate      : 7.00% p.a.
Total Interest       : Rs. 70000.00
Maturity Amount      : Rs. 270000.00
Investment Period    : 5 years
Duration Category    : Long Term
```

**Hand-check.** Age 65 is 60 or older, so the rate is `6.5 + 0.50 = 7.00`. Interest
`= 200000 * 7 * 5 / 100 = 70000`. Maturity `= 270000`. 5 years is more than 3 → **Long Term**. Correct.

**Variants** — the other two duration bands, non-senior:

```text
######## age 45, 1 year ########
Depositor Age        : 45 years
Applicable Rate      : 6.50% p.a.
Total Interest       : Rs. 9750.00
Maturity Amount      : Rs. 159750.00
Investment Period    : 1 years
Duration Category    : Short Term
######## age 45, 3 years ########
Maturity Amount      : Rs. 179250.00
Investment Period    : 3 years
Duration Category    : Medium Term
```

| If the question says | Change |
| --- | --- |
| "use compound interest instead" | `maturity = principal * (1 + applicable_rate / 100) ** years`, `interest = maturity - principal` |
| "compounded quarterly" | `principal * (1 + applicable_rate / 400) ** (4 * years)` |
| "the bonus is 0.75 percentage points above 65" | add an `elif age >= 65:` branch **above** the `age >= 60` one, or order the ladder high-to-low |
| "also report the interest as a percentage of the principal" | `interest / principal * 100` |
| "period in months" | `years = int(input(...)) / 12` — then the classification edges change too |

**Traps**

- **Percentage points, not percent.** `interest_rate + 0.50` gives 7.0. `interest_rate * 1.005`
  gives 6.5325 and loses the mark.
- The classification uses `years`, which is an **input**. None of the three returned values can
  produce it.
- "Short Term for up to 1 year" includes exactly 1 year → `years <= 1`.
- `"{years} years"` prints "1 years". The question does not ask for correct pluralisation; do not
  waste time on it.
- Simple interest, not compound, "for this exercise" — the question says so explicitly.

**Drill**

1. Principal Rs. 5,00,000, 2 years, age 72. Rate, interest, maturity, duration band?

<details><summary>Answer</summary>

Rate `7.00%`; interest `500000 * 7 * 2 / 100 = 70000.00`; maturity `570000.00`;
2 years is `> 1` and `<= 3` → **Medium Term**.

</details>

---

## P2.19 — Model answer: `loan_cost()` (Exercise 10)

**Exam phrasings**

- "Loan Processing Cost Estimator"
- "create a function named loan_cost()"
- "calculate an additional documentation charge as follows"
- "total initial charges as a percentage of annual income"
- "classify the charge burden as Low, Moderate or High"

**Core idea.** Compulsory `loan_amount, loan_tenure, annual_income`; default
`processing_rate = 1.25`. `Processing Fee = Loan Amount * (Processing Rate / 100)`. The
documentation charge is 5% / 8% / 12% **of the processing fee**, banded by loan size. This is the
only variant where the **percentage is returned by the function** — Block 4 only classifies.

**Markdown cell** (level-1 heading and a short bulleted description):

```text
# Loan Processing Cost Estimator

This program estimates the initial charges payable on a loan and reports:

- Processing fee on the loan amount
- Total initial charges, including the documentation charge
- Total initial charges as a percentage of annual income
```

**Code cell**

```python
# ============================================================
# Exercise 10 - Loan Processing Cost Estimator
# ============================================================

# ---------- 1. Accept the inputs from the user ----------
borrower_name = input("Enter borrower name: ")                  # str
loan_amount   = float(input("Enter loan amount: "))             # money -> float
loan_tenure   = int(input("Enter loan tenure in years: "))      # whole years -> int
annual_income = float(input("Enter annual income: "))           # money -> float


# ---------- 2. Define the function ----------
def loan_cost(loan_amount, loan_tenure, annual_income, processing_rate=1.25):
    """Estimate the initial charges payable on a loan.

    Parameters
    ----------
    loan_amount : float
        Loan amount sanctioned, in rupees (compulsory parameter).
    loan_tenure : int
        Loan tenure in years (compulsory parameter, reported for reference).
    annual_income : float
        Annual income of the borrower, in rupees (compulsory parameter).
    processing_rate : float, optional
        Processing fee as a percentage of the loan amount. Default is 1.25, i.e. 1.25%.

    Returns
    -------
    tuple
        (processing fee, total initial charges,
         total initial charges as a percentage of annual income)
    """

    # Processing Fee = Loan Amount x (Processing Rate / 100)
    processing_fee = loan_amount * (processing_rate / 100)

    # Documentation charge, as a percentage OF THE PROCESSING FEE, by loan size
    if loan_amount <= 500000:                          # "Rs. 5,00,000 or below"
        documentation_rate = 0.05
    elif loan_amount <= 1500000:                       # "above 5,00,000 but not above 15,00,000"
        documentation_rate = 0.08
    else:                                              # "exceeds 15,00,000"
        documentation_rate = 0.12

    documentation_charge = processing_fee * documentation_rate

    # Total initial charges
    total_charges = processing_fee + documentation_charge

    # Charges as a percentage of annual income
    charges_pct_income = total_charges / annual_income * 100

    # Return the three required values
    return processing_fee, total_charges, charges_pct_income


# ---------- 3. Call the function WITHOUT passing the default parameter ----------
processing_fee, total_charges, charges_pct_income = loan_cost(
    loan_amount, loan_tenure, annual_income)


# ---------- 4. Classify the charge burden ----------
if charges_pct_income <= 1:              # "Low if the percentage of income is 1% or less"
    burden_category = "Low"
elif charges_pct_income <= 2:            # "Moderate if above 1% but not above 2%"
    burden_category = "Moderate"
else:                                    # "High if above 2%"
    burden_category = "High"


# ---------- 5. Display the results to two decimal places ----------
print("\n--- Loan Processing Cost Estimate ---")
print("Borrower Name          :", borrower_name)
print(f"Loan Amount            : Rs. {loan_amount:.2f}")
print(f"Loan Tenure            : {loan_tenure} years")
print(f"Annual Income          : Rs. {annual_income:.2f}")
print(f"Processing Fee         : Rs. {processing_fee:.2f}")
print(f"Total Initial Charges  : Rs. {total_charges:.2f}")
print(f"Charges % of Income    : {charges_pct_income:.2f}%")
print("Charge Burden Category :", burden_category)
```

**Output** (inputs `Rohan Naik`, `1000000`, `5`, `900000`)

```text
Enter borrower name: Rohan Naik
Enter loan amount: 1000000
Enter loan tenure in years: 5
Enter annual income: 900000

--- Loan Processing Cost Estimate ---
Borrower Name          : Rohan Naik
Loan Amount            : Rs. 1000000.00
Loan Tenure            : 5 years
Annual Income          : Rs. 900000.00
Processing Fee         : Rs. 12500.00
Total Initial Charges  : Rs. 13500.00
Charges % of Income    : 1.50%
Charge Burden Category : Moderate
```

**Hand-check.** Fee `= 1000000 * (1.25 / 100) = 12500`. Loan is above 5,00,000 and not above
15,00,000 → 8% of the **fee** `= 1000`. Total `= 13500`. Percentage of income
`= 13500 / 900000 * 100 = 1.50%`, which is above 1 and not above 2 → **Moderate**. Correct.

**Variants** — the 5% and 12% documentation bands:

```text
######## 4,00,000 loan (5% band), income 6,00,000 ########
Processing Fee         : Rs. 5000.00
Total Initial Charges  : Rs. 5250.00
Charges % of Income    : 0.88%
Charge Burden Category : Low
######## 20,00,000 loan (12% band), income 12,00,000 ########
Processing Fee         : Rs. 25000.00
Total Initial Charges  : Rs. 28000.00
Charges % of Income    : 2.33%
Charge Burden Category : High
```

| If the question says | Change |
| --- | --- |
| "also return the documentation charge" | return four values and unpack four |
| "the percentage must be computed after the call" | return `processing_fee, total_charges` and compute `total_charges / annual_income * 100` in Block 4 |
| "processing fee capped at Rs. 25,000" | `processing_fee = min(processing_fee, 25000)` **before** the documentation charge |
| "documentation charge is a flat Rs. 2,500 / 5,000 / 10,000" | assign rupee amounts in the ladder instead of rates |
| "charges as a percentage of the loan amount" | `total_charges / loan_amount * 100` |
| "spread the charges over the tenure" | `annual_burden = total_charges / loan_tenure` — this is where `loan_tenure` gets used |

**Traps**

- The documentation charge is a percentage of the **processing fee**. Taking 8% of the loan
  amount gives Rs. 80,000 instead of Rs. 1,000.
- The low band is "**1% or less**" → `<= 1`, unlike Exercise 1 where the low band is
  "**below** 0.60%" → `< 0.60`.
- `loan_tenure` is accepted as a compulsory parameter but **is not used in any of the three
  formulas** the question gives. Keep the parameter — the question demands it — and note in a
  comment that it is captured for reporting. Do not invent a use for it.
- The percentage here is **returned by the function**, so do not recompute it in Block 4.
- `loan_amount * (processing_rate / 100)` — keep the bracket to mirror the printed formula.

**Drill**

1. Loan Rs. 18,00,000, tenure 20, annual income Rs. 30,00,000. Fee, total charges, percentage, band?

<details><summary>Answer</summary>

Fee `= 1800000 * 1.25/100 = 22500.00`; loan exceeds 15,00,000 → 12% → `2700.00`; total
`25200.00`; `25200/3000000*100 = 0.84%` → **Low**.

</details>

---

## P2.20 — Model answer: `sip_summary()` (Midterm Q3, 20 marks)

**Exam phrasings**

- "an investment company wants to create a program that estimates the future value of a customer's Systematic Investment Plan (SIP)"
- "create a well commented function named sip_summary()"
- "call the function without passing the annual rate of return"
- "Total Amount Invested: Rs. 600000.00"
- "SIP Investment Growth Calculator"

**Core idea.** Compulsory `monthly_investment, investment_period`; default
`annual_rate_of_return = 12.0`. Only **two** compulsory parameters here, and **no
classification** is asked. Returns (total invested, wealth gain, future value) — in that order.
The output labels are printed in the paper, so match them exactly.

**Markdown cell** — the paper shows the rendered result, so this must match:

```text
# SIP Investment Growth Calculator
***Long-term investment projection***

This program estimates:

- Total amount invested
- Estimated wealth gain
- Future value of the investment
```

**Code cell**

```python
# ============================================================
# Q3 - SIP (Systematic Investment Plan) Future Value Calculator
# ============================================================

# ---------- 1. Accept the inputs from the user using suitable data types ----------
investor_name      = input("Enter investor name: ")                    # str
monthly_investment = float(input("Enter monthly investment amount: ")) # money -> float
investment_period  = int(input("Enter investment period in years: "))  # whole years -> int


# ---------- 2. Define the function ----------
def sip_summary(monthly_investment, investment_period, annual_rate_of_return=12.0):
    """Estimate the future value of a Systematic Investment Plan (SIP).

    Parameters
    ----------
    monthly_investment : float
        Amount invested every month, in rupees (compulsory parameter).
    investment_period : int
        Investment period in years (compulsory parameter).
    annual_rate_of_return : float, optional
        Expected annual rate of return in percent. Default is 12.0, i.e. 12% p.a.

    Returns
    -------
    tuple
        (total amount invested, estimated wealth gain, estimated future value)
    """

    # Monthly Rate = Annual Rate of Return / (12 x 100)
    monthly_rate = annual_rate_of_return / (12 * 100)

    # Number of Investments = Investment Period in Years x 12
    number_of_investments = investment_period * 12

    # Short names so the formula reads like the question paper
    M = monthly_investment
    r = monthly_rate
    n = number_of_investments

    # Future Value = M * [ ((1 + r)**n - 1) / r ] * (1 + r)
    future_value = M * (((1 + r) ** n - 1) / r) * (1 + r)

    # Total Amount Invested = M x n
    total_invested = M * n

    # Estimated Wealth Gain = Future Value - Total Amount Invested
    wealth_gain = future_value - total_invested

    # Return the three required values, in the order asked for
    return total_invested, wealth_gain, future_value


# ---------- 3. Call the function WITHOUT passing the annual rate of return ----------
total_invested, wealth_gain, future_value = sip_summary(monthly_investment, investment_period)


# ---------- 4. Print each returned value individually, to two decimal places ----------
print("Investor Name:", investor_name)
print(f"Total Amount Invested: Rs. {total_invested:.2f}")
print(f"Estimated Wealth Gain: Rs. {wealth_gain:.2f}")
print(f"Estimated Future Value: Rs. {future_value:.2f}")
```

**Output** (the paper's own sample input: `Amit Rao`, `5000`, `10`)

```text
Enter investor name: Amit Rao
Enter monthly investment amount: 5000
Enter investment period in years: 10
Investor Name: Amit Rao
Total Amount Invested: Rs. 600000.00
Estimated Wealth Gain: Rs. 561695.38
Estimated Future Value: Rs. 1161695.38
```

**This reproduces the question paper's printed sample output exactly**, line for line:
`Rs. 600000.00`, `Rs. 561695.38`, `Rs. 1161695.38`. Verified on Python 3.9.6.

**Hand-check.** `r = 12.0 / 1200 = 0.01`; `n = 120`; `(1.01)**120 = 3.3003868945736685`;
`(3.3003868945736685 - 1) / 0.01 = 230.03868945736685`; `* 5000 = 1150193.4472868342`;
`* 1.01 = 1161695.3817597027`. Total invested `5000 * 120 = 600000`; gain `561695.3817597027`.

**Variants**

```python
# (a) the compulsory call the paper asks for
print(sip_summary(5000.0, 10))

# (b) override the default POSITIONALLY
print(sip_summary(5000.0, 10, 10.0))

# (c) override the default by KEYWORD - safer and self-documenting
print(sip_summary(5000.0, 10, annual_rate_of_return=15.0))

# (d) a rate of 0 divides by zero - guard it if the examiner allows any rate
try:
    sip_summary(5000.0, 10, 0.0)
except ZeroDivisionError as e:
    print("rate 0 ->", type(e).__name__, ":", e)

# (e) add-on the examiner may bolt on: classify the gain as a % of the amount invested
for rate in [6.0, 12.0, 18.0]:
    total, gain, fv = sip_summary(5000.0, 10, annual_rate_of_return=rate)
    gain_pct = gain / total * 100
    if gain_pct < 50:
        band = "Conservative Growth"
    elif gain_pct <= 100:
        band = "Moderate Growth"
    else:
        band = "Aggressive Growth"
    print(f"rate={rate:>5.2f}%  FV=Rs. {fv:.2f}  gain={gain_pct:.2f}% of invested -> {band}")
```

```text
(600000.0, 561695.3817597027, 1161695.3817597027)
(600000.0, 432760.10197165736, 1032760.1019716574)
(600000.0, 793286.3577203848, 1393286.3577203848)
rate 0 -> ZeroDivisionError : float division by zero
rate= 6.00%  FV=Rs. 823493.72  gain=37.25% of invested -> Conservative Growth
rate=12.00%  FV=Rs. 1161695.38  gain=93.62% of invested -> Moderate Growth
rate=18.00%  FV=Rs. 1681287.57  gain=180.21% of invested -> Aggressive Growth
```

| If the question says | Change |
| --- | --- |
| "accept the rate from the user too" | add an `input()` and pass it: `sip_summary(M, y, annual_rate_of_return=rate)` |
| "quarterly SIP" | `monthly_rate = annual_rate / (4 * 100)`, `number_of_investments = years * 4` |
| "instalment paid at the end of each month" | drop the trailing `* (1 + r)` |
| "also classify the wealth gain" | add the Block 4 ladder shown in variant (e) |
| "also report the lumpsum equivalent" | `principal * (1 + annual_rate/100) ** years` |
| "period in months, not years" | `number_of_investments = investment_period` directly |

**Traps**

- The trailing `* (1 + r)` is mandatory; without it the future value is `1150193.45`, wrong by
  Rs. 11,501.93, and the whole answer is marked down.
- `(12 * 100)` must stay bracketed. `annual_rate / 12 * 100` gives `100.0` instead of `0.01`.
- `1 + r ** n` instead of `(1 + r) ** n` gives `1.0` and a future value of zero-ish nonsense.
- Only **two** compulsory parameters. Do not add the investor name as a parameter — the name is
  printed by the main program, not by the function.
- The paper prints the labels without an aligned colon (`Total Amount Invested: Rs. 600000.00`).
  Copy the labels as printed.
- The question says "print each value individually" — three separate `print` calls, not
  `print(sip_summary(...))`.

**Drill**

1. Rs. 2,000 a month for 15 years at the default rate. Total invested and number of instalments?

<details><summary>Answer</summary>

`n = 15 * 12 = 180`; total invested `= 2000 * 180 = 360000.00`.

</details>

---

## Write-up answers

Short written answers that carry marks. Reproduce them almost verbatim.

**"What is the difference between a parameter and an argument?"**

> A *parameter* is the name written in the function's `def` line; it is a placeholder that exists
> only inside the function. An *argument* is the actual value supplied at the point of call, which
> is assigned to the parameter when the function runs. In
> `def advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75)`,
> `investment_amount`, `investment_period`, `age` and `annual_fee_rate` are parameters, and in the
> call `advisory_fee(500000, 5, 55)` the values `500000`, `5` and `55` are arguments.
> `investment_amount`, `investment_period` and `age` are compulsory (positional) parameters
> because they have no default value, so the caller must supply arguments for them;
> `annual_fee_rate` is a default (optional) parameter, so the caller may omit it and the value
> `0.75` is used.

**"Why must default parameters come last?"**

> Python matches positional arguments to parameters strictly left to right. If a parameter with a
> default value appeared before one without, Python could not tell whether a positional argument
> was meant for the defaulted parameter or for the compulsory one that follows, so there would be
> no unambiguous way to fill the compulsory parameter while skipping the default. To remove that
> ambiguity the language forbids it at compile time: writing
> `def bad(investment_amount, annual_fee_rate=0.75, age):` raises
> `SyntaxError: non-default argument follows default argument` before the program runs. Placing
> all defaults after all compulsory parameters means a caller can always supply just the
> compulsory arguments — `advisory_fee(500000, 5, 55)` — and optionally override a default,
> positionally or by keyword.

**"What is the difference between `return` and `print`?"**

> `print` writes a human-readable representation of a value to the screen; it produces no value
> that the rest of the program can use, and it evaluates to `None`. `return` ends the function and
> hands a value back to the caller, which can be stored in a variable and used in further
> calculations. A function that only prints cannot be reused: `x = f(...)` would leave `x` as
> `None`. In these exercises the function must `return` the three computed values so the calling
> program can unpack them into separate variables, classify the percentage and then `print` them
> in a formatted report. `return` also terminates the function immediately, so any statement
> written after it never runs. Where the question says "the function must return three values",
> printing them inside the function instead of returning them loses the marks even if the
> displayed numbers are right.

**"Why is a docstring better than a comment?"** (occasionally asked as a follow-up)

> A comment starting with `#` is stripped by the interpreter and exists only in the source file. A
> docstring is a string literal placed as the first statement inside the function, so it is stored
> on the function object as `__doc__` and can be read at run time with `advisory_fee.__doc__` or
> `help(advisory_fee)`. That makes it the function's documentation for anyone using it, while
> `#` comments explain the implementation to whoever maintains it. Good practice, and what these
> questions ask for, is both: a docstring describing the parameters and return values, plus
> comments marking each business rule.

**"Why does `input()` need `int()` or `float()`?"**

> `input()` always returns a `str`, whatever the user types, because it simply reads the
> characters entered at the keyboard. Arithmetic on strings either raises `TypeError` or does
> something unintended — `"500000" * 2` repeats the text instead of doubling the number. So a
> numeric input must be converted at the point of reading: `float(input(...))` for amounts, rates
> and prices, which may have decimals, and `int(input(...))` for counts such as years, age and
> quantity. Converting once, in the input block, keeps the rest of the program numeric.

---

## Chapter cheat sheet

Reproduce this under time pressure. Five blocks, in this order, every time.

```python
# --- MARKDOWN CELL (separate cell, type Esc-M, then run it) ---
# # Title Of The Program
# ***Bold italic subtitle***      (** = bold only, * = italic only)
#
# This program reports:
#
# - Output one
# - Output two
# - Output three

# ---------- 1. INPUT ----------
name  = input("Enter name: ")            # str
base  = float(input("Enter amount: "))   # money -> float
term  = int(input("Enter years: "))      # count -> int
tier  = int(input("Enter age: "))        # tier test value

# ---------- 2. FUNCTION (docstring + comments) ----------
def func_name(base, term, tier, rate=DEFAULT):     # defaults LAST
    """What it computes.
    base : float - ... (compulsory)
    term : int   - ... (compulsory)
    tier : int   - ... (compulsory)
    rate : float - ...; default DEFAULT
    Returns a tuple: (v1, v2, pct)
    """
    basic = base * rate / 100            # "rate% of base"
    if tier < LOW:                       # "below LOW"
        adj = A
    elif LOW <= tier <= HIGH:            # "from LOW to HIGH, inclusive"
        adj = B
    else:                                # "above HIGH"
        adj = C
    v1  = basic - basic * adj            # or basic * adj, per the question
    v2  = v1 * term
    pct = v1 / base * 100                # "v1 as a percentage of base"
    return v1, v2, pct                   # ONE return, three values

# ---------- 3. CALL WITHOUT THE DEFAULT ----------
out1, out2, pct = func_name(base, term, tier)      # exactly the compulsory args

# ---------- 4. CLASSIFY ----------
if pct < T1:
    band = "Label1"
elif pct <= T2:
    band = "Label2"
else:
    band = "Label3"

# ---------- 5. PRINT (2 decimals) ----------
print("Name       :", name)
print(f"Value 1    : Rs. {out1:.2f}")
print(f"Value 2    : Rs. {out2:.2f}")
print(f"Percentage : {pct:.2f}%")
print("Category   :", band)
```

**Boundary words → operators**

| Words | Operator |
| --- | --- |
| below, less than, under | `<` |
| up to, not more than, or below, or less, inclusive (upper edge) | `<=` |
| above, more than, exceeds | `>` |
| or older, at least, or above | `>=` |
| from A to B, inclusive | `A <= x <= B` |
| above A but not above B | `A < x <= B` |
| exactly | `==` (never on a computed float) |

**Two-decimal output**

| Want | Write |
| --- | --- |
| `Rs. 600000.00` | `f"Rs. {x:.2f}"` |
| same, old style | `"Rs. %.2f" % x` |
| same, `.format()` | `"Rs. {:.2f}".format(x)` |
| **never** | `print("Rs.", round(x, 2))` → `Rs. 600000.0` |

**Formulas**

| Name | Python |
| --- | --- |
| Percentage of base | `base * rate / 100` |
| Part as % of base | `part / base * 100` |
| Trade value | `quantity * price` |
| Simple interest | `p * r * t / 100` |
| Maturity (simple) | `p + interest` |
| Compound amount | `p * (1 + r / 100) ** t` |
| Monthly rate | `annual_rate / (12 * 100)` |
| Instalments | `years * 12` |
| SIP future value | `m * (((1 + r) ** n - 1) / r) * (1 + r)` |
| Wealth gain | `future_value - m * n` |

**The six signatures**

```python
def advisory_fee(investment_amount, investment_period, age, annual_fee_rate=0.75):
def claim_settlement(claim_amount, sum_insured, policy_years, deductible_rate=4):
def trade_cost(quantity, price, transaction_type, brokerage_rate=0.40):
def fd_maturity(principal, years, age, interest_rate=6.5):
def loan_cost(loan_amount, loan_tenure, annual_income, processing_rate=1.25):
def sip_summary(monthly_investment, investment_period, annual_rate_of_return=12.0):
```

**Five things that lose marks most often**

1. Passing the default explicitly when told to "call the function without passing" it.
2. `<` where the question said "inclusive" / "or below" / "up to".
3. `round(x, 2)` instead of `f"{x:.2f}"` — trailing zeros disappear.
4. Missing the trailing `* (1 + r)` in the SIP formula, or `1 + r ** n` instead of `(1 + r) ** n`.
5. Taking a tiered percentage of the wrong base (of the loan amount instead of the processing fee,
   of the claim instead of the preliminary settlement).
