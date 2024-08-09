import React from "react";
import Article from "../components/articles/briefing/Article_1";
import articles from "../data/articles/Briefing/article1";



export default function Briefing() {


  const firstArticle = articles[0];


  return (
    <div id="briefing-wrapper">
     <img id="briefing-img" src={require('../assets/images/earth-sky-universe-influence.jpg')} alt="Briefing Image"/>
    <Article key={firstArticle.id} article={firstArticle} />
    </div>
  );
}
