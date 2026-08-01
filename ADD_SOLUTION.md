# How to Add a New Solution

## New Workflow (Folder-Based)

### Step 1: Create Solution Folder

Create a new folder in `src/` with kebab-case name:

```bash
mkdir src/[problem-name]
```

Example: `mkdir src/two-sum`

### Step 2: Add Solution File

Create `solution.ts` in the new folder:

```typescript
// src/[problem-name]/solution.ts

export function solutionName(params: type): returnType {
  // Your implementation
}

// Demo
console.log(solutionName(exampleInput));
```

### Step 3: Add README.md

Create `README.md` in the same folder with:

```markdown
# Problem Name

> **📁 File:** `src/[problem-name]/solution.ts`

## 📋 Problem

[Problem description]

**🎯 Example:**
[Example input/output]

## 💻 The Code

[Full code from solution.ts]

## 📖 Step-by-Step Explanation

[Detailed walkthrough]

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(?)` | [reason] |
| 💾 Space | `O(?)` | [reason] |

### ▶️ How to Run

```bash
npx tsx src/[problem-name]/solution.ts
```
```

### Step 4: Update src/index.ts

Add import and export to `src/index.ts`:

```typescript
import { solutionName } from "./[problem-name]/solution.js";

const Solution = {
  // ... existing solutions
  solutionName,
};
```

### Step 5: Update Root readme.md

Add a row to the Solutions table in `readme.md`:

```markdown
| # | [Problem Name](src/[problem-name]/README.md) | `[problem-name]/` | Easy/Medium/Hard |
```

---

## Quick Prompt for AI

```
Add a new DSA solution to this project.

Folder: src/[problem-name]/
Problem: [Problem Name]
Difficulty: [Easy/Medium/Hard]
Pattern: [Pattern Name]
Example: [input] → [output]

Steps:
1. Create src/[problem-name]/solution.ts
2. Create src/[problem-name]/README.md
3. Update src/index.ts imports
4. Update readme.md solution table
```

---

## Token Budget

| Action | Tokens |
|--------|--------|
| Create folder + 2 files | ~100 |
| Update index.ts | ~50 |
| Update readme.md | ~50 |
| **Total** | **~200** |

vs old workflow = **~5000+ tokens**

---

## File Naming Convention

- Folder: `kebab-case` (e.g., `two-sum/`, `valid-anagram/`)
- Solution: `solution.ts` (primary), `solution2.ts` (alternative)
- README: `README.md` (always in the folder)

---

## Icon Reference

| Category | Icon |
|----------|------|
| Hash Map / Hash Set | 🗂️ 🔐 🔒 |
| Two Pointers / Sliding Window | 👈 👉 🔀 |
| Sorting | 🔄 📊 |
| Binary Search | 🎯 |
| Stack / Queue | 📚 📥 |
| Tree / Graph | 🌳 🔗 |
| Dynamic Programming | 📈 🧩 |
| String Manipulation | ✏️ 🔤 |
| Math / Bit Manipulation | ➖ ➕ ✖️ 🔢 |
| Linked List | 🔗 |
| Prefix/Suffix | ✖️ |
| Default | 🧩 |

---

## Example: Adding "Two Sum II"

```bash
# 1. Create folder
mkdir src/two-sum-ii

# 2. Create solution.ts
cat > src/two-sum-ii/solution.ts << 'EOF'
export function twoSumII(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return [];
}

console.log(twoSumII([2, 7, 11, 15], 9));
EOF

# 3. Create README.md (similar format as above)

# 4. Update src/index.ts with import

# 5. Update readme.md with new row in Solutions table
```