/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const output = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        output.push([nums[i], nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }

  return output;
};

export const main = async () => {
  console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
  console.log(threeSum([0, 1, 1])); /// []
  console.log(threeSum([0, 0, 0])); // [[0,0,0]]
  console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
  console.log(threeSum([-2, 0, 1, 1, 2])); // [ [ -2, 0, 2 ], [ -2, 1, 1 ] ]
};
