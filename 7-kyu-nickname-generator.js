// https://www.codewars.com/kata/nickname-generator

function nicknameGenerator(name){
    if (name.length < 4) return "Error: Name too short";
    else if ("aeiou".includes(name[2])) return name.slice(0, 4);
    else return name.slice(0, 3);
}