//https://www.codewars.com/kata/52b50a20fa0e77b304000103/

function isSantaClausable(obj) {
    const clausInterface = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
    let isClaus = true
    clausInterface.forEach(x => {
        if (typeof obj[x] !== 'function') isClaus = false})
    return isClaus
}