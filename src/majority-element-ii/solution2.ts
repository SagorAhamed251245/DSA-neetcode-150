export function majorityElementII(nums: number[]): number[] {
  let me1 = null;
  let me2 = null;
  let c1 = 0;
  let c2 = 0;
  let res: number[] = [];
  let n = Math.floor(nums.length / 3);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    if (num === me1) {
      c1++;
    } else if (num === me2) {
      c2++;
    } else if (c1 === 0) {
      me1 = num;
      c1++;
    } else if (c2 === 0) {
      me2 = num;
      c2++;
    } else {
      c1--;
      c2--;
    }
  }

  c1 = 0;
  c2 = 0;
  for (const num of nums) {
    if (num === me1) {
      c1++;
    } else if (num === me2) {
      c2++;
    }
  }
  if (c1 > n) {
    res.push(me1!);
  }
  if (c2 > n) {
    res.push(me2!);
  }
  return res;
}
