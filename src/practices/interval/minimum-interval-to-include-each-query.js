/**

[Hard]

1851. Minimum Interval to Include Each Query

You are given a 2D integer array intervals, where intervals[i] = [lefti, righti] describes the ith interval starting at lefti and ending at righti (inclusive). The size of an interval is defined as the number of integers it contains, or more formally righti - lefti + 1.

You are also given an integer array queries. The answer to the jth query is the size of the smallest interval i such that lefti <= queries[j] <= righti. If no such interval exists, the answer is -1.

Return an array containing the answers to the queries.

*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
  intervals.sort(([a], [b]) => a - b);

  const res = {};

  const queue = new MinPriorityQueue(([size]) => size);

  const sortedQueries = [...queries].sort((a, b) => a - b);

  let i = 0;

  for (let q of sortedQueries) {
    // Keep adding interval until the start is greater than query
    while (i < intervals.length && intervals[i][0] <= q) {
      const [start, end] = intervals[i];
      queue.enqueue([end - start + 1, end]);
      i++;
    }

    // Keep removing intervals until the end is not smaller than q
    while (!queue.isEmpty() && queue.front()[1] < q) {
      queue.dequeue();
    }

    res[q] = queue.isEmpty() ? -1 : queue.front()[0];
  }

  return queries.map((q) => res[q]);
};

export const main = async () => {
  const test1 = [
    [
      [1, 3],
      [2, 3],
      [3, 7],
      [6, 6],
    ],
    [2, 3, 1, 7, 6, 8],
  ];

  const test2 = [
    [
      [1, 4],
      [2, 4],
      [3, 6],
      [4, 4],
    ],
    [2, 3, 4, 5],
  ];

  const test3 = [
    [
      [2, 3],
      [2, 5],
      [1, 8],
      [20, 25],
    ],
    [2, 19, 5, 22],
  ];

  console.log(minInterval(...test1)); // [2,2,3,5,1,-1]
  console.log(minInterval(...test2)); // [3,3,1,4]
  console.log(minInterval(...test3)); // [2,-1,4,6]
};
