/**
 * 

[Easy]

257. Binary Tree Paths

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let paths = [];

  const travel = (node, path = "") => {
    if (!node) return;

    if (!node?.left && !node?.right) {
      paths.push(path ? `${path}->${node?.val}` : `${node?.val}`);
    }
    travel(node?.left, path ? `${path}->${node?.val}` : `${node?.val}`);
    travel(node?.right, path ? `${path}->${node?.val}` : `${node?.val}`);
  };

  travel(root);

  return paths;
};

export const main = async () => {
  // Expect ["1->2->5","1->3"]
  console.log(
    binaryTreePaths(
      new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))
    )
  );

  // Expect ["1"]
  console.log(binaryTreePaths(new TreeNode(1)));
};
