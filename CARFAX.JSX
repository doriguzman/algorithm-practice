
if ('carfax'){
    let carfax={
        dashify:function(){
            return 'carfax'.split('').join('-')
        }
    }
    console.log( 'hi')
}

console.log('carfax')
console.log('carfax'.dashify()) //should return 'c-a-r-f-a-x'

//goal was to invoke on a string object