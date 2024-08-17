/**

530. Minimum Absolute Difference in BST

Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

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
var getMinimumDifference = function (root) {
  const values = [];

  /**
   * @param {TreeNode} node
   */

  // Build the number array inorder
  // Travel to the leftest (minimal) first
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    values.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  let min = -1;

  for (let i = 0; i < values.length - 1; i++) {
    if (min === -1) {
      min = values[i + 1] - values[i];
    } else {
      min = Math.min(min, values[i + 1] - values[i]);
    }
  }

  return min;
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
  console.log(getMinimumDifference(buildTreeNode([4, 2, 6, 1, 3])) === 1);

  console.log(
    getMinimumDifference(buildTreeNode([1, 0, 48, null, null, 12, 49])) === 1
  );
};
