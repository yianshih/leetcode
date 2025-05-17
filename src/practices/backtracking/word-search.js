/**

❗️

[Medium]

79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let used = new Set();

  /**
   *
   * @param {number} i index on row
   * @param {number} j index on column
   * @param {number} k index on word
   */
  const travel = (i, j, k) => {
    if (k === word.length) {
      return true;
    }

    const path = `${i},${j}`;

    // Exceeds range
    if (!board?.[i]?.[j] || word[k] !== board[i][j] || used.has(path)) {
      return false;
    }

    used.add(path);
    const res =
      travel(i + 1, j, k + 1) ||
      travel(i - 1, j, k + 1) ||
      travel(i, j + 1, k + 1) ||
      travel(i, j - 1, k + 1);

    used.delete(path);

    return res;
  };

  /**
   * Reverse the word if the frequency of first letter is greater than last letter
   * This help with some cases
   */
  const count = {};
  for (const c of word) {
    count[c] = (count[c] || 0) + 1;
  }

  if (count[word[0]] > count[word[word.length - 1]]) {
    word = word.split("").reverse().join("");
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (travel(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

export const main = async () => {
  const test1 = [
    [
      ["A", "B", "C", "D"],
      ["S", "A", "A", "T"],
      ["A", "C", "A", "E"],
    ],
    "CAT",
  ];

  const test2 = [
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED",
  ];

  console.log(exist(test1[0], test1[1])); // true;

  console.log(exist(test2[0], test2[1])); // true
};
