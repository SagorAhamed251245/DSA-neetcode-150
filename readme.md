# 🚀 DSA Problem Solving App

> 🎯 **100 Days Challenge** — Master Data Structures & Algorithms, one problem at a time.

A TypeScript-based application for practicing Data Structures and Algorithms problems with detailed step-by-step explanations.

---

## 📚 Table of Contents

| # | Topic | Status |
|---|-------|--------|
| 1 | [🎯 Project Overview](#-project-overview) | ✅ |
| 2 | [⚙️ Tech Stack](#️-tech-stack) | ✅ |
| 3 | [📁 Project Structure](#-project-structure) | ✅ |
| 4 | [🔧 Setup & Installation](#-setup--installation) | ✅ |
| 5 | [▶️ How to Run](#️-how-to-run) | ✅ |
| 6 | [🧩 Solution 1 — Two Sum](#-solution-1--two-sum) | ✅ |
| 7 | [🔀 Solution 2 — Valid Anagram](#-solution-2--valid-anagram) | ✅ |
| 8 | [🔁 Solution 3 — Contains Duplicate](#-solution-3--contains-duplicate) | ✅ |
| 9 | [📊 Solution 4 — Top K Frequent Elements](#-solution-4--top-k-frequent-elements) | ✅ |
| 10 | [🗂️ Solution 5 — Group Anagrams](#️-solution-5--group-anagrams) | ✅ |
| 11 | [🔐 Solution 6 — Encode & Decode Strings](#-solution-6--encode--decode-strings) | ✅ |
| 12 | [✖️ Solution 7 — Product of Array Except Self](#-solution-7--product-of-array-except-self) | ✅ |
| 13 | [➕ Adding New Problems](#-adding-new-problems) | ✅ |
| 14 | [💡 Tips](#-tips) | ✅ |
| 15 | [📝 Add New Solution](#-add-new-solution) | ✅ |

---

## 🎯 Project Overview

This app is part of a **100 Days Challenge** for mastering DSA. Each file in `src/` contains a solution to a specific coding problem, written in TypeScript.

> **🎯 Goal:** Solve problems consistently, build pattern recognition, and improve problem-solving skills.

### 📈 What You'll Learn

| Skill | Description |
|-------|-------------|
| 🧠 Pattern Recognition | Identify common DSA patterns |
| ⏱️ Time Complexity | Analyze and optimize solutions |
| 🏗️ Data Structures | Master arrays, maps, sets, and more |
| 🔄 Problem Solving | Build algorithmic thinking |

---

## ⚙️ Tech Stack

| Tool | Purpose | Icon |
|------|---------|------|
| **TypeScript** | Type-safe solution code | 🔷 |
| **Node.js** | Runtime environment | 🟢 |
| **tsx** | Direct TS execution (dev mode) | ⚡ |

---

## 📁 Project Structure

```
📦 P_S/
├── 📂 src/
│   ├── 📄 index.ts                 # 🚀 Entry point
│   ├── 📄 two-sum.ts               # 🎯 Two Sum problem
│   ├── 📄 valid-anagram.ts         # 🔀 Valid Anagram problem
│   ├── 📄 containsDuplicate.ts     # 🔁 Contains Duplicate
│   ├── 📄 containsDuplicate.md     # 📝 Problem description
│   ├── 📄 topKFrequent.ts          # 📊 Top K Frequent Elements
│   ├── 📄 topKFrequent2.ts         # 📊 Alternative solution
│   ├── 📄 groupAnagrams.ts         # 🗂️ Group Anagrams
│   ├── 📄 encodeDecode.ts          # 🔐 Encode & Decode Strings
│   ├── 📄 encodeDecode2.ts         # 🔐 Alternative solution
│   └── 📄 productExceptSelf.ts     # ✖️ Product of Array Except Self
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 APP.md                       # 📖 This file
```

---

## 🔧 Setup & Installation

### Step 1: 📂 Navigate to Project

```bash
cd "E:\100 days chalanges\DSA\P_S"
```

### Step 2: 📥 Install Dependencies

```bash
npm install
```

### Step 3: ✅ Verify Installation

```bash
npx tsx --version
```

> 💡 **Tip:** If you see a version number, you're good to go!

---

## ▶️ How to Run

```bash
# 🔄 Dev mode with auto-reload
npm run dev

# 🚀 Production mode
npm start

# 🎯 Run a single file
npx tsx src/two-sum.ts
```

---

---

# 🧩 Solution 1 — Two Sum

> **📁 File:** `src/two-sum.ts`

## 📋 Problem

Given an array of numbers and a target number, find the **indices** of two numbers that add up to the target.

**🎯 Example:**
```
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]  → because nums[0] + nums[1] = 2 + 7 = 9
```

## 💻 The Code

```typescript
export function twoSum(nums: number[], target: number): number[] {
  let i = 0;

  while (i < nums.length) {
    const num = nums[i];
    if (num === undefined) break;

    const complete = target - num;
    const index = nums.indexOf(complete);

    if (index !== -1 && index !== i) {
      return [i, index];
    }

    i++;
  }

  return [];
}
```

## 📖 Step-by-Step Explanation

Let's say the input is:

```ts
nums = [2, 7, 11, 15], target = 9
```

We start with `i = 0`.

```ts
let i = 0;
```

---

### 🔄 1st Iteration

```ts
i = 0
num = nums[0] = 2
```

`complete` is the number we need to find so that adding it to `num` gives us `target`.

```ts
complete = target - num = 9 - 2 = 7
```

So we need to find **7** in the array, because 2 + 7 = 9.

Now we search for 7 using `indexOf`:

```ts
index = nums.indexOf(7) = 1
```

`indexOf` returns **1** — meaning 7 is at index 1 in the array.

Now we check:

```ts
if (index !== -1 && index !== i)
```

```ts
index !== -1  →  1 !== -1  →  ✅ true  (7 was found)
index !== i   →  1 !== 0   →  ✅ true  (it's a different position)
```

Both conditions pass → return `[0, 1]`.

> 🎉 **Done!** **2 + 7 = 9**, indices `[0, 1]`.

---

### ❓ What if 1st iteration doesn't match?

Say `target = 20`:

```ts
i = 0, num = 2, complete = 20 - 2 = 18
nums.indexOf(18) = -1  →  -1 !== -1 is false  →  ❌ no match
```

Then `i++` makes `i = 1`, and the loop continues.

---

### 🔄 2nd iteration (if 1st didn't match)

```ts
i = 1
num = nums[1] = 7
complete = 9 - 7 = 2
index = nums.indexOf(2) = 0
```

```ts
index !== -1  →  0 !== -1  →  ✅ true
index !== i   →  0 !== 1   →  ✅ true
```

return `[1, 0]` — also a valid answer.

---

### ❌ What if nothing matches?

Say `target = 100`:

```
i=0: complete=98, indexOf(98) = -1  → ❌ no match
i=1: complete=93, indexOf(93) = -1  → ❌ no match
i=2: complete=89, indexOf(89) = -1  → ❌ no match
i=3: complete=85, indexOf(85) = -1  → ❌ no match
```

Loop ends → `return []` — empty array.

---

### 🛡️ Why the `num === undefined` check?

```ts
if (num === undefined) break;
```

If the array has `undefined` values (holes), then `target - undefined = NaN`. This check prevents that.

---

### 🔒 Why `index !== i`?

This condition ensures we're **not using the same element twice**.

Say `target = 4`, `nums = [2, 7]`:

```
i=0: num=2, complete=2, indexOf(2)=0
index !== i → 0 !== 0 → ❌ false  → no match!
```

Because `[0, 0]` would mean using the same element twice, which isn't allowed.

---

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n²)` | For each element, `indexOf` scans the rest of the array |
| 💾 Space | `O(1)` | Only two variables used |

### ▶️ How to Run

```bash
npx tsx src/two-sum.ts
```

---

---

# 🔀 Solution 2 — Valid Anagram

> **📁 File:** `src/valid-anagram.ts`

## 📋 Problem

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**🎯 Example:**
```
Input:  s = "jar", t = "jam"
Output: false  → "jar" and "jam" are not anagrams
```

## 💻 The Code

```typescript
const Solution = {
  isAnagram(s: string, t: string): boolean {
    return [...s].sort().join("") === [...t].sort().join("");
  },
};
console.log(Solution.isAnagram("jar", "jam"));
```

## 📖 Step-by-Step Explanation

Let's say the input is:

```ts
s = "jar", t = "jam"
```

---

### 🔹 Step 1 — Convert strings to character arrays

```ts
[...s] → ["j", "a", "r"]
[...t] → ["j", "a", "m"]
```

The spread operator `...` splits each string into individual characters.

---

### 🔹 Step 2 — Sort each array alphabetically

```ts
["j", "a", "r"].sort() → ["a", "j", "r"]
["j", "a", "m"].sort() → ["a", "j", "m"]
```

---

### 🔹 Step 3 — Join back into strings

```ts
["a", "j", "r"].join("") → "ajr"
["a", "j", "m"].join("") → "ajm"
```

---

### 🔹 Step 4 — Compare the sorted strings

```ts
"ajr" === "ajm" → ❌ false
```

**false!** Because "jar" and "jam" are not anagrams.

---

### ✅ When it returns true — Example

```ts
s = "listen", t = "silent"
```

```
[...s].sort().join("") → "eilnst"
[...t].sort().join("") → "eilnst"
"eilnst" === "eilnst" → ✅ true
```

**true!** Because "listen" and "silent" have the same letters, just in different order.

---

### ✅ Another example

```ts
s = "anagram", t = "nagaram"
```

```
[...s].sort().join("") → "aaagmn"
[...t].sort().join("") → "aaagmn"
"aaagmn" === "aaagmn" → ✅ true
```

**true!**

---

### 💡 The core idea

If two strings are **anagrams**:
- 📝 They have the same letters
- 🔀 Just in different order

So if we sort both, the sorted versions should be identical.

---

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n log n)` | `sort()` takes O(n log n) — the most expensive step |
| 💾 Space | `O(n)` | New arrays created from spread and sort |

### ▶️ How to Run

```bash
npx tsx src/valid-anagram.ts
```

---

---

# 🔁 Solution 3 — Contains Duplicate

> **📁 File:** `src/containsDuplicate.ts`

## 📋 Problem

Given an array of numbers, return `true` if any value appears at least twice, otherwise return `false`.

**🎯 Example:**
```
Input:  [1, 7, 7, 55, 55]
Output: true  → 7 and 55 both appear twice
```

This file contains **3 approaches**, each improving on the last.

---

## 🔸 Approach 1 — Brute Force (Nested Check)

```typescript
hasDuplicate(nums: number[]): boolean {
  let isTrue = false;
  for (let index = 0; index < nums.length && isTrue === false; index++) {
    const element = nums[index] as number;
    const checkTrue = check(element);

    if (checkTrue) {
      isTrue = true;
      return true;
    }
  }

  function check(value: number) {
    const count = nums.filter((num) => num === value);
    if (count.length > 1) {
      return true;
    } else {
      return false;
    }
  }
  return isTrue;
}
```

### 📖 Step-by-Step Explanation

Let's say input is:

```ts
nums = [1, 7, 7, 55, 55]
```

---

### 🔄 1st Iteration

```ts
index = 0
element = nums[0] = 1
```

`check(1)` is called. Inside `check()`:

```ts
const count = nums.filter((num) => num === 1);
```

`.filter()` scans the **entire array** and returns only elements equal to **1**.

```
nums.filter(num => num === 1) → [1]
count.length = 1
```

```ts
if (count.length > 1) → 1 > 1 → ❌ false
```

Returns `false` → `checkTrue = false` → no duplicate found yet.

---

### 🔄 2nd Iteration

```ts
index = 1
element = nums[1] = 7
```

`check(7)` is called.

```ts
const count = nums.filter((num) => num === 7);
```

```
nums.filter(num => num === 7) → [7, 7]
count.length = 2
```

```ts
if (count.length > 1) → 2 > 1 → ✅ true
```

**true!** `checkTrue = true` → `isTrue = true` → `return true`.

> 🎉 **Done!** **Duplicate found.**

---

### ⚠️ Why is this approach slow?

For each element, `.filter()` scans the entire array again.

```
n elements × n scans = O(n²) operations
```

Fine for small arrays (like 5 elements). But with **100,000** elements → **10 billion** comparisons → very slow. 🐌

---

## 🔹 Approach 2 — Hash Set with Loop

```typescript
hasDuplicate2(nums: number[]): boolean {
  const NewSet = new Set();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    NewSet.add(element);
  }

  return NewSet.size !== nums.length;
}
```

### 📖 Step-by-Step Explanation

Let's say input is:

```ts
nums = [1, 7, 7, 55, 55]
```

First, create an empty Set.

```ts
const NewSet = new Set();
```

Set is now:

```
Set {}
```

---

### 🔄 1st Iteration

```ts
index = 0
element = 1
```

```ts
NewSet.add(1)
```

Set is now:

```
Set {1}
```

---

### 🔄 2nd Iteration

```ts
index = 1
element = 7
```

```ts
NewSet.add(7)
```

Set is now:

```
Set {1, 7}
```

---

### 🔄 3rd Iteration

```ts
index = 2
element = 7
```

```ts
NewSet.add(7)
```

Set is now:

```
Set {1, 7}
```

> ⚠️ **Didn't change!** Because Set already has **7**. A Set can never have duplicate values — it auto-ignores them.

This is the key insight. **If the Set didn't change after adding, it means the value was already there = duplicate.**

---

### 🔄 4th Iteration

```ts
index = 3
element = 55
```

```ts
NewSet.add(55)
```

Set is now:

```
Set {1, 7, 55}
```

---

### 🔄 5th Iteration

```ts
index = 4
element = 55
```

```ts
NewSet.add(55)
```

Set is now:

```
Set {1, 7, 55}
```

> ⚠️ **Didn't change again!** 55 was already there.

---

### 🔍 Final comparison

```ts
return NewSet.size !== nums.length;
```

```ts
NewSet.size = 3   (1, 7, 55 are unique)
nums.length = 5   (5 elements were in original)

3 !== 5 → ✅ true
```

**true!** Duplicates exist.

---

### ❓ What if there were no duplicates?

```ts
nums = [1, 2, 3, 4, 5]
```

```
Set {1, 2, 3, 4, 5}
Set.size = 5
nums.length = 5

5 !== 5 → ❌ false
```

**false!** No duplicates.

---

### ⚡ Why is this approach faster?

- 🚀 `Set.add()` is O(1) — instant operation.
- 🔄 We only scan the array **once**.
- ⏱️ **O(n)** — much better than O(n²).

---

## 🔹 Approach 3 — Hash Set One-Liner

```typescript
hasDuplicate3(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
```

### 📖 Step-by-Step Explanation

```ts
new Set(nums)
```

`new Set()` accepts an iterable (like an array) directly. No manual loop needed.

```ts
new Set([1, 7, 7, 55, 55])
```

JavaScript engine loops internally and builds the Set:

```
Set {1, 7, 55}
```

Then:

```ts
Set.size = 3
nums.length = 5
3 !== 5 → ✅ true
```

Same as Approach 2, just **the loop is hidden** inside the constructor.

---

### 📊 Summary Table

| Version | Technique | ⏱️ Time | 💾 Space | Notes |
|---------|-----------|---------|---------|-------|
| 🔸 1 | Nested loop + filter | `O(n²)` | `O(1)` | Correct but slow on large inputs |
| 🔹 2 | Set + manual loop | `O(n)` | `O(n)` | Big improvement — one pass |
| 🔹 3 | Set one-liner | `O(n)` | `O(n)` | Same speed as #2, cleaner code |

### ▶️ How to Run

```bash
npx tsx src/containsDuplicate.ts
```

---

---

# 📊 Solution 4 — Top K Frequent Elements

> **📁 File:** `src/topKFrequent.ts`

## 📋 Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

**🎯 Example:**
```
Input:  nums = [1, 1, 1, 2, 2, 3], k = 2
Output: [1, 2]  → 1 appears 3 times, 2 appears 2 times
```

## 💻 The Code

```typescript
export function topKFrequent(nums: number[], k: number): number[] {
  // Step 1: Count frequencies
  const frequentMap = new Map<number, number>();

  for (const num of nums) {
    if (!frequentMap.has(num)) {
      frequentMap.set(num, 1);
    } else {
      frequentMap.set(num, (frequentMap.get(num) as number) + 1);
    }
  }

  // Step 2: Create buckets (index = frequency)
  const bucket: number[][] = new Array(nums.length + 1).fill([]).map(() => []);

  for (const entry of frequentMap.entries()) {
    const [key, value] = entry;
    bucket[value]?.push(key);
  }

  // Step 3: Collect top k from highest bucket
  const ans: number[] = [];
  for (let i = bucket.length - 1; i >= 0 && ans.length < k; i--) {
    const elements = bucket[i] || [];

    for (const element of elements) {
      ans.push(element);
      if (ans.length === k) break;
    }
  }
  return ans;
}
```

## 📖 Step-by-Step Explanation

Let's say input is:

```ts
nums = [1, 1, 1, 2, 2, 3], k = 2
```

---

### 🔹 Step 1 — Build Frequency Map

First, create an empty Map.

```ts
const frequentMap = new Map<number, number>();
```

Map is now:

```
Map {}
```

Now loop through each number and count how many times it appears.

---

#### 🔄 1st Iteration

```ts
num = 1
```

```ts
frequentMap.has(1) → ❌ false
```

1 is not in the Map yet.

```ts
frequentMap.set(1, 1)
```

Map is now:

```
{1 → 1}
```

> 📝 **1** has appeared **1 time** so far.

---

#### 🔄 2nd Iteration

```ts
num = 1
```

```ts
frequentMap.has(1) → ✅ true
```

1 is already in the Map!

```ts
frequentMap.set(1, frequentMap.get(1) + 1)
           = frequentMap.set(1, 1 + 1)
           = frequentMap.set(1, 2)
```

Map is now:

```
{1 → 2}
```

> 📝 **1** now appears **2 times**.

---

#### 🔄 3rd Iteration

```ts
num = 1
```

```ts
frequentMap.has(1) → ✅ true
frequentMap.set(1, 2 + 1) = frequentMap.set(1, 3)
```

Map is now:

```
{1 → 3}
```

> 📝 **1** now appears **3 times**.

---

#### 🔄 4th Iteration

```ts
num = 2
```

```ts
frequentMap.has(2) → ❌ false
frequentMap.set(2, 1)
```

Map is now:

```
{1 → 3, 2 → 1}
```

---

#### 🔄 5th Iteration

```ts
num = 2
```

```ts
frequentMap.has(2) → ✅ true
frequentMap.set(2, 1 + 1) = frequentMap.set(2, 2)
```

Map is now:

```
{1 → 3, 2 → 2}
```

---

#### 🔄 6th Iteration

```ts
num = 3
```

```ts
frequentMap.has(3) → ❌ false
frequentMap.set(3, 1)
```

Map is now:

```
{1 → 3, 2 → 2, 3 → 1}
```

> ✅ **Step 1 complete.** Now we know:
> - **1** appears 3 times
> - **2** appears 2 times
> - **3** appears 1 time

---

### 🔹 Step 2 — Create Buckets

```ts
const bucket: number[][] = new Array(nums.length + 1).fill([]).map(() => []);
```

`nums.length + 1 = 7` → 7 empty arrays created.

**💡 Why index = frequency?**

The bucket's index represents **how many times** an element appears:
- `bucket[0]` = elements that appear 0 times
- `bucket[1]` = elements that appear 1 time
- `bucket[2]` = elements that appear 2 times
- `bucket[3]` = elements that appear 3 times
- ...and so on

Initially all empty:

```
bucket index:  0    1    2    3    4    5    6
bucket value: [[]] [[]] [[]] [[]] [[]] [[]] [[]]
```

Now we fill buckets from the Map.

---

#### 📝 1st entry: [1, 3]

```ts
key = 1, value = 3
```

```ts
bucket[3].push(1)
```

```
bucket index:  0    1    2    3       4    5    6
bucket value: [[]] [[]] [[]] [1]     [[]] [[]] [[]]
```

> 📝 **1** appears 3 times, so it goes into `bucket[3]`.

---

#### 📝 2nd entry: [2, 2]

```ts
key = 2, value = 2
```

```ts
bucket[2].push(2)
```

```
bucket index:  0    1    2    3       4    5    6
bucket value: [[]] [[]] [2]  [1]     [[]] [[]] [[]]
```

> 📝 **2** appears 2 times, so it goes into `bucket[2]`.

---

#### 📝 3rd entry: [3, 1]

```ts
key = 3, value = 1
```

```ts
bucket[1].push(3)
```

```
bucket index:  0    1    2    3       4    5    6
bucket value: [[]] [3]  [2]  [1]     [[]] [[]] [[]]
```

> 📝 **3** appears 1 time, so it goes into `bucket[1]`.

> ✅ **Step 2 complete.** Buckets now:

```
bucket[0] = []
bucket[1] = [3]      ← appears 1 time
bucket[2] = [2]      ← appears 2 times
bucket[3] = [1]      ← appears 3 times
bucket[4] = []
bucket[5] = []
bucket[6] = []
```

---

### 🔹 Step 3 — Collect from highest bucket

```ts
const ans: number[] = [];
for (let i = bucket.length - 1; i >= 0 && ans.length < k; i--) {
```

Start from `i = 6` (highest frequency) and go down.

We need `k = 2` elements.

---

#### 🔄 i = 6

```ts
bucket[6] = []
```

Empty. ⏭️ Skip.

---

#### 🔄 i = 5

```ts
bucket[5] = []
```

Empty. ⏭️ Skip.

---

#### 🔄 i = 4

```ts
bucket[4] = []
```

Empty. ⏭️ Skip.

---

#### 🔄 i = 3

```ts
bucket[3] = [1]
```

**1** is here!

```ts
ans.push(1)
ans = [1]
ans.length = 1
```

`1 !== 2 (k)` → still need one more.

---

#### 🔄 i = 2

```ts
bucket[2] = [2]
```

**2** is here!

```ts
ans.push(2)
ans = [1, 2]
ans.length = 2
```

`2 === 2 (k)` → **done! 🛑 break.**

---

### 🎯 Return

```ts
return [1, 2]
```

> 🎉 **Correct!** 1 appears 3 times, 2 appears 2 times — the two most frequent.

---

### ❓ What if k = 3?

```
i = 3: push(1) → ans = [1]
i = 2: push(2) → ans = [1, 2]
i = 1: push(3) → ans = [1, 2, 3]  → 3 === k → 🛑 done
```

Return `[1, 2, 3]` — all three.

---

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n)` | One pass to count, one pass to bucket, one pass to collect |
| 💾 Space | `O(n)` | Map + bucket array |

### ▶️ How to Run

```bash
npx tsx src/topKFrequent.ts
npx tsx src/topKFrequent2.ts
```

---

---

# 🗂️ Solution 5 — Group Anagrams

> **📁 File:** `src/groupAnagrams.ts`

## 📋 Problem

Given an array of strings, group the anagrams together.

**🎯 Example:**
```
Input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
```

## 💻 The Code

```typescript
export function groupAnagrams(strs: string[]): string[][] {
  const anagramGroups = new Map<string, string[]>();

  for (const str of strs) {
    const sortedKey = [...str].sort().join("");
    if (!anagramGroups.has(sortedKey)) {
      anagramGroups.set(sortedKey, []);
    }

    anagramGroups.get(sortedKey)!.push(str);
  }
  return Array.from(anagramGroups.values());
}
```

## 📖 Step-by-Step Explanation

Let's say input is:

```ts
["act", "pots", "tops", "cat", "stop", "hat"]
```

First, create an empty Map.

```ts
const anagramGroups = new Map<string, string[]>();
```

Map is now:

```
Map {}
```

---

### 🔄 1st Iteration

```ts
str = "act"
```

Sort it:

```ts
const sortedKey = "act";
```

"act" is not in the Map as a key.

```ts
anagramGroups.set("act", []);
```

Map is now:

```
{
  "act" => []
}
```

Now:

```ts
anagramGroups.get("act")!.push("act");
```

`get("act")` returns:

```
[]
```

So:

```ts
[].push("act")
```

becomes:

```
["act"]
```

Map is now:

```
{
  "act" => ["act"]
}
```

---

### 🔄 2nd Iteration

```ts
str = "pots"
```

Sort it:

```
opst
```

Not in the Map.

```
{
   "act" => ["act"],
   "opst" => []
}
```

Then push:

```ts
.push("pots")
```

becomes:

```
{
   "act" => ["act"],
   "opst" => ["pots"]
}
```

---

### 🔄 3rd Iteration

```ts
str = "tops"
```

Sort it:

```
opst
```

Key already exists!

```ts
anagramGroups.get("opst")
```

returns:

```
["pots"]
```

Then:

```ts
["pots"].push("tops")
```

becomes:

```
["pots", "tops"]
```

Map:

```
{
   "act" => ["act"],
   "opst" => ["pots", "tops"]
}
```

---

### 🔄 4th Iteration

```ts
str = "cat"
```

Sort it:

```
act
```

Key exists!

```ts
anagramGroups.get("act")
```

returns:

```
["act"]
```

Then:

```ts
["act"].push("cat")
```

becomes:

```
["act", "cat"]
```

Map:

```
{
   "act" => ["act", "cat"],
   "opst" => ["pots", "tops"]
}
```

> 🎉 This is where `cat` and `act` end up together.

---

### 🔄 5th Iteration

```ts
str = "stop"
```

Sort:

```
opst
```

Map:

```
["pots", "tops"]
```

After push:

```
["pots", "tops", "stop"]
```

---

### 🔄 6th Iteration

```ts
str = "hat"
```

Sort:

```
aht
```

New key:

```
"aht" => []
```

After push:

```
"aht" => ["hat"]
```

---

### 📋 Final Map

```
{
   "act" => ["act", "cat"],
   "opst" => ["pots", "tops", "stop"],
   "aht" => ["hat"]
}
```

Then:

```ts
Array.from(anagramGroups.values())
```

Extracts only the values:

```
[
  ["act", "cat"],
  ["pots", "tops", "stop"],
  ["hat"]
]
```

---

### 🔍 How `get(sortedKey)!.push(str)` works

Say:

```ts
const map = new Map();
map.set("fruit", []);
```

Then:

```ts
map.get("fruit")
```

returns:

```
[]
```

Now:

```ts
const arr = map.get("fruit");
arr.push("Apple");
```

`arr` and the array inside the Map point to **the same array object**.

```
arr
 │
 ▼
["Apple"]

Map
"fruit"
   │
   ▼
["Apple"]
```

So:

```ts
arr.push("Apple");
```

and:

```ts
map.get("fruit")!.push("Apple");
```

do the same thing.

---

### ❓ Why the `!` ?

```ts
anagramGroups.get(sortedKey)
```

has type:

```
string[] | undefined
```

Because `get()` can return `undefined` if the key doesn't exist.

But we just made sure the key exists:

```ts
if (!anagramGroups.has(sortedKey)) {
    anagramGroups.set(sortedKey, []);
}
```

So by the time we reach the next line, the key is guaranteed to exist.

We tell TypeScript:

```ts
anagramGroups.get(sortedKey)!
```

> 🗣️ "I'm sure this is not `undefined`."

This is called the **non-null assertion operator (`!`)**.

---

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n × k log k)` | n strings, each sorted in O(k log k) |
| 💾 Space | `O(n × k)` | All strings stored in the Map |

### ▶️ How to Run

```bash
npx tsx src/groupAnagrams.ts
```

---

---

# 🔐 Solution 6 — Encode & Decode Strings

> **📁 File:** `src/encodeDecode.ts` and `src/encodeDecode2.ts`

## 📋 Problem

Design an algorithm to encode a list of strings to a single string, and decode it back to the original list.

**🎯 Example:**
```
Input:  ["hello", "world"]
Output after encode: a single string
Output after decode: ["hello", "world"]
```

---

## 🔸 Approach 1 — XOR Encoding (`encodeDecode.ts`)

```typescript
export const encodeDecode = {
  encode(strs: string[]) {
    const KEY = 123;

    return strs
      .map((word) => {
        const encoded = [...word]
          .map((ch) => (ch.charCodeAt(0) ^ KEY).toString(2))
          .join(" ");

        return `${word.length}:${encoded}`;
      })
      .join(" | ");
  },

  decode(str: string) {
    const KEY = 123;

    if (str === "") return [];

    return str.split(" | ").map((item) => {
      const [, encoded] = item.split(":");

      if (!encoded) return "";

      return encoded
        .split(" ")
        .map((binary) => String.fromCharCode(parseInt(binary, 2) ^ KEY))
        .join("");
    });
  },
};
```

### 📖 Step-by-Step Encoding

Let's say input is:

```ts
strs = ["hi"]
```

KEY = 123

---

#### 🔹 Step 1 — XOR each character with KEY

```ts
[...word] → ["h", "i"]
```

```ts
'h'.charCodeAt(0) = 104
104 ^ 123 = 27 → .toString(2) → "11011"

'i'.charCodeAt(0) = 105
105 ^ 123 = 26 → .toString(2) → "11010"
```

> 💡 **What does XOR (`^`) do?** Compares two binary numbers. Same bit = 0, different bit = 1. XOR with 123 encrypts the character.

---

#### 🔹 Step 2 — Join binary values with spaces

```ts
.join(" ") → "11011 11010"
```

---

#### 🔹 Step 3 — Add word length as prefix

```ts
`${word.length}:${encoded}` → "2:11011 11010"
```

> 📝 **Why length?** During decoding, we need to know how much binary belongs to one character.

---

#### 🔹 Step 4 — Join all words with " | "

```ts
strs = ["hi", "yo"]
```

```
"hi" → "2:11011 11010"
"yo" → "2:1111010 1100111"
```

Result:

```
"2:11011 11010 | 2:1111010 1100111"
```

---

### 📖 Step-by-Step Decoding

Let's say encoded string is:

```ts
str = "2:11011 11010"
```

---

#### 🔹 Step 1 — Split by " | "

```ts
str.split(" | ") → ["2:11011 11010"]
```

One word, so one element.

---

#### 🔹 Step 2 — Split by ":"

```ts
item = "2:11011 11010"
item.split(":") → ["2", "11011 11010"]
```

```ts
[, encoded] = ["2", "11011 11010"]
```

`encoded = "11011 11010"`

---

#### 🔹 Step 3 — Convert binary back to characters

```ts
encoded.split(" ") → ["11011", "11010"]
```

XOR each binary with KEY again (same operation reverses it):

```ts
"11011" → parseInt("11011", 2) = 27
27 ^ 123 = 104 → String.fromCharCode(104) = "h"

"11010" → parseInt("11010", 2) = 26
26 ^ 123 = 105 → String.fromCharCode(105) = "i"
```

```ts
.join("") → "hi"
```

> 🎉 **Correct!** "hi" is restored.

---

### 💡 Why XOR works

```
 encode: char ^ KEY = encrypted
 decode: encrypted ^ KEY = char
```

> 📝 **XOR rule:** `a ^ b ^ b = a`

So if `104 ^ 123 = 27`, then `27 ^ 123 = 104`. Applying the same operation twice returns the original value.

---

## 🔹 Approach 2 — Length-Prefix Encoding (`encodeDecode2.ts`)

```typescript
export const encodeDecode2 = {
  encode(strs: string[]) {
    let result = "";

    for (const str of strs) {
      result = result + ` ${str.length}#${str}`;
    }
    return result;
  },

  decode(str: string) {
    const result: string[] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      let word = str.substring(j + 1, j + 1 + length);

      result.push(word);
      i = j + 1 + length;
    }
    return result;
  },
};
```

### 📖 Step-by-Step Encoding

Let's say input is:

```ts
strs = ["hello", "world"]
```

---

#### 🔄 1st Iteration

```ts
str = "hello"
str.length = 5
```

```ts
result = "" + " 5#hello" = " 5#hello"
```

> 💡 **Pattern:** `length#word` — length first, then `#`, then the word.

---

#### 🔄 2nd Iteration

```ts
str = "world"
str.length = 5
```

```ts
result = " 5#hello" + " 5#world" = " 5#hello 5#world"
```

---

#### 🎯 Final result

```
" 5#hello 5#world"
```

---

### 📖 Step-by-Step Decoding

```ts
str = " 5#hello 5#world"
i = 0
```

---

#### 🔄 1st Iteration

```ts
i = 0
j = 0
```

`str[0] = " "` — not `#` → `j++`

```ts
j = 1 → str[1] = "5" — not `#` → j++
j = 2 → str[2] = "#" — found! 🛑 stop
```

```ts
length = parseInt(str.substring(0, 2)) = parseInt(" 5") = 5
word = str.substring(3, 3 + 5) = str.substring(3, 8) = "hello"
```

```ts
result = ["hello"]
i = 8
```

---

#### 🔄 2nd Iteration

```ts
i = 8
j = 8
```

```ts
j = 8 → str[8] = " " — not `#` → j++
j = 9 → str[9] = "5" — not `#` → j++
j = 10 → str[10] = "#" — found! 🛑 stop
```

```ts
length = parseInt(str.substring(8, 10)) = parseInt(" 5") = 5
word = str.substring(11, 11 + 5) = str.substring(11, 16) = "world"
```

```ts
result = ["hello", "world"]
i = 16 → past str.length → 🛑 loop ends
```

---

### 🎯 Return

```ts
["hello", "world"]
```

> 🎉 **Correct!**

---

### ❓ Why "#" as delimiter?

`#` is a separator — it can't appear inside the word (problem constraint). So it works as a divider between length and word.

> 💡 **Pattern:** `length#word`

During decoding, we find `#` to get the length, then use that length to extract the word.

---

### ⏱️ Complexity

| Approach | ⏱️ Time | 💾 Space | Notes |
|----------|---------|---------|-------|
| 🔸 XOR | `O(n × k)` | `O(n × k)` | Uses binary encoding |
| 🔹 Length-Prefix | `O(n × k)` | `O(n × k)` | Simpler, more common in interviews |

### ▶️ How to Run

```bash
npx tsx src/encodeDecode.ts
npx tsx src/encodeDecode2.ts
```

---

---

# ✖️ Solution 7 — Product of Array Except Self

> **📁 File:** `src/productExceptSelf.ts`

## 📋 Problem

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. You must write an algorithm that runs in `O(n)` time and without using the division operation.

**🎯 Example:**
```
Input:  nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]  → answer[0] = 2×3×4 = 24, answer[1] = 1×3×4 = 12, etc.
```

This file contains **2 approaches**, each improving on the last.

---

## 🔸 Approach 1 — Brute Force (Nested Loop)

```typescript
export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let res = 1;
    for (let j = 0; j < nums.length; j++) {
      const element: number = nums[j] as number;
      if (j !== i) {
        res = res * element;
      }
    }
    result.push(res);
  }
  return result;
}
```

### 📖 Step-by-Step Explanation

Let's say input is:

```ts
nums = [1, 2, 3, 4]
```

We loop through each element. For each position `i`, we multiply all **other** elements together (skipping index `i`).

---

#### 🔄 1st Iteration

```ts
i = 0, res = 1
```

Loop through all elements:

```ts
j=0: j === i → skip
j=1: res = 1 × 2 = 2
j=2: res = 2 × 3 = 6
j=3: res = 6 × 4 = 24
```

```ts
result.push(24)
result = [24]
```

> 📝 **24** = product of everything except `nums[0]` (1) = 2 × 3 × 4

---

#### 🔄 2nd Iteration

```ts
i = 1, res = 1
```

```ts
j=0: res = 1 × 1 = 1
j=1: j === i → skip
j=2: res = 1 × 3 = 3
j=3: res = 3 × 4 = 12
```

```ts
result.push(12)
result = [24, 12]
```

---

#### 🔄 3rd Iteration

```ts
i = 2, res = 1
```

```ts
j=0: res = 1 × 1 = 1
j=1: res = 1 × 2 = 2
j=2: j === i → skip
j=3: res = 2 × 4 = 8
```

```ts
result.push(8)
result = [24, 12, 8]
```

---

#### 🔄 4th Iteration

```ts
i = 3, res = 1
```

```ts
j=0: res = 1 × 1 = 1
j=1: res = 1 × 2 = 2
j=2: res = 2 × 3 = 6
j=3: j === i → skip
```

```ts
result.push(6)
result = [24, 12, 8, 6]
```

---

### 🎯 Return

```ts
return [24, 12, 8, 6]
```

> 🎉 **Correct!**

---

### ⚠️ Why is this approach slow?

For each of the `n` elements, we scan through all `n` elements again.

```
n elements × n scans = O(n²) operations
```

---

## 🔹 Approach 2 — Prefix & Suffix Arrays (Optimal)

```typescript
export function productExceptSelf2(nums: number[]): number[] {
  const result: number[] = [];
  const length = nums.length;
  let left: number[] = Array(length);
  let right: number[] = Array(length);
  left[0] = 1;
  right[length - 1] = 1;

  for (let i = 1; i < length; i++) {
    left[i] = (left[i - 1] as number) * (nums[i - 1] as number);
  }
  for (let i = length - 2; i >= 0; i--) {
    right[i] = (nums[i + 1] as number) * (right[i + 1] as number);
  }
  for (let i = 0; i < length; i++) {
    result.push((left[i] as number) * (right[i] as number));
  }

  return result;
}
```

### 📖 Key Idea

Instead of recalculating the product for each position, precompute:

- **left[i]** = product of all elements to the **left** of index `i`
- **right[i]** = product of all elements to the **right** of index `i`

Then: `answer[i] = left[i] × right[i]`

---

### 📖 Step-by-Step Explanation

```ts
nums = [1, 2, 3, 4], length = 4
```

Initialize:

```ts
left = [_, _, _, _]
right = [_, _, _, _]
left[0] = 1
right[3] = 1
```

---

#### 🔹 Step 1 — Build Left Array

```ts
for (let i = 1; i < length; i++)
  left[i] = left[i-1] * nums[i-1]
```

- `i=1`: `left[1] = left[0] × nums[0] = 1 × 1 = 1`
- `i=2`: `left[2] = left[1] × nums[1] = 1 × 2 = 2`
- `i=3`: `left[3] = left[2] × nums[2] = 2 × 3 = 6`

```
left = [1, 1, 2, 6]
         ↑  ↑  ↑  ↑
        1  1  1×2  1×2×3
```

> 📝 **left[i]** = product of all elements **before** index `i`

---

#### 🔹 Step 2 — Build Right Array

```ts
for (let i = length - 2; i >= 0; i--)
  right[i] = nums[i+1] * right[i+1]
```

- `i=2`: `right[2] = nums[3] × right[3] = 4 × 1 = 4`
- `i=1`: `right[1] = nums[2] × right[2] = 3 × 4 = 12`
- `i=0`: `right[0] = nums[1] × right[1] = 2 × 12 = 24`

```
right = [24, 12, 4, 1]
          ↑   ↑  ↑  ↑
        2×3×4  3×4  4  1
```

> 📝 **right[i]** = product of all elements **after** index `i`

---

#### 🔹 Step 3 — Multiply Left × Right

```ts
for (let i = 0; i < length; i++)
  result.push(left[i] * right[i])
```

```
i=0: left[0] × right[0] = 1 × 24 = 24
i=1: left[1] × right[1] = 1 × 12 = 12
i=2: left[2] × right[2] = 2 × 4  = 8
i=3: left[3] × right[3] = 6 × 1  = 6
```

```ts
result = [24, 12, 8, 6]
```

---

### 🎯 Return

```ts
return [24, 12, 8, 6]
```

> 🎉 **Same result, but O(n) instead of O(n²)!**

---

### 💡 Visual Summary

```
nums:     [1,   2,   3,   4]

left:     [1,   1,   2,   6]    ← product of elements before i
right:    [24, 12,   4,   1]    ← product of elements after i

answer:   [24, 12,   8,   6]    ← left[i] × right[i]
```

---

### ⏱️ Complexity

| Approach | ⏱️ Time | 💾 Space | Notes |
|----------|---------|---------|-------|
| 🔸 Brute Force | `O(n²)` | `O(1)` | Nested loops |
| 🔹 Prefix/Suffix | `O(n)` | `O(n)` | Three passes — optimal |

### ▶️ How to Run

```bash
npx tsx src/productExceptSelf.ts
```

---

---

## 📝 Add New Solution

See **[ADD_SOLUTION.md](ADD_SOLUTION.md)** — paste the template to the AI with your code and it will add the solution in the correct format.

---

## ➕ Adding New Problems

### Step 1: 📄 Create the file

```bash
touch src/newProblem.ts
```

### Step 2: 💻 Write the solution

```typescript
function solve(input: any): any {
  // Your solution here
  return result;
}

// Test cases
console.log(solve(testInput));
```

### Step 3: ▶️ Run and verify

```bash
npx tsx src/newProblem.ts
```

---

## 💡 Tips

| Tip | Description |
|-----|-------------|
| 🏁 **Start simple** | Write a brute force solution first, then optimize |
| 🧪 **Write test cases** | Check edge cases (empty input, single element, negatives) |
| ⏱️ **Time yourself** | Try to solve each problem within 30-45 minutes |
| 🔍 **Review patterns** | After solving, note which pattern it uses (hash map, two pointers, sliding window, etc.) |
| 🔄 **Multiple approaches** | Always try to solve it in more than one way (like Contains Duplicate has 3 solutions) |

---

## 📊 Progress Tracker

| Problem | Difficulty | Pattern | Status |
|---------|-----------|---------|--------|
| 🧩 Two Sum | Easy | Hash Map | ✅ Solved |
| 🔀 Valid Anagram | Easy | Sorting | ✅ Solved |
| 🔁 Contains Duplicate | Easy | Hash Set | ✅ Solved |
| 📊 Top K Frequent | Medium | Bucket Sort | ✅ Solved |
| 🗂️ Group Anagrams | Medium | Hash Map + Sort | ✅ Solved |
| 🔐 Encode & Decode | Medium | String Manipulation | ✅ Solved |
| ✖️ Product of Array Except Self | Medium | Prefix/Suffix Products | ✅ Solved |

---

> 🚀 **Keep coding! Every problem you solve makes you stronger. 💪**

