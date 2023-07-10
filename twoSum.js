
/*
Hi guys hope you all good and fine.
Today we are going to solve a problem from leetcode.
The problem is called two sum.
The problem is very simple and easy to understand.
I will describe the problem in the comment section.
So let's get started.

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Here is the expected outcome of the problem.
By the way this is Co-Pilot from Github.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


To clarify the problem, we will have an array of numbers, we should itarete through that array and find two numbers that add up to the target number.
So in the example above, we have an array of numbers, and the target number is 9.
So we should find two numbers that add up to 9.
So the first number is 2, and the second number is 7.
So 2 + 7 = 9.

The steps to solve the problem are:
1. We should iterate through the array with a for loop.
2. We should have a variable that will hold the first number.
3. We should have a variable that will hold the second number.
4. We should check if the sum of two numbers are equal to the target number.
5. If the sum of two numbers are equal to the target number, we should return the index of the two numbers.

So, lets go.

I think thats all to solve the problem. We may use unit tests for testing the code.
Ok guys thats all for the video. If you like the video, please subscribe to my channel.
If you would like to see more algorith problem solving videos, hit the thumnbs up button.
See you in the next video. Bye bye.

*/

// Lets define some variables and test the function.

var numbers = [2, 7, 11, 15];
var target = 18;

// The function should return [0,1] because 2 + 7 = 9.



var twoSum = function (nums, target) {

    for (let index = 0; index < nums.length; index++) {
        var currNumber = nums[index];
        for (let j = index + 1; index < nums.length; j++) {
            // Why  i use here index + 1 ? The answer is quite simple. Because we should track the next number.
            var result = [];
            if (currNumber + nums[j] == target) {
                result.push(index);
                result.push(j);
                return result;
            }

        }
    }
};

console.log(twoSum(numbers, target));

