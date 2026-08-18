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
