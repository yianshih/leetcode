/**

[Medium]

3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let max = 0;
  let currentSet = new Set();

  for (let right = 0; right < s.length; right++) {
    // Remove all letter before and include the repeat
    while (currentSet.has(s[right])) {
      currentSet.delete(s[left]);
      left += 1;
    }

    currentSet.add(s[right]);
    max = Math.max(max, currentSet.size);
  }

  return max;
};

export const main = async () => {
  console.log(lengthOfLongestSubstring("abcabcbb") === 3);
  console.log(lengthOfLongestSubstring("bbbbb") === 1);
  console.log(lengthOfLongestSubstring("pwwkew") === 3);
  console.log(lengthOfLongestSubstring("au") === 2);
  console.log(lengthOfLongestSubstring(" ") === 1);
  console.log(lengthOfLongestSubstring("abcb") === 3);
  console.log(lengthOfLongestSubstring("abc") === 3);
};
