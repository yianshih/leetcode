/**

[Medium]

230. Kth Smallest Element in a BST

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest_recursion = function (root, k) {
  const nodes = [];

  /**
   *
   * @param {TreeNode} node
   */
  const travel = (node) => {
    if (!node) return;

    travel(node.left);

    nodes.push(node);

    travel(node.right);
  };

  travel(root);

  return nodes[k - 1].val;
};

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let n = 0;

  const stack = [];

  let current = root;

  while (true) {
    while (current) {
      stack.push(current);
      // Keep moving left until it's null
      current = current.left;
    }

    const node = stack.pop();

    n++;

    if (n === k) {
      return node.val;
    }

    current = node.right;
  }
};

export const main = async () => {
  const test1 = new TreeNode(
    3,
    new TreeNode(1, null, new TreeNode(2)),
    new TreeNode(4)
  );

  console.log(kthSmallest(test1, 4));
};
