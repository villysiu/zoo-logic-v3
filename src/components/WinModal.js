import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const WinModal = ({show, setShow}) => {
  console.log(show)
  
  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You won!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Next level</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Next ->
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WinModal