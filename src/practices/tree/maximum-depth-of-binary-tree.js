/**

[Easy]

104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
var maxDepth = (root) => {
  let max = 0;

  /**
   * @param {TreeNode} tree
   * @param {number} depth
   */
  const travel = (tree, depth) => {
    if (!tree) {
      max = Math.max(max, depth);
    } else {
      travel(tree.left, depth + 1);
      travel(tree.right, depth + 1);
    }
  };

  travel(root, 0);

  return max;
};

export const main = async () => {
  const test1 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode())
  );

  console.log(maxDepth(test1));
};
