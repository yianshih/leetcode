import { MinPriorityQueue } from "@datastructures-js/priority-queue";

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();

    for (let n of nums) {
      this.minHeap.enqueue(n);
      if (this.minHeap.size() > this.k) {
        this.minHeap.dequeue();
      }
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.minHeap.enqueue(val);

    while (this.minHeap.size() > this.k) {
      this.minHeap.dequeue();
    }

    return this.minHeap.front().element;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

/**
 *
 * @param {string[]} actions
 * @param {number[][]} args
 * @param {number[]} outputs
 */
const test = (actions, args, outputs) => {
  let obj = null;

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    if (action === "KthLargest") {
      obj = new KthLargest(...args[i]);
    } else {
      const result = obj[action](...args[i]);

      if (result !== outputs[i]) {
        return false;
      }
    }
  }
  return true;
};

export const main = async () => {
  console.log(
    test(
      ["KthLargest", "add", "add", "add", "add", "add"],
      [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]],
      [null, 4, 5, 5, 8, 8]
    )
  );
};
