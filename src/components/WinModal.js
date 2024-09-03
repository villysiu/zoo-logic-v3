import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { gameCount } from "../data/games.js";



const WinModal = ({winModal, showWinModal, gameId, dispatch}) => {
  
  console.log("winModal")

  const handleNextGame =()=>{
    console.log("in going next game")
    dispatch({type: 'NEXTGAME'})
    showWinModal(false)
  }
  const LastGame = () =>{
    return (
      <>
        <Modal.Body>You have completed all level.</Modal.Body>
        <Modal.Footer className="win-modal">
          <Button variant="success" onClick={handleNextGame}>
            Back to game 1
          </Button>
        </Modal.Footer>
      </>
    )
  }
  const NextGame = () =>{
    return (
      <Modal.Footer className="win-modal">
        <Button variant="success" onClick={handleNextGame}>
          Next game 
        </Button>
      </Modal.Footer>
    )
  }

  return (
    <>
      <Modal show={winModal} backdrop="static" centered>
        <Modal.Header className="win-modal">
          <Modal.Title>You won!</Modal.Title>
        </Modal.Header>
        {
          gameId === gameCount() ? <LastGame /> : <NextGame />
        }
        
      </Modal>
    </>
  );
}

export default WinModal