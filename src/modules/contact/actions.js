import ContactService from "./ContactService"


const setCurrContact = (contact) => {
    return { type: 'SET_CURR_CONTACT', contact: contact }
}

export const loadCurrContact = (id) => {
    return async(dispatch) => {
        const contact = await ContactService.getContactById(id)
            // DO ANYTHING ASYNC

        return dispatch(setCurrContact(contact))
    }
}

const updateContact = (contact) => {
    return { type: 'UPDATE_CONTACT', contact }
}

export const saveContact = (contact) => {
    return async(dispatch) => {
        const contact = await ContactService.save(contact)
        return dispatch(updateContact(contact))
    }
}

const setContacts = (contacts) => {
    return { type: 'SET_CONTACTS', contacts }
}

export const loadContacts = () => {
    return async(dispatch) => {
        const contacts = await ContactService.query()
        return dispatch(setContacts(contacts))
    }
}