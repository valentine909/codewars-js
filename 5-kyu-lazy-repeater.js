//https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript

function makeLooper(str) {
  let count = -1
  return function () {
    count += 1
    return str[count % str.length];
  }
}
