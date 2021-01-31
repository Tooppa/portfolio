import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'
import App from './app'
import './styles/main.css'

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'))