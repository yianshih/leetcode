/**

[Medium]

621. Task Scheduler

You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

Return the minimum number of CPU intervals required to complete all tasks.

*/

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const taskCount = tasks.reduce((acc, curr) => {
    acc[curr] = (acc?.[curr] ?? 0) + 1;

    return acc;
  }, {});

  const q = new MaxPriorityQueue();

  Object.values(taskCount).forEach((c) => {
    q.enqueue(c);
  });

  // Waiting for cooldown
  const queue = [];

  let cycle = 0;

  while (q.size() > 0 || queue.length > 0) {
    // Push to queue once the cooldown pass
    if (queue.length && cycle > queue[0][1]) {
      const next = queue.shift();

      q.enqueue(next[0]);
    }

    if (q.size() === 0) {
      cycle++;
      continue;
    }

    const deq = q.dequeue();

    if (deq > 1) {
      queue.push([deq - 1, cycle + n]);
    }

    cycle++;
  }

  return cycle;
};

export const main = async () => {
  console.log(leastInterval(["X", "X", "Y", "Y"], 2)); // 5
  console.log(leastInterval(["A", "A", "A", "B", "C"], 3)); // 9
};
