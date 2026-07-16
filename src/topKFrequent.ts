export function topKFrequent(nums: number[], k: number): number[] {
  const frequentMap = new Map<number, number>();

  for (const num of nums) {
    if (!frequentMap.has(num)) {
      frequentMap.set(num, 1);
    } else {
      frequentMap.set(num, (frequentMap.get(num) as number) + 1);
    }
  }

  const bucket: number[][] = new Array(nums.length + 1).fill([]).map(() => []);

  for (const entry of frequentMap.entries()) {
    const [key, value] = entry;

    bucket[value]?.push(key);
  }

  const ans: number[] = [];
  for (let i = bucket.length - 1; i >= 0 && ans.length < k; i--) {
    const elements = bucket[i] || [];

    for (const element of elements) {
      ans.push(element);
      if (ans.length === k) break;
    }
  }
  return ans;
}
