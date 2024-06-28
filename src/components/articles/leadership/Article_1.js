import React from "react";

export default function Article_1({ article }) {
  const handleError = (e) => {
    e.target.src = '';
    alert("we got a problem, chief!"); // Handle image loading errors if needed
  };

  const renderParagraph = (paragraph, pIndex) => {
    if (paragraph.includes("Medium")) {
      return (
        <p key={pIndex}>
          {paragraph.split("Medium")[0]}
          <a href="https://medium.com/cum-grano-salis/the-self-authoring-suite-210846b4a682" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
          {paragraph.split("Medium")[1]}
        </p>
      );
    } else if (paragraph.includes("life authoring")) {
      return (
        <p key={pIndex}>
          {paragraph.split("life authoring")[0]}
          <a href="https://selfauthoring.com/" target="_blank" rel="noopener noreferrer">
            life authoring
          </a>
          {paragraph.split("life authoring")[1]}
        </p>
      );
    }
    return <p key={pIndex}>{paragraph}</p>;
  };

  return (
    <div id={`article-${article.id}`}>
      <h2 className="article-title">{article.title}</h2>
      <h3 className="article-date">{article.date}</h3>
      <img className="articleHeaderImage" src={article.headerImage.src} alt={article.headerImage.alt} onError={handleError} />

      {Object.keys(article).map((key, index) => {
        if (key.startsWith("paragraph")) {
          const paragraph = article[key];
          return (
            <div key={index}>
              <h3>{paragraph[`subheading_${index + 1}`]}</h3>
              {Object.keys(paragraph).filter(pKey => pKey.startsWith("subparagraph")).map((pKey, pIndex) => (
                renderParagraph(paragraph[pKey], pIndex)
              ))}
            </div>
          );
        } else if (key.startsWith("bodyImage")) {
          const image = article[key];
          return (
            <img key={index} className="bodyImage" src={image.src} alt={image.alt} onError={handleError} />
          );
        }
        return null;
      })}
    </div>
  );
}