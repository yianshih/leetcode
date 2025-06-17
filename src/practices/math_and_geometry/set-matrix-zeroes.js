/**

[Medium]

73. Set Matrix Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = new Set();
  const cols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  for (let row of rows) {
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
  }

  for (let col of cols) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
};

export const main = async () => {
  const test1 = [
    [0, 1],
    [1, 0],
  ];

  const test2 = [
    [1, 2, 3],
    [4, 0, 5],
    [6, 7, 8],
  ];

  const test3 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ];

  const test4 = [
    [1, 2, 3, 4],
    [5, 0, 7, 8],
    [0, 10, 11, 12],
    [13, 14, 15, 0],
  ];

  console.log(setZeroes(test1)); //  [[0,0],[0,0]]
  console.log(setZeroes(test2)); //  [[1,0,3],[0,0,0],[6,0,8]]
  console.log(setZeroes(test3)); //  [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
  console.log(setZeroes(test4)); //  [[0,0,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
};
