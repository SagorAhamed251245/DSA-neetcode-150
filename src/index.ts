import { encodeDecode } from "./encodeDecode.js";
import { encodeDecode2 } from "./encodeDecode2.js";
import { groupAnagrams } from "./groupAnagrams.js";
import { isValidSudoku } from "./isValidSudoku.js";
import { longestConsecutive } from "./longestConsecutive.js";
import { productExceptSelf } from "./productExceptSelf.js";
import { topKFrequent } from "./topKFrequent.js";
import { topKFrequent2 } from "./topKFrequent2.js";
import { twoSum } from "./two-sum.js";

const Solution = {
  twoSum,
  groupAnagrams,
  topKFrequent,
  topKFrequent2,
  encodeDecode,
  encodeDecode2,
  productExceptSelf,
  isValidSudoku,
  longestConsecutive,
};

console.log(Solution.longestConsecutive([2, 20, 4, 10, 3, 4, 5]));
