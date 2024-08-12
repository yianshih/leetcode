/**

45. Jump Game II

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let count = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let newRight = right;
    for (let i = left; i <= right; i++) {
      newRight = Math.max(newRight, i + nums[i]);
    }

    left = right + 1;
    right = newRight;
    count++;
  }

  return count;
};

export const main = async () => {
  console.log(jump([2, 3, 1, 1, 4]) === 2);
  console.log(jump([2, 3, 0, 1, 4]) === 2);
};
