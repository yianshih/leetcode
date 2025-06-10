/**

[Medium]

72. Edit Distance

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

- Insert a character

- Delete a character

- Replace a character

*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const dp = Array.from({ length: word1.length + 1 }, () =>
    new Array(word2.length + 1).fill(0)
  );

  dp[word1.length][word2.length] = 0;

  for (let i = 0; i < word1.length; i++) {
    // Right
    dp[i][word2.length] = word1.length - i;
  }

  for (let i = 0; i < word2.length; i++) {
    // Bottom
    dp[word1.length][i] = word2.length - i;
  }

  for (let r = word1.length - 1; r >= 0; r--) {
    for (let c = word2.length - 1; c >= 0; c--) {
      if (word1[r] === word2[c]) {
        dp[r][c] = dp[r + 1][c + 1];
      } else {
        dp[r][c] =
          1 +
          Math.min(
            dp[r][c + 1], // Insert
            dp[r + 1][c], // Delete
            dp[r + 1][c + 1] // Replace
          );
      }
    }
  }

  return dp[0][0];
};

export const main = async () => {
  console.log(minDistance("monkeys", "money")); // 2
  console.log(minDistance("neatcdee", "neetcode")); // 3
  console.log(minDistance("horse", "ros")); // 3
  console.log(minDistance("intention", "execution")); // 5
};
