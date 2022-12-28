import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WinModal = ({show, setShow, msg, setLastGame }) => {
  
  const handleClose = () => {
    setShow(false);
    setLastGame(false)    
  }
//   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>You won!</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
          {msg}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WinModal