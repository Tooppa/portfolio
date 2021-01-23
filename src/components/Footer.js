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
                    <Col md={true}>
                        <h5 className="smallTitle">Site links</h5>
                        <Link to="/" className="otherText">Home</Link> <br />
                        <Link to="/about" className="otherText">About</Link> <br />
                        <Link to="/projects" className="otherText">Projects</Link> <br />
                        <Link to="/contact" className="otherText">Contact</Link> <p />
                    </Col>
                    <Col md={true}>
                        <h5 className="smallTitle">Info</h5>
                        <p className="otherText">
                            lorem ipsun <br />
                            Location: Espoo, Finland. <br />
                            Email: placeholder. <br />
                        </p>
                    </Col>
                    <Col md={true}>
                        <h5 className="smallTitle">Test</h5>
                        <p className="otherText">
                            lorem ipsun <br />
                            Location: Espoo, Finland. <br />
                            Email: placeholder. <br />
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <p className="otherText">
                        Copyright &copy; 2021 Tomas Valkendorff. All Rights Reserved
                    </p>
                </Row>
            </Container>
        </motion.div>
    )
}
export default Footer