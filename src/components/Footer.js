import React from 'react'
import { motion } from "framer-motion"
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
                        <p>
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