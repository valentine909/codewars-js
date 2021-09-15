// https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array

const multiplyAll = (arr) => {
  return function (multiplier) {
      return arr.map(x => x * multiplier);
  }
}