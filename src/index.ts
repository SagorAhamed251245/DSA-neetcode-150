import { MyHashMap } from "./design-hashmap/solution.js";
import { encodeDecode } from "./encode-decode/solution.js";
import { encodeDecode2 } from "./encode-decode/solution2.js";
import { getConcatenation } from "./concatenate-array/solution.js";
import { groupAnagrams } from "./group-anagrams/solution.js";
import { isPalindrome } from "./valid-palindrome/solution.js";
import { isValidSudoku } from "./valid-sudoku/solution.js";
import { longestCommonPrefix } from "./longest-common-prefix/solution.js";
import { longestConsecutive } from "./longest-consecutive-sequence/solution.js";
import {
  majorityElement,
  majorityElementApproachTwo,
} from "./majority-element/solution.js";
import { maxArea } from "./container-with-most-water/solution.js";
import { productExceptSelf } from "./product-except-self/solution.js";
import { NumMatrix } from "./range-sum-query-2d/solution.js";
import { removeElement } from "./remove-element/solution.js";
import { sortArray } from "./sort-array/solution.js";
import { threeSum } from "./three-sum/solution.js";
import { topKFrequent } from "./top-k-frequent/solution.js";
import { topKFrequent2 } from "./top-k-frequent/solution2.js";
import { twoSum } from "./two-sum/solution.js";
import { twoSum2, twoSum2_1 } from "./two-sum/solution2.js";

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
  NumMatrix,
};

const result = new Solution.NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
result.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
console.log(result);
