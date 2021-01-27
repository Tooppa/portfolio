import React from 'react'
import { motion } from "framer-motion"
import { Container, Jumbotron, ResponsiveEmbed } from 'react-bootstrap'
import { dropDown } from '../animations/pageTransition'

const BomberPerson = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="headerContainer bg-secondary">
                <Container>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe title="game" src="https://itch.io/embed-upload/3264530?color=333333">
                            <a href="https://tooppa.itch.io/bomberperson">Play BomberPerson on itch.io</a>
                        </iframe>
                    </ResponsiveEmbed>
                    <p className="text">
                        Scroll down for more information about the game
                    </p>
                </Container>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">How to play</h4>
                    <p className="otherText">

                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default BomberPerson