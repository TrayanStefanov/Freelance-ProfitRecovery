import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArticleStore } from '../stores/useArticleStore';

const ArticleFull = () => {
  const { id } = useParams();
  const fetchArticleById = useArticleStore((state) => state.fetchArticleById);
  const article = useArticleStore((state) => state.currentArticle);
  const loading = useArticleStore((state) => state.loading);

  useEffect(() => {
    fetchArticleById(id);
  }, [id, fetchArticleById]);

  if (loading || !article) return <div className="text-center py-10">Loading article...</div>;

  return (
    <div className="max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto lg:p-6 rounded-lg bg-[linear-gradient(theme(colors.secondary),theme(colors.white))]">
      <img src={article.image} alt={article.title} className="w-[98vw] lg:w-[70vw] h-[40vh] lg:h-[60vh] object-cover rounded-lg mb-10 justify-self-center" />
      <h1 className="text-6xl font-semibold mb-2 mx-6">{article.title}</h1>
      <h2 className="text-2xl mb-4 indent-4 italic mx-6">{article.subtitle}</h2>
      <p className="text-lg leading-relaxed indent-4 mx-6 block whitespace-normal">{article.description}</p>
    </div>
  );
};

export default ArticleFull;
