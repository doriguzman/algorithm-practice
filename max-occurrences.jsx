const maxOccurrences = (string, maxLength, minLength, maxUnique) => {
  if (string.length === 0 || string === null) {
    return 0;
  }

  let maxfrequency = 1;
  let obj = {};
  let greatestValue=0
  let greatestKey;

  for (var i = 0; i <= string.length; i++) {
    for (var j = minLength; j <= string.length; j++) {
      if (j > i && j - i <= maxUnique && j - i > 1) {
        let substring = string.substring(i, j);
        if (obj[substring]) {
          obj[substring]++;
        } else {
          obj[substring] = 1;
        }
      }
    }
  }

  for (var key in obj){
      if (obj[key]>greatestValue){
        greatestValue=obj[key]
        greatestKey=key
      }
  }

  return [greatestKey, greatestValue]
};

console.log(maxOccurrences("abcde", 5, 2, 3));

console.log(
  maxOccurrences(
    "acd0a55b171241cc13afc7135acd09d609f9e4928e18908e6f6fb5574b4ac13731f993031a13f",
    4,
    2,
    4
  )
);
