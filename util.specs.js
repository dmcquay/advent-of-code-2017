const {expect} = require('chai')
const util = require('./util')

describe('util', () => {
    describe('isEvenlyDivisible', () => {
        it('first evenly divisible by second returns true', () => {
            expect(util.isEvenlyDivisible(6, 3)).to.be.true
        })

        it('second evenly divisible by first returns true', () => {
            expect(util.isEvenlyDivisible(2, 10)).to.be.true
        })

        it('not evenly divisible returns false', () => {
            expect(util.isEvenlyDivisible(2, 3)).to.be.false
        })
    })

    describe('findEvenlyDivisiblePair', () => {
        it('should return the divisible pair', () => {
            const pairs = [
                [5, 9],
                [5, 2],
                [5, 8],
                [9, 2],
                [9, 8],
                [2, 8]
            ]
            expect(util.findEvenlyDivisiblePair(pairs)).to.eql([2, 8])
        })
    })

    describe('getPairs', () => {
        it('returns every combination', () => {
            expect(util.getPairs([1, 2, 3, 4])).to.eql([
                [1, 2],
                [1, 3],
                [1, 4],
                [2, 3],
                [2, 4],
                [3, 4]
            ])
        })
    })

    describe('maxDividedByMin', () => {
        it('when max is first, returns correct result', () => {
            expect(util.maxDividedByMin([8, 2])).to.equal(4)
        })

        it('when max is second, returns correct result', () => {
            expect(util.maxDividedByMin([2, 8])).to.equal(4)
        })
    })

    describe('sum', () => {
        it('returns the sum', () => {
            expect(util.sum([1, 2, 3])).to.equal(6)
        })
    })
})