/**

❗️

[Medium]

130. Surrounded Regions

You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.

Region: To form a region connect every 'O' cell.

Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.

To capture a surrounded region, replace all 'O's with 'X's in-place within the original board. You do not need to return anything. 

*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  /**
   *
   * @param {number} r row
   * @param {number} c col
   */
  const travel = (r, c) => {
    if (!board?.[r]?.[c] || board[r][c] !== "O") {
      return;
    }

    board[r][c] = "T";

    travel(r + 1, c);
    travel(r - 1, c);
    travel(r, c + 1);
    travel(r, c - 1);
  };

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (
        [0, board.length - 1].includes(r) ||
        [0, board[r].length - 1].includes(c)
      ) {
        // Travel the all O from the edge and convert to T
        travel(r, c);
      }
    }
  }

  // All unsurrounded has been converted to T in previous process
  // Now need to convert all Os to X and T to O
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "O") {
        board[r][c] = "X";
      }
      if (board[r][c] === "T") {
        board[r][c] = "O";
      }
    }
  }

  return board;
};

export const main = async () => {
  const test1 = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "X", "O"],
  ];

  // const test1_output = [
  //   ["X", "X", "X", "X"],
  //   ["X", "X", "X", "X"],
  //   ["X", "X", "X", "X"],
  //   ["X", "X", "X", "O"],
  // ];

  const test2 = [
    ["O", "X", "X", "O", "X"],
    ["X", "O", "O", "X", "O"],
    ["X", "O", "X", "O", "X"],
    ["O", "X", "O", "O", "O"],
    ["X", "X", "O", "X", "O"],
  ];

  // const test2_output = [
  //   ["O", "X", "X", "O", "X"],
  //   ["X", "X", "X", "X", "O"],
  //   ["X", "X", "X", "O", "X"],
  //   ["O", "X", "O", "O", "O"],
  //   ["X", "X", "O", "X", "O"],
  // ];

  const test3 = [
    ["O", "X", "O"],
    ["X", "O", "X"],
    ["O", "X", "O"],
  ];

  // const test3_output = [
  //   ["O", "X", "O"],
  //   ["X", "X", "X"],
  //   ["O", "X", "O"],
  // ];

  console.log(solve(test1));

  console.log(solve(test2));

  console.log(solve(test3));
};
