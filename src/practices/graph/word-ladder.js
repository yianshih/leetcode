/**
 * 

[Hard]

127. Word Ladder

A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.

Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.

sk == endWord

Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0;

  wordList.push(beginWord);

  // neighbor
  const nb = new Map(); // { [wildcard]: string[] }:

  wordList.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1);

      const existing = nb.get(pattern) ?? [];
      existing.push(word);
      nb.set(pattern, existing);
    }
  });

  let q = [beginWord];

  let count = 0;

  const visited = new Set();

  while (q.length > 0) {
    count++;
    const nextQ = [];

    q.forEach((w) => visited.add(w));

    for (let w of q) {
      for (let i = 0; i < w.length; i++) {
        const p = w.slice(0, i) + "*" + w.slice(i + 1);

        const nbs = nb.get(p) ?? [];

        for (let n of nbs) {
          if (visited.has(n)) continue;

          if (n === endWord) {
            // Add last word
            return count + 1;
          }
          nextQ.push(n);
        }
      }
    }

    q = Array.from(new Set(nextQ));
  }

  return 0;
};

export const main = async () => {
  const test1 = ["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]];

  const test2 = ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]];

  const test3 = ["hot", "dog", ["hot", "dog"]];

  console.log(ladderLength(...test1)); // 5
  console.log(ladderLength(...test2)); // 0

  console.log(ladderLength(...test3)); // 0
};
