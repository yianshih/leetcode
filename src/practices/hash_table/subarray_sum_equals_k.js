/**

560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  const prefixSum = new Map();

  let sum = 0;

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum === k) {
      res += 1;
    }

    const diff = sum - k;

    if (prefixSum.has(diff)) {
      res += prefixSum.get(diff);
    }

    prefixSum.set(sum, (prefixSum.get(sum) ?? 0) + 1);
  }

  return res;
};

export const main = async () => {
  console.log(subarraySum([1, 1, 1], 2) === 2);
  console.log(subarraySum([1, 2, 3], 3) === 2);
  console.log(subarraySum([1, 2, 1, 2, 1], 3) === 4);
  console.log(subarraySum([-1, -1, 1], 0) === 1);
  console.log(subarraySum([1, -1, 0], 0) === 3);
};
