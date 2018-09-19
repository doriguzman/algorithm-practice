// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21


const reverseInt= num=>{
let result=0;
let number= num 

while (number){
    result = result*10;
    result+=number %10
    number = Math.floor(number/10)
}

return result

}

console.log(reverseInt(123))

