# 📊 Solution 18 — Majority Element

> **📁 File:** `src/majority-element/solution.ts`

## 📋 Problem

Find the element that appears more than ⌊n/2⌋ times in an array. The majority element always exists in the input.

**🎯 Example:**
```
Input: [3,2,3] → Output: 3
Input: [2,2,1,1,1,2,2] → Output: 2
```

## 💻 The Code

### 🔸 Approach 1 — Hash Map (Count All)

```typescript
export function majorityElement(nums: number[]): number {
  if (nums.length < 1) {
    return 0;
  }
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  let longest = 0;
  let longestKey = nums[0]!;
  for (const [key, val] of map) {
    console.log({ key, val });

    if (longest < val) {
      longest = val;
      longestKey = key;
    }
  }

  console.log({ longestKey, longest });

  return longestKey;
}
```

### 🔹 Approach 2 — Hash Map (Track Max During Insert)

```typescript
export function majorityElementApproachTwo(nums: number[]): number {
  if (nums.length < 1) {
    return 0;
  }
  const map = new Map();
  let lk = nums[0]!;
  let lo = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      const count = map.get(num) + 1;
      map.set(num, count);
      if (count > lo) {
        lo = count;
        lk = num;
      }
    }
  }
  return lk;
}
```

## 📖 Step-by-Step Explanation

**Approach 1:**
1. Count every element using a Map.
2. Iterate through the Map to find the key with the highest count.

**Approach 2:**
1. Same counting, but track the majority candidate during insertion.
2. Update the candidate whenever a count exceeds the current max.

**Walkthrough with `[2,2,1,1,1,2,2]`:**
- Count: `{2: 3, 1: 3}` → both equal
- In approach 2, candidate updates as counts grow — final result: `2`

### ⏱️ Complexity

| Approach | ⏱️ Time | 💾 Space | Notes |
|----------|---------|---------|-------|
| 🔸 Count All | O(n) | O(n) | Two passes over Map |
| 🔹 Track Max | O(n) | O(n) | Single pass, tracks max inline |

### ▶️ How to Run

```bash
npx tsx src/majority-element/solution.ts
```

---
