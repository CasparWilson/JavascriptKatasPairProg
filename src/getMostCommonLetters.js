/**
 * takes a string and returns an array of 2 element arrays, where the first member is a letter in the string, and the second is the number
 * of times it appears in the string. The return array consists of arrays with the highest second member, up to a maximum of numberOfWinners
 *
 * @param {string} inputText
 * @param {number} numberOfWinners
 * @returns {Array<[string, number]>} array of number of Winners many 2-element arrays, consisting of must occurant letters, and the number of times it occurs
 */
function getMostCommonLetters(inputText, numberOfWinners) {
  const countObject = {};
  const lowerCase = inputText.toLowerCase();
  const alphabet = "abcdefghijklmopqrstuvwxyz";
  for (let letter of lowerCase) {
    if (alphabet.includes(letter)) {
      if (letter in countObject) {
        countObject[letter]++;
      } else {
        countObject[letter] = 1;
      }
    }
  }
/**
 * @type {[string, number][]}
 */
  const countArray = Object.entries(countObject);
  countArray.sort(([a], [b]) => a.charCodeAt(0) - b.charCodeAt(0));
  countArray.sort(([, a], [, b]) => b - a);
  const mostCommonLetters = countArray.slice(0, numberOfWinners);

  return mostCommonLetters;
}

export { getMostCommonLetters };
