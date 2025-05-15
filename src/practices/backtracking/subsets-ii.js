/**

[Medium]

90. Subsets II

Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);

  const res = [];

  /**
   *
   * @param {number} i
   * @param {number[]} list
   */
  const travel = (i, list) => {
    if (i >= nums.length) {
      res.push(list);
      return;
    }

    travel(i + 1, [...list, nums[i]]);

    // Jump to next without including current value
    let next = i + 1;

    // Keep jumping to next until it's not duplicate
    while (nums[next] === nums[i]) {
      next++;
    }

    travel(next, list);
  };

  travel(0, []);

  return res;
};

export const main = async () => {
  console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]

  console.log(subsetsWithDup([1, 2, 3])); // [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

  console.log(subsetsWithDup([0])); // [[],[0]]

  console.log(subsetsWithDup([1, 2, 2, 3])); // [[1,2,2,3],[1,2,2],[1,2,3],[1,2],[1,3],[1],[2,2,3],[2,2],[2,3],[2],[3],[]]
};
