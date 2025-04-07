/**

238. Product of Array Except Self

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_with_division = function (nums) {
  const zeroMap = new Set();

  const sum = nums.reduce((acc, curr, index) => {
    if (curr === 0) {
      zeroMap.add(index);
      return acc;
    }
    return acc * curr;
  }, 1);

  if (zeroMap.size > 1) {
    return Array.from({ length: nums.length }, () => 0);
  }

  return nums.map((n, index) => {
    if (zeroMap.size === 1) {
      return zeroMap.has(index) ? sum : 0;
    }
    return sum / n;
  });
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_with_pre_post_fix = function (nums) {
  const prefix = Array.from({ length: nums.length }, () => 1);
  const postfix = Array.from({ length: nums.length }, () => 1);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = nums[i];
    } else {
      prefix[i] = prefix[i - 1] * nums[i];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      postfix[i] = nums[i];
    } else {
      postfix[i] = postfix[i + 1] * nums[i];
    }
  }

  return nums.map((n, i) => {
    const preSum = prefix[i - 1] ?? 1;
    const postSum = postfix[i + 1] ?? 1;

    if (preSum === 0 || postSum === 0) return 0;

    return preSum * postSum;
  });
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let output = Array.from({ length: nums.length }, () => 1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix;

    postfix *= nums[i];
  }

  return output;
};

export const main = async () => {
  //   console.log(productExceptSelf_with_pre_post_fix([1, 2, 4, 6])); // [48,24,12,8]
  //   console.log(productExceptSelf_with_pre_post_fix([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
  //   console.log(productExceptSelf([1, 2, 4, 6])); // [48,24,12,8]
  console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
};
