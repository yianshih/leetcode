/**

[Medium]

2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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

const isNilish = (v) => v === null || v === undefined;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {Number} adjust
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2, acc = 0) {
  if (isNilish(l1) && isNilish(l2) && acc === 0) return null;

  let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + acc;

  let newAcc = 0;

  if (sum >= 10) {
    sum = sum - 10;
    newAcc += 1;
  }

  return new ListNode(sum, addTwoNumbers(l1?.next, l2?.next, newAcc));
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
  const output = addTwoNumbers(
    buildListNode([2, 4, 3]),
    buildListNode([5, 6, 4])
  );

  console.log(isExpectedNode(output, [7, 0, 8]));

  const output2 = addTwoNumbers(
    buildListNode([1, 0, 9]),
    buildListNode([5, 7, 8])
  );

  console.log(isExpectedNode(output2, [6, 7, 7, 1]));
};
