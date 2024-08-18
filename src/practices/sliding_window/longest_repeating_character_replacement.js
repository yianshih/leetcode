/**

424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0;

  // max window length
  let res = 0;

  // Counts of each char in current window
  const count = new Map();

  let maxCount = 0;

  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) ?? 0) + 1);

    maxCount = Math.max(maxCount, count.get(s[right]));

    const windowSize = right - left + 1;

    if (windowSize - maxCount > k) {
      count.set(s[left], (count.get(s[left]) ?? 0) - 1);
      left += 1;
    } else {
      res = Math.max(res, windowSize);
    }
  }

  return res;
};

export const main = async () => {
  console.log(characterReplacement("ABAB", 2) === 4);
  console.log(characterReplacement("AAAA", 2) === 4);
  console.log(characterReplacement("ABAA", 0) === 2);
  console.log(characterReplacement("AABABBA", 1) === 4);
};
