
import Token from "./Token"
const GameGrid = ({arr, setGameBoard, tokenLeft}) =>{
    
    return(
        <table width='100%' height='100%'>
            <tbody>
                {arr.map((row, rid)=>(
                    <tr className='square h' key={rid}>
                       
                        {row.map((col, cid)=>(
                            <Token key={cid} animalId={col} coordinate={[rid, cid]} setGameBoard={setGameBoard} tokenLeft={tokenLeft}/>
                        ))}
                    </tr>
                ))}
            </tbody>    
        </table>
    )
}
export default GameGrid