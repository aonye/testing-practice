import analyze from '../code/arrayAnalysis';

test('Simple test', () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});

test('One value array', () => {
    expect(analyze([2])).toEqual({
        average: 2,
        min: 2,
        max: 2,
        length: 1,
    });
});

test('Zeros in array', () => {
    expect(analyze([0, 0, 0, 0])).toEqual({
        average: 0,
        min: 0,
        max: 0,
        length: 4,
    });
});

test('Negative numbers', () => {
    expect(analyze([-1, 5, 2, -7])).toEqual({
        average: -0.25,
        min: -7,
        max: 5,
        length: 4,
    });
});

test('Errorneous array values', () => {
    expect(analyze([3, "blue", 6, 7])).toBeUndefined();
});

test('Empty array', () => {
    expect(analyze([])).toBeUndefined();
});

//Will not do check for not array as the method .isArray is not supported
