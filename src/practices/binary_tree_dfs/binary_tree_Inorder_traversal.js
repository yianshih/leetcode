/**
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Link: https://leetcode.com/problems/binary-tree-inorder-traversal/description/

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
 * @return {number[]}
 */
var inorderTraversal_recursion = function (root) {
  let answers = [];

  const travel = (node) => {
    if (!node) return;

    travel(node.left);
    answers.push(node.val);
    travel(node.right);
  };

  travel(root);
  return answers;
};

var inorderTraversal_iteration = function (root) {
  const answers = [];

  let node = root;
  const stack = [];

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }

    node = stack.pop();

    answers.push(node.val);

    node = node.right;
  }
  return answers;
};

export const main = () => {
  const exampleTree = new TreeNode(
    1,
    null,
    new TreeNode(2, new TreeNode(3, null, null), null)
  );
  // expect [1,3,2]
  console.log(inorderTraversal_iteration(exampleTree));
};
