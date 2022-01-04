//https://www.codewars.com/kata/5b773b698adeaeb6b80000df/train/javascript

function memo(fn) {
  const vocabulary = {};
  return (x) => {
    let key;
    if (typeof x === 'object' || typeof x === 'undefined') {
      key = JSON.stringify(x);
    } else {
      key = x.toString();
    }
    if (vocabulary.hasOwnProperty(key)) {
      return vocabulary[key];
    } else {
      return vocabulary[key] = fn(x);
    }
  }
}
