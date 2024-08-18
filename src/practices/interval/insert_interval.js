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
var insert = function (intervals, newInterval) {
  const outputs = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      outputs.push(newInterval);
      return outputs.concat(intervals.slice(i, intervals.length));
    } else if (newInterval[0] > intervals[i][1]) {
      outputs.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1]),
      ];
    }
  }

  outputs.push(newInterval);

  return outputs;
};

export const main = async () => {
  // expect [ [ 1, 5 ], [ 6, 9 ] ]
  console.log(
    insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5]
    )
  );

  // expect [[1,2],[3,10],[12,16]]
  console.log(
    insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8]
    )
  );
};
