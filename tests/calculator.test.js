const calculator = require('../code/calculator.js');

test('Check simple addition', () => {
    expect(calculator.add(2, 5)).toEqual(7);
});

test('Check simple subtraction, negative output', () => {
    expect(calculator.subtract(2, 5)).toEqual(-3);
});

test('multiply, negative input', () => {
    expect(calculator.multiply(-2, 5)).toEqual(-10);
});

test('divide, decimal input', () => {
    expect(calculator.divide(9.5555, 3.6666)).toBeCloseTo(2.61);
});

test('Invalid input', () => {
    expect(calculator.add('blue', 3.5)).toBeUndefined();
});

test('Concat add error', () => { //should always return as a number
    expect(calculator.add('3', 3.5)).toEqual(6.5);
});