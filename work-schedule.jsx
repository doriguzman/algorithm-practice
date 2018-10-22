//function must return an array of strings that represents all possible valid schedules
//strings must be ordered lexicograhically

// consists of exactly 7 digits ranging from 0 to 8 to represent each day's hours to be workes
//replace the question marks with digits so that the sum of the scheduld hours is exaclty
//the hours you must work in a week

const findSchedules = (workHours, maxDayHours, pattern, result_count) => {
  let patternArr = pattern.split("");
//   console.log(patternArr);

  let difference = workHours;
  let ans = [];
  let q = 0;

  patternArr.forEach(elem => {
    if (elem !== "?") {
      difference -= Number(elem);
    } else {
      q++;
    }
  });
//   console.log(q);
//   console.log(difference); // would be one in first test case

  if (maxDayHours * q === difference) {
    ans = patternArr.map(elem => {
      if (elem === "?") {
        return 8;
      } else {
        return elem;
      }
    });
    return ans;
  }

  if (difference === 1) {
    for (var i = 0; i <= patternArr.length; i++) {
      let array = [...patternArr];

      if (array[i] === "?") {
        array[i] = 1;
        patternArr[i] = 0;
        let updated = array.map(elem => {
          if (elem === "?") {
            return 0;
          } else {
            return elem;
          }
        });
        ans.push(updated);
      }
    }
    return ans;
  }

  //   let combination =factorial(maxDayHours+1)/(factorial(q)* factorial((maxDayHours+1) - (q)))
  //   console.log('combination', combination)

  for (var i = 0; i <= maxDayHours; i++) {
    if (q === 2) {
      let combo = [maxDayHours - i, i];
      let count = -1;
      let updated = patternArr.map(elem => {
        if (elem === "?") {
          count++;
          return combo[count];
        } else {
          return elem;
        }
      });
      ans.push(updated);
    }
  }

  console.log(ans);
};

// const factorial = num => {
//   if (num === 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };

console.log(findSchedules(56, 8,'???8???'))/// 8888888

console.log(findSchedules(3, 2, "??2??00")); // 0020100, 0021000, 0120000,1020000
console.log(findSchedules(24, 4, "08??840")); // 0804840, 081340, 082240, 083140, 084040
