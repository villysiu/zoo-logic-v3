import { memo } from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

import { List } from 'react-bootstrap-icons';

const Navheader = ({setAbout}) => {   
// console.log("header bar")
    return (
        
        <div className="nav">
        <Navbar collapseOnSelect fixed="top" bg="light">
        <Container>

            <Navbar.Brand className="font-face-cg" style={{color: 'green', fontSize:'30px', padding:'0px'}} >
                Zoo Logic
            </Navbar.Brand>
            <NavDropdown
              title=<List className='rounded' size={50}  />
              id={`offcanvasNavbarDropdown-expand-false`}
              align="end"
            >
              <NavDropdown.Item onClick={()=>setAbout(true)}>About the Game</NavDropdown.Item>
            </NavDropdown>
      </Container>
   </Navbar>
   </div>
    )
    
}
export default memo(Navheader);