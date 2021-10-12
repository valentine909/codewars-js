// https://www.codewars.com/kata/525d50d2037b7acd6e000534/

Array.prototype.square = function () {
    return this.map(x => x ** 2)
}
Array.prototype.cube = function () {
    return this.map(x => x ** 3)
}
Array.prototype.average = function () {
    return this.sum() / this.length || NaN
}
Array.prototype.sum = function () {
    return this.reduce((acc, i) => acc + i, 0)
}
Array.prototype.even = function () {
    return this.filter(number => number % 2 === 0)
}
Array.prototype.odd = function () {
    return this.filter(number => number % 2 !== 0)
}
a = [1, 2, 3, 4, 5]
console.log(a.square());
console.log(a.cube());
console.log(a.average());
console.log(a.sum());
console.log(a.even());
console.log(a.odd());