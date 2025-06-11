/**

[Hard]

10. Regular Expression Matching

Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

- '.' Matches any single character.​​​​
- '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const dp = {};

  const dfs = (i, j) => {
    if (i >= s.length && j >= p.length) {
      return true;
    }

    if (j >= p.length) {
      return false;
    }

    const key = [i, j].join(",");

    if (dp[key] !== undefined) {
      return dp[key];
    }

    const match = i < s.length && (p[j] === "." || s[i] === p[j]);

    if (p[j + 1] === "*") {
      dp[key] =
        // Take zero
        dfs(i, j + 2) ||
        // Take one
        (match && dfs(i + 1, j));
    } else if (match) {
      dp[key] = dfs(i + 1, j + 1);
    } else {
      dp[key] = false;
    }

    return dp[key];
  };

  return dfs(0, 0);
};

export const main = async () => {
  console.log(isMatch("aa", "a")); // false
  console.log(isMatch("aa", "a*")); // true
  console.log(isMatch("ab", ".*")); // true
  console.log(isMatch("aab", "c*a*b")); // true
};
