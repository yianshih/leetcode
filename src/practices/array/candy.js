/**

[Hard]

135. Candy

There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

*/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candy = [];

  for (let i = 0; i < ratings.length; i++) {
    if (i === 0) {
      candy[i] = 1;
      continue;
    }

    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    } else {
      candy[i] = 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1] && candy[i] <= candy[i + 1]) {
      candy[i] = candy[i + 1] + 1;
    }
  }

  return candy.reduce((acc, curr) => acc + curr, 0);
};

export const main = async () => {
  console.log(candy([1, 0, 2]) === 5); // 5
  console.log(candy([1, 2, 2]) === 4); // 4
};
