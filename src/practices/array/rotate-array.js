/**

[Medium]

189. Rotate Array

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const origin = [...nums];

  for (let i = 0; i < nums.length; i++) {
    // To handle the case where new index is out of length
    let newIndex = (i + k) % nums.length;
    nums[newIndex] = origin[i];
  }
};

export const main = async () => {
  const test1 = [1, 2, 3, 4, 5, 6, 7];
  rotate(test1, 3);
  console.log(test1); // [ 5, 6, 7, 1, 2, 3, 4 ]

  const test2 = [-1, -100, 3, 99];
  rotate(test2, 2);
  console.log(test2); // [3,99,-1,-100]

  const test3 = [-1];
  rotate(test3, 2);
  console.log(test3); // [-1]
};
