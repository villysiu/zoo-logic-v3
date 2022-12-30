import { memo } from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';

import { List } from 'react-bootstrap-icons';

const Header = ({setAbout}) => {
    
// console.log("header bar")
    return (
        <>
        
        <Navbar collapseOnSelect  fixed="top" >
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
   </>
    )
    
}
export default memo(Header);