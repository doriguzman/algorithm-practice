/*
    Instructions:
    Please implement the top_k_words function to satisfy the following requirements:

      1) Given a string and integer return the top k words by frequency.
         Examples:
           String[] top_k_words("It's a dog eat dog world", 1) => ["dog"]
           String[] top_k_words("Hello New York, New York", 2) => ["new", "york"]
           String[] top_k_words("A poem about Mary. Mary had a little lamb, its fleece was white as snow; And everywhere that Mary went the lamb was sure to go.", 4) => ["mary", "lamb", "was", "a"]
      2) Treat uppercase and lowercase words as the same word.
      3) Remove punctuation.
      4) Once you have a working solution sorting top k words by frequency please
         apply an alphabetical secondary sort.
         Example:
           In the above example, ["mary", "lamb", "was", "a"] is correctly sorted by
           frequency.
             [["mary", 3], ["lamb", 2], ["was",2], ["a", 2]]
           Sorting by frequency, then alphabetical should yield
             [["mary", 3], ["a", 2], ["lamb",2], ["was", 2]]
           The final result should look like this:
             ["mary", "a", "lamb", "was"]
      5) As a caller of your function, I decide to call it with `top_k_words(str, -2)`. Calling `top_k_words` with `-2` does not yield any valid output. Modify your solution to handle this input.

    Feel free to use Google to check Javascript syntax and functionality

    You have 60 minutes to complete the problem  Please email arawding@handy.com once you have completed the problem.
*/

//pseudocode:
//input is the string and the amount of words we want to return?
//make the entire string lowercase  & filter out puntuation 
//sort first by frequency of word and then alpabetically
//base case is if k_words === -2 

var _ = require('underscore')

function top_k_words(str, k_words) {
  
  if (k_words <= 0){
    return 'invalid integer'
  };

  
  let string= str.toLowerCase().replace(/[^\w\s]/g,"");
  //next split string into an array 
  let strArray=string.split(' ').sort();

  
//creating an object with the word and the frequency
//forEach on the array to create the object

  let obj={};
  
  strArray.forEach((elem)=>{
    if (obj[elem]){
        obj[elem]++
    }else{
      obj[elem] =1
      
    } 
  });
   //obj is created; so now have to create a new object? with max of k_words and then order it 
  
  let objCount=k_words;
  // get the min/maxes of the obj
  //filter through the obj and see if the elem is <max but >min and push those// and keep a count
  
  //get an array of the object values
  
  let objArrValues= Object.values(obj);
  let min= Math.min(...objArrValues);
  let max= Math.max(...objArrValues);
  
  //loop through the object now;
  let ans=[];
  
  //pushing the highest count into the array
  
  for (var key in obj){
    if (obj[key]> min && obj[key]<=max && objCount>=0){
      ans.push([key,obj[key]])
      delete obj[key]
      objCount--
    }
  };

  for (var key in obj){
    if(objCount>0){
      ans.push([key,obj[key]])
      objCount--
      }
    };
  
  ans.sort(function(a,b){
    return b[1]-a[1]
  })
  
  //need to just bring back the array of words 
  
 let result= ans.map((elem)=>{
   return elem[0]
    
  })

  return result
  
}

var str = "Two vast and trunkless legs of stone Stand in the desert. Near them, on the sand, Half sunk, a shattered visage lies, whose frown, And wrinkled lip, and sneer of cold command, Tell that its sculptor well those passions read Which yet survive, stamped on these lifeless things, The hand that mocked them and the heart that fed: And on the pedestal these words appear: 'My name is Ozymandias, king of kings: Look on my works, ye Mighty, and despair!' Nothing beside remains. Round the decay Of that colossal wreck, boundless and bare The lone and level sands stretch far away."
console.log(top_k_words(str,10));
console.log(top_k_words(str,-2));
console.log(top_k_words("A poem about Mary. Mary had a little lamb, its fleece was white as snow; And everywhere that Mary went the lamb was sure to go.", 4));