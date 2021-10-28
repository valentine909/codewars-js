// https://www.codewars.com/kata/dependency-injection

const DI = function (dependency) {
    this.dependency = dependency;
};

DI.prototype.inject = function (func) {
    const funcArgs = /function\s?\((.+)\)/;
    let deps = func.toString().match(funcArgs);
    deps = deps ? deps[1].split(/,\s?/) : []
    const args = [];
    for (let i=0; i < deps.length; i++) {
        args.push(this.dependency[deps[i]]);
    }
    return function() {
        return func.apply(null, args)
    }
}
const deps = {
    'dep1': function () {return 'this is dep1';},
    'dep2': function () {return 'this is dep2';},
    'dep3': function () {return 'this is dep3';},
    'dep4': function () {return 'this is dep4';}
};

const di = new DI(deps);
const f = di.inject(function () {
    return arguments.length;
});
console.log(f())