/**
 * 

692. Top K Frequent Words

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const countMap = new Map();

  for (let word of words) {
    const count = (countMap.get(word) ?? 0) + 1;
    countMap.set(word, count);
  }

  const counts = [...countMap.entries()]
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }

      return b[1] - a[1];
    })
    .slice(0, k)
    .map(([word]) => word);

  return counts;
};

export const main = async () => {
  console.log(
    topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)
  ); // [    "i","love"]

  console.log(
    topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3)
  ); //["i", "love", "coding"];
};
