/**

[Medium]

207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = (numCourses, prerequisites) => {
  const reqMap = new Map();

  const visited = new Set();

  prerequisites.forEach(([course, req]) => {
    const existing = reqMap.get(course) ?? [];
    existing.push(req);
    reqMap.set(course, existing);
  });

  /**
   * @param {number} course
   */
  const travel = (course) => {
    if (visited.has(course)) return false;

    const preReq = reqMap.get(course);

    if (!preReq) return true;

    visited.add(course);

    for (let c of preReq) {
      if (!travel(c)) return false;
    }

    visited.delete(course);

    reqMap.delete(course);

    return true;
  };

  for (let i = 0; i <= numCourses; i++) {
    if (!travel(i)) return false;
  }

  return true;
};

export const main = async () => {
  const test1 = [2, [[0, 1]]];
  const test2 = [
    5,
    [
      [1, 4],
      [2, 4],
      [3, 1],
      [3, 2],
    ],
  ];

  const test3 = [3, [[1, 0]]];

  const test4 = [
    2,
    [
      [0, 1],
      [1, 0],
    ],
  ];

  const test5 = [1, []];

  const test6 = [
    3,
    [
      [2, 1],
      [1, 0],
    ],
  ];

  console.log(canFinish(...test1)); // true

  console.log(canFinish(...test2)); // true

  console.log(canFinish(...test3)); // true

  console.log(canFinish(...test4)); // false

  console.log(canFinish(...test5)); // true

  console.log(canFinish(...test6)); // true
};
