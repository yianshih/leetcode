/**

[Medium]

763. Partition Labels

You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.

*/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const pos = {};

  for (let i = 0; i < s.length; i++) {
    pos[s[i]] = i;
  }

  const res = [];

  let currentPos = 0;

  while (currentPos < s.length) {
    const key = s[currentPos];
    let max = pos[key];

    let start = currentPos;

    while (currentPos < max) {
      const c = s[currentPos];

      // Update max index while traveling all characters in current range
      max = Math.max(max, pos[c]);
      currentPos++;
    }

    res.push(max - start + 1);

    currentPos = max + 1;
  }

  return res;
};

export const main = async () => {
  console.log(partitionLabels("xyxxyzbzbbisl")); // [5, 5, 1, 1, 1]
  console.log(partitionLabels("abcabc")); // [6]
  console.log(partitionLabels("ababcbacadefegdehijhklij")); //  [9,7,8]
  console.log(partitionLabels("eccbbbbdec")); //[ 10]
};
