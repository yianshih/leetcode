/**

[Medium]

49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = new Map();

  for (let str of strs) {
    const count = Array.from({ length: 26 }, () => 0);
    for (let i = 0; i < str.length; i++) {
      const index = str[i].charCodeAt(0) - "a".charCodeAt();

      count[index] += 1;
    }

    const combined = count.join(",");

    const existingGroup = groups.get(combined) ?? [];

    existingGroup.push(str);

    groups.set(combined, existingGroup);
  }

  return Array.from(groups.values());
};

export const main = async () => {
  //  [["bat"],["nat","tan"],["ate","eat","tea"]]
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
};
