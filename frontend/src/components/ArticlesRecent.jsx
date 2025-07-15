import React from 'react'
import ArticleCard from './ArticleCard'
import ArticleFeatured from './ArticleFeatured';
import { useArticleStore } from '../stores/useArticleStore';
import { useState, useEffect, } from 'react';

const ArticlesRecent = () => {
    const articles = useArticleStore((state) => state.articles);
    const fetchAllArticles = useArticleStore((state) => state.fetchAllArticles);

    const [cardsPerView, setCardsPerView] = useState(3);

    const updateCardsPerView = () => {
        const width = window.innerWidth;
        if (width < 640) setCardsPerView(1);
        else if (width < 1024) setCardsPerView(2);
        else setCardsPerView(3);
    };

    useEffect(() => {
        fetchAllArticles();
        updateCardsPerView();
        window.addEventListener('resize', updateCardsPerView);
        return () => window.removeEventListener('resize', updateCardsPerView);
    }, [fetchAllArticles]);
    console.log("articles:", articles);
    console.log("break")
    return (
        <div>
            <h2 className='text-center text-primary mt-10 mb-5 text-3xl md:text-4xl lg:text-5xl font-semibold max-w-4xl justify-self-center'>Featured article</h2>
            <ArticleFeatured />
            <h2 className='text-center text-primary mt-10 text-3xl md:text-4xl lg:text-5xl font-semibold max-w-4xl justify-self-center'>More articles</h2>
            <div className="flex flex-row flex-wrap max-w-[100vw] md:max-w-[90vw] lg:max-w-[75vw] mx-auto py-10">
                {articles.slice(0, 6).filter(article => !article.isFeatured).map((article, index) => (
                    <div
                        key={index}
                        className="px-2 justify-items-center"
                        style={{ flex: `0 0 ${100 / cardsPerView}%`, maxWidth: `${100 / cardsPerView}%`, }}
                    >
                        <ArticleCard
                            id={article._id}
                            title={article.title}
                            subtitle={article.subtitle}
                            image={article.image || 'https://via.placeholder.com/300'}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticlesRecent
