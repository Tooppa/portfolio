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
            <div className="about">
                <h1 className="aboutTitle">About me</h1>
                <div className='textAbout'>test</div>
            </div>
        </motion.div>
    )
}
export default About