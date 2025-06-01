/**

❗️ (Bellman-Ford)

[Medium]

787. Cheapest Flights Within K Stops

There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

*/

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  let prices = new Array(n).fill(Infinity);

  prices[src] = 0;

  for (let i = 0; i < k + 1; i++) {
    const tempPrices = [...prices];

    for (let [s, d, p] of flights) {
      if (prices[s] === Infinity) {
        continue;
      }

      if (prices[s] + p < tempPrices[d]) {
        tempPrices[d] = prices[s] + p;
      }
    }

    prices = tempPrices;
  }

  return prices[dst] === Infinity ? -1 : prices[dst];
};

export const main = async () => {
  const test1 = [
    4,
    [
      [0, 1, 200],
      [1, 2, 100],
      [1, 3, 300],
      [2, 3, 100],
    ],
    0,
    3,
    1,
  ];

  const test2 = [
    3,
    [
      [1, 0, 100],
      [1, 2, 200],
      [0, 2, 100],
    ],
    1,
    2,
    1,
  ];

  const test3 = [
    5,
    [
      [4, 1, 1],
      [1, 2, 3],
      [0, 3, 2],
      [0, 4, 10],
      [3, 1, 1],
      [1, 4, 3],
    ],
    2,
    1,
    1,
  ];

  const test4 = [
    10,
    [
      [3, 4, 4],
      [2, 5, 6],
      [4, 7, 10],
      [9, 6, 5],
      [7, 4, 4],
      [6, 2, 10],
      [6, 8, 6],
      [7, 9, 4],
      [1, 5, 4],
      [1, 0, 4],
      [9, 7, 3],
      [7, 0, 5],
      [6, 5, 8],
      [1, 7, 6],
      [4, 0, 9],
      [5, 9, 1],
      [8, 7, 3],
      [1, 2, 6],
      [4, 1, 5],
      [5, 2, 4],
      [1, 9, 1],
      [7, 8, 10],
      [0, 4, 2],
      [7, 2, 8],
    ],
    6,
    0,
    7,
  ];

  console.log(findCheapestPrice(...test1)); // 500
  console.log(findCheapestPrice(...test2)); // 200
  console.log(findCheapestPrice(...test3)); // -1
  console.log(findCheapestPrice(...test4)); // 14
};
