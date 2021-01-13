import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import { Container, Jumbotron } from 'react-bootstrap'


const Projects = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="projects bg-secondary">
                <Container style={{padding:"0px"}}>
                <h1 className="projectsTitle">Projects</h1>
                <p className='textProjects'>
                    This page is dedicated to my own projects. Since most of
                    my work has been group projects at my university, those have been
                    left out. This website has been my largest solo project to date.
                </p>
                </Container>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4>My portfolio site</h4>
                    <p>
                        After first year at my school i started University of Helsinki
                        full stack course. Since compleating it i wanted to use my new found
                        knowledge to build a site. I had many ideas but i didnt have place to
                        showcase them. With that in mind own portfolio site seemed like
                        a perfect first project.
                    </p>
                    <h5>Technologies i used</h5>
                    <p>
                        React, react-router-dom, react-bootstrap, sass, framer-motion
                    </p>
                    <h5>How it works</h5>
                    <p>
                        
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4>3D Bomberman in unity</h4>
                    <p>
                        After many unity group projects at my school we got a solo assignment to 
                        copy mechanics from a old game and remake it in unity. I chose Bomberman since its a well known
                        concept and i had many ideas to make it look my own.
                    </p>
                    <h5>Technologies i used</h5>
                    <p>
                        C# and unity.
                    </p>
                    <h5>How it works</h5>
                    <p>
                        
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default Projects