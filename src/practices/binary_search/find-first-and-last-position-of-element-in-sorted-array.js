/**

[Medium]

34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      let end = mid;

      let start = mid;

      while (nums[start] === target) {
        start--;
      }

      while (nums[end] === target) {
        end++;
      }

      return [start + 1, end - 1];
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [-1, -1];
};
export const main = async () => {
  console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3,4]
  console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
  console.log(searchRange([], 0)); // [-1,-1]
};
