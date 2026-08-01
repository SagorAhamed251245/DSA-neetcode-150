export function majorityElement(nums: number[]): number {
  if (nums.length < 1) {
    return 0;
  }
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  let longest = 0;
  let longestKey = nums[0]!;
  for (const [key, val] of map) {
    if (longest < val) {
      longest = val;
      longestKey = key;
    }
  }

  return longestKey;
}

export function majorityElementApproachTwo(nums: number[]): number {
  if (nums.length < 1) {
    return 0;
  }
  const map = new Map();
  let lk = nums[0]!;
  let lo = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      const count = map.get(num) + 1;
      map.set(num, count);
      if (count > lo) {
        lo = count;
        lk = num;
      }
    }
  }
  return lk;
}
