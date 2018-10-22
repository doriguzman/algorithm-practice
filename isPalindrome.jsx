const isPalindrome = string => {
  let newString = "";
  //base case
  if (string === "") {
    return true;
  }

  //get rid of the spaces and special characters

  string.toLowerCase().split("").forEach(elem => {
      if (/^[a-zA-Z]+$/.test(elem)) {
        newString += elem;
      }
    });


  let length = newString.length - 1;

  //palindrome is checking if a sentence is the same forwards and backwards

  for (var i = 0; i <= length; i++) {
    if (newString[i] !== newString[length - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

console.log(isPalindrome("race a car"));
