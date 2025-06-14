/**

[Medium]

57. Insert Interval

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Note that you don't need to modify intervals in-place. You can make a new array and return it.

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = (intervals, newInterval) => {
  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    // New Interval is before current interval without overlaps
    if (newInterval[1] < start) {
      res.push(newInterval);
      return res.concat(intervals.slice(i));
    }
    // New Interval is after current interval without overlaps
    if (newInterval[0] > end) {
      res.push(intervals[i]);
    }
    // Overlaps found, merge interval into new interval
    else {
      newInterval = [
        Math.min(start, newInterval[0]),
        Math.max(end, newInterval[1]),
      ];
    }
  }

  res.push(newInterval);

  return res;
};

export const main = async () => {
  const test1 = [
    [
      [1, 3],
      [4, 6],
    ],
    [2, 5],
  ];

  const test2 = [
    [
      [1, 2],
      [3, 5],
      [9, 10],
    ],
    [6, 7],
  ];

  console.log(insert(...test1)); // [[1,6]]
  console.log(insert(...test2)); // [[1,2],[3,5],[6,7],[9,10]]
};
