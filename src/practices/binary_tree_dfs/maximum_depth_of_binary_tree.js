/**

[Easy]

104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let max = 1;

  const travel = (node, count) => {
    if (!node) return;

    // Reach leaf
    if (!node?.left && !node?.right) {
      max = Math.max(max, count);
    }

    travel(node?.left, count + 1);
    travel(node?.right, count + 1);
  };

  travel(root, 1);

  return max;
};

export const main = async () => {
  console.log(
    maxDepth(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
      )
    ) === 3
  );

  console.log(maxDepth(new TreeNode(1, null, new TreeNode(2))) === 2);
};
