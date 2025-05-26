/**

❗️

[Hard] (Hierholzer's Algorithm)

332. Reconstruct Itinerary

You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const adjs = new Map();

  tickets
    .sort()
    .reverse()
    .forEach(([from, to]) => {
      if (!adjs.has(from)) adjs.set(from, []);
      adjs.get(from).push(to);
    });

  const res = [];

  const stack = ["JFK"];

  while (stack.length > 0) {
    const from = stack[stack.length - 1];

    const dest = adjs.get(from) ?? [];

    if (dest.length) {
      stack.push(dest.pop());
    } else {
      res.push(stack.pop());
    }
  }

  return res.reverse();
};

export const main = async () => {
  const test1 = [
    ["BUF", "HOU"],
    ["HOU", "SEA"],
    ["JFK", "BUF"],
  ];

  const test2 = [
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ];

  const test3 = [
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ];

  const test4 = [
    ["JFK", "ATL"],
    ["ATL", "JFK"],
  ];

  console.log(findItinerary(test1)); // ["JFK","BUF","HOU","SEA"]

  console.log(findItinerary(test2)); // ["JFK","MUC","LHR","SFO","SJC"]

  console.log(findItinerary(test3)); // ["JFK","ATL","JFK","SFO","ATL","SFO"]

  console.log(findItinerary(test4)); // ["JFK","ATL","JFK"]
};
