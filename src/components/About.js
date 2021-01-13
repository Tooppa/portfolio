import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import { Container, Jumbotron } from 'react-bootstrap'


const About = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="about bg-secondary">
                <h1 className="aboutTitle">About me</h1>
                <p className='textContact'>Here you can learn more about me and what skills i have.</p>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4>Education</h4>
                    <p>
                        testestsdgfsdfsdfs
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default About