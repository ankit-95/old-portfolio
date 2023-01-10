import React from 'react'
import "./Contact.scss"
import { useState } from 'react';

export default function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        setMessage(true);
    };
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contact1.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>
        </div>
    );
}