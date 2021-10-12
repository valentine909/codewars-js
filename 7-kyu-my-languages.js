// https://www.codewars.com/kata/5b16490986b6d336c900007d

function myLanguages(results) {
    return Object.entries(results)
        .filter(x => x[1] >= 60)
        .sort((a, b) => b[1] - a[1])
        .map(x => x[0])
}

console.log(myLanguages({"Java": 10, "Ruby": 80, "Python": 65}));