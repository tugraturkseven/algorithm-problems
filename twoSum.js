
/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

var numbers = [2, 5, 6, 7, 1, 3, 9];
var target = 4;


var twoSum = function (nums, target) {
    for (let index = 0; index < nums.length; index++) {
        var currNumber = nums[index];


        for (let j = index + 1; j < nums.length; j++) {
            var result = [];
            if (currNumber + nums[j] == target) {
                result.push(index);
                result.push(j);
                return result;
            }
        }
    }
};

module.exports = {
    twoSum: twoSum
};


console.log(twoSum(numbers, target));
