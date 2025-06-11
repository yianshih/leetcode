/**

[Medium]

53. Maximum Subarray

Given an integer array nums, find the subarray with the largest sum, and return its sum.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;

  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];

    max = Math.max(max, current);

    if (current < 0) {
      // Get rid of all numbers as the sum of them are negative
      current = 0;
    }
  }

  return max;
};

export const main = async () => {
  console.log(maxSubArray([2, -3, 4, -2, 2, 1, -1, 4])); // 8
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
  console.log(maxSubArray([-1])); // -1
};
