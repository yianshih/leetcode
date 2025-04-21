/**

❗️

[Hard]

4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  let [shorter, longer] = [nums1, nums2];

  if (nums1.length > nums2.length) {
    [shorter, longer] = [nums2, nums1];
  }

  let left = 0;
  let right = shorter.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const remains = half - mid;

    const shorterLeftMax = shorter[mid - 1] ?? Number.MIN_SAFE_INTEGER;
    const shorterRightMin = shorter[mid] ?? Number.MAX_SAFE_INTEGER;

    const longerLeftMax = longer[remains - 1] ?? Number.MIN_SAFE_INTEGER;
    const longerRightMin = longer[remains] ?? Number.MAX_SAFE_INTEGER;

    if (shorterLeftMax <= longerRightMin && shorterRightMin >= longerLeftMax) {
      if (total % 2 > 0) {
        return Math.min(shorterRightMin, longerRightMin);
      } else {
        return (
          (Math.max(shorterLeftMax, longerLeftMax) +
            Math.min(shorterRightMin, longerRightMin)) /
          2
        );
      }
    } else if (longerLeftMax > shorterRightMin) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

export const main = async () => {
  console.log(findMedianSortedArrays([1, 3], [2])); // 2
  console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
};
