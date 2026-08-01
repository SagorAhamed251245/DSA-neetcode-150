export function maxArea(heights: number[]): number {
  let l = 0;
  let r = heights.length - 1;

  let maxA = 0;

  while (l < r) {
    let h = Math.min(heights[l]!, heights[r]!);
    let w = r - l;
    let a = h * w;
    maxA = Math.max(maxA, a);
    if (heights[l]! < heights[r]!) {
      l++;
    } else {
      r--;
    }
  }

  return maxA;
}
