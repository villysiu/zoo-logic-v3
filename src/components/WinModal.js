import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WinModal = ({show, setShow, msg, setLastGame}) => {

  // console.log(lastGame)
  
  const handleClose = () => {
    setShow(false);
    setLastGame(false)
  }
//   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You won!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WinModal