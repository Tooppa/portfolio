import React from 'react'
import { motion } from "framer-motion"
import { navigation } from '../animations/navbar'

const Footer = () => {
    return (
        <motion.div
            className="footer"
            exit="exit"
            animate="animate"
            initial="initial"
            variants={navigation}
        >
            <p className="name">
                Tomas Alexander Valkendorff 2021
            </p>
        </motion.div>
    )
}
export default Footer