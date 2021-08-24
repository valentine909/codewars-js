function findMissingLetter(array) {
    let start = array[0]
    for (const element of array.slice(1, )) {
        if (element.charCodeAt(0) - 1 != start.charCodeAt(0)) {
            return String.fromCharCode(element.charCodeAt(0) - 1);
        } else {
            start = element;
        }
    }
}