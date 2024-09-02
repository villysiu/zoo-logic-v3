import Animal from "./Animal"

const GameGrid = ({gameboard, fixed, dispatch})=>{
    // console.log(gameboard)
    const handleClick=(row, col)=>{
        dispatch({type: 'CLICK', payload: {r: row, c:col }})
    }
    const FixedAnimal = ({cid, val}) =>{
        return (
            <div key={cid} className='game_box animal' style={{opacity: '50%'}} > 
                <Animal animalId={val} />
            </div> 
        )
    }
    const AnimalInput = ({rid, cid, val}) =>{
        return (
            <div key={cid} className='game_box animal' onClick={()=>handleClick(rid, cid)}> 
                <Animal animalId={val} />
            </div>
        )
    }
    return(
        <>
            {gameboard.map((rows, rid)=>(
                <div key={rid}  className='gameboard_row'>
                    
                    {rows.map((val, cid)=>(
                        fixed.has(`[${rid},${cid}]`) ? 
                            <FixedAnimal cid={cid} val={val} />
                            :
                            <AnimalInput rid={rid} cid= {cid} val={val} />
                        
                    ))}
                </div>
            ))}
        </>
    )
}
export default GameGrid