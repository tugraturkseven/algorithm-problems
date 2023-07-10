/*

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Input: nums = [1,2,3,1]
Output: true


*/

const containsDuplicate = (nums) => {
    let map = {};
    for (let index = 0; index < nums.length; index++) {
        if (map.contains(nums[index])) {
            return true;
        } else {
            map[nums[index]] = 1;
        }
    }
    return false;
}