// https://www.codewars.com/kata/5682e72eb7354b2f39000021/

class SiegeState {
    constructor() {
        this.damage = 20;
        this.canMove = false;
    }
}

class TankState {
    constructor() {
        this.damage = 5;
        this.canMove = true;
    }
}

class Tank {
    constructor() {
        this.state = new TankState()
    }

    get canMove() {return this.state.canMove}
    get damage() {return this.state.damage}
}