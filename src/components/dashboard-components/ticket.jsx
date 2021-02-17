import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';


export default class Ticket extends Component {   
    constructor(props) { // getting props
        super(props); // accessing props         
    }
    render(){
        return (          

            <div className='FormCenter'>
                  <div className="Tickets" id={this.props.ticket._id}>
                      <p>{this.props.ticket.ticketTitle}</p>
                      <small>Opened By: {this.props.ticket.ticketSender}</small>
                      <p>{this.props.ticket.ticketBody}</p>
                      <p>Ticket Status: {this.props.ticket.ticketStatus}</p>
                      <small>Ticket Created: {this.props.ticket.date}</small>
                  </div>      

            </div>
        );
    }   
}
