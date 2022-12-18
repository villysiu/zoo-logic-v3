import { useState, useEffect } from 'react';


export const useWindowSize = () => {
        
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      function handleResize() {
        
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
      
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []); 

    return windowSize;
  }

// export const useLevel = () => {
//     const [level, setLevel] = useState(1)
//     useEffect(() =>{
//         if(!localStorage.getItem('level')){
//             localStorage.setItem('level', 1)
//         }else{
//             setLevel(parseInt(localStorage.getItem('level')))
//         }
//     },[])
//     return level;
//   }

export const getLevel = () => {
    if(!localStorage.getItem('level')){
        localStorage.setItem('level', 1)
        return 1
    }
   
    return parseInt(localStorage.getItem('level'))
}

  export const countTokens = arr =>{
    let map = new Map([[1, 3], [2, 3], [3, 3]])
    for(let row of arr){
        for(let item of row) {
            if(item===0) continue;
            let count=map.get(item)
            map.set(item, count-1)
        }
    }
    return Array.from(map)
}

// [[[2,1],[3,1],[1,1]],[[3,2],[0,0],[1,1]]],
export const checkBoard = (arr, headers) =>{
    
    headers=headers.flat()

    const grid=[
        [arr[0][0], arr[1][0],arr[2][0]],
        [arr[0][1], arr[1][1],arr[2][1]],
        [arr[0][2], arr[1][2],arr[2][2]],
        [arr[0][0], arr[0][1],arr[0][2]],
        [arr[1][0], arr[1][1],arr[1][2]],
        [arr[2][0], arr[2][1],arr[2][2]]
    ]
     
    for(let i=0;i<6;i++){
        
        if(headers[i][0]===0) continue;

        let count=0
       
        for(let num of grid[i]){
            if(num===0) return false;
            if(num===headers[i][0]) count++;
        }
        if(count!==headers[i][1]) 
            return false;
    }
        
    return true;
}