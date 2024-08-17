/**

27. Remove Element

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let adjustIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[adjustIndex] = nums[i];
      adjustIndex++;
    }
  }

  return adjustIndex;
};

export const main = async () => {
  const test1 = [[3, 2, 2, 3], 3];

  console.log(removeElement(...test1) === 2);
  console.log(test1[0][0] !== 3);

  const test2 = [[0, 1, 2, 2, 3, 0, 4, 2], 2];

  console.log(removeElement(...test2, 2) === 5);
  console.log(test2[0][0] !== 2);
};
