/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = []; // Store temperatures with
  const results = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    // Keep popping temperature until the current temperature is less than top of stack
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      results[index] = i - index;
    }

    stack.push(i);
  }

  return results;
};

export const main = async () => {
  console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
  console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
  console.log(dailyTemperatures([30, 60, 90])); // [1,1,0]
};
