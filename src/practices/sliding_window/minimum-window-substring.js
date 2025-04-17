/**
 * 

[hard]

76. Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const requiredCount = {};
  const windowCount = {};

  for (let i = 0; i < t.length; i++) {
    requiredCount[t[i]] = (requiredCount[t[i]] ?? 0) + 1;
    windowCount[t[i]] = 0;
  }

  let left = 0;

  let minWindow = "";

  let windowSize = 0; // To store if all required character are found

  const requiredSize = new Set(t).size; // Size of all required character

  for (let right = 0; right < s.length; right++) {
    if (requiredCount[s[right]]) {
      windowCount[s[right]] += 1;
      // Found exact required count of a character
      if (windowCount[s[right]] === requiredCount[s[right]]) {
        windowSize += 1;
        if (windowSize === requiredSize) {
          // Shrink until it's invalid
          while (windowSize === requiredSize) {
            if (!minWindow || minWindow.length > right - left + 1) {
              minWindow = s.slice(left, right + 1);
            }

            if (requiredCount[s[left]]) {
              windowCount[s[left]] -= 1;

              if (windowCount[s[left]] < requiredCount[s[left]]) {
                windowSize -= 1;
              }
            }
            left++;
          }
        }
      }
    }
  }

  return minWindow;
};

export const main = async () => {
  console.log(minWindow("ADOBECODEBANC", "ABC")); // BANC
  console.log(minWindow("a", "a")); // a
  console.log(minWindow("ab", "a")); // a
  console.log(minWindow("OUZODYXAZV", "XYZ")); // YXAZ
  console.log(minWindow("x", "xy")); // ""
  console.log(minWindow("abc", "bc")); // ""
  console.log(minWindow("aa", "aa")); // ""
  console.log(minWindow("aab", "aab")); // ""
};
