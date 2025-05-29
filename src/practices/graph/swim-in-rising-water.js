/**

[Hard]

778. Swim in Rising Water

You are given an n x n integer matrix grid where each value grid[i][j] represents the elevation at that point (i, j).

The rain starts to fall. At time t, the depth of the water everywhere is t. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most t. You can swim infinite distances in zero time. Of course, you must stay within the boundaries of the grid during your swim.

Return the least time until you can reach the bottom right square (n - 1, n - 1) if you start at the top left square (0, 0).

*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const dest = `${grid.length - 1},${grid[grid.length - 1].length - 1}`;

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const q = new MinPriorityQueue(([e]) => e);

  const visited = new Set();

  q.enqueue([grid[0][0], 0, 0]);

  while (q.size() > 0) {
    const [e, r, c] = q.dequeue();

    const pos = `${r},${c}`;

    if (pos === dest) {
      return e;
    }

    if (visited.has(pos)) {
      continue;
    }

    visited.add(pos);

    for (let [d_r, d_c] of direction) {
      const nextRow = r + d_r;
      const nextCol = c + d_c;

      if (
        grid?.[nextRow]?.[nextCol] === undefined ||
        visited.has(`${nextRow},${nextCol}`)
      ) {
        continue;
      }

      q.enqueue([Math.max(e, grid[nextRow][nextCol]), nextRow, nextCol]);
    }
  }

  return -1;
};

export const main = async () => {
  const test1 = [
    [0, 2],
    [1, 3],
  ];

  const test2 = [
    [0, 1, 2, 10],
    [9, 14, 4, 13],
    [12, 3, 8, 15],
    [11, 5, 7, 6],
  ];

  const test3 = [
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6],
  ];

  const test4 = [
    [3, 2],
    [1, 0],
  ];

  console.log(swimInWater(test1)); // 3
  console.log(swimInWater(test2)); // 8
  console.log(swimInWater(test3)); // 16
  console.log(swimInWater(test4)); // 3
};
