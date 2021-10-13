// https://www.codewars.com/kata/558cb3df5f511f40d500001d/

function nouveau (Constructor, ...args) {
    let instance = {}
    instance.__proto__ = Constructor.prototype
    let object = Constructor.apply(instance, args)
    if ((typeof object === 'object' || typeof object === 'function') && object !== null) return object;
    else return instance
}