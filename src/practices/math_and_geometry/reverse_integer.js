/**

[Medium]

7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 

Constraints:

-2**31 <= x <= 2**31 - 1

 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let adjust = x < 0 ? -1 : 1;

  let current = x * adjust;
  let reverse = 0;

  while (current > 0) {
    reverse = reverse * 10 + (current % 10);
    current = Math.floor(current / 10);
  }

  const result = reverse * adjust;

  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }

  return result;
};

export const main = async () => {
  console.log(reverse(1563847412));
};
