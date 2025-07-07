/**

[Medium] ❗️

347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  const count = {};

  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let n of nums) {
    count[n] = (count[n] ?? 0) + 1;
  }

  for (let [n, f] of Object.entries(count)) {
    freq[f].push(Number(n));
  }

  const res = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    const numbers = freq[i];

    for (let n of numbers) {
      res.push(n);

      if (res.length === k) {
        return res;
      }
    }
  }

  return [];
};

export const main = async () => {
  console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]

  console.log(topKFrequent([1], 1)); // [1]
};
