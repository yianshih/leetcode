/**

[Medium]

62. Unique Paths

There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths_dfs = function (m, n) {
  let count = 0;

  const travel = (r, c) => {
    if (r > m || c > n) {
      return;
    }

    if (r === m - 1 && c === n - 1) {
      count++;
      return;
    }

    travel(r + 1, c);
    travel(r, c + 1);
  };

  travel(0, 0);

  return count;
};

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(new Array(n).fill(0));

  dp[0][0] = 1;

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (r === 0 && c === 0) {
        continue;
      }
      dp[r][c] = (dp?.[r]?.[c - 1] ?? 0) + (dp?.[r - 1]?.[c] ?? 0);
    }
  }

  return dp[m - 1][n - 1];
};

export const main = async () => {
  console.log(uniquePaths(3, 2)); // 3
  console.log(uniquePaths(3, 3)); // 3
  console.log(uniquePaths(3, 7)); // 28
};
