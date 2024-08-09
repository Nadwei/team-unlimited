import React from "react";
// import ExoticTechImg from "../assets/images/full-disclosure-image.jpg"
import Article from "../components/articles/tech/Article_1"
import articles from "../data/articles/Tech/article1";




export default function Exotic_Tech(){

const firstArticle = articles[0];

    return(
        <div id="tech-wrapper">
        <img id="tech-Img" src={require('../assets/images/dew-sat-earth-orbit.jpg')} alt=""/>
        <div id="tech_articles">
          <Article key={firstArticle.id} article={firstArticle} />
        </div>
      </div>
    )
}