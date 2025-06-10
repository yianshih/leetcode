/**

❗️❗️

[Hard]

312. Burst Balloons

You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.

If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.

Return the maximum coins you can collect by bursting the balloons wisely.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins_cache_array = function (nums) {
  const dp = {};

  /**
   * @param {number[]} list
   * @param {number} sum
   */
  const dfs = (list) => {
    if (list.length === 1) {
      return list[0];
    }

    const key = list.join(",");

    if (dp[key] !== undefined) {
      return dp[key];
    }

    for (let i = 0; i < list.length; i++) {
      const coins = (list[i - 1] ?? 1) * list[i] * (list[i + 1] ?? 1);
      dp[key] = Math.max(
        dp[key] ?? 0,
        coins + dfs(list.slice(0, i).concat(list.slice(i + 1)))
      );
    }

    return dp[key];
  };

  const max = dfs(nums);

  return max;
};

const maxCoins = (nums) => {
  const vals = [1, ...nums, 1];
  const n = nums.length;
  const dp = [...Array(n + 2)].map(() => Array(n + 2).fill(0));
  for (let len = 1; len <= n; len++) {
    for (let i = 1; i + len <= n + 1; i++) {
      const j = i + len - 1;
      for (let k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k - 1] + vals[i - 1] * vals[k] * vals[j + 1] + dp[k + 1][j]
        );
      }
    }
  }
  return dp[1][n];
};

export const main = async () => {
  console.log(maxCoins([1, 5])); // 10
  console.log(maxCoins([4, 2, 3, 7])); // 143
  console.log(maxCoins([3, 1, 5, 8])); // 167
};
