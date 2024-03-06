"use strict";

function findArray(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let start = -1;
  let end = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortedNums[i]) {
      start = i;
      break;
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] !== sortedNums[i]) {
      end = i;
      break;
    }
  }

  if (start == -1 && end == -1) {
    return [-1, -1];
  } else {
    return [start, end];
  }
}

console.log(
  findUnsortedSubarray([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])
);
console.log(findUnsortedSubarray([1, 2, 3, 4, 5]));
console.log(findUnsortedSubarray([1]));
console.log(findUnsortedSubarray([2, 1]));
