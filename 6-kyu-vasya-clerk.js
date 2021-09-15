// https://www.codewars.com/kata/vasya-clerk

function tickets(peopleInLine){
    let quarter = 0;
    let fifty = 0;
    for (const banknote of peopleInLine) {
        if (banknote === 25) quarter += 1;
        else if (banknote === 50 && quarter > 0) {
            quarter -= 1;
            fifty += 1
        }
        else if (banknote === 100 && fifty > 0 && quarter > 0) {
            quarter -= 1;
            fifty -= 1
        }
        else if (banknote === 100 && quarter >= 3) quarter -= 3;
        else return 'NO';
    }
    return 'YES'
}