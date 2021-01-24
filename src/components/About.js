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
            <div className="headerContainer bg-secondary">
                <Container>
                    <h1 className="title">About</h1>
                    <p className="text">Here you can learn more about me and what skills i have.</p>
                </Container>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">Education</h4>
                    <h5 className="smallTitle">Metropolia University of Applied Sciences 2019-2023</h5>
                    <p className="otherText">
                        Information and Communication Technology, mastering in Game Applications.
                    </p>
                    <h5 className="smallTitle">Open University in University of Helsinki 2020</h5>
                    <p className="otherText">
                        Full Stack open.
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">Skills</h4>
                    <h5 className="smallTitle">Web Development</h5>
                    <p className="otherText">
                        I have mostly used Javascript with react in the front end and Node.js and MongoDB in the backend.
                        In the first year at Metropolia i had a one quarter dedicated for web dev which was mostly basics of HTML and Css. 
                        I enjoyed it so much that i joined the Full Stack Open from University of Helsinki and compleated 
                        that course with 9 course credits.
                    </p>
                    <h5 className="smallTitle">Game Development</h5>
                    <p className="otherText">
                        For all my games i use unity and c#. For vector calculations i have used python and mathlab.
                        After first year i chose to master in Game Applications at Metropolia. I have made countles small
                        test projects but only a few large ones. My first larger solo project can be found in projects 
                        page with more info. Right now i am in the process of making a Augmented reality app for android which 
                        will be ready in the first quarter.
                    </p>
                    <h5 className="smallTitle">Other</h5>
                    <p className="otherText">
                        In the first year i had a brief introduction to C language when programming a simple robot to
                        find get itself out of randomized maze. This year i have started learning c++ Object oriented
                        programming and algorithms. Rigth now i am making a simple chess engine with one other student
                        as a school assignment.
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">Personal introduction</h4>
                    <p className="otherText">
                        Hi my name is Tomas Alexander Valkendorff.
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default About