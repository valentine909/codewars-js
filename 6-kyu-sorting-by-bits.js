function sortByBit(arr) {
    const countBits = x => {
        const bits = (x >>> 0).toString(2).match(/1/g);
        return (bits === null) ? 0 : bits.length;
    };
    const compareFunction = (a, b) => {
        return (countBits(a) === countBits(b)) ? a - b : countBits(a) - countBits(b)
    }
    return arr.sort(compareFunction);
}
