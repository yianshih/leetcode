/**

[Hard]

297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// BFS

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize_bfs = function (root) {
  if (!root) return "";

  const output = [];

  let queue = [root];

  while (queue.length) {
    const node = queue.shift();

    output.push(node?.val ?? "null");

    if (node) {
      queue.push(node.left, node.right);
    }
  }

  while (output[output.length - 1] === "null") {
    output.pop();
  }

  return output.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize_bfs = function (data) {
  // '1,2,3,null,null,4,5'
  if (!data.length) return null;

  const nodes = data.split(",");

  let root = new TreeNode(Number(nodes.shift()));

  const queue = [root];

  while (queue.length && nodes.length) {
    const node = queue.shift();

    const left = nodes.shift();

    const right = nodes.shift();

    node.left = Number.isNaN(Number(left)) ? null : new TreeNode(Number(left));
    node.right = Number.isNaN(Number(right))
      ? null
      : new TreeNode(Number(right));

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return root;
};

// DFS

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return "";

  let output = `${root.val}`;

  /**
   * @param {TreeNode} node
   */
  const travel = (node) => {
    if (!node) return;

    output += `,${node?.left?.val ?? null}`;

    travel(node?.left);

    output += `,${node?.right?.val ?? null}`;

    travel(node?.right);
  };

  travel(root);

  return output;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data.length) return null;

  const nodes = data.split(",");

  let i = 0;

  const travel = () => {
    const val = nodes[i];

    if (val === "null") {
      i++;
      return null;
    }

    const node = new TreeNode(Number(nodes[i]));
    i++;

    node.left = travel();
    node.right = travel();

    return node;
  };

  return travel();
};

export const main = async () => {
  const test1 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4), new TreeNode(5))
  );

  const test2 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4, null, new TreeNode(6)), new TreeNode(5))
  );

  console.log(serialize(test1)); // 1,2,null,null,3,4,null,null,5,null,null
  console.log(serialize(test2)); // 1,2,null,null,3,4,null,6,null,null,5,null,null

  console.log(deserialize("1,2,null,null,3,4,null,null,5,null,null"));
};
