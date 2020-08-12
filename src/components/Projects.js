import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import '../styles/projects.css'


const Projects = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="projects">
                <h1 className="projectsTitle">Projects</h1>
                <div className='textProjects'>My project page</div>
            </div>
        </motion.div>
    )
}
export default Projects