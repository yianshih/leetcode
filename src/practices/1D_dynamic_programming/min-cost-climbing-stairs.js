/**

❗️

[Easy]

746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.

*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs_bottom_up = function (cost) {
  const dp = new Array(cost.length).fill(-1);

  dp[0] = cost[0];
  dp[1] = cost[1];

  const travel = (i) => {
    if (dp[i] > -1) return dp[i];

    dp[i] = (cost[i] ?? 0) + Math.min(travel(i - 1), travel(i - 2));

    return dp[i];
  };

  return travel(cost.length);
};

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  cost[cost.length] = 0; // top of stairs

  for (let i = cost.length - 3; i >= 0; i--) {
    cost[i] += Math.min(cost[i + 1], cost[i + 2]);
  }

  return Math.min(cost[0], cost[1]);
};

export const main = async () => {
  console.log(minCostClimbingStairs([10, 15, 20])); // 15
  console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6
};
