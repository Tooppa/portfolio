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
            <div className="about bg-backg">
                <h1 className="aboutTitle">About me</h1>
            </div>
            <Container>
                <Jumbotron>
                    <h4>About me</h4>
                    <p>
                        testestsdgfsdfsdfs
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default About