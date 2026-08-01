# 🎯 Solution 8 — Valid Sudoku

> **📁 File:** `src/valid-sudoku/solution.ts`

## 📋 Problem

Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the rules: each row, column, and 3x3 sub-box must contain digits 1-9 without repetition.

**🎯 Example:**
```
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

Output: true
```

## 💻 The Code

```typescript
export function isValidSudoku(board: string[][]): boolean {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const value = board[r]?.[c];

      if (value === ".") continue;

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (
        rows[r]?.has(value) ||
        cols[c]?.has(value) ||
        boxes[boxIndex]?.has(value)
      )
        return false;
      rows[r]?.add(value);
      cols[c]?.add(value);
      boxes[boxIndex]?.add(value);
    }
  }
  return true;
}
```

## 📖 Step-by-Step Explanation

1. **Initialize tracking structures**: Create 9 sets for rows, 9 sets for columns, and 9 sets for 3x3 boxes
2. **Iterate through each cell**: For every cell in the 9x9 board
3. **Skip empty cells**: If the cell contains `.`, move to the next
4. **Calculate box index**: Map (row, col) to box index using `Math.floor(r / 3) * 3 + Math.floor(c / 3)`
5. **Check for duplicates**: If the value exists in the row, column, or box set, return false
6. **Track the value**: Add the value to the corresponding row, column, and box sets
7. **Return true**: If no duplicates found after checking all cells

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(1)` | Always iterates through 81 cells (9×9 board) |
| 💾 Space | `O(1)` | Uses fixed-size arrays (27 sets total) |

### ▶️ How to Run

```bash
npx tsx src/valid-sudoku/solution.ts
```

---
