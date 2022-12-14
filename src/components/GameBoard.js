// import { useState, useEffect } from "react"
import TopHeader from './TopHeader';
import LeftHeader from './LeftHeader';
import NinexNine from './NinexNine';

import { getGame } from "../data/games.js";

const GameBoard = ({width}) => {

    let game = getGame(3)
    console.log(game.header)


    return (
        
        <table width={width} height={width} className="gameboard" border="1px">
            <tbody>
            <tr height='25%' border="1">
                <td width='25%'>{width}x{width} </td>
                <td className="game-top-header"><TopHeader arr={game.header[0]} /></td>
            </tr>
            <tr height='75%'>
                <td className="game-left-header"><LeftHeader arr={game.header[1]} /></td>
                <td><NinexNine arr={game.board} /></td>
            </tr>
            </tbody>
        </table>
       
    )
}
export default GameBoard