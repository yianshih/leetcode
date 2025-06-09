/**

[Hard]

329. Longest Increasing Path in a Matrix

Given an m x n integers matrix, return the length of the longest increasing path in matrix.

From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

*/

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];

  const dp = {};

  const dfs = (i, j) => {
    const key = [i, j].join(",");

    if (dp[key] !== undefined) return dp[key];

    let max = 0;

    for (let [d_i, d_j] of DIRECTIONS) {
      const next = matrix?.[i + d_i]?.[j + d_j];

      if (next !== undefined && next > matrix[i][j]) {
        max = Math.max(max, 1 + dfs(i + d_i, j + d_j));
      }
    }

    dp[key] = max;

    return dp[key];
  };

  let maxPath = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      maxPath = Math.max(maxPath, 1 + dfs(i, j));
    }
  }

  return maxPath;
};

export const main = async () => {
  const test1 = [
    [5, 5, 3],
    [2, 3, 6],
    [1, 1, 1],
  ];

  const test2 = [
    [1, 2, 3],
    [2, 1, 4],
    [7, 6, 5],
  ];

  console.log(longestIncreasingPath(test1)); // 4
  console.log(longestIncreasingPath(test2)); // 7
};
