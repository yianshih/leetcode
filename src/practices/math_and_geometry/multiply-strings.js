/**

[Medium]

43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  const digits = new Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const posI = num1.length - 1 - i;
      const posJ = num2.length - 1 - j;

      let pos = posI + posJ;

      digits[pos] += Number(num1[i]) * Number(num2[j]);

      if (digits[pos] >= 10) {
        digits[pos + 1] += Math.floor(digits[pos] / 10);
        digits[pos] = digits[pos] % 10;
      }
    }
  }

  let res = "";

  // Clear all unreached position with zero
  while (digits[digits.length - 1] === 0) {
    digits.pop();
  }

  for (let i = digits.length - 1; i >= 0; i--) {
    res += digits[i];
  }

  return res;
};

export const main = async () => {
  console.log(multiply("3", "4")); // "12"
  console.log(multiply("111", "222")); // "24642";
  console.log(multiply("123", "456")); // "56088";
  console.log(multiply("9", "99")); // "56088";
};
