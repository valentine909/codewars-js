// https://www.codewars.com/kata/56eb0be52caf798c630013c0

function unluckyDays(year){
    let blackFridayCount = 0;
    for (let i = 0; i < 12; i++) {
        if (new Date(year, i, 13).getDay() === 5) blackFridayCount++;
    }
    return blackFridayCount;
}