# ✖️ Solution 7 — Product of Array Except Self

> **📁 File:** `src/product-except-self/solution.ts`

## 📋 Problem

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`. You must write an algorithm that runs in `O(n)` time and without using the division operation.

**🎯 Example:**
```
Input:  nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]  → answer[0] = 2×3×4 = 24, answer[1] = 1×3×4 = 12, etc.
```

This file contains **2 approaches**, each improving on the last.

---

## 🔸 Approach 1 — Brute Force (Nested Loop)

```typescript
export function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let res = 1;
    for (let j = 0; j < nums.length; j++) {
      const element: number = nums[j] as number;
      if (j !== i) {
        res = res * element;
      }
    }
    result.push(res);
  }
  return result;
}
```

### 📖 Step-by-Step Explanation

Let's say input is:

```ts
nums = [1, 2, 3, 4]
```

We loop through each element. For each position `i`, we multiply all **other** elements together (skipping index `i`).

---

#### 🔄 1st Iteration

```ts
i = 0, res = 1
```

Loop through all elements:

```ts
j=0: j === i → skip
j=1: res = 1 × 2 = 2
j=2: res = 2 × 3 = 6
j=3: res = 6 × 4 = 24
```

```ts
result.push(24)
result = [24]
```

> 📝 **24** = product of everything except `nums[0]` (1) = 2 × 3 × 4

---

#### 🔄 2nd Iteration

```ts
i = 1, res = 1
```

```ts
j=0: res = 1 × 1 = 1
j=1: j === i → skip
j=2: res = 1 × 3 = 3
j=3: res = 3 × 4 = 12
```

```ts
result.push(12)
result = [24, 12]
```

---

#### 🔄 3rd Iteration

```ts
i = 2, res = 1
```

```ts
j=0: res = 1 × 1 = 1
j=1: res = 1 × 2 = 2
j=2: j === i → skip
j=3: res = 2 × 4 = 8
```

```ts
result.push(8)
result = [24, 12, 8]
```

---

#### 🔄 4th Iteration

```ts
i = 3, res = 1
```

```ts
j=0: res = 1 × 1 = 1
j=1: res = 1 × 2 = 2
j=2: res = 2 × 3 = 6
j=3: j === i → skip
```

```ts
result.push(6)
result = [24, 12, 8, 6]
```

---

### 🎯 Return

```ts
return [24, 12, 8, 6]
```

> 🎉 **Correct!**

---

### ⚠️ Why is this approach slow?

For each of the `n` elements, we scan through all `n` elements again.

```
n elements × n scans = O(n²) operations
```

---

## 🔹 Approach 2 — Prefix & Suffix Arrays (Optimal)

```typescript
export function productExceptSelf2(nums: number[]): number[] {
  const result: number[] = [];
  const length = nums.length;
  let left: number[] = Array(length);
  let right: number[] = Array(length);
  left[0] = 1;
  right[length - 1] = 1;

  for (let i = 1; i < length; i++) {
    left[i] = (left[i - 1] as number) * (nums[i - 1] as number);
  }
  for (let i = length - 2; i >= 0; i--) {
    right[i] = (nums[i + 1] as number) * (right[i + 1] as number);
  }
  for (let i = 0; i < length; i++) {
    result.push((left[i] as number) * (right[i] as number));
  }

  return result;
}
```

### 📖 Key Idea

Instead of recalculating the product for each position, precompute:

- **left[i]** = product of all elements to the **left** of index `i`
- **right[i]** = product of all elements to the **right** of index `i`

Then: `answer[i] = left[i] × right[i]`

---

### 📖 Step-by-Step Explanation

```ts
nums = [1, 2, 3, 4], length = 4
```

Initialize:

```ts
left = [_, _, _, _]
right = [_, _, _, _]
left[0] = 1
right[3] = 1
```

---

#### 🔹 Step 1 — Build Left Array

```ts
for (let i = 1; i < length; i++)
  left[i] = left[i-1] * nums[i-1]
```

- `i=1`: `left[1] = left[0] × nums[0] = 1 × 1 = 1`
- `i=2`: `left[2] = left[1] × nums[1] = 1 × 2 = 2`
- `i=3`: `left[3] = left[2] × nums[2] = 2 × 3 = 6`

```
left = [1, 1, 2, 6]
         ↑  ↑  ↑  ↑
        1  1  1×2  1×2×3
```

> 📝 **left[i]** = product of all elements **before** index `i`

---

#### 🔹 Step 2 — Build Right Array

```ts
for (let i = length - 2; i >= 0; i--)
  right[i] = nums[i+1] * right[i+1]
```

- `i=2`: `right[2] = nums[3] × right[3] = 4 × 1 = 4`
- `i=1`: `right[1] = nums[2] × right[2] = 3 × 4 = 12`
- `i=0`: `right[0] = nums[1] × right[1] = 2 × 12 = 24`

```
right = [24, 12, 4, 1]
          ↑   ↑  ↑  ↑
        2×3×4  3×4  4  1
```

> 📝 **right[i]** = product of all elements **after** index `i`

---

#### 🔹 Step 3 — Multiply Left × Right

```ts
for (let i = 0; i < length; i++)
  result.push(left[i] * right[i])
```

```
i=0: left[0] × right[0] = 1 × 24 = 24
i=1: left[1] × right[1] = 1 × 12 = 12
i=2: left[2] × right[2] = 2 × 4  = 8
i=3: left[3] × right[3] = 6 × 1  = 6
```

```ts
result = [24, 12, 8, 6]
```

---

### 🎯 Return

```ts
return [24, 12, 8, 6]
```

> 🎉 **Same result, but O(n) instead of O(n²)!**

---

### 💡 Visual Summary

```
nums:     [1,   2,   3,   4]

left:     [1,   1,   2,   6]    ← product of elements before i
right:    [24, 12,   4,   1]    ← product of elements after i

answer:   [24, 12,   8,   6]    ← left[i] × right[i]
```

---

### ⏱️ Complexity

| Approach | ⏱️ Time | 💾 Space | Notes |
|----------|---------|---------|-------|
| 🔸 Brute Force | `O(n²)` | `O(1)` | Nested loops |
| 🔹 Prefix/Suffix | `O(n)` | `O(n)` | Three passes — optimal |

### ▶️ How to Run

```bash
npx tsx src/product-except-self/solution.ts
```

---
