/**

[Medium]

98. Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

 - The left  subtree of a node contains only nodes with keys less than the node's key.
 - The right subtree of a node contains only nodes with keys greater than the node's key.
 - Both the left and right subtrees must also be binary search trees.

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
var isValidBST = function (root) {
  /**
   *
   * @param {TreeNode} node
   * @param {number} min node must greater than min
   * @param {number} max node must smaller than max
   */
  const travel = (node, min, max) => {
    if (!node) return true;

    if (!(node.val > min && node.val < max)) return false;

    return (
      travel(node.left, min, node.val) && travel(node.right, node.val, max)
    );
  };

  return travel(root, -Infinity, Infinity);
};

const getLeftIndex = (index) => index * 2 + 1;
const getRightIndex = (index) => index * 2 + 2;

/**
 * @param {number[]} nums
 */
const buildTreeNode = (nums, index = 0) => {
  if (!nums.length) return null;

  if (nums?.[index] !== 0 && !nums[index]) return null;

  return new TreeNode(
    nums[index],
    buildTreeNode(nums, getLeftIndex(index)),
    buildTreeNode(nums, getRightIndex(index))
  );
};

export const main = async () => {
  console.log(isValidBST(buildTreeNode([2, 1, 3])) === true);
  console.log(isValidBST(buildTreeNode([5, 1, 4, null, null, 3, 6])) === false);
  console.log(isValidBST(buildTreeNode([2, 2, 2])) === false);
  console.log(isValidBST(buildTreeNode([5, 4, 6, null, null, 3, 7])) === false);
};
