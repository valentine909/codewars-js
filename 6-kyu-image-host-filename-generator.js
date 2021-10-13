// https://www.codewars.com/kata/586a933fc66d187b6e00031a/

function generateName() {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let code = ""
    for (let i = 0; i < 6; i++) {
        code += str[Math.round(Math.random() * (str.length + 1))]
    }
    return photoManager.nameExists(code) ? generateName() : code;
}