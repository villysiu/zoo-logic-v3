import { useEffect, useState, useReducer} from "react"

import GameBoard from "./GameBoard";
import TokenCount from './TokenCount';
import WinModal from './WinModal'
import { checkBoard } from "./functions";
import {reducer} from './reducer'

const Main = () => {

    console.log("main")
    
    const [winModal, showWinModal] = useState(false);
    const initialState = {
                            loading: true, 
                            gameId: null, 
                            header: null, 
                            board: [], 
                            tokenLeft: [0,3,3,3]
                        }
    const [state, dispatch] = useReducer(reducer, initialState);

    
    useEffect(()=>{
    
        if(state.loading)
            dispatch({type: 'SETGAME'})
    }, [state.loading])

    useEffect(()=>{
        
        if(state.tokenLeft[0]===9 && checkBoard(state.board, state.header)){
            showWinModal(true)
            
        }
    },[state.board, state.header, state.tokenLeft])
    
    if(state.loading){
        console.log("loading ????????")
        return(<div>LOADING...</div>)
    }

    return (
        <>
            <WinModal 
                winModal={winModal} 
                showWinModal = {showWinModal}
                gameId={state.gameId}  
                dispatch = {dispatch}
            /> 
            <GameBoard 
                gameId={state.gameId} 
                header={state.header} 
                gameboard={state.board} 
                fixed={state.fixed}
                dispatch = {dispatch}
            />
            
            <TokenCount tokenLeft={state.tokenLeft} />
   
        </>
       
    )
}
export default Main