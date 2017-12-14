const {expect} = require('chai')
const {computeDistance, computeLevel, computeLevelMaxDistance} = require('./3a')

describe('3a', () => {
    describe('computeDistance', () => {
        it('1 is 0', () => expect(computeDistance(1)).to.equal(0))
        it('12 is 3', () => expect(computeDistance(12)).to.equal(3))
        it('23 is 2', () => expect(computeDistance(23)).to.equal(2))
        it('81 is 8', () => expect(computeDistance(81)).to.equal(8))
        it('1024 is 31', () => expect(computeDistance(1024)).to.equal(31))
        it('325489 is 552', () => expect(computeDistance(325489)).to.equal(552))
    })

    describe('computeLevel', () => {
        it('1 is 0', () => expect(computeLevel(1)).to.eql([0, 1]))
        it('2 is 1', () => expect(computeLevel(2)).to.eql([1, 2]))
        it('9 is 1', () => expect(computeLevel(9)).to.eql([1, 2]))
        it('10 is 2', () => expect(computeLevel(10)).to.eql([2, 10]))
        it('25 is 2', () => expect(computeLevel(25)).to.eql([2, 10]))
        it('26 is 3', () => expect(computeLevel(26)).to.eql([3, 26]))
    })

    describe('computeLevelMaxDistance', () => {
        it('0 is 0', () => expect(computeLevelMaxDistance(0)).to.eql(0))
        it('1 is 2', () => expect(computeLevelMaxDistance(1)).to.eql(2))
        it('2 is 4', () => expect(computeLevelMaxDistance(2)).to.eql(4))
        it('3 is 6', () => expect(computeLevelMaxDistance(3)).to.eql(6))
        it('4 is 8', () => expect(computeLevelMaxDistance(4)).to.eql(8))
    })
})