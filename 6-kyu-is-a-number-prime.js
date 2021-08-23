function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num ** 0.5 + 0.1; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}