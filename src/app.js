import React from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Footer from './components/Footer'
import { AnimatePresence } from "framer-motion"
import { Switch, Route, useLocation } from "react-router-dom"

const App = () => {
    const location = useLocation()
    return (
        <div className="app">
            <Menu />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </AnimatePresence>
            <Footer />
        </div>
    )
}
export default App;