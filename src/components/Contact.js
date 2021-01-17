import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { navigation } from '../animations/navbar'
import { Jumbotron, Container, Image, Col, Row } from 'react-bootstrap'
import { dropDown } from '../animations/pageTransition'

const Contact = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="contact bg-secondary">
                <h1 className="contactTitle">Contact</h1>
                <p className='textContact'>Here you can find other social channels and how to contact me.</p>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <Row className="justify-content-center">
                        <Col>
                            <h4>Information</h4>
                            <p>
                                Name: Tomas Alexander Valkendorff. <br />
                                Location: Espoo, Finland. <br />
                                Email: placeholder. <br />
                            </p>
                        </Col>
                        <Col xs="auto">
                            <motion.div
                                exit="exit"
                                animate="animate"
                                initial="initial"
                                variants={navigation}
                                whileHover="hover"
                                className='links'>
                                <Link to="/linkedin" className='text-light'>
                                    <Image
                                        width={125}
                                        height={125}
                                        src="../img/linkedin.png"
                                        alt="Generic placeholder"
                                        className="logo"
                                    />
                                </Link>
                            </motion.div>
                        </Col>
                        <Col xs="auto">
                            <motion.div
                                exit="exit"
                                animate="animate"
                                initial="initial"
                                variants={navigation}
                                whileHover="hover"
                                className='links'>
                                <Link to="/github" className='text-light'>
                                    <Image
                                        width={125}
                                        height={125}
                                        src="../img/gitHub.png"
                                        alt="Generic placeholder"
                                        className="logo"
                                    />
                                </Link>
                            </motion.div>
                        </Col>
                    </Row>

                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default Contact