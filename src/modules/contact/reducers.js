import { combineReducers } from "redux"

const INITIAL_STATE = {
    currContact: null,
    contacts: []
}


export default function contactReducer(state = INITIAL_STATE, action) { //action : {type: 'SET_CURR_CONTACT', contact:contact}
    switch (action.type) {
        case 'SET_CURR_CONTACT':
            // state.currContact = action.contact //WRONG BECAUSE NOT IMMUTABLE
            return {
               
                ...state,
                currContact: action.contact
            }
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.contacts
            }
        case 'UPDATE_CONTACT':
            const idx = state.contacts.findIndex(currContact => {
                return currContact.id === action.contact.id
            })
            return {
                ...state,
                contacts: [
                    ...state.contacts.slice(0, idx),
                    action.contact,
                    ...state.contact.slice(idx + 1)
                ]

            }
        default:
            return state
    }
}