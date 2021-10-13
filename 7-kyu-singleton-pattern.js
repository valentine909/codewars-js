// https://www.codewars.com/kata/singleton-pattern

const Singleton = function () {
    let obj
    const init = function () {
        return obj || (obj = this)
    }
    return init
}();