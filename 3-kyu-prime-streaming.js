// https://www.codewars.com/kata/5519a584a73e70fa570005f5/

class Primes {
    static* stream() {
        const primes = [];
        yield 2;
        yield 3;
        let gen = this.infSixKStream();
        while (true) {
            const candidate = gen.next().value;
            if (this.isPrime(candidate, primes)) yield candidate;
        }
    }

    static* infSixKStream() {
        let k = 1;
        while (true) {
            yield k += 4;
            yield k += 2;
        }
    }

    static isPrime(candidate, primes) {
        for (let i = 0; primes[i] <= Math.sqrt(candidate); i++) {
            if (candidate % primes[i] === 0) return false;
        }
        primes.push(candidate);
        return true;
    }
}



const {performance} = require('perf_hooks');
let t0 = performance.now();
gen = Primes.stream();
for (let j = 0; j < 1000000; j++) {
    gen.next().value;
    // console.log(gen.next().value);
}
let t1 = performance.now();
console.log(`${(t1-t0).toFixed(2)} ms`)
