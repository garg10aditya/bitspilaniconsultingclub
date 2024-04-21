import React from 'react';
import { useParams, Link } from 'react-router-dom';
import studies from './studies.json';  // Ensure this path is correct
import './ArticleDetail.css'; // CSS for styling
import ArticleCard from './ArticleCard'; // Import ArticleCard component

const ArticleDetail = () => {
    const { id } = useParams();
    const study = studies.find(study => study.id.toString() === id);

    if (!study) {
        return <p>Study not found!</p>;
    }

    return (
        <div className="article-detail">
            <div className="main-content">
                <h1 className="ADh1">{study.title}</h1>
                {study.images.map((img, index) => (
                    <img key={index} src={img} alt={`Detail ${index + 1}`} />
                ))}
            </div>
            <div className="sidebar">
                <h1 className="ADh1">Other Studies</h1>
                {studies.filter(item => item.id.toString() !== id).map((item) => (
                    <ArticleCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        thumbnail={item.thumbnail}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArticleDetail;
