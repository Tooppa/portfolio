import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { underline } from "../animations/underline"


const Underline = ({ show, pos }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				animate="animate"
				initial="initial"
				exit="exit"
				variants={underline}
				key="parent">
				{(show === pos) && (
					<motion.div
						variants={underline}
						key="modal"
						className="underline border-secondary"/>
				)}
			</motion.div>
		</AnimatePresence>
	)
}
export default Underline