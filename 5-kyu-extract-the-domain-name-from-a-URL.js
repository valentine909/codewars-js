// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    return url.match(/(?:www\.){0,1}([\w-]+)(?:\.)/)[1];
}