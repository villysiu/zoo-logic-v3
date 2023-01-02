import Animal from "./Animal"
import Token from "./Token"
import { useCallback, memo } from "react"

const GameGrid = ({arr, setGameBoard, setTokenCount, fixed})=>{
    // console.log(arr)

    const handleClick=useCallback((rid, cid, aid)=>{
        let updated=aid
        setTokenCount(arr=>{
            updated=aid
            do{
                updated=(updated+1)%4
            }while((arr[updated]===0))

            return arr.map((count, idx)=>{
                return idx===aid ? count+1 : ( idx===updated ? count-1 : count )

            })
        })

        setGameBoard(arr=>{
            return arr.map((row, r)=>{
                return row.map((val, c)=>{
                    return r===rid && c===cid ? updated : val
                })
            })
        })

        
    }, [])
    
    return(
        <table width='100%' height='100%'>
            <tbody>
                {arr.map((rows, rid)=>(
                    <tr className='square h' key={rid}>
                       
                        {rows.map((val, cid)=>(
                            fixed.has(JSON.stringify([rid,cid])) ? 
                            <td key={cid} className='square w' > <Animal animalId={val} /> </td> :
                            <Token key={cid} aid={val} rid={rid} cid={cid} handleClick={handleClick} />
                        ))}
                    </tr>
                ))}
            </tbody>    
        </table>
    )
}
export default memo(GameGrid);