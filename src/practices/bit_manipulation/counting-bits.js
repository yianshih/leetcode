/**

[Easy]

338. Counting Bits

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

*/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits_with_offset = function (n) {
  const dp = new Array(n + 1).fill(0);

  const res = [0];

  let offset = 1;

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) {
      offset = i;
    }

    dp[i] = 1 + dp[i - offset];
    res.push(dp[i]);
  }

  return res;
};

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = new Array(n + 1).fill(-1);

  dp[0] = 0;

  /**
   * @param {number} n
   */
  const getCount = (n) => {
    if (n === 0) return 0;

    if (dp[n] > -1) return dp[n];

    return (n % 2) + getCount(n >> 1);
  };

  for (let i = 1; i <= n; i++) {
    dp[i] = getCount(i);
  }

  return dp;
};

export const main = async () => {
  console.log(countBits(4)); // [0,1,1,2,1]
  console.log(countBits(2)); // [0,1,1]
  console.log(countBits(5)); // [0,1,1,2,1,2]
};
