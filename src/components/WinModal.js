import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WinModal = ({winModal, showWinModal, handleNextGame, lastGame }) => {
  
console.log("winModal")
  return (
    <>
      <Modal show={winModal} backdrop="static" centered>
        <Modal.Header>
          <Modal.Title>You won!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {lastGame && 
          <>
            You have completed all level.
          </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleNextGame}>
          {lastGame ? <>Back to game 1</> : <>Next Game</>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WinModal