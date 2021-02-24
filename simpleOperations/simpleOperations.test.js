const {
    add,
    subtract,
    multiply,
    divide,
    exponent } = require('./simpleOperations')

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('adding 3 - 2 should return 1', () => {
        expect(subtract(3, 2)).toBe(1);
    });
    test('adding 3 * 7 should return 21', () => {
        expect(multiply(3, 7)).toBe(21);
    });
    test('adding 15 / 3 should return 5', () => {
        expect(divide(15, 3)).toBe(5);
    });
    test('adding 3 ** 3 should return 27', () => {
        expect(exponent(3, 3)).toBe(27);
    });
})