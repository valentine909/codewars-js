// https://www.codewars.com/kata/52d3b68215be7c2d5300022f/

function Event() {
    this.handlers = [];
    this.subscribe = function (func) {
        this.handlers.push(func)
    }
    this.unsubscribe = function (func) {
        let index = this.handlers.indexOf(func)
        this.handlers.splice(index, 1)
    }
    this.emit = function (...arg) {
        for (let func of this.handlers) {
            func(...arg)
        }
    }
}
