// https://www.codewars.com/kata/525c65e51bf619685c000059/

function cakes(recipe, available) {
    let min_qauntity = Infinity;
    for (let elem in recipe) {
        let quantity = (available[elem] === undefined) ? 0 : ~~(available[elem] / recipe[elem]);
        min_qauntity = (quantity < min_qauntity) ? quantity : min_qauntity;
    }
    return min_qauntity === Infinity ? 0 : min_qauntity;
}