import { useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TopHeader from './TopHeader';
import LeftHeader from './LeftHeader';
import GameGrid from './GameGrid';
import TokenCount from './TokenCount';

import { getGame } from "../data/games.js";
import { countTokens, checkBoard } from "./functions";
const GameBoard = ({width, level, setLevel }) => {

    const [game, setGame] = useState(getGame(level))
    let [gameboard, setGameBoard] = useState(game.board)
    useEffect(()=>{
       setGame( getGame(level))
       setGameBoard(game.board)
    }, [level, game.board])
    
    // console.log(gameboard)

    const [tokenLeft, setTokenLeft]=useState([[1,3],[2,3],[3,3]])
    
    useEffect(()=>{
        setTokenLeft(countTokens(gameboard))
        if(checkBoard(gameboard, game.header)){
            localStorage.setItem('level', game.id+1)
            setLevel(game.id+1)
        }
        console.log('nnn')

    }, [gameboard, game.header, game.id, setLevel])
    // console.log(tokenLeft)
    return (
        <Container>
            <Row>
                <Col lg="1">{game.id}</Col>
                <Col>
                    
                    <table width={width} height={width} className="gameboard" border="1px">
                        <tbody>
                        <tr height='25%' border="1">
                            <td width='25%'>{width}x{width} </td>
                            <td className="game-top-header">
                                <TopHeader arr={game.header[0]} />
                            </td>
                        </tr>
                        <tr height='75%'>
                            <td className="game-left-header">
                                <LeftHeader arr={game.header[1]} />
                            </td>
                            <td>
                                <GameGrid arr={gameboard} setGameBoard={setGameBoard} tokenLeft={tokenLeft} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <TokenCount arr={tokenLeft} width={width}  />
                </Col>
                <Col lg="2"></Col>
                
            </Row>
            
        </Container>
        
       
    )
}
export default GameBoard