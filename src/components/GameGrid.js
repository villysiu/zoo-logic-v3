import Animal from "./Animal"

const GameGrid = ({gameboard, fixed, dispatch})=>{
    
    const handleClick=(row, col, val)=>{
        dispatch({type: 'CLICK', payload: {r: row, c:col }})
    }
    const FixedAnimal = ({cid, val}) =>{
        return (
            <div className='game_box animal' style={{opacity: '50%'}} > 
                <Animal animalId={val} />
            </div> 
        )
    }
    const AnimalInput = ({rid, cid, val}) =>{
        return (
            <div className='game_box animal' onClick={()=>handleClick(rid, cid)}> 
                <Animal animalId={val} />
            </div>
        )
    }
    return(
        <>
            {gameboard.map((rows, rid)=>(
                <div key={rid} className='gameboard_row'>
                    
                    {rows.map((val, cid)=>(
                        <div key={cid} >
                        {
                            fixed.has(`[${rid},${cid}]`) ? 
                                <FixedAnimal cid={cid} val={val} />
                                :
                                <AnimalInput rid={rid} cid= {cid} val={val} />
                        }
                        </div>
                        
                    ))}
                </div>
            ))}
        </>
    )
}
export default GameGrid