// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//4,-1,2,1,0,1,

const max_subarray= (array)=>{
    let sum= 0;
    let max_ending= 0;

    if (array.every(x=>x<0)){
        return Math.max(...array)
    }

    for (var i =0; i<array.length; i++){
       max_ending = max_ending + array[i]
       if (max_ending < 0){
           max_ending=0;
       }
       if (sum < max_ending){
          
          sum=max_ending
          console.log('max so far', sum)
       }
    }
    return sum
}

console.log(max_subarray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(max_subarray([-1,-2]))