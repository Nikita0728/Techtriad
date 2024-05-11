import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Navbar.css'

const Navbars = () => {
  return (
    <>
    <div className='navbar'>
    <Navbar  expand="lg" bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home" className='text'>Niwaran</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text'>Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact-us</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </div>
    </>
  )
}

export default Navbars
