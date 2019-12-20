import React, { Component } from 'react'
import { logIn } from '../actions'
import { connect } from 'react-redux'
import './SignUpPage.scss'

class SignUpPage extends React.Component {

    state = {
        user: null
    }


    updateUser = (ev) => {
        const { value, name } = ev.target
        console.log(this.state);
        this.setState(prevState => {
            return {
                user: {
                    ...prevState.user,
                    [name]: value
                    
                }
            }
        })
    }

    saveUser =  (ev) => {
        ev.preventDefault()        
        this.props.logIn(this.state.user);
        this.props.history.push('/')
    }

    render() {
        return (
            <section>
                <form className="sign-up" onSubmit= {this.saveUser}>
                    <img className="imgBitCoin" src="https://res.cloudinary.com/artyompogosov/image/upload/v1576777069/z2rgylhqeeoeolganceq.png"/>
                    <label> Please enter your name:  </label>
                    <input onChange={this.updateUser} name="name" type="text" />
                    <button onClick ={this.updateUser}>Sign up</button>
                  
                </form>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currUser
    }
}

const mapDispatchToProps = {
    logIn
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUpPage)