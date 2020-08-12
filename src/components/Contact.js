import React from 'react'
import { motion } from "framer-motion"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import '../styles/contact.css'


const Contact = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ scale: 1.2, ease:"anticipate"}}
        >
            <div className="contact">
                <h1 className="contactTitle">Contact</h1>
                <div className='textContact'>Use this to contact me via Email.</div>
            </div>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                    </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </motion.div>
    )
}
export default Contact