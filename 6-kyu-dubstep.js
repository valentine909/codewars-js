// https://www.codewars.com/kata/551dc350bf4e526099000ae5


function songDecoder(song) {
    return song.split(/(WUB)+/).filter(x => !(x == 'WUB' || x == '')).join(' ');
}