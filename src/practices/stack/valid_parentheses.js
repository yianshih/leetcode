/**

[Easy]

20. Valid Parentheses

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

const CLOSE_MAPPER = {
  "]": "[",
  ")": "(",
  "}": "{",
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!CLOSE_MAPPER[s[i]]) {
      stack.push(s[i]);
    } else if (stack[stack.length - 1] !== CLOSE_MAPPER[s[i]]) {
      return false;
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
};

export const main = async () => {
  console.log(isValid("()")); // true
  console.log(isValid("()[]{}")); // true
  console.log(isValid("(]")); // false
  console.log(isValid("([])")); // true
  console.log(isValid("[")); // true
};
