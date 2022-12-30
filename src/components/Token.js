import { memo, useCallback } from "react"
import Animal from "./Animal"
const Test = memo(({animalId, rid, cid, setGameBoard, setTokenCount}) =>{
    // console.log("Token")

    const handleClick=useCallback((rid, cid, animalId)=>{
        let prevId=animalId
        setTokenCount(prev=>{
            
            let currId=animalId
            let arr=[...prev]
            do{
                currId=(currId+1)%4
                
            }while(arr[currId]===0)
    
            arr[animalId]+=1
            arr[currId]-=1
            prevId=currId
            return arr
        })
        setGameBoard(prev=>{
            let arr=[]
            for(let r of prev){
                arr.push(r.slice())
            }
            arr[rid][cid] = prevId
            return arr
        })
    }, [setTokenCount,setGameBoard])
   
    return(
        <td key={cid} className='square' onClick={()=>handleClick(rid, cid, animalId)}> <Animal animalId={animalId} /> </td>
    )
})
export default Test