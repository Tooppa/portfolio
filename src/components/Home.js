import React from 'react'
import { motion } from "framer-motion"
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import { dropDown } from '../animations/pageTransition'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="headerContainer bg-secondary">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs="auto">
                            <h1 className="title" >Welcome to my page</h1>
                        </Col>
                        <Col xs="auto">
                            <Image
                                width={150}
                                height={150}
                                src="../img/profile.png"
                                alt="Generic placeholder"
                                roundedCircle
                                className="homeimg border-primary"
                            />
                        </Col>
                    </Row>
                    <p className="text">
                        Hi, thank you for coming to my website. My name is Tomas Valkendorff
                        and i am a student at Metropolia University of Applied Sciences.
                </p>
                </Container>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">About the site</h4>
                    <p className="otherText">
                        This site is meant as a interactive portfolio where you can find all
                        of my noteworthy projects and learn more about me. All of this can be found
                        from three diffrent pages.
                    </p>
                    <Link to="/about" className="homeLinks">
                        <h5 className="smallTitle">About page</h5>
                    </Link>
                    <p className="otherText">
                        Here you can find more about who i am and my skills.
                    </p>
                    <Link to="/projects" className="homeLinks">
                        <h5 className="smallTitle">Projects page</h5>
                    </Link >
                    <p className="otherText">
                        If you are intrested how this website was made or want to see
                        my other projects its all in here.
                    </p>
                    <Link to="/contact" className="homeLinks">
                        <h5 className="smallTitle">Contact page</h5>
                    </Link>
                    <p className="otherText">
                        Last but not least in the contact page you can find the relevant contact information
                        and links to my other platforms.
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default Home