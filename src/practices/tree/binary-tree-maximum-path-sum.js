/**

[Hard]

124. Binary Tree Maximum Path Sum

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val;
  /**
   * @param {TreeNode} node
   * @returns
   */
  const travel = (node) => {
    if (!node) return 0;

    let sum = 0;

    const left = travel(node.left);
    const right = travel(node.right);

    sum = left + right + node.val;

    // Local max if current node is root of a path
    max = Math.max(max, node.val, sum);

    // Choose either left or right
    const path = left >= right ? left : right;

    // If this branch is negative, then return 0 so parent will not include this branch
    return path + node.val > 0 ? path + node.val : 0;
  };

  travel(root);

  return max;
};

export const main = async () => {
  const test1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

  const test2 = new TreeNode(
    -15,
    new TreeNode(10),
    new TreeNode(20, new TreeNode(15, new TreeNode(-5)), new TreeNode(5))
  );

  const test3 = new TreeNode(-3);

  const test4 = new TreeNode(0, new TreeNode(1), new TreeNode(1));

  console.log(maxPathSum(test1)); // 6

  console.log(maxPathSum(test2)); // 40

  console.log(maxPathSum(test3)); // -3

  console.log(maxPathSum(test4)); // 2
};
