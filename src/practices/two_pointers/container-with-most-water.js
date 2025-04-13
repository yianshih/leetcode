/**
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];

    const min = Math.min(leftHeight, rightHeight);

    const sum = min * (right - left);

    max = Math.max(max, sum);

    if (leftHeight > rightHeight) {
      right--;
    } else {
      left++;
    }
  }

  return max;
};

export const main = async () => {
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
};
