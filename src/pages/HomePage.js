import React, { useState, useEffect } from 'react';

import briefingArticles from '../data/articles/Briefing/article1';
// import techArticles from '../data/articles/Tech/article1';
import counterDynamicalArticles from '../data/articles/CounterDynamical/article1';

import homeImage from "../assets/images/earth-sky-universe-influence.jpg";







export default function HomePage() {
  // most recent articles using State variable
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Combine articles from different sources
    const combinedArticles = [
      ...briefingArticles,
      // ...techArticles,
      ...counterDynamicalArticles
    ];

    // Sort articles by date
    combinedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

    setArticles(combinedArticles);

    console.log(combinedArticles);
  }, []);

  const renderArticleComponent = (article) => {
    if (briefingArticles.includes(article)) {
      const ArticleBriefing = require('../components/articles/briefing/Article_1').default;      return <ArticleBriefing key={article.id} article={article} />;
    } else {
      return null;
    }
  };

  return (
    <div id="home-wrapper">
      <img id="home-image" src={homeImage} alt="Home" />
      <div id="home-grid">
        {articles.map(article => renderArticleComponent(article))}
      </div>
    </div>
  );
}
