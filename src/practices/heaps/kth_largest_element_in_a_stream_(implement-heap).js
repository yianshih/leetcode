/**

[Easy]

703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Implement KthLargest class:

KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of integers nums.
int add(int val) Appends the integer val to the stream and returns the element representing the kth largest element in the stream.

 */

class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  // O(nlog(n))
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.heap = new MinHeap();
    nums.forEach((n) => this.add(n));
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    if (this.heap.size() < this.k) {
      this.heap.offer(val);
    } else if (this.heap.peek() < val) {
      this.heap.offer(val);
      this.heap.poll();
    }
    return this.heap.peek();
  }
}

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
