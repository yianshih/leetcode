/**

❗️

[Easy]

206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.


*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList_recursion = (head) => {
  /**
   *
   * @param {ListNode | null} prev
   * @param {ListNode | null} curr
   */
  const reverse = (prev, curr) => {
    if (!curr) return prev;

    const temp = curr.next;
    curr.next = prev;

    return reverse(curr, temp);
  };

  return reverse(null, head);
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prevNode = null;
  let currentNode = head;

  while (currentNode) {
    const temp = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = temp;
  }

  return prevNode;
};

const buildListNode = (list) => {
  if (!list.length) return null;
  return new ListNode(list[0], buildListNode(list.slice(1)));
};

const test = (node1, node2) => {
  while (node1) {
    if (node1?.val !== node2?.val) return false;

    node1 = node1.next;
    node2 = node2.next;
  }

  return true;
};

export const main = async () => {
  const example1 = buildListNode([1, 2, 3]);
  const example1Result = buildListNode([3, 2, 1]);

  console.log(test(reverseList(example1), example1Result) === true);
};
