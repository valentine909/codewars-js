const justify = function (str, len) {
    let splitArray = splitAndClear(str);
    let justifiedArray = justifyArray(splitArray, len);
    return joinText(justifiedArray);
};

function splitAndClear(someText) {
    return someText.split(/\s+/g).map(x => x.trim()).filter(x => x !== '');
}

function lessThenLenArray(rawArray, len) {
    let i = 0;
    let rawJustifiedArray = [];
    while (i < rawArray.length) {
        let currentLength = 0;
        let oneLine = [];
        while (i < rawArray.length && currentLength + rawArray[i].length <= len) {
            if (currentLength + rawArray[i].length + 1 <= len) oneLine.push(rawArray[i], " ");
            else if (currentLength + rawArray[i].length === len) oneLine.push(rawArray[i]);
            currentLength += (rawArray[i].length + 1);
            i++;
        }
        if (oneLine.length === 0) {oneLine.push(rawArray[i]); i++;}
        rawJustifiedArray.push(oneLine);
    }
    return rawJustifiedArray;
}

function trimTrailingSpace(arrayOfWords) {
    if (arrayOfWords[arrayOfWords.length - 1] === ' ') arrayOfWords.pop();
    return arrayOfWords;
}

function addTrailingNewLine(arrayOfWords) {
    arrayOfWords[arrayOfWords.length - 1] += '\n';
    return arrayOfWords;
}

function countChars(arrayOfWords) {
    let charCount = 0;
    for (let word of arrayOfWords) {
        charCount += word.length;
    }
    return charCount;
}

function justifyLine(arrayOfWords, currentChars, totalChars) {
    if (arrayOfWords.length === 1) return arrayOfWords;
    let j = 0;
    while (j < totalChars - currentChars) {
        let k = 1;
        while (j < totalChars - currentChars && k < arrayOfWords.length) {
            arrayOfWords[k] += " ";
            k += 2;
            j += 1;
        }
    }
    return arrayOfWords;
}

function justifyArray(splitArray, len) {
    let justifiedArray = lessThenLenArray(splitArray, len);
    for (let line of justifiedArray) {
        line = trimTrailingSpace(line);
    }
    for (let line of justifiedArray.slice(0, justifiedArray.length - 1)) {
        let charCount = countChars(line);
        line = justifyLine(line, charCount, len);
        line = addTrailingNewLine(line);
    }
    return justifiedArray;
}

function joinText (justifiedArray) {
    let result = '';
    for (const line of justifiedArray) {
        result += line.join("");
    }
    return result;
}