import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import '../styles/about.css'


const About = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <h1 className="about">About</h1>
        </motion.div>
    )
}
export default About