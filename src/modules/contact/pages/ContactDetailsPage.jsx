import React, { Component } from 'react'
import ContactService from '../ContactService'
import { Link } from 'react-router-dom'
import './ContactDetailsPage.scss'

export default class ContactDetailsPage extends Component {
    state={
        contact:null
    }
    async componentDidMount() {
        console.log(this.props)
        const { _id } = this.props.match.params
        const contact = await ContactService.getContactById(_id);
        if (contact) this.setState({ contact })
    }
    deleteContact = async ()=>{
        const { _id } = this.props.match.params
         await ContactService.deleteContact(_id);
         
    }
    render() {
        const {contact}=this.state
        if(contact) return  (
            <section >
                <section className="contact-full-details">
                <div className="contact-details">
                <h1>{contact.name}</h1>
                <h1>{contact.email}</h1>
                <h1>{contact.phone}</h1>
                </div>
                <img src={`https://robohash.org/${contact.name}.png?set=set3`} alt="" />
                </section>
                <div className="details-btn">
                <button> <Link to="/contacts">
                   Back  </Link></button>
                <button onClick={this.deleteContact}><Link to="/contacts">Delete  </Link></button>
              
                <button> <Link to={`/contacts/edit/${contact._id}`}>
                    edit
                </Link></button>
                </div>
            </section>
        )
        else return (
            <div><h1>No robot was found</h1></div>
        )
    }
}
