import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import Dashboard from './dashboard';
import axios from 'axios';
import UserProfile from './userprofile';
import { useHistory } from 'react-router-dom';

class SignInForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fullName: '',
            username: '',
            email: '',
            password: ''        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this) // binding submit function 
        this.handleAuth = this.handleAuth.bind(this);
    }

//#region EVENT - HANDLERS
   
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()

        //console.log("Touch")
        // calling to signin router in the backend, through the services route
        axios.post('http://localhost:4000/signin', 
         {params: this.state})  // passing through user object with username and password         
        .then(response => {    // response is user as  JSON response from server
            // populating user fields with user details from database response
            if(response.statusText === "OK") // if request was successful.
            {
                console.log(response);
                this.handleAuth(response.data);
            }                          
        })
        .catch(error => console.log(error)) 
    }

    // handling login once the data has been recieved from database.
    handleAuth(data) {
        this.props.handleLogin(data); // sending data to App.jsx.

        this.props.history.push("dashboard"); // redirecting to dashboard. 
    }
 
//#endregion

    render()
    {
        return(
            <div className='FormCenter'>
                <form className='FormFields' onSubmit={this.handleSubmit}> 
                    <div className='FormField'>
                        <input type='text'
                        placeholder='Username'
                        name="username"
                        onChange={this.handleChange} // calling event handler   
                        defaultValue={this.username}  // global variable 
                        className='FormField__Input'
                        />
                    </div>

                    <div className='FormField'>
                        <input type='password'
                        placeholder ='Password'
                        name="password"
                        onChange={this.handleChange} // calling event handler
                        defaultValue={this.password} // global variable
                        className='FormField__Input'
                        />
                    </div>

                    <input type='submit' className='FormField__Button' value='Submit'></input>

                </form>                              
            </div> 
        );
    }
}

export default SignInForm;