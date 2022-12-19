import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import About from './About';
import { useState } from 'react';
import hippo from '../images/hippo.png'
import { List } from 'react-bootstrap-icons';
// bi bi-list
const Header = () => {
    const [about, setAbout]=useState(false) 

    return (
        <>
        {about && <About show={about} setShow={setAbout} />}
        <Navbar collapseOnSelect bg="light" expand='xs' fixed="top"  >
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
                    {/* <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item> */}
                  </NavDropdown>
      </Container>
   </Navbar>
   </>
    )
    
}
export default Header