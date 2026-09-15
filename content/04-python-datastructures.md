---
id: 04-python-datastructures
part: "Part I — Core Python"
title: "Data Structures and the Design-Critique Question"
blurb: "Pick list, tuple, set, dict or str from the wording of the question — and answer the 10-mark design-critique question in full."
order: 40
covers:
  - "Integrated exercises — BIFS 2026-27 ITP MT QP — Q1 (10 marks)"
  - "Integrated exercises — Exercises to practice pre-midterm portion — Exercises 2, 4, 5, 7, 9 (list processing)"
patterns:
  - id: P4.1
    title: "Pick the container by asking seven questions"
    phrasings:
      - "suggest an appropriate data structure for storing"
      - "which data type would you use to store branch codes"
      - "justify your choice of data structure"
      - "state the most suitable Python data type for each of the following"
      - "why is a list more appropriate than a set here"
  - id: P4.2
    title: "Write the design-critique answer (the five-error model answer)"
    phrasings:
      - "Evaluate the analyst's design, identify the errors and suggest appropriate corrections."
      - "a junior analyst has designed the initial data structure for the application"
      - "identify the errors in the design and suggest corrections"
      - "comment on the suitability of the data structures chosen by the developer"
      - "the original sequence of transactions was not available and transactions having identical values were sometimes represented only once"
      - "the programming team found it difficult to understand which position in the tuple represented each customer detail"
  - id: P4.3
    title: "Prove the fault in code (the error messages the examiner wants)"
    phrasings:
      - "demonstrate with a short program why the chosen structure fails"
      - "what error will the following code produce"
      - "show the output of the given code and explain"
      - "write code to show that a tuple cannot be updated"
      - "explain why customers cannot update their city in this design"
  - id: P4.4
    title: "List operations you may be asked for"
    phrasings:
      - "append, insert, remove and pop elements of a list"
      - "display the third transaction and the latest transaction"
      - "sort the deposits in descending order"
      - "slice the first three and the last two elements"
      - "count how many times a value appears in the list"
  - id: P4.5
    title: "Tuple operations and immutability"
    phrasings:
      - "unpack the tuple into separate variables"
      - "what happens if you try to change an element of a tuple"
      - "create a tuple with a single element"
      - "why is a tuple suitable for a fixed two-part banking record"
      - "count the occurrences of a value in a tuple"
  - id: P4.6
    title: "Set operations and de-duplication"
    phrasings:
      - "remove the duplicate branch codes received from different reports"
      - "find the branches common to both regions"
      - "which codes appear in the north list but not in the west list"
      - "add a branch code to the set and show that duplicates are ignored"
      - "how many unique branch codes are there"
  - id: P4.7
    title: "Dictionary operations and nested records"
    phrasings:
      - "store each customer's name, age, city, phone number and account status"
      - "update the city, phone number and account status independently"
      - "print all keys and values of the dictionary"
      - "iterate over the dictionary using items()"
      - "access a key that may be missing without causing an error"
  - id: P4.8
    title: "Strings are single values, not collections of characters"
    phrasings:
      - "email addresses were stored as collections of individual characters rather than as a single value"
      - "extract the domain part of the email address"
      - "remove extra spaces and convert the name to title case"
      - "why is a string preferred over a list of characters"
      - "show that a string cannot be modified in place"
  - id: P4.9
    title: "Convert between containers"
    phrasings:
      - "convert the list of branch codes into a set"
      - "remove duplicates while preserving the original order"
      - "combine the list of field names and the list of values into a dictionary"
      - "join the characters back into a single string"
      - "convert the tuple into a list so that it can be modified"
  - id: P4.10
    title: "Build the corrected dict-of-records store"
    phrasings:
      - "suggest an appropriate corrected structure for the whole application"
      - "redesign the customer-onboarding data structure"
      - "store many customers so that any customer can be found by customer id"
      - "write the corrected code for the customer record"
      - "show how a new transaction is added to a customer's history"
  - id: P4.11
    title: "Answer any re-skin of the design-critique question"
    phrasings:
      - "a hospital is developing a patient-admission system"
      - "a library is developing a catalogue management system"
      - "a payroll system stores the employee's fixed joining-date pair in a list"
      - "an e-commerce store has designed the following data structure"
      - "evaluate the trainee's design and recommend suitable data types"
---

This chapter needs no data files. Everything runs in plain Python 3.9.

**Read this first.** In the design-critique question, marks are awarded for **two halves per error**:

1. the **name of the correct container** (list / tuple / set / dict / str), and
2. the **property that makes it correct** (ordered, allows duplicates, mutable, immutable, named keys, unique membership, single value).

Writing "use a list" earns half. Writing "use a **list**, because a list is **ordered and allows duplicate
values**, so the sequence of transactions and repeated identical amounts are both preserved" earns the mark.
Every model answer in this chapter is written in that two-half form. Copy the form.

## Chapter map

| Pattern | Use it when |
| --- | --- |
| P4.1 | You must choose or justify a data structure |
| P4.2 | The 10-mark "evaluate the design, identify the errors, suggest corrections" question |
| P4.3 | You must demonstrate/explain the failure in code, or predict an error message |
| P4.4 | List operations: append, insert, remove, pop, index, slice, sort, count |
| P4.5 | Tuple operations, unpacking, immutability, single-element tuple |
| P4.6 | Set operations: add, discard, union, intersection, difference, dedup |
| P4.7 | Dictionary operations, `.get()`, `.items()`, nested dicts |
| P4.8 | String as one value: indexing, slicing, cleaning methods, f-strings |
| P4.9 | Converting one container into another, dedup with and without order |
| P4.10 | "Suggest an appropriate corrected structure" for a whole scenario |
| P4.11 | The same question re-skinned as a hospital / library / payroll system |

## P4.1 — Pick the container by asking seven questions

**Exam phrasings**

- "suggest an appropriate data structure for storing"
- "which data type would you use to store branch codes"
- "justify your choice of data structure"
- "state the most suitable Python data type for each of the following"
- "why is a list more appropriate than a set here"

**Core idea.** Do not memorise use-cases. Ask these seven questions in order and stop at the first "yes".
Each row gives you the container **and** the property sentence you must write next to it.

| Question to ask | If yes | Container |
| --- | --- | --- |
| Is it one single text value (name, email, PAN, city, ISBN)? | Say: "a string stores one complete text value; the characters are not separate items" | `str` |
| Is it a **fixed-length record** whose parts must never change (country code + bank id, month + year, latitude + longitude)? | Say: "a tuple is **immutable**, so the record cannot be altered or extended by accident; it is also **hashable**, so it can be a dict key" | `tuple` |
| Do the items have **names or roles** (name, age, city, phone, status)? | Say: "a dictionary stores **named key-value pairs**, is **mutable** so each field can be updated independently, and removes unreadable positional access" | `dict` |
| Does the **original order / sequence** matter (transaction history, issue dates, daily readings)? | Say: "a list is **ordered** and **indexable**, so the original sequence is preserved and any position can be retrieved" | `list` |
| Are **duplicate values meaningful** (two transactions of Rs. 5,000 are two separate events)? | Say: "a list **allows duplicates**, so repeated identical values are all retained" | `list` |
| Must the collection **grow, shrink or be edited** after creation? | Say: "it is **mutable** — `append`, `pop`, `remove`, item assignment are available" | `list` (or `dict`) |
| Do you only need **unique values** and **fast membership tests** (branch codes, ISBNs, department codes, doctors on duty)? | Say: "a set stores **unique, unordered** elements, so duplicates are eliminated automatically and `in` is a fast hash lookup" | `set` |

**Template** — the sentence pattern for every answer:

```text
Use a <CONTAINER> because a <CONTAINER> is <PROPERTY 1> and <PROPERTY 2>,
so <THE SPECIFIC REQUIREMENT IN THE QUESTION> is satisfied.
```

**Worked** — the five literals, and what Python calls each one:

```python
# One literal of each container, plus what Python calls it.
txns     = [5000, 2500, 5000, 800]                 # list  - ordered, duplicates kept
ifsc     = ("IN", "HDFC0001234")                   # tuple - fixed, cannot change
branches = {"GOA01", "MUM02", "DEL03"}             # set   - unique, unordered
customer = {"name": "Riya Naik", "city": "Panaji"} # dict  - named keys
email    = "r.naik@example.com"                    # str   - one text value

for obj in (txns, ifsc, branches, customer, email):
    print(type(obj).__name__, "->", obj)
```

```text
list -> [5000, 2500, 5000, 800]
tuple -> ('IN', 'HDFC0001234')
set -> {'MUM02', 'DEL03', 'GOA01'}
dict -> {'name': 'Riya Naik', 'city': 'Panaji'}
str -> r.naik@example.com
```

The set printed in a different order from the one it was written in — and **the order changes between
runs** for strings. That is not a bug; it is the defining property of a set. Never paste a set's print
order into an exam answer as if it were fixed; print `sorted(my_set)` instead.

**Worked** — the property matrix, proved rather than asserted:

```python
samples = {
    "list":  [1, 2, 2],
    "tuple": (1, 2, 2),
    "set":   {1, 2, 2},
    "dict":  {"a": 1, "b": 2},
    "str":   "122",
}

def can_index(x):
    try:
        x[0]; return "yes"
    except TypeError:
        return "no"
    except KeyError:
        return "by key"

def can_mutate(x):
    try:
        y = x.copy() if hasattr(x, "copy") else x
        if isinstance(y, set):
            y.add(99); return "yes"
        y[0 if not isinstance(y, dict) else "a"] = 99
        return "yes"
    except (TypeError, KeyError):
        return "no"

def is_hashable(x):
    try:
        hash(x); return "yes"
    except TypeError:
        return "no"

print(f"{'type':<7}{'len':<5}{'indexable':<11}{'mutable':<9}{'hashable':<9}")
for name, obj in samples.items():
    print(f"{name:<7}{len(obj):<5}{can_index(obj):<11}{can_mutate(obj):<9}{is_hashable(obj):<9}")

print()
print("duplicates kept? list:", len([1,2,2]), "tuple:", len((1,2,2)),
      "set:", len({1,2,2}), "str:", len("122"))
print("dict duplicate key  :", {"a": 1, "a": 2})   # last value wins
```

```text
type   len  indexable  mutable  hashable 
list   3    yes        yes      no       
tuple  3    yes        no       yes      
set    2    no         yes      no       
dict   2    by key     yes      no       
str    3    yes        no       yes      

duplicates kept? list: 3 tuple: 3 set: 2 str: 3
dict duplicate key  : {'a': 2}
```

`{1, 2, 2}` has length 2 — the duplicate was dropped at creation, silently.

**Variants**

| If the question says | Answer with |
| --- | --- |
| "complete history / sequence / log / all readings" | `list` — ordered, allows duplicates |
| "unique codes / distinct branches / master list of ISBNs" | `set` — unique, unordered, fast `in` |
| "fixed two-part record / must not change / constant pair" | `tuple` — immutable, fixed length, hashable |
| "name, age, city, phone, status **together**" | `dict` — named keys, mutable, readable |
| "email address / PAN / account number / customer name" | `str` — one text value |
| "look up a customer by customer id" | `dict` keyed by the id — O(1) lookup |
| "table of many customers, order of onboarding matters" | `list` of `dict` records |
| "a pair used as a lookup key" | `tuple` — lists are unhashable and cannot be keys |

**Traps**

- "Order does not matter" is not a reason to use a set. Use a set only when **duplicates must be removed**. A list also works when order is irrelevant, and it keeps duplicates.
- A tuple is immutable but still **ordered and indexable** — immutability is the only thing it loses versus a list.
- A dict's keys must be **unique** and **hashable**; writing the same key twice keeps only the last value.
- Only a set drops duplicates. A list of duplicated codes is a design flaw, not an error — nothing crashes, so you must spot it by reading the requirement.

**Drill**

1. State the correct container plus its property for each: (a) hourly temperature readings of a cold-storage unit, (b) the set of PIN codes the bank delivers to, (c) latitude and longitude of a branch, (d) a customer's GST number, (e) a loan record holding applicant name, amount, tenure and status.

<details><summary>Answer</summary>

| Item | Container | Property to state |
| --- | --- | --- |
| (a) hourly temperature readings | `list` | ordered and allows duplicates — the sequence and repeated identical readings both matter |
| (b) PIN codes served | `set` | unique, unordered, fast membership test with `in` |
| (c) latitude and longitude | `tuple` | immutable fixed-length pair, hashable, unpackable as `lat, lon = coords` |
| (d) GST number | `str` | one single text value, not a collection of characters |
| (e) loan record with four named fields | `dict` | named keys, mutable, so any one field can be updated and read by name |

</details>

## P4.2 — Write the design-critique answer (the five-error model answer)

**Exam phrasings**

- "Evaluate the analyst's design, identify the errors and suggest appropriate corrections."
- "a junior analyst has designed the initial data structure for the application"
- "identify the errors in the design and suggest corrections"
- "comment on the suitability of the data structures chosen by the developer"
- "the original sequence of transactions was not available and transactions having identical values were sometimes represented only once"
- "the programming team found it difficult to understand which position in the tuple represented each customer detail"

**Core idea.** The question plants **one error per container**. Work through the paragraph sentence by
sentence: each symptom the bank "found during testing" is the missing property named out loud. Answer in a
table of five rows (what was used / what goes wrong / what to use instead / corrected code), then add two
or three sentences of prose per row. Ten marks, five errors — budget **two marks each: one for the
container, one for the property**.

**How the symptom maps to the property** (learn this mapping, it survives any re-skin):

| Symptom in the question | Missing property | Therefore |
| --- | --- | --- |
| "the original sequence was not available" | ordering | needs `list` |
| "identical values were sometimes represented only once" | duplicates allowed | needs `list` |
| "should be able to update ... independently" | mutability | needs `list`/`dict`, not `tuple` |
| "difficult to understand which position represented each detail" | named access | needs `dict` |
| "including repeated codes received from different reports" | unique membership | needs `set` |
| "form a fixed two-part record" | immutability, fixed length | needs `tuple` |
| "stored as collections of individual characters rather than as a single value" | single text value | needs `str` |

**Template** — the answer table, ready to fill for any re-skin:

```text
| # | Analyst used | What goes wrong | Correct container | Property that fixes it | Corrected code |
```

**Worked** — the model answer to Q1 of the BIFS 2026-27 ITP mid-term paper:

| # | Analyst used | What goes wrong | Correct container | Property that fixes it | Corrected code |
| --- | --- | --- | --- | --- | --- |
| 1 | **`set`** for the complete transaction history | A set is unordered, so the original sequence of transactions is lost and no transaction can be fetched by position; a set stores only unique elements, so two genuine transactions of the same amount collapse into one and the count is understated | **`list`** | **ordered, indexable, allows duplicates** | `transactions = [5000, 2500, 5000, 1200, 800]` |
| 2 | **`tuple`** for name, age, city, phone, status | A tuple is immutable, so city / phone / status cannot be updated independently — any edit needs the whole record rebuilt; access is positional (`cust[3]`), so the code is unreadable and error-prone | **`dict`** | **named keys (self-documenting) and mutable per field** | `customer = {"name": "Riya Naik", "age": 29, "city": "Panaji", "phone": "9822011223", "status": "Active"}` |
| 3 | **`list`** for branch codes | A list allows duplicates, so the same branch code arriving from several reports is stored many times; branch counts, loops and reports are all inflated, and `in` scans the whole list | **`set`** | **unique membership, automatic de-duplication, fast `in`** | `branch_codes = {"GOA01", "MUM02", "DEL03"}` |
| 4 | **`list`** for country code + bank identification code | A list is mutable and variable-length, so a fixed two-part banking record can be silently overwritten, appended to, or reordered; it is also unhashable, so it cannot be used as a dictionary key | **`tuple`** | **immutable, fixed length, hashable, unpackable** | `bank_code = ("IN", "HDFC0001234")` |
| 5 | **list of individual characters** for the email address | The address is no longer one value: `len()` counts characters, string methods such as `.split("@")`, `.lower()`, `.strip()` raise `AttributeError`, the value cannot be compared to a real address or de-duplicated (lists are unhashable), and printing shows `['r', '.', 'n', ...]` | **`str`** | **a single immutable text value with the full string method set** | `email = "r.naik@example.com"` |

**The prose to write under the table** (five short paragraphs — this is what earns the second half of each mark):

> **1. Transaction history.** The analyst stored the complete transaction history in a set. A set is an
> unordered collection of unique elements, which explains both defects found in testing: the order of
> transactions is not retained because a set has no positions, and two transactions of an identical amount
> are stored only once because a set eliminates duplicates. Transaction history must be a **list**, which is
> ordered, indexable and permits duplicate values, so `transactions[0]` is the first transaction,
> `transactions[-1]` the latest, and repeated amounts are all preserved.
>
> **2. Customer details.** Storing name, age, city, phone number and account status in a tuple makes the
> record immutable, so the bank's requirement to update city, phone and status independently cannot be met —
> a tuple element cannot be assigned. Positional access (`customer[3]`) also gives no indication of which
> detail is being read, which is what confused the programming team. A **dictionary** is correct: it holds
> named key-value pairs, so `customer["city"] = "Margao"` updates exactly one field, and every access is
> self-documenting. (Age could stay in the tuple only if nothing ever changed — it does not.)
>
> **3. Branch codes.** Branch codes are identifiers, and each branch exists once. A list retains every
> repeated code received from the different reports, inflating counts and requiring manual de-duplication. A
> **set** should be used: it enforces uniqueness on insertion, so re-adding an existing code is a no-op, and
> membership tests such as `"GOA01" in branch_codes` are fast hash lookups rather than a full scan.
>
> **4. Country code and bank identification code.** These two values form a fixed two-part record that must
> not change. A list is mutable and of variable length, so an element can be reassigned or a third element
> appended, corrupting the record without any error being raised. A **tuple** is the correct choice because it
> is immutable and of fixed length; it also unpacks cleanly (`country, bank_id = bank_code`) and, being
> hashable, can serve as a dictionary key for rate or branch lookups.
>
> **5. Email address.** Storing the address as a collection of individual characters destroys it as a value.
> A **string** should be used. A string is itself a single immutable sequence of characters, so the whole
> address is one item, `len(email)` is meaningful only on the complete value, and the string methods the
> application needs — `.strip()`, `.lower()`, `.split("@")` to obtain the domain — are all available. A list
> of characters supports none of them and cannot be stored in a set or used as a dictionary key.

**Variants**

| If the question adds | Say |
| --- | --- |
| "the bank also wants to look up a customer by customer id instantly" | Use a **dict keyed by customer id** whose values are the customer dicts — O(1) lookup instead of scanning a list |
| "transactions must never be altered once posted" | Store each posted transaction as a **tuple** `(date, type, amount)` inside the **list** — the list keeps order and growth, each entry is immutable |
| "the bank wants only the distinct transaction amounts" | Keep the `list` as the record of truth and derive `set(transactions)` on demand — never replace the source |
| "the analyst also stored age as a string" | Age is arithmetic, so store `int`; a string cannot be averaged or compared numerically (`"9" > "10"` is `True`) |
| "the analyst stored the phone number as an integer" | Keep phone numbers as **`str`** — they are identifiers, not quantities; a leading zero would be lost and no arithmetic is ever done on them |
| "suggest a structure that also records which branch opened the account" | Add a `"branch"` key holding a `str`, and validate it with `branch in branch_codes` |

**Traps**

- Do not stop at "wrong data type used". Name the property. A marker cannot award the second mark for a sentence that does not contain the word ordered / duplicates / mutable / immutable / keys / unique.
- Error 4 is the reverse of error 3: the same container (`list`) is wrong for two opposite reasons — duplicates in one case, mutability in the other. Read which one the question complains about.
- Do not "fix" the tuple by converting the record to a list. A list still gives positional, unreadable access — the question explicitly complains about that, so only `dict` scores.
- The email error is not about the characters being wrong; it is about **granularity** — one value has been shattered into eighteen.
- Write the corrected literal for each error. One line of code per error is cheap and visibly answers "suggest appropriate corrections".

**Drill**

1. Reduce the whole model answer to five lines you could write in 90 seconds if you ran out of time.

<details><summary>Answer</summary>

```text
1. set -> list. A list is ordered and allows duplicates, so sequence and repeated amounts survive.
2. tuple -> dict. A dict has named keys and is mutable, so city/phone/status update independently and readably.
3. list -> set. A set holds unique elements, so repeated branch codes from different reports are eliminated.
4. list -> tuple. A tuple is immutable and fixed-length, so the two-part country/bank code cannot be altered.
5. list of characters -> str. A string is one complete text value and supports .split("@"), .lower(), .strip().
```

</details>

## P4.3 — Prove the fault in code (the error messages the examiner wants)

**Exam phrasings**

- "demonstrate with a short program why the chosen structure fails"
- "what error will the following code produce"
- "show the output of the given code and explain"
- "write code to show that a tuple cannot be updated"
- "explain why customers cannot update their city in this design"

**Core idea.** Each wrong container fails with a **specific, quotable message**. Memorise the four
messages below; they convert a vague criticism into a demonstrable one, and a follow-up "what error is
raised?" question becomes free marks.

| Wrong usage | Exact exception |
| --- | --- |
| `tuple_obj[i] = value` | `TypeError: 'tuple' object does not support item assignment` |
| `tuple_obj.append(x)` | `AttributeError: 'tuple' object has no attribute 'append'` |
| `set_obj[0]` | `TypeError: 'set' object is not subscriptable` |
| `list_of_chars.split("@")` | `AttributeError: 'list' object has no attribute 'split'` |
| `{["a","b"]: 1}` or `{["a","b"]}` | `TypeError: unhashable type: 'list'` |
| `str_obj[0] = "X"` | `TypeError: 'str' object does not support item assignment` |
| `dict_obj["missing"]` | `KeyError: 'missing'` |
| `set_obj.remove("missing")` | `KeyError: 'missing'` |

**Template**

```python
try:
    BAD_OPERATION
except (TypeError, AttributeError, KeyError, ValueError) as e:
    print(type(e).__name__ + ":", e)
```

**Worked** — one script that proves all five planted errors. This is the demonstration to paste into a
notebook if the examiner asks for code alongside the critique.

```python
# ============ Q1 DESIGN CRITIQUE - PROOF OF EVERY ERROR ============

# ---- Error 1: transaction history stored in a SET ----
print("--- Error 1: set for transaction history ---")
txn_wrong = {5000, 2500, 5000, 1200, 800}       # analyst's design
txn_right = [5000, 2500, 5000, 1200, 800]       # correction: list
print("entered  :", [5000, 2500, 5000, 1200, 800])
print("as set   :", txn_wrong, "-> len", len(txn_wrong))
print("as list  :", txn_right, "-> len", len(txn_right))
print("duplicate 5000 kept by list?", txn_right.count(5000), "times")
try:
    txn_wrong[2]                                 # "show the 3rd transaction"
except TypeError as e:
    print("TypeError:", e)
print("3rd transaction from list:", txn_right[2])
print("latest transaction       :", txn_right[-1])

# ---- Error 2: customer record stored in a TUPLE ----
print("\n--- Error 2: tuple for name/age/city/phone/status ---")
cust_wrong = ("Riya Naik", 29, "Panaji", "9822011223", "Active")
try:
    cust_wrong[2] = "Margao"                     # bank wants to update city
except TypeError as e:
    print("TypeError:", e)
print("positional access is unreadable: cust_wrong[3] ->", cust_wrong[3])
cust_right = {"name": "Riya Naik", "age": 29, "city": "Panaji",
              "phone": "9822011223", "status": "Active"}
cust_right["city"] = "Margao"                    # each field updates independently
cust_right["phone"] = "9822099887"
cust_right["status"] = "Dormant"
print("dict after updates:", cust_right)
print("readable access: cust_right['phone'] ->", cust_right["phone"])

# ---- Error 3: branch codes stored in a LIST ----
print("\n--- Error 3: list for branch codes ---")
branch_wrong = ["GOA01", "MUM02", "GOA01", "DEL03", "MUM02", "GOA01"]
branch_right = set(branch_wrong)                 # correction: set
print("list :", len(branch_wrong), "entries ->", sorted(branch_wrong))
print("set  :", len(branch_right), "entries ->", sorted(branch_right))
branch_right.add("GOA01")                        # re-adding changes nothing
print("after re-adding GOA01:", len(branch_right), "entries")
print("membership test 'GOA01' in set ->", "GOA01" in branch_right)

# ---- Error 4: country code + bank id code stored in a LIST ----
print("\n--- Error 4: list for a fixed two-part banking record ---")
code_wrong = ["IN", "HDFC0001234"]
code_wrong[1] = "XXXX9999999"                    # silently overwritten
code_wrong.append("EXTRA")                       # record grew a third part
print("list was corrupted:", code_wrong, "-> len", len(code_wrong))
code_right = ("IN", "HDFC0001234")               # correction: tuple
try:
    code_right[1] = "XXXX9999999"
except TypeError as e:
    print("TypeError:", e)
try:
    code_right.append("EXTRA")
except AttributeError as e:
    print("AttributeError:", e)
country, bank_id = code_right                    # fixed length -> clean unpacking
print("unpacked ->", country, "/", bank_id, "| length fixed at", len(code_right))
print("usable as a dict key ->", {code_right: "HDFC Bank, India"})

# ---- Error 5: email stored as a COLLECTION OF CHARACTERS ----
print("\n--- Error 5: list of characters for an email address ---")
email_wrong = list("r.naik@example.com")
email_right = "r.naik@example.com"               # correction: str
print("wrong:", email_wrong)
print("right:", email_right)
print("len both = 18 characters, but only the str behaves like an address:")
print("  str  .split('@') ->", email_right.split("@"))
print("  str  domain      ->", email_right.split("@")[1])
print("  str  .upper()    ->", email_right.upper())
for op, obj in (("split", email_wrong), ("upper", email_wrong)):
    try:
        getattr(obj, op)()
    except AttributeError as e:
        print("  list ." + op + "() -> AttributeError:", e)
try:
    print(set([email_wrong]))                    # dedup a column of emails
except TypeError as e:
    print("  set(list of char-lists) -> TypeError:", e)
print("  equality with the real address ->", email_wrong == email_right)
print("  printed in a report ->", f"Email: {email_wrong}")
print("  rebuilt with ''.join() ->", "".join(email_wrong) == email_right)
```

```text
--- Error 1: set for transaction history ---
entered  : [5000, 2500, 5000, 1200, 800]
as set   : {5000, 800, 2500, 1200} -> len 4
as list  : [5000, 2500, 5000, 1200, 800] -> len 5
duplicate 5000 kept by list? 2 times
TypeError: 'set' object is not subscriptable
3rd transaction from list: 5000
latest transaction       : 800

--- Error 2: tuple for name/age/city/phone/status ---
TypeError: 'tuple' object does not support item assignment
positional access is unreadable: cust_wrong[3] -> 9822011223
dict after updates: {'name': 'Riya Naik', 'age': 29, 'city': 'Margao', 'phone': '9822099887', 'status': 'Dormant'}
readable access: cust_right['phone'] -> 9822099887

--- Error 3: list for branch codes ---
list : 6 entries -> ['DEL03', 'GOA01', 'GOA01', 'GOA01', 'MUM02', 'MUM02']
set  : 3 entries -> ['DEL03', 'GOA01', 'MUM02']
after re-adding GOA01: 3 entries
membership test 'GOA01' in set -> True

--- Error 4: list for a fixed two-part banking record ---
list was corrupted: ['IN', 'XXXX9999999', 'EXTRA'] -> len 3
TypeError: 'tuple' object does not support item assignment
AttributeError: 'tuple' object has no attribute 'append'
unpacked -> IN / HDFC0001234 | length fixed at 2
usable as a dict key -> {('IN', 'HDFC0001234'): 'HDFC Bank, India'}

--- Error 5: list of characters for an email address ---
wrong: ['r', '.', 'n', 'a', 'i', 'k', '@', 'e', 'x', 'a', 'm', 'p', 'l', 'e', '.', 'c', 'o', 'm']
right: r.naik@example.com
len both = 18 characters, but only the str behaves like an address:
  str  .split('@') -> ['r.naik', 'example.com']
  str  domain      -> example.com
  str  .upper()    -> R.NAIK@EXAMPLE.COM
  list .split() -> AttributeError: 'list' object has no attribute 'split'
  list .upper() -> AttributeError: 'list' object has no attribute 'upper'
  set(list of char-lists) -> TypeError: unhashable type: 'list'
  equality with the real address -> False
  printed in a report -> Email: ['r', '.', 'n', 'a', 'i', 'k', '@', 'e', 'x', 'a', 'm', 'p', 'l', 'e', '.', 'c', 'o', 'm']
  rebuilt with ''.join() -> True
```

Read three lines of that output carefully, because each is a mark:

- `as set : {5000, 800, 2500, 1200} -> len 4` versus `as list : [...] -> len 5`. **One transaction vanished and the order changed** — exactly the two defects the bank reported.
- `list was corrupted: ['IN', 'XXXX9999999', 'EXTRA'] -> len 3`. **No exception was raised.** A two-part record became a three-part record in silence. The tuple refuses both operations loudly.
- `equality with the real address -> False`. The char-list is not merely awkward, it is **not the same value** as the address.

**Variants**

| If the question asks | Do this |
| --- | --- |
| "what will be the output of `len(set([5000, 2500, 5000]))`?" | `2` — the duplicate is removed at construction |
| "will the code raise an error or print something wrong?" | Errors 1 and 3 print wrong values silently; errors 2, 4, 5 raise `TypeError`/`AttributeError`. Say which |
| "show the error without crashing the notebook" | Wrap in `try / except TypeError as e: print(e)` |
| "predict the output of a set literal" | Give the members, never a specific order; state "sets are unordered, the display order is arbitrary" |
| "why did nothing go wrong in testing?" | Duplicate/order loss is silent data corruption — only a count or a report reveals it |

**Traps**

- Do not claim the set "raises an error" on a duplicate. `{5000, 5000}` is perfectly legal and quietly has length 1. The damage is silent.
- `len(list("r.naik@example.com"))` and `len("r.naik@example.com")` are **both 18**. Do not argue from `len`; argue from `.split("@")`, hashability and equality.
- `"".join(chars)` recovers the address, so a marker may ask "so what is the harm?" Answer: every operation needs a rebuild, the value cannot be compared, hashed, de-duplicated or printed, and the intent of the data is lost.
- `set_obj.remove(x)` raises `KeyError` when `x` is absent; `set_obj.discard(x)` does not. Use `discard` in defensive code.

**Drill**

1. Write the exception name and message for: (a) `("IN","HDFC")[0] = "US"`, (b) `{"GOA01"}[0]`, (c) `{"name":"Riya"}["city"]`, (d) `{["GOA01"]}`, (e) `"GOA01"[0] = "X"`.

<details><summary>Answer</summary>

```text
(a) TypeError: 'tuple' object does not support item assignment
(b) TypeError: 'set' object is not subscriptable
(c) KeyError: 'city'
(d) TypeError: unhashable type: 'list'
(e) TypeError: 'str' object does not support item assignment
```

</details>

## P4.4 — List operations you may be asked for

**Exam phrasings**

- "append, insert, remove and pop elements of a list"
- "display the third transaction and the latest transaction"
- "sort the deposits in descending order"
- "slice the first three and the last two elements"
- "count how many times a value appears in the list"

**Core idea.** A list is **ordered, mutable, indexable and allows duplicates**. Index from `0`; `-1` is
the last item. In a slice `[start:stop]` the **stop is excluded**. `sort()` changes the list in place and
returns `None`; `sorted()` returns a new list.

**Template**

```python
L.append(VALUE)        # add at the end
L.insert(POS, VALUE)   # add at a position
L.remove(VALUE)        # delete the FIRST matching value
L.pop()                # delete and return the last item
L.pop(POS)             # delete and return the item at POS
L.index(VALUE)         # position of the first match
L.count(VALUE)         # how many times VALUE occurs
len(L); VALUE in L
L[START:STOP]; L[-N:]; L[::STEP]; L[::-1]
L.sort(); L.sort(reverse=True); sorted(L)
sum(L); max(L); min(L)
```

**Worked**

```python
txns = [5000, 2500, 5000, 1200, 800]

txns.append(3000)                 # add at the end
print("append     :", txns)
txns.insert(0, 9999)              # add at a position
print("insert     :", txns)
txns.remove(5000)                 # remove FIRST matching value
print("remove     :", txns)
last = txns.pop()                 # remove and return last
first = txns.pop(0)               # remove and return by position
print("pop        :", txns, "| popped", last, "and", first)
print("index      :", txns.index(1200))      # position of first match
print("count      :", txns.count(5000))
print("len        :", len(txns))
print("in         :", 1200 in txns, 7777 in txns)
print("slice [1:3]:", txns[1:3])             # stop EXCLUDED
print("last two   :", txns[-2:])
print("every 2nd  :", txns[::2])
print("reversed   :", txns[::-1])
txns.sort()                                   # sorts IN PLACE, returns None
print("sort       :", txns)
txns.sort(reverse=True)
print("sort desc  :", txns)
print("sorted()   :", sorted(txns), "-> new list, original untouched")
print("sum / max  :", sum(txns), max(txns), min(txns))
```

```text
append     : [5000, 2500, 5000, 1200, 800, 3000]
insert     : [9999, 5000, 2500, 5000, 1200, 800, 3000]
remove     : [9999, 2500, 5000, 1200, 800, 3000]
pop        : [2500, 5000, 1200, 800] | popped 3000 and 9999
index      : 2
count      : 1
len        : 4
in         : True False
slice [1:3]: [5000, 1200]
last two   : [1200, 800]
every 2nd  : [2500, 1200]
reversed   : [800, 1200, 5000, 2500]
sort       : [800, 1200, 2500, 5000]
sort desc  : [5000, 2500, 1200, 800]
sorted()   : [800, 1200, 2500, 5000] -> new list, original untouched
sum / max  : 9500 5000 800
```

`remove(5000)` deleted only the **first** 5000 — which is why `count(5000)` then reports `1`, not `2`.

**Variants**

| If the question says | Use |
| --- | --- |
| "add several transactions at once" | `L.extend([2000, 4000])` or `L += [2000, 4000]` |
| "delete the item at position 2" | `del L[2]` or `L.pop(2)` |
| "empty the history" | `L.clear()` |
| "reverse the order permanently" | `L.reverse()` (in place) versus `L[::-1]` (new list) |
| "second-largest deposit" | `sorted(L, reverse=True)[1]` |
| "remove **all** occurrences of a value" | `L = [x for x in L if x != VALUE]` |
| "do not use `sum()`" (pre-midterm Exercise 2) | `total = 0` then `for x in L: total += x` |
| "position of the largest deposit" | `L.index(max(L))` |
| "keep only deposits above 1,00,000" | `[x for x in L if x > 100000]` |

**Traps**

- `print(L.sort())` prints `None`. Sort first, print after — or use `sorted(L)`.
- `L.remove(x)` raises `ValueError: list.remove(x): x not in list` when absent; test with `if x in L` first.
- `L[1:3]` returns 2 items, not 3 — stop is excluded.
- `L2 = L` does **not** copy; both names point to the same list. Use `L2 = L.copy()` or `L[:]`.
- `L.index(x)` finds only the first occurrence.

**Drill**

1. From `deposits = [45000, 125000, 78000, 210000, 95000, 165000]` (pre-midterm Exercise 2): print the number of deposits above Rs. 1,50,000, the total **without** `sum()`, the average, and the list sorted descending.

<details><summary>Answer</summary>

```python
deposits = [45000, 125000, 78000, 210000, 95000, 165000]
total = 0
large = 0
for d in deposits:
    total += d                       # build the total inside the loop
    if d > 150000:
        large += 1
print("large deposits:", large)
print("total         :", total)
print("average       :", total / len(deposits))
print("sorted desc   :", sorted(deposits, reverse=True))
```

```text
large deposits: 2
total         : 718000
average       : 119666.66666666667
sorted desc   : [210000, 165000, 125000, 95000, 78000, 45000]
```

</details>

## P4.5 — Tuple operations and immutability

**Exam phrasings**

- "unpack the tuple into separate variables"
- "what happens if you try to change an element of a tuple"
- "create a tuple with a single element"
- "why is a tuple suitable for a fixed two-part banking record"
- "count the occurrences of a value in a tuple"

**Core idea.** A tuple is **ordered, indexable and immutable**. Everything a list can do *without
changing itself*, a tuple can do: index, slice, `len`, `in`, `count`, `index`, unpack. Everything that
mutates — `append`, `remove`, `sort`, item assignment — is unavailable. Because it cannot change, it is
**hashable**, so a tuple can be a dictionary key or a set member.

**Template**

```python
T = (A, B)
T[0]; T[-1]; T[0:1]; len(T); VALUE in T
T.count(VALUE); T.index(VALUE)
a, b = T               # unpack - the number of names must match len(T)
SINGLE = (VALUE,)      # trailing comma REQUIRED
list(T)                # convert to a list if it must be edited
```

**Worked**

```python
bank_code = ("IN", "HDFC0001234")

print("index 0        :", bank_code[0])
print("index -1       :", bank_code[-1])
print("slice [0:1]    :", bank_code[0:1])
print("len            :", len(bank_code))
print("in             :", "IN" in bank_code)
country, bank_id = bank_code            # unpacking - count must match exactly
print("unpacked       :", country, bank_id)
try:
    a, b, c = bank_code
except ValueError as e:
    print("ValueError     :", e)
print("count          :", ("IN", "US", "IN").count("IN"))
print("index of 'US'  :", ("IN", "US", "IN").index("US"))

# immutability
try:
    bank_code[0] = "US"
except TypeError as e:
    print("TypeError      :", e)
bank_code = ("US", "CHAS0004567")       # rebinding the NAME is allowed
print("rebound        :", bank_code)

# single-element tuple needs the trailing comma
not_a_tuple = ("IN")
real_tuple = ("IN",)
print("('IN')  ->", type(not_a_tuple).__name__, repr(not_a_tuple))
print("('IN',) ->", type(real_tuple).__name__, repr(real_tuple))

# tuples are hashable -> usable as dict keys and set members
rates = {("IN", "HDFC0001234"): 6.75, ("US", "CHAS0004567"): 4.25}
print("tuple as key   :", rates[("IN", "HDFC0001234")])
print("set of tuples  :", len({("IN", "HDFC0001234"), ("IN", "HDFC0001234")}))
try:
    {["IN", "HDFC0001234"]: 6.75}
except TypeError as e:
    print("list as key    : TypeError:", e)
```

```text
index 0        : IN
index -1       : HDFC0001234
slice [0:1]    : ('IN',)
len            : 2
in             : True
unpacked       : IN HDFC0001234
ValueError     : not enough values to unpack (expected 3, got 2)
count          : 2
index of 'US'  : 1
TypeError      : 'tuple' object does not support item assignment
rebound        : ('US', 'CHAS0004567')
('IN')  -> str 'IN'
('IN',) -> tuple ('IN',)
tuple as key   : 6.75
set of tuples  : 1
list as key    : TypeError: unhashable type: 'list'
```

**Variants**

| If the question says | Use |
| --- | --- |
| "modify the country code" | You cannot. Convert (`L = list(T)`, edit, `T = tuple(L)`) or rebind the whole tuple — and say the design should not need this |
| "return two values from a function" | `return total, gain` — Python packs them into a tuple; the caller unpacks with `a, b = f()` |
| "swap two values" | `a, b = b, a` — tuple packing/unpacking |
| "ignore the second part" | `country, _ = bank_code` |
| "join two tuples" | `T1 + T2` makes a **new** tuple; neither original changes |
| "repeat a tuple" | `("NA",) * 3` |
| "tuple of tuples for many banks" | `(("IN","HDFC0001234"), ("US","CHAS0004567"))` |

**Traps**

- `("IN")` is a **string**, not a tuple. Only the comma makes a tuple: `("IN",)`. Examiners test this.
- Immutability protects the tuple's *contents*, not the *variable name*. `bank_code = (...)` re-points the name and is legal — that is not mutation.
- A tuple containing a list is only shallow-immutable: `T = ("IN", ["a"])` allows `T[1].append("b")`. `hash(T)` then fails.
- Unpacking is strict: too few or too many names gives `ValueError: not enough values to unpack`.
- Tuples have no `.append`, `.sort`, `.remove`, `.clear`.

**Drill**

1. `joining = ("07", "2021")`. Unpack it into `month, year`, print `07/2021` with an f-string, show the error from `joining[1] = "2019"`, and use `joining` as a key in a dict of joining-month headcounts.

<details><summary>Answer</summary>

```python
joining = ("07", "2021")
month, year = joining
print(f"{month}/{year}")
try:
    joining[1] = "2019"
except TypeError as e:
    print("TypeError:", e)
headcount = {("07", "2021"): 14, ("08", "2021"): 9}
print(headcount[joining])
```

```text
07/2021
TypeError: 'tuple' object does not support item assignment
14
```

</details>

## P4.6 — Set operations and de-duplication

**Exam phrasings**

- "remove the duplicate branch codes received from different reports"
- "find the branches common to both regions"
- "which codes appear in the north list but not in the west list"
- "add a branch code to the set and show that duplicates are ignored"
- "how many unique branch codes are there"

**Core idea.** A set is **unordered, mutable, holds only unique hashable elements, and is not
indexable**. It is the right container when the question is about *membership* and *uniqueness*, never
about *sequence*.

**Template**

```python
S = {A, B, C}          # NOTE: {} alone is an empty DICT; use set() for an empty set
S.add(VALUE)           # adding an existing value changes nothing
S.discard(VALUE)       # safe remove
S.remove(VALUE)        # KeyError if missing
VALUE in S; len(S)
S1 | S2   # union         (S1.union(S2))
S1 & S2   # intersection  (S1.intersection(S2))
S1 - S2   # difference    (S1.difference(S2))
S1 ^ S2   # symmetric difference - in one set but not both
S1 <= S2  # subset
set(LIST)          # de-duplicate
sorted(S)          # print in a stable order
```

**Worked**

```python
branches = {"GOA01", "MUM02", "DEL03"}

branches.add("BLR04")                 # add one
branches.add("GOA01")                 # already present -> no change
print("after add      :", sorted(branches), "len", len(branches))
branches.discard("DEL03")             # safe remove
branches.discard("ZZZ99")             # missing key -> no error
print("after discard  :", sorted(branches))
try:
    branches.remove("ZZZ99")          # remove() raises if missing
except KeyError as e:
    print("KeyError       :", e)
print("membership     :", "GOA01" in branches, "| fast, no scan")
print("len            :", len(branches))
try:
    branches[0]                       # sets are NOT indexable
except TypeError as e:
    print("TypeError      :", e)

north = {"DEL03", "CHD05", "MUM02"}
west  = {"GOA01", "MUM02", "AHM06"}
print("union        | :", sorted(north | west))
print("intersection & :", sorted(north & west))
print("difference   - :", sorted(north - west))
print("sym.diff     ^ :", sorted(north ^ west))
print("method form    :", sorted(north.union(west)) == sorted(north | west))
print("subset <=      :", {"MUM02"} <= north)

reported = ["GOA01", "MUM02", "GOA01", "DEL03", "MUM02", "GOA01"]
print("unique codes   :", sorted(set(reported)), "from", len(reported), "rows")
print("how many unique:", len(set(reported)))
# iterate a set in a printable order
for code in sorted(set(reported)):
    print("  branch", code)
```

```text
after add      : ['BLR04', 'DEL03', 'GOA01', 'MUM02'] len 4
after discard  : ['BLR04', 'GOA01', 'MUM02']
KeyError       : 'ZZZ99'
membership     : True | fast, no scan
len            : 3
TypeError      : 'set' object is not subscriptable
union        | : ['AHM06', 'CHD05', 'DEL03', 'GOA01', 'MUM02']
intersection & : ['MUM02']
difference   - : ['CHD05', 'DEL03']
sym.diff     ^ : ['AHM06', 'CHD05', 'DEL03', 'GOA01']
method form    : True
subset <=      : True
unique codes   : ['DEL03', 'GOA01', 'MUM02'] from 6 rows
how many unique: 3
  branch DEL03
  branch GOA01
  branch MUM02
```

**Variants**

| If the question says | Use |
| --- | --- |
| "branches in both regions" | `north & west` |
| "branches in either region" | `north \| west` (or `north.union(west)`) |
| "branches only in the north" | `north - west` |
| "branches in exactly one region" | `north ^ west` |
| "are all Goa branches also in the west list?" | `goa <= west` |
| "add every code from the new report" | `S.update(new_list)` |
| "an empty set" | `set()` — `{}` creates an empty dict |
| "count unique values in a column" | `len(set(values))` |
| "unique values, in the original order" | `list(dict.fromkeys(values))` — see P4.9 |

**Traps**

- `{}` is an **empty dict**. `type({})` is `dict`; `type(set())` is `set`.
- Sets cannot be indexed or sliced: no `S[0]`, no `S[1:3]`, no `S.sort()`. To print in order use `sorted(S)`.
- Set members must be hashable — a list inside a set raises `TypeError: unhashable type: 'list'`.
- `set()` on a list of numbers loses the original order permanently. Keep the list as the record of truth and derive the set.
- Set display order can differ between runs for strings. Never write "the output will be `{'GOA01', 'MUM02'}`" as if the order were guaranteed.

**Drill**

1. `reported = ["FIN","OPS","FIN","HR","OPS","FIN"]`. Print the number of unique departments, the sorted unique list, whether "IT" is present, and the departments present in `reported` but not in `{"FIN","IT"}`.

<details><summary>Answer</summary>

```python
reported = ["FIN","OPS","FIN","HR","OPS","FIN"]
depts = set(reported)
print(len(depts))
print(sorted(depts))
print("IT" in depts)
print(sorted(depts - {"FIN", "IT"}))
```

```text
3
['FIN', 'HR', 'OPS']
False
['HR', 'OPS']
```

</details>

## P4.7 — Dictionary operations and nested records

**Exam phrasings**

- "store each customer's name, age, city, phone number and account status"
- "update the city, phone number and account status independently"
- "print all keys and values of the dictionary"
- "iterate over the dictionary using items()"
- "access a key that may be missing without causing an error"

**Core idea.** A dict stores **named key-value pairs**. Keys are unique and must be **hashable**; values
can be anything, including other dicts and lists. It is **mutable**, so any single field can be updated
without touching the rest. Since Python 3.7 a dict keeps **insertion order**, but you should still treat
lookup-by-key, not position, as the way in.

**Template**

```python
D = {"KEY1": V1, "KEY2": V2}
D["KEY1"]                    # KeyError if missing
D.get("KEY", DEFAULT)        # no error; returns None or DEFAULT
D["NEWKEY"] = VALUE          # add
D["KEY1"] = NEWVALUE         # update
D.update({"K": V, "K2": V2}) # update several
D.pop("KEY")                 # remove and return
del D["KEY"]                 # remove
"KEY" in D                   # tests KEYS, not values
len(D); list(D.keys()); list(D.values()); list(D.items())
for k, v in D.items(): ...
D["OUTER"]["INNER"]          # nested
```

**Worked**

```python
cust = {"name": "Riya Naik", "age": 29, "city": "Panaji",
        "phone": "9822011223", "status": "Active"}

print("[] access      :", cust["city"])
try:
    cust["email"]                          # missing key with []
except KeyError as e:
    print("KeyError       :", e)
print(".get() missing :", cust.get("email"))                  # None, no crash
print(".get() default :", cust.get("email", "not on file"))

cust["email"] = "r.naik@example.com"       # add a new key
cust["city"] = "Margao"                    # update an existing key
cust.update({"phone": "9822099887", "status": "Dormant"})     # update many
print("after edits    :", cust)
removed = cust.pop("email")                # remove and return
print("pop            :", removed, "| keys now", len(cust))
del cust["age"]                            # remove, returns nothing
print("del            :", list(cust.keys()))
print("in tests KEYS  :", "city" in cust, "| 'Margao' in cust ->", "Margao" in cust)
print("keys           :", list(cust.keys()))
print("values         :", list(cust.values()))
print("items          :", list(cust.items())[:2], "...")

for field, value in cust.items():
    print(f"  {field:<8}: {value}")

# nested dict: one dict per customer, keyed by customer id
customers = {
    "C001": {"name": "Riya Naik",  "city": "Panaji", "status": "Active"},
    "C002": {"name": "Karan Shah", "city": "Mumbai", "status": "Dormant"},
}
print("nested read    :", customers["C001"]["city"])
customers["C002"]["status"] = "Active"     # update one field of one customer
print("nested update  :", customers["C002"])
for cid, rec in customers.items():
    print(f"  {cid} {rec['name']:<12} {rec['city']:<8} {rec['status']}")
```

```text
[] access      : Panaji
KeyError       : 'email'
.get() missing : None
.get() default : not on file
after edits    : {'name': 'Riya Naik', 'age': 29, 'city': 'Margao', 'phone': '9822099887', 'status': 'Dormant', 'email': 'r.naik@example.com'}
pop            : r.naik@example.com | keys now 5
del            : ['name', 'city', 'phone', 'status']
in tests KEYS  : True | 'Margao' in cust -> False
keys           : ['name', 'city', 'phone', 'status']
values         : ['Riya Naik', 'Margao', '9822099887', 'Dormant']
items          : [('name', 'Riya Naik'), ('city', 'Margao')] ...
  name    : Riya Naik
  city    : Margao
  phone   : 9822099887
  status  : Dormant
nested read    : Panaji
nested update  : {'name': 'Karan Shah', 'city': 'Mumbai', 'status': 'Active'}
  C001 Riya Naik    Panaji   Active
  C002 Karan Shah   Mumbai   Active
```

**Variants**

| If the question says | Use |
| --- | --- |
| "print only the field names" | `for k in D:` or `for k in D.keys():` |
| "print only the values" | `for v in D.values():` |
| "field may be absent — do not crash" | `D.get("email", "NA")` |
| "increase the balance by 500" | `D["balance"] = D.get("balance", 0) + 500` |
| "count occurrences into a dict" | `counts[k] = counts.get(k, 0) + 1` |
| "build a dict from two lists" | `dict(zip(keys, values))` (P4.9) |
| "many customers, keep onboarding order" | list of dicts: `[{...}, {...}]` |
| "find a customer by id instantly" | dict of dicts keyed by id: `customers[cid]` |
| "sort customers by name for a report" | `sorted(customers.items(), key=lambda kv: kv[1]["name"])` |
| "remove every dormant customer" | `{k: v for k, v in customers.items() if v["status"] != "Dormant"}` |

**Traps**

- `"Margao" in cust` is `False` — `in` searches **keys**. For values use `"Margao" in cust.values()`.
- `D["missing"]` raises `KeyError`; `.get()` returns `None`. Choose deliberately and say which you used and why.
- Keys must be hashable: a list key raises `TypeError: unhashable type: 'list'`. A tuple key is fine.
- Writing a key twice in a literal keeps only the last value — no warning.
- `D2 = D` shares the same dict. Use `D.copy()`, and `copy.deepcopy(D)` when the values are themselves dicts or lists.
- Do not add or delete keys while iterating `D.items()` — iterate over `list(D.items())` instead.

**Drill**

1. Build `emp = {"name": "Dev Rao", "grade": "M2", "status": "Probation"}`. Promote to grade `M3`, confirm the employee, add a `dept` of `"OPS"`, print `department` safely (it does not exist), then print every field with `.items()`.

<details><summary>Answer</summary>

```python
emp = {"name": "Dev Rao", "grade": "M2", "status": "Probation"}
emp["grade"] = "M3"
emp["status"] = "Confirmed"
emp["dept"] = "OPS"
print(emp.get("department", "key not present"))
for k, v in emp.items():
    print(f"{k:<8}: {v}")
```

```text
key not present
name    : Dev Rao
grade   : M3
status  : Confirmed
dept    : OPS
```

</details>

## P4.8 — Strings are single values, not collections of characters

**Exam phrasings**

- "email addresses were stored as collections of individual characters rather than as a single value"
- "extract the domain part of the email address"
- "remove extra spaces and convert the name to title case"
- "why is a string preferred over a list of characters"
- "show that a string cannot be modified in place"

**Core idea.** A `str` is an **immutable, ordered, indexable sequence of characters that behaves as one
value**. It is already a sequence, so splitting it into a list of characters adds nothing and removes
every string method. Cleaning methods **return a new string** — you must assign the result.

**Template**

```python
S[0]; S[-1]; S[START:STOP]; len(S); SUB in S
S.strip(); S.lower(); S.upper(); S.title()
S.split(SEP); S.replace(OLD, NEW)
S.startswith(P); S.endswith(P); S.find(SUB); S.count(SUB)
S.isdigit(); S.isalpha()
SEP.join(LIST_OF_STRINGS)
f"{NAME:<12}{VALUE:>10,.2f}"
```

**Worked**

```python
email = "  R.Naik@Example.COM  "

clean = email.strip().lower()             # chain: cleaning returns a NEW string
print("raw       :", repr(email))
print("strip+lower:", repr(clean))
print("index [0] :", clean[0], "| last", clean[-1])
print("slice [:6]:", clean[:6])
print("len       :", len(clean))
print("split '@' :", clean.split("@"))
user, domain = clean.split("@")
print("unpacked  :", user, "|", domain)
print("in test   :", "@" in clean, "| endswith", clean.endswith(".com"))
print("find '@'  :", clean.find("@"), "| count '.'", clean.count("."))
print("replace   :", clean.replace("example.com", "bank.in"))
print("title     :", " riya   naik ".strip().title())
print("upper     :", clean.upper())
print("isdigit   :", "9822011223".isdigit())
print("join      :", ", ".join(["GOA01", "MUM02", "DEL03"]))

# strings are immutable
try:
    clean[0] = "X"
except TypeError as e:
    print("TypeError :", e)

# f-strings for the report line
name, city, bal = "Riya Naik", "Margao", 152340.5
print(f"{name:<12}{city:<10}Rs. {bal:>12,.2f}")
print(f"Customer {name} ({city}) holds Rs. {bal:.2f}")
```

```text
raw       : '  R.Naik@Example.COM  '
strip+lower: 'r.naik@example.com'
index [0] : r | last m
slice [:6]: r.naik
len       : 18
split '@' : ['r.naik', 'example.com']
unpacked  : r.naik | example.com
in test   : True | endswith True
find '@'  : 6 | count '.' 2
replace   : r.naik@bank.in
title     : Riya   Naik
upper     : R.NAIK@EXAMPLE.COM
isdigit   : True
join      : GOA01, MUM02, DEL03
TypeError : 'str' object does not support item assignment
Riya Naik   Margao    Rs.   152,340.50
Customer Riya Naik (Margao) holds Rs. 152340.50
```

**Variants**

| If the question says | Use |
| --- | --- |
| "the user part of the email" | `email.split("@")[0]` |
| "the domain of the email" | `email.split("@")[1]` |
| "check the address is valid-ish" | `"@" in email and email.count("@") == 1` |
| "remove extra spaces from each name" | `name.strip()` — and `" ".join(name.split())` for internal runs of spaces |
| "case-insensitive keyword check" | `if "excellent" in feedback.lower():` |
| "mask the account number" | `"X" * 8 + acc[-4:]` |
| "first letter of each word" | `name.title()`, or `"".join(w[0] for w in name.split())` for initials |
| "a string is needed from a list of characters" | `"".join(chars)` |
| "display to two decimals" | `f"Rs. {amount:.2f}"` |

**Traps**

- `email.strip()` alone does nothing unless you assign it: `email = email.strip()`. All string methods return new strings.
- `.title()` does not collapse internal spaces: `" riya   naik ".strip().title()` gives `Riya   Naik`. Use `" ".join(s.split()).title()` if single spacing is required.
- `str` is immutable — `S[0] = "X"` raises `TypeError: 'str' object does not support item assignment`. Build a new string instead.
- `len("GOA01")` is 5 (characters) but `len(["GOA01"])` is 1 (one code). Be clear which you are counting.
- `"9" > "10"` is `True` — strings compare character by character. Convert to `int` before numeric comparison.
- `.split()` with no argument splits on any run of whitespace; `.split(",")` splits on commas and keeps empties.

**Drill**

1. From `raw = "  DEV rao ; d.rao@Bank.IN  "`, produce the name in title case and the email in lower case, then print `Dev Rao <d.rao@bank.in>`.

<details><summary>Answer</summary>

```python
raw = "  DEV rao ; d.rao@Bank.IN  "
name_part, email_part = raw.split(";")
name = " ".join(name_part.split()).title()
email = email_part.strip().lower()
print(f"{name} <{email}>")
```

```text
Dev Rao <d.rao@bank.in>
```

</details>

## P4.9 — Convert between containers

**Exam phrasings**

- "convert the list of branch codes into a set"
- "remove duplicates while preserving the original order"
- "combine the list of field names and the list of values into a dictionary"
- "join the characters back into a single string"
- "convert the tuple into a list so that it can be modified"

**Core idea.** Every conversion is the constructor named after the target type: `list(x)`, `tuple(x)`,
`set(x)`, `dict(pairs)`, `"".join(strings)`. Conversions **lose** whatever the target type cannot hold:
`set()` loses order and duplicates, `dict()` loses duplicate keys.

**Template**

```python
set(LIST)                      # dedup, ORDER LOST
list(dict.fromkeys(LIST))      # dedup, ORDER KEPT   <- prefer this in reports
sorted(set(LIST))              # dedup, sorted order
tuple(LIST); list(TUPLE)
"".join(CHARS); SEP.join(STRINGS)
"A,B,C".split(",")
dict(zip(KEYS, VALUES))
list(D.items()); list(D.keys()); list(D.values()); list(D)
```

**Worked**

```python
reported = ["GOA01", "MUM02", "GOA01", "DEL03", "MUM02", "GOA01"]

print("list -> set        :", set(reported) == {"GOA01", "MUM02", "DEL03"}, len(set(reported)))
print("list(set(x))       :", list(set(reported)), "<- ORDER IS ARBITRARY")
print("dedup, keep order  :", list(dict.fromkeys(reported)))
print("dedup + sorted     :", sorted(set(reported)))

nums = [5000, 2500, 5000, 1200]
print("list -> tuple      :", tuple(nums))
print("tuple -> list      :", list(("IN", "HDFC0001234")))
print("set -> list        :", sorted(set(nums)))

chars = list("r.naik@example.com")
print("chars -> str       :", "".join(chars))
print("str -> chars       :", list("GOA01"))
print("str -> list of vals:", "GOA01,MUM02,DEL03".split(","))

keys = ["name", "age", "city", "phone", "status"]
vals = ["Riya Naik", 29, "Panaji", "9822011223", "Active"]
rec = dict(zip(keys, vals))                 # tuple/list record -> dict record
print("zip -> dict        :", rec)
print("dict -> items list :", list(rec.items())[:3], "...")
print("dict -> keys list  :", list(rec))     # iterating a dict gives its keys
print("dict -> values     :", list(rec.values()))
print("items -> dict again:", dict(list(rec.items())) == rec)
print("len(str) vs len(list):", len("GOA01"), len(["GOA01"]))
```

```text
list -> set        : True 3
list(set(x))       : ['MUM02', 'DEL03', 'GOA01'] <- ORDER IS ARBITRARY
dedup, keep order  : ['GOA01', 'MUM02', 'DEL03']
dedup + sorted     : ['DEL03', 'GOA01', 'MUM02']
list -> tuple      : (5000, 2500, 5000, 1200)
tuple -> list      : ['IN', 'HDFC0001234']
set -> list        : [1200, 2500, 5000]
chars -> str       : r.naik@example.com
str -> chars       : ['G', 'O', 'A', '0', '1']
str -> list of vals: ['GOA01', 'MUM02', 'DEL03']
zip -> dict        : {'name': 'Riya Naik', 'age': 29, 'city': 'Panaji', 'phone': '9822011223', 'status': 'Active'}
dict -> items list : [('name', 'Riya Naik'), ('age', 29), ('city', 'Panaji')] ...
dict -> keys list  : ['name', 'age', 'city', 'phone', 'status']
dict -> values     : ['Riya Naik', 29, 'Panaji', '9822011223', 'Active']
items -> dict again: True
len(str) vs len(list): 5 1
```

**The `list(set(x))` line printed `['MUM02', 'DEL03', 'GOA01']` on this run and will print a different
order on another run.** That is why `list(dict.fromkeys(x))` — which keeps first-seen order — is the
answer to "remove duplicates while preserving the original order", and `sorted(set(x))` is the answer when
a fixed, presentable order is wanted.

`dict(zip(keys, values))` is the mechanical repair for error 2 of the design critique: it turns the
analyst's positional tuple into a named record in one line.

**Variants**

| If the question says | Use |
| --- | --- |
| "de-duplicate but keep the first occurrence order" | `list(dict.fromkeys(L))` |
| "de-duplicate and sort" | `sorted(set(L))` |
| "make the fixed record editable for a one-off correction" | `L = list(T)`, edit, `T = tuple(L)` |
| "turn the positional record into a named one" | `dict(zip(FIELD_NAMES, RECORD))` |
| "convert a dict back into two lists" | `list(D.keys()), list(D.values())` |
| "pair up two lists as (code, name) pairs" | `list(zip(codes, names))` — a list of tuples |
| "build a dict with the same default for all keys" | `dict.fromkeys(L, 0)` |
| "join codes for a report line" | `", ".join(sorted(set(L)))` |
| "count occurrences of each code" | `{c: L.count(c) for c in set(L)}` |

**Traps**

- `list(set(x))` is the single most common wrong answer to "remove duplicates keeping order". It removes duplicates **and** scrambles the order.
- `dict.fromkeys(L)` gives a dict whose values are all `None`; wrap it in `list(...)` to get the de-duplicated list of keys.
- `set()` on unhashable items fails: `set([["a"]])` raises `TypeError: unhashable type: 'list'`.
- `zip()` stops at the shorter list — silently dropping fields. Check `len(keys) == len(values)` first.
- `tuple(list)` copies; it does not make the inner objects immutable.
- `str(list_of_chars)` produces the literal text `"['r', '.', ...]"`. Use `"".join(...)`.

**Drill**

1. `codes = ["OPS","FIN","OPS","HR","FIN","OPS"]`. Produce: (a) the de-duplicated list in original order, (b) the sorted unique list, (c) a dict of code → count, (d) a single comma-separated string of unique codes.

<details><summary>Answer</summary>

```python
codes = ["OPS","FIN","OPS","HR","FIN","OPS"]
print(list(dict.fromkeys(codes)))
print(sorted(set(codes)))
print({c: codes.count(c) for c in dict.fromkeys(codes)})
print(", ".join(sorted(set(codes))))
```

```text
['OPS', 'FIN', 'HR']
['FIN', 'HR', 'OPS']
{'OPS': 3, 'FIN': 2, 'HR': 1}
FIN, HR, OPS
```

</details>

## P4.10 — Build the corrected dict-of-records store

**Exam phrasings**

- "suggest an appropriate corrected structure for the whole application"
- "redesign the customer-onboarding data structure"
- "store many customers so that any customer can be found by customer id"
- "write the corrected code for the customer record"
- "show how a new transaction is added to a customer's history"

**Core idea.** One record = one **dict**. Inside that dict, each field uses the container its own nature
demands (`str` for single values, `tuple` for fixed pairs, `list` for ordered histories). Many records =
a **list of dicts** when order matters, or a **dict of dicts keyed by id** when lookup matters. Say both
options in the exam and name the trade-off — that is the sentence that distinguishes a full-mark answer.

| Requirement | Structure | Why |
| --- | --- | --- |
| One customer with named, updatable fields | `dict` | named keys, mutable per field |
| An ordered history inside the record | `list` value | ordered, duplicates kept, growable |
| A fixed pair inside the record | `tuple` value | immutable, fixed length |
| Many customers, onboarding order matters, whole-table scans | `list` of dicts | ordered, iterable, duplicates possible |
| Many customers, lookup by customer id | `dict` of dicts keyed by id | direct O(1) access, ids unique by construction |
| Bank-wide branch codes | `set` | unique membership, fast validation |

**Template**

```python
record = {"ID_FIELD": "...", "NAME": "...", "FIXED_PAIR": (A, B), "HISTORY": [ ... ]}
records_list = [record, ...]                          # order matters
records = {r["ID_FIELD"]: r for r in records_list}    # lookup matters
records[ID]["FIELD"] = NEW_VALUE                      # update one field
records[ID]["HISTORY"].append(NEW_ITEM)               # extend the history
```

**Worked** — the corrected design for the entire Q1 scenario:

```python
# ===== CORRECTED DESIGN FOR THE WHOLE Q1 SCENARIO =====

# One customer = one dict. Each field uses the container its own nature demands.
customer = {
    "cust_id":      "C001",                                  # str  - single value
    "name":         "Riya Naik",                             # str
    "age":          29,                                      # int
    "city":         "Panaji",                                # str  - mutable field
    "phone":        "9822011223",                            # str  - keep leading zeros
    "status":       "Active",                                # str  - mutable field
    "email":        "r.naik@example.com",                    # str  - ONE value
    "bank_code":    ("IN", "HDFC0001234"),                   # tuple - fixed 2-part record
    "transactions": [5000, 2500, 5000, 1200, 800],           # list  - ordered, duplicates
}

# Many customers, design A: a LIST of dicts (keeps onboarding order, allows scanning)
customers_list = [
    customer,
    {"cust_id": "C002", "name": "Karan Shah", "age": 41, "city": "Mumbai",
     "phone": "9811022334", "status": "Dormant", "email": "k.shah@example.com",
     "bank_code": ("IN", "ICIC0005678"), "transactions": [10000, 10000]},
]

# Many customers, design B: a DICT keyed by customer id (instant lookup by id)
customers = {c["cust_id"]: c for c in customers_list}

# Bank-level data
branch_codes = {"GOA01", "MUM02", "DEL03"}                   # set - unique membership

print("lookup by id      :", customers["C002"]["name"])
print("scan the list     :", [c["name"] for c in customers_list])

# --- the three updates the bank asked for, done independently ---
customers["C001"]["city"] = "Margao"
customers["C001"]["phone"] = "9822099887"
customers["C001"]["status"] = "Dormant"
print("after updates     :", {k: customers['C001'][k] for k in ('city','phone','status')})

# --- append a transaction: order kept, duplicate value kept ---
customers["C001"]["transactions"].append(2500)
print("transactions      :", customers["C001"]["transactions"])
print("count of 2500     :", customers["C001"]["transactions"].count(2500))
print("latest / 3rd      :", customers["C001"]["transactions"][-1],
      "/", customers["C001"]["transactions"][2])
print("total value       :", sum(customers["C001"]["transactions"]))

# --- the fixed record still refuses to change ---
try:
    customers["C001"]["bank_code"][1] = "XXXX9999999"
except TypeError as e:
    print("bank_code locked  : TypeError:", e)

# --- add a branch; duplicates cannot creep in ---
branch_codes.add("MUM02")
print("branch codes      :", sorted(branch_codes), "| unique =", len(branch_codes))

# --- report ---
print("\n{:<8}{:<12}{:<9}{:<10}{:>10}".format("ID","NAME","CITY","STATUS","TXN TOTAL"))
for cid, rec in customers.items():
    print("{:<8}{:<12}{:<9}{:<10}{:>10,.2f}".format(
        cid, rec["name"], rec["city"], rec["status"], sum(rec["transactions"])))
```

```text
lookup by id      : Karan Shah
scan the list     : ['Riya Naik', 'Karan Shah']
after updates     : {'city': 'Margao', 'phone': '9822099887', 'status': 'Dormant'}
transactions      : [5000, 2500, 5000, 1200, 800, 2500]
count of 2500     : 2
latest / 3rd      : 2500 / 5000
total value       : 17000
bank_code locked  : TypeError: 'tuple' object does not support item assignment
branch codes      : ['DEL03', 'GOA01', 'MUM02'] | unique = 3

ID      NAME        CITY     STATUS     TXN TOTAL
C001    Riya Naik   Margao   Dormant    17,000.00
C002    Karan Shah  Mumbai   Dormant    20,000.00
```

Every complaint in the question is now answered by a property of the structure: city/phone/status update
independently (dict is mutable), the transaction list keeps order and the repeated 2,500 (list), the
bank code refuses to change (tuple is immutable), branch codes cannot duplicate (set), and the email is
one value with working string methods (str).

**Variants**

| If the question says | Change to |
| --- | --- |
| "each transaction has a date, type and amount" | `"transactions": [("2026-04-01", "CR", 5000), ("2026-04-03", "DR", 1200)]` — list of tuples: ordered history of immutable entries |
| "transactions need named fields too" | `[{"date": ..., "type": ..., "amount": ...}, ...]` — list of dicts |
| "print all dormant customers" | `[c["name"] for c in customers.values() if c["status"] == "Dormant"]` |
| "total transaction value per customer" | `{cid: sum(r["transactions"]) for cid, r in customers.items()}` |
| "validate the branch before onboarding" | `if branch in branch_codes:` — set membership |
| "delete a closed account" | `del customers["C002"]` or `customers.pop("C002")` |
| "the data will later go into pandas" | `pd.DataFrame(customers_list)` — a list of dicts is exactly a DataFrame's row form |

**Traps**

- Do not nest a mutable list inside a tuple to "protect" it. `("IN", [1,2])` is not immutable and is not hashable.
- `customers = {c["cust_id"]: c for c in customers_list}` shares the same dict objects, so an update through either name is visible in both. That is usually what you want here — but say so.
- Customer id must be a `str` (`"C001"`), not an `int`: it has a prefix and leading zeros carry meaning.
- Keep age as `int` (arithmetic) and phone as `str` (identifier). Examiners plant this too.

**Drill**

1. Add a third customer C003 (Asha Singh, 34, Pune, Active, one transaction of 7,500, bank code `("IN","SBIN0009999")`) to both structures, then print the number of customers and the grand total of all transactions.

<details><summary>Answer</summary>

Continues from the Worked script above (`customers_list` and `customers` already exist).

```python
new = {"cust_id": "C003", "name": "Asha Singh", "age": 34, "city": "Pune",
       "phone": "9800011122", "status": "Active", "email": "a.singh@example.com",
       "bank_code": ("IN", "SBIN0009999"), "transactions": [7500]}
customers_list.append(new)          # list: appended at the end, order kept
customers[new["cust_id"]] = new     # dict: inserted under its id
print("customers:", len(customers))
print("grand total:", sum(sum(r["transactions"]) for r in customers.values()))
```

```text
customers: 3
grand total: 44500
```

</details>

## P4.11 — Answer any re-skin of the design-critique question

**Exam phrasings**

- "a hospital is developing a patient-admission system"
- "a library is developing a catalogue management system"
- "a payroll system stores the employee's fixed joining-date pair in a list"
- "an e-commerce store has designed the following data structure"
- "evaluate the trainee's design and recommend suitable data types"

**Core idea.** The scenario changes; the five errors do not. Strip the story to its nouns, tag each noun
with the question from P4.1, and write the same table. Work in this order: (1) underline every container
the designer used, (2) underline every symptom sentence, (3) pair them up, (4) write container +
property + one line of corrected code.

**Template** — the four-line reading procedure:

```text
1. What container did they use?        set / tuple / list / list / list-of-chars
2. What does the organisation now want? order, duplicates, independent updates,
                                        readable access, uniqueness, no change, one value
3. Which property is missing?           ordered / duplicates / mutable / named keys /
                                        unique / immutable / single value
4. Name the container that has it + write the corrected literal.
```

**Worked** — a completed re-skin table, done in the exam's own two-half style:

| Scenario noun | Designer used | Missing property | Correct container |
| --- | --- | --- | --- |
| hourly pulse readings of a patient | `set` | ordered, duplicates allowed | `list` |
| patient name/age/ward/contact/status | `tuple` | mutable, named keys | `dict` |
| doctor ids on duty (repeated across shift reports) | `list` | unique membership | `set` |
| blood group letter + Rh factor (fixed clinical pair) | `list` | immutable, fixed length | `tuple` |
| patient UHID stored character by character | list of chars | single text value | `str` |

**Traps**

- The examiner may re-skin with only **three** errors, or plant **two** of the same kind. Count the symptom sentences, not the containers.
- A re-skin may invert one item: e.g. "the ward number list must retain the order in which patients were admitted" — then a `list` is **correct** and you must say so. Not every container mentioned is an error.
- Watch for a sixth planted flaw outside the five containers: a number stored as a string, or an identifier stored as an `int`. Comment on it — it is usually worth a mark.

**Drill**

Three fresh design-critique questions in the examiner's voice. Write the full answer table before opening the solution.

1. **Hospital.** *A multi-speciality hospital is developing a patient-admission system. A trainee developer has designed the initial data structure. The complete set of hourly pulse readings recorded for each patient has been stored in a set. During review, the hospital found that the sequence in which the readings were taken could not be reconstructed, and that readings of an identical value were sometimes shown only once. The trainee stored each patient's name, age, ward, contact number and admission status together in a tuple. The hospital later required that a patient's ward, contact number and admission status should be modifiable independently, and the nursing staff reported difficulty in remembering which position in the tuple held which detail. The hospital runs several duty rosters; the trainee entered all doctor identification codes in a list, including codes repeated across different shift reports. The blood group letter and the Rh factor, which together form a fixed two-part clinical identifier, were also stored in a list. Patient unique hospital identifiers such as UH20260041 were stored as collections of individual characters rather than as a single value. Evaluate the trainee's design, identify the errors and suggest appropriate corrections.* (10 marks)

2. **Library.** *A university library is computerising its catalogue. A student intern has proposed the following design. The list of ISBNs held by the library has been stored in a list, and the same ISBN received from the acquisitions report of each of the three campuses appears repeatedly, so the stock count is wrong. The dates on which a particular book was issued have been stored in a set; the librarian found that the chronological order of issues was lost and that two issues made on the same date appear only once. Each book's title, author, shelf location and availability status have been stored together in a tuple, but the library now needs to change a book's shelf location and availability status whenever it is re-shelved or returned. The three-digit ISBN registration prefix and the two-digit registration group, which form a fixed two-part registration pair, have been stored in a list. Member email addresses have been stored as collections of individual characters. Evaluate the intern's design, identify the errors and suggest appropriate corrections.* (10 marks)

3. **Payroll.** *A company is building a payroll system. A junior programmer stored the employee's joining month and joining year — a fixed two-part record that must never change — in a list, and a data-entry operator has already overwritten one such entry and appended a third value to another. The monthly salary credits of each employee have been stored in a set, with the result that the order of payments is unavailable and two months paid at an identical salary are counted once. Each employee's name, designation, department, bank account number and confirmation status have been stored in a tuple, although the company needs to revise designation, bank account number and confirmation status independently, and the payroll team cannot tell which tuple position holds which detail. All department codes have been entered in a list, repeated once for every employee belonging to that department. The employee PAN, for example ABCDE1234F, has been stored as a collection of individual characters. Evaluate the design, identify the errors and suggest appropriate corrections.* (10 marks)

<details><summary>Answer 1 — Hospital</summary>

| # | Trainee used | What goes wrong | Correct container | Property that fixes it | Corrected code |
| --- | --- | --- | --- | --- | --- |
| 1 | `set` for hourly pulse readings | unordered, so the sequence of readings cannot be reconstructed; unique-only, so two identical readings collapse into one and the count of observations is wrong | `list` | ordered, indexable, allows duplicates | `pulse_log = [78, 82, 78, 91, 78]` |
| 2 | `tuple` for name/age/ward/contact/status | immutable, so ward, contact and status cannot be modified independently; positional access (`p[2]`) is unreadable for nursing staff | `dict` | named keys, mutable per field | `patient = {"name": "Meena Patil", "age": 63, "ward": "ICU-2", "contact": "9823344556", "status": "Admitted"}` |
| 3 | `list` for doctor identification codes | duplicates from different shift reports are all retained, inflating the roster count; `in` scans the whole list | `set` | unique membership, automatic de-duplication, fast `in` | `doctors_on_duty = {"D101", "D204", "D312"}` |
| 4 | `list` for blood group + Rh factor | mutable and variable-length, so the fixed two-part clinical identifier can be silently overwritten or extended — a clinical safety risk; also unhashable | `tuple` | immutable, fixed length, hashable, unpackable | `blood = ("O", "+ve")` |
| 5 | list of characters for the UHID | the identifier is no longer one value: string methods raise `AttributeError`, it cannot be compared to a real UHID or placed in a set, and it prints as a character list | `str` | a single immutable text value with all string methods | `uhid = "UH20260041"` |

```python
# Corrected structure - hospital admissions
patient = {
    "uhid":     "UH20260041",                      # str  - one value, not characters
    "name":     "Meena Patil",                     # str
    "age":      63,                                # int
    "ward":     "ICU-2",                           # str  - must be updatable
    "contact":  "9823344556",                      # str  - must be updatable
    "status":   "Admitted",                        # str  - must be updatable
    "blood":    ("O", "+ve"),                      # tuple - fixed two-part identifier
    "pulse_log": [78, 82, 78, 91, 78],             # list  - ordered, repeats are real
}
doctors_on_duty = {"D101", "D204", "D101", "D312"} # set   - unique membership

patient["ward"] = "General-5"                      # transfer the patient
patient["status"] = "Discharged"
patient["pulse_log"].append(76)
print("ward/status :", patient["ward"], "/", patient["status"])
print("pulse log   :", patient["pulse_log"], "| 78 seen", patient["pulse_log"].count(78), "times")
print("3rd reading :", patient["pulse_log"][2], "| latest:", patient["pulse_log"][-1])
print("unique docs :", sorted(doctors_on_duty), "->", len(doctors_on_duty))
try:
    patient["blood"][1] = "-ve"
except TypeError as e:
    print("blood locked: TypeError:", e)
print("uhid len    :", len(patient["uhid"]), "| prefix:", patient["uhid"][:2])
```

```text
ward/status : General-5 / Discharged
pulse log   : [78, 82, 78, 91, 78, 76] | 78 seen 3 times
3rd reading : 78 | latest: 76
unique docs : ['D101', 'D204', 'D312'] -> 3
blood locked: TypeError: 'tuple' object does not support item assignment
uhid len    : 10 | prefix: UH
```

</details>

<details><summary>Answer 2 — Library</summary>

| # | Intern used | What goes wrong | Correct container | Property that fixes it | Corrected code |
| --- | --- | --- | --- | --- | --- |
| 1 | `list` for the ISBNs held | duplicates from three campus acquisition reports are all kept, so the stock count is overstated | `set` | unique membership, de-duplication on insertion | `catalogue_isbns = {"9788173711466", "9780143028499"}` |
| 2 | `set` for the issue dates of a book | unordered, so the chronological order of issues is lost; unique-only, so two issues on the same date are counted once | `list` | ordered, indexable, allows duplicates | `issue_dates = ["2026-01-04", "2026-02-11", "2026-02-11"]` |
| 3 | `tuple` for title/author/shelf/status | immutable, so shelf location and availability status cannot be changed on re-shelving or return; positional access is unreadable | `dict` | named keys, mutable per field | `book = {"title": "The Namesake", "author": "Jhumpa Lahiri", "shelf": "F-12", "status": "Issued"}` |
| 4 | `list` for the ISBN registration prefix + group | mutable and variable-length, so a fixed two-part registration pair can be altered or extended silently; unhashable, so it cannot key a registry | `tuple` | immutable, fixed length, hashable | `registrant = ("978", "81")` |
| 5 | list of characters for member emails | the address is no longer one value: `.split("@")`, `.lower()`, `.strip()` raise `AttributeError`, and the address cannot be de-duplicated or compared | `str` | one immutable text value with the string method set | `email = "m.rao@example.com"` |

```python
# Corrected structure - library catalogue
book = {
    "isbn":       "9788173711466",                     # str
    "title":      "The Namesake",                      # str
    "author":     "Jhumpa Lahiri",                      # str
    "shelf":      "F-12",                              # str  - must be updatable
    "status":     "Issued",                            # str  - must be updatable
    "registrant": ("978", "81"),                       # tuple - fixed two-part prefix
    "issue_dates": ["2026-01-04", "2026-02-11",        # list  - ordered, repeats real
                    "2026-02-11", "2026-03-02"],
}
catalogue_isbns = {"9788173711466", "9780143028499",    # set - unique titles held
                   "9788173711466", "9789351365626"}

book["shelf"] = "F-03"
book["status"] = "Available"
book["issue_dates"].append("2026-03-19")
print("shelf/status :", book["shelf"], "/", book["status"])
print("issue dates  :", book["issue_dates"])
print("issued on 2026-02-11 twice? ->", book["issue_dates"].count("2026-02-11"))
print("first / last :", book["issue_dates"][0], "/", book["issue_dates"][-1])
print("unique isbns :", len(catalogue_isbns), "of 4 report rows")
print("in catalogue :", "9788173711466" in catalogue_isbns)
try:
    book["registrant"][0] = "979"
except TypeError as e:
    print("prefix locked: TypeError:", e)
```

```text
shelf/status : F-03 / Available
issue dates  : ['2026-01-04', '2026-02-11', '2026-02-11', '2026-03-02', '2026-03-19']
issued on 2026-02-11 twice? -> 2
first / last : 2026-01-04 / 2026-03-19
unique isbns : 3 of 4 report rows
in catalogue : True
prefix locked: TypeError: 'tuple' object does not support item assignment
```

</details>

<details><summary>Answer 3 — Payroll</summary>

| # | Programmer used | What goes wrong | Correct container | Property that fixes it | Corrected code |
| --- | --- | --- | --- | --- | --- |
| 1 | `list` for joining month + year | mutable and variable-length, which is exactly how one entry was overwritten and another grew a third value — a fixed record was corrupted with no error raised | `tuple` | immutable, fixed length, unpackable, hashable | `joining = ("07", "2021")` |
| 2 | `set` for monthly salary credits | unordered, so the order of payments is unavailable; unique-only, so two months paid at an identical salary are counted once and the total is understated | `list` | ordered, indexable, allows duplicates | `credits = [58000, 58000, 61500]` |
| 3 | `tuple` for name/designation/department/account/status | immutable, so designation, bank account and confirmation status cannot be revised independently; positional access is unreadable for the payroll team | `dict` | named keys, mutable per field | `employee = {"name": "Dev Rao", "grade": "M2", "dept": "OPS", "bank_acc": "0051234567890", "status": "Probation"}` |
| 4 | `list` for department codes | one repeat per employee, so the department master is full of duplicates and any count of departments is wrong | `set` | unique membership, fast `in` validation | `dept_codes = {"FIN", "OPS", "HR"}` |
| 5 | list of characters for the PAN | the PAN stops being one value: `len()` counts characters, `.upper()`/`.startswith()` raise `AttributeError`, and it cannot be used as a dict key or de-duplicated | `str` | single immutable text value | `pan = "ABCDE1234F"` |

```python
# Corrected structure - payroll
employee = {
    "emp_id":   "E2041",                                # str
    "name":     "Dev Rao",                              # str
    "pan":      "ABCDE1234F",                           # str  - one value
    "grade":    "M2",                                   # str  - must be updatable
    "bank_acc": "0051234567890",                        # str  - must be updatable
    "status":   "Confirmed",                            # str  - must be updatable
    "joining":  ("07", "2021"),                         # tuple - fixed (month, year)
    "credits":  [58000, 58000, 61500, 61500, 61500],    # list  - ordered, repeats real
}
dept_codes = {"FIN", "OPS", "FIN", "HR", "OPS"}         # set - unique departments

employee["grade"] = "M3"
employee["bank_acc"] = "0059876543210"
employee["credits"].append(64000)
print("grade / acc :", employee["grade"], "/", employee["bank_acc"])
print("credits     :", employee["credits"])
print("61500 paid  :", employee["credits"].count(61500), "times")
print("total paid  :", sum(employee["credits"]))
print("latest      :", employee["credits"][-1])
month, year = employee["joining"]
print("joined      :", month, "/", year)
try:
    employee["joining"][1] = "2019"
except TypeError as e:
    print("joining locked: TypeError:", e)
print("departments :", sorted(dept_codes), "->", len(dept_codes))
print("pan check   :", len(employee["pan"]) == 10, employee["pan"][:5])
```

```text
grade / acc : M3 / 0059876543210
credits     : [58000, 58000, 61500, 61500, 61500, 64000]
61500 paid  : 3 times
total paid  : 364500
latest      : 64000
joined      : 07 / 2021
joining locked: TypeError: 'tuple' object does not support item assignment
departments : ['FIN', 'HR', 'OPS'] -> 3
pan check   : True ABCDE
```

Extra mark available: the bank account number is stored as a `str`, which is correct — leading zeros are
significant and no arithmetic is performed on it. Say so; examiners reward spotting what is *right*.

</details>

## Write-up answers

Short written answers carry marks on their own. Each one below is 2–4 sentences and contains at least one
named property.

**Difference between a list and a tuple.**
A list is mutable — elements can be added, removed or reassigned after creation (`append`, `pop`, `L[0] = x`)
— and is written with square brackets. A tuple is immutable: once created, its elements and its length
cannot change, so it is written with parentheses and supports only non-mutating operations such as
indexing, slicing, `count` and `index`. Both are ordered, indexable and allow duplicates; the practical
consequences of the difference are that a tuple is **hashable** (usable as a dictionary key or set member)
while a list is not, and that a tuple documents the intent "this record must not change".

**Why is a set unsuitable for transaction history?**
A set is an unordered collection of unique elements. Because it is unordered, the chronological sequence
of transactions is lost and no transaction can be retrieved by position — `txns[2]` raises
`TypeError: 'set' object is not subscriptable`. Because it stores only unique values, two genuine
transactions of the same amount are stored once, so both the count and the total are wrong. Transaction
history must use a list, which is ordered, indexable and allows duplicates.

**When would you prefer a dictionary over a list of lists?**
Prefer a dictionary whenever the items have **names or roles**, or when records must be looked up by a
unique identifier. In a list of lists you must remember that column 2 holds the city, so the code is
positional and unreadable and a missing field shifts every later position; with a dictionary you write
`customer["city"]`, which is self-documenting and position-independent. A dict keyed by customer id also
gives direct O(1) access to a record, whereas finding a row in a list of lists requires scanning. Use a
list of dicts only when the order of records is itself meaningful.

```python
# A list of lists: you must remember that column 2 is the city
rows = [["C001", "Riya Naik", "Panaji", "Active"],
        ["C002", "Karan Shah", "Mumbai", "Dormant"]]
print("list of lists, city of C002:", [r for r in rows if r[0] == "C002"][0][2])

# A dict of dicts: named field, direct lookup, no scan
recs = {"C001": {"name": "Riya Naik",  "city": "Panaji", "status": "Active"},
        "C002": {"name": "Karan Shah", "city": "Mumbai", "status": "Dormant"}}
print("dict of dicts, city of C002:", recs["C002"]["city"])

recs["C002"]["city"] = "Pune"                 # update one named field
print("after update               :", recs["C002"])
print("does C003 exist?           :", "C003" in recs)
print("insert a new customer      :", list({**recs, "C003": {"name": "Asha Singh"}}))
```

```text
list of lists, city of C002: Mumbai
dict of dicts, city of C002: Mumbai
after update               : {'name': 'Karan Shah', 'city': 'Pune', 'status': 'Dormant'}
does C003 exist?           : False
insert a new customer      : ['C001', 'C002', 'C003']
```

**What does "immutable" mean, and name two immutable types.**
An immutable object cannot be changed after it is created: any operation that appears to modify it in fact
returns a new object, and in-place assignment raises a `TypeError`. `tuple` and `str` are immutable (so
are `int`, `float` and `frozenset`); `list`, `dict` and `set` are mutable. Immutability is why
`("IN","HDFC0001234")[0] = "US"` raises `TypeError: 'tuple' object does not support item assignment`, and
why `email.strip()` must be assigned to take effect. Note that rebinding the variable name is not
mutation — the old object is simply abandoned.

**Why must dictionary keys be hashable?**
A dictionary (and a set) stores each entry in a bucket determined by `hash(key)`, which is what makes
lookup fast rather than a scan. If a key could change after insertion, its hash would change and the entry
would become unreachable — so only immutable, hashable objects (`str`, `int`, `float`, `tuple` of
hashables) are permitted as keys. Passing a mutable object raises `TypeError: unhashable type: 'list'`.
This is also the reason a two-part code should be a tuple, not a list, if it is ever to be used as a key.

```python
# Hashable = has a fixed hash value for life. Only hashable objects can be
# dict keys or set members, because both use the hash to find the bucket.
for obj in ["C001", 29, ("IN", "HDFC0001234"), 6.75, True]:
    print(f"hashable  {str(obj):<22} hash ok")
for obj in [["IN", "HDFC0001234"], {"a": 1}, {1, 2}]:
    try:
        hash(obj)
    except TypeError as e:
        print(f"NOT hashable {str(obj):<19} TypeError: {e}")

try:
    {["IN", "HDFC0001234"]: 6.75}        # list as a dict key
except TypeError as e:
    print("dict key  -> TypeError:", e)
try:
    {["GOA01", "MUM02"]}                 # list inside a set
except TypeError as e:
    print("set member-> TypeError:", e)

print("tuple key works :", {("IN", "HDFC0001234"): 6.75})
```

```text
hashable  C001                   hash ok
hashable  29                     hash ok
hashable  ('IN', 'HDFC0001234')  hash ok
hashable  6.75                   hash ok
hashable  True                   hash ok
NOT hashable ['IN', 'HDFC0001234'] TypeError: unhashable type: 'list'
NOT hashable {'a': 1}            TypeError: unhashable type: 'dict'
NOT hashable {1, 2}              TypeError: unhashable type: 'set'
dict key  -> TypeError: unhashable type: 'list'
set member-> TypeError: unhashable type: 'list'
tuple key works : {('IN', 'HDFC0001234'): 6.75}
```

**Why store a phone number or account number as a string rather than an integer?**
They are identifiers, not quantities: no arithmetic is ever performed on them, leading zeros are
significant and would be destroyed by `int`, and very long numbers are easier to validate and format as
text. A string also supports the operations actually needed — slicing to mask digits, `len()` to check the
digit count, `.startswith()` to identify a series.

## Chapter cheat sheet

| | `list` | `tuple` | `set` | `dict` | `str` |
| --- | --- | --- | --- | --- | --- |
| Ordered | yes (insertion) | yes | **no** | yes (insertion, 3.7+) | yes |
| Mutable | **yes** | **no** | yes (members) | **yes** | **no** |
| Duplicates | **yes** | yes | **no** | keys no, values yes | yes |
| Indexable | yes `L[0]` | yes `T[0]` | **no** | by key `D["k"]` | yes `S[0]` |
| Hashable (usable as a dict key) | no | **yes** | no | no | **yes** |
| Syntax | `[1, 2, 2]` | `(1, 2)` / `(1,)` | `{1, 2}` / `set()` | `{"k": v}` | `"text"` |
| Empty literal | `[]` | `()` | `set()` (not `{}`) | `{}` | `""` |
| Add | `append` `insert` `extend` | — | `add` `update` | `D[k]=v` `update` | `+` (new string) |
| Remove | `remove` `pop` `del` `clear` | — | `discard` `remove` `pop` | `pop` `del` | — |
| Typical banking use | transaction history, deposit amounts, daily returns, list of records | country+bank code, (month, year), (lat, lon), a posted transaction | branch codes, PIN codes served, distinct loan types | customer record, employee record, code→count tables | name, email, PAN, city, account number |
| Failure message when misused | `ValueError: list.remove(x): x not in list` | `TypeError: 'tuple' object does not support item assignment` | `TypeError: 'set' object is not subscriptable` | `KeyError: 'city'` | `TypeError: 'str' object does not support item assignment` |

```python
# Conversions
set(L)                     # dedup, ORDER LOST
list(dict.fromkeys(L))     # dedup, ORDER KEPT
sorted(set(L))             # dedup, sorted
tuple(L); list(T)          # swap list <-> tuple
"".join(chars)             # chars -> one string
"a,b,c".split(",")         # string -> list of values
dict(zip(keys, values))    # positional record -> named record
list(D.items())            # dict -> list of (key, value) tuples
```

And the one thing to write down before you start answering:

```text
The two-half rule for the design-critique question:
  CONTAINER  +  PROPERTY  =  the mark.
  set -> list   (ordered, allows duplicates)
  tuple -> dict (named keys, mutable)
  list -> set   (unique membership)
  list -> tuple (immutable, fixed length)
  chars -> str  (a single text value)
```
