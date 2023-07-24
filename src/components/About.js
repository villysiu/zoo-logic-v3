
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footer from './Footer';
import { Instruction } from './Instruction';
const About = ({show, setShow}) => {
   
    const handleClose = () => setShow(false);

    return (

        <Modal show={show} onHide={handleClose} dialogClassName="dialog" >
            <Modal.Header closeButton>
                <Modal.Title>About Zoo Logic</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Instruction />
                <Footer/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default About