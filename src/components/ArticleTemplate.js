import React from "react";

export default function Articles({ article }) {
  const handleError = (e) => {
    e.target.src = '';
    alert("we got a problem, cheif!") // Handle image loading errors if needed
  };

  return (
    <div id={`article-${article.id}`}>
      <h2>{article.title}</h2>
      <h3>{article.date}</h3>
      <img className="articleHeaderImage" src={article.headerImage.src} alt={article.headerImage.alt} onError={handleError} />

      <div>
        <h3>{article.paragraph1.subheading_1}</h3>
        <p>{article.paragraph1.subparagraph_1}</p>
        <p>{article.paragraph1.subparagraph_2}</p>
        
      </div>

      <div>
        <h3>{article.paragraph2.subheading_2}</h3>
        <p>{article.paragraph2.subparagraph_1}</p>
        <p>{article.paragraph2.subparagraph_2}</p>
        
      </div>

      <div>
      {article.bodyImage_1 && (
          <img className="bodyImg1" src={article.bodyImage_1.src} alt={article.bodyImage_1.alt} onError={handleError} />
        )}
        <h3>{article.paragraph3.subheading_3}</h3>
        <p>{article.paragraph3.subparagraph_1}</p>
        <p>{article.paragraph3.subparagraph_2}</p>
      </div>

      <div>
      
        <h3>{article.paragraph4.subheading_4}</h3>
        <p>{article.paragraph4.subparagraph_1}</p>
        <p>{article.paragraph4.subparagraph_2}</p>
        <p>{article.paragraph4.subparagraph_3}</p>
        <p>{article.paragraph4.subparagraph_4}</p>
      </div>

      <div>
      {article.bodyImage_2 && (
          <img className="bodyImg2" src={article.bodyImage_2.src} alt={article.bodyImage_2.alt} onError={handleError} />
        )}
        <h3>{article.paragraph5.subheading_5}</h3>
        <p>{article.paragraph5.subparagraph_1}</p>
        <p>{article.paragraph5.subparagraph_2}</p>
        <p>{article.paragraph5.subparagraph_3}</p>
      </div>
    </div>
  );
}
