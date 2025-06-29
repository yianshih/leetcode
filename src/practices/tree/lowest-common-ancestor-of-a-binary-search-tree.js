/**

[Medium]

235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root.val === p.val || root.val === q.val) return root;

  const [small, big] = [p, q].sort((a, b) => a.val - b.val);

  if (small.val < root.val && big.val > root.val) return root;

  if (root.val > big.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
};

export const main = async () => {
  const test1 = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4)),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  );

  console.log(lowestCommonAncestor(test1, new TreeNode(3), new TreeNode(8))); // TreeNode 5
  console.log(lowestCommonAncestor(test1, new TreeNode(4), new TreeNode(7))); // TreeNode 5
  console.log(lowestCommonAncestor(test1, new TreeNode(1), new TreeNode(4))); // TreeNode 3
  console.log(lowestCommonAncestor(test1, new TreeNode(3), new TreeNode(4))); // TreeNode 3

  const test2 = new TreeNode(
    6,
    new TreeNode(
      2,
      new TreeNode(0),
      new TreeNode(4, new TreeNode(3), new TreeNode(5))
    ),
    new TreeNode(8, new TreeNode(7), new TreeNode(9))
  );

  console.log(lowestCommonAncestor(test2, new TreeNode(2), new TreeNode(8))); // TreeNode 6
};
