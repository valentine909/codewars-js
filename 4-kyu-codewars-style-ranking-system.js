// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/

class User {
    constructor() {
        this._rank = -8;
        this._progress = 0;
        this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    }
    get rank() {
        return this._rank;
    }
    get progress() {
        return this._progress;
    }
    set rank(value) {
        this._rank = value;
    }
    set progress(value) {
        this._progress = value;
    }
    incProgress(num) {
        if (num < -8 || num > 8 || num === 0) {
            throw 'Wrong rank!'
        }
        let delta = this.ranks.indexOf(num) - this.ranks.indexOf(this.rank);
        if (delta === -1) {
            this._progress += 1;
        } else if (delta === 0) {
            this._progress = +3;
        } else if (delta > 0) {
            this._progress += 10 * delta * delta;
        }
        let newRanks = ~~(this._progress / 100);
        this._rank = (this.ranks[(this.ranks.indexOf(this._rank) + newRanks)] || 8);
        if (this._rank < 8) {
            this._progress %= 100;
        } else {
            this._progress = 0;
        }
    }
}