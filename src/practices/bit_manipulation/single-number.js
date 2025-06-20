/*

[Easy]

136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (const num of nums) {
    let next = res ^ num;

    res = next;
  }
  return res;
};

export const main = async () => {
  console.log(singleNumber([3, 2, 3])); // 2
  console.log(singleNumber([7, 6, 6, 7, 8])); // 8
};
