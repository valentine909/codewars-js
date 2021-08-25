// https://www.codewars.com/kata/520b9d2ad5c005041100000f/

function pigIt(str) {
    let wordArray = str.split(/\s/);
    let newWordArray = [];
    for (let elem of wordArray) {
        if (!elem.match(/[A-z]+/)) {
            newWordArray.push(elem);
        } else {
            newWordArray.push(elem.slice(1, ) + elem[0] + "ay");
        }
    }
    return newWordArray.join(' ');
}