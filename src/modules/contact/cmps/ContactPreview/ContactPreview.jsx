import React from 'react';
import './ContactPreview.scss'

export default function (props) {
    const { contect } = props
   
    return (
        
        <div className="contactPrev" >
            <img className="cats-img" src={`https://robohash.org/${contect.name}.png?set=set3`} alt="" />
            <div className="contact-details">
            <h2>Name: {contect.name}</h2>
            <h3> {contect.phone}</h3>
            <h3> {contect.email}</h3>
            </div>
        </div>

        
        )
}