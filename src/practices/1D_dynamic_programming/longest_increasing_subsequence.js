/**

[Medium]

300. Longest Increasing Subsequence

Given an integer array nums, return the length of the longest strictly increasing 

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

export const main = async () => {
  console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]) === 4); // 4
};
