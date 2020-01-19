const path = require('path');

module.exports = {
    entry: './src/PicturePuzzle.js',
    output: {
        filename: 'cell.js',
        path: path.resolve(__dirname, 'dist'),
    },
};