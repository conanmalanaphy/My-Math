const { add,
    subtract,
    multiply,
    divide,
    exponent } = require('./simpleOperations/simpleOperations')

const myMath = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    exponent: exponent
}

module.exports = { ...myMath }