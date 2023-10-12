const Calculator = require("./calculator")

test("adds 1 + 2 to equal 3", () => {
const calc = new Calculator();
expect(calc.add(1, 2)).toBe(3);
})

test("subtracts 5 - 2 to equal 3", () => {
const calc = new Calculator();
expect(calc.subtract(5, 2)).toBe(3);
})

// Implement other tests

test("multiply 5 - 2 to equal 8", () => {
    const calc = new Calculator();
    expect(calc.multiply(5, 2)).toBe(10);
    })