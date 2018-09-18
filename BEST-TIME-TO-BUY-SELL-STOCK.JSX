// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:
// 7,10,5,9

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

//[7,3,1,5,1,10]==> BUY AT 1 SELL WHEN 5 
//                     PROFIT 4
//                 BUY AT 1 SELL AT 10
//                      PROFIT 9 OVERALL === 13

//7,3, 10, 1 , 10

//i would do base cases first;


const buysell =(array)=>{


    let descending= true;
    let profit=0
    let sold,bought;

    // base case for all descending numbers 
    for (var i =1; i<array.length; i++){
        if (!array[i]<array[i-1]){
        descending =false
        }
    }
    if (descending){
        return profit
    }


    for (var i =1; i<array.length; i++){
        //start sold at not the first index; at index 1 
         sold= Math.max(...(array.slice(i,array.length)))
         bought= Math.min(...array.slice(0, i))  
         console.log(sold,bought)
     
        if (sold-bought> profit){
            profit = sold-bought;
        }
    }

    return profit

}


console.log(buysell([7,10,5,9]))
console.log(buysell([7,1,5,3,6,4]))
// console.log(buysell([7,6,4,3,1]))
// console.log(buysell([5,3,6,4]))

