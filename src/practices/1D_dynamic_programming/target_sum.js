/**

[Medium]

494. Target Sum

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = (nums, target) => {
  let dp = {};

  const dfs = (i, sum) => {
    const key = `${i},${sum}`;

    if (dp[key] !== undefined) return dp[key];

    if (i === nums.length) {
      if (sum === target) {
        return 1;
      }

      return 0;
    }

    dp[key] = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);

    return dp[key];
  };

  return dfs(0, 0);
};

export const main = async () => {
  console.log(findTargetSumWays([2, 2, 2], 2)); // 3
  console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
};
