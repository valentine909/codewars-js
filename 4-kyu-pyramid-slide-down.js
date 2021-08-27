function longestSlideDown(pyramid) {
    for (let i = pyramid.length - 2; i >= 0; i--) {
        let newLine = [];
        for (let j = 0; j < pyramid[i].length; j++) {
            newLine.push(Math.max(pyramid[i][j] + pyramid[i + 1][j], pyramid[i][j] + pyramid[i + 1][j + 1]));
        }
        pyramid[i] = newLine;
    }
    return pyramid[0][0];
}