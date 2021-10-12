// https://www.codewars.com/kata/53583765d5493bfdf5001b35/

var Cat = (function () {
    const allCats = [];
    makeNewCat = function (name, weight) {
        if (name === undefined || weight === undefined) throw Error("Wrong input!");
        Object.defineProperty(this, "name", {
            get() {return name;},
            set(value) {name = value;}
        });
        Object.defineProperty(this, "weight", {
            get() {return weight;},
            set(value) {weight = value;}
        });
        allCats.push(this);
    }
    makeNewCat['averageWeight'] = () => {
        return allCats.reduce((acc, cat) => acc + cat.weight, 0) / allCats.length
    }
    return makeNewCat
}());