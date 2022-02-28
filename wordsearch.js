const { transpose, diagonal } = require('./helper')

const wordSearch = (letters, word) => { 
    if(letters.length !== 0 && Array.isArray(letters)) {
        const horizontalJoin = letters.map(ls => ls.join(''));
        const verticalJoin = transpose(letters).map(ls => ls.join(''));
        const diagonalJoin = diagonal(letters).join('');
        const reverseJoin = letters.map(ls => ls.reverse().join(''));

        for (l of horizontalJoin) {
            if (l.includes(word)) return true
        }
        for (l of verticalJoin) {
            if (l.includes(word)) return true
        }
        for (l of reverseJoin) {
            if (l.includes(word)) return true
        }
        console.log('diagonal: ', diagonalJoin, 'word: ', word)
        if (diagonalJoin === word) return true

    }
    return false
}

module.exports = wordSearch