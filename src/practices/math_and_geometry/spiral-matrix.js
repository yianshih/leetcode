/**

[Medium]

54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const DIRECTIONS = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const visited = new Set();

  const res = [];

  const travel = (i, j, d) => {
    const key = [i, j].join(",");

    if (matrix?.[i]?.[j] === undefined || visited.has(key)) {
      return;
    }

    res.push(matrix[i][j]);

    visited.add(key);

    const [d_i, d_j] = DIRECTIONS[d];

    let next_i = i + d_i;
    let next_j = j + d_j;
    let next_d = d;

    const nextKey = [next_i, next_j].join(",");

    // Either reach to the end of current direction or has visited position
    if (matrix?.[next_i]?.[next_j] === undefined || visited.has(nextKey)) {
      next_d = d === DIRECTIONS.length - 1 ? 0 : d + 1;

      const [d_i, d_j] = DIRECTIONS[next_d];

      next_i = i + d_i;
      next_j = j + d_j;
    }

    travel(next_i, next_j, next_d);
  };

  travel(0, 0, 0);

  return res;
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

  console.log(spiralOrder(test1)); // [1,2,4,3]
  console.log(spiralOrder(test2)); // [1,2,3,6,9,8,7,4,5]
};
