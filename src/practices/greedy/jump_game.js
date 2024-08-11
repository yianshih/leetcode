/**

55. Jump Game

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.


*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      // move goal to left
      goal = i;
    }
  }
  // if the goal is zero, it means we can reach to the end from start
  return goal === 0;
};

export const main = async () => {
  console.log(canJump([2, 3, 1, 1, 4]) === true);

  console.log(canJump([3, 2, 1, 0, 4]) === false);
};
