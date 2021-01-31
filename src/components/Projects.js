import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import { Container, Jumbotron, Carousel, Image } from 'react-bootstrap'
import { Link } from "react-router-dom"


const Projects = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="headerContainer bg-secondary">
                <Container>
                    <h1 className="title">Projects</h1>
                    <p className="text">
                        This page is dedicated to my own projects.
                        This website has been my largest solo project to date.
                    </p>
                </Container>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">My portfolio site</h4>
                    <p className="otherText">
                        After first year at my school I started University of Helsinki
                        full stack course. Since compleating it I wanted to use my new found
                        knowledge to build a site. I had many ideas for projects but no place to
                        showcase them, my own portfolio site seemed like a perfect first project.
                    </p>
                    <h5 className="smallTitle">Technologies i used</h5>
                    <p className="otherText">
                        React, React-Router-Dom, React-Bootstrap, Sass, Framer-Motion
                    </p>
                    <h5 className="smallTitle">How it works</h5>
                    <p className="otherText">
                        This page is made as a single page app using React and React-Router.
                        All styling of the page is made with React version of the popular framework
                        Bootstrap except animations which use Framer-Motion. Styling inside Bootstrap
                        components are edited using sass.
                    </p>
                    <h5 className="smallTitle">
                        <Link to="/github/portfolio" className="homeLinks">Link to Github</Link>
                    </h5>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">3D Bomberman in unity</h4>
                    <p className="otherText">
                        After many unity group projects at my school we got a solo assignment to
                        copy mechanics from a old game and remake it in unity. I chose Bomberman since its a simple
                        concept that can be extended easily.
                    </p>
                    <h5 className="smallTitle">Technologies I used</h5>
                    <p className="otherText">
                        C# and unity.
                    </p>
                    <h5 className="smallTitle">How it works</h5>
                    <p className="otherText">
                        My version of Bomberman is made in 3D since I rarely play 2D games. It contains a tutorial level
                        and 4 other playable levels. Every level has a time limit and a number of enemies to blow up.
                        There are two diffrent types of enemies red and black. Red enemy moves to the farthest wall after
                        colliding, and the black tries to find a obstacle to blow up and hide from the explosion.
                    </p>
                    <h5 className="smallTitle">
                        <Link to="/projects/bomber" className="homeLinks">To test the game click this link</Link>
                        <p/>
                    </h5>
                    <h5 className="smallTitle">Gallery</h5>
                    <Carousel pause="hover">
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={require("../img/bomberSlide1.jpg")}
                                alt=""
                            />
                            <Carousel.Caption className="otherText">
                                Fourth level with two of the better enemies.
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={require("../img/bomberSlide2.jpg")}
                                alt=""
                            />
                            <Carousel.Caption className="otherText">
                                Obstacles can drop powerups.
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                                className="d-block w-100"
                                src={require("../img/bomberSlide3.jpg")}
                                alt=""
                            />
                            <Carousel.Caption className="otherText">
                                The player has to clear obstacles to reach the enemy.
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default Projects