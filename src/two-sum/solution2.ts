// Two Integer Sum II

export function twoSum2(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i]!;
    const z = target;
    const y = z - x;

    const indexOfY = numbers.indexOf(y, i + 1);

    if (indexOfY !== -1) {
      return [i + 1, indexOfY + 1];
    }
  }
  return [];
}

export function twoSum2_1(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left]! + numbers[right]!;
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
