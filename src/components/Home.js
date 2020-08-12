import React from 'react'
//import SlideShow from './SlideShow'
import '../styles/home.css'
import { Container, Row, Col, Image } from 'react-bootstrap'


const Home = () => {
    return (
        <div className="slanted">
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
                <p className='text'>
                    Hi, thank you for coming to my website. My name is Tomas Valkendorff
                    and i am a student at Metropolia university of applied sciences.
                </p>
            </Container>
            {/*<SlideShow />*/}
        </div>
    )
}
export default Home