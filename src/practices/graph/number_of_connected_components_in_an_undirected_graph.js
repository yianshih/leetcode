/**

❗️

[Medium]

323. Number of Connected Components in an Undirected Graph

There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.

The nodes are numbered from 0 to n - 1.

Return the total number of connected components in that graph.

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number}
 */
const countComponents_dfs = (n, edges) => {
  const edgeMap = new Map();

  const visited = new Set();

  edges.forEach(([a, b]) => {
    const aEdges = edgeMap.get(a) ?? [];
    const bEdges = edgeMap.get(b) ?? [];

    aEdges.push(b);
    bEdges.push(a);

    edgeMap.set(a, aEdges);
    edgeMap.set(b, bEdges);
  });

  /**
   * @param {number} node
   */
  const travel = (node) => {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    const edges = edgeMap.get(node) ?? [];

    edges.forEach((nextNode) => {
      travel(nextNode);
    });
  };

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      count++;
    }

    travel(i);
  }

  return count;
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {number}
 */
const countComponents = (n, edges) => {
  const parents = Array.from({ length: n }, (_, i) => i);
  const rank = new Array(n).fill(1);

  const find = (node) => {
    let res = node;

    while (res !== parents[res]) {
      // optimization to get grandparent
      parents[res] = parents[parents[res]];
      res = parents[res];
    }

    return res;
  };

  const union = (n1, n2) => {
    const p1 = find(n1);
    const p2 = find(n2);

    if (p1 === p2) return 0;

    if (rank[p1] > rank[p2]) {
      parents[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      parents[p1] = p2;
      rank[p2] += rank[p1];
    }

    return 1;
  };

  let count = n;

  edges.forEach(([n1, n2]) => {
    count -= union(n1, n2);
  });

  return count;
};

export const main = async () => {
  const test1 = [
    3,
    [
      [0, 1],
      [0, 2],
    ],
  ];

  const test2 = [
    6,
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [4, 5],
    ],
  ];

  const test3 = [
    3,
    [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
  ];

  console.log(countComponents(...test1)); // 1
  console.log(countComponents(...test2)); // 2
  console.log(countComponents(...test3)); // 1

  console.log(countComponents(1, [])); // 1
};
