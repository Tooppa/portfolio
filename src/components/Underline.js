import React from 'react'
import { AnimatePresence, motion } from "framer-motion"


const Underline = ({ show, pos }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {(show === pos) && (
                <motion.div
                    animate={{ scale: 0.8 }}
                    initial={{ scale: 0 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 1 }}
                    key="modal"
                    className="underline border-secondary" />
            )}
        </AnimatePresence>
    )
}
export default Underline