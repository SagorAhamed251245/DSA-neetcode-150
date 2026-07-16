export function groupAnagrams(strs: string[]): string[][] {
  const anagramGroups = new Map<string, string[]>();

  for (const str of strs) {
    const sortedKey = [...str].sort().join("");
    if (!anagramGroups.has(sortedKey)) {
      anagramGroups.set(sortedKey, []);
    }

    anagramGroups.get(sortedKey)!.push(str);
  }
  return Array.from(anagramGroups.values());
}
