/**

[Medium]

371. Sum of Two Integers

Given two integers a and b, return the sum of the two integers without using the operators + and -.

*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    const overflow = (a & b) << 1;
    a = a ^ b;
    b = overflow;
  }

  return a;
};

export const main = async () => {
  console.log(getSum(1, 2)); // 3
  console.log(getSum(1, 1)); // 2
  console.log(getSum(4, 7)); // 11
};
