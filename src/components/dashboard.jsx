import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import UserProfile from './userprofile';
import CreateTicket from '../components/dashboard-components/createticket';
import TicketList from '../components/dashboard-components/ticketlist';
export default class Dashboard extends Component {   
    constructor(props) { // getting props
        super(props); // accessing props
    
        this.state = {
            tickets: [] // array of tickets.

        }
        this.handleTickets = this.handleTickets.bind(this);
    }
    handleTickets(data) // getting data from ticketlist.jpx
    {
        this.setState({
            ticket: data // setting user object
          });
        console.log(this.state.tickets);
        //TODO load array of tickets.
    }

    componentDidMount() {
        axios.get('http://localhost:4000/dashboard', {withCredentials: true})        
       .then(response => {    // response is user as  JSON response from server
           // populating user fields with user details from database response
           if(response.statusText === "OK") // if request was successful.
           {
               console.log(response);
               //this.handleAuth(response.data);
           }                          
       })
       .catch(error => console.log(error)) 
    }

    render(){
    //componentDidMount??
    // do a get which with PROPS ?
    // use username to load list of tickets
    return (

        <div className="App">
        <div className="App__Aside">
        <TicketList />
        </div>

        <div className="App__Form">
            <div className="Form__Title">
            <h3>Open a Ticket</h3>
            </div>
            {/*<CreateTicket user={this.props.user} />*/}
           
            </div>    
        </div>

    );
}
}
