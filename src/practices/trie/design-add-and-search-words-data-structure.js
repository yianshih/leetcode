/**

[Medium]

211. Design Add and Search Words Data Structure

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.

void addWord(word) Adds word to the data structure, it can be matched later.

bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

*/

class WordDictionary {
  /**
   * @param {boolean} wordEnd
   */
  constructor(wordEnd = false) {
    this.tree = new Map();
    this.isWordEnd = wordEnd;
  }

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    if (!word.length) {
      return;
    }

    const node = this.tree.get(word[0]);

    if (node) {
      node.addWord(word.slice(1));
      node.isWordEnd = node.isWordEnd || word.length === 1;
    } else {
      const dict = new WordDictionary(word.length === 1);
      dict.addWord(word.slice(1));
      this.tree.set(word[0], dict);
    }
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    if (!word.length) return true;

    if (word[0] === ".") {
      for (let [k, dict] of this.tree) {
        if (word.length === 1 ? dict.isWordEnd : dict.search(word.slice(1))) {
          return true;
        }
      }
      return false;
    }

    const node = this.tree.get(word[0]);

    if (node) {
      return word.length === 1 ? node.isWordEnd : node.search(word.slice(1));
    }

    return false;
  }
}

export const main = async () => {
  const wordDictionary = new WordDictionary();
  wordDictionary.addWord("day");
  wordDictionary.addWord("bay");
  wordDictionary.addWord("may");
  console.log(wordDictionary.search("say")); // return false
  console.log(wordDictionary.search("day")); // return true
  console.log(wordDictionary.search(".ay")); // return true
  console.log(wordDictionary.search("b..")); // return true

  const wordDictionary2 = new WordDictionary();
  wordDictionary2.addWord("at");
  wordDictionary2.addWord("and");
  wordDictionary2.addWord("an");
  wordDictionary2.addWord("add");
  console.log(wordDictionary2.search("a")); // return false
  console.log(wordDictionary2.search(".at")); // return false
  wordDictionary2.addWord("bat");
  console.log(wordDictionary2.search(".at")); // return true
  console.log(wordDictionary2.search("an.")); // return true
  console.log(wordDictionary2.search("a.d.")); // return false
  console.log(wordDictionary2.search("b.")); // return false
  console.log(wordDictionary2.search("a.d")); // return true
  console.log(wordDictionary2.search(".")); // return false
};
