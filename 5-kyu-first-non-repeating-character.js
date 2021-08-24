// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/

function firstNonRepeatingLetter(s) {
    let [...newS] = s.toLowerCase();
    let duplicate = newS.filter((e, i, a) => a.indexOf(e) !== i);
    for (let i = 0; i < newS.length; i++) {
        if (!duplicate.includes(newS[i])) {
            return s[i];
        }
    }
    return "";
}