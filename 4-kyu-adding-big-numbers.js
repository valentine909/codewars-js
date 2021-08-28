function add(a, b) {
    if (a.length < b.length)[a, b] = [b, a];
    let carry = 0;
    let result = new Array(a.length + 1);
    for (let i = a.length - 1; i >= 0; i--) {
        let singleDigitSum = parseInt(a[i]) + (parseInt(b[i - (a.length - b.length)]) || 0) + carry;
        carry = ~~(singleDigitSum / 10);
        result[i + 1] = singleDigitSum % 10;
    }
    if (carry) result[0] = 1;
    return result.join("");
}