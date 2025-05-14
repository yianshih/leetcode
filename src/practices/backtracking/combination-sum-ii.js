/** 

40. Combination Sum II

[Medium]

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const res = [];

  const current = [];
  /**
   *
   * @param {number} i
   * @param {number} t
   */
  const travel = (i, t) => {
    if (i >= candidates.length) {
      return;
    }

    const remains = t - candidates[i];

    if (remains < 0) {
      return;
    }

    if (remains === 0) {
      res.push([...current, candidates[i]]);
      return;
    }

    current.push(candidates[i]);

    travel(i + 1, remains);

    let next = i + 1;

    while (
      candidates[next] !== undefined &&
      candidates[next] === candidates[i]
    ) {
      next++;
    }

    travel(next, remains + current.pop());
  };

  travel(0, target);

  return res;
};

export const main = async () => {
  console.log(combinationSum2([9, 2, 2, 4, 6, 1, 5], 8)); // [ [1,2,5], [2,2,4], [2,6] ]

  console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [ [1,1,6], [1,2,5], [1,7], [2,6] ]
};
