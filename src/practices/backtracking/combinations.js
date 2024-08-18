/**

[Medium]

77. Combinations 

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine_old = function (n, k) {
  const outputs = [];

  /**
   * @param {number[]} nums
   */
  const travel = (nums) => {
    if (nums.length === k) {
      outputs.push(nums);
      return;
    }

    const lastNum = nums[nums.length - 1];

    if (lastNum >= n) {
      return;
    }

    if (!lastNum) {
      for (let i = 1; i <= n; i++) {
        travel([i]);
      }

      return;
    }

    for (let i = lastNum + 1; i <= n; i++) {
      travel([...nums, i]);
    }
  };

  travel([]);

  return outputs;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const outputs = [];

  const comb = [];

  const travel = (start) => {
    if (comb.length === k) {
      outputs.push([...comb]);
      return;
    }

    for (let i = start; i <= n; i++) {
      comb.push(i);
      travel(i + 1);
      comb.pop();
    }
  };

  travel(1);

  return outputs;
};

export const main = async () => {
  // [[1, 2, 3],[1, 2, 4],[1, 3, 4],[2, 3, 4],];
  console.log(combine(4, 3));
  // [[1, 2],[1, 3],[1, 4],[2, 3],[2, 4],[3, 4]];
  console.log(combine(4, 2));
  // [ [ 1 ]]
  console.log(combine(4, 1));
};
