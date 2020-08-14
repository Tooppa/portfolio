import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import { Container, Jumbotron } from 'react-bootstrap'


const Projects = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="projects bg-backg">
                <Container style={{padding:"0px"}}>
                <h1 className="projectsTitle">Projects</h1>
                <p className='textProjects'>
                    This page is dedigated to my own projects. Since most of
                    my work has been group projects at my university, those have been
                    left out. This website has been my largest solo project to date.
                </p>
                </Container>
            </div>
            <Container>
                <Jumbotron>
                    <h4>My portfolio site</h4>
                    <p>
                        testestsdgfsdfsdfs
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default Projects