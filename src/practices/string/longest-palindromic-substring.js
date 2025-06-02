/**

❗️(TODO: Manacher's Algorithm)

[Medium]

5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = "";

  const expand = (l, r) => {
    if (s[l] !== s[r] || !s[l] || !s[r]) {
      return;
    }

    if (s[l] === s[r]) {
      expand(l - 1, r + 1);

      if (r - l + 1 > max.length) {
        max = s.slice(l, r + 1);
      }
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    // handle when palindrome have same characters
    expand(i, i + 1);
  }

  return max;
};

export const main = async () => {
  console.log(longestPalindrome("babad")); // bab
  console.log(longestPalindrome("cbbd")); // bb
  console.log(longestPalindrome("a")); // a
  console.log(longestPalindrome("aacabdkacaa")); // aca
};
