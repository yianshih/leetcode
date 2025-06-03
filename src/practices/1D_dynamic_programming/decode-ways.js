/**

❗️

[Medium]

91. Decode Ways

You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

"1" -> 'A'

"2" -> 'B'

...

"25" -> 'Y'

"26" -> 'Z'

However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

For example, "11106" can be decoded into:

- "AAJF" with the grouping (1, 1, 10, 6)
- "KJF" with the grouping (11, 10, 6)
- The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).

*/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = new Array(s.length).fill(-1);

  dp[s.length] = 1;

  const dfs = (i) => {
    if (s[i] === "0") return 0;
    if (dp[i] > -1) return dp[i];

    let res = dfs(i + 1);

    if (
      (i + 1 < s.length &&
        // we only pick 2 digits if
        // [s[i],s[i+1]] is in range of 10 - 19
        s[i] === "1") ||
      // [s[i],s[i+1]] is in range of 20 - 26
      (s[i] === "2" && "0123456".includes(s[i + 1]))
    ) {
      res += dfs(i + 2); // jumping to 2 mean pick 2 digits at current
    }

    dp[i] = res;

    return res;
  };

  return dfs(0);
};

export const main = async () => {
  console.log(numDecodings("12")); // 2 ( [1,2], [12] )
  console.log(numDecodings("226")); // 3 ( [2,26], [22,6], [2,2,6] )
  console.log(numDecodings("11106")); // 2
  console.log(numDecodings("2611055971756562")); // 4
};
