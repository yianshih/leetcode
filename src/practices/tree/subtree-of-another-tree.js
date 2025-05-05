/**

[Easy]

572. Subtree of Another Tree

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.


A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 *
 * @param {TreeNode} base
 * @param {TreeNode} target
 */
const sameTree = (base, target) => {
  if (!base && !target) return true;

  return (
    base?.val === target?.val &&
    sameTree(base?.left, target?.left) &&
    sameTree(base?.right, target?.right)
  );
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  if (!root) return false;

  return (
    sameTree(root, subRoot) ||
    isSubtree(root?.left, subRoot) ||
    isSubtree(root?.right, subRoot)
  );
};

export const main = async () => {
  const test1_root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

  console.log(isSubtree(test1_root, test1_root)); // true

  const test2_root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  );

  const test2_subroot = new TreeNode(2, new TreeNode(4), new TreeNode(5));

  console.log(isSubtree(test2_root, test2_subroot)); // true

  const test3_root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4, new TreeNode(6)), new TreeNode(5)),
    new TreeNode(3)
  );

  const test3_subroot = new TreeNode(2, new TreeNode(4), new TreeNode(5));

  console.log(isSubtree(test3_root, test3_subroot)); // false

  const test4_root = new TreeNode(
    1,
    null,
    new TreeNode(
      1,
      null,
      new TreeNode(1, null, new TreeNode(1, new TreeNode(2)))
    )
  );

  const test4_subroot = new TreeNode(
    1,
    null,
    new TreeNode(
      1,
      null,
      new TreeNode(1, null, new TreeNode(1, new TreeNode(2)))
    )
  );

  console.log(isSubtree(test4_root, test4_subroot)); // true
};
