/**

56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const outputs = [];

  intervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    if (i === intervals.length - 1) {
      outputs.push(intervals[i]);
      break;
    }

    if (intervals[i][1] < intervals[i + 1][0]) {
      outputs.push(intervals[i]);
    } else if (intervals[i][0] > intervals[i + 1][1]) {
      outputs.push(intervals[i + 1]);
      intervals[i + 1] = intervals[i];
    } else {
      const mergedInterval = [
        Math.min(intervals[i][0], intervals[i + 1][0]),
        Math.max(intervals[i][1], intervals[i + 1][1]),
      ];

      intervals[i + 1] = mergedInterval;
    }
  }

  return outputs;
};

export const main = async () => {
  //   expect[([1, 6], [8, 10], [15, 18])];
  console.log(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  );

  //   expect[[1, 5]];
  console.log(
    merge([
      [1, 4],
      [4, 5],
    ])
  );

  // expect [ [0,0],[1,4] ]
  console.log(
    merge([
      [1, 4],
      [0, 0],
    ])
  );

  // expect [ [1,10] ]
  console.log(
    merge([
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ])
  );
};
