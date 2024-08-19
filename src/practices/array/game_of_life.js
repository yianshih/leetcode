/**

[Medium]

289. Game of Life

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

*/

const STATE_TO_CODE = {
  "0->0": 2,
  "0->1": 3,
  "1->1": 4,
  "1->0": 5,
};

const CODE_TO_ORIGIN = {
  2: 0,
  3: 0,
  4: 1,
  5: 1,
};

const CODE_TO_STATE = {
  2: 0,
  3: 1,
  4: 1,
  5: 0,
};

/**
 *
 * @param {number[][]} board
 * @returns
 */
const buildGetNewState = (board) => (row, col) => {
  const currentState = board[row][col];

  let maxRow = board.length - 1;
  let maxCol = board[0].length - 1;

  let live = 0;

  // 0:1
  let startRow = row - 1 >= 0 ? row - 1 : row; // 0 - 1
  let endRow = row + 1 <= maxRow ? row + 1 : row;

  let startCol = col - 1 >= 0 ? col - 1 : col; // 0 - 2
  let endCol = col + 1 <= maxCol ? col + 1 : col;

  for (let i = startRow; i <= endRow; i++) {
    for (let j = startCol; j <= endCol; j++) {
      if (i === row && j === col) continue;

      if (board?.[i]?.[j] !== undefined) {
        let origin = board[i][j];

        if (i < row) {
          origin = CODE_TO_ORIGIN[origin];
        }
        if (i === row && j < col) {
          origin = CODE_TO_ORIGIN[origin];
        }

        if (origin === 1) {
          live++;
        }
      }
    }
  }

  let newState = board[row][col];

  if (currentState === 0) {
    newState = live === 3 ? 1 : 0;
  } else {
    newState = live === 2 || live === 3 ? 1 : 0;
  }

  return STATE_TO_CODE[`${currentState}->${newState}`];
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const getNewState = buildGetNewState(board);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = getNewState(i, j);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] = CODE_TO_STATE[board[i][j]];
    }
  }

  return board;
};

export const main = async () => {
  console.log(
    gameOfLife([
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ])
  );
};
