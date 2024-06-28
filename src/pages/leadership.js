import React from "react";
import Article from "../components/articles/personal-enlightenment/Article_1";
import articles from "../data/articles/personal-enlightenment/article1";

export default function PersonlEnlightenmentPage() {
  // Get the first article
  const firstArticle = articles[0];

  return (
    <div id="philosophy-wrapper">
      <img id="philoSpiritImg" src={require('../assets/images/personal-enlightenment.jpg')} alt=""/>
      <div id="holistic_wellness_articles">
        <Article key={firstArticle.id} article={firstArticle} />
      </div>
    </div>
  );
}
