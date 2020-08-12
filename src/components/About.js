import React from 'react'
import { motion } from "framer-motion"
import '../styles/about.css'


const About = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
        >
            <h1 className="about">About</h1>
        </motion.div>
    )
}
export default About