import React, {Component} from 'react';
import SignUpForm from './signup';
import Signup from "./signup";

export default class Home extends Component {
    constructor(props) {
        super(props); // getting props

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(data) {
        this.props.handleLogin(data); // passing data to app component
        this.props.history.push("/dashboard");
    }
 
    render() {
        return (
        <div className="home">
            <h2>Homepage</h2>
            <h2>Status: {this.props.loggedInStatus} </h2>
            <SignUpForm handleAuth={this.handleAuth}/>
        </div>
        );
    }
}
