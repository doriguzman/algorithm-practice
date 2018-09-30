// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPre = array => {
  array.sort();
  let first= array[0].split('')
  let last= array[array.length-1].split('')
  let len=Math.min(first.length, last.length);
  let i =0


  while (i < len && first[i] == last[i]) i++;
    return array[0].substring(0, i);


};

console.log(longestCommonPre(["flower", "flow", "flight"]));
console.log(longestCommonPre(["dog", "racecar", "car"]));
console.log(longestCommonPre(["abca", "aba", "aaab"]));
console.log(longestCommonPre(["aca","cba"]))
console.log(longestCommonPre(['aa', 'aa']))
