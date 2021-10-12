// https://www.codewars.com/kata/539de388a540db7fec000642

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const oneDayDelta = 24 * 3600 * 1000;
    return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate) + oneDayDelta;
}