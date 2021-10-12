// https://www.codewars.com/kata/56f935002e6c0d55fa000d92/

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status, legs, species) {
        super(name, age, legs, species, status);
        this.legs = 0;
        this.species = "shark";
    }
}

class Cat extends Animal {
    constructor(name, age, status, legs, species) {
        super(name, age, legs, species, status);
        this.legs = 4;
        this.species = "cat";
    }
    introduce() {
        return super.introduce() + "  Meow meow!"
    }
}

class Dog extends Animal {
    constructor(name, age, status, master, legs, species) {
        super(name, age, legs, species, status);
        this.legs = 4;
        this.species = "dog";
        this.master = master;
    }
    greetMaster() {
        return `Hello ${this.master}`;
    }
}