# Majority Element II

> **📁 File:** `src/majority-element-ii/solution.ts`
> **📁 Alt:** `src/majority-element-ii/solution2.ts` (Boyer-Moore Voting)

## 📋 Problem

Given an integer array of size `n`, find all elements that appear more than `⌊n/3⌋` times. The majority elements always exist in the array.

**🎯 Example:**
```
Input: nums = [3, 2, 3]
Output: [3]

Input: nums = [1, 2]
Output: [1, 2]

Input: nums = [1, 1, 1, 3, 3, 3, 2, 2, 2]
Output: [1, 2, 3]
```

## 💻 The Code

### Approach 1: Hash Map

```typescript
export function majorityElementII(nums: number[]): number[] {
  let n = Math.floor(nums.length / 3);
  let res = [];
  let map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  for (const [key, value] of map) {
    if (value > n) {
      res.push(key);
    }
  }
  return res;
}
```

### Approach 2: Boyer-Moore Voting Algorithm

```typescript
export function majorityElementII(nums: number[]): number[] {
  let me1 = null;
  let me2 = null;
  let c1 = 0;
  let c2 = 0;
  let res: number[] = [];
  let n = Math.floor(nums.length / 3);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    if (num === me1) {
      c1++;
    } else if (num === me2) {
      c2++;
    } else if (c1 === 0) {
      me1 = num;
      c1++;
    } else if (c2 === 0) {
      me2 = num;
      c2++;
    } else {
      c1--;
      c2--;
    }
  }

  c1 = 0;
  c2 = 0;
  for (const num of nums) {
    if (num === me1) {
      c1++;
    } else if (num === me2) {
      c2++;
    }
  }
  if (c1 > n) {
    res.push(me1!);
  }
  if (c2 > n) {
    res.push(me2!);
  }
  return res;
}
```

## 📖 Step-by-Step Explanation

### Approach 1: Hash Map
1. Count frequency of each element using a Map.
2. Iterate the map — any element with count `> n/3` is a result.
3. At most 2 elements can satisfy this condition.

### Approach 2: Boyer-Moore Voting
1. Maintain two candidate counters. At most 2 elements can appear `> n/3` times.
2. First pass: find the two candidates by incrementing/decrementing counters.
3. Second pass: verify the candidates actually appear more than `n/3` times.

**Walkthrough with `[1, 1, 1, 3, 3, 3, 2, 2, 2]`:**
- `n = ⌊9/3⌋ = 3`
- Hash map counts: `{1:3, 3:3, 2:3}` — all equal to 3, none `> 3` → result `[]`
- (If counts were `> 3`, they'd be included)

### ⏱️ Complexity

| Metric | Value (HashMap) | Value (Boyer-Moore) | Why |
|--------|-----------------|---------------------|-----|
| 🕐 Time | `O(n)` | `O(n)` | Two linear passes |
| 💾 Space | `O(n)` | `O(1)` | HashMap vs constant candidates |

### ▶️ How to Run

```bash
npx tsx src/majority-element-ii/solution.ts
npx tsx src/majority-element-ii/solution2.ts
```
