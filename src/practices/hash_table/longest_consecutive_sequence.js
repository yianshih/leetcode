/**
 * 

128. Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);

  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    // Only find the consecutive if it's start of a consecutive array
    if (!numSet.has(nums[i] - 1)) {
      let maxLength = 1;

      // Keep finding the next number
      while (numSet.has(nums[i] + maxLength)) {
        maxLength += 1;
      }

      max = Math.max(max, maxLength);
    }
  }

  return max;
};

export const main = async () => {
  // [1, 2, 3, 4];
  console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
  // [0, 1, 2, 3, 4, 5, 6, 7, 8];
  console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
};
