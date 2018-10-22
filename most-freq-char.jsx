const mostFrequent = (string)=>{
    let obj={}
    let greatest=0
    let char;

    for (var i =0; i<string.length;i++){
        if (obj[string[i]]){
            obj[string[i]]++
        }else{
            obj[string[i]]=1
        }
    }
    
    for (var key in obj){
        if (obj[key]>greatest){
            greatest=obj[key]
            char=key
        }
    }

    return char



}

console.log(mostFrequent('yeeeerrrrrrrrrrrrr'))