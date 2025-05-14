/**

[Medium]

39. Combination Sum

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  let res = [];

  let current = [];

  /**
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

    travel(i, remains);
    const pop = current.pop();
    travel(i + 1, remains + pop);
  };

  travel(0, target);

  return res;
};

export const main = async () => {
  console.log(combinationSum([2, 5, 6, 9], 9)); // [ [2, 2, 5], [9] ]
  console.log(combinationSum([3, 4, 5], 16)); // [ [3,3,3,3,4], [3,3,5,5], [4,4,4,4], [3,4,4,5] ]
  console.log(combinationSum([8, 7, 4, 3], 11)); // [ [8,3], [7,4], [4,4,3] ]
};
