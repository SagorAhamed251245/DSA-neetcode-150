# 🔐 Solution 6 — Encode & Decode Strings

> **📁 File:** `src/encode-decode/solution.ts`

## 📋 Problem

Design an algorithm to encode a list of strings to a single string, and decode it back to the original list.

**🎯 Example:**
```
Input:  ["hello", "world"]
Output after encode: a single string
Output after decode: ["hello", "world"]
```

---

## 🔸 Approach 1 — XOR Encoding (`encodeDecode.ts`)

```typescript
export const encodeDecode = {
  encode(strs: string[]) {
    const KEY = 123;

    return strs
      .map((word) => {
        const encoded = [...word]
          .map((ch) => (ch.charCodeAt(0) ^ KEY).toString(2))
          .join(" ");

        return `${word.length}:${encoded}`;
      })
      .join(" | ");
  },

  decode(str: string) {
    const KEY = 123;

    if (str === "") return [];

    return str.split(" | ").map((item) => {
      const [, encoded] = item.split(":");

      if (!encoded) return "";

      return encoded
        .split(" ")
        .map((binary) => String.fromCharCode(parseInt(binary, 2) ^ KEY))
        .join("");
    });
  },
};
```

### 📖 Step-by-Step Encoding

Let's say input is:

```ts
strs = ["hi"]
```

KEY = 123

---

#### 🔹 Step 1 — XOR each character with KEY

```ts
[...word] → ["h", "i"]
```

```ts
'h'.charCodeAt(0) = 104
104 ^ 123 = 27 → .toString(2) → "11011"

'i'.charCodeAt(0) = 105
105 ^ 123 = 26 → .toString(2) → "11010"
```

> 💡 **What does XOR (`^`) do?** Compares two binary numbers. Same bit = 0, different bit = 1. XOR with 123 encrypts the character.

---

#### 🔹 Step 2 — Join binary values with spaces

```ts
.join(" ") → "11011 11010"
```

---

#### 🔹 Step 3 — Add word length as prefix

```ts
`${word.length}:${encoded}` → "2:11011 11010"
```

> 📝 **Why length?** During decoding, we need to know how much binary belongs to one character.

---

#### 🔹 Step 4 — Join all words with " | "

```ts
strs = ["hi", "yo"]
```

```
"hi" → "2:11011 11010"
"yo" → "2:1111010 1100111"
```

Result:

```
"2:11011 11010 | 2:1111010 1100111"
```

---

### 📖 Step-by-Step Decoding

Let's say encoded string is:

```ts
str = "2:11011 11010"
```

---

#### 🔹 Step 1 — Split by " | "

```ts
str.split(" | ") → ["2:11011 11010"]
```

One word, so one element.

---

#### 🔹 Step 2 — Split by ":"

```ts
item = "2:11011 11010"
item.split(":") → ["2", "11011 11010"]
```

```ts
[, encoded] = ["2", "11011 11010"]
```

`encoded = "11011 11010"`

---

#### 🔹 Step 3 — Convert binary back to characters

```ts
encoded.split(" ") → ["11011", "11010"]
```

XOR each binary with KEY again (same operation reverses it):

```ts
"11011" → parseInt("11011", 2) = 27
27 ^ 123 = 104 → String.fromCharCode(104) = "h"

"11010" → parseInt("11010", 2) = 26
26 ^ 123 = 105 → String.fromCharCode(105) = "i"
```

```ts
.join("") → "hi"
```

> 🎉 **Correct!** "hi" is restored.

---

### 💡 Why XOR works

```
 encode: char ^ KEY = encrypted
 decode: encrypted ^ KEY = char
```

> 📝 **XOR rule:** `a ^ b ^ b = a`

So if `104 ^ 123 = 27`, then `27 ^ 123 = 104`. Applying the same operation twice returns the original value.

---

## 🔹 Approach 2 — Length-Prefix Encoding (`encodeDecode2.ts`)

```typescript
export const encodeDecode2 = {
  encode(strs: string[]) {
    let result = "";

    for (const str of strs) {
      result = result + ` ${str.length}#${str}`;
    }
    return result;
  },

  decode(str: string) {
    const result: string[] = [];
    let i = 0;
    while (i < str.length) {
      let j = i;

      while (str[j] !== "#") {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      let word = str.substring(j + 1, j + 1 + length);

      result.push(word);
      i = j + 1 + length;
    }
    return result;
  },
};
```

### 📖 Step-by-Step Encoding

Let's say input is:

```ts
strs = ["hello", "world"]
```

---

#### 🔄 1st Iteration

```ts
str = "hello"
str.length = 5
```

```ts
result = "" + " 5#hello" = " 5#hello"
```

> 💡 **Pattern:** `length#word` — length first, then `#`, then the word.

---

#### 🔄 2nd Iteration

```ts
str = "world"
str.length = 5
```

```ts
result = " 5#hello" + " 5#world" = " 5#hello 5#world"
```

---

#### 🎯 Final result

```
" 5#hello 5#world"
```

---

### 📖 Step-by-Step Decoding

```ts
str = " 5#hello 5#world"
i = 0
```

---

#### 🔄 1st Iteration

```ts
i = 0
j = 0
```

`str[0] = " "` — not `#` → `j++`

```ts
j = 1 → str[1] = "5" — not `#` → j++
j = 2 → str[2] = "#" — found! 🛑 stop
```

```ts
length = parseInt(str.substring(0, 2)) = parseInt(" 5") = 5
word = str.substring(3, 3 + 5) = str.substring(3, 8) = "hello"
```

```ts
result = ["hello"]
i = 8
```

---

#### 🔄 2nd Iteration

```ts
i = 8
j = 8
```

```ts
j = 8 → str[8] = " " — not `#` → j++
j = 9 → str[9] = "5" — not `#` → j++
j = 10 → str[10] = "#" — found! 🛑 stop
```

```ts
length = parseInt(str.substring(8, 10)) = parseInt(" 5") = 5
word = str.substring(11, 11 + 5) = str.substring(11, 16) = "world"
```

```ts
result = ["hello", "world"]
i = 16 → past str.length → 🛑 loop ends
```

---

### 🎯 Return

```ts
["hello", "world"]
```

> 🎉 **Correct!**

---

### ❓ Why "#" as delimiter?

`#` is a separator — it can't appear inside the word (problem constraint). So it works as a divider between length and word.

> 💡 **Pattern:** `length#word`

During decoding, we find `#` to get the length, then use that length to extract the word.

---

### ⏱️ Complexity

| Approach | ⏱️ Time | 💾 Space | Notes |
|----------|---------|---------|-------|
| 🔸 XOR | `O(n × k)` | `O(n × k)` | Uses binary encoding |
| 🔹 Length-Prefix | `O(n × k)` | `O(n × k)` | Simpler, more common in interviews |

### ▶️ How to Run

```bash
npx tsx src/encode-decode/solution.ts
```

---
