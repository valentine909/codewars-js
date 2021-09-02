// https://www.codewars.com/kata/5519a584a73e70fa570005f5/

class Primes {
    static* stream() {
        yield 2;
        let gen = this.infOddStream();
        while (true) {
            const prime = gen.next().value;
            yield prime;
            gen = this.filter(gen, prime);
        }
    }

    static* infOddStream(i = 1) {
        while (true) yield i = i + 2;
    }

    static* filter(generator, prime) {
        for (const n of generator) if (n % prime !== 0) yield n;
    }
}

gen = Primes.stream();
for (let j = 0; j < 100; j++) {
    console.log(gen.next().value);
}
