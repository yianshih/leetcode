/**

❗️

[Medium]

678. Valid Parenthesis String

Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let minLeft = 0;
  let maxLeft = 0;

  for (let c of s) {
    if (c === ")") {
      minLeft -= 1;
      maxLeft -= 1;
    } else if (c === "(") {
      minLeft += 1;
      maxLeft += 1;
    } else {
      minLeft -= 1;
      maxLeft += 1;
    }

    if (maxLeft < 0) {
      return false;
    }

    if (minLeft < 0) {
      minLeft = 0;
    }
  }

  return minLeft === 0;
};

export const main = async () => {
  console.log(checkValidString("((**)")); // true
  console.log(checkValidString("(((*)")); // false
  console.log(checkValidString("()")); // true
  console.log(checkValidString("(*)")); // true
  console.log(checkValidString("(*))")); // true
};
