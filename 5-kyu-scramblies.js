// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/

function scramble(str1, str2) {
    const m1 = convertToMap(str1);
    const m2 = convertToMap(str2);
    for (let elem of m2.keys()) {
        if (m2.get(elem) > m1.get(elem)) {
            return false;
        }
    }
    return true;
}

function convertToMap(str) {
    const map = initializeMap();
    for (let i = 0; i < str.length; i++) {
        map.set(str[i], map.get(str[i]) + 1);
    }
    return map;
}

function initializeMap() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const map = new Map();
    for (let i = 0; i < alphabet.length; i++) {
        map.set(alphabet[i], 0);
    }
    return map;
}