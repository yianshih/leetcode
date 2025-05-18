/**

[Hard]

51. N-Queens

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens_without_optimised = function (n) {
  const positions = [];

  let current = [];

  /**
   * @param {number} row
   */
  const travel = (row) => {
    if (row === n) {
      positions.push([...current]);
      return;
    }

    const availableCols = Array.from({ length: n }, (_, i) => i).filter((c) => {
      return current.every(([cRow, cCol]) => {
        return (
          row !== cRow &&
          c !== cCol &&
          Math.abs(row - cRow) !== Math.abs(c - cCol)
        );
      });
    });

    for (let c of availableCols) {
      // Check available
      current.push([row, c]);
      travel(row + 1);
      current.pop();
    }
  };

  travel(0);

  const output = positions.map((positions) => {
    // i,e, [ [ 0, 1 ], [ 1, 3 ], [ 2, 0 ], [ 3, 2 ] ]
    return positions.map(([row, col]) => {
      // i,e, [ 0, 1 ]
      return Array.from({ length: n }, (_, i) => (i === col ? "Q" : ".")).join(
        ""
      );
    });
  });

  return output;
};

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];

  const col = new Set();
  const positiveDiag = new Set();
  const negativeDiag = new Set();

  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ".")
  );

  /**
   * @param {number} row
   */
  const travel = (row) => {
    if (row === n) {
      res.push(board.map((row) => row.join("")));
      return;
    }

    for (let c = 0; c < n; c++) {
      if (
        col.has(c) ||
        positiveDiag.has(row + c) ||
        negativeDiag.has(row - c)
      ) {
        continue;
      }

      col.add(c);
      positiveDiag.add(row + c);
      negativeDiag.add(row - c);
      board[row][c] = "Q";

      travel(row + 1);

      board[row][c] = ".";
      col.delete(c);
      positiveDiag.delete(row + c);
      negativeDiag.delete(row - c);
    }
  };

  travel(0);

  return res;
};

export const main = async () => {
  console.log(solveNQueens(4)); // [ [".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."] ]
};
