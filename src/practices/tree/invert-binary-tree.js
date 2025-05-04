/**

[Easy]

226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

*/

//  Definition for a binary tree node.
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;

  const left = root.left;
  const right = root.right;

  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
};

export const main = async () => {
  const test1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
  );

  console.log(invertTree(test1));
};
