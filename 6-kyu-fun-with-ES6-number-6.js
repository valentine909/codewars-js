// https://www.codewars.com/kata/5784c8116211383b5f0001d3/

class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        let parts = fullName.split(".");
        this._extension = parts.pop();
        this._filename = parts.join(".");
        this._lines = contents.split("\n").filter(x => x !== "");
        this._linesCount = 0;
        this._charsCount = 0;
    }
    get fullName() {
        return this._fullName;
    }
    get filename() {
        return this._filename;
    }
    get extension() {
        return this._extension;
    }
    getContents() {
        return this._lines.join("\n");
    }
    write(someText) {
        this._lines.push(someText);
    }
    gets() {
        this._linesCount++;
        return this._lines[this._linesCount - 1];
    }
    getc() {
        this._charsCount++;
        return this.getContents()[this._charsCount - 1];
    }
}
var example = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
console.log(example.filename)
console.log("class.phptester.php".split("."))
