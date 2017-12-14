'use strict'

function jump(state) {
    if (state.isIndexInRange === false) {
        return {
            ...state,
            error: 'Out of range before jump not allowed'
        }
    }

    const offsets = [...state.offsets]
    offsets[state.idx]++
    const idx = state.idx + state.offsets[state.idx]
    return {
        offsets,
        idx,
        isIndexInRange: idx < state.offsets.length && idx >= 0,
        jumps: (state.jumps || 0) + 1
    }
}

function getJumpCountUntilOutOfRange(offsets) {
    let state = {
        offsets,
        idx: 0,
        isIndexInRange: true
    }
    while (state.isIndexInRange) {
        state = jump(state)
    }
    return state.jumps
}

module.exports = {
    jump,
    getJumpCountUntilOutOfRange
}

if (require.main === module) {
    const fs = require('fs')
    const offsets = fs.readFileSync('./5a.input.txt').toString().split('\n').map(x => parseInt(x, 10))
    console.time('getJumpCountUntilOutOfRange')
    const jumpCount = getJumpCountUntilOutOfRange(offsets)
    console.timeEnd('getJumpCountUntilOutOfRange')
    console.log(jumpCount)
}