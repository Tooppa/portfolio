import React from 'react'
import { motion } from "framer-motion"
import '../styles/projects.css'


const Projects = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{opacity: 0 }}
            >
            <h1 className="projects">Projects</h1>
        </motion.div>
    )
}
export default Projects