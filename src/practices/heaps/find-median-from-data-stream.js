/**

[Hard]

295. Find Median from Data Stream

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.

For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.

Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.

void addNum(int num) adds the integer num from the data stream to the data structure.

double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

*/

import {
  MaxPriorityQueue,
  MinPriorityQueue,
} from "@datastructures-js/priority-queue";

class MedianFinder {
  constructor() {
    this.left = new MaxPriorityQueue();
    this.right = new MinPriorityQueue();
  }

  /**
   *
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    if (this.right.front() > num) {
      this.left.enqueue(num);
    } else {
      this.right.enqueue(num);
    }

    this.balance();
  }

  balance() {
    if (Math.abs(this.left.size() - this.right.size()) < 2) {
      return;
    }

    if (this.left.size() > this.right.size()) {
      this.right.enqueue(this.left.dequeue());
    } else {
      this.left.enqueue(this.right.dequeue());
    }
  }

  /**
   * @return {number}
   */
  findMedian() {
    if (this.left.size() === this.right.size()) {
      return (this.left.front() + this.right.front()) / 2;
    }

    if (this.left.size() > this.right.size()) {
      return this.left.front();
    }

    return this.right.front();
  }
}

export const main = async () => {
  const medianFinder = new MedianFinder();
  medianFinder.addNum(1); // arr = [1]
  console.log(medianFinder.findMedian()); // return 1.0
  medianFinder.addNum(3); // arr = [1, 3]
  console.log(medianFinder.findMedian()); // return 2.0
  medianFinder.addNum(2); // arr[1, 2, 3]
  console.log(medianFinder.findMedian()); // return 2.0
};
