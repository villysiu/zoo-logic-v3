import Animal from "./Animal"
import Token from "./Token"
import { memo } from "react"

const GameGrid =memo( ({arr, setGameBoard, setTokenCount, fixed}) =>{
    console.log("gamegrid")

    
    return(
        <table width='100%' height='100%'>
            <tbody>
                {arr.map((rows, rid)=>(
                    <tr className='square h' key={rid}>
                       
                        {rows.map((val, cid)=>(
                            fixed.has(JSON.stringify([rid,cid])) ? 
                            <td key={cid} className='square w' > <Animal animalId={val} /> </td> :
                            <Token key={cid} animalId={val} rid={rid} cid={cid} setGameBoard={setGameBoard} setTokenCount={setTokenCount} />
                        ))}
                    </tr>
                ))}
            </tbody>    
        </table>
    )
})
export default GameGrid