import { Button } from "react-bootstrap"
import AnimalHeader from './AnimalHeader';
import GameGrid from './GameGrid';
import GameLevel from './GameLevel'
const GameBoard = ({gameId, header, gameboard, fixed, dispatch, handleClick}) =>{
    console.log('gameboard')

    
    return(
        <div className="gameboard">
                
            <div className='row-1-col-4'>
                <GameLevel gameId = {gameId} dispatch={dispatch} />
                <AnimalHeader arr={header[0]} />
                
            </div>
            <div className='row-3-col-4'>
                <div className='row-3-col-1'>
                    <AnimalHeader arr={header[1]} />
                </div>
                <div className='row-3-col-3'>
                    <GameGrid gameboard={gameboard} fixed={fixed} handleClick={handleClick} />
                </div>
            </div>
        
        </div>
    )
}
export default GameBoard