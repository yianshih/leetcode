/**

[Easy]

242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]] += 1;
    } else {
      count[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]]) return false;

    count[t[i]] -= 1;

    if (count[t[i]] === 0) {
      delete count[t[i]];
    }
  }

  return Object.keys(count).length === 0;
};

export const main = async () => {
  console.log(isAnagram("anagram", "nagaram") === true);
  console.log(isAnagram("rat", "car") === false);
};
