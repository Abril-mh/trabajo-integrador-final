import React from 'react';
import { Link } from 'react-router';
const ContactItem = ({ contact }) => {
    return (
    <div className="contact-item">
        <img src={contact.avatar} alt={contact.name} width={100} />
        <div>
        <Link to={`/contact/${contact.id}/messages`}>
            <h2>{contact.name}</h2>
                <div className="info-row">
                    <span> Last Connection:
                    {contact.lastConnection}</span>
                    <span> Connection Status: {contact.connectionStatus}</span>
                </div>
        </Link>
        </div>
    </div>
    );
};

export default ContactItem;


