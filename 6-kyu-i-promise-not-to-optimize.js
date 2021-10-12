// https://www.codewars.com/kata/58d014421c694f71630000bc/

function antiOptimizeAsync(task) {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(task());
        }, 2000);
    })
}
