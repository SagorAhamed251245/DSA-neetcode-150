export function threeSum(nums: number[]): number[][] {
  const sorted = nums.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    const a = sorted[i]!;

    if (i > 0 && a === sorted[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = sorted.length - 1;

    while (l < r) {
      const sum = a + sorted[l]! + sorted[r]!;

      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([a, sorted[l]!, sorted[r]!]);

        l++;
        r--;

        while (l < r && sorted[l] === sorted[l - 1]) {
          l++;
        }

        while (l < r && sorted[r] === sorted[r + 1]) {
          r--;
        }
      }
    }
  }

  return res;
}
