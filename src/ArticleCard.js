import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleCard.css';

const ArticleCard = ({ id, title, thumbnail, description }) => {
    const trimmedDescription = description.length > 50 ? `${description.substring(0, 50)}...` : description;

    return (
        <Link to={`/study/${id}`} className="article-card sedan-regular">
            <img src={`${process.env.PUBLIC_URL}${thumbnail}`} alt={title} className="article-image" />
            <div className="article-content">
                <h3>{title}</h3>
                <div className="divider"></div>
                <p>{trimmedDescription}</p>
            </div>
        </Link>
    );
}

export default ArticleCard;
