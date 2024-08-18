/**

[Medium]

96. Unique Binary Search Trees

Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

*/

// n = 4

//  1
// 0 3 -> dp[0]*dp[3]

//  1
// 1 2 -> dp[1]*dp[2]

//  1
// 2 1 -> dp[2]*dp[1]

//  1
// 3 0 -> dp[3]*dp[0]

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);

  // Set up base case
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 5;

  for (let i = 4; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      const left = j;
      const right = i - j - 1; // Minus 1 for root

      // number of left-combination mutiply number of right-combination
      dp[i] += dp[left] * dp[right];
    }
  }
  return dp[n];
};

export const main = async () => {
  console.log(numTrees(2) === 2);
  console.log(numTrees(3) === 5);
  console.log(numTrees(4) === 14);
  console.log(numTrees(5) === 42);
};
