/**

❗️ (Dijkstra's Algorithm)

[Medium]

743. Network Delay Time

You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const minHeap = new MinPriorityQueue(([p]) => p);

  minHeap.enqueue([0, k]);

  const visited = new Set();

  const edgeMap = new Map();

  times.forEach(([from, to, time]) => {
    const edges = edgeMap.get(from) ?? [];

    edges.push([to, time]);

    edgeMap.set(from, edges);
  });

  let count = 0;

  while (minHeap.size() > 0) {
    const [path, node] = minHeap.dequeue();

    if (visited.has(node)) {
      continue;
    }

    count = Math.max(count, path);

    visited.add(node);

    const nextNodes = edgeMap.get(node) ?? [];

    for (let [n, t] of nextNodes) {
      if (visited.has(n)) {
        continue;
      }

      minHeap.enqueue([t + path, n]);
    }
  }

  return visited.size === n ? count : -1;
};

export const main = async () => {
  const test1 = [
    [
      [2, 1, 1],
      [2, 3, 1],
      [3, 4, 1],
    ],
    4,
    2,
  ];

  const test2 = [[[1, 2, 1]], 2, 1];

  const test3 = [[[1, 2, 1]], 2, 2];

  const test4 = [
    [
      [1, 2, 1],
      [2, 3, 2],
      [1, 3, 2],
    ],
    3,
    1,
  ];

  console.log(networkDelayTime(...test1)); // 2

  console.log(networkDelayTime(...test2)); // 1

  console.log(networkDelayTime(...test3)); // -1

  console.log(networkDelayTime(...test4)); // 2
};
