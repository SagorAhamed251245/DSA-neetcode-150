export const encodeDecode2 = {
  encode(strs: string[]) {
    let result = "";

    for (const str of strs) {
      result = result + ` ${str.length}#${str}`;
    }
    return result;
  },

  decode(str: string) {
    const result: string[] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      let word = str.substring(j + 1, j + 1 + length);

      result.push(word);
      i = j + 1 + length;
    }
    return result;
  },
};
