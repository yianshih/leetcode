/**

[Medium]

50. Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  const getPow = (x, n) => {
    if (x === 0) return 0;
    if (n === 0) return 1;

    let res = getPow(x, Math.floor(n / 2));

    res = res * res;

    if (n % 2 > 0) {
      res = x * res;
    }

    return res;
  };

  let sum = getPow(x, Math.abs(n));

  if (n < 0) {
    sum = 1 / sum;
  }

  return sum;
};

export const main = async () => {
  console.log(myPow(2.0, 5)); // 32.00000
  console.log(myPow(1.1, 10)); // 2.59374
  console.log(myPow(2.0, -3)); // 0.12500
};
