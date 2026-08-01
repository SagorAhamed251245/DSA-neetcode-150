export function topKFrequent2(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();
  const ans: number[] = [];
  for (const num of nums) {
    if (!freq.has(num)) {
      freq.set(num, 1);
    } else {
      freq.set(num, (freq.get(num) as number) + 1);
    }
  }

  const bucket: number[][] = Array(nums.length + 1)
    .fill([])
    .map(() => []);

  for (const entry of freq.entries()) {
    const [key, value] = entry;

    bucket[value]?.push(key);
  }

  for (let i = bucket.length - 1; i >= 0 && ans.length < k; i--) {
    const elements = bucket[i] || [];

    for (const element of elements) {
      ans.push(element);
    }
  }
  return ans;
}
