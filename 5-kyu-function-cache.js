// https://www.codewars.com/kata/525481903700c1a1ff0000e1

function cache(func) {
    const resultsCache = {};
    return (...someArgs) => {
        const argsAsString = JSON.stringify(someArgs);
        if (!(argsAsString in resultsCache)) resultsCache[argsAsString] = func(...someArgs);
        return resultsCache[argsAsString];
    }
}