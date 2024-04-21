import emailjs from 'emailjs-com';
import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8yfa9b5', 'template_ducb6z6', e.target, 'gs8laFkkI97yAgOeq')
            .then((result) => {
                alert('Message sent successfully!');
                console.log('Email sent:', result.text);
                e.target.reset();
            }, (error) => {
                alert('Failed to send message, please try again.');
                console.log('Email sending failed:', error.text);
            });
    };

    return (
        <div className="contact-form sedan-regular">
            <h2>Contact Us</h2>
            <form onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
                <p>Connect on:<a href="https://www.instagram.com/bitspilaniconsultingclub/" className="navbar-icon"><FontAwesomeIcon icon={faInstagram} /></a> <a href="https://www.linkedin.com/company/bits-pilani-consulting-club/" className="navbar-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                </p>
            </form>
        </div>
    );
};

export default ContactForm;

