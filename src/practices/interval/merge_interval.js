/**

[Medium]

56. Merge Intervals

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = (intervals) => {
  const res = [];

  intervals.sort(([a], [b]) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    if (!intervals[i + 1]) {
      res.push(intervals[i]);
      return res;
    }

    const [start, end] = intervals[i];
    const [nextStart, nextEnd] = intervals[i + 1];

    // Since intervals are sorted, so interval will be overlapping if end is greater than next start
    if (end < nextStart) {
      res.push(intervals[i]);
    } else {
      intervals[i + 1] = [Math.min(start, nextStart), Math.max(end, nextEnd)];
    }
  }

  return res;
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
