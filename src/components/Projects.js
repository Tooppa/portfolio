import React from 'react'
import { motion } from "framer-motion"
import '../styles/projects.css'


const Projects = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ scale: 1.2, ease: "anticipate" }}
        >
            <div className="projects">
                <h1 className="projectsTitle">Projects</h1>
                <div className='textProjects'>My project page</div>
            </div>
        </motion.div>
    )
}
export default Projects