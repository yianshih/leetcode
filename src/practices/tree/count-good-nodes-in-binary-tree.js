/**

[Medium]

1448. Count Good Nodes in Binary Tree

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.

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
 * @return {number}
 */
var goodNodes = function (root) {
  if (!root) return 0;

  // Root is always a good node
  let count = 1;

  /**
   * @param {TreeNode} node
   * @param {number} max
   */
  const travel = (node, max) => {
    if (!node) return;

    if (node.val >= max) {
      count++;
    }

    const newMax = Math.max(max, node.val);

    travel(node.left, newMax);
    travel(node.right, newMax);
  };

  travel(root.left, root.val);
  travel(root.right, root.val);

  return count;
};

export const main = async () => {
  const test1 = new TreeNode(
    2,
    new TreeNode(1, new TreeNode(3)),
    new TreeNode(1, new TreeNode(1), new TreeNode(5))
  );

  console.log(goodNodes(test1)); // 3

  const test2 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(-1)
  );

  console.log(goodNodes(test2)); // 4
};
