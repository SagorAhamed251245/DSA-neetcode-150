export function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  function nonAlpha(str: string) {
    return str.replace(/[^a-zA-Z0-9]/g, "");
  }

  while (i < j) {
    const left = s[i]!;
    const right = s[j]!;
    if (nonAlpha(left) === "") {
      i++;
      continue;
    }

    if (nonAlpha(right) === "") {
      j--;
      continue;
    }

    if (nonAlpha(left).toLowerCase() !== nonAlpha(right).toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }

  return true;
}
