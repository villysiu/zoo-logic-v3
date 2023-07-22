import { useEffect, useState, useReducer} from "react"

import GameBoard from "./GameBoard";
import TokenCount from './TokenCount';
import WinModal from './WinModal'
import { gameCount } from "../data/games.js";
import { checkBoard } from "./functions";
import {reducer} from './reducer'
const Main = () => {

    console.log("main")
    
    let [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [lastGame, setLastGame] = useState(false);

    const initialState = {gameId: null, header: null, board: [], tokenLeft: [0,3,3,3]}
    const [state, dispatch] = useReducer(reducer, initialState);

    let count=gameCount()
    useEffect(()=>{
        dispatch({type: 'SETGAME'})
        setLoading(false)
    }, [])
    
    const handleReset = () =>{
        dispatch({type: 'SETGAME'})
    }

    const handleClick=(row, col)=>{
        dispatch({type: 'CLICK', payload: {r: row, c:col }})
    }
    if(loading){
        return(<div>LOADING...</div>)
    }

    return (
        <>
       
            {/* {showModal && 
            <WinModal 
                show={showModal} setShow={setShowModal} 
                msg={lastGame ? "Back to game 1" :  "Next level"} 
                setLastGame={setLastGame} 
            /> } */}
           <GameBoard gameId={state.gameId} header={state.header} gameboard={state.board} fixed={state.fixed}
            handleReset={handleReset} handleClick={handleClick} />
            
            <TokenCount tokenCount={state.tokenLeft} />
   
        </>
       
    )
}
export default Main