import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import { navigation } from '../animations/navbar'
import { motion } from 'framer-motion'
import Underline from './Underline'

const Menu = () => {
    const [buttonHover, setHover] = useState('')

    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Nav.Link href="/" as="span" className="brand">
                <motion.div
                    exit="exit"
                    animate="animate"
                    initial="initial"
                    variants={navigation}
                    whileHover="hover"
                    onMouseEnter={() => setHover('brand')}
                    onMouseLeave={() => setHover('')}
                    className='links'>
                    <Link to="/" className='text-light'>
                        Tomas Valkendorff
                        <Underline show={buttonHover} pos={'brand'} />
                    </Link>
                </motion.div>
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/about" as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={navigation}
                            whileHover="hover"
                            onMouseEnter={() => setHover('about')}
                            onMouseLeave={() => setHover('')}
                            className='links'>
                            <Link to="/about" className='text-light'>
                                About
                                <Underline show={buttonHover} pos={'about'} />
                            </Link>
                        </motion.div>
                    </Nav.Link>
                    <Nav.Link href="/projects" as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={navigation}
                            whileHover="hover"
                            onMouseEnter={() => setHover('project')}
                            onMouseLeave={() => setHover('')}
                            className='links'>
                            <Link to="/projects" className='text-light'>
                                Projects
                                <Underline show={buttonHover} pos={'project'} />
                            </Link>
                        </motion.div>
                    </Nav.Link>
                    <Nav.Link href="/contact" as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={navigation}
                            whileHover="hover"
                            onMouseEnter={() => setHover('contact')}
                            onMouseLeave={() => setHover('')}
                            className='links'>
                            <Link to="/contact" className='text-light'>
                                Contact
                                <Underline show={buttonHover} pos={'contact'} />
                            </Link>
                        </motion.div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu