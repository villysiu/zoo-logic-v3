import { gameCount } from '../data/games';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import zl1 from "../images/ZL_instructions.gif";
import zl2 from "../images/ZL_gameflow.gif"
import zl3 from "../images/ZL_win.gif"


import hippo from "../images/hippo.png"
import lion from "../images/lion.png"
import zebra from "../images/zebra.png"
const About = ({show, setShow, diaglog}) => {
   
    let count=gameCount()
    const Content =() =>{
        return (
            <div style={{margin: '30px'}}>
                <div>
                    Using the principle of Sudoku, place the animal tokesns onto corresponding 
                    positions on the board. The game contains {count} games. It is suitable for
                    players age 3 and above. The game can develop children's logicical
                    thinking and improve their concentration and patience. 
                </div>
                <br/>
                <div>
                <b>Instruction: </b><br/>
    
                    The game board is a 3x3 grid. To the top and left of the gird are the indicators of the number of animal in corresponding column and row.
                    Player clicks on the board to change animal from "blank" 
                    to "Hippo"<img src={hippo} alt="hippo" width="20px" />, 
                    to "Lion" <img src={lion} alt="lion" width="20px" />, 
                    to "Zebra" <img src={zebra} alt="zebra" width="20px" />.
                    When the number of animals matches all the requirement, the player won, and level up.
                    <br/>
                  <img src={zl1} alt="instruction" width="100%"></img>
                </div>
                <br/>
                <div>
                  <b>Game flow: </b><br/>
                  <img src={zl2} alt="game flow" width="60%"></img>
                </div>
                <br/>
                <div>
                  In the game, the columns and rows in the grid all satisfied the requirement.
                  <br/>
                  <img src={zl3} alt="winning" width="60%"></img>
                </div>
            </div>
        )
    }
      const handleClose = () => setShow(false);
    
      return (
        <>
          <Modal show={show} onHide={handleClose} dialogClassName={diaglog}>
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