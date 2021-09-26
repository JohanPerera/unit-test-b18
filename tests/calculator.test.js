var calculator = require('../calculator');

test("adds 1 and 2 and returns 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});