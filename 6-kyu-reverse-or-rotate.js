// https://www.codewars.com/kata/reverse-or-rotate

function revrot(str, sz) {
    if (sz <= 0 || str === "" || sz > str.length) return "";
    let result = '';
    for (let i = 0; i + sz <= str.length; i = i + sz) {
        let chunk = str.slice(i, i + sz);
        if ([...chunk]
            .map(x => x ** 3)
            .reduce((a, b) => a + b, 0) % 2 === 0) {
            result += chunk.split("").reverse().join("");
        }
        else result += `${chunk.slice(1)}${chunk[0]}`
    }
    return result
}