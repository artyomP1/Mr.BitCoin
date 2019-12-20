import React from 'react';
import {Link} from 'react-router-dom'
import './ContactList.scss'
import ContactPreview from '../ContactPreview/ContactPreview'



export default function ({contacts}){
    // const click=()=>{
    //     // e.stopPropagation();
    //     console.log(1);
    // }
    return (<ul className="robot-list">
    {contacts.map(contect => {
        return (
            <li  key={contect._id}>
            <Link to={`/contacts/${contect._id}`}>
                <ContactPreview contect={contect} />
            </Link>
            {/* <button onClick={click}> delete</button> */}

            </li>
        )
    })}
</ul>)
}