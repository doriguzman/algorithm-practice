// Given a sorted array nums, remove the duplicates in-place such that each element appear only once
//and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place
//with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.
// Clarification:

// Confused why the returned value is an integer but your answer is an array?

// Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

// Internally you can think of this:

// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeDuplicates(nums);

// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

const removedups = array => {
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) !== i) {
      array.splice(i, 1);
      i--;
    }
  }
  return array.length;
};

console.log(removedups([1, 1, 2]));
console.log(removedups([0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4]));

//without methods

const removeDuplicates2 = array => {
  let obj = {};
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }

  for (var key in obj) {
    newArray.push(Number(key));
  }

  console.log(obj);
  console.log(newArray);
};

// console.log(removeDuplicates2([0,0,1,1,1,1,1,2,2,3,3,4]))

const removeDuplicates3 = array => {
  let length = array.length;

  if (length === 1 || length === 0) {
    return array;
  }
  let temp = [array[0]];
  let j = 0;

  for (var i = 1; i < length - 1; i++) {
    if (array[i] !== array[i + 1]) {
      temp[j] = array[i];
      j++;
      temp[j] = array[i + 1];
    }
  }
  return temp;
};

console.log(removeDuplicates3([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates3([2, 2, 2, 2, 2, 2]));
