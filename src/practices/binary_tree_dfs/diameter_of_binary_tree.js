/**

[Easy]

543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.


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
var diameterOfBinaryTree = function (root) {
  let max = 0;

  const travel = (node) => {
    // invalid path, deduct previous count
    if (!node) return -1;

    // leaf node
    if (!node?.left && !node?.right) return 0;

    const left = 1 + travel(node?.left);

    const right = 1 + travel(node?.right);

    const localMax = left + right;

    max = Math.max(max, localMax);

    // Pick longest path
    return Math.max(left, right);
  };

  travel(root);

  return max;
};

export const main = async () => {
  console.log(
    diameterOfBinaryTree(
      new TreeNode(
        1,
        new TreeNode(
          2,
          new TreeNode(3, new TreeNode(4, new TreeNode(5))),
          new TreeNode(8, null, new TreeNode(7, null, new TreeNode(6)))
        ),
        new TreeNode(9)
      )
    ) === 6
  );

  console.log(
    diameterOfBinaryTree(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3)
      )
    ) === 3
  );
  console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2))) === 1);
};
