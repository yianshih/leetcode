/**

[Hard]

84. Largest Rectangle in Histogram

Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const barHeight = [];
  const barIndex = [];

  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    let poppedIndex = null;
    // If new height is lower than previous height, that means the previous height cannot be extended anymore
    while (barHeight.length && heights[i] < barHeight[barHeight.length - 1]) {
      const height = barHeight.pop();
      const index = barIndex.pop();
      poppedIndex = index;
      max = Math.max(max, height * (i - index));
    }
    barHeight.push(heights[i]);
    barIndex.push(poppedIndex ?? i);
  }

  // Loop through all extended area of heights remaining in the stack
  for (let i = barHeight.length - 1; i >= 0; i--) {
    max = Math.max(max, barHeight[i] * (heights.length - barIndex[i]));
  }

  return max;
};

export const main = async () => {
  console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
  console.log(largestRectangleArea([2, 4])); // 4
  console.log(largestRectangleArea([7, 1, 7, 2, 2, 4])); // 8
  console.log(largestRectangleArea([1, 3, 7])); // 7
  console.log(largestRectangleArea([1, 2, 3, 4, 5])); // 9
  console.log(largestRectangleArea([2, 0, 1, 0, 1, 0])); // 2
};
