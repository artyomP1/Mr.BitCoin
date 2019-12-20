import React from 'react';
import BitcoinService from '../../modules/common/BitcoinService'
import { getLoggedUser } from '../../modules/user/actions'
import { connect } from 'react-redux'

class HomePage extends React.Component {
    state = {
        bitCoinRate: 0,
        user:'',

    }

    async componentDidMount() {
        let loggedUser = this.props.getLoggedUser()
        console.log(loggedUser)
        // this.setState({ loggedInUser })
        if (!loggedUser.user) this.props.history.push('/signup')
        let bitCoinRate = await BitcoinService.getRate();
        this.setState({ bitCoinRate })
    }

    signOut = () => {
        localStorage.clear();
        this.props.history.push('/signUp')
    }

    render() {
        const { user } = this.props;
        console.log('user', user);
        const { bitCoinRate  } = this.state
       if (user) return ( <div className="userDetailsMain">
            <img src={`https://robohash.org/${user.name}.png?set=set2`} alt="" />
            <div>
            <h1>Hello  { user.name}!</h1>
            <h2> <img src="https://res.cloudinary.com/artyompogosov/image/upload/v1576857912/yjlsxpfm1qdyg4acrzuv.png"/>Coin:{ user.coins} </h2>
             < h2 >  <img src="https://res.cloudinary.com/artyompogosov/image/upload/v1576777069/z2rgylhqeeoeolganceq.png"/> BTC: { bitCoinRate } </h2>
            </div></div>)
              else return <h2>no User</h2>
    }

}
    
    const mapStateToProps = (state) => {
        return {
            user: state.user.currUser
        }
    }
    
    const mapDispatchToProps = {
        getLoggedUser
    }


    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomePage)

