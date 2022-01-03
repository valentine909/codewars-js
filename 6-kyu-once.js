//https://www.codewars.com/kata/5307ff5b588fe6d7000000a5/train/javascript

function once(fn) {
  let isReturned = false;
  return (...args) => {
    if (!isReturned) {
      isReturned = true;
      return fn(...args);
    }
  }
}
