/**
 * 

[Easy]

88. Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n. 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

*/

var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
};

let testId = 1;

/**
 *
 * @param {Array} result
 * @param {Array} answer
 * @returns
 */
const isPassed = (result, answer) => {
  const isPassed =
    result.length === answer.length && result.every((v, i) => v === answer[i]);

  if (!isPassed) {
    console.error(
      `Test ${testId} failed, output: ${JSON.stringify(
        result
      )}, expected output: ${JSON.stringify(answer)}`
    );
  }
  testId++;
  return isPassed;
};

export const main = () => {
  const num1 = [1, 2, 3, 0, 0, 0];
  const num2 = [2, 5, 6];

  merge(num1, 3, num2, 3);

  isPassed(num1, [1, 2, 2, 3, 5, 6]);

  const num3 = [1, 2, 3, 5, 0, 0, 0];
  const num4 = [1, 2, 3];

  merge(num3, 4, num4, 3);

  isPassed(num3, [1, 1, 2, 2, 3, 3, 5]);

  const num5 = [4, 5, 6, 0, 0, 0];
  const num6 = [1, 2, 3];

  merge(num5, 3, num6, 3);

  isPassed(num5, [1, 2, 3, 4, 5, 6]);

  const num7 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
  const num8 = [1, 2, 2];

  merge(num7, 6, num8, 3);

  isPassed(num7, [-1, 0, 0, 1, 2, 2, 3, 3, 3]);

  const num9 = [0];
  const num10 = [1];

  merge(num9, 0, num10, 1);

  isPassed(num9, [1]);

  const num11 = [
    -12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  const num12 = [
    -49, -45, -42, -41, -40, -39, -39, -39, -38, -36, -34, -34, -33, -33, -32,
    -31, -29, -28, -26, -26, -24, -21, -20, -20, -18, -16, -16, -14, -11, -7,
    -6, -5, -4, -4, -3, -3, -2, -2, -1, 0, 0, 0, 2, 2, 6, 7, 7, 8, 10, 10, 13,
    13, 15, 15, 16, 17, 17, 19, 19, 20, 20, 20, 21, 21, 22, 22, 24, 24, 25, 26,
    27, 29, 30, 30, 30, 35, 36, 36, 36, 37, 39, 40, 41, 42, 45, 46, 46, 46, 47,
    48,
  ];

  merge(num11, 1, num12, 90);

  isPassed(
    num11,
    [
      -49, -45, -42, -41, -40, -39, -39, -39, -38, -36, -34, -34, -33, -33, -32,
      -31, -29, -28, -26, -26, -24, -21, -20, -20, -18, -16, -16, -14, -12, -11,
      -7, -6, -5, -4, -4, -3, -3, -2, -2, -1, 0, 0, 0, 2, 2, 6, 7, 7, 8, 10, 10,
      13, 13, 15, 15, 16, 17, 17, 19, 19, 20, 20, 20, 21, 21, 22, 22, 24, 24,
      25, 26, 27, 29, 30, 30, 30, 35, 36, 36, 36, 37, 39, 40, 41, 42, 45, 46,
      46, 46, 47, 48,
    ]
  );
};
