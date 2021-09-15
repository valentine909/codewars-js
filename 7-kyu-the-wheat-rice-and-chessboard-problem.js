// https://www.codewars.com/kata/the-wheat-slash-rice-and-chessboard-problem

function squaresNeeded(grains){
    if (!grains) return 0;
    let squares = 1;
    let count = 1;
    while (count < grains) {
        squares += 1;
        count += 2 ** (squares - 1);
    }
    return squares;
}