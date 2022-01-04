//https://www.codewars.com/kata/56a298b27e9e994977000023/train/javascript

function multiFilter(...filters) {
  return function(valueToTest) {
    const result = filters.reduce((acc, filter) => {return acc + filter(valueToTest)}, 0);
    return result === filters.length;
  }
}
