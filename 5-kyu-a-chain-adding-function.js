//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

function add(firstValue){
  let sum = firstValue
  function addNext(nextValue) {
    sum += nextValue;
    return addNext;
  }

  addNext.toString = function() {
    return sum;
  };

  return addNext;
}
