
import { Button } from "react-bootstrap"
const GameLevel = ({gameId, dispatch}) => {

    const handleReset = () => {
        dispatch({type: 'RESET'})
    }

    return (
        <div className='game_box level'>
            Level {gameId}<br/>
            <Button variant="success" size="sm" onClick={handleReset}>
                Reset
            </Button>
        </div>
    )
}
export default GameLevel