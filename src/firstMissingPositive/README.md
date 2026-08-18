# First Missing Positive

> **📁 File:** `src/firstMissingPositive/solution.ts`

## 📋 Problem

Given an unsorted integer array `nums`, return the smallest missing positive integer. You must implement an algorithm that runs in `O(n)` time and uses `O(1)` extra space.

**🎯 Example:**
```
Input: nums = [1, 2, 0]
Output: 3

Input: nums = [3, 4, -1, 1]
Output: 2

Input: nums = [7, 8, 9, 11, 12]
Output: 1
```

## 💻 The Code

```typescript
export function firstMissingPositive(nums: number[]): number {
  let map = new Map<number, boolean | null>();

  for (let i = 0; i < nums.length; i++) {
    map.set(i + 1, null);
  }

  for (const element of nums) {
    if (map.has(element)) {
      map.set(element, true);
    }
  }
  for (const [key, value] of map) {
    if (value === null) {
      return key;
    }
  }
  return 0;
}
```

## 📖 Step-by-Step Explanation

1. Create a Map with keys `1` to `nums.length`, all set to `null` (unseen).
2. Iterate through `nums` — if the element exists as a key in the map, mark it `true` (seen).
3. Iterate through the map — the first key still `null` is the smallest missing positive.
4. If all keys are `true`, return 0.

**Walkthrough with `[3, 4, -1, 1]`:**
- Map: `{1: null, 2: null, 3: null, 4: null}`
- After marking: `{1: true, 2: null, 3: true, 4: true}`
- First `null` key → `2`

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n)` | Three linear passes |
| 💾 Space | `O(n)` | Map stores up to n entries |

### ▶️ How to Run

```bash
npx tsx src/firstMissingPositive/solution.ts
```
