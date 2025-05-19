/**

❗️

[Hard]

212. Word Search II

Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

*/

class Trie {
  /**
   * @param {boolean} isWordEnd
   */
  constructor(isWordEnd = false) {
    this.tree = new Map();
    this.isWordEnd = isWordEnd;
  }

  /**
   * @param {string} word
   */
  addWord(word) {
    if (!word.length) return;

    const isWordEnd = word.length === 1;

    const node = this.tree.get(word[0]);

    if (node) {
      node.isWordEnd = node.isWordEnd || isWordEnd;
      node.addWord(word.slice(1));
    } else {
      const trie = new Trie(isWordEnd);
      trie.addWord(word.slice(1));
      this.tree.set(word[0], trie);
    }
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const res = new Set();

  const trie = new Trie();

  words.forEach((w) => trie.addWord(w));

  const visted = new Set();

  /**
   * @param {number} r
   * @param {number} c
   * @param {string} path
   * @param {Trie} t
   */
  const travel = (r, c, path, t) => {
    const pos = `${r},${c}`;

    if (!t || !board?.[r]?.[c] || visted.has(pos)) {
      return;
    }

    const word = board[r][c];

    const node = t.tree.get(word);

    if (!node) {
      return;
    }

    path = path + word;

    if (node.isWordEnd) {
      res.add(path);
    }
    visted.add(pos);
    travel(r - 1, c, path, node);
    travel(r + 1, c, path, node);
    travel(r, c - 1, path, node);
    travel(r, c + 1, path, node);
    visted.delete(pos);
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      travel(i, j, "", trie);
    }
  }

  return Array.from(res);
};

export const main = async () => {
  // ["cat","back","backend"]
  console.log(
    findWords(
      [
        ["a", "b", "c", "d"],
        ["s", "a", "a", "t"],
        ["a", "c", "k", "e"],
        ["a", "c", "d", "n"],
      ],
      ["bat", "cat", "back", "backend", "stack"]
    )
  );

  // ["oa","oaa"]
  console.log(
    findWords(
      [
        ["o", "a", "b", "n"],
        ["o", "t", "a", "e"],
        ["a", "h", "k", "r"],
        ["a", "f", "l", "v"],
      ],
      ["oa", "oaa"]
    )
  );
};
