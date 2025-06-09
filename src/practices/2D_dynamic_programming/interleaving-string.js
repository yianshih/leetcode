/**

[Medium]

97. Interleaving String

Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m substrings respectively, such that:

- s = s1 + s2 + ... + sn
- t = t1 + t2 + ... + tm
- |n - m| <= 1

The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...

Note: a + b is the concatenation of strings a and b.

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave_with_cache = function (s1, s2, s3) {
  const dp = {};

  const dfs = (idx1, idx2) => {
    const pos = idx1 + idx2;
    if (pos === s3.length) {
      return idx1 === s1.length && idx2 === s2.length;
    }

    const key = [idx1, idx2].join(",");

    if (dp[key] !== undefined) {
      return dp[key];
    }

    let res = false;

    if (s1[idx1] === s3[pos]) {
      res = res || dfs(idx1 + 1, idx2);
    }

    if (s2[idx2] === s3[pos]) {
      res = res || dfs(idx1, idx2 + 1);
    }

    dp[key] = res;

    return res;
  };

  const output = dfs(0, 0);

  return output;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const dp = Array.from({ length: s1.length + 1 }, () =>
    new Array(s2.length + 1).fill(false)
  );

  dp[s1.length][s2.length] = true;

  for (let r = s1.length; r >= 0; r--) {
    for (let c = s2.length; c >= 0; c--) {
      if (r === s1.length && c === s2.length) {
        continue;
      }

      if (s1[r] === s3[r + c] && dp?.[r + 1]?.[c] === true) {
        dp[r][c] = true;
      }

      if (s2[c] === s3[r + c] && dp?.[r]?.[c + 1] === true) {
        dp[r][c] = true;
      }
    }
  }

  return dp[0][0];
};

export const main = async () => {
  const test1 = ["aabcc", "dbbca", "aadbbcbcac"];
  const test2 = ["aabcc", "dbbca", "aadbbbaccc"];
  const test3 = ["", "", ""];
  const test4 = ["aaaa", "bbbb", "aabbbbaa"];
  const test5 = ["abc", "xyz", "abxzcy"];
  const test6 = ["aa", "ab", "abaa"];
  const test7 = ["a", "b", "a"];

  console.log(isInterleave(...test1)); // true
  console.log(isInterleave(...test2)); // false
  console.log(isInterleave(...test3)); // true
  console.log(isInterleave(...test4)); // true
  console.log(isInterleave(...test5)); // false
  console.log(isInterleave(...test6)); // true
  console.log(isInterleave(...test7)); // false
};
