/**

[Medium]

19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

*/

class ListNode {
  /**
   * @param {number} val
   * @param {ListNode} next
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);

  let slow = dummy;
  let fast = head;

  while (n > 0 && fast) {
    fast = fast?.next;
    n--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow?.next?.next;

  return dummy.next;
};

export const main = async () => {
  const test1 = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
  );

  const test2 = new ListNode(1);

  const test3 = new ListNode(1, new ListNode(2));

  const test4 = new ListNode(1, new ListNode(2));

  console.log(removeNthFromEnd(test1, 2)); // [1,2,3,5]

  console.log(removeNthFromEnd(test2, 1)); // null

  console.log(removeNthFromEnd(test3, 1)); // [1]

  console.log(removeNthFromEnd(test4, 2)); // [2]
};
