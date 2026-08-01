# 🔀 Solution 2 — Valid Anagram

> **📁 File:** `src/valid-anagram/solution.ts`

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
npx tsx src/valid-anagram/solution.ts
```

---
