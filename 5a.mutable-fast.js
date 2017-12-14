'use strict'

// 296 times faster!
function mutatingJump(state) {
    if (state.isIndexInRange === false) {
        state.error = 'Out of range before jump not allowed'
        return state
    }

    const newIdx = state.idx + state.offsets[state.idx]
    state.offsets[state.idx]++
    state.idx = newIdx
    state.jumps = (state.jumps || 0) + 1
    state.isIndexInRange = state.idx < state.offsets.length && state.idx >= 0
    return state
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
    jump: mutatingJump,
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