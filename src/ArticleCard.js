import React from 'react';
import './ArticleCard.css';  // Import CSS for styling

const ArticleCard = ({ title, thumbnail, description }) => {
    return (
        <div className="article-card">
            <img src={thumbnail} alt={title} className="article-image" />
            <div className="article-content">
                <h3>{title}</h3>
                <p>{description.length > 70 ? description.substring(0, 70) + '...' : description}</p>
            </div>
        </div>
    );
}

export default ArticleCard;
