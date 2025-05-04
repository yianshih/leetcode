/**

[Easy]

543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

*/

// Definition for a binary tree node.
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
var diameterOfBinaryTree = (root) => {
  let max = 0;

  /**
   * @param {TreeNode} tree
   * @param {Number} count
   */
  const travel = (tree) => {
    if (!tree) return 0;

    const leftNodes = travel(tree.left);
    const rightNodes = travel(tree.right);

    // Sub-tree might have greater diameters
    max = Math.max(max, leftNodes + rightNodes);

    // Return the max edges from this node for parent
    return 1 + Math.max(leftNodes, rightNodes);
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
