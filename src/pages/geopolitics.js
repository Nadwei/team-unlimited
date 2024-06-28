import React from "react";
import Article_1 from "../components/articles/holistic-wellness/Article_1" // Make sure to import the HolisticWellnessArticle component
import holisticArticle from "../data/articles/holistic-wellness/article1";


export default function HolisticWellness() {
    return(
        <div>
            <img id="mindBodyImg" src={require('../assets/images/holistic-wellness.jpg')} alt="" />
            <div id="holistic_wellness_articles">
                {holisticArticle.map((article) => (
                    <Article_1 key={article.id} article={article} />
                ))}
            </div>
        </div>
    )
}
