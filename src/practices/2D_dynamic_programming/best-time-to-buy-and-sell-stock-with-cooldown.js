/**

[Medium]

309. Best Time to Buy and Sell Stock with Cooldown

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const dp = {};

  const dfs = (i, buying) => {
    const key = `${i},${buying}`;

    if (dp[key] !== undefined) return dp[key];

    if (i >= prices.length) {
      return 0;
    }

    const waitProfit = dfs(i + 1, buying);

    if (buying) {
      // Buy
      const buyProfit = dfs(i + 1, false) - prices[i];
      dp[key] = Math.max(buyProfit, waitProfit);
    } else {
      // Sell
      const sellProfit = dfs(i + 2, true) + prices[i];

      dp[key] = Math.max(sellProfit, waitProfit);
    }

    return dp[key];
  };

  return dfs(0, true);
};

export const main = async () => {
  console.log(maxProfit([1, 2, 3, 0, 2])); // 3
  console.log(maxProfit([1, 3, 4, 0, 4])); // 6
};
