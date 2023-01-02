import { useEffect, useState, memo, useCallback} from "react"
import Button from 'react-bootstrap/Button';


import TopHeader from './TopHeader';
import LeftHeader from './LeftHeader';
import GameGrid from './GameGrid';
import TokenCount from './TokenCount';
import WinModal from './WinModal'
import { getGame, gameCount } from "../data/games.js";
import { countTokens, checkBoard } from "./functions";

const GameBoard = ({width, level, setLevel }) => {
    // console.log("gameboard")
    let [loading, setLoading] = useState(true)
    let [game, setGame] = useState(null)
    let [gameboard, setGameBoard] = useState(null)
    let [tokenCount, setTokenCount]=useState(null)
  
    const [showModal, setShowModal] = useState(false);
    const [lastGame, setLastGame] = useState(false);
    let count=gameCount()
    useEffect(()=>{
       
        const helper=async (level)=>{
            try{ 
                const g = await getGame(level)
                if(!g) throw Error
                setGame(g)
                
                setGameBoard(g.board)
                setTokenCount(countTokens(g.board))
                setLoading(false)

            }catch(error){
                
                console.log("error loading!!")
            }
        }  
        helper(level)  
    }, [level])
    
    
    useEffect(()=>{ 
        // console.log("check win effect")
        if(game!==null && tokenCount[0]===9 && checkBoard(gameboard, game.header)){
            setShowModal(true)
            setLastGame(game.id===count)
            setLevel(game.id===count ? 1 : game.id+1)
            localStorage.setItem('level', level)
            
        }
    }, [gameboard, game, setLevel, tokenCount, level, count])
    
    const handleReset = () =>{
        // console.log(game.board)
        setGameBoard(game.board)
        setTokenCount(countTokens(game.board))
    }
    const handleClick=useCallback((rid, cid, aid)=>{
        // console.log("clicked")
        let updated=aid
        setTokenCount(arr=>{
            updated=aid
            do{
                updated=(updated+1)%4
            }while((arr[updated]===0))

            setGameBoard(arr=>{
               
                // console.log(updated)
                return arr.map((row, r)=>{
                    return row.map((val, c)=>{
                        return r===rid && c===cid ? updated : val
                    })
    
                })
            })

            return arr.map((count, idx)=>{
                return idx===aid ? count+1 : ( idx===updated ? count-1 : count )

            })
        })

        

        
    }, [])
    if(loading){
        return(<div>LOADING...</div>)
    }

    return (
        <>
        {showModal && <WinModal show={showModal} setShow={setShowModal} msg={lastGame ? "Back to game 1" :  "Next level"} setLastGame={setLastGame} /> }
                    {/* <table width={width} height={width} className="gameboard" border="1px"> */}
                    <table className="gameboard">
                        <tbody>
                        <tr height='25%' border="1">
                            <td width='25%'>Level {game.id}<br/>
                            <Button variant="success" size="sm" onClick={handleReset}>
                                Reset
                            </Button>
                            </td>
                            <td className="game-top-header">
                                <TopHeader arr={game.header[0]} />
                            </td>
                        </tr>
                        <tr height='75%'>
                            <td className="game-left-header">
                                <LeftHeader arr={game.header[1]} />
                            </td>
                            <td>
                                <GameGrid arr={gameboard} handleClick={handleClick} fixed={game.fixed} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    
                    <TokenCount tokenCount={tokenCount} />
   
        </>
       
    )
}
export default memo(GameBoard)