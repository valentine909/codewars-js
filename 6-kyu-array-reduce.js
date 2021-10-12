Array.prototype.reduce = function(process, initial) {
    if (initial === undefined) {
        if (typeof this[0] === "string") initial = "";
        else if (typeof this[0] === "number") initial = 0;
    }
    for (let elem of this) {
        initial = process(initial, elem);
    }
    return initial
}