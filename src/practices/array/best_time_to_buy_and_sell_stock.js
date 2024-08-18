/**

[Easy]

121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buyPrice = prices[0];

  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - buyPrice);
  }

  return profit;
};

export const main = async () => {
  console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
  console.log(maxProfit([7, 6, 4, 3, 1]) === 0);
  console.log(maxProfit([2, 7, 1, 3, 4]) === 5);
};
