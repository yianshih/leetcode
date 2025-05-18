/**

[Medium]

131. Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];

  const current = [];

  /**
   * @param {number} i
   */
  const travel = (i) => {
    if (i >= s.length) {
      res.push([...current]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      const substring = s.slice(i, j + 1);

      if (isPalindrome(substring)) {
        current.push(substring);

        travel(j + 1);

        current.pop();
      }
    }
  };

  travel(0);

  return res;
};

export const main = async () => {
  console.log(partition("aab")); // [ ["a","a","b"], ["aa","b"] ]
  console.log(partition("a")); // [ ["a"] ]
};
