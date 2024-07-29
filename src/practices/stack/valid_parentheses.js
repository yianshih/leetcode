/**

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

 */

const OPEN_CLOSURE = {
  ")": "(",
  "]": "[",
  "}": "{",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let c of s) {
    const openClosure = OPEN_CLOSURE[c];

    // if the last inserted item is the corresponding open closure
    if (stack.length > 0 && stack[stack.length - 1] === openClosure) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

export const main = async () => {
  console.log(isValid("()")); // true
  console.log(isValid("()[]{}")); // true
  console.log(isValid("(]")); // false
};
