//https://www.codewars.com/kata/56414fdc6488ee99db00002c/

function absentVowel(x){
    const vowels = {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4};
    for (let [key, value] of Object.entries(vowels)) {
        if (x.toLowerCase().indexOf(key) === -1) return value;
    }
}