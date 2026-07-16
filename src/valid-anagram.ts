const Solution = {
  isAnagram(s: string, t: string): boolean {
    return [...s].sort().join("") === [...t].sort().join("");
  },
};
console.log(Solution.isAnagram("jar", "jam"));
