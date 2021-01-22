import React from 'react'
import { motion } from "framer-motion"
import { Container, Row, Col, Image, Jumbotron } from 'react-bootstrap'
import { dropDown } from '../animations/pageTransition'

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
                        <Col>
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
                    
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default Home