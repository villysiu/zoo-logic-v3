 import { getLevel } from "./functions"; 
 import { getGame, gameCount } from "../data/games";
export const reducer = (state, action)=>{
    // console.log(action.type)
    // console.log(action.payload)
    switch(action.type){
        
        case 'SETGAME':
            let lv=getLevel()
            let g=getGame(lv)
            return {...state, loading: false, gameId: g.id, header: g.header, board: g.board, ...countTokens(g.board)}

        case 'CLICK':
            return {...state, ...updateBoard(state.board.map(r=>[...r]), 
                                    action.payload.r, action.payload.c, 
                                    [...state.tokenLeft]) }

        case 'NEXTGAME':
            const count=gameCount()
            localStorage.setItem('level', state.gameId===count? 1: state.gameId+1)
            return {...state, loading: true}

        case 'RESET':
            return {...state, loading: true}
    
        default:
            break;
    }
}

const countTokens=(board)=>{
    let arr=[0,3,3,3]
    let fixed=new Set()
    for(let r=0;r<board.length;r++){
        for(let c=0;c<board[0].length;c++){
            if(board[r][c]!==0){
                arr[board[r][c]]--;
                arr[0]++;
                fixed.add(`${r},${c}`)
            }
        }
    }
    console.log(arr)
    return {tokenLeft: arr, fixed: fixed}
}

const updateBoard = (board, r,c, tokenLeft) =>{
    let animalId=(board[r][c]+1)%4
    while(tokenLeft[animalId]===0){
        animalId = (animalId+1)%4
    }
    tokenLeft[animalId]--;
    tokenLeft[board[r][c]]++;
   
    board[r][c]=animalId
    console.log(tokenLeft)
    return {board: board, tokenLeft: tokenLeft}
}