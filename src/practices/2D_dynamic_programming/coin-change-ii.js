/**

❗️

[Medium]

518. Coin Change II

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change_brute_force = function (amount, coins) {
  let count = 0;

  /**
   * @param {number} remains
   * @param {number[]} list
   * @returns
   */
  const dfs = (remains, list) => {
    if (remains === 0) {
      count++;
      return;
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i] > remains) {
        continue;
      }
      dfs(remains - list[i], list.slice(i));
    }
  };

  dfs(amount, coins);

  return count;
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change_2D_space = function (amount, coins) {
  // coin1 [...amount]
  // coin2 [...amount]
  // coin3 [...amount]
  // ...

  const dp = Array.from({ length: coins.length }, () =>
    new Array(amount + 1).fill(0)
  );

  for (let i = 0; i < coins.length; i++) {
    dp[i][amount] = 1;
  }

  for (let r = coins.length - 1; r >= 0; r--) {
    for (let c = 1; c <= amount; c++) {
      const remainsIndex = amount - (c - coins[r]);

      const index = amount - c;

      const right = dp?.[r]?.[remainsIndex] ?? 0;
      const down = dp?.[r + 1]?.[index] ?? 0;

      dp[r][index] = down + right;
    }
  }

  return dp[0][0];
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);

  dp[0] = 1;

  for (const c of coins) {
    for (let a = c; a <= amount; a++) {
      dp[a] += dp[a - c];
    }
  }

  return dp[amount];
};

export const main = async () => {
  console.log(change(5, [1, 2, 5])); // 4
  console.log(change(3, [2])); // 0
  console.log(change(4, [1, 2, 3])); // 4
};
