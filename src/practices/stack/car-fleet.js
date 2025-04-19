/**

[Medium]

853. Car Fleet

There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

Return the number of car fleets that will arrive at the destination.

*/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const speedMap = {};

  for (let i = 0; i < position.length; i++) {
    speedMap[position[i]] = speed[i];
  }

  // The behind car will only overlap with ahead car is the speed is greater than ahead car
  const sortedPosition = position.sort((a, b) => a - b);

  const reachedTime = sortedPosition.map((p) => {
    return (target - p) / speedMap[p];
  });

  // Assume each other is in its own fleet
  let fleet = position.length;

  for (let i = sortedPosition.length - 2; i >= 0; i--) {
    // If behind car requires less time to reach target, then it will overlap with ahead car
    if (reachedTime[i] <= reachedTime[i + 1]) {
      // If behind car overlap with ahead car, they become as same fleet
      fleet--;
      reachedTime[i] = reachedTime[i + 1];
    }
  }

  return fleet;
};

export const main = async () => {
  console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
  console.log(carFleet(10, [3], [3])); // 1
  console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // 1
};
