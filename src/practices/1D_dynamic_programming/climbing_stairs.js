/**

70. Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n).fill(-1);

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  const step = (n) => {
    if (dp[n] > -1) return dp[n];

    dp[n] = step(n - 1) + step(n - 2);

    return dp[n];
  };

  step(n);

  return dp[n];
};

export const main = async () => {
  console.log(climbStairs(2) === 2); // 2
  console.log(climbStairs(3) === 3); // 3
  console.log(climbStairs(4) === 5); // 5
};
