import React from "react";

export default function Article_1({ article }) {
  const handleError = (e) => {
    e.target.src = '';
    alert("aye HEFE! NO BUENO! MUCHO PROBLEMAS AKI!"); // Handle image loading errors if needed
  };

  return (
    <div id={`article-${article.id}`}>
      <h2 className="article-title">{article.title}</h2>
      <h3 className="article-date">{article.date}</h3>
      <img
        className="articleHeaderImage"
        src={article.headerImage.src}
        alt={article.headerImage.alt}
        onError={handleError}
      />
      {article.content.map((section, index) => (
        <div key={index}>
          {section.type === "text" && (
            <>
              <h3>{section.subheading}</h3>
              {section.subparagraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </>
          )}
          {section.type === "image" && (
            <img
              className={section.className}
              src={section.src}
              alt={section.alt}
              onError={handleError}
            />
          )}
        </div>
      ))}
    </div>
  );
}
