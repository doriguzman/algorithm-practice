const keypadLetters = string => {
  const obj = {
    "2": { 1: "a", 2: "b", 3: "c" },
    "3": { 1: "d", 2: "e", 3: "f" },
    "4": { 1: "g", 2: "h", 3: "i" },
    "5": { 1: "j", 2: "k", 3: "l" },
    "6": { 1: "m", 2: "n", 3: "o" },
    "7": { 1: "p", 2: "q", 3: "r", 4: "s" },
    "8": { 1: "t", 2: "u", 3: "v" },
    "9": { 1: "w", 2: "x", 3: "y", 4: "z" },
    "0": { 1: " " }
  };

  let count = 1;
  let result = "";

  for (var i = 1; i < string.length; i++) {
    if (string[i] === " ") {
      result += obj[string[i - 1]][count];
      count = 1;
      i++;
    } else if (string[i] !== string[i - 1]) { 
      result += obj[string[i - 1]][count];
      count = 1;
      if (i === string.length - 1) {          
        result += obj[string[i]][count];
      }
    } else if (string[i] === string[i - 1]) { 
      count++;

      if (i === string.length - 1) { 
        result += obj[string[i]][count];
      }
    }
  }
  return result;
};

console.log(keypadLetters("44 444")); //hi
console.log(keypadLetters("999337777"));
console.log(keypadLetters('44204420442'))
console.log(keypadLetters('2 22 2223 33 3334 44 4445 55 5556 66 666'))
