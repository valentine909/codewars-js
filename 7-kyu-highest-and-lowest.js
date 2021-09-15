//https://www.codewars.com/kata/554b4ac871d6813a03000035/

function highAndLow(numbers){
    let num = numbers.split(' ').map(x => parseInt(x));
    let max = Math.max(...num);
    let min = Math.min(...num);
    return [max, min].join(" ");
}