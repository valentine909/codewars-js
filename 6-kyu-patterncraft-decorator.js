// https://www.codewars.com/kata/patterncraft-decorator/

class Marine {
    constructor(_damage, _armor) {
        this._damage = _damage;
        this._armor = _armor
    }

    get damage() { return this._damage; }
    set damage(value) { this._damage = value }

    get armor() { return this._armor; }
    set armor(value) { this._armor = value }
}

class MarineWeaponUpgrade {
    constructor(marine) {
        this.marine = marine
    }

    get damage() { return this.marine.damage + 1; }
    set damage(value) { this.marine.damage = value }

    get armor() { return this.marine.armor; }
    set armor(value) { this.marine.armor = value }
}

class MarineArmorUpgrade {
    constructor(marine) {
        this.marine = marine
    }

    get damage() { return this.marine.damage; }
    set damage(value) { this.marine.damage = value }

    get armor() { return this.marine.armor + 1; }
    set armor(value) { this.marine.armor = value }
}

let mar = new Marine(10, 1)
mar = new MarineWeaponUpgrade(mar)
console.log(mar.armor, mar.damage)