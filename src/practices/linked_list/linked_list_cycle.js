/**

[Easy]

141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;

  let slow = head;

  let fast = head.next;

  while (fast) {
    if (slow === fast) return true;

    slow = slow?.next;

    fast = fast?.next?.next;
  }

  return false;
};

export const main = async () => {
  const node4 = new ListNode(4);
  const node3 = new ListNode(3);
  const node2 = new ListNode(2);
  const node1 = new ListNode(1);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node2;

  console.log(hasCycle(node1));
};
