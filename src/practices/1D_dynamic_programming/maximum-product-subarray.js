/**

❗️

[Medium]

152. Maximum Product Subarray

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Math.max(...nums);

  let currentMax = 1;
  let currentMin = 1;

  for (let n of nums) {
    const temp = currentMax * n;

    currentMax = Math.max(temp, currentMin * n, n);
    currentMin = Math.min(temp, currentMin * n, n);

    max = Math.max(max, currentMax);
  }

  return max;
};

export const main = async () => {
  console.log(maxProduct([2, 3, -2, 4])); // 6
  console.log(maxProduct([-2, 0, -1])); // 0
  console.log(maxProduct([-2])); // -2
  console.log(maxProduct([0, 2])); // -2
  console.log(maxProduct([-2, 3, -4])); // 24
  console.log(maxProduct([-2, 0])); // 0
};
