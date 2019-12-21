export const UserService = {
    logIn,
    getLoggedUser,
    addMove
}

function getLoggedUser() {
    return JSON.parse(localStorage.getItem('user'));
}

function logIn(user) {
    const newUser = { name: user.name, coins: 100, moves: [] }
    localStorage.setItem('user', JSON.stringify(newUser));
}

function addMove(contact, amount){
    let move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount: amount
    }
    let user = JSON.parse(localStorage.getItem('user'));
    user.coins -= amount
    user.moves.unshift(move)
   localStorage.setItem('user', JSON.stringify(user));
}