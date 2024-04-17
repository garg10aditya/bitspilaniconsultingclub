import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './About';
import ArticleCard from './ArticleCard';
import Navbar from './Navbar';

function App() {
  const articles = [
    {
      title: "Latest Insights in Consulting",
      thumbnail: "https://via.placeholder.com/150",
      description: "Discover the latest trends and strategies in management consulting that are transforming businesses worldwide."
    },
    {
      title: "Emerging Markets Analysis",
      thumbnail: "https://via.placeholder.com/150",
      description: "An in-depth look at the opportunities in emerging markets and how businesses can capitalize on them."
    },
    {
      title: "Sustainability in Business",
      thumbnail: "https://via.placeholder.com/150",
      description: "How companies are integrating sustainability practices into their operations for long-term benefits."
    }
  ];


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <header className="App-header">
                <div className="typewriter">
                  <header className='hero-header'>
                    <h1>Welcome to BITS Pilani Consulting Club</h1>
                  </header>
                  <div className="card-container">
                    {articles.map(article => (
                      <ArticleCard
                        key={article.title}
                        title={article.title}
                        thumbnail={article.thumbnail}
                        description={article.description}
                      />



                    ))}

                  </div>
                </div>
              </header >
            </>
          } />
          <Route path="/about" element={<About />} />

        </Routes>
      </div >
    </Router >
  );
}

export default App;
