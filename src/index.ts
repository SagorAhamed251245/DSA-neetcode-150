import { MyHashMap } from "./design-hashmap/solution.js";
import { MyHashSet } from "./design-hashset/solution.js";
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
import { twoSum2 } from "./two-sum/solution2.js";
import { majorityElementII } from "./majority-element-ii/solution2.js";
import { subarraySum } from "./subarray-sum-equals-k/solution.js";
import { firstMissingPositive } from "./firstMissingPositive/solution.js";
import { firstUniqChar } from "./firstUniqChar/solution.js";
import { bestTimeToBuyAndSellStockIi } from "./best-time-to-buy-and-sell-stock-II/solution.js";
import { Solution as ValidAnagram } from "./valid-anagram/solution.js";
import { Solution as ContainsDuplicate } from "./contains-duplicate/solution.js";

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
  threeSum,
  maxArea,
  getConcatenation,
  longestCommonPrefix,
  removeElement,
  majorityElement,
  majorityElementApproachTwo,
  MyHashMap,
  MyHashSet,
  sortArray,
  NumMatrix,
  majorityElementII,
  subarraySum,
  firstMissingPositive,
  firstUniqChar,
  bestTimeToBuyAndSellStockIi,
  ValidAnagram,
  ContainsDuplicate,
};

const result = Solution.firstMissingPositive([1, 2, 4, 5, 6, 3, 1]);
console.log(result);
