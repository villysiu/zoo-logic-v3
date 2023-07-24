import zl1 from "../images/ZL_instructions.gif";
import zl2 from "../images/ZL_gameflow.gif"
import zl3 from "../images/ZL_win.gif"

import hippo from "../images/hippo.png"
import lion from "../images/lion.png"
import zebra from "../images/zebra.png"

import { gameCount } from '../data/games';
export const Instruction =() =>{
    return (
        <div style={{margin: '30px'}}>
            <div>
                <p>Using the principle of Sudoku, place the animal tokesns onto corresponding 
                positions on the board. The game contains {gameCount()} games. It is suitable for
                players age 3 and above. The game can develop children's logicical
                thinking and improve their concentration and patience. </p>

                <p><b>Instruction: </b></p>

                <p>The game board is a 3x3 grid. To the top and left of the gird are the number of animal in corresponding column and row.
                Player clicks on the board to change animal from "blank" 
                to "Hippo"<img src={hippo} alt="hippo" width="20px" />, 
                to "Lion" <img src={lion} alt="lion" width="20px" />, 
                to "Zebra" <img src={zebra} alt="zebra" width="20px" />.
                When the number of animals matches all the requirement, the player won, and level up.
                </p>
                <p><img src={zl1} alt="instruction" width="100%"></img></p>
                <p><b>Game flow: </b></p>
                <p><img src={zl2} alt="game flow" width="60%"></img></p>
                <p>In the game, the columns and rows in the grid all satisfied the requirement.</p>
                <p><img src={zl3} alt="winning" width="60%"></img></p>
            </div>
        </div>
    )
}