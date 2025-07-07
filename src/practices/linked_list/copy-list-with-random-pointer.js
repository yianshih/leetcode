/**

[Medium]

138. Copy List with Random Pointer

A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.

*/

class _Node {
  constructor(val, next = null, random = null) {
    this.val = val;
    this.next = next;
    this.random = random;
  }
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList_while = function (head) {
  const copyMap = new Map();

  let current = head;

  while (current) {
    copyMap.set(current, new _Node(current?.val));
    current = current.next;
  }

  current = head;

  while (current) {
    const copy = copyMap.get(current);

    copy.next = copyMap.get(current.next) ?? null;
    copy.random = copyMap.get(current.random) ?? null;

    current = current.next;
  }

  return copyMap.get(head);
};

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;

  const copy = new _Node();

  const randomMap = new Map();

  /**
   *
   * @param {_Node | null} head
   * @param {_Node | null} copy
   * @returns {_Node}
   */
  const travel = (head, copy) => {
    if (!head) return null;

    if (!randomMap.has(head)) {
      randomMap.set(head, copy);
    }

    copy.val = head.val;
    copy.next = travel(head.next, new _Node());
    copy.random = randomMap.get(head.random) ?? null;

    return copy;
  };

  travel(head, copy);

  return copy;
};

export const main = async () => {
  const node0 = new _Node(3);
  const node1 = new _Node(7);
  const node2 = new _Node(4);
  const node3 = new _Node(5);

  node0.next = node1;
  node1.next = node2;
  node2.next = node3;

  node0.random = null;
  node1.random = node3;
  node2.random = node0;
  node3.random = node1;

  console.log("res : ", copyRandomList(node0));
};
