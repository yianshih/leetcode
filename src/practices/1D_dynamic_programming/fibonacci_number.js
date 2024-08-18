/**
 * 

[Easy]

509. Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib_recurion = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib_recurion(n - 2) + fib_recurion(n - 1);
};

/**
 * @param {number} n
 * @return {number}
 */
var fib_dp = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  // We don't need dp array since we only need last two result to calculate current
  let last_two = 0;
  let last_one = 1;

  // Only calculate until the index before target
  for (let i = 2; i < n; i++) {
    const current = last_two + last_one;
    last_two = last_one;
    last_one = current;
  }

  return last_two + last_one;
};

export const main = async () => {
  console.log(fib_dp(0) === 0);
  console.log(fib_dp(1) === 1);
  console.log(fib_dp(2) === 1);
  console.log(fib_dp(3) === 2);
  console.log(fib_dp(4) === 3);
  console.log(fib_dp(5) === 5);
  console.log(fib_dp(6) === 8);
};
