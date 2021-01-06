import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {

    constructor() { // global constructor for storing user input field values, default empty
        super()
        this.state = { // global object
            fullName: '',
            username: '',
            email: '',
            password: ''
        };
        this.changeFullName = this.changeFullName.bind(this) // binding functions to the contructor for setting the states
        this.changeUsername = this.changeUsername.bind(this)// binding functions to the contructor for setting the states
        this.changeEmail = this.changeEmail.bind(this)// binding functions to the contructor for setting the states
        this.changePassword = this.changePassword.bind(this)// binding functions to the contructor for setting the states
        this.onSubmit = this.onSubmit.bind(this)// binding functions to the contructor for setting the states
    }    
    changeFullName(event){ // events listener that triggers when data is entered in input field
        this.setState({ // react function that changes the values inside of the state
            fullName:event.target.value // value of input field
        })               
    }    
    changeUsername(event){ // events listener that triggers when data is entered in input field
        this.setState({ // react function that changes the values inside of the state
            username:event.target.value // value of input field
        })         
    }
    changeEmail(event){ // events listener that triggers when data is entered in input field
        this.setState({ // react function that changes the values inside of the state
            email:event.target.value // value of input field
        })         
    }
    changePassword(event){ // events listener that triggers when data is entered in input field
        this.setState({ // react function that changes the values inside of the state
            password:event.target.value // value of input field
        })        
    }
    onSubmit(event){
        event.preventDefault() // prevents the form to act in a default way, i.e when you submit a form, the whole page refreshes
    
        // when a user submits the form by clicking submit button, 
        // this will get the current states of the globally defined state
        const registeredUser = {
            fullName: this.state.fullName,
            username: this.state.username,
            email:  this.state.email,
            password: this.state.password
        }
       // console.log(registeredUser);

        axios.post ('http://localhost:4000/services/signup', registeredUser) // passing to the router in the backend, through the api
            .then(response => console.log(response.data))
            .catch(error => console.log(error))

          /*this.setState({
                fullName:'',
                username:'',
                email:'',
                password:''
            });*/         
    }
    render() { // rending the page
        return (
            <div>
                <div className='container'>
                    <div className ='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Full Name'
                            onChange={this.changeFullName} // calling event handler
                            defaultValue={this.state.fullName || ''} // global variable
                            className='form-control form-group'                          
                            />  

                            <input type='text'
                            placeholder='Username'
                            onChange={this.changeUsername} // calling event handler   
                            //defaultValue={this.props.default || ''}                        
                            defaultValue={this.state.username}  // global variable 
                            className='form-control form-group'
                           />

                            <input type='text'
                            placeholder='Email'
                            onChange={this.changeEmail} // calling event handler
                            defaultValue={this.state.email} // global variable
                            className='form-control form-group'
                           />

                            <input type='password'
                            placeholder ='Password'
                            onChange={this.changePassword} // calling event handler
                            defaultValue={this.state.password} // global variable
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;