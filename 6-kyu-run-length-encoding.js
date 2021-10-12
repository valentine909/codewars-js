// https://www.codewars.com/kata/546dba39fa8da224e8000467

const runLengthEncoding = function(str){
    const encodedArray = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) count++;
        else {
            encodedArray.push([count, str[i]]);
            count = 1;
        }
    }
    return encodedArray;
}