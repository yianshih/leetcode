/**
 *
 * 22. Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const outputs = [];

  /**

   * @param {number} left 
   * @param {number} right 
   * @param {string} current 
   */
  const travel = (left, right, current) => {
    if (right > left) {
      return;
    }

    if (left === n) {
      travel(left, right + 1, current + ")");
    }

    if (current.length === n * 2) {
      outputs.push(current);
      return;
    }

    if (left < n) {
      // deep first
      travel(left + 1, right, current + "(");
      travel(left, right + 1, current + ")");
    }
  };

  travel(0, 0, "");

  return outputs;
};

export const main = async () => {
  console.log(generateParenthesis(3)); // Expected ["((()))","(()())","(())()","()(())","()()()"]
  console.log(generateParenthesis(1)); // Expected ["()"]
};
