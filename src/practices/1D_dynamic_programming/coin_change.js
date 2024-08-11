/**
 * 

322. Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.


 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(-1);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const remain = i - coins[j];
      if (remain >= 0) {
        const step = dp[remain] > -1 ? dp[remain] + 1 : -1;

        if (step > -1) {
          dp[i] = dp[i] > -1 ? Math.min(dp[i], step) : step;
        }
      }
    }
  }

  return dp[amount];
};

export const main = async () => {
  console.log(coinChange([1, 2, 5], 11) === 3); // 3
  console.log(coinChange([1, 2, 5], 7) === 2); // 2
  console.log(coinChange([1, 2, 5], 11) === 3); // 3
  console.log(coinChange([2, 5, 10, 1], 27) === 4); // 4
  console.log(coinChange([2], 3) === -1); // -1
  console.log(coinChange([1], 0) === 0); // 0
  console.log(coinChange([186, 419, 83, 408], 6249) === 20); // 0
};
