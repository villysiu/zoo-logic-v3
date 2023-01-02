import Animal from "./Animal"
import Token from "./Token"
import { useCallback, memo } from "react"

const GameGrid = ({arr, handleClick, fixed})=>{
   
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