/**

[Hard]

23. Merge k Sorted Lists

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
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
 *
 * @param {ListNode} node1
 * @param {ListNode} node2
 * @returns
 */
const mergeTwoSortedList = (node1, node2) => {
  if (!node1 || !node2) return node1 ?? node2 ?? null;

  if (node1.val <= node2.val) {
    return new ListNode(node1.val, mergeTwoSortedList(node1.next, node2));
  }
  return new ListNode(node2.val, mergeTwoSortedList(node1, node2.next));
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || !lists.length) return null;

  while (lists.length > 1) {
    const mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      mergedLists.push(mergeTwoSortedList(lists[i], lists[i + 1]));
    }

    lists = mergedLists;
  }

  return lists[0];
};

/**
 *
 * @param {number[]} list
 * @returns
 */
const buildListNode = (list) => {
  if (!list.length) return null;
  return new ListNode(list[0], buildListNode(list.slice(1)));
};

/**
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns
 */
const test = (list1, list2) => {
  if (!list1 && !list2) return true;

  return list1?.val === list2?.val && test(list1?.next, list2?.next);
};

export const main = async () => {
  const example1 = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ];

  const exampleLists = example1.map((list) => buildListNode(list));

  console.log(
    test(mergeKLists(exampleLists), buildListNode([1, 1, 2, 3, 4, 4, 5, 6]))
  );
};
