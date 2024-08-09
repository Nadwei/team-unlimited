import React from 'react';
import briefingArticles from '../data/articles/Briefing/article1';
import techArticles from '../data/articles/Tech/article1';
import counterDynamicalArticles from '../data/articles/CounterDynamical/article2';
// import homeImage from "../assets/images/"


export default function HomePage() {

// load most recent articles using State variable...

  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const combinedArticles = [...briefingArticles, ...counterDynamicalArticles, ...techArticles];
    combinedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    setArticles(combinedArticles);
  }, []);

  const renderArticleComponent = (article) => {
    if (briefingArticles.includes(article)) {
      const ArticleBriefing = require('../components/articles/briefing/Article_1').default;
      return <ArticleBriefing key={article.id} article={article} />;

    } else if (techArticles.includes(article)) {
      const ArticleTech = require('../components/articles/tech/Article_1').default;
      return <ArticleTech key={article.id} article={article} />;

    } else if (counterDynamicalArticles.includes(article)) {
      const ArticleCounterDynamical = require("../components/articles/counterdynamical/Article_1").default;
      return <ArticleCounterDynamical key={article.id} article={article} />;
      }
  
    return null;
  };

  return (
    <div id="home-wrapper">
      <img id="home-img" src={homeImage} alt="Home" />
      <h1 id="home-heading">Most Recent</h1>
      <div id="home-grid">
        {articles.map(article => renderArticleComponent(article))}
      </div>
    </div>
  );
}
