// https://www.codewars.com/kata/56fcc1ee45040039ab0016da/

class Cube {
    constructor(length) {
        this.length = length;
    }
    get volume() {
        return this.length ** 3;
    }
    set volume(vol) {
        this.length = vol ** (1 / 3)
    }
    get surfaceArea() {
        return this.length ** 2 * 6
    }
    set surfaceArea(area) {
        this.length = (area / 6) ** (1 / 2)
    }
}