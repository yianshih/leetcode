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
var canFinish = function (numCourses, prerequisites) {
  const preMap = new Map();

  const visited = new Set();

  const completed = new Set();

  for (let p of prerequisites) {
    const existingPre = preMap.get(p[0]) ?? [];
    existingPre.push(p[1]);
    preMap.set(p[0], existingPre);
  }

  const dfs = (c) => {
    if (completed.has(c)) return true;

    if (visited.has(c)) return false;

    visited.add(c);

    const preReq = preMap.get(c) ?? [];

    if (preReq.length === 0) {
      completed.add(c);
      return true;
    }

    for (let p of preReq) {
      if (!dfs(p)) return false;
    }

    completed.add(c);

    return true;
  };

  for (let i = 0; i <= numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
};

export const main = async () => {
  const test1 = [2, [[1, 0]]];

  const test2 = [
    2,
    [
      [1, 0],
      [0, 1],
    ],
  ];

  console.log(canFinish(...test1) === true);
  console.log(canFinish(...test2) === false);
};
