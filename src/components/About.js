
    import Button from 'react-bootstrap/Button';
    import Modal from 'react-bootstrap/Modal';
    
    const About = ({show, setShow}) => {
    //   console.log(show)
    const Content =() =>{
        return (
            <div style={{margin: '35px'}}>
                <div>
                    Using the principle of Sudoku, place the animal tokesns onto corresponding 
                    positions on the board. The game contains 30 games. It is suitable for
                    players age 3 and above. The game can develop children's logicical
                    thinking and improve their concentration and patience. 
                </div>
                <br/>
                <div>
                <b>Instruction: </b><br/>
    
                    On the board, the top row and left column indicates the number of said animal in the colum and row.
                    Player click in the board for the animal they wanted to place on board.
                    When the number of animals matches the top row and left column requirement, the player won, and moved to 
                    next level.
    
                </div>
            </div>
        )
    }
      const handleClose = () => setShow(false);
    
      return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>About Zoo Logic</Modal.Title>
            </Modal.Header>
            <Modal.Body><Content /></Modal.Body>
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