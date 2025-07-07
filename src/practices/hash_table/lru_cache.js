/**

❗️

[Medium]

146. LRU Cache

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

*/

class LRUCacheWithMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    return null;
  }
}

class ListNode {
  /**
   * @param {number} key
   * @param {number} val
   * @param {ListNode} prev
   * @param {ListNode} next
   */
  constructor(key = 0, val = 0, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.cache = new Map();
    this.size = capacity;
    this.left = new ListNode(); // Least recent used
    this.right = new ListNode(); // Most recent used

    this.left.next = this.right;
    this.right.prev = this.left;
  }

  /**
   * Insert node to the right
   * @param {ListNode} node
   */
  insert(node) {
    const prev = this.right.prev;
    const next = this.right;

    prev.next = node;
    next.prev = node;

    node.prev = prev;
    node.next = next;
  }

  /**
   * Remove node from the list
   * @param {ListNode} node
   */
  remove(node) {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    const node = this.cache.get(key);

    if (!node) return -1;

    this.remove(node);
    this.insert(node);

    return node.val;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.cache.has(key)) {
      this.remove(this.cache.get(key));
    }

    const node = new ListNode(key, value);

    this.cache.set(key, node);

    this.insert(node);

    // If size exceed capacity, remove left
    if (this.cache.size > this.size) {
      const left = this.left.next;
      this.remove(left);
      this.cache.delete(left.key);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 *
 * @param {string} actions
 * @param {any[]} args
 * @param {any[]} expects
 */
const test = (actions, args, expects) => {
  let instance;

  for (let i = 0; i < actions.length; i++) {
    if (actions[i] === "LRUCache") {
      instance = new LRUCache(...args[i]);
    } else {
      const res = instance[actions[i]](...args[i]) ?? null;
      if (res !== expects[i]) {
        return false;
      }
    }
  }
  return true;
};

export const main = async () => {
  const actions = [
    "LRUCache",
    "put",
    "put",
    "get",
    "put",
    "get",
    "put",
    "get",
    "get",
    "get",
  ];
  const args = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
  const outputs = [null, null, null, 1, null, -1, null, -1, 3, 4];

  console.log(test(actions, args, outputs));
};
