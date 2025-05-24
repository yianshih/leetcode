/**

[Medium]

261. Graph Valid Tree

Graph Valid Tree

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

*/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @returns {boolean}
 */
var validTree = (n, edges) => {
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
   * @param {number} prevNode
   */
  const dfs = (node, prevNode) => {
    if (visited.has(node)) {
      return false;
    }

    const edges = edgeMap.get(node);

    if (!edges) {
      visited.add(node);
      return true;
    }

    visited.add(node);

    for (let nextNode of edges) {
      // Edges are added to both a-b and b-a ,so skip if it's same edge
      if (nextNode === prevNode) {
        continue;
      }

      if (!dfs(nextNode, node)) {
        return false;
      }
    }

    return true;
  };

  return dfs(0, -1) && visited.size === n;
};

export const main = async () => {
  const test1 = [
    5,
    [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 4],
    ],
  ];

  const test2 = [
    5,
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 3],
      [1, 4],
    ],
  ];

  const test3 = [
    5,
    [
      [0, 1],
      [2, 0],
      [3, 0],
      [1, 4],
    ],
  ];

  const test4 = [
    5,
    [
      [0, 1],
      [1, 3],
      [3, 2],
      [1, 4],
    ],
  ];

  const test5 = [
    5,
    [
      [0, 1],
      [1, 3],
      [3, 0],
      [2, 4],
    ],
  ];

  console.log(validTree(...test1)); // true

  console.log(validTree(...test2)); // false

  console.log(validTree(...test3)); // true

  console.log(validTree(...test4)); // true

  console.log(validTree(...test5)); // false
};
