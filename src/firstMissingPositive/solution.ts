export function firstMissingPositive(nums: number[]): number {
  let map = new Map<number, boolean | null>();

  for (let i = 0; i < nums.length; i++) {
    map.set(i + 1, null);
  }

  for (const element of nums) {
    if (map.has(element)) {
      map.set(element, true);
    }
  }
  for (const [key, value] of map) {
    if (value === null) {
      return key;
    }
  }
  return 0;
}
