export function firstUniqChar(s: string): number {
  let map = new Map<string, number>();

  for (const element of s) {
    if (!map.has(element)) {
      map.set(element, 1);
    } else {
      map.set(element, map.get(element)! + 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]!) === 1) {
      return i;
    }
  }
  return -1;
}
