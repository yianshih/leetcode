/**

[Medium]

78. Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets_pass_list = function (nums) {
  const output = [[]];

  /**
   * @param {number[]} list
   */
  const travel = (current, list) => {
    if (!list?.length) {
      return;
    }

    const take = [...current, list[0]];

    output.push(take);

    // take
    travel(take, list.slice(1));

    // not take
    travel(current, list.slice(1));
  };

  travel([], nums);

  return output;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const output = [];

  const subset = [];

  /**
   * @param {number} i
   */
  const travel = (i) => {
    if (i >= nums.length) {
      output.push([...subset]);
      return;
    }

    // Take current value and visit next
    subset.push(nums[i]);
    travel(i + 1);

    // Take out previous value
    subset.pop();
    travel(i + 1);
  };

  travel(0);

  return output;
};

export const main = async () => {
  console.log(subsets([1, 2, 3])); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
  console.log(subsets([7])); // [[], [7]]
};
