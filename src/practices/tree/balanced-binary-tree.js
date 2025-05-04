/**

[Easy]

110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true;

  /**
   *
   * @param {TreeNode} tree
   */
  const travel = (tree) => {
    // Stop recursion when one of nodes is not balanced
    if (!res) return 0;
    if (!tree) return 0;

    const left = travel(tree.left);

    const right = travel(tree.right);

    if (Math.abs(left - right) > 1) {
      res = false;
    }

    return 1 + Math.max(left, right);
  };

  travel(root);

  return res;
};

export const main = async () => {
  const test1 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4))
  );

  console.log(isBalanced(test1)); // true

  const test2 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4, new TreeNode(5)))
  );

  console.log(isBalanced(test2)); // false
};
