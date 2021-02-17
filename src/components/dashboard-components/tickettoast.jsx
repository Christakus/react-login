import React, { useState, Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function TicketToast(props) {
    /*const[show, showToast] = useState(false);

    const toggleToast = () => showToast(!show);

    const toggleChat = () => {
        console.log(props.ticket._id); // 
    }

    return (
        <> 
            <div>
                <strong className="mr-auto">{props.ticket.ticketTitle}</strong>      
                {!show && <Button onClick={toggleToast}>Show Toast</Button>} 
            </div>
            <Toast show={show} onClose={toggleToast}>
            <Toast.Header>
                <strong className="mr-auto">{props.ticket.ticketTitle}</strong>
            </Toast.Header>
            <Toast.Body>
                <p>{props.ticket.ticketBody}</p>
                <Button onClick={toggleChat}>Open Ticket Chat</Button>              
                <p>Opened By: {props.ticket.ticketSender}</p>
                <small>Date Created: {props.ticket.date}</small>
                </Toast.Body>
            </Toast>
        </>

    );
    */
}

export default TicketToast;