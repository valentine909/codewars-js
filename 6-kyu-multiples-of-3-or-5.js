// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
    let sum = 0;
    for (let i = 3; i < number; i = i + 3) {
        sum += i;
    }
    for (let i = 5; i < number; i = i + 5) {
        if (i % 3 !== 0) sum += i;
    }
    return sum;
}