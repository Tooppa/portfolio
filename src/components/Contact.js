import React from 'react'
import { motion } from "framer-motion"
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { dropDown } from '../animations/pageTransition'

const Contact = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="contact bg-backg">
                <h1 className="contactTitle">Contact</h1>
                <p className='textContact'>Use this to contact me via Email.</p>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Enter text"/>
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