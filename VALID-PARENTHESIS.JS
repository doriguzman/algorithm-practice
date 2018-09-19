// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

//THIS COULD BE SOLVED USING STACKS

const validparen = string => {
  let dictionary = {
    "]": "[",
    "}": "{",
    ")": "("
  };

  //base case

  if (string === "") {
    return true;
  }

  // let stack1= new Stack;
  // let stack2= new Stack

  let stack1 = string.split("");
  let stack2 = [];

  //second stack has one elem now
  stack2.push(stack1.pop());

  while (stack1.length) {
    if (dictionary[stack2[stack2.length - 1]] === stack1[stack1.length - 1]) {
      stack2.pop();
      stack1.pop();
    } else {
      stack2.push(stack1.pop());
    }
  }
  if (stack2.length) {
    return false;
  }
  return true;

};
console.log(validparen("[()]}"));
