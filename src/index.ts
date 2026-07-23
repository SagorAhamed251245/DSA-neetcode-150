import { MyHashMap } from "./designHashMap.js";
import { encodeDecode } from "./encodeDecode.js";
import { encodeDecode2 } from "./encodeDecode2.js";
import { getConcatenation } from "./getConcatenation.js";
import { groupAnagrams } from "./groupAnagrams.js";
import { isPalindrome } from "./isPalindrome.js";
import { isValidSudoku } from "./isValidSudoku.js";
import { longestCommonPrefix } from "./longestCommonPrefix.js";
import { longestConsecutive } from "./longestConsecutive.js";
import {
  majorityElement,
  majorityElementApproachTwo,
} from "./majorityElement.js";
import { maxArea } from "./maxArea.js";
import { productExceptSelf } from "./productExceptSelf.js";
import { removeElement } from "./removeElement.js";
import { sortArray } from "./sortArray.js";
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
  getConcatenation,
  longestCommonPrefix,
  removeElement,
  majorityElement,
  majorityElementApproachTwo,
  MyHashMap,
  sortArray,
};

const result = Solution.sortArray([10, 9, 1, 1, 1, 2, 3, 1]);
console.log(result);
