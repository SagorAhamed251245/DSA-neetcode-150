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
