/**

[Medium]

133. Clone Graph

Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

*/

// Definition for a Node.
class _Node {
  /**
   * @param {number} val
   * @param {Node[]} neighbors
   */
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph_iterator = (node) => {
  if (!node) return null;

  const nodeMap = {};

  const root = new _Node(node.val);

  nodeMap[node.val] = root;

  let stack = [node];

  while (stack.length) {
    const currentNode = stack.pop();

    const node = nodeMap[currentNode.val];

    // Node will be created before reaching
    if (!node) return;

    currentNode.neighbors.forEach((n) => {
      if (!nodeMap[n.val]) {
        const newNode = new _Node(n.val);
        nodeMap[n.val] = newNode;
        stack.push(n);
      }

      node.neighbors.push(nodeMap[n.val]);
    });
  }

  return root;
};

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = (node) => {
  if (!node) return null;

  const copyMap = {};

  /**
   *
   * @param {_Node} node
   */
  const travel = (currentNode) => {
    if (copyMap[currentNode.val]) return copyMap[currentNode.val];

    const copy = new _Node(currentNode.val);

    copyMap[currentNode.val] = copy;

    currentNode.neighbors.forEach((n) => {
      copy.neighbors.push(travel(n));
    });

    return copy;
  };

  return travel(node);
};

export const main = async () => {
  // [[2,4],[1,3],[2,4],[1,3]]

  const node1 = new _Node(1);
  const node2 = new _Node(2);
  const node3 = new _Node(3);
  const node4 = new _Node(4);

  node1.neighbors = [node2, node4];
  node2.neighbors = [node1, node3];
  node3.neighbors = [node2, node4];
  node4.neighbors = [node1, node3];

  console.log(cloneGraph(node1));
};
