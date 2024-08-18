/**

[Easy]

1. Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 
*/

// Input: nums = [2,7,11,15], target = 9

// Output: [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const obj = {};

  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remaining = target - current;

    if (obj[current] >= 0) {
      answer = [obj[current], i];
    } else {
      obj[remaining] = i;
    }
  }

  return answer;
};

export const main = async () => {
  console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
};
