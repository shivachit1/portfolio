import './index.scss'
import React from 'react'

const ContactForm = () =>{
    return(
        <div className="container">
            <h2 id="contact">Contact Me</h2>
            <form>
                <input type="name" name="fullName" placeholder="Your full Name"/>
                <input type="email" name="email" placeholder="Your E-mail address"/>
                <textarea name="message" placeholder="write message here"/>
                <button id="form-button" type="submit">Send</button>
            </form>
        </div>

    )
}

export default ContactForm