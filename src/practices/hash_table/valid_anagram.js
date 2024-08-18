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

  const count = new Map();

  for (let i = 0; i < s.length; i++) {
    count.set(s[i], (count.get(s[i]) ?? 0) + 1);
  }

  for (let j = 0; j < t.length; j++) {
    if (!count.get(t[j])) return false;

    count.set(t[j], (count.get(t[j]) ?? 0) - 1);
  }

  return true;
};

export const main = async () => {
  console.log(isAnagram("anagram", "nagaram") === true);
  console.log(isAnagram("rat", "car") === false);
};
