# 🚀 DSA Problem Solving App

> 🎯 **100 Days Challenge** — Master Data Structures & Algorithms, one problem at a time.

A TypeScript-based application for practicing Data Structures and Algorithms problems with detailed step-by-step explanations.

---

## 📚 Table of Contents

| # | Topic | Status |
|---|-------|--------|
| 1 | [🎯 Project Overview](#-project-overview) | ✅ |
| 2 | [⚙️ Tech Stack](#️-tech-stack) | ✅ |
| 3 | [📁 Project Structure](#-project-structure) | ✅ |
| 4 | [🔧 Setup & Installation](#-setup--installation) | ✅ |
| 5 | [▶️ How to Run](#️-how-to-run) | ✅ |
| 6 | [🧩 Solutions](#-solutions) | ✅ |
| 7 | [➕ Adding New Problems](#-adding-new-problems) | ✅ |
| 8 | [💡 Tips](#-tips) | ✅ |

---

## 🎯 Project Overview

This app is part of a **100 Days Challenge** for mastering DSA. Each folder in `src/` contains a solution to a specific coding problem, written in TypeScript.

> **🎯 Goal:** Solve problems consistently, build pattern recognition, and improve problem-solving skills.

### 📈 What You'll Learn

| Skill | Description |
|-------|-------------|
| 🧠 Pattern Recognition | Identify common DSA patterns |
| ⏱️ Time Complexity | Analyze and optimize solutions |
| 🏗️ Data Structures | Master arrays, maps, sets, and more |
| 🔄 Problem Solving | Build algorithmic thinking |

---

## ⚙️ Tech Stack

| Tool | Purpose | Icon |
|------|---------|------|
| **TypeScript** | Type-safe solution code | 🔷 |
| **Node.js** | Runtime environment | 🟢 |
| **tsx** | Direct TS execution (dev mode) | ⚡ |

---

## 📁 Project Structure

```
📦 P_S/
├── 📂 src/
│   ├── 📄 index.ts                 # 🚀 Entry point
│   ├── 📂 two-sum/                 # 🎯 Two Sum problems
│   │   ├── 📄 solution.ts
│   │   ├── 📄 solution2.ts
│   │   └── 📄 README.md
│   ├── 📂 valid-anagram/           # 🔀 Valid Anagram
│   │   ├── 📄 solution.ts
│   │   └── 📄 README.md
│   ├── 📂 contains-duplicate/      # 🔁 Contains Duplicate
│   │   ├── 📄 solution.ts
│   │   └── 📄 README.md
│   └── ... (18 more folders)
├── 📄 package.json
├── 📄 tsconfig.json
└── 📄 readme.md                    # 📖 This file
```

---

## 🔧 Setup & Installation

### Step 1: 📂 Navigate to Project

```bash
cd "E:\100 days chalanges\DSA\P_S"
```

### Step 2: 📥 Install Dependencies

```bash
npm install
```

### Step 3: ✅ Verify Installation

```bash
npx tsx --version
```

> 💡 **Tip:** If you see a version number, you're good to go!

---

## ▶️ How to Run

```bash
# 🔄 Dev mode with auto-reload
npm run dev

# 🚀 Production mode
npm start

# 🎯 Run a single problem
npx tsx src/two-sum/solution.ts

# 🎯 Run all problems
npx tsx src/index.ts
```

---

## 🧩 Solutions

| # | Problem | Folder | Difficulty |
|---|---------|--------|------------|
| 1 | [Two Sum](src/two-sum/README.md) | `two-sum/` | Easy |
| 2 | [Valid Anagram](src/valid-anagram/README.md) | `valid-anagram/` | Easy |
| 3 | [Contains Duplicate](src/contains-duplicate/README.md) | `contains-duplicate/` | Easy |
| 4 | [Top K Frequent Elements](src/top-k-frequent/README.md) | `top-k-frequent/` | Medium |
| 5 | [Group Anagrams](src/group-anagrams/README.md) | `group-anagrams/` | Medium |
| 6 | [Encode & Decode Strings](src/encode-decode/README.md) | `encode-decode/` | Medium |
| 7 | [Product of Array Except Self](src/product-except-self/README.md) | `product-except-self/` | Medium |
| 8 | [Valid Sudoku](src/valid-sudoku/README.md) | `valid-sudoku/` | Medium |
| 9 | [Longest Consecutive Sequence](src/longest-consecutive-sequence/README.md) | `longest-consecutive-sequence/` | Medium |
| 10 | [Valid Palindrome](src/valid-palindrome/README.md) | `valid-palindrome/` | Easy |
| 11 | [Two Sum II](src/two-sum/README.md) | `two-sum/` | Medium |
| 12 | [Three Sum](src/three-sum/README.md) | `three-sum/` | Medium |
| 13 | [Container With Most Water](src/container-with-most-water/README.md) | `container-with-most-water/` | Medium |
| 14 | [Concatenate Array](src/concatenate-array/README.md) | `concatenate-array/` | Easy |
| 15 | [Longest Common Prefix](src/longest-common-prefix/README.md) | `longest-common-prefix/` | Easy |
| 16 | [Design HashMap](src/design-hashmap/README.md) | `design-hashmap/` | Medium |
| 17 | [Design HashSet](src/design-hashset/README.md) | `design-hashset/` | Easy |
| 18 | [Majority Element](src/majority-element/README.md) | `majority-element/` | Easy |
| 19 | [Remove Element](src/remove-element/README.md) | `remove-element/` | Easy |
| 20 | [Sort Array](src/sort-array/README.md) | `sort-array/` | Medium |
| 21 | [Range Sum Query 2D](src/range-sum-query-2d/README.md) | `range-sum-query-2d/` | Medium |
| 22 | [Best Time to Buy and Sell Stock II](src/best-time-to-buy-and-sell-stock-II/README.md) | `best-time-to-buy-and-sell-stock-II/` | Easy |
| 23 | [First Missing Positive](src/firstMissingPositive/README.md) | `firstMissingPositive/` | Hard |
| 24 | [First Unique Character in a String](src/firstUniqChar/README.md) | `firstUniqChar/` | Easy |
| 25 | [Majority Element II](src/majority-element-ii/README.md) | `majority-element-ii/` | Medium |
| 26 | [Subarray Sum Equals K](src/subarray-sum-equals-k/README.md) | `subarray-sum-equals-k/` | Medium |

---

## ➕ Adding New Problems

1. Create a new folder in `src/` with kebab-case name (e.g., `two-sum/`)
2. Add `solution.ts` with your implementation
3. Add `README.md` with problem description and explanation
4. Update `src/index.ts` to import and use the new solution
5. Update this file's solution table above

---

## 💡 Tips

- **Start with the problem statement** before looking at the solution
- **Analyze time/space complexity** for each solution
- **Practice explaining** your solution out loud
- **Review multiple approaches** when available
- **Use the diagrams** in `diagram.excalidraw` files for visual understanding

---

## 📝 Progress Tracker

| Day | Problems Solved | Notes |
|-----|-----------------|-------|
| 1 | 3 | Two Sum, Valid Anagram, Contains Duplicate |
| 2 | 2 | Top K Frequent, Group Anagrams |
| ... | ... | ... |

---

> 🎯 **Keep going! Every problem you solve makes you a better programmer.**