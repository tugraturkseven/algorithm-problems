const { containsDuplicate } = require('../containsDuplicate');
const isContain = containsDuplicate.isContain;

describe('containsDuplicate', () => {
    test('should return true if any value appears at least twice in the array', () => {
        expect(isContain([1, 2, 3, 1])).toBe(true);
    });
    test('should return false if every element is distinct', () => {
        expect(isContain([1, 2, 3, 4])).toBe(false);
    });
    test('should return true if any value appears at least twice in the array', () => {
        expect(isContain([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });
});