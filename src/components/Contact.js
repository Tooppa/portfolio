import React from 'react'
import { motion } from "framer-motion"
import { Jumbotron, Container, Image } from 'react-bootstrap'
import { dropDown } from '../animations/pageTransition'

const Contact = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="contact bg-secondary">
                <h1 className="contactTitle">Contact</h1>
                <p className='textContact'>Here you can find other social channels and how to contact me.</p>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4>linkedin</h4>
                    <Image
                        width={125}
                        height={125}
                        src="../img/linkedin.png"
                        alt="Generic placeholder"
                        className="logo"
                    />
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default Contact