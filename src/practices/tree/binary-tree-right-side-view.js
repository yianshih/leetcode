/**

[Medium]

199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];

  const res = [];

  let queue = [root];

  while (queue.length) {
    const nextLevel = [];

    queue.forEach((node) => {
      if (node.left) {
        nextLevel.push(node.left);
      }

      if (node.right) {
        nextLevel.push(node.right);
      }
    });

    // Only push the rightest node's value as rest of nodes will be blocked
    const rightest = queue[queue.length - 1];

    res.push(rightest.val);

    queue = nextLevel;
  }

  return res;
};

export const main = async () => {
  const test1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

  console.log(rightSideView(test1)); // [ 1, 3 ]

  const test2 = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4, new TreeNode(5))),
    new TreeNode(3)
  );

  console.log(rightSideView(test2)); // [ 1, 3, 4, 5 ]
};
