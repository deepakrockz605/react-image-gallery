import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import './scss/App.scss'
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <PublicRoute restricted={false} exact path="/" component={Landing} />
          <div className="container">
            <PublicRoute restricted={true} exact path="/register" component={Register} />
            <PublicRoute restricted={true} exact path="/login" component={Login} />
            <PrivateRoute  exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App