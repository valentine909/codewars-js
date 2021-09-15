// https://www.codewars.com/kata/handshake-problem

function getParticipants(handshakes) {
    if (handshakes < 2) return handshakes + 1;
    let n = 2;
    while (true) {
        if (n * (n - 1) / 2 < handshakes) n += 1;
        else return n;
    }
}
