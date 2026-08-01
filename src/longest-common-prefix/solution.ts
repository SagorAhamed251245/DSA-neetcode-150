export function longestCommonPrefix(strs: string[]): string {
  const sort = strs.sort();
  const f = sort[0]!;
  const l = sort[sort.length - 1]!;
  let res = "";
  let match = true;

  if (f?.length > l?.length) {
    for (let i = 0; i < l.length && match; i++) {
      match = l[i] === f[i];

      if (!match) {
        match = false;
      } else {
        res = res + l[i];
      }
    }
  } else {
    for (let i = 0; i < f.length && match; i++) {
      match = f[i] === l[i];

      if (!match) {
        match = false;
      } else {
        res = res + f[i];
      }
    }
  }

  return res;
}
