// https://www.codewars.com/kata/54e320dcebe1e583250008fd

function dec2FactString(nb) {
    let i = 1;
    let factorials = [];
    let fact = 1;
    let factNext = 1;
    while (nb >= factNext) {
        fact = factNext;
        factorials.push(fact);
        factNext = fact * i;
        i++;
    }
    let result = '';
    let remainder = nb;
    for (let elem of factorials.reverse()) {
        let digitOrChar = ~~(remainder / elem);
        digitOrChar = (digitOrChar > 9) ? String.fromCharCode(digitOrChar + 55) : digitOrChar;
        result = result + digitOrChar;
        remainder = remainder % elem;
    }
    return result;
}

function factString2Dec(str) {
    let number = 0;
    let fact = 1;
    let i = 2
    while (str.length - i >= 0) {
        let digitOrChar = str[str.length - i];
        digitOrChar = (isNumeric(digitOrChar)) ? digitOrChar : digitOrChar.charCodeAt(0) - 55;
        number = number + fact * digitOrChar;
        fact = fact * i;
        i++;
    }
    return number;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}