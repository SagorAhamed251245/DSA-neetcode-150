export function longestConsecutive(nums: number[]): number {
  if (nums.length === 0 || nums === null) {
    return 0;
  }
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longest = Math.max(longest, currentStreak);
    }
  }
  return longest;
}
