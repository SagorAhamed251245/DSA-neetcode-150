import { encodeDecode } from "./encodeDecode.js";
import { encodeDecode2 } from "./encodeDecode2.js";
import { groupAnagrams } from "./groupAnagrams.js";
import { isPalindrome } from "./isPalindrome.js";
import { isValidSudoku } from "./isValidSudoku.js";
import { longestConsecutive } from "./longestConsecutive.js";
import { maxArea } from "./maxArea.js";
import { productExceptSelf } from "./productExceptSelf.js";
import { threeSum } from "./threeSum.js";
import { topKFrequent } from "./topKFrequent.js";
import { topKFrequent2 } from "./topKFrequent2.js";
import { twoSum } from "./two-sum.js";
import { twoSum2, twoSum2_1 } from "./twoSum.js";

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
  isPalindrome,
  twoSum2,
  twoSum2_1,
  threeSum,
  maxArea,
};

console.log(Solution.maxArea([1, 7, 2, 5, 4, 7, 3, 6]));
