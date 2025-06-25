/**

[Easy]

125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


*/

/**
 * @param {string} s
 * @returns {boolean}
 */
const isAlpha = (s) => {
  const code = s.charCodeAt();

  return [
    ["0".charCodeAt(0), "9".charCodeAt(0)],
    ["a".charCodeAt(0), "z".charCodeAt(0)],
  ].some(([min, max]) => code >= min && code <= max);
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length < 2) return true;

  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlpha(s[left])) {
      left++;
    } else if (!isAlpha(s[right])) {
      right--;
    } else if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

export const main = async () => {
  console.log(isPalindrome("0P")); // false
  console.log(isPalindrome("aba")); // true
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(isPalindrome("race a car")); // false
};
