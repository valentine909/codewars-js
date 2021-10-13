// https://www.codewars.com/kata/5a353a478f27f244a1000076/train/

import fetch from "node-fetch";

async function sayJoke(apiUrl, jokeId) {
    let jokes = fetch(apiUrl, {method: 'get'})
        .then(response => response.json())
        .then(j => j.jokes)
    if (jokes === undefined) throw new Error(`No jokes at url: ${apiUrl}`);
    let joke = jokes.filter(x => x.id === jokeId)[0];
    if (joke === undefined) throw new Error(`No jokes found id: ${jokeId}`)
    else return {
        saySetup: () => joke.setup,
        sayPunchLine: () => joke.punchLine
    };
}