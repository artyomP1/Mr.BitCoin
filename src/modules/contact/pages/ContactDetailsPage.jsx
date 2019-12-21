import React, { Component } from "react";
import ContactService from "../ContactService";
import { Link } from "react-router-dom";
import "./ContactDetailsPage.scss";
import TransferFund from "../../user/cmps/TransferFund";
import { loadCurrContact } from "../actions";
import { connect } from "react-redux";
import MovesList from "../../user/cmps/MovesList";

class ContactDetailsPage extends Component {
  state = {
    contact: {}
  };
  async componentDidMount() {
    const { _id } = this.props.match.params;
    console.log(_id);
    const contact = await this.props.loadCurrContact(_id);
    console.log(contact);
    if (contact) this.setState({ contact: contact.contact });
  }

  deleteContact = async () => {
    const { _id } = this.props.match.params;
    await ContactService.deleteContact(_id);
  };
  render() {
    const { contact } = this.state;
    console.log(this.state);
    if (contact)
      return (
        <section>
          <section className="contact-full-details">
            <div className="contact-details">
              <h1>{contact.name}</h1>
              <h1>{contact.email}</h1>
              <h1>{contact.phone}</h1>
            </div>
            <img
              src={`https://robohash.org/${contact.name}.png?set=set3`}
              alt=""
            />
          </section>
          <div className="details-btn">
            <button>
              {" "}
              <Link to="/contacts">Back </Link>
            </button>
            <button onClick={this.deleteContact}>
              <Link to="/contacts">Delete </Link>
            </button>

            <button>
              {" "}
              <Link to={`/contacts/edit/${contact._id}`}>edit</Link>
            </button>
          </div>
          <section>
            <TransferFund />
          </section>
          <section>{/* <MovesList /> */}</section>
        </section>
      );
    else
      return (
        <div>
          <h1>No contact was found</h1>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    contact: state.contact.currContact
  };
};

const mapDispatchToProps = {
  loadCurrContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailsPage);
