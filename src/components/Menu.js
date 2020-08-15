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
                    onMouseLeave={() => setHover('')}>
                    <Link to="/" className='links text-light'>Tomas Valkendorff</Link>
                    <Underline show={buttonHover} pos={'brand'} />
                </motion.div>
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={navigation}
                            whileHover="hover"
                            onMouseEnter={() => setHover('about')}
                            onMouseLeave={() => setHover('')}>
                            <Link to="/about" className='links text-light'>About</Link>
                            <Underline show={buttonHover} pos={'about'} />
                        </motion.div>
                    </Nav.Item>
                    <Nav.Item as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={navigation}
                            whileHover="hover"
                            onMouseEnter={() => setHover('project')}
                            onMouseLeave={() => setHover('')}>
                            <Link to="/projects" className='links text-light'>Projects</Link>
                            <Underline show={buttonHover} pos={'project'} />
                        </motion.div>
                    </Nav.Item>
                    <Nav.Item as="span">
                        <motion.div
                            exit="exit"
                            animate="animate"
                            initial="initial"
                            variants={navigation}
                            whileHover="hover"
                            onMouseEnter={() => setHover('contact')}
                            onMouseLeave={() => setHover('')}>
                            <Link to="/contact" className='links text-light'>Contact</Link>
                            <Underline show={buttonHover} pos={'contact'} />
                        </motion.div>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu