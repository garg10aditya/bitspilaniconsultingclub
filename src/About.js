import React from 'react';
import './About.css';  // This will contain the styling for the About section
import presidentPhoto from './president.jpeg';  // Path to president's photo
import vicePresidentPhoto from './vice-president.jpeg';  // Path to vice president's photo
import ContactForm from './ContactForm';
const About = () => {
    return (
        <div className="about-section sedan-regular" id="about">
            <h2>About Us</h2>
            <br></br>

            <p>
                The BITS Pilani Consulting Club was established with the vision to be the premier platform that connects talented BITSians with the global consulting industry. Our mission is to prepare our members not only for their careers but for their roles as leaders in a challenging corporate environment. Through a series of carefully curated workshops, real-world consulting projects, and networking events, we strive to equip our members with the skills and knowledge necessary to excel.
            </p>
            <p>
                With over 30 active members, the club brings together individuals from diverse academic backgrounds who share a common passion for consulting. The benefits of joining the club include firsthand insights into the consulting world, access to alumni working in top firms, and opportunities to work on live projects that impact real clients.
            </p>
            <p>
                Our club is active in organizing annual meets, expert panel discussions, and interactive sessions with industry leaders, providing our members unparalleled exposure to the consulting industry. Our signature events include the Annual Case Study Competition, which have been pivotal in developing the practical consulting skills of our members.
            </p>
            <br>
            </br>
            <h2>Meet the Team</h2>

            <div className="leadership">
                <div className="leader">
                    <img src={presidentPhoto} alt="President" className="leader-photo" />
                    <h3>Aaron Bimbrahw</h3>
                    <p>President</p>
                </div>
                <div className="leader">
                    <img src={vicePresidentPhoto} alt="Vice President" className="leader-photo" />
                    <h3>Amit Prakash</h3>
                    <p>Vice President</p>
                </div>
            </div>

        </div>

    );
}

export default About;
