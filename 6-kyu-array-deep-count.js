// https://www.codewars.com/kata/array-deep-count

function deepCount(a){
    let count = 0;
    for (const element of a) {
        if (element instanceof Array) count += deepCount(element) + 1;
        else count += 1;
    }
    return count;
}