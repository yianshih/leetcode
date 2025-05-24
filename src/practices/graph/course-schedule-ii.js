/**

[Medium]

210. Course Schedule II

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const reqMap = new Map();

  const visited = new Set();

  const res = new Set();

  prerequisites.forEach(([c, p]) => {
    const existing = reqMap.get(c) ?? [];

    existing.push(p);

    reqMap.set(c, existing);
  });

  /**
   * @param {number} c
   */
  const travel = (c) => {
    if (visited.has(c)) return false;

    const reqCourses = reqMap.get(c);

    if (!reqCourses) {
      res.add(c);
      return true;
    }

    visited.add(c);

    for (let req of reqCourses) {
      if (!travel(req)) return false;
    }

    visited.delete(c);

    reqMap.delete(c);

    res.add(c);

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!travel(i)) {
      return [];
    }
  }

  return Array.from(res);
};

export const main = async () => {
  const test1 = [2, [[1, 0]]];

  const test2 = [
    4,
    [
      [1, 0],
      [2, 0],
      [3, 1],
      [3, 2],
    ],
  ];

  const test3 = [3, [[1, 0]]];
  const test4 = [
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  ];

  console.log(findOrder(...test1)); // [0,1]
  console.log(findOrder(...test2)); // [0,2,1,3]
  console.log(findOrder(...test3)); // [0,1,2]
  console.log(findOrder(...test4)); // []
};
