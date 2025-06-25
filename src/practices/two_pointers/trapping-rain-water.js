/**

[Hard]❗️

42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap_with_n_memory = function (height) {
  const maxLefts = Array.from({ length: height.length }, () => 0);
  const maxRights = Array.from({ length: height.length }, () => 0);

  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < height.length - 1; i++) {
    maxLefts[i] = maxLeft;
    maxLeft = Math.max(maxLeft, height[i]);
  }

  for (let i = height.length - 1; i >= 0; i--) {
    maxRights[i] = maxRight;
    maxRight = Math.max(maxRight, height[i]);
  }

  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    const currentSum = Math.min(maxLefts[i], maxRights[i]) - height[i];

    if (currentSum > 0) {
      sum += currentSum;
    }
  }

  return sum;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;

  let sum = 0;

  let currentIndex = 0;

  while (left < right) {
    const currentSum = Math.min(leftMax, rightMax) - height[currentIndex];

    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (currentSum > 0) {
      sum += currentSum;
    }

    if (leftMax > rightMax) {
      right--;
      currentIndex = right;
    } else {
      left++;
      currentIndex = left;
    }
  }

  return sum;
};

export const main = async () => {
  //   console.log(trap_with_n_memory([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
  console.log(trap([0, 2, 0, 3, 1, 0, 1, 3, 2, 1])); // 9
};
