/**

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
    const group = str.split("").sort().join("");

    if (groups.has(group)) {
      groups.get(group).push(str);
    } else {
      groups.set(group, [str]);
    }
  }

  return [...groups.values()];
};

export const main = async () => {
  //  [["bat"],["nat","tan"],["ate","eat","tea"]]
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
};
