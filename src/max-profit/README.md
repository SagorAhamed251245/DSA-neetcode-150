# Solution 27 — Best Time to Buy and Sell Stock

> **File:** `src/max-profit/solution.ts`
> **Diagram:** [max-profit-diagram.excalidraw](./max-profit-diagram.excalidraw)

## Problem

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day. Find the **maximum profit** you can achieve from a single buy and sell transaction. You must buy before you sell.

**Example:**
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price 1) and sell on day 5 (price 6) → profit 5.

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No transaction is done → profit 0.
```

## The Code

```typescript
export function maxProfit(prices: number[]): number {
  let buy = prices[0]!;
  let mp = 0;
  for (const element of prices) {
    if (element < buy) {
      buy = element;
    } else if (element > buy) {
      let profit = element - buy;
      if (mp < profit) {
        mp = Math.max(mp, profit);
      }
    } else {
      continue;
    }
  }
  return mp;
}
```

## Step-by-Step Explanation

Track the **minimum price seen so far** and calculate profit at each step.

1. Initialize `buy` to the first price and `mp` (max profit) to `0`.
2. Iterate through each price:
   - If current price is **lower** than `buy`, update `buy` (better entry point).
   - If current price is **higher** than `buy`, calculate `profit = price - buy`.
   - Update `mp` if this profit is greater.
3. Return `mp`.

**Walkthrough with `[7,1,5,3,6,4]`:**
- `buy = 7, mp = 0`
- `7` — equal → skip
- `1` — lower → `buy = 1`
- `5` — higher → profit = `5 - 1 = 4` → `mp = 4`
- `3` — higher → profit = `3 - 1 = 2` → `mp = 4`
- `6` — higher → profit = `6 - 1 = 5` → `mp = 5`
- `4` — higher → profit = `4 - 1 = 3` → `mp = 5`
- Return `5`

### Complexity

| Metric | Value | Why |
|--------|-------|-----|
| Time | `O(n)` | Single pass over the array |
| Space | `O(1)` | Only two variables used |

### How to Run

```bash
npx tsx src/max-profit/solution.ts
```
