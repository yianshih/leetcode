/**

[Medium]

611. Valid Triangle Number

Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);

  let count = 0;

  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left; // Add all combination as shifting left will always valid as it increase the sum
        right--;
      } else {
        left++;
      }
    }
  }

  return count;
};
export const main = async () => {
  console.log(triangleNumber([2, 2, 3, 4])); // 3
  console.log(triangleNumber([4, 2, 3, 4])); // 4
};
