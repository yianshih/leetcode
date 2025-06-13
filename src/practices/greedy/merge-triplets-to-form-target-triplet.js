/**
 * 

[Medium]

1899. Merge Triplets to Form Target Triplet

A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.

To obtain target, you may apply the following operation on triplets any number of times (possibly zero):

Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].

For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].

Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.

*/

/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function (triplets, target) {
  // Filter out triplet if any of value greater than target
  const validTriplets = triplets.filter((triplet) => {
    return target.every((t, i) => t >= triplet[i]);
  });

  for (let i = 0; i < target.length; i++) {
    const hasValue = validTriplets.some((triplet) => triplet[i] === target[i]);
    if (!hasValue) {
      return false;
    }
  }

  return true;
};

export const main = async () => {
  const test1 = [
    [
      [1, 2, 3],
      [7, 1, 1],
    ],
    [7, 2, 3],
  ];
  const test2 = [
    [
      [2, 5, 6],
      [1, 4, 4],
      [5, 7, 5],
    ],
    [5, 4, 6],
  ];

  const test3 = [
    [
      [2, 5, 3],
      [1, 8, 4],
      [1, 7, 5],
    ],
    [2, 7, 5],
  ];

  const test4 = [
    [
      [3, 4, 5],
      [4, 5, 6],
    ],
    [3, 2, 5],
  ];

  const test5 = [[[1, 3, 1]], [1, 3, 1]];

  const test6 = [[[1, 3, 1]], [1, 3, 2]];

  console.log(mergeTriplets(...test1)); // true
  console.log(mergeTriplets(...test2)); // false
  console.log(mergeTriplets(...test3)); // true
  console.log(mergeTriplets(...test4)); // false
  console.log(mergeTriplets(...test5)); // true
  console.log(mergeTriplets(...test6)); // false
};
