/**

[Medium]

74. Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const colLength = matrix[0].length;

  // Find the row
  let top = 0;
  let bot = matrix.length - 1;
  let row = 0;

  while (top <= bot) {
    const middle = Math.floor((top + bot) / 2);

    if (target > matrix[middle][colLength - 1]) {
      top = middle + 1;
    } else if (target < matrix[middle][0]) {
      bot = middle - 1;
    } else {
      row = middle;
      break;
    }
  }

  // Find the index of the row

  let left = 0;
  let right = colLength - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === matrix[row][middle]) return true;

    if (target > matrix[row][middle]) left = middle + 1;
    else right = middle - 1;
  }
  return false;
};

export const main = async () => {
  console.log(
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      32
    )
  );
};
