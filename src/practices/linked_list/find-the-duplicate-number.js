/**

❗️

[Medium]

287. Find the Duplicate Number

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = (nums) => {
  let slow = 0;
  let fast = 0;

  // Find the meeting point between slow and fast
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;

  // Find the meeting point between new slow and slow
  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) {
      return slow;
    }
  }
};

export const main = async () => {
  console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
  console.log(findDuplicate([3, 1, 3, 4, 2])); // 3
};
