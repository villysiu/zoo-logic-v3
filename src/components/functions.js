export const getLevel = () => {
    console.log('getting level')

    if(!localStorage.getItem('level')){
        localStorage.setItem('level', 1)
        return 1
    }
    return parseInt(localStorage.getItem('level'))
}

export const checkBoard = (arr, headers) =>{

    console.log("checking board?")

    for(let c=0;c<3;c++){
        if(headers[0][c][0]===0) continue;
        let count=0
        for(let r=0;r<3;r++){
            count+=arr[r][c]===headers[0][c][0]
            if(count>headers[0][c][1])
                return false
        }
        if(count!==headers[0][c][1])
            return false
    }
    for(let r=0;r<3;r++){
        if(headers[0][r][0]===0) continue;
        let count=0
        for(let c=0;c<3;c++){
            count+=arr[r][c]===headers[1][r][0]
            if(count>headers[1][r][1]) 
                return false
        }
        if(count!==headers[1][r][1]) 
                return false
    }
    console.log("true?")
    return true
}