// https://www.codewars.com/kata/58c5577d61aefcf3ff000081/

function encodeRailFenceCipher(string, numberRails) {
    let result = formArray(numberRails);
    const period = 2 * numberRails - 2;
    for (let i = 0; i < string.length / period; i++) {
        for (let j = 0; j < period; j++) {
            if (j < numberRails) result[j].push(string[i * period + j]);
            else result[period - j].push(string[i * period + j]);
        }
    }
    for (let i = 0; i < result.length; i++) result[i] = result[i].join("");
    return result.join("");
}

function formArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push([]);
    return arr;
}

function decodeRailFenceCipher(string, numberRails) {
    let result = "";
    const period = 2 * numberRails - 2;
    const pointers = determinePointers(string.length, period);
    for (let i = 0; i < string.length / period; i++) {
        for (let j = 0; j < period; j++) {
            if (j < numberRails) {
                if (j === 0 || j === numberRails - 1) result += string[pointers[j] + i];
                else result += string[pointers[j] + 2 * i];
            } else result += string[pointers[period - j] + 2 * i + 1];
        }
    }
    return result.slice(0, string.length);
}

function determinePointers(len, period) {
    let chunks = calculateChunks(len, period);
    let pointers = [0, chunks[0]];
    for (let i = 1; i < chunks.length / 2; i++) pointers.push(pointers[i] + chunks[i] + chunks[chunks.length - i]);
    return pointers;
}

function calculateChunks(len, period) {
    let chunks = [];
    for (let i = 0; i < period; i++) {
        if (i < len % period) chunks.push(~~(len / period) + 1);
        else chunks.push(~~(len / period));
    }
    return chunks;
}