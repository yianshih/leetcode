// Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.reduce((acc, curr) => acc + curr.length + "#" + curr, "");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const strs = [];
    for (let i = 0; i < str.length; i++) {
      if (!Number.isInteger(Number(str[i]))) continue;

      let dPos = i + 1;

      while (str[dPos] !== "#") {
        dPos += 1;
      }

      const count = Number(str.substring(i, dPos));

      let start = dPos + 1;
      let end = start + count;

      const word = str.substring(start, end);

      strs.push(word);
      i += Number(count) + 1;
    }
    return strs;
  }
}

/**
 * @param {string[]} test
 * @returns {boolean}
 */
const test = (test) => {
  const solution = new Solution();

  const decoded = solution.decode(solution.encode(test));

  let result = true;

  for (let i = 0; i < decoded.length; i++) {
    result = decoded[i] === test[i];
    if (!result) {
      return result;
    }
  }
  return result;
};

export const main = async () => {
  const test1 = ["neet", "code", "love", "you"];
  const test2 = ["we", "say", ":", "yes", "!@#$%^&*()"];

  console.log(test(test1));
  console.log(test(test2));
};
