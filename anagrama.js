// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

const input1 = "car";
const input2 = "rca";

function anagram(t, s) {
  if (1 <= s.length && t.length <= 5 * 104) {
    if (t.length === s.length) {
      for (let i = 0; i < t.length; i++) {
        const arrayS = Array.from(s).filter((e) => e === s[i]);
        const arrayT = Array.from(t).filter((e) => e === t[i]);
        if (arrayS === arrayT) {
          return true;
        }
      }
    } else return false;
  }
}

console.log(anagram(input1, input2));
