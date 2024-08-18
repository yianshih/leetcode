/**

[Easy]

383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const dict = new Map();

  for (let l of magazine) {
    dict.set(l, (dict.get(l) ?? 0) + 1);
  }

  for (let l of ransomNote) {
    const count = dict.get(l);

    if (!count) return false;

    dict.set(l, count - 1);
  }

  return true;
};

export const main = async () => {
  console.log(canConstruct("a", "b") === false);
  console.log(canConstruct("aa", "bb") === false);
  console.log(canConstruct("aa", "aab") === true);
  console.log(canConstruct("aab", "baa") === true);
};
