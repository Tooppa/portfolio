import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../styles/slideshow.css'

const SlideShow = () => {
    return (
        <div className='slideshow'>
            <Carousel indicators={false} controls={false} fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1900x800"
                        alt="First slide"
                    />
                    <Carousel.Caption expand="md">
                        <p className='caption'>First slide label</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1900x800"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <p className='caption'>Second slide label</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1900x800"
                        alt="Third slide"
                    />
                        <Carousel.Caption>
                            <p className='caption'>Third slide label</p>
                        </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default SlideShow