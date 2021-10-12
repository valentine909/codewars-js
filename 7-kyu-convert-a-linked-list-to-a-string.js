// https://www.codewars.com/kata/582c297e56373f0426000098

function stringify(list) {
    const dataArray = [];
    while (list !== null) {
        dataArray.push(list['data']);
        list = list['next'];
    }
    dataArray.push('null')
    return dataArray.join(' -> ');
}