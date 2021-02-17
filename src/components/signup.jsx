import React, {Component} from 'react';
//import {  Link } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends Component {
    constructor(props) { // global constructor for storing user input field values, default empty
        super(props) // getting props from App.jsx.

        this.state = { // Sign up variables.
            fullName: '',
            username: '',
            email: '',
            password: ''
        };
          
        this.onSubmit = this.onSubmit.bind(this)// binding functions to the contructor to call in render.
        this.handleChange = this.handleChange.bind(this);
        this.handleAuth = this.handleAuth.bind(this); // handing the sign up, this is done after the account is created!
    }    

    handleAuth(data) {
        this.props.handleLogin(data); // sending data to App.jsx.

        this.props.history.push("dashboard"); // redirecting to dashboard. 
    }
    handleChange(event) {

        this.setState({[event.target.name]: event.target.value }); // updating state variables when data is enteres on form fields
    }


    onSubmit(event){
        event.preventDefault() // prevents the form to act in a default way, i.e when you submit a form, the whole page refreshes
       console.log(this.state);
        axios.post('http://localhost:4000/services/signup', // posting to express router.
            {
                user: { // passing through user object
                    fullName: this.state.fullName,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                },
                
            }
            ) 
            .then(response => { // response from express router.
                if(response.statusText === "OK") // if the account was created
                this.handleAuth(response.data); // calling function to send data to App.jsx and redirect to dashboard.
            })
            .catch(error => console.log(error))

    }
    render() { // rending the page
        return (
                <div className='FormCenter'>
                    <form className='FormFields' onSubmit={this.onSubmit}>
                        <div className='FormField'>
                        <input type='text'
                        placeholder='Full Name'
                        name="fullName"
                        onChange={this.handleChange} // calling event handler
                        defaultValue={this.state.fullName} // global variable
                        className='FormField__Input'                          
                        />  
                        </div>

                        <div className='FormField'>
                        <input type='text'
                        placeholder='Username'
                        name="username"
                        onChange={this.handleChange} // calling event handler   
                        defaultValue={this.state.username}  // global variable 
                        className='FormField__Input'
                        />
                        </div>

                        <div className='FormField'>
                        <input type='text'
                        placeholder='Email'
                        name="email"
                        onChange={this.handleChange} // calling event handler
                        defaultValue={this.state.email} // global variable
                        className='FormField__Input'
                        />
                        </div>

                        <div className='FormField'>
                        <input type='password'
                        placeholder ='Password'
                        name="password"
                        onChange={this.handleChange} // calling event handler
                        defaultValue={this.state.password} // global variable
                        className='FormField__Input'
                        />
                        </div>

                        <input type='submit' className='FormField__Button' value='Submit'></input>
                    </form>
            </div>
        );
    }
}

export default SignUpForm;