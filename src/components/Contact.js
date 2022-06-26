// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    const { name, phone, email, photo } = data;
    return (
        <div className="contact-card">
            <div className="contact-image">
                <img src={ photo } alt={ "contact-" + name } />
            </div>
            <div className="contact-detail">
                <p className="contact-name">{ name }</p>
                <p className="contact-phone">{ phone }</p>
                <p className="contact-email">{ email }</p>
            </div>
        </div>
    );
}

export default Contact;