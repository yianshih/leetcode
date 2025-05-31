/**
 * 

❗️

[Hard] (topological sort)

269. Alien Dictionary

There is a foreign language which uses the latin alphabet, but the order among letters is not "a", "b", "c" ... "z" as in English.

You receive a list of non-empty strings words from the dictionary, where the words are sorted lexicographically based on the rules of this new language.

Derive the order of letters in this language. If the order is invalid, return an empty string. If there are multiple valid order of letters, return any of them.

A string a is lexicographically smaller than a string b if either of the following is true:

 - The first letter where they differ is smaller in a than in b.

 - There is no index i such that a[i] != b[i] and a.length < b.length.

*/

/**
 * @param {string[]} words
 * @returns {string}
 */
var foreignDictionary = (words) => {
  const adjs = {};

  for (let word of words) {
    for (let c of word) {
      adjs[c] = new Set();
    }
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    const minLength = Math.min(w1.length, w2.length);

    // Violate the rule
    if (
      w1.length > w2.length &&
      w1.slice(0, minLength) === w2.slice(0, minLength)
    ) {
      return "";
    }

    for (let j = 0; j < minLength; j++) {
      if (w1[j] !== w2[j]) {
        adjs[w1[j]].add(w2[j]);
        break;
      }
    }
  }

  const visited = new Set();

  const res = [];

  const dfs = (c, currentPath) => {
    // If current path has c, means loop detected, return true as it's invalid
    if (currentPath.has(c)) {
      return true;
    }

    // Skip this if it's already visited from other routes
    if (visited.has(c)) {
      return false;
    }

    currentPath.add(c);

    for (let nb of adjs[c]) {
      if (dfs(nb, currentPath)) {
        return true;
      }
    }

    currentPath.delete(c);

    visited.add(c);
    res.push(c);
  };

  for (let k of Object.keys(adjs)) {
    if (dfs(k, new Set())) {
      return "";
    }
  }

  return res.reverse().join("");
};

export const main = async () => {
  const test1 = ["z", "o"];

  const test2 = ["hrn", "hrf", "er", "enn", "rfnn"];

  const test3 = ["zyx", "yxw", "wvu"];

  const test4 = ["baa", "abcd", "abca", "cab", "cad"];

  console.log(foreignDictionary(test1)); // zo

  console.log(foreignDictionary(test2)); // hernf

  console.log(foreignDictionary(test3)); // uvxzyw

  console.log(foreignDictionary(test4)); // bdac
};
