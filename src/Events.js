import React from 'react';
import './Events.css';  // Make sure to create this CSS file for styling

const upcomingEvents = [
    { id: 1, title: "Annual Tech Symposium", date: "July 15, 2024", description: "Join us for our annual symposium on emerging technologies and their impact on global industries." },
    { id: 2, title: "Startup Pitch Day", date: "August 22, 2024", description: "Meet the new faces of innovation at our startup pitch day. A great opportunity for networking and collaboration." }
];

const pastEventsPhotos = [
    "/images/study1/img1.jpg",
    "/images/study1/img1.jpg", "/images/study1/img1.jpg", "/images/study1/img1.jpg", "/images/study1/img1.jpg", "/images/study1/img1.jpg", "/images/study1/img1.jpg", "/images/study1/img1.jpg", "/images/study1/img1.jpg",
    // Assume images are stored in the public/images directory
];

const Events = () => {
    return (
        <div className="events-container sedan-regular">

            <h1>Past Events</h1>
            <h2>APOGEE 2024 Case Questa</h2>
            <div className="photo-gallery">
                {pastEventsPhotos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Event ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Events;
