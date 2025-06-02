/**

[Medium]

213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  const travel = (list) => {
    let pos1 = 0;
    let pos2 = 0;

    for (let n of list) {
      const temp = Math.max(pos1 + n, pos2);
      pos1 = pos2;
      pos2 = temp;
    }

    return pos2;
  };

  return Math.max(
    travel(nums.slice(0, nums.length - 1)), // Skip last one
    travel(nums.slice(1)) // Skip first one
  );
};

export const main = async () => {
  console.log(rob([2, 3, 2])); // 3
  console.log(rob([1, 2, 3, 1])); // 4
  console.log(rob([1, 2, 3])); // 3
  console.log(rob([1])); // 1
};
