/**

[Easy]

35. Search Insert Position

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) return middle;

    if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
};

export const main = async () => {
  console.log(searchInsert([1, 3, 5, 6], 6) === 3);
  console.log(searchInsert([1, 3, 5, 6], 5) === 2);
  console.log(searchInsert([1, 3, 5, 6], 2) === 1);
  console.log(searchInsert([1, 3, 5, 6], 7) === 4);
  console.log(searchInsert([1], 0) === 0);
  console.log(searchInsert([1, 4, 6, 7, 8, 9], 6) === 2);
};
