/**

[Medium]

846. Hand of Straights

Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

*/

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize > 0) {
    return false;
  }

  // Make sure the first item in Map will be minimum
  hand.sort((a, b) => a - b);

  const count = new Map();

  hand.forEach((h) => {
    count.set(h, (count.get(h) ?? 0) + 1);
  });

  while (count.size > 0) {
    let size = 0;
    let key = count.keys().next().value;

    while (size < groupSize) {
      let remains = count.get(key);
      // If the value is not available, that means the number is not consecutive
      if (!remains) {
        return false;
      }

      if (remains === 1) {
        count.delete(key);
      } else {
        count.set(key, remains - 1);
      }

      size++;
      key++;
    }
  }

  return true;
};

export const main = async () => {
  console.log(isNStraightHand([1, 2, 4, 2, 3, 5, 3, 4], 4)); // true
  console.log(isNStraightHand([1, 2, 3, 3, 4, 5, 6, 7], 4)); // false
  console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)); // true
  console.log(isNStraightHand([1, 2, 3, 4, 5], 4)); // false
};
