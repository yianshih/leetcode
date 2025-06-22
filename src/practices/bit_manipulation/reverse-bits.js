/**

[Easy]

190. Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

Note:

- Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.

- In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    const bit = n & 1; // Get rightest bit
    res = res | (bit << (31 - i)); // Shift bit to left while keeping current res
    n = n >> 1;
  }

  return res;
};

export const main = async () => {};
