function add(a, b) {
    let result = '';
    if (a.length < b.length)[a, b] = [b, a];
    const delta = a.length - b.length;
    let overflow = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        let singleDigitSum = parseInt(a[i]) + (parseInt(b[i - delta]) || 0) + overflow;
        overflow = (singleDigitSum.toString().length > 1) ? 1 : 0;
        singleDigitSum = (overflow) ? singleDigitSum % 10 : singleDigitSum;
        result = singleDigitSum + result;
    }
    return (overflow || "") + result;
}