/**
 * Key: Module name
 * Value: Module's dependencies
 *
 * We need to load all modules inorder (make sure all dependencies are loaded before loading the module)
 */

const loadDependencies = (root) => {
  const keys = Array.from(root.keys());

  const modules = new Set();

  /**
   * @param {string} node
   * @return {boolean}
   */
  const dfs = (node) => {
    const children = root.get(node) ?? [];
    if (children.length === 0) {
      modules.add(node);
      return true;
    }

    for (let child of children) {
      if (!dfs(child)) return false;
    }

    modules.add(node);

    return true;
  };

  for (let i = keys.length - 1; i >= 0; i--) {
    dfs(keys[i]);
  }

  return Array.from(modules);
};

/**
 *
 * @param {string[]} output
 * @param {string[]} expect
 */
const test = (output, expect) => {
  if (output.length !== expect.length) return false;

  return output.every((o, i) => o === expect[i]);
};

export const main = async () => {
  const test1 = new Map([
    ["A", ["B", "C"]],
    ["B", ["D"]],
    ["C", ["E"]],
    ["D", ["F"]],
    ["E", ["F"]],
    ["F", []], // Node F has no outgoing edges
  ]);

  // Expect F E D C B A
  console.log(test(loadDependencies(test1), ["F", "E", "D", "C", "B", "A"]));
};
