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
  let top = 0;
  let bottom = matrix.length - 1;

  let row = -1;

  while (top <= bottom) {
    const mid = Math.floor((top + bottom) / 2);

    if (
      matrix[mid][0] <= target &&
      matrix[mid][matrix[mid].length - 1] >= target
    ) {
      row = mid;
      break;
    }

    if (matrix[mid][0] > target) {
      bottom = mid - 1;
    } else {
      top = mid + 1;
    }
  }

  if (row === -1) {
    return false;
  }

  let left = 0;
  let right = matrix[row].length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (matrix[row][mid] === target) {
      return true;
    }

    if (matrix[row][mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
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
      3
    )
  ); // true
};
