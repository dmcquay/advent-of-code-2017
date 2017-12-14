'use strict'

const {expect} = require('chai')
const Immutable = require('immutable')

const {jump, getJumpCountUntilOutOfRange} = require('./5a.immutable-fast')

describe('5a', () => {
    describe('#jump', () => {
        it('when in range after jump', () => {
            const state = Immutable.Map({
                offsets: Immutable.List.of(0, 3, 0, 1, -3),
                idx: 0
            })
            const expectedNextState = Immutable.Map({
                offsets: Immutable.List.of(1, 3, 0, 1, -3),
                idx: 0,
                isIndexInRange: true,
                jumps: 1
            })
            expect(jump(state).toJS()).to.eql(expectedNextState.toJS())
        })

        it('when out of range to right after jump', () => {
            const state = Immutable.Map({
                offsets: Immutable.List.of(1, 2, 1),
                idx: 1,
                isIndexInRange: true,
                jumps: 2
            })
            const expectedNextState = Immutable.Map({
                offsets: Immutable.List.of(1, 3, 1),
                idx: 3,
                isIndexInRange: false,
                jumps: 3
            })
            expect(jump(state).toJS()).to.eql(expectedNextState.toJS())
        })

        it('when out of range to left after jump', () => {
            const state = Immutable.Map({
                offsets: Immutable.List.of(1, -2, 1),
                idx: 1,
                isIndexInRange: true,
                jumps: 0
            })
            const expectedNextState = Immutable.Map({
                offsets: Immutable.List.of(1, -1, 1),
                idx: -1,
                isIndexInRange: false,
                jumps: 1
            })
            expect(jump(state).toJS()).to.eql(expectedNextState.toJS())
        })

        it('when out of range before jump', () => {
            const state = Immutable.Map({
                offsets: Immutable.List.of(1, -2, 1),
                idx: -4,
                isIndexInRange: false,
                jumps: 1
            })
            const expectedNextState = Immutable.Map({
                offsets: Immutable.List.of(1, -2, 1),
                idx: -4,
                isIndexInRange: false,
                error: 'Out of range before jump not allowed',
                jumps: 1
            })
            expect(jump(state).toJS()).to.eql(expectedNextState.toJS())
        })
    })

    describe('#getJumpCountUntilOutOfRange', () => {
        it('example 1', () => {
            const offsets = Immutable.List.of(0, 3, 0, 1, -3)
            expect(getJumpCountUntilOutOfRange(offsets)).to.equal(5)
        })
    })
})