/**

[Medium]

494. Target Sum

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const dp = new Map();

  /**
   * @param {number} index
   * @param {number} total
   */
  const traverse = (index, total) => {
    // If total === target then it's a valid path
    if (index === nums.length) return total === target ? 1 : 0;

    const key = `${index}:${total}`;

    if (dp.has(key)) return dp.get(key);

    // Sum up the path of plus and minus
    dp.set(
      key,
      traverse(index + 1, total + nums[index]) +
        traverse(index + 1, total - nums[index])
    );

    console.log(dp);

    return dp.get(key);
  };

  return traverse(0, 0);
};

export const main = async () => {
  console.log(findTargetSumWays([1, 1, 1, 1, 1], 3) === 5); // 5
};
