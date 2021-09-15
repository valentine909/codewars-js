//https://www.codewars.com/kata/jaden-casing-strings

String.prototype.toJadenCase = function () {
    return this
        .split(" ")
        .map(x => (x[0].toUpperCase() + x.substr(1)))
        .join(" ")
};