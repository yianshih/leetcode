/**
 *  
[Medium]

150. Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let t of tokens) {
    switch (t) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        const m_a = stack.pop();
        const m_b = stack.pop();
        stack.push(m_b - m_a);
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        const d_a = stack.pop();
        const d_b = stack.pop();
        stack.push(Math.trunc(d_b / d_a));
        break;
      default:
        stack.push(Number(t));
    }
  }

  return stack[0];
};

export const main = async () => {
  console.log(evalRPN(["2", "1", "+", "3", "*"])); // ((2 + 1) * 3) = 9

  console.log(evalRPN(["4", "13", "5", "/", "+"])); // (4 + (13 / 5)) = 6

  console.log(evalRPN(["4", "3", "-"])); // 1

  console.log(
    evalRPN([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ])
  ); // 22
};
