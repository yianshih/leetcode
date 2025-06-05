/**

[Medium]

139. Word Break

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak_cache_sub_string = function (s, wordDict) {
  if (!s) return true;

  const dp = {};

  const travel = (w) => {
    if (dp[w] !== undefined) return dp[w];

    if (!w) return true;

    for (let word of wordDict) {
      const i = w.indexOf(word);
      if (i > -1) {
        const remains = w.split(word).filter(Boolean);
        if (
          remains.every((r) => {
            if (travel(r)) {
              dp[r] = true;
              return true;
            }
            dp[r] = false;
            return false;
          })
        ) {
          dp[w] = true;
          return true;
        }
      }
    }
    return false;
  };

  return travel(s);
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);

  const len = s.length;
  dp[len] = true;

  for (let i = len - 1; i >= 0; i--) {
    for (let w of wordDict) {
      if (w.length + i <= len && w === s.slice(i, i + w.length)) {
        dp[i] = dp[i + w.length];
      }
      if (dp[i]) {
        break;
      }
    }
  }

  return dp[0];
};

export const main = async () => {
  const test1 = ["leetcode", ["leet", "code"]];

  const test2 = ["applepenapple", ["apple", "pen"]];

  const test3 = ["catsandog", ["cats", "dog", "sand", "and", "cat"]];

  const test4 = ["ccbb", ["bc", "cb"]];

  console.log(wordBreak(...test1)); // true
  console.log(wordBreak(...test2)); // true
  console.log(wordBreak(...test3)); // false
  console.log(wordBreak(...test4)); // false
};
