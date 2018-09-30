// all I need is the code for a function that takes in one string parameter and returns another string, the details of the code exercise are at the end of this email along with 6 test examples.

// Just copy and paste the function's code and reply to this email.

// I will test your code by calling your function with the same strings as the test examples (along with some tests of my own), expected output is the expected right answer.

// You can write the code in any language you like,
// e.g. php,  python, javascript, java, etc

//input => string
//output=>string

//4[ab]

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

// const decodeString = string => {
//     console.log(string)
// //   console.log("----------------------------------");
//   let stack1 = string.split("");
//   console.log(stack1)
//   let stack2 = [];
//   let result = "";
//   let temp = "";
// // "sd2[f2[e]g]i"
//   while (stack1.length) {
//     let lastElem = stack1.pop();
//     if (stack2.length === 0 && lastElem !== "]" && isNaN(lastElem)) {
//       result = lastElem.concat(result);
//     } else if (lastElem == "]") {
    
//       stack2.push(lastElem);
//     } else if (lastElem !== "[" && isNaN(lastElem)) {
        
//       temp = lastElem.concat(temp);
//     } else if (lastElem === "[") {

//       stack2.pop();
//       lastElem = stack1.pop();

//       if (!isNaN(lastElem)) {
//         temp = temp.repeat(Number(lastElem));
//       }
//       if (stack2.length === 0) {
//         result = temp.concat(result);
//         temp = "";
//       }
//     }
//   }

//   return result;
// };

// console.log(decodeString('100[leetcode]','leetcode'))
// console.log(decodeString('4[ab]'), 'abababab')
// console.log(decodeString('2[b3[a]]'), "baaabaaa")
// console.log(decodeString("sd2[f2[e]g]i"), "sdfeegfeegi");

// console.log(decodeString('z1[y]zzz2[abc]'), "zyzzzabcabc")
// console.log(decodeString('2[a]3[b]4[c]5[d]'), 'aabbbccccddddd')
// console.log(decodeString('2[2[2[b]]]'), "bbbbbbbb")
// console.log(decodeString('10[a]'),' aaaaaaaaaa')

// console.log(decodeString('3[a]2[bc]'))
// console.log(decodeString("2[abc]3[cd]ef"))


