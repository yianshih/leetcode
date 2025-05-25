/**

[Medium]

684. Redundant Connection

In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const uniqueNodes = new Set(edges.flat());

  const parents = Array.from({ length: uniqueNodes.size + 1 }, (_, i) => i);

  const rank = new Array(uniqueNodes.size + 1).fill(1);

  const find = (n) => {
    if (n !== parents[n]) {
      parents[n] = find(parents[n]);
    }

    return parents[n];
  };

  const union = (n1, n2) => {
    const p1 = find(n1);
    const p2 = find(n2);

    if (p1 === p2) {
      return [n1, n2];
    }

    if (rank[p1] > rank[p2]) {
      parents[p2] = p1;
      rank[p1] += rank[p2];
    } else {
      parents[p1] = p2;
      rank[p2] += rank[p1];
    }

    return;
  };

  for (let [a, b] of edges) {
    const res = union(a, b);

    if (res) {
      return [a, b];
    }
  }

  return [];
};

export const main = async () => {
  const test1 = [
    [1, 2],
    [1, 3],
    [2, 3],
  ];

  const test2 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 4],
    [1, 5],
  ];

  const test3 = [
    [3, 4],
    [1, 2],
    [2, 4],
    [3, 5],
    [2, 5],
  ];

  const test4 = [
    [9, 10],
    [5, 8],
    [2, 6],
    [1, 5],
    [3, 8],
    [4, 9],
    [8, 10],
    [4, 10],
    [6, 8],
    [7, 9],
  ];

  console.log(findRedundantConnection(test1)); // [2,3]

  console.log(findRedundantConnection(test2)); // [1,4]

  console.log(findRedundantConnection(test3)); // [2,5]

  console.log(findRedundantConnection(test4)); // [4,10]
};
