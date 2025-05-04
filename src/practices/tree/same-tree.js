/**

[Easy]

100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;

  if (p?.val !== q?.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

export const main = async () => {
  const test1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

  console.log(isSameTree(test1, test1)); // true

  const test2_1 = new TreeNode(1, new TreeNode(2));
  const test2_2 = new TreeNode(1, null, new TreeNode(2));

  console.log(isSameTree(test2_1, test2_2)); // false
};
