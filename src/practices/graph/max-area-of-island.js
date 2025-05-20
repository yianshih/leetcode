/**

[Medium]

695. Max Area of Island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let max = 0;

  /**
   * @param {number} r row
   * @param {number} c col
   */
  const travel = (r, c) => {
    // 0 or undefined
    if (!grid?.[r]?.[c]) return 0;

    grid[r][c] = 0;

    const sum =
      1 +
      travel(r + 1, c) +
      travel(r - 1, c) +
      travel(r, c + 1) +
      travel(r, c - 1);

    max = Math.max(max, sum);

    return sum;
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) {
        travel(r, c);
      }
    }
  }

  return max;
};

export const main = async () => {
  // 6
  console.log(
    maxAreaOfIsland([
      [0, 1, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [0, 1, 1, 0, 1],
      [0, 1, 0, 0, 1],
    ])
  );

  // 6
  console.log(
    maxAreaOfIsland([
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ])
  );
};
