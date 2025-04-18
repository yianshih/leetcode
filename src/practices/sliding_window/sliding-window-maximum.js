/**

[Hard]

239. Sliding Window Maximum

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const output = [];

  let left = 0;

  const deque = []; // Store window values in descending order

  for (let right = 0; right < nums.length; right++) {
    // pop far right until it's greater than current value
    while (deque[deque.length - 1] < nums[right]) {
      deque.pop();
    }
    deque.push(nums[right]);

    if (right - left + 1 === k) {
      // Leftest will be biggest value in deque
      output.push(deque[0]);
      if (deque[0] === nums[left]) {
        deque.shift();
      }
      left++;
    }
  }

  return output;
};

export const main = async () => {
  console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
  console.log(maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3)); // [2,2,4,4,6]
  console.log(maxSlidingWindow([1, -1], 1)); // [1,-1]
  console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)); // [3,3,2,5]
};
