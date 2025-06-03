/**

[Medium]

647. Palindromic Substrings

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  const travel = (l, r) => {
    if (!s[l] || !s[r] || s[l] !== s[r]) {
      return;
    }

    count++;

    travel(l - 1, r + 1);
  };

  for (let i = 0; i < s.length; i++) {
    travel(i, i);
    travel(i, i + 1);
  }

  return count;
};

export const main = async () => {
  console.log(countSubstrings("abc")); // 3 ("a","b","c")
  console.log(countSubstrings("aaa")); // 6 ("a", "a", "a", "aa", "aa", "aaa")
};
