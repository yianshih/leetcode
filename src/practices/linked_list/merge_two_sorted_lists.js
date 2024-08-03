/**
 * 
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;

  if (!list1) {
    return new ListNode(list2.val, mergeTwoLists(null, list2.next));
  }

  if (!list2) {
    return new ListNode(list1.val, mergeTwoLists(list1.next, null));
  }

  if (list1.val <= list2.val) {
    return new ListNode(list1.val, mergeTwoLists(list1.next, list2));
  }

  return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
};

/**
 *
 * @param {Array} list
 * @returns
 */
const buildListNode = (list) => {
  if (!list.length) return null;
  return new ListNode(list[0], buildListNode(list.slice(1)));
};

/**
 *
 * @param {ListNode} node
 * @param {Array<Number>} nums
 * @returns
 */
const isExpectedNode = (node, nums) => {
  if (!nums.length) return true;
  if (node?.val === undefined) return false;
  return node.val === nums[0] && isExpectedNode(node.next, nums.slice(1));
};

export const main = async () => {
  const output = mergeTwoLists(
    buildListNode([1, 2, 4]),
    buildListNode([1, 3, 4])
  );

  console.log(isExpectedNode(output, [1, 1, 2, 3, 4, 4]));
};
