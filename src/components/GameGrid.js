import Animal from "./Animal"

const GameGrid = ({gameboard, fixed, dispatch})=>{
    // console.log(gameboard)
    const handleClick=(row, col)=>{
        dispatch({type: 'CLICK', payload: {r: row, c:col }})
    }
    return(
        <>
                {gameboard.map((rows, rid)=>(
                    <div key={rid} 
                    className='row-1-col-3'
                    >
                       
                        {rows.map((val, cid)=>(
                            fixed.has(`${rid},${cid}`) ? 
                                <div key={cid} className='row-1-col-1 animal' style={{opacity: '50%'}} > 
                                    <Animal animalId={val} />
                                </div> 
                            :
                            
                            <div key={cid} className='row-1-col-1 animal'
                                onClick={()=>handleClick(rid, cid)}> 
                                <Animal animalId={val} />
                            </div>
                        ))}
                    </div>
                ))}
        </>
    )
}
export default GameGrid