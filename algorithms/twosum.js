/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (temp[need] !== undefined) {
      return [i, temp[need]];
    } else {
      temp[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
