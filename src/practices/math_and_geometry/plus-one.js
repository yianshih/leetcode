/**

[Easy]

66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let overflow = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (overflow === 0) {
      return digits;
    }

    digits[i] = digits[i] + overflow;
    overflow = 0;

    if (digits[i] >= 10) {
      digits[i] = digits[i] % 10;
      overflow = 1;
    }
  }

  if (overflow > 0) {
    digits.unshift(overflow);
  }

  return digits;
};

export const main = async () => {
  console.log(plusOne([1, 2, 3, 4])); // [1,2,3,5]
  console.log(plusOne([9, 9])); // [1,0,0]
};
