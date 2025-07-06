/**

[Medium]

981. Time Based Key-Value Store

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

*/

class ValueTimeStamp {
  /**
   * @param {string} value
   * @param {number} timestamp
   */
  constructor(value, timestamp) {
    this.value = value;
    this.timestamp = timestamp;
  }
}

class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    const existingValues = this.keyStore.get(key) ?? [];

    existingValues.push({ value, timestamp });

    this.keyStore.set(key, existingValues);
    return null;
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    const values = this.keyStore.get(key) ?? [];

    if (!values.length) return "";

    return this.findMostRecentValue(values, timestamp);
  }

  /**
   *
   * @param {ValueTimeStamp[]} values
   * @param {number} timestamp
   * @returns
   */
  findMostRecentValue(values, timestamp) {
    let left = 0;
    let right = values.length - 1;

    let res = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (values[mid].timestamp === timestamp) return values[mid].value;

      if (values[mid].timestamp < timestamp) {
        res = values[mid].value;
      }

      if (values[mid].timestamp < timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return res;
  }
}

/**
 *
 * @param {string[]} actions
 * @param {string[][]} parameters
 * @param {any[]} expectedOutput
 */
const test = (actions, parameters, expectedOutput) => {
  const c = new TimeMap();

  for (let i = 0; i < actions.length; i++) {
    switch (actions[i]) {
      case "set": {
        const output = c.set(...parameters[i]);
        if (output !== expectedOutput[i]) {
          console.log(`Expected: ${expectedOutput[i]}, Received: ${output}`);
          return false;
        }
        break;
      }
      case "get": {
        const output = c.get(...parameters[i]);
        if (output !== expectedOutput[i]) {
          console.log(`Expected: ${expectedOutput[i]}, Received: ${output}`);
          return false;
        }
        break;
      }
      default:
    }
  }

  return true;
};

export const main = async () => {
  const test1 = [
    ["TimeMap", "set", "get", "get", "set", "get", "get"],
    [
      [],
      ["foo", "bar", 1],
      ["foo", 1],
      ["foo", 3],
      ["foo", "bar2", 4],
      ["foo", 4],
      ["foo", 5],
    ],
    [null, null, "bar", "bar", null, "bar2", "bar2"],
  ];

  console.log(test(...test1));

  const test2 = [
    ["TimeMap", "set", "set", "get", "get", "get", "get", "get"],
    [
      [],
      ["love", "high", 10],
      ["love", "low", 20],
      ["love", 5],
      ["love", 10],
      ["love", 15],
      ["love", 20],
      ["love", 25],
    ],
    [null, null, null, "", "high", "high", "low", "low"],
  ];

  console.log(test(...test2));

  const timeMap = new TimeMap();
  timeMap.set("alice", "happy", 1); // store the key "alice" and value "happy" along with timestamp = 1.
  console.log(timeMap.get("alice", 1)); // return "happy"
  // there is no value stored for timestamp 2, thus we return the value at timestamp 1.
  console.log(timeMap.get("alice", 2)); // return "happy",
  timeMap.set("alice", "sad", 3); // store the key "alice" and value "sad" along with timestamp = 3.
  console.log(timeMap.get("alice", 3)); // return "sad"
};
