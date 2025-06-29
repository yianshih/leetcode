/**

❗️

[Medium]

215. Kth Largest Element in an Array

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

*/

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const q = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    q.enqueue(nums[i]);

    if (q.size() > k) {
      q.dequeue();
    }
  }

  return q.front();
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest_quick_select = function (nums, k) {
  const targetIndex = nums.length - k;

  /**
   *
   * @param {number} l left index
   * @param {number} r right index
   */
  const quickSelect = (l, r) => {
    const pivot = nums[r];
    let pIndex = l;

    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        // Swap with pIndex for numbers that is greater than pivot (moving all greater number to right)
        [nums[pIndex], nums[i]] = [nums[i], nums[pIndex]];
        pIndex++;
      }
    }

    [nums[pIndex], nums[r]] = [nums[r], nums[pIndex]];

    if (pIndex > targetIndex) {
      return quickSelect(l, pIndex - 1);
    } else if (pIndex < targetIndex) {
      return quickSelect(pIndex + 1, r);
    } else {
      return nums[pIndex];
    }
  };

  return quickSelect(0, nums.length - 1);
};

export const main = async () => {
  console.log(findKthLargest([2, 3, 1, 5, 4], 2)); // 4
  console.log(findKthLargest([2, 3, 1, 1, 5, 5, 4], 3)); // 4

  console.log(findKthLargest_quick_select([2, 3, 1, 5, 4], 2)); // 4
  console.log(findKthLargest_quick_select([2, 3, 1, 1, 5, 5, 4], 3)); // 4
  console.log(findKthLargest_quick_select([3, 2, 1, 5, 6, 4], 2)); // 5
  console.log(findKthLargest_quick_select([3, 1, 2, 4], 2)); // 3
};
