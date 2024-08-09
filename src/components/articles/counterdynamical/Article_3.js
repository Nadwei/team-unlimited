import React from "react";

export default function Article_3({ article }) {
    const handleError = (e) => {
      e.target.src = '';
      alert("aye HEFE! NO BUENO! MUCHO PROBLEMAS AKI!"); // Handle image loading errors if needed
    };
  
    const renderParagraph = (paragraph) => {
      // indicate word within article to be hyperlinked, put it in the quotes below
      if (paragraph.includes("")) { 
        return (
          <p key={paragraph}>
              {/* adds hyperlink to text indicated above automatically, if it's detected. */}
            {paragraph.split("")[0]}
            <a href="" target="_blank" rel="noopener noreferrer">
              replace text here with 1st word to hyperlink, between the opening and closing a tags.
            </a>
              {/* put hyperlinked word in the quotes below */}
            {paragraph.split("")[1]}
          </p>
        );
      //   or if other word is found in paragraph, hyperlink that word by adding into quotes below..
      } else if (paragraph.includes("")) {
        return (
          <p key={paragraph}>
              {/* add word to link in quotes below again, then add the actual link in the a tag below it */}
            {paragraph.split("")[0]}
            <a href="" target="_blank" rel="noopener noreferrer">
            replace text here with 2nd word to hyperlink, between the opening and closing a tags.
            </a>
            {/* put hyperlinked word in the quotes below again */}
            {paragraph.split("")[1]}
          </p>
        );
      }
      return <p key={paragraph}>{paragraph}</p>;
    };
  
    return (
      <div id={`article-${article.id}`}>
        <h2 className="article-title">{article.title}</h2>
        <h3 className="article-date">{article.date}</h3>
        <img className="articleHeaderImage" src={article.headerImage.src} alt={article.headerImage.alt} onError={handleError} />
  
        {article.content.map((section, index) => (
          <div key={index}>
            {section.type === "text" && (
              <>
                <h3>{section.subheading}</h3>
                {section.subparagraphs.map((paragraph, pIndex) => (
                  renderParagraph(paragraph, pIndex)
                ))}
              </>
            )}
  
            {section.type === "image" && (
              <img className={section.className} src={section.src} alt={section.alt} onError={handleError} />
            )}
          </div>
        ))}
      </div>
    );
  }
