
/**
 * takes a string and returns an array of 2 element arrays, where the first member is a letter in the string, and the second is the number 
 * of times it appears in the string. The return array consists of arrays with the highest second member, up to a maximum of numberOfWinners
 * 
 * @param {string} inputText 
 * @param {number} numberOfWinners 
 * @returns {Array<[string, number]>} array of number of Winners many 2-element arrays, consisting of must occurant letters, and the number of times it occurs
 */
function getMostCommonLetters(inputText, numberOfWinners){
const countObject = {}
for(let letter of inputText){
    if(countObject.hasOwnProperty(letter)){
        countObject[letter]++
    } else {
        countObject[letter] = 1
    }
}

return Object.entries(countObject)
}

export {getMostCommonLetters}