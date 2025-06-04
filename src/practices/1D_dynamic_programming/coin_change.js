/**

[Medium]

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
var coinChange = (coins, amount) => {
  const dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let c of coins) {
      if (i >= c) {
        dp[i] = Math.min(dp[i], 1 + dp[i - c]);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
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
