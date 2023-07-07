const palindromeNumber = require('../palindromeNumber');
const isPalindrome = palindromeNumber.isPalindrome;

describe('palindromeNumber', () => {
    it('should return true if the number is palindrome', () => {
        expect(isPalindrome(121)).toBe(true);
        expect(isPalindrome(1221)).toBe(true);
        expect(isPalindrome(12321)).toBe(true);
    });

    it('should return false if the number is not palindrome', () => {
        expect(isPalindrome(123)).toBe(false);
        expect(isPalindrome(1234)).toBe(false);
        expect(isPalindrome(12345)).toBe(false);
    });
});