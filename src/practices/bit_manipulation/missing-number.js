/**

[Easy] ❗️

268. Missing Number

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_with_biswise = function (nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res ^= i ^ nums[i];
  }

  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber_with_gauss_formula = function (nums) {
  const n = nums.length;

  const targetSum = (n * (n + 1)) / 2;

  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  return targetSum - sum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = nums.length;
  for (let i = 0; i < nums.length; i++) {
    res += i - nums[i];
  }

  return res;
};

export const main = async () => {
  console.log(missingNumber([1, 2, 3])); // 0
  console.log(missingNumber([0, 2])); // 1
  console.log(missingNumber([0, 1])); // 2
};
