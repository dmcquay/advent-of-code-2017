function computeDistance(n) {
    if (n === 1) return 0
    const [level, levelStart] = computeLevel(n)
    const levelMax = computeLevelMaxDistance(level)
    const levelMin = levelMax / 2
    let distance = levelMax - 1
    const increment = x => x + 1
    const decrement = x => x - 1
    let operation = decrement

    while (n > levelStart) {
        if (distance === levelMax) operation = decrement
        if (distance === levelMin) operation = increment
        distance = operation(distance)
        n--
    }

    return distance
}

function computeLevel(n) {
    if (n === 1)
        return [0, 1]

    n -= 1
    let level = 1
    let levelSize = 8
    let levelStart = 2

    while (n > levelSize) {
        n -= levelSize
        level++
        levelStart += levelSize
        levelSize += 8
    }

    return [level, levelStart]
}

function computeLevelMaxDistance(level) {
    return level * 2
}

module.exports = {
    computeDistance,
    computeLevel,
    computeLevelMaxDistance
}