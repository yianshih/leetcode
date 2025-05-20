/**

[Medium]

200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands_with_visited = function (grid) {
  let count = 0;
  const visited = new Set();

  /**
   *
   * @param {number} r row
   * @param {number} c col
   */
  const travel = (r, c) => {
    const pos = `${r},${c}`;

    if (!grid?.[r]?.[c] || grid[r][c] === "0" || visited.has(pos)) return;

    visited.add(pos);

    travel(r + 1, c);
    travel(r - 1, c);
    travel(r, c + 1);
    travel(r, c - 1);
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
        count++;
        travel(r, c);
      }
    }
  }

  return count;
};

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  /**
   *
   * @param {number} r row
   * @param {number} c col
   */
  const travel = (r, c) => {
    if (!grid?.[r]?.[c] || grid[r][c] === "0") return;

    // Mark it as 0 after visiting
    grid[r][c] = "0";

    travel(r + 1, c);
    travel(r - 1, c);
    travel(r, c + 1);
    travel(r, c - 1);
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "1") {
        count++;
        travel(r, c);
      }
    }
  }

  return count;
};

export const main = async () => {
  // 1
  console.log(
    numIslands([
      ["0", "1", "1", "1", "0"],
      ["0", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ])
  );

  // 2
  console.log(
    numIslands([
      ["0", "0", "1", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["1", "1", "1", "0", "1"],
      ["0", "0", "0", "0", "1"],
    ])
  );

  //   4;
  console.log(
    numIslands([
      ["1", "1", "0", "0", "1"],
      ["1", "1", "0", "0", "1"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ])
  );
};
