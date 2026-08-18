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
