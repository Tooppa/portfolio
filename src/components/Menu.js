import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import { navigation } from '../animations/navbar'
import { motion } from 'framer-motion'
import Underline from './Underline'

const Menu = () => {
    const [buttonHover, setHover] = useState('')

    return (
        <Navbar collapseOnSelect expand="sm" bg="light">
            <Nav.Link href="/" as="span" className="brand">
                <motion.div
                    exit="exit"
                    animate="animate"
                    initial="initial"
                    variants={navigation}
                    whileHover="hover"
                    onMouseEnter={() => setHover('brand')}
                    onMouseLeave={() => setHover('')}>
                    <Link to="/" className='links'>Tomas Valkendorff</Link>
                    <Underline show={buttonHover} pos={'brand'}/>
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
                            onMouseLeave={() => setHover('')}>
                            <Link to="/about" className='links'>About</Link>
                            <Underline show={buttonHover} pos={'about'}/>
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
                            onMouseLeave={() => setHover('')}>
                            <Link to="/projects" className='links'>Projects</Link>
                            <Underline show={buttonHover} pos={'project'}/>
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
                            onMouseLeave={() => setHover('')}>
                            <Link to="/contact" className='links'>Contact</Link>
                            <Underline show={buttonHover} pos={'contact'}/>
                        </motion.div>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu