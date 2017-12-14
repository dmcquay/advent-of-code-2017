'use strict'

const R = require('ramda')
const fs = require('fs')

function isPassphraseValid(phrase) {
    const words = phrase.split(' ')
    return R.uniq(words).length === words.length
}

const phrases = fs.readFileSync('./4a.words.txt').toString().split('\n')
const validCount = phrases.filter(isPassphraseValid).length

console.log(`${validCount} phrases are valid`)