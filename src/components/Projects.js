import React from 'react'
import { motion } from "framer-motion"
import { Container, Row } from 'react-bootstrap'
import '../styles/projects.css'


const Projects = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ scale: 1.2, ease: "anticipate" }}
        >
            <h1 className="projects">Projects</h1>
            <Container>
                <Row className="justify-content-center">
                    <p className='textProjects'>
                        My project page
                    </p>
                </Row>
            </Container>
        </motion.div>
    )
}
export default Projects