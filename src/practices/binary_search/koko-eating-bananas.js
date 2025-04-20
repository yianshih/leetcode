/**

[Medium]

875. Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.

*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const max = Math.max(...piles);

  let left = 0;
  let right = max;

  let minSpeed = max;

  // Use binary search to find the minimum speed that can eat all bananas in h hours
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // If new speed is greater than found min speed, then don't need to consider rest
    if (minSpeed < mid) {
      break;
    }

    let hours = 0;

    for (let i = 0; i < piles.length; i++) {
      hours += Math.ceil(piles[i] / mid);
    }

    if (hours <= h) {
      minSpeed = Math.min(minSpeed, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return minSpeed;
};

export const main = async () => {
  console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
  console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
  console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
};
