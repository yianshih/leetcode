/**

[Medium]

102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const res = [];

  let queue = [root];

  while (queue.length) {
    const next = [];
    const values = [];

    queue.forEach((node) => {
      values.push(node.val);
      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }
    });

    queue = next;
    res.push(values);
  }

  return res;
};

export const main = async () => {
  const test1 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
  );

  console.log(levelOrder(test1)); //  [ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]
};
