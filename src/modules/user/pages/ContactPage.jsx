
import React, { Component } from 'react'
import ContactService from '../../contact/ContactService'
import ContactList from '../../contact/cmps/ContactList/ContactList'
import {Link} from 'react-router-dom'



export default class ContactPage extends Component {
    state = {
        contacts: [],
        filter: ''
    }
    handleFilter = (value) => {
        this.setState({filter:value})
    }
    async componentDidMount() {
        const contacts = await ContactService.getContacts()
        this.setState({ contacts })
        console.log(contacts);
        
    }
    render() {
        const { filter, contacts } = this.state
        let contactsToShow
        if (!filter) contactsToShow = contacts
        else contactsToShow = contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase())
        })
        return (
            <section>
            <Input handleFilter={this.handleFilter} />
            <Link to={`/contacts/edit`}>
                   add
                </Link>
            <ContactList contacts={contactsToShow} />
        </section>
        )
    }
}

function Input({handleFilter}) {
    return (
        <input type="text" onChange={(ev)=> handleFilter(ev.target.value)} />
    )
}
