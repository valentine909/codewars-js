// https://www.codewars.com/kata/isograms

function isIsogram(str){
    const lettersCount = {};
    for (let letter of str.toLowerCase()) {
        if (lettersCount[letter]) return false;
        else lettersCount[letter] = 1;
    }
    return true;
}