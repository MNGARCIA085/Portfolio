import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setArticle(jsonData[id]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="my-4">{article.title}</h1>
      <h3 className="text-muted">{article.topic}</h3>
      <p>{article.text}</p>
    </div>
  );
}

export default ArticleDetail;
