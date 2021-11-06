// https://www.codewars.com/kata/52b2fcc1c65ea44b76000701/

function extend(className, superClass, mixin, scope) {
    global[className] = class extends superClass {
        constructor() {
            super();
            if (mixin) Object.assign(this, new mixin(), mixin.prototype)
        }
    }
    if (scope) Object.assign(scope, this)
}

class Super {
    constructor() {
        this.surname = 'base'
    }
}

function mixin() {
    this.addProp = function (p) {
        console.log('AddProp')
    };
    this.getProp = function (p) {
    };
}

let scope = {}
extend('Some', Super, mixin, scope)
let c = new Some()
console.log(c)