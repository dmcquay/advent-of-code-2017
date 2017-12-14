const {computeLevel} = require('./3a')

function buildGrid(size) {
    let result = []
    for (let i = 0; i < size; i++) {
        result.push([])
    }
    return result
}

function expandGrid(grid, delta) {
    const newGrid = buildGrid(grid.length + (delta * 2))
    for (let i = 1; i <= grid.length * grid.length; i++) {
        set(newGrid, i, get(grid, i))
    }
    return newGrid
}

function calculateCoordsForPos(gridSize, pos) {
    let x = Math.floor(gridSize / 2)
    let y = x

    if (pos === 1)
        return [x, y]

    const [level, levelStart] = computeLevel(pos)
    const maxMovementPerSide = level * 2
    let movementsRemaining = pos - levelStart
    let movements
    x += level
    y += Math.max(0, level - 1)

    // up
    movements = Math.min(maxMovementPerSide - 1, movementsRemaining)
    y -= movements
    movementsRemaining -= movements

    // left
    movements = Math.min(maxMovementPerSide, movementsRemaining)
    x -= movements
    movementsRemaining -= movements

    // down
    movements = Math.min(maxMovementPerSide, movementsRemaining)
    y += movements
    movementsRemaining -= movements

    // right
    movements = Math.min(maxMovementPerSide, movementsRemaining)
    x += movements

    return [x, y]
}

function get(grid, pos) {
    const [x, y] = calculateCoordsForPos(grid.length, pos)
    return grid[y][x]
}

function set(grid, pos, val) {
    const [x, y] = calculateCoordsForPos(grid.length, pos)
    grid[y][x] = val
}

function getSurroundingCells(gridSize, pos) {
    const [x, y] = calculateCoordsForPos(gridSize, pos)
    return [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
        [x - 1, y - 1],
        [x + 1, y + 1],
        [x - 1, y + 1],
        [x + 1, y - 1]
    ]
}

function getSumOfCells(grid, cells) {
    const result = cells
        .map(([x, y]) => parseInt(grid[y] && grid[y][x]) || 0)
        .reduce((sum, val) => sum + val, 0)
    return result
}

function isPositionOffGrid(gridSize, pos) {
    const [x, y] = calculateCoordsForPos(gridSize, pos)
    return x < 0 || y < 0 || x > gridSize - 1 || y > gridSize - 1
}

function findValLargerThan(val) {
    let grid = buildGrid(10)
    let pos = 2

    set(grid, 1, 1)

    while (true) {
        const cells = getSurroundingCells(grid.length, pos)
        const nextVal = getSumOfCells(grid, cells)
        if (nextVal > val)
            return nextVal
        if (isPositionOffGrid(grid.length, pos))
            grid = expandGrid(grid, 10)
        set(grid, pos, nextVal)
        pos++
    }
}

module.exports = {
    buildGrid,
    expandGrid,
    get,
    set,
    getSurroundingCells,
    findValLargerThan,
    isPositionOffGrid,
    getSumOfCells
}