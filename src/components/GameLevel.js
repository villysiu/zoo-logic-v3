
import { Button } from "react-bootstrap"
const GameLevel = ({gameId, dispatch}) => {

    const handleReset = () => {
        dispatch({type: 'RESET'})
    }

    return (
        <div className='row-1-col-1'>
            Level {gameId}<br/>
            <Button variant="success" size="sm" onClick={handleReset}>
                Reset
            </Button>
        </div>
    )
}
export default GameLevel