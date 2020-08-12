import React from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import '../styles/contact.css'


const Contact = () => {
    return (
        <div>
            <h1 className="contact">Contact</h1>
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
        </div>
    )
}
export default Contact