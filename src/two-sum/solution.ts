export function twoSum(nums: number[], target: number): number[] {
  let i = 0;

  while (i < nums.length) {
    const num = nums[i];
    if (num === undefined) break;

    const complete = target - num;
    const index = nums.indexOf(complete);

    if (index !== -1 && index !== i) {
      return [i, index];
    }

    i++;
  }

  return [];
}
