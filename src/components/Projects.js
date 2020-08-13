import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import { Container } from 'react-bootstrap'


const Projects = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
            className="projects"
        >
            <Container style={{padding:0}}>
                <h1 className="projectsTitle">Projects</h1>
                <div className='textProjects'>
                    I would like to fill this page with projects, but since i just
                    started my developer journey year ago i havent done many
                    that is worthy of showing
                    </div>
            </Container>
        </motion.div>
    )
}
export default Projects