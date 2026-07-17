# How to Add a New Solution — Token-Efficient Version

**NEVER read the full readme.md.** Use this prompt:

```
Read ADD_SOLUTION.md, then add this solution to readme.md.

File: src/[fileName].ts

Problem: [name]
Difficulty: [Easy/Medium/Hard]
Pattern: [pattern]
Example: [input] → [output]
```

---

## What the AI Should Do (4 targeted edits only)

### Step 1: Read the solution file only

```
Read src/src/productExceptSelf.ts
```

This is the ONLY file to read fully.

### Step 2: Find edit points with Grep (NOT Read)

Use Grep to find exact lines — never read the full readme:

```
Grep pattern="Solution 6" path="readme.md"    → find last solution number
Grep pattern="encodeDecode2.ts" path="readme.md"  → find last file in structure
Grep pattern="Adding New Problems" path="readme.md" → find insert point
Grep pattern="Encode.*String Manipulation" path="readme.md" → find last progress row
```

### Step 3: Make 4 small Edit calls

#### Edit 1 — Table of Contents (~line 23)

Find the last solution row (e.g. `| 11 | [🔐 Solution 6...`) and add after it:

```
| 12 | [icon Solution 7 — Problem Name](#-solution-7--problem-name) | ✅ |
```

Then renumber subsequent rows (+1 each).

#### Edit 2 — Project Structure (~line 70)

Find the last `└──` or `├──` in the `src/` block. Change it to `├──` and add a new `└──` line:

```
│   ├── encodeDecode2.ts         # 🔐 Alternative solution
│   └── [fileName].ts            # icon Problem Name
```

#### Edit 3 — Solution Section (before `## ➕ Adding New Problems`)

Use Grep to find the exact line of `## ➕ Adding New Problems`, then Edit to insert the full solution block BEFORE it. Use this template:

```
---

---

# icon Solution N — Problem Name

> **📁 File:** `src/[fileName].ts`

## 📋 Problem

[One sentence]

**🎯 Example:**
[example]

## 💻 The Code

[full code from the file]

## 📖 Step-by-Step Explanation

[walkthrough with concrete example]

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(?)` | [reason] |
| 💾 Space | `O(?)` | [reason] |

### ▶️ How to Run

npx tsx src/[fileName].ts
```

**Multiple approaches?** Use:

```
## 🔸 Approach 1 — [Name]
[code + explanation]

## 🔹 Approach 2 — [Name]
[code + explanation]

### ⏱️ Complexity
| Approach | ⏱️ Time | 💾 Space | Notes |
|----------|---------|---------|-------|
```

#### Edit 4 — Progress Tracker (bottom)

Find last row (e.g. `| 🔐 Encode & Decode...`). Add after it:

```
| icon Problem Name | Easy/Medium/Hard | Pattern | ✅ Solved |
```

---

## Token Budget

| Action | Tokens |
|--------|--------|
| Read ADD_SOLUTION.md | ~100 |
| Read solution file | ~50-200 |
| 4x Grep calls | ~40 |
| 4x Edit calls | ~200 |
| **Total** | **~400** |

vs reading full readme.md = **~5000+ tokens**

---

## Icon Reference

| Category | Icon |
|----------|------|
| Hash Map / Hash Set | 🗂️ 🔐 🔒 |
| Two Pointers / Sliding Window | 👈 👉 🔀 |
| Sorting | 🔄 📊 |
| Binary Search | 🎯 |
| Stack / Queue | 📚 📥 |
| Tree / Graph | 🌳 🔗 |
| Dynamic Programming | 📈 🧩 |
| String Manipulation | ✏️ 🔤 |
| Math / Bit Manipulation | ➖ ➕ ✖️ 🔢 |
| Linked List | 🔗 |
| Prefix/Suffix | ✖️ |
| Default | 🧩 |

## File Naming

- `camelCase.ts` — e.g. `productExceptSelf.ts`
- Multiple approaches: `name.ts` + `name2.ts`
