const { twoSum } = require('../twoSum');

describe('twoSum', () => {
    it('should return the indices of the two numbers such that they add up to target', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([2, 5, 6, 7, 1, 3, 9], 3)).toEqual([0, 4]);
        expect(twoSum([2, 5, 6, 7, 1, 3, 9], 14)).toEqual([1, 6]);
    });
});
