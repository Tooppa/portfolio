import React from "react"
import { motion } from "framer-motion"
import { Container, Jumbotron, ResponsiveEmbed } from "react-bootstrap"
import { dropDown } from "../animations/pageTransition"

const BomberPerson = () => {
	return (
		<motion.div
			exit="exit"
			animate="animate"
			initial="initial"
			variants={dropDown}
		>
			<div className="headerContainer bg-secondary">
				<Container>
					<ResponsiveEmbed aspectRatio="16by9">
						<iframe title="game" src="https://itch.io/embed-upload/3264530?color=333333">
							<a href="https://tooppa.itch.io/bomberperson">Play BomberPerson on itch.io</a>
						</iframe>
					</ResponsiveEmbed>
					<p className="text">
                        Scroll down for more information about the game
					</p>
				</Container>
			</div>
			<Container>
				<Jumbotron className="bg-info">
					<h4 className="mediumTitle">How to play</h4>
					<p className="otherText">
                        This game is designed to be played with a computer and can be on the
                        more demanding side. Size of the game is 40mb.
					</p>
					<h5 className="smallTitle">Controls</h5>
					<p className="otherText">
                        Movement can be controlled with WASD or Arrow keys.<br/>
                        To drop the bomb press mouse 1 or left control. <br/>
                        Pause menu will open with ESC.
					</p>
					<h5 className="smallTitle">Enemies</h5>
					<p className="otherText">
                        Red enemy will only walk back and forth between walls and it cant drop a bomb, but 
                        it can still damage the player if it touches it. <br/>
                        Black enemy can drop bombs and tries to find obstacles to drop them. It can also damage 
                        the player by touching.
					</p>
					<h5 className="smallTitle">Powerups</h5>
					<p className="otherText">
                        Green will increse the range of the next bomb your drop from 2 to 4. <br/>
                        Blue will create a shield for the player which can absorb eplosion from the bomb. <br/>
                        Yellow will speed up the player.
					</p>
					<h5 className="smallTitle">How to win</h5>
					<p className="otherText">
                        Player has a goal of eliminating the enemies within the given time. If the 
                        player loses more than 3 lives or timer runs out the level will fail.
                        After the fail player has a option to restart the level or go to main menu.
					</p>
				</Jumbotron>
			</Container>
		</motion.div>
	)
}
export default BomberPerson