class Trie {
  /**
   * @param {boolean} isWordEnd
   */
  constructor(isWordEnd = false) {
    this.nodes = new Map();
    this.isWordEnd = isWordEnd;
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    if (word.length <= 0) return;

    const char = word[0];

    const rest = word.slice(1);

    const isWordEnd = rest.length === 0;

    const node = this.nodes.get(char);

    if (!node) {
      const trie = new Trie(isWordEnd);
      trie.insert(rest);
      this.nodes.set(char, trie);
    } else {
      node.isWordEnd = node.isWordEnd || isWordEnd;
      node.insert(rest);
    }
    return null;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    if (word.length <= 0) return false;

    const char = word[0];

    const rest = word.slice(1);

    const node = this.nodes.get(char);

    if (!node) return false;

    if (rest.length === 0) return node && node.isWordEnd;

    return node.search(rest);
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    if (!prefix.length) return true;

    const node = this.nodes.get(prefix[0]);

    return !!node && node.startsWith(prefix.slice(1));
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/**
 *
 * @param {Array<string>} fns
 * @param {Array<string>} args
 */
const test = (fns, args, output) => {
  if (fns.length !== args.length && args.length !== output.length) return false;

  let trie;

  for (let i = 0; i < fns.length; i++) {
    if (fns[i] === "Trie") {
      trie = new Trie();
    } else {
      const result = trie[fns[i]](...args[i]);

      if (result !== output[i]) return false;
    }
  }
  return true;
};

export const main = async () => {
  console.log(
    test(
      ["Trie", "insert", "search", "search", "startsWith", "insert", "search"],
      [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]],
      [null, null, true, false, true, null, true]
    )
  );

  console.log(
    test(
      [
        "Trie",
        "insert",
        "insert",
        "insert",
        "insert",
        "insert",
        "insert",
        "search",
        "search",
        "search",
        "search",
        "search",
        "search",
        "search",
        "search",
        "search",
        "startsWith",
        "startsWith",
        "startsWith",
        "startsWith",
        "startsWith",
        "startsWith",
        "startsWith",
        "startsWith",
        "startsWith",
      ],
      [
        [],
        ["app"],
        ["apple"],
        ["beer"],
        ["add"],
        ["jam"],
        ["rental"],
        ["apps"],
        ["app"],
        ["ad"],
        ["applepie"],
        ["rest"],
        ["jan"],
        ["rent"],
        ["beer"],
        ["jam"],
        ["apps"],
        ["app"],
        ["ad"],
        ["applepie"],
        ["rest"],
        ["jan"],
        ["rent"],
        ["beer"],
        ["jam"],
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
      ]
    )
  );
};
