
    import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
    
    const About = ({show, setShow}) => {
      console.log(show)
      
      const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);
    
      return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>About Zoo Logic</Modal.Title>
            </Modal.Header>
            <Modal.Body>waaaa hahahahahahahhaha</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

export default About