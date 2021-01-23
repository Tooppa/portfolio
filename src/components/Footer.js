import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { navigation } from '../animations/navbar'
import { Col, Row, Container } from 'react-bootstrap'

const Footer = () => {
    return (
        <motion.div
            className="footer bg-secondary"
            exit="exit"
            animate="animate"
            initial="initial"
            variants={navigation}
        >
            <Container>
                <Row>
                    <Col>
                        <h5 className="smallTitle">Site map</h5>
                        <Link to="/" className="otherText">Home</Link> <br />
                        <Link to="/about" className="otherText">About</Link> <br />
                        <Link to="/projects" className="otherText">Projects</Link> <br />
                        <Link to="/contact" className="otherText">Contact</Link>
                    </Col>
                    <Col>
                        <h5 className="smallTitle">Info</h5>
                        <p className="otherText">
                            lorem ipsun <br />
                            Location: Espoo, Finland. <br />
                            Email: placeholder. <br />
                        </p>
                    </Col>
                    <Col>
                        <p className="otherText">
                            lorem ipsun <br />
                            Location: Espoo, Finland. <br />
                            Email: placeholder. <br />
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    Copyrigth &copy; 2021 Tomas Alexander Valkendorff. All Rights Reserved
                </Row>
            </Container>
        </motion.div>
    )
}
export default Footer