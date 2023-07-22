import { Button } from "react-bootstrap"
import AnimalHeader from './AnimalHeader';
import GameGrid from './GameGrid';
const GameBoard = ({gameId, header, gameboard, fixed, handleReset, handleClick}) =>{
    console.log('gameboard')
    return(
        <div className="gameboard">
                
            <div className='row-1-col-4'>
                <div className='row-1-col-1'>
                    Level {gameId}<br/>
                    <Button variant="success" size="sm" onClick={handleReset}>
                        Reset
                    </Button>
                </div>
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