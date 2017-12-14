const {expect} = require('chai')
const checksum = require('./2b')

describe('2b', () => {
    it('should return the checksum', () => {
        const input = 
              '5 9 2 8\n'
            + '9 4 7 3\n'
            + '3 8 6 5'
        expect(checksum(input)).to.equal(9)
    })
})