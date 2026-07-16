import { encodeDecode } from "./encodeDecode.js";
import { encodeDecode2 } from "./encodeDecode2.js";
import { groupAnagrams } from "./groupAnagrams.js";
import { isValidSudoku } from "./isValidSudoku.js";
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
};

console.log(
  Solution.isValidSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
