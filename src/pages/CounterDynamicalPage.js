import React from "react";
import Article from "../components/articles/counterdynamical/Article_1";
import articles from "../data/articles/CounterDynamical/article1";







export default function Counter_Dynamical() {


    const firstArticle = articles[0];



    return(
        <div id="dynamical-page-wrapper">
        <div id="dynamical-head-wrapper">
            <h1 id="dynamical-tagline">Counter-Dynamical</h1>
            <p id="dynamical-definition">"Strategies, actions, or mechanisms employed by an individual to actively engage with, reverse, or contradict the effects of imposed dynamical systems. These imposed dynamical systems could be cognitive, behavioral, or psychological patterns or states that are enforced by external entities or circumstances. <br/> <br/>The aim of a counter-dynamical system is to <span className="dynamical-emphasis">regain</span> autonomy, <span className="dynamical-emphasis">resist</span> unwanted influences, and <span className="dynamical-emphasis">promote</span> personal growth and well-being."
            </p>
        </div>
        <img id="" src={require('../assets/images/sacred-geometry-protected-individual-1.jpg')} alt=""/>
        <div>
        <Article key={firstArticle.id} article={firstArticle} />
        </div>

        </div>
    )
}
