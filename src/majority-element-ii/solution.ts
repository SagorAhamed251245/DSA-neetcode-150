export function majorityElementII(nums: number[]): number[] {
  let n = Math.floor(nums.length / 3);
  let res = [];
  let map = new Map();
  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  for (const [key, value] of map) {
    if (value > n) {
      res.push(key);
    }
  }

  return res;
}
