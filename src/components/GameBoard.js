import { Button } from "react-bootstrap"
import AnimalHeader from './AnimalHeader';
import GameGrid from './GameGrid';
import GameLevel from './GameLevel'
const GameBoard = ({gameId, header, gameboard, fixed, dispatch, handleClick}) =>{
    console.log('gameboard')

    
    return(
        <div className="gameboard">
                
            <div className='horizontal_header'>
                <GameLevel gameId = {gameId} dispatch={dispatch} />
                <AnimalHeader arr={header[0]} />
                
            </div>
            <div className='horizontal_header'>
                <div className='vertical_header'>
                    <AnimalHeader arr={header[1]} />
                </div>
                <div >
                    <GameGrid gameboard={gameboard} fixed={fixed} dispatch={dispatch} />
                </div>
            </div>
        
        </div>
    )
}
export default GameBoard