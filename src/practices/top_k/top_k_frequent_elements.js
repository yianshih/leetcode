/**

347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  const countMap = new Map();

  const counts = Array.from({ length: nums.length + 1 }, () => []);

  let topK = new Set();

  for (let i = 0; i < nums.length; i++) {
    const prevCount = countMap.get(nums[i]) ?? 0;

    const currentCount = prevCount + 1;

    countMap.set(nums[i], currentCount);

    counts[currentCount].push(nums[i]);
  }

  for (let i = nums.length; i >= 0; i--) {
    topK = new Set([...topK, ...counts[i]]);

    if (topK.size >= k) {
      break;
    }
  }

  return Array.from(topK);
};

export const main = async () => {
  console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]

  console.log(topKFrequent([1], 1)); // [1,2]
};
