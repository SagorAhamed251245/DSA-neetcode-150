export const Solution = {
  hasDuplicate(nums: number[]): boolean {
    let isTrue = false;
    for (let index = 0; index < nums.length && isTrue === false; index++) {
      const element = nums[index] as number;
      const checkTrue = check(element);

      if (checkTrue) {
        isTrue = true;
        return true;
      }
    }

    function check(value: number) {
      const count = nums.filter((num) => num === value);
      if (count.length > 1) {
        return true;
      } else {
        return false;
      }
    }
    return isTrue;
  },

  hasDuplicate2(nums: number[]): boolean {
    const NewSet = new Set();

    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      NewSet.add(element);
    }

    return NewSet.size !== nums.length;
  },

  hasDuplicate3(nums: number[]): boolean {
    return new Set(nums).size !== nums.length;
  },
};
