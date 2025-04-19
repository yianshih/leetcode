/**

[Easy]

704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = (nums, target) => {
  let left = 0;

  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};

export const main = async () => {
  console.log(search([2, 5, 7, 9], 2)); // 0
  console.log(search([-1, 0, 2, 4, 6, 8], 4)); // 3
};
