import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';


export default class CreateTicket extends Component {   
    constructor(props) { // getting props
        super(props); // accessing props
    
        this.state = {
            ticketSender: '', // logged users username. works as foreign key.
            ticketTitle: '',
            senderDepartment: '',
            ticketBody: '',
            ticketStatus: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value})
    }
    
    handleSubmit(event) {
        event.preventDefault();

        axios.post('http://localhost:4000/services/openticket', // posting to express router.
            {
                ticket: { // passing through user object
                    ticketSender: this.props.user.username,
                    ticketTitle: this.state.ticketTitle,
                    senderDepartment: this.state.senderDepartment,
                    ticketBody: this.state.ticketBody,
                    ticketStatus: "Open",
                }
            }
            ) 
            .then(response => { // response from express router.
                console.log(response);
            })
            .catch(error => console.log(error))
    }
    
    render() { 
    //componentDidMount??
    // do a get which with PROPS ?
    // use username to load list of tickets
        return (
          
            <div className='FormCenter'>
                <form className='FormFields' onSubmit={this.handleSubmit}>
                    <div className='FormField'>
                    <input type='text'
                    placeholder='Ticket Title'
                    name="ticketTitle"
                    onChange={this.handleChange} // calling event handler
                    defaultValue={this.state.ticketTitle} // global variable
                    className='FormField__Input'                          
                    />  
                    </div>

                    <div className='FormField'>
                    <input type='text'
                    placeholder='Department of Sender'
                    name="senderDepartment"
                    onChange={this.handleChange} // calling event handler   
                    defaultValue={this.state.senderDepartment}  // global variable 
                    className='FormField__Input'
                    />
                    </div>

                    <div className='FormField'>
                    <input type='text'
                    placeholder='Ticket Body'
                    name="ticketBody"
                    onChange={this.handleChange} // calling event handler
                    defaultValue={this.state.ticketBody} // global variable
                    className='FormField__Input'
                    />
                    </div>

                    <input type='submit' className='FormField__Button' value='Submit'></input>
                </form>
            </div>
        );
    }   
}
