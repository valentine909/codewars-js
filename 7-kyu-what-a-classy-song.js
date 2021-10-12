// https://www.codewars.com/kata/what-a-classy-song

class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.listners = new Set;
    }

    howMany(array) {
        const before = this.listners.size;
        array.forEach(elem => this.listners.add(elem.toLowerCase()));
        return this.listners.size - before;
    }
}