'use strict'

const R = require('ramda')
const fs = require('fs')

function isPassphraseValid(phrase) {
    const words = phrase.split(' ')
    const sortLetters = x => x.split('').sort().join('')
    const sortedWords = words.map(sortLetters)
    return R.uniq(sortedWords).length === words.length
}

const phrases = fs.readFileSync('./4a.words.txt').toString().split('\n')
const validCount = phrases.filter(isPassphraseValid).length

console.log(`${validCount} phrases are valid`)