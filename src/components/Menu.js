import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import { firstLoad, hover } from '../animations/navbar'
import { motion } from 'framer-motion'

const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="sm" variant="light" className='navbar'>
            <Navbar.Brand>
                <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={firstLoad}
                            whileHover={hover}>
                <Link to="/" className='links'>Tomas Valkendorff</Link>
                </motion.div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/about" as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={firstLoad}
                            whileHover={hover}>
                            <Link to="/about" className='links'>About</Link>
                        </motion.div>
                    </Nav.Link>
                    <Nav.Link href="/projects" as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={firstLoad}
                            whileHover={hover}>
                            <Link to="/projects" className='links'>Projects</Link>
                        </motion.div>
                    </Nav.Link>
                    <Nav.Link href="/contact" as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={firstLoad}
                            whileHover={hover}>
                            <Link to="/contact" className='links'>Contact</Link>
                        </motion.div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu