// https://www.codewars.com/kata/function-composition

function compose(f,g) {
    return function (...n) {
        return f(g(...n));
    }
}
