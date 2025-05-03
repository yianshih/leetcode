/**

[Hard]

25. Reverse Nodes in k-Group

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

*/

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 */
const reverseList = (head) => {
  let currentNode = head;
  let prevNode = null;

  while (currentNode) {
    const next = currentNode.next;

    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = next;
  }

  return {
    newList: prevNode,
    tail: head,
  };
};

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head.next) return head;

  const heads = [];

  let currentHead = head;
  let currentNode = head;
  let count = 1;

  while (currentNode) {
    if (count === k) {
      heads.push(currentHead);
      const next = currentNode.next;
      currentNode.next = null;
      currentHead = next;
      currentNode = next;
      count = 1;
    } else {
      count++;
      currentNode = currentNode.next;
    }
  }

  const newHead = new ListNode();

  let currentNewHead = newHead;

  for (let i = 0; i < heads.length; i++) {
    const { newList, tail } = reverseList(heads[i]);

    currentNewHead.next = newList;
    currentNewHead = tail;
  }

  currentNewHead.next = currentHead;

  return newHead.next;
};

/**
 * @param {number[]} list
 */
const buildList = (list) => {
  const head = new ListNode();

  let current = head;

  for (let i = 0; i < list.length; i++) {
    current.next = new ListNode(list[i]);
    current = current.next;
  }

  return head.next;
};

/**
 *
 * @param {[number[],number]} input
 * @param {number[]} expect
 */
const test = (input, expect) => {
  let result = reverseKGroup(buildList(input[0]), input[1]);
  let expectedResult = buildList(expect);

  while (expectedResult) {
    if (expectedResult.val !== result.val) {
      return false;
    } else {
      expectedResult = expectedResult.next;
      result = result.next;
    }
  }
  return true;
};

export const main = async () => {
  console.log(test([[1, 2, 3, 4, 5, 6], 3], [3, 2, 1, 6, 5, 4]));

  console.log(test([[1, 2, 3, 4, 5], 3], [3, 2, 1, 4, 5]));
};
