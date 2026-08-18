# Subarray Sum Equals K

> **📁 File:** `src/subarray-sum-equals-k/solution.ts`

## 📋 Problem

Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.

**🎯 Example:**
```
Input: nums = [1, 1, 1], k = 2
Output: 2
Explanation: [1,1] appears twice.

Input: nums = [1, 2, 3], k = 3
Output: 2
Explanation: [1,2] and [3] sum to 3.
```

## 💻 The Code

```typescript
export function subarraySum(nums: number[], k: number): number {
  let map = new Map<number, number>();
  let result = 0;
  let prefixSum = 0;
  map.set(0, 1);

  for (const num of nums) {
    prefixSum += num;
    const previousSum = prefixSum - k;
    if (map.has(previousSum)) {
      result += map.get(previousSum)!;
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return result;
}
```

## 📖 Step-by-Step Explanation

1. Use prefix sums: `prefixSum[i] = sum of elements from index 0 to i`.
2. For a subarray from index `j+1` to `i` to sum to `k`: `prefixSum[i] - prefixSum[j] = k`, so `prefixSum[j] = prefixSum[i] - k`.
3. Use a Map to count how many times each prefix sum has been seen.
4. For each element, check if `prefixSum - k` exists in the map — if so, that many subarrays ending here sum to `k`.
5. Initialize the map with `{0: 1}` to handle subarrays starting from index 0.

**Walkthrough with `[1, 2, 3]`, k=3:**
- Start: `map={0:1}`, `prefixSum=0`, `result=0`
- `num=1`: `prefixSum=1`, `1-3=-2` not in map → `map={0:1, 1:1}`
- `num=2`: `prefixSum=3`, `3-3=0` in map → `result+=1`, `map={0:1, 1:1, 3:1}`
- `num=3`: `prefixSum=6`, `6-3=3` in map → `result+=1`, total `result=2`

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n)` | Single pass over the array |
| 💾 Space | `O(n)` | Map stores up to n prefix sums |

### ▶️ How to Run

```bash
npx tsx src/subarray-sum-equals-k/solution.ts
```
