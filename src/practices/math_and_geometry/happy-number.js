/**

[Easy]

202. Happy Number

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const seen = new Set();

  const getNextNumber = (num) => {
    let sum = 0;

    while (num > 0) {
      const remains = num % 10;
      sum += remains ** 2;
      num = Math.floor(num / 10);
    }

    return sum;
  };

  while (!seen.has(n)) {
    seen.add(n);

    n = getNextNumber(n);

    if (n === 1) {
      return true;
    }
  }

  return false;
};

export const main = async () => {
  console.log(isHappy(19)); // true
  console.log(isHappy(100)); // true
  console.log(isHappy(101)); // false
};
