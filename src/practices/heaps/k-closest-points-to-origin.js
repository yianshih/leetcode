/**

973. K Closest Points to Origin

[Medium]

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const q = new MinPriorityQueue((point) => {
    const [x, y] = point;
    return Math.abs(x) ** 2 + Math.abs(y) ** 2;
  });

  points.forEach((p) => {
    q.enqueue(p);
  });

  const res = [];

  while (res.length < k) {
    res.push(q.dequeue());
  }

  return res;
};

export const main = async () => {
  console.log(
    kClosest(
      [
        [0, 2],
        [2, 2],
      ],
      1
    )
  );

  console.log(
    kClosest(
      [
        [3, 3],
        [5, -1],
        [-2, 4],
      ],
      2
    )
  );
};
