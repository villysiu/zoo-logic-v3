 import { getLevel } from "./functions";
 import { getGame } from "../data/games";
export const reducer = (state, action)=>{
    console.log(action.type)
    switch(action.type){
        
        case 'SETGAME':
            const lv=getLevel()
            const g=getGame(lv)
            return {...state, gameId: g.id, header: g.header, board: g.board, ...countTokens(g.board)}

        case 'CLICK':
            return {...state, ...updateBoard(state.board.map(r=>[...r]), 
                                    action.payload.r, action.payload.c, 
                                    [...state.tokenLeft]) }
           

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
    return {board: board, tokenLeft: tokenLeft}
}