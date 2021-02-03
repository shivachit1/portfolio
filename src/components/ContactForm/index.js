import './index.scss'
import React from 'react'

const ContactForm = () =>{
    return(
        <div className="container">
            <h3>Contact Me</h3>
            <form>
                <input name="fullName" placeholder="Your full Name"/>
                <input name="email" placeholder="Your E-mail address"/>
                <textarea name="message" placeholder="write message here"/>
                <button type="submit">Send</button>
            </form>
        </div>

    )
}

export default ContactForm