import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
import Login from './components/login';
import Vote from './components/vote';
import Results from './components/results';


import "./css/main.css"
import "./css/nav.css"

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/vote" component={Vote} />
        <Route path="/results" component={Results} />
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('app'));