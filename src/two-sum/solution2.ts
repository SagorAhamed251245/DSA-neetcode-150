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

