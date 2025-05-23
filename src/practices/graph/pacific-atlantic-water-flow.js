/**

❗️

[Medium]

417. Pacific Atlantic Water Flow

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

*/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const pac = new Set();
  const atl = new Set();

  /**
   * @param {number} r
   * @param {number} c
   * @param {Set} ocean
   * @param {number} prevHeight
   */
  const travel = (r, c, ocean, prevHeight) => {
    const pos = `${r},${c}`;

    if (
      ocean.has(pos) ||
      heights?.[r]?.[c] === undefined ||
      heights[r][c] < prevHeight
    ) {
      return;
    }

    ocean.add(pos);

    travel(r + 1, c, ocean, heights[r][c]);
    travel(r - 1, c, ocean, heights[r][c]);
    travel(r, c + 1, ocean, heights[r][c]);
    travel(r, c - 1, ocean, heights[r][c]);
  };

  for (let c = 0; c < heights[0].length; c++) {
    // from top
    travel(0, c, pac, heights[0][c]);

    // from bottom
    travel(heights.length - 1, c, atl, heights[heights.length - 1][c]);
  }

  for (let r = 0; r < heights.length; r++) {
    // from left
    travel(r, 0, pac, heights[r][0]);

    // from right
    travel(r, heights[r].length - 1, atl, heights[r][heights[r].length - 1]);
  }

  const res = [];

  // Get pos that reach both pacific and atlantic
  pac.forEach((pos) => {
    if (atl.has(pos)) {
      res.push(pos.split(",").map(Number));
    }
  });

  return res;
};

export const main = async () => {
  const test1 = [
    [4, 2, 7, 3, 4],
    [7, 4, 6, 4, 7],
    [6, 3, 5, 3, 6],
  ];

  const test2 = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ];

  const test3 = [
    [3, 3, 3],
    [3, 1, 3],
    [0, 2, 4],
  ];

  console.log(pacificAtlantic(test1)); // [[0,2],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0]]

  console.log(pacificAtlantic(test2)); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

  console.log(pacificAtlantic(test3)); // [[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2]]
};
