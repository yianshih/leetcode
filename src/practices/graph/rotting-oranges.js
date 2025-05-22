/**

[Medium]

994. Rotting Oranges

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.

Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let minutes = 0;

  let rottens = [];

  let fresh = 0;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 2) {
        rottens.push([r, c]);
      }
      if (grid[r][c] === 1) {
        fresh++;
      }
    }
  }

  if (!fresh) return 0;

  if (!rottens.length) return -1;

  const direction = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (rottens.length) {
    let next = [];

    // eslint-disable-next-line no-loop-func
    rottens.forEach(([r, c]) => {
      direction.forEach(([r_d, c_d]) => {
        const newRow = r + r_d;
        const newCol = c + c_d;
        if (grid?.[newRow]?.[newCol] === 1) {
          next.push([newRow, newCol]);
          grid[newRow][newCol] = 2;
          fresh--;
        }
      });
    });

    rottens = next;

    if (rottens.length) {
      minutes++;
    }
  }

  return fresh > 0 ? -1 : minutes;
};

export const main = async () => {
  const test1 = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ];

  const test2 = [
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ];

  console.log(orangesRotting(test1)); // 4

  console.log(orangesRotting(test2)); // -1
};
