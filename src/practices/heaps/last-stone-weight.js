/**

[Easy]

1046. Last Stone Weight

You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

*/

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight_bucket_sort = (stones) => {
  let maxStone = Math.max(...stones);

  const bucket = new Array(maxStone + 1).fill(0);

  for (let s of stones) {
    bucket[s]++;
  }

  let first = maxStone;
  let second = maxStone;

  while (first > 0) {
    // If first count is even then it will be smashed to zero (or it's zero) so shift to left to find largest
    if (bucket[first] % 2 === 0) {
      bucket[first] = 0;
      first--;
      continue;
    }

    let j = Math.min(first - 1, second);

    while (j > 0 && bucket[j] === 0) {
      j--;
    }

    // Cannot find second weight
    if (j === 0) {
      return first;
    }

    second = j;

    bucket[first]--;
    bucket[second]--;

    bucket[first - second]++;

    first = Math.max(first - second, second);
  }

  return first;
};

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0];

  const q = new MaxPriorityQueue();

  stones.forEach((w) => {
    q.enqueue(w);
  });

  while (q.size() > 1) {
    const largest = q.dequeue();
    const secondLargest = q.dequeue();

    const smashed = Math.abs(largest - secondLargest);

    if (smashed > 0) {
      q.enqueue(smashed);
    }

    if (q.size() === 1) {
      return q.front();
    }
  }

  return 0;
};

export const main = async () => {
  console.log(lastStoneWeight([2, 3, 6, 2, 4])); // 1
  console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // 1
  console.log(lastStoneWeight([2, 2])); // 0
};
