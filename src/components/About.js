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
                <h1 className="aboutTitle">About</h1>
                <p className='textContact'>Here you can learn more about me and what skills i have.</p>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4>Education</h4>
                    <h6>Metropolia University of Applied Sciences 2019-2023</h6>
                    <p>
                        Information and Communication Technology, mastering in Game Applications.
                    </p>
                    <h6>Open University in University of Helsinki 2020</h6>
                    <p>
                        Full Stack open.
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4>Skills</h4>
                    <h6>Web Development</h6>
                    <p>
                        I have mostly used Javascript with react in the front end and Node.js and MongoDB in the backend.
                    </p>
                    <h6>Game Development</h6>
                    <p>
                        For all my games i have used unity and c#. For vector calculations i have used python and mathlab.
                    </p>
                    <h6>Other</h6>
                    <p>
                        In the first year i had a brief introduction to C language when programming a simple robot.
                        This year i have started learning c++.
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4>Personal introduction</h4>
                    <p>
                        Hi my name is Tomas Alexander Valkendorff.
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default About