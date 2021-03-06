import React from "react"
import About from "./components/About"
import Projects from "./components/Projects"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import { AnimatePresence } from "framer-motion"
import { Switch, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import BomberPerson from "./components/BomberPerson"

const App = () => {
	const location = useLocation()
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		})
	}, [location])
	return (
		<div>
			<Menu />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path="/linkedin" component={() => {
						window.location.replace("https://www.linkedin.com/in/tomasvalkendorff/")
					}} />
					<Route path="/itchio" component={() => {
						window.location.replace("https://tooppa.itch.io/")
					}} />
					<Route path="/github/portfolio" component={() => {
						window.location.replace("https://github.com/Tooppa/portfolio")
					}} />
					<Route path="/github" component={() => {
						window.location.replace("https://github.com/Tooppa")
					}} />
					<Route path="/about">
						<About />
						<Footer />
					</Route>
					<Route path="/projects/bomber">
						<BomberPerson />
						<Footer />
					</Route>
					<Route path="/projects">
						<Projects />
						<Footer />
					</Route>
					<Route path="/contact">
						<Contact />
						<Footer />
					</Route>
					<Route path="/">
						<Home />
						<Footer />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	)
}
export default App