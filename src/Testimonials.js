import React from 'react';
import './Testimonials.css'; // Ensure to create and link this CSS file

const testimonials = [
    { id: 1, text: "BITS Pilani Consulting Club provided exceptional insights for our project, which were pivotal for our strategic decision-making.", author: "CEO, TechCorp" },
    { id: 2, text: "The analytical prowess and thorough professionalism of the team were remarkable throughout our collaboration.", author: "Director, HealthPlus" },
    { id: 3, text: "We were impressed by the innovative approaches and detailed market analysis presented by BPCC.", author: "Founder, StartUpX" }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h1>Our Past collaborations</h1>
            <div className="scrolling-wrapper">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-box">
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <p className="testimonial-author">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
