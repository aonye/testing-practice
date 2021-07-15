const reverseString = require('../code/reverseString.js');

test('String no spaces', () => {
    expect(reverseString('Helloworld')).toBe('dlrowolleH');
});

test('String with spaces', () => {
    expect(reverseString('heLlo woRld')).toBe('dlRow olLeh');
});

test('Already reversed', () => {
    expect(reverseString('dlrow olleH')).toBe('Hello world');
});

test('Not a string', () => {
    expect(reverseString(22)).toBe(22);
});

test('Empty string', () => {
    expect(reverseString('')).toBe('');
});