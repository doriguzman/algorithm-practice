
function isCryptSolution(crypt,solution) {

    let third=crypt[2].split(''); //money
    let first= crypt[0].split('')
    let second= crypt[1].split('')
    let list=[first, second, third]
    let resultArray=['','', '']
  
    console.log(list)
    
    
    let obj ={}
    
    solution.forEach((array)=>{
      obj[array[0]]=array[1]
    })
       
     console.log('obj', obj)
    
    
    for (var i =0; i<list.length; i++){
      list[i].forEach((elem)=>{
        if(obj[elem]){
          resultArray[i]+=obj[elem]
        }
      })
    }
    console.log(resultArray)
    
    
    if ((Number(resultArray[0])+Number(resultArray[1])) === Number(resultArray[2])){
      return true 
    }
      return false
    
  }
    
  
  console.log(isCryptSolution(["SEND", "MORE", "MONEY"], [['O', '0'],
              ['M', '1'],
              ['Y', '2'],
              ['E', '5'],
              ['N', '6'],
              ['D', '7'],
              ['R', '8'],
              ['S', '9']]))
  
  /*
  A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters and digits, such that the given arithmetic equation consisting of letters holds true when the letters are converted to digits.
   
  You have an array of strings crypt, the cryptarithm, and an an array containing the mapping of letters and digits, solution. The array crypt will contain three non-empty strings that follow the structure: [word1, word2, word3], which should be interpreted as the word1 + word2 = word3 cryptarithm.
  
  If crypt, when it is decoded by replacing all of the letters in the cryptarithm with digits using the mapping in solution, the answer is true. If it does not become a valid arithmetic solution, the answer is false.
  
  Example
  
  For crypt = ["SEND", "MORE", "MONEY"] and
  
  solution = [['O', '0'],
              ['M', '1'],
              ['Y', '2'],
              ['E', '5'],
              ['N', '6'],
              ['D', '7'],
              ['R', '8'],
              ['S', '9']]
  the output should be
  isCryptSolution(crypt, solution) = true.
  
  When you decrypt "SEND", "MORE", and "MONEY" using the mapping given in crypt, you get 9567 + 1085 = 10652 which is correct and a valid arithmetic equation.
  */
  