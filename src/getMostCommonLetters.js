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