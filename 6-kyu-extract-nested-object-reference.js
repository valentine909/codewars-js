// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/

Object.prototype.hash = function(string) {
    const properties = string.split('.')
    let output = this
    for (let prop of properties) {
        output = output[prop]
        if (output === undefined) return
    }
    return output
}