/*
 * the number of times each character appears in the string below
 * {
 *   "a": 7,
 *   "b": 5,
 *   ...
 * }
 */

const characters: string = "abcaabfbcubcbamabcabc";

// split the text into an array of characters
// use of the reduce method over the array to compute the counts: reduce(reducer, initialValue)

function countChars(text: string) {
  return text.split("").reduce((map, char) => {
    map[char] = (map[char] || 0) + 1;
    return map;
  }, {}); // initial value empty object
}
console.log(countChars(characters));

const countChars2 = (text: string) =>
  text.split("").reduce((map, char) => {
    return (map[char] = (map[char] || 0) + 1);
  }, {}); // initial value empty object
