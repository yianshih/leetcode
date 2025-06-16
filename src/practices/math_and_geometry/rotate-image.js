/**

[Medium]

48. Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // Swap diagonally
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j || j < i) {
        continue;
      }

      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Swap with horizontally
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length / 2; j++) {
      const swapIndex = matrix[i].length - 1 - j;

      [matrix[i][j], matrix[i][swapIndex]] = [
        matrix[i][swapIndex],
        matrix[i][j],
      ];
    }
  }

  return matrix;
};

export const main = async () => {
  const test1 = [
    [1, 2],
    [3, 4],
  ];

  const test2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(rotate(test1)); // [[3,1],[4,2]]
  console.log(rotate(test2)); // [[7, 4, 1],[8, 5, 2],[9, 6, 3]]
};
