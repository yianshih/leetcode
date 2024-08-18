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
var generateParenthesis = function (n) {
  const outputs = [];

  /**
   * @param {string} left (
   * @param {string} right )
   * @param {string} path
   */
  const travel = (left, right, path) => {
    if (left > n) return;

    if (right > left) return;

    if (right === n) {
      outputs.push(path);
      return;
    }

    travel(left + 1, right, path + "(");
    travel(left, right + 1, path + ")");
  };

  travel(0, 0, "");

  return outputs;
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
