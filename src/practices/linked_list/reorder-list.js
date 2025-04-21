/**

❗️

[Medium]

143. Reorder List

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

*/

class ListNode {
  /**
   * @param {number} val
   * @param {ListNode} next
   */
  constructor(val = 0, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head.next;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;

  slow.next = null; // the end of first half is the end of list

  let prev = null;

  while (second) {
    const temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  let first = head;
  second = prev;

  while (second) {
    const [temp1, temp2] = [first.next, second.next];
    first.next = second;
    second.next = temp1;
    first = temp1;
    second = temp2;
  }
};

export const main = async () => {
  const test1 = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4)))
  );

  console.log(reorderList(test1));

  console.log(test1);
};
