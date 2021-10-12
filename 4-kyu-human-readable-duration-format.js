// https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    const convertedTime = convertTime(seconds);
    if (convertedTime.length === 1) return convertedTime[0];
    else if (convertedTime.length === 2) return convertedTime.join(' and ');
    else return `${convertedTime.slice(0, -1).join(', ')} and ${convertedTime[convertedTime.length - 1]}`;
}

function convertTime (seconds) {
    const timeChunks = {
        year: 365 * 24 * 3600,
        day: 24 * 3600,
        hour: 3600,
        minute: 60,
        second: 1
    }
    const actualTime = [];
    let time = seconds;
    for (let chunk in timeChunks) {
        const timeChunk = ~~(time / timeChunks[chunk]);
        if (timeChunk) actualTime.push(`${timeChunk} ${chunk}${'s'.repeat(Boolean(timeChunk > 1))}`)
        time %= timeChunks[chunk];
    }
    return actualTime;
}