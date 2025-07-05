/**

[Easy]

191. Number of 1 Bits

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

*/

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight_with_bitwise = function (n) {
  let res = 0;

  while (n > 0) {
    n = n & (n - 1);
    res += 1;
  }

  return res;
};

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;

  while (n > 0) {
    // Add 1 if current n is odds
    res += n % 2;
    // Right shift one bit
    n = n >> 1;
  }

  return res;
};

export const main = async () => {
  console.log(hammingWeight(11)); // 3
  console.log(hammingWeight(128)); // 1
};
