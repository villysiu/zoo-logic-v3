// import { useState, useEffect } from 'react';


// export const useWindowSize = () => {
        
//     const [windowSize, setWindowSize] = useState({
//       width: undefined,
//       height: undefined,
//     });

//     useEffect(() => {
//       function handleResize() {
        
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       }
      
//       window.addEventListener("resize", handleResize);
      
//       handleResize();
      
//       return () => window.removeEventListener("resize", handleResize);
//     }, []); 

//     return windowSize;
//   }



export const getLevel = () => {
    if(!localStorage.getItem('level')){
        localStorage.setItem('level', 1)
        return 1
    }
   
    return parseInt(localStorage.getItem('level'))
}

  export const countTokens = arr =>{
    let count = [9, 3, 3, 3]
    for(let r=0;r<arr.length;r++){
        for(let c=0;c<arr[0].length;c++) {

            let idx=arr[r][c]
            count[idx]-=1
        }
    }
    return count;
}

// [[[2,1],[3,1],[1,1]],[[3,2],[0,0],[1,1]]],
export const checkBoard = (arr, headers) =>{
    for(let c=0;c<3;c++){
        if(headers[0][c][0]===0) continue;
        let count=0
        
        for(let r=0;r<3;r++){
        
            if(arr[r][c]===headers[0][c][0])
            count++
        }
        if(count!==headers[0][c][1])
            return false
    }
    for(let r=0;r<3;r++){
        if(headers[0][r][0]===0) continue;
        let count=0
        for(let c=0;c<3;c++){
            if(arr[r][c]===headers[1][r][0])
                count++
        }
        if(count!==headers[1][r][1]) return false
    }
    return true
}