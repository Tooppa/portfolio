import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import '../styles/menu.css'

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="sm" variant="light" className='navbar'>
            <Navbar.Brand className='links'>
                <Link to="/" className='links'>Tomas Valkendorff</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as="span">
                        <Link to="/about" className='links'>About</Link>
                    </Nav.Link>
                    <Nav.Link as="span">
                        <Link to="/projects" className='links'>Projects</Link>
                    </Nav.Link>
                    <Nav.Link as="span">
                        <Link to="/contact" className='links'>Contact</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu