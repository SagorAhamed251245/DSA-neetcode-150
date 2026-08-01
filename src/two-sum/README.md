# 🧩 Solution 1 — Two Sum

> **📁 File:** `src/two-sum/solution.ts`

## 📋 Problem

Given an array of numbers and a target number, find the **indices** of two numbers that add up to the target.

**🎯 Example:**
```
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]  → because nums[0] + nums[1] = 2 + 7 = 9
```

## 💻 The Code

```typescript
export function twoSum(nums: number[], target: number): number[] {
  let i = 0;

  while (i < nums.length) {
    const num = nums[i];
    if (num === undefined) break;

    const complete = target - num;
    const index = nums.indexOf(complete);

    if (index !== -1 && index !== i) {
      return [i, index];
    }

    i++;
  }

  return [];
}
```

## 📖 Step-by-Step Explanation

Let's say the input is:

```ts
nums = [2, 7, 11, 15], target = 9
```

We start with `i = 0`.

```ts
let i = 0;
```

---

### 🔄 1st Iteration

```ts
i = 0
num = nums[0] = 2
```

`complete` is the number we need to find so that adding it to `num` gives us `target`.

```ts
complete = target - num = 9 - 2 = 7
```

So we need to find **7** in the array, because 2 + 7 = 9.

Now we search for 7 using `indexOf`:

```ts
index = nums.indexOf(7) = 1
```

`indexOf` returns **1** — meaning 7 is at index 1 in the array.

Now we check:

```ts
if (index !== -1 && index !== i)
```

```ts
index !== -1  →  1 !== -1  →  ✅ true  (7 was found)
index !== i   →  1 !== 0   →  ✅ true  (it's a different position)
```

Both conditions pass → return `[0, 1]`.

> 🎉 **Done!** **2 + 7 = 9**, indices `[0, 1]`.

---

### ❓ What if 1st iteration doesn't match?

Say `target = 20`:

```ts
i = 0, num = 2, complete = 20 - 2 = 18
nums.indexOf(18) = -1  →  -1 !== -1 is false  →  ❌ no match
```

Then `i++` makes `i = 1`, and the loop continues.

---

### 🔄 2nd iteration (if 1st didn't match)

```ts
i = 1
num = nums[1] = 7
complete = 9 - 7 = 2
index = nums.indexOf(2) = 0
```

```ts
index !== -1  →  0 !== -1  →  ✅ true
index !== i   →  0 !== 1   →  ✅ true
```

return `[1, 0]` — also a valid answer.

---

### ❌ What if nothing matches?

Say `target = 100`:

```
i=0: complete=98, indexOf(98) = -1  → ❌ no match
i=1: complete=93, indexOf(93) = -1  → ❌ no match
i=2: complete=89, indexOf(89) = -1  → ❌ no match
i=3: complete=85, indexOf(85) = -1  → ❌ no match
```

Loop ends → `return []` — empty array.

---

### 🛡️ Why the `num === undefined` check?

```ts
if (num === undefined) break;
```

If the array has `undefined` values (holes), then `target - undefined = NaN`. This check prevents that.

---

### 🔒 Why `index !== i`?

This condition ensures we're **not using the same element twice**.

Say `target = 4`, `nums = [2, 7]`:

```
i=0: num=2, complete=2, indexOf(2)=0
index !== i → 0 !== 0 → ❌ false  → no match!
```

Because `[0, 0]` would mean using the same element twice, which isn't allowed.

---

### ⏱️ Complexity

| Metric | Value | Why |
|--------|-------|-----|
| 🕐 Time | `O(n²)` | For each element, `indexOf` scans the rest of the array |
| 💾 Space | `O(1)` | Only two variables used |

### ▶️ How to Run

```bash
npx tsx src/two-sum/solution.ts
```

---

---

# 🔢 Solution 11 — Two Sum II (Input Array Is Sorted)

> **📁 File:** `src/two-sum/solution2.ts`

## 📋 Problem

Given a sorted array of integers and a target, find two numbers that add up to the target and return their 1-indexed positions.

**🎯 Example:**
`[2, 7, 11, 15] target = 9 → [1, 2]`

## 💻 The Code

```typescript
// Approach 1: Linear Scan with indexOf
export function twoSum2(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i]!;
    const z = target;
    const y = z - x;

    const indexOfY = numbers.indexOf(y, i + 1);

    if (indexOfY !== -1) {
      return [i + 1, indexOfY + 1];
    }
  }
  return [];
}

// Approach 2: Two Pointers
export function twoSum2_1(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left]! + numbers[right]!;
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}
```

## 📖 Step-by-Step Explanation

### 🔸 Approach 1 — Linear Scan

For each element `x`, compute the complement `y = target - x` and search for `y` in the remaining array using `indexOf`. If found, return both indices (1-indexed).

### 🔹 Approach 2 — Two Pointers

Use two pointers at both ends. If the sum is too small, move left pointer right. If too big, move right pointer left. When sum equals target, return both indices (1-indexed).

### ⏱️ Complexity

| Approach | ⏱️ Time | 💾 Space | Notes |
|----------|---------|---------|-------|
| 🔸 Linear Scan | `O(n²)` | `O(1)` | indexOf scans remaining array each iteration |
| 🔹 Two Pointers | `O(n)` | `O(1)` | Single pass with two pointers |

### ▶️ How to Run

```bash
npx tsx src/two-sum/solution2.ts
```

---
