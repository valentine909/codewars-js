// https://www.codewars.com/kata/5631ac5139795b281d00007d

var WordDictionary = function () {
    this.dict = [];
};

WordDictionary.prototype.addWord = function (word) {
    this.dict.push(word);
};

WordDictionary.prototype.search = function (word) {
    word = word.replace(".", "\.{1}");
    let pattern = new RegExp(`^${word}$`);
    for (let record of this.dict) {
        if (record.match(pattern)) return true;
    }
    return false;
};

