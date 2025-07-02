/**

[Medium]

253. Meeting Rooms II

Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of days required to schedule all meetings without any conflicts.

Note: (0,8),(8,10) is not considered a conflict at 8.

*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

/**
 * @param {Interval[]} intervals
 * @returns {number}
 */
var minMeetingRooms = (intervals) => {
  const start = intervals.map(({ start }) => start).sort((a, b) => a - b);
  const end = intervals.map(({ end }) => end).sort((a, b) => a - b);

  let max = 0;
  let count = 0;

  let s = 0;
  let e = 0;

  while (s < start.length) {
    if (start[s] < end[e]) {
      s++;
      count++;
      max = Math.max(max, count);
    } else {
      e++;
      count--;
    }
  }

  return max;
};

export const main = async () => {
  const test1 = [
    new Interval(0, 40),
    new Interval(5, 10),
    new Interval(15, 20),
  ];

  const test2 = [new Interval(4, 9)];

  const test3 = [
    new Interval(1, 5),
    new Interval(2, 6),
    new Interval(3, 7),
    new Interval(4, 8),
    new Interval(5, 9),
  ];

  const test4 = [
    new Interval(1, 5),
    new Interval(5, 10),
    new Interval(10, 15),
    new Interval(15, 20),
    new Interval(1, 20),
    new Interval(2, 6),
  ];

  console.log(minMeetingRooms(test1)); // 2
  console.log(minMeetingRooms(test2)); // 1
  console.log(minMeetingRooms(test3)); // 4
  console.log(minMeetingRooms(test4)); // 3
};
