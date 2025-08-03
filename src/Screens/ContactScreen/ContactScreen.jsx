import React, { useState } from 'react';
import ContactList from '../../componente/ContactList/ContactList.jsx';
import { getContactList } from '../../services/ContactService';
import "./ContactScreen.css"

const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <>
            <header className='header-title'>
                <div className="header-content">
                    <h1>Red de comunicacion pirata</h1>
                </div>
            </header>
            <form className="buscador-ml">
                <input placeholder="buscar contacto"></input>
            </form>
            <main className="contactos-contenedor">
                <div className="contactos-lista">
                    <ContactList contacts={contactsState} />
                </div>
            </main>
        </>
    );
};

export default ContactScreen;