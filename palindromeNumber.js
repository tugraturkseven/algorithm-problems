/*
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

var isPalindrome = function (x) {
    x = x.toString();
    for (let index = 0; index < x.length; index++) {
        if (index == Math.floor(x.length / 2)) {
            return true;
        }
        if (x[index] != x[x.length - index - 1]) {
            return false;
        }
    }
};

console.log(isPalindrome(121));