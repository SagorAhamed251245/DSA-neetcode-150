# 📈 Solution 22 — Best Time to Buy and Sell Stock II

> **📁 File:** `src/best-time-to-buy-and-sell-stock-II/solution.ts`
> 📊 **Diagram:** [best-time-to-buy-and-sell-stock-II-diagram.excalidraw](./best-time-to-buy-and-sell-stock-II-diagram.excalidraw)


## 📋 Problem

Given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`-th day, find the **maximum profit** you can achieve. You may buy and sell the stock multiple times, but you may only hold at most one share at a time.

**🎯 Example:**
```
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price 1) and sell on day 3 (price 5) → profit 4.
             Then buy on day 4 (price 3) and sell on day 5 (price 6) → profit 3.
             Total profit = 4 + 3 = 7.

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price 1) and sell on day 5 (price 5) → profit 4.
```

## 💻 The Code

```typescript
export function bestTimeToBuyAndSellStockIi(prices: number[]): number {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i]! < prices[i + 1]!) {
      console.log(prices[i + 1], prices[i]);
      profit = profit + prices[i + 1]! - prices[i]!;
    }
  }
  return profit;
}
```

## 📖 Step-by-Step Explanation

The greedy strategy: **collect every positive day-to-day price increase.**

1. Start with `profit = 0`.
2. Loop from day `0` to `length - 2`.
3. If today's price is **lower** than tomorrow's price, buy today and sell tomorrow — add `prices[i+1] - prices[i]` to `profit`.
4. If the price drops, do nothing (skip that pair).
5. Return the total profit.

Because you can trade multiple times, the sum of all positive consecutive differences equals the maximum achievable profit.

**Walkthrough with `[7,1,5,3,6,4]`:**
- `7 → 1` drop → skip
- `1 → 5` rise → profit += 4
- `5 → 3` drop → skip
- `3 → 6` rise → profit += 3
- `6 → 4` drop → skip
- Total profit = `4 + 3 = 7`

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n)` | Single pass over the array |
| 💾 Space | `O(1)` | Only a `profit` accumulator |

### ▶️ How to Run

```bash
npx tsx src/best-time-to-buy-and-sell-stock-II/solution.ts
```
