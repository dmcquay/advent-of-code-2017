const isEvenlyDivisible = (a, b) => a % b === 0 || b % a === 0

const getPairs = nums => {
    const result = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let c = i + 1; c < nums.length; c++) {
            result.push([nums[i], nums[c]])
        }
    }
    return result
}

const findEvenlyDivisiblePair = (pairs) => {
    return pairs.find(([a, b]) => isEvenlyDivisible(a, b))
}

const maxDividedByMin = (nums) => {
    return Math.max(...nums) / Math.min(...nums)
}

const sum = nums => nums.reduce((sum, num) => sum + num, 0)

module.exports = {
    isEvenlyDivisible,
    findEvenlyDivisiblePair,
    getPairs,
    maxDividedByMin,
    sum
}