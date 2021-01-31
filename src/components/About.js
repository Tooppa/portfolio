import React from 'react'
import { motion } from "framer-motion"
import { dropDown } from '../animations/pageTransition'
import { Container, Jumbotron } from 'react-bootstrap'


const About = () => {
    return (
        <motion.div
            exit="exit"
            animate="animate"
            initial="initial"
            variants={dropDown}
        >
            <div className="headerContainer bg-secondary">
                <Container>
                    <h1 className="title">About</h1>
                    <p className="text">Here you can learn more about me and what skills I have.</p>
                </Container>
            </div>
            <Container>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">Education</h4>
                    <h5 className="smallTitle">Metropolia University of Applied Sciences 2019-2023</h5>
                    <p className="otherText">
                        Information and Communication Technology, mastering in Game Applications.
                    </p>
                    <h5 className="smallTitle">Open University in University of Helsinki 2020</h5>
                    <p className="otherText">
                        Full Stack open.
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">Programming skills</h4>
                    <h5 className="smallTitle">Web Development</h5>
                    <p className="otherText">
                        I have mostly used Javascript with react in the front end and Node.js and MongoDB in the backend.<br/>
                        In the first year at Metropolia I had a one quarter dedicated for web dev which was mostly basics of HTML and CSS. 
                        I enjoyed it so much that i joined the Full Stack Open from University of Helsinki and compleated 
                        it with 9 course credits.
                    </p>
                    <h5 className="smallTitle">Game Development</h5>
                    <p className="otherText">
                        For all my games I use unity and c#. For vector calculations I have used python and mathlab.
                        After first year I chose to master in Game Applications at Metropolia. <br/>
                        I have made countles small test projects but only a few large ones. My first larger solo project can be found in projects 
                        page with more info. Right now I am in the process of making a Augmented reality app for android which 
                        will be ready in the first quarter.
                    </p>
                    <h5 className="smallTitle">Other</h5>
                    <p className="otherText">
                        In the first year I had a brief introduction to C language when programming a simple robot to
                        find a way to get itself out of a randomized maze. <br/>
                        This year I have started learning c++ Object oriented programming and algorithms. Rigth now I am 
                        making a simple chess engine with one other student as a school assignment.
                    </p>
                    <h5 className="smallTitle">Languages from most used to least</h5>
                    <p className="otherText">
                        -JavaScript <br/>
                        -C#<br/>
                        -C++<br/>
                        -TypeScrip<br/>
                        -Java<br/>
                        -SQL<br/>
                        -Python
                    </p>
                </Jumbotron>
                <Jumbotron className="bg-info">
                    <h4 className="mediumTitle">Personal introduction</h4>
                    <p className="otherText">
                        Hi my name is Tomas Alexander Valkendorff and i am originally from Lappeenranta Finland.
                        I am 22 and my native tongue is finnish, but i use a lot of english everyday.<br/>
                        When I am not coding i enjoy travelling, playing games, exercising and cooking. 
                        I mainly exercise by going to gym, but sometimes I switch it up by going bouldering, running or cycling. <br/>
                        Since we all have been staying at home for the past year I have been learning to cook.
                        My favorite things to cook are asian style noodle soups, burgers and steaks.<br/>
                        I am eagerly waiting to get the change to travel normally again since that is
                        what I like the most. My memorable trips include, going to the Alps in Austria and Switzerland to snowboard, 
                        visiting CERN in Switzerland with my physics class and travelling in India for a year when i was at sixth grade.
                    </p>
                </Jumbotron>
            </Container>
        </motion.div>
    )
}
export default About