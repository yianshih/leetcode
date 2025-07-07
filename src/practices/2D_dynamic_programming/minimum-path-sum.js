/**

[Medium]

64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const dp = Array.from({ length: grid.length }, () =>
    Array(grid[0].length).fill(0)
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const min = Math.min(
        dp?.[i - 1]?.[j] ?? Infinity,
        dp?.[i]?.[j - 1] ?? Infinity
      );

      dp[i][j] = grid[i][j] + (min === Infinity ? 0 : min);
    }
  }

  return dp[grid.length - 1][grid[0].length - 1];
};
export const main = async () => {
  const test1 = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ];

  const test2 = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  console.log(minPathSum(test1)); // 7
  console.log(minPathSum(test2)); // 12
};
