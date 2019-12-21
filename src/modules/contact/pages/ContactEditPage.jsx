import React, { Component } from "react";
import ContactService from "../ContactService";
import { loadCurrContact } from "../actions";
import { saveContact } from "../actions";
import "./ContactEditPage.scss";
import { connect } from "react-redux";

class ContactEditPage extends Component {
  state = {
    contact: null
  };

  async componentDidMount() {
    let contact;
    const id = this.props.match.params;

    if (id._id) {
      console.log(id);
      contact = await this.props.loadCurrContact(id._id);
      return this.setState({ contact: this.props.contact });
    } else contact = ContactService.getEmptyContact();
    console.log(contact);
    this.setState({ contact });
  }

  updateContact = (ev, name) => {
    const { value } = ev.target;
    this.setState(prevState => {
      return {
        contact: {
          ...prevState.contact,
          [name]: value
        }
      };
    });
  };
  saveContact = async ev => {
    ev.preventDefault();
    await ContactService.saveContact(this.state.contact);
    this.props.history.push("/contacts");
  };

  render() {
    const { contact } = this.state;
    return (
      contact && (
        <section className="contact-edit">
          <h2> {contact._id ? "Edit Contact" : "Add Contact"}</h2>
          <form className="edit-form" action="" onSubmit={this.saveContact}>
            <label> Name: </label>
            <input
              onChange={ev => this.updateContact(ev, "name")}
              value={contact.name}
              type="text"
            />

            <label> phone: </label>
            <input
              onChange={ev => this.updateContact(ev, "phone")}
              value={contact.phone}
            />

            <label> email: </label>
            <input
              onChange={ev => this.updateContact(ev, "email")}
              type="text"
              value={contact.email}
            />

            <button>{contact._id ? "Save Contact" : "Add"}</button>
          </form>
        </section>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contact.currContact
  };
};

const mapDispatchToProps = {
  loadCurrContact,
  saveContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditPage);
