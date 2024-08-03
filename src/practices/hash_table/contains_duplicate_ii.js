/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const idx = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (idx.has(nums[i]) && i - idx.get(nums[i]) <= k) {
      return true;
    }

    idx.set(nums[i], i);
  }

  return false;
};

export const main = async () => {
  console.log(containsNearbyDuplicate([1, 2, 3, 1], 3) === true);
  console.log(containsNearbyDuplicate([1, 0, 1, 1], 1) === true);
  console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2) === false);
  console.log(containsNearbyDuplicate([99, 99], 2) === true);
  console.log(containsNearbyDuplicate([1, 2, 1], 0) === false);
};
