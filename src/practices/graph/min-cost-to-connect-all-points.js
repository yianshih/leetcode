/**

❗️ (Prim's Algorithm)

[Medium]

1584. Min Cost to Connect All Points

You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const adjs = {};

  // Set up all neighbor with cost for all points
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];

    for (let j = i + 1; j < points.length; j++) {
      const [x2, y2] = points[j];
      const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      if (adjs[i] === undefined) {
        adjs[i] = [];
      }
      if (adjs[j] === undefined) {
        adjs[j] = [];
      }

      adjs[i].push([j, cost]);
      adjs[j].push([i, cost]);
    }
  }

  let total = 0;

  const visited = new Set();

  const q = new MinPriorityQueue(([_, c]) => c);
  q.enqueue([0, 0]); // Starting from point 0

  while (visited.size < points.length) {
    const [p, cost] = q.dequeue();

    if (visited.has(p)) continue;

    total += cost;
    visited.add(p);

    const currentAdjs = adjs?.[p] ?? [];

    for (let [n, c] of currentAdjs) {
      if (visited.has(n)) {
        continue;
      }
      q.enqueue([n, c]);
    }
  }

  return total;
};

export const main = async () => {
  const test1 = [
    [0, 0],
    [2, 2],
    [3, 3],
    [2, 4],
    [4, 2],
  ];

  const test2 = [[0, 0]];

  console.log(minCostConnectPoints(test1));
  console.log(minCostConnectPoints(test2));
};
