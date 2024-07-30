/**
Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 */

const DIGIT_LETTER = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits?.length) {
    return [];
  }

  const collections = [];

  const getCombination = (idx, comb) => {
    if (idx === digits.length) {
      collections.push(comb);
      return;
    }
    for (let letter of DIGIT_LETTER[digits[idx]]) {
      getCombination(idx + 1, comb + letter);
    }
  };

  getCombination(0, "");

  return collections;
};

export const main = async () => {
  console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
};
