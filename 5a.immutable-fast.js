'use strict'

const Immutable = require('immutable')

function jump(state) {
    if (state.get('isIndexInRange') === false) {
        return state.set('error', 'Out of range before jump not allowed')
    }

    const offsets = state.get('offsets')
    const idx = state.get('idx')
    const nextIdx = idx + offsets.get(idx)

    return state.withMutations(mutableState => {
        return mutableState
            .set('offsets', offsets.set(idx, offsets.get(idx) + 1))
            .set('idx', nextIdx)
            .set('isIndexInRange', nextIdx < offsets.size && nextIdx >= 0)
            .set('jumps', (state.get('jumps') || 0) + 1)
    })
}

function getJumpCountUntilOutOfRange(offsets) {
    let state = Immutable.Map({
        offsets,
        idx: 0,
        isIndexInRange: true
    })
    while (state.get('isIndexInRange')) {
        state = jump(state)
    }
    return state.get('jumps')
}

module.exports = {
    jump,
    getJumpCountUntilOutOfRange
}

if (require.main === module) {
    const fs = require('fs')
    const mutableOffsets = fs.readFileSync('./5a.input.txt').toString().split('\n').map(x => parseInt(x, 10))
    const offsets = Immutable.List(mutableOffsets)
    console.time('getJumpCountUntilOutOfRange')
    const jumpCount = getJumpCountUntilOutOfRange(offsets)
    console.timeEnd('getJumpCountUntilOutOfRange')
    console.log(jumpCount)
}