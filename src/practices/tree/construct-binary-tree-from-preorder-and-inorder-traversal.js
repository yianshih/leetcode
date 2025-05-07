/**

[Medium]

105. Construct Binary Tree from Preorder and Inorder Traversal

Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const val = preorder[0];

  const index = inorder.indexOf(val);

  return new TreeNode(
    val,
    buildTree(preorder.slice(1, index + 1), inorder.slice(0, index)),
    buildTree(preorder.slice(index + 1), inorder.slice(index + 1))
  );
};

export const main = async () => {
  console.log(buildTree([1, 2, 3, 4], [2, 1, 3, 4]));
  console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
};
