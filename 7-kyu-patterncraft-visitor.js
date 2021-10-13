// https://www.codewars.com/kata/5682e646d5eddc1e21000017/

class Marine {
    constructor() {
        this.health = 100;
    }
    accept(bullet) {
        bullet.visitLight(this);
    }
}

class Marauder {
    constructor() {
        this.health = 125;
    }
    accept(bullet) {
        bullet.visitArmored(this);
    }
}

class TankBullet {
    visitLight(unit) {
        unit.health -= 21;
    }
    visitArmored(unit) {
        unit.health -= 32;
    }
}