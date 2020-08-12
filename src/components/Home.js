import React from 'react'
//import SlideShow from './SlideShow'
import { motion } from "framer-motion"
import { Container, Row, Col, Image } from 'react-bootstrap'
import '../styles/home.css'

const Home = () => {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{opacity: 0 }}
            transition={{ scale: 1.2, ease:"anticipate"}}
            className="slanted"
            >
            <Container className='container' fluid>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <h1 className='welcome' >Welcome to my page</h1>
                    </Col>
                    <Col xs="auto">
                        <Image
                            width={125}
                            height={125}
                            src="../img/profile.png"
                            alt="Generic placeholder"
                            roundedCircle
                            className="homeimg"
                        />
                    </Col>
                </Row>
                <p className='textHome'>
                    Hi, thank you for coming to my website. My name is Tomas Valkendorff
                    and i am a student at Metropolia university of applied sciences.
                </p>
            </Container>
            {/*<SlideShow />*/}
        </motion.div>
    )
}
export default Home