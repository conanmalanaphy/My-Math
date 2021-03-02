import  { add,
    subtract,
    multiply,
    divide,
    exponent } from './simpleOperations/simpleOperations';

const myMath = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    exponent: exponent
}

export default { ...myMath }