function likes(names) {
    let name = '';
    let ending = 's';
    if (names.length === 0) {
        name = "no one";
    } else if (names.length === 1) {
        name = names[0];
    } else if (names.length === 2 || names.length === 3) {
        name = `${names.slice(0, -1).join(', ')} and ${names.slice(-1)[0]}`;
        ending = ''
    } else {
        name = `${names.slice(0, 2).join(', ')} and ${names.slice(2,).length} others`;
        ending = ''
    }
    return `${name} like${ending} this`;
}