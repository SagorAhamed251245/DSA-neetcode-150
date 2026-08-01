# Solution 15 — Longest Common Prefix

> **📁 File:** `src/longest-common-prefix/solution.ts`


## 📋 Problem

Find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.

**🎯 Example:**
```
Input: ["flower","flow","flight"]
Output: "fl"
```

## 💻 The Code

```typescript
export function longestCommonPrefix(strs: string[]): string {
  const sort = strs.sort();
  const f = sort[0]!;
  const l = sort[sort.length - 1]!;
  let res = "";
  let match = true;

  if (f?.length > l?.length) {
    for (let i = 0; i < l.length && match; i++) {
      match = l[i] === f[i];

      if (!match) {
        match = false;
      } else {
        res = res + l[i];
      }
    }
  } else {
    for (let i = 0; i < f.length && match; i++) {
      match = f[i] === l[i];

      if (!match) {
        match = false;
      } else {
        res = res + f[i];
      }
    }
  }
  console.log({ sort, f, l, res });

  return res;
}
```

## 📖 Step-by-Step Explanation

1. **Sort the array** — After sorting alphabetically, the first and last strings are the most different, so any common prefix they share is common to all strings.
2. **Compare first and last** — Iterate character-by-character through the shorter of the two, building the result string until a mismatch is found.
3. **Return the prefix** — The accumulated result is the longest common prefix.

**Walkthrough with `["flower","flow","flight"]`:**
- Sorted: `["flight", "flow", "flower"]`
- Compare `"flight"` vs `"flower"`: `f` matches, `l` matches, `i` vs `o` → mismatch
- Result: `"fl"`

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n·k log n)` | Sorting is `O(n·k log n)`, comparison is `O(k)` where `k` is the shortest string length |
| 💾 Space | `O(1)` | Only a few variables (excluding sort space) |

### ▶️ How to Run

```bash
npx tsx src/longest-common-prefix/solution.ts
```

---

![Diagram](./image.png)
