/**
 *

[Medium]

22. Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = (n) => {
  const results = [];

  /**
   * @param {string} output
   * @param {number} left
   * @param {number} right
   */
  const getNext = (output, left, right) => {
    if (!left && !right) {
      results.push(output);
    }

    if (left > 0) {
      getNext(output + "(", left - 1, right);
    }

    // Left must greater than right to be a valid parenthesis
    if (left < right && right > 0) {
      getNext(output + ")", left, right - 1);
    }
  };

  getNext("", n, n);

  return results;
};

/**
 *
 * @param {string[]} outputs
 * @param {string[]} expects
 */
const test = (outputs, expects) => {
  return outputs.every((_, i) => outputs[i] === expects[i]);
};

export const main = async () => {
  console.log(
    test(generateParenthesis(3), [
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ])
  );

  console.log(test(generateParenthesis(1), ["()"]));
};
