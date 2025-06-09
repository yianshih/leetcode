/**

[Hard]

115. Distinct Subsequences

Given two strings s and t, return the number of distinct subsequences of s which equals t.

The test cases are generated so that the answer fits on a 32-bit signed integer.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct_cache = function (s, t) {
  const dp = {};

  const dfs = (i, j) => {
    const key = [i, j].join(",");

    if (dp[key] !== undefined) {
      return dp[key];
    }

    if (j === t.length) {
      return 1;
    }

    if (i === s.length) {
      return 0;
    }

    let count = 0;

    if (s[i] === t[j]) {
      count += dfs(i + 1, j + 1);
    }

    count += dfs(i + 1, j);

    dp[key] = count;

    return count;
  };

  return dfs(0, 0);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const dp = Array.from({ length: s.length + 1 }, () =>
    new Array(t.length + 1).fill(0)
  );

  for (let i = 0; i <= s.length; i++) {
    dp[i][t.length] = 1;
  }

  for (let r = s.length - 1; r >= 0; r--) {
    for (let c = t.length - 1; c >= 0; c--) {
      let count = dp[r + 1][c];

      if (s[r] === t[c]) {
        count += dp[r + 1][c + 1];
      }

      dp[r][c] = count;
    }
  }

  return dp[0][0];
};

export const main = async () => {
  console.log(numDistinct("caaat", "cat")); // 3
  console.log(numDistinct("xxyxy", "xy")); // 5
};
