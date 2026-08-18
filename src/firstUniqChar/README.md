# First Unique Character in a String

> **📁 File:** `src/firstUniqChar/solution.ts`

## 📋 Problem

Given a string `s`, find the index of the first non-repeating character. If none exists, return `-1`.

**🎯 Example:**
```
Input: s = "leetcode"
Output: 0
Explanation: 'l' is the first character that does not repeat.

Input: s = "loveleetcode"
Output: 2

Input: s = "aabb"
Output: -1
```

## 💻 The Code

```typescript
export function firstUniqChar(s: string): number {
  let map = new Map<string, number>();

  for (const element of s) {
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element)! + 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]!) === 1) {
      return i;
    }
  }
  return -1;
}
```

## 📖 Step-by-Step Explanation

1. Build a frequency map counting occurrences of each character.
2. Scan the string left to right — the first character with a count of `1` is the answer.
3. If no unique character is found, return `-1`.

**Walkthrough with `"loveleetcode"`:**
- Frequency map: `{l:2, o:2, v:1, e:4, t:1, c:1, d:1}`
- Index 0: `l` → count 2 → skip
- Index 1: `o` → count 2 → skip
- Index 2: `v` → count 1 → return `2`

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n)` | Two linear passes over the string |
| 💾 Space | `O(1)` | Map stores at most 26 lowercase letters |

### ▶️ How to Run

```bash
npx tsx src/firstUniqChar/solution.ts
```
