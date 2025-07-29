/**

[Medium] Sieve of Eratosthenes

2523. Closest Prime Numbers in Range

Given two positive integers left and right, find the two integers num1 and num2 such that:

- left <= num1 < num2 <= right .
- Both num1 and num2 are prime numbers.
- num2 - num1 is the minimum amongst all other pairs satisfying the above conditions.

Return the positive integer array ans = [num1, num2]. If there are multiple pairs satisfying these conditions, return the one with the smallest num1 value. If no such numbers exist, return [-1, -1].

*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  const getPrimes = () => {
    const nums = new Array(right + 1).fill(true);

    nums[0] = false;
    nums[1] = false;

    for (let i = 2; i < Math.sqrt(right) + 1; i++) {
      if (!nums[i]) {
        continue;
      }

      for (let j = i + i; j < right + 1; j += i) {
        nums[j] = false;
      }
    }

    const primes = [];

    for (let i = left; i < right + 1; i++) {
      if (nums[i]) {
        primes.push(i);
      }
    }

    return primes;
  };

  const primes = getPrimes(right);

  let res = [-1, -1];

  let diff = Infinity;

  for (let i = 0; i < primes.length - 1; i++) {
    if (primes[i + 1] - primes[i] < diff) {
      diff = primes[i + 1] - primes[i];
      res = [primes[i], primes[i + 1]];
    }
  }

  return res;
};

export const main = async () => {
  console.log(closestPrimes(10, 19)); //  [11,13]
  console.log(closestPrimes(4, 6)); //  [-1,-1]
  console.log(closestPrimes(19, 31)); //  [29,31]
};
