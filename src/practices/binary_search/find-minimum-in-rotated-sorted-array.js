/**

[Medium]

153. Find Minimum in Rotated Sorted Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // Assume the leftest is minimal number
  let min = nums[left];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // if the middle number is not less than current minimal, means it's order by ascending
    // So we only need to look for right hand side to see if there is rotate number less than current minimal
    if (nums[mid] >= min) {
      left = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      right = mid - 1;
    }
  }

  return min;
};

export const main = async () => {
  console.log(findMin([3, 4, 5, 6, 1, 2])); // 1

  console.log(findMin([4, 5, 0, 1, 2, 3])); // 0

  console.log(findMin([2, 1])); // 0
};
