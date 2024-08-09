/**
 
637. Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.

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
var averageOfLevels = function (root) {
  let queue = [root];

  const avg = [];

  while (queue.length > 0) {
    const currentQueue = queue;

    queue = [];

    let total = 0;

    for (let node of currentQueue) {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      total += node?.val;
    }

    avg.push(total / currentQueue.length);
  }

  return avg;
};

export const main = async () => {
  // [3, 14.5, 11]
  console.log(
    averageOfLevels(
      new TreeNode(
        3,
        new TreeNode(9),
        new TreeNode(20, new TreeNode(15), new TreeNode(7))
      )
    )
  );

  // [3, 14.5, 11]
  console.log(
    averageOfLevels(
      new TreeNode(
        3,
        new TreeNode(9, new TreeNode(15), new TreeNode(7)),
        new TreeNode(20)
      )
    )
  );
};
