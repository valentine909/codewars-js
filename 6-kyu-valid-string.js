// https://www.codewars.com/kata/valid-string

function validWord(dictionary, word) {
    let re = new RegExp("^(" + dictionary.join("|") + ')+$', "g");
    let result = "";
    if (word.match(re, "")) result = word.match(re, "")[0];
    return word === result;
}