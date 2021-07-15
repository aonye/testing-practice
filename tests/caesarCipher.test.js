const caesarCipher = require('../code/caesarCipher.js');

test('Basic test', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('Uppercase and number test', () => {
    expect(caesarCipher('AbC0', 3)).toBe('DeF3');
});

test('Wrapping test', () => {
    expect(caesarCipher('zZV9', 1)).toBe('aAW0');
});

test('Extra character test', () => {
    expect(caesarCipher('xX9@@-=/34', 3)).toBe('aA2@@-=/67');
});

test('Very large shift', () => {
    expect(caesarCipher('ABCD1234 abcd', 502)).toBe('IJKL3456 ijkl');
});

test('Invalid', () => {
    expect(caesarCipher('abc', '')).toBeUndefined();
});
