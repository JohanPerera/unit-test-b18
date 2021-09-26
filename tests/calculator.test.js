var calculator = require('../calculator');

test("adds 1 and 2 and returns 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("div 20 from 5 and returns 4", () => {
    expect(calculator.division(20, 5).toBe(4));
});

test("Sub 3 from 13 and returns 10", () => {
    expect(calculator.subtract(13, 3).toBe(10));
});

test("mul 3 by 4 and returns 12", () => {
    expect(calculator.multiply(4, 3).toBe(12));
});