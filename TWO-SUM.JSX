//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

//what do we do when theres none in the nums that equal the target? ===> empty array
//can have duplicates but indices can't be used twice

let nums = [15, 2, 7, 3];
let target = 9;

const twoSum = (array, target) => {
  for (var i = 0; i < array.length; i++) {
    for (var j = i+1; j < array.length; j++) {
      let sum = array[i] +array[j];
      if (sum === target) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(twoSum(nums, target));



const twoSum2= (array,target)=>{

  let hash={}
//going to create hash table with the element and its id
//using a for loop to create the hash 
for (var i=0; i<array.length; i++){
  hash[array[i]]=i

}


for (var i =0; i<array.length; i++){
  let complement= target - array[i]

  if (hash[complement] && hash[complement]!==i){
    return([array[i], complement])
  }
}
//for loop iterate through the array again and check if each element's
//complement is within the hash and return 

}

console.log(twoSum2(nums,target))