 import { getLevel } from "./functions"; 
 import { getGame, gameCount } from "../data/games";
export const reducer = (state, action)=>{

    switch(action.type){
        
        case 'SETGAME':
            let lv=getLevel()
            let g=getGame(lv)
            return {...state, loading: false, gameId: g.id, header: g.header, board: g.board, ...setupFixedandTokenLeft(g.board)}

        case 'CLICK':
            return {
                ...state, 
                ...updateBoard(
                    state.board.map(r=>[...r]), 
                    action.payload.r, 
                    action.payload.c, 
                    [...state.tokenLeft]
                ) 
            }
            

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

const setupFixedandTokenLeft = (board) =>{
    let tokenLeft=[0,3,3,3]
    let fixed=new Set()
    for(let r=0;r<board.length;r++){
        for(let c=0;c<board[0].length;c++){
            if(board[r][c]!==0){
                tokenLeft[board[r][c]]--;
                tokenLeft[0]++;
                fixed.add(`[${r},${c}]`)
                // fixed.add(r*3 + c)
            }
        }
    }
    // console.log(tokenLeft)
    return {tokenLeft: tokenLeft, fixed: fixed}
}

const updateBoard = (board, r,c, tokenLeft) =>{
    let animalId=(board[r][c]+1)%4
    while(tokenLeft[animalId]===0){
        animalId = (animalId+1)%4
    }
    tokenLeft[animalId]--;
    tokenLeft[board[r][c]]++;
   
    board[r][c]=animalId
    return {board: board, tokenLeft: tokenLeft}
}
