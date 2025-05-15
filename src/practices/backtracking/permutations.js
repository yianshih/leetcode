/**

[Medium]

46. Permutations

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute_with_travel_all = function (nums) {
  const res = [];

  /**
   *
   * @param {number[]} list
   * @param {number[]} current
   */
  const travel = (list, current) => {
    if (!list?.length) {
      res.push(current);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      travel(
        list.filter((n) => n !== list[i]),
        [...current, list[i]]
      );
    }
  };

  travel(nums, []);

  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute_with_subProblem = function (nums) {
  if (!nums?.length) {
    return [[]];
  }

  // Get all possible array from sub problem
  const subPermutes = permute_with_subProblem(nums.slice(1));

  const newPermutes = [];

  for (let i = 0; i < subPermutes.length; i++) {
    const p = subPermutes[i];

    for (let j = 0; j < p.length + 1; j++) {
      const left = p.slice(0, j);
      const right = p.slice(j);

      // Insert current value to all positions
      newPermutes.push([...left, nums[0], ...right]);
    }
  }

  return newPermutes;
};

export const main = async () => {
  console.log(permute_with_subProblem([1, 2, 3])); // [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ], [ 3, 2, 1 ] ]
  console.log(permute_with_subProblem([0, 1])); // [ [ 0, 1 ], [ 1, 0 ] ]
  console.log(permute_with_subProblem([1])); // [ [ 1 ] ]

  console.log(permute_with_travel_all([1, 2, 3])); // [ [ 1, 2, 3 ], [ 1, 3, 2 ], [ 2, 1, 3 ], [ 2, 3, 1 ], [ 3, 1, 2 ], [ 3, 2, 1 ] ]
  console.log(permute_with_travel_all([0, 1])); // [ [ 0, 1 ], [ 1, 0 ] ]
  console.log(permute_with_travel_all([1])); // [ [ 1 ] ]
};
