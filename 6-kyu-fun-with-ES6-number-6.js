// https://www.codewars.com/kata/5784c8116211383b5f0001d3/

class File {
    #fullName;
    #extension;
    #filename;
    #contents;
    #linesCount;
    #charsCount;
    #lines;
    constructor(fullName, contents) {
        this.#fullName = fullName;
        this.#extension = fullName.split(".").pop();
        this.#filename = fullName.replace(this.#extension, "");
        this.#contents = contents;
        this.#linesCount = 0;
        this.#charsCount = 0;
        this.#lines = this.#contents.split("\n");
    }
    get fullName() {
        return this.#fullName;
    }
    get filename() {
        return this.#filename;
    }
    get extension() {
        return this.#extension;
    }
    getContents() {
        return this.#contents
    }
    write(someText) {
        this.#contents = someText;
    }
    gets() {
        this.#linesCount++;
        return this.#lines[this.#linesCount - 1];
    }
    getc() {
        this.#charsCount++;
        return this.#contents[this.#charsCount - 1];
    }
}