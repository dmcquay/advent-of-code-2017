const {expect} = require('chai')

const {
    buildGrid,
    expandGrid,
    get,
    set,
    getSurroundingCells,
    getSumOfCells,
    isPositionOffGrid,
    findValLargerThan
} = require('./3b')

describe('3b', () => {
    describe('buildGrid', () => {
        context('when no initial value', () => {
            it('should return an empty grid of the specified size', () => {
                expect(buildGrid(3)).to.eql([[],[],[]])
            })
        })
    })

    describe('get', () => {
        context('when grid 0-25', () => {
            const grid = [
                [17, 16, 15, 14,  13],
                [18,  5,  4,  3,  12],
                [19,  6,  1,  2,  11],
                [20,  7,  8,  9,  10],
                [21,  22, 23, 24, 25]
            ]

            for (let i = 1; i <= 25; i++) {
                it(i + '', () => expect(get(grid, i)).to.equal(i))
            }
        })
    })

    describe('set', () => {
        context('when 5x5 grid (0-25)', () => {
            for (let i = 1; i <= 25; i++) {
                it(i + '', () => {
                    const grid = [[],[],[],[],[]]
                    set(grid, i, i)
                    expect(get(grid, i)).to.equal(i)
                })
            }
        })
    })

    describe('expandGrid', () => {
        it('expands the grid by the amount specified', () => {
            const grid = [
                [5,  4,  3],
                [6,  1,  2],
                [7,  8,  9]
            ]
            const u = undefined
            const expanded = [
                [],
                [],
                [u, u, 5,  4,  3],
                [u, u, 6,  1,  2],
                [u, u, 7,  8,  9],
                [],
                []
            ]
            expect(expandGrid(grid, 2)).to.eql(expanded)
        })
    })

    describe('getSurroundingCells', () => {
        it('gridSize=3, pos=1', () => expect(getSurroundingCells(3, 1)).to.eql([
            [0,1],
            [2,1],
            [1,0],
            [1,2],
            [0,0],
            [2,2],
            [0,2],
            [2,0]
        ]))
    })

    describe('getSumOfCells', () => {
        it('returns the sum of the cell values', () => {
            const grid = [
                [17, 16, 15, 14,  13],
                [18,  5,  4,  3,  12],
                [19,  6,  1,  2,  11],
                [20,  7,  8,  9,  10],
                [21,  22, 23, 24, 25]
            ]
            const cells = [
                [1, 1], // 5
                [2, 3], // 8
                [4, 4]  // 25
            ]
            expect(getSumOfCells(grid, cells)).to.equal(38)
        })

        it('treats invalid cells as zero value', () => {
            const grid = [
                [5,  4,  3],
                [6,  1,  2],
                [7,  8,  9]
            ]
            const cells = [
                [-1, 2],
                [1, -1],
                [1, 100],
                [0, 0],
                [0, 1]
            ]
            expect(getSumOfCells(grid, cells)).to.equal(11)
        })
    })

    describe('isPositionOffGrid', () => {
        for (let i = 1; i <= 9; i++) {
            it(`${i}`, () => expect(isPositionOffGrid(3, i)).to.be.false)
        }
        for (let i = 10; i <= 50; i++) {
            it(`${i}`, () => expect(isPositionOffGrid(3, i)).to.be.true)
        }
    })

    describe('findValLargerThan', () => {
        it('1 -> 2', () => expect(findValLargerThan(1)).to.equal(2))
        it('2 -> 4', () => expect(findValLargerThan(2)).to.equal(4))
        it('3 -> 4', () => expect(findValLargerThan(3)).to.equal(4))
        it('4 -> 5', () => expect(findValLargerThan(4)).to.equal(5))
        it('9999 -> 13486', () => expect(findValLargerThan(9999)).to.equal(13486))
        it('9999999999 -> 11372992489', () => expect(findValLargerThan(9999999999)).to.equal(11372992489))
        it('325489 -> 330785', () => expect(findValLargerThan(325489)).to.equal(330785))
    })
})