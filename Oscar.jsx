// let array1 = ["hi", "bye"];
// let array2 = ["hello", "there"];

// const checker = (arr, arr2) => {
//   let count = 0;

//   //if the arrays are the same length
//   for (var i = 0; i < array1.length; i++) {
//     if (array2[i].length >= array1[i].length) {
//       array2[i].split('').forEach(elem => {
//         if (!array1[i].includes(elem)) {
//           count++;
//         }
//       });
//       console.log("updated count", count);//should be 4 //3
//     } else {
//       array1[i].forEach(elem => {
//         if (!array2[i].includes(elem)) {
//           count++;
//         }
//       });
//       console.log("updated count", count);
//     }
//   }

//   return count;// return 7
// };

// console.log(checker(array1, array2));



// Anagram Difference 
//an anagram is a word whose characters can be rearranged to create another word.
//given two string, we want to know the minimum number of characters in either string 
//that we must modify to make the two string anagrams. 
//if its not possible to make the two strings anagrams, we consider this number to be -1

//tea and ate are anagrams, need to modify 0 char
//tea and toe are not anagrams, need to modify one char
//acts and act are not anagrms and cant be converted bc they have diff # of chars

let a = ["a", "jk", "abb", "mn", "abc"];
let b = ["bb", "kj", "bbc", "op", "def"];
// a vs bb returns -1 bc not same length
//jk vs kj returns 0
//abb vs bbc returns 1 bc need to modify one etc

const getMinDifference = (arr1, arr2) => {
  let ans = [];

  for (var i = 0; i < a.length; i++) {
    let count = 0;
    if (arr1[i].length !== arr2[i].length) {
      ans.push(-1);
    } else {
      arr2[i].split("").forEach(elem => {
        if (arr1[i].includes(elem)) {
          console.log("inside the if statement", elem, arr1[i]);
          let index = arr1[i].indexOf(elem);
          console.log("INDEX", index);
          arr1[i] = arr1[i].slice(0, index) + arr1[i].slice(index + 1);
        } else {
          count++;
        }
      });
      ans.push(count);
      count = 0;
    }
  }

  return ans;
};

console.log(getMinDifference(a, b));
