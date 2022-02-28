// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript

function orderWeight(str) {
  function sumNumbers(num) {
    return num.split('').reduce((acc, x) => acc += parseInt(x), 0);
  }

  const arr = str.split(' ');
  arr.sort((a, b) => {
    return sumNumbers(a) === sumNumbers(b) ? a.localeCompare(b) : sumNumbers(a) - sumNumbers(b);
  })
  return arr.join(' ');
}
