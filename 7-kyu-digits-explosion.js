// https://www.codewars.com/kata/585b1fafe08bae9988000314/

function explode(s) {
    let result = '';
    for (let num of s) {
        result += num.repeat(parseInt(num));
    }
    return result;
}