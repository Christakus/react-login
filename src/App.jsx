import './styles/App.css'
import React, { Component } from 'react';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Link, NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import axios from 'axios'
import SignUpForm from './components/signup'
import SignInForm from './components/signin'
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';
import Home from './components/home';


class App extends Component {

    constructor() {
      super();
      this.state = {
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      }

      this.handleLogin = this.handleLogin.bind(this);
    }

    // getting data from home component
    handleLogin(data) {
      console.log(data);
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: data // setting user object
      });
      //console.log(this.state.user);    
    }

    render() { // rending the page
        return (
      <BrowserRouter>
        <Navbar />

        {/* Binding the componenets to the nav links*/}
        <Route 
        exact path ="/dashboard" 
        render = {props => (
          <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} /> // passing through user object as prop.
        )}
        />
        
        <Route exact path="/signup" 
        render = {props => (
          <SignUpForm {...props} handleLogin={this.handleLogin} />
        )}
        />

        <Route exact path="/signin" 
        render = {props => (
          <SignInForm {...props} handleLogin={this.handleLogin} />
        )}
        />
    </BrowserRouter>
    
        );
    }
}

export default App;