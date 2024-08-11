/**

416. Partition Equal Subset Sum

Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, curr) => acc + curr, 0);

  if (sum % 2 === 1) return false;

  const target = sum / 2;

  // If any of sub-array's total is half of sum, we will know the rest of sub-array will be the half of sum
  // So we only need to find if any sub-array's sum is half of nums's sum
  let dp = new Set();

  dp.add(0);

  for (let i = 0; i < nums.length; i++) {
    const newDp = new Set();

    for (let j of dp) {
      if (j + nums[i] === target) return true;

      newDp.add(j + nums[i]);
      newDp.add(j);
    }

    dp = newDp;
  }

  return dp.has(target);
};

export const main = async () => {
  console.log(canPartition([1, 5, 11, 5]) === true);
  console.log(canPartition([1, 2, 3, 5]) === false);
};
