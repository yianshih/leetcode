/**

[Medium]

2013. Detect Squares

You are given a stream of points on the X-Y plane. Design an algorithm that:

- Adds new points from the stream into a data structure. Duplicate points are allowed and should be treated as different points.
- Given a query point, counts the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.

An axis-aligned square is a square whose edges are all the same length and are either parallel or perpendicular to the x-axis and y-axis.

Implement the DetectSquares class:

- DetectSquares() Initializes the object with an empty data structure.
- void add(int[] point) Adds a new point point = [x, y] to the data structure.
- int count(int[] point) Counts the number of ways to form axis-aligned squares with point point = [x, y] as described above.

*/

class DetectSquares {
  constructor() {
    this.points = new Map();
    this.x = new Map();
  }

  /**
   * @param {number[]} point
   * @return {void}
   */
  add(point) {
    const key = point.join(",");

    this.points.set(key, (this.points.get(key) ?? 0) + 1);
  }

  /**
   * @param {number[]} point
   * @return {number}
   */
  count(point) {
    const [pX, pY] = point;

    let total = 0;

    for (let [key, count] of this.points.entries()) {
      const [x, y] = key.split(",").map(Number);

      // If it's not a diagonal point, then skip
      if (Math.abs(x - pX) !== Math.abs(y - pY) || (pX === x && pY === y)) {
        continue;
      }

      const p1 = [pX, y].join(",");
      const p2 = [x, pY].join(",");

      const p1Count = this.points.get(p1) ?? 0;
      const p2Count = this.points.get(p2) ?? 0;

      total += count * p1Count * p2Count;
    }

    return total;
  }
}

export const main = async () => {
  const countSquares = new DetectSquares();
  countSquares.add([1, 1]);
  countSquares.add([2, 2]);
  countSquares.add([1, 2]);
  console.log(countSquares.count([2, 1])); // return 1.
  console.log(countSquares.count([3, 3])); // return 0.
  countSquares.add([2, 2]); // Duplicate points are allowed.
  console.log(countSquares.count([2, 1])); // return 2.
};
