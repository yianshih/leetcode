/**

567. Permutation in String

Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

*/

const isEmpty = (o1) => {
  if (!Object.keys(o1).length) return true;

  return Object.values(o1).every((v) => v === 0);
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const requiredCount = {};

  for (let c of s1) {
    requiredCount[c] = (requiredCount[c] ?? 0) + 1;
  }

  const currentCount = { ...requiredCount };

  let left = 0;

  for (let right = 0; right < s2.length; right++) {
    if (requiredCount[s2[right]]) {
      currentCount[s2[right]] = (currentCount[s2[right]] ?? 0) - 1;
      if (currentCount[s2[right]] < 0) {
        // As current count is over deducted, we need to exclude the same char from the window
        while (currentCount[s2[right]] < 0) {
          if (currentCount[s2[left]] !== undefined) {
            currentCount[s2[left]] += 1;
          }
          left++;
        }
      } else if (isEmpty(currentCount)) {
        return true;
      }
    } else {
      // Shift left to next right when found invalid char
      // Add back count while shifting
      while (left < right + 1) {
        if (currentCount[s2[left]] !== undefined) {
          currentCount[s2[left]] += 1;
        }
        left++;
      }
    }
  }

  return false;
};

export const main = async () => {
  console.log(checkInclusion("ab", "eidbaooo")); // true
  console.log(checkInclusion("ab", "eidboaoo")); // false
  console.log(checkInclusion("hello", "ooolleoooleh")); // false
  console.log(checkInclusion("abc", "ccccbbbbaaaa")); // false
  console.log(checkInclusion("adc", "dcda")); // true
};
