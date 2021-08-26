function simplify(poly) {
    let searchResults = matchAll(poly);
    let monomials = countMonomials(searchResults);
    let sortedMonomialsKeys = [...monomials.keys()].sort(monomialSort);
    return constructSimplifiedExpression(sortedMonomialsKeys, monomials);
}
function matchAll (str) {
    const re = /([+-])?(\d+)?([a-z]+)/g;
    let matchResults = [];
    let match;
    do {
        match = re.exec(str);
        if (match) matchResults.push(match);
    } while (match);
    return matchResults;
}

function countMonomials(regexSearchResults) {
    const map = new Map();
    for (let elem of regexSearchResults) {
        let key = sortCharsInString(elem[3]);
        let sign = (elem[1] === '-') ? -1 : 1;
        let value = (isNaN(parseInt(elem[2]))) ? sign : parseInt(elem[2]) * sign;
        if (map.get(key)) {
            map.set(key, map.get(key) + value);
        } else {
            map.set(key, value);
        }
    }
    return map;
}

function sortCharsInString(str) {
    let key = [...str];
    return key.sort().join('');
}

function monomialSort(a, b) {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a.length === b.length) {
        return (a > b) ? 1 : -1;
    }
}

function constructSimplifiedExpression(keys, map) {
    let result = '';
    for (let key of keys) {
        let coefficient = map.get(key);
        if (coefficient === 1 && result === '') coefficient = '';
        else if (coefficient > 1 && result !== '') coefficient = '+' + coefficient;
        if (coefficient === 0) {
            coefficient = '';
            key = '';
        } else if (coefficient === 1) coefficient = '+';
        else if (coefficient === -1) coefficient = '-';

        result += `${coefficient}${key}`
    }
    return result;
}
console.log(simplify("-a+5ab+3a-0c-2a"));