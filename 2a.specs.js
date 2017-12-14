const {expect} = require('chai')
const checksum = require('./2a')

describe('2a', () => {
    it('should return the checksum', () => {
        const input = 
              '5 1 9 5\n'
            + '7 5 3\n'
            + '2 4 6 8'
        expect(checksum(input)).to.equal(18)
    })
})