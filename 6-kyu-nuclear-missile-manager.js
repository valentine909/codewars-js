//https://www.codewars.com/kata/567ed5db4089538eea000010/

function launchAll(launchMissile) {
    for(var i = 0; i < 5; i++) {
        launch(launchMissile, i)
    }
}

function launch(launcher, number) {
    setTimeout(function () {
        launcher(number);
    }, number * 1000);
}