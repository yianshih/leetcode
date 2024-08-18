/**

[Easy]

26. Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let adjustIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[adjustIndex] = nums[i];
      adjustIndex++;
    }
  }
  return adjustIndex;
};

export const main = async () => {
  const test1 = [1, 1, 2];
  console.log(removeDuplicates(test1) === 2);
  console.log(test1[0] === 1);

  const test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  console.log(removeDuplicates(test2) === 5);
  console.log(test2[0] === 0);
};
