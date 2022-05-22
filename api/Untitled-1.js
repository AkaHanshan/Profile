const f = (arr)=>{
    let sum = 0
    const len = arr.length
    for(let i=0;i<len;i++){
        sum+=arr[i]
    }
    console.log(sum)
    let suml=0
    sum -= arr[0]
    for(let j =1;j<len-1;j++){
        suml += arr[j-1]
        sum  = sum - arr[j]
        console.log(suml,sum)
        if(suml === sum){
            return j
        }
    }
    
}

console.log(f([1,2,3,3]))