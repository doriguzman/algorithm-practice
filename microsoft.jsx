function uniqueWords(array, obj) {
    console.log(array)

//return an obj 


    // forEach on the array to construct the obj 
    array.forEach((elem) => {
        if (obj[elem]) {
        obj[elem]++
        } else {
        obj[elem]=1
    };
    });
	return obj;
}


function allTheBooks(arrays, obj) {
if (arrays.length===0){
    return obj
}
let firstElem= arrays.shift()
let object= uniqueWords(firstElem, obj)

   return allTheBooks(arrays, object)
    
}

let book1 = ['the', 'princess', 'is', 'in', 'the', 'castle']
let book2 = ['the', 'princess', 'is', 'in', 'the', 'castle']
let book3 = ['the', 'princess', 'is', 'in', 'the', 'castle']
// console.log(uniqueWords(['the', 'princess', 'is', 'in', 'the', 'castle']))
console.log(allTheBooks([book1, book2, book3],  obj={}))