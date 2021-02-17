import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';
import Ticket from './ticket';
import TicketToast from './tickettoast';
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search }from 'react-bootstrap-table2-toolkit';
import Searchbar from './Searchbar';

//import { Search as Searchbar, Search as ClearSearchButton } from 'react-bootstrap-table2-toolkit';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
//const { SearchBar, ClearSearchButton } = Search;

class TicketList extends Component {   
    constructor(props) { // getting props
        super(props); // accessing props
        
        this.state = {
            tickets: [],
            columns: [               
                { dataField: 'date', text: 'Date', sort:true},
                { dataField: 'ticketTitle', text: 'Title', sort:true },
                { dataField: 'ticketSender', text: 'Opened By', sort:true },
                { dataField: 'ticketStatus', text: 'Ticket Status', sort:true}
            ],
            defaultSorted: [{
                dataField: 'date',
                order: 'desc'
            }],
            options: paginationFactory( {
                paginationSize: 5,
                pageStartIndex: 1,
                firstPageText: 'First',
                prePageText: 'Back',
                nextPageText: 'Next',
                lastPageText: 'Last',
                nextPageTitle: 'First page',
                prePageTitle: 'Pre page',
                firstPageTitle: 'Next page',
                lastPageTitle: 'Last page',
                showTotal: true,
                sizePerPageList: [{
                  text: '2', value: 2
                }, {
                  text: '4', value: 4            
                }]
            }),
        }
              
        this.handleTickets = this.handleTickets.bind(this);
        //this.displayTickets = this.displayTickets.bind(this);
    }

    /* this dynamic function loads a new ticket component for each ticket the user has. */
   /* displayTickets() {
        if(this.state.tickets.length > 0) {
            return (

                this.state.tickets.map(ticket => ( <TicketToast ticket={ticket} />)) // calling the ticket component and passing through a ticket as prop.
            )
        }
    }*/

    handleTickets(data) {
        this.setState({tickets: data})
        console.log(this.state.tickets);
    }

    componentDidMount()
    {
        axios.get("http://localhost:4000/services/loadusertickets")
        .then(response => {
            console.log(response);
            this.handleTickets(response.data);
            //this.props.handleTickets(response.data)
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render() {
        return (         
            <div className='FormCenter'>
                <form className='FormFields' onSubmit={this.handleSubmit}>
                  <h1>Hi !</h1>
                  <div className="Tickets">
                        <ToolkitProvider
                        bootstrap4
                        keyField='date'
                        data={this.state.tickets}
                        columns={this.state.columns}
                        search
                        >
                            {
                                props => (              
                                <div>
                                    <h6>Input something at below input field:</h6>
                                   {/*Search bar goes here......*/}
                                   <Searchbar { ...props.searchProps } />
                                    <hr />
                                    <BootstrapTable                                                           
                                    defaultSorted={this.state.defaultSorted}
                                    pagination={this.state.options}
                                    {...props.baseProps}
                                    />
                                </div>
                                )
                            }
                        </ToolkitProvider>                             
                    </div>
                </form>
            </div>
        );
    }
}

export default TicketList;
