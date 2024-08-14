/**
 *
 * Find the smallest string that greater than input
 * Note that output cannot have same value that are adjacent
 *
 * Input: abc
 * Output: abd
 *
 * Input: azzab
 * Output: babab
 *
 *
 */

const INDEX = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

/**
 * @param {string} prev
 * @param {string} s
 */
const getUpper = (s, prev) => {
  const foundIndex = INDEX.findIndex((v) => v === s);

  if (foundIndex === -1) return "?";

  if (foundIndex === 25) return -1; // Means we need to upper previous character

  if (!prev) return INDEX[foundIndex + 1];

  if (INDEX[foundIndex + 1] === prev) return INDEX[foundIndex + 2] ?? -1;

  return INDEX[foundIndex + 1];
};

/**
 * @param {number} num
 */
const generateLowest = (num) => {
  return Array.from({ length: num }, (_, i) => {
    return i % 2 === 0 ? "a" : "b";
  }).join("");
};

/**
 * @param {string} s
 */
const getUpperString = (s) => {
  let i = 0;

  let toUpper = false;

  let output = s;

  while (i < s.length) {
    if (i < 0) return -1;

    if (toUpper) {
      const upper = getUpper(s[i], s[i - 1]);

      if (upper === -1) {
        i -= 1;
        toUpper = true;
        continue;
      }

      return output.slice(0, i) + upper + generateLowest(output.length - i - 1);
    }

    // It's adjacent or it's last
    if (s[i] === s[i - 1] || i === s.length - 1) {
      toUpper = true;
      continue;
    }

    i++;
  }
  return output;
};

export const main = async () => {
  console.log(getUpperString("abbd") === "abca");
  console.log(getUpperString("zzab") === -1);
  console.log(getUpperString("azzab") === "babab");
  console.log(getUpperString("abbdd") === "abcab");
  console.log(getUpperString("abcddef") === "abcdeab");
  console.log(getUpperString("aaabcde") === "abababa");
  console.log(getUpperString("zaz") === "zba");
  console.log(getUpperString("aab") === "aba");
  console.log(getUpperString("z") === -1);
};
