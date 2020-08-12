import React from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Home from './components/Home'
import Contact from './components/Contact'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './styles/app.css'

import { Switch, Route } from "react-router-dom"

const App = () => {
    return (
        <div className="app">
            <Menu />
            <Switch>
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
            <Footer />
        </div>
    )
}
export default App;