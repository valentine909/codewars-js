// https://www.codewars.com/kata/function-composition-1
// https://medium.com/dailyjs/functional-js-6-function-composition-b7042c2ccffa

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);
