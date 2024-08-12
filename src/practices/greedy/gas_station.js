/**
 * 

134. Gas Station

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique


 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const remains = gas.map((g, i) => g - cost[i]);

  const sum = remains.reduce((acc, curr) => acc + curr, 0);

  if (sum < 0) return -1;

  let total = 0;
  let start = 0;

  for (let i = 0; i < remains.length; i++) {
    if (total + remains[i] < 0) {
      start = i + 1;
      total = 0;
      continue;
    }
    total += remains[i];
  }

  return start;
};

export const main = async () => {
  console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) === 3);

  console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]) === 4);

  console.log(
    canCompleteCircuit([1, 2, 3, 4, 5, 5, 70], [2, 3, 4, 3, 9, 6, 2]) === 6
  );
};
