const capitalize = require('../code/capitalize.js');

test("String no spaces", () => {
    expect(capitalize("heLloworld")).toBe("HeLloworld");
});

test("String already capitalized", () => {
    expect(capitalize("HeLlo wOrLd")).toBe("HeLlo wOrLd");
});

test("String with spaces", () => {
    expect(capitalize("heLlo wOrLd")).toBe("HeLlo wOrLd");
});

test("Not a string", () => {
    expect(capitalize(2)).toBe(2);
});

test("Empty string", () => {
    expect(capitalize('')).toBe('');
});