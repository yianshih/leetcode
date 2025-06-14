/**

[Medium]

435. Non-overlapping Intervals

Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort(([a], [b]) => a - b);

  let count = 0;

  for (let i = 0; i < intervals.length - 1; i++) {
    const [start, end] = intervals[i];
    const [nextStart, nextEnd] = intervals[i + 1];

    if (end > nextStart) {
      count++;

      if (nextEnd > end) {
        // Keep the one that has smaller end so it has less chance to overlap next one
        intervals[i + 1] = intervals[i];
      }
    }
  }

  return count;
};

export const main = async () => {
  const test1 = [
    [1, 2],
    [2, 4],
    [1, 4],
  ];

  const test2 = [
    [1, 2],
    [2, 4],
  ];

  console.log(eraseOverlapIntervals(test1)); // 1
  console.log(eraseOverlapIntervals(test2)); // 0
};
