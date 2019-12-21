import React, { Component } from "react";
import { getLoggedUser } from "../../user/actions";
import { connect } from "react-redux";
import { UserService } from "../../user/userService";

class TransferFund extends Component {
  state = {
    contact: {},
    user: {},
    amount: 0
  };

  onTransferCoins = (contact, amount) => {
    UserService.addMove(contact, amount);
    this.props.history.push("/");
  };

  render() {
    const { contact, user } = this.props;
    let { amount } = this.state;
    console.log(user);
    if (contact && user)
      return (
        <section>
          <h2>Transfer coins to: {contact.name}</h2>
          <h2>
            Amount:{" "}
            <input
              onChange={e => (amount = e.target.value)}
              placeholder={"Max" + user.coins}
              type="number"
              max={user.coins}
              min="0"
            />
          </h2>
          <button onClick={ev => this.onTransferCoins(contact, amount)}>
            TRANSFER
          </button>
        </section>
      );
    else return <h2>Contact not found</h2>;
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    contact: state.contact.currContact,
    user: state.user.currUser
  };
};

const mapDispatchToProps = {
  getLoggedUser
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferFund);
