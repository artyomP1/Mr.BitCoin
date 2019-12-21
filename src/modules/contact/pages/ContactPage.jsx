import React, { Component } from "react";
import ContactService from "../ContactService.js";
import ContactList from "../cmps/ContactList/ContactList.jsx";
import { Link } from "react-router-dom";

export default class ContactPage extends Component {
  state = {
    contacts: [],
    filter: ""
  };
  handleFilter = value => {
    this.setState({ filter: value });
  };
  async componentDidMount() {
    const contacts = await ContactService.getContacts();
    this.setState({ contacts });
    console.log(contacts);
  }
  render() {
    const { filter, contacts } = this.state;
    let contactsToShow;
    if (!filter) contactsToShow = contacts;
    else
      contactsToShow = contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      });
    return (
      <section>
        <div className="filterArea">
          <Input handleFilter={this.handleFilter} />
          <button>
            {" "}
            <Link to={`/contacts/edit`}>Add new contact</Link>
          </button>
        </div>
        <ContactList contacts={contactsToShow} />
      </section>
    );
  }
}

function Input({ handleFilter }) {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={ev => handleFilter(ev.target.value)}
    />
  );
}
