import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './About';
import ArticleCard from './ArticleCard';
import Navbar from './Navbar';
import ArticleDetail from './ArticleDetail';
import studies from './studies.json'; // Ensure this file is correctly structured and imported
import ContactForm from './ContactForm';
import Testimonials from './Testimonials';
import Events from './Events';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <div className="App-header sedan-regular">
                <img className="main-logo" src='./logo.jpg' />
              </div>
              <div className="card-container sedan-regular">
                {studies.map((study, index) => (
                  <ArticleCard
                    key={index} // Ideally, use a unique identifier if available
                    id={study.id}
                    title={study.title}
                    thumbnail={study.thumbnail}
                    description={study.description}
                  />
                ))}
              </div>
              <div className="testimonials-section sedan-regular">
                <Testimonials />

              </div>
              <ContactForm />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/study/:id" element={<ArticleDetail />} /> {/* Fixed route for React Router v6 */}
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<ContactForm />} />


        </Routes>
      </div>


    </Router>
  );
}

export default App;
