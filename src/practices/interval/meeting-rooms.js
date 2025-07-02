/**

[Easy]

252. Meeting Rooms

Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

*/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

/**
 * @param {Interval[]} intervals
 * @returns {boolean}
 */
var canAttendMeetings = (intervals) => {
  intervals.sort(({ start: a }, { start: b }) => a - b);

  for (let i = 0; i < intervals.length - 1; i++) {
    const { end } = intervals[i];
    const { start: nextStart } = intervals[i + 1];

    if (end > nextStart) {
      return false;
    }
  }

  return true;
};

export const main = async () => {
  const test1 = [
    new Interval(0, 30),
    new Interval(5, 10),
    new Interval(15, 20),
  ];

  const test2 = [new Interval(5, 8), new Interval(9, 15)];

  console.log(canAttendMeetings(test1)); // false
  console.log(canAttendMeetings(test2)); // true
};
