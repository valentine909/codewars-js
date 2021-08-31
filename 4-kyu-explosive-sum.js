//https://www.codewars.com/kata/52ec24228a515e620b0005ef/

function sum(n) {
    if (n === 0 || n === 1) return 1;
    let arr = [
        [...Array(n + 1)].map(_ => 0), [...Array(n + 1)].map(_ => 1)
    ];
    arr[0][0] = 1;
    let i = 2;
    while (i < n + 1) {
        arr.push([...Array(n + 1)].map(_ => 0));
        for (let j = 0; j < arr[i].length; j++) {
            if (i > j) arr[i][j] = arr[i - 1][j];
            else arr[i][j] = arr[i - 1][j] + arr[i][j - i];
        }
        i++;
    }
    return arr[n][n];
}